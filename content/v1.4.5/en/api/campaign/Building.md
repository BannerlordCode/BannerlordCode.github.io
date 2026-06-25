---
title: "Building"
description: "Auto-generated class reference for Building."
---
# Building

**Namespace:** TaleWorlds.CampaignSystem.Settlements.Buildings
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class Building`
**Base:** none
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Settlements.Buildings/Building.cs`

## Overview

`Building` lives in `TaleWorlds.CampaignSystem.Settlements.Buildings` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Settlements.Buildings` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Town` | `public Town Town { get; }` |
| `CurrentLevel` | `public int CurrentLevel { get; set; }` |

## Key Methods

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Returns a hash code for the current object, used for fast lookup in dictionaries and hash sets.

```csharp
// Obtain an instance of Building from the subsystem API first
Building building = ...;
var result = building.GetHashCode();
```

### GetConstructionCost
`public int GetConstructionCost()`

**Purpose:** Reads and returns the `construction cost` value held by the current object.

```csharp
// Obtain an instance of Building from the subsystem API first
Building building = ...;
var result = building.GetConstructionCost();
```

### LevelUp
`public void LevelUp()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Building from the subsystem API first
Building building = ...;
building.LevelUp();
```

### LevelDown
`public void LevelDown()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Building from the subsystem API first
Building building = ...;
building.LevelDown();
```

### HitPointChanged
`public void HitPointChanged(float change)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Building from the subsystem API first
Building building = ...;
building.HitPointChanged(0);
```

### AddEffectOfBuilding
`public void AddEffectOfBuilding(BuildingEffectEnum buildingEffect, ref ExplainedNumber result)`

**Purpose:** Adds `effect of building` to the current collection or state.

```csharp
// Obtain an instance of Building from the subsystem API first
Building building = ...;
building.AddEffectOfBuilding(buildingEffect, result);
```

### GetBonusExplanation
`public TextObject GetBonusExplanation()`

**Purpose:** Reads and returns the `bonus explanation` value held by the current object.

```csharp
// Obtain an instance of Building from the subsystem API first
Building building = ...;
var result = building.GetBonusExplanation();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
Building building = ...;
building.GetHashCode();
```

## See Also

- [Area Index](../)