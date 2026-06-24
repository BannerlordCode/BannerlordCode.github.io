<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `LauncherNewsWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# LauncherNewsWidget

**Namespace:** TaleWorlds.MountAndBlade.Launcher.Library.CustomWidgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class LauncherNewsWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.Launcher.Library/CustomWidgets/LauncherNewsWidget.cs`

## Overview

`LauncherNewsWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `LauncherNewsWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `TimeToShowNewsItemInSeconds` | `public float TimeToShowNewsItemInSeconds { get; set; }` |
| `RadioButtonContainer` | `public ListPanel RadioButtonContainer { get; set; }` |
| `TimeLeftFillWidget` | `public Widget TimeLeftFillWidget { get; set; }` |

## Usage Example

```csharp
var widget = new LauncherNewsWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)