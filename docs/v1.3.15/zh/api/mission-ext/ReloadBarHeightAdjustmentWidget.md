<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ReloadBarHeightAdjustmentWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ReloadBarHeightAdjustmentWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ReloadBarHeightAdjustmentWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/ReloadBarHeightAdjustmentWidget.cs`

## 概述

`ReloadBarHeightAdjustmentWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `RelativeDurationToMaxDuration` | `public float RelativeDurationToMaxDuration { get; set; }` |
| `FillWidget` | `public Widget FillWidget { get; set; }` |

## 使用示例

```csharp
// ReloadBarHeightAdjustmentWidget (Widget) 的典型用法
// 声明/访问一个 ReloadBarHeightAdjustmentWidget
var widget = root.GetChild("reloadBarHeightAdjustmentWidget");;
```

## 参见

- [完整类目录](../catalog)