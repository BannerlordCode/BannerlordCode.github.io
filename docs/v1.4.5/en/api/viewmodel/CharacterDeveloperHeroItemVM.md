<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CharacterDeveloperHeroItemVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CharacterDeveloperHeroItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CharacterDeveloperHeroItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper/CharacterDeveloperHeroItemVM.cs`

## Overview

`CharacterDeveloperHeroItemVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Hero` | `public Hero Hero { get; }` |
| `OrgUnspentFocusPoints` | `public int OrgUnspentFocusPoints { get; }` |
| `OrgUnspentAttributePoints` | `public int OrgUnspentAttributePoints { get; }` |
| `Skills` | `public MBBindingList<SkillVM> Skills { get; set; }` |
| `CharacterStats` | `public MBBindingList<StringPairItemVM> CharacterStats { get; set; }` |
| `Attributes` | `public MBBindingList<CharacterAttributeItemVM> Attributes { get; set; }` |
| `Traits` | `public MBBindingList<EncyclopediaTraitItemVM> Traits { get; set; }` |
| `PerkSelection` | `public PerkSelectionVM PerkSelection { get; set; }` |
| `CurrentSkill` | `public SkillVM CurrentSkill { get; set; }` |
| `CurrentInspectedAttribute` | `public CharacterAttributeItemVM CurrentInspectedAttribute { get; set; }` |
| `FocusPointsText` | `public string FocusPointsText { get; set; }` |
| `CurrentCharacterLevelLbl` | `public string CurrentCharacterLevelLbl { get; set; }` |
| `LevelProgressText` | `public string LevelProgressText { get; set; }` |
| `HeroCharacter` | `public HeroViewModel HeroCharacter { get; set; }` |
| `IsInspectingAnAttribute` | `public bool IsInspectingAnAttribute { get; set; }` |
| `LevelProgressPercentage` | `public int LevelProgressPercentage { get; set; }` |
| `CurrentTotalXp` | `public int CurrentTotalXp { get; set; }` |
| `XpRequiredForNextLevel` | `public int XpRequiredForNextLevel { get; set; }` |
| `UnspentCharacterPoints` | `public int UnspentCharacterPoints { get; set; }` |
| `UnspentAttributePoints` | `public int UnspentAttributePoints { get; set; }` |
| `LevelHint` | `public HintViewModel LevelHint { get; set; }` |
| `HeroNameText` | `public string HeroNameText { get; set; }` |
| `HeroInfoText` | `public string HeroInfoText { get; set; }` |
| `HeroNextLevelText` | `public string HeroNextLevelText { get; set; }` |
| `HasExtraSkills` | `public bool HasExtraSkills { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### ExecuteStopInspectingCurrentAttribute
`public void ExecuteStopInspectingCurrentAttribute()`

**Purpose:** Executes the `stop inspecting current attribute` operation or workflow.

### RefreshCharacterValues
`public void RefreshCharacterValues()`

**Purpose:** Refreshes the display or cache of `character values`.

### RefreshPerksOfSkill
`public void RefreshPerksOfSkill(SkillObject skill)`

**Purpose:** Refreshes the display or cache of `perks of skill`.

### ResetChanges
`public void ResetChanges(bool isCancel)`

**Purpose:** Resets `changes` to its initial state.

### ApplyChanges
`public void ApplyChanges()`

**Purpose:** Applies `changes` to the current object.

### SetCurrentSkill
`public void SetCurrentSkill(SkillVM skill)`

**Purpose:** Sets the value or state of `current skill`.

### IsThereAnyChanges
`public bool IsThereAnyChanges()`

**Purpose:** Handles logic related to `is there any changes`.

### GetRequiredFocusPointsToAddFocusWithCurrentFocus
`public int GetRequiredFocusPointsToAddFocusWithCurrentFocus(SkillObject skill)`

**Purpose:** Gets the current value of `required focus points to add focus with current focus`.

### CanAddFocusToSkillWithFocusAmount
`public bool CanAddFocusToSkillWithFocusAmount(int currentFocusAmount)`

**Purpose:** Checks whether the current object can `add focus to skill with focus amount`.

### IsSkillMaxAmongOtherSkills
`public bool IsSkillMaxAmongOtherSkills(SkillVM skill)`

**Purpose:** Handles logic related to `is skill max among other skills`.

### GetNameWithNumOfUnopenedPerks
`public string GetNameWithNumOfUnopenedPerks()`

**Purpose:** Gets the current value of `name with num of unopened perks`.

### GetNumberOfUnselectedPerks
`public int GetNumberOfUnselectedPerks()`

**Purpose:** Gets the current value of `number of unselected perks`.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

## Usage Example

```csharp
var value = new CharacterDeveloperHeroItemVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)