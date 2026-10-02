---
title: "MPPerkObject"
description: "MPPerkObject 的自动生成类参考。"
---
# MPPerkObject

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPPerkObject : IReadOnlyPerkObject `
**Base:** IReadOnlyPerkObject
**Source:** TaleWorlds.MountAndBlade/MPPerkObject.cs

## 概述

`MPPerkObject` 的自动生成类参考页面。声明来自 `TaleWorlds.MountAndBlade/MPPerkObject.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### Clone
`public MPPerkObject Clone(MissionPeer peer) `

### Reset
`public void Reset() `

### GetExtraTroopCount
`public int GetExtraTroopCount(bool isWarmup) `

### GetAlternativeEquipments
`public List<ValueTuple<EquipmentIndex,EquipmentElement>> GetAlternativeEquipments(bool isWarmup,bool isPlayer,List<ValueTuple<EquipmentIndex,EquipmentElement>> alternativeEquipments,bool getAllEquipments = false) `

### GetDrivenPropertyBonusOnSpawn
`public float GetDrivenPropertyBonusOnSpawn(bool isWarmup,bool isPlayer,DrivenProperty drivenProperty,float baseValue) `

### GetHitpoints
`public float GetHitpoints(bool isWarmup,bool isPlayer) `

### GetTroopCount
`public static int GetTroopCount(MultiplayerClassDivisions.MPHeroClass heroClass,int botsPerFormation,MPPerkObject.MPOnSpawnPerkHandler onSpawnPerkHandler) `

### Deserialize
`public static IReadOnlyPerkObject Deserialize(XmlNode node) `

### GetPerkHandler
`public static MPPerkObject.MPPerkHandler GetPerkHandler(Agent agent) `
`public static MPPerkObject.MPPerkHandler GetPerkHandler(MissionPeer peer) `

### GetCombatPerkHandler
`public static MPPerkObject.MPCombatPerkHandler GetCombatPerkHandler(Agent attacker,Agent defender) `

### GetOnSpawnPerkHandler
`public static MPPerkObject.MPOnSpawnPerkHandler GetOnSpawnPerkHandler(MissionPeer peer) `
`public static MPPerkObject.MPOnSpawnPerkHandler GetOnSpawnPerkHandler(IEnumerable<IReadOnlyPerkObject> perks) `

### RaiseEventForAllPeers
`public static void RaiseEventForAllPeers(MPPerkCondition.PerkEventFlags flags) `

### RaiseEventForAllPeersOnTeam
`public static void RaiseEventForAllPeersOnTeam(Team side,MPPerkCondition.PerkEventFlags flags) `

### TickAllPeerPerks
`public static void TickAllPeerPerks(int tickCount) `

### RaiseEventForAllPeersCommand
`public static string RaiseEventForAllPeersCommand(List<string> strings) `

### TickAllPeerPerksCommand
`public static string TickAllPeerPerksCommand(List<string> strings) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
