<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ContainerPageControlButtonListWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ContainerPageControlButtonListWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ContainerPageControlButtonListWidget : ContainerPageControlWidget`
**Base:** `ContainerPageControlWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/ContainerPageControlButtonListWidget.cs`

## Overview

`ContainerPageControlButtonListWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `PageButtonTemplate` | `public ButtonWidget PageButtonTemplate { get; set; }` |
| `FullButtonBrush` | `public string FullButtonBrush { get; set; }` |
| `EmptyButtonBrush` | `public string EmptyButtonBrush { get; set; }` |
| `PageButtonItemsListPanel` | `public ListPanel PageButtonItemsListPanel { get; set; }` |

## Usage Example

```csharp
// Typical usage of ContainerPageControlButtonListWidget (Widget)
// 声明/访问一个 ContainerPageControlButtonListWidget
var widget = root.GetChild("containerPageControlButtonListWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)