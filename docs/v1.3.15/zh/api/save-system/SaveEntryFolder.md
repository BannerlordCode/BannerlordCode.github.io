<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SaveEntryFolder`
- [← 本领域 / 返回 save-system](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SaveEntryFolder

**命名空间:** TaleWorlds.SaveSystem
**模块:** TaleWorlds.SaveSystem
**类型:** 类 class class
**领域:** 存档系统 SaveSystem

## 概述

> 本页为自动生成的存根。`SaveEntryFolder` 是 `TaleWorlds.SaveSystem` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `GlobalId` | `public int GlobalId { get; }` |
| `ParentGlobalId` | `public int ParentGlobalId { get; }` |
| `FolderId` | `public FolderId FolderId { get; }` |
| `ChildEntries` | `public Dictionary<EntryId, SaveEntry>.ValueCollection ChildEntries { get; }` |
| `ChildFolders` | `public Dictionary<FolderId, SaveEntryFolder>.ValueCollection ChildFolders { get; }` |


## 主要方法

### GetAllEntries

```csharp
public List<SaveEntry> GetAllEntries()
```

### CreateRootFolder

```csharp
public static SaveEntryFolder CreateRootFolder()
```

### AddEntry

```csharp
public void AddEntry(SaveEntry saveEntry)
```

### GetEntry

```csharp
public SaveEntry GetEntry(EntryId entryId)
```

### AddChildFolderEntry

```csharp
public void AddChildFolderEntry(SaveEntryFolder saveEntryFolder)
```

### CreateEntry

```csharp
public SaveEntry CreateEntry(EntryId entryId)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-save)