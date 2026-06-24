<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ContainerPageControlWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ContainerPageControlWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ContainerPageControlWidget : Widget`
**Base:** `Widget`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets/ContainerPageControlWidget.cs`

## 概述

`ContainerPageControlWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `ContainerPageControlWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

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
var widget = new ContainerPageControlWidget(context);
```

## 参见

- [完整类目录](../catalog)