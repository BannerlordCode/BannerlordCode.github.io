---
title: "MapNavigationHandler"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MapNavigationHandler`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MapNavigationHandler

**Namespace:** SandBox.View.Map.Navigation
**Module:** SandBox.View
**Type:** `public class MapNavigationHandler : INavigationHandler`
**Base:** `INavigationHandler`
**File:** `SandBox.View/Map/Navigation/MapNavigationHandler.cs`

## Overview

`MapNavigationHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `MapNavigationHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsNavigationLocked` | `public bool IsNavigationLocked { get; set; }` |
| `IsEscapeMenuActive` | `public bool IsEscapeMenuActive { get; }` |

## Key Methods

### GetElements
`public INavigationElement GetElements()`

**Purpose:** Gets the current value of `elements`.

### IsAnyElementActive
`public bool IsAnyElementActive()`

**Purpose:** Handles logic related to `is any element active`.

### GetElement
`public INavigationElement GetElement(string id)`

**Purpose:** Gets the current value of `element`.

## Usage Example

```csharp
Mission.Current.AddMissionBehavior(new MapNavigationHandler());
```

## See Also

- [Complete Class Catalog](../catalog)