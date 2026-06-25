---
title: "ManagedOptionData"
description: "ManagedOptionData 的自动生成类参考。"
---
# ManagedOptionData

**Namespace:** TaleWorlds.MountAndBlade.Options.ManagedOptions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class ManagedOptionData : IOptionData`
**Base:** `IOptionData`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.Options.ManagedOptions/ManagedOptionData.cs`

## 概述

`ManagedOptionData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `ManagedOptionData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetDefaultValue
`public virtual float GetDefaultValue()`

**用途 / Purpose:** 读取并返回当前对象中 「default value」 的结果。

```csharp
// 先通过子系统 API 拿到 ManagedOptionData 实例
ManagedOptionData managedOptionData = ...;
var result = managedOptionData.GetDefaultValue();
```

### Commit
`public void Commit()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 ManagedOptionData 实例
ManagedOptionData managedOptionData = ...;
managedOptionData.Commit();
```

### GetValue
`public float GetValue(bool forceRefresh)`

**用途 / Purpose:** 读取并返回当前对象中 「value」 的结果。

```csharp
// 先通过子系统 API 拿到 ManagedOptionData 实例
ManagedOptionData managedOptionData = ...;
var result = managedOptionData.GetValue(false);
```

### SetValue
`public void SetValue(float value)`

**用途 / Purpose:** 为 「value」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 ManagedOptionData 实例
ManagedOptionData managedOptionData = ...;
managedOptionData.SetValue(0);
```

### GetOptionType
`public object GetOptionType()`

**用途 / Purpose:** 读取并返回当前对象中 「option type」 的结果。

```csharp
// 先通过子系统 API 拿到 ManagedOptionData 实例
ManagedOptionData managedOptionData = ...;
var result = managedOptionData.GetOptionType();
```

### IsNative
`public bool IsNative()`

**用途 / Purpose:** 判断当前对象是否处于 「native」 状态或条件。

```csharp
// 先通过子系统 API 拿到 ManagedOptionData 实例
ManagedOptionData managedOptionData = ...;
var result = managedOptionData.IsNative();
```

### IsAction
`public bool IsAction()`

**用途 / Purpose:** 判断当前对象是否处于 「action」 状态或条件。

```csharp
// 先通过子系统 API 拿到 ManagedOptionData 实例
ManagedOptionData managedOptionData = ...;
var result = managedOptionData.IsAction();
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
ManagedOptionData instance = ...;
```

## 参见

- [本区域目录](../)