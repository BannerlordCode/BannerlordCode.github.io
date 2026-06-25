---
title: "MultiplayerClassLoadoutTroopInfoBrushWidget"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerClassLoadoutTroopInfoBrushWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerClassLoadoutTroopInfoBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.ClassLoadout
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerClassLoadoutTroopInfoBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/ClassLoadout/MultiplayerClassLoadoutTroopInfoBrushWidget.cs`

## Overview

`MultiplayerClassLoadoutTroopInfoBrushWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `MultiplayerClassLoadoutTroopInfoBrushWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `DefaultAlpha` | `public float DefaultAlpha { get; set; }` |

## Key Methods

### OnBrushChanged
`public override void OnBrushChanged()`

**Purpose:** Called when the `brush changed` event is raised.

## Usage Example

```csharp
var widget = new MultiplayerClassLoadoutTroopInfoBrushWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)