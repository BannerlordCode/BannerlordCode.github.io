---
title: "VariableLoadData"
description: "VariableLoadData 的自动生成类参考。"
---
# VariableLoadData

**Namespace:** TaleWorlds.SaveSystem.Load
**Module:** TaleWorlds.SaveSystem
**Type:** `internal abstract class VariableLoadData`
**Base:** 无
**File:** `TaleWorlds.SaveSystem/Load/VariableLoadData.cs`

## 概述

`VariableLoadData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `VariableLoadData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `Context` | `public LoadContext Context { get; }` |
| `MemberSaveId` | `public MemberTypeId MemberSaveId { get; }` |
| `SavedMemberType` | `public SavedMemberType SavedMemberType { get; }` |
| `Data` | `public object Data { get; }` |

## 主要方法

### Read
`public void Read()`

**用途 / Purpose:** 从当前实例读取数据或状态。

```csharp
// 先通过子系统 API 拿到 VariableLoadData 实例
VariableLoadData variableLoadData = ...;
variableLoadData.Read();
```

### SetCustomStructData
`public void SetCustomStructData(object customStructObject)`

**用途 / Purpose:** 为 custom struct data 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 VariableLoadData 实例
VariableLoadData variableLoadData = ...;
variableLoadData.SetCustomStructData(customStructObject);
```

### GetDataToUse
`public object GetDataToUse()`

**用途 / Purpose:** 读取并返回当前对象中 data to use 的结果。

```csharp
// 先通过子系统 API 拿到 VariableLoadData 实例
VariableLoadData variableLoadData = ...;
var result = variableLoadData.GetDataToUse();
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
VariableLoadData instance = ...;
```

## 参见

- [本区域目录](../)