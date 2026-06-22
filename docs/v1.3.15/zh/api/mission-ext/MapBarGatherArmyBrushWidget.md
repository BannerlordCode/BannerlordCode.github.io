<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MapBarGatherArmyBrushWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MapBarGatherArmyBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.MapBar
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MapBarGatherArmyBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Map/MapBar/MapBarGatherArmyBrushWidget.cs`

## 概述

`MapBarGatherArmyBrushWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `InfoBarWidget` | `public MapInfoBarWidget InfoBarWidget { get; set; }` |
| `IsGatherArmyEnabled` | `public bool IsGatherArmyEnabled { get; set; }` |
| `IsGatherArmyVisible` | `public bool IsGatherArmyVisible { get; set; }` |

## 使用示例

```csharp
// MapBarGatherArmyBrushWidget (Widget) 的典型用法
// 声明/访问一个 MapBarGatherArmyBrushWidget
var widget = root.GetChild("mapBarGatherArmyBrushWidget");;
```

## 参见

- [完整类目录](../catalog)