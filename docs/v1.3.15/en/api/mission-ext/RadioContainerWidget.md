<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `RadioContainerWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
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

## Mental Model

Treat `RadioContainerWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `SelectedIndex` | `public int SelectedIndex { get; set; }` |
| `Container` | `public Container Container { get; set; }` |

## Usage Example

```csharp
var widget = new RadioContainerWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)