---
title: "NumericOptionDataVM"
description: "NumericOptionDataVM 的自动生成类参考。"
---
# NumericOptionDataVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class NumericOptionDataVM : GenericOptionDataVM`
**Base:** `GenericOptionDataVM`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/NumericOptionDataVM.cs`

## 概述

`NumericOptionDataVM` 位于 `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `DiscreteIncrementInterval` | `public int DiscreteIncrementInterval { get; set; }` |
| `Min` | `public float Min { get; set; }` |
| `Max` | `public float Max { get; set; }` |
| `OptionValue` | `public float OptionValue { get; set; }` |
| `IsDiscrete` | `public bool IsDiscrete { get; set; }` |
| `UpdateContinuously` | `public bool UpdateContinuously { get; set; }` |
| `OptionValueAsString` | `public string OptionValueAsString { get; }` |

## 主要方法

### UpdateValue
`public override void UpdateValue()`

**用途 / Purpose:** **用途 / Purpose:** 重新计算并更新 value 的最新表示。

```csharp
// 先通过子系统 API 拿到 NumericOptionDataVM 实例
NumericOptionDataVM numericOptionDataVM = ...;
numericOptionDataVM.UpdateValue();
```

### Cancel
`public override void Cancel()`

**用途 / Purpose:** **用途 / Purpose:** 检查当前对象是否满足 cel 的前置条件。

```csharp
// 先通过子系统 API 拿到 NumericOptionDataVM 实例
NumericOptionDataVM numericOptionDataVM = ...;
numericOptionDataVM.Cancel();
```

### SetValue
`public override void SetValue(float value)`

**用途 / Purpose:** **用途 / Purpose:** 为 value 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 NumericOptionDataVM 实例
NumericOptionDataVM numericOptionDataVM = ...;
numericOptionDataVM.SetValue(0);
```

### ResetData
`public override void ResetData()`

**用途 / Purpose:** **用途 / Purpose:** 将 data 重置回默认或初始状态。

```csharp
// 先通过子系统 API 拿到 NumericOptionDataVM 实例
NumericOptionDataVM numericOptionDataVM = ...;
numericOptionDataVM.ResetData();
```

### IsChanged
`public override bool IsChanged()`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 changed 状态或条件。

```csharp
// 先通过子系统 API 拿到 NumericOptionDataVM 实例
NumericOptionDataVM numericOptionDataVM = ...;
var result = numericOptionDataVM.IsChanged();
```

### ApplyValue
`public override void ApplyValue()`

**用途 / Purpose:** **用途 / Purpose:** 将 value 的效果应用到当前对象。

```csharp
// 先通过子系统 API 拿到 NumericOptionDataVM 实例
NumericOptionDataVM numericOptionDataVM = ...;
numericOptionDataVM.ApplyValue();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
NumericOptionDataVM numericOptionDataVM = ...;
numericOptionDataVM.UpdateValue();
```

## 参见

- [本区域目录](../)