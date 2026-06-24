<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `LauncherDragWindowAreaWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# LauncherDragWindowAreaWidget

**Namespace:** TaleWorlds.MountAndBlade.Launcher.Library.CustomWidgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class LauncherDragWindowAreaWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.Launcher.Library/CustomWidgets/LauncherDragWindowAreaWidget.cs`

## Overview

`LauncherDragWindowAreaWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `LauncherDragWindowAreaWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
var widget = new LauncherDragWindowAreaWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)