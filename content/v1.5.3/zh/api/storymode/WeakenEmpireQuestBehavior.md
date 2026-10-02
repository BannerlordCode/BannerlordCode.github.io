---
title: "WeakenEmpireQuestBehavior"
description: "第二阶段反帝国线触发器：立场为反帝国时开出帝国城镇跌破 4 座的倒计时任务，达标后激活阴谋。"
---
# WeakenEmpireQuestBehavior

**Namespace:** StoryMode.Quests.SecondPhase
**Module:** StoryMode
**Type:** `public class WeakenEmpireQuestBehavior : CampaignBehaviorBase`
**Base:** CampaignBehaviorBase
**Source:** SecondPhase/WeakenEmpireQuestBehavior.cs

## 概述

`AssembleEmpireQuestBehavior` 的镜像版本。同样是无状态触发器 + 内嵌任务的两层结构：行为监听 `OnMainStoryLineSideChosenEvent`，当玩家选了 `CreateAntiImperialKingdom` 或 `SupportAntiImperialKingdom` 时开出 `WeakenEmpireQuestBehavior.WeakenEmpireQuest`；内嵌任务每小时检查"三个帝国残余王国的城镇总数是否已跌破 4 座"，达标即完成并激活阴谋。

## 心智模型

触发条件与帝国线互斥且对称，玩家在第一阶段只能选一次立场，因此两个行为只会开出一个。任务 ID `weaken_empire_quest`，无时限，导师是反帝国导师。

它的判定用的是一个非常朴素的**绝对值阈值**：把 `StoryModeData.NorthernEmpireKingdom` / `WesternEmpireKingdom` / `SouthernEmpireKingdom` 三个王国的城镇数量加起来，少于 4 就算完成。这与帝国线"按 66% 比例算"完全不同——前者要求绝对摧毁，后者要求相对占领。理解这个差异是理解第二阶段两条线难度设计的关键。

坑：`QuestConditionsHold()` 里直接访问三个静态属性，**任何一个为 null 都会崩**。在 mod 把某个帝国王国彻底 `DestroyKingdomAction` 掉之后，`StoryModeData.NorthernEmpireKingdom` 是否还返回有效对象取决于 `StoryModeData` 的缓存逻辑——如果它返回 null，`HourlyTick` 每小时抛一次异常。这也是为什么第三阶段的 `DefeatTheConspiracyQuest` 在处理最后一个王国时反而**复活**其他王国（`ReactivateKingdom`）：它需要那些对象仍然活着。

## 主要成员

- `public override void RegisterEvents()`：挂 `OnMainStoryLineSideChosenEvent`。
- `public override void SyncData(IDataStore dataStore)`：空实现——行为无状态。
- `private void OnMainStoryLineSideChosen(MainStoryLineSide side)`：立场为 `CreateAntiImperialKingdom` 或 `SupportAntiImperialKingdom` 时开出内嵌任务。
- `public class WeakenEmpireQuestBehaviorTypeDefiner : SaveableTypeDefiner`：构造 id `1005000`，注册内嵌 `WeakenEmpireQuest` 为 id 1。**这个编号与帝国线的 1002000 完全不同**，不可混用。
- `public class WeakenEmpireQuest : StoryModeQuestBase`（内嵌）：
  - `public WeakenEmpireQuest(Hero questGiver)`：`base("weaken_empire_quest", questGiver, CampaignTime.Never)`，置 `_weakenedEmpire = false`、`SetDialogs()`、`InitializeQuestOnCreation()`、写起始日志（含 `NUMBER=4` 变量）。
  - `protected override void RegisterEvents()`：`OnConspiracyActivatedEvent`、`OnClanChangedKingdomEvent`。
  - `private bool QuestConditionsHold()`：三个帝国残余王国的城镇总数 `< 4`。
  - `private void SuccessComplete()`：`CompleteQuestWithSuccess()` → `_weakenedEmpire = true` → `SecondPhase.Instance.ActivateConspiracy()`。
  - `private void OnConspiracyActivated()`：若自己已完成则跳过。
  - `private void OnClanChangedKingdom(...)`：玩家离开支持王国 → 取消任务 + `CancelSecondAndThirdPhase()`。
  - `private const int EmpireDefeatSettlementCount = 4`。

## 使用示例

```csharp
// 触发：反帝国立场一确定就开出目标追踪
private void OnMainStoryLineSideChosen(MainStoryLineSide side)
{
    if (side == MainStoryLineSide.CreateAntiImperialKingdom || side == MainStoryLineSide.SupportAntiImperialKingdom)
        new WeakenEmpireQuestBehavior.WeakenEmpireQuest(StoryModeHeroes.AntiImperialMentor).StartQuest();
}

// 判定：只看三个帝国残余王国还剩几座城镇，是绝对阈值而非比例
private bool QuestConditionsHold()
{
    return StoryModeData.NorthernEmpireKingdom.Towns.Count
         + StoryModeData.WesternEmpireKingdom.Towns.Count
         + StoryModeData.SouthernEmpireKingdom.Towns.Count < 4;
}
```

## 风险与边界

`StoryModeData.NorthernEmpireKingdom` 等静态属性在 `HourlyTick` 里**无 null 保护**——如果某个帝国王国被彻底摧毁并从 `Kingdom.All` 移除，这条线会在每小时 tick 时抛 `NullReferenceException`，且异常发生在 campaign tick 内，日志里往往看不到清晰的调用来源。这是本类最实际的风险。它也没有任何进度条显示，玩家只能看到"帝国城镇不足 4 座"这一个条件，成败完全靠地图上自己数。`_weakenedEmpire` 与 `EmpireDefeatSettlementCount` 都**不入存档**——阈值在读档时重新读取当前王国状态，是正确的；`_weakenedEmpire` 读档后退回 false 是与帝国线相同的轻微保护退化。

## 依赖关系

- [WeakenEmpireQuest（内嵌的任务类型）](../WeakenEmpireQuest)
- [AssembleEmpireQuestBehavior（帝国线的对称触发器）](../AssembleEmpireQuestBehavior)
- [ConspiracyProgressQuest（被激活后接管进度显示）](../ConspiracyProgressQuest)
- [CampaignBehaviorManager（战役行为的注册与获取入口）](../../campaign-ext/CampaignBehaviorManager)
- [SaveableTypeDefiner（存档类型定义机制）](../../save-system/SaveableTypeDefiner)