---
title: "SaveEntry"
description: "SaveEntry 的自动生成类参考。"
---
# SaveEntry

**Namespace:** TaleWorlds.SaveSystem
**Module:** TaleWorlds.SaveSystem
**Type:** `public class SaveEntry`
**Base:** 无
**File:** `TaleWorlds.SaveSystem/SaveEntry.cs`

## 概述

`SaveEntry` 位于 `TaleWorlds.SaveSystem`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.SaveSystem` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Data` | `public byte Data { get; }` |
| `Id` | `public EntryId Id { get; }` |
| `FolderId` | `public int FolderId { get; }` |

## 主要方法

### CreateFrom
`public static SaveEntry CreateFrom(int entryFolderId, EntryId entryId, byte data)`

**用途 / Purpose:** 构建一个新的 「from」 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
SaveEntry.CreateFrom(0, entryId, 0);
```

### CreateNew
`public static SaveEntry CreateNew(SaveEntryFolder parentFolder, EntryId entryId)`

**用途 / Purpose:** 构建一个新的 「new」 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
SaveEntry.CreateNew(parentFolder, entryId);
```

### GetBinaryReader
`public BinaryReader GetBinaryReader()`

**用途 / Purpose:** 读取并返回当前对象中 「binary reader」 的结果。

```csharp
// 先通过子系统 API 拿到 SaveEntry 实例
SaveEntry saveEntry = ...;
var result = saveEntry.GetBinaryReader();
```

### FillFrom
`public void FillFrom(BinaryWriter writer)`

**用途 / Purpose:** 处理与 「fill from」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 SaveEntry 实例
SaveEntry saveEntry = ...;
saveEntry.FillFrom(writer);
```

## 使用示例

```csharp
SaveEntry.CreateFrom(0, entryId, 0);
```

## 参见

- [本区域目录](../)