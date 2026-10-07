---
title: "ArchiveDeserializer"
description: "归档层的读侧：把一段 byte[] 还原成 folder/entry 两张表再拼成树，每条 entry 靠 FolderId 找到归属，父 folder 靠 GlobalId 找父亲。"
---

# ArchiveDeserializer

**Namespace:** `TaleWorlds.SaveSystem`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `internal class ArchiveDeserializer`
**Base:** 无
**File:** `TaleWorlds.SaveSystem/ArchiveDeserializer.cs`

## 概述

存档的每个对象、每个容器各自占一段独立 `byte[]`，要读它就得先把这段字节还原成一棵「folder 套 entry」的树——这正是 `ArchiveDeserializer.LoadFrom(byte[] binaryArchive)` 做的事（`ArchiveDeserializer.cs:15`）。它分两趟：第一趟读出 **folder 表**（`:20-30`）和 **entry 表**（`:31-41`）两张平表；第二趟才把平表拼成树——folder 按 `ParentGlobalId` 找父亲（`:42-52`），entry 按 `FolderId` 找归属（`:53-63`）。产物是构造器里就建好的 `RootFolder`（`:12`）。它与写侧 [ArchiveSerializer](../ArchiveSerializer) 是严格对称的一对，两边的字段顺序逐字节对应。

## 心智模型

把它想成**仓库的入库单**：第一趟先把所有箱子的清单抄下来（每个箱子写「我的编号、我的父亲编号、我的局部编号、我的类型」），再把所有货品抄下来（每件写「我属于哪个箱子、我的编号、我的类型、多长、是什么」）；第二趟拿着「父亲编号」把箱子归位、拿着「属于哪个箱子」把货品上架。推论有四条：

1. **编号是 3 字节的。** `Read3ByteInt()` 连读三个字节（`:23-25`、`:34-35`），也就是 folder 与 entry 的编号都被限在 24 位以内。`Write3ByteInt` 在写侧是同一个约定。**编号空间不是无限增长的。**
2. **entry 的长度被写成 short。** 读侧 `short length = binaryReader.ReadShort(); byte[] data = binaryReader.ReadBytes(length);`（`:37-38`），写侧对应 `writer.WriteShort((short)entry.Data.Length)`（`ArchiveSerializer.cs:27`）——**两边都是 `(short)` 窄化转换**。也就是说单个 entry 的数据长度上限就是 `short` 的范围；超出会在写侧变成负数、在读侧读成 `ReadBytes` 的非法长度。存档里单条 entry 通常只是某个成员槽位，所以正常碰不到，但**这条边界是硬的**。
3. **RootFolder 是构造器建的，不随 `LoadFrom` 重置。** `RootFolder = new SaveEntryFolder(-1, -1, new FolderId(-1, SaveFolderExtension.Root), 3)`（`:12`）。`LoadFrom` 内部的两张表是局部变量（`:17-18`），所以**同一个实例连调两次 `LoadFrom` 会往同一个 RootFolder 里塞两遍子树**。官方用法是一个对象一个实例。
4. **它不实现 `IArchiveContext`。** 写侧 `ArchiveSerializer : IArchiveContext`，读侧这个类没有实现任何接口——**两边不是对称的**，`IArchiveContext` 是写侧的契约。读侧的对应物是 `BinaryReader` 与 [SaveEntryFolder](../SaveEntryFolder) 的查询方法。

## 如何使用

### 怎么拿到它

**mod 拿不到。** `internal`，无参构造器（`:10`）建好根 folder，唯一调用者是 [LoadContext](../LoadContext)——`CreateLoadData` 为**每一个**对象都 `new ArchiveDeserializer()`（`LoadContext.cs:42`），容器侧同理（`LoadContext.cs` 的 `Load Container Datas` 阶段）。所以它是一个**极高频的短命对象**：读一万个对象就建一万次。拿到产物后通常立刻走 `RootFolder.GetChildFolder(new FolderId(i, SaveEntryExtension.Object))` 去定位子 folder。

### 最小可运行片段

```csharp
// ArchiveDeserializer 是 internal；这里演示它的两步布局与 3 字节编号约定
// 第一趟读出的 folder 记录，每个 3+3+3+1 = 10 字节：父编号 / 全局编号 / 局部编号 / 类型
// 第二趟读出的 entry 记录：3 字节归属 folder + 3 字节 id + 1 字节类型 + 2 字节长度 + 数据

// 编号是 24 位：folder 与 entry 的 id 都受此限制
Debug.Print("folder/entry id 上限 = 2^24 - 1 = " + (int)Math.Pow(2, 24) + " 量级（3 字节）", 0);
// 单条 entry 的数据长度上限是 short（写侧 (short) 强转）
Debug.Print("单条 entry 长度上限 = short 范围 = " + short.MaxValue + " 字节", 0);
```

### 用它最容易踩的一条

