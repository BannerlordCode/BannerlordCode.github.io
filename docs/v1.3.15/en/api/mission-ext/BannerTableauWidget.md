<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BannerTableauWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BannerTableauWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BannerTableauWidget : TextureWidget`
**Base:** `TextureWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/BannerTableauWidget.cs`

## Overview

`BannerTableauWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `BannerCodeText` | `public string BannerCodeText { get; set; }` |
| `CustomRenderScale` | `public float CustomRenderScale { get; set; }` |
| `IsNineGrid` | `public bool IsNineGrid { get; set; }` |
| `UpdatePositionValueManual` | `public Vec2 UpdatePositionValueManual { get; set; }` |
| `UpdateSizeValueManual` | `public Vec2 UpdateSizeValueManual { get; set; }` |
| `UpdateRotationValueManualWithMirror` | `public ValueTuple<float, bool> UpdateRotationValueManualWithMirror { get; set; }` |
| `MeshIndexToUpdate` | `public int MeshIndexToUpdate { get; set; }` |

## Usage Example

```csharp
// Typical usage of BannerTableauWidget (Widget)
// 声明/访问一个 BannerTableauWidget
var widget = root.GetChild("bannerTableauWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)