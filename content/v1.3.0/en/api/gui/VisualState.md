---
title: "VisualState"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `VisualState`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# VisualState

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public class VisualState`
**Base:** none
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/VisualState.cs`

## Overview

`VisualState` lives in `TaleWorlds.GauntletUI` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

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
var value = new VisualState();
value.FillFromWidget(widget);
```

## See Also

- [Complete Class Catalog](../catalog)