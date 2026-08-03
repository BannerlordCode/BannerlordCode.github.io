---
title: "CharacterObject"
description: "The campaign-layer character TEMPLATE: the read-mostly data card holding skills, equipment slots, body properties, culture, occupation, and upgrade tree. It is shared by troops, NPCs, and the player/hero template — understanding its split from the Hero instance is the key to avoiding crashes when mutating a shared template."
---
# CharacterObject

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public sealed class CharacterObject : BasicCharacterObject, ICharacterData`
**Base:** `BasicCharacterObject`
**Source:** `TaleWorlds.CampaignSystem/CharacterObject.cs`

## Overview

`CharacterObject` is the campaign system's "character template / data card": it carries every piece of static data needed to describe a character — skill values, equipment (`Equipment`), body properties (`BodyProperties`), culture (`CultureObject`), occupation (`Occupation`), age, traits (`TraitObject`), and upgrade targets (`UpgradeTargets`). The same object is usually **shared by many instances**: every troop defined in the game XML (e.g. `imperial_infantry`), and every hero's birth template, maps to one `CharacterObject`, and every party, caravan, and village militia that uses that troop references the same object. It is a `MBObjectBase` subclass (via `BasicCharacterObject`) registered by `MBObjectManager` at module load, not a runtime individual you spawn yourself.

## Mental Model

Think of a `CharacterObject` as a **blueprint pulled from XML / factory data**, not an operable runtime individual:

- It is a subclass of `MBObjectBase` (through `BasicCharacterObject`), registered into `Campaign.Current.Characters` by `MBObjectManager` when the module loads. You almost never `new CharacterObject()` yourself — the constructor only initializes fields and carries zero XML data. Acquire cards through `Find` / `CreateFrom` / natural references.
- **A hero's card is cloned.** When `HeroCreator` builds a hero with `useCharacterAsTemplate == true`, it first `CharacterObject.CreateFrom(template)` shallow-clones a private copy, then points that copy back at the hero (`Hero.SetCharacterObject` internally does `_characterObject.HeroObject = this;`). So a hero's card is **exclusive**; a regular troop's card is **shared**.
- **Use it to:** read skills / equipment / body properties, filter troops by culture or occupation, compute upgrade cost and combat power, add troops to a party, or build battle simulations.
- **Do NOT mutate it blindly:** when you hold a **shared troop template** (e.g. `Clan.BasicTroop`, `CultureObject.BasicTroop`) and want to change its equipment or skills, you **must `CreateFrom` it first** — otherwise the change pollutes every entity that references the template. To read "what a hero is actually wearing right now," go through `Hero`, not by editing `CharacterObject.Equipment`.

## When to Use / When NOT to Use

**Use `CharacterObject` when you need** the *definition* of a character: its skill list, equipment roster, culture, occupation, tier, upgrade tree, or combat power. It is the right type for troop catalogs, auto-formation logic, balance debugging, and pre-battle simulations.

**Do NOT use it when you want the live, mutable state of a specific person.** A concrete campaign character (the player, a lord, a companion) is a `Hero`, which owns gold, clan, current party, life/death status, and a back-reference to its `CharacterObject`. If you need a hero's current gold, position, relationships, or the exact equipment they are wearing *right now*, read those from the `Hero` (e.g. `Hero.BattleEquipment`), not by writing to the shared `CharacterObject.Equipment`.

**Correct alternative for mutations:** instead of editing a shared template's fields directly, call `CharacterObject.CreateFrom(template)` to get an exclusive clone, then modify the clone and feed it into the party roster. This keeps the original template and all its other references intact.

## How to Obtain a CharacterObject

```csharp
// 1) From a Hero, get the template behind it (most common)
CharacterObject mainTemplate = Hero.MainHero.CharacterObject;

// 2) Enumerate every registered CharacterObject in the campaign (troops + hero cards)
foreach (CharacterObject character in CharacterObject.All)
{
    if (character.IsRegular && character.Culture == Hero.MainHero.Culture)
    {
        // a regular troop template, filterable by culture
    }
}

// 3) Exact lookup by stringId (the XML id, e.g. "imperial_infantry")
CharacterObject imperialInfantry = CharacterObject.Find("imperial_infantry");
if (imperialInfantry != null)
{
    // NOTE: Find returns the SHARED template — do not mutate it directly
}

// 4) Predicate lookups
CharacterObject firstElite = CharacterObject.FindFirst(c => c.Tier >= 5 && c.IsRegular);
foreach (CharacterObject cav in CharacterObject.FindAll(c => c.IsMounted && c.IsRegular))
{
    // iterate all mounted troop templates
}

// 5) Entry points through culture / clan (BasicTroop lives on Clan / CultureObject, NOT on CharacterObject)
CharacterObject starterTroop = Clan.PlayerClan.BasicTroop;
CharacterObject cultureTroop = starterTroop.Culture.BasicTroop;

