---
title: "AiPartyThinkBehavior"
description: "地图 AI 的决策总循环：在每个 AI 小时 tick 中重置方思考参数、派发 AiHourlyTick 让军事/交战/军团成员等行为贡献候选得分，再选出最优 AIBehaviorData 并通过 SetPartyAiAction 落地移动指令、必要时创建或解散军团。"
---

# AiPartyThinkBehavior

**命名空间：** TaleWorlds.CampaignSystem.CampaignBehaviors.AiBehaviors
**模块：** TaleWorlds.CampaignSystem
**类型：** public class AiPartyThinkBehavior : CampaignBehaviorBase
**源文件：** Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CampaignBehaviors.AiBehaviors/AiPartyThinkBehavior.cs

## 概述

`AiPartyThinkBehavior` 是整张地图 AI 的“大脑”与总调度：它监听 `TickPartialHourlyAiEvent` 对每个 [MobileParty](../MobileParty) 跑一次 `PartyHourlyAiTick`。在该方法里，它重置方的思考缓存（`ThinkParamsCache`），派发 `CampaignEventDispatcher.Instance.AiHourlyTick`——这一下会唤醒 [AiMilitaryBehavior](../AiMilitaryBehavior)、[AiEngagePartyBehavior](../AiEngagePartyBehavior)、[AiArmyMemberBehavior](../AiArmyMemberBehavior) 各自往同一份 `PartyThinkParams` 里塞候选 [AIBehaviorData](../AIBehaviorData)；随后它挑出得分最高的候选，按意图类型调用 [SetPartyAiAction](../../campaign-ext/SetPartyAiAction) 把移动指令真正写进方的 AI，并在合适时通过 `Kingdom.CreateArmy` 组建军团或用 `DisbandArmyAction.ApplyByUnknownReason` 解散军团。其它 AI 行为只负责“打分”，落地这一锤由它完成。

## 心智模型

它是 `CampaignBehaviorBase`，在战役初始化时由引擎 `AddBehavior` 注册。它是少数直接监听 `TickPartialHourlyAiEvent` 的行为（即 AI 时钟的真正入口），其余三个 AI 行为只监听它派发的 `AiHourlyTickEvent`。每个方有“思考周期”（默认 6 小时，军团领袖/过渡/附庸等情况会缩短到 1~3 小时），由 `mobileParty.Ai.HourCounter` 控制；只有计数器归零且不是玩家方、且不在不兼容的战斗状态时才真正重算。新游戏创建时会先对每个方跑 6 次 `PartyHourlyAiTick` 来“播种”初始决策。它自身不序列化状态（`SyncData` 为空）。要影响 AI 决策，要么在它之前/之中贡献候选（仿照其它行为监听 `AiHourlyTickEvent`），要么通过 `party.Ai.RethinkAtNextHourlyTick = true` 强制它在下一周期重算。

## 何时使用 / 何时不要使用

- **使用**：需要“让某方立刻重新思考”时设置 `mobileParty.Ai.RethinkAtNextHourlyTick = true`；需要理解 AI 最终如何落子（创建军团、解散军团、调用 [SetPartyAiAction](../../campaign-ext/SetPartyAiAction)）时读 `PartyHourlyAiTick`；想插入新决策就监听 `AiHourlyTickEvent` 往 `PartyThinkParams` 加候选。
- **不要使用**：不要在外部直接给 `party.DefaultBehavior` 赋值来指挥移动——那会被本行为的汇总覆盖且不刷新短行为；必须走 [SetPartyAiAction](../../campaign-ext/SetPartyAiAction) 或 `SetMoveXxx`。不要在本行为之外复制它的“选最高分并调用 Action”逻辑（那是唯一的落地点，重复实现会导致不一致）。也不要在 `PartyHourlyAiTick` 之前假设 `ThinkParamsCache` 已被重置——重置发生在方法内。

## 依赖图

上游类型与系统：

