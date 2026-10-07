---
title: "ArchiveSerializer"
description: "归档层的写侧：实现 IArchiveContext，先攒 entry、再攒 folder 表，收尾时才拼成 byte[]；两个几乎相同的收尾方法有一个会泄漏写入器。"
---

# ArchiveSerializer

**Namespace:** `TaleWorlds.SaveSystem`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `internal class ArchiveSerializer : IArchiveContext`
**Base:** 无（实现 `IArchiveContext`）
**File:** `TaleWorlds.SaveSystem/ArchiveSerializer.cs`

## 概述

把一个对象的成员槽位写成一棵树形的 folder/entry 结构，由本类负责落地为字节。[ObjectSaveData](../ObjectSaveData) 与 [ContainerSaveData](../ContainerSaveData) 都有 `SaveTo(SaveEntryFolder parentFolder, IArchiveContext archiveContext)` 重载，走的就是 `IArchiveContext` 这条路，而实现者是 `ArchiveSerializer`（`ArchiveSerializer.cs:6`）。它的写入顺序和 [ArchiveDeserializer](../ArchiveDeserializer) 的读取顺序严格对称：entry 的字节流先进 `_writer`，folder 表留到 `FinalizeAndGetBinaryData()` 才写到前面去（`:53-64`）。**注意还有另一条更早、更常用的直接路径**——[SaveContext](../SaveContext) 的 `SaveSingleObject` 直接用 `BinaryWriter` 写，不经过本类。

## 心智模型

把它想成**先攒货单、最后才封箱**：调用方一边写 entry（`:22-30`），一边登记建了哪些 folder（`:40-48`）；真正的字节直到 `FinalizeAndGetBinaryData()` 才组装——**folder 表写在最前面，接着是 entry 计数，再把攒下来的 entry 字节整段接上**（`:53-67`）。推论有四条：

1. **folder 必须先于其内容被登记。** `CreateFolder` 在构造子 folder 的同时立刻 `parentFolder.AddChildFolderEntry(...)` 并 `_folders.Add(...)`（`:45-46`）。因为 `FinalizeAndGetBinaryData` 用 `_folders[i]` 的下标当隐式顺序（`:54-56`），**folder 的全局编号就是它在 `_folders` 里的下标**（`:42-43`：先取后加，所以第一个是 0）。父子顺序不由调用顺序保证，只由登记顺序决定。
2. **`SerializeFolder` 只处理 entry，不处理子 folder。** `:34` 遍历 `folder.GetAllEntries()` 并逐个 `SerializeEntry`。**子 folder 必须由调用方自己通过 `CreateFolder` 单独登记**——这意味着「序列化一个 folder」并不会自动把它的子树带出去。
3. **两个收尾方法只差一行。** `FinalizeAndGetBinaryData`（`:50-73`）与 `GetBinaryDataDebug`（`:75-96`）的主体**逐字相同**，实测 diff 只差一条：`ReleaseBinaryWriter(_writer);`。正式方法归还**两个**写入器（临时那个 `:69` 与 `_writer` 那个 `:70`）；调试方法**只归还临时那个**（`:94`），`_writer` 被置 null 但**从不归还给 `BinaryWriterFactory`**。
4. **收尾后实例即废。** 两个方法最后都 `_writer = null`（`:71`、`:95`），所以**同一个 `ArchiveSerializer` 不能收尾两次**，第二次会空引用。这是「一次性写入器」的设计，靠 [BinaryWriterFactory](../BinaryWriterFactory) 池化分配。

## 如何使用

### 怎么拿到它

**mod 拿不到。** `internal`，无参构造器（`:16`）从 `BinaryWriterFactory.GetBinaryWriter()` 取一个池化写入器（`:18`）并初始化 `_folders`（`:19`）。正规调用点是 [ObjectSaveData](../ObjectSaveData) / [ContainerSaveData](../ContainerSaveData) 的 `SaveTo(SaveEntryFolder, IArchiveContext)` 重载——它们接收 `IArchiveContext` 形参而不是具体类型，所以从调用方看**只认接口、不认实现**。收尾由上层调 `FinalizeAndGetBinaryData()` 拿到 `byte[]`。

