<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BasicContainer`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BasicContainer

**Namespace:** TaleWorlds.GauntletUI.BaseTypes
**Module:** TaleWorlds.GauntletUI
**Type:** `public class BasicContainer : Container`
**Base:** `Container`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/BasicContainer.cs`

## Overview

`BasicContainer` lives in `TaleWorlds.GauntletUI.BaseTypes` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI.BaseTypes` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `AcceptDropPredicate` | `public override Predicate<Widget> AcceptDropPredicate { get; set; }` |
| `IsDragHovering` | `public override bool IsDragHovering { get; }` |

## Key Methods

### GetDropGizmoPosition
`public override Vector2 GetDropGizmoPosition(Vector2 draggedWidgetPosition)`

**Purpose:** Gets the current value of `drop gizmo position`.

### GetIndexForDrop
`public override int GetIndexForDrop(Vector2 draggedWidgetPosition)`

**Purpose:** Gets the current value of `index for drop`.

### OnChildSelected
`public override void OnChildSelected(Widget widget)`

**Purpose:** Called when the `child selected` event is raised.

## Usage Example

```csharp
var value = new BasicContainer();
value.GetDropGizmoPosition(draggedWidgetPosition);
```

## See Also

- [Complete Class Catalog](../catalog)