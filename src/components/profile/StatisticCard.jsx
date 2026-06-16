// src/components/profile/StatisticCard.jsx

import { cn } from "@/lib/utils";
import {clsx} from "clsx";
import {isMobile} from "react-device-detect";
import {useWindowSize} from "@/hooks/useWindowSize.ts";

export function StatisticCard({ label, value, className, ...props }) {
  // Форматируем только числовые значения
  const formatValue = (val) => {
    if (typeof val !== 'number') return val || '0';

    const formatter = new Intl.NumberFormat('en', {
      notation: 'compact',
      compactDisplay: 'short',
      maximumFractionDigits: 0 // Убираем дробную часть
    });

    return formatter.format(val);
  };

  const formattedValue = formatValue(value);
  const [width, height] = useWindowSize();

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center w-full lg:min-h-[8.875rem] ",
        "bg-[rgba(217, 217, 217, 0.02)] shadow-[0_0_0.4375rem_0_rgba(254,141,0,0.1)]",
        "border-t border-l border-golden",
        "text-white",
        !isMobile && "min-h-[4.5625rem] rounded-[1.5rem]",
        (isMobile && height >= 680) && "min-h-[4.5625rem] rounded-[1.5rem]",
        (isMobile && height < 680) && "min-h-[3.2rem] rounded-[1.2rem]",
        className,
      )}
      {...props}
    >
      <span className="text-[0.75rem] lg:text-[1rem] text-center text-white/28">{label}</span>
      <span className={cn(
          "lg:text-[2rem] uppercase font-semibold text-center",
          !isMobile && "text-[1.5rem]",
          (isMobile && height >= 680) && "text-[1.5rem]",
          (isMobile && height < 680) && "text-[1.2rem]",
      )}>{formattedValue}</span>
    </div>
  );
}
