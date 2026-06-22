<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SaveEntry`
- [← 本领域 / 返回 save-system](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SaveEntry

**命名空间:** TaleWorlds.SaveSystem
**模块:** TaleWorlds.SaveSystem
**类型:** 类 class class
**领域:** 存档系统 SaveSystem

## 概述

> 本页为自动生成的存根。`SaveEntry` 是 `TaleWorlds.SaveSystem` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `Data` | `public byte Data { get; }` |
| `Id` | `public EntryId Id { get; }` |
| `FolderId` | `public int FolderId { get; }` |


## 主要方法

### CreateFrom

```csharp
public static SaveEntry CreateFrom(int entryFolderId, EntryId entryId, byte data)
```

### CreateNew

```csharp
public static SaveEntry CreateNew(SaveEntryFolder parentFolder, EntryId entryId)
```

### GetBinaryReader

```csharp
public BinaryReader GetBinaryReader()
```

### FillFrom

```csharp
public void FillFrom(BinaryWriter writer)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-save)