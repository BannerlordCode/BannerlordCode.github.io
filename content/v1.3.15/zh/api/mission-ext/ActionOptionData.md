---
title: "ActionOptionData"
description: "ActionOptionData 的自动生成类参考。"
---
# ActionOptionData

**Namespace:** TaleWorlds.MountAndBlade.Options
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ActionOptionData : IOptionData`
**Base:** `IOptionData`
**File:** `TaleWorlds.MountAndBlade/Options/ActionOptionData.cs`

## 概述

`ActionOptionData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `ActionOptionData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `OnAction` | `public Action OnAction { get; }` |

## 主要方法

### Commit
`public void Commit()`

**用途 / Purpose:** **用途 / Purpose:** 调用 Commit 对应的操作。

```csharp
// 先通过子系统 API 拿到 ActionOptionData 实例
ActionOptionData actionOptionData = ...;
actionOptionData.Commit();
```

### GetDefaultValue
`public float GetDefaultValue()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 default value 的结果。

```csharp
// 先通过子系统 API 拿到 ActionOptionData 实例
ActionOptionData actionOptionData = ...;
var result = actionOptionData.GetDefaultValue();
```

### GetOptionType
`public object GetOptionType()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 option type 的结果。

```csharp
// 先通过子系统 API 拿到 ActionOptionData 实例
ActionOptionData actionOptionData = ...;
var result = actionOptionData.GetOptionType();
```

### GetValue
`public float GetValue(bool forceRefresh)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 value 的结果。

```csharp
// 先通过子系统 API 拿到 ActionOptionData 实例
ActionOptionData actionOptionData = ...;
var result = actionOptionData.GetValue(false);
```

### IsNative
`public bool IsNative()`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 native 状态或条件。

```csharp
// 先通过子系统 API 拿到 ActionOptionData 实例
ActionOptionData actionOptionData = ...;
var result = actionOptionData.IsNative();
```

### SetValue
`public void SetValue(float value)`

**用途 / Purpose:** **用途 / Purpose:** 为 value 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 ActionOptionData 实例
ActionOptionData actionOptionData = ...;
actionOptionData.SetValue(0);
```

### IsAction
`public bool IsAction()`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 action 状态或条件。

```csharp
// 先通过子系统 API 拿到 ActionOptionData 实例
ActionOptionData actionOptionData = ...;
var result = actionOptionData.IsAction();
```

### GetIsDisabledAndReasonID
`public ValueTuple<string, bool> GetIsDisabledAndReasonID()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 is disabled and reason i d 的结果。

```csharp
// 先通过子系统 API 拿到 ActionOptionData 实例
ActionOptionData actionOptionData = ...;
var result = actionOptionData.GetIsDisabledAndReasonID();
```

## 使用示例

```csharp
// 该数据对象通常由战役/任务 API 返回
ActionOptionData entry = ...;
```

## 参见

- [本区域目录](../)