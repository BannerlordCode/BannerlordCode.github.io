<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `IncidentEffect`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# IncidentEffect

**Namespace:** TaleWorlds.CampaignSystem.Incidents
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `IncidentEffect` is a class in the `TaleWorlds.CampaignSystem.Incidents` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Methods

### Condition

```csharp
public bool Condition()
```

### Consequence

```csharp
public List<TextObject> Consequence()
```

### GetHint

```csharp
public List<TextObject> GetHint()
```

### WithChance

```csharp
public IncidentEffect WithChance(float chance)
```

### WithCustomInformation

```csharp
public IncidentEffect WithCustomInformation(Func<List<TextObject>> customInformation)
```

### WithHint

```csharp
public IncidentEffect WithHint(Func<IncidentEffect, List<TextObject>> hint)
```

### GoldChange

```csharp
public static IncidentEffect GoldChange(Func<int> amountGetter)
```

### TraitChange

```csharp
public static IncidentEffect TraitChange(TraitObject trait, int amount)
```

### BuildingLevelChange

```csharp
public static IncidentEffect BuildingLevelChange(Func<Building> buildingGetter, Func<int> amountGetter)
```

### SiegeProgressChange

```csharp
public static IncidentEffect SiegeProgressChange(Func<float> amountGetter)
```

### WorkshopProfitabilityChange

```csharp
public static IncidentEffect WorkshopProfitabilityChange(Func<Workshop> workshopGetter, float percentage)
```

### SkillChange

```csharp
public static IncidentEffect SkillChange(SkillObject skill, float amount)
```

### MoraleChange

```csharp
public static IncidentEffect MoraleChange(float amount)
```

### HealthChance

```csharp
public static IncidentEffect HealthChance(int amount)
```

### RenownChange

```csharp
public static IncidentEffect RenownChange(float amount)
```

### CrimeRatingChange

```csharp
public static IncidentEffect CrimeRatingChange(Func<IFaction> factionGetter, float amount)
```

### InfluenceChange

```csharp
public static IncidentEffect InfluenceChange(float amount)
```

### SettlementRelationChange

```csharp
public static IncidentEffect SettlementRelationChange(Func<Settlement> settlementGetter, int amount)
```

### TownBoundVillageRelationChange

```csharp
public static IncidentEffect TownBoundVillageRelationChange(Func<Town> townGetter, int amount)
```

### TownBoundVillageHearthChange

```csharp
public static IncidentEffect TownBoundVillageHearthChange(Func<Town> townGetter, int amount)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)