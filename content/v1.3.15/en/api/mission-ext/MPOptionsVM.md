---
title: "MPOptionsVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MPOptionsVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MPOptionsVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPOptionsVM : OptionsVM`
**Base:** `OptionsVM`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/MPOptionsVM.cs`

## Overview

`MPOptionsVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `AreHotkeysEnabled` | `public bool AreHotkeysEnabled { get; set; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `ApplyText` | `public string ApplyText { get; set; }` |
| `RevertText` | `public string RevertText { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### ExecuteCancel
`public new void ExecuteCancel()`

**Purpose:** Executes the `cancel` operation or workflow.

### ExecuteApply
`public void ExecuteApply()`

**Purpose:** Executes the `apply` operation or workflow.

### ForceCancel
`public void ForceCancel()`

**Purpose:** Handles logic related to `force cancel`.

## Usage Example

```csharp
var value = new MPOptionsVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)