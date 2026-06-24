<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MapSiegeConstructionControllerWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MapSiegeConstructionControllerWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.Siege
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MapSiegeConstructionControllerWidget : Widget`
**Base:** `Widget`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.Siege/MapSiegeConstructionControllerWidget.cs`

## 概述

`MapSiegeConstructionControllerWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `MapSiegeConstructionControllerWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### SetCurrentPOIWidget
`public void SetCurrentPOIWidget(MapSiegePOIBrushWidget widget)`

**用途 / Purpose:** 设置 `current p o i widget` 的值或状态。

## 使用示例

```csharp
var widget = new MapSiegeConstructionControllerWidget(context);
```

## 参见

- [完整类目录](../catalog)