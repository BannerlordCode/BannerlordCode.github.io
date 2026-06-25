---
title: "NameMarkerScreenWidget"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `NameMarkerScreenWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# NameMarkerScreenWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.NameMarker
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class NameMarkerScreenWidget : Widget`
**Base:** `Widget`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.NameMarker/NameMarkerScreenWidget.cs`

## Overview

`NameMarkerScreenWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `NameMarkerScreenWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsMarkersEnabled` | `public bool IsMarkersEnabled { get; set; }` |
| `TargetAlphaValue` | `public float TargetAlphaValue { get; set; }` |
| `MarkersContainer` | `public Widget MarkersContainer { get; set; }` |

## Usage Example

```csharp
var widget = new NameMarkerScreenWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)