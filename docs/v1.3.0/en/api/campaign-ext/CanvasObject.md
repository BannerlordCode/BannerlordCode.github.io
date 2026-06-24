<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CanvasObject`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CanvasObject

**Namespace:** TaleWorlds.GauntletUI.Canvas
**Module:** TaleWorlds.GauntletUI
**Type:** `public class CanvasObject`
**Base:** none
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/Canvas/CanvasObject.cs`

## Overview

`CanvasObject` lives in `TaleWorlds.GauntletUI.Canvas` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI.Canvas` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Parent` | `public CanvasObject Parent { get; }` |
| `Children` | `public List<CanvasObject> Children { get; }` |
| `Scale` | `public float Scale { get; }` |
| `LocalPosition` | `public Vector2 LocalPosition { get; }` |
| `Width` | `public float Width { get; }` |
| `Height` | `public float Height { get; }` |
| `FontFactory` | `public FontFactory FontFactory { get; }` |
| `SpriteData` | `public SpriteData SpriteData { get; }` |

## Key Methods

### Update
`public virtual void Update(float scale)`

**Purpose:** Updates the state or data of `update`.

### BeginMeasure
`public void BeginMeasure(bool fixedWidth, bool fixedHeight, float width, float height)`

**Purpose:** Handles logic related to `begin measure`.

### DoMeasure
`public void DoMeasure()`

**Purpose:** Handles logic related to `do measure`.

### DoLayout
`public void DoLayout()`

**Purpose:** Handles logic related to `do layout`.

### GetMarginSize
`public virtual Vector2 GetMarginSize()`

**Purpose:** Gets the current value of `margin size`.

### DoRender
`public void DoRender(Vector2 globalPosition, TwoDimensionDrawContext drawContext)`

**Purpose:** Handles logic related to `do render`.

## Usage Example

```csharp
var value = new CanvasObject();
value.Update(0);
```

## See Also

- [Complete Class Catalog](../catalog)