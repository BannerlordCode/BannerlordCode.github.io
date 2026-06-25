---
title: "MissionSiegeWeapon"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionSiegeWeapon`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionSiegeWeapon

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class MissionSiegeWeapon : IMissionSiegeWeapon`
**Base:** `IMissionSiegeWeapon`
**Area:** core-extra

## Overview

`MissionSiegeWeapon` lives in `TaleWorlds.Core`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Index` | `public int Index { get; }` |
| `Type` | `public SiegeEngineType Type { get; }` |
| `Health` | `public float Health { get; }` |
| `InitialHealth` | `public float InitialHealth { get; }` |
| `MaxHealth` | `public float MaxHealth { get; }` |

## Key Methods

### CreateDefaultWeapon
`public static MissionSiegeWeapon CreateDefaultWeapon(SiegeEngineType type)`

**Purpose:** Creates a new `default weapon` instance or object.

### CreateCampaignWeapon
`public static MissionSiegeWeapon CreateCampaignWeapon(SiegeEngineType type, int index, float health, float maxHealth)`

**Purpose:** Creates a new `campaign weapon` instance or object.

### SetHealth
`public void SetHealth(float health)`

**Purpose:** Sets the value or state of `health`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
MissionSiegeWeapon.CreateDefaultWeapon(type);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)
