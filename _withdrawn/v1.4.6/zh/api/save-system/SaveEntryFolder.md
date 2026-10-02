---
title: "SaveEntryFolder"
description: "SaveEntryFolder：TaleWorlds.SaveSystem 的 public 类；公开成员 13 个（方法 6、属性 5、字段 0）。canonical 桶 save-system。源文件 TaleWorlds.SaveSystem/SaveEntryFolder.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SaveEntryFolder

**Namespace:** `TaleWorlds.SaveSystem`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `public class SaveEntryFolder`
**File:** `TaleWorlds.SaveSystem/SaveEntryFolder.cs`
**Bucket:** `save-system` (rule:TaleWorlds.SaveSystem)

## 概述

SaveEntryFolder 位于 TaleWorlds.SaveSystem 模块，源文件 TaleWorlds.SaveSystem/SaveEntryFolder.cs。它是一个 public 类，继承链为 SaveEntryFolder。public/protected 成员共 13 个：6 方法、5 属性、2 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SaveEntryFolder 落在 canonical 桶 `save-system`（命中规则 `rule:TaleWorlds.SaveSystem`），命名空间 `TaleWorlds.SaveSystem`，继承链 SaveEntryFolder。成员构成以方法为主（方法 6/13，属性 5/13），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.SaveSystem/SaveEntryFolder.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GlobalId` | `public int GlobalId` | 属性 |
| `ParentGlobalId` | `public int ParentGlobalId` | 属性 |
| `FolderId` | `public FolderId FolderId` | 属性 |
| `ChildEntries` | `public Dictionary<EntryId, SaveEntry>.ValueCollection ChildEntries` | 属性 |
| `List` | `public List<SaveEntry>GetAllEntries()` | 方法 |
| `CreateRootFolder` | `public static SaveEntryFolder CreateRootFolder()` | 方法 |
| `ChildFolders` | `public Dictionary<FolderId, SaveEntryFolder>.ValueCollection ChildFolders` | 属性 |
| `SaveEntryFolder` | `public SaveEntryFolder(SaveEntryFolder parent, int globalId, FolderId folderId, int entryCount) : this(parent.GlobalId, globalId, folderId, entryCount)` | 构造函数 |
| `SaveEntryFolder` | `public SaveEntryFolder(int parentGlobalId, int globalId, FolderId folderId, int entryCount)` | 构造函数 |
| `AddEntry` | `public void AddEntry(SaveEntry saveEntry)` | 方法 |
| `GetEntry` | `public SaveEntry GetEntry(EntryId entryId)` | 方法 |
| `AddChildFolderEntry` | `public void AddChildFolderEntry(SaveEntryFolder saveEntryFolder)` | 方法 |
| `CreateEntry` | `public SaveEntry CreateEntry(EntryId entryId)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 AsyncFileSaveDriver](../AsyncFileSaveDriver/)
- [同命名空间 ContainerType](../ContainerType/)
- [同命名空间 EntryId](../EntryId/)
- [同命名空间 FileDriver](../FileDriver/)
