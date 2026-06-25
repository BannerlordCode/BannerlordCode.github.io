---
title: "ResetAnimationOnStopUsageComponent"
description: "ResetAnimationOnStopUsageComponent 的自动生成类参考。"
---
# ResetAnimationOnStopUsageComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ResetAnimationOnStopUsageComponent : UsableMissionObjectComponent`
**Base:** `UsableMissionObjectComponent`
**File:** `TaleWorlds.MountAndBlade/ResetAnimationOnStopUsageComponent.cs`

## 概述

`ResetAnimationOnStopUsageComponent` 是一个组件型对象，通常依附在 Agent、实体或系统对象上，承载局部状态和行为。

## 心智模型

把 `ResetAnimationOnStopUsageComponent` 当作一个 Component 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### UpdateSuccessfulResetAction
`public void UpdateSuccessfulResetAction(ActionIndexCache successfulResetActionCode)`

**用途 / Purpose:** **用途 / Purpose:** 重新计算并更新 successful reset action 的最新表示。

```csharp
// 先通过子系统 API 拿到 ResetAnimationOnStopUsageComponent 实例
ResetAnimationOnStopUsageComponent resetAnimationOnStopUsageComponent = ...;
resetAnimationOnStopUsageComponent.UpdateSuccessfulResetAction(successfulResetActionCode);
```

## 使用示例

```csharp
var component = agent.GetComponent<ResetAnimationOnStopUsageComponent>();
```

## 参见

- [本区域目录](../)