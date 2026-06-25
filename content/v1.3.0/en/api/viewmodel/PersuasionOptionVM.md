---
title: "PersuasionOptionVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PersuasionOptionVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PersuasionOptionVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Conversation
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class PersuasionOptionVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Conversation/PersuasionOptionVM.cs`

## Overview

`PersuasionOptionVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.Conversation` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Conversation` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsPersuasionResultReady` | `public bool IsPersuasionResultReady { get; set; }` |
| `IsABlockingOption` | `public bool IsABlockingOption { get; set; }` |
| `IsAProgressingOption` | `public bool IsAProgressingOption { get; set; }` |
| `SuccessChance` | `public int SuccessChance { get; set; }` |
| `PersuasionResultIndex` | `public int PersuasionResultIndex { get; set; }` |
| `FailChance` | `public int FailChance { get; set; }` |
| `CritSuccessChance` | `public int CritSuccessChance { get; set; }` |
| `CritFailChance` | `public int CritFailChance { get; set; }` |
| `FailChanceText` | `public string FailChanceText { get; set; }` |
| `CritFailChanceText` | `public string CritFailChanceText { get; set; }` |
| `SuccessChanceText` | `public string SuccessChanceText { get; set; }` |
| `CritSuccessChanceText` | `public string CritSuccessChanceText { get; set; }` |
| `CritFailHint` | `public BasicTooltipViewModel CritFailHint { get; set; }` |
| `FailHint` | `public BasicTooltipViewModel FailHint { get; set; }` |
| `SuccessHint` | `public BasicTooltipViewModel SuccessHint { get; set; }` |
| `CritSuccessHint` | `public BasicTooltipViewModel CritSuccessHint { get; set; }` |
| `BlockingOptionHint` | `public HintViewModel BlockingOptionHint { get; set; }` |
| `ProgressingOptionHint` | `public HintViewModel ProgressingOptionHint { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### GetPersuasionAdditionalText
`public string GetPersuasionAdditionalText()`

**Purpose:** Gets the current value of `persuasion additional text`.

### ExecuteReadyToContinue
`public void ExecuteReadyToContinue()`

**Purpose:** Executes the `ready to continue` operation or workflow.

## Usage Example

```csharp
var value = new PersuasionOptionVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)