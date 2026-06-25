---
title: "SpawnWeaponAsDropFromAgent"
description: "Auto-generated class reference for SpawnWeaponAsDropFromAgent."
---
# SpawnWeaponAsDropFromAgent

**Namespace:** NetworkMessages.FromServer
**Module:** NetworkMessages.FromServer
**Type:** `public sealed class SpawnWeaponAsDropFromAgent : GameNetworkMessage`
**Base:** `GameNetworkMessage`
**File:** `bin/TaleWorlds.MountAndBlade/NetworkMessages.FromServer/SpawnWeaponAsDropFromAgent.cs`

## Overview

`SpawnWeaponAsDropFromAgent` lives in `NetworkMessages.FromServer` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `NetworkMessages.FromServer` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `AgentIndex` | `public int AgentIndex { get; }` |
| `EquipmentIndex` | `public EquipmentIndex EquipmentIndex { get; }` |
| `Velocity` | `public Vec3 Velocity { get; }` |
| `AngularVelocity` | `public Vec3 AngularVelocity { get; }` |
| `WeaponSpawnFlags` | `public Mission.WeaponSpawnFlags WeaponSpawnFlags { get; }` |
| `ForcedIndex` | `public int ForcedIndex { get; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
SpawnWeaponAsDropFromAgent instance = ...;
```

## See Also

- [Area Index](../)