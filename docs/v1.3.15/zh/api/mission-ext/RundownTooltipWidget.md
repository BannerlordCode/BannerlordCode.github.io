<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `RundownTooltipWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# RundownTooltipWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Information.RundownTooltip
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class RundownTooltipWidget : TooltipWidget`
**Base:** `TooltipWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Information/RundownTooltip/RundownTooltipWidget.cs`

## 概述

`RundownTooltipWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `LineContainerWidget` | `public GridWidget LineContainerWidget { get; set; }` |
| `DividerCollectionWidget` | `public RundownColumnDividerCollectionWidget DividerCollectionWidget { get; set; }` |
| `ValueCategorizationAsInt` | `public int ValueCategorizationAsInt { get; set; }` |

## 使用示例

```csharp
// RundownTooltipWidget (Widget) 的典型用法
// 声明/访问一个 RundownTooltipWidget
var widget = root.GetChild("rundownTooltipWidget");;
```

## 参见

- [完整类目录](../catalog)