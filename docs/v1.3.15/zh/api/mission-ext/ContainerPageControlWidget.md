<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ContainerPageControlWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ContainerPageControlWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ContainerPageControlWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/ContainerPageControlWidget.cs`

## 概述

`ContainerPageControlWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `PageCount` | `public int PageCount { get; }` |
| `PageButtonsContext` | `public NavigationScopeTargeter PageButtonsContext { get; set; }` |
| `ItemPerPage` | `public int ItemPerPage { get; set; }` |
| `LoopNavigation` | `public bool LoopNavigation { get; set; }` |
| `Container` | `public Container Container { get; set; }` |
| `NextPageButton` | `public ButtonWidget NextPageButton { get; set; }` |
| `PreviousPageButton` | `public ButtonWidget PreviousPageButton { get; set; }` |
| `PageText` | `public TextWidget PageText { get; set; }` |

## 使用示例

```csharp
// ContainerPageControlWidget (Widget) 的典型用法
// 声明/访问一个 ContainerPageControlWidget
var widget = root.GetChild("containerPageControlWidget");;
```

## 参见

- [完整类目录](../catalog)