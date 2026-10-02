---
title: "UsableMissionObject"
description: "Auto-generated class reference for UsableMissionObject."
---
# UsableMissionObject

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class UsableMissionObject : SynchedMissionObject,IFocusable,IUsable,IVisible `
**Base:** SynchedMissionObject, IFocusable, IUsable, IVisible
**Source:** TaleWorlds.MountAndBlade/UsableMissionObject.cs

## Overview

Auto-generated stub for `UsableMissionObject`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### OnUserConversationStart
`public virtual void OnUserConversationStart()`

### OnUserConversationEnd
`public virtual void OnUserConversationEnd()`

### SetAreUserPositionsUpdatedInTheMachineTick
`public void SetAreUserPositionsUpdatedInTheMachineTick(bool value)`

### GetIsUserPositionsUpdatedInTheMachineTick
`public bool GetIsUserPositionsUpdatedInTheMachineTick()`

### SetIsDeactivatedSynched
`public void SetIsDeactivatedSynched(bool value)`

### SetIsDisabledForPlayersSynched
`public void SetIsDisabledForPlayersSynched(bool value)`

### IsDisabledForAgent
`public virtual bool IsDisabledForAgent(Agent agent)`

### AddComponent
`public void AddComponent(UsableMissionObjectComponent component)`

### RemoveComponent
`public void RemoveComponent(UsableMissionObjectComponent component)`

### RefreshGameEntityWithWorldPosition
`public void RefreshGameEntityWithWorldPosition()`

### CollectChildEntity
`protected virtual void CollectChildEntity(WeakGameEntity childEntity)`

### VerifyChildEntities
`protected virtual bool VerifyChildEntities(ref string errorMessage)`

### OnInit
`protected internal override void OnInit()`

### OnEditorInit
`protected internal override void OnEditorInit()`

### OnMissionReset
`protected internal override void OnMissionReset()`

### OnFocusGain
`public virtual void OnFocusGain(Agent userAgent)`

### OnFocusLose
`public virtual void OnFocusLose(Agent userAgent)`

### GetInfoTextForBeingNotInteractable
`public virtual TextObject GetInfoTextForBeingNotInteractable(Agent userAgent)`

### SetUserForClient
`public virtual void SetUserForClient(Agent userAgent)`

### OnUse
`public virtual void OnUse(Agent userAgent,sbyte agentBoneIndex)`

### OnAIMoveToUse
`public virtual void OnAIMoveToUse(Agent userAgent,IDetachment detachment)`

### OnUseStopped
`public virtual void OnUseStopped(Agent userAgent,bool isSuccessful,int preferenceIndex)`

### OnMoveToStopped
`public virtual void OnMoveToStopped(Agent movingAgent)`

### GetMovingAgentCount
`public virtual int GetMovingAgentCount()`

### GetMovingAgentWithIndex
`public virtual Agent GetMovingAgentWithIndex(int index)`

### RemoveMovingAgent
`public virtual void RemoveMovingAgent(Agent movingAgent)`

### AddMovingAgent
`public virtual void AddMovingAgent(Agent movingAgent)`

### OnAIDefendBegin
`public void OnAIDefendBegin(Agent agent,IDetachment detachment)`

### OnAIDefendEnd
`public void OnAIDefendEnd(Agent agent)`

### InitializeDefendingAgents
`public void InitializeDefendingAgents()`

### GetDefendingAgentCount
`public int GetDefendingAgentCount()`

### AddDefendingAgent
`public void AddDefendingAgent(Agent agent)`

### RemoveDefendingAgent
`public void RemoveDefendingAgent(Agent agent)`

### IsAgentDefending
`public bool IsAgentDefending(Agent agent)`

### SimulateTick
`public virtual void SimulateTick(float dt)`

### GetTickRequirement
`public override ScriptComponentBehavior.TickRequirement GetTickRequirement()`

### OnTickParallel2
`protected internal override void OnTickParallel2(float dt)`

### OnTick
`protected internal override void OnTick(float dt)`

### OnEditorTick
`protected internal override void OnEditorTick(float dt)`

### OnEditorValidate
`protected internal override void OnEditorValidate()`

### OnRemoved
`protected override void OnRemoved(int removeReason)`

### GetUserFrameForAgent
`public virtual WorldFrame GetUserFrameForAgent(Agent agent)`

### ToString
`public override string ToString()`

### IsAIMovingTo
`public virtual bool IsAIMovingTo(Agent agent)`

### HasUserPositionsChanged
`public virtual bool HasUserPositionsChanged(Agent agent)`

### WriteToNetwork
`public override void WriteToNetwork()`

### IsUsableByAgent
`public virtual bool IsUsableByAgent(Agent userAgent)`

### SetCustomLocalFrame
`public void SetCustomLocalFrame(in MatrixFrame customLocalFrame)`

### OnEndMission
`public override void OnEndMission()`

### OnAfterReadFromNetwork
`public override void OnAfterReadFromNetwork(ValueTuple<BaseSynchedMissionObjectReadableRecord,ISynchedMissionObjectReadableRecord> synchedMissionObjectReadableRecord,bool allowVisibilityUpdate = true)`

### GetDescriptionText
`public abstract TextObject GetDescriptionText(WeakGameEntity gameEntity)`

## See Also

- [Section index](../)
