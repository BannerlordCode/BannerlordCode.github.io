<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CharacterDevelopmentModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**Purpose:** Handles logic related to `skills required for level`.

### GetMaxSkillPoint
`public abstract int GetMaxSkillPoint()`

**Purpose:** Gets the current value of `max skill point`.

### GetXpRequiredForSkillLevel
`public abstract int GetXpRequiredForSkillLevel(int skillLevel)`

**Purpose:** Gets the current value of `xp required for skill level`.

### GetSkillLevelChange
`public abstract int GetSkillLevelChange(Hero hero, SkillObject skill, float skillXp)`

**Purpose:** Gets the current value of `skill level change`.

### GetXpAmountForSkillLevelChange
`public abstract int GetXpAmountForSkillLevelChange(Hero hero, SkillObject skill, int skillLevelChange)`

**Purpose:** Gets the current value of `xp amount for skill level change`.

### GetTraitLevelForTraitXp
`public abstract void GetTraitLevelForTraitXp(Hero hero, TraitObject trait, int newValue, out int traitLevel, out int traitXp)`

**Purpose:** Gets the current value of `trait level for trait xp`.

### GetTraitXpRequiredForTraitLevel
`public abstract int GetTraitXpRequiredForTraitLevel(TraitObject trait, int traitLevel)`

**Purpose:** Gets the current value of `trait xp required for trait level`.

### CalculateLearningLimit
`public abstract ExplainedNumber CalculateLearningLimit(IReadOnlyPropertyOwner<CharacterAttribute> characterAttributes, int focusValue, SkillObject skill, bool includeDescriptions = false)`

**Purpose:** Handles logic related to `calculate learning limit`.

### CalculateLearningRate
`public abstract ExplainedNumber CalculateLearningRate(IReadOnlyPropertyOwner<CharacterAttribute> characterAttributes, int focusValue, int skillValue, SkillObject skill, bool includeDescriptions = false)`

**Purpose:** Handles logic related to `calculate learning rate`.

### GetNextSkillToAddFocus
`public abstract SkillObject GetNextSkillToAddFocus(Hero hero)`

**Purpose:** Gets the current value of `next skill to add focus`.

### GetNextAttributeToUpgrade
`public abstract CharacterAttribute GetNextAttributeToUpgrade(Hero hero)`

**Purpose:** Gets the current value of `next attribute to upgrade`.

### GetNextPerkToChoose
`public abstract PerkObject GetNextPerkToChoose(Hero hero, PerkObject perk)`

**Purpose:** Gets the current value of `next perk to choose`.

## Usage Example

```csharp
var implementation = new CustomCharacterDevelopmentModel();
```

## See Also

- [Complete Class Catalog](../catalog)