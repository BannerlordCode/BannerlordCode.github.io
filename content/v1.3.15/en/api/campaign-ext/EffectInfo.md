---
title: "EffectInfo"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EffectInfo`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EffectInfo

**Namespace:** TaleWorlds.CampaignSystem.Settlements.Buildings
**Module:** TaleWorlds.CampaignSystem
**Type:** `public struct EffectInfo`
**Area:** campaign-ext

## Overview

`EffectInfo` lives in `TaleWorlds.CampaignSystem.Settlements.Buildings`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Settlements.Buildings` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `All` | `public static MBReadOnlyList<BuildingType> All { get; }` |
| `Name` | `public TextObject Name { get; }` |
| `Explanation` | `public TextObject Explanation { get; }` |
| `VarianceChance` | `public float VarianceChance { get; }` |
| `BuildingEffect` | `public BuildingEffectEnum BuildingEffect { get; }` |
| `BuildingEffectIncrementType` | `public BuildingEffectIncrementType BuildingEffectIncrementType { get; }` |
| `Level1Effect` | `public float Level1Effect { get; }` |
| `Level2Effect` | `public float Level2Effect { get; }` |
| `Level3Effect` | `public float Level3Effect { get; }` |

## Key Methods

### GetName
`public override TextObject GetName()`

**Purpose:** Gets the current value of `name`.

### Initialize
`public void Initialize(TextObject name, TextObject explanation, int productionCosts, Tuple<BuildingEffectEnum, BuildingEffectIncrementType, float, float, float> effects, bool isMilitaryProject, float varianceChance, int startLevel = 0)`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### InitializeDailyProject
`public void InitializeDailyProject(TextObject name, TextObject explanation, Tuple<BuildingEffectEnum, BuildingEffectIncrementType, float, float, float> effects)`

**Purpose:** Initializes the state, resources, or bindings for `daily project`.

### ToString
`public override string ToString()`

**Purpose:** Handles logic related to `to string`.

### GetProductionCost
`public int GetProductionCost(int level)`

**Purpose:** Gets the current value of `production cost`.

### GetBaseBuildingEffectAmount
`public float GetBaseBuildingEffectAmount(BuildingEffectEnum effect, int level)`

**Purpose:** Gets the current value of `base building effect amount`.

### HasEffect
`public bool HasEffect(BuildingEffectEnum effect)`

**Purpose:** Checks whether the current object has/contains `effect`.

### GetExplanationAtLevel
`public TextObject GetExplanationAtLevel(int level)`

**Purpose:** Gets the current value of `explanation at level`.

### GetBuildingEffectType
`public BuildingEffectIncrementType GetBuildingEffectType(BuildingEffectEnum effect)`

**Purpose:** Gets the current value of `building effect type`.

### GetEffectValue
`public float GetEffectValue(int i)`

**Purpose:** Gets the current value of `effect value`.

## Usage Example

```csharp
// First obtain a EffectInfo instance from game state, then call one of its public methods
var value = new EffectInfo();
value.GetName();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
