---
title: "DefaultCharacterDevelopmentModel"
description: "Auto-generated class reference for DefaultCharacterDevelopmentModel."
---
# DefaultCharacterDevelopmentModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultCharacterDevelopmentModel : CharacterDevelopmentModel`
**Base:** `CharacterDevelopmentModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultCharacterDevelopmentModel.cs`

## Overview

`DefaultCharacterDevelopmentModel` is the progression engine: the XP curve, the level curve, and the rules for learning a skill faster than its cap. The two curves are precomputed once in the constructor into lookup arrays (`TaleWorlds.CampaignSystem/GameComponents/DefaultCharacterDevelopmentModel.cs:19`, `:20`) rather than calculated per call — the XP table is built by an accelerating loop that adds 1000 more to its step on each iteration (`:28`, `:30`, `:31`), and the skills-required table uses the same accelerating shape (`:24`–`:33`). Learning speed is a two-part formula: attributes give an average multiplier of `0.4 × mean(attribute)` on top of a base `1.25f` (`:254`, `:261`), and each point of focus gives a further factor of 1 (`:263`) — but once a skill is above its learning limit the rate takes a `−1 − 0.1 × overage` penalty (`:266`), which is why a skill can sit frozen above its cap. The limit itself is `max(0, (mean(attribute) − 1) × 10) + focus × 30`, floored at zero (`:245`, `:246`, `:247`). Character start is 15 attribute points, 5 focus, one focus per level and four levels per attribute point (`:179`, `:209`, `:199`, `:189`).

## Mental Model

Understand the cap as the point of the whole design: `CalculateLearningLimit` is read by `CalculateLearningRate` itself at `:262`, so the rate depends on the limit, the limit depends on attributes and focus, and a hero whose skill value exceeds the limit pays a compounding penalty for every point of overage. That is why maxing an attribute matters — raising an attribute raises the cap at 10 points per attribute point and raises the rate at 0.4 per point simultaneously. Two implementation details decide what an override must preserve. `GetSkillLevelChange` walks the XP table forward from the hero's current value and stops at the first level the XP does not reach (`:105`–`:115`), so the table's monotonicity is a precondition for the loop terminating; and `GetMaxSkillPoint` returns `int.MaxValue` (`:71`) with `SkillsRequiredForLevel` treating anything above level 62 as uncapped (`:61`, `:62`), so the arrays are finite while the progression is not. The model also makes policy choices that read as arbitrary and are not: trait XP is clamped to ±6000 or ±2500 depending on whether the trait supports the extreme value (`:131`, `:132`), and `GetNextPerkToChoose` picks between a perk and its alternative on an even coin flip (`:353`, `:354`).

## Key Properties

| Name | Signature |
|------|-----------|
| `MaxFocusPerSkill` | `public override int MaxFocusPerSkill { get; }` |
| `MaxAttribute` | `public override int MaxAttribute { get; }` |
| `AttributePointsAtStart` | `public override int AttributePointsAtStart { get; }` |
| `LevelsPerAttributePoint` | `public override int LevelsPerAttributePoint { get; }` |
| `FocusPointsPerLevel` | `public override int FocusPointsPerLevel { get; }` |
| `FocusPointsAtStart` | `public override int FocusPointsAtStart { get; }` |
| `MaxSkillRequiredForEpicPerkBonus` | `public override int MaxSkillRequiredForEpicPerkBonus { get; }` |
| `MinSkillRequiredForEpicPerkBonus` | `public override int MinSkillRequiredForEpicPerkBonus { get; }` |

## Key Methods

### SkillsRequiredForLevel
`public override int SkillsRequiredForLevel(int level)`

**Purpose:** Executes the SkillsRequiredForLevel logic.

```csharp
DefaultCharacterDevelopmentModel defaultCharacterDevelopmentModel = ...;
var result = defaultCharacterDevelopmentModel.SkillsRequiredForLevel(0);
```

### GetMaxSkillPoint
`public override int GetMaxSkillPoint()`

**Purpose:** Reads and returns the max skill point value held by this instance.

```csharp
DefaultCharacterDevelopmentModel defaultCharacterDevelopmentModel = ...;
var result = defaultCharacterDevelopmentModel.GetMaxSkillPoint();
```

### GetXpRequiredForSkillLevel
`public override int GetXpRequiredForSkillLevel(int skillLevel)`

**Purpose:** Reads and returns the xp required for skill level value held by this instance.

```csharp
DefaultCharacterDevelopmentModel defaultCharacterDevelopmentModel = ...;
var result = defaultCharacterDevelopmentModel.GetXpRequiredForSkillLevel(0);
```

