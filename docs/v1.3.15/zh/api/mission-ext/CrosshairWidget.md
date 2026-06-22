<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CrosshairWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CrosshairWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CrosshairWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/CrosshairWidget.cs`

## 概述

`CrosshairWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `TopArrowOpacity` | `public double TopArrowOpacity { get; set; }` |
| `BottomArrowOpacity` | `public double BottomArrowOpacity { get; set; }` |
| `RightArrowOpacity` | `public double RightArrowOpacity { get; set; }` |
| `LeftArrowOpacity` | `public double LeftArrowOpacity { get; set; }` |
| `IsTargetInvalid` | `public bool IsTargetInvalid { get; set; }` |
| `CrosshairAccuracy` | `public double CrosshairAccuracy { get; set; }` |
| `CrosshairScale` | `public double CrosshairScale { get; set; }` |
| `IsVictimDead` | `public bool IsVictimDead { get; set; }` |
| `IsHumanoidHeadshot` | `public bool IsHumanoidHeadshot { get; set; }` |
| `ShowHitMarker` | `public bool ShowHitMarker { get; set; }` |
| `LeftArrow` | `public BrushWidget LeftArrow { get; set; }` |
| `RightArrow` | `public BrushWidget RightArrow { get; set; }` |
| `TopArrow` | `public BrushWidget TopArrow { get; set; }` |
| `BottomArrow` | `public BrushWidget BottomArrow { get; set; }` |
| `HitMarker` | `public BrushWidget HitMarker { get; set; }` |
| `HeadshotMarker` | `public BrushWidget HeadshotMarker { get; set; }` |

## 使用示例

```csharp
// CrosshairWidget (Widget) 的典型用法
// 声明/访问一个 CrosshairWidget
var widget = root.GetChild("crosshairWidget");;
```

## 参见

- [完整类目录](../catalog)