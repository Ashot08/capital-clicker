// src/components/Friends/EmptyFriendsState.jsx

import { cn } from "@/lib/utils";
import {clsx} from "clsx";
import {isMobile} from "react-device-detect";

export default function EmptyFriendsState({ className }) {
  return (
    <div
      className={cn("flex flex-col w-full items-center justify-center text-center", className)}
    >
      {/* Картинка с aspect-ratio 516/260 */}
      <div className="relative w-full max-w-[32.25rem] aspect-[516/260] mt-2 sm:mt-0">
        <img
          src="/images/webp/friend-hands.webp"
          alt="Нет друзей"
          className="absolute inset-0 w-full h-auto object-contain scale-145 sm:scale-100"
        />
      </div>

      {/* Заголовок */}
      <h3 className={clsx(isMobile && ["leading-[1.2]"], "text-2xl sm:text-[2rem] font-bold text-white mt-12 sm:mt-8")}>
        Приглашай друзей <br />и зарабатывай
      </h3>

      {/* Описание */}
      <p className={clsx(isMobile && ["leading-[1.2]", "mt-2"],
          !isMobile && ["mt-3"],
          "text-sm sm:text-base text-[#666] max-w-[16.25rem] sm:max-w-[18.1875rem]")}>
        Поделись ссылкой с другом и получи награду за его регистрацию
      </p>

      {/* Награда */}
      <div className={clsx(isMobile && ["mt-2 mb-2"],
          !isMobile && ["mt-4 mb-4"],
          "flex items-center justify-center gap-4 sm:my-12")}>
        <svg className="w-9 h-9 sm:w-12 sm:h-12" aria-hidden="true">
          <use href="/icons/sprite/sprite.svg#rub" />
        </svg>
        <span className={clsx(isMobile && ["text-[1.75rem]"],
            !isMobile && ["text-[2rem] sm:text-[2.5rem]"],
            "font-bold text-white")}>
          +10
        </span>
      </div>
    </div>
  );
}
