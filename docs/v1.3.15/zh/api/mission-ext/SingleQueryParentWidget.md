<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SingleQueryParentWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SingleQueryParentWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Popup
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SingleQueryParentWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Popup/SingleQueryParentWidget.cs`

## 概述

`SingleQueryParentWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `DescriptionScrollablePanel` | `public ScrollablePanel DescriptionScrollablePanel { get; set; }` |
| `DescriptionScrollbar` | `public ScrollbarWidget DescriptionScrollbar { get; set; }` |

## 使用示例

```csharp
// SingleQueryParentWidget (Widget) 的典型用法
// 声明/访问一个 SingleQueryParentWidget
var widget = root.GetChild("singleQueryParentWidget");;
```

## 参见

- [完整类目录](../catalog)