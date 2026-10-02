---
title: "MPPerkObject"
description: "Auto-generated class reference for MPPerkObject."
---
# MPPerkObject

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPPerkObject : IReadOnlyPerkObject `
**Base:** IReadOnlyPerkObject
**Source:** TaleWorlds.MountAndBlade/MPPerkObject.cs

## Overview

Auto-generated stub for `MPPerkObject`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### Clone
`public MPPerkObject Clone(MissionPeer peer)`

### Reset
`public void Reset()`

### GetExtraTroopCount
`public int GetExtraTroopCount(bool isWarmup)`

### GetAlternativeEquipments
`public List<ValueTuple<EquipmentIndex,EquipmentElement>> GetAlternativeEquipments(bool isWarmup,bool isPlayer,List<ValueTuple<EquipmentIndex,EquipmentElement>> alternativeEquipments,bool getAllEquipments = false)`

### GetDrivenPropertyBonusOnSpawn
`public float GetDrivenPropertyBonusOnSpawn(bool isWarmup,bool isPlayer,DrivenProperty drivenProperty,float baseValue)`

### GetHitpoints
`public float GetHitpoints(bool isWarmup,bool isPlayer)`

### GetTroopCount
`public static int GetTroopCount(MultiplayerClassDivisions.MPHeroClass heroClass,int botsPerFormation,MPPerkObject.MPOnSpawnPerkHandler onSpawnPerkHandler)`

### Deserialize
`public static IReadOnlyPerkObject Deserialize(XmlNode node)`

### GetPerkHandler
`public static MPPerkObject.MPPerkHandler GetPerkHandler(Agent agent)`

### GetCombatPerkHandler
`public static MPPerkObject.MPCombatPerkHandler GetCombatPerkHandler(Agent attacker,Agent defender)`

### GetOnSpawnPerkHandler
`public static MPPerkObject.MPOnSpawnPerkHandler GetOnSpawnPerkHandler(MissionPeer peer)`

### RaiseEventForAllPeers
`public static void RaiseEventForAllPeers(MPPerkCondition.PerkEventFlags flags)`

### RaiseEventForAllPeersOnTeam
`public static void RaiseEventForAllPeersOnTeam(Team side,MPPerkCondition.PerkEventFlags flags)`

### TickAllPeerPerks
`public static void TickAllPeerPerks(int tickCount)`

### RaiseEventForAllPeersCommand
`public static string RaiseEventForAllPeersCommand(List<string> strings)`

### TickAllPeerPerksCommand
`public static string TickAllPeerPerksCommand(List<string> strings)`

## See Also

- [Section index](../)
