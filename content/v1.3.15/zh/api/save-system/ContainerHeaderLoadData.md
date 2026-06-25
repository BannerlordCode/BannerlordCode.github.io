---
title: "ContainerHeaderLoadData"
description: "ContainerHeaderLoadData 的自动生成类参考。"
---
# ContainerHeaderLoadData

**Namespace:** TaleWorlds.SaveSystem.Load
**Module:** TaleWorlds.SaveSystem
**Type:** `public class ContainerHeaderLoadData`
**Base:** 无
**File:** `TaleWorlds.SaveSystem/Load/ContainerHeaderLoadData.cs`

## 概述

`ContainerHeaderLoadData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `ContainerHeaderLoadData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `Id` | `public int Id { get; }` |
| `Target` | `public object Target { get; }` |
| `Context` | `public LoadContext Context { get; }` |
| `TypeDefinition` | `public ContainerDefinition TypeDefinition { get; }` |
| `SaveId` | `public SaveId SaveId { get; }` |
| `ElementCount` | `public int ElementCount { get; }` |
| `ContainerType` | `public ContainerType ContainerType { get; }` |

## 主要方法

### GetObjectTypeDefinition
`public bool GetObjectTypeDefinition()`

**用途 / Purpose:** 读取并返回当前对象中 object type definition 的结果。

```csharp
// 先通过子系统 API 拿到 ContainerHeaderLoadData 实例
ContainerHeaderLoadData containerHeaderLoadData = ...;
var result = containerHeaderLoadData.GetObjectTypeDefinition();
```

### CreateObject
`public void CreateObject()`

**用途 / Purpose:** 构建一个新的 object 实体并返回给调用方。

```csharp
// 先通过子系统 API 拿到 ContainerHeaderLoadData 实例
ContainerHeaderLoadData containerHeaderLoadData = ...;
containerHeaderLoadData.CreateObject();
```

### InitialieReaders
`public void InitialieReaders(SaveEntryFolder saveEntryFolder)`

**用途 / Purpose:** 为 ialie readers 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 ContainerHeaderLoadData 实例
ContainerHeaderLoadData containerHeaderLoadData = ...;
containerHeaderLoadData.InitialieReaders(saveEntryFolder);
```

## 使用示例

```csharp
// 该数据对象通常由战役/任务 API 返回
ContainerHeaderLoadData entry = ...;
```

## 参见

- [本区域目录](../)