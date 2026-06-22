<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `RadioContainerWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# RadioContainerWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class RadioContainerWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/RadioContainerWidget.cs`

## Overview

`RadioContainerWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `SelectedIndex` | `public int SelectedIndex { get; set; }` |
| `Container` | `public Container Container { get; set; }` |

## Usage Example

```csharp
// Typical usage of RadioContainerWidget (Widget)
// 声明/访问一个 RadioContainerWidget
var widget = root.GetChild("radioContainerWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)