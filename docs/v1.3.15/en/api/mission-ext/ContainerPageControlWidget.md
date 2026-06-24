<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ContainerPageControlWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ContainerPageControlWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ContainerPageControlWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/ContainerPageControlWidget.cs`

## Overview

`ContainerPageControlWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `ContainerPageControlWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `PageCount` | `public int PageCount { get; }` |
| `PageButtonsContext` | `public NavigationScopeTargeter PageButtonsContext { get; set; }` |
| `ItemPerPage` | `public int ItemPerPage { get; set; }` |
| `LoopNavigation` | `public bool LoopNavigation { get; set; }` |
| `Container` | `public Container Container { get; set; }` |
| `NextPageButton` | `public ButtonWidget NextPageButton { get; set; }` |
| `PreviousPageButton` | `public ButtonWidget PreviousPageButton { get; set; }` |
| `PageText` | `public TextWidget PageText { get; set; }` |

## Usage Example

```csharp
var widget = new ContainerPageControlWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)