---
title: "ArchiveDeserializer"
description: "存档二进制读取器：把 ArchiveSerializer 写出的自描述 blob（folder 表 + entry 表）重新解析成 SaveEntryFolder 树，供 LoadContext 按编号重建对象、容器与字符串。它是 SaveManager 加载路径上离“.sav 字节”最近的一层。"
---
# ArchiveDeserializer

**命名空间：** `TaleWorlds.SaveSystem`
**模块：** `TaleWorlds.SaveSystem`
**类型：** `internal class ArchiveDeserializer`
**源文件：** `bin/TaleWorlds.SaveSystem/TaleWorlds.SaveSystem/ArchiveDeserializer.cs`

## 概述

`ArchiveDeserializer` 是加载流水线的「二进制拆盘器」：它是 `ArchiveSerializer` 的精确逆操作。给定一个 `byte[]` blob，它先读出 folder 表（每个 folder 的 parentGlobalId / globalId / localId / extension）重建文件夹编号树，再读出 entry 表（每条 `[3字节 folderId][3字节 entryId][1字节 extension][2字节 长度][N字节 数据]`），把每条 `SaveEntry` 挂回对应 folder，最终暴露一个合成根 `RootFolder`。它不理解字段语义，只负责把字节还原成可寻址的文件夹 / 条目树；真正按 `MemberTypeId` 把 entry 映射回对象成员的是上游的 [ObjectLoadData](../ObjectLoadData) / [ContainerLoadData](../ContainerLoadData) / [ObjectHeaderLoadData](../ObjectHeaderLoadData)。

## 心智模型

把 `ArchiveDeserializer` 想成「扁平字节流 → 文件夹树」的解码器，与 `ArchiveSerializer` 逐字节对称。它的入口 `LoadFrom(byte[])` 严格按写侧顺序读取：先 `ReadInt` 拿 folder 计数，循环 `Read3ByteInt`×3 + `ReadByte` 重建每个 folder 并暂存到 `Dictionary<globalId, SaveEntryFolder>`；再 `ReadInt` 拿 entry 计数，循环读 folderId / id / extension / 长度 / 数据，用 `SaveEntry.CreateFrom(folderId, new EntryId(id, extension), data)` 造出每条 entry。随后两轮挂接：folder 表按 `ParentGlobalId == -1` 与否挂到 `RootFolder` 或父 folder；entry 表按 `FolderId == -1` 与否挂到 `RootFolder` 或对应 folder。于是 [LoadContext](../LoadContext) 拿到 `RootFolder` 后，只要用目标编号（如 `new FolderId(i, SaveFolderExtension.Object)`）调 `GetChildFolder` / `GetEntry(new EntryId(...))` 就能精确定位某对象 / 容器 / 字符串的成员字节——这正是 round-trip 的对称性：写侧怎么编号、怎么挂树，读侧就怎么解树、怎么取字节。风险在于：blob 一旦被截断、长度错或 folder 表顺序漂移，重建出来的树会在某个 `GetChildFolder` 处返回 `null`，进而 `GetBinaryReader()` 在 [ObjectLoadData](../ObjectLoadData) 里空引用。

## 何时使用 / 何时不要使用

**使用（理解层面）：** 当你在排查「为什么读档时某对象字段为空 / 报 null」「为什么旧档长度不符」时，需要理解字节是如何被还原成树、以及 `GetChildFolder` 为何可能返回 null；或编写存档校验 / 迁移工具时。

**不要使用：**

- 不要 `new ArchiveDeserializer()`——它是 `internal`，仅由 [LoadContext](../LoadContext) 在 [SaveManager.Load](../SaveManager) 内部为每个 `GameData` 段构造，模组不可达。
- 不要把它当成「按类型反序列化对象」的 API——它只产出 `SaveEntryFolder` 树，[ObjectLoadData](../ObjectLoadData) / [ContainerLoadData](../ContainerLoadData) 才按 [TypeDefinition](../TypeDefinition) 与 `MemberTypeId` 把 entry 还原成成员。
- 不要在保存阶段使用——写入走 [ArchiveSerializer](../ArchiveSerializer) / [LegacySaveContext](../LegacySaveContext)。

## 依赖图

- 调用者：[LoadContext](../LoadContext) 在 `Load` 与 `CreateLoadData` 中对 `GameData` 的四段（`Header` / `Strings` / `ObjectData[i]` / `ContainerData[i]`）各 `new ArchiveDeserializer()` 并 `LoadFrom(...)`，拿到 `RootFolder` 后交由 [ObjectLoadData](../ObjectLoadData) / [ContainerLoadData](../ContainerLoadData) / [ObjectHeaderLoadData](../ObjectHeaderLoadData) / [ContainerHeaderLoadData](../ContainerHeaderLoadData) 按编号取字节。
- 对称写侧：[ArchiveSerializer](../ArchiveSerializer)（及并行版 [ArchiveConcurrentSerializer](../ArchiveConcurrentSerializer)）写出与之逐字节对应的 blob，二者格式必须保持对称。
- 数据结构：[SaveEntry](../SaveEntry)（经 `SaveEntry.CreateFrom` 重建）、[SaveEntryFolder](../SaveEntryFolder)（树节点，提供 `GetChildFolder` / `GetEntry` / `GetBinaryReader`）、[FolderId](../FolderId) / [SaveFolderExtension](../SaveFolderExtension) / [SaveEntryExtension](../SaveEntryExtension) 决定寻址。
- 下游消费：[ElementLoadData](../ElementLoadData) / [MemberLoadData](../MemberLoadData) 等从 folder 取出 entry 字节并按 `MemberTypeId` 解析成员；[TypeDefinition](../TypeDefinition) 提供成员编号到字段的映射。
- 类型 schema：[SaveableTypeDefiner](../SaveableTypeDefiner) 与 [DefinitionContext](../DefinitionContext) 决定读档时 `EntryId` 如何映射到成员；编号漂移会在此层表现为「找不到成员」。

