<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MapNotificationView`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MapNotificationView

**Namespace:** SandBox.View.Map
**Module:** SandBox.View
**Type:** `public class MapNotificationView : MapView`
**Base:** `MapView`
**File:** `SandBox.View/Map/MapNotificationView.cs`

## Overview

`MapNotificationView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `MapNotificationView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### ResetNotifications
`public virtual void ResetNotifications()`

**Purpose:** Resets `notifications` to its initial state.

### RegisterMapNotificationType
`public virtual void RegisterMapNotificationType(Type data, Type item)`

**Purpose:** Handles logic related to `register map notification type`.

## Usage Example

```csharp
var view = new MapNotificationView();
```

## See Also

- [Complete Class Catalog](../catalog)