---
title: "PersuasionVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PersuasionVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PersuasionVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Conversation
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class PersuasionVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Conversation/PersuasionVM.cs`

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

**Purpose:** Called when the `persuasion progress` event is raised.

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### SetCurrentOption
`public void SetCurrentOption(PersuasionOptionVM option)`

**Purpose:** Sets the value or state of `current option`.

### RefreshPersusasion
`public void RefreshPersusasion()`

**Purpose:** Refreshes the display or cache of `persusasion`.

## Usage Example

```csharp
var value = new PersuasionVM();
value.OnPersuasionProgress(tuple<PersuasionOptionArgs, selectedOption);
```

## See Also

- [Complete Class Catalog](../catalog)