---
title: "PerkObject"
description: "A perk data object in Bannerlord, bound to a skill with an unlock level and a mutually-exclusive alternative; enumerate via PerkObject.All and test acquisition with GetPerkValue."
---

# PerkObject

**Namespace:** TaleWorlds.CampaignSystem.CharacterDevelopment
**Module:** TaleWorlds.CampaignSystem
**Type:** `public sealed class PerkObject : PropertyObject`
**Base:** `PropertyObject` (which derives from `MBObjectBase`)
**File:** `TaleWorlds.CampaignSystem.CharacterDevelopment/PerkObject.cs`

## Overview

`PerkObject` is one **perk data entry** in the Bannerlord campaign: each perk hangs under one `SkillObject`, has a required skill level `RequiredSkillValue` to unlock, and a mutually-exclusive `AlternativePerk`. It is declared in XML (`spc_perks.xml`), loaded by `MBObjectManager` at campaign start into `Campaign.Current.AllPerks`, and you then get all loaded perks through the static entry `PerkObject.All`.

One thing to understand especially: a perk itself **has no "effect method."** It only carries descriptive data — "which skill this perk belongs to, how much it adds, what bonus type, on which troop type." The actual numeric bonuses are applied by campaign models and `PerkHelper` at resolution time, which call `character.GetPerkValue(perk)` to check whether the character has acquired it, then apply the corresponding `PerkEffect` subclass. So when you read `PerkObject`, you are reading "a perk card," not "a piece of logic."

## Mental Model

Think of `PerkObject` as **"a small cell on the skill tree":**

- It is **read-only data**. All properties are `get` (private setters); only `Initialize(...)` is called internally during XML loading to fill values — mods should **not** `new PerkObject` or call `Initialize`.
- Its lifecycle follows the campaign: `spc_perks.xml` → `MBObjectManager` loads → into `Campaign.Current.AllPerks` → exposed globally via `PerkObject.All`. `Campaign` filters out `IsTrash` (dirty data with no name / description or no bound skill) at load time, so everything you get from `PerkObject.All` is a "real perk."
- It belongs to the **Campaign / Character Development** layer and does not enter a Mission; once in battle, the perk's bonus is applied indirectly to `Agent` resolution via models / `PerkHelper`, not driven by `PerkObject` itself.
- Whether a character "has" a perk is not a field but a **judgment**: `hero.GetPerkValue(perk)` returns `bool`. Behind it, it queries the acquired-perk set recorded by `HeroDeveloper`, not state on `PerkObject`.

## How to get a PerkObject

```csharp
// 1) Enumerate all perks (IsTrash already filtered out)
foreach (PerkObject perk in PerkObject.All)
{
    // perk.Skill / perk.RequiredSkillValue / perk.AlternativePerk ...
}

// 2) Get "one known perk" directly via the DefaultPerks static references
PerkObject duelist = DefaultPerks.OneHanded.Duelist;
PerkObject bladeMaster = DefaultPerks.TwoHanded.BladeMaster;

// 3) To find "all perks under a skill": there is NO SkillObject.PerkObjects property,
//    you must iterate All and filter by Skill
SkillObject skill = DefaultSkills.Steward;
var perksOfSkill = PerkObject.All.Where(p => p.Skill == skill).ToList();
```

> Note: `SkillObject.PerkObjects` does not exist. To find perks by skill, iterate `PerkObject.All` and filter with `perk.Skill == skill`.

## Main properties

| Property | Type | Description | When to care |
|----------|------|-------------|--------------|
| `All` | `static MBReadOnlyList<PerkObject>` | All loaded perks (`Campaign.Current.AllPerks`). | The only entry point for enumerating / finding perks. |
| `Skill` | `SkillObject` | The skill this perk belongs to. | Determining perk ownership, grouping by skill. |
| `RequiredSkillValue` | `float` | Skill level required to unlock. | Judging whether the unlock condition is met. |
| `AlternativePerk` | `PerkObject` | Mutually-exclusive alternative (choose one of two). | Judging whether two perks conflict. |
| `PrimaryRole` | `PartyRole` | The role the primary bonus applies to (individual / commander / clan elder / governor, etc.). | Used with `PerkHelper` to apply bonuses. |
| `SecondaryRole` | `PartyRole` | The role the secondary bonus applies to. | Same as above. |
| `PrimaryBonus` | `float` | The primary bonus value. | Reading perk strength. |
| `SecondaryBonus` | `float` | The secondary bonus value. | Same as above. |
| `PrimaryIncrementType` | `EffectIncrementType` | The type of primary bonus (additive / percentage, etc.). | Understanding how the bonus is computed. |
| `SecondaryIncrementType` | `EffectIncrementType` | The type of secondary bonus. | Same as above. |
| `PrimaryTroopUsageMask` | `TroopUsageFlags` | Troop-type mask the primary bonus applies to. | Troop / unit-related bonuses. |
| `SecondaryTroopUsageMask` | `TroopUsageFlags` | Troop-type mask the secondary bonus applies to. | Same as above. |
| `PrimaryDescription` | `TextObject` | Primary effect description text (with `{VALUE}` already substituted). | Showing the explanation to the player. |
| `SecondaryDescription` | `TextObject` | Secondary effect description text. | Same as above. |
| `IsTrash` | `bool` | Whether this is dirty data (missing name / description or unbound skill). Never appears in `All`. | Debugging XML issues. |

