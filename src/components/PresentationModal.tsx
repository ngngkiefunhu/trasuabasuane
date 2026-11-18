import {useEffect, useState} from 'react';
import {ChevronLeft, ChevronRight, Maximize2, Minimize2, X} from 'lucide-react';
import {
  BUSINESS_IDEA_DETAILS,
  BUSINESS_OPPORTUNITIES,
  CAPITAL_ALLOCATIONS,
  CLOSING_POINTS,
  COMPETENCIES,
  PROJECT_META,
  RISKS_AND_SOLUTIONS,
  ROADMAP_STEPS,
  SWOT_MATRIX,
  TOTAL_CAPITAL,
} from '../data/projectData';
import {ResilientImage} from './ResilientImage';

interface PresentationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SLIDE_TITLES = [
  '1. Trang bìa – Giới thiệu dự án',
  '2. Hình thành ý tưởng kinh doanh',
  '3. Phân tích cơ hội kinh doanh',
  '4. Tính khả thi của ý tưởng',
  '5. Năng lực cần thiết của người kinh doanh',
  '6. Kế hoạch triển khai mô hình',
  '7. Dự kiến vốn kinh doanh (2.500.000đ)',
  '8. Rủi ro và giải pháp',
  '9. Tổng kết và thông điệp',
];

