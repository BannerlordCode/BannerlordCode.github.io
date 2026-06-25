---
title: "CraftingOrder"
description: "Auto-generated class reference for CraftingOrder."
---
# CraftingOrder

**Namespace:** TaleWorlds.CampaignSystem.CraftingSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CraftingOrder : ITrackableCampaignObject, ITrackableBase`
**Base:** `ITrackableCampaignObject`
**File:** `TaleWorlds.CampaignSystem/CraftingSystem/CraftingOrder.cs`

## Overview

`CraftingOrder` lives in `TaleWorlds.CampaignSystem.CraftingSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.CraftingSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsLordOrder` | `public bool IsLordOrder { get; }` |
| `IsReady` | `public bool IsReady { get; }` |

## Key Methods

### InitializeCraftingOrderOnLoad
`public void InitializeCraftingOrderOnLoad()`

**Purpose:** Prepares the resources, state, or bindings required by crafting order on load.

```csharp
// Obtain an instance of CraftingOrder from the subsystem API first
CraftingOrder craftingOrder = ...;
craftingOrder.InitializeCraftingOrderOnLoad();
```

### IsPreCraftedWeaponDesignValid
`public bool IsPreCraftedWeaponDesignValid()`

**Purpose:** Determines whether the this instance is in the pre crafted weapon design valid state or condition.

```csharp
// Obtain an instance of CraftingOrder from the subsystem API first
CraftingOrder craftingOrder = ...;
var result = craftingOrder.IsPreCraftedWeaponDesignValid();
```

### GetStatWeapon
`public WeaponComponentData GetStatWeapon()`

**Purpose:** Reads and returns the stat weapon value held by the this instance.

```csharp
// Obtain an instance of CraftingOrder from the subsystem API first
CraftingOrder craftingOrder = ...;
var result = craftingOrder.GetStatWeapon();
```

### IsOrderAvailableForHero
`public bool IsOrderAvailableForHero(Hero hero)`

**Purpose:** Determines whether the this instance is in the order available for hero state or condition.

```csharp
// Obtain an instance of CraftingOrder from the subsystem API first
CraftingOrder craftingOrder = ...;
var result = craftingOrder.IsOrderAvailableForHero(hero);
```

### CanHeroCompleteOrder
`public bool CanHeroCompleteOrder(Hero hero, ItemObject craftDesignItem)`

**Purpose:** Checks whether the this instance meets the preconditions for hero complete order.

```csharp
// Obtain an instance of CraftingOrder from the subsystem API first
CraftingOrder craftingOrder = ...;
var result = craftingOrder.CanHeroCompleteOrder(hero, craftDesignItem);
```

### GetOrderExperience
`public float GetOrderExperience(ItemObject craftedItem, ItemModifier itemModifier)`

**Purpose:** Reads and returns the order experience value held by the this instance.

```csharp
// Obtain an instance of CraftingOrder from the subsystem API first
CraftingOrder craftingOrder = ...;
var result = craftingOrder.GetOrderExperience(craftedItem, itemModifier);
```

### CheckForBonusesAndPenalties
`public void CheckForBonusesAndPenalties(ItemObject craftedItem, ItemModifier itemModifier, out float craftedStatsSum, out float requiredStatsSum, out bool thrustDamageCheck, out bool swingDamageCheck)`

**Purpose:** Verifies whether for bonuses and penalties holds true for the this instance.

```csharp
// Obtain an instance of CraftingOrder from the subsystem API first
CraftingOrder craftingOrder = ...;
craftingOrder.CheckForBonusesAndPenalties(craftedItem, itemModifier, craftedStatsSum, requiredStatsSum, thrustDamageCheck, swingDamageCheck);
```

### GetStatDataForItem
`public List<CraftingStatData> GetStatDataForItem(ItemObject itemObject, out WeaponComponentData weapon)`

**Purpose:** Reads and returns the stat data for item value held by the this instance.

```csharp
// Obtain an instance of CraftingOrder from the subsystem API first
CraftingOrder craftingOrder = ...;
var result = craftingOrder.GetStatDataForItem(itemObject, weapon);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
CraftingOrder craftingOrder = ...;
craftingOrder.InitializeCraftingOrderOnLoad();
```

## See Also

- [Area Index](../)