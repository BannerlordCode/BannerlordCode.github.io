---
title: "PaginatedScrollablePanel"
description: "Auto-generated class reference for PaginatedScrollablePanel."
---
# PaginatedScrollablePanel

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PaginatedScrollablePanel : ScrollablePanel`
**Base:** `ScrollablePanel`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/PaginatedScrollablePanel.cs`

## Overview

`PaginatedScrollablePanel` lives in `TaleWorlds.MountAndBlade.GauntletUI.Widgets` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ScrollToSelectedOnVisibilityChanged` | `public bool ScrollToSelectedOnVisibilityChanged { get; set; }` |
| `ItemsPerPage` | `public int ItemsPerPage { get; set; }` |
| `ScrollTime` | `public float ScrollTime { get; set; }` |
| `ContainerDirection` | `public PaginatedScrollablePanel.ContainerDirections ContainerDirection { get; set; }` |
| `ListWidget` | `public ListPanel ListWidget { get; set; }` |
| `PreviousButtonWidget` | `public ButtonWidget PreviousButtonWidget { get; set; }` |
| `NextButtonWidget` | `public ButtonWidget NextButtonWidget { get; set; }` |
| `NavigationScope` | `public NavigationScopeTargeter NavigationScope { get; set; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
PaginatedScrollablePanel instance = ...;
```

## See Also

- [Area Index](../)