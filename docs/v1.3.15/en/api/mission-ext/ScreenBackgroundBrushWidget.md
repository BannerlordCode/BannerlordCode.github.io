<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ScreenBackgroundBrushWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
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

## Mental Model

Treat `ScreenBackgroundBrushWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

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
var widget = new ScreenBackgroundBrushWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)