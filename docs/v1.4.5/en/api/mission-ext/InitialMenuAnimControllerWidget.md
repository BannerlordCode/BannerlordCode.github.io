<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `InitialMenuAnimControllerWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# InitialMenuAnimControllerWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class InitialMenuAnimControllerWidget : Widget`
**Base:** `Widget`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets/InitialMenuAnimControllerWidget.cs`

## Overview

`InitialMenuAnimControllerWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `InitialMenuAnimControllerWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsAnimEnabled` | `public bool IsAnimEnabled { get; set; }` |
| `OptionsList` | `public Widget OptionsList { get; set; }` |
| `InitialWaitTime` | `public float InitialWaitTime { get; set; }` |
| `WaitTimeBetweenOptions` | `public float WaitTimeBetweenOptions { get; set; }` |
| `OptionFadeInTime` | `public float OptionFadeInTime { get; set; }` |

## Usage Example

```csharp
var widget = new InitialMenuAnimControllerWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)