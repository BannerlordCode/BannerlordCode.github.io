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

## 怎么用

### 怎么拿到它

`public class DisruptSupplyLinesConspiracyQuest : ConspiracyQuestBase` 声明在 `bannerlord-1.5.3/StoryMode/Quests/SecondPhase/ConspiracyQuests/DisruptSupplyLinesConspiracyQuest.cs:24`，全文 555 行。

**不要自己 new——反射造出来的。** [SecondPhase](../SecondPhase) 把它写进 `_conspiracyQuestTypes`（`SecondPhase.cs:120`），`Activator.CreateInstance(type, array)`（`:183`）传 `("conspiracy_quest_" + 次数, 导师Hero)`。构造函数 `public DisruptSupplyLinesConspiracyQuest(string questId, Hero questGiver)`（`:162`），基类 `: base(questId, questGiver)`（`:163`）→ [ConspiracyQuestBase](../ConspiracyQuestBase) 写死 21 天时限（`ConspiracyQuestBase.cs:67`）。

构造函数体（`:164`→`:179`）是**七站路线规划**：`this._questStartTime = CampaignTime.Now;`（`:164`），`list.Add(this.GetQuestFromSettlement())`（`:167`，实现在 `:181`），然后 `for (int i = 1; i <= 6; i++) list.Add(this.GetNextSettlement(list));`（`:168`→`:171`，实现在 `:241`）——**起点加 6 站，共 7 个聚落**。结果存进 `_caravanTargetSettlements` 数组（`:173`→`:176`），最后 `base.AddTrackedObject(this.QuestFromSettlement)`（`:178`）。

四个抽象成员 override：`SideNotificationText`（`:38`）、`StartMessageLogFromMentor`（`:50`）、`StartLog`（`:65`）、`ConspiracyStrengthDecreaseAmount`（`:80`）。`Title` 文案 `"{=y150haHv}Disrupt Supply Lines"`（`:32`）。

`RegisterEvents()`（`:323`）挂三条：`CampaignEvents.SettlementEntered`（`:325`）、`OnSettlementLeftEvent`（`:326`）、`MapEventEnded`（`:327`）——**进度是靠商队进出聚落驱动的，不是轮询**。

**本任务有两个被其它系统认出来的公开属性**：`ConspiracyCaravan` 与 `CaravanPartySize`。[StoryModePartySizeLimitModel](../StoryModePartySizeLimitModel) 用 `FirstOrDefault(q => !q.IsFinalized && q.GetType() == typeof(DisruptSupplyLinesConspiracyQuest))` 找到它（`:90`），命中且 `ConspiracyCaravan.Party == party`（`:94`）就返回 `new ExplainedNumber((float)questBase.CaravanPartySize, false, null)`（`:96`）——**商队人数上限完全由任务数据决定**。[StoryModeEncounterGameMenuModel](../StoryModeEncounterGameMenuModel) 也用**精确类型匹配**找到它（`:34`）来决定走基类菜单还是强制开战（`:37`/`:41`）。

另外它每次商队移动都发一条地图通知：`NewMapNoticeAdded(new ConspiracyQuestMapNotification(this, textObject))`（`:403`）。

### 典型用法

```csharp
// 1) 反射创建（正常路径）
StoryModeManager.Current.MainStoryLine.SecondPhase.CreateNextConspiracyQuest();

// 2) 精确定位这一类型的任务（源码就是这么找的）
QuestBase found = Campaign.Current.QuestManager.Quests
    .FirstOrDefault(q => !q.IsFinalized && q.GetType() == typeof(DisruptSupplyLinesConspiracyQuest));
if (found is DisruptSupplyLinesConspiracyQuest caravan && caravan.ConspiracyCaravan != null)
{
    Debug.Print("商队=" + caravan.ConspiracyCaravan.Name
              + "，任务数据人数上限=" + caravan.CaravanPartySize);
    // 该商队同时被人数上限与遭遇菜单特殊对待
    Debug.Print("实际队伍=" + caravan.ConspiracyCaravan.Party.PartySize);
}

// 3) 路线：起点 + 6 站
Debug.Print("起点=" + caravan.QuestFromSettlement.StringId);

// 4) 21 天时限的来源
Debug.Print("时限常量=" + SecondPhase.ConspiracyQuestDurationAsDays + " 天");
```

### 最容易踩的坑

它被另外两个模型用 **`q.GetType() == typeof(DisruptSupplyLinesConspiracyQuest)` 精确匹配**（`StoryModePartySizeLimitModel.cs:90`、`StoryModeEncounterGameMenuModel.cs:34`），**不是 `is`、不是 `BaseType` 比较**。你在 mod 里写一个继承它的子类（或把它改名换命名空间），这两个模型立刻找不到它：商队不再受 600/任务人数上限保护，遭遇时也不再保留任务交互，而是被强制开战。两个 `? :` 分支都退化到 `else`——静默失效，没有日志。

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