---
title: "SelectableItemPropertyVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SelectableItemPropertyVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
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

**Purpose:** Refreshes the display or cache of `values`.

## Usage Example

```csharp
var value = new SelectableItemPropertyVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)