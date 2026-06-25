---
title: "EscapeMenuItemVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EscapeMenuItemVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# EscapeMenuItemVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.EscapeMenu
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class EscapeMenuItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.EscapeMenu/EscapeMenuItemVM.cs`

## Overview

`EscapeMenuItemVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.EscapeMenu` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.EscapeMenu` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `DisabledHint` | `public HintViewModel DisabledHint { get; set; }` |
| `ActionText` | `public string ActionText { get; set; }` |
| `IsDisabled` | `public bool IsDisabled { get; set; }` |
| `IsPositiveBehaviored` | `public bool IsPositiveBehaviored { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### ExecuteAction
`public void ExecuteAction()`

**Purpose:** Executes the `action` operation or workflow.

## Usage Example

```csharp
var value = new EscapeMenuItemVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)