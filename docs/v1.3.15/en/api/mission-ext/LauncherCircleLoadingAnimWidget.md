<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `LauncherCircleLoadingAnimWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
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

## Mental Model

Treat `LauncherCircleLoadingAnimWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

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
var widget = new LauncherCircleLoadingAnimWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)