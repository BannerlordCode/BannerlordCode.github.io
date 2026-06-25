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

**Purpose:** Adds an item to the current collection or state.

```csharp
// Obtain an instance of MapViewsContainer from the subsystem API first
MapViewsContainer mapViewsContainer = ...;
mapViewsContainer.Add(mapView);
```

### Remove
`public void Remove(MapView mapView)`

**Purpose:** Removes an item from the current collection or state.

```csharp
// Obtain an instance of MapViewsContainer from the subsystem API first
MapViewsContainer mapViewsContainer = ...;
mapViewsContainer.Remove(mapView);
```

### Contains
`public bool Contains(MapView mapView)`

**Purpose:** Indicates whether the current object contains the specified item.

```csharp
// Obtain an instance of MapViewsContainer from the subsystem API first
MapViewsContainer mapViewsContainer = ...;
var result = mapViewsContainer.Contains(mapView);
```

### Foreach
`public void Foreach(Action<MapView> action)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MapViewsContainer from the subsystem API first
MapViewsContainer mapViewsContainer = ...;
mapViewsContainer.Foreach(action);
```

### ForeachReverse
`public void ForeachReverse(Action<MapView> action)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MapViewsContainer from the subsystem API first
MapViewsContainer mapViewsContainer = ...;
mapViewsContainer.ForeachReverse(action);
```

### ReturnFirstElementWithCondition
`public MapView ReturnFirstElementWithCondition(Func<MapView, bool> condition)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MapViewsContainer from the subsystem API first
MapViewsContainer mapViewsContainer = ...;
var result = mapViewsContainer.ReturnFirstElementWithCondition(func<MapView, false);
```

### GetContextToChangeTo
`public TutorialContexts GetContextToChangeTo()`

**Purpose:** Reads and returns the `context to change to` value held by the current object.

```csharp
// Obtain an instance of MapViewsContainer from the subsystem API first
MapViewsContainer mapViewsContainer = ...;
var result = mapViewsContainer.GetContextToChangeTo();
```

### IsThereAnyViewIsEscaped
`public bool IsThereAnyViewIsEscaped()`

**Purpose:** Determines whether the current object is in the `there any view is escaped` state or condition.

```csharp
// Obtain an instance of MapViewsContainer from the subsystem API first
MapViewsContainer mapViewsContainer = ...;
var result = mapViewsContainer.IsThereAnyViewIsEscaped();
```

### IsOpeningEscapeMenuOnFocusChangeAllowedForAll
`public bool IsOpeningEscapeMenuOnFocusChangeAllowedForAll()`

**Purpose:** Determines whether the current object is in the `opening escape menu on focus change allowed for all` state or condition.

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