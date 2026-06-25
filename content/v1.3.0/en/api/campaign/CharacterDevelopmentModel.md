---
title: "CharacterDevelopmentModel"
description: "Auto-generated class reference for CharacterDevelopmentModel."
---
# CharacterDevelopmentModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class CharacterDevelopmentModel : MBGameModel<CharacterDevelopmentModel>`
**Base:** `MBGameModel<CharacterDevelopmentModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/CharacterDevelopmentModel.cs`

## Overview

`CharacterDevelopmentModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `CharacterDevelopmentModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `MaxAttribute` | `public abstract int MaxAttribute { get; }` |
| `MaxFocusPerSkill` | `public abstract int MaxFocusPerSkill { get; }` |
| `MaxSkillRequiredForEpicPerkBonus` | `public abstract int MaxSkillRequiredForEpicPerkBonus { get; }` |
| `MinSkillRequiredForEpicPerkBonus` | `public abstract int MinSkillRequiredForEpicPerkBonus { get; }` |
| `FocusPointsPerLevel` | `public abstract int FocusPointsPerLevel { get; }` |
| `FocusPointsAtStart` | `public abstract int FocusPointsAtStart { get; }` |
| `AttributePointsAtStart` | `public abstract int AttributePointsAtStart { get; }` |
| `LevelsPerAttributePoint` | `public abstract int LevelsPerAttributePoint { get; }` |

## Key Methods

### SkillsRequiredForLevel
`public abstract int SkillsRequiredForLevel(int level)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of CharacterDevelopmentModel from the subsystem API first
CharacterDevelopmentModel characterDevelopmentModel = ...;
var result = characterDevelopmentModel.SkillsRequiredForLevel(0);
```

### GetMaxSkillPoint
`public abstract int GetMaxSkillPoint()`

**Purpose:** Reads and returns the `max skill point` value held by the current object.

```csharp
// Obtain an instance of CharacterDevelopmentModel from the subsystem API first
CharacterDevelopmentModel characterDevelopmentModel = ...;
var result = characterDevelopmentModel.GetMaxSkillPoint();
```

### GetXpRequiredForSkillLevel
`public abstract int GetXpRequiredForSkillLevel(int skillLevel)`

**Purpose:** Reads and returns the `xp required for skill level` value held by the current object.

```csharp
// Obtain an instance of CharacterDevelopmentModel from the subsystem API first
CharacterDevelopmentModel characterDevelopmentModel = ...;
var result = characterDevelopmentModel.GetXpRequiredForSkillLevel(0);
```

### GetSkillLevelChange
`public abstract int GetSkillLevelChange(Hero hero, SkillObject skill, float skillXp)`

**Purpose:** Reads and returns the `skill level change` value held by the current object.

```csharp
// Obtain an instance of CharacterDevelopmentModel from the subsystem API first
CharacterDevelopmentModel characterDevelopmentModel = ...;
var result = characterDevelopmentModel.GetSkillLevelChange(hero, skill, 0);
```

### GetXpAmountForSkillLevelChange
`public abstract int GetXpAmountForSkillLevelChange(Hero hero, SkillObject skill, int skillLevelChange)`

**Purpose:** Reads and returns the `xp amount for skill level change` value held by the current object.

```csharp
// Obtain an instance of CharacterDevelopmentModel from the subsystem API first
CharacterDevelopmentModel characterDevelopmentModel = ...;
var result = characterDevelopmentModel.GetXpAmountForSkillLevelChange(hero, skill, 0);
```

### GetTraitLevelForTraitXp
`public abstract void GetTraitLevelForTraitXp(Hero hero, TraitObject trait, int newValue, out int traitLevel, out int traitXp)`

**Purpose:** Reads and returns the `trait level for trait xp` value held by the current object.

```csharp
// Obtain an instance of CharacterDevelopmentModel from the subsystem API first
CharacterDevelopmentModel characterDevelopmentModel = ...;
characterDevelopmentModel.GetTraitLevelForTraitXp(hero, trait, 0, traitLevel, traitXp);
```

### GetTraitXpRequiredForTraitLevel
`public abstract int GetTraitXpRequiredForTraitLevel(TraitObject trait, int traitLevel)`

**Purpose:** Reads and returns the `trait xp required for trait level` value held by the current object.

```csharp
// Obtain an instance of CharacterDevelopmentModel from the subsystem API first
CharacterDevelopmentModel characterDevelopmentModel = ...;
var result = characterDevelopmentModel.GetTraitXpRequiredForTraitLevel(trait, 0);
```

### CalculateLearningLimit
`public abstract ExplainedNumber CalculateLearningLimit(IReadOnlyPropertyOwner<CharacterAttribute> characterAttributes, int focusValue, SkillObject skill, bool includeDescriptions = false)`

**Purpose:** Calculates the current value or result of `learning limit`.

```csharp
// Obtain an instance of CharacterDevelopmentModel from the subsystem API first
CharacterDevelopmentModel characterDevelopmentModel = ...;
var result = characterDevelopmentModel.CalculateLearningLimit(characterAttributes, 0, skill, false);
```

### CalculateLearningRate
`public abstract ExplainedNumber CalculateLearningRate(IReadOnlyPropertyOwner<CharacterAttribute> characterAttributes, int focusValue, int skillValue, SkillObject skill, bool includeDescriptions = false)`

**Purpose:** Calculates the current value or result of `learning rate`.

```csharp
// Obtain an instance of CharacterDevelopmentModel from the subsystem API first
CharacterDevelopmentModel characterDevelopmentModel = ...;
var result = characterDevelopmentModel.CalculateLearningRate(characterAttributes, 0, 0, skill, false);
```

### GetNextSkillToAddFocus
`public abstract SkillObject GetNextSkillToAddFocus(Hero hero)`

**Purpose:** Reads and returns the `next skill to add focus` value held by the current object.

```csharp
// Obtain an instance of CharacterDevelopmentModel from the subsystem API first
CharacterDevelopmentModel characterDevelopmentModel = ...;
var result = characterDevelopmentModel.GetNextSkillToAddFocus(hero);
```

### GetNextAttributeToUpgrade
`public abstract CharacterAttribute GetNextAttributeToUpgrade(Hero hero)`

**Purpose:** Reads and returns the `next attribute to upgrade` value held by the current object.

```csharp
// Obtain an instance of CharacterDevelopmentModel from the subsystem API first
CharacterDevelopmentModel characterDevelopmentModel = ...;
var result = characterDevelopmentModel.GetNextAttributeToUpgrade(hero);
```

### GetNextPerkToChoose
`public abstract PerkObject GetNextPerkToChoose(Hero hero, PerkObject perk)`

**Purpose:** Reads and returns the `next perk to choose` value held by the current object.

```csharp
// Obtain an instance of CharacterDevelopmentModel from the subsystem API first
CharacterDevelopmentModel characterDevelopmentModel = ...;
var result = characterDevelopmentModel.GetNextPerkToChoose(hero, perk);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
CharacterDevelopmentModel instance = ...;
```

## See Also

- [Area Index](../)