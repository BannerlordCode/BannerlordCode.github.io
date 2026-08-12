---
title: "ItemCategory"
description: "The data object behind a 'goods / item category' in Bannerlord: each trade good (grain, iron, horse, weapon, armor...) has an ItemCategory recording whether it is a trade good, whether it is livestock, base / luxury demand coefficients, and what can substitute when out of stock. It has a one-to-many ownership relation with ItemObject."
---

# ItemCategory

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public sealed class ItemCategory : MBObjectBase`
**Base:** `MBObjectBase`
**File:** `TaleWorlds.Core/TaleWorlds.Core/ItemCategory.cs`

## Overview

`ItemCategory` is the **economic / trade-dimensional classification tag on an item**: every `ItemObject` in the game (sword, horse, grain…) points through `ItemObject.ItemCategory` to exactly one `ItemCategory`. That category itself carries a set of economic parameters — whether it counts as a "trade good," whether it is livestock, base demand and luxury demand coefficients, which prosperity bonus (`Property`) it brings to a town when owned, and which category can substitute when locally out of stock (`CanSubstitute` + `SubstitutionFactor`).

A category is a **registered definition object**, not a service you `new` to use. All categories in the game are registered by `DefaultItemCategories` at startup via `MBObjectManager` and filled in once with `InitializeObject` (e.g. `"horse"` gets `IsAnimal = true`, `BaseDemand = 140 * 0.001f`). You usually only **read** it, or **look it up** via `StringId` / the enumerated full table; you should almost never `new ItemCategory()` then `InitializeObject`.

## Mental Model

Think of it as the **"economic ID card stuck on an item,"** not a flow or component:

- **What it is**: an `MBObjectBase`-derived object, located uniquely in the object manager by `StringId` (e.g. `"grain"`, `"horse"`, `"melee_weapons"`). Apart from 8 economic properties, it carries almost no behavior.
- **Lifecycle**: at game start `DefaultItemCategories` constructs → `MBObjectManager.RegisterPresumedObject` registers → `InitializeObject(...)` fills parameters. After registration and `AfterInitialized`, `IsReady` is set `true`. After that, it is basically read-only for the whole game.
- **Layer**: belongs to `TaleWorlds.Core`, the Foundation (base data) layer, consumed jointly by the campaign's economy / trade / production models and the item UI.
- **Who holds it**: `MBObjectManager` holds all registered instances; `ItemObject` holds the one it points to.
- **When to use**: when you need to judge whether an item is a trade good / livestock, read its demand coefficients, iterate items by category in bulk, or get a built-in category like "horse" to compare against.
- **When not to use**:
  - To add / remove items from a hero / inventory → use `ItemRoster` / `ItemRosterElement`, not change the category.
  - To "pick a weapon by culture / probability" → use `ItemCategorySelector.GetItemCategoryForItem` (see [ItemCategorySelector](../ItemCategorySelector/)), don't hardcode category branches yourself.
  - To create a new kind of item → use `ItemObject.InitializeTradeGood` etc., letting the object system take over registration; don't `new ItemCategory()` and keep it yourself long-term, it won't enter `MBObjectManager`'s registry.
- **Dependency**: `ItemObject.ItemCategory` points to it; economy models (e.g. `ItemValueModel`, `DefaultItemCategorySelector`) value and classify by it; the name comes from `GameTexts.FindText("str_item_category", StringId)`.
- **What goes wrong**: looking up a category before `MBObjectManager` is ready returns `null`; `GetObject<ItemCategory>(...)` not found also returns `null`; `BaseDemand` / `LuxuryDemand` are coefficients after "raw int × 0.001f", not the raw config value; a category with `IsValid == false` (e.g. `"unassigned"`) should not participate in economy calculations.

## How to get an ItemCategory

```csharp
// Path 1: read an item's category directly (most common)
ItemObject sword = MBObjectManager.Instance.GetObject<ItemObject>("iron_sword_a");
ItemCategory cat = sword.ItemCategory;            // the item's goods category

