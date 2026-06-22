<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MapSiegePOIBrushWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MapSiegePOIBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.Siege
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MapSiegePOIBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Map/Siege/MapSiegePOIBrushWidget.cs`

## 概述

`MapSiegePOIBrushWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `Slider` | `public SliderWidget Slider { get; set; }` |
| `ConstructionBrush` | `public Brush ConstructionBrush { get; set; }` |
| `NormalBrush` | `public Brush NormalBrush { get; set; }` |
| `ScreenPosition` | `public Vec2 ScreenPosition { get; set; }` |
| `ConstructionControllerWidget` | `public MapSiegeConstructionControllerWidget ConstructionControllerWidget { get; set; }` |
| `IsPlayerSidePOI` | `public bool IsPlayerSidePOI { get; set; }` |
| `IsInVisibleRange` | `public bool IsInVisibleRange { get; set; }` |
| `IsPOISelected` | `public bool IsPOISelected { get; set; }` |
| `IsConstructing` | `public bool IsConstructing { get; set; }` |
| `MachineType` | `public int MachineType { get; set; }` |
| `QueueIndex` | `public int QueueIndex { get; set; }` |
| `MachineTypeIconWidget` | `public Widget MachineTypeIconWidget { get; set; }` |
| `HammerAnimWidget` | `public BrushWidget HammerAnimWidget { get; set; }` |

## 使用示例

```csharp
// MapSiegePOIBrushWidget (Widget) 的典型用法
// 声明/访问一个 MapSiegePOIBrushWidget
var widget = root.GetChild("mapSiegePOIBrushWidget");;
```

## 参见

- [完整类目录](../catalog)