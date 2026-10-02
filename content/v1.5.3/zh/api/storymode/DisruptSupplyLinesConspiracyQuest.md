---
title: "DisruptSupplyLinesConspiracyQuest"
description: "阴谋任务之二：五天后刷出一支沿七城镇路线运粮的阴谋商队，途中拦截即算成功，削减 75 点阴谋强度。"
---
# DisruptSupplyLinesConspiracyQuest

**Namespace:** StoryMode.Quests.SecondPhase.ConspiracyQuests
**Module:** StoryMode
**Type:** `public class DisruptSupplyLinesConspiracyQuest : ConspiracyQuestBase`
**Base:** ConspiracyQuestBase
**Source:** SecondPhase/ConspiracyQuests/DisruptSupplyLinesConspiracyQuest.cs

## 概述

三个阴谋任务里最"追击"的一个。它构造时就在地图上规划一条**七个城镇的路线**（起点 + 最多六跳），五天后刷出一支带粮食/鱼/黄油的商队，沿着这条路线依次访问。玩家在任意一站打劫或摧毁它就算成功，削减 75 点阴谋强度——是三个任务里削减最多的。反过来，如果商队走到了最后一站还没被打，任务失败。

## 心智模型

路线在**构造期**就算好并存档（`_caravanTargetSettlements` 是一个 `Settlement[7]`），但商队本身要等 5 天才生成——`DailyTick` 里用 `_questStartTime.ElapsedDaysUntilNow >= 5f` 判断。生成后商队先访问 `_caravanTargetSettlements[1]`（不是 `[0]`），每到一个站点就 `OnSettlementEntered` 切下一站并补 10 份粮食，同时把追踪目标从当前站换成下一站。

坑非常密集。第一，`_questStartTime` 是 `[SaveableField(3)]` 的 `CampaignTime`，所以倒计时跨读档正确，但**商队 `null` 与"还没生成"是同一个状态**——`DailyTick` 只判 `== null`，如果商队被打掉后 `DestroyPartyAction` 已执行但字段没置 null（`MapEventEnded` 里是先 `DestroyPartyAction` 再 `BattleWon`，字段保持非 null），任务就直接结束了不会重生第二支，这是符合设计的。第二，`CaravanPartySize` 会随玩家势力成长：`GetQuestDifficultyMultiplier()` 把领地数、总实力、声望、同伴数、商队数、主队人数、玩家等级全部折算进去，上限 1.0。第四，`QuestFromSettlement` 是 `_caravanTargetSettlements[0]`、`QuestToSettlement` 是**最后一个**——但如果 `GetNextSettlement` 中途返回 null 并被塞进数组，后面 `OnSettlementEntered` 里的 `_caravanTargetSettlements[num]` 就会越界。这是 `GetNextSettlement` 三级降级都失败时的真实隐患。

## 主要成员

- `DisruptSupplyLinesConspiracyQuest(string questId, Hero questGiver)`：构造入口。记录 `_questStartTime = CampaignTime.Now`，规划七站路线，`AddTrackedObject(QuestFromSettlement)`。
- `public override float ConspiracyStrengthDecreaseAmount`：固定 `75f`（三个任务里最高）。
- `public MobileParty ConspiracyCaravan`：public 属性，直接暴露 `_questCaravanMobileParty`，供外部（例如 UI 或 mod）查询商队当前对象。
- `public int CaravanPartySize`：`70 + 70 * 难度系数`，public 属性。
- `private Settlement QuestFromSettlement` / `QuestToSettlement`：路线的首站与末站。
- `private Settlement GetQuestFromSettlement()` / `GetNextSettlement(List<Settlement>)`：三级降级的城镇筛选，要求可达、不属于玩家阵营、与玩家站在敌对文化阵营、距离在 100–500 之间。
- `protected override void DailyTick()`：**商队生成点**。商队为 null 且已过 5 天 → `CreateQuestCaravanParty()` + `SetDialogs()`。
- `private void CreateQuestCaravanParty()`：用立场对应的 `conspiracy_*_special_raider_party_template` 配兵，`ItemRoster` 塞 40 粮食 + 20 鱼 + 20 黄油，`SetDoNotMakeNewDecisions(true)`，派往第二站。
- `private void OnSettlementEntered(MobileParty party, Settlement settlement, Hero hero)`：**路线推进点**。到达末站 → `FailedToDisrupt()`；否则切下一站、补粮、换追踪目标。
- `private void OnSettlementLeft(MobileParty party, Settlement settlement)`：离开站点时写一条"正在把粮从 A 运往 B"的地图通知与日志。
- `private void OnMapEventEnded(MapEvent mapEvent)`：玩家赢 → `BattleWon()`；玩家输（且非平局）→ `BattleLost()`。
- `protected override void OnTimedOut()`：销毁商队后交给基类处理超时。
- `private void GetAdditionalVisualsForParty(CultureObject culture, out string mountStringId, out string harnessStringId)`：阿塞莱/库塞特用骆驼，其它文化用骡子。
- `protected override void InitializeQuestOnGameLoad()`：重挂对话、把商队的 `ActualClan` 改回阴谋氏族（防止它被吞并后归属漂移）。
- 常量：`NumberOfSettlementsToVisit = 6`、`SpawnCaravanWaitDaysAfterQuestStarted = 5`。
- `[SaveableField(1..3)]`：路线数组、商队、起始时间。

## 使用示例

```csharp
// 路线推进：到达非终点站就切下一站并补粮、换追踪目标
private void OnSettlementEntered(MobileParty party, Settlement settlement, Hero hero)
{
    if (this._questCaravanMobileParty != party) return;
    if (settlement == this.QuestToSettlement) { DestroyPartyAction.Apply(null, party); FailedToDisrupt(); return; }
    int next = Array.IndexOf(this._caravanTargetSettlements, settlement) + 1;
    SetPartyAiAction.GetActionForVisitingSettlement(this._questCaravanMobileParty,
        this._caravanTargetSettlements[next], MobileParty.NavigationType.Default, false, false);
    this._questCaravanMobileParty.ItemRoster.AddToCounts(DefaultItems.Grain, 10);
}
```

## 风险与边界

`QuestToSettlement` 取的是数组**最后一个元素**，而 `GetNextSettlement` 在三级降级全部失败时会返回 `null` 并被写入数组——这条路径下 `settlement == QuestToSettlement` 永远为假，商队会一路 `null` 目标直到异常。跨读档方面 `_questStartTime` 存档让 5 天等待正确续算，`_caravanTargetSettlements` 是 `readonly Settlement[]` 也存档；风险在 `InitializeQuestOnGameLoad` 只修 `ActualClan`，不校验商队是否已经走到路线末端——读档回到末站前的瞬间，任务会立刻判失败。商队的 `ActualClan` 必须是 `SecondPhase.ConspiracyClan`，否则它会被当成普通商队被劫掠 AI 攻击。此外 `GetQuestDifficultyMultiplier` 用了 9 项玩家实力指标，是个相当激进的做法——玩家越强，商队越大。

## 依赖关系

- [ConspiracyQuestBase（父类，21 天时限与削弱强度在此）](../ConspiracyQuestBase)
- [DestroyRaidersConspiracyQuest（并列阴谋任务）](../DestroyRaidersConspiracyQuest)
- [ConspiracyBaseOfOperationsDiscoveredConspiracyQuest（并列阴谋任务）](../ConspiracyBaseOfOperationsDiscoveredConspiracyQuest)
- [ConspiracyProgressQuest（阴谋强度仪表盘）](../ConspiracyProgressQuest)