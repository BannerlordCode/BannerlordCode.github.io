---
title: "DefaultCharacterDevelopmentModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultCharacterDevelopmentModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

### InitializeSkillsRequiredForLevel
`public void InitializeSkillsRequiredForLevel()`

**Purpose:** Initializes the state, resources, or bindings for `skills required for level`.

### InitializeXpRequiredForSkillLevel
`public void InitializeXpRequiredForSkillLevel()`

**Purpose:** Initializes the state, resources, or bindings for `xp required for skill level`.

### SkillsRequiredForLevel
`public override int SkillsRequiredForLevel(int level)`

**Purpose:** Handles logic related to `skills required for level`.

### GetMaxSkillPoint
`public override int GetMaxSkillPoint()`

**Purpose:** Gets the current value of `max skill point`.

### GetXpRequiredForSkillLevel
`public override int GetXpRequiredForSkillLevel(int skillLevel)`

**Purpose:** Gets the current value of `xp required for skill level`.

### GetSkillLevelChange
`public override int GetSkillLevelChange(Hero hero, SkillObject skill, float skillXp)`

**Purpose:** Gets the current value of `skill level change`.

### GetXpAmountForSkillLevelChange
`public override int GetXpAmountForSkillLevelChange(Hero hero, SkillObject skill, int skillLevelChange)`

**Purpose:** Gets the current value of `xp amount for skill level change`.

### GetTraitLevelForTraitXp
`public override void GetTraitLevelForTraitXp(Hero hero, TraitObject trait, int xpValue, out int traitLevel, out int clampedTraitXp)`

**Purpose:** Gets the current value of `trait level for trait xp`.

### GetTraitXpRequiredForTraitLevel
`public override int GetTraitXpRequiredForTraitLevel(TraitObject trait, int traitLevel)`

**Purpose:** Gets the current value of `trait xp required for trait level`.

### CalculateLearningLimit
`public override ExplainedNumber CalculateLearningLimit(IReadOnlyPropertyOwner<CharacterAttribute> characterAttributes, int focusValue, SkillObject skill, bool includeDescriptions = false)`

**Purpose:** Handles logic related to `calculate learning limit`.

### CalculateLearningRate
`public override ExplainedNumber CalculateLearningRate(IReadOnlyPropertyOwner<CharacterAttribute> characterAttributes, int focusValue, int skillValue, SkillObject skill, bool includeDescriptions = false)`

**Purpose:** Handles logic related to `calculate learning rate`.

### GetNextSkillToAddFocus
`public override SkillObject GetNextSkillToAddFocus(Hero hero)`

**Purpose:** Gets the current value of `next skill to add focus`.

### GetNextAttributeToUpgrade
`public override CharacterAttribute GetNextAttributeToUpgrade(Hero hero)`

**Purpose:** Gets the current value of `next attribute to upgrade`.

### GetNextPerkToChoose
`public override PerkObject GetNextPerkToChoose(Hero hero, PerkObject perk)`

**Purpose:** Gets the current value of `next perk to choose`.

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultCharacterDevelopmentModel>(new MyDefaultCharacterDevelopmentModel());
```

## See Also

- [Complete Class Catalog](../catalog)