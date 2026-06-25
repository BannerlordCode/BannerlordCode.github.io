---
title: "MissionSiegeWeapon"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionSiegeWeapon`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionSiegeWeapon

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class MissionSiegeWeapon : IMissionSiegeWeapon`
**Base:** `IMissionSiegeWeapon`
**File:** `TaleWorlds.Core/MissionSiegeWeapon.cs`

## Overview

`MissionSiegeWeapon` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

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
MissionSiegeWeapon.CreateDefaultWeapon(type);
```

## See Also

- [Complete Class Catalog](../catalog)