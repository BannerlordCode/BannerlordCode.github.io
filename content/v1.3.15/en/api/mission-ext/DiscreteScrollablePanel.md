---
title: "DiscreteScrollablePanel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DiscreteScrollablePanel`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DiscreteScrollablePanel

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DiscreteScrollablePanel : ScrollablePanel`
**Base:** `ScrollablePanel`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/DiscreteScrollablePanel.cs`

## Overview

`DiscreteScrollablePanel` lives in `TaleWorlds.MountAndBlade.GauntletUI.Widgets` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsLooping` | `public bool IsLooping { get; set; }` |
| `ScrollToSelectedOnVisibilityChanged` | `public bool ScrollToSelectedOnVisibilityChanged { get; set; }` |
| `ItemsPerPage` | `public int ItemsPerPage { get; set; }` |
| `ScrollTime` | `public float ScrollTime { get; set; }` |
| `ListWidget` | `public ListPanel ListWidget { get; set; }` |
| `PreviousButtonWidget` | `public ButtonWidget PreviousButtonWidget { get; set; }` |
| `NextButtonWidget` | `public ButtonWidget NextButtonWidget { get; set; }` |

## Usage Example

```csharp
var value = new DiscreteScrollablePanel();
```

## See Also

- [Complete Class Catalog](../catalog)