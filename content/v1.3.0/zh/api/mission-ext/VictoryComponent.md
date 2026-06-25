---
title: "VictoryComponent"
description: "VictoryComponent 的自动生成类参考。"
---
# VictoryComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class VictoryComponent : AgentComponent`
**Base:** `AgentComponent`
**File:** `TaleWorlds.MountAndBlade/VictoryComponent.cs`

## 概述

`VictoryComponent` 是一个组件型对象，通常依附在 Agent、实体或系统对象上，承载局部状态和行为。

## 心智模型

把 `VictoryComponent` 当作一个 Component 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### CheckTimer
`public bool CheckTimer()`

**用途 / Purpose:** **用途 / Purpose:** 检查timer在当前对象中是否成立。

```csharp
// 先通过子系统 API 拿到 VictoryComponent 实例
VictoryComponent victoryComponent = ...;
var result = victoryComponent.CheckTimer();
```

### ChangeTimerDuration
`public void ChangeTimerDuration(float min, float max)`

**用途 / Purpose:** **用途 / Purpose:** 调用 ChangeTimerDuration 对应的操作。

```csharp
// 先通过子系统 API 拿到 VictoryComponent 实例
VictoryComponent victoryComponent = ...;
victoryComponent.ChangeTimerDuration(0, 0);
```

## 使用示例

```csharp
var component = agent.GetComponent<VictoryComponent>();
```

## 参见

- [本区域目录](../)