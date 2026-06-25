---
title: "PropertySaveData"
description: "PropertySaveData 的自动生成类参考。"
---
# PropertySaveData

**Namespace:** TaleWorlds.SaveSystem.Save
**Module:** TaleWorlds.SaveSystem
**Type:** `internal class PropertySaveData : MemberSaveData`
**Base:** `MemberSaveData`
**File:** `bin/TaleWorlds.SaveSystem/TaleWorlds.SaveSystem.Save/PropertySaveData.cs`

## 概述

`PropertySaveData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `PropertySaveData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `PropertyDefinition` | `public PropertyDefinition PropertyDefinition { get; }` |
| `SaveId` | `public MemberTypeId SaveId { get; }` |

## 主要方法

### Initialize
`public override void Initialize(TypeDefinitionBase typeDefinition)`

**用途 / Purpose:** **用途 / Purpose:** 初始化当前对象所需的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 PropertySaveData 实例
PropertySaveData propertySaveData = ...;
propertySaveData.Initialize(typeDefinition);
```

### InitializeAsCustomStruct
`public override void InitializeAsCustomStruct(int structId)`

**用途 / Purpose:** **用途 / Purpose:** 为 as custom struct 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 PropertySaveData 实例
PropertySaveData propertySaveData = ...;
propertySaveData.InitializeAsCustomStruct(0);
```

## 使用示例

```csharp
// 该数据对象通常由战役/任务 API 返回
PropertySaveData entry = ...;
```

## 参见

- [本区域目录](../)