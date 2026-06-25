---
title: "AreaMarker"
description: "Auto-generated class reference for AreaMarker."
---
# AreaMarker

**Namespace:** TaleWorlds.MountAndBlade.Objects
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AreaMarker : MissionObject, ITrackableBase`
**Base:** `MissionObject`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.Objects/AreaMarker.cs`

## Overview

`AreaMarker` lives in `TaleWorlds.MountAndBlade.Objects` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Objects` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### IsPositionInRange
`public bool IsPositionInRange(Vec3 position)`

**Purpose:** Determines whether the current object is in the `position in range` state or condition.

```csharp
// Obtain an instance of AreaMarker from the subsystem API first
AreaMarker areaMarker = ...;
var result = areaMarker.IsPositionInRange(position);
```

### GetUsableMachinesInRange
`public virtual List<UsableMachine> GetUsableMachinesInRange(string excludeTag = null)`

**Purpose:** Reads and returns the `usable machines in range` value held by the current object.

```csharp
// Obtain an instance of AreaMarker from the subsystem API first
AreaMarker areaMarker = ...;
var result = areaMarker.GetUsableMachinesInRange("example");
```

### GetUsableMachinesWithTagInRange
`public virtual List<UsableMachine> GetUsableMachinesWithTagInRange(string tag)`

**Purpose:** Reads and returns the `usable machines with tag in range` value held by the current object.

```csharp
// Obtain an instance of AreaMarker from the subsystem API first
AreaMarker areaMarker = ...;
var result = areaMarker.GetUsableMachinesWithTagInRange("example");
```

### GetGameEntitiesWithTagInRange
`public virtual List<GameEntity> GetGameEntitiesWithTagInRange(string tag)`

**Purpose:** Reads and returns the `game entities with tag in range` value held by the current object.

```csharp
// Obtain an instance of AreaMarker from the subsystem API first
AreaMarker areaMarker = ...;
var result = areaMarker.GetGameEntitiesWithTagInRange("example");
```

### GetName
`public virtual TextObject GetName()`

**Purpose:** Reads and returns the `name` value held by the current object.

```csharp
// Obtain an instance of AreaMarker from the subsystem API first
AreaMarker areaMarker = ...;
var result = areaMarker.GetName();
```

### GetPosition
`public virtual Vec3 GetPosition()`

**Purpose:** Reads and returns the `position` value held by the current object.

```csharp
// Obtain an instance of AreaMarker from the subsystem API first
AreaMarker areaMarker = ...;
var result = areaMarker.GetPosition();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
AreaMarker areaMarker = ...;
areaMarker.IsPositionInRange(position);
```

## See Also

- [Area Index](../)