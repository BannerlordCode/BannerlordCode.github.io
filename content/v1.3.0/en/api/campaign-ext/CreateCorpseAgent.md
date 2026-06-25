---
title: "CreateCorpseAgent"
description: "Auto-generated class reference for CreateCorpseAgent."
---
# CreateCorpseAgent

**Namespace:** NetworkMessages.FromServer
**Module:** NetworkMessages.FromServer
**Type:** `public sealed class CreateCorpseAgent : GameNetworkMessage`
**Base:** `GameNetworkMessage`
**File:** `TaleWorlds.MountAndBlade/NetworkMessages/FromServer/CreateCorpseAgent.cs`

## Overview

`CreateCorpseAgent` lives in `NetworkMessages.FromServer` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `NetworkMessages.FromServer` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `AgentIndex` | `public int AgentIndex { get; }` |
| `MountAgentIndex` | `public int MountAgentIndex { get; }` |
| `Peer` | `public NetworkCommunicator Peer { get; }` |
| `Character` | `public BasicCharacterObject Character { get; }` |
| `Monster` | `public Monster Monster { get; }` |
| `MissionEquipment` | `public MissionEquipment MissionEquipment { get; }` |
| `SpawnEquipment` | `public Equipment SpawnEquipment { get; }` |
| `BodyPropertiesValue` | `public BodyProperties BodyPropertiesValue { get; }` |
| `BodyPropertiesSeed` | `public int BodyPropertiesSeed { get; }` |
| `IsFemale` | `public bool IsFemale { get; }` |
| `TeamIndex` | `public int TeamIndex { get; }` |
| `Position` | `public Vec3 Position { get; }` |
| `Direction` | `public Vec2 Direction { get; }` |
| `FormationIndex` | `public int FormationIndex { get; }` |
| `IsPlayerAgent` | `public bool IsPlayerAgent { get; }` |
| `ClothingColor1` | `public uint ClothingColor1 { get; }` |
| `ClothingColor2` | `public uint ClothingColor2 { get; }` |
| `CorpsesToFadeIndex` | `public int CorpsesToFadeIndex { get; }` |
| `AttachedWeaponCount` | `public int AttachedWeaponCount { get; }` |
| `AttachedWeapons` | `public MBList<MissionWeapon> AttachedWeapons { get; }` |
| `AttachedWeaponsBoneIndices` | `public MBList<sbyte> AttachedWeaponsBoneIndices { get; }` |
| `AttachedWeaponsLocalFrames` | `public MBList<MatrixFrame> AttachedWeaponsLocalFrames { get; }` |
| `DeathActionIndex` | `public ActionIndexCache DeathActionIndex { get; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
CreateCorpseAgent instance = ...;
```

## See Also

- [Area Index](../)