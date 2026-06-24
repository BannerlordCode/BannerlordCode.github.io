<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SkillVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SkillVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class SkillVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper/SkillVM.cs`

## Overview

`SkillVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `DescriptionText` | `public string DescriptionText { get; set; }` |
| `HowToLearnText` | `public string HowToLearnText { get; set; }` |
| `HowToLearnTitle` | `public string HowToLearnTitle { get; set; }` |
| `AttributesText` | `public string AttributesText { get; set; }` |
| `CanAddFocus` | `public bool CanAddFocus { get; set; }` |
| `CanLearnSkill` | `public bool CanLearnSkill { get; set; }` |
| `NextLevelLearningRateText` | `public string NextLevelLearningRateText { get; set; }` |
| `NextLevelCostText` | `public string NextLevelCostText { get; set; }` |
| `ProgressHint` | `public BasicTooltipViewModel ProgressHint { get; set; }` |
| `SkillXPHint` | `public BasicTooltipViewModel SkillXPHint { get; set; }` |
| `AddFocusHint` | `public HintViewModel AddFocusHint { get; set; }` |
| `LearningLimitTooltip` | `public BasicTooltipViewModel LearningLimitTooltip { get; set; }` |
| `LearningRateTooltip` | `public BasicTooltipViewModel LearningRateTooltip { get; set; }` |
| `ProgressPercentage` | `public double ProgressPercentage { get; set; }` |
| `LearningRate` | `public float LearningRate { get; set; }` |
| `CurrentSkillXP` | `public int CurrentSkillXP { get; set; }` |
| `NextLevel` | `public int NextLevel { get; set; }` |
| `FullLearningRateLevel` | `public int FullLearningRateLevel { get; set; }` |
| `XpRequiredForNextLevel` | `public int XpRequiredForNextLevel { get; set; }` |
| `NumOfUnopenedPerks` | `public int NumOfUnopenedPerks { get; set; }` |
| `ProgressText` | `public string ProgressText { get; set; }` |
| `FocusCostText` | `public string FocusCostText { get; set; }` |
| `Perks` | `public MBBindingList<PerkVM> Perks { get; set; }` |
| `SkillEffects` | `public MBBindingList<BindingListStringItem> SkillEffects { get; set; }` |
| `MaxLevel` | `public int MaxLevel { get; set; }` |
| `CurrentLearningRateText` | `public string CurrentLearningRateText { get; set; }` |
| `CurrentFocusLevel` | `public int CurrentFocusLevel { get; set; }` |
| `AddFocusText` | `public string AddFocusText { get; set; }` |
| `SkillId` | `public string SkillId { get; set; }` |
| `IsInspected` | `public bool IsInspected { get; set; }` |
| `NameText` | `public string NameText { get; set; }` |
| `Level` | `public int Level { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### InitializeValues
`public void InitializeValues()`

**Purpose:** Initializes the state, resources, or bindings for `values`.

### RefreshWithCurrentValues
`public void RefreshWithCurrentValues()`

**Purpose:** Refreshes the display or cache of `with current values`.

### CreateLists
`public void CreateLists()`

**Purpose:** Creates a new `lists` instance or object.

### RefreshLists
`public void RefreshLists(SkillObject skill = null)`

**Purpose:** Refreshes the display or cache of `lists`.

### RefreshCanAddFocus
`public void RefreshCanAddFocus()`

**Purpose:** Refreshes the display or cache of `can add focus`.

### ExecuteAddFocus
`public void ExecuteAddFocus()`

**Purpose:** Executes the `add focus` operation or workflow.

### ExecuteShowFocusConcept
`public void ExecuteShowFocusConcept()`

**Purpose:** Executes the `show focus concept` operation or workflow.

### ExecuteShowSkillConcept
`public void ExecuteShowSkillConcept()`

**Purpose:** Executes the `show skill concept` operation or workflow.

### ExecuteInspect
`public void ExecuteInspect()`

**Purpose:** Executes the `inspect` operation or workflow.

### ResetChanges
`public void ResetChanges()`

**Purpose:** Resets `changes` to its initial state.

### IsThereAnyChanges
`public bool IsThereAnyChanges()`

**Purpose:** Handles logic related to `is there any changes`.

### ApplyChanges
`public void ApplyChanges()`

**Purpose:** Applies `changes` to the current object.

## Usage Example

```csharp
var value = new SkillVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)