// Path 2: enumerate all registered categories in the object manager
foreach (ItemCategory category in MBObjectManager.Instance.GetObjectTypeList<ItemCategory>())
{
    // Skip disabled categories (e.g. "unassigned")
    if (!category.IsValid)
        continue;
}

// Path 3: take a built-in category constant directly (DefaultItemCategories static property)
ItemCategory horseCat = DefaultItemCategories.Horse;   // equivalent to StringId == "horse"
```

## Members

### Identity and naming

| Member | Type / signature | Description | Side effects / notes |
|--------|------------------|-------------|----------------------|
| `StringId` | `string` (inherited from `MBObjectBase`) | The category's unique string key, e.g. `"grain"`, `"horse"`, `"unassigned"`. | The primary key for lookup after registration; `MBObjectManager.GetObject<ItemCategory>(stringId)` relies on it. |
| `GetName()` | `public override TextObject GetName()` | Returns the localized display name, internally `GameTexts.FindText("str_item_category", StringId)`. | Returns an empty `TextObject` if that `StringId` has no matching text; this is the UI display entry. |
| `ToString()` | `public override string ToString()` | Returns `StringId` directly. | Debug / log identifier only, no localized name. |

### Trade and economy properties

These properties are all written once by `InitializeObject` during load, then basically read-only at runtime.

| Property | Type | Description | Side effects / notes |
|----------|------|-------------|----------------------|
| `IsTradeGood` | `bool` | Whether it participates in town supply / demand / pricing as a "trade good." | `false` items (weapons, armor, banners, unassigned) do not go through trade-good pricing logic. |
| `IsAnimal` | `bool` | Whether it is livestock (sheep, cattle, pig, horse, pack animal). | Livestock get special handling in production / supply; in `DefaultItemCategories` only `*Horse` / `Sheep` / `Cow` / `Hog` / `PackAnimal` are `true`. |
| `IsValid` | `bool` | Whether the category is "valid / participates in the economy." | The `"unassigned"` category is explicitly initialized to `false`; skip it when iterating economy categories. |
| `BaseDemand` | `float` | Base demand coefficient. | **Watch the scaling**: internally `(float)baseDemand * 0.001f`, raw config 140 → 0.14. What you read is the coefficient, not the integer config value. |
| `LuxuryDemand` | `float` | Luxury demand coefficient, same scaling (`luxuryDemand * 0.001f`). | Used to distinguish the demand curve of "daily goods" vs "luxuries." |
| `Properties` | `ItemCategory.Property` | The prosperity / output bonus type this category brings to a town. | See the nested enum below; `None` means no bonus. |
| `CanSubstitute` | `ItemCategory` | The category that can substitute when out of stock (e.g. `grain`'s substitute is `fish`). | May be `null` (horse, crossbow have no substitute). Watch termination when traversing the substitute chain, don't build a cycle yourself. |
| `SubstitutionFactor` | `float` | The conversion factor when substituting (e.g. `0.9f` means 0.9 units of substitute replace 1 unit of the original). | Meaningless (always `0f`) when `CanSubstitute == null`. |

### Nested enum `ItemCategory.Property`

The value of `Properties`, describing which bonus this category provides in the town economy:

| Value | Meaning |
|-------|---------|
| `None` | No bonus (most weapons / armor) |
| `BonusToProduction` | Boosts production (e.g. `tools`) |
| `BonusToFoodStores` | Boosts food reserves (grain, meat, beer, fish, etc.) |
| `BonusToProsperity` | Boosts prosperity (furs, horse, pack animal) |
| `BonusToLoyalty` | Boosts loyalty (velvet, beer, jewelry) |
| `BonusToMilitia` | Boosts militia |
| `BonusToGarrison` | Boosts garrison (war horse, noble horse) |
| `BonusToTax` | Boosts tax (salt, silver) |

### Initialization

| Member | Signature | Description | Side effects / notes |
|--------|-----------|-------------|----------------------|
| Constructor | `public ItemCategory()` / `public ItemCategory(string stringId)` | Creates an empty category; the version with `stringId` also sets `StringId`. | Construction alone does **not** register it in `MBObjectManager` and fills no economic property (all default values). |
| `InitializeObject(...)` | `public ItemCategory InitializeObject(bool isTradeGood = false, int baseDemand = 0, int luxuryDemand = 0, ItemCategory.Property properties = ItemCategory.Property.None, ItemCategory canSubstitute = null, float substitutionFactor = 0f, bool isAnimal = false, bool isValid = true)` | Writes all economic parameters at once, calls `base.Initialize()` and `AfterInitialized()`, and returns `this` (chain-friendly). | **Overwrites existing fields**: calling it again on an already registered / initialized category equals overwriting parameters, which may break economic balance. `BaseDemand` / `LuxuryDemand` are multiplied by `0.001f` internally. Generally only called by `DefaultItemCategories` during load; mods should not re-call at runtime. |

## Typical usage examples

### Example 1: judge whether an item is a trade good and read its demand coefficient

```csharp
// Real acquisition path: get the item first, then read its category
ItemObject item = MBObjectManager.Instance.GetObject<ItemObject>("grain");
ItemCategory cat = item.ItemCategory;
if (cat != null && cat.IsTradeGood)
{
    // BaseDemand is the scaled coefficient (140 * 0.001f = 0.14)
    float demand = cat.BaseDemand;
    // When out of stock, the town can substitute with fish at a 0.9 ratio
    ItemCategory substitute = cat.CanSubstitute;   // fish
    float factor = cat.SubstitutionFactor;         // 0.9f
    TextObject name = cat.GetName();               // localized display name
}
```

### Example 2: iterate all items by category in bulk

```csharp
// Real acquisition path: enumerate categories registered in the object manager
MBReadOnlyList<ItemCategory> allCats =
    MBObjectManager.Instance.GetObjectTypeList<ItemCategory>();

