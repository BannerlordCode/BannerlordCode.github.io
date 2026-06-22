<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `AnimatedDropdownWidget`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AnimatedDropdownWidget

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public class AnimatedDropdownWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/AnimatedDropdownWidget.cs`

## 概述

`AnimatedDropdownWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

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

## 主要方法

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

## 使用示例

```csharp
// AnimatedDropdownWidget (Widget) 的典型用法
// 声明/访问一个 AnimatedDropdownWidget
var widget = root.GetChild("animatedDropdownWidget");;
```

## 参见

- [完整类目录](../catalog)