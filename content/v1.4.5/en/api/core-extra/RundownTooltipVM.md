---
title: "RundownTooltipVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `RundownTooltipVM`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# RundownTooltipVM

**Namespace:** TaleWorlds.Core.ViewModelCollection.Information.RundownTooltip
**Module:** TaleWorlds.Core
**Type:** `public class RundownTooltipVM : TooltipBaseVM`
**Base:** `TooltipBaseVM`
**File:** `Bannerlord.Source/bin/TaleWorlds.Core.ViewModelCollection/TaleWorlds.Core.ViewModelCollection.Information.RundownTooltip/RundownTooltipVM.cs`

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

**Purpose:** Refreshes the display or cache of `values`.

### RefreshGenericRundownTooltip
`public static void RefreshGenericRundownTooltip(RundownTooltipVM rundownTooltip, object args)`

**Purpose:** Refreshes the display or cache of `generic rundown tooltip`.

## Usage Example

```csharp
var value = new RundownTooltipVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)