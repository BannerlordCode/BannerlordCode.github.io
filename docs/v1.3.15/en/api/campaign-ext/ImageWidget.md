<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ImageWidget`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ImageWidget

**Namespace:** TaleWorlds.GauntletUI.BaseTypes
**Module:** TaleWorlds.GauntletUI
**Type:** `public class ImageWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/ImageWidget.cs`

## Overview

`ImageWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `OverrideDefaultStateSwitchingEnabled` | `public bool OverrideDefaultStateSwitchingEnabled { get; set; }` |
| `OverrideDefaultStateSwitchingDisabled` | `public bool OverrideDefaultStateSwitchingDisabled { get { return !this.OverrideDefaultStateSwitchingEnabled; }` |

## Usage Example

```csharp
// Typical usage of ImageWidget (Widget)
// 声明/访问一个 ImageWidget
var widget = root.GetChild("imageWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)