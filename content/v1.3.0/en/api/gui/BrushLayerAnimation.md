---
title: "BrushLayerAnimation"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BrushLayerAnimation`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BrushLayerAnimation

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public class BrushLayerAnimation`
**Base:** none
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BrushLayerAnimation.cs`

## Overview

`BrushLayerAnimation` lives in `TaleWorlds.GauntletUI` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `LayerName` | `public string LayerName { get; set; }` |
| `Collections` | `public MBReadOnlyList<BrushAnimationProperty> Collections { get; }` |

## Key Methods

### AddAnimationProperty
`public void AddAnimationProperty(BrushAnimationProperty property)`

**Purpose:** Adds `animation property` to the current collection or state.

### Clone
`public BrushLayerAnimation Clone()`

**Purpose:** Handles logic related to `clone`.

## Usage Example

```csharp
var value = new BrushLayerAnimation();
value.AddAnimationProperty(property);
```

## See Also

- [Complete Class Catalog](../catalog)