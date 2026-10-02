---
title: "UsableMachine"
description: "Auto-generated class reference for UsableMachine."
---
# UsableMachine

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class UsableMachine : SynchedMissionObject,IFocusable,IOrderable,IDetachment `
**Base:** SynchedMissionObject, IFocusable, IOrderable, IDetachment
**Source:** TaleWorlds.MountAndBlade/UsableMachine.cs

## Overview

Auto-generated stub for `UsableMachine`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### AddComponent
`public void AddComponent(UsableMissionObjectComponent component)`

### RemoveComponent
`public void RemoveComponent(UsableMissionObjectComponent component)`

### GetOrder
`public virtual OrderType GetOrder(BattleSideEnum side)`

### CreateAIBehaviorObject
`public virtual UsableMachineAIBase CreateAIBehaviorObject()`

### GetValidVacantReachableStandingPointForAgent
`public WeakGameEntity GetValidVacantReachableStandingPointForAgent(Agent agent)`

### SetAI
`public void SetAI(UsableMachineAIBase ai)`

### GetValidStandingPointForAgentWithoutDistanceCheck
`public WeakGameEntity GetValidStandingPointForAgentWithoutDistanceCheck(Agent agent)`

### GetVacantStandingPointForAI
`public StandingPoint GetVacantStandingPointForAI(Agent agent)`

### GetTargetStandingPointOfAIAgent
`public StandingPoint GetTargetStandingPointOfAIAgent(Agent agent)`

### OnMissionEnded
`public override void OnMissionEnded()`

### SetVisibleSynched
`public override void SetVisibleSynched(bool value,bool forceChildrenVisible = false)`

### SetPhysicsStateSynched
`public override void SetPhysicsStateSynched(bool value,bool setChildren = true)`

### OnEditorInit
`protected internal override void OnEditorInit()`

### OnInit
`protected internal override void OnInit()`

### GetTickRequirement
`public override ScriptComponentBehavior.TickRequirement GetTickRequirement()`

### OnTick
`protected internal override void OnTick(float dt)`

### DebugTick
`protected virtual void DebugTick(float dt)`

### OnEditorTick
`protected internal override void OnEditorTick(float dt)`

### OnEditorValidate
`protected internal override void OnEditorValidate()`

### OnFocusGain
`public virtual void OnFocusGain(Agent userAgent)`

### OnFocusLose
`public virtual void OnFocusLose(Agent userAgent)`

### OnPilotAssignedDuringSpawn
`public virtual void OnPilotAssignedDuringSpawn()`

### GetInfoTextForBeingNotInteractable
`public virtual TextObject GetInfoTextForBeingNotInteractable(Agent userAgent)`

### OnMissionReset
`protected internal override void OnMissionReset()`

### Deactivate
`public void Deactivate()`

### Activate
`public void Activate()`

### IsDisabledForBattleSide
`public virtual bool IsDisabledForBattleSide(BattleSideEnum sideEnum)`

### IsDisabledForBattleSideAI
`public virtual bool IsDisabledForBattleSideAI(BattleSideEnum sideEnum)`

### ShouldAutoLeaveDetachmentWhenDisabled
`public virtual bool ShouldAutoLeaveDetachmentWhenDisabled(BattleSideEnum sideEnum)`

### IsDisabledDueToEnemyInRange
`protected bool IsDisabledDueToEnemyInRange(BattleSideEnum sideEnum)`

### AutoAttachUserToFormation
`public virtual bool AutoAttachUserToFormation(BattleSideEnum sideEnum)`

### HasToBeDefendedByUser
`public virtual bool HasToBeDefendedByUser(BattleSideEnum sideEnum)`

### Disable
`public virtual void Disable()`

### OnRemoved
`protected override void OnRemoved(int removeReason)`

### ToString
`public override string ToString()`

### GetActionTextForStandingPoint
`public abstract TextObject GetActionTextForStandingPoint(UsableMissionObject usableGameObject)`

### GetBestPointAlternativeTo
`public virtual StandingPoint GetBestPointAlternativeTo(StandingPoint standingPoint,Agent agent)`

### IsInRangeToCheckAlternativePoints
`public virtual bool IsInRangeToCheckAlternativePoints(Agent agent)`

### GetWeightOfStandingPoint
`protected virtual float GetWeightOfStandingPoint(StandingPoint sp)`

### GetDetachmentWeightAux
`protected virtual float GetDetachmentWeightAux(BattleSideEnum side)`

### IsAgentOnInconvenientNavmesh
`protected virtual bool IsAgentOnInconvenientNavmesh(Agent agent,StandingPoint standingPoint)`

### AddAgentAtSlotIndex
`public void AddAgentAtSlotIndex(Agent agent,int slotIndex)`

### SetIsDisabledForAI
`public void SetIsDisabledForAI(bool isDisabledForAI)`

### GetNumberOfUsableSlots
`public int GetNumberOfUsableSlots()`

### IsStandingPointAvailableForAgent
`public bool IsStandingPointAvailableForAgent(Agent agent)`

### IsUsedByFormation
`public bool IsUsedByFormation(Formation formation)`

### IsStandingPointNotUsedOnAccountOfBeingAmmoLoad
`protected internal virtual bool IsStandingPointNotUsedOnAccountOfBeingAmmoLoad(StandingPoint standingPoint)`

### GetSuitableStandingPointFor
`protected virtual StandingPoint GetSuitableStandingPointFor(BattleSideEnum side,Agent agent = null,List<Agent> agents = null,List<ValueTuple<Agent,float>> agentValuePairs = null)`

### GetDescriptionText
`public abstract TextObject GetDescriptionText(WeakGameEntity gameEntity)`

### ShouldDisableTickIfMachineDisabled
`protected virtual bool ShouldDisableTickIfMachineDisabled()`

### SetEnemyRangeToStopUsing
`public void SetEnemyRangeToStopUsing(float value)`

## See Also

- [Section index](../)
