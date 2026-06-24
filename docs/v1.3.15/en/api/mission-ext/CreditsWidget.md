<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CreditsWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
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

## Mental Model

Treat `CreditsWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `RootItemWidget` | `public Widget RootItemWidget { get; set; }` |
| `ScrollPixelsPerSecond` | `public float ScrollPixelsPerSecond { get; set; }` |
| `ManualScrollWaitTimer` | `public float ManualScrollWaitTimer { get; set; }` |

## Usage Example

```csharp
var widget = new CreditsWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)