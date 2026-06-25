---
title: "MapNavigationHandler"
description: "Auto-generated class reference for MapNavigationHandler."
---
# MapNavigationHandler

**Namespace:** SandBox.View.Map.Navigation
**Module:** SandBox.View
**Type:** `public class MapNavigationHandler : INavigationHandler`
**Base:** `INavigationHandler`
**File:** `Modules.SandBox/SandBox.View/SandBox.View.Map.Navigation/MapNavigationHandler.cs`

## Overview

`MapNavigationHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `MapNavigationHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsNavigationLocked` | `public bool IsNavigationLocked { get; set; }` |

## Key Methods

### GetElements
`public INavigationElement GetElements()`

**Purpose:** **Purpose:** Reads and returns the elements value held by the this instance.

```csharp
// Obtain an instance of MapNavigationHandler from the subsystem API first
MapNavigationHandler mapNavigationHandler = ...;
var result = mapNavigationHandler.GetElements();
```

### IsAnyElementActive
`public bool IsAnyElementActive()`

**Purpose:** **Purpose:** Determines whether the this instance is in the any element active state or condition.

```csharp
// Obtain an instance of MapNavigationHandler from the subsystem API first
MapNavigationHandler mapNavigationHandler = ...;
var result = mapNavigationHandler.IsAnyElementActive();
```

### GetElement
`public INavigationElement GetElement(string id)`

**Purpose:** **Purpose:** Reads and returns the element value held by the this instance.

```csharp
// Obtain an instance of MapNavigationHandler from the subsystem API first
MapNavigationHandler mapNavigationHandler = ...;
var result = mapNavigationHandler.GetElement("example");
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<MapNavigationHandler>();
```

## See Also

- [Area Index](../)