---
title: "VisualState"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `VisualState`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# VisualState

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public class VisualState`
**Area:** mission-ext

## Overview

`VisualState` lives in `TaleWorlds.GauntletUI`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `State` | `public string State { get; }` |
| `TransitionDuration` | `public float TransitionDuration { get; set; }` |
| `PositionXOffset` | `public float PositionXOffset { get; set; }` |
| `PositionYOffset` | `public float PositionYOffset { get; set; }` |
| `SuggestedWidth` | `public float SuggestedWidth { get; set; }` |
| `SuggestedHeight` | `public float SuggestedHeight { get; set; }` |
| `MarginTop` | `public float MarginTop { get; set; }` |
| `MarginBottom` | `public float MarginBottom { get; set; }` |
| `MarginLeft` | `public float MarginLeft { get; set; }` |
| `MarginRight` | `public float MarginRight { get; }` |
| `GotTransitionDuration` | `public bool GotTransitionDuration { get; }` |
| `GotPositionXOffset` | `public bool GotPositionXOffset { get; }` |
| `GotPositionYOffset` | `public bool GotPositionYOffset { get; }` |
| `GotSuggestedWidth` | `public bool GotSuggestedWidth { get; }` |
| `GotSuggestedHeight` | `public bool GotSuggestedHeight { get; }` |
| `GotMarginTop` | `public bool GotMarginTop { get; }` |
| `GotMarginBottom` | `public bool GotMarginBottom { get; }` |
| `GotMarginLeft` | `public bool GotMarginLeft { get; }` |
| `GotMarginRight` | `public bool GotMarginRight { get; }` |

## Key Methods

### FillFromWidget
`public void FillFromWidget(Widget widget)`

**Purpose:** Handles logic related to `fill from widget`.

## Usage Example

```csharp
// First obtain a VisualState instance from game state, then call one of its public methods
var value = new VisualState();
value.FillFromWidget(widget);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
