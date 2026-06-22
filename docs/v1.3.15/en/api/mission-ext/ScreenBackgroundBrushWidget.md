<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ScreenBackgroundBrushWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ScreenBackgroundBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ScreenBackgroundBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/ScreenBackgroundBrushWidget.cs`

## Overview

`ScreenBackgroundBrushWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsParticleVisible` | `public bool IsParticleVisible { get; set; }` |
| `IsSmokeVisible` | `public bool IsSmokeVisible { get; set; }` |
| `IsFullscreenImageEnabled` | `public bool IsFullscreenImageEnabled { get; set; }` |
| `AnimEnabled` | `public bool AnimEnabled { get; set; }` |
| `ParticleWidget1` | `public Widget ParticleWidget1 { get; set; }` |
| `ParticleWidget2` | `public Widget ParticleWidget2 { get; set; }` |
| `SmokeWidget1` | `public Widget SmokeWidget1 { get; set; }` |
| `SmokeWidget2` | `public Widget SmokeWidget2 { get; set; }` |
| `SmokeSpeedModifier` | `public float SmokeSpeedModifier { get; set; }` |
| `ParticleSpeedModifier` | `public float ParticleSpeedModifier { get; set; }` |

## Usage Example

```csharp
// Typical usage of ScreenBackgroundBrushWidget (Widget)
// 声明/访问一个 ScreenBackgroundBrushWidget
var widget = root.GetChild("screenBackgroundBrushWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)