---
title: "CraftingCampaignBehavior"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CraftingCampaignBehavior`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CraftingCampaignBehavior

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CraftingCampaignBehavior : CampaignBehaviorBase, ICraftingCampaignBehavior, ICampaignBehavior, INonReadyObjectHandler`
**Base:** `CampaignBehaviorBase`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/CraftingCampaignBehavior.cs`

## Overview

`CraftingCampaignBehavior` lives in `TaleWorlds.CampaignSystem.CampaignBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.CampaignBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `CraftingOrders` | `public IReadOnlyDictionary<Town, CraftingCampaignBehavior.CraftingOrderSlots> CraftingOrders { get; }` |
| `CraftingHistory` | `public IReadOnlyCollection<WeaponDesign> CraftingHistory { get; }` |
| `CustomOrders` | `public MBReadOnlyList<CraftingOrder> CustomOrders { get; }` |

## Key Methods

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** Handles logic related to `sync data`.

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Handles logic related to `register events`.

### IsOpened
`public bool IsOpened(CraftingPiece craftingPiece, CraftingTemplate craftingTemplate)`

**Purpose:** Handles logic related to `is opened`.

### GetCraftingDifficulty
`public int GetCraftingDifficulty(WeaponDesign weaponDesign)`

**Purpose:** Gets the current value of `crafting difficulty`.

### OnSessionLaunched
`public void OnSessionLaunched(CampaignGameStarter campaignGameStarter)`

**Purpose:** Called when the `session launched` event is raised.

### CanHeroUsePart
`public bool CanHeroUsePart(Hero hero, CraftingPiece craftingPiece)`

**Purpose:** Checks whether the current object can `hero use part`.

### GetHeroCraftingStamina
`public int GetHeroCraftingStamina(Hero hero)`

**Purpose:** Gets the current value of `hero crafting stamina`.

### SetHeroCraftingStamina
`public void SetHeroCraftingStamina(Hero hero, int value)`

**Purpose:** Sets the value or state of `hero crafting stamina`.

### SetCraftedWeaponName
`public void SetCraftedWeaponName(ItemObject craftedWeaponItem, TextObject name)`

**Purpose:** Sets the value or state of `crafted weapon name`.

### GetMaxHeroCraftingStamina
`public int GetMaxHeroCraftingStamina(Hero hero)`

**Purpose:** Gets the current value of `max hero crafting stamina`.

### DoRefinement
`public void DoRefinement(Hero hero, Crafting.RefiningFormula refineFormula)`

**Purpose:** Handles logic related to `do refinement`.

### DoSmelting
`public void DoSmelting(Hero hero, EquipmentElement equipmentElement)`

**Purpose:** Handles logic related to `do smelting`.

### CreateCraftedWeaponInFreeBuildMode
`public ItemObject CreateCraftedWeaponInFreeBuildMode(Hero hero, WeaponDesign weaponDesign, ItemModifier weaponModifier = null)`

**Purpose:** Creates a new `crafted weapon in free build mode` instance or object.

### CreateCraftedWeaponInCraftingOrderMode
`public ItemObject CreateCraftedWeaponInCraftingOrderMode(Hero crafterHero, CraftingOrder craftingOrder, WeaponDesign weaponDesign)`

**Purpose:** Creates a new `crafted weapon in crafting order mode` instance or object.

### GetActiveCraftingHero
`public Hero GetActiveCraftingHero()`

**Purpose:** Gets the current value of `active crafting hero`.

### SetActiveCraftingHero
`public void SetActiveCraftingHero(Hero hero)`

**Purpose:** Sets the value or state of `active crafting hero`.

### CreateTownOrder
`public void CreateTownOrder(Hero orderOwner, int orderSlot)`

**Purpose:** Creates a new `town order` instance or object.

### CreateCustomOrderForHero
`public CraftingOrder CreateCustomOrderForHero(Hero orderOwner, float orderDifficulty = -1f, WeaponDesign weaponDesign = null, CraftingTemplate craftingTemplate = null)`

**Purpose:** Creates a new `custom order for hero` instance or object.

### GetOrderResult
`public void GetOrderResult(CraftingOrder craftingOrder, ItemObject craftedItem, out bool isSucceed, out TextObject orderRemark, out TextObject orderResult, out int finalReward)`

**Purpose:** Gets the current value of `order result`.

### CompleteOrder
`public void CompleteOrder(Town town, CraftingOrder craftingOrder, ItemObject craftedItem, Hero completerHero)`

**Purpose:** Handles logic related to `complete order`.

### GetCurrentItemModifier
`public ItemModifier GetCurrentItemModifier()`

**Purpose:** Gets the current value of `current item modifier`.

### SetCurrentItemModifier
`public void SetCurrentItemModifier(ItemModifier modifier)`

**Purpose:** Sets the value or state of `current item modifier`.

### CancelCustomOrder
`public void CancelCustomOrder(Town town, CraftingOrder craftingOrder)`

**Purpose:** Checks whether the current object can `cel custom order`.

### IsThereAvailableSlot
`public bool IsThereAvailableSlot()`

**Purpose:** Handles logic related to `is there available slot`.

### GetAvailableSlot
`public int GetAvailableSlot()`

**Purpose:** Gets the current value of `available slot`.

## Usage Example

```csharp
var value = new CraftingCampaignBehavior();
value.SyncData(dataStore);
```

## See Also

- [Complete Class Catalog](../catalog)