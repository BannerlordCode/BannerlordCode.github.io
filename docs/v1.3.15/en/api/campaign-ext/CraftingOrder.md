<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CraftingOrder`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CraftingOrder

**Namespace:** TaleWorlds.CampaignSystem.CraftingSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `CraftingOrder` is a class in the `TaleWorlds.CampaignSystem.CraftingSystem` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `IsLordOrder` | `public bool IsLordOrder { get; }` |
| `IsReady` | `public bool IsReady { get; }` |
| `WeaponDesignTemplate` | `public WeaponDesign WeaponDesignTemplate { get; }` |


## Key Methods

### InitializeCraftingOrderOnLoad

```csharp
public void InitializeCraftingOrderOnLoad()
```

### IsPreCraftedWeaponDesignValid

```csharp
public bool IsPreCraftedWeaponDesignValid()
```

### GetStatWeapon

```csharp
public WeaponComponentData GetStatWeapon()
```

### IsOrderAvailableForHero

```csharp
public bool IsOrderAvailableForHero(Hero hero)
```

### CanHeroCompleteOrder

```csharp
public bool CanHeroCompleteOrder(Hero hero, ItemObject craftDesignItem)
```

### GetOrderExperience

```csharp
public float GetOrderExperience(ItemObject craftedItem, ItemModifier itemModifier)
```

### CheckForBonusesAndPenalties

```csharp
public void CheckForBonusesAndPenalties(ItemObject craftedItem, ItemModifier itemModifier, out float craftedStatsSum, out float requiredStatsSum, out bool thrustDamageCheck, out bool swingDamageCheck)
```

### GetStatDataForItem

```csharp
public List<CraftingStatData> GetStatDataForItem(ItemObject itemObject, out WeaponComponentData weapon)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)