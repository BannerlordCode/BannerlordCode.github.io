---
title: "Equipment"
description: "A 12-slot battle, civilian, or stealth equipment snapshot; it organizes EquipmentElement values rather than party inventory."
---
# Equipment

**Namespace:** `TaleWorlds.Core`  
**Module:** `TaleWorlds.Core`  
**Type:** `public class Equipment`  
**Base:** none  
**Source:** `bin/TaleWorlds.Core/TaleWorlds.Core/Equipment.cs`

## Responsibility

`Equipment` stores the 12 slots of one battle, civilian, or stealth configuration and exposes the copy, validation, and aggregate operations used to prepare characters and Agents.

## Mental model

Think of it as an equipment loadout table, not an inventory. `EquipmentType` selects `Battle`, `Civilian`, or `Stealth`; `EquipmentIndex` selects weapon, armor, horse, and harness slots. Each slot contains an `EquipmentElement`, a value type that references an `ItemObject` and may carry an `ItemModifier`, cosmetic item, and quest-item flag.

Characters, `CharacterObject`, `Hero`, and `InventoryLogic` hold copies or snapshots of these configurations. Putting an item in an `Equipment` object does not add it to a party `ItemRoster`; editing a roster does not automatically replace a character's slot. Moving equipment into or out of a character must cross the character/inventory lifecycle explicitly.

## When to use / when not to use

### Use it for

- Reading a real campaign character's loadout through `Hero.BattleEquipment`, `Hero.CivilianEquipment`, or `Hero.StealthEquipment`.
- Reading slots by `EquipmentIndex`, then using `EquipmentElement.Item`, `ItemModifier`, `IsEmpty`, and `GetModified*` for the actual effects.
- Preparing a character, cloning a template, or building inventory state with `Clone`, `FillFrom`, `IsEmpty`, `IsItemFitsToSlot`, and the armor/weight aggregations.
- Making an independent candidate configuration: clone first, then change a slot rather than mutating a still-shared template or active character object.

### Do not use it for

- Do not treat it as an `ItemRoster`. Equipping an item does not perform an inventory deduction, transfer event, or `HeroOrPartyGaveItem` dispatch.
- Do not mix weapon, armor, horse, and harness slots. The setter checks `IsItemFitsToSlot`; the wrong slot can assert or produce invalid visuals and Agent data.
- Do not expect a campaign `Equipment` edit to update an already spawned Agent's `MissionEquipment` or visuals. Mission state has its own lifecycle.
- Do not treat `EquipmentElement.Invalid` as a persistable item, and do not place an unregistered `ItemObject` in a saved loadout.

## Dependency map

```text
CharacterObject / Hero / MBEquipmentRoster
        -> Equipment (Battle / Civilian / Stealth)
        -> Equipment[EquipmentIndex] = EquipmentElement
        -> ItemObject + ItemModifier + CosmeticItem
        -> CharacterData / AgentOrigin / InventoryLogic
        -> Party.ItemRoster (only in an explicit transfer flow)
```

- **Upstream:** `CharacterObject` equipment templates, `MBEquipmentRoster`, and [Hero](../../campaign/Hero) provide configurations; `Campaign.Current` also supplies default equipment for dead heroes.
- **Composition:** [EquipmentElement](../EquipmentElement) is the slot value. `ItemObject` defines the item and `ItemModifier` changes derived price/armor behavior.
- **Downstream:** `CharacterData` serializes and rebuilds equipment codes; Agent-origin and mission spawning code read armor, weight, and weapon slots.
- **Inventory boundary:** Character-data and inventory flows transfer `EquipmentElement` values between a character's equipment and a party roster. Writing one side alone can duplicate or lose items; cross-owner transfers belong to [GiveItemAction](../../campaign-ext/GiveItemAction) or [SellItemsAction](../../campaign-ext/SellItemsAction).

## Key members

| Member | Use and side effects |
|---|---|
| `ItemEquipmentType` / `IsBattle` / `IsCivilian` / `IsStealth` | Identifies the loadout meaning. Do not apply one configuration as another type. |
| `this[int]` / `this[EquipmentIndex]` | Reads or writes a slot. The setter checks fit and writes the fixed internal slot array. |
| `Horse` | Reads the horse slot; it is not a harness slot and not a quantity in a party inventory. |
| `Clone(bool cloneWithoutWeapons)` / `FillFrom` | Creates an independent snapshot or copies another loadout. `cloneWithoutWeapons` clears weapon slots; it does not return anything to inventory. |
| `IsEmpty` / `GetTotalWeightOfArmor` / `GetTotalWeightOfWeapons` | Supplies character selection, encumbrance, and Agent-generation inputs; empty slots can still produce default body/armor results. |
| `GetHeadArmorSum` / `GetHumanBodyArmorSum` / `GetLegArmorSum` | Aggregates modified armor effects, including `ItemModifier`; do not substitute an ItemObject's base armor value. |
| `IsItemFitsToSlot` / `GetEquipmentFromSlot` | Validate a slot before writing or reading it. Reject invalid indices rather than continuing with partially changed state. |
| `SwapWeapons` / `GetInitialWeaponIndicesToEquip` | Supports loadout selection and initial Agent weapon choice. These change configuration/selection, not inventory or battle events. |

## Real acquisition and examples

### Read and clone the hero's battle loadout

`Hero.MainHero.BattleEquipment` is a real campaign acquisition path. Clone before preparing a candidate so the current hero loadout is not modified in place:

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

### Set a slot only after validating the item

Construct an `EquipmentElement` from a registered definition, validate the slot, and write to an independent copy. This remains a loadout change; giving a party the item still requires its roster or inventory flow:

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

## Risks and lifecycle

- **Shared versus snapshot:** `CharacterObject` template equipment, a hero's current equipment, and a `Clone` result have different lifetimes. Mutating a template can affect later characters; mutating a hero can affect saves and the next Agent spawn.
- **Slot validity:** `Equipment` has a fixed 12-slot layout. A wrong `EquipmentIndex`, a horse in a weapon slot, or armor in a weapon slot can trigger `IsItemFitsToSlot` assertions and leave invalid equipment, animation, or Agent state.
- **Inventory duplication:** Character equipment and a party `ItemRoster` can both reference the same `ItemObject`. Setting equipment and adding to the roster without the character-data/inventory flow can duplicate items; clearing equipment without returning it can lose items.
- **Agent boundary:** Campaign `Equipment` is a spawn input. An existing Agent/Mission uses runtime state, so a campaign setter is not a live mission API.
- **Save identity:** Equipment slots save references to `ItemObject`, `ItemModifier`, and related definitions. An unregistered item, invalid modifier, or early load-time construction can become an empty or incorrect slot after loading.

## Version note

This page follows the v1.4.5 12-slot `Equipment.cs`, `EquipmentIndex`, and `EquipmentElement` implementation. v1.3.15 slot mappings, templates, and Agent read points can differ; cross-version code should re-check the target version's index and lifecycle contract.

## Navigation

- **↑ Parent:** [Core-extra API](./)
- **↔ Sibling:** [EquipmentElement](../EquipmentElement) · [EquipmentIndex](../EquipmentIndex) · [ItemObject](../ItemObject) · [ItemModifier](../ItemModifier)
- **Related:** [Hero](../../campaign/Hero) · [CharacterObject](../../campaign/CharacterObject) · [ItemRoster](../../campaign/ItemRoster) · [GiveItemAction](../../campaign-ext/GiveItemAction)
