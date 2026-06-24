<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DropdownWidget`
- [← 本领域 / 返回 gui](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# DropdownWidget

**Namespace:** TaleWorlds.GauntletUI.BaseTypes
**Module:** TaleWorlds.GauntletUI
**Type:** `public class DropdownWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/DropdownWidget.cs`

## 概述

`DropdownWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `DropdownWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `TextWidget` | `public Widget TextWidget { get; set; }` |
| `DoNotHandleDropdownListPanel` | `public bool DoNotHandleDropdownListPanel { get; set; }` |
| `ScrollablePanel` | `public ScrollablePanel ScrollablePanel { get; set; }` |
| `Button` | `public ButtonWidget Button { get; set; }` |
| `ListPanel` | `public ListPanel ListPanel { get; set; }` |
| `IsOpen` | `public bool IsOpen { get; set; }` |
| `ListPanelValue` | `public int ListPanelValue { get; set; }` |
| `CurrentSelectedIndex` | `public int CurrentSelectedIndex { get; set; }` |

## 主要方法

### OnButtonClick
`public void OnButtonClick(Widget widget)`

**用途 / Purpose:** 当 `button click` 事件触发时调用此方法。

### UpdateButtonText
`public void UpdateButtonText(string text)`

**用途 / Purpose:** 更新 `button text` 的状态或数据。

### OnListItemAdded
`public void OnListItemAdded(Widget parentWidget, Widget newChild)`

**用途 / Purpose:** 当 `list item added` 事件触发时调用此方法。

### OnListItemRemoved
`public void OnListItemRemoved(Widget removedItem, Widget removedChild)`

**用途 / Purpose:** 当 `list item removed` 事件触发时调用此方法。

### OnSelectionChanged
`public void OnSelectionChanged(Widget widget)`

**用途 / Purpose:** 当 `selection changed` 事件触发时调用此方法。

## 使用示例

```csharp
var widget = new DropdownWidget(context);
```

## 参见

- [完整类目录](../catalog)