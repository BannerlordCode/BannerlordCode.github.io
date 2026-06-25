---
title: "PersuasionVM"
description: "Auto-generated class reference for PersuasionVM."
---
# PersuasionVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Conversation
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class PersuasionVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Conversation/PersuasionVM.cs`

## Overview

`PersuasionVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.Conversation` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Conversation` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `PersuasionHint` | `public BasicTooltipViewModel PersuasionHint { get; set; }` |
| `ProgressText` | `public string ProgressText { get; set; }` |
| `PersuasionProgress` | `public MBBindingList<BoolItemWithActionVM> PersuasionProgress { get; set; }` |
| `IsPersuasionActive` | `public bool IsPersuasionActive { get; set; }` |
| `CurrentSuccessChance` | `public int CurrentSuccessChance { get; set; }` |
| `CurrentPersuasionOption` | `public PersuasionOptionVM CurrentPersuasionOption { get; set; }` |
| `CurrentFailChance` | `public int CurrentFailChance { get; set; }` |
| `CurrentCritSuccessChance` | `public int CurrentCritSuccessChance { get; set; }` |
| `CurrentCritFailChance` | `public int CurrentCritFailChance { get; set; }` |

## Key Methods

### OnPersuasionProgress
`public void OnPersuasionProgress(Tuple<PersuasionOptionArgs, PersuasionOptionResult> selectedOption)`

**Purpose:** **Purpose:** Invoked when the persuasion progress event is raised.

```csharp
// Obtain an instance of PersuasionVM from the subsystem API first
PersuasionVM persuasionVM = ...;
persuasionVM.OnPersuasionProgress(tuple<PersuasionOptionArgs, selectedOption);
```

### RefreshValues
`public override void RefreshValues()`

**Purpose:** **Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of PersuasionVM from the subsystem API first
PersuasionVM persuasionVM = ...;
persuasionVM.RefreshValues();
```

### SetCurrentOption
`public void SetCurrentOption(PersuasionOptionVM option)`

**Purpose:** **Purpose:** Assigns a new value to current option and updates the object's internal state.

```csharp
// Obtain an instance of PersuasionVM from the subsystem API first
PersuasionVM persuasionVM = ...;
persuasionVM.SetCurrentOption(option);
```

### RefreshPersusasion
`public void RefreshPersusasion()`

**Purpose:** **Purpose:** Keeps the display or cache of persusasion in sync with the underlying state.

```csharp
// Obtain an instance of PersuasionVM from the subsystem API first
PersuasionVM persuasionVM = ...;
persuasionVM.RefreshPersusasion();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
PersuasionVM persuasionVM = ...;
persuasionVM.OnPersuasionProgress(tuple<PersuasionOptionArgs, selectedOption);
```

## See Also

- [Area Index](../)