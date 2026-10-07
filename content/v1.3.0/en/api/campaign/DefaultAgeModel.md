---
title: "DefaultAgeModel"
description: "Default implementation of AgeModel: defines the campaign's age-threshold constants (infant 3, child 6, teenager 14, coming of age 18, middle adulthood 35, old age 55, max 128) plus 13 occupation tag constants, and computes per-location age windows via GetAgeLimitForLocation."
---

# DefaultAgeModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultAgeModel : AgeModel`
**Base:** `AgeModel` (abstract class, `TaleWorlds.CampaignSystem/ComponentInterfaces/AgeModel.cs:7`, `public abstract class AgeModel : MBGameModel<AgeModel>`)
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultAgeModel.cs` (`:7`, 285 lines total)

## Overview

`DefaultAgeModel` is the **default implementation** of [AgeModel](../AgeModel). It answers two questions: **at what age does a character enter which life stage, and what age window applies to a character of a given occupation and tag at a specific location.** It defines 7 age-threshold constants (infant 3, child 6, teenager 14, coming of age 18, middle adulthood 35, old age 55, hard maximum 128) and 13 `const string` occupation tag constants, and provides `GetAgeLimitForLocation`, which maps a character's `Occupation` plus a free-form tag string to a `[minimumAge, maximumAge]` window.

It is a **read-only rule table**, not a runtime state container. Every threshold is an `override` read-only property (`{ get; }`) fixed at compile time; it cannot be modified at runtime. To change a threshold you must inherit `AgeModel` and replace the model.

## Mental Model

Think of `DefaultAgeModel` as an **"age rule table"**, not as a writable service. All 7 of its properties are `override int { get; }` — no setter, no backing field; each getter returns a literal directly. That has three consequences:

**It is not a runtime setter.** You cannot write `Campaign.Current.Models.AgeModel.BecomeOldAge = 60;` — it will not compile. To change a threshold, inherit `AgeModel`, `override` the relevant property in the derived class to return the new value, then replace the model with `AddModel<AgeModel>(new MyAgeModel())`.

**It is a GameModel decorator.** `AgeModel` derives from `MBGameModel<AgeModel>` (`AgeModel.cs:7`) and is reached through `Campaign.Current.Models.AgeModel`. `Campaign.Current.Models` is an instance of the `GameModels` class; the `AgeModel` property is declared at `TaleWorlds.CampaignSystem/GameModels.cs:384` (`public AgeModel AgeModel { get; private set; }`) and populated via `base.GetGameModel<AgeModel>()` at `GameModels.cs:705`. The official implementation is registered in `SandBoxManager.Initialize` — `gameStarter.AddModel<AgeModel>(new DefaultAgeModel());` (`SandBoxManager.cs:314`).

**Common misuse: trying to modify thresholds at runtime.** You see `BecomeOldAge` return 55 and want 60 — you cannot assign to it; you must go the inherit-and-replace route. A second misuse is **reading `GetAgeLimitForLocation` as "the character's current age"** — it returns the age window for that occupation+tag at a location, not the character's actual age. The actual age is read from `hero.Age`.

**When to use it, and when not to.** Use it when you need to decide which life stage a character is in (infant / child / teenager / adult / middle-aged / old), or when you need the age window for a character of some occupation at some location. Do not use it when you want to *change* the age rules — that requires inheriting `AgeModel` and replacing the model, not editing this class.

## How to Use

### Getting the instance

Source tree path: `bannerlord-1.3.0/TaleWorlds.CampaignSystem/GameComponents/DefaultAgeModel.cs` (`:7`)

Entry point: `Campaign.Current.Models.AgeModel`, declared in `TaleWorlds.CampaignSystem/GameModels.cs:384` and filled by `base.GetGameModel<AgeModel>()` at `GameModels.cs:705`. The official registration lives in `SandBoxManager.Initialize` — `gameStarter.AddModel<AgeModel>(new DefaultAgeModel());` (`SandBoxManager.cs:314`).

```csharp
// Read an age threshold
int oldAge = Campaign.Current.Models.AgeModel.BecomeOldAge;  // 55

