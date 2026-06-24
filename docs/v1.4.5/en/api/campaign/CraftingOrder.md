<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CraftingOrder`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CraftingOrder

**Namespace:** TaleWorlds.CampaignSystem.CraftingSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CraftingOrder : ITrackableCampaignObject, ITrackableBase`
**Base:** `ITrackableCampaignObject`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CraftingSystem/CraftingOrder.cs`

## Overview

`CraftingOrder` lives in `TaleWorlds.CampaignSystem.CraftingSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.CraftingSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### InitializeCraftingOrderOnLoad
`public void InitializeCraftingOrderOnLoad()`

**Purpose:** Initializes the state, resources, or bindings for `crafting order on load`.

### IsPreCraftedWeaponDesignValid
`public bool IsPreCraftedWeaponDesignValid()`

**Purpose:** Handles logic related to `is pre crafted weapon design valid`.

### GetStatWeapon
`public WeaponComponentData GetStatWeapon()`

**Purpose:** Gets the current value of `stat weapon`.

### IsOrderAvailableForHero
`public bool IsOrderAvailableForHero(Hero hero)`

**Purpose:** Handles logic related to `is order available for hero`.

### CanHeroCompleteOrder
`public bool CanHeroCompleteOrder(Hero hero, ItemObject craftDesignItem)`

**Purpose:** Checks whether the current object can `hero complete order`.

### GetOrderExperience
`public float GetOrderExperience(ItemObject craftedItem, ItemModifier itemModifier)`

**Purpose:** Gets the current value of `order experience`.

### CheckForBonusesAndPenalties
`public void CheckForBonusesAndPenalties(ItemObject craftedItem, ItemModifier itemModifier, out float craftedStatsSum, out float requiredStatsSum, out bool thrustDamageCheck, out bool swingDamageCheck)`

**Purpose:** Handles logic related to `check for bonuses and penalties`.

### GetStatDataForItem
`public List<CraftingStatData> GetStatDataForItem(ItemObject itemObject, out WeaponComponentData weapon)`

**Purpose:** Gets the current value of `stat data for item`.

## Usage Example

```csharp
var value = new CraftingOrder();
value.InitializeCraftingOrderOnLoad();
```

## See Also

- [Complete Class Catalog](../catalog)