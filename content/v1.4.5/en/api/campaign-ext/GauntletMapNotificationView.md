---
title: "GauntletMapNotificationView"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GauntletMapNotificationView`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GauntletMapNotificationView

**Namespace:** SandBox.GauntletUI.Map
**Module:** SandBox.GauntletUI
**Type:** `public class GauntletMapNotificationView : MapNotificationView`
**Base:** `MapNotificationView`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.GauntletUI/SandBox.GauntletUI.Map/GauntletMapNotificationView.cs`

## Overview

`GauntletMapNotificationView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `GauntletMapNotificationView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### RegisterMapNotificationType
`public override void RegisterMapNotificationType(Type data, Type item)`

**Purpose:** Handles logic related to `register map notification type`.

### ResetNotifications
`public override void ResetNotifications()`

**Purpose:** Resets `notifications` to its initial state.

## Usage Example

```csharp
var view = new GauntletMapNotificationView();
```

## See Also

- [Complete Class Catalog](../catalog)