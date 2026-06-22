<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SelectorWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SelectorWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SelectorWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/SelectorWidget.cs`

## Overview

`SelectorWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `ListPanelValue` | `public int ListPanelValue { get; set; }` |
| `CurrentSelectedIndex` | `public int CurrentSelectedIndex { get; set; }` |
| `Container` | `public Container Container { get; set; }` |

## Key Methods

### OnListChanged
```csharp
public void OnListChanged(Widget widget)
```

### OnListChanged
```csharp
public void OnListChanged(Widget parentWidget, Widget addedWidget)
```

### OnSelectionChanged
```csharp
public void OnSelectionChanged(Widget widget)
```

## Usage Example

```csharp
// Typical usage of SelectorWidget (Widget)
// 声明/访问一个 SelectorWidget
var widget = root.GetChild("selectorWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)