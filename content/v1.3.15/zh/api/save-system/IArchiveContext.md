---
title: "IArchiveContext"
description: "internal 接口：归档序列化阶段的“建文件夹”契约，唯一方法 CreateFolder 让序列化器在保存对象图时，按 FolderId 在父 SaveEntryFolder 下新建一个容纳若干条目的子文件夹。"
---

# IArchiveContext

**命名空间：** `TaleWorlds.SaveSystem`  
**模块：** `TaleWorlds.SaveSystem`  
**类型：** `internal interface IArchiveContext`  
**基类：** —  
**源文件：** `TaleWorlds.SaveSystem/IArchiveContext.cs`

## 概述

`IArchiveContext` 是一个 `internal` 接口（模组不可直接实现），定义在**保存（归档）阶段**用于构建存档 entry/folder 树的最小契约。它只有一个方法：`SaveEntryFolder CreateFolder(SaveEntryFolder parentFolder, FolderId folderId, int entryCount)`。当序列化器把对象图切成树状结构时，每遇到一个需要独立子文件夹的节点（对象、结构体、容器、字符串池等），就通过 `IArchiveContext.CreateFolder` 在指定父文件夹下新建一个带 `FolderId`、并预分配条目容量的 [SaveEntryFolder](../SaveEntryFolder)。它是保存系统把“运行时对象图”落成“.sav 内部文件夹树”的建树入口。

## 心智模型

- **是什么：** 归档建树的最小钩子——只负责“在父文件夹下开一个指定编号的子文件夹”。
- **何时用：** 阅读底层、或研究 [ArchiveSerializer](../ArchiveSerializer) 如何把对象图组织成 [SaveEntryFolder](../SaveEntryFolder) 树时，`IArchiveContext` 就是你看到的那一层抽象；它也解释了 [FolderId](../FolderId) 与 [SaveEntryFolder](../SaveEntryFolder) 是在哪里被创建的。
- **何时不要用：** 不要在 mod 里实现或替换 `IArchiveContext`——它是 `internal`，由引擎的归档实现提供。要控制存档结构，应走 `[SaveableRootClass]` / `[SaveableField]` / [SaveableTypeDefiner](../SaveableTypeDefiner) 这一套公开契约，而不是侵入归档建树。
- **谁创建/持有：** 由保存系统的归档层在 `SaveManager.Save` 期间构造并传给序列化器，仅在“一次保存”内有效；加载阶段不出现（加载由 [LoadContext](../LoadContext) / [ArchiveDeserializer](../ArchiveDeserializer) 走另一条路径）。
- **处在哪一层：** 处于“归档存储层”的建树入口——在对象图遍历（[SaveContext](../SaveContext)）与字节写出（[ArchiveSerializer](../ArchiveSerializer)）之间。

## 何时使用 / 何时不要使用

**使用（理解层面）：** 调试“为什么某对象/容器在存档里没有对应文件夹”时，可确认是不是 `CreateFolder` 的 `FolderId` / `entryCount` 与实际数据不匹配。

**不要使用：**

- 不要在加载阶段期待 `IArchiveContext` 存在：它是保存专属，加载走 `LoadContext` / `ArchiveDeserializer`。
- 不要以为 `entryCount` 是硬性容量上限：它是预分配提示，错误估计只影响性能，不保证数量上限。

## 依赖图

- 节点类型：[SaveEntryFolder](../SaveEntryFolder) 是 `CreateFolder` 的返回与 parent 参数类型，构成文件夹树。
- 节点地址：[FolderId](../FolderId) 标识新建子文件夹的类别与序号；[EntryId](../EntryId) 标识其下的条目。
- 调用方：[ArchiveSerializer](../ArchiveSerializer)（或归档实现）在 `SaveManager.Save` 流程中调用 `CreateFolder` 建树。
- 执行入口：[SaveManager](../SaveManager) 驱动整次保存；[ISaveDriver](../ISaveDriver) 最终把建好的树落盘。

## 风险

- **父文件夹不存在或 `FolderId` 冲突** → 同一父下两个子文件夹共用 `FolderId`，后建覆盖先建，子树数据错乱/丢失。
- **跨阶段误用** → 在加载回调或构造函数里调用 `CreateFolder` 会拿到不存在的上下文，空引用。
- **`entryCount` 严重估错** → 仅影响字典预分配与性能，不直接坏档，但极端情况下与运行期扩容行为相关。

## 成员说明

### `SaveEntryFolder CreateFolder(SaveEntryFolder parentFolder, FolderId folderId, int entryCount)`

在 `parentFolder` 下新建一个子文件夹：地址由 `folderId` 决定，内部按 `entryCount` 预分配 `Dictionary<EntryId, SaveEntry>` 容量。返回新建的 [SaveEntryFolder](../SaveEntryFolder)，供后续往里添加条目或继续嵌套子文件夹。

## 示例

模组侧不直接调用 `IArchiveContext`；当你调用 [SaveManager](../SaveManager) 保存 `Game` 时，引擎在内部遍历对象图，对每个需要独立节点的对象/容器通过 `CreateFolder` 建出 [SaveEntryFolder](../SaveEntryFolder) 树：

```csharp
MetaData metaData = MetaData.CreateNew("MyMod", ApplicationVersion.FromString("e1.0.0"));
SaveOutput output = SaveManager.Save(Game.Current, metaData, saveName, driver);
```

在归档实现内部，序列化器正是借 `IArchiveContext` 把节点挂到父文件夹之下——这也是 [FolderId](../FolderId) 在保存时被创建的地方：

```csharp
// 引擎在 ArchiveSerializer 内部（示意）：按 FolderId 新建对象子文件夹
SaveEntryFolder objFolder = archiveContext.CreateFolder(parentFolder, new FolderId(3, SaveFolderExtension.Object), 16);
SaveEntry entry = objFolder.CreateEntry(new EntryId(1, SaveEntryExtension.Class));
```

> 注意：`IArchiveContext` 为 `internal` 且仅在保存阶段存活；模组不应持有或调用它。

## 参见

- ↑ 父级：[存档系统 API 索引](../)
- ↔ 相关：[SaveEntryFolder](../SaveEntryFolder) · [FolderId](../FolderId) · [EntryId](../EntryId) · [SaveEntry](../SaveEntry) · [ArchiveSerializer](../ArchiveSerializer) · [SaveManager](../SaveManager) · [ISaveDriver](../ISaveDriver)
