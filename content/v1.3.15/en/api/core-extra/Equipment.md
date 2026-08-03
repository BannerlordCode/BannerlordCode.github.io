---
title: "Equipment"
description: "The full set of items a character wears at a moment — 12 fixed weapon/armor/mount slots of EquipmentElement, plus the derived armor totals, weight, body-mesh coverage, and equipment code used by both Campaign and Mission layers."
---

# Equipment

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class Equipment`
**Base:** none (does not inherit any base class)
**Source:** `TaleWorlds.Core/Equipment.cs`

## Overview

`Equipment` represents **everything a single character is wearing at one moment**: main hand, off hand, spare weapons, helmet, body armor, leg armor, gloves, cape, mount, and mount harness — a fixed 12 slots (`EquipmentSlotLength = 12`). Each slot holds one `EquipmentElement` (an item plus an optional `ItemModifier`, cosmetic item, and quest flag). The instance also records whether it is the Battle, Civilian, or Stealth outfit, and derives from that the summed armor, total weight, hair/beard coverage, and body-mesh type.

`Equipment` is a mutable reference type that is serialized directly by the save system: a `Hero` in the campaign holds three `Equipment` instances (`BattleEquipment`, `CivilianEquipment`, `StealthEquipment`), and any mutation you make to them is persisted into the save game. It appears in both the campaign layer (the `CharacterObject` equipment template, the `MBEquipmentRoster` roster) and the mission layer (the穿戴 snapshot taken before an `Agent` is spawned).

## Mental Model

Think of `Equipment` as **a 12-cell "what this character is wearing" checklist**, not as a service or a process:

- **What it is:** a `EquipmentElement[]` of length 12, addressed by the `EquipmentIndex` enum (0–4 are weapon slots, 5–9 armor slots, 10 mount, 11 mount harness). The type field says whether it is one of the Battle / Civilian / Stealth outfits.
- **Lifecycle:** it is usually created and owned by `Hero`, `CharacterObject`, `MBEquipmentRoster`, or the equipment-selection model. You generally should **not** `new Equipment()` and keep your own long-lived copy — either take the existing instance from `Hero` / `CharacterObject`, or `Clone()` a temporary copy.
- **Layer:** lives in `TaleWorlds.Core`, a foundation data structure shared by both Campaign and Mission.
- **When to use:** whenever you need to read or rewrite "what this character is wearing now" — re-equipping a hero, looting items from a defeated troop, computing armor/weight from gear, or serializing the outfit into a code for network/save transfer.
- **When NOT to use:**
  - To safely swap a hero's *whole* outfit, use `EquipmentHelper.AssignHeroEquipmentFromEquipment(hero, equipment)` — it writes into the correct Battle/Civilian/Stealth slots by type automatically. Do **not** hand-assign 12 slots yourself.
  - To change inventory stock rather than worn state, use `ItemRoster` / `ItemRosterElement`, not `EquipmentElement`.
  - To roll random/probabilistic gear by culture, use `EquipmentSelectionModel` (see [Campaign](../../campaign/)) or `Equipment.GetRandomEquipmentElements`, not manual assembly.
- **Dependencies:** the items in the slots come from `ItemObject` registered in `MBObjectManager`; coverage types come from `ItemObject.ArmorComponent`; face generation depends on `BodyProperties.GetBodyProperties(Equipment)`.
- **What breaks:** writing a slot runs `IsItemFitsToSlot` validation — the wrong item type only triggers `Debug.FailedAssert` (no exception, but it pollutes the log and visuals). `CreateFromEquipmentCode` / `Deserialize` depend on `MBObjectManager.Instance`; calling them before the object system is ready yields `null` and then crashes. Mutating `Hero.BattleEquipment` directly writes into the save game.

## How to Acquire / Construct an Equipment

```csharp
// 1) Read from a campaign hero (the most common path)
Equipment battleEq   = Hero.MainHero.BattleEquipment;     // battle outfit
Equipment civilianEq = Hero.MainHero.CivilianEquipment;   // civilian outfit
Equipment stealthEq  = Hero.MainHero.StealthEquipment;    // stealth outfit

