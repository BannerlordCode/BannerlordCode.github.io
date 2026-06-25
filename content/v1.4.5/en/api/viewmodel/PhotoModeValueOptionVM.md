---
title: "PhotoModeValueOptionVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PhotoModeValueOptionVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PhotoModeValueOptionVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PhotoModeValueOptionVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection/PhotoModeValueOptionVM.cs`

## Overview

`PhotoModeValueOptionVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `MinValue` | `public float MinValue { get; set; }` |
| `MaxValue` | `public float MaxValue { get; set; }` |
| `CurrentValue` | `public float CurrentValue { get; set; }` |
| `CurrentValueText` | `public string CurrentValueText { get; set; }` |
| `ValueName` | `public string ValueName { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

## Usage Example

```csharp
var value = new PhotoModeValueOptionVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)