---
title: "DefaultBannerEffects"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultBannerEffects`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultBannerEffects

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class DefaultBannerEffects`
**Base:** none
**File:** `TaleWorlds.Core/DefaultBannerEffects.cs`

## Overview

`DefaultBannerEffects` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IncreasedMeleeDamage` | `public static BannerEffect IncreasedMeleeDamage { get; }` |
| `IncreasedMeleeDamageAgainstMountedTroops` | `public static BannerEffect IncreasedMeleeDamageAgainstMountedTroops { get; }` |
| `IncreasedRangedDamage` | `public static BannerEffect IncreasedRangedDamage { get; }` |
| `IncreasedChargeDamage` | `public static BannerEffect IncreasedChargeDamage { get; }` |
| `DecreasedChargeDamage` | `public static BannerEffect DecreasedChargeDamage { get; }` |
| `DecreasedRangedAccuracyPenalty` | `public static BannerEffect DecreasedRangedAccuracyPenalty { get; }` |
| `DecreasedMoraleShock` | `public static BannerEffect DecreasedMoraleShock { get; }` |
| `DecreasedMeleeAttackDamage` | `public static BannerEffect DecreasedMeleeAttackDamage { get; }` |
| `DecreasedRangedAttackDamage` | `public static BannerEffect DecreasedRangedAttackDamage { get; }` |
| `DecreasedShieldDamage` | `public static BannerEffect DecreasedShieldDamage { get; }` |
| `IncreasedTroopMovementSpeed` | `public static BannerEffect IncreasedTroopMovementSpeed { get; }` |
| `IncreasedMountMovementSpeed` | `public static BannerEffect IncreasedMountMovementSpeed { get; }` |
| `IncreasedMoraleShockByMeleeTroops` | `public static BannerEffect IncreasedMoraleShockByMeleeTroops { get; }` |

## Usage Example

```csharp
var example = new DefaultBannerEffects();
```

## See Also

- [Complete Class Catalog](../catalog)