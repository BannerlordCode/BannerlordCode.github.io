---
title: "Equipment"
description: "A 12-slot snapshot of a character's battle, civilian or stealth equipment; it organizes EquipmentElement and is not the party inventory."
---
# Equipment

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public class Equipment`
**Base:** none
**Source:** `bin/TaleWorlds.Core/TaleWorlds.Core/Equipment.cs`

## Overview

`Equipment` holds a character's or equipment template's 12 slots under one equipment type, organizing each slot's `EquipmentElement` into an equippable set that can be copied, validated and fed to Agent / character generation.

## Mental Model

It is an "equipment configuration table", not an inventory. `EquipmentType` decides whether this is a `Battle`, `Civilian` or `Stealth` configuration; `EquipmentIndex` decides the weapon, armor, horse and horse-gear slots. Each slot holds a value-type `EquipmentElement`, which references an `ItemObject`, with optional `ItemModifier`, visual item and quest-item flags.

Character, `CharacterObject`, `Hero` and `InventoryLogic` hold copies or snapshots of these configurations. Putting an item into `Equipment` does not automatically increment the count in the Party's `ItemRoster`; conversely, changing the roster does not automatically swap the character's equipment slot. When you need to turn equipment into inventory or clear worn equipment, you must handle both sides' state along the character lifecycle / inventory flow.

## When to Use / When Not to Use

### Suitable

- Read a character's current battle / civilian / stealth equipment: `Hero.BattleEquipment`, `Hero.CivilianEquipment`, `Hero.StealthEquipment`.
- Read a slot with `EquipmentIndex`, using `EquipmentElement.Item`, `ItemModifier`, `IsEmpty` and `GetModified*` to read the actual effect.
- Use `Clone`, `FillFrom`, `IsEmpty`, `IsItemFitsToSlot` and the weight / armor aggregation methods when generating a character, cloning a template or preparing an inventory UI.
- When you need to change a configuration independently, `Clone` first, then write to the target slot; do not directly mutate an instance still shared by a character / template.

### Do not

- Do not treat `Equipment` as `ItemRoster`; equipping a character an item does not automatically perform inventory deduction, a transfer event or `HeroOrPartyGaveItem`.
- Do not mix weapon slots, armor slots and horse slots. The setter calls `IsItemFitsToSlot`, and a wrong slot triggers an assert or results in visuals / Agent generation not matching expectations.
- Do not, after an Agent is already generated, just modify the campaign `Equipment` and expect the current Agent's `MissionEquipment` / visuals to change immediately; the Mission lifecycle has its own sync entry.
- Do not treat `EquipmentElement.Invalid` as a savable item, nor save an equipment configuration with a temporarily unregistered `ItemObject`.

## Dependencies

```text
CharacterObject / Hero / MBEquipmentRoster
        -> Equipment (Battle / Civilian / Stealth)
        -> Equipment[EquipmentIndex] = EquipmentElement
        -> ItemObject + ItemModifier + CosmeticItem
        -> CharacterData / AgentOrigin / InventoryLogic
        -> Party.ItemRoster (only synced in an explicit inventory flow)