// 2) Read the equipment sets from a character template (troop / culture defaults)
foreach (Equipment eq in someCharacter.BattleEquipments)
{
    // enumerate every battle-equipment option this character can wear
}

// 3) Read from an equipment roster (culture / troop defaults)
MBEquipmentRoster roster = MBEquipmentRosterExtensions.All
    .Find(x => x.StringId == "generic_bat_dummy");
Equipment firstBattle = roster.GetBattleEquipments().First();

// 4) Build from an equipment code (empty code => 12 empty slots; with args it restores items)
Equipment fromCode = Equipment.CreateFromEquipmentCode("");
// Deep-copy an existing instance (the safest "new" way — avoids a wrong type/category mismatch)
Equipment copied   = Hero.MainHero.BattleEquipment.Clone();
Equipment fromCode = Equipment.CreateFromEquipmentCode(            // restore from a string code
    "0-iron_sword-@null+5-northern_helmet-@null");
Equipment random   = Equipment.GetRandomEquipmentElements(         // template + category, random
    someCharacter, randomEquipmentModifier: false, Equipment.EquipmentType.Civilian);
```

## The 12-Slot Collection (`EquipmentElement` per `EquipmentIndex`)

The slots are a fixed `EquipmentElement[]` of length `EquipmentSlotLength = 12`, addressed by the `EquipmentIndex` enum. The mapping (verified against `EquipmentIndex.cs`) is:

| Index | `EquipmentIndex` | Slot meaning |
|-------|------------------|--------------|
| 0 | `Weapon0` (`WeaponItemBeginSlot`) | Main hand |
| 1 | `Weapon1` | Off hand |
| 2 | `Weapon2` | Spare weapon |
| 3 | `Weapon3` | Spare weapon |
| 4 | `ExtraWeaponSlot` | Thrown / extra weapon (`NumAllWeaponSlots = 5` boundary) |
| 5 | `Head` (`NonWeaponItemBeginSlot`) | Helmet |
| 6 | `Body` | Body armor |
| 7 | `Leg` | Leg armor |
| 8 | `Gloves` | Gloves |
| 9 | `Cape` | Cape |
| 10 | `Horse` (`ArmorItemEndSlot`) | Mount |
| 11 | `HorseHarness` | Mount harness |

`EquipmentIndex.None = -1` means "no slot". Each slot stores an `EquipmentElement` (item + optional `ItemModifier` + `CosmeticItem` + `IsQuestItem` flag). The integer indexer `this[int]` and the enum indexer `this[EquipmentIndex]` both read/write the same `_itemSlots` array; prefer the enum so you never exceed 11.

## Key Properties

### Category and identity

| Property | Type | Notes |
|----------|------|-------|
| `ItemEquipmentType` | `EquipmentType` | Internal category (Battle / Civilian / Stealth / Invalid). Read-only; set at construction. |
| `IsBattle` | `bool` | Whether this is the battle outfit. |
| `IsCivilian` | `bool` | Whether this is the civilian outfit. |
| `IsStealth` | `bool` | Whether this is the stealth outfit. |

### Slot access

| Property / indexer | Type | Notes |
|--------------------|------|-------|
| `this[EquipmentIndex index]` | `EquipmentElement` | Read/write a slot by enum (`Weapon0`, `Head`, `Body`, `Horse`, `HorseHarness`). **The setter calls `IsItemFitsToSlot` for type validation**; a wrong type triggers `Debug.FailedAssert` but does not block the assignment. |
| `this[int index]` | `EquipmentElement` | Read/write by 0–11 integer. Out of range (>11) throws `IndexOutOfRangeException`; prefer `EquipmentIndex`. |
| `Horse` | `EquipmentElement` | Equal to `_itemSlots[10]`, the mount slot. Read-only convenience. |

### Appearance / body-shape derivation (from `ItemObject.ArmorComponent`)

These read-only properties are computed from the `ArmorComponent` of the helmet, body armor, and mount harness, and feed `BodyProperties` face generation and rendering:

| Property | Type | Notes |
|----------|------|-------|
| `HairCoverType` | `ArmorComponent.HairCoverTypes` | How helmet/body armor covers hair; if body armor is empty it is treated as `Type4`. |
| `BeardCoverType` | `ArmorComponent.BeardCoverTypes` | How it covers the beard. |
| `ManeCoverType` | `ArmorComponent.HorseHarnessCoverTypes` | How the harness covers the horse mane. |
| `ReinsMeshName` | `string` | Mount-harness reins mesh name. |
| `EarsAreHidden` | `bool` | Derived from `HairCoverType`. |
| `MouthIsHidden` | `bool` | Derived from `BeardCoverType == All`. |
| `BodyMeshType` | `ArmorComponent.BodyMeshTypes` | Body mesh type decided by body armor. |
| `BodyDeformType` | `ArmorComponent.BodyDeformTypes` | Body deformation decided by body armor. |

## Key Methods

### Construction and copy

#### `public Equipment()`
Creates an empty equipment of category `Invalid` (12 empty slots). Mainly for deserialization or as a temporary container.

#### `public Equipment(EquipmentType equipmentType)`
Creates an empty equipment of a given category (Battle / Civilian / Stealth). **Use this** when you want to build a fresh outfit that "belongs" to a category, rather than the parameterless constructor.

#### `public Equipment(Equipment equipment)`
Deep-copies an existing instance (per-slot `new EquipmentElement`). Copies only the items and modifiers, not runtime flags such as `SyncEquipments`.

#### `public Equipment Clone(bool cloneWithoutWeapons = false)`
Returns a new `Equipment`. With `cloneWithoutWeapons: true`, the first 5 weapon slots are set to `EquipmentElement.Invalid` and only armor/mount remain — useful as a base before "strip for battle" re-equipping.
**When to call:** when you need a temporary edit that must not pollute the original equipment/save (e.g. a穿戴 snapshot before agent spawn, or a stealth preview).

```csharp
Equipment baseCivilian = Hero.MainHero.CivilianEquipment.Clone(cloneWithoutWeapons: true);
baseCivilian[EquipmentIndex.Body] = new EquipmentElement(cleanTunic);
```

#### `public void FillFrom(Equipment sourceEquipment, bool useSourceEquipmentType = true)`
Overwrites all 12 slots with `source`'s slots; with `useSourceEquipmentType: true` it also copies the category. **Side effect:** it rewrites the caller's own slots, which is reflected on the owning `Hero` if the caller *is* `Hero.BattleEquipment`.
**When to call:** when moving a whole outfit into an existing instance (as `MBEquipmentRoster.InitializeDefaultEquipment` does internally).

### Slot read / write

#### `public void AddEquipmentToSlotWithoutAgent(EquipmentIndex equipmentIndex, EquipmentElement itemRosterElement)`
Equivalent to `this[equipmentIndex] = itemRosterElement` — writes a slot. The name stresses that it changes the data "without going through an Agent (combat entity)". **The write also passes through `IsItemFitsToSlot` validation.**

#### `public EquipmentElement GetEquipmentFromSlot(EquipmentIndex equipmentIndex)`
Returns the `EquipmentElement` at that slot (an empty slot returns an element with `Item == null`). Reading does not trigger validation.

#### `public static bool IsItemFitsToSlot(EquipmentIndex slotIndex, ItemObject item)`
Static: decides whether `item` can go into `slotIndex` (mapped by `ItemType`). `item == null` is always `true`; books and invalid items return `false`. **When to call:** pre-check before bulk writes so you never trigger `Debug.FailedAssert`. Note it only asserts — it does not throw.

#### `public EquipmentIndex GetWeaponPickUpSlotIndex(EquipmentElement itemRosterElement, bool isStuckMissile)`
Finds an empty weapon slot for a picked-up weapon: items with `DropOnWeaponChange`/`DropOnAnyAction` go to `ExtraWeaponSlot`, otherwise the first empty weapon slot (`Weapon0`–`Weapon3`); if none is free it returns `EquipmentIndex.None`. Used by combat pickup logic to decide the landing slot.

#### `public static void SwapWeapons(Equipment equipment, EquipmentIndex index1, EquipmentIndex index2)`
Static: swaps the contents of two slots (value swap, no Agent involved). Underlies weapon-swap animation / quick-swap.

### Queries and statistics

#### `public bool IsEmpty()`
Returns `true` when all 12 slots have `Item == null`. Used during hero adulthood init to decide whether re-equipping is needed.

#### `public bool HasWeapon()`
Whether any of the first 5 weapon slots holds a weapon carrying the `WeaponMask` flag.

#### `public bool HasWeaponOfClass(WeaponClass weaponClass)`
Whether a weapon of the given class (e.g. `WeaponClass.OneHanded`) exists.

#### `public float GetTotalWeightOfArmor(bool forHuman)` and `public float GetTotalWeightOfWeapons()`
Sums armor (human / horse) and weapon weight respectively, internally via `EquipmentElement.GetEquipmentElementWeight()`. Used by encumbrance / movement-speed models.

#### `GetHeadArmorSum` / `GetHumanBodyArmorSum` / `GetLegArmorSum` / `GetArmArmorSum` / `GetHorseArmorSum`
Per-region armor totals, based on `EquipmentElement.GetModified*Armor()` (already includes `ItemModifier` bonuses). Combat damage resolution and equipment rating depend on these.

#### `public UnderwearTypes GetUnderwearType(bool isFemale)`
From whether body armor exists and whether it is female `DoesNotHideChest`, returns `NoUnderwear` / `FullUnderwear` / `OnlyTop`, deciding underwear rendering.

#### `public bool IsEquipmentEqualTo(Equipment other)`
Compares each slot via `EquipmentElement.IsEqualTo` plus three flag groups. Used to tell whether a hero's gear "still matches the template" and thus whether re-equipping is needed.

### Equipment code (serialization / network helper)

#### `public string CalculateEquipmentCode()`
Encodes the 12 slots into a `"slot-itemStringId-modifierStringId"` string joined by `+` (empty items use `@null`). Describes the worn state for save / network sync.
**Example:** `0-iron_sword-@null+5-northern_helmet-@null+10-horse-@null`.

#### `public static Equipment CreateFromEquipmentCode(string equipmentCode)`
The inverse of `CalculateEquipmentCode`: parses the string and restores items via `MBObjectManager.Instance.GetObject<ItemObject>` / `GetObject<ItemModifier>`. **Depends on `MBObjectManager` being initialized**; calling before the object system is ready yields `null` items.

#### `public void Deserialize(MBObjectManager objectManager, XmlNode node)` / `DeserializeNode(...)`
Restores equipment from an XML node (troop templates, save loading). `DeserializeNode` internally also runs `IsItemFitsToSlot`; a mismatch triggers `Debug.FailedAssert`.

#### `public static EquipmentIndex GetEquipmentIndexFromOldEquipmentIndexName(string oldEquipmentIndexName)`
Maps old XML slot names (`Item0`–`Item4`) to the new enum (`Weapon0`–`ExtraWeaponSlot`), for compatibility with old equipment definitions.

### Weapon init and random

#### `public void GetInitialWeaponIndicesToEquip(out EquipmentIndex mainHandWeaponIndex, out EquipmentIndex offHandWeaponIndex, out bool isMainHandNotUsableWithOneHand, InitialWeaponEquipPreference initialWeaponEquipPreference = InitialWeaponEquipPreference.Any)`
From the 5 weapon slots, picks the main-hand and off-hand slots according to `InitialWeaponEquipPreference` (Any / MeleeMainHand / RangedMainHand) and flags whether the main hand cannot be used one-handed. The `Agent` initial-weapon logic at battle entry depends on it.

#### `public static Equipment GetRandomEquipmentElements(BasicCharacterObject character, bool randomEquipmentModifier, EquipmentType equipmentType, int seed = -1)`
Randomly assembles one outfit from `character`'s equipment set of the matching category (optional fixed `seed`, and `randomEquipmentModifier` decides whether to attach random modifiers). `EquipmentSelectionModel` uses it internally to roll gear for troops/heroes.

## Examples

### Example 1: Read and temporarily modify the player hero's battle equipment

Writing `Hero.BattleEquipment` directly writes into the save game, so here we use `Clone()` for the demo; for a real persistent swap use `EquipmentHelper.AssignHeroEquipmentFromEquipment`.

```csharp
// The player hero's battle equipment (real acquisition path: Hero.MainHero)
Equipment battleEq = Hero.MainHero.BattleEquipment;

