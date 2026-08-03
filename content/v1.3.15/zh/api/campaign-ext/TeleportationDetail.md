---
title: "TeleportationDetail"
description: "说明英雄立即或延迟前往据点、部队、总督位或部队领袖位时的 TeleportHeroAction 原因与生命周期。"
---
# TeleportationDetail

**命名空间：** `TaleWorlds.CampaignSystem.Actions`  
**模块：** `TaleWorlds.CampaignSystem`  
**类型：** `public enum TeleportHeroAction.TeleportationDetail`  
**基类：** `System.Enum`  
**源文件：** `TaleWorlds.CampaignSystem/Actions/TeleportHeroAction.cs`

## 一句话职责

标记英雄传送的目标和时间语义，使名册、总督、部队领袖、AI 和延迟传送存档能选择正确的迁移分支，避免把请求事件误当成目标已抵达的通知，并保留立即与延迟路径的分流含义。

## 心智模型

`TeleportationDetail` 是 [`TeleportHeroAction`](../TeleportHeroAction) 的原因标签。Action 先发送 `OnHeroTeleportationRequestedEvent`，再根据值选择立即加入据点/部队，或把英雄置为 Traveling 并交给 `TeleportationCampaignBehavior` 的延迟队列。立即部队领袖路径还会清理队伍名称缓存、恢复队伍决策并取消待解散状态；延迟路径会先移除旧的总督/名册关系。

这意味着事件是“请求已被接受、具体迁移正在按分支执行”的同步边界，不是一个保证目标已经完成加载的回调。模组应调用对应的 `ApplyImmediate*` 或 `ApplyDelayed*` 方法，不应自己从 `MemberRoster` 删除英雄后再发事件。

## 枚举值与典型时机

| 值 | 对应入口 | 含义 |
|---|---|---|
| `ImmediateTeleportToSettlement` | `ApplyImmediateTeleportToSettlement` | 立即离开旧位置并进入目标据点。 |
| `ImmediateTeleportToParty` | `ApplyImmediateTeleportToParty` | 立即加入目标移动部队。 |
| `ImmediateTeleportToPartyAsPartyLeader` | `ApplyImmediateTeleportToPartyAsPartyLeader` | 立即加入部队并成为领袖，同时清理待解散/决策状态。 |
| `DelayedTeleportToSettlement` | `ApplyDelayedTeleportToSettlement` | 根据延迟传送模型安排前往据点。 |
| `DelayedTeleportToParty` | `ApplyDelayedTeleportToParty` | 安排稍后加入移动部队。 |
| `DelayedTeleportToSettlementAsGovernor` | `ApplyDelayedTeleportToSettlementAsGovernor` | 安排稍后成为据点总督。 |
| `DelayedTeleportToPartyAsPartyLeader` | `ApplyDelayedTeleportToPartyAsPartyLeader` | 安排稍后加入部队并成为领袖。 |

枚举顺序不是延迟队列的存档格式。延迟数据由 `TeleportationCampaignBehavior` 保存英雄、目标、时间和角色标志。

## 依赖与事件下游

- **上游：** [`TeleportHeroAction`](../TeleportHeroAction)、[`Hero`](../../campaign/Hero)、[`Settlement`](../../campaign/Settlement)、[`MobileParty`](../../campaign/MobileParty) 和 `DelayedTeleportationModel`。
- **事件：** [`CampaignEvents`](../CampaignEvents) 的 `OnHeroTeleportationRequestedEvent` 类型为 `IMbEvent<Hero, Settlement, MobileParty, TeleportHeroAction.TeleportationDetail>`。
- **下游：** `TeleportationCampaignBehavior`、[`CampaignBehaviorBase`](../CampaignBehaviorBase)、`DisbandPartyCampaignBehavior`、Nameplate 和总督/队伍 Behavior 消费原因。
- **存档：** 延迟传送的 `TeleportationData` 以 [`IDataStore`](../IDataStore)/SaveSystem 保存；立即请求本身不应被模组当作持久队列。

## 风险与生命周期

- 立即传送可能先从旧队伍名册移除英雄，再进入据点或目标部队；不要在回调中继续使用旧 `PartyBelongedTo`，应重新读取英雄当前归属。
- 目标据点或部队为空、目标队伍正在交战/无效，或英雄已死亡时，Action 的分支可能提前返回；调用前要检查真实目标和 Campaign 生命周期。
- 成为部队领袖会改变自定义名称、AI 决策和解散状态；不要把 `ImmediateTeleportToParty` 与 `ImmediateTeleportToPartyAsPartyLeader` 混用。
- 延迟传送会把 `Hero`、目标和 `CampaignTime` 写入持久数据。不要销毁目标、在模组自己的列表中长期缓存旧对象，或在 `SyncData` 外维护另一套延迟队列。
- 事件是同步请求通知，非序列化监听器在读档后不会收到过去的传送请求；运行时缓存应从 `TeleportationCampaignBehavior` 或英雄当前状态重建。

## 真实使用示例

内置 `TeleportationCampaignBehavior` 使用下面的事件形状接收请求：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;

public sealed class TeleportAuditBehavior : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        CampaignEvents.OnHeroTeleportationRequestedEvent.AddNonSerializedListener(this, OnTeleportRequested);
    }

    private void OnTeleportRequested(
        Hero hero,
        Settlement targetSettlement,
        MobileParty targetParty,
        TeleportHeroAction.TeleportationDetail detail)
    {
        if (hero != null && detail == TeleportHeroAction.TeleportationDetail.DelayedTeleportToSettlementAsGovernor)
        {
            RecordGovernorMove(hero, targetSettlement);
        }
    }

    private void RecordGovernorMove(Hero hero, Settlement targetSettlement)
    {
        // 只记录请求；实际到达由延迟传送 Behavior 在正确时机完成。
    }

    public override void SyncData(IDataStore dataStore)
    {
        // 这个示例不复制 TeleportationCampaignBehavior 的存档队列。
    }
}
```

真实移动应从 `Campaign.Current` 已建立、目标有效的战役流程调用 `TeleportHeroAction.ApplyDelayedTeleportToSettlementAsGovernor(hero, settlement)` 或对应入口；不要把 `Hero.ChangeState` 当作完整传送。

## 版本注记

1.3.15 与 1.4.5 都有七个值和相同的立即/延迟分支。1.4.5 增加的完整延迟存档与队伍 AI 处理是当前风险说明的权威语义。

## 导航

- ↑ 父级：[Campaign-Ext API](../)
- ↔ 同级：[TeleportHeroAction](../TeleportHeroAction) · [DisbandPartyAction](../DisbandPartyAction)
- ↓ 所属：[CampaignEvents](../CampaignEvents) · [CampaignBehaviorBase](../CampaignBehaviorBase)
- 相关：[Hero](../../campaign/Hero) · [Settlement](../../campaign/Settlement) · [MobileParty](../../campaign/MobileParty) · [IDataStore](../IDataStore)