```

- **Upstream:** the equipment template of `CharacterObject`, `MBEquipmentRoster` and [Hero](../../campaign/Hero) provide the configuration source; `Campaign.Current` also provides the default equipment of dead characters.
- **Composition:** [EquipmentElement](../EquipmentElement) is the actual value of a slot, `ItemObject` describes the item definition, `ItemModifier` changes derived values like price / armor.
- **Downstream:** `CharacterData` saves / rebuilds character equipment with an equipment code; `AgentOriginUtilities`, the Mission / Agent generation logic reads weight, armor and weapon slots.
- **Inventory boundary:** `CharacterData` and the inventory flow transfer `EquipmentElement` between a character's equipment and the Party roster. Writing a value on only one end may leave a duplicated item or lose an item; cross-owner transfer should use [GiveItemAction](../../campaign-ext/GiveItemAction) / [SellItemsAction](../../campaign-ext/SellItemsAction).

## Key Members

| Member | Purpose and side effects |
|---|---|
| `ItemEquipmentType` / `IsBattle` / `IsCivilian` / `IsStealth` | Judge the semantics of the equipment set; do not mistake one configuration for another when copying or applying. |
| `this[int]` / `this[EquipmentIndex]` | Read / set a slot. The setter checks whether the item fits the slot and writes into a fixed-length internal array. |
| `Horse` | Read the horse slot; do not treat it as the horse-gear or the horse count in inventory. |
| `Clone(bool cloneWithoutWeapons)` / `FillFrom` | Generate an independent snapshot or copy another set of slots; `cloneWithoutWeapons` only clears the weapon-slot range, it does not return items to inventory. |
| `IsEmpty` / `GetTotalWeightOfArmor` / `GetTotalWeightOfWeapons` | Provide derived results for character selection, speed / load and Agent generation; an empty slot may return default body / armor results. |
| `GetHeadArmorSum` / `GetHumanBodyArmorSum` / `GetLegArmorSum` | Aggregate armor effects, including `ItemModifier`'s impact on armor; do not directly take the ItemObject's base armor as the final result. |
| `IsItemFitsToSlot` / `GetEquipmentFromSlot` | Validate the `EquipmentIndex` before writing or checking a slot; an incorrect index should be rejected first, do not continue on a post-exception state. |
| `SwapWeapons` / `GetInitialWeaponIndicesToEquip` | For equipment selection and the Agent's initial weapons; these methods only adjust configuration / selection, they do not dispatch inventory or combat events. |

## Real Acquisition and Examples

### Read a hero's battle equipment and clone it

`Hero.MainHero.BattleEquipment` is the real Campaign acquisition path. Clone first, so you can inspect or prepare a candidate equipment without directly polluting the hero's current configuration:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.Core;

Equipment battle = Hero.MainHero.BattleEquipment;
Equipment candidate = battle.Clone(cloneWithoutWeapons: false);
EquipmentElement mainHand = candidate[EquipmentIndex.WeaponItemBeginSlot];

if (!mainHand.IsEmpty && candidate.GetTotalWeightOfWeapons() > 0f)
{
    int weaponValue = mainHand.ItemValue;
}
```

### Set a slot-fitting element on an existing configuration

Construct an `EquipmentElement` from a registered definition, validate with `IsItemFitsToSlot` first, then write into an independent copy. This operation is still only a configuration change; to actually make a Party gain / lose an item, you must also sync its `ItemRoster` or go through the inventory flow:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.Core;
using TaleWorlds.ObjectSystem;

ItemObject sword = MBObjectManager.Instance.GetObject<ItemObject>("sword");
EquipmentElement element = new EquipmentElement(sword);
Equipment candidate = Hero.MainHero.BattleEquipment.Clone();

if (sword != null && Equipment.IsItemFitsToSlot(EquipmentIndex.WeaponItemBeginSlot, sword))
{
    candidate[EquipmentIndex.WeaponItemBeginSlot] = element;
}
```

## Risks and Lifecycle

- **Sharing / snapshots:** the `CharacterObject` template equipment, the Hero's current equipment and the `Clone` result are not the same lifecycle. Modifying the template may affect characters created later; modifying the Hero's current equipment may affect the character save and the next Agent generation.
- **Slot legality:** `Equipment` has a fixed 12 slots. A wrong `EquipmentIndex`, putting a horse into a weapon slot or an armor as a weapon triggers an `IsItemFitsToSlot` assert, then produces equipment, animation or Agent-generation anomalies.
- **Inventory duplication:** both the `EquipmentElement` in a character's equipment and the Party `ItemRoster` can reference the same `ItemObject`. Setting equipment and adding to the roster without going through the `CharacterData` / inventory flow may duplicate the item; clearing only the equipment without returning it to the roster may lose the item.
- **Agent boundary:** Campaign `Equipment` is a generation input; an already-existing Agent / Mission uses a separate runtime state. You should call the sync entry at an explicit lifecycle point of Agent creation / re-equipment, not treat a campaign setter as a real-time Mission API.
- **Save and identity:** the slots of `Equipment` save object references / definitions like `ItemObject`, `ItemModifier`. Using unregistered objects, invalid modifiers or assembling a configuration before the load order will give empty slots or wrong equipment on load.

## Version Notes

This page describes the 12-slot `Equipment.cs`, `EquipmentIndex` and `EquipmentElement` implementation of v1.4.5. The slot mapping, equipment template and Agent read points of 1.3.15 may differ; cross-version code should re-confirm `EquipmentIndex` and the lifecycle of the target module.

## See Also

- **↑ Parent:** [Core-extra API](./)
- **↔ Sibling:** [EquipmentElement](../EquipmentElement) · [EquipmentIndex](../EquipmentIndex) · [ItemObject](../ItemObject) · [ItemModifier](../ItemModifier)
- **Related types:** [Hero](../../campaign/Hero) · [CharacterObject](../../campaign/CharacterObject) · [ItemRoster](../../campaign/ItemRoster) · [GiveItemAction](../../campaign-ext/GiveItemAction)
