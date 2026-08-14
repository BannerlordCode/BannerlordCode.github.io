---
title: "ChangeKingdomActionDetail"
description: "说明氏族加入、离开、叛乱、佣兵转换和王国毁灭时的 ChangeKingdomAction 原因，并连接到战役事件下游。"
---
# ChangeKingdomActionDetail

**命名空间：** `TaleWorlds.CampaignSystem.Actions`  
**模块：** `TaleWorlds.CampaignSystem`  
**类型：** `public enum ChangeKingdomAction.ChangeKingdomActionDetail`  
**基类：** `System.Enum`  
**源文件：** `TaleWorlds.CampaignSystem/Actions/ChangeKingdomAction.cs`

## 一句话职责

为氏族王国归属变化保留业务原因，使日志、地图 UI、囚犯与外交 Behavior 能在归属已经写入后区分加入、离开、叛乱和清理流程，并帮助监听器避免把事件原因误当作可持久化状态。

## 心智模型

这个枚举是 `ChangeKingdomAction` 内部事务产生的事件参数，不是一个可以独立保存或写入 `Clan` 的状态。公开的 `ApplyBy*` 入口先完成王国关系、战争关系、队伍地图状态和氏族字段的迁移，再把原因传给 `CampaignEvents.OnClanChangedKingdomEvent`。监听器收到它时，`oldKingdom` 与 `newKingdom` 已经代表这次变更的两端。

模组应选择语义正确的 Action 入口，不应自己构造枚举后调用私有 `ApplyInternal`，也不应直接设置 `clan.Kingdom`。例如，加入王国用 `ApplyByJoinToKingdom`，佣兵加入用 `ApplyByJoinFactionAsMercenary`；这两个流程对服务期限、影响力和事件链的处理并不相同。

## 枚举值与典型时机

| 值 | 对应入口 | 含义 |
|---|---|---|
| `JoinAsMercenary` | `ApplyByJoinFactionAsMercenary` | 氏族开始为王国提供佣兵服务。 |
| `JoinKingdom` | `ApplyByJoinToKingdom` | 氏族以正常封臣关系加入王国。 |
| `JoinKingdomByDefection` | `ApplyByJoinToKingdomByDefection` | 氏族从旧王国叛变并加入新王国。 |
| `LeaveKingdom` | `ApplyByLeaveKingdom` | 正常离开王国，不把离开解释为叛乱。 |
| `LeaveWithRebellion` | `ApplyByLeaveWithRebellionAgainstKingdom` | 因叛乱离开，并由上游流程建立相应敌对关系。 |
| `LeaveAsMercenary` | `ApplyByLeaveKingdomAsMercenary` | 佣兵服务结束，清理服务状态。 |
| `LeaveByClanDestruction` | `ApplyByLeaveKingdomByClanDestruction` | 氏族消灭时移除其王国归属。 |
| `CreateKingdom` | `ApplyByCreateKingdom` | 氏族创建新王国并结束原有王国归属。 |
| `LeaveByKingdomDestruction` | `ApplyByLeaveByKingdomDestruction` | 原王国毁灭后清理氏族归属。 |

枚举值的数值顺序不是存档契约。分支时使用名称，不要把整数 `0`、`1` 等写进自定义存档。

## 依赖

- **上游：** [`ChangeKingdomAction`](../ChangeKingdomAction) 接收 [`Clan`](../../campaign/Clan)、旧/新 [`Kingdom`](../../campaign/Kingdom) 和佣兵期限等状态。
- **事件：** [`CampaignEvents`](../CampaignEvents) 的 `OnClanChangedKingdomEvent` 类型为 `IMbEvent<Clan, Kingdom, Kingdom, ChangeKingdomAction.ChangeKingdomActionDetail, bool>`。
- **下游：** `DefaultLogsCampaignBehavior`、`SettlementNameplatesVM`、`PrisonerReleaseCampaignBehavior` 和任务监听器消费事件；`FactionManager` 属于 Action 内部状态更新，不是该事件的下游消费者。
- **相关反向流程：** 战争关系应由 [`DeclareWarAction`](../DeclareWarAction) 或 [`MakePeaceAction`](../MakePeaceAction) 处理，不要在本事件中手改外交 stance。
- **存档：** 王国、氏族和战争关系由战役存档保存；这个非序列化事件不会在读档时自动重放。

## 风险与生命周期

- 直接写 `Clan.Kingdom` 会跳过氏族旗帜、队伍地图外观、战争关系和事件分发，导致 UI 与外交 Behavior 仍持有旧归属。
- 事件是同步级联的一部分。监听器中再次让同一氏族加入或离开王国，可能递归触发变更、重复日志，或在枚举下游集合时修改集合。
- `LeaveWithRebellion`、`CreateKingdom` 和 `JoinKingdomByDefection` 都隐含上游政治流程；不要只为了得到某个枚举值而调用错误入口。
- 读档后不会补发历史 `OnClanChangedKingdomEvent`。若模组维护非序列化地图缓存，应在 Campaign 启动时依据当前 `Clan.Kingdom` 重建，而不是等待事件。

## 真实使用示例

内置 `DefaultLogsCampaignBehavior` 使用同样的事件注册方式区分佣兵加入和离开：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;

public sealed class KingdomChangeBehavior : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        CampaignEvents.OnClanChangedKingdomEvent.AddNonSerializedListener(this, OnClanChangedKingdom);
    }

    private void OnClanChangedKingdom(
        Clan clan,
        Kingdom oldKingdom,
        Kingdom newKingdom,
        ChangeKingdomAction.ChangeKingdomActionDetail detail,
        bool showNotification)
    {
        if (detail == ChangeKingdomAction.ChangeKingdomActionDetail.JoinAsMercenary ||
            detail == ChangeKingdomAction.ChangeKingdomActionDetail.LeaveAsMercenary)
        {
            // 在归属已经更新后刷新模组自己的非序列化 UI 缓存。
            RefreshMercenaryStatus(clan, oldKingdom, newKingdom, showNotification);
        }
    }

    private void RefreshMercenaryStatus(Clan clan, Kingdom oldKingdom, Kingdom newKingdom, bool showNotification)
    {
        // 将业务状态交给模组自己的实现。
    }

    public override void SyncData(IDataStore dataStore)
    {
        // 这个示例没有需要保存的自有字段。
    }
}
```

真正改变世界状态时，应在前置条件已经满足的 Campaign 流程中调用命名入口，例如 `ChangeKingdomAction.ApplyByJoinToKingdom(clan, kingdom)`；不要调用事件接收器来模拟变更。

## 版本注记

1.3.15 与 1.4.5 保持九个原因值和命名入口。1.4.5 源码是当前用法权威；跨版本保存模组自己的原因时使用显式名称映射。

## 导航

- ↑ 父级：[Campaign-Ext API](../)
- ↓ 所属 Action：[ChangeKingdomAction](../ChangeKingdomAction)
- ↔ 同级：[ChangeOwnerOfSettlementDetail](../ChangeOwnerOfSettlementDetail)
- 事件：[CampaignEvents](../CampaignEvents) · [CampaignEventReceiver](../CampaignEventReceiver)
- 相关：[Clan](../../campaign/Clan) · [Kingdom](../../campaign/Kingdom) · [DeclareWarAction](../DeclareWarAction)