// Pull the item through MBObjectManager, then write the slot (indexer validates the type)
ItemObject sword = MBObjectManager.Instance.GetObject<ItemObject>("iron_sword_a");
if (Equipment.IsItemFitsToSlot(EquipmentIndex.Weapon0, sword))
{
    battleEq[EquipmentIndex.Weapon0] = new EquipmentElement(sword);
}

// Temporary copy: drop weapons, used as a civilian snapshot before agent spawn
Equipment preview = Hero.MainHero.CivilianEquipment.Clone(cloneWithoutWeapons: true);
EquipmentElement helm = preview.GetEquipmentFromSlot(EquipmentIndex.Head);
if (!helm.IsEmpty)
{
    // helm.Item is an ItemObject; you can read its armor / value
    float headArmor = preview.GetHeadArmorSum();
}
```

### Example 2: Loot from an enemy character template

`CharacterObject.BattleEquipments` returns every battle-equipment option for that character; the loot model (`DefaultBattleRewardModel.GetLootedItemFromTroop`) works exactly this way.

```csharp
// Real acquisition path: the CharacterObject equipment set
CharacterObject enemy = someCombatant.Character; // e.g. an enemy unit template in battle
Equipment randomBattle = enemy.BattleEquipments.GetRandomElementInefficiently();

