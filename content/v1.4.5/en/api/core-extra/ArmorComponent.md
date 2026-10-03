---
title: "ArmorComponent"
description: "The behaviour component for armour items: four armour value slots, three mobility bonuses, the body-occlusion mask MeshesMask, and eight nested enums for material, body mesh, and cover types. Every property is private-set, and the only official way to populate it is ItemObject.Deserialize via the <Armor> tag. Its GetCopy() forgets IsNoSlim."
---

# ArmorComponent

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class ArmorComponent : ItemComponent`
**Base:** `ItemComponent`
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/ArmorComponent.cs`

## Overview

`ArmorComponent` is a subclass of [ItemComponent](../ItemComponent) and it owns **the behavioural data for armour and armour-like items**. It answers three groups of questions: how much protection the piece gives (`HeadArmor` / `BodyArmor` / `ArmArmor` / `LegArmor`), what it costs or gains in mobility (`ManeuverBonus` / `SpeedBonus` / `ChargeBonus`), and which parts of the body it hides in the model (`MeshesMask`, paired with the `covers_head` / `covers_body` / `covers_hands` / `covers_legs` XML attributes).

The role it plays is **the single home for the "armour" slice of item behaviour**. Its consumers are very concrete: the item tooltip at `TooltipRefresherCollection.cs:520-548` decides whether to show a "Head Armor" row purely by testing `item.ArmorComponent.HeadArmor != 0`, and `SPInventoryVM.cs:3923` and `:4112` use `ArmorComponent.FamilyType` to check whether a saddle matches its horse. **Note that it serves both body armour and horse harnesses** — a saddle's armour value travels through the same `BodyArmor` field, and the tooltip chooses between the labels "Horse Armor" and "Body Armor" by testing `item.Type == ItemObject.ItemTypeEnum.HorseHarness`.

## Mental Model

Treat it as **the complete projection of the "armour" item category from XML**, because it is **the one component that can only ever be filled through XML**. The fluent `Character(...)` / `Monster(...)` builder style that works so nicely on [AgentData](../AgentData) is simply unavailable here: `ItemComponent.Item` and all of these `private set` properties have exactly one official filling path, which is `ItemObject.Deserialize` encountering an `<Armor>` tag and calling `ArmorComponent.Deserialize`.

**The centre of the mental model is that `MeshesMask` is computed in reverse.** The logic at `ArmorComponent.cs:171-186` reads the four booleans `covers_head` / `covers_body` / `covers_hands` / `covers_legs` and then, **for every one of them that is false, ORs in the matching `...Visible` bit**:

```csharp
if (!num) { MeshesMask |= SkinMask.HeadVisible; }
if (!flag) { MeshesMask |= SkinMask.BodyVisible; }
if (!flag2) { MeshesMask |= SkinMask.HandsVisible; }
if (!flag3) { MeshesMask |= SkinMask.LegsVisible; }
```

In other words, **`covers_head="true"` means "covers the head", while absent or `false` means "head is visible"**. That is the opposite of most people's intuition, and it is the easiest thing to get wrong when authoring a custom armour mesh. Also note that `MeshesMask` only ever **accumulates — it is never cleared**: `Deserialize` contains no statement resetting it to 0, so **calling `Deserialize` twice on the same object keeps adding bits**.

**The second anchor is that the four armour values here are not a one-to-one mirror of `Equipment`'s slots.** The component exposes `HeadArmor` / `BodyArmor` / `LegArmor` / `ArmArmor` while the actual slot an item occupies is decided by [EquipmentIndex](../EquipmentIndex); and the tooltip reads a **modifier-inclusive** value such as `equipmentElement.Value.GetModifiedBodyArmor()`, whereas `ArmorComponent.BodyArmor` is the **raw definition**. So "the component value" and "the value that actually applies" are two different numbers.

