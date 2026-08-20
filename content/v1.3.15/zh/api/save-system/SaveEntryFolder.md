---
title: "SaveEntryFolder"
description: "存档归档中的文件夹节点：用 GlobalId 串联父子关系，集中容纳一组 SaveEntry 与子文件夹。"
---

# SaveEntryFolder

> **一句话职责：** SaveEntryFolder 是存档归档里的“目录”，它把属于同一对象/容器/字符串表的若干 `SaveEntry` 以及下层子文件夹组织在一起。

**命名空间：** `TaleWorlds.SaveSystem`
**模块：** SaveSystem
**类型：** `public class SaveEntryFolder`
**源文件路径：** `bannerlord-1.3.15/TaleWorlds.SaveSystem/SaveEntryFolder.cs`

## 概述
一条 `SaveEntry` 必须知道“自己属于谁”，`SaveEntryFolder` 就是那个“谁”。每个文件夹有全局唯一的 `GlobalId`、指向父文件夹的 `ParentGlobalId`，以及一个 `FolderId`（`LocalId` + `SaveFolderExtension` 判别符，标明这是对象文件夹、结构体文件夹、容器文件夹还是字符串文件夹）。`ChildEntries` 收集该文件夹下所有 `SaveEntry`，`ChildFolders` 收集所有子文件夹，于是整个归档在内存里就是一棵以 `RootFolder` 为根的树。`ArchiveDeserializer.LoadFrom` 读盘时正是先重建所有文件夹、再用 `ParentGlobalId` 把它们挂成树，最后把每条 entry 放进对应文件夹。

## 心智模型
把它想成“存档文件里的一个文件夹图标”。保存阶段，`ObjectSaveData` / `ContainerSaveData` 会为每个对象或容器新建一个 `SaveEntryFolder`，把该对象自己的字段、属性写成 `SaveEntry` 丢进 `ChildEntries`，把它的子对象写成 `ChildFolders`。这些文件夹通过 `GlobalId` / `ParentGlobalId` 串成树，`RootFolder`（`CreateRootFolder()` 创建的、id 为 -1 的隐形根）兜底那些没有父节点的顶级记录。序列化时 `ArchiveConcurrentSerializer` 遍历这棵树把每个文件夹写成归档头里的一项；`GetAllEntries()` 则是个深度优先的便捷方法，能一次性拿到整棵子树下的全部 entry。它是一个纯内存组织结构与磁盘格式之间的桥梁，本身不持有字节，只持有引用。

## 何时用 / 何时不要用
- **不要用：** 正常存档请用 `SaveManager.Save` / `SaveManager.Load`，框架会自动构建这棵树。
- **偶尔用：** 在编写自定义 `ISaveDriver`、或排查“某对象的数据写到了哪里”时，才需要遍历 `SaveEntryFolder` 的 `ChildEntries` / `ChildFolders` 来定位记录。

## 依赖图
- 上游：[SaveEntry](../SaveEntry)、[FolderId](../FolderId)、[SaveFolderExtension](../SaveFolderExtension)、[ArchiveSerializer](../ArchiveSerializer)
- 下游：[ArchiveDeserializer](../ArchiveDeserializer)、[ArchiveConcurrentSerializer](../ArchiveConcurrentSerializer)
- 相关类型/阶段：[SaveManager](../SaveManager)、[ObjectSaveData](../ObjectSaveData)

## 风险段
- **GlobalId 必须唯一且连续可解析：** `LoadFrom` 用 `dictionary[saveEntryFolder2.ParentGlobalId]` 挂父子关系；若某个 `ParentGlobalId` 在字典里不存在且又不是 -1，会抛 KeyNotFoundException。
- **CreateRootFolder 的特殊性：** 根文件夹 `GlobalId = ParentGlobalId = -1`，它是隐形的“挂载点”，不要把它当成一条普通数据。
- **AddEntry 键冲突：** `_entries` 以 `EntryId` 为键，`AddEntry` 重复添加同一 `EntryId` 会抛 `ArgumentException`。

## 成员说明
- `int GlobalId` / `int ParentGlobalId`：本文件夹全局编号与父文件夹编号（根文件夹为 -1）。
- `FolderId FolderId`：本文件夹的局部编号 + `SaveFolderExtension` 判别符。
- `Dictionary<EntryId, SaveEntry>.ValueCollection ChildEntries`：本文件夹下所有 entry 的只读集合。
- `Dictionary<FolderId, SaveEntryFolder>.ValueCollection ChildFolders`：本文件夹下所有子文件夹的只读集合。
- `List<SaveEntry> GetAllEntries()`：深度优先返回本文件夹及其所有后代文件夹里的全部 entry。
- `static SaveEntryFolder CreateRootFolder()`：创建隐形根文件夹（`GlobalId = ParentGlobalId = -1`，`FolderId = (-1, Root)`）。
- `SaveEntryFolder(SaveEntryFolder parent, int globalId, FolderId folderId, int entryCount)` / `(int parentGlobalId, int globalId, FolderId folderId, int entryCount)`：构造函数，后者显式指定父编号。
- `void AddEntry(SaveEntry)`：以 `saveEntry.Id` 为键登记一条 entry。
- `SaveEntry GetEntry(EntryId)`：按 `EntryId` 取出已登记的 entry（不存在会抛 KeyNotFoundException）。
- `void AddChildFolderEntry(SaveEntryFolder)`：以子文件夹的 `FolderId` 为键挂到 `ChildFolders`。
- `internal SaveEntryFolder GetChildFolder(FolderId)`：按 `FolderId` 取子文件夹。
- `SaveEntry CreateEntry(EntryId)`：调用 `SaveEntry.CreateNew(this, entryId)` 在本文件夹下新建并登记一条空 entry。

## 示例
```csharp
SaveEntryFolder root = SaveEntryFolder.CreateRootFolder();
SaveEntry entry = root.CreateEntry(new EntryId(0, SaveEntryExtension.Class));
foreach (SaveEntry child in root.GetAllEntries())
    Debug.Print(child.Id.Extension.ToString());
SaveManager.Save(Game.Current, new MetaData(), "mySlot", new AsyncFileSaveDriver());
```

## 导航
- ↑ 父级：[save-system 索引](../)
- ↔ 兄弟：[SaveEntry](../SaveEntry)、[FolderId](../FolderId)、[SaveFolderExtension](../SaveFolderExtension)
- 架构：[存档系统架构](../../../architecture/save-system)
