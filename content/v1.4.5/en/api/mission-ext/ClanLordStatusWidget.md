---
title: "ClanLordStatusWidget"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ClanLordStatusWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ClanLordStatusWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Clan
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ClanLordStatusWidget`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Clan/ClanLordStatusWidget.cs`

## Overview

`ClanLordStatusWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `ClanLordStatusWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `StatusType` | `public int StatusType { get; set; }` |

## Key Methods

### ClanLordStatusWidget
`public class ClanLordStatusWidget(UIContext context)`

**Purpose:** Handles logic related to `clan lord status widget`.

## Usage Example

```csharp
var widget = new ClanLordStatusWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)