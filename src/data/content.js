// Single source of truth for every string on the page, in both locales.
// Keeping EN and AR side by side makes it obvious when a translation is missing
// or when a number drifts between the two languages.

export const content = {
  en: {
    dir: 'ltr',
    langLabel: 'العربية',
    nav: [
      { id: 'features', label: 'Features' },
      { id: 'product', label: 'Product' },
      { id: 'solutions', label: 'Solutions' },
      { id: 'how-it-works', label: 'How it works' },
      { id: 'pricing', label: 'Pricing' },
      { id: 'faq', label: 'FAQ' },
    ],
    cta: { demo: 'Book a demo', explore: 'Explore the product' },
    hero: {
      badge: 'The operating system for modern clinics',
      titleTop: 'Run your entire clinic',
      titleAccent: 'from one screen',
      body: 'ClinicOS brings patient records, appointments, billing and reports into one fast, simple platform built for clinics in Egypt and the region.',
      imageAlt: 'Clinic reception desk lit with teal accent lighting',
      chips: {
        invoice: 'Invoice paid',
        record: 'Patient record updated',
        appointmentTitle: 'New appointment',
        appointmentTime: 'Today 11:30 AM',
      },
    },
    features: {
      eyebrow: 'Features',
      title: 'Everything your clinic needs, in one place',
      items: [
        { icon: 'users', title: 'Patient records', body: 'An organized medical file for every patient with history, visits and attachments.' },
        { icon: 'calendar', title: 'Appointments', body: 'A smart booking calendar that reduces conflicts and shows each doctor’s day.' },
        { icon: 'receipt', title: 'Billing & payments', body: 'Issue invoices and track payments and balances with ease.' },
        { icon: 'chart', title: 'Reports & analytics', body: 'Clear dashboards for revenue, visits and clinic performance.' },
        { icon: 'shield', title: 'Team permissions', body: 'Separate roles for doctors, reception and accounting.' },
        { icon: 'devices', title: 'Works on any device', body: 'A fast interface on desktop, tablet and mobile.' },
      ],
    },
    tour: {
      eyebrow: 'Product tour',
      title: 'One interface for every working day',
      disclaimer: 'Illustrative interface — not real data.',
      tabs: [
        {
          id: 'patients',
          label: 'Patients',
          heading: 'Patient list',
          rows: [
            { name: 'Ahmed Samir', tag: 'Follow-up' },
            { name: 'Mona Khaled', tag: 'New visit' },
            { name: 'Youssef Ali', tag: 'Lab tests' },
            { name: 'Sara Hassan', tag: 'Follow-up' },
          ],
        },
        {
          id: 'appointments',
          label: 'Appointments',
          heading: 'Today’s schedule',
          rows: [
            { name: '09:00 — Dr. Nour', tag: 'Confirmed' },
            { name: '10:30 — Dr. Nour', tag: 'Waiting' },
            { name: '12:00 — Dr. Omar', tag: 'Confirmed' },
            { name: '15:15 — Dr. Omar', tag: 'Rescheduled' },
          ],
        },
        {
          id: 'finance',
          label: 'Finance',
          heading: 'Recent invoices',
          rows: [
            { name: 'INV-2041 — Ahmed Samir', tag: 'Paid' },
            { name: 'INV-2042 — Mona Khaled', tag: 'Due' },
            { name: 'INV-2043 — Youssef Ali', tag: 'Paid' },
            { name: 'INV-2044 — Sara Hassan', tag: 'Partial' },
          ],
        },
        {
          id: 'reports',
          label: 'Reports',
          heading: 'This month',
          rows: [
            { name: 'Revenue', tag: '248,900 EGP' },
            { name: 'Visits', tag: '612' },
            { name: 'New patients', tag: '87' },
            { name: 'No-show rate', tag: '4.1%' },
          ],
        },
      ],
    },
    solutions: {
      eyebrow: 'Solutions',
      title: 'Built for every kind of clinic',
      body: 'Whether you see patients on your own or run several branches, ClinicOS adapts to the way your team already works — no long migration, no IT department required.',
      stats: [
        { value: '3 days', label: 'Average setup time' },
        { value: '1 screen', label: 'For the whole day’s work' },
      ],
      items: [
        { icon: 'stethoscope', title: 'Solo practices', body: 'Get started fast and manage appointments and patients without complexity.' },
        { icon: 'building', title: 'Multi-specialty centers', body: 'Separate schedules per doctor with unified management reports.' },
        { icon: 'smile', title: 'Dental & aesthetic clinics', body: 'Track sessions, treatment plans and staged payments.' },
      ],
    },
    steps: {
      eyebrow: 'How it works',
      title: 'Three steps to get started',
      items: [
        { title: 'Book a demo', body: 'We learn your clinic’s needs and walk you through the system.' },
        { title: 'We set you up', body: 'We configure your account and help migrate your data.' },
        { title: 'Start working', body: 'Your team uses ClinicOS from day one.' },
      ],
    },
    pricing: {
      eyebrow: 'Pricing',
      title: 'Simple, transparent plans',
      badge: 'Most popular',
      launchLabel: 'Launch price',
      regularLabel: 'Regular',
      perMonth: 'EGP / month',
      cta: 'Get started',
      note: 'Prices are preliminary and subject to confirmation.',
      plans: [
        {
          name: 'Bronze',
          price: '999',
          regular: '1,499 EGP',
          features: ['1 doctor', 'Patient records', 'Appointments', 'Basic billing'],
        },
        {
          name: 'Gold',
          price: '1,999',
          regular: '2,999 EGP',
          popular: true,
          features: ['Up to 3 doctors', 'Everything in Bronze', 'Reports & analytics', 'Team permissions'],
        },
        {
          name: 'Diamond',
          price: '3,999',
          regular: '5,999 EGP',
          features: ['More doctors', 'Everything in Gold', 'Multiple branches', 'Priority support'],
        },
      ],
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Have a question?',
      items: [
        { q: 'Do I need to install anything?', a: 'No, ClinicOS runs in the browser on any device.' },
        { q: 'Can you migrate my existing patient data?', a: 'Yes. We import your current records from Excel or from your previous system during setup.' },
        { q: 'Can I change my plan later?', a: 'Yes, you can upgrade or downgrade at any time and the difference is prorated.' },
        { q: 'Does it support Arabic?', a: 'Yes. The full interface works in Arabic and English with complete right-to-left support.' },
      ],
    },
    footer: {
      tagline: 'The modern clinic management system.',
      rights: '© 2026 ClinicOS. All rights reserved.',
    },
  },

  ar: {
    dir: 'rtl',
    langLabel: 'English',
    nav: [
      { id: 'features', label: 'المميزات' },
      { id: 'product', label: 'المنتج' },
      { id: 'solutions', label: 'الحلول' },
      { id: 'how-it-works', label: 'كيف يعمل' },
      { id: 'pricing', label: 'الأسعار' },
      { id: 'faq', label: 'الأسئلة' },
    ],
    cta: { demo: 'احجز عرضًا تجريبيًا', explore: 'استكشف المنتج' },
    hero: {
      badge: 'نظام تشغيل العيادات الحديثة',
      titleTop: 'أدِر عيادتك بالكامل',
      titleAccent: 'من شاشة واحدة',
      body: 'ClinicOS يجمع ملفات المرضى والمواعيد والفواتير والتقارير في منصة واحدة سهلة وسريعة، مصممة للعيادات في مصر والمنطقة.',
      imageAlt: 'مكتب استقبال عيادة بإضاءة تركوازية',
      chips: {
        invoice: 'فاتورة مدفوعة',
        record: 'ملف مريض محدَّث',
        appointmentTitle: 'موعد جديد',
        appointmentTime: 'اليوم 11:30 ص',
      },
    },
    features: {
      eyebrow: 'المميزات',
      title: 'كل ما تحتاجه عيادتك، في مكان واحد',
      items: [
        { icon: 'users', title: 'ملفات المرضى', body: 'سجل طبي منظم لكل مريض مع التاريخ المرضي والزيارات والمرفقات.' },
        { icon: 'calendar', title: 'إدارة المواعيد', body: 'تقويم ذكي للحجوزات يقلل التعارض ويوضح جدول كل طبيب.' },
        { icon: 'receipt', title: 'الفواتير والمدفوعات', body: 'إصدار الفواتير ومتابعة المدفوعات والمستحقات بسهولة.' },
        { icon: 'chart', title: 'التقارير والتحليلات', body: 'لوحات واضحة للإيرادات وعدد الزيارات وأداء العيادة.' },
        { icon: 'shield', title: 'صلاحيات الفريق', body: 'أدوار مختلفة للأطباء والاستقبال والمحاسبة.' },
        { icon: 'devices', title: 'يعمل من أي جهاز', body: 'واجهة سريعة على الكمبيوتر والتابلت والموبايل.' },
      ],
    },
    tour: {
      eyebrow: 'جولة في المنتج',
      title: 'واجهة واحدة لكل يوم عمل',
      disclaimer: 'واجهة توضيحية — ليست بيانات حقيقية.',
      tabs: [
        {
          id: 'patients',
          label: 'المرضى',
          heading: 'قائمة المرضى',
          rows: [
            { name: 'أحمد سمير', tag: 'زيارة متابعة' },
            { name: 'منى خالد', tag: 'كشف جديد' },
            { name: 'يوسف علي', tag: 'تحاليل' },
            { name: 'سارة حسن', tag: 'متابعة' },
          ],
        },
        {
          id: 'appointments',
          label: 'المواعيد',
          heading: 'جدول اليوم',
          rows: [
            { name: '09:00 — د. نور', tag: 'مؤكد' },
            { name: '10:30 — د. نور', tag: 'في الانتظار' },
            { name: '12:00 — د. عمر', tag: 'مؤكد' },
            { name: '15:15 — د. عمر', tag: 'تم التأجيل' },
          ],
        },
        {
          id: 'finance',
          label: 'المالية',
          heading: 'أحدث الفواتير',
          rows: [
            { name: 'INV-2041 — أحمد سمير', tag: 'مدفوعة' },
            { name: 'INV-2042 — منى خالد', tag: 'مستحقة' },
            { name: 'INV-2043 — يوسف علي', tag: 'مدفوعة' },
            { name: 'INV-2044 — سارة حسن', tag: 'دفع جزئي' },
          ],
        },
        {
          id: 'reports',
          label: 'التقارير',
          heading: 'هذا الشهر',
          rows: [
            { name: 'الإيرادات', tag: '248,900 ج.م' },
            { name: 'الزيارات', tag: '612' },
            { name: 'مرضى جدد', tag: '87' },
            { name: 'نسبة عدم الحضور', tag: '4.1%' },
          ],
        },
      ],
    },
    solutions: {
      eyebrow: 'الحلول',
      title: 'مناسب لكل نوع من العيادات',
      body: 'سواء كنت تعمل بمفردك أو تدير عدة فروع، يتكيف ClinicOS مع طريقة عمل فريقك الحالية — بدون نقل بيانات طويل وبدون فريق تقني.',
      stats: [
        { value: '3 أيام', label: 'متوسط مدة التجهيز' },
        { value: 'شاشة واحدة', label: 'لكل أعمال اليوم' },
      ],
      items: [
        { icon: 'stethoscope', title: 'العيادات الفردية', body: 'ابدأ بسرعة وأدِر مواعيدك ومرضاك بدون تعقيد.' },
        { icon: 'building', title: 'المراكز متعددة التخصصات', body: 'جداول منفصلة لكل طبيب وتقارير موحدة للإدارة.' },
        { icon: 'smile', title: 'عيادات الأسنان والتجميل', body: 'متابعة الجلسات والخطط العلاجية والمدفوعات على مراحل.' },
      ],
    },
    steps: {
      eyebrow: 'كيف يعمل',
      title: 'ثلاث خطوات للبدء',
      items: [
        { title: 'احجز عرضًا', body: 'نتعرف على احتياجات عيادتك ونعرض لك النظام.' },
        { title: 'نجهز حسابك', body: 'نضبط الإعدادات ونساعدك في نقل بياناتك.' },
        { title: 'ابدأ العمل', body: 'فريقك يبدأ استخدام ClinicOS من أول يوم.' },
      ],
    },
    pricing: {
      eyebrow: 'الأسعار',
      title: 'خطط بسيطة وواضحة',
      badge: 'الأكثر طلبًا',
      launchLabel: 'سعر الإطلاق',
      regularLabel: 'السعر العادي',
      perMonth: 'ج.م / شهريًا',
      cta: 'ابدأ الآن',
      note: 'الأسعار مبدئية وقابلة للتأكيد.',
      plans: [
        {
          name: 'البرونزي',
          price: '999',
          regular: '1,499 ج.م',
          features: ['طبيب واحد', 'ملفات المرضى', 'إدارة المواعيد', 'فواتير أساسية'],
        },
        {
          name: 'الذهبي',
          price: '1,999',
          regular: '2,999 ج.م',
          popular: true,
          features: ['حتى 3 أطباء', 'كل مميزات البرونزي', 'التقارير والتحليلات', 'صلاحيات الفريق'],
        },
        {
          name: 'الماسي',
          price: '3,999',
          regular: '5,999 ج.م',
          features: ['عدد أطباء أكبر', 'كل مميزات الذهبي', 'فروع متعددة', 'دعم أولوية'],
        },
      ],
    },
    faq: {
      eyebrow: 'الأسئلة الشائعة',
      title: 'عندك سؤال؟',
      items: [
        { q: 'هل أحتاج لتثبيت أي برنامج؟', a: 'لا، ClinicOS يعمل من المتصفح على أي جهاز.' },
        { q: 'هل يمكن نقل بيانات المرضى الحالية؟', a: 'نعم، نستورد سجلاتك الحالية من إكسل أو من نظامك السابق أثناء التجهيز.' },
        { q: 'هل يمكن تغيير الخطة لاحقًا؟', a: 'نعم، يمكنك الترقية أو التخفيض في أي وقت مع حساب الفرق بالتناسب.' },
        { q: 'هل يدعم النظام اللغة العربية؟', a: 'نعم، الواجهة بالكامل تعمل بالعربية والإنجليزية مع دعم كامل للاتجاه من اليمين إلى اليسار.' },
      ],
    },
    footer: {
      tagline: 'نظام إدارة العيادات الحديث.',
      rights: '© 2026 ClinicOS. جميع الحقوق محفوظة.',
    },
  },
}

export default content