## 风险

- **blob 截断 / 长度前缀错误 = 雪崩。** `LoadFrom` 用每条 entry 自带的 2 字节长度读取数据；若 blob 被截断或长度写错，`BinaryReader` 会把后续所有 entry 整体偏移，导致整个文件夹树错位、大量 `GetChildFolder` 返回 null。
- **folder 表顺序必须与写侧一致。** folder 全局 id 由写侧 `CreateFolder` 单调分配，读侧按 `globalId` 建字典并按 `ParentGlobalId` 挂树。若写侧漏建 folder 或 globalId 重复，读侧会丢失子树或挂错父子。
- **`ParentGlobalId == -1` 才进根。** entry 同理：只有 `FolderId == -1` 的条目挂到 `RootFolder`，其余挂到对应 folder；编号与写侧不对应时找不到位置。
- **它不抛「类型未定义」错误。** 读侧真正按 `EntryId` / `MemberTypeId` 解析成员发生在 [ObjectLoadData](../ObjectLoadData) / [ContainerLoadData](../ContainerLoadData) 阶段；编号在 [DefinitionContext](../DefinitionContext) 里查不到类型时，错误在那里抛，而不是在 `LoadFrom`。
- **异常被 LoadContext 吞掉。** `LoadContext.Load` 把整个流程包在 `try/catch` 中，任何 `LoadFrom` 之后的解析异常只会 `Debug.Print(ex.Message)` 并返回 `false`——坏档表现为「加载失败」而非具体行号，排查时要结合 [MetaData](../MetaData) 与版本号。
- **同步语义。** 与写侧一样，blob 本身是已编号、无类型信息的字节；类型 / 成员语义完全依赖 [SaveableTypeDefiner](../SaveableTypeDefiner) 的稳定契约，改 `LocalSaveId` / `saveBaseId` 会让旧档 `EntryId` 失配。

## 成员说明

### 构造函数

- `ArchiveDeserializer()`：internal 构造。建立一个合成根 `RootFolder = new SaveEntryFolder(-1, -1, new FolderId(-1, SaveFolderExtension.Root), 3)`，作为所有真实 folder / entry 的挂载点。`RootFolder` 的 `GlobalId = -1`、`ParentGlobalId = -1`，因此在挂接阶段自身不会被当作普通 folder。

### 属性

- `SaveEntryFolder RootFolder { get; private set; }`：解析完成后的根文件夹树。所有真实 folder（`ParentGlobalId != -1`）与无父 entry 都通过它寻址。上游用 `rootFolder.GetChildFolder(new FolderId(i, SaveFolderExtension.Object))` 定位对象 `i` 的成员树，再用 `GetEntry(new EntryId(...)).GetBinaryReader()` 读出某成员字节。`RootFolder` 在 `LoadFrom` 之前为构造时建立的空根。

### 解析入口

- `void LoadFrom(byte[] binaryArchive)`：核心方法，把 blob 还原成 `RootFolder` 树。先 `new BinaryReader(binaryArchive)`，读 folder 计数并循环重建 folder 入 `Dictionary<int, SaveEntryFolder>`；再读 entry 计数并循环用 `SaveEntry.CreateFrom` 造 entry 入列表；最后两轮挂接（folder 表按 `ParentGlobalId`、entry 表按 `FolderId`）把树组装完整。调用方每次只喂一个 `GameData` 段（Header / Strings / 单个对象 / 单个容器），因此一次加载会 `new` 多个 `ArchiveDeserializer` 实例。

## 示例

```csharp
// 模组侧只调用 SaveManager.Load，传入存档名；引擎内部为每个 GameData 段各 new 一个 ArchiveDeserializer
MetaData metaData = MetaData.CreateNew("MyMod", ApplicationVersion.FromString("e1.0.0"));
LoadResult result = SaveManager.Load(saveName, metaData, driver);

// ArchiveDeserializer 还原出的 RootFolder 树被 LoadContext 按编号取字节（示意引擎内部流程）：
GameData data = result.GameData;          // 读出的 Header / Strings / ObjectData / ContainerData
byte[] objectBytes = data.ObjectData[0];  // 这一段交某个 ArchiveDeserializer.LoadFrom 解析
Campaign campaign = Campaign.Current;     // 反序列化完成后通过 Campaign 取回世界
```

真实调用位置（可在 `LoadContext.cs` 中核对）：`LoadContext.Load` 对 `loadData.GameData.Header` 调 `LoadFrom` 提取对象 / 字符串 / 容器计数并建头部加载数据；`LoadString` 对 `loadData.GameData.Strings` 调 `LoadFrom` 还原字符串段；`CreateLoadData` 对每个 `loadData.GameData.ObjectData[i]` 调 `LoadFrom` 产出 `ObjectLoadData`；`Load` 的「Load Container Datas」阶段对每个 `loadData.GameData.ContainerData[k]` 调 `LoadFrom` 产出 `ContainerLoadData`。

## 参见

- ↑ 父级：[存档系统 API 索引](../)
- ↔ 相关：[ArchiveSerializer](../ArchiveSerializer) · [ArchiveConcurrentSerializer](../ArchiveConcurrentSerializer) · [LoadContext](../LoadContext) · [ObjectLoadData](../ObjectLoadData) · [ContainerLoadData](../ContainerLoadData) · [ObjectHeaderLoadData](../ObjectHeaderLoadData) · [ContainerHeaderLoadData](../ContainerHeaderLoadData) · [GameData](../GameData) · [SaveManager](../SaveManager) · [MemberTypeId](../MemberTypeId)
