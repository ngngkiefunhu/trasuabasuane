import {useEffect, useState} from 'react';
import {motion} from 'motion/react';
import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  CheckCircle2,
  ChevronRight,
  Compass,
  Menu,
  Presentation,
  ShieldAlert,
  Sparkles,
  X,
} from 'lucide-react';
import {
  BUSINESS_IDEA_DETAILS,
  BUSINESS_OPPORTUNITIES,
  CLOSING_POINTS,
  COMPETENCIES,
  FEASIBILITY_FACTORS,
  PROJECT_META,
  RISKS_AND_SOLUTIONS,
  ROADMAP_STEPS,
  SWOT_MATRIX,
  THEORY_DISTINCTION,
} from './data/projectData';
import {ResilientImage} from './components/ResilientImage';
import {CapitalChart} from './components/CapitalChart';
import {PresentationModal} from './components/PresentationModal';

const NAV_LINKS = [
  {href: '#y-tuong', label: 'Ý tưởng'},
  {href: '#co-hoi', label: 'Cơ hội'},
  {href: '#kha-thi', label: 'Tính khả thi'},
  {href: '#nang-luc', label: 'Năng lực'},
  {href: '#ke-hoach', label: 'Kế hoạch & Vốn'},
];

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [presentationOpen, setPresentationOpen] = useState(false);
  const [feasibilityTab, setFeasibilityTab] = useState<'factors' | 'swot'>('factors');
  const [selectedSwotKey, setSelectedSwotKey] = useState<'S' | 'W' | 'O' | 'T'>('S');
  const [activeCompetencyId, setActiveCompetencyId] = useState<string>(COMPETENCIES[0].id);
  const [competencyViewMode, setCompetencyViewMode] = useState<'explorer' | 'all'>('explorer');
  const [activeStepId, setActiveStepId] = useState<string>(ROADMAP_STEPS[0].id);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowBackToTop(window.scrollY > 480);
    };
    window.addEventListener('scroll', onScroll, {passive: true});
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const activeCompetency =
    COMPETENCIES.find((item) => item.id === activeCompetencyId) ?? COMPETENCIES[0];
  const activeStep = ROADMAP_STEPS.find((item) => item.id === activeStepId) ?? ROADMAP_STEPS[0];
  const activeSwot = SWOT_MATRIX.find((item) => item.key === selectedSwotKey) ?? SWOT_MATRIX[0];

  const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  return (
    <div className="min-h-screen bg-[#FBF8F4] text-[#3D2518] flex flex-col">
      {/* Top Navigation Bar (Strict 3-Zone Contract) */}
      <header className="sticky top-0 z-40 bg-[#FBF8F4]/95 backdrop-blur-sm border-b border-[#E8DDD1]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
          {/* Zone 1: Single-line Brand Wordmark */}
          <a
            href="#trang-bia"
            className="font-editorial text-xl font-bold tracking-tight text-[#3D2518] whitespace-nowrap shrink-0"
          >
            BA SỮA
          </a>

          {/* Zone 2: Concise single-line navigation links */}
          <nav
            className="hidden md:flex items-center gap-6 text-sm font-medium text-[#6E5243]"
            aria-label="Điều hướng nội dung dự án"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-[#3D2518] underline-offset-4 hover:underline transition-colors whitespace-nowrap shrink-0"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 Primary Action (+ Mobile menu button on small screens) */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => setPresentationOpen(true)}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-medium text-white bg-[#6B4229] hover:bg-[#52311D] rounded-xl transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              <Presentation className="w-4 h-4" />
              <span>Trình chiếu</span>
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl border border-[#E8DDD1] bg-white text-[#3D2518] cursor-pointer"
              aria-label="Mở menu điều hướng"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer Navigation */}
        {mobileMenuOpen && (
          <nav
            className="md:hidden bg-white border-b border-[#E8DDD1] px-4 py-3 space-y-1"
            aria-label="Menu di động"
          >
            {[
              ...NAV_LINKS,
              {href: '#rui-ro', label: 'Rủi ro & Giải pháp'},
              {href: '#tong-ket', label: 'Tổng kết'},
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 text-sm font-medium text-[#3D2518] hover:bg-[#F5EFE7] rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}
      </header>

      <main className="flex-1">
        {/* PHẦN 1. TRANG BÌA – GIỚI THIỆU DỰ ÁN */}
        <section id="trang-bia" className="pt-8 pb-14 lg:pt-12 lg:pb-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{opacity: 0, y: 12}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.45, ease: [0.16, 1, 0.3, 1]}}
              className="bg-white border border-[#E8DDD1] rounded-3xl p-6 sm:p-10 lg:p-12"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
                {/* Left Column: Corner Logo, Title, Slogan, Author, Primary CTA */}
                <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
                  <div className="space-y-6">
                    {/* Uploaded Real Logo in Top-Left Corner */}
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border border-[#E8DDD1] bg-[#FDF2F4] shrink-0 shadow-xs">
                        <ResilientImage
                          src={PROJECT_META.logoImage}
                          alt="Logo thương hiệu BA SỮA"
                          fallbackTitle="BA SỮA"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="text-xs sm:text-sm text-[#6E5243] space-y-1">
                        <div className="font-semibold text-[#3D2518]">
                          Logo thương hiệu BA SỮA
                        </div>
                        <div>
                          {PROJECT_META.subject} · Bài 6 · Thuyết trình dự án
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h1 className="font-editorial text-3xl sm:text-4xl lg:text-[3.1rem] font-semibold text-[#3D2518] leading-[1.15] tracking-tight text-balance">
                        {PROJECT_META.projectTitle}
                      </h1>
                      <p className="font-editorial italic text-xl sm:text-2xl text-[#8B5A3C]">
                        “{PROJECT_META.slogan}”
                      </p>
                      <p className="text-sm sm:text-base text-[#6E5243] leading-relaxed max-w-2xl">
                        Website thuyết trình phân tích ý tưởng kinh doanh, cơ hội thị trường và 7 năng lực cốt lõi của người kinh doanh theo nội dung Bài 6 — không phải website thương mại điện tử hay bán hàng trực tuyến.
                      </p>
                    </div>
                  </div>

                  {/* Author Credit & Primary CTA */}
                  <div className="pt-4 border-t border-[#E8DDD1] flex flex-col sm:flex-row sm:items-center justify-between gap-5">
                    <div className="text-sm text-[#6E5243]">
                      <div>Người thực hiện</div>
                      <div className="font-semibold text-[#3D2518] mt-0.5">
                        {PROJECT_META.author} · {PROJECT_META.className}
                      </div>
                    </div>

                    <a
                      href="#y-tuong"
                      className="inline-flex items-center justify-center gap-2.5 px-6 py-3 text-sm font-medium text-white bg-[#6B4229] hover:bg-[#52311D] rounded-xl transition-colors whitespace-nowrap shrink-0"
                    >
                      <span>Bắt đầu khám phá dự án</span>
                      <ArrowDown className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Right Column: Large Signature Milk Tea Cup Focal Visual */}
                <div className="lg:col-span-5 flex">
                  <div className="relative w-full min-h-[340px] lg:min-h-[460px] rounded-2xl overflow-hidden border border-[#E8DDD1] bg-[#FDF2F4]">
                    <ResilientImage
                      src={PROJECT_META.heroCupImage}
                      alt="Ly trà sữa trân châu đường đen kem sữa BA SỮA"
                      fallbackTitle="Tiệm Trà Sữa BA SỮA"
                      className="w-full h-full object-cover lg:absolute lg:inset-0"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#2A180F]/85 via-[#2A180F]/40 to-transparent p-5 text-white">
                      <div className="text-xs text-[#F5D6DF]">Hình ảnh minh họa dự án</div>
                      <div className="font-editorial text-lg font-medium mt-0.5">
                        Trà sữa kem sữa BA SỮA
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Full-width 3-Pillar Bài 6 Distinction Strip */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              {THEORY_DISTINCTION.map((item) => (
                <div
                  key={item.code}
                  className="bg-white border border-[#E8DDD1] rounded-2xl p-5 hover:border-[#C9AE98] transition-colors"
                >
                  <div className="flex items-baseline justify-between gap-2 mb-2">
                    <h2 className="font-sans text-base font-semibold text-[#3D2518]">
                      {item.term}
                    </h2>
                    <span className="font-mono text-xs text-[#8B5A3C]">{item.code}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#6E5243] leading-relaxed">
                    {item.definition}
                  </p>
                  <div className="mt-3 pt-3 border-t border-[#F1E8DE] text-xs text-[#3D2518]">
                    <span className="font-semibold text-[#8B5A3C]">Tại BA SỮA: </span>
                    {item.inBaSua}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PHẦN 2. HÌNH THÀNH Ý TƯỞNG KINH DOANH */}
        <section id="y-tuong" className="py-14 lg:py-20 border-t border-[#E8DDD1] bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-10">
              <div className="text-xs font-medium text-[#8B5A3C]">
                Phần 02 · Nền tảng dự án
              </div>
              <h2 className="font-editorial text-3xl sm:text-4xl font-semibold text-[#3D2518] mt-1 text-balance">
                Hình thành ý tưởng kinh doanh
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              <div className="lg:col-span-7 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="p-6 bg-[#FBF8F4] border border-[#E8DDD1] rounded-2xl space-y-2.5">
                    <h3 className="font-semibold text-base text-[#3D2518]">
                      Ý tưởng kinh doanh là gì?
                    </h3>
                    <p className="text-sm text-[#6E5243] leading-relaxed">
                      {BUSINESS_IDEA_DETAILS.whatIsIdea}
                    </p>
                  </div>

                  <div className="p-6 bg-[#FDF2F4] border border-[#E8DDD1] rounded-2xl space-y-2.5">
                    <h3 className="font-semibold text-base text-[#3D2518]">
                      BA SỮA kinh doanh sản phẩm gì?
                    </h3>
                    <p className="text-sm text-[#6E5243] leading-relaxed">
                      {BUSINESS_IDEA_DETAILS.whatBaSuaOffers}
                    </p>
                  </div>
                </div>

                <div className="p-6 bg-[#FBF8F4] border border-[#E8DDD1] rounded-2xl space-y-2.5">
                  <h3 className="font-semibold text-base text-[#3D2518]">
                    Nguồn gốc hình thành ý tưởng
                  </h3>
                  <p className="text-sm text-[#6E5243] leading-relaxed">
                    {BUSINESS_IDEA_DETAILS.origin}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                  <div className="space-y-3">
                    <h3 className="font-semibold text-base text-[#3D2518]">
                      Vấn đề và nhu cầu thực tế
                    </h3>
                    <ul className="space-y-2.5 text-sm text-[#6E5243] leading-relaxed">
                      {BUSINESS_IDEA_DETAILS.problemsAndNeeds.map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <ChevronRight className="w-4 h-4 text-[#8B5A3C] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-semibold text-base text-[#3D2518]">
                      Mục tiêu của mô hình kinh doanh
                    </h3>
                    <ul className="space-y-2.5 text-sm text-[#6E5243] leading-relaxed">
                      {BUSINESS_IDEA_DETAILS.objectives.map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-[#8B5A3C] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col justify-between gap-4">
                <div className="flex-1 min-h-[280px] rounded-2xl overflow-hidden border border-[#E8DDD1] bg-[#F5EFE7]">
                  <ResilientImage
                    src={PROJECT_META.trioImage}
                    alt="Ba dòng hương vị trà sữa đặc trưng minh họa cho mô hình BA SỮA"
                    fallbackTitle="Bộ Sưu Tập Hương Vị BA SỮA"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 bg-[#F5EFE7] border border-[#E8DDD1] rounded-2xl">
                  <div className="text-xs font-semibold text-[#8B5A3C]">
                    Định vị cốt lõi của tên gọi “BA SỮA”
                  </div>
                  <p className="mt-1.5 text-sm text-[#3D2518] leading-relaxed">
                    Cân bằng 3 yếu tố: <strong className="font-semibold">Vị trà thanh</strong>,{' '}
                    <strong className="font-semibold">Sữa dịu nhẹ</strong> và{' '}
                    <strong className="font-semibold">Giá hợp lý</strong> dành cho học sinh, sinh viên.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PHẦN 3. PHÂN TÍCH CƠ HỘI KINH DOANH */}
        <section id="co-hoi" className="py-14 lg:py-20 border-t border-[#E8DDD1] bg-[#FBF8F4]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
              <div className="max-w-2xl">
                <div className="text-xs font-medium text-[#8B5A3C]">
                  Phần 03 · Điều kiện thuận lợi
                </div>
                <h2 className="font-editorial text-3xl sm:text-4xl font-semibold text-[#3D2518] mt-1 text-balance">
                  Phân tích cơ hội kinh doanh
                </h2>
              </div>
              <p className="text-sm text-[#6E5243] max-w-md leading-relaxed">
                Khác với ý tưởng (điều mình nghĩ ra), cơ hội kinh doanh là những yếu tố thuận lợi thực tế giúp mô hình BA SỮA có thể triển khai hiệu quả.
              </p>
            </div>

            {/* Asymmetric Bento Grid for 5 Opportunity Cards */}
            <div className="grid grid-cols-1 md:grid-cols-6 gap-5">
              {BUSINESS_OPPORTUNITIES.map((item, idx) => {
                const colSpanClass = idx < 2 ? 'md:col-span-3' : 'md:col-span-2';
                const cardBg = idx === 3 ? 'bg-[#FDF2F4]' : 'bg-white';
                return (
                  <article
                    key={item.id}
                    className={`${colSpanClass} ${cardBg} border border-[#E8DDD1] rounded-2xl p-6 transition-all duration-200 hover:-translate-y-1 hover:border-[#B58D72]`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="font-mono text-xs font-semibold text-[#8B5A3C]">
                        {item.index}
                      </span>
                      <span className="text-xs text-[#6E5243]">{item.indicator}</span>
                    </div>
                    <h3 className="font-sans text-lg font-semibold text-[#3D2518]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm font-medium text-[#3D2518]/90 leading-relaxed">
                      {item.summary}
                    </p>
                    <p className="mt-2.5 text-sm text-[#6E5243] leading-relaxed">
                      {item.analysis}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* PHẦN 4. TÍNH KHẢ THI CỦA Ý TƯỞNG */}
        <section id="kha-thi" className="py-14 lg:py-20 border-t border-[#E8DDD1] bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
              <div>
                <div className="text-xs font-medium text-[#8B5A3C]">
                  Phần 04 · Đánh giá khách quan
                </div>
                <h2 className="font-editorial text-3xl sm:text-4xl font-semibold text-[#3D2518] mt-1 text-balance">
                  Tính khả thi của ý tưởng
                </h2>
              </div>

              {/* Segmented Switcher */}
              <div
                className="inline-flex items-center gap-1 p-1 bg-[#F5EFE7] border border-[#E8DDD1] rounded-xl self-start"
                role="tablist"
                aria-label="Chọn góc nhìn tính khả thi"
              >
                <button
                  type="button"
                  role="tab"
                  aria-selected={feasibilityTab === 'factors'}
                  onClick={() => setFeasibilityTab('factors')}
                  className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                    feasibilityTab === 'factors'
                      ? 'bg-white text-[#3D2518] shadow-xs'
                      : 'text-[#6E5243] hover:text-[#3D2518]'
                  }`}
                >
                  6 Yếu tố khả thi
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={feasibilityTab === 'swot'}
                  onClick={() => setFeasibilityTab('swot')}
                  className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                    feasibilityTab === 'swot'
                      ? 'bg-white text-[#3D2518] shadow-xs'
                      : 'text-[#6E5243] hover:text-[#3D2518]'
                  }`}
                >
                  Điểm mạnh & Thách thức
                </button>
              </div>
            </div>

            {feasibilityTab === 'factors' ? (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {FEASIBILITY_FACTORS.map((factor) => (
                    <div
                      key={factor.id}
                      className="p-5 bg-[#FBF8F4] border border-[#E8DDD1] rounded-2xl hover:border-[#B58D72] transition-colors space-y-2.5"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="font-semibold text-sm sm:text-base text-[#3D2518]">
                          {factor.title}
                        </h3>
                      </div>
                      <div className="text-xs font-medium text-[#8B5A3C]">
                        Đánh giá: {factor.assessment}
                      </div>
                      <p className="text-sm text-[#6E5243] leading-relaxed">{factor.detail}</p>
                      <div className="pt-2 border-t border-[#E8DDD1] text-xs text-[#3D2518]">
                        <span className="font-medium">Căn cứ: </span>
                        {factor.evidenceInModel}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="lg:col-span-4 space-y-4">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-[#E8DDD1] bg-[#F5EFE7]">
                    <ResilientImage
                      src={PROJECT_META.ingredientsImage}
                      alt="Nguyên liệu pha chế trà sữa tự nhiên: lá trà, sữa tươi, trân châu và dâu tây"
                      fallbackTitle="Nguồn Nguyên Liệu BA SỮA"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-5 bg-[#FDF2F4] border border-[#E8DDD1] rounded-2xl space-y-2">
                    <h3 className="font-semibold text-sm text-[#3D2518]">
                      Kết luận tính khả thi
                    </h3>
                    <p className="text-xs sm:text-sm text-[#6E5243] leading-relaxed">
                      Ý tưởng BA SỮA có tính khả thi cao ở quy mô dự án học đường nhờ vốn đầu tư gọn nhẹ, nguồn nguyên liệu phổ biến và nhu cầu thực tế ổn định từ học sinh.
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {SWOT_MATRIX.map((quad) => {
                    const isSelected = quad.key === selectedSwotKey;
                    return (
                      <button
                        key={quad.key}
                        type="button"
                        onClick={() => setSelectedSwotKey(quad.key)}
                        className={`text-left p-6 rounded-2xl border transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-[#FDF2F4] border-[#8B5A3C]'
                            : 'bg-[#FBF8F4] border-[#E8DDD1] hover:border-[#B58D72]'
                        }`}
                      >
                        <div className="mb-3">
                          <span className="font-semibold text-base text-[#3D2518]">
                            {quad.vietnameseTitle}
                          </span>
                        </div>
                        <ul className="space-y-2 text-sm text-[#6E5243]">
                          {quad.points.map((pt) => (
                            <li key={pt} className="leading-relaxed">
                              · {pt}
                            </li>
                          ))}
                        </ul>
                      </button>
                    );
                  })}
                </div>

                <div className="lg:col-span-4 p-6 bg-[#F5EFE7] border border-[#E8DDD1] rounded-2xl space-y-4">
                  <div className="text-xs font-medium text-[#8B5A3C]">
                    Định hướng xử lý
                  </div>
                  <h3 className="font-editorial text-2xl font-semibold text-[#3D2518]">
                    {activeSwot.vietnameseTitle}
                  </h3>
                  <p className="text-sm text-[#3D2518] leading-relaxed">{activeSwot.takeaway}</p>
                  <div className="pt-3 border-t border-[#DFD1C2] text-xs text-[#6E5243]">
                    Chọn từng ô bên cạnh để xem hướng xử lý tương ứng cho mô hình BA SỮA.
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* PHẦN 5. CÁC NĂNG LỰC CẦN THIẾT CỦA NGƯỜI KINH DOANH (TRỌNG TÂM BÀI 6) */}
        <section id="nang-luc" className="py-14 lg:py-20 border-t border-[#E8DDD1] bg-[#FBF8F4]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
              <div className="max-w-2xl">
                <div className="text-xs font-medium text-[#8B5A3C]">
                  Phần 05 · Trọng tâm kiến thức Bài 6
                </div>
                <h2 className="font-editorial text-3xl sm:text-4xl font-semibold text-[#3D2518] mt-1 text-balance">
                  7 Năng lực cần thiết của người kinh doanh
                </h2>
              </div>

              <div
                className="inline-flex items-center gap-1 p-1 bg-white border border-[#E8DDD1] rounded-xl self-start"
                role="group"
                aria-label="Chế độ xem năng lực"
              >
                <button
                  type="button"
                  onClick={() => setCompetencyViewMode('explorer')}
                  className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                    competencyViewMode === 'explorer'
                      ? 'bg-[#6B4229] text-white'
                      : 'text-[#6E5243] hover:text-[#3D2518]'
                  }`}
                >
                  Khám phá chi tiết
                </button>
                <button
                  type="button"
                  onClick={() => setCompetencyViewMode('all')}
                  className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                    competencyViewMode === 'all'
                      ? 'bg-[#6B4229] text-white'
                      : 'text-[#6E5243] hover:text-[#3D2518]'
                  }`}
                >
                  Xem tất cả 7 năng lực
                </button>
              </div>
            </div>

            {competencyViewMode === 'explorer' ? (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                {/* Left Selector List */}
                <div className="lg:col-span-5 flex flex-col gap-2.5">
                  {COMPETENCIES.map((item) => {
                    const isActive = item.id === activeCompetencyId;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setActiveCompetencyId(item.id)}
                        className={`w-full text-left px-5 py-3.5 rounded-2xl border transition-all flex items-center justify-between gap-4 cursor-pointer ${
                          isActive
                            ? 'bg-white border-[#8B5A3C] shadow-xs'
                            : 'bg-[#F5EFE7]/70 border-[#E8DDD1] hover:bg-white'
                        }`}
                      >
                        <div className="flex items-center gap-3.5 min-w-0">
                          <span
                            className={`font-mono text-xs font-semibold shrink-0 ${
                              isActive ? 'text-[#8B5A3C]' : 'text-[#6E5243]'
                            }`}
                          >
                            {item.index}
                          </span>
                          <span className="font-semibold text-sm sm:text-base text-[#3D2518] truncate">
                            {item.title}
                          </span>
                        </div>
                        <ArrowRight
                          className={`w-4 h-4 shrink-0 transition-transform ${
                            isActive ? 'text-[#8B5A3C] translate-x-0.5' : 'text-[#B5A08E]'
                          }`}
                        />
                      </button>
                    );
                  })}
                </div>

                {/* Right Detail Panel */}
                <div className="lg:col-span-7 bg-white border border-[#E8DDD1] rounded-3xl p-6 sm:p-10 flex flex-col justify-between space-y-6">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between gap-4 pb-5 border-b border-[#E8DDD1]">
                      <div>
                        <div className="font-mono text-xs text-[#8B5A3C]">
                          Năng lực {activeCompetency.index} / 07
                        </div>
                        <h3 className="font-editorial text-2xl sm:text-3xl font-semibold text-[#3D2518] mt-1">
                          {activeCompetency.title}
                        </h3>
                      </div>
                      <Compass className="w-7 h-7 text-[#D98299] shrink-0" strokeWidth={1.6} />
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-xs font-semibold tracking-wide text-[#8B5A3C]">
                        1. Khái niệm ngắn gọn
                      </h4>
                      <p className="text-sm sm:text-base text-[#3D2518] leading-relaxed">
                        {activeCompetency.concept}
                      </p>
                    </div>

                    <div className="p-5 bg-[#FBF8F4] border border-[#E8DDD1] rounded-2xl space-y-2">
                      <h4 className="text-xs font-semibold tracking-wide text-[#8B5A3C]">
                        2. Biểu hiện cụ thể trong mô hình BA SỮA
                      </h4>
                      <p className="text-sm text-[#6E5243] leading-relaxed">
                        {activeCompetency.manifestation}
                      </p>
                    </div>

                    <div className="p-5 bg-[#FDF2F4] border border-[#E8DDD1] rounded-2xl space-y-2">
                      <h4 className="text-xs font-semibold tracking-wide text-[#B85C75]">
                        3. Ví dụ thực tế minh họa
                      </h4>
                      <p className="text-sm text-[#3D2518] leading-relaxed">
                        {activeCompetency.example}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-[#E8DDD1] text-xs text-[#6E5243]">
                    <span>Chọn từng năng lực bên trái để thuyết trình trực tiếp</span>
                    <button
                      type="button"
                      onClick={() => {
                        const currentIdx = COMPETENCIES.findIndex(
                          (c) => c.id === activeCompetencyId,
                        );
                        const nextIdx = (currentIdx + 1) % COMPETENCIES.length;
                        setActiveCompetencyId(COMPETENCIES[nextIdx].id);
                      }}
                      className="font-semibold text-[#6B4229] hover:underline cursor-pointer"
                    >
                      Năng lực tiếp theo →
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {COMPETENCIES.map((item) => (
                  <article
                    key={item.id}
                    className="bg-white border border-[#E8DDD1] rounded-2xl p-6 space-y-4 hover:border-[#B58D72] transition-colors"
                  >
                    <div className="flex items-baseline justify-between gap-2 pb-3 border-b border-[#F1E8DE]">
                      <h3 className="font-editorial text-xl font-semibold text-[#3D2518]">
                        {item.title}
                      </h3>
                      <span className="font-mono text-xs font-semibold text-[#8B5A3C]">
                        {item.index}
                      </span>
                    </div>
                    <div className="space-y-3 text-sm leading-relaxed">
                      <div>
                        <span className="font-semibold text-[#3D2518]">Khái niệm: </span>
                        <span className="text-[#6E5243]">{item.concept}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-[#3D2518]">Tại BA SỮA: </span>
                        <span className="text-[#6E5243]">{item.manifestation}</span>
                      </div>
                      <div className="p-3.5 bg-[#FDF2F4] rounded-xl text-xs sm:text-sm text-[#3D2518]">
                        {item.example}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* PHẦN 6. KẾ HOẠCH TRIỂN KHAI MÔ HÌNH */}
        <section id="ke-hoach" className="py-14 lg:py-20 border-t border-[#E8DDD1] bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-10">
              <div className="text-xs font-medium text-[#8B5A3C]">
                Phần 06 · Lộ trình thực hiện
              </div>
              <h2 className="font-editorial text-3xl sm:text-4xl font-semibold text-[#3D2518] mt-1 text-balance">
                Kế hoạch triển khai mô hình (7 bước)
              </h2>
            </div>

            {/* Interactive Horizontal Step Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5 mb-6">
              {ROADMAP_STEPS.map((step) => {
                const isSelected = step.id === activeStepId;
                return (
                  <button
                    key={step.id}
                    type="button"
                    onClick={() => setActiveStepId(step.id)}
                    className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#6B4229] text-white border-[#6B4229]'
                        : 'bg-[#FBF8F4] text-[#3D2518] border-[#E8DDD1] hover:border-[#B58D72]'
                    }`}
                  >
                    <div
                      className={`font-mono text-xs ${
                        isSelected ? 'text-[#F5D6DF]' : 'text-[#8B5A3C]'
                      }`}
                    >
                      {step.step}
                    </div>
                    <div className="mt-1 text-xs sm:text-sm font-semibold leading-snug line-clamp-2">
                      {step.title}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Selected Step Detail Card */}
            <div className="bg-[#FBF8F4] border border-[#E8DDD1] rounded-2xl p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-7 space-y-2.5">
                <div className="font-mono text-xs font-semibold text-[#8B5A3C]">
                  {activeStep.step} · Chi tiết triển khai
                </div>
                <h3 className="font-editorial text-2xl font-semibold text-[#3D2518]">
                  {activeStep.title}
                </h3>
                <p className="text-sm sm:text-base text-[#6E5243] leading-relaxed">
                  {activeStep.description}
                </p>
              </div>
              <div className="md:col-span-5 space-y-3 bg-white border border-[#E8DDD1] rounded-xl p-5">
                <div>
                  <div className="text-xs font-medium text-[#8B5A3C]">Kết quả đầu ra dự kiến</div>
                  <div className="text-sm font-semibold text-[#3D2518] mt-1">
                    {activeStep.deliverable}
                  </div>
                </div>
                <div className="pt-3 border-t border-[#F1E8DE]">
                  <div className="text-xs font-medium text-[#8B5A3C]">
                    Năng lực Bài 6 vận dụng
                  </div>
                  <div className="text-sm text-[#6E5243] mt-1">{activeStep.linkedCompetency}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PHẦN 7. DỰ KIẾN VỐN KINH DOANH */}
        <section id="von" className="py-14 lg:py-20 border-t border-[#E8DDD1] bg-[#FBF8F4]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-10">
              <div className="text-xs font-medium text-[#8B5A3C]">
                Phần 07 · Dự toán tài chính giả định
              </div>
              <h2 className="font-editorial text-3xl sm:text-4xl font-semibold text-[#3D2518] mt-1 text-balance">
                Dự kiến vốn kinh doanh (2.500.000 đồng)
              </h2>
            </div>

            <CapitalChart />
          </div>
        </section>

        {/* PHẦN 8. RỦI RO VÀ GIẢI PHÁP */}
        <section id="rui-ro" className="py-14 lg:py-20 border-t border-[#E8DDD1] bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-10">
              <div className="text-xs font-medium text-[#8B5A3C]">
                Phần 08 · Quản trị phòng ngừa
              </div>
              <h2 className="font-editorial text-3xl sm:text-4xl font-semibold text-[#3D2518] mt-1 text-balance">
                Nhận diện rủi ro và giải pháp ứng phó
              </h2>
            </div>

            <div className="space-y-4">
              {RISKS_AND_SOLUTIONS.map((item) => (
                <article
                  key={item.id}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 p-6 bg-[#FBF8F4] border border-[#E8DDD1] rounded-2xl hover:border-[#B58D72] transition-colors items-start"
                >
                  <div className="lg:col-span-5 space-y-1.5">
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#B85C75]">
                      <ShieldAlert className="w-4 h-4" />
                      <span>Rủi ro {item.index}</span>
                    </div>
                    <h3 className="font-semibold text-base text-[#3D2518]">{item.risk}</h3>
                    <p className="text-xs sm:text-sm text-[#6E5243] leading-relaxed">
                      Tác động: {item.impact}
                    </p>
                  </div>

                  <div className="lg:col-span-7 p-4 bg-white border border-[#E8DDD1] rounded-xl space-y-1.5">
                    <div className="text-xs font-semibold text-[#6B4229]">
                      Giải pháp phù hợp của BA SỮA
                    </div>
                    <p className="text-sm text-[#3D2518] leading-relaxed">{item.solution}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PHẦN 9. TỔNG KẾT VÀ THÔNG ĐIỆP */}
        <section id="tong-ket" className="py-14 lg:py-20 border-t border-[#E8DDD1] bg-[#FDF2F4]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white border border-[#E8DDD1] rounded-3xl p-6 sm:p-10 lg:p-14 space-y-8">
              <div className="max-w-3xl space-y-3">
                <div className="text-xs font-medium text-[#8B5A3C]">
                  Phần 09 · Tổng kết bài học & Thông điệp
                </div>
                <h2 className="font-editorial text-3xl sm:text-4xl font-semibold text-[#3D2518] text-balance">
                  Từ ý tưởng học đường đến tư duy người kinh doanh
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {CLOSING_POINTS.map((point, index) => (
                  <div
                    key={point}
                    className="p-5 bg-[#FBF8F4] border border-[#E8DDD1] rounded-2xl flex items-start gap-3.5"
                  >
                    <span className="font-mono text-xs font-semibold text-[#8B5A3C] mt-0.5 shrink-0">
                      0{index + 1}
                    </span>
                    <p className="text-sm text-[#3D2518] leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-[#E8DDD1] text-center space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-medium text-[#8B5A3C]">
                  <Sparkles className="w-4 h-4" />
                  <span>Thông điệp kết thúc</span>
                </div>
                <blockquote className="font-editorial italic text-2xl sm:text-3xl lg:text-4xl font-medium text-[#3D2518] max-w-3xl mx-auto text-balance">
                  “{PROJECT_META.closingMessage}”
                </blockquote>
                <div className="text-sm text-[#6E5243]">
                  Người thực hiện:{' '}
                  <strong className="font-semibold text-[#3D2518]">
                    {PROJECT_META.author} – {PROJECT_META.className}
                  </strong>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Quiet Footer */}
      <footer className="bg-white border-t border-[#E8DDD1] py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-[#6E5243]">
          <div>
            <strong className="font-editorial text-[#3D2518]">BA SỮA</strong> · Dự án thuyết trình Bài 6 – {PROJECT_META.subject} · {PROJECT_META.author} ({PROJECT_META.className})
          </div>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setPresentationOpen(true)}
              className="font-medium text-[#6B4229] hover:underline cursor-pointer"
            >
              Mở trình chiếu
            </button>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 font-medium text-[#3D2518] hover:text-[#6B4229] cursor-pointer"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Quay về đầu trang</span>
            </button>
          </div>
        </div>
      </footer>

      {/* Floating Back-to-Top Button */}
      {showBackToTop && !presentationOpen && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Quay về đầu trang"
          className="fixed bottom-6 right-6 z-30 w-11 h-11 rounded-full bg-[#6B4229] text-white shadow-md hover:bg-[#52311D] flex items-center justify-center transition-all cursor-pointer"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Fullscreen Slide Presentation Mode */}
      <PresentationModal
        isOpen={presentationOpen}
        onClose={() => setPresentationOpen(false)}
      />
    </div>
  );
}