- [Campaign](../Campaign) —— 持有并注册本行为，提供 `CampaignEventDispatcher.Instance` 用于派发 `AiHourlyTick`。
- [CampaignEvents](../CampaignEvents) —— 订阅 `TickPartialHourlyAiEvent`（主入口）、`OnSettlementOwnerChangedEvent`、`WarDeclared`、`MakePeace`、`OnClanChangedKingdomEvent`、`OnNewGameCreatedPartialFollowUpEndEvent`、`MobilePartyCreated`。
- [CampaignEventDispatcher](../CampaignEventDispatcher) —— `AiHourlyTick(mobileParty, thinkParamsCache)` 的派发者，唤醒其余三个 AI 行为。
- [MobileParty](../MobileParty) —— 被遍历、被读取/写入 AI 状态、被创建时触发重算。

下游与协同系统（被调用 / 写入）：

- [AiMilitaryBehavior](../AiMilitaryBehavior) / [AiEngagePartyBehavior](../AiEngagePartyBehavior) / [AiArmyMemberBehavior](../AiArmyMemberBehavior) —— 候选贡献者，共享同一 `PartyThinkParams`。
- [PartyThinkParams](../PartyThinkParams) —— 候选容器；本行为 `Reset` 后交给各行为打分，再读 `AIBehaviorScores` 选优。
- [AIBehaviorData](../AIBehaviorData) —— 候选与“无效”哨兵（`AIBehaviorData.Invalid`）的数据结构。
- [SetPartyAiAction](../../campaign-ext/SetPartyAiAction) —— 按枚举值把意图翻译成具体移动（raid/besiege/defend/patrol/visit/escort/go-around/move-to-land）。
- [PlayerEncounter](../PlayerEncounter) —— 在切换意图前若正与玩家交战则 `Finish()`。
- [DisbandArmyAction](../../campaign-ext/DisbandArmyAction) —— 当领袖方意图不再是合理的军团行为时解散军团。
- [FactionHelper](../../campaign-ext/FactionHelper) / [MobilePartyHelper](../../campaign-ext/MobilePartyHelper) —— 和平/易主/开战时清理相关敌对行动。
- [ChangeOwnerOfSettlementAction](../../campaign-ext/ChangeOwnerOfSettlementAction) / [DeclareWarAction](../../campaign-ext/DeclareWarAction) / [MakePeaceAction](../../campaign-ext/MakePeaceAction) / [ChangeKingdomAction](../../campaign-ext/ChangeKingdomAction) —— 阵营变更事件来源。
- [Army](../Army) / [Kingdom](../Kingdom) —— `Kingdom.CreateArmy` 在需要集结军团时调用；读 `Army.AiBehaviorObject`、`LeaderParty`。

## 风险

- **在 tick 里直接改方状态**：`PartyHourlyAiTick` 会调用 `mobileParty.MapEvent.FinalizeEvent()`、`SiegeEvent.FinalizeSiegeEvent()`、`DisbandArmyAction.ApplyByUnknownReason`、`Kingdom.CreateArmy` 等重操作。自定义代码若在 `AiHourlyTickEvent` 处理器里也改同一方的状态，会和这里的落地逻辑竞争，造成抖动或重复结算。
- **假设 `MobileParty.MainParty` 存在且非 null**：多处（强制重算、玩家军团领袖变更通知、主方特判）直接读 `MobileParty.MainParty`；在尚无玩家方或玩家方已销毁的极端情况下需自行判空。
- **改变“思考周期”语义**：`HourCounter` 与周期长度（1/3/6）共同决定重算频率；若你在别处修改 `HourCounter` 或 `RethinkAtNextHourlyTick`，可能让方永远不重算或每 tick 重算，拖垮性能。
- **跨战役/主菜单空引用**：方法内读取 `Campaign.Current.Models`、`Hero.MainHero`、`MobileParty.MainParty` 等；在战役未启动时调用会崩溃。
- **直接复制落地逻辑**：唯一落地点在 `PartyHourlyAiTick`，重复实现会让“候选→行动”的映射与官方分叉，难以维护。

