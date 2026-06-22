<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `LauncherOnlineImageTextureWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# LauncherOnlineImageTextureWidget

**Namespace:** TaleWorlds.MountAndBlade.Launcher.Library.CustomWidgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class LauncherOnlineImageTextureWidget : TextureWidget`
**Base:** `TextureWidget`
**File:** `TaleWorlds.MountAndBlade.Launcher.Library/CustomWidgets/LauncherOnlineImageTextureWidget.cs`

## Overview

`LauncherOnlineImageTextureWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `ImageSizePolicy` | `public LauncherOnlineImageTextureWidget.ImageSizePolicies ImageSizePolicy { get; set; }` |
| `OnlineImageSourceUrl` | `public string OnlineImageSourceUrl { get; set; }` |

## Usage Example

```csharp
// Typical usage of LauncherOnlineImageTextureWidget (Widget)
// 声明/访问一个 LauncherOnlineImageTextureWidget
var widget = root.GetChild("launcherOnlineImageTextureWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)