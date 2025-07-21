import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { products } from '@/stripe-config';

interface SubscriptionData {
  subscription_status: string;
  price_id: string | null;
  current_period_end: number | null;
  cancel_at_period_end: boolean;
}

export const SubscriptionStatus = () => {
  const [subscription, setSubscription] = useState<SubscriptionData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSubscription = async () => {
      try {
        const { data, error } = await supabase
          .from('stripe_user_subscriptions')
          .select('subscription_status, price_id, current_period_end, cancel_at_period_end')
          .maybeSingle();

        if (error) {
          console.error('Error fetching subscription:', error);
          return;
        }

        setSubscription(data);
      } catch (error) {
        console.error('Error fetching subscription:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSubscription();
  }, []);

  if (loading) {
    return (
      <Card className="bg-[#1a1a1a] border-[#262626]">
        <CardContent className="p-4">
          <div className="animate-pulse">
            <div className="h-4 bg-[#262626] rounded w-1/2 mb-2"></div>
            <div className="h-3 bg-[#262626] rounded w-3/4"></div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!subscription || subscription.subscription_status === 'not_started') {
    return (
      <Card className="bg-[#1a1a1a] border-[#262626]">
        <CardHeader>
          <CardTitle className="text-white text-sm">Subscription Status</CardTitle>
        </CardHeader>
        <CardContent>
          <Badge variant="secondary">No Active Subscription</Badge>
        </CardContent>
      </Card>
    );
  }

  const product = products.find(p => p.priceId === subscription.price_id);
  const isActive = subscription.subscription_status === 'active';
  const isPastDue = subscription.subscription_status === 'past_due';
  const isCanceled = subscription.subscription_status === 'canceled';

  const getStatusColor = () => {
    if (isActive) return 'default';
    if (isPastDue) return 'destructive';
    if (isCanceled) return 'secondary';
    return 'secondary';
  };

  const formatDate = (timestamp: number) => {
    return new Date(timestamp * 1000).toLocaleDateString();
  };

  return (
    <Card className="bg-[#1a1a1a] border-[#262626]">
      <CardHeader>
        <CardTitle className="text-white text-sm">Subscription Status</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-[#717179] text-sm">Plan:</span>
          <span className="text-white text-sm">{product?.name || 'Unknown'}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-[#717179] text-sm">Status:</span>
          <Badge variant={getStatusColor()}>
            {subscription.subscription_status.replace('_', ' ').toUpperCase()}
          </Badge>
        </div>
        {subscription.current_period_end && (
          <div className="flex items-center justify-between">
            <span className="text-[#717179] text-sm">
              {subscription.cancel_at_period_end ? 'Ends:' : 'Renews:'}
            </span>
            <span className="text-white text-sm">
              {formatDate(subscription.current_period_end)}
            </span>
          </div>
        )}
        {subscription.cancel_at_period_end && (
          <div className="text-yellow-500 text-xs">
            Subscription will end at period end
          </div>
        )}
      </CardContent>
    </Card>
  );
};