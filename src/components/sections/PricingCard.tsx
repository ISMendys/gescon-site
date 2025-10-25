
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check } from 'lucide-react';
import Link from 'next/link';

interface PricingCardProps {
  name: string;
  badge?: string;
  price: string;
  priceRange?: string;
  priceTiers?: Array<{ range: string; price: string }>;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
  index: number;
}

export function PricingCard({
  name,
  badge,
  price,
  priceRange,
  priceTiers,
  description,
  features,
  cta,
  popular,
  index,
}: PricingCardProps) {
  return (
    <div
      className="h-full"
    >
      <Card
        className={`relative h-full flex flex-col ${
          popular
            ? 'border-[#e94560] border-2 shadow-xl scale-105'
            : 'border-gray-200 hover:border-gray-300'
        } transition-all duration-300`}
      >
        {/* Popular badge */}
        {badge && (
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <Badge className="bg-gradient-to-r from-[#e94560] to-[#ff5571] text-white px-4 py-1 text-sm">
              {badge}
            </Badge>
          </div>
        )}

        <CardHeader className="text-center pb-8 pt-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>

          {/* Price */}
          <div className="mb-4">
            {priceRange ? (
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-[#e94560] to-[#ff5571] bg-clip-text text-transparent">
                  {priceRange}
                </div>
                <div className="text-sm text-gray-500 mt-1">por mês</div>
              </div>
            ) : (
              <div className="text-4xl font-bold text-gray-900">
                {price}
                {price !== 'Grátis' && (
                  <span className="text-lg text-gray-500">/mês</span>
                )}
              </div>
            )}
          </div>

          {/* Tiers (for PRO plan) */}
          {priceTiers && (
            <div className="bg-gray-50 rounded-lg p-3 text-left space-y-1 text-xs">
              {priceTiers.map((tier) => (
                <div
                  key={tier.range}
                  className="flex justify-between text-gray-600"
                >
                  <span>{tier.range}:</span>
                  <span className="font-semibold text-gray-900">
                    {tier.price}
                  </span>
                </div>
              ))}
            </div>
          )}

          <p className="text-gray-600 mt-4">{description}</p>
        </CardHeader>

        <CardContent className="flex-grow">
          {/* Features list */}
          <ul className="space-y-3 mb-8">
            {features.map((feature, i) => (
              <li key={i} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <Link href={cta === 'Falar com Vendas' ? '/contato' : '/trial'}>
            <Button
              className={`w-full ${
                popular
                  ? 'bg-gradient-to-r from-[#e94560] to-[#ff5571] hover:from-[#ff5571] hover:to-[#e94560]'
                  : 'bg-gray-900 hover:bg-gray-800'
              }`}
              size="lg"
            >
              {cta}
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
