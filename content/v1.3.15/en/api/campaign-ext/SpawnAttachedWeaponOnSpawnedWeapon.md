---
title: "SpawnAttachedWeaponOnSpawnedWeapon"
description: "Auto-generated class reference for SpawnAttachedWeaponOnSpawnedWeapon."
---
# SpawnAttachedWeaponOnSpawnedWeapon

**Namespace:** NetworkMessages.FromServer
**Module:** NetworkMessages.FromServer
**Type:** `public sealed class SpawnAttachedWeaponOnSpawnedWeapon : GameNetworkMessage`
**Base:** `GameNetworkMessage`
**File:** `TaleWorlds.MountAndBlade/NetworkMessages/FromServer/SpawnAttachedWeaponOnSpawnedWeapon.cs`

## Overview

`SpawnAttachedWeaponOnSpawnedWeapon` lives in `NetworkMessages.FromServer` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `NetworkMessages.FromServer` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `SpawnedWeaponId` | `public MissionObjectId SpawnedWeaponId { get; }` |
| `AttachmentIndex` | `public int AttachmentIndex { get; }` |
| `ForcedIndex` | `public int ForcedIndex { get; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
SpawnAttachedWeaponOnSpawnedWeapon instance = ...;
```

## See Also

- [Area Index](../)