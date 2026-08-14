---
title: "RemoveCompanionDetail"
description: "RemoveCompanionAction 的嵌套原因枚举：把解雇、死亡、任务结束和晋升领主语义传给同步的 CompanionRemoved 事件链。"
---
# RemoveCompanionDetail

**Namespace:** `TaleWorlds.CampaignSystem.Actions`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public enum RemoveCompanionAction.RemoveCompanionDetail`  
**Base:** `System.Enum`  
**Source:** `TaleWorlds.CampaignSystem/Actions/RemoveCompanionAction.cs`

## 概述

`RemoveCompanionDetail` 是 [RemoveCompanionAction](../RemoveCompanionAction/) 的嵌套原因枚举。它不是一个可独立执行的动作，而是由四个公开移除入口选择，并在状态修改完成后作为 `CampaignEvents.CompanionRemoved` 的第二个参数同步传给 Behavior。监听者依靠它区分玩家解雇、英雄死亡、任务收尾和同伴晋升领主，进而选择不同的清理与后续处理。

## 心智模型

把这个枚举看成“已经发生的移除事务的原因标签”，不要把它看成目标状态。真正的入口是 `RemoveCompanionAction.ApplyByFire`、`ApplyAfterQuest`、`ApplyByDeath` 和源码中确实拼成双 `By` 的 `ApplyByByTurningToLord`。它们先通过私有 `ApplyInternal` 修改同伴、队伍、俘虏和总督状态，最后才派发携带该枚举的事件。

因此，事件监听者收到回调时应读取并适配已经完成的状态，不能再手工把 `CompanionOf` 设空或从名册减员。反过来，调用者也不应直接派发 `CompanionRemoved` 来模拟移除，因为那会跳过真正的状态级联。

## 实际入口与原因契约

| 枚举值 | 产生它的公开入口 | 正确调用时机与语义 |
| --- | --- | --- |
| `Fire` | `RemoveCompanionAction.ApplyByFire` | 玩家确认解雇同伴时；额外处理逃离囚禁或变为逃亡者，并重置流浪者装备 |
| `Death` | `RemoveCompanionAction.ApplyByDeath` | 英雄死亡流程已经建立死亡状态后；官方由 `KillCharacterAction` 调用，它本身不会杀死英雄 |
| `AfterQuest` | `RemoveCompanionAction.ApplyAfterQuest` | 任务结束，需要把临时同伴从玩家氏族和队伍关系中移除时 |
| `ByTurningToLord` | `RemoveCompanionAction.ApplyByByTurningToLord` | 晋升领主的复合流程中；该分支保留队伍名册处理给随后创建氏族和转移队伍的上游逻辑 |

私有 `ApplyInternal(Clan, Hero, RemoveCompanionDetail)` 不对模组公开。值得注意的是，1.4.5 实现没有读取传入的 `clan` 参数，而是直接从 `companion` 的当前关系取得队伍并清空 `CompanionOf`；调用者仍应像官方代码一样传入真实所属氏族，不能把当前实现细节当作参数可随意为 null 的稳定契约。

## 谁调用、何时调用

- `KillCharacterAction` 在派发英雄死亡事件并清理配偶关系之后，若死者仍有 `CompanionOf`，调用 `ApplyByDeath`。
- `CompanionRolesCampaignBehavior` 从 `Hero.OneToOneConversationHero` 取得对话同伴：解雇后调用 `ApplyByFire`；晋升时先调用 `ApplyByByTurningToLord`，再设置职业、创建新氏族并处理队伍转移。
- `FamilyFeudIssueBehavior` 和 `LordsNeedsTutorIssueBehavior` 在任务收尾时调用 `ApplyAfterQuest`。
- 核心与 `Modules/SandBox` 中多个 Behavior 通过 `CampaignEvents.CompanionRemoved.AddNonSerializedListener` 消费该枚举，清理角色地点、同伴职责、追踪、通知和任务状态。

## 状态变更与事件级联

所有原因都会先将 `companion.CompanionOf` 设为 null。除 `ByTurningToLord` 外，如果同伴位于移动队伍，Action 会从成员名册减去该英雄；若该英雄是队长，则先让队伍停止并安排 AI 重算，然后销毁空队伍，或对仍有成员的队伍启动解散。

`Fire` 还会让被俘同伴通过 `EndCaptivityAction.ApplyByEscape` 脱离囚禁，否则通过 `MakeHeroFugitiveAction` 变为逃亡者；流浪者会重置装备。任何原因下，只要同伴仍是总督，就会调用 `ChangeGovernorAction.RemoveGovernorOf`。最后 `CampaignEventDispatcher.OnCompanionRemoved` 同步进入 `CampaignEvents.CompanionRemoved`，监听者看到的是这些修改之后的对象。

## 关键成员、副作用与调用时机

枚举值本身没有方法副作用；副作用来自选择它的 Action 入口。`Death` 不负责建立死亡，`ByTurningToLord` 不负责创建氏族，`AfterQuest` 不负责完成整个任务，而 `Fire` 也可能触发队伍销毁或解散。调用者必须拥有完整的上游工作流，不能仅按名称选择枚举并假设剩余生命周期会自动补齐。

事件派发是同步的。监听者不应在回调中对同一英雄再次调用 `RemoveCompanionAction`，否则会重复名册减员、再次进入事件链，或对已销毁/正在解散的队伍操作。

## 真实获取路径示例

枚举最可靠的获取路径是 `CampaignBehaviorBase.RegisterEvents` 注册的事件参数。下面的 Behavior 每次战役会话重新注册非序列化监听者，并只对玩家主动解雇给出消息。

```csharp
public sealed class CompanionRemovalObserver : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        CampaignEvents.CompanionRemoved.AddNonSerializedListener(
            this,
            OnCompanionRemoved);
    }

    private void OnCompanionRemoved(
        Hero companion,
        RemoveCompanionAction.RemoveCompanionDetail detail)
    {
        if (detail == RemoveCompanionAction.RemoveCompanionDetail.Fire)
        {
            InformationManager.DisplayMessage(
                new InformationMessage($"{companion.Name} 已离开氏族。"));
        }
    }

    public override void SyncData(IDataStore dataStore)
    {
    }
}
```

## 生命周期、存档与坏档风险

- `CompanionRemoved` 是运行时通知，不会因为加载了一个已移除同伴的存档而重放。监听者应在 `RegisterEvents` 重新注册，并从当前保存状态重建自己的缓存。
- 不要把回调中的 `detail` 单独保存为“同伴仍处于移除中”的事实。Action 返回时事务已经结束；跨存档保留瞬时原因容易在加载后重复清理。
- `ApplyByDeath` 不杀人，直接对活英雄调用只会把事件标成 `Death` 并拆掉同伴关系；`ApplyByByTurningToLord` 也不创建领主氏族。脱离它们的官方复合流程会留下职业、氏族、队伍和事件语义互相矛盾的对象。
- 直接改 `CompanionOf` 或成员名册会跳过逃亡、囚禁、总督、队伍销毁/解散和事件消费者。错误结果会写入英雄、氏族和队伍的持久状态，并可能在后续 hourly tick 或加载时暴露为坏档。
- 监听者拿到的是修改后的英雄。必须重新检查 `IsDead`、`CompanionOf`、`PartyBelongedTo` 和 `GovernorOf`，不要使用回调前缓存的队伍或定居点引用继续写状态。

## 版本注记

v1.3.15 与 v1.4.5 的四个枚举值、四个公开入口和核心级联一致。v1.4.5 反编译输出把嵌套枚举移动到类体前部，并省略部分下游默认参数；这不改变完整类型名 `RemoveCompanionAction.RemoveCompanionDetail`。`ApplyByByTurningToLord` 的双 `By` 拼写在两个版本都存在，调用时必须按真实 API 名称书写。

## 依赖关系与导航

- 上游：[RemoveCompanionAction](../RemoveCompanionAction/)、[KillCharacterAction](../KillCharacterAction/) 和 [CompanionRolesCampaignBehavior](../CompanionRolesCampaignBehavior/) 选择原因并建立完整移除事务。
- 下游：[CampaignEvents](../CampaignEvents/) 把原因送给监听者；[EndCaptivityAction](../EndCaptivityAction/)、[ChangeGovernorAction](../ChangeGovernorAction/)、[DestroyPartyAction](../DestroyPartyAction/) 与 [DisbandPartyAction](../DisbandPartyAction/) 承担状态级联。
- 存档边界：[SaveableTypeDefiner](../../save-system/SaveableTypeDefiner/) 注册相关英雄、氏族和队伍状态；`CompanionRemoved` 原因事件不会在读档时重放。
- Parent（父级）：[campaign-ext API](../)
- Sibling（同级）：[RemoveCompanionAction](../RemoveCompanionAction/) · [ChangeGovernorAction](../ChangeGovernorAction/)
- Children（子项）：无独立子页；该枚举由 [RemoveCompanionAction](../RemoveCompanionAction/) 持有
- Related（相关）：[Hero](../../campaign/Hero/) · [Clan](../../campaign/Clan/) · [CampaignEvents](../CampaignEvents/)
