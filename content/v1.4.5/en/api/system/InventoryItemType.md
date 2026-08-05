---
title: "InventoryItemType"
description: "The v1.4.5 flag enum used by inventory UI code to classify item equipment, armor, goods, and horse categories."
---
# InventoryItemType

**Namespace:** `Helpers`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public enum InventoryItemType`  
**Owner:** [InventoryScreenHelper](../InventoryScreenHelper)  
**Source:** `bin/TaleWorlds.CampaignSystem/Helpers/InventoryScreenHelper.cs`

## Responsibility

`InventoryItemType` is the `[Flags]` classification returned by [InventoryScreenHelper](../InventoryScreenHelper). It lets inventory view models test whether an [ItemObject](../../core-extra/ItemObject) is a weapon, armor, horse, good, or part of a composite group without changing the item or its roster.

## Mental model

The helper maps the source `ItemObject.ItemTypeEnum` to one basic bit. Composite values combine those bits for UI filters:

```
ItemObject type -> GetInventoryItemTypeOfItem -> InventoryItemType mask -> UI filter
```

The enum is a mask, not an ordering. Test a category with `&`, and compare a complete result only when the source contract calls for exact equality.

## Values

| Value | Source value or meaning |
| --- | --- |
| `None` | `0`; null or unmapped item classification. |
| `Weapon` | `1`; weapons and ranged weapon item types mapped by the helper. |
| `Shield` | `2`. |
| `HeadArmor`, `BodyArmor`, `LegArmor`, `HandArmor` | `4`, `8`, `0x10`, and `0x20`. |
| `Horse`, `HorseHarness` | `0x40` and `0x80`. |
| `Goods`, `Book`, `Animal`, `Cape`, `Banner` | `0x100`, `0x200`, `0x400`, `0x800`, and `0x1000`. |
| `HorseCategory` | `0xC0`, the horse and harness combination. |
| `Armors` | `0x83C`, the source armor combination. |
| `Equipable` | `0x18FF`, the source equipable mask. |
| `All` | `0xFFF`, the source all-items mask. |

## Real use

`SPItemVM` uses the flag to decide whether a real equipment element is equipable:

```csharp
ItemObject item = newItem.EquipmentElement.Item;
IsEquipableItem =
    (InventoryScreenHelper.GetInventoryItemTypeOfItem(item)
     & InventoryScreenHelper.InventoryItemType.Equipable) != 0;
```

The result is a UI classification. It does not equip `newItem`, add an item to [ItemRoster](../../campaign/ItemRoster), or validate an equipment slot.

## Dependencies

- [InventoryScreenHelper](../InventoryScreenHelper) owns the mapping function and the nested enum declaration.
- [ItemObject](../../core-extra/ItemObject) supplies the source item type.
- [ItemRoster](../../campaign/ItemRoster) is an ownership container that remains outside this enum.
- [InventoryState](../../campaign/InventoryState) and its UI consumers use the classification for presentation filters.

## Risks and version boundary

The composite values are exact v1.4.5 masks. `HorseCategory`, `Armors`, `Equipable`, and `All` must be tested as bit masks; treating them as ordinary sequential enum values changes the result. A null item returns `None`, while an unmapped future item type also falls back to `None` until the helper is updated.

## Navigation

- [↑ API system index](../)
- [Owner: InventoryScreenHelper](../InventoryScreenHelper)
- [Related: ItemObject](../../core-extra/ItemObject)
- [Related: ItemRoster](../../campaign/ItemRoster)
- [中文页面](../../../../zh/api/system/InventoryItemType)
