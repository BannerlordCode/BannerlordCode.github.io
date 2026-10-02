---
title: "MissionMultiplayerSiegeClient"
description: "Auto-generated class reference for MissionMultiplayerSiegeClient."
---
# MissionMultiplayerSiegeClient

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionMultiplayerSiegeClient : MissionMultiplayerGameModeBaseClient,ICommanderInfo,IMissionBehavior `
**Base:** MissionMultiplayerGameModeBaseClient, ICommanderInfo, IMissionBehavior
**Source:** TaleWorlds.MountAndBlade/MissionMultiplayerSiegeClient.cs

## Overview

Auto-generated stub for `MissionMultiplayerSiegeClient`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### AddRemoveMessageHandlers
`protected override void AddRemoveMessageHandlers(GameNetwork.NetworkMessageHandlerRegistererContainer registerer)`

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

### AfterStart
`public override void AfterStart()`

### GetGoldAmount
`public override int GetGoldAmount()`

### OnGoldAmountChangedForRepresentative
`public override void OnGoldAmountChangedForRepresentative(MissionRepresentativeBase representative,int goldAmount)`

### OnNumberOfFlagsChanged
`public void OnNumberOfFlagsChanged()`

### OnCapturePointOwnerChanged
`public void OnCapturePointOwnerChanged(FlagCapturePoint flagCapturePoint,Team ownerTeam)`

### OnMoraleChanged
`public void OnMoraleChanged(int attackerMorale,int defenderMorale,int[] capturePointRemainingMoraleGains)`

### GetFlagOwner
`public Team GetFlagOwner(FlagCapturePoint flag)`

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

### OnMissionTick
`public override void OnMissionTick(float dt)`

### GetSiegeMissiles
`public List<ItemObject> GetSiegeMissiles()`

## See Also

- [Section index](../)
