<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `StackLayout`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# StackLayout

**Namespace:** TaleWorlds.GauntletUI.Layout
**Module:** TaleWorlds.GauntletUI
**Type:** `public class StackLayout : ILayout`
**Base:** `ILayout`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/Layout/StackLayout.cs`

## Overview

`StackLayout` lives in `TaleWorlds.GauntletUI.Layout` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI.Layout` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `DefaultItemDescription` | `public ContainerItemDescription DefaultItemDescription { get; }` |
| `LayoutMethod` | `public LayoutMethod LayoutMethod { get; set; }` |

## Key Methods

### GetItemDescription
`public ContainerItemDescription GetItemDescription(Widget owner, Widget child, int childIndex)`

**Purpose:** Gets the current value of `item description`.

### MeasureChildren
`public Vector2 MeasureChildren(Widget widget, Vector2 measureSpec, SpriteData spriteData, float renderScale)`

**Purpose:** Handles logic related to `measure children`.

### OnLayout
`public void OnLayout(Widget widget, float left, float bottom, float right, float top)`

**Purpose:** Called when the `layout` event is raised.

### GetIndexForDrop
`public int GetIndexForDrop(Container widget, Vector2 draggedWidgetPosition)`

**Purpose:** Gets the current value of `index for drop`.

### GetDropGizmoPosition
`public Vector2 GetDropGizmoPosition(Container widget, Vector2 draggedWidgetPosition)`

**Purpose:** Gets the current value of `drop gizmo position`.

## Usage Example

```csharp
var value = new StackLayout();
value.GetItemDescription(owner, child, 0);
```

## See Also

- [Complete Class Catalog](../catalog)