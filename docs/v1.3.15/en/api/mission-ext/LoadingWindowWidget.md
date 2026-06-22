<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `LoadingWindowWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# LoadingWindowWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Loading
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class LoadingWindowWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Loading/LoadingWindowWidget.cs`

## Overview

`LoadingWindowWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `AnimWidget` | `public Widget AnimWidget { get; set; }` |
| `IsActive` | `public bool IsActive { get; set; }` |
| `ImageName` | `public string ImageName { get; set; }` |

## Usage Example

```csharp
// Typical usage of LoadingWindowWidget (Widget)
// 声明/访问一个 LoadingWindowWidget
var widget = root.GetChild("loadingWindowWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)