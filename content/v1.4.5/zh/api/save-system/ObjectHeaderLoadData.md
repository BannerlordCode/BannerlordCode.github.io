---
title: "ObjectHeaderLoadData"
description: "ObjectHeaderLoadData 的自动生成类参考。"
---
# ObjectHeaderLoadData

**Namespace:** TaleWorlds.SaveSystem.Load
**Module:** TaleWorlds.SaveSystem
**Type:** `public class ObjectHeaderLoadData`
**Base:** 无
**File:** `bin/TaleWorlds.SaveSystem/TaleWorlds.SaveSystem.Load/ObjectHeaderLoadData.cs`

## 概述

`ObjectHeaderLoadData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `ObjectHeaderLoadData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `Id` | `public int Id { get; }` |
| `LoadedObject` | `public object LoadedObject { get; }` |
| `Target` | `public object Target { get; }` |
| `PropertyCount` | `public short PropertyCount { get; }` |
| `ChildStructCount` | `public short ChildStructCount { get; }` |
| `TypeDefinition` | `public TypeDefinition TypeDefinition { get; }` |
| `Context` | `public LoadContext Context { get; }` |
| `SaveId` | `public SaveId SaveId { get; }` |

## 主要方法

### InitialieReaders
`public void InitialieReaders(SaveEntryFolder saveEntryFolder)`

**用途 / Purpose:** 为 ialie readers 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 ObjectHeaderLoadData 实例
ObjectHeaderLoadData objectHeaderLoadData = ...;
objectHeaderLoadData.InitialieReaders(saveEntryFolder);
```

### CreateObject
`public void CreateObject()`

**用途 / Purpose:** 构建一个新的 object 实体并返回给调用方。

```csharp
// 先通过子系统 API 拿到 ObjectHeaderLoadData 实例
ObjectHeaderLoadData objectHeaderLoadData = ...;
objectHeaderLoadData.CreateObject();
```

### AdvancedResolveObject
`public void AdvancedResolveObject(MetaData metaData, ObjectLoadData objectLoadData)`

**用途 / Purpose:** 调用 AdvancedResolveObject 对应的操作。

```csharp
// 先通过子系统 API 拿到 ObjectHeaderLoadData 实例
ObjectHeaderLoadData objectHeaderLoadData = ...;
objectHeaderLoadData.AdvancedResolveObject(metaData, objectLoadData);
```

### ResolveObject
`public void ResolveObject()`

**用途 / Purpose:** 调用 ResolveObject 对应的操作。

```csharp
// 先通过子系统 API 拿到 ObjectHeaderLoadData 实例
ObjectHeaderLoadData objectHeaderLoadData = ...;
objectHeaderLoadData.ResolveObject();
```

## 使用示例

```csharp
// 该数据对象通常由战役/任务 API 返回
ObjectHeaderLoadData entry = ...;
```

## 参见

- [本区域目录](../)