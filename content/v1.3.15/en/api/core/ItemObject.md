---
title: "ItemObject"
description: "Game item definitions: weapons, armor, horses, food, trade goods, and crafting components."
---
# ItemObject

**Namespace:** TaleWorlds.Core  
**Module:** TaleWorlds.Core  
**Type:** `public class ItemObject : MBObjectBase`  
**Base:** `MBObjectBase`  
**File:** `TaleWorlds.Core/ItemObject.cs`

## Overview

`ItemObject` is the **definition object for every item in Bannerlord**. Each weapon, armor, shield, ammo, mount, food, trade good, and crafting component has an XML entry that loads into an `ItemObject` instance. Note that this describes the **item type**, not a concrete count in someone's inventory—that count is represented by `ItemRosterElement` or `EquipmentElement`.

Key roles:

- Define basic item attributes: name, value, weight, type, culture.
- Bind 3D assets: meshes, skeletons, holsters.
- Distinguish specific behavior via `ItemComponent` (weapon, armor, mount, trade good).
- Provide `ItemFlags`, `ItemCategory`, `Value`, `Weight`, etc. for economy and equipment systems.

## Mental Model

Think of `ItemObject` as an **item blueprint/template**:

- It corresponds to `<Item ... />` in XML, not the sword in a backpack.
- Inventories, shops, and loot show `ItemRosterElement(item, count)`.
- Worn equipment is `EquipmentElement(item, itemModifier)`.
- Most systems move items with `MobileParty.ItemRoster.AddToCounts(item, count)`.

## How to Obtain an ItemObject

```csharp
// by object ID
ItemObject grain = MBObjectManager.Instance.GetObject<ItemObject>("grain");

// by weapon kind
ItemObject weapon = ItemObject.GetItemFromWeaponKind(weaponKind);
```

## Core Properties

| Property | Description |
|----------|-------------|
| `Name` | Item name. |
| `Value` | Base value. |
| `Weight` | Weight. |
| `Difficulty` | Skill requirement. |
| `ItemCategory` | Category (Weapon, Armor, TradeGood, Animal, etc.). |
| `ItemFlags` | Flags (dropable, unique, etc.). |
| `Culture` | Associated culture. |
| `IsFood` | Is food. |
| `IsUniqueItem` | Is unique. |
| `NotMerchandise` | Does not appear in shops. |
| `ItemComponent` | Concrete component (weapon, armor, mount, trade good). |
| `WeaponComponent` | Weapon component (if weapon). |
| `ArmorComponent` | Armor component (if armor). |
| `HorseComponent` | Mount component (if mount). |
| `MultiMeshName` / `HolsterMeshName` / `BodyName` | Related model asset names. |

## Key Methods

### `public static ItemObject InitializeTradeGood(...)`
Initialize a trade good.

```csharp
var tradeGood = ItemObject.InitializeTradeGood(
    new ItemObject("my_good"),
    new TextObject("My Good"),
    "my_good_mesh",
    DefaultItemCategories.Wool,
    100, 1.0f,
    ItemObject.ItemTypeEnum.Goods);
```

### `public static ItemObject GetItemFromWeaponKind(int weaponKind)`
Find an item by weapon kind id.

```csharp
ItemObject ammo = ItemObject.GetItemFromWeaponKind(weaponKind);
```

### `public void DetermineItemCategoryForItem()`
Auto-determine item category from components.

```csharp
item.DetermineItemCategoryForItem();
```

### `public static void InitAsPlayerCraftedItem(ref ItemObject itemObject)`
Mark an item as player-crafted.

```csharp
ItemObject.InitAsPlayerCraftedItem(ref craftedWeapon);
```

### `public static ItemObject GetCraftedItemObjectFromHashedCode(string hashedCode)`
Get an already crafted item by its forging hash.

```csharp
ItemObject crafted = ItemObject.GetCraftedItemObjectFromHashedCode(hash);
```

## Typical Usage Examples

### Example 1: Add an item to the player inventory

```csharp
ItemObject grain = MBObjectManager.Instance.GetObject<ItemObject>("grain");
MobileParty.MainParty.ItemRoster.AddToCounts(grain, 50);
```

### Example 2: Check whether a weapon needs ammo

```csharp
var ammoType = ItemObject.GetAmmoTypeForItemType(item.ItemType);
bool needsAmmo = ammoType != ItemObject.ItemTypeEnum.Invalid;
```

### Example 3: Iterate all food items and print names

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

- v1.3.0 / v1.3.15 / v1.4.5 item system API is consistent.
- v1.4.5 expands the crafting system (`WeaponDesign` / `CraftingTemplate`), but `ItemObject` itself is stable.

## See Also

- [MobileParty](../../campaign/MobileParty/) — party inventory
- [SDK 总览 / SDK Overview](../../../architecture/sdk-overview/) — where items fit in the overall modding model
