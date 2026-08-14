---
title: "ManagedNumericOptionData"
description: "ManagedNumericOptionData 的自动生成类参考。"
---
# ManagedNumericOptionData

**Namespace:** TaleWorlds.MountAndBlade.Options.ManagedOptions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ManagedNumericOptionData : ManagedOptionData, INumericOptionData, IOptionData`
**Base:** `ManagedOptionData`
**File:** `TaleWorlds.MountAndBlade/Options/ManagedOptions/ManagedNumericOptionData.cs`

## 概述

`ManagedNumericOptionData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `ManagedNumericOptionData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetMinValue
`public float GetMinValue()`

**用途 / Purpose:** 读取并返回当前对象中 min value 的结果。

```csharp
// 先通过子系统 API 拿到 ManagedNumericOptionData 实例
ManagedNumericOptionData managedNumericOptionData = ...;
var result = managedNumericOptionData.GetMinValue();
```

### GetMaxValue
`public float GetMaxValue()`

**用途 / Purpose:** 读取并返回当前对象中 max value 的结果。

```csharp
// 先通过子系统 API 拿到 ManagedNumericOptionData 实例
ManagedNumericOptionData managedNumericOptionData = ...;
var result = managedNumericOptionData.GetMaxValue();
```

### GetIsDiscrete
`public bool GetIsDiscrete()`

**用途 / Purpose:** 读取并返回当前对象中 is discrete 的结果。

```csharp
// 先通过子系统 API 拿到 ManagedNumericOptionData 实例
ManagedNumericOptionData managedNumericOptionData = ...;
var result = managedNumericOptionData.GetIsDiscrete();
```

### GetDiscreteIncrementInterval
`public int GetDiscreteIncrementInterval()`

**用途 / Purpose:** 读取并返回当前对象中 discrete increment interval 的结果。

```csharp
// 先通过子系统 API 拿到 ManagedNumericOptionData 实例
ManagedNumericOptionData managedNumericOptionData = ...;
var result = managedNumericOptionData.GetDiscreteIncrementInterval();
```

### GetShouldUpdateContinuously
`public bool GetShouldUpdateContinuously()`

**用途 / Purpose:** 读取并返回当前对象中 should update continuously 的结果。

```csharp
// 先通过子系统 API 拿到 ManagedNumericOptionData 实例
ManagedNumericOptionData managedNumericOptionData = ...;
var result = managedNumericOptionData.GetShouldUpdateContinuously();
```

## 使用示例

```csharp
// 该数据对象通常由战役/任务 API 返回
ManagedNumericOptionData entry = ...;
```

## 参见

- [本区域目录](../)