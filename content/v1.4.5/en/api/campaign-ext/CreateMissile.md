---
title: "CreateMissile"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CreateMissile`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CreateMissile

**Namespace:** NetworkMessages.FromServer
**Module:** NetworkMessages.FromServer
**Type:** `public sealed class CreateMissile : GameNetworkMessage`
**Base:** `GameNetworkMessage`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/NetworkMessages.FromServer/CreateMissile.cs`

## Overview

`CreateMissile` lives in `NetworkMessages.FromServer` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `NetworkMessages.FromServer` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `MissileIndex` | `public int MissileIndex { get; }` |
| `AgentIndex` | `public int AgentIndex { get; }` |
| `WeaponIndex` | `public EquipmentIndex WeaponIndex { get; }` |
| `Weapon` | `public MissionWeapon Weapon { get; }` |
| `Position` | `public Vec3 Position { get; }` |
| `Direction` | `public Vec3 Direction { get; }` |
| `Speed` | `public float Speed { get; }` |
| `Orientation` | `public Mat3 Orientation { get; }` |
| `HasRigidBody` | `public bool HasRigidBody { get; }` |
| `MissionObjectToIgnoreId` | `public MissionObjectId MissionObjectToIgnoreId { get; }` |
| `IsPrimaryWeaponShot` | `public bool IsPrimaryWeaponShot { get; }` |

## Usage Example

```csharp
var example = new CreateMissile();
```

## See Also

- [Complete Class Catalog](../catalog)