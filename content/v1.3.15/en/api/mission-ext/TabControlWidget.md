---
title: "TabControlWidget"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TabControlWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TabControlWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class TabControlWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/TabControlWidget.cs`

## Overview

`TabControlWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `TabControlWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `FirstButton` | `public ButtonWidget FirstButton { get; set; }` |
| `SecondButton` | `public ButtonWidget SecondButton { get; set; }` |
| `SecondItem` | `public Widget SecondItem { get; set; }` |
| `FirstItem` | `public Widget FirstItem { get; set; }` |

## Key Methods

### OnFirstButtonClick
`public void OnFirstButtonClick(Widget widget)`

**Purpose:** Called when the `first button click` event is raised.

### OnSecondButtonClick
`public void OnSecondButtonClick(Widget widget)`

**Purpose:** Called when the `second button click` event is raised.

## Usage Example

```csharp
var widget = new TabControlWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)