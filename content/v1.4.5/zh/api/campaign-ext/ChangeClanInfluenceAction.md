---
title: "ChangeClanInfluenceAction"
description: "战役层唯一的氏族影响力改写入口：提交一次影响力增量，并同步经战役事件分发器广播该增量，使 UI 与 Behavior 看到一致的状态变化。"
---
# ChangeClanInfluenceAction

**命名空间:** TaleWorlds.CampaignSystem.Actions
**模块:** TaleWorlds.CampaignSystem
**类型:** `public static class ChangeClanInfluenceAction`
**Base:** 无（静态类，隐式继承 `System.Object`）
**源文件:** `TaleWorlds.CampaignSystem/Actions/ChangeClanInfluenceAction.cs`

## 概述

`ChangeClanInfluenceAction` 是 Bannerlord 战役系统里**改变某个家族（Clan）影响力数值**的唯一正规入口。它本身不做任何费用计算、可行性判断或政策决策，只是把调用方已经决定好的那一次影响力增减，落库到 `Clan.Influence` 字段，并立刻通过 `CampaignEventDispatcher` 把同一笔增量广播给所有订阅了 `OnClanInfluenceChanged` 的接收者（UI、Behavior、Mod）。直接写 `Clan.Influence` 会跳过这条广播，导致其它系统看到一份没有来源的状态，进而显示与实际不一致、甚至错过应有的结算逻辑。

## 一句话职责

给某个家族提交一次影响力增减（正数奖励、负数扣除），并立即把同一笔增量通知给所有监听该家族影响力变化的战役系统。

## 心智模型

把它当成**“氏族影响力的受控写入闸门”**，而不是一个会替你算账的会计：

- **它改写的是战役持久状态**——`Clan.Influence`。这个值会随家族一并序列化进战役存档，所以每一次提交都会永久留存（包括刷错的负数）。
- **为什么必须走 `Apply` 而不是 `clan.Influence += x`**：`Apply` 在做完字段写之后，固定再调用 `CampaignEventDispatcher.Instance.OnClanInfluenceChanged(clan, amount)`。这是所有上层系统（家族面板、影响力条、每日结算 Behavior）感知影响力变化的唯一信号。直接改字段等于“哑改”，下游永远不知道发生了什么。
- **触发的级联**：`OnClanInfluenceChanged` 是同步派发，接收者会在 `Apply` 返回前就收到通知。任何在该事件接收者中再次调用 `ChangeClanInfluenceAction.Apply` 的代码，都会造成递归提交（见风险段）。
- **所在层**：纯战役（Campaign）层 Action，必须在 `Campaign.Current != null` 的战役线程里调用，不能用于任务（Mission）场景，也不能在菜单/对话回调之外的非战役上下文里调用。
- **Apply / ApplyInternal 契约**：公开方法 `Apply(clan, amount)` 只是把参数原样转发给私有方法 `ApplyInternal(clan, amount)`；真正的“改字段 + 派发事件”逻辑只在 `ApplyInternal` 里发生。原版保留这个拆分，是为将来能在 `Apply` 处统一插入前置校验/日志留出空间，而当前两个方法体等价。模组永远只该调用 `Apply`，不要反射访问或假设 `ApplyInternal` 的存在。

> 注意：它只动“影响力”，不碰金币、不处理家族决策流程、也不判断玩家是否付得起。费用与“是否该提交”的决定属于上层 Behavior / Model / UI。

## 何时用 / 何时不要用

**用它的场景**
- 你已经在所属逻辑里算好了“这次要加减多少影响力”，且希望 UI 与 Behavior 同步看到这次变化。
- 原版真实调用点：解散军团、放弃军团、围城善后、家族决议、说服领主、每日影响力结算等，都通过它提交增量。

**不要用 / 正确替代**
- 需要转账金币 → 用 [GiveGoldAction](../GiveGoldAction/)，而不是在这里改影响力。
- 需要改变两个家族之间的关系 → 用 `ChangeRelationAction`（见 [Hero](../../campaign/Hero/) 相关说明），不是影响力。
- 想“直接让数值变成 X” → 仍然用 `Apply(clan, targetX - clan.Influence)`，绝不要 `clan.Influence = targetX`；后者跳过事件广播。
- 决定是否要扣、扣多少 → 在调用方（Behavior / Model / VM）先算好，本 Action 不做空值与余额检查。

## 依赖图

| 角色 | 关联类型 / 页面 | 关系说明 |
|---|---|---|
| 目标状态 | [Clan](../../campaign/Clan/) | 持有被改写的持久化 `Influence` 字段；本 Action 是写它的唯一正规入口。 |
| 来源实体 | [Hero](../../campaign/Hero/) | 许多调用通过 `someHero.Clan` 取得家族；`Hero.AddInfluenceWithKingdom` 内部也走本 Action。 |
| 世界上下文 | [Campaign](../../campaign/Campaign/) | 必须在 `Campaign.Current` 存在时调用；费用常来自 `Campaign.Current.Models`。 |
| 下游事件 | [CampaignEventDispatcher](../CampaignEventDispatcher/) · [CampaignEvents](../CampaignEvents/) | 通过 `OnClanInfluenceChanged(clan, amount)` 同步广播给所有接收者。 |
| 费用来源 | [DiplomacyModel](../DiplomacyModel/) | 解散 / 放弃军团等费用由此 Model 计算，算完再交给 `Apply`。 |
| 上层流程 | [DisbandArmyAction](../DisbandArmyAction/) | 解散军团时先扣玩家氏族影响力再走善后；影响力是成本之一。 |
| 存档点 | [存档系统](../../../architecture/save-system/) | `Clan.Influence` 随家族一并序列化，提交结果会进入战役存档。 |

