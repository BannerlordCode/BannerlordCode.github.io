<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionSuspicionFillerBrushWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionSuspicionFillerBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.Disguise
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionSuspicionFillerBrushWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/Disguise/MissionSuspicionFillerBrushWidget.cs`

## 概述

`MissionSuspicionFillerBrushWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `CurrentSuspicionRatio` | `public float CurrentSuspicionRatio { get; set; }` |
| `ExclamationMark` | `public BrushWidget ExclamationMark { get; set; }` |
| `DetectionFillContainer` | `public Widget DetectionFillContainer { get; set; }` |
| `CircleIcon` | `public BrushWidget CircleIcon { get; set; }` |

## 使用示例

```csharp
// MissionSuspicionFillerBrushWidget (Widget) 的典型用法
// 声明/访问一个 MissionSuspicionFillerBrushWidget
var widget = root.GetChild("missionSuspicionFillerBrushWidget");;
```

## 参见

- [完整类目录](../catalog)