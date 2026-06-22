<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionLeaveBarSliderWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionLeaveBarSliderWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionLeaveBarSliderWidget : SliderWidget`
**Base:** `SliderWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/MissionLeaveBarSliderWidget.cs`

## 概述

`MissionLeaveBarSliderWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `FadeInMultiplier` | `public float FadeInMultiplier { get; set; }` |
| `FadeOutMultiplier` | `public float FadeOutMultiplier { get; set; }` |

## 使用示例

```csharp
// MissionLeaveBarSliderWidget (Widget) 的典型用法
// 声明/访问一个 MissionLeaveBarSliderWidget
var widget = root.GetChild("missionLeaveBarSliderWidget");;
```

## 参见

- [完整类目录](../catalog)