### 最小可运行片段

```csharp
// ArchiveSerializer 是 internal；这里演示它的写入布局与编号约定
// 一个 folder 记录 = 3 字节父编号 + 3 字节全局编号 + 3 字节局部编号 + 1 字节类型 = 10 字节
// 一个 entry 记录 = 3 字节归属 + 3 字节 id + 1 字节类型 + 2 字节长度(short!) + 数据

Debug.Print("folder 记录固定 10 字节", 0);
Debug.Print("entry 的长度字段是 WriteShort((short)Data.Length)，上限 " + short.MaxValue + " 字节", 0);
Debug.Print("folder 全局编号 = 它在 _folders 里的下标，第一个是 0", 0);
```

### 用它最容易踩的一条

**不要在调试路径上用 `GetBinaryDataDebug()` 之后还指望继续用同一个实例写。** 它和 `FinalizeAndGetBinaryData()` 都会把 `_writer` 置 null（`:95`、`:71`），所以第二次 `SerializeEntry` 会在 `_writer.Write3ByteInt(...)` 上空引用。而且它比正式方法多一处资源问题：它**只归还了临时写入器，`_writer` 那个没还给 `BinaryWriterFactory`**（`:94` 对比 `:69-70`），池里少一个可复用对象。**这两个方法只差这一行，行为却不一致——要取正式产物就用 `FinalizeAndGetBinaryData`。**

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `_writer` | `private BinaryWriter _writer` | 攒 entry 字节的写入器，构造器从 `BinaryWriterFactory` 池里取（`:18`）。**`AppendData` 之后会被拼进最终结果**，两个收尾方法都把它置 null。 |
| `_entryCount` | `private int _entryCount` | 已写 entry 条数，每写一条加一（`:29`）。收尾时写成 folder 表之后的那个 int（`:66`）。**它只数条目，不管字节。** |
| `_folderCount` | `private int _folderCount` | 已登记 folder 数，`CreateFolder` 里先取后加（`:42-43`）。**它同时是下一个 folder 的全局编号来源**（`:44`），所以编号与下标恒等。 |
| `_folders` | `private List<SaveEntryFolder> _folders` | 按登记顺序保存 folder（`:46`）。收尾时用 `for i in 0.._folderCount` 按下标索引（`:56`），**依赖 `_folders.Count == _folderCount` 这个不变量**。 |
| `SerializeEntry` | `public void SerializeEntry(SaveEntry entry)` | `:22-30`。写 3 字节归属 folder、3 字节 entry id、1 字节类型、**2 字节 `(short)` 长度**（`:27`）、数据字节，最后计数加一。这是 `IArchiveContext` 的写入入口。 |
| `SerializeFolder` | `public void SerializeFolder(SaveEntryFolder folder)` | `:32-38`。**只遍历 `folder.GetAllEntries()`**，把里面的 entry 全部写出去。**不递归子 folder**——子树必须由调用方单独 `CreateFolder` 登记。 |
| `CreateFolder` | `public SaveEntryFolder CreateFolder(SaveEntryFolder parentFolder, FolderId folderId, int entryCount)` | `:40-48`。先取当前 `_folderCount` 当全局编号再自增（`:42-43`），构造子 folder（`:44`），**同时**挂到父 folder（`:45`）并登记进 `_folders`（`:46`）。返回新 folder 供调用方继续写。 |
| `FinalizeAndGetBinaryData` | `public byte[] FinalizeAndGetBinaryData()` | `:50-73`。另取一个临时写入器，写 folder 数（`:53`）、逐个写四字段（`:61-64`）、写 entry 数（`:66`）、`_writer` 整段 `AppendData`（`:67`），取 `GetFinalData()`（`:68`），**归还两个写入器**（`:69-70`），`_writer = null`（`:71`）。正式出口。 |
| `GetBinaryDataDebug` | `public byte[] GetBinaryDataDebug()` | `:75-96`。与上一个方法主体**逐字相同**（实测 diff 只差一行），唯一差别是**不归还 `_writer`**（`:94` 只有临时那个，对比 `:69-70`）。且同样把 `_writer` 置 null（`:95`），所以实例随即失效。 |

