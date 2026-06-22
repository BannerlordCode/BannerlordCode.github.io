<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CreditsWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CreditsWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Credits
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CreditsWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Credits/CreditsWidget.cs`

## Overview

`CreditsWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `RootItemWidget` | `public Widget RootItemWidget { get; set; }` |
| `ScrollPixelsPerSecond` | `public float ScrollPixelsPerSecond { get; set; }` |
| `ManualScrollWaitTimer` | `public float ManualScrollWaitTimer { get; set; }` |

## Usage Example

```csharp
// Typical usage of CreditsWidget (Widget)
// 声明/访问一个 CreditsWidget
var widget = root.GetChild("creditsWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)