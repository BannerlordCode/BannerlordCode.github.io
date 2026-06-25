---
title: "MapViewsContainer"
description: "Auto-generated class reference for MapViewsContainer."
---
# MapViewsContainer

**Namespace:** SandBox.View.Map
**Module:** SandBox.View
**Type:** `public class MapViewsContainer`
**Base:** none
**File:** `Modules.SandBox/SandBox.View/SandBox.View.Map/MapViewsContainer.cs`

## Overview

`MapViewsContainer` lives in `SandBox.View.Map` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.View.Map` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Add
`public void Add(MapView mapView)`

**Purpose:** **Purpose:** Adds an item to the current collection or state.

```csharp
// Obtain an instance of MapViewsContainer from the subsystem API first
MapViewsContainer mapViewsContainer = ...;
mapViewsContainer.Add(mapView);
```

### Remove
`public void Remove(MapView mapView)`

**Purpose:** **Purpose:** Removes an item from the current collection or state.

```csharp
// Obtain an instance of MapViewsContainer from the subsystem API first
MapViewsContainer mapViewsContainer = ...;
mapViewsContainer.Remove(mapView);
```

### Contains
`public bool Contains(MapView mapView)`

**Purpose:** **Purpose:** Indicates whether the this instance contains the specified item.

```csharp
// Obtain an instance of MapViewsContainer from the subsystem API first
MapViewsContainer mapViewsContainer = ...;
var result = mapViewsContainer.Contains(mapView);
```

### Foreach
`public void Foreach(Action<MapView> action)`

**Purpose:** **Purpose:** Executes the Foreach logic.

```csharp
// Obtain an instance of MapViewsContainer from the subsystem API first
MapViewsContainer mapViewsContainer = ...;
mapViewsContainer.Foreach(action);
```

### ForeachReverse
`public void ForeachReverse(Action<MapView> action)`

**Purpose:** **Purpose:** Executes the ForeachReverse logic.

```csharp
// Obtain an instance of MapViewsContainer from the subsystem API first
MapViewsContainer mapViewsContainer = ...;
mapViewsContainer.ForeachReverse(action);
```

### ReturnFirstElementWithCondition
`public MapView ReturnFirstElementWithCondition(Func<MapView, bool> condition)`

**Purpose:** **Purpose:** Executes the ReturnFirstElementWithCondition logic.

```csharp
// Obtain an instance of MapViewsContainer from the subsystem API first
MapViewsContainer mapViewsContainer = ...;
var result = mapViewsContainer.ReturnFirstElementWithCondition(func<MapView, false);
```

### GetContextToChangeTo
`public TutorialContexts GetContextToChangeTo()`

**Purpose:** **Purpose:** Reads and returns the context to change to value held by the this instance.

```csharp
// Obtain an instance of MapViewsContainer from the subsystem API first
MapViewsContainer mapViewsContainer = ...;
var result = mapViewsContainer.GetContextToChangeTo();
```

### IsThereAnyViewIsEscaped
`public bool IsThereAnyViewIsEscaped()`

**Purpose:** **Purpose:** Determines whether the this instance is in the there any view is escaped state or condition.

```csharp
// Obtain an instance of MapViewsContainer from the subsystem API first
MapViewsContainer mapViewsContainer = ...;
var result = mapViewsContainer.IsThereAnyViewIsEscaped();
```

### IsOpeningEscapeMenuOnFocusChangeAllowedForAll
`public bool IsOpeningEscapeMenuOnFocusChangeAllowedForAll()`

**Purpose:** **Purpose:** Determines whether the this instance is in the opening escape menu on focus change allowed for all state or condition.

```csharp
// Obtain an instance of MapViewsContainer from the subsystem API first
MapViewsContainer mapViewsContainer = ...;
var result = mapViewsContainer.IsOpeningEscapeMenuOnFocusChangeAllowedForAll();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MapViewsContainer mapViewsContainer = ...;
mapViewsContainer.Add(mapView);
```

## See Also

- [Area Index](../)