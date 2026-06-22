<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MapAnchorTrackerWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MapAnchorTrackerWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MapAnchorTrackerWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Map/MapAnchorTrackerWidget.cs`

## 概述

`MapAnchorTrackerWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `PositionX` | `public float PositionX { get; set; }` |
| `PositionY` | `public float PositionY { get; set; }` |
| `PositionW` | `public float PositionW { get; set; }` |

## 使用示例

```csharp
// MapAnchorTrackerWidget (Widget) 的典型用法
// 声明/访问一个 MapAnchorTrackerWidget
var widget = root.GetChild("mapAnchorTrackerWidget");;
```

## 参见

- [完整类目录](../catalog)