<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `NavigatableListPanel`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# NavigatableListPanel

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class NavigatableListPanel : ListPanel`
**Base:** `ListPanel`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets/NavigatableListPanel.cs`

## 概述

`NavigatableListPanel` 位于 `TaleWorlds.MountAndBlade.GauntletUI.Widgets`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.GauntletUI.Widgets` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `ParentPanel` | `public ScrollablePanel ParentPanel { get; set; }` |
| `AutoScrollTopOffset` | `public int AutoScrollTopOffset { get; set; }` |
| `AutoScrollBottomOffset` | `public int AutoScrollBottomOffset { get; set; }` |
| `AutoScrollLeftOffset` | `public int AutoScrollLeftOffset { get; set; }` |
| `AutoScrollRightOffset` | `public int AutoScrollRightOffset { get; set; }` |
| `MinIndex` | `public int MinIndex { get; set; }` |
| `MaxIndex` | `public int MaxIndex { get; set; }` |
| `StepSize` | `public int StepSize { get; set; }` |
| `UseSelfIndexForMinimum` | `public bool UseSelfIndexForMinimum { get; set; }` |
| `EmptyNavigationWidget` | `public Widget EmptyNavigationWidget { get; set; }` |

## 使用示例

```csharp
var example = new NavigatableListPanel();
```

## 参见

- [完整类目录](../catalog)