// Count all "livestock" categories
int animalCount = 0;
foreach (ItemCategory category in allCats)
{
    if (!category.IsValid)
        continue;                       // skip invalid categories like "unassigned"
    if (category.IsAnimal)
        animalCount++;
}
```

### Example 3: compare categories with built-in constants (avoid hardcoding StringId)

```csharp
// Real acquisition path: DefaultItemCategories exposes static properties for all built-in categories
ItemCategory horseCat = DefaultItemCategories.Horse;   // StringId == "horse"
bool isLivestock = horseCat.IsAnimal;                  // true
bool hasSubstitute = horseCat.CanSubstitute != null;   // false, horse has no substitute
ItemCategory.Property bonus = horseCat.Properties;     // BonusToProsperity
```

## Dependencies

- Upstream (who creates / registers / holds)
  - [MBObjectManager](../../campaign-ext/MBObjectManager/) — holds all registered `ItemCategory` instances; look them up via `GetObjectTypeList<ItemCategory>()` / `GetObject<ItemCategory>(stringId)`.
  - [MBObjectBase](../../campaign-ext/MBObjectBase/) — base class, provides registration-state fields like `StringId` / `Id` / `IsReady` / `IsRegistered`.
  - [DefaultItemCategories](../DefaultItemCategories/) — registers about 70 built-in categories at game start and calls `InitializeObject` to fill parameters.
- Downstream (subsystems consuming categories)
  - [ItemObject](../ItemObject/) — each item points to a unique category via the `ItemCategory` property; this is the most common entry to get a category.
  - [ItemCategorySelector](../ItemCategorySelector/) and [DefaultItemCategorySelector](../DefaultItemCategorySelector/) — decide which category an item falls into (e.g. Crafting products).
  - [ItemComponent](../ItemComponent/) — item component layer, works with the category for valuation / classification.
- Sibling types and tools
  - [MBObjectManagerExtensions](../MBObjectManagerExtensions/) — extension helpers for the object manager.
  - [Core extension module index](../) — the entry of this bucket.

## Risk section (crash / economy error / display anomaly)

1. **Looking up a category before the object system is ready**: `MBObjectManager.Instance.GetObject<ItemCategory>(...)` / `GetObjectTypeList<ItemCategory>()` both depend on `MBObjectManager` being loaded. If called early in `MBSubModuleBase.OnSubModuleLoad`, or where `Game` has not started, getting `null` and then accessing `.IsTradeGood` throws `NullReferenceException`. **Must be called after the campaign / game has loaded.**
2. **A not-found category returns `null`**: `GetObject<ItemCategory>("non-existent id")` returns `null`, not an exception, when not found. Any path fetching a category should do `if (cat != null)`, especially when a mod's custom items did not go through the standard registration flow.
3. **Re-calling `InitializeObject` at runtime overwrites parameters**: `InitializeObject` is a field-writing method, not an idempotent "safe refresh." Calling it again on an already registered category that economy models are using will overwrite `BaseDemand` / `Properties` / `CanSubstitute`, etc., causing price and production anomalies. **Category parameters are set once during load by `DefaultItemCategories`.**
4. **Demand coefficients are already scaled**: `BaseDemand` / `LuxuryDemand` are the result after raw int `× 0.001f` (config 140 → 0.14). If in your mod you want to "restore the config value" and directly multiply by 1000, be clear it is a coefficient, not an integer; using it as the raw config value will seriously deviate from expectations.
5. **Ignoring `IsValid` counts invalid categories in**: the `"unassigned"` category has `IsValid == false`, and by design does not participate in the economy. When iterating the full table for supply / demand / price statistics, always `if (!category.IsValid) continue;`, otherwise "unclassified" items get mixed into the economy calculation.
6. **`CanSubstitute` chain may cycle**: the substitute relation is data-driven (`grain`→`fish`, `fish`→`grain`). If in your mod you traverse "until no substitute," you must record the visited set, otherwise two mutually-substituting categories will infinite-loop.

## Cross-version notes

- v1.3.0 / v1.3.15 / v1.4.5: this type's **public API is identical** — the 8 economic properties, the 8-parameter signature of `InitializeObject`, the `GetName` / `ToString` behavior, and the 8 values of the `Property` enum are all the same. This document uses 1.4.5 authoritative source; the two older versions' `.cs` paths are in their respective `TaleWorlds.Core/ItemCategory.cs` (not the `bin/` layout), with no semantic difference.
- `ItemCategory` is a `sealed class` and cannot be further derived; its relation with `ItemObject` is **composition** (each item holds a category reference), not inheritance.
- The number and parameters of categories are determined by `DefaultItemCategories`; mods adding categories should go through `Game.Current.ObjectManager.RegisterPresumedObject(new ItemCategory(stringId))` + `InitializeObject`, rather than directly rewriting existing built-in categories.

## See also

- [ItemObject](../ItemObject/) — holds the `ItemCategory` property, the most common category entry
- [DefaultItemCategories](../DefaultItemCategories/) — constants and init parameters for all built-in categories
- [ItemCategorySelector](../ItemCategorySelector/) — the abstract model deciding item classification
- [DefaultItemCategorySelector](../DefaultItemCategorySelector/) — its default implementation
- [ItemComponent](../ItemComponent/) — item component layer, works with the category for valuation
- [MBObjectManagerExtensions](../MBObjectManagerExtensions/) — object manager extension methods
- [MBObjectBase](../../campaign-ext/MBObjectBase/) — base class: registration state and `StringId`
- [MBObjectManager](../../campaign-ext/MBObjectManager/) — holds all registered categories

## Navigation

- ↑ Parent: [Core extension module index](../)
- ↔ Siblings: [ItemObject](../ItemObject/) · [ItemCategorySelector](../ItemCategorySelector/) · [DefaultItemCategories](../DefaultItemCategories/) · [DefaultItemCategorySelector](../DefaultItemCategorySelector/) · [ItemComponent](../ItemComponent/) · [MBObjectManagerExtensions](../MBObjectManagerExtensions/) · [Equipment](../Equipment/)
- Related types: [MBObjectBase](../../campaign-ext/MBObjectBase/) · [MBObjectManager](../../campaign-ext/MBObjectManager/)
