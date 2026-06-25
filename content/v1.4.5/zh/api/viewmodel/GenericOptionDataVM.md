---
title: "GenericOptionDataVM"
description: "GenericOptionDataVM 的自动生成类参考。"
---
# GenericOptionDataVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class GenericOptionDataVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions/GenericOptionDataVM.cs`

## 概述

`GenericOptionDataVM` 位于 `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Description` | `public string Description { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `ImageIDs` | `public string ImageIDs { get; set; }` |
| `OptionTypeID` | `public int OptionTypeID { get; set; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `Hint` | `public HintViewModel Hint { get; set; }` |

## 主要方法

### UpdateData
`public virtual void UpdateData(bool initUpdate)`

**用途 / Purpose:** 重新计算并更新 data 的最新表示。

```csharp
// 先通过子系统 API 拿到 GenericOptionDataVM 实例
GenericOptionDataVM genericOptionDataVM = ...;
genericOptionDataVM.UpdateData(false);
```

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 GenericOptionDataVM 实例
GenericOptionDataVM genericOptionDataVM = ...;
genericOptionDataVM.RefreshValues();
```

### GetOptionType
`public object GetOptionType()`

**用途 / Purpose:** 读取并返回当前对象中 option type 的结果。

```csharp
// 先通过子系统 API 拿到 GenericOptionDataVM 实例
GenericOptionDataVM genericOptionDataVM = ...;
var result = genericOptionDataVM.GetOptionType();
```

### GetOptionData
`public IOptionData GetOptionData()`

**用途 / Purpose:** 读取并返回当前对象中 option data 的结果。

```csharp
// 先通过子系统 API 拿到 GenericOptionDataVM 实例
GenericOptionDataVM genericOptionDataVM = ...;
var result = genericOptionDataVM.GetOptionData();
```

### ResetToDefault
`public void ResetToDefault()`

**用途 / Purpose:** 将 to default 重置回默认或初始状态。

```csharp
// 先通过子系统 API 拿到 GenericOptionDataVM 实例
GenericOptionDataVM genericOptionDataVM = ...;
genericOptionDataVM.ResetToDefault();
```

### UpdateEnableState
`public void UpdateEnableState()`

**用途 / Purpose:** 重新计算并更新 enable state 的最新表示。

```csharp
// 先通过子系统 API 拿到 GenericOptionDataVM 实例
GenericOptionDataVM genericOptionDataVM = ...;
genericOptionDataVM.UpdateEnableState();
```

### UpdateValue
`public abstract void UpdateValue()`

**用途 / Purpose:** 重新计算并更新 value 的最新表示。

```csharp
// 先通过子系统 API 拿到 GenericOptionDataVM 实例
GenericOptionDataVM genericOptionDataVM = ...;
genericOptionDataVM.UpdateValue();
```

### Cancel
`public abstract void Cancel()`

**用途 / Purpose:** 检查当前对象是否满足 cel 的前置条件。

```csharp
// 先通过子系统 API 拿到 GenericOptionDataVM 实例
GenericOptionDataVM genericOptionDataVM = ...;
genericOptionDataVM.Cancel();
```

### IsChanged
`public abstract bool IsChanged()`

**用途 / Purpose:** 判断当前对象是否处于 changed 状态或条件。

```csharp
// 先通过子系统 API 拿到 GenericOptionDataVM 实例
GenericOptionDataVM genericOptionDataVM = ...;
var result = genericOptionDataVM.IsChanged();
```

### SetValue
`public abstract void SetValue(float value)`

**用途 / Purpose:** 为 value 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 GenericOptionDataVM 实例
GenericOptionDataVM genericOptionDataVM = ...;
genericOptionDataVM.SetValue(0);
```

### ResetData
`public abstract void ResetData()`

**用途 / Purpose:** 将 data 重置回默认或初始状态。

```csharp
// 先通过子系统 API 拿到 GenericOptionDataVM 实例
GenericOptionDataVM genericOptionDataVM = ...;
genericOptionDataVM.ResetData();
```

### ApplyValue
`public abstract void ApplyValue()`

**用途 / Purpose:** 将 value 的效果应用到当前对象。

```csharp
// 先通过子系统 API 拿到 GenericOptionDataVM 实例
GenericOptionDataVM genericOptionDataVM = ...;
genericOptionDataVM.ApplyValue();
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
GenericOptionDataVM instance = ...;
```

## 参见

- [本区域目录](../)