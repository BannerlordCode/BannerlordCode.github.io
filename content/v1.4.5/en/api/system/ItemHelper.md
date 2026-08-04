---
title: "ItemHelper"
description: "Compares weapon usage compatibility and builds localized item damage and count text."
---
# ItemHelper

**Namespace:** `Helpers`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public static class ItemHelper`  
**Base:** `System.Object`  
**Source:** `bin/TaleWorlds.CampaignSystem/Helpers/ItemHelper.cs`

## One-sentence responsibility

`ItemHelper` supplies inventory and tooltip code with weapon-usage compatibility checks and localized text for modified damage and item counts.

## Mental Model

The helper has two independent contracts:

- **Comparison:** `IsWeaponComparableWithUsage` finds whether an [ItemObject](../../core-extra/ItemObject) has a usage matching a requested `WeaponDescriptionId`; `CheckComparability` decides whether two items can occupy the same comparison category.
- **Presentation:** the damage methods evaluate a [WeaponComponentData](../../core-extra/WeaponComponentData) with an [ItemModifier](../../core-extra/ItemModifier), while `NumberOfItems` fills a localized count template using the item's name.

It does not equip an item, change an [ItemRoster](../../campaign/ItemRoster), or compare final UI numbers. Inventory view models use the returned boolean/index and then perform their own comparison and presentation flow.

## When to use and when not to use

- **Use it:** when an inventory or tooltip flow already has a real item/weapon component and needs the game's compatibility or localized damage wording.
- **Use it:** with the `usageIndex` returned by the out-parameter overload before calling `GetWeaponWithUsageIndex`.
- **Do not use it:** as an item equip or roster mutation API; every public method is read-only except for writing output variables/text variables in returned `TextObject` values.
- **Do not compare only `ItemObject.Type` when weapon data is available:** `CheckComparability` first applies weapon-category rules.
- **Do not pass an arbitrary usage index:** the indexed overload accesses `item.Weapons[usageIndex]` directly once the weapon branch is selected.

## Public entries

### Weapon usage checks

```csharp
public static bool IsWeaponComparableWithUsage(ItemObject item, string comparedUsageId)
public static bool IsWeaponComparableWithUsage(
    ItemObject item,
    string comparedUsageId,
    out int comparableUsageIndex)
```

Both overloads scan `item.Weapons` and match `WeaponDescriptionId`. `OneHandedBastardSword` and `OneHandedSword` are treated as mutually comparable aliases. The indexed overload initializes the output to `-1` and returns the first matching index; a miss returns `false`.

### Item comparison checks

```csharp
public static bool CheckComparability(ItemObject item, ItemObject comparedItem)
public static bool CheckComparability(
    ItemObject item,
    ItemObject comparedItem,
    int usageIndex)
```

Null input returns `false`. When the primary weapon categories are compatible, the method asks whether `comparedItem` has a matching usage. Compatible categories are melee with melee, consumable ranged with consumable ranged, consumable non-ranged with consumable non-ranged, and shield with shield. Otherwise it falls back to `item.Type == comparedItem.Type`.

The no-index overload uses `item.PrimaryWeapon.WeaponDescriptionId`. The indexed overload uses `item.Weapons[usageIndex].WeaponDescriptionId`; callers must supply an index valid for `item.Weapons` and a compared item with compatible weapon data.

### Damage text

```csharp
public static TextObject GetSwingDamageText(
    WeaponComponentData weapon,
    ItemModifier itemModifier)
public static TextObject GetMissileDamageText(
    WeaponComponentData weapon,
    ItemModifier itemModifier)
public static TextObject GetThrustDamageText(
    WeaponComponentData weapon,
    ItemModifier itemModifier)
```

Each method applies the modifier through the corresponding `GetModified...Damage` method and returns a `TextObject` shaped as `{DAMAGE} {DAMAGE_TYPE}`. Swing uses `SwingDamageType`, thrust uses `ThrustDamageType`, and missile uses `SwingDamageType` for `ThrowingAxe` but `ThrustDamageType` for other weapon classes.

### `NumberOfItems`

```csharp
public static TextObject NumberOfItems(int number, ItemObject item)
```

Sets `ITEM` to `item.Name` and `NUMBER_OF_ITEM` to `number` in the localized template. The template displays the numeric count and plural item name only when the count is greater than one; the helper does not validate or clamp the number.

## Real inventory and tooltip flow

The stock inventory view obtains a real equipped element, asks for a matching usage, then formats modified damage for the tooltip:

```csharp
using Helpers;
using TaleWorlds.CampaignSystem;
using TaleWorlds.Core;
using TaleWorlds.Localization;

if (Hero.MainHero != null)
{
    EquipmentElement weaponElement = Hero.MainHero.BattleEquipment[EquipmentIndex.Weapon0];
    ItemObject item = weaponElement.Item;
    if (item?.PrimaryWeapon != null && ItemHelper.IsWeaponComparableWithUsage(
        item,
        "OneHandedSword",
        out int usageIndex))
    {
        WeaponComponentData weapon = item.GetWeaponWithUsageIndex(usageIndex);
        TextObject damageText = ItemHelper.GetSwingDamageText(
            weapon,
            weaponElement.ItemModifier);
    }
}
```

`ItemMenuVM` and `TooltipRefresherCollection` follow this same separation: they choose the usage and modifier first, then ask `ItemHelper` for text. The helper does not compare `damageText` strings or mutate the equipment element.

## Dependencies and ownership

- [ItemObject](../../core-extra/ItemObject) owns the item type, primary weapon, and weapon usage list.
- [WeaponComponentData](../../core-extra/WeaponComponentData) owns weapon description IDs, classes, damage types, and modified damage calculations.
- [ItemModifier](../../core-extra/ItemModifier) supplies the modifier consumed by damage calculations.
- [TextObject](../../localization/TextObject) carries the localized damage/count variables and item name.
- Inventory view models own usage selection, comparison display, and roster/equipment mutation; `ItemHelper` only returns a boolean, index, or localized text.

## Risks and version boundaries

- The sword alias rule is exact: only `OneHandedSword` and `OneHandedBastardSword` receive the special mutual match.
- `CheckComparability` is category-aware only when the primary weapon conditions are met; its fallback is the broader `ItemObject.Type` equality check.
- The indexed overload can fail for an invalid `usageIndex`. It also reads `comparedItem.PrimaryWeapon` after checking only `item.PrimaryWeapon`; a non-null `comparedItem` with no primary weapon can therefore throw before the type fallback. Use the index returned by the helper for the same item and verify both weapon components before calling it.
- Damage text is derived from modified damage, but it does not expose the numeric damage as a separate return value; callers that compare numbers must calculate those values through the weapon APIs themselves.
- `NumberOfItems` writes variables on a newly created `TextObject`; it does not change the item's name or count in a roster.
- The helper has no fields or save contract. Its returned text and comparison results are transient UI/calculation values.

## Version note

This page follows v1.4.5 `ItemHelper.cs`. The eight public signatures are compatibility and presentation helpers; inventory ownership and equipment mutation remain outside this class.

## Navigation

- [↑ API system index](../)
- [Related: ItemObject](../../core-extra/ItemObject)
- [Related: WeaponComponentData](../../core-extra/WeaponComponentData)
- [Related: ItemModifier](../../core-extra/ItemModifier)
- [Related: TextObject](../../localization/TextObject)
- [Related: ItemRoster](../../campaign/ItemRoster)
