---
title: "CompanionDismissCampaignBehavior"
description: "v1.4.5 监听 CompanionRemoved 事件，把被解雇的同伴从场景地点、当前遭遇与城镇跟随行为中清理掉的战役 behavior。"
---
# CompanionDismissCampaignBehavior

**命名空间:** `SandBox.CampaignBehaviors`  
**模块:** `SandBox.CampaignBehaviors`  
**类型:** `internal class CompanionDismissCampaignBehavior : CampaignBehaviorBase`  
**源码:** `Modules.SandBox/SandBox/SandBox.CampaignBehaviors/CompanionDismissCampaignBehavior.cs`

## 概述

`CompanionDismissCampaignBehavior` 是一个 `internal` 的战役 behavior，唯一职责是响应 `CampaignEvents.CompanionRemoved`：当一名同伴英雄被主角解雇或移除时，它负责把该英雄从当前的地点复合体（`LocationComplex`）、正在进行的地点遭遇（`PlayerEncounter`）以及城镇内正跟随主角的 Agent 行为中清理掉，避免出现“人已被开除却还站在酒馆里”或“仍跟着队伍走”的残留状态。它不持有任何持久字段，`SyncData` 为空，因此本身不参与存档。

## 心智模型

把它理解为“解雇同伴时的场景清理钩子”，而不是一个可被业务代码随意调用的通用服务：

- 它不主动查询同伴列表，只在 `CompanionRemoved` 事件被派发时才运行一次清理。
- 清理分三层：地点层面（`LocationComplex.Current`）、遭遇层面（`PlayerEncounter.LocationEncounter`）、以及城镇内对话 Agent 的跟随行为（`FollowAgentBehavior`）。三层各自独立判空，存在的才清理。
- 只有 `detail == 0`（即 `RemoveCompanionDetail.None`，普通解雇）且主角当前身处定居点时，才会去解除对话 Agent 上的 `FollowAgentBehavior`；这一步只在城镇场景有意义。

所以这个 behavior 的“输入”是事件而非轮询，“输出”是对三个运行时容器的最小化移除调用。它不是状态对象，也不提供查询接口。

## 关键方法

### `RegisterEvents`

重写基类的事件注册入口，向 `CampaignEvents.CompanionRemoved` 添加一个非序列化监听器，绑定到 `OnCompanionRemoved`。引擎在战役 behavior 初始化阶段调用它；因为监听器是非序列化的，读档不会重复累加。

### `OnCompanionRemoved(Hero companion, RemoveCompanionDetail detail)`

事件回调，执行实际清理：

```csharp
private void OnCompanionRemoved(Hero companion, RemoveCompanionDetail detail)
{
    if (LocationComplex.Current != null)
        LocationComplex.Current.RemoveCharacterIfExists(companion);

    if (PlayerEncounter.LocationEncounter != null)
        PlayerEncounter.LocationEncounter.RemoveAccompanyingCharacter(companion);

    if ((int)detail == 0 && Hero.MainHero.CurrentSettlement != null)
    {
        AgentNavigator agentNavigator =
            ConversationMission.OneToOneConversationAgent
                .GetComponent<CampaignAgentComponent>().AgentNavigator;
        if (agentNavigator?.GetActiveBehavior() is FollowAgentBehavior)
        {
            agentNavigator.GetBehaviorGroup<DailyBehaviorGroup>()
                .RemoveBehavior<FollowAgentBehavior>();
        }
    }
}
```

注意 `detail == 0` 直接比较枚举的整数值；移植到其他版本时要确认 `RemoveCompanionDetail` 的第一个成员仍然是“普通解雇”，否则这个分支会挂错情形。

### `SyncData(IDataStore)`

空实现。该 behavior 没有需要跨存档恢复的状态，所有清理都在事件发生时即时完成，因此不需要、也不应该把任何字段登记到存档。

## 依赖

- [CampaignBehaviorBase](../../campaign/CampaignBehaviorBase) 提供 `RegisterEvents` / `SyncData` 契约与战役 behavior 的生命周期。
- [CampaignEvents](../../campaign/CampaignEvents) 暴露 `CompanionRemoved`，是本 behavior 唯一的触发源。
- [LocationComplex](../../campaign/LocationComplex) 与 [PlayerEncounter](../../campaign/PlayerEncounter) 是被清理的两个运行时容器。
- [RemoveCompanionAction](../../campaign-ext/RemoveCompanionAction) 是触发 `CompanionRemoved` 的典型来源；[RemoveCompanionDetail](../../campaign-ext/RemoveCompanionDetail) 描述解雇的具体情形。

## 真实触发路径

mod 通常不需要直接构造本 behavior（它是 `internal`，由 SandBox 模块注册）。理解它的价值在于：如果你自定义了同伴移除流程，必须保证 `CompanionRemoved` 事件仍然派发，否则地点与遭遇中的残留引用不会被清理。触发侧的标准写法是调用行动系统，引擎随后派发事件：

```csharp
// 典型触发：在行动系统里移除同伴，引擎随后派发 CompanionRemoved
RemoveCompanionAction.ApplyByDismiss(companion, null);
```

## 风险与边界

- 本 behavior 只清理“已发生解雇”的残留，不阻止解雇本身，也不回滚任何经济或关系改动。
- `LocationComplex.Current` 与 `PlayerEncounter.LocationEncounter` 在战役地图或特定场景中可能为空；代码已做空判断，但 mod 若在更早时机访问这些容器仍需自行判空。
- 跟随行为移除只在 `detail == 0` 且主角身处定居点时发生。若你新增了其他解雇情形（非零 detail）却也希望解除跟随，需要扩充分支。
- 因为它是 `internal`，反射或子类化都不可靠；需要类似的清理时，应当注册自己的 `CompanionRemoved` 监听器，而不是复用本类。

## 版本说明

本文依据 v1.4.5 源码。该 behavior 体量很小（仅一个事件回调），但事件契约与枚举成员顺序可能随版本变化，移植时重新核对 `RemoveCompanionDetail` 的取值。

## 导航

- 父级：[Gameplay API](../)
- 相关：[CampaignBehaviorBase](../../campaign/CampaignBehaviorBase) · [CampaignEvents](../../campaign/CampaignEvents) · [RemoveCompanionAction](../../campaign-ext/RemoveCompanionAction) · [LocationComplex](../../campaign/LocationComplex)
- English: [CompanionDismissCampaignBehavior](../../../../en/api/gameplay/CompanionDismissCampaignBehavior)
