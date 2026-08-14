---
title: "ShipOwnerChangeDetail"
description: "说明舰船因交易、转移、掠夺、生产或移动部队创建而更换所有者时的事件原因与金钱边界。"
---
# ShipOwnerChangeDetail

**命名空间：** `TaleWorlds.CampaignSystem.Actions`  
**模块：** `TaleWorlds.CampaignSystem`  
**类型：** `public enum ChangeShipOwnerAction.ShipOwnerChangeDetail`  
**基类：** `System.Enum`  
**源文件：** `TaleWorlds.CampaignSystem/Actions/ChangeShipOwnerAction.cs`

## 一句话职责

把舰船所有权迁移的来源传给 `OnShipOwnerChangedEvent`，使据点 Nameplate 通知和巡逻 AI 区分交易、掠夺与系统创建，避免下游把事件原因当成当前船主字段。

## 心智模型

`ShipOwnerChangeDetail` 是 [`ChangeShipOwnerAction`](../ChangeShipOwnerAction) 选定的原因，而不是 `Ship.Owner` 的替代字段。Action 先保存旧 `PartyBase`，在交易路径调用 `ShipCostModel` 并通过 [`GiveGoldAction`](../GiveGoldAction) 结算，再写入 `ship.Owner`、标脏双方海军视觉，最后发送 `CampaignEvents.OnShipOwnerChangedEvent`。

模组应使用 `ApplyByTrade`、`ApplyByTransferring` 或其他语义匹配的公开入口。不要直接设置所有者，也不要手动扣钱后再调用交易入口，否则可能重复结算。

## 枚举值与典型时机

| 值 | 对应入口 | 含义 |
|---|---|---|
| `ApplyByTrade` | `ApplyByTrade` | 通过交易购买或出售，Action 计算并结算舰船价格。 |
| `ApplyByTransferring` | `ApplyByTransferring` | 在两个所有者之间转移，不走交易价格。 |
| `ApplyByLooting` | `ApplyByLooting` | 掠夺或战斗结算夺取舰船。 |
| `ApplyByMobilePartyCreation` | `ApplyByMobilePartyCreation` | 创建移动部队时把船交给新部队。 |
| `ApplyByProduction` | `ApplyByProduction` | 生产完成后把船登记到目标所有者。 |

名称虽然带有 `ApplyBy`，但它们是原因枚举值；分支时不要比较底层整数。

## 依赖

- **上游：** [`ChangeShipOwnerAction`](../ChangeShipOwnerAction)、`Ship`、[`PartyBase`](../../campaign/PartyBase) 和 `ShipCostModel`。
- **金钱边界：** 只有 `ApplyByTrade` 进入价格计算和 [`GiveGoldAction`](../GiveGoldAction)；其他原因不是免费交易的别名。
- **事件：** [`CampaignEvents`](../CampaignEvents) 的 `OnShipOwnerChangedEvent` 类型为 `IMbEvent<Ship, PartyBase, ChangeShipOwnerAction.ShipOwnerChangeDetail>`。
- **下游：** `SettlementNameplateNotificationsVM` 和 `AiPatrollingBehavior` 消费所有权变更事件；权威调用点未显示港口或船厂 Behavior 监听该事件。
- **存档：** 船与所有者关系由战役保存；事件原因不为读档后的非序列化监听器重放。

## 风险与生命周期

- 直接写 `ship.Owner` 会漏掉旧/新部队的 naval visual dirty、船列表登记和 `OnShipOwnerChangedEvent`。
- `ApplyByTrade` 可能根据所有者是据点、商队、村民或领主而选择不同的金币路径；不要在外部预先支付同一笔 `cost`。
- 事件是同步发送的，监听器收到时所有权已经切换，但下游可能仍在处理视觉和队伍缓存；不要立刻销毁或再次转移同一艘船。
- `oldOwner` 可能为空，目标 owner 必须满足 Action 对移动部队/据点的要求；读取 `oldOwner.MobileParty` 前先判空。

## 真实使用示例

内置 `SettlementNameplateNotificationsVM` 使用下面的事件签名监听船主变化：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;
using TaleWorlds.CampaignSystem.Naval;
using TaleWorlds.CampaignSystem.Party;

public sealed class ShipOwnerBehavior : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        CampaignEvents.OnShipOwnerChangedEvent.AddNonSerializedListener(this, OnShipOwnerChanged);
    }

    private void OnShipOwnerChanged(
        Ship ship,
        PartyBase oldOwner,
        ChangeShipOwnerAction.ShipOwnerChangeDetail detail)
    {
        if (detail == ChangeShipOwnerAction.ShipOwnerChangeDetail.ApplyByLooting && ship != null)
        {
            RecordLootedShip(ship, oldOwner);
        }
    }

    private void RecordLootedShip(Ship ship, PartyBase oldOwner)
    {
        // 读取 ship 的新 Owner，更新模组自己的运行时海军索引。
    }

    public override void SyncData(IDataStore dataStore)
    {
        // 事件原因不在这个示例中单独持久化。
    }
}
```

若模组确实要转移舰船，应从真实的 `PartyBase` 和 `Ship` 获取对象后调用 `ChangeShipOwnerAction.ApplyByTransferring(newOwner, ship)`；交易则只能让 Action 负责价格和金币流。

## 版本注记

1.3.15 与 1.4.5 都有五个原因值和相同的 `OnShipOwnerChangedEvent` 参数顺序。1.4.5 的海军模块是当前金钱、视觉和调用时机说明的权威来源。

## 导航

- ↑ 父级：[Campaign-Ext API](../)
- ↓ 所属 Action：[ChangeShipOwnerAction](../ChangeShipOwnerAction)
- ↔ 同级：[ShipDestroyDetail](../ShipDestroyDetail)
- 事件：[CampaignEvents](../CampaignEvents) · [CampaignEventReceiver](../CampaignEventReceiver)
- 相关：[PartyBase](../../campaign/PartyBase) · [MobileParty](../../campaign/MobileParty) · [GiveGoldAction](../GiveGoldAction)
