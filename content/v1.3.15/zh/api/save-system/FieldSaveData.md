---
title: "FieldSaveData"
description: "FieldSaveData 的自动生成类参考。"
---
# FieldSaveData

**Namespace:** TaleWorlds.SaveSystem.Save
**Module:** TaleWorlds.SaveSystem
**Type:** `internal class FieldSaveData : MemberSaveData`
**Base:** `MemberSaveData`
**File:** `TaleWorlds.SaveSystem/Save/FieldSaveData.cs`

## 概述

`FieldSaveData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `FieldSaveData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `FieldDefinition` | `public FieldDefinition FieldDefinition { get; }` |
| `SaveId` | `public MemberTypeId SaveId { get; }` |

## 主要方法

### Initialize
`public override void Initialize(TypeDefinitionBase typeDefinition)`

**用途 / Purpose:** 初始化当前对象所需的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 FieldSaveData 实例
FieldSaveData fieldSaveData = ...;
fieldSaveData.Initialize(typeDefinition);
```

### InitializeAsCustomStruct
`public override void InitializeAsCustomStruct(int structId)`

**用途 / Purpose:** 为 「as custom struct」 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 FieldSaveData 实例
FieldSaveData fieldSaveData = ...;
fieldSaveData.InitializeAsCustomStruct(0);
```

## 使用示例

```csharp
// 该数据对象通常由战役/任务 API 返回
FieldSaveData entry = ...;
```

## 参见

- [本区域目录](../)