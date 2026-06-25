---
title: "MultiplayerDeathCardWidget"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerDeathCardWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerDeathCardWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.HUD
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerDeathCardWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/HUD/MultiplayerDeathCardWidget.cs`

## Overview

`MultiplayerDeathCardWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `MultiplayerDeathCardWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `WeaponTextWidget` | `public TextWidget WeaponTextWidget { get; set; }` |
| `TitleTextWidget` | `public TextWidget TitleTextWidget { get; set; }` |
| `KillerNameTextWidget` | `public ScrollingRichTextWidget KillerNameTextWidget { get; set; }` |
| `KillCountContainer` | `public Widget KillCountContainer { get; set; }` |
| `SelfInflictedTitleBrush` | `public Brush SelfInflictedTitleBrush { get; set; }` |
| `NormalBrushTitleBrush` | `public Brush NormalBrushTitleBrush { get; set; }` |
| `FadeInModifier` | `public float FadeInModifier { get; set; }` |
| `FadeOutModifier` | `public float FadeOutModifier { get; set; }` |
| `StayTime` | `public float StayTime { get; set; }` |
| `IsActive` | `public bool IsActive { get; set; }` |
| `IsSelfInflicted` | `public bool IsSelfInflicted { get; set; }` |
| `KillCountsEnabled` | `public bool KillCountsEnabled { get; set; }` |

## Usage Example

```csharp
var widget = new MultiplayerDeathCardWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)