<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionSiegeEngineMarkerWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionSiegeEngineMarkerWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionSiegeEngineMarkerWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/MissionSiegeEngineMarkerWidget.cs`

## 概述

`MissionSiegeEngineMarkerWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `Slider` | `public SliderWidget Slider { get; set; }` |
| `MachineIconParent` | `public BrushWidget MachineIconParent { get; set; }` |
| `EnemyBrush` | `public Brush EnemyBrush { get; set; }` |
| `AllyBrush` | `public Brush AllyBrush { get; set; }` |
| `ScreenPosition` | `public Vec2 ScreenPosition { get; set; }` |
| `IsEnemy` | `public bool IsEnemy { get; set; }` |
| `IsActive` | `public bool IsActive { get; set; }` |
| `EngineType` | `public string EngineType { get; set; }` |
| `MachineTypeIconWidget` | `public Widget MachineTypeIconWidget { get; set; }` |

## 使用示例

```csharp
// MissionSiegeEngineMarkerWidget (Widget) 的典型用法
// 声明/访问一个 MissionSiegeEngineMarkerWidget
var widget = root.GetChild("missionSiegeEngineMarkerWidget");;
```

## 参见

- [完整类目录](../catalog)