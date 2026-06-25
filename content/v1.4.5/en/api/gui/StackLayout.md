---
title: "StackLayout"
description: "Auto-generated class reference for StackLayout."
---
# StackLayout

**Namespace:** TaleWorlds.GauntletUI.Layout
**Module:** TaleWorlds.GauntletUI
**Type:** `public class StackLayout : ILayout`
**Base:** `ILayout`
**File:** `bin/TaleWorlds.GauntletUI/TaleWorlds.GauntletUI.Layout/StackLayout.cs`

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

**Purpose:** Reads and returns the `item description` value held by the current object.

```csharp
// Obtain an instance of StackLayout from the subsystem API first
StackLayout stackLayout = ...;
var result = stackLayout.GetItemDescription(owner, child, 0);
```

### MeasureChildren
`public Vector2 MeasureChildren(Widget widget, Vector2 measureSpec, SpriteData spriteData, float renderScale)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of StackLayout from the subsystem API first
StackLayout stackLayout = ...;
var result = stackLayout.MeasureChildren(widget, measureSpec, spriteData, 0);
```

### OnLayout
`public void OnLayout(Widget widget, float left, float bottom, float right, float top)`

**Purpose:** Invoked when the `layout` event is raised.

```csharp
// Obtain an instance of StackLayout from the subsystem API first
StackLayout stackLayout = ...;
stackLayout.OnLayout(widget, 0, 0, 0, 0);
```

### GetIndexForDrop
`public int GetIndexForDrop(Container widget, Vector2 draggedWidgetPosition)`

**Purpose:** Reads and returns the `index for drop` value held by the current object.

```csharp
// Obtain an instance of StackLayout from the subsystem API first
StackLayout stackLayout = ...;
var result = stackLayout.GetIndexForDrop(widget, draggedWidgetPosition);
```

### GetDropGizmoPosition
`public Vector2 GetDropGizmoPosition(Container widget, Vector2 draggedWidgetPosition)`

**Purpose:** Reads and returns the `drop gizmo position` value held by the current object.

```csharp
// Obtain an instance of StackLayout from the subsystem API first
StackLayout stackLayout = ...;
var result = stackLayout.GetDropGizmoPosition(widget, draggedWidgetPosition);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
StackLayout stackLayout = ...;
stackLayout.GetItemDescription(owner, child, 0);
```

## See Also

- [Area Index](../)