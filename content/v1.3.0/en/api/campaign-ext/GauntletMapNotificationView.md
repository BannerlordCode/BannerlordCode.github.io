---
title: "GauntletMapNotificationView"
description: "Auto-generated class reference for GauntletMapNotificationView."
---
# GauntletMapNotificationView

**Namespace:** SandBox.GauntletUI.Map
**Module:** SandBox.GauntletUI
**Type:** `public class GauntletMapNotificationView : MapNotificationView`
**Base:** `MapNotificationView`
**File:** `SandBox.GauntletUI/Map/GauntletMapNotificationView.cs`

## Overview

`GauntletMapNotificationView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `GauntletMapNotificationView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### RegisterMapNotificationType
`public override void RegisterMapNotificationType(Type data, Type item)`

**Purpose:** **Purpose:** Registers map notification type with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of GauntletMapNotificationView from the subsystem API first
GauntletMapNotificationView gauntletMapNotificationView = ...;
gauntletMapNotificationView.RegisterMapNotificationType(data, item);
```

### ResetNotifications
`public override void ResetNotifications()`

**Purpose:** **Purpose:** Returns notifications to its default or initial condition.

```csharp
// Obtain an instance of GauntletMapNotificationView from the subsystem API first
GauntletMapNotificationView gauntletMapNotificationView = ...;
gauntletMapNotificationView.ResetNotifications();
```

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
GauntletMapNotificationView view = ...;
```

## See Also

- [Area Index](../)