## 成员说明

### 事件注册与生命周期

- **`RegisterEvents()`**
  - 用途：订阅 7 个 [CampaignEvents](../CampaignEvents)：核心 `TickPartialHourlyAiEvent`，以及阵营/方生命周期事件（`OnSettlementOwnerChangedEvent`、`WarDeclared`、`MakePeace`、`OnClanChangedKingdomEvent`、`OnNewGameCreatedPartialFollowUpEndEvent`、`MobilePartyCreated`）。
  - 副作用：仅注册监听。调用时机：注册时一次。

- **`SyncData(IDataStore dataStore)`**
  - 用途：无状态，空实现。
  - 副作用：无。调用时机：存档/读档。

- **`OnNewGameCreated(CampaignGameStarter gameStarter)`**
  - 用途：新游戏创建完成后，对每个 [MobileParty](../MobileParty) 预跑 6 次 `PartyHourlyAiTick`，让初始 AI 决策就位。
  - 副作用：间接触发各行为的候选写入与落地（创建/移动）。调用时机：`OnNewGameCreatedPartialFollowUpEndEvent`。

- **`OnMobilePartyCreated(MobileParty mobileParty)`**
  - 用途：新方创建时标记 `mobileParty.Ai.RethinkAtNextHourlyTick = true`，使其在下个周期参与思考。
  - 副作用：写 `Ai.RethinkAtNextHourlyTick`。调用时机：`MobilePartyCreated` 事件。

### 核心循环：每小时思考与落地

- **`PartyHourlyAiTick(MobileParty mobileParty)`**
  - 用途：AI 总调度。先判断是否禁用/不决策；计算本方的思考周期（军团领袖/过渡/附庸等会缩短）；当 `HourCounter` 归零且满足条件时，重置 `ThinkParamsCache`，派发 `AiHourlyTick` 让三个行为打分，再从 `AIBehaviorScores` 选出最高分（区分是否“可集结军团”），按意图调用 [SetPartyAiAction](../../campaign-ext/SetPartyAiAction) 落地；必要时 `Kingdom.CreateArmy` 组军团或 `DisbandArmyAction.ApplyByUnknownReason` 解散；若玩家是军团领袖且行为变更则发 `OnPlayerArmyLeaderChangedBehavior`。
  - 副作用：大量——可能改变 `DefaultBehavior`、创建/解散 [Army](../Army)、结束 [MapEvent](../MapEvent)/[SiegeEvent](../SiegeEvent)、调用 [PlayerEncounter](../PlayerEncounter).Finish。调用时机：`TickPartialHourlyAiEvent` 派发时。

### 阵营/定居点变更响应（修正既有行动）

- **`OnSettlementOwnerChanged` / `HandlePartyActionsAfterSettlementOwnerChange` / `CheckMobilePartyActionAccordingToSettlement`**
  - 用途：定居点易主后，遍历所有方，让“正前往该定居点”的方根据其是否处于军团中改去 `SetMoveModeHold`、回当前定居点或重算（`RethinkAtNextHourlyTick`）；若军团领袖的目标正是该定居点，则清空 `Army.AiBehaviorObject` 并 `FinishArmyObjective`。
  - 副作用：写方移动/重算标志、可能结束军团目标。调用时机：`OnSettlementOwnerChangedEvent`。

- **`OnWarDeclared` / `OnMakePeace` / `OnClanChangedKingdom`**
  - 用途：开战/议和/易主王国时，对相关方的 `TargetSettlement` 重新校验（开战时检查敌方方是否正前往某定居点；议和时经 [FactionHelper](../../campaign-ext/FactionHelper) 清理敌对行动；易主时走 `CheckMobilePartyActionAccordingToSettlement`）。
  - 副作用：可能触发 `SetMoveModeHold` / 重算。调用时机：对应 [CampaignEvents](../CampaignEvents)。

## 示例