Three practical conclusions follow. First, **there is no fluent construction entry point.** Programmatically creating an `ArmorComponent` means `new ArmorComponent(item)` followed by a manual `Deserialize`, but `ItemObject.ItemComponent` is `private set` — **there is no way to put it back from outside**. Second, **`GetCopy()` forgets `IsNoSlim`.** `ArmorComponent.cs:88-110` copies seventeen properties and omits `IsNoSlim`. The only tree-wide callers of `GetCopy()` are `Crafting.cs` (six sites) and `CraftingCampaignBehavior.cs` (two sites), both inside the weapon-crafting rebuild flow — **so copying an armour with `no_slim="true"` through that path silently loses the flag**. Third, **a malformed `material_type` throws.** `Enum.Parse(typeof(ArmorMaterialTypes), node.Attributes["material_type"].Value)` is called **without** the `ignoreCase` argument — compare the `hair_cover_type` line on the same method, which does pass `ignoreCase: true`. So `<Armor material_type="plate" />` throws while `Plate` works. **That inconsistency is genuinely present in the source.**

## Key Members

| Member | Signature | What this member is for |
| --- | --- | --- |
| `HeadArmor` / `BodyArmor` / `LegArmor` / `ArmArmor` | `public int XxxArmor { get; private set; }` | The four protection values, from `head_armor` / `body_armor` / `leg_armor` / `arm_armor`, **defaulting to 0 when the attribute is absent**. The tooltip at `TooltipRefresherCollection.cs:526-545` uses "is the value non-zero" to decide whether to show each row. **Harnesses also use `BodyArmor`** (`:532-538` switches the label on `ItemTypeEnum.HorseHarness`). |
| `ManeuverBonus` / `SpeedBonus` / `ChargeBonus` | `public int XxxBonus { get; private set; }` | Three mobility bonuses, from `maneuver_bonus` / `speed_bonus` / `charge_bonus`, defaulting to 0. **Whether they apply additively or multiplicatively is decided by the consumer, not here** — the component only stores integers. |
| `StealthFactor` | `public int StealthFactor { get; private set; }` | The stealth modifier. **It is an `int` but is parsed with `CultureInfo.InvariantCulture.NumberFormat`** (`:157`, reading `node.Attributes["stealth_factor"].InnerText` rather than `.Value`) — different from every other int property on the class. |
| `MeshesMask` | `public SkinMask MeshesMask { get; private set; }` | The body-occlusion mask. **Derived in reverse from the four `covers_*` attributes**: a `covers_*` that is false ORs in the matching `...Visible` bit. **`Deserialize` never clears it**, so repeated calls accumulate. |
| `MaterialType` | `public ArmorMaterialTypes MaterialType { get; private set; }` | Material class (None/Cloth/Leather/Chainmail/Plate). **The `Enum.Parse` here passes no `ignoreCase`** (`:135`), while `hair_cover_type` / `beard_cover_type` / `mane_cover_type` / `tail_cover_type` in the very same method all pass `ignoreCase: true` — **that inconsistency makes a lowercase `plate` throw.** |
| `FamilyType` | `public int FamilyType { get; private set; }` | The mount family id, from `family_type`. **Its most practical use is the compatibility check**: `SPInventoryVM.cs:3923/4112` compares the mount's `HorseComponent.Monster.FamilyType` against this `ArmorComponent.FamilyType` and rejects a mismatch. |
| `ReinsMesh` / `ReinsRopeMesh` | `public string ReinsMesh { get; private set; }` / `public string ReinsRopeMesh => ReinsMesh + "_rope";` | The rein mesh name and its derived counterpart. `ReinsRopeMesh` is **the only member with computation in it** (an expression-bodied property); it appends `"_rope"` unconditionally, so when `ReinsMesh` is an empty string it returns `"_rope"` rather than an empty string. |
| `BodyMeshType` / `BodyDeformType` | `public BodyMeshTypes` / `public BodyDeformTypes` | Mesh substitution and body deformation. **Neither uses `Enum.Parse`**: they are hand-written `if (value == "upperbody") ... else if (value == "shoulders")` string comparisons (`:141-158`), so **an unknown value is silently ignored and the default retained** (`Normal` / `Medium`) with no exception. |
| `HairCoverType` / `BeardCoverType` / `ManeCoverType` / `TailCoverType` | four `public XxxCoverTypes { get; private set; }` | Cover types for hair, beard, harness, and horse tail. All four use `Enum.Parse(..., ignoreCase: true)` and are therefore case-insensitive — but **a misspelled member name throws**, since `Enum.Parse` raises `ArgumentException` when the name does not exist. |
| `IsNoSlim` / `MultiMeshHasGenderVariations` | `public bool IsNoSlim { get; private set; }` / `public bool MultiMeshHasGenderVariations { get; private set; }` | The first comes from `no_slim`. The second comes from `has_gender_variations` but is **hard-coded to `true` first** (`:136` assigns unconditionally, then checks the attribute). **`IsNoSlim` is the one property `GetCopy()` fails to copy.** |
| `ArmorComponent(ItemObject)` | `public ArmorComponent(ItemObject item)` | The only constructor, whose body is the single statement `base.Item = item;`. **It performs no initialisation at all** — so a freshly constructed component has `MaterialType` of `None`, `MeshesMask` of 0, and **`ReinsMesh` of `null`, not an empty string**. |
| `Deserialize` | `public override void Deserialize(MBObjectManager objectManager, XmlNode node)` | The only filling path. It calls `base.Deserialize(...)` once to read `modifier_group`. **Where it throws**: a bad or wrongly-cased `material_type` (no `ignoreCase`), or a misspelled `*_cover_type`. **Where it is silent**: unknown `body_mesh_type` / `body_deform_type` values. |
| `GetCopy` | `public override ItemComponent GetCopy()` | Deep copy. **It copies seventeen properties and omits both `IsNoSlim` and `Item`** (the latter is re-established by `base.Item` in the new object's constructor). The only tree-wide callers are `Crafting.cs` (six sites) and `CraftingCampaignBehavior.cs` (two sites). |
| Eight nested enums | `ArmorMaterialTypes` / `HairCoverTypes` / `BeardCoverTypes` / `HorseHarnessCoverTypes` / `HorseTailCoverTypes` / `BodyMeshTypes` / `BodyDeformTypes` | Declared inside the type, so they occupy no external namespace. **Three of them carry sentinel members**: `HairCoverTypes.NumHairCoverTypes`, `BeardCoverTypes.NumBeardBoverTypes` (a spelling slip — `Bever` instead of `Beard`), and `HorseHarnessCoverTypes.HorseHarnessCoverTypes` (**a member whose name is identical to the enum's own name**). `BodyMeshTypes.BodyMeshTypesNum` and `BodyDeformTypes.BodyMeshTypesNum` are sentinels too. |

## Real Example

Reading the component off an item — **check `HasArmorComponent` before using it**, which is the house pattern (exactly the order used at `TooltipRefresherCollection.cs:520`):

```csharp
ItemObject helmet = MBObjectManager.Instance.GetObject<ItemObject>("empire_helmet");
if (helmet == null || !helmet.HasArmorComponent)
{
    Debug.Print("item has no <Armor> node", 0);
    return;
}

ArmorComponent armor = helmet.ArmorComponent;
Debug.Print("head = " + armor.HeadArmor + " body = " + armor.BodyArmor, 0);
Debug.Print("arm  = " + armor.ArmArmor + " leg  = " + armor.LegArmor, 0);
Debug.Print("material = " + armor.MaterialType, 0);

// The component holds the raw definition; the tooltip shows the modified value.
EquipmentElement element = hero.BattleEquipment.GetEquipmentFromSlot(EquipmentIndex.Head);
Debug.Print("modified head armor = " + element.GetModifiedHeadArmor(), 0);
```

Driving a visual decision from body coverage — remembering that **`covers_*` being true means covered, while a `...Visible` bit in `MeshesMask` means visible**:

```csharp
ItemObject robe = MBObjectManager.Instance.GetObject<ItemObject>("empire_robe");
if (robe == null || robe.ArmorComponent == null)
{
    Debug.Print("no armor component on " + robe, 0);
    return;
}

ArmorComponent robeArmor = robe.ArmorComponent;

bool headHidden = robeArmor.MeshesMask.HasAnyFlag(SkinMask.HeadVisible) == false;
bool bodyHidden = robeArmor.MeshesMask.HasAnyFlag(SkinMask.BodyVisible) == false;
Debug.Print("head covered = " + headHidden + ", body covered = " + bodyHidden, 0);

// ReinsRopeMesh is a computed member: it unconditionally appends "_rope",
// so an empty ReinsMesh still yields "_rope" rather than an empty string.
Debug.Print("rope mesh = " + robeArmor.ReinsRopeMesh, 0);
```

A mount / harness compatibility check (shape taken from `SPInventoryVM.cs:3923`):

```csharp
ItemObject harness = MBObjectManager.Instance.GetObject<ItemObject>("empire_harness");
Equipment mountArmor = hero.BattleEquipment.GetEquipmentFromSlot(EquipmentIndex.ArmorItemEndSlot);

if (harness.HasArmorComponent && !mountArmor.IsEmpty && mountArmor.Item.HasHorseComponent)
{
    int harnessFamily = harness.ArmorComponent.FamilyType;
    int mountFamily = mountArmor.Item.HorseComponent.Monster.FamilyType;
    bool matched = harnessFamily == mountFamily;
    Debug.Print("harness family " + harnessFamily + " vs mount " + mountFamily
        + " -> matched = " + matched, 0);
}
```

## Risks and Boundaries

- **`covers_*` has the opposite meaning to intuition.** `covers_head="true"` = **head is covered**; a `HeadVisible` bit in `MeshesMask` = **head is visible**. The two are exact negations. Get it backwards when authoring a custom mesh and the model ends up hiding exactly what should show.
- **`MeshesMask` only accumulates.** `Deserialize` (`:171-186`) contains no reset. **Calling `Deserialize` twice on the same `ArmorComponent` instance keeps adding bits.** In practice each call gets a fresh instance so this never surfaces — but reuse the object yourself and you will hit it.
- **`material_type` is case-sensitive while the other cover types are not.** `:135`'s `Enum.Parse(typeof(ArmorMaterialTypes), value)` omits `ignoreCase: true`, while `:161-164` all include it. **`<Armor material_type="plate" />` throws; `Plate` works.**
- **Unknown `body_mesh_type` / `body_deform_type` values are silently ignored.** `:141-158` is hand-written string comparison rather than `Enum.Parse`, so a typo raises nothing and just leaves the default (`Normal` / `Medium`). **The only way to notice is to read the property back.**
- **A misspelled `*_cover_type` throws.** Those go through `Enum.Parse(..., ignoreCase: true)`, which raises `ArgumentException` when the member does not exist. An exception during load aborts the whole `MBObjectManager`.
- **`GetCopy()` forgets `IsNoSlim`.** `ArmorComponent.cs:88-110` copies seventeen properties and skips `IsNoSlim`. Only `Crafting.cs` and `CraftingCampaignBehavior.cs` call `GetCopy()` tree-wide, both in the weapon-crafting rebuild flow — **so along that path an armour with `no_slim="true"` loses the flag silently.** This is the direct consequence of treating `GetCopy()` as a general-purpose clone.
- **Component value ≠ value in effect.** `ArmorComponent.BodyArmor` is the raw XML value; the tooltip displays `equipmentElement.GetModifiedBodyArmor()`, which includes modifiers. Never mix the two when comparing numbers.
- **There is no programmatic assembly path.** `ItemObject.ItemComponent` is `private set`, and so is every property here. **The only way to build an item with a populated armour component is to write XML.**
- **The constructor initialises nothing.** `ArmorComponent(ItemObject item)` is just `base.Item = item;`. A bare constructed object has `MaterialType` = `None`, `MeshesMask` = 0, and **`ReinsMesh` = `null` rather than an empty string** — while `Deserialize` supplies `""` when the attribute is missing. **"Never deserialized" and "deserialized with the attribute absent" are two different empty states.**
- **Harnesses reuse the body-armour field.** `BodyArmor` serves body armour and saddles alike, disambiguated only by `item.Type == ItemObject.ItemTypeEnum.HorseHarness`. **Never assume `BodyArmor` describes something worn on the body.**
- **`SaveableCoreTypeDefiner.cs:18` does contain `AddClassDefinition(typeof(ArmorComponent), 2);`** — but the component's data is rebuilt from XML and `AutoGeneratedInstanceCollectObjects` only calls `base`, so **it is not actually persisted**.
- **The eight nested enums carry sentinels, and one contains a typo.** `BeardCoverTypes.NumBeardBoverTypes` is missing an `a`, and `HorseHarnessCoverTypes` contains a **member named exactly like the enum itself**, `HorseHarnessCoverTypes`. All of these sentinels show up when you enumerate `Enum.GetValues`.

## Cross-Version Notes

`ArmorComponent.cs` is 228 lines in 1.4.5 with 7 nested enums, 20 public properties, and 3 methods, in original-source form. The 1.4.6 counterpart has been reworked (other `ItemComponent` subclasses got more complete `GetCopy()` implementations there). **Three things are worth checking when migrating across versions**: whether the XML attribute names are stable — `covers_*`, `*_cover_type`, and `body_mesh_type` are **data contracts, not API**, and an engine rename makes custom items fail silently; whether `GetCopy()` has gained `IsNoSlim` (**this is the most direct indicator of whether the file has been fixed**); and whether the `material_type` `ignoreCase` inconsistency has been resolved. **Note that v1.4.6's `ArmorComponent` differs noticeably from this one, and `ItemComponent.GetCopy` covers more fields there — do not assume this version's "forgotten property" behaviour carries over.**

## Dependencies

- Base class: [ItemComponent](../ItemComponent) supplies `Item` and `ItemModifierGroup`, and is itself assembled by `ItemObject.Deserialize` from the `<Armor>` tag
- Host: [ItemObject](../ItemObject)'s `ArmorComponent` accessor and its `HasArmorComponent` flag
- Occlusion enum: [SkinMask](../SkinMask)'s `HeadVisible` / `BodyVisible` / `HandsVisible` / `LegsVisible`
- Slotting and modifiers: [Equipment](../Equipment) and [EquipmentElement](../EquipmentElement) provide `GetModifiedHeadArmor()` / `GetModifiedBodyArmor()` / `GetModifiedArmArmor()` / `GetModifiedLegArmor()` — the modifier-inclusive values actually in effect
- Main consumers (UI): `TaleWorlds.CampaignSystem.ViewModelCollection/TooltipRefresherCollection.cs:520-548` (item tooltip) and `SPInventoryVM.cs:3923/4112` (mount / harness compatibility)
- Descriptor: [Monster](../Monster)'s `FamilyType`, compared against this component's `FamilyType` via `HorseComponent.Monster.FamilyType`
- Types: [BodyProperties](../BodyProperties) and [Vec3](../Vec3) form part of the `Deserialize` input contract (via `base.Deserialize` reading `modifier_group`)
- Deep-copy callers: `Crafting.cs` (six sites) and `CraftingCampaignBehavior.cs` (two sites) — the only two call sites in the tree
- Bucket index: [core-extra API section](../)