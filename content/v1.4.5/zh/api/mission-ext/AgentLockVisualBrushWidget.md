---
title: "AgentLockVisualBrushWidget"
description: "AgentLockVisualBrushWidget 的自动生成类参考。"
---
# AgentLockVisualBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AgentLockVisualBrushWidget`
**Base:** 无
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission/AgentLockVisualBrushWidget.cs`

## 概述

`AgentLockVisualBrushWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `AgentLockVisualBrushWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `Position` | `public Vec2 Position { get; set; }` |
| `LockState` | `public int LockState { get; set; }` |

## 主要方法

### AgentLockVisualBrushWidget
`public class AgentLockVisualBrushWidget(UIContext context)`

**用途 / Purpose:** 调用 AgentLockVisualBrushWidget 对应的操作。

```csharp
// 先通过子系统 API 拿到 AgentLockVisualBrushWidget 实例
AgentLockVisualBrushWidget agentLockVisualBrushWidget = ...;
var result = agentLockVisualBrushWidget.AgentLockVisualBrushWidget(context);
```

## 使用示例

```csharp
// 在 Gauntlet 控件树或 Movie 中获取该控件实例
AgentLockVisualBrushWidget widget = ...;
```

## 参见

- [本区域目录](../)