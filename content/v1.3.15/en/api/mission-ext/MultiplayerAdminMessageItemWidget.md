---
title: "MultiplayerAdminMessageItemWidget"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerAdminMessageItemWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerAdminMessageItemWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.AdminMessage
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerAdminMessageItemWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/AdminMessage/MultiplayerAdminMessageItemWidget.cs`

## Overview

`MultiplayerAdminMessageItemWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `MultiplayerAdminMessageItemWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### Remove
`public void Remove()`

**Purpose:** Removes `remove` from the current collection or state.

## Usage Example

```csharp
var widget = new MultiplayerAdminMessageItemWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)