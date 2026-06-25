---
title: "SkillVM"
description: "Auto-generated class reference for SkillVM."
---
# SkillVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class SkillVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterDeveloper/SkillVM.cs`

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

**Purpose:** **Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of SkillVM from the subsystem API first
SkillVM skillVM = ...;
skillVM.RefreshValues();
```

### InitializeValues
`public void InitializeValues()`

**Purpose:** **Purpose:** Prepares the resources, state, or bindings required by values.

```csharp
// Obtain an instance of SkillVM from the subsystem API first
SkillVM skillVM = ...;
skillVM.InitializeValues();
```

### RefreshWithCurrentValues
`public void RefreshWithCurrentValues()`

**Purpose:** **Purpose:** Keeps the display or cache of with current values in sync with the underlying state.

```csharp
// Obtain an instance of SkillVM from the subsystem API first
SkillVM skillVM = ...;
skillVM.RefreshWithCurrentValues();
```

### CreateLists
`public void CreateLists()`

**Purpose:** **Purpose:** Constructs a new lists entity and returns it to the caller.

```csharp
// Obtain an instance of SkillVM from the subsystem API first
SkillVM skillVM = ...;
skillVM.CreateLists();
```

### RefreshLists
`public void RefreshLists(SkillObject skill = null)`

**Purpose:** **Purpose:** Keeps the display or cache of lists in sync with the underlying state.

```csharp
// Obtain an instance of SkillVM from the subsystem API first
SkillVM skillVM = ...;
skillVM.RefreshLists(null);
```

### RefreshCanAddFocus
`public void RefreshCanAddFocus()`

**Purpose:** **Purpose:** Keeps the display or cache of can add focus in sync with the underlying state.

```csharp
// Obtain an instance of SkillVM from the subsystem API first
SkillVM skillVM = ...;
skillVM.RefreshCanAddFocus();
```

### ExecuteAddFocus
`public void ExecuteAddFocus()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with add focus.

```csharp
// Obtain an instance of SkillVM from the subsystem API first
SkillVM skillVM = ...;
skillVM.ExecuteAddFocus();
```

### ExecuteShowFocusConcept
`public void ExecuteShowFocusConcept()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with show focus concept.

```csharp
// Obtain an instance of SkillVM from the subsystem API first
SkillVM skillVM = ...;
skillVM.ExecuteShowFocusConcept();
```

### ExecuteShowSkillConcept
`public void ExecuteShowSkillConcept()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with show skill concept.

```csharp
// Obtain an instance of SkillVM from the subsystem API first
SkillVM skillVM = ...;
skillVM.ExecuteShowSkillConcept();
```

### ExecuteInspect
`public void ExecuteInspect()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with inspect.

```csharp
// Obtain an instance of SkillVM from the subsystem API first
SkillVM skillVM = ...;
skillVM.ExecuteInspect();
```

### ResetChanges
`public void ResetChanges()`

**Purpose:** **Purpose:** Returns changes to its default or initial condition.

```csharp
// Obtain an instance of SkillVM from the subsystem API first
SkillVM skillVM = ...;
skillVM.ResetChanges();
```

### IsThereAnyChanges
`public bool IsThereAnyChanges()`

**Purpose:** **Purpose:** Determines whether the this instance is in the there any changes state or condition.

```csharp
// Obtain an instance of SkillVM from the subsystem API first
SkillVM skillVM = ...;
var result = skillVM.IsThereAnyChanges();
```

### ApplyChanges
`public void ApplyChanges()`

**Purpose:** **Purpose:** Applies the effect of changes to the this instance.

```csharp
// Obtain an instance of SkillVM from the subsystem API first
SkillVM skillVM = ...;
skillVM.ApplyChanges();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
SkillVM skillVM = ...;
skillVM.RefreshValues();
```

## See Also

- [Area Index](../)