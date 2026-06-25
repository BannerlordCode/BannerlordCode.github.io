---
title: "ArchiveSerializer"
description: "ArchiveSerializer 的自动生成类参考。"
---
# ArchiveSerializer

**Namespace:** TaleWorlds.SaveSystem
**Module:** TaleWorlds.SaveSystem
**Type:** `internal class ArchiveSerializer : IArchiveContext`
**Base:** `IArchiveContext`
**File:** `TaleWorlds.SaveSystem/ArchiveSerializer.cs`

## 概述

`ArchiveSerializer` 位于 `TaleWorlds.SaveSystem`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.SaveSystem` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### SerializeEntry
`public void SerializeEntry(SaveEntry entry)`

**用途 / Purpose:** 将「entry」序列化为可存储或传输的格式。

```csharp
// 先通过子系统 API 拿到 ArchiveSerializer 实例
ArchiveSerializer archiveSerializer = ...;
archiveSerializer.SerializeEntry(entry);
```

### SerializeFolder
`public void SerializeFolder(SaveEntryFolder folder)`

**用途 / Purpose:** 将「folder」序列化为可存储或传输的格式。

```csharp
// 先通过子系统 API 拿到 ArchiveSerializer 实例
ArchiveSerializer archiveSerializer = ...;
archiveSerializer.SerializeFolder(folder);
```

### CreateFolder
`public SaveEntryFolder CreateFolder(SaveEntryFolder parentFolder, FolderId folderId, int entryCount)`

**用途 / Purpose:** 构建一个新的 「folder」 实体并返回给调用方。

```csharp
// 先通过子系统 API 拿到 ArchiveSerializer 实例
ArchiveSerializer archiveSerializer = ...;
var result = archiveSerializer.CreateFolder(parentFolder, folderId, 0);
```

### FinalizeAndGetBinaryData
`public byte FinalizeAndGetBinaryData()`

**用途 / Purpose:** 获取或维护 「finalize and get binary data」 数据。

```csharp
// 先通过子系统 API 拿到 ArchiveSerializer 实例
ArchiveSerializer archiveSerializer = ...;
var result = archiveSerializer.FinalizeAndGetBinaryData();
```

### GetBinaryDataDebug
`public byte GetBinaryDataDebug()`

**用途 / Purpose:** 读取并返回当前对象中 「binary data debug」 的结果。

```csharp
// 先通过子系统 API 拿到 ArchiveSerializer 实例
ArchiveSerializer archiveSerializer = ...;
var result = archiveSerializer.GetBinaryDataDebug();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
ArchiveSerializer archiveSerializer = ...;
archiveSerializer.SerializeEntry(entry);
```

## 参见

- [本区域目录](../)