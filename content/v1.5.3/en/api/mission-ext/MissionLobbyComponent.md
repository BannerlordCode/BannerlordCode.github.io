---
title: "MissionLobbyComponent"
description: "Auto-generated class reference for MissionLobbyComponent."
---
# MissionLobbyComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MissionLobbyComponent : MissionNetwork `
**Base:** MissionNetwork
**Source:** TaleWorlds.MountAndBlade/MissionLobbyComponent.cs

## Overview

Auto-generated stub for `MissionLobbyComponent`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### AddLobbyComponentType
`public static void AddLobbyComponentType(Type type,LobbyMissionType missionType,bool isSeverComponent)`

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

### AddRemoveMessageHandlers
`protected override void AddRemoveMessageHandlers(GameNetwork.NetworkMessageHandlerRegistererContainer registerer)`

### OnUdpNetworkHandlerClose
`protected override void OnUdpNetworkHandlerClose()`

### CreateBehavior
`public static MissionLobbyComponent CreateBehavior()`

### QuitMission
`public virtual void QuitMission()`

### AfterStart
`public override void AfterStart()`

### EarlyStart
`public override void EarlyStart()`

### OnMissionTick
`public override void OnMissionTick(float dt)`

### OnUdpNetworkHandlerTick
`protected override void OnUdpNetworkHandlerTick()`

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

### IsClassAvailable
`public bool IsClassAvailable(FormationClass formationClass)`

### ChangeClassRestriction
`public void ChangeClassRestriction(FormationClass classToChangeRestriction,bool value)`

### HandleNewClientConnect
`protected override void HandleNewClientConnect(PlayerConnectionInfo clientConnectionInfo)`

### HandleLateNewClientAfterLoadingFinished
`protected override void HandleLateNewClientAfterLoadingFinished(NetworkCommunicator networkPeer)`

### DespawnPlayer
`public void DespawnPlayer(MissionPeer missionPeer)`

### OnScoreHit
`public override void OnScoreHit(Agent affectedAgent,Agent affectorAgent,WeaponComponentData attackerWeapon,bool isBlocked,bool isSiegeEngineHit,in Blow blow,in AttackCollisionData collisionData,float damagedHp,float hitDistance,float shotDifficulty)`

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent,Agent affectorAgent,AgentState agentState,KillingBlow killingBlow)`

### OnAgentBuild
`public override void OnAgentBuild(Agent agent,Banner banner)`

### OnPlayerKills
`protected virtual void OnPlayerKills(MissionPeer killerPeer,Agent killedAgent,MissionPeer assistorPeer)`

### OnPlayerDies
`protected virtual void OnPlayerDies(MissionPeer peer,MissionPeer affectorPeer,MissionPeer assistorPeer)`

### OnBotKills
`protected virtual void OnBotKills(Agent botAgent,Agent killedAgent)`

### OnBotDies
`protected virtual void OnBotDies(Agent botAgent,MissionPeer affectorPeer,MissionPeer assistorPeer)`

### OnClearScene
`public override void OnClearScene()`

### GetSpawnPeriodDurationForPeer
`public static int GetSpawnPeriodDurationForPeer(MissionPeer peer)`

### SetStateEndingAsServer
`public virtual void SetStateEndingAsServer()`

### EndGameAsServer
`protected virtual void EndGameAsServer()`

### RequestCultureSelection
`public void RequestCultureSelection()`

### RequestAdminMessage
`public void RequestAdminMessage(string message,bool isBroadcast)`

### RequestTroopSelection
`public void RequestTroopSelection()`

### OnCultureSelected
`public void OnCultureSelected(BasicCultureObject culture)`

### GetRandomFaceSeedForCharacter
`public int GetRandomFaceSeedForCharacter(BasicCharacterObject character,int addition = 0)`

### MPHostChangeParam
`public static string MPHostChangeParam(List<string> strings)`

## See Also

- [Section index](../)