export function PresentationModal({isOpen, onClose}: PresentationModalProps) {
  const [slideIndex, setSlideIndex] = useState(0);
  const [isBrowserFullscreen, setIsBrowserFullscreen] = useState(false);

  const totalSlides = SLIDE_TITLES.length;

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        setSlideIndex((prev) => Math.min(prev + 1, totalSlides - 1));
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        setSlideIndex((prev) => Math.max(prev - 1, 0));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, totalSlides]);

  useEffect(() => {
    const onFullscreenChange = () => {
      setIsBrowserFullscreen(Boolean(document.fullscreenElement));
    };
    document.addEventListener('fullscreenchange', onFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', onFullscreenChange);
  }, []);

  const toggleFullscreen = async () => {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch {
      // Fallback cleanly inside restricted iframes where browser fullscreen is disallowed
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-[#FBF8F4] text-[#3D2518] flex flex-col"
      role="dialog"
      aria-modal="true"
      aria-label="Chế độ trình chiếu dự án BA SỮA"
    >
      {/* Top Presentation Toolbar */}
      <div className="flex items-center justify-between gap-4 px-5 sm:px-8 py-3.5 bg-white border-b border-[#E8DDD1]">
        <div className="flex items-center gap-3 min-w-0">
          <span className="font-editorial font-semibold text-base text-[#3D2518] whitespace-nowrap">
            {PROJECT_META.brandName}
          </span>
          <span className="text-[#D9C7B6]" aria-hidden="true">
            ·
          </span>
          <span className="text-xs sm:text-sm text-[#6E5243] truncate">
            {SLIDE_TITLES[slideIndex]}
          </span>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <span className="font-mono text-xs text-[#6E5243] tabular-nums mr-2">
            {slideIndex + 1} / {totalSlides}
          </span>
          <button
            type="button"
            onClick={toggleFullscreen}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#3D2518] bg-[#F5EFE7] hover:bg-[#EDE2D5] rounded-lg transition-colors whitespace-nowrap cursor-pointer"
            title="Toàn màn hình trình duyệt"
          >
            {isBrowserFullscreen ? (
              <>
                <Minimize2 className="w-3.5 h-3.5" />
                <span>Thu gọn</span>
              </>
            ) : (
              <>
                <Maximize2 className="w-3.5 h-3.5" />
                <span>Toàn màn hình</span>
              </>
            )}
          </button>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-[#6B4229] hover:bg-[#52311D] rounded-lg transition-colors whitespace-nowrap cursor-pointer"
          >
            <X className="w-3.5 h-3.5" />
            <span>Thoát trình chiếu</span>
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-1 bg-[#E8DDD1]">
        <div
          className="h-full bg-[#8B5A3C] transition-all duration-300"
          style={{width: `${((slideIndex + 1) / totalSlides) * 100}%`}}
        />
      </div>

      {/* Slide Content Canvas */}
      <div className="flex-1 overflow-y-auto px-5 sm:px-10 lg:px-16 py-8 flex items-center justify-center">
        <div className="w-full max-w-5xl">
          {slideIndex === 0 && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-white border border-[#E8DDD1] rounded-3xl p-6 sm:p-10 relative">
              <div className="md:col-span-7 space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl overflow-hidden border border-[#E8DDD1] shrink-0">
                    <ResilientImage
                      src={PROJECT_META.logoImage}
                      alt="Logo BA SỮA"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-xs text-[#6E5243]">
                    <div>{PROJECT_META.subject}</div>
                    <div>Bài 6 · Dự án thuyết trình</div>
                  </div>
                </div>
                <h2 className="font-editorial text-3xl sm:text-4xl font-semibold text-[#3D2518] leading-tight text-balance">
                  {PROJECT_META.projectTitle}
                </h2>
                <p className="font-editorial italic text-xl text-[#8B5A3C]">
                  “{PROJECT_META.slogan}”
                </p>
                <div className="pt-2 text-sm text-[#6E5243]">
                  Người thực hiện:{' '}
                  <strong className="text-[#3D2518]">
                    {PROJECT_META.author} – {PROJECT_META.className}
                  </strong>
                </div>
              </div>
              <div className="md:col-span-5">
                <div className="aspect-[3/4] max-h-[380px] mx-auto rounded-2xl overflow-hidden border border-[#E8DDD1]">
                  <ResilientImage
                    src={PROJECT_META.heroCupImage}
                    alt="Ly trà sữa BA SỮA"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          )}

          {slideIndex === 1 && (
            <div className="bg-white border border-[#E8DDD1] rounded-3xl p-6 sm:p-10 space-y-6">
              <h2 className="font-editorial text-2xl sm:text-3xl font-semibold text-[#3D2518]">
                Hình thành ý tưởng kinh doanh
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 bg-[#FBF8F4] border border-[#E8DDD1] rounded-2xl space-y-2">
                  <h3 className="font-semibold text-[#3D2518]">Ý tưởng kinh doanh là gì?</h3>
                  <p className="text-sm text-[#6E5243] leading-relaxed">
                    {BUSINESS_IDEA_DETAILS.whatIsIdea}
                  </p>
                </div>
                <div className="p-5 bg-[#FDF2F4] border border-[#E8DDD1] rounded-2xl space-y-2">
                  <h3 className="font-semibold text-[#3D2518]">Nguồn gốc hình thành</h3>
                  <p className="text-sm text-[#6E5243] leading-relaxed">
                    {BUSINESS_IDEA_DETAILS.origin}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                <div>
                  <h4 className="text-sm font-semibold text-[#3D2518] mb-2">
                    Nhu cầu thực tế muốn đáp ứng
                  </h4>
                  <ul className="space-y-2 text-sm text-[#6E5243]">
                    {BUSINESS_IDEA_DETAILS.problemsAndNeeds.map((item) => (
                      <li key={item}>· {item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#3D2518] mb-2">
                    Mục tiêu của mô hình
                  </h4>
                  <ul className="space-y-2 text-sm text-[#6E5243]">
                    {BUSINESS_IDEA_DETAILS.objectives.map((item) => (
                      <li key={item}>· {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {slideIndex === 2 && (
            <div className="bg-white border border-[#E8DDD1] rounded-3xl p-6 sm:p-10 space-y-6">
              <div>
                <h2 className="font-editorial text-2xl sm:text-3xl font-semibold text-[#3D2518]">
                  Phân tích 5 cơ hội kinh doanh của BA SỮA
                </h2>
                <p className="text-sm text-[#6E5243] mt-1">
                  Những điều kiện thuận lợi giúp ý tưởng chuyển hóa thành hoạt động thực tế.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {BUSINESS_OPPORTUNITIES.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 bg-[#FBF8F4] border border-[#E8DDD1] rounded-2xl space-y-2"
                  >
                    <div className="font-mono text-xs text-[#8B5A3C]">{item.index}</div>
                    <h3 className="font-semibold text-[#3D2518]">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-[#6E5243] leading-relaxed">
                      {item.summary}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {slideIndex === 3 && (
            <div className="bg-white border border-[#E8DDD1] rounded-3xl p-6 sm:p-10 space-y-6">
              <h2 className="font-editorial text-2xl sm:text-3xl font-semibold text-[#3D2518]">
                Đánh giá điểm mạnh, điểm yếu, cơ hội và thách thức
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {SWOT_MATRIX.map((quad) => (
                  <div
                    key={quad.key}
                    className={`p-5 rounded-2xl border border-[#E8DDD1] ${
                      quad.tone === 'positive' ? 'bg-[#FBF8F4]' : 'bg-[#FDF2F4]'
                    }`}
                  >
                    <div className="mb-2">
                      <span className="font-semibold text-[#3D2518]">{quad.vietnameseTitle}</span>
                    </div>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-[#6E5243]">
                      {quad.points.map((pt) => (
                        <li key={pt}>· {pt}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {slideIndex === 4 && (
            <div className="bg-white border border-[#E8DDD1] rounded-3xl p-6 sm:p-10 space-y-5">
              <div>
                <h2 className="font-editorial text-2xl sm:text-3xl font-semibold text-[#3D2518]">
                  7 Năng lực cần thiết của người kinh doanh
                </h2>
                <p className="text-sm text-[#6E5243] mt-1">
                  Trọng tâm Bài 6 — Vận dụng trực tiếp vào mô hình BA SỮA.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {COMPETENCIES.map((comp) => (
                  <div
                    key={comp.id}
                    className="p-3.5 bg-[#FBF8F4] border border-[#E8DDD1] rounded-xl"
                  >
                    <div className="font-semibold text-sm text-[#3D2518]">
                      {comp.index}. {comp.title}
                    </div>
                    <p className="text-xs text-[#6E5243] mt-1 leading-relaxed">{comp.concept}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {slideIndex === 5 && (
            <div className="bg-white border border-[#E8DDD1] rounded-3xl p-6 sm:p-10 space-y-6">
              <h2 className="font-editorial text-2xl sm:text-3xl font-semibold text-[#3D2518]">
                Kế hoạch triển khai mô hình (7 bước)
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {ROADMAP_STEPS.map((step) => (
                  <div
                    key={step.id}
                    className="p-4 bg-[#FBF8F4] border border-[#E8DDD1] rounded-2xl space-y-1.5"
                  >
                    <div className="font-mono text-xs text-[#8B5A3C]">{step.step}</div>
                    <div className="font-semibold text-sm text-[#3D2518]">{step.title}</div>
                    <p className="text-xs text-[#6E5243] leading-relaxed">{step.deliverable}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {slideIndex === 6 && (
            <div className="bg-white border border-[#E8DDD1] rounded-3xl p-6 sm:p-10 space-y-6">
              <div className="flex flex-wrap items-baseline justify-between gap-4">
                <h2 className="font-editorial text-2xl sm:text-3xl font-semibold text-[#3D2518]">
                  Dự kiến vốn kinh doanh giả định
                </h2>
                <span className="font-mono text-2xl font-semibold text-[#6B4229] tabular-nums">
                  {new Intl.NumberFormat('vi-VN').format(TOTAL_CAPITAL)} đ
                </span>
              </div>
              <div className="space-y-3">
                {CAPITAL_ALLOCATIONS.map((item) => (
                  <div key={item.id} className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium text-[#3D2518]">{item.label}</span>
                      <span className="font-mono text-[#3D2518] tabular-nums">
                        {new Intl.NumberFormat('vi-VN').format(item.amount)} đ ({item.percentage}%)
                      </span>
                    </div>
                    <div className="w-full h-3 bg-[#F5EFE7] rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{width: `${item.percentage * 2.5}%`, backgroundColor: item.color}}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-[#6E5243]">
                Số liệu giả định phục vụ bài tập thuyết trình môn Giáo dục Kinh tế và Pháp luật 11.
              </p>
            </div>
          )}

          {slideIndex === 7 && (
            <div className="bg-white border border-[#E8DDD1] rounded-3xl p-6 sm:p-10 space-y-5">
              <h2 className="font-editorial text-2xl sm:text-3xl font-semibold text-[#3D2518]">
                Nhận diện rủi ro và giải pháp ứng phó
              </h2>
              <div className="space-y-3">
                {RISKS_AND_SOLUTIONS.map((item) => (
                  <div
                    key={item.id}
                    className="grid grid-cols-1 md:grid-cols-2 gap-3 p-3.5 bg-[#FBF8F4] border border-[#E8DDD1] rounded-xl text-xs sm:text-sm"
                  >
                    <div className="font-semibold text-[#3D2518]">
                      {item.index}. {item.risk}
                    </div>
                    <div className="text-[#6E5243]">{item.solution}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {slideIndex === 8 && (
            <div className="bg-white border border-[#E8DDD1] rounded-3xl p-6 sm:p-10 space-y-6 text-center">
              <div className="text-xs text-[#6E5243]">Tổng kết dự án</div>
              <h2 className="font-editorial text-2xl sm:text-4xl font-semibold text-[#3D2518] text-balance">
                “{PROJECT_META.closingMessage}”
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left max-w-3xl mx-auto pt-2">
                {CLOSING_POINTS.map((point) => (
                  <div
                    key={point}
                    className="p-4 bg-[#FBF8F4] border border-[#E8DDD1] rounded-xl text-xs sm:text-sm text-[#6E5243]"
                  >
                    {point}
                  </div>
                ))}
              </div>
              <div className="pt-2 text-sm font-medium text-[#3D2518]">
                Thực hiện: {PROJECT_META.author} – {PROJECT_META.className}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Slide Controls */}
      <div className="flex items-center justify-between gap-4 px-5 sm:px-8 py-4 bg-white border-t border-[#E8DDD1]">
        <button
          type="button"
          onClick={() => setSlideIndex((prev) => Math.max(prev - 1, 0))}
          disabled={slideIndex === 0}
          className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-medium text-[#3D2518] bg-[#F5EFE7] hover:bg-[#EDE2D5] disabled:opacity-40 rounded-xl transition-colors cursor-pointer disabled:cursor-not-allowed"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Trang trước</span>
        </button>

        <div className="hidden md:flex items-center gap-1.5">
          {SLIDE_TITLES.map((title, idx) => (
            <button
              key={title}
              type="button"
              onClick={() => setSlideIndex(idx)}
              aria-label={`Đi tới ${title}`}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                idx === slideIndex ? 'w-7 bg-[#6B4229]' : 'w-2 bg-[#D9C7B6] hover:bg-[#B39B87]'
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => setSlideIndex((prev) => Math.min(prev + 1, totalSlides - 1))}
          disabled={slideIndex === totalSlides - 1}
          className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-medium text-white bg-[#6B4229] hover:bg-[#52311D] disabled:opacity-40 rounded-xl transition-colors cursor-pointer disabled:cursor-not-allowed"
        >
          <span>Trang tiếp</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
