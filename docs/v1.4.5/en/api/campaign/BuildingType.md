<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BuildingType`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BuildingType

**Namespace:** TaleWorlds.CampaignSystem.Settlements.Buildings
**Module:** TaleWorlds.CampaignSystem
**Type:** `public sealed class BuildingType : MBObjectBase`
**Base:** `MBObjectBase`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Settlements.Buildings/BuildingType.cs`

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

**Purpose:** Gets the current value of `effect value`.

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

## Usage Example

```csharp
var value = new BuildingType();
value.GetEffectValue(0);
```

## See Also

- [Complete Class Catalog](../catalog)