---
title: "ItemObject"
description: "The item definition in the game: weapons, armor, horses, food, trade goods and crafting components."
---
# ItemObject

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class ItemObject : MBObjectBase`
**Base:** `MBObjectBase`
**File:** `TaleWorlds.Core/ItemObject.cs`

## Overview

`ItemObject` is **the definition object for every item** in Bannerlord. Every weapon, armor, shield, ammunition, mount, food, trade commodity and crafting component has an entry in XML, which after loading becomes an `ItemObject` instance. Note that it describes the **item type**, not how many of that item sit in a specific backpack — the count in a backpack is represented by `ItemRosterElement` or `EquipmentElement`.

Its main roles:

- Define item base attributes: name, value, weight, type, culture.
- Bind 3D assets: mesh, skeleton, attach points.
- Distinguish concrete behaviors like weapon, armor, mount, trade good through `ItemComponent`.
- Provide properties like `ItemFlags`, `ItemCategory`, `Value`, `Weight` for the economy and equipment systems.

## Mental Model

Think of `ItemObject` as **"the item blueprint / template"**:

- It corresponds to `<Item ... />` in XML, not the sword in a backpack.
- What backpacks, shops and loot display is `ItemRosterElement(item, count)`.
- The equipment a character wears is `EquipmentElement(item, itemModifier)`.
- Most systems transfer items via `MobileParty.ItemRoster.AddToCounts(item, count)`.

## How to Obtain ItemObject

```csharp
// Read by game object ID
ItemObject grain = MBObjectManager.Instance.GetObject<ItemObject>("grain");

// Read by weapon kind
ItemObject weapon = ItemObject.GetItemFromWeaponKind(weaponKind);
```

## Core Properties

| Property | Description |
|------|------|
| `Name` | Item name. |
| `Value` | Base value. |
| `Weight` | Weight. |
| `Difficulty` | Usage requirement. |
| `ItemCategory` | Category (e.g. Weapon, Armor, TradeGood, Animal, etc.). |
| `ItemFlags` | Flags (whether droppable, unique, etc.). |
| `Culture` | Owning culture. |
| `IsFood` | Whether it is food. |
| `IsUniqueItem` | Whether it is a unique item. |
| `NotMerchandise` | Does not appear in shops. |
| `ItemComponent` | Concrete component (weapon, armor, mount, trade good). |
| `WeaponComponent` | Weapon component (if a weapon). |
| `ArmorComponent` | Armor component (if armor). |
| `HorseComponent` | Mount component (if a mount). |
| `MultiMeshName` / `HolsterMeshName` / `BodyName` | Related model asset names. |

## Key Methods

### `public static ItemObject InitializeTradeGood(...)`
Initialize a trade good.

```csharp
// Example: add an existing item to the player party inventory.
ItemObject grain = MBObjectManager.Instance.GetObject<ItemObject>("grain");
MobileParty.MainParty.ItemRoster.AddToCounts(grain, 50);
```

### `public static ItemObject GetItemFromWeaponKind(int weaponKind)`
Find an item by weapon kind id.

```csharp
ItemObject ammo = ItemObject.GetItemFromWeaponKind(weaponKind);
```

### `public void DetermineItemCategoryForItem()`
Auto-determine the item category from its components.

```csharp
item.DetermineItemCategoryForItem();
```

### `public static void InitAsPlayerCraftedItem(ref ItemObject itemObject)`
Mark an item as player-crafted.

```csharp
ItemObject.InitAsPlayerCraftedItem(ref craftedWeapon);
```

### `public static ItemObject GetCraftedItemObjectFromHashedCode(string hashedCode)`
Get an already-crafted item by its crafting hash code.

```csharp
ItemObject crafted = ItemObject.GetCraftedItemObjectFromHashedCode(hash);
```

## Typical Usage Examples

### Example 1: Add an item to the player backpack

```csharp
ItemObject grain = MBObjectManager.Instance.GetObject<ItemObject>("grain");
MobileParty.MainParty.ItemRoster.AddToCounts(grain, 50);
```

### Example 2: Judge whether a weapon needs ammunition

```csharp
var ammoType = ItemObject.GetAmmoTypeForItemType(item.ItemType);
bool needsAmmo = ammoType != ItemObject.ItemTypeEnum.Invalid;
```

### Example 3: Iterate all food and print names

```csharp
foreach (ItemObject item in MBObjectManager.Instance.GetObjectTypeList<ItemObject>())
{
    if (item.IsFood)
    {
        Console.WriteLine(item.Name);
    }
}
```

## Cross-Version Notes

- The item-system API is essentially consistent across v1.3.0 / v1.3.15 / v1.4.5.
- v1.4.5 extends the crafting system (`WeaponDesign` / `CraftingTemplate`) more, but `ItemObject` itself is stable.

## Dependencies

- Upstream: [MBObjectManager](../../campaign-ext/MBObjectManager/) registers items from XML / modules; `ItemComponent` provides domain data like price, armor and weapon.
- Downstream: [ItemRoster](../../campaign-ext/ItemRoster/), [Equipment](../../core-extra/Equipment/), the trade / equipment Models and SaveManager read it via a stable `StringId`.
- Lifecycle: this is a registered object, not a runtime inventory entry; to add / remove a count you should operate on the host roster, do not `new ItemObject()` to fake a world item.

## See Also

- [MobileParty](../../campaign/MobileParty/) — the party's item bag
- [SDK Overview](../../../architecture/sdk-overview/) — where items sit in the whole mod model
