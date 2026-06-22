<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `LauncherHintWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# LauncherHintWidget

**Namespace:** TaleWorlds.MountAndBlade.Launcher.Library.CustomWidgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class LauncherHintWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.Launcher.Library/CustomWidgets/LauncherHintWidget.cs`

## Overview

`LauncherHintWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsActive` | `public bool IsActive { get; set; }` |

## Usage Example

```csharp
// Typical usage of LauncherHintWidget (Widget)
// 声明/访问一个 LauncherHintWidget
var widget = root.GetChild("launcherHintWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)