---
title: "ObjectSaveData"
description: "ObjectSaveData 的自动生成类参考。"
---
# ObjectSaveData

**Namespace:** TaleWorlds.SaveSystem.Save
**Module:** TaleWorlds.SaveSystem
**Type:** `internal class ObjectSaveData`
**Base:** 无
**File:** `bin/TaleWorlds.SaveSystem/TaleWorlds.SaveSystem.Save/ObjectSaveData.cs`

## 概述

`ObjectSaveData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `ObjectSaveData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `ObjectId` | `public int ObjectId { get; }` |
| `Context` | `public ISaveContext Context { get; }` |
| `Target` | `public object Target { get; }` |
| `Type` | `public Type Type { get; }` |
| `IsClass` | `public bool IsClass { get; }` |

## 主要方法

### GetFolderCount
`public int GetFolderCount()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 folder count 的结果。

```csharp
// 先通过子系统 API 拿到 ObjectSaveData 实例
ObjectSaveData objectSaveData = ...;
var result = objectSaveData.GetFolderCount();
```

### GetEntryCount
`public int GetEntryCount()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 entry count 的结果。

```csharp
// 先通过子系统 API 拿到 ObjectSaveData 实例
ObjectSaveData objectSaveData = ...;
var result = objectSaveData.GetEntryCount();
```

### CollectMembers
`public void CollectMembers()`

**用途 / Purpose:** **用途 / Purpose:** 调用 CollectMembers 对应的操作。

```csharp
// 先通过子系统 API 拿到 ObjectSaveData 实例
ObjectSaveData objectSaveData = ...;
objectSaveData.CollectMembers();
```

### CollectStringsInto
`public void CollectStringsInto(List<string> collection)`

**用途 / Purpose:** **用途 / Purpose:** 调用 CollectStringsInto 对应的操作。

```csharp
// 先通过子系统 API 拿到 ObjectSaveData 实例
ObjectSaveData objectSaveData = ...;
objectSaveData.CollectStringsInto(collection);
```

### CollectStrings
`public void CollectStrings()`

**用途 / Purpose:** **用途 / Purpose:** 调用 CollectStrings 对应的操作。

```csharp
// 先通过子系统 API 拿到 ObjectSaveData 实例
ObjectSaveData objectSaveData = ...;
objectSaveData.CollectStrings();
```

### CollectStructs
`public void CollectStructs()`

**用途 / Purpose:** **用途 / Purpose:** 调用 CollectStructs 对应的操作。

```csharp
// 先通过子系统 API 拿到 ObjectSaveData 实例
ObjectSaveData objectSaveData = ...;
objectSaveData.CollectStructs();
```

### SaveHeaderTo
`public void SaveHeaderTo(SaveEntryFolder parentFolder, IArchiveContext archiveContext)`

**用途 / Purpose:** **用途 / Purpose:** 将 header to 写入持久化存储或流中。

```csharp
// 先通过子系统 API 拿到 ObjectSaveData 实例
ObjectSaveData objectSaveData = ...;
objectSaveData.SaveHeaderTo(parentFolder, archiveContext);
```

### SaveHeaderFolderTo
`public void SaveHeaderFolderTo(BinaryWriter headerWriter, int folderId)`

**用途 / Purpose:** **用途 / Purpose:** 将 header folder to 写入持久化存储或流中。

```csharp
// 先通过子系统 API 拿到 ObjectSaveData 实例
ObjectSaveData objectSaveData = ...;
objectSaveData.SaveHeaderFolderTo(headerWriter, 0);
```

### SaveHeaderDataTo
`public void SaveHeaderDataTo(BinaryWriter headerWriter, int folderId)`

**用途 / Purpose:** **用途 / Purpose:** 将 header data to 写入持久化存储或流中。

```csharp
// 先通过子系统 API 拿到 ObjectSaveData 实例
ObjectSaveData objectSaveData = ...;
objectSaveData.SaveHeaderDataTo(headerWriter, 0);
```

### GetHeaderSize
`public int GetHeaderSize()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 header size 的结果。

```csharp
// 先通过子系统 API 拿到 ObjectSaveData 实例
ObjectSaveData objectSaveData = ...;
var result = objectSaveData.GetHeaderSize();
```

### GetDataSize
`public int GetDataSize()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 data size 的结果。

```csharp
// 先通过子系统 API 拿到 ObjectSaveData 实例
ObjectSaveData objectSaveData = ...;
var result = objectSaveData.GetDataSize();
```

### SaveDataFolder
`public void SaveDataFolder(BinaryWriter writer, int parentFolderId, ref int folderId)`

**用途 / Purpose:** **用途 / Purpose:** 将 data folder 写入持久化存储或流中。

```csharp
// 先通过子系统 API 拿到 ObjectSaveData 实例
ObjectSaveData objectSaveData = ...;
objectSaveData.SaveDataFolder(writer, 0, folderId);
```

### SaveTo
`public void SaveTo(BinaryWriter writer, ref int folderId)`

**用途 / Purpose:** **用途 / Purpose:** 将 to 写入持久化存储或流中。

```csharp
// 先通过子系统 API 拿到 ObjectSaveData 实例
ObjectSaveData objectSaveData = ...;
objectSaveData.SaveTo(writer, folderId);
```

### SaveTo
`public void SaveTo(SaveEntryFolder parentFolder, IArchiveContext archiveContext)`

**用途 / Purpose:** **用途 / Purpose:** 将 to 写入持久化存储或流中。

```csharp
// 先通过子系统 API 拿到 ObjectSaveData 实例
ObjectSaveData objectSaveData = ...;
objectSaveData.SaveTo(parentFolder, archiveContext);
```

### GetChildObjects
`public IEnumerable<object> GetChildObjects()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 child objects 的结果。

```csharp
// 先通过子系统 API 拿到 ObjectSaveData 实例
ObjectSaveData objectSaveData = ...;
var result = objectSaveData.GetChildObjects();
```

### GetChildObjects
`public static void GetChildObjects(ISaveContext context, TypeDefinition typeDefinition, object target, List<object> collectedObjects)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 child objects 的结果。

```csharp
// 静态调用，不需要实例
ObjectSaveData.GetChildObjects(context, typeDefinition, target, collectedObjects);
```

## 使用示例

```csharp
// 该数据对象通常由战役/任务 API 返回
ObjectSaveData entry = ...;
```

## 参见

- [本区域目录](../)