---
title: "UsableMissionObject"
description: "UsableMissionObject：TaleWorlds.MountAndBlade 的 public 类，继承 SynchedMissionObject、IFocusable；公开成员 76 个（方法 52、属性 20、字段 2）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade/UsableMissionObject.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# UsableMissionObject

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public abstract class UsableMissionObject : SynchedMissionObject, IFocusable, IUsable, IVisible`
**File:** `TaleWorlds.MountAndBlade/UsableMissionObject.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

UsableMissionObject 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/UsableMissionObject.cs。它是一个 public 类（abstract），实现/继承 SynchedMissionObject、IFocusable、IUsable、IVisible，继承链为 UsableMissionObject → SynchedMissionObject → MissionObject → ScriptComponentBehavior → DotNetObject。public/protected 成员共 76 个：52 方法、20 属性、2 字段、1 构造函数、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：UsableMissionObject 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade`，继承链 UsableMissionObject → SynchedMissionObject → MissionObject → ScriptComponentBehavior → DotNetObject。成员构成以方法为主（方法 52/76，属性 20/76），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/UsableMissionObject.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `FocusableObjectType` | `public virtual FocusableObjectType FocusableObjectType` | 属性 |
| `IsFocusable` | `public virtual bool IsFocusable` | 属性 |
| `UserAgent` | `public Agent UserAgent` | 属性 |
| `PreviousUserAgent` | `public Agent PreviousUserAgent` | 属性 |
| `GameEntityWithWorldPosition` | `public GameEntityWithWorldPosition GameEntityWithWorldPosition` | 属性 |
| `MovingAgent` | `public virtual Agent MovingAgent` | 属性 |
| `List` | `public List<Agent>DefendingAgents` | 属性 |
| `HasDefendingAgent` | `public bool HasDefendingAgent` | 属性 |
| `DisableCombatActionsOnUse` | `public virtual bool DisableCombatActionsOnUse` | 属性 |
| `LockUserFrames` | `public virtual bool LockUserFrames` | 属性 |
| `LockUserPositions` | `public virtual bool LockUserPositions` | 属性 |
| `IsInstantUse` | `public bool IsInstantUse` | 属性 |
| `IsDeactivated` | `public bool IsDeactivated` | 属性 |
| `IsDisabledForPlayers` | `public bool IsDisabledForPlayers` | 属性 |
| `InteractionEntity` | `public virtual WeakGameEntity InteractionEntity` | 属性 |
| `HasAIUser` | `public bool HasAIUser` | 属性 |
| `HasUser` | `public bool HasUser` | 属性 |
| `HasAIMovingTo` | `public virtual bool HasAIMovingTo` | 属性 |
| `IsVisible` | `public bool IsVisible` | 属性 |
| `UsableMissionObject` | `protected UsableMissionObject(bool isInstantUse = false)` | 构造函数 |
| `OnUserConversationStart` | `public virtual void OnUserConversationStart()` | 方法 |
| `OnUserConversationEnd` | `public virtual void OnUserConversationEnd()` | 方法 |
| `SetAreUserPositionsUpdatedInTheMachineTick` | `public void SetAreUserPositionsUpdatedInTheMachineTick(bool value)` | 方法 |
| `GetIsUserPositionsUpdatedInTheMachineTick` | `public bool GetIsUserPositionsUpdatedInTheMachineTick()` | 方法 |
| `SetIsDeactivatedSynched` | `public void SetIsDeactivatedSynched(bool value)` | 方法 |
| `SetIsDisabledForPlayersSynched` | `public void SetIsDisabledForPlayersSynched(bool value)` | 方法 |
| `IsDisabledForAgent` | `public virtual bool IsDisabledForAgent(Agent agent)` | 方法 |
| `AddComponent` | `public void AddComponent(UsableMissionObjectComponent component)` | 方法 |
| `RemoveComponent` | `public void RemoveComponent(UsableMissionObjectComponent component)` | 方法 |
| `GetComponent` | `public T GetComponent<T>() where T : UsableMissionObjectComponent` | 方法 |
| `RefreshGameEntityWithWorldPosition` | `public void RefreshGameEntityWithWorldPosition()` | 方法 |
| `CollectChildEntity` | `protected virtual void CollectChildEntity(WeakGameEntity childEntity)` | 方法 |
| `VerifyChildEntities` | `protected virtual bool VerifyChildEntities(ref string errorMessage)` | 方法 |
| `OnInit` | `protected internal override void OnInit()` | 方法 |
| `OnEditorInit` | `protected internal override void OnEditorInit()` | 方法 |
| `OnMissionReset` | `protected internal override void OnMissionReset()` | 方法 |
| `OnFocusGain` | `public virtual void OnFocusGain(Agent userAgent)` | 方法 |
| `OnFocusLose` | `public virtual void OnFocusLose(Agent userAgent)` | 方法 |
| `GetInfoTextForBeingNotInteractable` | `public virtual TextObject GetInfoTextForBeingNotInteractable(Agent userAgent)` | 方法 |
| `SetUserForClient` | `public virtual void SetUserForClient(Agent userAgent)` | 方法 |
| `OnUse` | `public virtual void OnUse(Agent userAgent, sbyte agentBoneIndex)` | 方法 |
| `OnAIMoveToUse` | `public virtual void OnAIMoveToUse(Agent userAgent, IDetachment detachment)` | 方法 |
| `OnUseStopped` | `public virtual void OnUseStopped(Agent userAgent, bool isSuccessful, int preferenceIndex)` | 方法 |
| `OnMoveToStopped` | `public virtual void OnMoveToStopped(Agent movingAgent)` | 方法 |
| `GetMovingAgentCount` | `public virtual int GetMovingAgentCount()` | 方法 |
| `GetMovingAgentWithIndex` | `public virtual Agent GetMovingAgentWithIndex(int index)` | 方法 |
| `RemoveMovingAgent` | `public virtual void RemoveMovingAgent(Agent movingAgent)` | 方法 |
| `AddMovingAgent` | `public virtual void AddMovingAgent(Agent movingAgent)` | 方法 |
| `OnAIDefendBegin` | `public void OnAIDefendBegin(Agent agent, IDetachment detachment)` | 方法 |
| `OnAIDefendEnd` | `public void OnAIDefendEnd(Agent agent)` | 方法 |
| `InitializeDefendingAgents` | `public void InitializeDefendingAgents()` | 方法 |
| `GetDefendingAgentCount` | `public int GetDefendingAgentCount()` | 方法 |
| `AddDefendingAgent` | `public void AddDefendingAgent(Agent agent)` | 方法 |
| `RemoveDefendingAgent` | `public void RemoveDefendingAgent(Agent agent)` | 方法 |
| `IsAgentDefending` | `public bool IsAgentDefending(Agent agent)` | 方法 |
| `SimulateTick` | `public virtual void SimulateTick(float dt)` | 方法 |
| `GetTickRequirement` | `public override ScriptComponentBehavior.TickRequirement GetTickRequirement()` | 方法 |
| `OnTickParallel2` | `protected internal override void OnTickParallel2(float dt)` | 方法 |
| `OnTick` | `protected internal override void OnTick(float dt)` | 方法 |
| `OnEditorTick` | `protected internal override void OnEditorTick(float dt)` | 方法 |
| `OnEditorValidate` | `protected internal override void OnEditorValidate()` | 方法 |
| `OnRemoved` | `protected override void OnRemoved(int removeReason)` | 方法 |
| `GetUserFrameForAgent` | `public virtual WorldFrame GetUserFrameForAgent(Agent agent)` | 方法 |
| `ToString` | `public override string ToString()` | 方法 |
| `IsAIMovingTo` | `public virtual bool IsAIMovingTo(Agent agent)` | 方法 |
| `HasUserPositionsChanged` | `public virtual bool HasUserPositionsChanged(Agent agent)` | 方法 |
| `WriteToNetwork` | `public override void WriteToNetwork()` | 方法 |
| `IsUsableByAgent` | `public virtual bool IsUsableByAgent(Agent userAgent)` | 方法 |
| `SetCustomLocalFrame` | `public void SetCustomLocalFrame(in MatrixFrame customLocalFrame)` | 方法 |
| `OnEndMission` | `public override void OnEndMission()` | 方法 |
| `OnAfterReadFromNetwork` | `public override void OnAfterReadFromNetwork(ValueTuple<BaseSynchedMissionObjectReadableRecord, ISynchedMissionObjectReadableRecord>synchedMissionObjectReadableRecord, bool allowVisibilityUpdate = true)` | 方法 |
| `GetDescriptionText` | `public abstract TextObject GetDescriptionText(WeakGameEntity gameEntity);` | 方法 |
| `DescriptionMessage` | `public TextObject DescriptionMessage` | 字段 |
| `ActionMessage` | `public TextObject ActionMessage` | 字段 |
| `ISynchedMissionObjectReadableRecord` | `public struct UsableMissionObjectRecord : ISynchedMissionObjectReadableRecord` | 属性 |
| `ISynchedMissionObjectReadableRecord` | `public struct UsableMissionObjectRecord : ISynchedMissionObjectReadableRecord` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 SynchedMissionObject](../SynchedMissionObject/)
- [基类/接口 IFocusable](../IFocusable/)
- [基类/接口 IUsable](../IUsable/)
- [同命名空间 ActionIndexCache](../ActionIndexCache/)
- [同命名空间 AgentBuildData](../AgentBuildData/)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData/)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic/)