## Main methods

### `public static MBReadOnlyList<PerkObject> All`

Static enumerator returning all "valid" perks in the campaign. Under the hood it is `Campaign.Current.AllPerks`. It is the only public entry point for finding perks; do not cache it in your mod and then bypass `Campaign` to maintain your own list.

```csharp
int countUnlockedByMain = 0;
foreach (PerkObject perk in PerkObject.All)
{
    if (Hero.MainHero.GetPerkValue(perk))
        countUnlockedByMain++;
}
```

### `public bool GetPerkValue(PerkObject perk)` (on `Hero` / `CharacterObject` / `HeroDeveloper`)

Judges whether the character has **acquired** this perk. Returns `bool`, not a level, not an int. For a `CharacterObject`, it delegates to `HeroObject` only when it is a hero (`IsHero`); non-hero characters always return `false`.

```csharp
// Correct: bool judgment
bool hasDuelist = Hero.MainHero.GetPerkValue(DefaultPerks.OneHanded.Duelist);
if (hasDuelist)
{
    // The character picked this perk; go down the matching branch
}

// Wrong: GetPerkValue returns bool, cannot be used as a level
// int lvl = hero.GetPerkValue(DefaultPerks.OneHanded.Duelist); // compile / semantic error
```

### `public void Initialize(...)` (internal call, mods must not use)

