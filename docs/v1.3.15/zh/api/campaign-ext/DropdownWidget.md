<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DropdownWidget`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DropdownWidget

**Namespace:** TaleWorlds.GauntletUI.BaseTypes
**Module:** TaleWorlds.GauntletUI
**Type:** `public class DropdownWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/DropdownWidget.cs`

## 概述

`DropdownWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

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

## 主要方法

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

## 使用示例

```csharp
// DropdownWidget (Widget) 的典型用法
// 声明/访问一个 DropdownWidget
var widget = root.GetChild("dropdownWidget");;
```

## 参见

- [完整类目录](../catalog)