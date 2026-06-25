---
title: "CampaignOptionItemVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CampaignOptionItemVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CampaignOptionItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CampaignOptionItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CampaignOptionItemVM.cs`

## Overview

`CampaignOptionItemVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `OptionData` | `public ICampaignOptionData OptionData { get; }` |
| `HideOptionName` | `public bool HideOptionName { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `Hint` | `public HintViewModel Hint { get; set; }` |
| `OptionType` | `public int OptionType { get; set; }` |
| `ValueAsBoolean` | `public bool ValueAsBoolean { get; set; }` |
| `IsDiscrete` | `public bool IsDiscrete { get; set; }` |
| `IsDisabled` | `public bool IsDisabled { get; set; }` |
| `MinRange` | `public float MinRange { get; set; }` |
| `MaxRange` | `public float MaxRange { get; set; }` |
| `ValueAsRange` | `public float ValueAsRange { get; set; }` |
| `ValueAsString` | `public string ValueAsString { get; set; }` |
| `SelectionSelector` | `public CampaignOptionSelectorVM SelectionSelector { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### RefreshDisabledStatus
`public void RefreshDisabledStatus()`

**Purpose:** Refreshes the display or cache of `disabled status`.

### ExecuteAction
`public void ExecuteAction()`

**Purpose:** Executes the `action` operation or workflow.

### OnSelectionOptionValueChanged
`public void OnSelectionOptionValueChanged(SelectorVM<SelectorItemVM> selector)`

**Purpose:** Called when the `selection option value changed` event is raised.

### SetValue
`public void SetValue(float value)`

**Purpose:** Sets the value or state of `value`.

### SetOnValueChangedCallback
`public void SetOnValueChangedCallback(Action<CampaignOptionItemVM> onValueChanged)`

**Purpose:** Sets the value or state of `on value changed callback`.

## Usage Example

```csharp
var value = new CampaignOptionItemVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)