---
title: "MapCursor"
description: "Auto-generated class reference for MapCursor."
---
# MapCursor

**Namespace:** SandBox.View.Map
**Module:** SandBox.View
**Type:** `public class MapCursor`
**Base:** none
**File:** `SandBox.View/Map/MapCursor.cs`

## Overview

`MapCursor` lives in `SandBox.View.Map` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.View.Map` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Initialize
`public void Initialize(MapScreen parentMapScreen)`

**Purpose:** **Purpose:** Prepares the resources, state, or bindings the this instance needs before use.

```csharp
// Obtain an instance of MapCursor from the subsystem API first
MapCursor mapCursor = ...;
mapCursor.Initialize(parentMapScreen);
```

### BeforeTick
`public void BeforeTick(float dt)`

**Purpose:** **Purpose:** Executes the BeforeTick logic.

```csharp
// Obtain an instance of MapCursor from the subsystem API first
MapCursor mapCursor = ...;
mapCursor.BeforeTick(0);
```

### SetVisible
`public void SetVisible(bool value)`

**Purpose:** **Purpose:** Assigns a new value to visible and updates the object's internal state.

```csharp
// Obtain an instance of MapCursor from the subsystem API first
MapCursor mapCursor = ...;
mapCursor.SetVisible(false);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MapCursor mapCursor = ...;
mapCursor.Initialize(parentMapScreen);
```

## See Also

- [Area Index](../)