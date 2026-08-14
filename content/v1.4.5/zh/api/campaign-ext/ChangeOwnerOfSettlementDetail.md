---
title: "ChangeOwnerOfSettlementDetail"
description: "记录据点所有权由围城、交易、叛乱、赠礼或家族清理触发的原因，并说明其事件边界。"
---
# ChangeOwnerOfSettlementDetail

**命名空间：** `TaleWorlds.CampaignSystem.Actions`  
**模块：** `TaleWorlds.CampaignSystem`  
**类型：** `public enum ChangeOwnerOfSettlementAction.ChangeOwnerOfSettlementDetail`  
**基类：** `System.Enum`  
**源文件：** `TaleWorlds.CampaignSystem/Actions/ChangeOwnerOfSettlementAction.cs`

## 一句话职责

把据点所有权转移的业务原因随 `OnSettlementOwnerChangedEvent` 传给地图、驻军、任务和通知系统，使它们区分围城夺取、叛乱、交易和清理。

## 心智模型

`ChangeOwnerOfSettlementDetail` 不是据点的当前所有者，也不决定谁能占领据点。它是 [`ChangeOwnerOfSettlementAction`](../ChangeOwnerOfSettlementAction) 的内部原因标签。公开 `ApplyBy*` 方法完成 `Settlement` 的所有者、城镇/城堡组件、地图视觉和相关缓存的更新后，才通过 `CampaignEvents.OnSettlementOwnerChangedEvent` 发出它。

`Settlement.OwnerClan` 是只读的派生属性：村庄会跟随 `Village.Bound.OwnerClan`，城镇或城堡会跟随 `Town.OwnerClan`，不能直接赋值。模组需要转移据点时，应根据来源调用 `ApplyBySiege`、`ApplyByBarter`、`ApplyByGift` 等入口；Action 会更新底层所有权状态并发布事件，不应手动重复发布。监听器可以把原因用于日志或任务分支，但不应把事件当成“所有权尚未变化”的预告。

## 枚举值与典型时机

| 值 | 对应入口 | 含义 |
|---|---|---|
| `Default` | `ApplyByDefault` | 没有更窄业务原因的普通所有权转移。 |
| `BySiege` | `ApplyBySiege` | 围城胜利后由俘获者/新领主接管据点。 |
| `ByBarter` | `ApplyByBarter` | 通过交易或议价交换据点。 |
| `ByLeaveFaction` | `ApplyByLeaveFaction` | 领主离开派系时处理其据点。 |
| `ByKingDecision` | `ApplyByKingDecision` | 王国决议决定所有权变更。 |
| `ByGift` | `ApplyByGift` | 赠礼流程把据点交给新的英雄。 |
| `ByRebellion` | `ApplyByRebellion` | 叛乱结果改变据点归属。 |
| `ByClanDestruction` | `ApplyByDestroyClan` | 原所有氏族消灭后的清理转移。 |

这些值的整数顺序不应进入模组存档。原因是本次事件的上下文，不是一个可长期持有的据点字段。

## 依赖

- **上游：** [`ChangeOwnerOfSettlementAction`](../ChangeOwnerOfSettlementAction) 接收 [`Settlement`](../../campaign/Settlement)、新旧 [`Hero`](../../campaign/Hero) 和围城/交易上下文。
- **事件：** [`CampaignEvents`](../CampaignEvents) 的 `OnSettlementOwnerChangedEvent` 类型为 `IMbEvent<Settlement, bool, Hero, Hero, Hero, ChangeOwnerOfSettlementAction.ChangeOwnerOfSettlementDetail>`。
- **下游：** [`CampaignEventReceiver`](../CampaignEventReceiver)、[`Army`](../../campaign-ext/Army)、驻军与建筑 Behavior、地图 Nameplate 和任务监听器会消费原因。
- **相关行动：** 围城结果通常还会联系 [`SiegeEvent`](../SiegeEvent)、[`SiegeAftermathAction`](../SiegeAftermathAction) 和 [`ChangeKingdomAction`](../ChangeKingdomAction)。
- **存档：** 所有者、城镇/城堡库存和关系状态持久化；事件原因仅在运行时传递。

## 风险与生命周期

- 直接写所有者字段会漏掉 garrison、建筑、村庄绑定、地图外观和 `Army` 成员的同步，可能留下“地图显示新领主、内部仍是旧领主”的状态。
- 事件参数中的 `openToClaim`、`newOwner`、`oldOwner` 和 `capturerHero` 可能为空或具有不同语义；不要仅凭 `detail` 假设所有参数都非空。
- 所有权事件会同步触发多个 Behavior。监听器里再次转移同一据点可能递归触发任务/缓存更新，也可能修改当前正在遍历的据点集合。
- 读档不会重播非序列化所有权事件。需要重建的 UI 或导航缓存应从 `Settlement` 当前所有者读取。

## 真实使用示例

下面的注册和签名与内置 `SettlementNameplatesVM`、`Army` 使用的事件形状一致：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;
using TaleWorlds.CampaignSystem.Settlements;

public sealed class SettlementOwnerBehavior : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        CampaignEvents.OnSettlementOwnerChangedEvent.AddNonSerializedListener(this, OnSettlementOwnerChanged);
    }

    private void OnSettlementOwnerChanged(
        Settlement settlement,
        bool openToClaim,
        Hero newOwner,
        Hero oldOwner,
        Hero capturerHero,
        ChangeOwnerOfSettlementAction.ChangeOwnerOfSettlementDetail detail)
    {
        if (detail == ChangeOwnerOfSettlementAction.ChangeOwnerOfSettlementDetail.BySiege && openToClaim)
        {
            RecordSiegeTransfer(settlement, oldOwner, newOwner, capturerHero);
        }
    }

    private void RecordSiegeTransfer(Settlement settlement, Hero oldOwner, Hero newOwner, Hero capturerHero)
    {
        // 使用当前 settlement 状态更新模组自己的运行时记录。
    }

    public override void SyncData(IDataStore dataStore)
    {
        // 事件原因不需要由这个示例单独保存。
    }
}
```

真正转移据点时应使用来源匹配的公开入口，例如围城结算调用 `ChangeOwnerOfSettlementAction.ApplyBySiege(newOwner, capturerHero, settlement)`，而不是自己修改所有权字段。

## 版本注记

1.3.15 与 1.4.5 都有八个原因值和相同的事件参数顺序。1.4.5 源码是本文调用时机与下游说明的权威来源。

## 导航

- ↑ 父级：[Campaign-Ext API](../)
- ↓ 所属 Action：[ChangeOwnerOfSettlementAction](../ChangeOwnerOfSettlementAction)
- ↔ 同级：[ChangeKingdomActionDetail](../ChangeKingdomActionDetail)
- 事件：[CampaignEvents](../CampaignEvents) · [CampaignEventReceiver](../CampaignEventReceiver)
- 相关：[Settlement](../../campaign/Settlement) · [Hero](../../campaign/Hero) · [SiegeEvent](../SiegeEvent)
