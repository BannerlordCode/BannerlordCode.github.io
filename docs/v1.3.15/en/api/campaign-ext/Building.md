<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Building`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Building

**Namespace:** TaleWorlds.CampaignSystem.Settlements.Buildings
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `Building` is a class in the `TaleWorlds.CampaignSystem.Settlements.Buildings` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `Name` | `public TextObject Name { get; }` |
| `Explanation` | `public TextObject Explanation { get; }` |
| `BuildingType` | `public BuildingType BuildingType { get; }` |
| `Town` | `public Town Town { get; }` |
| `CurrentLevel` | `public int CurrentLevel { get; set; }` |


## Key Methods

### GetHashCode

```csharp
public override int GetHashCode()
```

### GetConstructionCost

```csharp
public int GetConstructionCost()
```

### LevelUp

```csharp
public void LevelUp()
```

### LevelDown

```csharp
public void LevelDown()
```

### HitPointChanged

```csharp
public void HitPointChanged(float change)
```

### AddEffectOfBuilding

```csharp
public void AddEffectOfBuilding(BuildingEffectEnum buildingEffect, ref ExplainedNumber result)
```

### GetBonusExplanation

```csharp
public TextObject GetBonusExplanation()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)