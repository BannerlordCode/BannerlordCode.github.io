---
title: "Oriented2DArea"
description: "Auto-generated class reference for Oriented2DArea."
---
# Oriented2DArea

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public struct Oriented2DArea`
**Base:** none
**File:** `TaleWorlds.Library/Oriented2DArea.cs`

## Overview

`Oriented2DArea` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `GlobalCenter` | `public Vec2 GlobalCenter { get; }` |
| `GlobalForward` | `public Vec2 GlobalForward { get; }` |
| `LocalDimensions` | `public Vec2 LocalDimensions { get; }` |
| `TopLeft` | `public Vec2 TopLeft { get; }` |
| `TopRight` | `public Vec2 TopRight { get; }` |
| `BottomLeft` | `public Vec2 BottomLeft { get; }` |
| `BottomRight` | `public Vec2 BottomRight { get; }` |
| `this` | `public Vec2 this { get; }` |

## Key Methods

### SetGlobalCenter
`public void SetGlobalCenter(in Vec2 globalCenter)`

**Purpose:** Assigns a new value to global center and updates the object's internal state.

```csharp
// Obtain an instance of Oriented2DArea from the subsystem API first
Oriented2DArea oriented2DArea = ...;
oriented2DArea.SetGlobalCenter(globalCenter);
```

### SetLocalDimensions
`public void SetLocalDimensions(in Vec2 localDimensions)`

**Purpose:** Assigns a new value to local dimensions and updates the object's internal state.

```csharp
// Obtain an instance of Oriented2DArea from the subsystem API first
Oriented2DArea oriented2DArea = ...;
oriented2DArea.SetLocalDimensions(localDimensions);
```

### Overlaps
`public bool Overlaps(in Oriented2DArea otherArea, float clearanceMargin)`

**Purpose:** Executes the Overlaps logic.

```csharp
// Obtain an instance of Oriented2DArea from the subsystem API first
Oriented2DArea oriented2DArea = ...;
var result = oriented2DArea.Overlaps(otherArea, 0);
```

### Intersects
`public bool Intersects(in LineSegment2D line, float clearanceMargin)`

**Purpose:** Executes the Intersects logic.

```csharp
// Obtain an instance of Oriented2DArea from the subsystem API first
Oriented2DArea oriented2DArea = ...;
var result = oriented2DArea.Intersects(line, 0);
```

### GetCorners
`public Oriented2DArea.Corners GetCorners()`

**Purpose:** Reads and returns the corners value held by the this instance.

```csharp
// Obtain an instance of Oriented2DArea from the subsystem API first
Oriented2DArea oriented2DArea = ...;
var result = oriented2DArea.GetCorners();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
Oriented2DArea oriented2DArea = ...;
oriented2DArea.SetGlobalCenter(globalCenter);
```

## See Also

- [Area Index](../)