强制让一个方在下一 AI 周期重新决策（常见且安全的做法，由本行为在 tick 中读取）：

```csharp
MobileParty party = MobileParty.MainParty;
if (party.Ai != null && !party.Ai.IsDisabled)
{
    party.Ai.RethinkAtNextHourlyTick = true;
}
```

读取本行为落地后的结果——判断一个方当前被哪类军事/互动行为驱动：

```csharp
MobileParty lord = someLordParty;
switch (lord.DefaultBehavior)
{
    case AiBehavior.RaidSettlement:
    case AiBehavior.BesiegeSettlement:
    case AiBehavior.DefendSettlement:
        Settlement target = lord.TargetSettlement;
        break;
    case AiBehavior.GoAroundParty:
    case AiBehavior.EscortParty:
        MobileParty other = lord.TargetParty;
        break;
}
```

## 怎么用

### 怎么拿到它

**源文件：** `bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CampaignBehaviors.AiBehaviors/AiPartyThinkBehavior.cs`（全文 333 行）。
**入口：** 官方已注册，不需 mod 重复添加；生效后由 `CampaignEvents.TickPartialHourlyAiEvent` 驱动，落地结果写在 `PartyBase.Ai.DefaultBehavior` / `ShortTermBehavior`。

**这是汇总裁决方，不是候选生产方。** `public class AiPartyThinkBehavior : CampaignBehaviorBase`（`AiPartyThinkBehavior.cs:12`），可 `new`，但**通常不需要你注册它——官方已经在，且少一个就是整局 AI 停摆。**

它注册七个事件（`AiPartyThinkBehavior.cs:16`），其中真正驱动决策的只有一个：`CampaignEvents.TickPartialHourlyAiEvent` → `PartyHourlyAiTick`（`AiPartyThinkBehavior.cs:18`）。**注意是 PartialHourly 不是 Hourly**——名字叫 `PartyHourlyAiTick` 但挂在半小 ticks 上，节流靠 `AiPartyThinkBehavior.cs:65` 的 `HourCounter % num` 判断。其余六个（`AiPartyThinkBehavior.cs:19`-`AiPartyThinkBehavior.cs:24`）全是「把状态打脏、逼它重新想」的触发器。

`SyncData` 是空的（`AiPartyThinkBehavior.cs:43`）。

两个开关值得单独记：`OnMobilePartyCreated`（`AiPartyThinkBehavior.cs:27`）对新方设 `RethinkAtNextHourlyTick = true`（`AiPartyThinkBehavior.cs:29`）；`OnNewGameCreated`（`AiPartyThinkBehavior.cs:32`）在开局时对每个方连跑六轮 `PartyHourlyAiTick`（`AiPartyThinkBehavior.cs:36`-`AiPartyThinkBehavior.cs:39`），**让各方在第一帧就有行为，不是一片 Hold。**

### 典型用法

**节流周期 `num` 是分四档算出来的**，默认 `6`（`:56`）。命中「军团领袖」/「正在转移」/「游离在军团外」/ `RethinkAtNextHourlyTick`/「正在打劫或攻城」时降到 `1`，其中「游离」单独看是 `3`（`:59`）。玩家自己的军团领袖再被强制回 `6`（`:61`-`:64`）。

**所以「让它马上重新决策」的正确写法是设标志位，不是调方法**——`RethinkAtNextHourlyTick` 会把 `num` 压到 1，下一个 tick 就重算。

汇总逻辑在 `:78` 的循环里跑两遍：一边取全局最高分（`:81`-`:85`），一边取**排除 `WillGatherArmy` 候选**的最高分（`:86`-`:90`）。**第二名只在 `:126` 的 `num2 <= num4` 时才被启用**——也就是最高分不够「过阈值」时的退路。

阈值本身分两档：巡逻与去城镇只要 `0.03`，其余要 `0.1`（`:98`），再乘以 `WillGatherArmy ? 2 : (是军团领袖 ? 0.33 : 1)`（`:99`）。**军团领袖被乘 0.33，意味着领袖的行为门槛是普通队伍的三倍。**

