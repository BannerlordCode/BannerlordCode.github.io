---
title: "AiEngagePartyBehavior"
description: "交战/截击决策行为：在每次 AI 小时 tick 中为领主方评估附近敌对 MobileParty，按相对兵力、距离、领袖关系与就近友方增援计算得分，产出 GoAroundParty 候选（去截击/交战该敌方），供 AiPartyThinkBehavior 汇总落地。"
---

# AiEngagePartyBehavior

**命名空间：** TaleWorlds.CampaignSystem.CampaignBehaviors.AiBehaviors
**模块：** TaleWorlds.CampaignSystem
**类型：** public class AiEngagePartyBehavior : CampaignBehaviorBase
**源文件：** Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CampaignBehaviors.AiBehaviors/AiEngagePartyBehavior.cs

## 概述

`AiEngagePartyBehavior` 负责地图 AI 中“要不要去打附近的另一支队伍”。它不在 [AiMilitaryBehavior](../AiMilitaryBehavior) 的定居点攻击范畴内，而是针对**移动中的敌方 [MobileParty](../MobileParty)**：在每次 `AiHourlyTick` 中，扫描半径内的敌方领主方，综合双方兵力比、距离、两方领袖关系、以及附近友方是否已在与该敌交战（叠加增援），算出一个 `GoAroundParty` 候选得分写进 `PartyThinkParams`。最终是否真的去截击，由 [AiPartyThinkBehavior](../AiPartyThinkBehavior) 在汇总所有候选后决定并落地。

## 心智模型

它是 `CampaignBehaviorBase`，由引擎在战役初始化时 `AddBehavior` 注册。与 [AiMilitaryBehavior](../AiMilitaryBehavior)、[AiArmyMemberBehavior](../AiArmyMemberBehavior) 一样，它本身不移动任何方，只监听 `CampaignEvents.AiHourlyTickEvent` 往 `PartyThinkParams` 贡献候选；该事件由 [AiPartyThinkBehavior](../AiPartyThinkBehavior) 派发。它在 `OnSessionLaunched` 里取出 `IDisbandPartyCampaignBehavior` 以对“等待解散的方”打折。无状态、不序列化（`SyncData` 空）。属于纯 Campaign 层；其评分逻辑重度依赖 `Campaign.Current.Models`（[EncounterModel](../EncounterModel)、[MapDistanceModel](../MapDistanceModel)）、`Campaign.MapDiagonal` 与距离缓存，因此只在战役运行期有效。

## 何时使用 / 何时不要使用

- **使用**：要理解“领主为什么会去追另一支队伍”时读其 `AiHourlyTick`；若要新增一类交战评分，仿照它监听 `AiHourlyTickEvent` 并向 `PartyThinkParams` 添加 `AiBehavior.GoAroundParty`（或 `EngageParty`）候选。
- **不要使用**：不要在方法内直接调 `SetMoveXxx` 去移动方——候选会被 [AiPartyThinkBehavior](../AiPartyThinkBehavior) 的汇总覆盖；应走 `PartyThinkParams.AddBehaviorScore`。不要假设 `Campaign.Current`、[EncounterModel](../EncounterModel)、[MapDistanceModel](../MapDistanceModel) 非空；也不要把“`GoAroundParty` 候选存在”误解为“该方一定会去交战”——那只是众多候选之一，最终由汇总裁决。

## 依赖图

上游类型与系统：

- [Campaign](../Campaign) —— 提供 `Campaign.Current.Models`（[EncounterModel](../EncounterModel)、[MapDistanceModel](../MapDistanceModel)）、`Campaign.MapDiagonal(Squared)`、距离工具与 `EstimatedAverageLordPartySpeed`。
- [CampaignEvents](../CampaignEvents) —— 订阅 `AiHourlyTickEvent`（核心）、`OnSessionLaunchedEvent`。
- [CampaignEventDispatcher](../CampaignEventDispatcher) —— `AiHourlyTick` 事件的派发者（[AiPartyThinkBehavior](../AiPartyThinkBehavior)）。
- [IDisbandPartyCampaignBehavior](../IDisbandPartyCampaignBehavior) —— `OnSessionLaunched` 取出，用于解散折扣除。
- [EncounterModel](../EncounterModel) —— 取海/陆遭遇最大距离阈值（`NeededMaximumLandDistanceForEncounteringMobileParty` / `...Naval...`）。
- [MapDistanceModel](../MapDistanceModel) —— 计算两定居点间距离（`GetDistance`）。

下游与协同系统（被调用 / 写入）：

- [AiPartyThinkBehavior](../AiPartyThinkBehavior) —— 派发事件并消费候选。
- [AiMilitaryBehavior](../AiMilitaryBehavior) / [AiArmyMemberBehavior](../AiArmyMemberBehavior) —— 同类候选贡献者，共享 `PartyThinkParams`。
- [PartyThinkParams](../PartyThinkParams) —— 通过 `AddBehaviorScore` 累加候选。
- [AIBehaviorData](../AIBehaviorData) —— 候选载体，固定为 `AiBehavior.GoAroundParty`、目标为 `mobileParty2`、记录导航类型与是否从港口出发。
- [MobileParty](../MobileParty) / [MobilePartyAI](../MobilePartyAi) —— 被遍历、读阵营/兵力/速度/关系；写入 `p.CurrentObjectiveValue` 与候选。
- [Hero](../Hero) —— 读两方领袖关系（`GetRelation`）影响得分。
- [Settlement](../Settlement) / [IMapPoint](../IMapPoint) —— 距离搜索与“敌方最近友方定居点”加成。

