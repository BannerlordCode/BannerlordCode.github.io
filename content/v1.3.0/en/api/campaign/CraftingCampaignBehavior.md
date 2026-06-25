---
title: "CraftingCampaignBehavior"
description: "Auto-generated class reference for CraftingCampaignBehavior."
---
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

**Purpose:** Synchronizes data across the relevant contexts or systems.

```csharp
// Obtain an instance of CraftingCampaignBehavior from the subsystem API first
CraftingCampaignBehavior craftingCampaignBehavior = ...;
craftingCampaignBehavior.SyncData(dataStore);
```

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Registers events with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of CraftingCampaignBehavior from the subsystem API first
CraftingCampaignBehavior craftingCampaignBehavior = ...;
craftingCampaignBehavior.RegisterEvents();
```

### IsOpened
`public bool IsOpened(CraftingPiece craftingPiece, CraftingTemplate craftingTemplate)`

**Purpose:** Determines whether the this instance is in the opened state or condition.

```csharp
// Obtain an instance of CraftingCampaignBehavior from the subsystem API first
CraftingCampaignBehavior craftingCampaignBehavior = ...;
var result = craftingCampaignBehavior.IsOpened(craftingPiece, craftingTemplate);
```

### GetCraftingDifficulty
`public int GetCraftingDifficulty(WeaponDesign weaponDesign)`

**Purpose:** Reads and returns the crafting difficulty value held by the this instance.

```csharp
// Obtain an instance of CraftingCampaignBehavior from the subsystem API first
CraftingCampaignBehavior craftingCampaignBehavior = ...;
var result = craftingCampaignBehavior.GetCraftingDifficulty(weaponDesign);
```

### OnSessionLaunched
`public void OnSessionLaunched(CampaignGameStarter campaignGameStarter)`

**Purpose:** Invoked when the session launched event is raised.

```csharp
// Obtain an instance of CraftingCampaignBehavior from the subsystem API first
CraftingCampaignBehavior craftingCampaignBehavior = ...;
craftingCampaignBehavior.OnSessionLaunched(campaignGameStarter);
```

### CanHeroUsePart
`public bool CanHeroUsePart(Hero hero, CraftingPiece craftingPiece)`

**Purpose:** Checks whether the this instance meets the preconditions for hero use part.

```csharp
// Obtain an instance of CraftingCampaignBehavior from the subsystem API first
CraftingCampaignBehavior craftingCampaignBehavior = ...;
var result = craftingCampaignBehavior.CanHeroUsePart(hero, craftingPiece);
```

### GetHeroCraftingStamina
`public int GetHeroCraftingStamina(Hero hero)`

**Purpose:** Reads and returns the hero crafting stamina value held by the this instance.

```csharp
// Obtain an instance of CraftingCampaignBehavior from the subsystem API first
CraftingCampaignBehavior craftingCampaignBehavior = ...;
var result = craftingCampaignBehavior.GetHeroCraftingStamina(hero);
```

### SetHeroCraftingStamina
`public void SetHeroCraftingStamina(Hero hero, int value)`

**Purpose:** Assigns a new value to hero crafting stamina and updates the object's internal state.

```csharp
// Obtain an instance of CraftingCampaignBehavior from the subsystem API first
CraftingCampaignBehavior craftingCampaignBehavior = ...;
craftingCampaignBehavior.SetHeroCraftingStamina(hero, 0);
```

### SetCraftedWeaponName
`public void SetCraftedWeaponName(ItemObject craftedWeaponItem, TextObject name)`

**Purpose:** Assigns a new value to crafted weapon name and updates the object's internal state.

```csharp
// Obtain an instance of CraftingCampaignBehavior from the subsystem API first
CraftingCampaignBehavior craftingCampaignBehavior = ...;
craftingCampaignBehavior.SetCraftedWeaponName(craftedWeaponItem, name);
```

### GetMaxHeroCraftingStamina
`public int GetMaxHeroCraftingStamina(Hero hero)`

**Purpose:** Reads and returns the max hero crafting stamina value held by the this instance.

```csharp
// Obtain an instance of CraftingCampaignBehavior from the subsystem API first
CraftingCampaignBehavior craftingCampaignBehavior = ...;
var result = craftingCampaignBehavior.GetMaxHeroCraftingStamina(hero);
```

### DoRefinement
`public void DoRefinement(Hero hero, Crafting.RefiningFormula refineFormula)`

**Purpose:** Executes the DoRefinement logic.

```csharp
// Obtain an instance of CraftingCampaignBehavior from the subsystem API first
CraftingCampaignBehavior craftingCampaignBehavior = ...;
craftingCampaignBehavior.DoRefinement(hero, refineFormula);
```

### DoSmelting
`public void DoSmelting(Hero hero, EquipmentElement equipmentElement)`

**Purpose:** Executes the DoSmelting logic.

```csharp
// Obtain an instance of CraftingCampaignBehavior from the subsystem API first
CraftingCampaignBehavior craftingCampaignBehavior = ...;
craftingCampaignBehavior.DoSmelting(hero, equipmentElement);
```

### CreateCraftedWeaponInFreeBuildMode
`public ItemObject CreateCraftedWeaponInFreeBuildMode(Hero hero, WeaponDesign weaponDesign, ItemModifier weaponModifier = null)`

**Purpose:** Constructs a new crafted weapon in free build mode entity and returns it to the caller.

```csharp
// Obtain an instance of CraftingCampaignBehavior from the subsystem API first
CraftingCampaignBehavior craftingCampaignBehavior = ...;
var result = craftingCampaignBehavior.CreateCraftedWeaponInFreeBuildMode(hero, weaponDesign, null);
```

### CreateCraftedWeaponInCraftingOrderMode
`public ItemObject CreateCraftedWeaponInCraftingOrderMode(Hero crafterHero, CraftingOrder craftingOrder, WeaponDesign weaponDesign)`

**Purpose:** Constructs a new crafted weapon in crafting order mode entity and returns it to the caller.

```csharp
// Obtain an instance of CraftingCampaignBehavior from the subsystem API first
CraftingCampaignBehavior craftingCampaignBehavior = ...;
var result = craftingCampaignBehavior.CreateCraftedWeaponInCraftingOrderMode(crafterHero, craftingOrder, weaponDesign);
```

### GetActiveCraftingHero
`public Hero GetActiveCraftingHero()`

**Purpose:** Reads and returns the active crafting hero value held by the this instance.

```csharp
// Obtain an instance of CraftingCampaignBehavior from the subsystem API first
CraftingCampaignBehavior craftingCampaignBehavior = ...;
var result = craftingCampaignBehavior.GetActiveCraftingHero();
```

### SetActiveCraftingHero
`public void SetActiveCraftingHero(Hero hero)`

**Purpose:** Assigns a new value to active crafting hero and updates the object's internal state.

```csharp
// Obtain an instance of CraftingCampaignBehavior from the subsystem API first
CraftingCampaignBehavior craftingCampaignBehavior = ...;
craftingCampaignBehavior.SetActiveCraftingHero(hero);
```

### CreateTownOrder
`public void CreateTownOrder(Hero orderOwner, int orderSlot)`

**Purpose:** Constructs a new town order entity and returns it to the caller.

```csharp
// Obtain an instance of CraftingCampaignBehavior from the subsystem API first
CraftingCampaignBehavior craftingCampaignBehavior = ...;
craftingCampaignBehavior.CreateTownOrder(orderOwner, 0);
```

### CreateCustomOrderForHero
`public CraftingOrder CreateCustomOrderForHero(Hero orderOwner, float orderDifficulty = -1f, WeaponDesign weaponDesign = null, CraftingTemplate craftingTemplate = null)`

**Purpose:** Constructs a new custom order for hero entity and returns it to the caller.

```csharp
// Obtain an instance of CraftingCampaignBehavior from the subsystem API first
CraftingCampaignBehavior craftingCampaignBehavior = ...;
var result = craftingCampaignBehavior.CreateCustomOrderForHero(orderOwner, 0, null, null);
```

### GetOrderResult
`public void GetOrderResult(CraftingOrder craftingOrder, ItemObject craftedItem, out bool isSucceed, out TextObject orderRemark, out TextObject orderResult, out int finalReward)`

**Purpose:** Reads and returns the order result value held by the this instance.

```csharp
// Obtain an instance of CraftingCampaignBehavior from the subsystem API first
CraftingCampaignBehavior craftingCampaignBehavior = ...;
craftingCampaignBehavior.GetOrderResult(craftingOrder, craftedItem, isSucceed, orderRemark, orderResult, finalReward);
```

### CompleteOrder
`public void CompleteOrder(Town town, CraftingOrder craftingOrder, ItemObject craftedItem, Hero completerHero)`

**Purpose:** Executes the CompleteOrder logic.

```csharp
// Obtain an instance of CraftingCampaignBehavior from the subsystem API first
CraftingCampaignBehavior craftingCampaignBehavior = ...;
craftingCampaignBehavior.CompleteOrder(town, craftingOrder, craftedItem, completerHero);
```

### GetCurrentItemModifier
`public ItemModifier GetCurrentItemModifier()`

**Purpose:** Reads and returns the current item modifier value held by the this instance.

```csharp
// Obtain an instance of CraftingCampaignBehavior from the subsystem API first
CraftingCampaignBehavior craftingCampaignBehavior = ...;
var result = craftingCampaignBehavior.GetCurrentItemModifier();
```

### SetCurrentItemModifier
`public void SetCurrentItemModifier(ItemModifier modifier)`

**Purpose:** Assigns a new value to current item modifier and updates the object's internal state.

```csharp
// Obtain an instance of CraftingCampaignBehavior from the subsystem API first
CraftingCampaignBehavior craftingCampaignBehavior = ...;
craftingCampaignBehavior.SetCurrentItemModifier(modifier);
```

### CancelCustomOrder
`public void CancelCustomOrder(Town town, CraftingOrder craftingOrder)`

**Purpose:** Checks whether the this instance meets the preconditions for cel custom order.

```csharp
// Obtain an instance of CraftingCampaignBehavior from the subsystem API first
CraftingCampaignBehavior craftingCampaignBehavior = ...;
craftingCampaignBehavior.CancelCustomOrder(town, craftingOrder);
```

### IsThereAvailableSlot
`public bool IsThereAvailableSlot()`

**Purpose:** Determines whether the this instance is in the there available slot state or condition.

```csharp
// Obtain an instance of CraftingCampaignBehavior from the subsystem API first
CraftingCampaignBehavior craftingCampaignBehavior = ...;
var result = craftingCampaignBehavior.IsThereAvailableSlot();
```

### GetAvailableSlot
`public int GetAvailableSlot()`

**Purpose:** Reads and returns the available slot value held by the this instance.

```csharp
// Obtain an instance of CraftingCampaignBehavior from the subsystem API first
CraftingCampaignBehavior craftingCampaignBehavior = ...;
var result = craftingCampaignBehavior.GetAvailableSlot();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
CraftingCampaignBehavior craftingCampaignBehavior = ...;
craftingCampaignBehavior.SyncData(dataStore);
```

## See Also

- [Area Index](../)