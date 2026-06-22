<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `InitialMenuAnimControllerWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# InitialMenuAnimControllerWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class InitialMenuAnimControllerWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/InitialMenuAnimControllerWidget.cs`

## Overview

`InitialMenuAnimControllerWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

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
// Typical usage of InitialMenuAnimControllerWidget (Widget)
// 声明/访问一个 InitialMenuAnimControllerWidget
var widget = root.GetChild("initialMenuAnimControllerWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)