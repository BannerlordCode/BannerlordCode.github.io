---
title: "DisbandArmyAction"
description: "以原因标签结束临时战役军团；在玩家战后主动解散时结算影响力与关系成本，并清除每支部队的军团归属。"
---
# DisbandArmyAction

**命名空间：** `TaleWorlds.CampaignSystem.Actions`
**模块：** `TaleWorlds.CampaignSystem`
**类型：** `public static class DisbandArmyAction`
**源码：** `TaleWorlds.CampaignSystem/Actions/DisbandArmyAction.cs`

## 核心定位

通过官方的解散路径结束临时 `Army`，保留结束原因，并且只在玩家战后主动遣散时结算影响力与关系成本。

## 概述

军团解散会同时拆开所有 `MobileParty` 的军团归属、清空军团的成员列表与王国引用，并取消它继续运行的周期事件；每支地图部队本身仍然存活。`DisbandArmyAction` 是让这些状态一起收束的唯一安全入口，同时把“为何结束”传递给事件、AI、UI 和诊断逻辑。

## 心智模型

军团是围绕独立 `MobileParty` 建立的临时战略包装。解散**不会**删除部队或其兵员；它解除成员关系、跟随关系、共同目标和军团 tick。原因枚举也是战役语义的一部分：UI、事件、AI 与诊断可区分饥荒、凝聚力耗尽和玩家主动遣散。

当军团整体要结束时才调用某个 `ApplyBy*`。不要自行设置 `party.Army = null`、清空 `army.Parties` 或置空 `army.Kingdom`。它也不是结束战斗、转移兵员或删除地图部队的接口；这些分别属于 `MapEvent`、兵员表和部队生命周期。

## 依赖与官方路径

```text
DisbandArmyAction.ApplyByReason(army)
  -> 可选的玩家影响力和关系变更
  -> OnArmyDispersed(army, reason, hasMainParty)
  -> 每个成员 MobileParty.Army = null
  -> 附属、活跃且在陆地的部队移到领袖附近并保持
  -> 清空军团部队列表与 Kingdom 引用
  -> 删除军团的周期 tick 事件
```

`Army.DisperseInternal` 先阻止重入解散，再在清空成员前派发 `OnArmyDispersed`。事件处理器此时可检查当前军团，但回调返回后不能再把它当活跃对象保存。

| 依赖 | 为什么重要 |
|---|---|
| [`Army`](../Army) | 持有 `Parties`、`LeaderParty`、凝聚力、目标，并执行实际的 `DisperseInternal` 清理。 |
| [`MobileParty`](../../campaign/MobileParty) | 每个成员仍存活但失去 `Army` 引用；附属部队可能被重新定位并切到保持。 |
| [`Kingdom`](../../campaign/Kingdom) / [`Clan`](../../campaign/Clan) | 军团是王国战略对象；玩家遣散变体会扣除 `Clan.PlayerClan` 的资源。 |
| [`ChangeClanInfluenceAction`](../ChangeClanInfluenceAction) / [`ChangeRelationAction`](../ChangeRelationAction) | 仅玩家遣散原因使用，数值来自 `Campaign.Current.Models.DiplomacyModel`。 |
| 战役事件与存档 | `OnArmyDispersed` 让 Behavior 清掉缓存的军团计划。被解散军团的部队列表与王国都已清空，持久化引用会变陈旧。 |

## 选择真实发生的原因

| 入口 | 用于 |
|---|---|
| `ApplyByReleasedByPlayerAfterBattle` | 玩家在战后明确遣散军团。只有此变体会扣除 `DiplomacyModel.GetInfluenceCostOfDisbandingArmy()`，并修改符合条件的成员领主与玩家的关系。 |
| `ApplyByArmyLeaderIsDead` / `ApplyByLeaderPartyRemoved` | 军团领袖死亡，或领袖部队离开/被移除。 |
| `ApplyByNotEnoughParty` | 军团已没有足够部队维持存在。 |
| `ApplyByObjectiveFinished` | 攻城、劫掠、防守或脚本目标已经结束。 |
| `ApplyByPlayerTakenPrisoner` | 玩家主部队/领袖被俘；1.4.5 的 `PlayerCaptivity` 会为玩家领军团调用它。 |
| `ApplyByFoodProblem` / `ApplyByCohesionDepleted` | 触发饥荒阈值或凝聚力阈值。`Army` 在常规战役检查中调用它们。 |
| `ApplyByNoActiveWar` | 该势力已没有有意义的活跃战争。 |
| `ApplyByInactivity` | 集结/不活跃计数器达到上限。 |
| `ApplyByNoShip` | 航海路线不可用；与后期支持海战的流程相关。 |
| `ApplyByUnknownReason` | 仅限真实的兜底情形，例如 AI 状态不一致后的恢复。不能代替你为自身逻辑选择原因。 |

## 风险边界

- 在破坏性循环前快照 `kingdom.Armies` 或 `army.Parties`。该 Action 会清空部队列表和王国引用，事件处理器还可能改变邻近战役状态。
- 不要把玩家遣散变体当成免费的通用解散。它会扣玩家氏族影响力，并按模型对非主部队领袖结算关系成本，领袖部队与普通成员的成本不同。
- 调用后不要读取 `army.LeaderParty`、`army.Parties`、`army.Kingdom`，也不要把它当长期存档键。应从 `MobileParty.Army` 或王国列表重新获取当前军团。
- 正在 `MapEvent` 或围城时应让所属战役流程决定时机。即使 Action 防重入，在战斗边处理时拆开附属部队仍可能破坏地图事件假设。
- `ApplyByNoShip` 在 1.3.15 原因集合中已存在，但在 1.4.5 扩展航海语境中才更有意义；不要把它当普通移动失败标签。

## 真实获取路径示例

玩家军团可从 `MobileParty.MainParty.Army` 获取。下例沿用了真实 `PlayerCaptivity` 的获取路径，但只在对应的玩家战后决定中使用遣散原因：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;
using TaleWorlds.CampaignSystem.Party;

public void ReleasePlayerArmyAfterBattle()
{
    Army army = MobileParty.MainParty.Army;
    if (army != null && army.LeaderParty == MobileParty.MainParty)
    {
        DisbandArmyAction.ApplyByReleasedByPlayerAfterBattle(army);
    }
}
```

官方实现是在取得真实军团后读取外交模型并结算玩家成本。模组 UI 应先显示模型计算出的成本，再暴露该命令。

## 应使用其他操作的情况

| 意图 | 应使用 |
|---|---|
| 停止当前战略目标，但先让正常检查处理军团 | `Army.FinishArmyObjective()` |
| 只让一支部队离开军团 | 官方部队移除/离队流程，而不是整体解散 |
| 删除一支部队 | [`DestroyPartyAction`](../DestroyPartyAction) 或相应部队 Action |
| 改变王国战争状态 | `MakePeaceAction` 等外交 Action |
| 增加凝聚力 | `Army.BoostCohesionWithInfluence` |

## 导航

- ↑ [战役 Actions](./) · [API](../)
- ↔ [Army](../Army) · [Kingdom](../../campaign/Kingdom) · [MobileParty](../../campaign/MobileParty) · [Clan](../../campaign/Clan)
- 相关：[ChangeClanInfluenceAction](../ChangeClanInfluenceAction) · [ChangeRelationAction](../ChangeRelationAction) · [CampaignBehaviorBase](../CampaignBehaviorBase) · [崩溃边界](../../../architecture/crash-boundaries)
