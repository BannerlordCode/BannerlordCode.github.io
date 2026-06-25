---
title: "CharacterDeveloperHeroItemVM"
description: "Auto-generated class reference for CharacterDeveloperHeroItemVM."
---
# CharacterDeveloperHeroItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CharacterDeveloperHeroItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterDeveloper/CharacterDeveloperHeroItemVM.cs`

## Overview

`CharacterDeveloperHeroItemVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `HeroDeveloper` | `public HeroDeveloper HeroDeveloper { get; }` |
| `Hero` | `public Hero Hero { get; }` |
| `OrgUnspentFocusPoints` | `public int OrgUnspentFocusPoints { get; }` |
| `OrgUnspentAttributePoints` | `public int OrgUnspentAttributePoints { get; }` |
| `CharacterAttributes` | `public IReadOnlyPropertyOwner<CharacterAttribute> CharacterAttributes { get; }` |
| `Skills` | `public MBBindingList<SkillVM> Skills { get; set; }` |
| `CharacterStats` | `public MBBindingList<StringPairItemVM> CharacterStats { get; set; }` |
| `Attributes` | `public MBBindingList<CharacterAttributeItemVM> Attributes { get; set; }` |
| `Traits` | `public MBBindingList<EncyclopediaTraitItemVM> Traits { get; set; }` |
| `PerkSelection` | `public PerkSelectionVM PerkSelection { get; set; }` |
| `CurrentSkill` | `public SkillVM CurrentSkill { get; set; }` |
| `CurrentInspectedAttribute` | `public CharacterAttributeItemVM CurrentInspectedAttribute { get; set; }` |
| `FocusPointsText` | `public string FocusPointsText { get; set; }` |
| `LevelProgressText` | `public string LevelProgressText { get; set; }` |
| `HeroCharacter` | `public HeroViewModel HeroCharacter { get; set; }` |
| `IsInspectingAnAttribute` | `public bool IsInspectingAnAttribute { get; set; }` |
| `LevelProgressPercentage` | `public int LevelProgressPercentage { get; set; }` |
| `CurrentTotalSkill` | `public int CurrentTotalSkill { get; set; }` |
| `SkillPointsRequiredForCurrentLevel` | `public int SkillPointsRequiredForCurrentLevel { get; set; }` |
| `SkillPointsRequiredForNextLevel` | `public int SkillPointsRequiredForNextLevel { get; set; }` |
| `UnspentCharacterPoints` | `public int UnspentCharacterPoints { get; set; }` |
| `UnspentAttributePoints` | `public int UnspentAttributePoints { get; set; }` |
| `LevelHint` | `public HintViewModel LevelHint { get; set; }` |
| `HeroNameText` | `public string HeroNameText { get; set; }` |
| `HeroInfoText` | `public string HeroInfoText { get; set; }` |
| `HeroLevelText` | `public string HeroLevelText { get; set; }` |
| `HasExtraSkills` | `public bool HasExtraSkills { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of CharacterDeveloperHeroItemVM from the subsystem API first
CharacterDeveloperHeroItemVM characterDeveloperHeroItemVM = ...;
characterDeveloperHeroItemVM.RefreshValues();
```

### ExecuteStopInspectingCurrentAttribute
`public void ExecuteStopInspectingCurrentAttribute()`

**Purpose:** Runs the operation or workflow associated with stop inspecting current attribute.

```csharp
// Obtain an instance of CharacterDeveloperHeroItemVM from the subsystem API first
CharacterDeveloperHeroItemVM characterDeveloperHeroItemVM = ...;
characterDeveloperHeroItemVM.ExecuteStopInspectingCurrentAttribute();
```

### RefreshCharacterValues
`public void RefreshCharacterValues()`

**Purpose:** Keeps the display or cache of character values in sync with the underlying state.

```csharp
// Obtain an instance of CharacterDeveloperHeroItemVM from the subsystem API first
CharacterDeveloperHeroItemVM characterDeveloperHeroItemVM = ...;
characterDeveloperHeroItemVM.RefreshCharacterValues();
```

### RefreshPerksOfSkill
`public void RefreshPerksOfSkill(SkillObject skill)`

**Purpose:** Keeps the display or cache of perks of skill in sync with the underlying state.

```csharp
// Obtain an instance of CharacterDeveloperHeroItemVM from the subsystem API first
CharacterDeveloperHeroItemVM characterDeveloperHeroItemVM = ...;
characterDeveloperHeroItemVM.RefreshPerksOfSkill(skill);
```

### ResetChanges
`public void ResetChanges(bool isCancel)`

**Purpose:** Returns changes to its default or initial condition.

```csharp
// Obtain an instance of CharacterDeveloperHeroItemVM from the subsystem API first
CharacterDeveloperHeroItemVM characterDeveloperHeroItemVM = ...;
characterDeveloperHeroItemVM.ResetChanges(false);
```

### ApplyChanges
`public void ApplyChanges()`

**Purpose:** Applies the effect of changes to the this instance.

```csharp
// Obtain an instance of CharacterDeveloperHeroItemVM from the subsystem API first
CharacterDeveloperHeroItemVM characterDeveloperHeroItemVM = ...;
characterDeveloperHeroItemVM.ApplyChanges();
```

### SetCurrentSkill
`public void SetCurrentSkill(SkillVM skill)`

**Purpose:** Assigns a new value to current skill and updates the object's internal state.

```csharp
// Obtain an instance of CharacterDeveloperHeroItemVM from the subsystem API first
CharacterDeveloperHeroItemVM characterDeveloperHeroItemVM = ...;
characterDeveloperHeroItemVM.SetCurrentSkill(skill);
```

### IsThereAnyChanges
`public bool IsThereAnyChanges()`

**Purpose:** Determines whether the this instance is in the there any changes state or condition.

```csharp
// Obtain an instance of CharacterDeveloperHeroItemVM from the subsystem API first
CharacterDeveloperHeroItemVM characterDeveloperHeroItemVM = ...;
var result = characterDeveloperHeroItemVM.IsThereAnyChanges();
```

### GetRequiredFocusPointsToAddFocusWithCurrentFocus
`public int GetRequiredFocusPointsToAddFocusWithCurrentFocus(SkillObject skill)`

**Purpose:** Reads and returns the required focus points to add focus with current focus value held by the this instance.

```csharp
// Obtain an instance of CharacterDeveloperHeroItemVM from the subsystem API first
CharacterDeveloperHeroItemVM characterDeveloperHeroItemVM = ...;
var result = characterDeveloperHeroItemVM.GetRequiredFocusPointsToAddFocusWithCurrentFocus(skill);
```

### CanAddFocusToSkillWithFocusAmount
`public bool CanAddFocusToSkillWithFocusAmount(int currentFocusAmount)`

**Purpose:** Checks whether the this instance meets the preconditions for add focus to skill with focus amount.

```csharp
// Obtain an instance of CharacterDeveloperHeroItemVM from the subsystem API first
CharacterDeveloperHeroItemVM characterDeveloperHeroItemVM = ...;
var result = characterDeveloperHeroItemVM.CanAddFocusToSkillWithFocusAmount(0);
```

### IsSkillMaxAmongOtherSkills
`public bool IsSkillMaxAmongOtherSkills(SkillVM skill)`

**Purpose:** Determines whether the this instance is in the skill max among other skills state or condition.

```csharp
// Obtain an instance of CharacterDeveloperHeroItemVM from the subsystem API first
CharacterDeveloperHeroItemVM characterDeveloperHeroItemVM = ...;
var result = characterDeveloperHeroItemVM.IsSkillMaxAmongOtherSkills(skill);
```

### GetNameWithNumOfUnopenedPerks
`public string GetNameWithNumOfUnopenedPerks()`

**Purpose:** Reads and returns the name with num of unopened perks value held by the this instance.

```csharp
// Obtain an instance of CharacterDeveloperHeroItemVM from the subsystem API first
CharacterDeveloperHeroItemVM characterDeveloperHeroItemVM = ...;
var result = characterDeveloperHeroItemVM.GetNameWithNumOfUnopenedPerks();
```

### GetNumberOfUnselectedPerks
`public int GetNumberOfUnselectedPerks()`

**Purpose:** Reads and returns the number of unselected perks value held by the this instance.

```csharp
// Obtain an instance of CharacterDeveloperHeroItemVM from the subsystem API first
CharacterDeveloperHeroItemVM characterDeveloperHeroItemVM = ...;
var result = characterDeveloperHeroItemVM.GetNumberOfUnselectedPerks();
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of CharacterDeveloperHeroItemVM from the subsystem API first
CharacterDeveloperHeroItemVM characterDeveloperHeroItemVM = ...;
characterDeveloperHeroItemVM.OnFinalize();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
CharacterDeveloperHeroItemVM characterDeveloperHeroItemVM = ...;
characterDeveloperHeroItemVM.RefreshValues();
```

## See Also

- [Area Index](../)