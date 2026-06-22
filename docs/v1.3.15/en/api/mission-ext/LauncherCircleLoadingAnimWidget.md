<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `LauncherCircleLoadingAnimWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# LauncherCircleLoadingAnimWidget

**Namespace:** TaleWorlds.MountAndBlade.Launcher.Library.CustomWidgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class LauncherCircleLoadingAnimWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.Launcher.Library/CustomWidgets/LauncherCircleLoadingAnimWidget.cs`

## Overview

`LauncherCircleLoadingAnimWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `NumOfCirclesInASecond` | `public float NumOfCirclesInASecond { get; set; }` |
| `NormalAlpha` | `public float NormalAlpha { get; set; }` |
| `FullAlpha` | `public float FullAlpha { get; set; }` |
| `CircleRadius` | `public float CircleRadius { get; set; }` |
| `StaySeconds` | `public float StaySeconds { get; set; }` |
| `IsMovementEnabled` | `public bool IsMovementEnabled { get; set; }` |
| `IsReverse` | `public bool IsReverse { get; set; }` |
| `FadeInSeconds` | `public float FadeInSeconds { get; set; }` |
| `FadeOutSeconds` | `public float FadeOutSeconds { get; set; }` |

## Usage Example

```csharp
// Typical usage of LauncherCircleLoadingAnimWidget (Widget)
// 声明/访问一个 LauncherCircleLoadingAnimWidget
var widget = root.GetChild("launcherCircleLoadingAnimWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)