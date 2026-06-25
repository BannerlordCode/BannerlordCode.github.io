---
title: "Container"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Container`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# Container

**Namespace:** TaleWorlds.GauntletUI.BaseTypes
**Module:** TaleWorlds.GauntletUI
**Type:** `public abstract class Container : Widget`
**Base:** `Widget`
**File:** `Bannerlord.Source/bin/TaleWorlds.GauntletUI/TaleWorlds.GauntletUI.BaseTypes/Container.cs`

## Overview

`Container` lives in `TaleWorlds.GauntletUI.BaseTypes` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI.BaseTypes` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `DefaultItemDescription` | `public ContainerItemDescription DefaultItemDescription { get; }` |
| `AcceptDropPredicate` | `public abstract Predicate<Widget> AcceptDropPredicate { get; set; }` |
| `IntValue` | `public int IntValue { get; set; }` |
| `IsDragHovering` | `public abstract bool IsDragHovering { get; set; }` |
| `DragHoverInsertionIndex` | `public int DragHoverInsertionIndex { get; set; }` |
| `ClearSelectedOnRemoval` | `public bool ClearSelectedOnRemoval { get; set; }` |

## Key Methods

### GetDropGizmoPosition
`public abstract Vector2 GetDropGizmoPosition(Vector2 draggedWidgetPosition)`

**Purpose:** Gets the current value of `drop gizmo position`.

### GetIndexForDrop
`public abstract int GetIndexForDrop(Vector2 draggedWidgetPosition)`

**Purpose:** Gets the current value of `index for drop`.

### OnChildSelected
`public abstract void OnChildSelected(Widget widget)`

**Purpose:** Called when the `child selected` event is raised.

### GetItemDescription
`public ContainerItemDescription GetItemDescription(string id, int index)`

**Purpose:** Gets the current value of `item description`.

### AddItemDescription
`public void AddItemDescription(ContainerItemDescription itemDescription)`

**Purpose:** Adds `item description` to the current collection or state.

### FindParentPanel
`public ScrollablePanel FindParentPanel()`

**Purpose:** Handles logic related to `find parent panel`.

## Usage Example

```csharp
var implementation = new CustomContainer();
```

## See Also

- [Complete Class Catalog](../catalog)