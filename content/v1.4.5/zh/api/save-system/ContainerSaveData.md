---
title: "ContainerSaveData"
description: "ContainerSaveData 的自动生成类参考。"
---
# ContainerSaveData

**Namespace:** TaleWorlds.SaveSystem.Save
**Module:** TaleWorlds.SaveSystem
**Type:** `internal class ContainerSaveData`
**Base:** 无
**File:** `bin/TaleWorlds.SaveSystem/TaleWorlds.SaveSystem.Save/ContainerSaveData.cs`

## 概述

`ContainerSaveData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `ContainerSaveData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `ObjectId` | `public int ObjectId { get; }` |
| `Context` | `public ISaveContext Context { get; }` |
| `Target` | `public object Target { get; }` |
| `Type` | `public Type Type { get; }` |

## 主要方法

### CollectChildren
`public void CollectChildren()`

**用途 / Purpose:** 处理与 「collect children」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 ContainerSaveData 实例
ContainerSaveData containerSaveData = ...;
containerSaveData.CollectChildren();
```

### SaveHeaderTo
`public void SaveHeaderTo(SaveEntryFolder parentFolder, IArchiveContext archiveContext)`

**用途 / Purpose:** 将 「header to」 写入持久化存储或流中。

```csharp
// 先通过子系统 API 拿到 ContainerSaveData 实例
ContainerSaveData containerSaveData = ...;
containerSaveData.SaveHeaderTo(parentFolder, archiveContext);
```

### SaveHeaderDataTo
`public void SaveHeaderDataTo(BinaryWriter headerWriter, int folderId)`

**用途 / Purpose:** 将 「header data to」 写入持久化存储或流中。

```csharp
// 先通过子系统 API 拿到 ContainerSaveData 实例
ContainerSaveData containerSaveData = ...;
containerSaveData.SaveHeaderDataTo(headerWriter, 0);
```

### SaveHeaderFolderTo
`public void SaveHeaderFolderTo(BinaryWriter headerWriter, int folderId)`

**用途 / Purpose:** 将 「header folder to」 写入持久化存储或流中。

```csharp
// 先通过子系统 API 拿到 ContainerSaveData 实例
ContainerSaveData containerSaveData = ...;
containerSaveData.SaveHeaderFolderTo(headerWriter, 0);
```

### GetHeaderSize
`public int GetHeaderSize()`

**用途 / Purpose:** 读取并返回当前对象中 「header size」 的结果。

```csharp
// 先通过子系统 API 拿到 ContainerSaveData 实例
ContainerSaveData containerSaveData = ...;
var result = containerSaveData.GetHeaderSize();
```

### GetDataSize
`public int GetDataSize()`

**用途 / Purpose:** 读取并返回当前对象中 「data size」 的结果。

```csharp
// 先通过子系统 API 拿到 ContainerSaveData 实例
ContainerSaveData containerSaveData = ...;
var result = containerSaveData.GetDataSize();
```

### GetEntryCount
`public int GetEntryCount()`

**用途 / Purpose:** 读取并返回当前对象中 「entry count」 的结果。

```csharp
// 先通过子系统 API 拿到 ContainerSaveData 实例
ContainerSaveData containerSaveData = ...;
var result = containerSaveData.GetEntryCount();
```

### GetFolderCount
`public int GetFolderCount()`

**用途 / Purpose:** 读取并返回当前对象中 「folder count」 的结果。

```csharp
// 先通过子系统 API 拿到 ContainerSaveData 实例
ContainerSaveData containerSaveData = ...;
var result = containerSaveData.GetFolderCount();
```

### SaveDataFolder
`public void SaveDataFolder(BinaryWriter writer, ref int folderId)`

**用途 / Purpose:** 将 「data folder」 写入持久化存储或流中。

```csharp
// 先通过子系统 API 拿到 ContainerSaveData 实例
ContainerSaveData containerSaveData = ...;
containerSaveData.SaveDataFolder(writer, folderId);
```

### SaveTo
`public void SaveTo(BinaryWriter writer, ref int folderId)`

**用途 / Purpose:** 将 「to」 写入持久化存储或流中。

```csharp
// 先通过子系统 API 拿到 ContainerSaveData 实例
ContainerSaveData containerSaveData = ...;
containerSaveData.SaveTo(writer, folderId);
```

### SaveTo
`public void SaveTo(SaveEntryFolder parentFolder, IArchiveContext archiveContext)`

**用途 / Purpose:** 将 「to」 写入持久化存储或流中。

```csharp
// 先通过子系统 API 拿到 ContainerSaveData 实例
ContainerSaveData containerSaveData = ...;
containerSaveData.SaveTo(parentFolder, archiveContext);
```

### CollectStrings
`public void CollectStrings()`

**用途 / Purpose:** 处理与 「collect strings」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 ContainerSaveData 实例
ContainerSaveData containerSaveData = ...;
containerSaveData.CollectStrings();
```

### CollectStringsInto
`public void CollectStringsInto(List<string> collection)`

**用途 / Purpose:** 处理与 「collect strings into」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 ContainerSaveData 实例
ContainerSaveData containerSaveData = ...;
containerSaveData.CollectStringsInto(collection);
```

### CollectStructs
`public void CollectStructs()`

**用途 / Purpose:** 处理与 「collect structs」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 ContainerSaveData 实例
ContainerSaveData containerSaveData = ...;
containerSaveData.CollectStructs();
```

### CollectMembers
`public void CollectMembers()`

**用途 / Purpose:** 处理与 「collect members」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 ContainerSaveData 实例
ContainerSaveData containerSaveData = ...;
containerSaveData.CollectMembers();
```

### GetChildElementSaveDatas
`public IEnumerable<ElementSaveData> GetChildElementSaveDatas()`

**用途 / Purpose:** 读取并返回当前对象中 「child element save datas」 的结果。

```csharp
// 先通过子系统 API 拿到 ContainerSaveData 实例
ContainerSaveData containerSaveData = ...;
var result = containerSaveData.GetChildElementSaveDatas();
```

### GetChildElements
`public IEnumerable<object> GetChildElements()`

**用途 / Purpose:** 读取并返回当前对象中 「child elements」 的结果。

```csharp
// 先通过子系统 API 拿到 ContainerSaveData 实例
ContainerSaveData containerSaveData = ...;
var result = containerSaveData.GetChildElements();
```

### GetChildElements
`public static IEnumerable<object> GetChildElements(ContainerType containerType, object target)`

**用途 / Purpose:** 读取并返回当前对象中 「child elements」 的结果。

```csharp
// 静态调用，不需要实例
ContainerSaveData.GetChildElements(containerType, target);
```

### GetChildObjects
`public IEnumerable<object> GetChildObjects(ISaveContext context)`

**用途 / Purpose:** 读取并返回当前对象中 「child objects」 的结果。

```csharp
// 先通过子系统 API 拿到 ContainerSaveData 实例
ContainerSaveData containerSaveData = ...;
var result = containerSaveData.GetChildObjects(context);
```

### GetChildObjects
`public static void GetChildObjects(ISaveContext context, ContainerDefinition containerDefinition, ContainerType containerType, object target, List<object> collectedObjects)`

**用途 / Purpose:** 读取并返回当前对象中 「child objects」 的结果。

```csharp
// 静态调用，不需要实例
ContainerSaveData.GetChildObjects(context, containerDefinition, containerType, target, collectedObjects);
```

## 使用示例

```csharp
// 该数据对象通常由战役/任务 API 返回
ContainerSaveData entry = ...;
```

## 参见

- [本区域目录](../)