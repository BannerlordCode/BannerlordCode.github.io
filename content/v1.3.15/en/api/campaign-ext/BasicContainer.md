---
title: "BasicContainer"
description: "Auto-generated class reference for BasicContainer."
---
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

**Purpose:** **Purpose:** Reads and returns the drop gizmo position value held by the this instance.

```csharp
// Obtain an instance of BasicContainer from the subsystem API first
BasicContainer basicContainer = ...;
var result = basicContainer.GetDropGizmoPosition(draggedWidgetPosition);
```

### GetIndexForDrop
`public override int GetIndexForDrop(Vector2 draggedWidgetPosition)`

**Purpose:** **Purpose:** Reads and returns the index for drop value held by the this instance.

```csharp
// Obtain an instance of BasicContainer from the subsystem API first
BasicContainer basicContainer = ...;
var result = basicContainer.GetIndexForDrop(draggedWidgetPosition);
```

### OnChildSelected
`public override void OnChildSelected(Widget widget)`

**Purpose:** **Purpose:** Invoked when the child selected event is raised.

```csharp
// Obtain an instance of BasicContainer from the subsystem API first
BasicContainer basicContainer = ...;
basicContainer.OnChildSelected(widget);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
BasicContainer basicContainer = ...;
basicContainer.GetDropGizmoPosition(draggedWidgetPosition);
```

## See Also

- [Area Index](../)