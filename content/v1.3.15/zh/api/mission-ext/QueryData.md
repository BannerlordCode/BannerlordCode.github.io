---
title: "QueryData"
description: "QueryData 的自动生成类参考。"
---
# QueryData

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class QueryData<T> : IQueryData`
**Base:** `IQueryData`
**File:** `TaleWorlds.MountAndBlade/QueryData.cs`

## 概述

`QueryData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `QueryData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `Value` | `public T Value { get; }` |

## 主要方法

### Evaluate
`public void Evaluate(float currentTime)`

**用途 / Purpose:** **用途 / Purpose:** 调用 Evaluate 对应的操作。

```csharp
// 先通过子系统 API 拿到 QueryData 实例
QueryData queryData = ...;
queryData.Evaluate(0);
```

### SetValue
`public void SetValue(T value, float currentTime)`

**用途 / Purpose:** **用途 / Purpose:** 为 value 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 QueryData 实例
QueryData queryData = ...;
queryData.SetValue(value, 0);
```

### GetCachedValue
`public T GetCachedValue()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 cached value 的结果。

```csharp
// 先通过子系统 API 拿到 QueryData 实例
QueryData queryData = ...;
var result = queryData.GetCachedValue();
```

### GetCachedValueUnlessTooOld
`public T GetCachedValueUnlessTooOld()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 cached value unless too old 的结果。

```csharp
// 先通过子系统 API 拿到 QueryData 实例
QueryData queryData = ...;
var result = queryData.GetCachedValueUnlessTooOld();
```

### GetCachedValueWithMaxAge
`public T GetCachedValueWithMaxAge(float age)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 cached value with max age 的结果。

```csharp
// 先通过子系统 API 拿到 QueryData 实例
QueryData queryData = ...;
var result = queryData.GetCachedValueWithMaxAge(0);
```

### Expire
`public void Expire()`

**用途 / Purpose:** **用途 / Purpose:** 调用 Expire 对应的操作。

```csharp
// 先通过子系统 API 拿到 QueryData 实例
QueryData queryData = ...;
queryData.Expire();
```

### SetupSyncGroup
`public static void SetupSyncGroup(params IQueryData groupItems)`

**用途 / Purpose:** **用途 / Purpose:** 为 up sync group 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
QueryData.SetupSyncGroup(groupItems);
```

### SetSyncGroup
`public void SetSyncGroup(IQueryData syncGroup)`

**用途 / Purpose:** **用途 / Purpose:** 为 sync group 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 QueryData 实例
QueryData queryData = ...;
queryData.SetSyncGroup(syncGroup);
```

## 使用示例

```csharp
// 该数据对象通常由战役/任务 API 返回
QueryData entry = ...;
```

## 参见

- [本区域目录](../)