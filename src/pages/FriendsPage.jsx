// src/pages/FriendsPage.jsx
import { useState } from "react";
import { AdBanner } from "@/components/basic/adBanner";
import { GlassMessage } from "@/components/basic/GlassMessage";
import EmptyFriendsState from "@/components/friends/EmptyFriendsState";
import { Button } from "@/components/ui/Button";

// импортируем переменные рекламы и приманки пока из файла
import { adBanner, lastWinner } from "@/constants/honeyPot.site.js";
import {clsx} from "clsx";
import {isMobile} from "react-device-detect";

export default function FriendsPage() {
  // Временное состояние для демонстрации
  // Позже заменишь на реальные данные из store/API
  const [friendsList] = useState([]); // [] - пусто, показываем заглушку
  //const [friendsList] = useState([{ id: 1, name: "Алексей", avatar: null }]); // есть друзья

  const hasFriends = friendsList.length > 0;

  return (
    // add min-h-[inherit] for centering vertical

      <div className={clsx(
          !isMobile && ["min-h-screen", "min-h-[100dvh]", "flex", "flex-col", "pt-2", "sm:pt-4", "lg:pt-7.5", "pb-28", "lg:pb-38"],
          isMobile && ["mobile-screen", "flex", "flex-col", hasFriends ? "justify-start" : "justify-between", "pb-19"])
      }>
      <div className={clsx(isMobile && ["h-140/1000", ],)}>
          <AdBanner
              href={adBanner.href}
              title={adBanner.title}
              imageSrc={adBanner.imageSrc}
              className={clsx(!isMobile && ["mb-2", "sm:mb-4", "lg:mb-5"], isMobile && ["mb-1", "h-600/1000"], "advert")}
          />
          <GlassMessage className={clsx("font-bold text-center", isMobile && ["text-sm", "h-400/1000"], )}>
            <span>
              <span className="text-orange">{lastWinner.name}</span> выиграл{" "}
                {lastWinner.win} <span>рублей</span>
            </span>
          </GlassMessage>
      </div>


      {/* Логика отображения */}
      {hasFriends ? (
        <div className="mt-6">
          <h2 className="text-lg font-bold mb-4">
            Мои друзья ({friendsList.length})
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {friendsList.map((friend) => (
              <div
                key={friend.id}
                className="flex items-center gap-3 bg-white/5 rounded-xl p-3"
              >
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  {friend.avatar ? (
                    <img
                      src={friend.avatar}
                      alt={friend.name}
                      className="w-full h-full rounded-full object-cover"
                    />
                  ) : (
                    <span className="text-white/60 text-lg">👤</span>
                  )}
                </div>
                <span className="font-medium">{friend.name}</span>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <>
          <div className={clsx(
              !isMobile && "mt-8 flex items-center justify-center",
              isMobile && ["h-660/1000", "flex", "items-center"]
          )}>
            <EmptyFriendsState />
          </div>
          <div className={clsx("min-w-[18rem] pb-5 sm:pb-10 flex justify-center",!isMobile && ["mt-auto"], isMobile && ["h-120/1000"])}>
            <Button className="max-w-[46.625rem] w-full rounded-[1.125rem] px-3 h-[3.25rem] bg-golden hover:bg-golden/80 active:scale-95">
              <span className="text-[1.0625rem]">Пригласить друга</span>
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
