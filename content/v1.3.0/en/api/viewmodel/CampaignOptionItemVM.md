---
title: "CampaignOptionItemVM"
description: "Auto-generated class reference for CampaignOptionItemVM."
---
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

**Purpose:** Keeps the display or cache of `values` in sync with the underlying state.

```csharp
// Obtain an instance of CampaignOptionItemVM from the subsystem API first
CampaignOptionItemVM campaignOptionItemVM = ...;
campaignOptionItemVM.RefreshValues();
```

### RefreshDisabledStatus
`public void RefreshDisabledStatus()`

**Purpose:** Keeps the display or cache of `disabled status` in sync with the underlying state.

```csharp
// Obtain an instance of CampaignOptionItemVM from the subsystem API first
CampaignOptionItemVM campaignOptionItemVM = ...;
campaignOptionItemVM.RefreshDisabledStatus();
```

### ExecuteAction
`public void ExecuteAction()`

**Purpose:** Runs the operation or workflow associated with `action`.

```csharp
// Obtain an instance of CampaignOptionItemVM from the subsystem API first
CampaignOptionItemVM campaignOptionItemVM = ...;
campaignOptionItemVM.ExecuteAction();
```

### OnSelectionOptionValueChanged
`public void OnSelectionOptionValueChanged(SelectorVM<SelectorItemVM> selector)`

**Purpose:** Invoked when the `selection option value changed` event is raised.

```csharp
// Obtain an instance of CampaignOptionItemVM from the subsystem API first
CampaignOptionItemVM campaignOptionItemVM = ...;
campaignOptionItemVM.OnSelectionOptionValueChanged(selector);
```

### SetValue
`public void SetValue(float value)`

**Purpose:** Assigns a new value to `value` and updates the object's internal state.

```csharp
// Obtain an instance of CampaignOptionItemVM from the subsystem API first
CampaignOptionItemVM campaignOptionItemVM = ...;
campaignOptionItemVM.SetValue(0);
```

### SetOnValueChangedCallback
`public void SetOnValueChangedCallback(Action<CampaignOptionItemVM> onValueChanged)`

**Purpose:** Assigns a new value to `on value changed callback` and updates the object's internal state.

```csharp
// Obtain an instance of CampaignOptionItemVM from the subsystem API first
CampaignOptionItemVM campaignOptionItemVM = ...;
campaignOptionItemVM.SetOnValueChangedCallback(onValueChanged);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
CampaignOptionItemVM campaignOptionItemVM = ...;
campaignOptionItemVM.RefreshValues();
```

## See Also

- [Area Index](../)