// 6) Conversation / current player shortcuts
CharacterObject talkTarget = CharacterObject.OneToOneConversationCharacter;
CharacterObject playerTroop = CharacterObject.PlayerCharacter; // == Hero.MainHero.CharacterObject
```

`All` is backed by `Campaign.Current.Characters` (an `MBReadOnlyList<CharacterObject>`); `Find` goes through `MBObjectManager.Instance.GetObject<CharacterObject>(idString)` and returns `null` on miss — always null-check before use.

## Key Members

### Identity: Hero card vs Troop template

The single most important split on this type is whether the card belongs to a hero or is a shared troop template. It is decided by one back-reference.

| Member | Type | Notes |
|--------|------|-------|
| `HeroObject` | `Hero` | If this card belongs to a hero, points back to that `Hero`; `null` for troop templates. **This is the fundamental distinction.** The setter is `internal` and only assigned from inside `Hero`. |
| `IsHero` | `bool` | `_heroObject != null`. `true` for a hero's card. |
| `IsRegular` | `bool` | `_heroObject == null`. `true` for a troop / NPC template. Mutually exclusive with `IsHero`. |
| `IsTemplate` | `bool` | Set from the XML `is_template` flag (`private set`). Hero cards usually come from a cloned template and are not themselves templates. |
| `IsOriginalCharacter` | `bool` | `_originCharacter == null`. After a hero card is `CreateFrom`-cloned, `OriginalCharacter` points at the source template, so `IsOriginalCharacter` is `false`; the source template itself is `true`. |
| `OriginalCharacter` | `CharacterObject` | The source template this card was cloned from (i.e. `Hero.Template`). Editing a hero card never writes back to it. |

> There is **no literal `DefaultCharacter` member.** The "default / template" relationship the API models is exactly `OriginalCharacter` / `IsOriginalCharacter`: a hero card's `OriginalCharacter` is the factory template it was cloned from, while a troop's `BasicTroop` entry (on `Clan` / `CultureObject` / `Kingdom`) is the culture's default template. Prefer those members over inventing a `DefaultCharacter`.

### Culture, Occupation, and basic traits

Many of these properties are **delegated**: on a hero card they read from `HeroObject`; on a troop card they read the template's own value.

- `Culture` (`CultureObject`, `new`) — on a hero card returns `HeroObject.Culture`; otherwise the base `Culture`. Drives appearance, voice, and the default equipment roster.
- `Occupation` (`Occupation`) — on a hero card reads `HeroObject.Occupation` (Soldier / Mercenary / Bandit / Lord …); on a troop card reads the internal `_occupation` (XML `occupation`).
- `Age` (`float`) — hero card returns `HeroObject.Age`; otherwise the template base age.
- `IsFemale` (`bool`) — hero card reads `HeroObject.IsFemale`; otherwise the template.
- `Level` (`int`) — hero card returns `HeroObject.Level` (hero level); troop card returns the template level (XML `level`, default 1). Affects `TroopWage` and power.
- `TroopWage` (`int`) — hero card: `2 + Level * 2`; troop card: computed by `PartyWageModel.GetCharacterWage(this)`.
- `Tier` (`int`) — troop tier, from `CharacterStatsModel.GetTier(this)`.
- `IsBasicTroop` (`bool`) — XML `is_basic_troop`. Often the leaf of an upgrade tree; `Clan.BasicTroop` returns the character carrying this flag.
- `IsMariner` (`bool`) — `true` when `GetTraitLevel(DefaultTraits.NavalSoldier) != 0`, decided during `Deserialize`.

### Equipment and combat profiles

- `Equipment` (`Equipment`) — **hero card** returns `HeroObject.BattleEquipment` (the hero's *current* battle gear); **troop card** returns the template's own battle equipment. Marked `SyncEquipments = true` during `AfterRegister`.
- `BattleEquipments` / `CivilianEquipments` / `StealthEquipments` (`IEnumerable<Equipment>`) — the three equipment rosters. A hero card returns only its single corresponding set; a troop card returns the template roster (stealth from `Culture.DefaultStealthEquipmentRoster`).
- `FirstBattleEquipment` / `FirstCivilianEquipment` / `FirstStealthEquipment` (`Equipment`) — the first set in each roster; most troops have only this one, so it is what you touch most when editing gear.
- `IsMounted` (`bool`) — hero card checks `Equipment[10].Item` (mount slot); troop card reads the base.
- `IsRanged` (`bool`) — hero card inspects the first four weapon slots for bow / crossbow / throwing; troop card reads the base.
- `GetFormationClass()` — hero card returns `Infantry` / `Ranged` / `Cavalry` / `HorseArcher` by mounted + ranged; troop card reads the base default. Used for auto-formation.
- `GetSimulationAttackPower(out float attackPoints, out float defencePoints, Equipment equipment = null)` — computes attack/defense ratings for a pre-battle simulation. `equipment` defaults to this card's `Equipment`; it weights weapon `Effectiveness`, the relevant `SkillObject`, armor, and mount bonus, returned via `out` parameters.
- `GetHeadArmorSum` / `GetBodyArmorSum` / `GetLegArmorSum` / `GetArmArmorSum` / `GetHorseArmorSum` / `GetTotalArmorSum` — sum armor values across head/body/legs/arms/(horse) for a given `Equipment.EquipmentType` (default `Battle`).

### Skills, traits, and perks

- `GetSkillValue(SkillObject skill)` (`int`) — skill level. Hero card delegates to `HeroObject.GetSkillValue(skill)`; troop card reads the template's own skill value (`base.GetSkillValue`).
- `GetTraitLevel(TraitObject trait)` (`int`) — trait level. Hero card delegates to `HeroObject.GetTraitLevel`; troop card reads internal `_characterTraits`.
- `GetPerkValue(PerkObject perk)` (`bool`) — **always `false` for a troop card.** Only a hero card (`IsHero`) delegates to `HeroObject.GetPerkValue`, because perks are hero runtime attributes.
- `GetPersona()` (`TraitObject`) — the character's persona archetype (`_persona`), falling back to `DefaultTraits.PersonaSoftspoken` when empty. Used to pick dialogue tone.

### Power and upgrades

- `GetPower()` / `GetBattlePower()` / `GetMoraleResistance()` — the combat-power trio. `GetPower` weights by tier (`IsHero` uses `Level/4+1`, else `Tier`) plus hero/mount bonus; `GetBattlePower` scales `GetPower` relative to a baseline (minimum 1); `GetMoraleResistance` returns morale resistance (heros weighted 1.5×). Used by AI evaluation and auto-formation.
- `UpgradeTargets` (`CharacterObject[]`) — upgrade destinations (XML `upgrade_targets`). `Hero` uses these when re-organizing party members.
- `GetUpgradeXpCost(PartyBase party, int index)` / `GetUpgradeGoldCost(PartyBase party, int index)` — XP / gold cost to upgrade this troop to the `index`-th `UpgradeTargets` entry, from `PartyTroopUpgradeModel`. `party` is the owning party and affects the cost coefficient.

### Cloning and modification

- `CreateFrom(CharacterObject character, StaticBodyProperties? staticBodyProperties = null)` (`static`) — **clone an exclusive copy.** It builds a new `CharacterObject`, copies `_originCharacter`, `_occupation`, `_persona`, `_characterTraits`, `_isMariner`, the equipment template, etc., then `FillFrom(character)` copies equipment. If the source is a hero card and `staticBodyProperties` is supplied, it writes the new card's `HeroObject.StaticBodyProperties`. **This is the standard "clone before you mutate" path.**
- `SetTransferableInPartyScreen(bool)` / `SetTransferableInHideouts(bool)` — toggle whether the character can be moved in the party screen / hideouts, via the `_characterRestrictionFlags` bitmask. If you are on a **shared template**, this change hits every entity referencing it — clone first.
- `ClearAttributes()` — clears attribute points; delegates to `HeroObject.ClearAttributes()` on a hero card (no-op on a troop card).

### Body properties

- `MaxHitPoints()` (`int`) — max HP, rounded from `CharacterStatsModel.MaxHitpoints(this).ResultNumber`. Both card kinds go through the model.
- `HitPoints` (`int`) — hero card returns `HeroObject.HitPoints` (current HP); troop card returns `MaxHitPoints()`.
- `GetBodyProperties(Equipment equipment, int seed = -1)` — hero card returns `HeroObject.BodyProperties`; troop card generates within `GetBodyPropertiesMin/Max` via `FaceGen.GetRandomBodyProperties` (`seed == -1` uses a `StringId` hash for determinism).
- `UpdatePlayerCharacterBodyProperties(BodyProperties properties, int race, bool isFemale)` — **only effective when `IsPlayerCharacter && IsHero`.** Writes `properties` into the player hero's `StaticBodyProperties / Weight / Build / Race / IsFemale` and fires `OnPlayerBodyPropertiesChanged`. This is the entry point for changing the player's appearance.

## Example

### Example 1 — Read a troop template's skills, equipment, and tier

```csharp
CharacterObject troop = CharacterObject.Find("imperial_infantry");
if (troop != null && troop.IsRegular)
{
    int oneHanded = troop.GetSkillValue(DefaultSkills.OneHanded);
    int tier = troop.Tier;
    int wage = troop.TroopWage;
    Equipment battle = troop.FirstBattleEquipment;
    InformationManager.DisplayMessage(new TextObject($"{troop.Name}: 1H {oneHanded}, tier {tier}, wage {wage}"));
}
```

### Example 2 — Clone a shared template to customize an exclusive troop (avoid polluting the original)

```csharp
// Editing Clan.PlayerClan.BasicTroop directly would change every place that basic troop is used — clone first.
CharacterObject customTroop = CharacterObject.CreateFrom(Clan.PlayerClan.BasicTroop);
customTroop.FirstBattleEquipment[EquipmentIndex.Weapon1] =
    new EquipmentElement(MBObjectManager.Instance.GetObject<ItemObject>("javelin")); // give the clone a javelin

