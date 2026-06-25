---
title: "RundownTooltipVM"
description: "Auto-generated class reference for RundownTooltipVM."
---
# RundownTooltipVM

**Namespace:** TaleWorlds.Core.ViewModelCollection.Information.RundownTooltip
**Module:** TaleWorlds.Core
**Type:** `public class RundownTooltipVM : TooltipBaseVM`
**Base:** `TooltipBaseVM`
**File:** `bin/TaleWorlds.Core.ViewModelCollection/TaleWorlds.Core.ViewModelCollection.Information.RundownTooltip/RundownTooltipVM.cs`

## Overview

`RundownTooltipVM` lives in `TaleWorlds.Core.ViewModelCollection.Information.RundownTooltip` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core.ViewModelCollection.Information.RundownTooltip` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsInitializedProperly` | `public bool IsInitializedProperly { get; set; }` |
| `Lines` | `public MBBindingList<RundownLineVM> Lines { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |
| `ExpectedChangeText` | `public string ExpectedChangeText { get; set; }` |
| `ValueCategorizationAsInt` | `public int ValueCategorizationAsInt { get; set; }` |
| `ExtendText` | `public string ExtendText { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of `values` in sync with the underlying state.

```csharp
// Obtain an instance of RundownTooltipVM from the subsystem API first
RundownTooltipVM rundownTooltipVM = ...;
rundownTooltipVM.RefreshValues();
```

### RefreshGenericRundownTooltip
`public static void RefreshGenericRundownTooltip(RundownTooltipVM rundownTooltip, object args)`

**Purpose:** Keeps the display or cache of `generic rundown tooltip` in sync with the underlying state.

```csharp
// Static call; no instance required
RundownTooltipVM.RefreshGenericRundownTooltip(rundownTooltip, args);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
RundownTooltipVM rundownTooltipVM = ...;
rundownTooltipVM.RefreshValues();
```

## See Also

- [Area Index](../)