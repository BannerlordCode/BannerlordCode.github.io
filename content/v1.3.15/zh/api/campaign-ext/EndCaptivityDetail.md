---
title: "EndCaptivityDetail"
description: "区分英雄因赎金、和平、战斗、逃脱、选择、死亡或补偿而结束囚禁，并说明释放事件的同步边界。"
---
# EndCaptivityDetail

**命名空间：** `TaleWorlds.CampaignSystem.Actions`  
**模块：** `TaleWorlds.CampaignSystem`  
**类型：** `public enum EndCaptivityDetail`  
**基类：** `System.Enum`  
**源文件：** `TaleWorlds.CampaignSystem/Actions/EndCaptivityDetail.cs`

## 一句话职责

标记英雄结束囚禁的原因，并在 Action 发出 `HeroPrisonerReleased` 时让日志、任务、通知和 Companion 监听器区分各释放路径；非主角的 `Death` 清理会提前返回，不发送该事件。

## 心智模型

`EndCaptivityDetail` 是 [`EndCaptivityAction`](../EndCaptivityAction) 在处理俘虏名册和英雄状态时使用的原因。通常公开 `ApplyBy*` 入口会从原 `PartyBase.PrisonRoster` 移除英雄、清理俘虏关系、恢复或改变英雄状态，并通过 `CampaignEvents.HeroPrisonerReleased` 分发原因；但 `Death` 对非主角英雄在移除名册后会直接结束内部流程，不会走这个释放事件。模组不应自己从 `PrisonRoster` 删除英雄再手发事件。

原因值不代表当前是否仍为囚犯，也不提供释放者的完整信息。监听器应以事件的 `prisoner`、`party` 和 `capturerFaction` 为准，并在回调时认为释放事务已经生效。

## 枚举值与典型时机

| 值 | 对应入口 | 含义 |
|---|---|---|
| `Ransom` | `ApplyByRansom` | 赎金交易结束囚禁。 |
| `ReleasedAfterPeace` | `ApplyByPeace` | 派系媾和后释放俘虏。 |
| `ReleasedAfterBattle` | `ApplyByReleasedAfterBattle` | 战斗结算导致俘虏释放。 |
| `ReleasedAfterEscape` | `ApplyByEscape` | 英雄从囚禁中逃脱。 |
| `ReleasedByChoice` | `ApplyByReleasedByChoice` | 玩家或战役流程主动选择释放。 |
| `Death` | `ApplyByDeath` | 囚禁中的英雄死亡；非主角路径清理名册后直接结束，主角路径仍会走主角释放事件分支。 |
| `ReleasedByCompensation` | `ApplyByReleasedByCompensation` | 通过补偿结算结束囚禁。 |

枚举值的顺序不应作为存档格式；保存应记录模组自己的业务结果，并在加载时重新读取英雄当前状态。

## 依赖与事件下游

- **上游：** [`EndCaptivityAction`](../EndCaptivityAction)、[`Hero`](../../campaign/Hero)、[`PartyBase`](../../campaign/PartyBase) 和俘虏名册。
- **事件：** [`CampaignEvents`](../CampaignEvents) 的 `HeroPrisonerReleased` 类型为 `IMbEvent<Hero, PartyBase, IFaction, EndCaptivityDetail, bool>`；它覆盖普通释放和主角释放路径，但不能视为所有 `Death` 清理都会触发。
- **下游：** 默认日志、通知、任务和 Companion 监听器消费 `HeroPrisonerReleased`；`PrisonerReleaseCampaignBehavior` 是调用 `EndCaptivityAction` 的上游生产者，不是该释放事件的消费者。
- **相关行动：** [`TakePrisonerAction`](../TakePrisonerAction)、[`TransferPrisonerAction`](../TransferPrisonerAction) 和 [`KillCharacterAction`](../KillCharacterAction) 会改变同一俘虏生命周期的上下游状态。
- **存档：** 俘虏名册与英雄位置保存；释放原因不会在读档时为非序列化监听器重放。

## 风险与生命周期

- 不要直接调用 `PartyBase.PrisonRoster.RemoveTroop` 代替 Action。那会跳过英雄状态、释放事件、日志和任务清理。
- `Death` 不是“正常释放”。非主角死亡路径不会发送 `HeroPrisonerReleased`；只有 Main Hero 分支继续发送该事件。它可能与英雄死亡、遗产和 Companion 清理处于同一同步级联，监听器不要再调用普通释放 Action。
- 回调里的 `party` 可能为空（例如某些死亡或补偿路径），`capturerFaction` 也可能不是英雄当前地图派系；先判空再访问。
- 不要把 `EndCaptivityDetail` 当作可恢复的英雄状态。读档后应从 `Hero.IsPrisoner`、所属队伍和当前战役数据重建运行时索引。

## 真实使用示例

内置 `DefaultLogsCampaignBehavior` 使用 `HeroPrisonerReleased` 记录原因：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;
using TaleWorlds.CampaignSystem.Party;

public sealed class PrisonerReleaseBehavior : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        CampaignEvents.HeroPrisonerReleased.AddNonSerializedListener(this, OnHeroPrisonerReleased);
    }

    private void OnHeroPrisonerReleased(
        Hero prisoner,
        PartyBase party,
        IFaction capturerFaction,
        EndCaptivityDetail detail,
        bool showNotification)
    {
        if (detail == EndCaptivityDetail.ReleasedAfterEscape && prisoner != null)
        {
            RecordEscape(prisoner, party, capturerFaction, showNotification);
        }
    }

    private void RecordEscape(Hero prisoner, PartyBase party, IFaction capturerFaction, bool showNotification)
    {
        // 读取释放后的 Hero 状态，更新模组自己的非序列化索引。
    }

    public override void SyncData(IDataStore dataStore)
    {
        // 事件原因本身不在这个示例中持久化。
    }
}
```

若确实要释放英雄，应调用语义匹配的 `EndCaptivityAction.ApplyByEscape(hero)` 或 `ApplyByPeace(hero, facilitator)`，不要伪造 `HeroPrisonerReleased` 事件。

## 版本注记

1.3.15 与 1.4.5 的七个值和释放事件参数一致。1.4.5 的 `EndCaptivityAction` 额外展示了更完整的名册、死亡与通知级联，但模组入口仍应遵循同一 Action 边界。

## 导航

- ↑ 父级：[Campaign-Ext API](../)
- ↓ 所属 Action：[EndCaptivityAction](../EndCaptivityAction)
- ↔ 同级：[TransferPrisonerAction](../TransferPrisonerAction)
- 事件：[CampaignEvents](../CampaignEvents) · [CampaignEventReceiver](../CampaignEventReceiver)
- 相关：[Hero](../../campaign/Hero) · [PartyBase](../../campaign/PartyBase) · [TakePrisonerAction](../TakePrisonerAction)
