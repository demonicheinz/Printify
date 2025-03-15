```
printify/
├── public/
│   ├── images/
│   │   ├── logo.svg
│   │   └── favicon.ico
│   └── assets/
├── src/
│   ├── app/
│   │   ├── (auth)/
│   │   │   ├── login/
│   │   │   │   └── page.tsx
│   │   │   ├── register/
│   │   │   │   └── page.tsx
│   │   │   └── layout.tsx
│   │   ├── (dashboard)/
│   │   │   ├── dashboard/
│   │   │   │   └── page.tsx
│   │   │   ├── orders/
│   │   │   │   ├── [id]/
│   │   │   │   │   └── page.tsx
│   │   │   │   └── page.tsx
│   │   │   ├── settings/
│   │   │   │   └── page.tsx
│   │   │   └── layout.tsx
│   │   ├── (admin)/
│   │   │   ├── admin/
│   │   │   │   └── page.tsx
│   │   │   ├── manage-orders/
│   │   │   │   └── page.tsx
│   │   │   ├── manage-users/
│   │   │   │   └── page.tsx
│   │   │   └── layout.tsx
│   │   ├── (print)/
│   │   │   ├── create/
│   │   │   │   ├── layout-selection/
│   │   │   │   │   └── page.tsx
│   │   │   │   ├── photo-upload/
│   │   │   │   │   └── page.tsx
│   │   │   │   ├── preview/
│   │   │   │   │   └── page.tsx
│   │   │   │   ├── checkout/
│   │   │   │   │   └── page.tsx
│   │   │   │   └── layout.tsx
│   │   │   └── layout.tsx
│   │   ├── (info)/
│   │   │   ├── about/
│   │   │   │   └── page.tsx
│   │   │   ├── contact/
│   │   │   │   └── page.tsx
│   │   │   ├── faq/
│   │   │   │   └── page.tsx
│   │   │   ├── pricing/
│   │   │   │   └── page.tsx
│   │   │   └── layout.tsx
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── ui/
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   └── ... (shadcn components)
│   │   ├── layout/
│   │   │   ├── header.tsx
│   │   │   ├── footer.tsx
│   │   │   ├── sidebar.tsx
│   │   │   └── navigation.tsx
│   │   ├── forms/
│   │   │   ├── login-form.tsx
│   │   │   ├── register-form.tsx
│   │   │   └── order-form.tsx
│   │   ├── print/
│   │   │   ├── layout-selector.tsx
│   │   │   ├── photo-grid.tsx
│   │   │   ├── photo-uploader.tsx
│   │   │   ├── custom-size-input.tsx
│   │   │   └── preview-generator.tsx
│   │   ├── orders/
│   │   │   ├── order-card.tsx
│   │   │   ├── order-details.tsx
│   │   │   └── status-badge.tsx
│   │   └── common/
│   │       ├── loading-spinner.tsx
│   │       └── error-message.tsx
│   ├── lib/
│   │   ├── supabase/
│   │   │   ├── client.ts
│   │   │   ├── db-types.ts
│   │   │   └── server.ts
│   │   ├── utils/
│   │   │   ├── layout-calculator.ts
│   │   │   ├── image-processor.ts
│   │   │   └── format-helpers.ts
│   │   └── constants.ts
│   ├── hooks/
│   │   ├── use-auth.ts
│   │   ├── use-orders.ts
│   │   └── use-layout.ts
│   ├── types/
│   │   ├── order.ts
│   │   ├── user.ts
│   │   └── layout.ts
│   ├── actions/
│   │   ├── orders.ts
│   │   ├── auth.ts
│   │   └── images.ts
│   ├── config/
│   │   ├── site.ts
│   │   └── dashboard.ts
│   └── styles/
│       └── tailwind.css
├── .env.local
├── .gitignore
├── next.config.ts
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── README.md
```