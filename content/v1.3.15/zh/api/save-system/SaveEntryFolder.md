---
title: "SaveEntryFolder"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SaveEntryFolder`
- [← 本领域 / 返回 save-system](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SaveEntryFolder

**命名空间:** TaleWorlds.SaveSystem
**模块:** TaleWorlds.SaveSystem
**类型:** `public class SaveEntryFolder`
**领域:** save-system

## 概述

`SaveEntryFolder` 位于 `TaleWorlds.SaveSystem`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.SaveSystem` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

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
`public List<SaveEntry> GetAllEntries()`

**用途 / Purpose:** 获取 `all entries` 的当前值。

### CreateRootFolder
`public static SaveEntryFolder CreateRootFolder()`

**用途 / Purpose:** 创建一个 `root folder` 实例或对象。

### AddEntry
`public void AddEntry(SaveEntry saveEntry)`

**用途 / Purpose:** 向当前集合/状态中添加 `entry`。

### GetEntry
`public SaveEntry GetEntry(EntryId entryId)`

**用途 / Purpose:** 获取 `entry` 的当前值。

### AddChildFolderEntry
`public void AddChildFolderEntry(SaveEntryFolder saveEntryFolder)`

**用途 / Purpose:** 向当前集合/状态中添加 `child folder entry`。

### CreateEntry
`public SaveEntry CreateEntry(EntryId entryId)`

**用途 / Purpose:** 创建一个 `entry` 实例或对象。

## 使用示例

```csharp
// 先从游戏状态中拿到一个 SaveEntryFolder 实例，再调用它的公开方法
var value = new SaveEntryFolder();
value.GetAllEntries();
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-save)
