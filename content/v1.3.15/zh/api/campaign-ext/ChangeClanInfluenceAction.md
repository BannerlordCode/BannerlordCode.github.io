---
title: "ChangeClanInfluenceAction"
description: "以战役事件同步方式改写氏族影响力的唯一状态入口：先提交增量，再向所有战役事件接收者发布同一增量。"
---
# ChangeClanInfluenceAction

**命名空间:** TaleWorlds.CampaignSystem.Actions  
**模块:** TaleWorlds.CampaignSystem  
**类型:** static class  
**源文件:** `TaleWorlds.CampaignSystem/Actions/ChangeClanInfluenceAction.cs`

## 职责

对一个 [Clan](../../campaign/Clan) 提交一次影响力增量，并把完全相同的增量经战役事件分发器发布出去。它是奖励或扣除影响力的状态转换边界，不负责制定政策或判断是否付得起。

## 心智模型

`Apply` 的实现刻意很短：先执行 `clan.Influence += amount`，紧接着调用 `CampaignEventDispatcher.Instance.OnClanInfluenceChanged(clan, amount)`。正数与负数没有两条流程；该类既不钳制结果，也不向 Model 询问费用是否可承担。原版调用方会在所属 Behavior 或 Model 内先算出并校验费用，再把已经决定的增量交给这里。例如军团管理 UI 在完成军团操作后扣玩家氏族影响力，围城善后 Behavior 则在计算出善后费用后才扣进攻方氏族。

当功能已经决定“应改变多少影响力”，且监听者必须看到这次改变时使用它。不要用它决定费用、转移金币，或取代王国决议、军团管理等本来就持有前置条件的高层流程。

## 依赖与执行顺序

| 角色 | 关联 | 原因 |
|---|---|---|
| 目标 | [Clan](../../campaign/Clan) | 持有本 Action 改写的持久化 `Influence` 值。 |
| 下游事件 | [CampaignEventReceiver](../CampaignEventReceiver) | 接收者经 `OnClanInfluenceChanged` 同步收到通知；UI 与 Behavior 可读取新值。 |
| 上游计算 | [Campaign](../../campaign/Campaign) | 原版调用方先由 `Campaign.Current.Models` 获得费用，再提交增量。 |
| 相关事务 | [DisbandArmyAction](../DisbandArmyAction) | 解散军团、凝聚力等高层流程可能以影响力作为成本。 |

可观察顺序固定为“先改氏族，再派发”。因此接收者应把 `clan.Influence` 当作已更新的值，并用 `amount` 判别本次提交的变化。

## 成员与调用时机

`Apply(Clan clan, float amount)` 是唯一公开入口。应在战役线程、所属功能已经选定合法增量后调用。它不做空值检查也不做余额检查；调用方必须持有存活氏族，并避免菜单回调或事件重入时把同一奖励/费用提交两次。

## 风险边界

直接写 `clan.Influence` 虽然会得到数字，却跳过 `OnClanInfluenceChanged`；依赖分发器的 UI 缓存或战役 Behavior 会看到没有来源的状态变化。反过来，在响应影响力变化的事件接收者中再次调用本 Action，可能递归提交新的增量。费用计算与“是否提交”的决定应留在监听者之外，并由所属流程保证幂等。

它不是存档注册操作，但风险仍会持久化：失衡或重复的变更即使没有异常，也会被写进战役存档。

## 真实获取路径示例

以下示例沿用原版玩家氏族费用的目标获取方式。Model 给出真实费用；仅在战役已存在时提交。

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

## 导航

- ↑ [战役扩展 API](../)
- ↔ [ChangeClanLeaderAction](./ChangeClanLeaderAction) · [ChangeGovernorAction](./ChangeGovernorAction)
- 相关：[Clan](../../campaign/Clan) · [Campaign](../../campaign/Campaign) · [DisbandArmyAction](../DisbandArmyAction)
