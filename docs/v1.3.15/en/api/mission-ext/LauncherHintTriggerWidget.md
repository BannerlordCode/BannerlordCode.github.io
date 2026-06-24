<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `LauncherHintTriggerWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# LauncherHintTriggerWidget

**Namespace:** TaleWorlds.MountAndBlade.Launcher.Library.CustomWidgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class LauncherHintTriggerWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.Launcher.Library/CustomWidgets/LauncherHintTriggerWidget.cs`

## Overview

`LauncherHintTriggerWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `LauncherHintTriggerWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
var widget = new LauncherHintTriggerWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)