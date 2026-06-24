<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SaveEntryFolder`
- [← 本领域 / 返回 save-system](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SaveEntryFolder

**Namespace:** TaleWorlds.SaveSystem
**Module:** TaleWorlds.SaveSystem
**Type:** `public class SaveEntryFolder`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.SaveSystem/TaleWorlds.SaveSystem/SaveEntryFolder.cs`

## 概述

`SaveEntryFolder` 位于 `TaleWorlds.SaveSystem`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.SaveSystem` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `GlobalId` | `public int GlobalId { get; }` |
| `ParentGlobalId` | `public int ParentGlobalId { get; }` |
| `FolderId` | `public FolderId FolderId { get; }` |

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
var value = new SaveEntryFolder();
value.GetAllEntries();
```

## 参见

- [完整类目录](../catalog)