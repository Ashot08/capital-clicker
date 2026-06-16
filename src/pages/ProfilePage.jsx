// src/pages/ProfilePage.jsx
import { useNavigate } from "react-router-dom";
import { AdBanner } from "@/components/basic/adBanner";
import { CountrySelect } from "@/components/profile/CountrySelect";
import { StatisticCard } from "@/components/profile/StatisticCard";
import { BackTitle } from "@/components/basic/BackTitle";
import { Button } from "@/components/ui/Button";
import { Switch } from "@/components/ui/Switch";
import useSettingsStore from "@/stores/useSettingsStore";
import { accountServices } from "@/services/AccountServices";
import { adBanner } from "@/constants/honeyPot.site.js";
import {clsx} from "clsx";
import {isMobile} from "react-device-detect";
import {useWindowSize} from "@/hooks/useWindowSize.ts";


export default function ProfilePage() {
  const navigate = useNavigate();
  const { soundEnabled, setSoundEnabled, language, setLanguage } = useSettingsStore();
  const [width, height] = useWindowSize();

  return (
    // Главный контейнер – flex-колонка на всю высоту

      <div className={clsx(
          !isMobile && ["min-h-screen", "min-h-[100dvh]", "flex", "flex-col", "pt-2", "sm:pt-4", "lg:pt-7.5", "pb-28", "lg:pb-38"],
          isMobile && ["mobile-screen", "flex", "flex-col", "justify-between", "pb-19"])
      }>
      <AdBanner
        href={adBanner.href}
        title={adBanner.title}
        imageSrc={adBanner.imageSrc}
        className={clsx(!isMobile && ["mb-2", "sm:mb-4", "lg:mb-5"], isMobile && ["h-70/1000", "mb-1"], "advert")}
      />

      <BackTitle title="Профиль" onBack={() => navigate(-1)}
                 className={clsx(!isMobile && ["mt-6"], isMobile && ["h-60/1000", "mt-2",],)}
                 titleClassName={clsx(isMobile && ["text-[1rem]",])}
      />

      {/* Центрированный контент, который занимает всё свободное пространство */}
      <div
          className={clsx("w-full max-w-[46.625rem] mx-auto flex flex-col",
          !isMobile && ["flex-1"],
          isMobile && ["h-860/1000", "justify-between",])}
      >
        <div
            className={clsx("flex flex-col sm:gap-5",
                !isMobile && ["gap-3"],
                isMobile && ["gap-1"])}
        >
          {/* Статистика */}
          <div
              className={clsx(!isMobile && ["mt-6"], isMobile && ["mt-4"],)}
          >
            <h2
                className={clsx("font-semibold sm:mb-4 text-center",
                    !isMobile && ["mb-3 text-[1.5rem] sm:text-[2rem] lg:text-[2.5rem]"], isMobile && ["mb-2", "text-[1.25rem]"],)}
            >
              Статистика
            </h2>
            <div
                className={clsx("grid grid-cols-2 sm:grid-cols-3 sm:gap-4", !isMobile && ["gap-3"], isMobile && ["gap-2"],)}
            >
              <StatisticCard label="Кликов" value={352000} />
              <StatisticCard label="Заработано" value={352000} />
              <StatisticCard
                label="Выиграно призов"
                value={10}
                className="col-span-2 sm:col-span-1"
              />
            </div>
          </div>

          {/* Настройки */}
          <div
              className={clsx(!isMobile && ["mt-6"], isMobile && ["mt-4"],)}
          >
            <h2
                className={clsx("font-semibold sm:mb-4 text-center",
                    !isMobile && ["mb-3 text-[1.5rem] sm:text-[2rem] lg:text-[2.5rem]"], isMobile && ["mb-2", "text-[1.25rem]"],)}
            >
              Настройки
            </h2>

            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <svg className="w-[1.5rem] h-[1.5rem] sm:w-[2rem] sm:h-[2rem]">
                  <use href="/icons/sprite/sprite.svg#lang" />
                </svg>
                <span
                    className={clsx(
                        "sm:text-[1.25rem] font-medium",
                        !isMobile && ["text-[1rem]"],
                        (isMobile && height >= 610) && ["text-[1rem]"],
                        (isMobile && height < 610) && ["text-[0.8rem]"]
                    )}
                >Язык</span>
              </div>
              <CountrySelect value={language} onChange={setLanguage} />
            </div>

            <div
                className={clsx(
                    "flex items-center justify-between gap-3",
                    !isMobile && ["mt-5"],
                    (isMobile && height >= 610) && ["mt-3"],
                    (isMobile && height < 610) && ["mt-2"],
                )}
            >
              <div className="flex items-center gap-3">
                <svg className="w-[1.5rem] h-[1.5rem] sm:w-[2rem] sm:h-[2rem]">
                  <use href="/icons/sprite/sprite.svg#sound" />
                </svg>
                <span
                    className={clsx(
                        "sm:text-[1.25rem] font-medium",
                        !isMobile && ["text-[1rem]"],
                        (isMobile && height >= 610) && ["text-[1rem]"],
                        (isMobile && height < 610) && ["text-[0.8rem]"]
                    )}
                >Звук</span>
              </div>
              <Switch
                className={clsx(
                    "h-[1.625rem] w-[3.125rem] lg:h-[2rem] lg:w-[3.4375rem]",
                    !isMobile && [],
                    isMobile && [],
                    (isMobile && height < 610) && ["h-[1.2rem] w-[2.4rem]"]
                )}
                checked={soundEnabled}
                onCheckedChange={setSoundEnabled}
              />
            </div>

            <Button
              onClick={() => alert("Получить вознаграждение")}
              className={clsx(
                  "sm:mt-9 mx-auto w-full rounded-[1.125rem] px-3 h-[3.25rem] bg-golden hover:bg-golden/80 active:scale-95",
                  !isMobile && ["mt-6"],
                  isMobile && ["mt-3"],
                  (isMobile && height < 610) && ["h-[2.5rem]"]
              )}
            >
              <span className="text-[1.0625rem]">Получить вознаграждение</span>
            </Button>
          </div>
        </div>

        {/* Блок с удалением и поддержкой – прижимается к низу через mt-auto */}
        <div
            className={clsx("pt-2 pb-5 sm:pb-10 flex flex-col items-center justify-center",
                !isMobile && ["mt-auto", "gap-4"], isMobile && ["gap-2"],
                )}
        >
          <button
            className="cursor-pointer text-[#ff3f3f] hover:text-[#ff3f3f]/80 transition text-base text-center"
            onClick={() => accountServices.deleteAccount()}
          >
            Удалить аккаунт
          </button>

          <Button
            onClick={() => navigate("/chat")}
            className={clsx(
                "w-full rounded-[1.125rem] px-3 h-[3.25rem] text-golden border-golden bg-transparent hover:bg-golden/10 active:scale-95",
                !isMobile && [],
                isMobile && [],
                (isMobile && height < 610) && ["h-[2.5rem]"]
            )}
          >
            <span className="text-[1.0625rem]">Поддержка</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