Called by `MBObjectManager` during XML loading to fill in name, skill, required level, alternative, primary / secondary bonus, and descriptions. Its setters are all private; a mod cannot and should not re-initialize an already-loaded perk. To add a perk, declare it in `spc_perks.xml` (or your mod's own XML patch), not `new` + `Initialize` in code.

### `public override string ToString()`

Returns the perk's display name (`Name`), falling back to `StringId` if the name is missing. Handy when printing perks directly in debug logs.

```csharp
InformationManager.DisplayMessage(new InformationMessage($"Unlocked: {DefaultPerks.TwoHanded.BladeMaster}"));
```

## How unlock conditions are actually computed

"Meets the unlock condition" and "has already acquired" are two different things, often confused by mods:

- **Meets unlock**: `(float)hero.GetSkillValue(perk.Skill) >= perk.RequiredSkillValue`, and the perk is not yet acquired, and (if there is an alternative) the alternative is also not acquired.
- **Already acquired**: `hero.GetPerkValue(perk) == true`.

Do not assume a character owns a perk just because "the skill level is high enough" — they may not have picked it on level-up, or its `AlternativePerk` may already be picked. The engine itself does this double-check in `HeroDeveloper.SelectPerks`.

```csharp
PerkObject perk = DefaultPerks.Steward.GivingHands;
bool meetsRequirement =
    (float)Hero.MainHero.GetSkillValue(perk.Skill) >= perk.RequiredSkillValue;
bool alreadyTaken = Hero.MainHero.GetPerkValue(perk);

if (meetsRequirement && !alreadyTaken)
{
    // This perk can be chosen by the character on the next level-up; but it is not necessarily chosen yet
}
```

## Typical usage examples

### Example 1: query whether a character has acquired a set of perks

```csharp
using TaleWorlds.CampaignSystem.CharacterDevelopment;

Hero hero = Hero.MainHero;

// Judge directly with a known perk
if (hero.GetPerkValue(DefaultPerks.OneHanded.Duelist))
{
    // The hero picked "Duelist"
}

// Iterate all perks under a skill, count how many the hero has taken
SkillObject steward = DefaultSkills.Steward;
int taken = 0;
foreach (PerkObject p in PerkObject.All.Where(x => x.Skill == steward))
{
    if (hero.GetPerkValue(p))
        taken++;
}
```

### Example 2: apply a perk bonus in resolution (leave it to PerkHelper, don't read fields yourself)

```csharp
using TaleWorlds.CampaignSystem.CharacterDevelopment;
using TaleWorlds.CampaignSystem.Helpers;

// When computing a character's morale bonus while leading troops, let PerkHelper judge and apply
ExplainedNumber morale = new ExplainedNumber();
PerkHelper.AddPerkBonusForCharacter(
    DefaultPerks.Leadership.AlphaLeadership,
    character,
    isPrimaryBonus: true,
    ref morale);
// PerkHelper internally calls character.GetPerkValue(perk);
// only if the character truly acquired the perk does it add the PrimaryBonus.
```

## Dependencies

- Upstream types: [MBObjectManager](../MBObjectManager/) loads every `PerkObject` from `spc_perks.xml` into `Campaign.Current.AllPerks` at campaign start; its root class is [MBObjectBase](../MBObjectBase/).
- Associated data: [SkillObject](../../core-extra/SkillObject/) decides each perk's ownership and unlock skill; [CharacterObject](../../campaign/CharacterObject/) and its `Hero` hold the "acquired?" judgment (`GetPerkValue`).
- Downstream systems: perk values are read and applied by campaign models and [PerkHelper](../PerkHelper/) during resolution (attributes, troop leading, town, captain bonuses, etc.) via `GetPerkValue`; selection / reset is driven by [PerkResetCampaignBehavior](../PerkResetCampaignBehavior/) and others.
- Same-bucket related: [DefaultPerks](../DefaultPerks/) (static references to all built-in perks), [PerkAlternativeType](../PerkAlternativeType/) (alternative-relation enum).

## Risks and notes

- **Do not `new PerkObject` / call `Initialize`**: perks are loaded uniformly by XML + `MBObjectManager`; a manually constructed instance is not included in `Campaign.Current.AllPerks` and participates in no resolution.
- **`GetPerkValue` returns `bool`, not a level**: assigning it to an `int` is a semantic error; to see "skill level" use `hero.GetSkillValue(perk.Skill)`.
- **Do not assume "level high enough = acquired"**: meeting the unlock condition only means "can be chosen," not "already chosen." The two must be judged separately.
- **`SkillObject.PerkObjects` does not exist**: to find perks by skill you must iterate `PerkObject.All` and filter with `perk.Skill == skill`.
- **Save-related**: acquired perks are saved with `Hero`; a perk id changed / deleted in `spc_perks.xml` can invalidate references pointing to it in old saves — keep defensive judgment on `GetPerkValue` results when upgrading or loading.
- **`IsTrash` is already filtered by Campaign**: `PerkObject.All` never contains dirty data with `IsTrash == true`; but if you read `MBObjectManager.Instance.GetObjectTypeList<PerkObject>()` directly, you get the unfiltered full set and must exclude it yourself.

## Cross-version notes

- v1.3.0: the public API is essentially the same as 1.4.5 (`All` / properties / `Initialize` / `ToString` shapes match). Internal difference: `Initialize` in 1.3.0 writes the `{VALUE}` text variable via `PerkHelper.SetDescriptionTextVariable`, while 1.3.15 / 1.4.5 use `StringHelpers.SetEffectIncrementTypeTextVariable`; transparent to mods.
- v1.3.15 / v1.4.5: `IsTrash`'s null-check order was slightly refactored, but the semantics "missing name / description or unbound skill = trash" are unchanged.
- For cross-version mods, always access via `PerkObject.All` and `DefaultPerks.*`; do not depend on any internal field.

## Navigation

- ↑ Parent (this bucket index): [campaign-ext](../)
- ↔ Siblings (campaign-ext bucket): [PerkHelper](../PerkHelper/), [PerkResetCampaignBehavior](../PerkResetCampaignBehavior/), [PerkAlternativeType](../PerkAlternativeType/), [DefaultPerks](../DefaultPerks/), [PolicyObject](../PolicyObject/)
- Related classes: [SkillObject](../../core-extra/SkillObject/) (perk's owning skill), [CharacterObject](../../campaign/CharacterObject/) (acquisition judgment), [MBObjectManager](../MBObjectManager/) (load entry), [MBObjectBase](../MBObjectBase/) (root class)
