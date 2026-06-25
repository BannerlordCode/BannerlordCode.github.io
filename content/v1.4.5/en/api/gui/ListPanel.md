---
title: "ListPanel"
description: "Auto-generated class reference for ListPanel."
---
# ListPanel

**Namespace:** TaleWorlds.GauntletUI.BaseTypes
**Module:** TaleWorlds.GauntletUI
**Type:** `public class ListPanel : Container`
**Base:** `Container`
**File:** `bin/TaleWorlds.GauntletUI/TaleWorlds.GauntletUI.BaseTypes/ListPanel.cs`

## Overview

`ListPanel` lives in `TaleWorlds.GauntletUI.BaseTypes` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI.BaseTypes` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `StackLayout` | `public StackLayout StackLayout { get; }` |
| `AcceptDropPredicate` | `public override Predicate<Widget> AcceptDropPredicate { get; set; }` |
| `ResetSelectedOnLosingFocus` | `public bool ResetSelectedOnLosingFocus { get; set; }` |

## Key Methods

### GetIndexForDrop
`public override int GetIndexForDrop(Vector2 mousePosition)`

**Purpose:** **Purpose:** Reads and returns the index for drop value held by the this instance.

```csharp
// Obtain an instance of ListPanel from the subsystem API first
ListPanel listPanel = ...;
var result = listPanel.GetIndexForDrop(mousePosition);
```

### GetDropGizmoPosition
`public override Vector2 GetDropGizmoPosition(Vector2 mousePosition)`

**Purpose:** **Purpose:** Reads and returns the drop gizmo position value held by the this instance.

```csharp
// Obtain an instance of ListPanel from the subsystem API first
ListPanel listPanel = ...;
var result = listPanel.GetDropGizmoPosition(mousePosition);
```

### OnChildSelected
`public override void OnChildSelected(Widget widget)`

**Purpose:** **Purpose:** Invoked when the child selected event is raised.

```csharp
// Obtain an instance of ListPanel from the subsystem API first
ListPanel listPanel = ...;
listPanel.OnChildSelected(widget);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ListPanel listPanel = ...;
listPanel.GetIndexForDrop(mousePosition);
```

## See Also

- [Area Index](../)