---
title: "MakePeaceDetail"
description: "区分普通媾和与王国决议媾和，并说明 MakePeaceAction 如何同步战争姿态、贡金和事件。"
---
# MakePeaceDetail

**命名空间：** `TaleWorlds.CampaignSystem.Actions`  
**模块：** `TaleWorlds.CampaignSystem`  
**类型：** `public enum MakePeaceAction.MakePeaceDetail`  
**基类：** `System.Enum`  
**源文件：** `TaleWorlds.CampaignSystem/Actions/MakePeaceAction.cs`

## 一句话职责

为结束派系战争保留“普通媾和”或“王国决议”来源，让外交、围城、任务和 UI 在 stance 已经中立后选择正确后续处理，而不是由监听器直接写派系关系或重新触发停战。

## 心智模型

`MakePeaceDetail` 是 [`MakePeaceAction`](../MakePeaceAction) 的事件原因。`Apply` 会把双方 stance 设为中立并清除/写入贡金期限，再按主角是否参与标脏可见据点和移动部队，最后通过 `CampaignEvents.MakePeace` 广播枚举值。`ApplyByKingdomDecision` 还会携带决议结算产生的每日贡金和期限。

它不是战争状态，也不是贡金字段。模组应调用 `ApplyByKingdomDecision` 表达决议结果，普通脚本才使用 `Apply`；不要直接改 `StanceLink` 或在 Action 之后重复发媾和事件。

## 枚举值与典型时机

| 值 | 对应入口 | 含义 |
|---|---|---|
| `Default` | `Apply` | 普通外交或不带王国决议贡金的媾和。 |
| `ByKingdomDecision` | `ApplyByKingdomDecision` | 王国决议已选定媾和，并需要写入每日贡金和持续时间。 |

两个值的整数顺序不是存档契约。模组若要保存原因，应保存命名业务结果。

## 依赖与事件下游

- **上游：** [`MakePeaceAction`](../MakePeaceAction)、[`IFaction`](../IFaction)、`FactionManager` 和王国决议。
- **核心状态：** `StanceLink` 变为中立，贡金通过 `SetDailyTributePaid` 写入；主角相关地图实体会标脏。
- **事件：** [`CampaignEvents`](../CampaignEvents) 的 `MakePeace` 类型为 `IMbEvent<IFaction, IFaction, MakePeaceAction.MakePeaceDetail>`。
- **下游：** `SiegeEventCampaignBehavior`、`PrisonerReleaseCampaignBehavior` 和 `AllianceCampaignBehavior` 消费媾和事件但通常不读取 `detail`；`CommentOnMakePeaceBehavior` 会明确按 `ByKingdomDecision` 分支。
- **反向操作：** 战争应走 [`DeclareWarAction`](../DeclareWarAction)，而不是手写 faction stance。

## 风险与生命周期

- 直接调用 `FactionManager.SetNeutral` 会漏掉贡金、可见地图外观和 `MakePeace` 事件；围城或俘虏 Behavior 可能继续按战争状态运行。
- `ApplyByKingdomDecision` 的每日贡金方向和持续时间由决议结果提供。不要把它当作普通 `Apply` 的别名，也不要在 Action 外再重复扣款。
- 事件在 stance 已更新后同步触发。监听器中重新对同一双方调用媾和或宣战，会造成重复外交副作用和递归事件。
- 读档不会重放媾和事件。非序列化缓存必须依据当前 `IFaction.GetStanceWith` 和贡金状态恢复。

## 真实使用示例

内置 Nameplate 与 `KingdomDecisionProposalBehavior` 都通过 `CampaignEvents.MakePeace` 接收原因：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;

public sealed class PeaceReasonBehavior : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        CampaignEvents.MakePeace.AddNonSerializedListener(this, OnMakePeace);
    }

    private void OnMakePeace(IFaction faction1, IFaction faction2, MakePeaceAction.MakePeaceDetail detail)
    {
        if (detail == MakePeaceAction.MakePeaceDetail.ByKingdomDecision)
        {
            RefreshDecisionPeaceState(faction1, faction2);
        }
    }

    private void RefreshDecisionPeaceState(IFaction faction1, IFaction faction2)
    {
        // 此时 faction1 与 faction2 已经不再处于战争 stance。
    }

    public override void SyncData(IDataStore dataStore)
    {
        // 这个示例不保存瞬时事件原因。
    }
}
```

真正结束战争时，普通流程调用 `MakePeaceAction.Apply(faction1, faction2)`；王国决议流程调用 `MakePeaceAction.ApplyByKingdomDecision(faction1, faction2, dailyTribute, duration)`，其中贡金由决议结算得到。

## 版本注记

1.3.15 与 1.4.5 都只有 `Default` 和 `ByKingdomDecision`，`MakePeace` 事件签名一致。1.4.5 是本文关于地图视觉和 Behavior 下游的权威来源。

## 导航

- ↑ 父级：[Campaign-Ext API](../)
- ↓ 所属 Action：[MakePeaceAction](../MakePeaceAction)
- ↔ 同级：[DeclareWarAction](../DeclareWarAction)
- 事件：[CampaignEvents](../CampaignEvents) · [CampaignEventReceiver](../CampaignEventReceiver)
- 相关：[IFaction](../IFaction) · [Kingdom](../../campaign/Kingdom) · [SiegeEvent](../SiegeEvent)
