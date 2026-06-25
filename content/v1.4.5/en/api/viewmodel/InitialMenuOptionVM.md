---
title: "InitialMenuOptionVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `InitialMenuOptionVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# InitialMenuOptionVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.InitialMenu
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class InitialMenuOptionVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.InitialMenu/InitialMenuOptionVM.cs`

## Overview

`InitialMenuOptionVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.InitialMenu` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.InitialMenu` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `DisabledHint` | `public HintViewModel DisabledHint { get; set; }` |
| `EnabledHint` | `public HintViewModel EnabledHint { get; set; }` |

## Key Methods

### ExecuteAction
`public void ExecuteAction()`

**Purpose:** Executes the `action` operation or workflow.

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

## Usage Example

```csharp
var value = new InitialMenuOptionVM();
value.ExecuteAction();
```

## See Also

- [Complete Class Catalog](../catalog)