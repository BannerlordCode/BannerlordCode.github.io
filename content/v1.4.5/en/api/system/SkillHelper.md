---
title: "SkillHelper"
description: "Applies SkillEffect values to explained Campaign statistics for characters, parties, and towns."
---
# SkillHelper

**Namespace:** `Helpers`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public static class SkillHelper`  
**Base:** `System.Object`  
**Source:** `bin/TaleWorlds.CampaignSystem/Helpers/SkillHelper.cs`

## One-sentence responsibility

`SkillHelper` resolves a skill holder, evaluates a [SkillEffect](../../campaign/SkillEffect), and adds the result to an [ExplainedNumber](../../campaign/ExplainedNumber) supplied by the calling model.

## Mental Model

This is a calculation bridge, not a skill progression or persistence service. The caller owns the base statistic and passes it by `ref`; `SkillHelper` reads a skill value, asks the `SkillEffect` for its value at that level, and applies either an additive number or an additive factor. The helper does not change the character's skill, the party roster, or the town.

The role-aware overloads are deliberately different:

- Party calculation resolves a `PartyRole` holder, with a leader fallback when no role holder is available.
- Town calculation only recognizes `ClanLeader` and `Governor` roles.
- Character calculation uses the supplied `CharacterObject` directly.
- Skill-level calculation uses an explicit integer and does not resolve any holder.

## When to use and when not to use

- **Use it:** inside a model or calculation pipeline that already has an `ExplainedNumber` and needs one skill effect contribution.
- **Use it:** with `IncludeDescriptions` enabled when the caller wants role labels in the explanation lines.
- **Do not use it:** to raise a skill. It reads skill values and changes only the temporary explained statistic.
- **Do not use it:** as a replacement for the owning model's role or eligibility checks. A town overload with an unsupported role contributes nothing.
- **Do not pass a null character:** `AddSkillBonusForCharacter` immediately reads the character's skill value.

## Public entries

### `AddSkillBonusForSkillLevel`

```csharp
public static void AddSkillBonusForSkillLevel(
    SkillEffect skillEffect,
    ref ExplainedNumber explainedNumber,
    int skillLevel)
```

Evaluates `skillEffect.GetSkillEffectValue(skillLevel)` and adds it to the statistic using the effect's `IncrementType`.

### `AddSkillBonusForParty`

```csharp
public static void AddSkillBonusForParty(
    SkillEffect skillEffect,
    MobileParty party,
    ref ExplainedNumber explainedNumber)
```

For a party role, the helper first prefers the party leader for `PartyLeader`. Otherwise it asks the party for the effective role holder; if that is absent, it falls back to `GetEffectivePartyLeaderForSkill(party.Party)`. If no character can be resolved, the statistic is unchanged.

### `AddSkillBonusForTown`

```csharp
public static void AddSkillBonusForTown(
    SkillEffect skillEffect,
    Town town,
    ref ExplainedNumber explainedNumber)
```

`ClanLeader` resolves through the town owner's settlement owner clan. `Governor` resolves through `town.Governor`. Other roles leave the statistic unchanged, even if the town has another relevant character.

### `AddSkillBonusForCharacter`

```csharp
public static void AddSkillBonusForCharacter(
    SkillEffect skillEffect,
    CharacterObject character,
    ref ExplainedNumber explainedNumber)
```

Reads `character.GetSkillValue(skillEffect.EffectedSkill)`, evaluates the effect, and applies it to the supplied statistic.

### `GetEffectDescriptionForSkillLevel`

```csharp
public static TextObject GetEffectDescriptionForSkillLevel(
    SkillEffect effect,
    int level)
```

Evaluates the effect at `level`, multiplies `AddFactor` values by `100` for display, formats the absolute value to one decimal place, writes it to the effect description's `a0` variable, and returns that same `TextObject`.

### `GetEffectivePartyLeaderForSkill`

```csharp
public static CharacterObject GetEffectivePartyLeaderForSkill(PartyBase party)
```

Returns the party leader's `CharacterObject`. If there is no leader, it returns the character at roster index `0` when the roster has men; null party, missing roster, and empty roster all return `null`.

## Real Campaign calculation flows

The stock models pass real Campaign effects and a mutable explained statistic. This party-size-shaped example follows `DefaultPartySizeLimitModel`:

```csharp
using Helpers;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.Core;

ExplainedNumber partySize = new ExplainedNumber(20f, includeDescriptions: true);
SkillHelper.AddSkillBonusForParty(
    DefaultSkillEffects.StewardPartySizeBonus,
    MobileParty.MainParty,
    ref partySize);

int calculatedPartySize = (int)partySize.ResultNumber;
```

The same boundary applies to town and character calculations:

```csharp
ExplainedNumber relationIncrease = new ExplainedNumber(20f);
SkillHelper.AddSkillBonusForCharacter(
    DefaultSkillEffects.CharmRelationBonus,
    Hero.MainHero.CharacterObject,
    ref relationIncrease);
```

These calls contribute to a calculation owned by the caller. They do not write the result back to a model or save it automatically.

## Dependencies and ownership

- [SkillEffect](../../campaign/SkillEffect) supplies the affected skill, role, increment type, description, and level-to-value calculation.
- [ExplainedNumber](../../campaign/ExplainedNumber) owns the base number, factor/additive lines, and final result; `SkillHelper` mutates it by reference.
- [MobileParty](../../campaign/MobileParty), [Town](../../campaign/Town), [CharacterObject](../../campaign/CharacterObject), and [PartyBase](../../campaign/PartyBase) provide the role or character context.
- `DefaultSkillEffects` supplies stock effects; the calling model owns base values and decides when to include descriptions.
- `GameTexts.FindText("role", ...)` is used only when `ExplainedNumber.IncludeDescriptions` is true, so explanation labels are optional presentation metadata.

## Risks and save boundaries

- `EffectIncrementType.Add` calls `ExplainedNumber.Add`; `AddFactor` calls `ExplainedNumber.AddFactor`. Treat these as different arithmetic contracts, not interchangeable formatting choices.
- A factor's human-readable description is multiplied by `100`, but the actual factor is passed to `AddFactor` unchanged.
- A missing party role holder or town governor/clan leader silently produces no contribution. Validate the resolved holder when a result is expected.
- `GetEffectivePartyLeaderForSkill` uses the first character in a leaderless non-empty roster; roster order therefore affects the fallback.
- `GetEffectDescriptionForSkillLevel` mutates the effect's description text variable `a0`; it does not clone the `TextObject`.
- The helper has no fields or save contract. The resulting `ExplainedNumber` is temporary calculation state, not persistent Campaign state.

## Version note

This page follows v1.4.5 `SkillHelper.cs`. The six public entries are calculation and presentation helpers; skill progression, effect definitions, role assignment, and persistence belong to their owning systems.

## Navigation

- [↑ API system index](../)
- [Related: SkillEffect](../../campaign/SkillEffect)
- [Related: ExplainedNumber](../../campaign/ExplainedNumber)
- [Related: MobileParty](../../campaign/MobileParty)
- [Related: Town](../../campaign/Town)
- [Related: CharacterObject](../../campaign/CharacterObject)
