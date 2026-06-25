---
title: "SiegeEngineType"
description: "Auto-generated class reference for SiegeEngineType."
---
# SiegeEngineType

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public sealed class SiegeEngineType : MBObjectBase`
**Base:** `MBObjectBase`
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/SiegeEngineType.cs`

## Overview

`SiegeEngineType` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Difficulty` | `public int Difficulty { get; }` |
| `BaseHitPoints` | `public int BaseHitPoints { get; }` |
| `ToolCost` | `public int ToolCost { get; }` |
| `HitChance` | `public float HitChance { get; }` |
| `IsAntiPersonnel` | `public bool IsAntiPersonnel { get; }` |
| `AntiPersonnelHitChance` | `public float AntiPersonnelHitChance { get; }` |
| `IsConstructible` | `public bool IsConstructible { get; }` |
| `IsRanged` | `public bool IsRanged { get; }` |
| `Damage` | `public int Damage { get; }` |
| `ManDayCost` | `public int ManDayCost { get; }` |
| `CampaignRateOfFirePerDay` | `public float CampaignRateOfFirePerDay { get; }` |
| `MovementSpeed` | `public float MovementSpeed { get; }` |
| `ProjectileSpeed` | `public float ProjectileSpeed { get; }` |
| `Name` | `public TextObject Name { get; }` |
| `Description` | `public TextObject Description { get; }` |

## Key Methods

### ToString
`public override string ToString()`

**Purpose:** **Purpose:** Returns a human-readable string representation of the this instance.

```csharp
// Obtain an instance of SiegeEngineType from the subsystem API first
SiegeEngineType siegeEngineType = ...;
var result = siegeEngineType.ToString();
```

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**Purpose:** **Purpose:** Restores the this instance from serialized data.

```csharp
// Obtain an instance of SiegeEngineType from the subsystem API first
SiegeEngineType siegeEngineType = ...;
siegeEngineType.Deserialize(objectManager, node);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
SiegeEngineType siegeEngineType = ...;
siegeEngineType.ToString();
```

## See Also

- [Area Index](../)