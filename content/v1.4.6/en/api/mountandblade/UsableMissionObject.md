---
title: "UsableMissionObject"
description: "UsableMissionObject: a public class in TaleWorlds.MountAndBlade, inheriting SynchedMissionObject, IFocusable; 76 exposed members (52 methods, 20 properties, 2 fields). Source: TaleWorlds.MountAndBlade/UsableMissionObject.cs."
---
# UsableMissionObject

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public abstract class UsableMissionObject : SynchedMissionObject, IFocusable, IUsable, IVisible`
**File:** `TaleWorlds.MountAndBlade/UsableMissionObject.cs`

## Overview

UsableMissionObject lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/UsableMissionObject.cs. It is a public class (abstract), implementing/inheriting SynchedMissionObject, IFocusable, IUsable, IVisible; the inheritance chain is UsableMissionObject → SynchedMissionObject → MissionObject → ScriptComponentBehavior. It exposes 76 public/protected members: 52 methods, 20 properties, 2 fields, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: UsableMissionObject is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain UsableMissionObject → SynchedMissionObject → MissionObject → ScriptComponentBehavior. The surface is method-led (methods 52/76, properties 20/76), so it mostly exposes operations. ScriptComponentBehavior on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/UsableMissionObject.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `FocusableObjectType` | `public virtual FocusableObjectType FocusableObjectType` | property |
| `IsFocusable` | `public virtual bool IsFocusable` | property |
| `UserAgent` | `public Agent UserAgent` | property |
| `PreviousUserAgent` | `public Agent PreviousUserAgent` | property |
| `GameEntityWithWorldPosition` | `public GameEntityWithWorldPosition GameEntityWithWorldPosition` | property |
| `MovingAgent` | `public virtual Agent MovingAgent` | property |
| `List` | `public List<Agent>DefendingAgents` | property |
| `HasDefendingAgent` | `public bool HasDefendingAgent` | property |
| `DisableCombatActionsOnUse` | `public virtual bool DisableCombatActionsOnUse` | property |
| `LockUserFrames` | `public virtual bool LockUserFrames` | property |
| `LockUserPositions` | `public virtual bool LockUserPositions` | property |
| `IsInstantUse` | `public bool IsInstantUse` | property |
| `IsDeactivated` | `public bool IsDeactivated` | property |
| `IsDisabledForPlayers` | `public bool IsDisabledForPlayers` | property |
| `InteractionEntity` | `public virtual WeakGameEntity InteractionEntity` | property |
| `HasAIUser` | `public bool HasAIUser` | property |
| `HasUser` | `public bool HasUser` | property |
| `HasAIMovingTo` | `public virtual bool HasAIMovingTo` | property |
| `IsVisible` | `public bool IsVisible` | property |
| `UsableMissionObject` | `protected UsableMissionObject(bool isInstantUse = false)` | constructor |
| `OnUserConversationStart` | `public virtual void OnUserConversationStart()` | method |
| `OnUserConversationEnd` | `public virtual void OnUserConversationEnd()` | method |
| `SetAreUserPositionsUpdatedInTheMachineTick` | `public void SetAreUserPositionsUpdatedInTheMachineTick(bool value)` | method |
| `GetIsUserPositionsUpdatedInTheMachineTick` | `public bool GetIsUserPositionsUpdatedInTheMachineTick()` | method |
| `SetIsDeactivatedSynched` | `public void SetIsDeactivatedSynched(bool value)` | method |
| `SetIsDisabledForPlayersSynched` | `public void SetIsDisabledForPlayersSynched(bool value)` | method |
| `IsDisabledForAgent` | `public virtual bool IsDisabledForAgent(Agent agent)` | method |
| `AddComponent` | `public void AddComponent(UsableMissionObjectComponent component)` | method |
| `RemoveComponent` | `public void RemoveComponent(UsableMissionObjectComponent component)` | method |
| `GetComponent` | `public T GetComponent<T>() where T : UsableMissionObjectComponent` | method |
| `RefreshGameEntityWithWorldPosition` | `public void RefreshGameEntityWithWorldPosition()` | method |
| `CollectChildEntity` | `protected virtual void CollectChildEntity(WeakGameEntity childEntity)` | method |
| `VerifyChildEntities` | `protected virtual bool VerifyChildEntities(ref string errorMessage)` | method |
| `OnInit` | `protected internal override void OnInit()` | method |
| `OnEditorInit` | `protected internal override void OnEditorInit()` | method |
| `OnMissionReset` | `protected internal override void OnMissionReset()` | method |
| `OnFocusGain` | `public virtual void OnFocusGain(Agent userAgent)` | method |
| `OnFocusLose` | `public virtual void OnFocusLose(Agent userAgent)` | method |
| `GetInfoTextForBeingNotInteractable` | `public virtual TextObject GetInfoTextForBeingNotInteractable(Agent userAgent)` | method |
| `SetUserForClient` | `public virtual void SetUserForClient(Agent userAgent)` | method |
| `OnUse` | `public virtual void OnUse(Agent userAgent, sbyte agentBoneIndex)` | method |
| `OnAIMoveToUse` | `public virtual void OnAIMoveToUse(Agent userAgent, IDetachment detachment)` | method |
| `OnUseStopped` | `public virtual void OnUseStopped(Agent userAgent, bool isSuccessful, int preferenceIndex)` | method |
| `OnMoveToStopped` | `public virtual void OnMoveToStopped(Agent movingAgent)` | method |
| `GetMovingAgentCount` | `public virtual int GetMovingAgentCount()` | method |
| `GetMovingAgentWithIndex` | `public virtual Agent GetMovingAgentWithIndex(int index)` | method |
| `RemoveMovingAgent` | `public virtual void RemoveMovingAgent(Agent movingAgent)` | method |
| `AddMovingAgent` | `public virtual void AddMovingAgent(Agent movingAgent)` | method |
| `OnAIDefendBegin` | `public void OnAIDefendBegin(Agent agent, IDetachment detachment)` | method |
| `OnAIDefendEnd` | `public void OnAIDefendEnd(Agent agent)` | method |
| `InitializeDefendingAgents` | `public void InitializeDefendingAgents()` | method |
| `GetDefendingAgentCount` | `public int GetDefendingAgentCount()` | method |
| `AddDefendingAgent` | `public void AddDefendingAgent(Agent agent)` | method |
| `RemoveDefendingAgent` | `public void RemoveDefendingAgent(Agent agent)` | method |
| `IsAgentDefending` | `public bool IsAgentDefending(Agent agent)` | method |
| `SimulateTick` | `public virtual void SimulateTick(float dt)` | method |
| `GetTickRequirement` | `public override ScriptComponentBehavior.TickRequirement GetTickRequirement()` | method |
| `OnTickParallel2` | `protected internal override void OnTickParallel2(float dt)` | method |
| `OnTick` | `protected internal override void OnTick(float dt)` | method |
| `OnEditorTick` | `protected internal override void OnEditorTick(float dt)` | method |
| `OnEditorValidate` | `protected internal override void OnEditorValidate()` | method |
| `OnRemoved` | `protected override void OnRemoved(int removeReason)` | method |
| `GetUserFrameForAgent` | `public virtual WorldFrame GetUserFrameForAgent(Agent agent)` | method |
| `ToString` | `public override string ToString()` | method |
| `IsAIMovingTo` | `public virtual bool IsAIMovingTo(Agent agent)` | method |
| `HasUserPositionsChanged` | `public virtual bool HasUserPositionsChanged(Agent agent)` | method |
| `WriteToNetwork` | `public override void WriteToNetwork()` | method |
| `IsUsableByAgent` | `public virtual bool IsUsableByAgent(Agent userAgent)` | method |
| `SetCustomLocalFrame` | `public void SetCustomLocalFrame(in MatrixFrame customLocalFrame)` | method |
| `OnEndMission` | `public override void OnEndMission()` | method |
| `OnAfterReadFromNetwork` | `public override void OnAfterReadFromNetwork(ValueTuple<BaseSynchedMissionObjectReadableRecord, ISynchedMissionObjectReadableRecord>synchedMissionObjectReadableRecord, bool allowVisibilityUpdate = true)` | method |
| `GetDescriptionText` | `public abstract TextObject GetDescriptionText(WeakGameEntity gameEntity);` | method |
| `DescriptionMessage` | `public TextObject DescriptionMessage` | field |
| `ActionMessage` | `public TextObject ActionMessage` | field |
| `ISynchedMissionObjectReadableRecord` | `public struct UsableMissionObjectRecord : ISynchedMissionObjectReadableRecord` | property |
| `ISynchedMissionObjectReadableRecord` | `public struct UsableMissionObjectRecord : ISynchedMissionObjectReadableRecord` | nested type |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface SynchedMissionObject](../SynchedMissionObject)
- [base / interface IFocusable](../IFocusable)
- [base / interface IUsable](../IUsable)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
