<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TabControlWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
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

## Key Properties

| Name | Signature |
|------|-----------|
| `FirstButton` | `public ButtonWidget FirstButton { get; set; }` |
| `SecondButton` | `public ButtonWidget SecondButton { get; set; }` |
| `SecondItem` | `public Widget SecondItem { get; set; }` |
| `FirstItem` | `public Widget FirstItem { get; set; }` |

## Key Methods

### OnFirstButtonClick
```csharp
public void OnFirstButtonClick(Widget widget)
```

### OnSecondButtonClick
```csharp
public void OnSecondButtonClick(Widget widget)
```

## Usage Example

```csharp
// Typical usage of TabControlWidget (Widget)
// 声明/访问一个 TabControlWidget
var widget = root.GetChild("tabControlWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)