## 风险

- **在 tick 内直接改方状态**：本行为只产出候选，但自定义代码若在同类处理器里直接移动方，会与 [AiPartyThinkBehavior](../AiPartyThinkBehavior) 落地竞争。
- **假设 `Campaign.Current` / 模型非空**：`EncounterModel`、`MapDistanceModel`、`Campaign.MapDiagonal` 在主菜单/读档前为空；跨战役缓存或提前调用会崩溃。
- **跨战役缓存 `_disbandPartyCampaignBehavior`**：`OnSessionLaunched` 取一次并持有；若旧战役销毁后未重新触发会话启动，引用悬空（引擎正常流程会重取，但不要在别处自行缓存）。
- **距离搜索的性能开销**：`MobileParty.StartFindingLocatablesAroundPosition` 与嵌套的 `Settlement` 搜索在半径内对每个敌方方执行，半径由模型阈值 * 45 决定；在极多方/大地图时开销显著，自定义扩展需控制半径。
- **`MobileParty.MainParty` 特判**：多处读 `Hero.MainHero.MapFaction`、`MobileParty2 == MobileParty.MainParty`；玩家方缺席或状态异常时需判空。

## 成员说明

### 事件注册与生命周期

- **`RegisterEvents()`**
  - 用途：订阅 `AiHourlyTickEvent`（核心评分）与 `OnSessionLaunchedEvent`（取 disband 行为）。
  - 副作用：仅注册监听。调用时机：注册时一次。

- **`SyncData(IDataStore dataStore)`**
  - 用途：无状态，空实现。
  - 副作用：无。调用时机：存档/读档。

- **`OnSessionLaunched(CampaignGameStarter gameStarter)`**
  - 用途：取出 `IDisbandPartyCampaignBehavior` 缓存到 `_disbandPartyCampaignBehavior`。
  - 副作用：写私有字段。调用时机：`OnSessionLaunchedEvent`（每局一次）。

### 核心评估：交战候选

- **`AiHourlyTick(MobileParty mobileParty, PartyThinkParams p)`**
  - 用途：核心评分。先过滤（处于围城中的方、非领袖的军团成员、非王国阵营且无玩家阵营、商队、无领袖、距本方最近友方定居点过远/没有友方定居点等情况直接返回）；然后以“遭遇半径”扫描敌方领主方，对满足战争状态/攻击性/可见性条件的目标，综合兵力比、距离、双领袖关系、附近友方已交战增援、速度比、目标是否玩家方、防御性目标加成、停战优先级等折算出得分；若分数 > 0.05 且目标不在定居点内，再叠加“目标附近有本方友方定居点”的加分（并对解散中方打折），最终以 `AiBehavior.GoAroundParty` 把候选 `AddBehaviorScore` 进 `p`，同时写入 `p.CurrentObjectiveValue`。
  - 副作用：仅向 `p` 累加候选与写 `CurrentObjectiveValue`；不改任何方移动。调用时机：`AiHourlyTickEvent` 派发时（由 [AiPartyThinkBehavior](../AiPartyThinkBehavior) 驱动）。

## 示例

读取一个方当前是否被本行为的逻辑驱动去截击某敌（结果体现在短行为/目标方上，只读）：

```csharp
MobileParty party = MobileParty.MainParty;
if (party.ShortTermBehavior == AiBehavior.GoAroundParty && party.ShortTermTargetParty != null)
{
    // 该方正被交战/截击逻辑（含 AiEngagePartyBehavior 的贡献）导向目标方
    MobileParty interceptTarget = party.ShortTermTargetParty;
}
```

仿照本行为监听同一事件，新增一类“只追玩家方”的交战候选（不自行移动方）：

```csharp
public class PlayerHunterAi : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        CampaignEvents.AiHourlyTickEvent.AddNonSerializedListener(this, AiHourlyTick);
    }

    private void AiHourlyTick(MobileParty mobileParty, PartyThinkParams p)
    {
        if (mobileParty.LeaderHero == null || mobileParty.MapFaction == Hero.MainHero.MapFaction)
        {
            return;
        }
        MobileParty main = MobileParty.MainParty;
        if (main != null && main.MapFaction.IsAtWarWith(mobileParty.MapFaction))
        {
            AIBehaviorData data = new AIBehaviorData(
                main, AiBehavior.GoAroundParty,
                MobileParty.NavigationType.Default, willGatherArmy: false,
                isFromPort: false, isTargetingPort: false);
            p.AddBehaviorScore((data, 5f));
        }
    }

    public override void SyncData(IDataStore dataStore) { }
}
```

## 参见

- ↑ 父级：[战役 API 索引](../)
- ↔ 相关：[AiBehavior](../AiBehavior) · [AiMilitaryBehavior](../AiMilitaryBehavior) · [AiPartyThinkBehavior](../AiPartyThinkBehavior) · [AiArmyMemberBehavior](../AiArmyMemberBehavior) · [AIBehaviorData](../AIBehaviorData) · [MobileParty](../MobileParty) · [MobilePartyAI](../MobilePartyAi) · [Army](../Army) · [Hero](../Hero) · [CampaignEvents](../CampaignEvents) · [PartyThinkParams](../PartyThinkParams) · [IDisbandPartyCampaignBehavior](../IDisbandPartyCampaignBehavior) · [EncounterModel](../EncounterModel) · [MapDistanceModel](../MapDistanceModel) · [Settlement](../Settlement) · [IMapPoint](../IMapPoint)