想判断一支队伍这次决策会不会真的落地，把三个门限量出来：

```csharp
public static class AiThinkThresholdProbe
{
    public static void Report(MobileParty party)
    {
        MBReadOnlyList<(AIBehaviorData, float)> scores = party.ThinkParamsCache.AIBehaviorScores;
        float top = -1f;
        for (int i = 0; i < scores.Count; i++)
        {
            if (scores[i].Item2 > top)
            {
                top = scores[i].Item2;
            }
        }
        bool isArmyLeader = party.Army != null && party.Army.LeaderParty == party;
        double baseThreshold = 0.1;
        double threshold = baseThreshold * (isArmyLeader ? 0.33 : 1f);
        Debug.Print(party.Name + " topScore=" + top + " threshold=" + threshold.ToString("F3"), 0);
        Debug.Print("hourCounter=" + party.Ai.HourCounter + " rethink=" + party.Ai.RethinkAtNextHourlyTick, 0);
    }
}
```

**决策被接受前有一道随机化**：`:101` 的循环掷 `num` 次骰子，只有 `MBRandom.RandomFloat < num2`（`:107`）才把 `flag3` 置真。**在「已经决定换」的情形下 `num2` 被直接抬到 `1f`（`:96`），所以那一步必定通过；随机性只影响「本来就在犹豫」的情况。**

`:109` 的第二个分支是死路之外的特例：当队伍 `MapEvent == null && Army == null && DefaultBehavior == Hold` 时，只要分数 `> 0.01f` 就直接换——**待机中的散兵不需要攒够 0.1 阈值。**

`:111`-`:124` 是落地时最重的一段：换行为前会先 `PlayerEncounter.Finish()`（`:115`）、`MapEvent.FinalizeEvent()`（`:119`）、`SiegeEvent.FinalizeSiegeEvent()`（`:123`）。**所以在 `AiHourlyTickEvent` 的自定义处理器里改同一支队伍的状态，会和这三行抢。**

### 最容易踩的坑

**在 tick 里直接改方状态**：`PartyHourlyAiTick` 会调用 `mobileParty.MapEvent.FinalizeEvent()`、`SiegeEvent.FinalizeSiegeEvent()`、`DisbandArmyAction.ApplyByUnknownReason`、`Kingdom.CreateArmy` 等重操作。自定义代码若在 `AiHourlyTickEvent` 处理器里也改同一方的状态，会和这里的落地逻辑竞争，造成抖动或重复结算。

## 参见

- ↑ 父级：[战役 API 索引](../)
- ↔ 相关：[AiBehavior](../AiBehavior) · [AiMilitaryBehavior](../AiMilitaryBehavior) · [AiEngagePartyBehavior](../AiEngagePartyBehavior) · [AiArmyMemberBehavior](../AiArmyMemberBehavior) · [AIBehaviorData](../AIBehaviorData) · [MobileParty](../MobileParty) · [MobilePartyAI](../MobilePartyAi) · [Army](../Army) · [CampaignEvents](../CampaignEvents) · [CampaignEventDispatcher](../CampaignEventDispatcher) · [PartyThinkParams](../PartyThinkParams) · [SetPartyAiAction](../../campaign-ext/SetPartyAiAction) · [PlayerEncounter](../PlayerEncounter) · [DisbandArmyAction](../../campaign-ext/DisbandArmyAction) · [FactionHelper](../../campaign-ext/FactionHelper) · [MobilePartyHelper](../../campaign-ext/MobilePartyHelper) · [ChangeOwnerOfSettlementAction](../../campaign-ext/ChangeOwnerOfSettlementAction) · [DeclareWarAction](../../campaign-ext/DeclareWarAction) · [MakePeaceAction](../../campaign-ext/MakePeaceAction) · [ChangeKingdomAction](../../campaign-ext/ChangeKingdomAction)
