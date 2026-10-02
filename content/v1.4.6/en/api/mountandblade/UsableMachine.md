---
title: "UsableMachine"
description: "UsableMachine: a public class in TaleWorlds.MountAndBlade, inheriting SynchedMissionObject, IFocusable; 84 exposed members (52 methods, 24 properties, 7 fields). Source: TaleWorlds.MountAndBlade/UsableMachine.cs."
---
# UsableMachine

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public abstract class UsableMachine : SynchedMissionObject, IFocusable, IOrderable, IDetachment`
**File:** `TaleWorlds.MountAndBlade/UsableMachine.cs`

## Overview

UsableMachine lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/UsableMachine.cs. It is a public class (abstract), implementing/inheriting SynchedMissionObject, IFocusable, IOrderable, IDetachment; the inheritance chain is UsableMachine → SynchedMissionObject → MissionObject → ScriptComponentBehavior. It exposes 84 public/protected members: 52 methods, 24 properties, 7 fields, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: UsableMachine is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain UsableMachine → SynchedMissionObject → MissionObject → ScriptComponentBehavior. The surface is method-led (methods 52/84, properties 24/84), so it mostly exposes operations. ScriptComponentBehavior on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/UsableMachine.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MBList` | `public MBList<StandingPoint>StandingPoints` | property |
| `PilotStandingPoint` | `public StandingPoint PilotStandingPoint` | property |
| `PilotStandingPointSlotIndex` | `public int PilotStandingPointSlotIndex` | property |
| `List` | `protected internal List<StandingPoint>AmmoPickUpPoints` | property |
| `DestructionComponent` | `public DestructableComponent DestructionComponent` | property |
| `IsDestructible` | `public bool IsDestructible` | property |
| `IsDestroyed` | `public bool IsDestroyed` | property |
| `PilotAgent` | `public Agent PilotAgent` | property |
| `IsLoose` | `public bool IsLoose` | property |
| `SinkingReferenceOffset` | `public virtual float SinkingReferenceOffset` | property |
| `Ai` | `public UsableMachineAIBase Ai` | property |
| `FocusableObjectType` | `public virtual FocusableObjectType FocusableObjectType` | property |
| `IsFocusable` | `public virtual bool IsFocusable` | property |
| `CurrentlyUsedAmmoPickUpPoint` | `public StandingPoint CurrentlyUsedAmmoPickUpPoint` | property |
| `HasAIPickingUpAmmo` | `public bool HasAIPickingUpAmmo` | property |
| `IsDisabledForAI` | `public bool IsDisabledForAI` | property |
| `MBReadOnlyList` | `public MBReadOnlyList<Formation>UserFormations` | property |
| `UsableMachine` | `protected UsableMachine()` | constructor |
| `AddComponent` | `public void AddComponent(UsableMissionObjectComponent component)` | method |
| `RemoveComponent` | `public void RemoveComponent(UsableMissionObjectComponent component)` | method |
| `GetComponent` | `public T GetComponent<T>() where T : UsableMissionObjectComponent` | method |
| `GetOrder` | `public virtual OrderType GetOrder(BattleSideEnum side)` | method |
| `CreateAIBehaviorObject` | `public virtual UsableMachineAIBase CreateAIBehaviorObject()` | method |
| `GetValidVacantReachableStandingPointForAgent` | `public WeakGameEntity GetValidVacantReachableStandingPointForAgent(Agent agent)` | method |
| `SetAI` | `public void SetAI(UsableMachineAIBase ai)` | method |
| `GetValidStandingPointForAgentWithoutDistanceCheck` | `public WeakGameEntity GetValidStandingPointForAgentWithoutDistanceCheck(Agent agent)` | method |
| `GetVacantStandingPointForAI` | `public StandingPoint GetVacantStandingPointForAI(Agent agent)` | method |
| `GetTargetStandingPointOfAIAgent` | `public StandingPoint GetTargetStandingPointOfAIAgent(Agent agent)` | method |
| `OnMissionEnded` | `public override void OnMissionEnded()` | method |
| `SetVisibleSynched` | `public override void SetVisibleSynched(bool value, bool forceChildrenVisible = false)` | method |
| `SetPhysicsStateSynched` | `public override void SetPhysicsStateSynched(bool value, bool setChildren = true)` | method |
| `UserCountNotInStruckAction` | `public int UserCountNotInStruckAction` | property |
| `UserCountIncludingInStruckAction` | `public int UserCountIncludingInStruckAction` | property |
| `MaxUserCount` | `public virtual int MaxUserCount` | property |
| `OnEditorInit` | `protected internal override void OnEditorInit()` | method |
| `OnInit` | `protected internal override void OnInit()` | method |
| `GetTickRequirement` | `public override ScriptComponentBehavior.TickRequirement GetTickRequirement()` | method |
| `OnTick` | `protected internal override void OnTick(float dt)` | method |
| `DebugTick` | `protected virtual void DebugTick(float dt)` | method |
| `OnEditorTick` | `protected internal override void OnEditorTick(float dt)` | method |
| `OnEditorValidate` | `protected internal override void OnEditorValidate()` | method |
| `OnFocusGain` | `public virtual void OnFocusGain(Agent userAgent)` | method |
| `OnFocusLose` | `public virtual void OnFocusLose(Agent userAgent)` | method |
| `OnPilotAssignedDuringSpawn` | `public virtual void OnPilotAssignedDuringSpawn()` | method |
| `GetInfoTextForBeingNotInteractable` | `public virtual TextObject GetInfoTextForBeingNotInteractable(Agent userAgent)` | method |
| `HasWaitFrame` | `public virtual bool HasWaitFrame` | property |
| `WaitFrame` | `public MatrixFrame WaitFrame` | property |
| `WaitEntity` | `public GameEntity WaitEntity` | property |
| `OnMissionReset` | `protected internal override void OnMissionReset()` | method |
| `IsDeactivated` | `public virtual bool IsDeactivated` | property |
| `Deactivate` | `public void Deactivate()` | method |
| `Activate` | `public void Activate()` | method |
| `IsDisabledForBattleSide` | `public virtual bool IsDisabledForBattleSide(BattleSideEnum sideEnum)` | method |
| `IsDisabledForBattleSideAI` | `public virtual bool IsDisabledForBattleSideAI(BattleSideEnum sideEnum)` | method |
| `ShouldAutoLeaveDetachmentWhenDisabled` | `public virtual bool ShouldAutoLeaveDetachmentWhenDisabled(BattleSideEnum sideEnum)` | method |
| `IsDisabledDueToEnemyInRange` | `protected bool IsDisabledDueToEnemyInRange(BattleSideEnum sideEnum)` | method |
| `AutoAttachUserToFormation` | `public virtual bool AutoAttachUserToFormation(BattleSideEnum sideEnum)` | method |
| `HasToBeDefendedByUser` | `public virtual bool HasToBeDefendedByUser(BattleSideEnum sideEnum)` | method |
| `Disable` | `public virtual void Disable()` | method |
| `OnRemoved` | `protected override void OnRemoved(int removeReason)` | method |
| `ToString` | `public override string ToString()` | method |
| `GetActionTextForStandingPoint` | `public abstract TextObject GetActionTextForStandingPoint(UsableMissionObject usableGameObject);` | method |
| `GetBestPointAlternativeTo` | `public virtual StandingPoint GetBestPointAlternativeTo(StandingPoint standingPoint, Agent agent)` | method |
| `IsInRangeToCheckAlternativePoints` | `public virtual bool IsInRangeToCheckAlternativePoints(Agent agent)` | method |
| `GetWeightOfStandingPoint` | `protected virtual float GetWeightOfStandingPoint(StandingPoint sp)` | method |
| `GetDetachmentWeightAux` | `protected virtual float GetDetachmentWeightAux(BattleSideEnum side)` | method |
| `IsAgentOnInconvenientNavmesh` | `protected virtual bool IsAgentOnInconvenientNavmesh(Agent agent, StandingPoint standingPoint)` | method |
| `AddAgentAtSlotIndex` | `public void AddAgentAtSlotIndex(Agent agent, int slotIndex)` | method |
| `SetIsDisabledForAI` | `public void SetIsDisabledForAI(bool isDisabledForAI)` | method |
| `GetNumberOfUsableSlots` | `public int GetNumberOfUsableSlots()` | method |
| `IsStandingPointAvailableForAgent` | `public bool IsStandingPointAvailableForAgent(Agent agent)` | method |
| `IsUsedByFormation` | `public bool IsUsedByFormation(Formation formation)` | method |
| `IsStandingPointNotUsedOnAccountOfBeingAmmoLoad` | `protected internal virtual bool IsStandingPointNotUsedOnAccountOfBeingAmmoLoad(StandingPoint standingPoint)` | method |
| `GetSuitableStandingPointFor` | `protected virtual StandingPoint GetSuitableStandingPointFor(BattleSideEnum side, Agent agent = null, List<Agent>agents = null, List<ValueTuple<Agent, float>>agentValuePairs = null)` | method |
| `GetDescriptionText` | `public abstract TextObject GetDescriptionText(WeakGameEntity gameEntity);` | method |
| `ShouldDisableTickIfMachineDisabled` | `protected virtual bool ShouldDisableTickIfMachineDisabled()` | method |
| `SetEnemyRangeToStopUsing` | `public void SetEnemyRangeToStopUsing(float value)` | method |
| `UsableMachineParentTag` | `public const string UsableMachineParentTag` | field |
| `PilotStandingPointTag` | `public string PilotStandingPointTag` | field |
| `AmmoPickUpTag` | `public string AmmoPickUpTag` | field |
| `WaitStandingPointTag` | `public string WaitStandingPointTag` | field |
| `AreUsableStandingPointsVacant` | `protected bool AreUsableStandingPointsVacant` | field |
| `MachinePositionOffsetToStopUsingLocal` | `protected Vec2 MachinePositionOffsetToStopUsingLocal` | field |
| `MakeVisibilityCheck` | `protected bool MakeVisibilityCheck` | field |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface SynchedMissionObject](../SynchedMissionObject)
- [base / interface IFocusable](../IFocusable)
- [base / interface IOrderable](../IOrderable)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