### GetSkillLevelChange
`public override int GetSkillLevelChange(Hero hero, SkillObject skill, float skillXp)`

**Purpose:** Reads and returns the skill level change value held by this instance.

```csharp
DefaultCharacterDevelopmentModel defaultCharacterDevelopmentModel = ...;
var result = defaultCharacterDevelopmentModel.GetSkillLevelChange(hero, skill, 0);
```

### GetXpAmountForSkillLevelChange
`public override int GetXpAmountForSkillLevelChange(Hero hero, SkillObject skill, int skillLevelChange)`

**Purpose:** Reads and returns the xp amount for skill level change value held by this instance.

```csharp
DefaultCharacterDevelopmentModel defaultCharacterDevelopmentModel = ...;
var result = defaultCharacterDevelopmentModel.GetXpAmountForSkillLevelChange(hero, skill, 0);
```

### GetTraitLevelForTraitXp
`public override void GetTraitLevelForTraitXp(Hero hero, TraitObject trait, int xpValue, out int traitLevel, out int clampedTraitXp)`

**Purpose:** Reads and returns the trait level for trait xp value held by this instance.

```csharp
DefaultCharacterDevelopmentModel defaultCharacterDevelopmentModel = ...;
defaultCharacterDevelopmentModel.GetTraitLevelForTraitXp(hero, trait, 0, traitLevel, clampedTraitXp);
```

### GetTraitXpRequiredForTraitLevel
`public override int GetTraitXpRequiredForTraitLevel(TraitObject trait, int traitLevel)`

**Purpose:** Reads and returns the trait xp required for trait level value held by this instance.

```csharp
DefaultCharacterDevelopmentModel defaultCharacterDevelopmentModel = ...;
var result = defaultCharacterDevelopmentModel.GetTraitXpRequiredForTraitLevel(trait, 0);
```

### CalculateLearningLimit
`public override ExplainedNumber CalculateLearningLimit(IReadOnlyPropertyOwner<CharacterAttribute> characterAttributes, int focusValue, SkillObject skill, bool includeDescriptions = false)`

**Purpose:** Calculates the current value or result of learning limit.

```csharp
DefaultCharacterDevelopmentModel defaultCharacterDevelopmentModel = ...;
var result = defaultCharacterDevelopmentModel.CalculateLearningLimit(characterAttributes, 0, skill, false);
```

### CalculateLearningRate
`public override ExplainedNumber CalculateLearningRate(IReadOnlyPropertyOwner<CharacterAttribute> characterAttributes, int focusValue, int skillValue, SkillObject skill, bool includeDescriptions = false)`

**Purpose:** Calculates the current value or result of learning rate.

```csharp
DefaultCharacterDevelopmentModel defaultCharacterDevelopmentModel = ...;
var result = defaultCharacterDevelopmentModel.CalculateLearningRate(characterAttributes, 0, 0, skill, false);
```

### GetNextSkillToAddFocus
`public override SkillObject GetNextSkillToAddFocus(Hero hero)`

**Purpose:** Reads and returns the next skill to add focus value held by this instance.

```csharp
DefaultCharacterDevelopmentModel defaultCharacterDevelopmentModel = ...;
var result = defaultCharacterDevelopmentModel.GetNextSkillToAddFocus(hero);
```

### GetNextAttributeToUpgrade
`public override CharacterAttribute GetNextAttributeToUpgrade(Hero hero)`

**Purpose:** Reads and returns the next attribute to upgrade value held by this instance.

```csharp
DefaultCharacterDevelopmentModel defaultCharacterDevelopmentModel = ...;
var result = defaultCharacterDevelopmentModel.GetNextAttributeToUpgrade(hero);
```

### GetNextPerkToChoose
`public override PerkObject GetNextPerkToChoose(Hero hero, PerkObject perk)`

**Purpose:** Reads and returns the next perk to choose value held by this instance.

```csharp
DefaultCharacterDevelopmentModel defaultCharacterDevelopmentModel = ...;
var result = defaultCharacterDevelopmentModel.GetNextPerkToChoose(hero, perk);
```

## Usage Example

```csharp
protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    gameStarterObject.AddModel<CharacterDevelopmentModel>(new DefaultCharacterDevelopmentModel());
}
```

`CharacterDevelopmentModel` is declared as `MBGameModel<CharacterDevelopmentModel>` (`CharacterDevelopmentModel.cs:8`), so the generic `AddModel<T>` overload (`IGameStarter.cs:13`) accepts this instance. The stock game installs this same model through the same overload at `SandBoxManager.cs:229`.

## See Also

- [Area Index](../)