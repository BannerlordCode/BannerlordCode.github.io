---
title: "SiegeAftermath"
description: "SiegeAftermathAction.SiegeAftermath 的围城结算原因枚举，连接玩家选择、贡献分配、据点经济和事件日志。"
---
# SiegeAftermath

**命名空间：** `TaleWorlds.CampaignSystem.Actions`  
**模块：** `TaleWorlds.CampaignSystem`  
**类型：** `public enum SiegeAftermathAction.SiegeAftermath`（嵌套枚举）  
**基类：** `System.Enum`  
**源文件：** `TaleWorlds.CampaignSystem/Actions/SiegeAftermathAction.cs`

## 一句话职责

标记围城胜利后的 `Devastate`、`Pillage` 或 `ShowMercy` 选择，并把该选择连同参战贡献传给围城结算 Behavior，而不是把枚举整数保存为长期的围城状态。

## 心智模型

这个枚举不是据点当前繁荣度，也不是一个会自行执行掠夺的 Action。`SiegeAftermathAction.ApplyAftermath` 接收攻击方、据点、旧所有者和 `Dictionary<MobileParty, float>` 贡献表，然后把 `SiegeAftermathAction.SiegeAftermath` 交给 `CampaignEventDispatcher.OnSiegeAftermathApplied`。`SiegeAftermathCampaignBehavior` 直接应用繁荣、建筑、忠诚度和金币后果，并通过 `SiegeAftermathModel` 计算特性经验；`DefaultLogsCampaignBehavior` 记录结果。

因此，模组应在围城遭遇已经确定、贡献表仍对应本次 `MapEvent` 时调用 `ApplyAftermath`，不要把枚举当成“直接把据点夷为平地”的快捷 setter。

## 枚举值与典型时机

| 值 | 典型入口 | 下游语义 |
|---|---|---|
| `Devastate` | `SiegeAftermathAction.ApplyAftermath` | 选择最严厉的围城后处理，通常会提高破坏/经济惩罚。 |
| `Pillage` | `SiegeAftermathAction.ApplyAftermath` | 选择掠夺，通常把战利品/经济后果交给围城 Behavior。 |
| `ShowMercy` | `SiegeAftermathAction.ApplyAftermath` | 选择宽恕，使用较温和的结算分支。 |

枚举本身不包含数值成本、繁荣变化或获利金额；这些由当前战役 Behavior 和模型解释。

## 依赖

- **上游：** [`SiegeAftermathAction`](../SiegeAftermathAction)、[`SiegeEvent`](../SiegeEvent/)、[`MobileParty`](../../campaign/MobileParty) 和 [`Settlement`](../../campaign/Settlement)。
- **贡献数据：** `Dictionary<MobileParty, float>` 必须来自当前围城战斗，不能把别的地图事件的贡献表复用到本次结算。
- **事件：** [`CampaignEvents`](../CampaignEvents) 的 `OnSiegeAftermathAppliedEvent` 类型为 `IMbEvent<MobileParty, Settlement, SiegeAftermathAction.SiegeAftermath, Clan, Dictionary<MobileParty, float>>`。
- **下游：** `SiegeAftermathCampaignBehavior` 和 `DefaultLogsCampaignBehavior` 监听该事件。前者直接应用据点与金币效果；`SiegeAftermathModel` 由它调用来计算特性经验，不是独立事件消费者。
- **存档：** 结算后的据点和日志状态可保存；事件和瞬时贡献表不会在读档时重放。

## 风险与生命周期

- 只发 `OnSiegeAftermathAppliedEvent` 而不经过 Action，会让事件顺序与其他围城状态脱节；只调用 Action 也不会替你实现自定义经济后果。
- `attackerParty`、`settlement`、`previousSettlementOwner` 和贡献表必须与同一围城对应。错配会把奖励、日志或建筑损坏记到错误据点。
- 事件会同步触发多个 Behavior。不要在监听器中再次调用同一结算，避免重复繁荣变化、重复日志或二次奖励。
- 结算菜单和围城数据可能在当前 MapEvent 结束边界附近失效；不要延迟持有旧的 `MapEvent`/`MobileParty` 引用后再重放。

## 真实使用示例

内置 `DefaultLogsCampaignBehavior` 按下面的真实签名记录围城后果：

```csharp
using System.Collections.Generic;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.CampaignSystem.Settlements;

public sealed class SiegeAftermathBehavior : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        CampaignEvents.OnSiegeAftermathAppliedEvent.AddNonSerializedListener(this, OnSiegeAftermathApplied);
    }

    private void OnSiegeAftermathApplied(
        MobileParty attackerParty,
        Settlement settlement,
        SiegeAftermathAction.SiegeAftermath aftermath,
        Clan previousSettlementOwner,
        Dictionary<MobileParty, float> partyContributions)
    {
        if (settlement != null && partyContributions != null)
        {
            RecordAftermath(settlement, aftermath, partyContributions);
        }
    }

    private void RecordAftermath(Settlement settlement, SiegeAftermathAction.SiegeAftermath aftermath, Dictionary<MobileParty, float> partyContributions)
    {
        // 使用当前结算输入更新模组自己的日志或分析状态。
    }

    public override void SyncData(IDataStore dataStore)
    {
        // 这个示例不保存瞬时贡献表。
    }
}
```

如果模组拥有合法的围城结算入口，应调用 `SiegeAftermathAction.ApplyAftermath(attackerParty, settlement, aftermath, previousSettlementOwner, partyContributions)`；不要把枚举值写入 `Settlement` 字段。

## 版本注记

1.3.15 与 1.4.5 都使用嵌套类型 `SiegeAftermathAction.SiegeAftermath`，值为 `Devastate`、`Pillage`、`ShowMercy`。1.4.5 的围城 Behavior 是当前下游后果说明的权威来源。

## 导航

- ↑ 父级：[Campaign-Ext API](../)
- ↓ 所属 Action：[SiegeAftermathAction](../SiegeAftermathAction)
- ↔ 同级：[ChangeOwnerOfSettlementDetail](../ChangeOwnerOfSettlementDetail)
- 事件：[CampaignEvents](../CampaignEvents) · [CampaignEventReceiver](../CampaignEventReceiver)
- 相关：[SiegeEvent](../SiegeEvent/) · [Settlement](../../campaign/Settlement) · [MobileParty](../../campaign/MobileParty)
