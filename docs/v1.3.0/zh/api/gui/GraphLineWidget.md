<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GraphLineWidget`
- [← 本领域 / 返回 gui](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# GraphLineWidget

**Namespace:** TaleWorlds.GauntletUI.ExtraWidgets.Graph
**Module:** TaleWorlds.GauntletUI
**Type:** `public class GraphLineWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.GauntletUI.ExtraWidgets/Graph/GraphLineWidget.cs`

## 概述

`GraphLineWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `GraphLineWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `LineBrushStateName` | `public string LineBrushStateName { get; set; }` |
| `PointContainerWidget` | `public Widget PointContainerWidget { get; set; }` |

## 使用示例

```csharp
var widget = new GraphLineWidget(context);
```

## 参见

- [完整类目录](../catalog)