<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ContextMenuItemWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ContextMenuItemWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ContextMenuItemWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/ContextMenuItemWidget.cs`

## Overview

`ContextMenuItemWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `TypeIconWidget` | `public Widget TypeIconWidget { get; set; }` |
| `ActionButtonWidget` | `public ButtonWidget ActionButtonWidget { get; set; }` |
| `TypeIconState` | `public string TypeIconState { get; set; }` |
| `CanBeUsed` | `public bool CanBeUsed { get; set; }` |

## Usage Example

```csharp
// Typical usage of ContextMenuItemWidget (Widget)
// 声明/访问一个 ContextMenuItemWidget
var widget = root.GetChild("contextMenuItemWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)