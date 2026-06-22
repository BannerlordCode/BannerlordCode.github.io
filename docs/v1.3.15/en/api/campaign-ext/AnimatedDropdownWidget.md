<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AnimatedDropdownWidget`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AnimatedDropdownWidget

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public class AnimatedDropdownWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/AnimatedDropdownWidget.cs`

## Overview

`AnimatedDropdownWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `TextWidget` | `public Widget TextWidget { get; set; }` |
| `ScrollbarWidget` | `public ScrollbarWidget ScrollbarWidget { get; set; }` |
| `Button` | `public ButtonWidget Button { get { return this._button; }` |
| `DropdownContainerWidget` | `public Widget DropdownContainerWidget { get { return this._dropdownContainerWidget; }` |
| `DropdownClipWidget` | `public Widget DropdownClipWidget { get { return this._dropdownClipWidget; }` |
| `ListPanel` | `public ListPanel ListPanel { get { return this._listPanel; }` |
| `ListPanelValue` | `public int ListPanelValue { get { if (this.ListPanel != null) { return this.ListPanel.IntValue; }` |
| `CurrentSelectedIndex` | `public int CurrentSelectedIndex { get { return this._currentSelectedIndex; }` |
| `UpdateSelectedItem` | `public bool UpdateSelectedItem { get { return this._updateSelectedItem; }` |

## Key Methods

### OnButtonClick
```csharp
public void OnButtonClick(Widget widget)
```

### UpdateButtonText
```csharp
public void UpdateButtonText(string text)
```

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
// Typical usage of AnimatedDropdownWidget (Widget)
// 声明/访问一个 AnimatedDropdownWidget
var widget = root.GetChild("animatedDropdownWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)