// Add the clone to the player party; the original BasicTroop and all its references are untouched.
MobileParty.MainParty.MemberRoster.AddToCounts(customTroop, 20);
```

### Example 3 — Enumerate a culture's cavalry and estimate attack/defense

```csharp
CultureObject culture = Hero.MainHero.Culture;
foreach (CharacterObject cav in CharacterObject.FindAll(c => c.IsRegular && c.IsMounted && c.Culture == culture))
{
    cav.GetSimulationAttackPower(out float atk, out float def, cav.FirstBattleEquipment);
    float power = cav.GetBattlePower();
    // atk / def / power can drive auto-formation or balance debugging
}
```

## Risks

- **Mutating a shared template is global.** `Clan.BasicTroop`, `CultureObject.BasicTroop`, and `CharacterObject.Find(...)` return the XML-registered **singleton**. Writing its `Equipment` slots, calling `SetTransferableInPartyScreen`, changing `Level` (hero card), or its skills makes every party, caravan, and village militia change — and **the change is baked into the save**. Any "give this troop different gear" need must start with `CharacterObject.CreateFrom(template)`.
- **Hero cards and troop cards behave differently.** Most properties (`Equipment`, `Level`, `Culture`, `Occupation`, `Age`, `IsFemale`, `HitPoints`, `GetSkillValue`, `GetTraitLevel`) delegate to `HeroObject` on a hero card but read the template on a troop card. `GetPerkValue` is **always `false` for a troop card.** When writing generic logic, check `IsHero` first, or you may read template defaults instead of the hero's real values.
- **`HeroObject` is `null` for troop templates.** A regular troop has no hero, so `IsHero == false`. Code that assumes "every card has a `HeroObject.Name`" will null-reference on troop cards — branch on `IsHero`. (The `Name` property itself is safe: it returns `HeroObject.Name` when `IsHero`, else the template name.)
- **`Find` can return `null`.** A non-existent `stringId` yields `null`; null-check before touching members.
- **Do not `new CharacterObject()`.** The constructor only does field `Init()` with no XML data, so the resulting card has empty `Culture` / `Equipment` / `Skills`, is never registered with `MBObjectManager`, and never appears in `All`. Use `Find` / `CreateFrom` / `HeroCreator` instead. (`MBObjectManager.Instance.CreateObject<CharacterObject>()` is the engine-internal registration path.)
- **`CreateFrom` is a shallow clone.** It copies references (equipment template, trait `PropertyOwner`, upgrade-target array), not deep copies of each `ItemObject`. Editing a clone's equipment-slot *contents* is safe, but if you accidentally mutate a shared `Equipment` object that the clone still references, you can still affect others.

## Dependencies

`CharacterObject` sits in the campaign data layer and binds closely to the hero/party/clan/culture graph:

- [Hero](../Hero/) — the concrete campaign character instance, two-way bound to its `CharacterObject` (via `HeroObject` / `CharacterObject`).
- [Clan](../Clan/) — `Clan.BasicTroop` returns that clan's default troop template.
- [MobileParty](../MobileParty/) — a party's `MemberRoster` counts units by `CharacterObject`.
- [Campaign](../Campaign/) — `Campaign.Current.Characters` *is* `CharacterObject.All`.
- [CultureObject](../../campaign-ext/CultureObject/) — culture supplies the default troop, voice, and default equipment roster.
- [Equipment](../../core-extra/Equipment/) — the equipment-slot data a `CharacterObject` holds.
- [SkillObject](../../core-extra/SkillObject/) — the parameter type for `GetSkillValue`.
- [ItemObject](../../core/ItemObject/) — the concrete items inside equipment slots.
- [MBObjectBase](../../campaign-ext/MBObjectBase/) — the registered-object base that makes `Find` / `All` work.

## See Also

- ↑ Parent: [Campaign API index](../)
- ↔ Sibling: [Hero](../Hero/), [Clan](../Clan/), [MobileParty](../MobileParty/), [Campaign](../Campaign/)
- ↝ Related: [CultureObject](../../campaign-ext/CultureObject/), [Equipment](../../core-extra/Equipment/), [SkillObject](../../core-extra/SkillObject/), [ItemObject](../../core/ItemObject/)
