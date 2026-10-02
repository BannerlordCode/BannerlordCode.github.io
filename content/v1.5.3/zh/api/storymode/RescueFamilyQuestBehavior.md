---
title: "RescueFamilyQuestBehavior"
description: "氏族重建后的接续行为：玩家进入和平城镇时自动开出 RescueFamilyQuest，把 Radagos 与其三个弟妹从藏身处救回氏族。"
---
# RescueFamilyQuestBehavior

**Namespace:** StoryMode.Quests.PlayerClanQuests
**Module:** StoryMode
**Type:** `public class RescueFamilyQuestBehavior : CampaignBehaviorBase`
**Base:** CampaignBehaviorBase
**Source:** PlayerClanQuests/RescueFamilyQuestBehavior.cs

## 概述

教程与氏族重建之后的最后一环。它本身只是一个很薄的战役行为：等玩家在**和平城镇**里没别的事干时，自动开出内嵌的 `RescueFamilyQuest`，然后立刻和 Radagos 对话。那个任务才是重头——找到藏住处、与 Radagos 重逢、进藏处、决定单挑还是群战击败其副手 Galter、与哥哥汇合，最后选择放走 Radagos 还是处决他，整个过程结束时会把手下三个弟妹正式加入玩家氏族。

## 心智模型

行为只有两个状态位：`_rescueFamilyQuestReadyToStart`（存档）。它由 `RebuildPlayerClanQuest` 完成事件置真，然后等待"玩家进入一个和平城镇、当前处于地图状态、没有对话在进行、且没有别的任务发布者在场"这一组条件全部满足。满足时它 `new RescueFamilyQuest().StartQuest()`、置回 false、并直接打开与 Radagos 的地图对话。

`SyncData` 只存这一个 bool——这是理解本类的关键：**行为的全部跨存档状态就是这个"待启动"标记**。任务本身的进度由内嵌任务的 `_rescueFamilyQuestState` 枚举承担。

坑：`OnSettlementEntered` 里的"有没有别的任务发布者"检查会遍历 `Campaign.Current.QuestManager.Quests`，比较 `quest.QuestGiver.CurrentSettlement == settlement`。这意味着**只要有任何任务的发布者恰好站在这个城镇里，救援任务就永远开不出来**。玩家很容易遇到"进了城但什么都没发生"的困惑。另外 `CanHeroDie` 里对 `StoryModeHeroes.RadagosHenchman` 的保护条件写得很绕——"家族还没救回 / 已标记待启动 / 该任务正在进行且死因不是处决"三选一，只要满足其一就不许死。

## 主要成员

- `internal RescueFamilyQuestBehavior()`：**internal 构造函数**，意味着外部代码不能直接 `new` 它，只能由行为管理器反射创建。
- `public override void RegisterEvents()`：挂 `CampaignEvents.OnGameLoadedEvent`（静态处理器 `OnGameLoadedEvent`，参数是 `CampaignGameStarter`）、`SettlementEntered`、`OnQuestCompletedEvent`、`CanHaveCampaignIssuesEvent`、`CanHeroDieEvent`。
- `public override void SyncData(IDataStore dataStore)`：`dataStore.SyncData<bool>("_rescueFamilyQuestReadyToStart", ...)`。
- `private void OnSettlementEntered(MobileParty party, Settlement settlement, Hero hero)`：**启动判定**。要求 `_rescueFamilyQuestReadyToStart`、主队、城镇、非交战、处于 `MapState`、无对话在跑、无其他任务发布者在场。
- `private void OnQuestCompleted(QuestBase quest, QuestBase.QuestCompleteDetails detail)`：`RebuildPlayerClanQuest` 完成 → 置 `_rescueFamilyQuestReadyToStart = true`；`RescueFamilyQuest` 完成 → 置 false + 恢复 Radagos 的可交易/可入藏处标记。
- `private void CanHaveCampaignIssuesInfoIsRequested(Hero hero, ref bool result)`：家族未救回时，Radagos 与 RadagosHenchman 不产生战役随机问题。
- `private void CanHeroDie(Hero hero, KillCharacterAction.KillCharacterActionDetail causeOfDeath, ref bool result)`：保护 RadagosHenchman 不被意外杀死。
- `public class RescueFamilyQuest : StoryModeQuestBase`（内嵌，见独立页）：任务 ID `rescue_your_family_storymode_quest`，含七态私有枚举状态机与 `[LoadInitializationCallback]` 旧存档迁移。

## 使用示例

```csharp
// 启动判定：所有条件都满足才开任务，且必须是和平城镇
private void OnSettlementEntered(MobileParty party, Settlement settlement, Hero hero)
{
    if (!this._rescueFamilyQuestReadyToStart || party != MobileParty.MainParty) return;
    if (!settlement.IsTown) return;
    if (settlement.MapFaction.IsAtWarWith(Hero.MainHero.MapFaction)) return;
    if (!(GameStateManager.Current.ActiveState is MapState)) return;
    if (Campaign.Current.ConversationManager.IsConversationFlowActive) return;

    bool taken = false;
    foreach (QuestBase q in Campaign.Current.QuestManager.Quests)
        if (q.QuestGiver != null && q.QuestGiver.CurrentSettlement == settlement) { taken = true; break; }

    if (!taken)
    {
        new RescueFamilyQuestBehavior.RescueFamilyQuest().StartQuest();
        this._rescueFamilyQuestReadyToStart = false;
    }
}
```

## 风险与边界

唯一的存档状态是 `_rescueFamilyQuestReadyToStart`，所以**"玩家完成了氏族重建但还没进城镇"这个状态能正确跨存档保留**；一旦任务开启，标记就清掉，若此刻读档则任务本身靠内嵌枚举恢复。`internal` 构造函数 + 行为框架意味着 mod 无法替换它而不改模块。启动条件的最后一项（无其他任务发布者）会让任务"卡在待启动"却毫无提示——这是玩家报 bug 的高频来源。行为本身不注册 `SyncData` 之外的任何持久化内容，`OnGameLoadedEvent` 是静态方法说明它只做一次性引导，不监听后续。

## 依赖关系

- [RescueFamilyQuest（内嵌的任务类型）](../RescueFamilyQuest)
- [RebuildPlayerClanQuestBehaviorTypeDefiner（存档注册）](../RebuildPlayerClanQuestBehaviorTypeDefiner)
- [RebuildPlayerClanQuest（前置任务）](../RebuildPlayerClanQuest)
- [CampaignBehaviorManager（战役行为的注册与获取入口）](../../campaign-ext/CampaignBehaviorManager)
- [CampaignEvents（OnGameLoadedEvent / OnQuestCompletedEvent 等）](../../campaign/CampaignEvents)