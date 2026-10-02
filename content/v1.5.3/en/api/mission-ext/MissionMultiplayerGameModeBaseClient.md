---
title: "MissionMultiplayerGameModeBaseClient"
description: "Auto-generated class reference for MissionMultiplayerGameModeBaseClient."
---
# MissionMultiplayerGameModeBaseClient

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MissionMultiplayerGameModeBaseClient : MissionNetwork,ICameraModeLogic `
**Base:** MissionNetwork, ICameraModeLogic
**Source:** TaleWorlds.MountAndBlade/MissionMultiplayerGameModeBaseClient.cs

## Overview

Auto-generated stub for `MissionMultiplayerGameModeBaseClient`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### GetGoldAmount
`public abstract int GetGoldAmount()`

### GetMissionCameraLockMode
`public virtual SpectatorCameraTypes GetMissionCameraLockMode(bool lockedToMainPlayer)`

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

### EarlyStart
`public override void EarlyStart()`

### CheckTimer
`public bool CheckTimer(out int remainingTime,out int remainingWarningTime,bool forceUpdate = false)`

### GetWarningTimer
`protected virtual int GetWarningTimer()`

### OnGoldAmountChangedForRepresentative
`public abstract void OnGoldAmountChangedForRepresentative(MissionRepresentativeBase representative,int goldAmount)`

### CanRequestTroopChange
`public virtual bool CanRequestTroopChange()`

### CanRequestCultureChange
`public virtual bool CanRequestCultureChange()`

### IsClassAvailable
`public bool IsClassAvailable(MultiplayerClassDivisions.MPHeroClass heroClass)`

## See Also

- [Section index](../)