## 真实示例

entry 写入布局（`TaleWorlds.SaveSystem/ArchiveSerializer.cs:22-30`）：

```csharp
public void SerializeEntry(SaveEntry entry)
{
    _writer.Write3ByteInt(entry.FolderId);
    _writer.Write3ByteInt(entry.Id.Id);
    _writer.WriteByte((byte)entry.Id.Extension);
    _writer.WriteShort((short)entry.Data.Length);      // ← short 窄化，长 entry 会变负
    _writer.WriteBytes(entry.Data);
    _entryCount++;
}
```

收尾拼装（`:50-72`）：

```csharp
public byte[] FinalizeAndGetBinaryData()
{
    BinaryWriter binaryWriter = BinaryWriterFactory.GetBinaryWriter();
    binaryWriter.WriteInt(_folderCount);
    for (int i = 0; i < _folderCount; i++)
    {
        SaveEntryFolder saveEntryFolder = _folders[i];        // 编号 == 下标
        binaryWriter.Write3ByteInt(saveEntryFolder.ParentGlobalId);
        binaryWriter.Write3ByteInt(saveEntryFolder.GlobalId);
        binaryWriter.Write3ByteInt(saveEntryFolder.FolderId.LocalId);
        binaryWriter.WriteByte((byte)saveEntryFolder.FolderId.Extension);
    }
    binaryWriter.WriteInt(_entryCount);
    binaryWriter.AppendData(_writer);                        // entry 字节整段接在后面
    byte[] finalData = binaryWriter.GetFinalData();
    BinaryWriterFactory.ReleaseBinaryWriter(binaryWriter);
    BinaryWriterFactory.ReleaseBinaryWriter(_writer);        // ← GetBinaryDataDebug 缺这一行
    _writer = null;
    return finalData;
}
```

mod 视角的对照实验——两条写盘路径：

```csharp
// 路径 A（当前主用）：SaveContext.SaveSingleObject 直接用 BinaryWriter 写，不经过本类
// 路径 B（重载 SaveTo(SaveEntryFolder, IArchiveContext)）：经过 ArchiveSerializer
// 两条路径产出的字节布局不同，读侧靠 ArchiveDeserializer 只能还原路径 B
Debug.Print("不是所有对象的字节都经过 ArchiveSerializer —— 只有走 IArchiveContext 重载的那些", 0);
Debug.Print("排查「为什么我的对象读不回来」时，先确认它走的是哪条路径", 0);
```

## 依赖关系

- 读侧对称物：[ArchiveDeserializer](../ArchiveDeserializer)（folder 表与 entry 表的字段顺序逐字节对应）
- 契约接口：`IArchiveContext`（见 [IArchiveContext](../IArchiveContext)）——调用方只认这个接口，不认本类
- 调用者：[ObjectSaveData](../ObjectSaveData)、[ContainerSaveData](../ContainerSaveData) 的 `SaveTo(SaveEntryFolder, IArchiveContext)` 重载
- 写入器池：[BinaryWriterFactory](../BinaryWriterFactory)（`GetBinaryWriter` / `ReleaseBinaryWriter` / `AppendData` / `GetFinalData`）
- 数据结构：[SaveEntry](../SaveEntry)、[SaveEntryFolder](../SaveEntryFolder)、[EntryId](../EntryId)、[FolderId](../FolderId)
- 枚举：[SaveFolderExtension](../SaveFolderExtension)、[SaveEntryExtension](../SaveEntryExtension)（那一个类型字节）
- 另一条不经过本类的写盘路径：[SaveContext](../SaveContext) 的 `SaveSingleObject` / `SaveSingleContainer`
- 体系全貌：../../../architecture/save-system