---
title: "CreateFreeCorpseMountAgent"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CreateFreeCorpseMountAgent`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CreateFreeCorpseMountAgent

**Namespace:** NetworkMessages.FromServer
**Module:** NetworkMessages.FromServer
**Type:** `public sealed class CreateFreeCorpseMountAgent : GameNetworkMessage`
**Base:** `GameNetworkMessage`
**File:** `TaleWorlds.MountAndBlade/NetworkMessages/FromServer/CreateFreeCorpseMountAgent.cs`

## Overview

`CreateFreeCorpseMountAgent` lives in `NetworkMessages.FromServer` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `NetworkMessages.FromServer` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `AgentIndex` | `public int AgentIndex { get; }` |
| `HorseItem` | `public EquipmentElement HorseItem { get; }` |
| `HorseHarnessItem` | `public EquipmentElement HorseHarnessItem { get; }` |
| `Position` | `public Vec3 Position { get; }` |
| `Direction` | `public Vec2 Direction { get; }` |
| `CorpsesToFadeIndex` | `public int CorpsesToFadeIndex { get; }` |
| `AttachedWeaponCount` | `public int AttachedWeaponCount { get; }` |
| `AttachedWeapons` | `public MBList<MissionWeapon> AttachedWeapons { get; }` |
| `AttachedWeaponsBoneIndices` | `public MBList<sbyte> AttachedWeaponsBoneIndices { get; }` |
| `AttachedWeaponsLocalFrames` | `public MBList<MatrixFrame> AttachedWeaponsLocalFrames { get; }` |
| `DeathActionIndex` | `public ActionIndexCache DeathActionIndex { get; }` |

## Usage Example

```csharp
var example = new CreateFreeCorpseMountAgent();
```

## See Also

- [Complete Class Catalog](../catalog)