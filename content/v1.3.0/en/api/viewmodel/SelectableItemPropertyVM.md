---
title: "SelectableItemPropertyVM"
description: "Auto-generated class reference for SelectableItemPropertyVM."
---
# SelectableItemPropertyVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class SelectableItemPropertyVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/SelectableItemPropertyVM.cs`

## Overview

`SelectableItemPropertyVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Type` | `public int Type { get; set; }` |
| `IsWarning` | `public bool IsWarning { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `Value` | `public string Value { get; set; }` |
| `Hint` | `public BasicTooltipViewModel Hint { get; set; }` |
| `ColonText` | `public string ColonText { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of SelectableItemPropertyVM from the subsystem API first
SelectableItemPropertyVM selectableItemPropertyVM = ...;
selectableItemPropertyVM.RefreshValues();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
SelectableItemPropertyVM selectableItemPropertyVM = ...;
selectableItemPropertyVM.RefreshValues();
```

## See Also

- [Area Index](../)