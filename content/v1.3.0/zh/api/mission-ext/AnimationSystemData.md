---
title: "AnimationSystemData"
description: "AnimationSystemData 的自动生成类参考。"
---
# AnimationSystemData

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct AnimationSystemData`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/AnimationSystemData.cs`

## 概述

`AnimationSystemData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `AnimationSystemData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetHardcodedAnimationSystemDataForHumanSkeleton
`public static AnimationSystemData GetHardcodedAnimationSystemDataForHumanSkeleton()`

**用途 / Purpose:** 读取并返回当前对象中 「hardcoded animation system data for human skeleton」 的结果。

```csharp
// 静态调用，不需要实例
AnimationSystemData.GetHardcodedAnimationSystemDataForHumanSkeleton();
```

## 使用示例

```csharp
// 该数据对象通常由战役/任务 API 返回
AnimationSystemData entry = ...;
```

## 参见

- [本区域目录](../)