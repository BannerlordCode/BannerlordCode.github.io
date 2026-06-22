<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerDeathCardWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
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
// Typical usage of MultiplayerDeathCardWidget (Widget)
// 声明/访问一个 MultiplayerDeathCardWidget
var widget = root.GetChild("multiplayerDeathCardWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)