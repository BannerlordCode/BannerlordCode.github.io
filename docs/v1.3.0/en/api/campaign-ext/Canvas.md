<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Canvas`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# Canvas

**Namespace:** TaleWorlds.GauntletUI.Canvas
**Module:** TaleWorlds.GauntletUI
**Type:** `public class Canvas`
**Base:** none
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/Canvas/Canvas.cs`

## Overview

`Canvas` lives in `TaleWorlds.GauntletUI.Canvas` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI.Canvas` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Root` | `public CanvasObject Root { get; }` |

## Key Methods

### LoadFrom
`public void LoadFrom(XmlNode canvasNode)`

**Purpose:** Loads `from` data.

### Update
`public void Update(float scale)`

**Purpose:** Updates the state or data of `update`.

### DoMeasure
`public void DoMeasure(bool fixedWidth, bool fixedHeight, float width, float height)`

**Purpose:** Handles logic related to `do measure`.

### DoLayout
`public void DoLayout()`

**Purpose:** Handles logic related to `do layout`.

### DoRender
`public void DoRender(Vector2 globalPosition, TwoDimensionDrawContext drawContext)`

**Purpose:** Handles logic related to `do render`.

## Usage Example

```csharp
var value = new Canvas();
value.LoadFrom(canvasNode);
```

## See Also

- [Complete Class Catalog](../catalog)