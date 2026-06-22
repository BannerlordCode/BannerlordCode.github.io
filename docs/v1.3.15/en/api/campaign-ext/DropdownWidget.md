<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DropdownWidget`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DropdownWidget

**Namespace:** TaleWorlds.GauntletUI.BaseTypes
**Module:** TaleWorlds.GauntletUI
**Type:** `public class DropdownWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/DropdownWidget.cs`

## Overview

`DropdownWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `TextWidget` | `public Widget TextWidget { get; set; }` |
| `DoNotHandleDropdownListPanel` | `public bool DoNotHandleDropdownListPanel { get; set; }` |
| `ScrollablePanel` | `public ScrollablePanel ScrollablePanel { get { return this._scrollablePanel; }` |
| `Button` | `public ButtonWidget Button { get { return this._button; }` |
| `ListPanel` | `public ListPanel ListPanel { get { return this._listPanel; }` |
| `IsOpen` | `public bool IsOpen { get { return this._isOpen; }` |
| `ListPanelValue` | `public int ListPanelValue { get { if (this.ListPanel != null) { return this.ListPanel.IntValue; }` |
| `CurrentSelectedIndex` | `public int CurrentSelectedIndex { get { return this._currentSelectedIndex; }` |

## Key Methods

### OnButtonClick
```csharp
public void OnButtonClick(Widget widget)
```

### UpdateButtonText
```csharp
public void UpdateButtonText(string text)
```

### OnListItemAdded
```csharp
public void OnListItemAdded(Widget parentWidget, Widget newChild)
```

### OnListItemRemoved
```csharp
public void OnListItemRemoved(Widget removedItem, Widget removedChild)
```

### OnSelectionChanged
```csharp
public void OnSelectionChanged(Widget widget)
```

## Usage Example

```csharp
// Typical usage of DropdownWidget (Widget)
// 声明/访问一个 DropdownWidget
var widget = root.GetChild("dropdownWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)