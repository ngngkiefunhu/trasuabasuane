import {useState} from 'react';
import {BarChart3, PieChart} from 'lucide-react';
import {CAPITAL_ALLOCATIONS, TOTAL_CAPITAL} from '../data/projectData';

function formatVnd(amount: number): string {
  return new Intl.NumberFormat('vi-VN').format(amount) + ' đ';
}

export function CapitalChart() {
  const [chartType, setChartType] = useState<'pie' | 'bar'>('pie');
  const [activeId, setActiveId] = useState<string>(CAPITAL_ALLOCATIONS[0].id);

  const activeItem =
    CAPITAL_ALLOCATIONS.find((item) => item.id === activeId) ?? CAPITAL_ALLOCATIONS[0];

  const radius = 84;
  const circumference = 2 * Math.PI * radius;

  const segments = CAPITAL_ALLOCATIONS.reduce<
    Array<(typeof CAPITAL_ALLOCATIONS)[number] & {dashArray: string; dashOffset: number}>
  >((acc, item) => {
    const previousPercent = acc.reduce((sum, prev) => sum + prev.percentage, 0);
    const segmentLength = (item.percentage / 100) * circumference;
    const dashArray = `${segmentLength} ${circumference - segmentLength}`;
    const dashOffset = -((previousPercent / 100) * circumference);
    acc.push({...item, dashArray, dashOffset});
    return acc;
  }, []);

  const maxAmount = Math.max(...CAPITAL_ALLOCATIONS.map((item) => item.amount));

  return (
    <div className="bg-white border border-[#E8DDD1] rounded-2xl p-6 sm:p-8">
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#E8DDD1]">
        <div>
          <p className="text-xs font-medium tracking-wide text-[#6E5243]">
            Tổng vốn giả định · 5 hạng mục phân bổ
          </p>
          <p className="mt-1 font-mono text-2xl sm:text-3xl font-semibold text-[#3D2518] tabular-nums">
            {formatVnd(TOTAL_CAPITAL)}
          </p>
        </div>

        <div
          className="inline-flex items-center gap-1 p-1 bg-[#F5EFE7] border border-[#E8DDD1] rounded-xl"
          role="group"
          aria-label="Chọn dạng biểu đồ"
        >
          <button
            type="button"
            onClick={() => setChartType('pie')}
            className={`inline-flex items-center gap-2 px-3.5 py-2 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              chartType === 'pie'
                ? 'bg-white text-[#3D2518] shadow-xs'
                : 'text-[#6E5243] hover:text-[#3D2518]'
            }`}
          >
            <PieChart className="w-3.5 h-3.5" />
            <span>Biểu đồ tròn</span>
          </button>
          <button
            type="button"
            onClick={() => setChartType('bar')}
            className={`inline-flex items-center gap-2 px-3.5 py-2 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              chartType === 'bar'
                ? 'bg-white text-[#3D2518] shadow-xs'
                : 'text-[#6E5243] hover:text-[#3D2518]'
            }`}
          >
            <BarChart3 className="w-3.5 h-3.5" />
            <span>Biểu đồ cột</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6 items-center">
        {/* Visual Chart Area */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center">
          {chartType === 'pie' ? (
            <div className="relative w-60 h-60 sm:w-64 sm:h-64 flex items-center justify-center">
              <svg
                viewBox="0 0 220 220"
                className="w-full h-full -rotate-90"
                role="img"
                aria-label="Biểu đồ tròn phân bổ vốn dự kiến 2.500.000 đồng"
              >
                <circle
                  cx="110"
                  cy="110"
                  r={radius}
                  fill="none"
                  stroke="#F5EFE7"
                  strokeWidth="30"
                />
                {segments.map((seg) => {
                  const isActive = seg.id === activeId;
                  return (
                    <circle
                      key={seg.id}
                      cx="110"
                      cy="110"
                      r={radius}
                      fill="none"
                      stroke={seg.color}
                      strokeWidth={isActive ? 36 : 30}
                      strokeDasharray={seg.dashArray}
                      strokeDashoffset={seg.dashOffset}
                      className="transition-all duration-200 cursor-pointer"
                      style={{opacity: isActive ? 1 : 0.85}}
                      onMouseEnter={() => setActiveId(seg.id)}
                      onClick={() => setActiveId(seg.id)}
                    />
                  );
                })}
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-10 pointer-events-none">
                <span className="font-mono text-xl font-semibold text-[#3D2518] tabular-nums">
                  {activeItem.percentage}%
                </span>
                <span className="mt-1 text-xs font-medium text-[#6E5243] leading-snug line-clamp-2">
                  {activeItem.label}
                </span>
              </div>
            </div>
          ) : (
            <div className="w-full space-y-4 py-2">
              {CAPITAL_ALLOCATIONS.map((item) => {
                const isActive = item.id === activeId;
                const widthPercent = (item.amount / maxAmount) * 100;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onMouseEnter={() => setActiveId(item.id)}
                    onClick={() => setActiveId(item.id)}
                    className={`w-full text-left p-2.5 rounded-xl transition-colors cursor-pointer ${
                      isActive ? 'bg-[#FDF2F4]' : 'hover:bg-[#FBF8F4]'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs mb-1.5 gap-2">
                      <span className="font-medium text-[#3D2518] truncate">{item.label}</span>
                      <span className="font-mono font-medium text-[#3D2518] tabular-nums shrink-0">
                        {formatVnd(item.amount)} ({item.percentage}%)
                      </span>
                    </div>
                    <div className="w-full h-3 bg-[#F5EFE7] rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-300"
                        style={{
                          width: `${widthPercent}%`,
                          backgroundColor: item.color,
                        }}
                      />
                    </div>
                  </button>
                );
              })}
            </div>
          )}

          {/* Selected Segment Detail Note */}
          <div className="mt-4 w-full p-4 rounded-xl bg-[#FBF8F4] border border-[#E8DDD1]">
            <div className="flex items-center justify-between gap-2">
              <span className="text-sm font-semibold text-[#3D2518]">{activeItem.label}</span>
              <span className="font-mono text-sm font-semibold text-[#6B4229] tabular-nums">
                {formatVnd(activeItem.amount)}
              </span>
            </div>
            <p className="mt-1.5 text-xs leading-relaxed text-[#6E5243]">{activeItem.note}</p>
          </div>
        </div>

        {/* Breakdown Table */}
        <div className="lg:col-span-7 overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#E8DDD1] text-xs font-medium text-[#6E5243]">
                <th className="py-3 pr-4">Hạng mục chi phí</th>
                <th className="py-3 px-3 text-right">Số tiền (VNĐ)</th>
                <th className="py-3 pl-3 text-right">Tỷ trọng</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F1E8DE] text-sm">
              {CAPITAL_ALLOCATIONS.map((item) => {
                const isActive = item.id === activeId;
                return (
                  <tr
                    key={item.id}
                    onMouseEnter={() => setActiveId(item.id)}
                    onClick={() => setActiveId(item.id)}
                    className={`transition-colors cursor-pointer ${
                      isActive ? 'bg-[#FDF2F4]' : 'hover:bg-[#FBF8F4]'
                    }`}
                  >
                    <td className="py-3.5 pr-4">
                      <div className="flex items-center gap-3">
                        <span
                          className="w-3 h-3 rounded-xs shrink-0"
                          style={{backgroundColor: item.color}}
                          aria-hidden="true"
                        />
                        <div>
                          <div className="font-medium text-[#3D2518]">{item.label}</div>
                          <div className="text-xs text-[#6E5243] mt-0.5 hidden sm:block">
                            {item.note}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="py-3.5 px-3 text-right font-mono font-medium text-[#3D2518] tabular-nums whitespace-nowrap">
                      {formatVnd(item.amount)}
                    </td>
                    <td className="py-3.5 pl-3 text-right font-mono text-[#6E5243] tabular-nums whitespace-nowrap">
                      {item.percentage}%
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr className="border-t-2 border-[#D9C7B6] font-semibold text-[#3D2518]">
                <td className="py-3.5 pr-4">Tổng vốn dự kiến</td>
                <td className="py-3.5 px-3 text-right font-mono tabular-nums whitespace-nowrap">
                  {formatVnd(TOTAL_CAPITAL)}
                </td>
                <td className="py-3.5 pl-3 text-right font-mono tabular-nums whitespace-nowrap">
                  100%
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      <p className="mt-6 pt-4 border-t border-[#E8DDD1] text-xs text-[#6E5243] leading-relaxed">
        Ghi chú: Đây là bảng dự kiến vốn giả định phục vụ bài tập thuyết trình môn Giáo dục Kinh tế và Pháp luật 11 (Bài 6), không phải số liệu hoạt động kinh doanh thực tế.
      </p>
    </div>
  );
}