// Compute the age window for a character of some occupation + tag
int minAge, maxAge;
Campaign.Current.Models.AgeModel.GetAgeLimitForLocation(character, out minAge, out maxAge, "TavernVisitor");
```

### Typical usage

**Deciding which life stage a character is in:**

```csharp
if (hero.Age < Campaign.Current.Models.AgeModel.BecomeInfantAge)
{
    // infant (< 3)
}
else if (hero.Age < Campaign.Current.Models.AgeModel.BecomeChildAge)
{
    // child (3-6)
}
else if (hero.Age < Campaign.Current.Models.AgeModel.BecomeTeenagerAge)
{
    // teenager (6-14)
}
else if (hero.Age < Campaign.Current.Models.AgeModel.HeroComesOfAge)
{
    // youth (14-18)
}
```

**Getting the age window for a character of some occupation at a location:**

```csharp
int minAge, maxAge;
Campaign.Current.Models.AgeModel.GetAgeLimitForLocation(character, out minAge, out maxAge, "TavernVisitor");
// For a Townsfolk carrying the TavernVisitor tag: minAge=20, maxAge=60
```

### The easiest pitfalls to fall into

**Assuming thresholds are mutable at runtime.** They are not. All properties are `override int { get; }` with no setter. Changing them requires inheriting `AgeModel` and replacing the model.

**Reading `GetAgeLimitForLocation` as "the character's current age".** It returns the age window for that occupation+tag at a location, not the character's actual age. The actual age comes from `hero.Age`.

**Forgetting that `GetAgeLimitForLocation`'s `additionalTags` parameter defaults to `""`.** Passing no tag takes the default branch (usually `HeroComesOfAge` to 70, or `HeroComesOfAge` to `MaxAge` for unrecognised occupations) — it is not "no limit".

**After replacing the model, the official implementation no longer backs you.** `AddModel<T>` hands the previous model in via `gameModel.Initialize(model)`, but that field is `private protected` — your mod, living in another assembly, cannot read it. Either `new` up a copy of the official implementation and forward to it, or your model is the only implementation.

## Key Members

### Age threshold properties (7 override int properties)

| Member | Signature | Source file:line | What this member is for |
| --- | --- | --- | --- |
| `BecomeInfantAge` | `public override int BecomeInfantAge { get; }` | `DefaultAgeModel.cs:11` | Returns the "becomes an infant" age threshold, always `3`. A character younger than this is treated as an infant; used for age checks in education, dialogue, and similar scenarios. |
| `BecomeChildAge` | `public override int BecomeChildAge { get; }` | `DefaultAgeModel.cs:21` | Returns the "becomes a child" age threshold, always `6`. A character below this (but at or above `BecomeInfantAge`) is treated as a child. |
| `BecomeTeenagerAge` | `public override int BecomeTeenagerAge { get; }` | `DefaultAgeModel.cs:31` | Returns the "becomes a teenager" age threshold, always `14`. A character below this (but at or above `BecomeChildAge`) is treated as a teenager. |
| `HeroComesOfAge` | `public override int HeroComesOfAge { get; }` | `DefaultAgeModel.cs:41` | Returns the "hero comes of age" threshold, always `18`. A character at or above this is an adult; used to decide whether a hero may marry, inherit, hold office, and so on. |
| `MiddleAdultHoodAge` | `public override int MiddleAdultHoodAge { get; }` | `DefaultAgeModel.cs:51` | Returns the "middle adulthood" age threshold, always `35`. A character at or above this is treated as middle-aged; used for branching in some dialogue and events. |
| `BecomeOldAge` | `public override int BecomeOldAge { get; }` | `DefaultAgeModel.cs:61` | Returns the "becomes an old person" age threshold, always `55`. A character at or above this is treated as old; used in the death-probability calculation (`AgingCampaignBehavior`) and some dialogue branches. |
| `MaxAge` | `public override int MaxAge { get; }` | `DefaultAgeModel.cs:71` | Returns the hard maximum age for a character, always `128`. Used as the default upper bound in `GetAgeLimitForLocation` and as the ceiling in some age calculations. |

### Method (1 override method)

| Member | Signature | Source file:line | What this member is for |
| --- | --- | --- | --- |
| `GetAgeLimitForLocation` | `public override void GetAgeLimitForLocation(CharacterObject character, out int minimumAge, out int maximumAge, string additionalTags = "")` | `DefaultAgeModel.cs:80` | Computes the age window for a character at a specific location from the character's `Occupation` and `additionalTags`, returned via the `out` parameters. The logic splits into four branches: (1) `TavernWench` is pinned to 20-28; (2) `Townsfolk` is subdivided by tag — `TavernVisitor` 20-60, `TavernDrinker` 20-40, `SlowTownsman` 50-70, `TownsfolkCarryingStuff` 20-40, `BroomsWoman` 30-45, `Dancer` 20-28, `Beggar` 60-90, `Child` 6-14, `Teenager` 14-18, `Infant` 3-6, `Notary`/`Barber` 30-80, default 18-70; (3) `Villager` is similar but with a smaller tag set — `TownsfolkCarryingStuff` 20-40, `Child` 6-14, `Teenager` 14-18, `Infant` 3-6, default 18-70; (4) other occupations — `TavernGameHost` 30-40, `Musician` 20-40, `ArenaMaster` 30-60, `ShopWorker` 18-50, `Tavernkeeper` 40-80, `RansomBroker` 30-60, `Blacksmith`/`GoodsTrader`/`HorseTrader`/`Armorer`/`Weaponsmith` 30-80, `AlleyGangMember` tag 30-40, default 18-128. Note that the `Child`, `Teenager`, and `Infant` windows are derived from the threshold properties above, not hard-coded — moving a threshold moves those windows with it. |

### Tag constants (13 public const string)

| Member | Signature | Source file:line | What this member is for |
| --- | --- | --- | --- |
| `TavernVisitorTag` | `public const string TavernVisitorTag = "TavernVisitor"` | `DefaultAgeModel.cs:247` | Tavern visitor tag constant. Passed as `additionalTags` to `GetAgeLimitForLocation` to mark a character as a visitor who came to the tavern to spend money; corresponds to ages 20-60. |
| `TavernDrinkerTag` | `public const string TavernDrinkerTag = "TavernDrinker"` | `DefaultAgeModel.cs:250` | Tavern drinker tag constant. Marks a character as a guest who came to the tavern to drink; corresponds to ages 20-40. |
| `SlowTownsmanTag` | `public const string SlowTownsmanTag = "SlowTownsman"` | `DefaultAgeModel.cs:253` | Slow townsman tag constant. Marks a character as an elderly townsfolk who moves slowly; corresponds to ages 50-70. |
| `TownsfolkCarryingStuffTag` | `public const string TownsfolkCarryingStuffTag = "TownsfolkCarryingStuff"` | `DefaultAgeModel.cs:256` | Carrying-stuff townsman tag constant. Marks a character as a porter; corresponds to ages 20-40. |
| `BroomsWomanTag` | `public const string BroomsWomanTag = "BroomsWoman"` | `DefaultAgeModel.cs:259` | Brooms woman tag constant. Marks a character as a female townsfolk carrying a broom; corresponds to ages 30-45. |
| `DancerTag` | `public const string DancerTag = "Dancer"` | `DefaultAgeModel.cs:262` | Dancer tag constant. Marks a character as a tavern dancer; corresponds to ages 20-28. |
| `BeggarTag` | `public const string BeggarTag = "Beggar"` | `DefaultAgeModel.cs:265` | Beggar tag constant. Marks a character as a beggar; corresponds to ages 60-90. |
| `ChildTag` | `public const string ChildTag = "Child"` | `DefaultAgeModel.cs:268` | Child tag constant. Marks a character as a child; corresponds to `BecomeChildAge`-`BecomeTeenagerAge` (ages 6-14). |
| `TeenagerTag` | `public const string TeenagerTag = "Teenager"` | `DefaultAgeModel.cs:271` | Teenager tag constant. Marks a character as a teenager; corresponds to `BecomeTeenagerAge`-`HeroComesOfAge` (ages 14-18). |
| `InfantTag` | `public const string InfantTag = "Infant"` | `DefaultAgeModel.cs:274` | Infant tag constant. Marks a character as an infant; corresponds to `BecomeInfantAge`-`BecomeChildAge` (ages 3-6). |
| `NotaryTag` | `public const string NotaryTag = "Notary"` | `DefaultAgeModel.cs:277` | Notary tag constant. Marks a character as a notary; corresponds to ages 30-80. |
| `BarberTag` | `public const string BarberTag = "Barber"` | `DefaultAgeModel.cs:280` | Barber tag constant. Marks a character as a barber; corresponds to ages 30-80. |
| `AlleyGangMemberTag` | `public const string AlleyGangMemberTag = "AlleyGangMember"` | `DefaultAgeModel.cs:283` | Alley gang member tag constant. Marks a character as an alley gang member; corresponds to ages 30-40. Used by `AlleyCampaignBehavior` to compute the age window for gang members. |

## Real Examples

The following examples are all copied from real call sites in the `bannerlord-1.3.0` source tree; nothing is invented.

**Example 1: calling `GetAgeLimitForLocation` via `Campaign.Current.Models.AgeModel` (with tag)**

```csharp
Campaign.Current.Models.AgeModel.GetAgeLimitForLocation(character, ref num, ref num2, "AlleyGangMember");
```

- Source: `bannerlord-1.3.0/SandBox/CampaignBehaviors/AlleyCampaignBehavior.cs:384`
- What it does: computes the age window for an alley gang member character, passing the `"AlleyGangMember"` tag, which corresponds to ages 30-40.

**Example 2: calling `GetAgeLimitForLocation` via `Campaign.Current.Models.AgeModel` (no tag)**

```csharp
Campaign.Current.Models.AgeModel.GetAgeLimitForLocation(townsman, ref num, ref num2, "");
```

- Source: `bannerlord-1.3.0/SandBox/CampaignBehaviors/CommonTownsfolkCampaignBehavior.cs:371`
- What it does: computes the age window for an ordinary townsman with no additional tag, taking the default branch (ages 18-70).

**Example 3: reading `HeroComesOfAge` to decide whether a hero is an adult**

```csharp
if (heroObject != Hero.MainHero && !heroObject.IsPrisoner && !heroObject.IsWounded && heroObject.Age >= (float)Campaign.Current.Models.AgeModel.HeroComesOfAge && !flag)
```

- Source: `bannerlord-1.3.0/SandBox/CampaignBehaviors/ClanMemberRolesCampaignBehavior.cs:451`
- What it does: checks whether a hero's age has reached the coming-of-age threshold (18), used in the clan member role assignment logic.

**Example 4: reading `BecomeOldAge` to decide whether a hero is old**

```csharp
if (hero.IsAlive && hero.Age >= (float)Campaign.Current.Models.AgeModel.BecomeOldAge && !CampaignOptions.IsLifeDeathCycleDisabled && hero.DeathMark == KillCharacterAction.KillCharacterActionDetail.None && MBRandom.RandomFloat < hero.ProbabilityOfDeath)
```

- Source: `bannerlord-1.3.0/TaleWorlds.CampaignSystem/CampaignBehaviors/AgingCampaignBehavior.cs:305`
- What it does: checks whether a hero's age has reached the old-age threshold (55), used in the death-probability calculation.

**Example 5: reading `BecomeInfantAge` to decide whether a character is an infant**

```csharp
if (character.Age < (float)Campaign.Current.Models.AgeModel.BecomeInfantAge)
```

- Source: `bannerlord-1.3.0/SandBox.GauntletUI/GauntletEducationScreen.cs:335`
- What it does: checks whether a character's age is below the infant threshold (3), used in the education screen's display logic.

**Example 6: reading `BecomeTeenagerAge` to decide whether a villager is a teenager**

```csharp
return Campaign.Current.ConversationManager.OneToOneConversationAgent.Age < (float)Campaign.Current.Models.AgeModel.BecomeTeenagerAge;
```

- Source: `bannerlord-1.3.0/SandBox/CampaignBehaviors/CommonVillagersCampaignBehavior.cs:528`
- What it does: checks whether a villager's age is below the teenager threshold (14), used for branching in conversation behavior.

## See Also

- [AgeModel](../AgeModel) — abstract base class defining the contract `DefaultAgeModel` implements
- [AgingCampaignBehavior](../AgingCampaignBehavior) — consumes `BecomeOldAge` in the death-probability calculation
- [GameModels](../GameModels) — the `Campaign.Current.Models` container that exposes the `AgeModel` property
- [Campaign API section](./) — full index of the campaign module

## Navigation

- **Parent:** [Campaign API index](./)
- **Sibling pages:** [AgeModel](../AgeModel), [AgingCampaignBehavior](../AgingCampaignBehavior), [AlleyModel](../AlleyModel), [DefaultAlleyModel](../DefaultAlleyModel), [GameModels](../GameModels)
- **Version home:** [v1.3.0 home](../../)
