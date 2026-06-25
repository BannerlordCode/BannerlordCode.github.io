---
title: "ObjectLoadData"
description: "ObjectLoadData 的自动生成类参考。"
---
# ObjectLoadData

**Namespace:** TaleWorlds.SaveSystem.Load
**Module:** TaleWorlds.SaveSystem
**Type:** `public class ObjectLoadData`
**Base:** 无
**File:** `TaleWorlds.SaveSystem/Load/ObjectLoadData.cs`

## 概述

`ObjectLoadData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `ObjectLoadData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `Id` | `public int Id { get; }` |
| `Target` | `public object Target { get; }` |
| `Context` | `public LoadContext Context { get; }` |
| `TypeDefinition` | `public TypeDefinition TypeDefinition { get; }` |

## 主要方法

### GetDataBySaveId
`public object GetDataBySaveId(int localSaveId)`

**用途 / Purpose:** 读取并返回当前对象中 「data by save id」 的结果。

```csharp
// 先通过子系统 API 拿到 ObjectLoadData 实例
ObjectLoadData objectLoadData = ...;
var result = objectLoadData.GetDataBySaveId(0);
```

### GetMemberValueBySaveId
`public object GetMemberValueBySaveId(int localSaveId)`

**用途 / Purpose:** 读取并返回当前对象中 「member value by save id」 的结果。

```csharp
// 先通过子系统 API 拿到 ObjectLoadData 实例
ObjectLoadData objectLoadData = ...;
var result = objectLoadData.GetMemberValueBySaveId(0);
```

### GetFieldValueBySaveId
`public object GetFieldValueBySaveId(int localSaveId)`

**用途 / Purpose:** 读取并返回当前对象中 「field value by save id」 的结果。

```csharp
// 先通过子系统 API 拿到 ObjectLoadData 实例
ObjectLoadData objectLoadData = ...;
var result = objectLoadData.GetFieldValueBySaveId(0);
```

### GetPropertyValueBySaveId
`public object GetPropertyValueBySaveId(int localSaveId)`

**用途 / Purpose:** 读取并返回当前对象中 「property value by save id」 的结果。

```csharp
// 先通过子系统 API 拿到 ObjectLoadData 实例
ObjectLoadData objectLoadData = ...;
var result = objectLoadData.GetPropertyValueBySaveId(0);
```

### HasMember
`public bool HasMember(int localSaveId)`

**用途 / Purpose:** 判断当前对象是否已经持有 「member」。

```csharp
// 先通过子系统 API 拿到 ObjectLoadData 实例
ObjectLoadData objectLoadData = ...;
var result = objectLoadData.HasMember(0);
```

### InitializeReaders
`public void InitializeReaders(SaveEntryFolder saveEntryFolder)`

**用途 / Purpose:** 为 「readers」 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 ObjectLoadData 实例
ObjectLoadData objectLoadData = ...;
objectLoadData.InitializeReaders(saveEntryFolder);
```

### CreateStruct
`public void CreateStruct()`

**用途 / Purpose:** 构建一个新的 「struct」 实体并返回给调用方。

```csharp
// 先通过子系统 API 拿到 ObjectLoadData 实例
ObjectLoadData objectLoadData = ...;
objectLoadData.CreateStruct();
```

### FillCreatedObject
`public void FillCreatedObject()`

**用途 / Purpose:** 处理与 「fill created object」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 ObjectLoadData 实例
ObjectLoadData objectLoadData = ...;
objectLoadData.FillCreatedObject();
```

### Read
`public void Read()`

**用途 / Purpose:** 读取当前对象的数据或状态。

```csharp
// 先通过子系统 API 拿到 ObjectLoadData 实例
ObjectLoadData objectLoadData = ...;
objectLoadData.Read();
```

### FillObject
`public void FillObject()`

**用途 / Purpose:** 处理与 「fill object」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 ObjectLoadData 实例
ObjectLoadData objectLoadData = ...;
objectLoadData.FillObject();
```

## 使用示例

```csharp
// 该数据对象通常由战役/任务 API 返回
ObjectLoadData entry = ...;
```

## 参见

- [本区域目录](../)