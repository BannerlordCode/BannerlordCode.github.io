---
title: "MemberSaveData"
description: "MemberSaveData 的自动生成类参考。"
---
# MemberSaveData

**Namespace:** TaleWorlds.SaveSystem.Save
**Module:** TaleWorlds.SaveSystem
**Type:** `internal abstract class MemberSaveData : VariableSaveData`
**Base:** `VariableSaveData`
**File:** `bin/TaleWorlds.SaveSystem/TaleWorlds.SaveSystem.Save/MemberSaveData.cs`

## 概述

`MemberSaveData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `MemberSaveData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `ObjectSaveData` | `public ObjectSaveData ObjectSaveData { get; }` |

## 主要方法

### Initialize
`public abstract void Initialize(TypeDefinitionBase typeDefinition)`

**用途 / Purpose:** 初始化当前对象所需的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 MemberSaveData 实例
MemberSaveData memberSaveData = ...;
memberSaveData.Initialize(typeDefinition);
```

### InitializeAsCustomStruct
`public abstract void InitializeAsCustomStruct(int structId)`

**用途 / Purpose:** 为 「as custom struct」 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 MemberSaveData 实例
MemberSaveData memberSaveData = ...;
memberSaveData.InitializeAsCustomStruct(0);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
MemberSaveData instance = ...;
```

## 参见

- [本区域目录](../)