可观察顺序固定为“先改氏族，再派发”：接收者读到的 `clan.Influence` 已是新值，并用 `amount` 的符号与大小判断本次变化。

## 风险

- **在非战役上下文调用**：在 `Campaign.Current == null` 时（主菜单、任务场景、模块加载早期）调用会因为没有战役世界而失败或静默无效。务必在战役线程内、确认 `Campaign.Current != null` 后调用。
- **直接改字段绕过 Action**：`clan.Influence += x` 能改数字，却跳过 `OnClanInfluenceChanged`。依赖分发器的 UI 缓存、家族面板、每日结算 Behavior 会看到一份“没有来源”的状态，造成显示与实际不一致、甚至错过的结算逻辑。
- **正负号搞反**：`amount` 为正 = 加影响力，为负 = 扣。把奖励写成负数、把惩罚写成正数，是模组最常见的 bug，且会被直接写进存档、无法自动回滚。
- **重复提交（幂等）**：在菜单回调、对话选项或事件重入中把同一笔奖励 / 费用提交两次，会叠加双倍影响力。费用与奖励的“只提交一次”必须由调用方保证。
- **事件内递归**：在订阅 `OnClanInfluenceChanged` 的接收者里再次调用 `Apply`，会触发新一轮广播 → 无限递归或失控的影响力雪崩。
- **影响玩家氏族**：对 `Clan.PlayerClan` 提交大负值可能让玩家失去影响力驱动的决策资格；存档后不可逆。
- **它不是存档注册点**：本 Action 本身不调用任何 SaveManager 接口，但因为改的是已序列化的 `Clan.Influence`，结果会随家族一起持久化。失衡的变更即使没有异常也会坏档。

## 成员说明

#### `public static void Apply(Clan clan, float amount)`

- **作用**：对外唯一入口。提交一次影响力增量（正加负扣），并触发事件广播。
- **副作用**：执行 `clan.Influence += amount`，并同步调用 `CampaignEventDispatcher.Instance.OnClanInfluenceChanged(clan, amount)`。不做空值、余额或边界检查，也不对结果做钳制。
- **何时调用**：在战役线程、所属逻辑已选好合法氏族与增量后调用；典型来源是 Behavior 的每日 tick、Model 算完费用后、UI / VM 用户操作确认后。

```csharp
// 调用方已确认 clan 存活、amount 已算好
ChangeClanInfluenceAction.Apply(clan, amount);
```

#### `private static void ApplyInternal(Clan clan, float amount)`（内部实现）

- **作用**：真正执行“改字段 + 派发事件”的私有工作方法，由 `Apply` 直接调用。
- **副作用**：与 `Apply` 完全一致——`clan.Influence += amount` 后立即 `OnClanInfluenceChanged(clan, amount)`。当前版本中 `Apply` 与 `ApplyInternal` 体等价，`Apply` 只是薄转发层。
- **何时调用**：模组**不应**直接调用（方法是私有的）。原版保留这层拆分，是为将来在 `Apply` 统一插入前置校验 / 日志留出空间。

```csharp
// 原版 ApplyInternal 的实际实现
private static void ApplyInternal(Clan clan, float amount)
{
    clan.Influence += amount;
    CampaignEventDispatcher.Instance.OnClanInfluenceChanged(clan, amount);
}
```

## 最小真实示例

### 示例 1：放弃军团时按 DiplomacyModel 费用扣玩家氏族影响力

来自原版 `PlayerArmyWaitBehavior`：只有在战役存在、玩家氏族存在时才提交，费用由 `DiplomacyModel` 给出（真实 API，无占位）。

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;

if (Campaign.Current != null && Clan.PlayerClan != null)
{
    float cost = Campaign.Current.Models.DiplomacyModel
        .GetInfluenceCostOfAbandoningArmy();
    ChangeClanInfluenceAction.Apply(Clan.PlayerClan, -cost);
}
```

### 示例 2：家族决议中按已算好的费用扣除提案氏族影响力

来自原版 `KingdomElection` / `Clan` 决策链路：`influenceCost` 由上层流程预先算出，这里只负责提交。

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;

// proposerClan 来自王国决议上下文；influenceCost 为已确定的正整数费用
if (Campaign.Current != null && proposerClan != null)
{
    ChangeClanInfluenceAction.Apply(proposerClan, 0f - influenceCost);
}
```

## 导航

- ↑ [父级：战役扩展 API](../)
- ↔ [同级：ChangeGovernorAction](../ChangeGovernorAction/) · [ClaimSettlementAction](../ClaimSettlementAction/) · [ChangeVillageStateAction](../ChangeVillageStateAction/)
- 相关：[Clan](../../campaign/Clan/) · [Hero](../../campaign/Hero/) · [Campaign](../../campaign/Campaign/) · [DisbandArmyAction](../DisbandArmyAction/) · [CampaignEventDispatcher](../CampaignEventDispatcher/)
