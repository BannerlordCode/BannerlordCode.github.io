<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `LauncherRandomImageWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# LauncherRandomImageWidget

**Namespace:** TaleWorlds.MountAndBlade.Launcher.Library.CustomWidgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class LauncherRandomImageWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.Launcher.Library/CustomWidgets/LauncherRandomImageWidget.cs`

## Overview

`LauncherRandomImageWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `ImageCount` | `public int ImageCount { get; set; }` |
| `ChangeTrigger` | `public bool ChangeTrigger { get; set; }` |

## Usage Example

```csharp
// Typical usage of LauncherRandomImageWidget (Widget)
// 声明/访问一个 LauncherRandomImageWidget
var widget = root.GetChild("launcherRandomImageWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)