**entry 的长度是 `(short)`，所以「一条 entry 的数据超过 32KB」在写侧就会变成负长度。** 写侧 `ArchiveSerializer.SerializeEntry` 直接 `writer.WriteShort((short)entry.Data.Length)`（`ArchiveSerializer.cs:27`），读侧 `ReadShort` 后交给 `ReadBytes(length)`（`:37-38`）。负长度会让 `ReadBytes` 抛 `ArgumentOutOfRangeException`，而这个异常发生在读档深处，栈里只会看到 `LoadContext::Load Object Datas`。**根因在写侧，症状在读侧**——排查这种「读档在某个对象上炸」的问题时，先去看那个对象的 entry 有多大。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `RootFolder` | `public SaveEntryFolder RootFolder { get; private set; }` | 构造器里造的根 folder（`:12`），`GlobalId` 与 `ParentGlobalId` 都是 -1，`FolderId` 是 `FolderId(-1, SaveFolderExtension.Root)`，容量 3。**`LoadFrom` 的第二趟就是往它上面挂子节点**（`:50`、`:61`）。一个实例只能承载一次 `LoadFrom` 的结果。 |
| 构造器 | `public ArchiveDeserializer()` | 只做一件事——建 `RootFolder`（`:12`）。**不分配任何缓冲，也不碰字节流**，所以构造本身很便宜；成本全在 `LoadFrom`。 |
| `LoadFrom` | `public void LoadFrom(byte[] binaryArchive)` | `:15-64`。第一趟：读 folder 数（`:20`），逐个读 3 字节父编号、3 字节全局编号、3 字节局部编号、1 字节类型（`:23-26`），建 folder 并以 `GlobalId` 为键入字典（`:28-29`）；再读 entry 数（`:31`），逐个读 3 字节归属、3 字节 id、1 字节类型、2 字节长度与数据（`:34-38`），造 `SaveEntry.CreateFrom`（`:39`）。第二趟：folder 按 `ParentGlobalId` 挂父亲，为 -1 则挂根（`:42-52`）；entry 按 `FolderId` 挂对应 folder，为 -1 则挂根（`:53-63`）。 |

## 真实示例

folder 表的记录布局（`TaleWorlds.SaveSystem.Save/../ArchiveDeserializer.cs:20-30`）：

```csharp
int num = binaryReader.ReadInt();                      // folder 数量
for (int i = 0; i < num; i++)
{
    int parentGlobalId = binaryReader.Read3ByteInt();   // 父亲编号，3 字节
    int globalId       = binaryReader.Read3ByteInt();   // 自己的全局编号，3 字节
    int localId        = binaryReader.Read3ByteInt();   // 局部编号（对象 id / 容器 id），3 字节
    SaveFolderExtension extension = (SaveFolderExtension)binaryReader.ReadByte();
    FolderId folderId = new FolderId(localId, extension);
    SaveEntryFolder saveEntryFolder = new SaveEntryFolder(parentGlobalId, globalId, folderId, 3);
    dictionary.Add(saveEntryFolder.GlobalId, saveEntryFolder);   // 以全局编号为键，供第二趟找父亲
}
```

entry 表与两趟挂接（`:31-63`）：

```csharp
int num2 = binaryReader.ReadInt();                     // entry 数量
for (int j = 0; j < num2; j++)
{
    int entryFolderId = binaryReader.Read3ByteInt();
    int id            = binaryReader.Read3ByteInt();
    SaveEntryExtension extension2 = (SaveEntryExtension)binaryReader.ReadByte();
    short length      = binaryReader.ReadShort();      // ← short，见「最容易踩的一条」
    byte[] data       = binaryReader.ReadBytes(length);
    SaveEntry item = SaveEntry.CreateFrom(entryFolderId, new EntryId(id, extension2), data);
    list.Add(item);
}
// 第二趟：先按父编号把 folder 归位
foreach (SaveEntryFolder value in dictionary.Values)
{
    if (value.ParentGlobalId != -1) { dictionary[value.ParentGlobalId].AddChildFolderEntry(value); }
    else                            { RootFolder.AddChildFolderEntry(value); }
}
// 再按归属把 entry 上架
foreach (SaveEntry item2 in list)
{
    if (item2.FolderId != -1) { dictionary[item2.FolderId].AddEntry(item2); }
    else                      { RootFolder.AddEntry(item2); }
}
```

mod 视角的对照实验——两张平表是分开的：

```csharp
Debug.Print("folder 表在字节流前段、entry 表在后段，中间只隔一个 int 的 entry 数", 0);
Debug.Print("所以 folder 的父子关系不可能靠读取顺序推断，必须第二趟按 ParentGlobalId 重排", 0);
Debug.Print("entry 归属靠 FolderId，与 folder 表的 GlobalId 是两套编号，不要混", 0);
```

## 依赖关系

- 写侧对称物：[ArchiveSerializer](../ArchiveSerializer)（字段顺序逐字节对应）、`IArchiveContext`（见 [IArchiveContext](../IArchiveContext)，写侧契约）
- 唯一调用者：[LoadContext](../LoadContext) 的 `CreateLoadData`（`LoadContext.cs:42`）与容器数据阶段
- 数据结构：[SaveEntryFolder](../SaveEntryFolder)（树节点）、[SaveEntry](../SaveEntry)、[EntryId](../EntryId)、[FolderId](../FolderId)
- 枚举：[SaveFolderExtension](../SaveFolderExtension)（folder 的类型字节）、[SaveEntryExtension](../SaveEntryExtension)（entry 的类型字节）
- 字节原语：`TaleWorlds.Library` 的 `BinaryReader`（`Read3ByteInt` / `ReadShort`），写侧工厂见 [BinaryWriterFactory](../BinaryWriterFactory)
- 上层消费者：[ObjectLoadData](../ObjectLoadData)、[ObjectHeaderLoadData](../ObjectHeaderLoadData)、[ContainerLoadData](../ContainerLoadData)
- 体系全貌：../../../architecture/save-system