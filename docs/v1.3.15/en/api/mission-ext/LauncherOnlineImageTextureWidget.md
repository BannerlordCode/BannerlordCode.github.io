<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `LauncherOnlineImageTextureWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
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

## Mental Model

Treat `LauncherOnlineImageTextureWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `ImageSizePolicy` | `public LauncherOnlineImageTextureWidget.ImageSizePolicies ImageSizePolicy { get; set; }` |
| `OnlineImageSourceUrl` | `public string OnlineImageSourceUrl { get; set; }` |

## Usage Example

```csharp
var widget = new LauncherOnlineImageTextureWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)