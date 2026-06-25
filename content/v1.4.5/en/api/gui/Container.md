---
title: "Container"
description: "Auto-generated class reference for Container."
---
# Container

**Namespace:** TaleWorlds.GauntletUI.BaseTypes
**Module:** TaleWorlds.GauntletUI
**Type:** `public abstract class Container : Widget`
**Base:** `Widget`
**File:** `bin/TaleWorlds.GauntletUI/TaleWorlds.GauntletUI.BaseTypes/Container.cs`

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

**Purpose:** **Purpose:** Reads and returns the drop gizmo position value held by the this instance.

```csharp
// Obtain an instance of Container from the subsystem API first
Container container = ...;
var result = container.GetDropGizmoPosition(draggedWidgetPosition);
```

### GetIndexForDrop
`public abstract int GetIndexForDrop(Vector2 draggedWidgetPosition)`

**Purpose:** **Purpose:** Reads and returns the index for drop value held by the this instance.

```csharp
// Obtain an instance of Container from the subsystem API first
Container container = ...;
var result = container.GetIndexForDrop(draggedWidgetPosition);
```

### OnChildSelected
`public abstract void OnChildSelected(Widget widget)`

**Purpose:** **Purpose:** Invoked when the child selected event is raised.

```csharp
// Obtain an instance of Container from the subsystem API first
Container container = ...;
container.OnChildSelected(widget);
```

### GetItemDescription
`public ContainerItemDescription GetItemDescription(string id, int index)`

**Purpose:** **Purpose:** Reads and returns the item description value held by the this instance.

```csharp
// Obtain an instance of Container from the subsystem API first
Container container = ...;
var result = container.GetItemDescription("example", 0);
```

### AddItemDescription
`public void AddItemDescription(ContainerItemDescription itemDescription)`

**Purpose:** **Purpose:** Adds item description to the current collection or state.

```csharp
// Obtain an instance of Container from the subsystem API first
Container container = ...;
container.AddItemDescription(itemDescription);
```

### FindParentPanel
`public ScrollablePanel FindParentPanel()`

**Purpose:** **Purpose:** Looks up the matching parent panel in the current collection or scope.

```csharp
// Obtain an instance of Container from the subsystem API first
Container container = ...;
var result = container.FindParentPanel();
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
Container instance = ...;
```

## See Also

- [Area Index](../)