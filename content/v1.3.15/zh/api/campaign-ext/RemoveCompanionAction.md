---
title: "RemoveCompanionAction"
description: "按解雇、死亡、任务清理或晋升领主的原因移除伙伴，并同步处理队伍、囚禁、总督和事件状态。"
---
# RemoveCompanionAction

**命名空间：** `TaleWorlds.CampaignSystem.Actions`  
**模块：** `TaleWorlds.CampaignSystem`  
**类型：** `public static class RemoveCompanionAction`  
**基类：** `System.Object`  
**源文件：** `TaleWorlds.CampaignSystem/Actions/RemoveCompanionAction.cs`

## 一句话职责

以正确的业务原因结束英雄的伙伴关系，并执行解雇、死亡、任务收尾或晋升领主所需的队伍、囚禁、逃亡、总督和事件副作用，不能当作普通名册删除器，也不能绕过上游生命周期直接调用。

## 心智模型

每个公开包装方法选择一个 [`RemoveCompanionDetail`](../RemoveCompanionDetail)，然后进入同一个内部事务。实现先清除 `CompanionOf`；符合条件时从移动队伍名册删除英雄，并可能让队伍停驻、销毁空队伍或开始解散仍有成员的队伍。

之后 `Fire` 分支会释放囚犯或让自由英雄逃亡，并重置流浪者装备；所有分支都会在英雄是总督时解除总督职位。状态变更完成后才派发 `CampaignEvents.CompanionRemoved`。公开的 `Clan` 参数属于 API 契约，但 1.4.5 实现从英雄读取队伍，不用它寻找队伍。

## 何时使用

使用与已确定的战役流程相符的入口：

- `ApplyByFire`：玩家解雇；
- `ApplyByDeath`：死亡流程已确认英雄死亡后的清理；
- `ApplyAfterQuest`：任务拥有的伙伴收尾；
- `ApplyByByTurningToLord`：晋升领主前解除伙伴关系。

不要只为了从名册中移除英雄而调用它。它可能改变囚禁、逃亡、装备、总督职位和队伍生命周期，其他收尾仍由上游流程负责。

## 入口与时机

| 入口 | 原因与时机 |
| --- | --- |
| `ApplyByFire(Clan, Hero)` | 使用 `Fire`，执行解雇专属的囚禁、逃亡和流浪者装备处理，然后发送 `CompanionRemoved`。 |
| `ApplyByDeath(Clan, Hero)` | 使用 `Death`，在死亡流程之后清理关系，但不会主动杀死一个仍活着的英雄。 |
| `ApplyAfterQuest(Clan, Hero)` | 使用 `AfterQuest`，在任务完成自己的结算时清理伙伴关系。 |
| `ApplyByByTurningToLord(Clan, Hero)` | 使用 `ByTurningToLord`，在周围的晋升和队伍转移流程开始前解除关系。 |

私有内部方法不是 mod 入口。事件同步收到已经变更后的 `Hero` 和原因值。

## 依赖与事件下游

- **输入：** [`Clan`](../../campaign/Clan) 与 [`Hero`](../../campaign/Hero)；队伍状态来自 `companion.PartyBelongedTo`。
- **相关行动：** [`DestroyPartyAction`](../DestroyPartyAction)、[`DisbandPartyAction`](../DisbandPartyAction)、[`EndCaptivityAction`](../EndCaptivityAction)、[`MakeHeroFugitiveAction`](../MakeHeroFugitiveAction) 和 [`ChangeGovernorAction`](../ChangeGovernorAction) 分担级联处理。
- **事件：** [`CampaignEvents`](../CampaignEvents) 的 `CompanionRemoved` 类型为 `IMbEvent<Hero, RemoveCompanionDetail>`。
- **消费者：** [`CampaignBehaviorBase`](../CampaignBehaviorBase)、伙伴职位、玩家跟踪、任务清理和英雄生成 Behavior 消费动作后的事件。
- **持久化：** 伙伴、队伍、总督和囚禁状态会保存；事件本身不会在读档时重放。

## 风险与生命周期

- 在死亡或晋升流程之外调用 `ApplyByDeath`、`ApplyByByTurningToLord`，可能让英雄、氏族、职业、队伍和事件状态互相不一致。
- 如果伙伴是移动队伍领袖，Action 可能销毁或安排解散队伍。回调后不要继续使用旧的队伍引用。
- 在 `CompanionRemoved` 回调中再次进入 `RemoveCompanionAction`，可能重复扣除名册或访问已经销毁/待解散的队伍。
- 直接设置 `CompanionOf` 或编辑名册会跳过原因专属清理；这种不一致状态可能被存入存档，并在后续小时 tick 或加载时出错。

**存档边界：** 在 `CampaignBehaviorBase.RegisterEvents` 中重新注册非序列化监听器；mod 自有持久数据通过 `SyncData` 保存，不要在存档同步期间调用移除 Action。

## 真实使用示例

用真实的战役事件取得移除完成后的状态：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;
using TaleWorlds.Core;
using TaleWorlds.SaveSystem;

public sealed class CompanionRemovalObserver : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        CampaignEvents.CompanionRemoved.AddNonSerializedListener(this, OnCompanionRemoved);
    }

    private void OnCompanionRemoved(
        Hero companion,
        RemoveCompanionAction.RemoveCompanionDetail detail)
    {
        if (detail == RemoveCompanionAction.RemoveCompanionDetail.Fire)
        {
            InformationManager.DisplayMessage(
                new InformationMessage($"{companion.Name} left the clan."));
        }
    }

    public override void SyncData(IDataStore dataStore)
    {
    }
}
```

如果 mod 已确认是解雇流程，应调用 `RemoveCompanionAction.ApplyByFire(Clan.PlayerClan, companion)`，让 Action 自己发布事件，不要手动发布 `CompanionRemoved`。

## 版本注记

四个公开包装方法、嵌套原因值、队伍级联和 `CompanionRemoved` 签名在 1.3.15 与 1.4.5 中一致。`ApplyByByTurningToLord` 中重复的 `By` 是两版都存在的真实方法名。

## 导航

- **父级：** [campaign-ext API](../)
- **同级：** [AddCompanionAction](../AddCompanionAction) · [RemoveCompanionDetail](../RemoveCompanionDetail)
- **相关：** [Hero](../../campaign/Hero) · [Clan](../../campaign/Clan) · [CampaignEvents](../CampaignEvents)
