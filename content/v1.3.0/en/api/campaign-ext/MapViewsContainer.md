---
title: "MapViewsContainer"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MapViewsContainer`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MapViewsContainer

**Namespace:** SandBox.View.Map
**Module:** SandBox.View
**Type:** `public class MapViewsContainer`
**Base:** none
**File:** `SandBox.View/Map/MapViewsContainer.cs`

## Overview

`MapViewsContainer` lives in `SandBox.View.Map` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.View.Map` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Add
`public void Add(MapView mapView)`

**Purpose:** Adds `add` to the current collection or state.

### Remove
`public void Remove(MapView mapView)`

**Purpose:** Removes `remove` from the current collection or state.

### Contains
`public bool Contains(MapView mapView)`

**Purpose:** Handles logic related to `contains`.

### Foreach
`public void Foreach(Action<MapView> action)`

**Purpose:** Handles logic related to `foreach`.

### ForeachReverse
`public void ForeachReverse(Action<MapView> action)`

**Purpose:** Handles logic related to `foreach reverse`.

### ReturnFirstElementWithCondition
`public MapView ReturnFirstElementWithCondition(Func<MapView, bool> condition)`

**Purpose:** Handles logic related to `return first element with condition`.

### GetContextToChangeTo
`public TutorialContexts GetContextToChangeTo()`

**Purpose:** Gets the current value of `context to change to`.

### IsThereAnyViewIsEscaped
`public bool IsThereAnyViewIsEscaped()`

**Purpose:** Handles logic related to `is there any view is escaped`.

### IsOpeningEscapeMenuOnFocusChangeAllowedForAll
`public bool IsOpeningEscapeMenuOnFocusChangeAllowedForAll()`

**Purpose:** Handles logic related to `is opening escape menu on focus change allowed for all`.

## Usage Example

```csharp
var value = new MapViewsContainer();
value.Add(mapView);
```

## See Also

- [Complete Class Catalog](../catalog)