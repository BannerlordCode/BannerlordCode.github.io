<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ValueBasedVisibilityWidget`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ValueBasedVisibilityWidget

**Namespace:** TaleWorlds.GauntletUI.ExtraWidgets
**Module:** TaleWorlds.GauntletUI
**Type:** `public class ValueBasedVisibilityWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.GauntletUI.ExtraWidgets/ValueBasedVisibilityWidget.cs`

## 概述

`ValueBasedVisibilityWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `WatchType` | `public ValueBasedVisibilityWidget.WatchTypes WatchType { get { return this._watchType; }` |
| `IndexToWatch` | `public int IndexToWatch { get { return (int)this.IndexToWatchFloat; }` |
| `IndexToWatchFloat` | `public float IndexToWatchFloat { get { return this._indexToWatchFloat; }` |
| `IndexToBeVisible` | `public int IndexToBeVisible { get { return (int)this.IndexToBeVisibleFloat; }` |
| `IndexToBeVisibleFloat` | `public float IndexToBeVisibleFloat { get { return this._indexToBeVisibleFloat; }` |

## 使用示例

```csharp
// ValueBasedVisibilityWidget (Widget) 的典型用法
// 声明/访问一个 ValueBasedVisibilityWidget
var widget = root.GetChild("valueBasedVisibilityWidget");;
```

## 参见

- [完整类目录](../catalog)