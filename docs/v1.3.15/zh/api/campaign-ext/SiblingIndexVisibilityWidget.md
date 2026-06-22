<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SiblingIndexVisibilityWidget`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SiblingIndexVisibilityWidget

**Namespace:** TaleWorlds.GauntletUI.ExtraWidgets
**Module:** TaleWorlds.GauntletUI
**Type:** `public class SiblingIndexVisibilityWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.GauntletUI.ExtraWidgets/SiblingIndexVisibilityWidget.cs`

## 概述

`SiblingIndexVisibilityWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `WatchType` | `public SiblingIndexVisibilityWidget.WatchTypes WatchType { get; set; }` |
| `IndexToBeVisible` | `public int IndexToBeVisible { get { return this._indexToBeVisible; }` |
| `WidgetToWatch` | `public Widget WidgetToWatch { get { return this._widgetToWatch; }` |

## 使用示例

```csharp
// SiblingIndexVisibilityWidget (Widget) 的典型用法
// 声明/访问一个 SiblingIndexVisibilityWidget
var widget = root.GetChild("siblingIndexVisibilityWidget");;
```

## 参见

- [完整类目录](../catalog)