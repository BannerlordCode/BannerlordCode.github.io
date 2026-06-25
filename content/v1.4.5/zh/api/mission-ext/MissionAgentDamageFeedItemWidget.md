---
title: "MissionAgentDamageFeedItemWidget"
description: "MissionAgentDamageFeedItemWidget 的自动生成类参考。"
---
# MissionAgentDamageFeedItemWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.DamageFeed
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionAgentDamageFeedItemWidget : Widget`
**Base:** `Widget`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.DamageFeed/MissionAgentDamageFeedItemWidget.cs`

## 概述

`MissionAgentDamageFeedItemWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `MissionAgentDamageFeedItemWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `FadeInTime` | `public float FadeInTime { get; }` |
| `StayTime` | `public float StayTime { get; }` |
| `FadeOutTime` | `public float FadeOutTime { get; }` |
| `TimeSinceCreation` | `public float TimeSinceCreation { get; }` |

## 主要方法

### ShowFeed
`public void ShowFeed()`

**用途 / Purpose:** **用途 / Purpose:** 显示feed对应的界面或元素。

```csharp
// 先通过子系统 API 拿到 MissionAgentDamageFeedItemWidget 实例
MissionAgentDamageFeedItemWidget missionAgentDamageFeedItemWidget = ...;
missionAgentDamageFeedItemWidget.ShowFeed();
```

### SetSpeedModifier
`public void SetSpeedModifier(float newSpeed)`

**用途 / Purpose:** **用途 / Purpose:** 为 speed modifier 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MissionAgentDamageFeedItemWidget 实例
MissionAgentDamageFeedItemWidget missionAgentDamageFeedItemWidget = ...;
missionAgentDamageFeedItemWidget.SetSpeedModifier(0);
```

## 使用示例

```csharp
// 在 Gauntlet 控件树或 Movie 中获取该控件实例
MissionAgentDamageFeedItemWidget widget = ...;
```

## 参见

- [本区域目录](../)