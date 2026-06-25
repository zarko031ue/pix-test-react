'use client';
import { CssBaseline, Box, Typography, Button, Divider } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

interface Plan {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted: boolean;
}

const PLANS: Plan[] = [
  {
    name: 'Free',
    price: '$0',
    description: 'Great for trying out Frames X component and templates.',
    features: ['Design Guidelines', '10 Web Components', '5 Web Templates', 'Component Properties', 'Advanced Security'],
    highlighted: false,
  },
  {
    name: 'Professional',
    price: '$20',
    description: 'Best for professional freelancers and small teams.',
    features: ['Everything in Free', '20 Web Components', '15 Web Templates', 'Variants & Properties', 'Enhanced Security'],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: '$99',
    description: 'Best for growing large company or enterprise design team.',
    features: ['Design System Foundation', '50 Web Components', '25 Web Templates', 'Variants & Properties', 'Priority Security'],
    highlighted: false,
  },
];

export default function PricingPage() {
  return (
    <>
      <CssBaseline />
      <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', py: 8, px: 3 }}>
        <Box sx={{ maxWidth: 1352, width: '100%' }}>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h1" sx={{ color: 'text.primary', fontWeight: 700, fontSize: 48, lineHeight: 1.1, mb: 2.5 }}>
              Simple and affordable pricing for FE developers
            </Typography>
            <Typography sx={{ color: 'text.secondary', fontSize: 20, fontWeight: 400 }}>
              Star building your best product today
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: 'stretch',
              gap: 3,
            }}
          >
            {PLANS.map((plan) => (
              <article key={plan.name} style={{ flex: 1 }}>
                <Box
                  sx={{
                    bgcolor: 'background.paper',
                    border: plan.highlighted ? '2px solid' : '1px solid',
                    borderColor: plan.highlighted ? 'primary.main' : 'divider',
                    borderRadius: (t) => `${t.tokens.radius.lg}px`,
                    p: 3,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 4,
                    boxSizing: 'border-box',
                  }}
                >
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <Typography
                      sx={{
                        fontSize: 20,
                        fontWeight: 600,
                        color: plan.highlighted ? 'primary.main' : 'text.primary',
                      }}
                    >
                      {plan.name}
                    </Typography>

                    <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 0.5 }}>
                      <Typography sx={{ fontSize: 36, fontWeight: 700, color: 'text.primary', lineHeight: 1 }}>
                        {plan.price}
                      </Typography>
                      <Typography sx={{ fontSize: 18, fontWeight: 400, color: 'text.primary' }}>
                        /per month
                      </Typography>
                    </Box>

                    <Typography sx={{ fontSize: 18, fontWeight: 400, color: 'text.secondary', minHeight: 56 }}>
                      {plan.description}
                    </Typography>

                    <Button
                      variant="contained"
                      fullWidth
                      sx={{
                        bgcolor: plan.highlighted ? 'primary.main' : 'secondary.main',
                        color: 'primary.contrastText',
                        fontSize: 18,
                        fontWeight: 600,
                        height: 45,
                        borderRadius: (t) => `${t.tokens.radius.sm}px`,
                        textTransform: 'none',
                        '&:hover': {
                          bgcolor: plan.highlighted ? 'primary.dark' : 'secondary.dark',
                        },
                      }}
                    >
                      Get Started
                    </Button>
                  </Box>

                  <Divider sx={{ borderStyle: 'dashed', borderColor: 'divider' }} />

                  <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0, display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                    {plan.features.map((feature) => (
                      <Box component="li" key={feature} sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                        <Box
                          sx={{
                            width: 32,
                            height: 32,
                            bgcolor: 'background.default',
                            borderRadius: (t) => `${t.tokens.radius.xs}px`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                          }}
                        >
                          <CheckIcon sx={{ color: 'success.main', fontSize: 18 }} />
                        </Box>
                        <Typography sx={{ fontSize: 18, fontWeight: 500, color: 'text.primary' }}>
                          {feature}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </article>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
}