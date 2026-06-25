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

`DefaultCharacterDevelopmentModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultCharacterDevelopmentModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

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

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of DefaultCharacterDevelopmentModel from the subsystem API first
DefaultCharacterDevelopmentModel defaultCharacterDevelopmentModel = ...;
var result = defaultCharacterDevelopmentModel.SkillsRequiredForLevel(0);
```

### GetMaxSkillPoint
`public override int GetMaxSkillPoint()`

**Purpose:** Reads and returns the `max skill point` value held by the current object.

```csharp
// Obtain an instance of DefaultCharacterDevelopmentModel from the subsystem API first
DefaultCharacterDevelopmentModel defaultCharacterDevelopmentModel = ...;
var result = defaultCharacterDevelopmentModel.GetMaxSkillPoint();
```

### GetXpRequiredForSkillLevel
`public override int GetXpRequiredForSkillLevel(int skillLevel)`

**Purpose:** Reads and returns the `xp required for skill level` value held by the current object.

```csharp
// Obtain an instance of DefaultCharacterDevelopmentModel from the subsystem API first
DefaultCharacterDevelopmentModel defaultCharacterDevelopmentModel = ...;
var result = defaultCharacterDevelopmentModel.GetXpRequiredForSkillLevel(0);
```

### GetSkillLevelChange
`public override int GetSkillLevelChange(Hero hero, SkillObject skill, float skillXp)`

**Purpose:** Reads and returns the `skill level change` value held by the current object.

```csharp
// Obtain an instance of DefaultCharacterDevelopmentModel from the subsystem API first
DefaultCharacterDevelopmentModel defaultCharacterDevelopmentModel = ...;
var result = defaultCharacterDevelopmentModel.GetSkillLevelChange(hero, skill, 0);
```

### GetXpAmountForSkillLevelChange
`public override int GetXpAmountForSkillLevelChange(Hero hero, SkillObject skill, int skillLevelChange)`

**Purpose:** Reads and returns the `xp amount for skill level change` value held by the current object.

```csharp
// Obtain an instance of DefaultCharacterDevelopmentModel from the subsystem API first
DefaultCharacterDevelopmentModel defaultCharacterDevelopmentModel = ...;
var result = defaultCharacterDevelopmentModel.GetXpAmountForSkillLevelChange(hero, skill, 0);
```

### GetTraitLevelForTraitXp
`public override void GetTraitLevelForTraitXp(Hero hero, TraitObject trait, int xpValue, out int traitLevel, out int clampedTraitXp)`

**Purpose:** Reads and returns the `trait level for trait xp` value held by the current object.

```csharp
// Obtain an instance of DefaultCharacterDevelopmentModel from the subsystem API first
DefaultCharacterDevelopmentModel defaultCharacterDevelopmentModel = ...;
defaultCharacterDevelopmentModel.GetTraitLevelForTraitXp(hero, trait, 0, traitLevel, clampedTraitXp);
```

### GetTraitXpRequiredForTraitLevel
`public override int GetTraitXpRequiredForTraitLevel(TraitObject trait, int traitLevel)`

**Purpose:** Reads and returns the `trait xp required for trait level` value held by the current object.

```csharp
// Obtain an instance of DefaultCharacterDevelopmentModel from the subsystem API first
DefaultCharacterDevelopmentModel defaultCharacterDevelopmentModel = ...;
var result = defaultCharacterDevelopmentModel.GetTraitXpRequiredForTraitLevel(trait, 0);
```

### CalculateLearningLimit
`public override ExplainedNumber CalculateLearningLimit(IReadOnlyPropertyOwner<CharacterAttribute> characterAttributes, int focusValue, SkillObject skill, bool includeDescriptions = false)`

**Purpose:** Calculates the current value or result of `learning limit`.

```csharp
// Obtain an instance of DefaultCharacterDevelopmentModel from the subsystem API first
DefaultCharacterDevelopmentModel defaultCharacterDevelopmentModel = ...;
var result = defaultCharacterDevelopmentModel.CalculateLearningLimit(characterAttributes, 0, skill, false);
```

### CalculateLearningRate
`public override ExplainedNumber CalculateLearningRate(IReadOnlyPropertyOwner<CharacterAttribute> characterAttributes, int focusValue, int skillValue, SkillObject skill, bool includeDescriptions = false)`

**Purpose:** Calculates the current value or result of `learning rate`.

```csharp
// Obtain an instance of DefaultCharacterDevelopmentModel from the subsystem API first
DefaultCharacterDevelopmentModel defaultCharacterDevelopmentModel = ...;
var result = defaultCharacterDevelopmentModel.CalculateLearningRate(characterAttributes, 0, 0, skill, false);
```

### GetNextSkillToAddFocus
`public override SkillObject GetNextSkillToAddFocus(Hero hero)`

**Purpose:** Reads and returns the `next skill to add focus` value held by the current object.

```csharp
// Obtain an instance of DefaultCharacterDevelopmentModel from the subsystem API first
DefaultCharacterDevelopmentModel defaultCharacterDevelopmentModel = ...;
var result = defaultCharacterDevelopmentModel.GetNextSkillToAddFocus(hero);
```

### GetNextAttributeToUpgrade
`public override CharacterAttribute GetNextAttributeToUpgrade(Hero hero)`

**Purpose:** Reads and returns the `next attribute to upgrade` value held by the current object.

```csharp
// Obtain an instance of DefaultCharacterDevelopmentModel from the subsystem API first
DefaultCharacterDevelopmentModel defaultCharacterDevelopmentModel = ...;
var result = defaultCharacterDevelopmentModel.GetNextAttributeToUpgrade(hero);
```

### GetNextPerkToChoose
`public override PerkObject GetNextPerkToChoose(Hero hero, PerkObject perk)`

**Purpose:** Reads and returns the `next perk to choose` value held by the current object.

```csharp
// Obtain an instance of DefaultCharacterDevelopmentModel from the subsystem API first
DefaultCharacterDevelopmentModel defaultCharacterDevelopmentModel = ...;
var result = defaultCharacterDevelopmentModel.GetNextPerkToChoose(hero, perk);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultCharacterDevelopmentModel>(new MyDefaultCharacterDevelopmentModel());
```

## See Also

- [Area Index](../)