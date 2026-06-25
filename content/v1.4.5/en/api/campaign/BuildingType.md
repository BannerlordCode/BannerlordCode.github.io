---
title: "BuildingType"
description: "Auto-generated class reference for BuildingType."
---
# BuildingType

**Namespace:** TaleWorlds.CampaignSystem.Settlements.Buildings
**Module:** TaleWorlds.CampaignSystem
**Type:** `public sealed class BuildingType : MBObjectBase`
**Base:** `MBObjectBase`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Settlements.Buildings/BuildingType.cs`

## Overview

`BuildingType` lives in `TaleWorlds.CampaignSystem.Settlements.Buildings` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Settlements.Buildings` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `BuildingEffect` | `public BuildingEffectEnum BuildingEffect { get; }` |
| `BuildingEffectIncrementType` | `public BuildingEffectIncrementType BuildingEffectIncrementType { get; }` |
| `Level1Effect` | `public float Level1Effect { get; }` |
| `Level2Effect` | `public float Level2Effect { get; }` |
| `Level3Effect` | `public float Level3Effect { get; }` |
| `Name` | `public TextObject Name { get; }` |
| `Explanation` | `public TextObject Explanation { get; }` |
| `VarianceChance` | `public float VarianceChance { get; }` |

## Key Methods

### GetEffectValue
`public float GetEffectValue(int i)`

**Purpose:** Reads and returns the `effect value` value held by the current object.

```csharp
// Obtain an instance of BuildingType from the subsystem API first
BuildingType buildingType = ...;
var result = buildingType.GetEffectValue(0);
```

### GetName
`public override TextObject GetName()`

**Purpose:** Reads and returns the `name` value held by the current object.

```csharp
// Obtain an instance of BuildingType from the subsystem API first
BuildingType buildingType = ...;
var result = buildingType.GetName();
```

### Initialize
`public void Initialize(TextObject name, TextObject explanation, int productionCosts, Tuple<BuildingEffectEnum, BuildingEffectIncrementType, float, float, float> effects, bool isMilitaryProject, float varianceChance, int startLevel = 0)`

**Purpose:** Prepares the resources, state, or bindings the current object needs before use.

```csharp
// Obtain an instance of BuildingType from the subsystem API first
BuildingType buildingType = ...;
buildingType.Initialize(name, explanation, 0, tuple<BuildingEffectEnum, buildingEffectIncrementType, 0, 0, 0, false, 0, 0);
```

### InitializeDailyProject
`public void InitializeDailyProject(TextObject name, TextObject explanation, Tuple<BuildingEffectEnum, BuildingEffectIncrementType, float, float, float> effects)`

**Purpose:** Prepares the resources, state, or bindings required by `daily project`.

```csharp
// Obtain an instance of BuildingType from the subsystem API first
BuildingType buildingType = ...;
buildingType.InitializeDailyProject(name, explanation, tuple<BuildingEffectEnum, buildingEffectIncrementType, 0, 0, 0);
```

### ToString
`public override string ToString()`

**Purpose:** Returns a human-readable string representation of the current object.

```csharp
// Obtain an instance of BuildingType from the subsystem API first
BuildingType buildingType = ...;
var result = buildingType.ToString();
```

### GetProductionCost
`public int GetProductionCost(int level)`

**Purpose:** Reads and returns the `production cost` value held by the current object.

```csharp
// Obtain an instance of BuildingType from the subsystem API first
BuildingType buildingType = ...;
var result = buildingType.GetProductionCost(0);
```

### GetBaseBuildingEffectAmount
`public float GetBaseBuildingEffectAmount(BuildingEffectEnum effect, int level)`

**Purpose:** Reads and returns the `base building effect amount` value held by the current object.

```csharp
// Obtain an instance of BuildingType from the subsystem API first
BuildingType buildingType = ...;
var result = buildingType.GetBaseBuildingEffectAmount(effect, 0);
```

### HasEffect
`public bool HasEffect(BuildingEffectEnum effect)`

**Purpose:** Determines whether the current object already holds `effect`.

```csharp
// Obtain an instance of BuildingType from the subsystem API first
BuildingType buildingType = ...;
var result = buildingType.HasEffect(effect);
```

### GetExplanationAtLevel
`public TextObject GetExplanationAtLevel(int level)`

**Purpose:** Reads and returns the `explanation at level` value held by the current object.

```csharp
// Obtain an instance of BuildingType from the subsystem API first
BuildingType buildingType = ...;
var result = buildingType.GetExplanationAtLevel(0);
```

### GetBuildingEffectType
`public BuildingEffectIncrementType GetBuildingEffectType(BuildingEffectEnum effect)`

**Purpose:** Reads and returns the `building effect type` value held by the current object.

```csharp
// Obtain an instance of BuildingType from the subsystem API first
BuildingType buildingType = ...;
var result = buildingType.GetBuildingEffectType(effect);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
BuildingType buildingType = ...;
buildingType.GetEffectValue(0);
```

## See Also

- [Area Index](../)