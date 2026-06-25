---
title: "MapNotificationView"
description: "Auto-generated class reference for MapNotificationView."
---
# MapNotificationView

**Namespace:** SandBox.View.Map
**Module:** SandBox.View
**Type:** `public class MapNotificationView : MapView`
**Base:** `MapView`
**File:** `Modules.SandBox/SandBox.View/SandBox.View.Map/MapNotificationView.cs`

## Overview

`MapNotificationView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `MapNotificationView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### ResetNotifications
`public virtual void ResetNotifications()`

**Purpose:** Returns `notifications` to its default or initial condition.

```csharp
// Obtain an instance of MapNotificationView from the subsystem API first
MapNotificationView mapNotificationView = ...;
mapNotificationView.ResetNotifications();
```

### RegisterMapNotificationType
`public virtual void RegisterMapNotificationType(Type data, Type item)`

**Purpose:** Registers `map notification type` with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of MapNotificationView from the subsystem API first
MapNotificationView mapNotificationView = ...;
mapNotificationView.RegisterMapNotificationType(data, item);
```

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
MapNotificationView view = ...;
```

## See Also

- [Area Index](../)