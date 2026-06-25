---
title: "CombatLogNetworkMessage"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CombatLogNetworkMessage`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CombatLogNetworkMessage

**Namespace:** NetworkMessages.FromServer
**Module:** NetworkMessages.FromServer
**Type:** `public sealed class CombatLogNetworkMessage : GameNetworkMessage`
**Base:** `GameNetworkMessage`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/NetworkMessages.FromServer/CombatLogNetworkMessage.cs`

## Overview

`CombatLogNetworkMessage` lives in `NetworkMessages.FromServer` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `NetworkMessages.FromServer` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `AttackerAgentIndex` | `public int AttackerAgentIndex { get; }` |
| `VictimAgentIndex` | `public int VictimAgentIndex { get; }` |
| `MissionObjectHitId` | `public MissionObjectId MissionObjectHitId { get; }` |
| `DamageType` | `public DamageTypes DamageType { get; }` |
| `CrushedThrough` | `public bool CrushedThrough { get; }` |
| `Chamber` | `public bool Chamber { get; }` |
| `IsRangedAttack` | `public bool IsRangedAttack { get; }` |
| `IsFriendlyFire` | `public bool IsFriendlyFire { get; }` |
| `IsFatalDamage` | `public bool IsFatalDamage { get; }` |
| `IsSpecialDamage` | `public bool IsSpecialDamage { get; }` |
| `BodyPartHit` | `public BoneBodyPartType BodyPartHit { get; }` |
| `HitSpeed` | `public float HitSpeed { get; }` |
| `Distance` | `public float Distance { get; }` |
| `InflictedDamage` | `public int InflictedDamage { get; }` |
| `AbsorbedDamage` | `public int AbsorbedDamage { get; }` |
| `ModifiedDamage` | `public int ModifiedDamage { get; }` |
| `ReflectedDamage` | `public int ReflectedDamage { get; }` |

## Usage Example

```csharp
var example = new CombatLogNetworkMessage();
```

## See Also

- [Complete Class Catalog](../catalog)