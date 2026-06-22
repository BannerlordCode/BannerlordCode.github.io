<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BuildingType`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BuildingType

**Namespace:** TaleWorlds.CampaignSystem.Settlements.Buildings
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `BuildingType` is a class in the `TaleWorlds.CampaignSystem.Settlements.Buildings` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


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

```csharp
public override TextObject GetName()
```

### Initialize

```csharp
public void Initialize(TextObject name, TextObject explanation, int productionCosts, Tuple<BuildingEffectEnum, BuildingEffectIncrementType, float, float, float> effects, bool isMilitaryProject, float varianceChance, int startLevel = 0)
```

### InitializeDailyProject

```csharp
public void InitializeDailyProject(TextObject name, TextObject explanation, Tuple<BuildingEffectEnum, BuildingEffectIncrementType, float, float, float> effects)
```

### ToString

```csharp
public override string ToString()
```

### GetProductionCost

```csharp
public int GetProductionCost(int level)
```

### GetBaseBuildingEffectAmount

```csharp
public float GetBaseBuildingEffectAmount(BuildingEffectEnum effect, int level)
```

### HasEffect

```csharp
public bool HasEffect(BuildingEffectEnum effect)
```

### GetExplanationAtLevel

```csharp
public TextObject GetExplanationAtLevel(int level)
```

### GetBuildingEffectType

```csharp
public BuildingEffectIncrementType GetBuildingEffectType(BuildingEffectEnum effect)
```

### GetEffectValue

```csharp
public float GetEffectValue(int i)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)