// Pull the main-hand slot item as loot
EquipmentElement loot = randomBattle.GetEquipmentFromSlot(EquipmentIndex.Weapon0);
if (!loot.IsEmpty && loot.Item != null && !loot.Item.NotMerchandise)
{
    ItemObject dropped = loot.Item;        // a real ItemObject
    int value = loot.GetBaseValue();        // value including modifiers
}
```

### Example 3: Equipment code for save / network sync

```csharp
// Serialize current worn state
string code = Hero.MainHero.BattleEquipment.CalculateEquipmentCode();

// Restore elsewhere (make sure MBObjectManager is ready)
Equipment restored = Equipment.CreateFromEquipmentCode(code);
```

## Dependencies

### Upstream (who creates / owns the Equipment)

- [Hero](../../campaign/Hero/) — `BattleEquipment` / `CivilianEquipment` / `StealthEquipment` are three `Equipment` instances, saved with the hero.
- [CharacterObject](../../campaign/CharacterObject/) — `BattleEquipments` / `CivilianEquipments` / `StealthEquipments` supply the template equipment sets.
- [MBEquipmentRoster](../MBEquipmentRoster/) — culture/troop default equipment roster; internally `MBList<Equipment>`.

### Downstream (subsystems that consume Equipment)

- [EquipmentElement](../EquipmentElement/) — the actual per-slot item unit (`Item` + `ItemModifier` + `CosmeticItem` + `IsQuestItem`).
- [ItemObject](../../core/ItemObject/) — the real item behind `EquipmentElement.Item`, providing `ArmorComponent` / `WeaponComponent`.
- [BodyProperties](../BodyProperties/) — `BasicCharacterObject.GetBodyProperties(Equipment)` uses `HairCoverType` / `BeardCoverType` for face generation.
- [Campaign](../../campaign/) — the `EquipmentSelectionModel` rolls gear for heroes/troops via `GetRandomEquipmentElements`.

### Save points

- [SaveManager](../../save-system/SaveManager/) — `Equipment`'s slot array carries `[SaveableField]` and `EquipmentElement`'s `Item` / `ItemModifier` carry `[SaveableProperty]`; they serialize together with the owning `Hero` / roster, and object references resolve through `MBObjectManager`'s `MBGUID`.

## Risks

1. **Restoring before the object system is ready:** `CreateFromEquipmentCode`, `Deserialize`, and `DeserializeNode` all call `MBObjectManager.Instance.GetObject(...)`. If you call them before `MBObjectManager` has loaded game objects (e.g. early in `MBSubModuleBase.OnSubModuleLoad`, or anywhere `Game` has not started), the result is `null`; continuing to read `.Name` or build an `EquipmentElement` then throws `NullReferenceException`. **Only call after the campaign/mission has loaded.**
2. **Writing `Hero.BattleEquipment` directly writes into the save game:** `Hero.BattleEquipment` returns the **same mutable instance**. Writing it directly during agent spawn, preview, or temporary calculation pollutes the hero's persistent gear and can corrupt the save. For temporary wear, always `Clone()` first; for a real full swap, use `EquipmentHelper.AssignHeroEquipmentFromEquipment`.
3. **Slot type validation is only an assert:** the indexer setter calls `IsItemFitsToSlot`, but a wrong type (e.g. a weapon in the helmet slot) only triggers `Debug.FailedAssert` — **it does not block the assignment**, yet causes render/armor-computation anomalies. Pre-check with `IsItemFitsToSlot` before bulk writes.
4. **Integer index out of range:** `_itemSlots` is fixed at length 12. Using `this[int]` with an index >11 throws `IndexOutOfRangeException`. Prefer the `EquipmentIndex` enum (`Horse = 10`, `HorseHarness = 11` is the upper bound).
5. **Mutation during save / serialization:** concurrently editing `Equipment` inside save read/write callbacks or while `MBObjectManager` is collecting serializable objects (`AutoGeneratedInstanceCollectObjects`) yields an inconsistent object graph. Change equipment in campaign tick / behavior / dialog logic, not in the save critical section.

## Cross-version Notes

- v1.3.15 / v1.3.0: the public API matches 1.4.5 — same 12-slot `EquipmentElement[]`, same `EquipmentIndex` mapping, and the same `Clone` / `FillFrom` / `CalculateEquipmentCode` signatures. This page follows the authoritative 1.4.5 source.
- v1.4.5: the indexer setter now explicitly calls `IsItemFitsToSlot` for the assert; earlier decompiled versions behave the same. Cross-version mods reading equipment codes (`CalculateEquipmentCode` / `CreateFromEquipmentCode`) can reuse them safely.
- `Equipment` has no base class and implements no interface; its coupling to `Hero` / `CharacterObject` is composition, not inheritance.

## See Also

- [EquipmentElement](../EquipmentElement/) — the single-slot item unit (Item + modifier + cosmetic)
- [EquipmentIndex](../EquipmentIndex/) — the 12-slot enum mapping
- [MBEquipmentRoster](../MBEquipmentRoster/) — equipment roster (a set of Equipment)
- [ItemObject](../../core/ItemObject/) — the real item in a slot
- [ItemModifier](../ItemModifier/) — modifier entries
- [BodyProperties](../BodyProperties/) — face generation that depends on equipment coverage
- [Hero](../../campaign/Hero/) — holds the Battle/Civilian/Stealth three `Equipment`
- [CharacterObject](../../campaign/CharacterObject/) — supplies the Battle/Civilian equipment template sets
- [SaveManager](../../save-system/SaveManager/) — the mechanism by which Equipment serializes with Hero

## Navigation

- ↑ Parent: [Core-Extra module index](../../core-extra/) (served as `/v1.3.15/en/api/core-extra/`)
- ↔ Siblings: [EquipmentElement](../EquipmentElement/) · [MBEquipmentRoster](../MBEquipmentRoster/) · [ItemObject](../../core/ItemObject/) · [EquipmentIndex](../EquipmentIndex/) · [ItemRosterElement](../ItemRosterElement/) · [BodyProperties](../BodyProperties/)
- Related types: [Hero](../../campaign/Hero/) · [CharacterObject](../../campaign/CharacterObject/) · [Campaign](../../campaign/)
