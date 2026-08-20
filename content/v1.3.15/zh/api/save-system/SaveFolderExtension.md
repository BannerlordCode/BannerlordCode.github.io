---
title: "SaveFolderExtension"
description: "落盘格式里每个 SaveEntryFolder 的判别字节，标明这个文件夹装的是对象、结构体、容器还是字符串表。"
---

# SaveFolderExtension

> **一句话职责：** SaveFolderExtension 是一个写进存档文件的字节标记，告诉反序列化器“这个文件夹里装的是哪一类记录”。

**命名空间：** `TaleWorlds.SaveSystem`
**模块：** SaveSystem
**类型：** `public enum SaveFolderExtension : byte`
**源文件路径：** `bannerlord-1.3.15/TaleWorlds.SaveSystem/SaveFolderExtension.cs`

## 概述
和 `SaveEntryExtension` 在条目级别贴印章一样，`SaveFolderExtension` 在**文件夹级别**贴印章。存档归档的头部会列出每个 `SaveEntryFolder` 的 `FolderId`，其中就包含这个枚举字节：`Root` 是隐形根，`Object` 存放对象头与对象数据，`Struct` 存放结构体，`Container` 存放容器（`List` / `Dictionary` / 数组等），`Strings` 存放全局字符串表。`ArchiveConcurrentSerializer.FinalizeAndGetBinaryDataConcurrent` 写盘时把每个文件夹的 `LocalId` + `Extension` 写进归档头，`ArchiveDeserializer.LoadFrom` 读盘时再据此还原出 `FolderId`。

## 心智模型
把它想成“每个文件夹图标右下角的小标签”。保存时，系统为对象建 `Object` 文件夹、为容器建 `Container` 文件夹、为所有去重后的字符串建一个 `Strings` 文件夹（`SaveFolderExtension.Strings`，见 `LegacySaveContext.Save` 里对字符串表的特殊处理），最外层还有个 `Root`。读取阶段 `ArchiveDeserializer` 先读归档头得到每个文件夹的 `(ParentGlobalId, GlobalId, LocalId, Extension)`，据此 new 出 `SaveEntryFolder`，再用 `Extension` 判断该往哪棵子树挂。和 `SaveEntryExtension` 一样，它是**落盘格式契约**：数值顺序固定，改动会破坏旧存档。

## 何时用 / 何时不要用
- **不要用：** 这是磁盘格式的一部分，modder 不应手动赋值或新增枚举值。
- **正确做法：** 让框架自动决定文件夹类型；只有在做底层 `ISaveDriver` 调试、需要确认某块数据位于哪个文件夹时才去读取 `folder.FolderId.Extension`。

## 依赖图
- 上游：[SaveEntryFolder](../SaveEntryFolder)、[FolderId](../FolderId)、[ArchiveConcurrentSerializer](../ArchiveConcurrentSerializer)
- 下游：[ArchiveDeserializer](../ArchiveDeserializer)、[SaveEntryExtension](../SaveEntryExtension)
- 相关类型/阶段：[SaveManager](../SaveManager)、[LegacySaveContext](../LegacySaveContext)

## 风险段
- **兼容性契约：** 枚举值按字节落盘；新增/重排成员会让旧 `.sav` 的文件夹判别字节指向错误的子树，加载即失败。
- **与 SaveEntryExtension 区分：** 这是**文件夹级**判别符，条目级的是 `SaveEntryExtension`，两者层级不同，不要混淆。
- **Strings 文件夹的特殊性：** 所有字符串被集中去重到 `Strings` 文件夹，字符串记录本身再用 `SaveEntryExtension.String` / `Txt` 标记，理解这一点对排查字符串相关损坏很关键。

## 成员说明
枚举成员（按落盘字节值从小到大）：
- `Root`：隐形根文件夹（`GlobalId = ParentGlobalId = -1`）。
- `Object`：存放对象头与对象数据的文件夹。
- `Struct`：存放结构体的文件夹。
- `Container`：存放容器（`List` / `Dictionary` / 数组 / `Queue`）的文件夹。
- `Strings`：全局字符串表文件夹，所有去重后的字符串集中于此。

读取方式：`saveEntryFolder.FolderId.Extension` 返回这个枚举值，反序列化器据此决定文件夹的归属类别。

## 示例
```csharp
SaveEntryFolder stringsFolder = SaveEntryFolder.CreateRootFolder();
SaveManager.Save(Game.Current, new MetaData(), "mySlot", new AsyncFileSaveDriver());
// 字符串表统一收容在 SaveFolderExtension.Strings 文件夹下，对象头在 Object 文件夹下。
LoadResult result = SaveManager.Load("mySlot", new AsyncFileSaveDriver());
```

## 导航
- ↑ 父级：[save-system 索引](../)
- ↔ 兄弟：[SaveEntryFolder](../SaveEntryFolder)、[FolderId](../FolderId)、[SaveEntryExtension](../SaveEntryExtension)
- 架构：[存档系统架构](../../../architecture/save-system)
