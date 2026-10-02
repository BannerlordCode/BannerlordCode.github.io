---
title: "LocateAndRescueTravellerTutorialQuest"
description: "教程战斗任务：反复生成三支强盗队教玩家打劫/谈判，打完三支后活捉游医 Tacitus 即完成。"
---
# LocateAndRescueTravellerTutorialQuest

**Namespace:** StoryMode.Quests.TutorialPhase
**Module:** StoryMode
**Type:** `public class LocateAndRescueTravellerTutorialQuest : StoryModeQuestBase`
**Base:** StoryModeQuestBase
**Source:** StoryMode/Quests/TutorialPhase/LocateAndRescueTravellerTutorialQuest.cs

## 概述

这是教程里教"遭遇战"的任务。它在玩家队伍附近反复生成三支各 6 人的强盗队伍（`storymode_quest_raider`），每打赢一支就计数一次；三支打完，最后一支的队伍里会多出一个俘虏 Tacitus，玩家对他发起对话即完成任务。为了保证玩家一定能学会，它做了大量"兜底"：主队血量不足 50 自动加血、被俘自动和平释放、哥哥不在队里就强行拉回、队伍人数低于 4 就把强盗队清掉并弹招募提示、每 12 小时强制停一次时间。它是全教程里最"不讲道理"的一段。

## 心智模型

构造期无参，**立刻做完初始化**：`AddGameMenus()` 注册自定义遭遇菜单 `encounter_raiders_quest`（禁止"派兵攻击"和"发信给部队"，只允许直接开战），然后 `InitializeQuestOnCreation()`，最后按主队人数决定是否立刻生成强盗队。玩家主队至少 4 人才会生成——不足 4 人时 `HourlyTick` 会每 12 小时弹一次招募提示并停时间。

完成路径：`_defeatedRaiderPartyCount >= 3` 时用 `TakePrisonerAction` 把 Tacitus 关进最后那支强盗队，然后 `CampaignMapConversation.OpenConversation` 直接和 Tacitus 说话。对话后果是"清理全部强盗队 + `DisableHeroAction.Apply(Tacitus)` + 完成"。

坑很多，逐条说。第一，`OnGameMenuOpened` 里有一大段**无条件**的自愈逻辑：只要打开任何菜单，就把主队和哥哥补血到 50、把被俘状态解开、把哥哥强行 `AddHeroToPartyAction` 加回主队。这是硬编码的教学作弊，任何 mod 想让教程有真实风险都会撞上。第二，`SpawnRaiderParties` 依赖 `_defeatedRaiderPartyCount` 作为循环起点，所以玩家打赢一支后**不会立刻补上一支**——只在离开定居点时才会重新生成。第三，`DespawnRaiderParties` 会连 `MapTracker` 一起清掉，这个顺序不能颠倒。

## 主要成员

- `LocateAndRescueTravellerTutorialQuest()`：无参构造。建 `_raiderParties` 列表、`SetDialogs()`、`AddGameMenus()`、`InitializeQuestOnCreation()`，`SetTutorialFocusSettlement(village_ES3_2)`，若主队 ≥4 人则 `SpawnRaiderParties()`。
- `protected override void RegisterEvents()`：挂 `GameMenuOpened`、`OnSettlementLeftEvent`、`MapEventEnded`、`MobilePartyDestroyed`。
- `private MobileParty CreateRaiderParty()`：生成一支强盗队。使用 `SettlementHelper.FindNearestHideoutToMobileParty` 定位藏身处、在村庄门附近找可达点生成、放入 `tutorial_placeholder_volunteer` 作为俘虏、`AddMapTracker`、置 `IsActive`。
- `private void SpawnRaiderParties()` / `DespawnRaiderParties()`：成对使用。前者从 `_defeatedRaiderPartyCount` 起生成到 3 支；后者先 `RemoveMapTracker` 再 `DestroyPartyAction.Apply`，最后 `Clear()`。
- `private void OnMapEventEnded(MapEvent mapEvent)`：胜利时逐支判断是否参与、累加 `_defeatedRaiderPartyCount`、更新日志、把败方队伍 `MemberRoster.Clear()`、必要时从列表移除。
- `private void OnSettlementLeft(MobileParty party, Settlement settlement)`：玩家离开村庄时，主队 <4 人就清队 + 弹提示，否则重新 `SpawnRaiderParties()`。
- `protected override void HourlyTick()`：主队 <4 人且游戏内整点每 12 小时一次，清队 + 弹提示 + `Campaign.Current.TimeControlMode = Stop`。
- `protected override void OnCompleteWithSuccess()`：`RemoveTutorialFocusSettlement()` + `RemoveTutorialFocusMobileParty()`。
- `[SaveableField(1..4)]`：`_raiderPartyCount`、`_raiderParties`、`_defeatedRaiderPartyCount`、`_startQuestLog` 全部存档。

## 使用示例

```csharp
// 遭遇菜单劫持：把玩家从普通遭遇菜单切到教学专用菜单
private void OnGameMenuOpened(MenuCallbackArgs args)
{
    if (Settlement.CurrentSettlement == null && PlayerEncounter.EncounteredMobileParty != null &&
        this._raiderParties.Contains(PlayerEncounter.EncounteredMobileParty) &&
        args.MenuContext.GameMenu.StringId != "encounter_raiders_quest")
    {
        GameMenu.SwitchToMenu("encounter_raiders_quest");
    }
}

// 教学兜底：血量不足直接拉满，被俘直接和平释放
if (Hero.MainHero.HitPoints < 50 && MobileParty.MainParty.MapEvent == null)
{
    Hero.MainHero.Heal(50 - Hero.MainHero.HitPoints, false);
}
if (Hero.MainHero.IsPrisoner)
{
    EndCaptivityAction.ApplyByPeace(Hero.MainHero, null);
}
```

## 风险与边界

跨读档：四个存档字段覆盖了计数与队伍列表，`InitializeQuestOnGameLoad` 只重挂对话和菜单，**不会重新检查主队人数**——所以旧存档读回来如果主队 <4 人，会一直靠 `HourlyTick` 的 12 小时兜底。队伍列表存档意味着"被打死的队"和"存活的队"要靠 `OnMobilePartyDestroyed` 清理；如果某个队因为别的原因（AI 吞并）被销毁而事件没触发，列表里会留下失效引用，后续遍历时可能 NRE。硬编码 `"village_ES3_2"` 出现在 `CreateRaiderParty` 和 `SetTutorialFocusSettlement` 里。`CampaignTime.Never` 意味着无时限；任务永远不会失败，只可能因为 Tacitus 已被别的系统移除而永久卡住。

## 依赖关系

- [FindHideoutTutorialQuest（同阶段后续教程）](../FindHideoutTutorialQuest)
- [VillagersInNeed（并行教程支线）](../VillagersInNeed)
- [TalkToTheHeadmanTutorialQuest（前置教程）](../TalkToTheHeadmanTutorialQuest)