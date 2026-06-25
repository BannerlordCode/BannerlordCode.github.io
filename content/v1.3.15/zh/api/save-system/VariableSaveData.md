---
title: "VariableSaveData"
description: "VariableSaveData 的自动生成类参考。"
---
# VariableSaveData

**Namespace:** TaleWorlds.SaveSystem.Save
**Module:** TaleWorlds.SaveSystem
**Type:** `internal abstract class VariableSaveData`
**Base:** 无
**File:** `TaleWorlds.SaveSystem/Save/VariableSaveData.cs`

## 概述

`VariableSaveData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `VariableSaveData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `Context` | `public ISaveContext Context { get; }` |
| `MemberType` | `public SavedMemberType MemberType { get; }` |
| `Value` | `public object Value { get; }` |
| `MemberSaveId` | `public MemberTypeId MemberSaveId { get; }` |
| `TypeDefinition` | `public TypeDefinitionBase TypeDefinition { get; }` |

## 主要方法

### SaveTo
`public void SaveTo(IWriter writer)`

**用途 / Purpose:** 将 to 写入持久化存储或流中。

```csharp
// 先通过子系统 API 拿到 VariableSaveData 实例
VariableSaveData variableSaveData = ...;
variableSaveData.SaveTo(writer);
```

### GetDataSize
`public int GetDataSize()`

**用途 / Purpose:** 读取并返回当前对象中 data size 的结果。

```csharp
// 先通过子系统 API 拿到 VariableSaveData 实例
VariableSaveData variableSaveData = ...;
var result = variableSaveData.GetDataSize();
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
VariableSaveData instance = ...;
```

## 参见

- [本区域目录](../)