---
title: "FolderId"
description: "存档归档里“文件夹节点”的不可变身份：由局部编号与类别扩展（SaveFolderExtension，如 Root/Object/Struct/Container/Strings）组合而成，用于在存档 entry 树中定位某个子文件夹。"
---

# FolderId

**命名空间：** `TaleWorlds.SaveSystem`  
**模块：** `TaleWorlds.SaveSystem`  
**类型：** `public struct FolderId : IEquatable<FolderId>`  
**基类：** `System.ValueType`  
**源文件：** `TaleWorlds.SaveSystem/FolderId.cs`

## 概述

`FolderId` 是存档归档（`.sav` 内部的 entry/folder 树）中用于标识**一个文件夹节点**的不可变值结构。它与 [EntryId](../EntryId) 是同一棵寻址树上的两个层级：`FolderId` 定位“文件夹”，`EntryId` 定位“文件夹里的某条数据”。它由 `LocalId`（文件夹内整数序号）与 `Extension`（[SaveFolderExtension](../SaveFolderExtension) 枚举：Root / Object / Struct / Container / Strings）组成。[SaveEntryFolder](../SaveEntryFolder) 正是以 `FolderId` 为字典键，把子文件夹登记到自己名下，并由 [IArchiveContext](../IArchiveContext) 在序列化时通过 `CreateFolder(... FolderId ...)` 创建。根文件夹使用 `FolderId(-1, SaveFolderExtension.Root)`。

## 心智模型

- **是什么：** 存档 entry 树里“文件夹”的地址标签；同一父文件夹下靠 `LocalId` + `Extension` 区分不同子文件夹。
- **何时用：** 阅读底层、编写/调试自定义 [ISaveDriver](../ISaveDriver) 或自定义归档逻辑、需要理解“对象图如何被组织成树状文件夹（对象文件夹、结构体文件夹、容器文件夹、字符串池）”时，`FolderId` 就是文件夹级寻址单位。
- **何时不要用：** 不要用 `FolderId` 给业务数据分组或编号——它是引擎在保存时按对象图结构自动生成的；要持久化 mod 数据，请走 `[SaveableRootClass]` + `[SaveableField]` + [SaveableTypeDefiner](../SaveableTypeDefiner)，由 [SaveManager](../SaveManager) 统一组织成文件夹树。也不要假设 `LocalId` 跨文件夹或跨存档稳定。
- **谁创建/持有：** 由保存系统的归档层（[IArchiveContext](../IArchiveContext) / 序列化器）在保存时按对象图层级创建，并随父 [SaveEntryFolder](../SaveEntryFolder) 的 `Dictionary<FolderId, SaveEntryFolder>` 持有；加载时由驱动按同样坐标重建树。
- **处在哪一层：** 处于“归档存储层”——在字节数据（[SaveEntry](../SaveEntry)）之上、整个 `.sav` 文件结构之内，是存档内部的可寻址树节点。

## 何时使用 / 何时不要使用

**使用（理解层面）：** 排查“为什么某个对象/容器的数据在旧档里找不到”时，可顺着 `FolderId`（类别 + 序号）核对文件夹树是否对应到正确的对象/容器/字符串池。

**不要使用：**

- 不要跨父文件夹复用 `FolderId` 作业务主键：`LocalId` 只在当前父文件夹范围内有效。
- 不要把 `Extension` 当成可随意扩展的自定义位：`SaveFolderExtension` 是固定协议（Root/Object/Struct/Container/Strings），改动会让驱动与旧档不兼容。

## 依赖图

- 类别枚举：[SaveFolderExtension](../SaveFolderExtension) 是 `Extension` 的类型，决定文件夹是对象/结构体/容器/字符串池/根。
- 容器：[SaveEntryFolder](../SaveEntryFolder) 以 `FolderId` 为键持有子文件夹，`GetChildFolder(FolderId)` 据此寻址；根文件夹由 `CreateRootFolder()` 用 `FolderId(-1, Root)` 创建。
- 创建者：[IArchiveContext](../IArchiveContext) 提供 `CreateFolder(parentFolder, folderId, entryCount)` 在序列化时建节点。
- 执行入口：[SaveManager](../SaveManager) 触发保存，归档层据此生成文件夹树；[ISaveDriver](../ISaveDriver) 最终把它落盘。

## 风险

- **`LocalId` 在同一父文件夹内冲突** → 两个子文件夹共用同一 `FolderId`，后建覆盖先建，导致整棵子树数据错乱或丢失。
- **`Extension` 与节点内容不符** → 例如把对象文件夹标成 `Strings`，反序列化按错误结构解析，坏档。
- **跨版本改 `SaveFolderExtension` 取值** → 旧档的文件夹类别字节映射不上，加载失败。

## 成员说明

### 属性 `LocalId`（`int`，私有 set）

在所属父文件夹内的整数序号。构造后不可变；寻址时与 `Extension` 共同决定唯一性。根文件夹为 `-1`。

### 属性 `Extension`（`SaveFolderExtension`，私有 set）

文件夹类别：`Root` / `Object` / `Struct` / `Container` / `Strings`。

### 构造 `FolderId(int localId, SaveFolderExtension extension)`

唯一构造入口，同时设定 `LocalId` 与 `Extension`。

### `Equals` / `==` / `!=` / `GetHashCode`

基于 `LocalId` 与 `Extension` 同时相等判等；散列为 `(LocalId哈希 * 397) ^ (int)Extension`。

## 示例

模组侧不直接构造 `FolderId`；当你调用 [SaveManager](../SaveManager) 保存 `Game` 时，引擎在内部把对象图组织成文件夹树（对象文件夹、字符串池等），并为每个节点分配 `FolderId`：

```csharp
MetaData metaData = MetaData.CreateNew("MyMod", ApplicationVersion.FromString("e1.0.0"));
SaveOutput output = SaveManager.Save(Game.Current, metaData, saveName, driver);
```

在序列化/驱动侧，`FolderId` 用于创建与寻址文件夹节点——这正是 [IArchiveContext](../IArchiveContext) 的核心职责：

```csharp
// 引擎/驱动侧（示意）：按 FolderId 在父文件夹下新建一个对象子文件夹
SaveEntryFolder child = archiveContext.CreateFolder(parentFolder, new FolderId(3, SaveFolderExtension.Object), 16);
SaveEntryFolder found = parentFolder.GetChildFolder(new FolderId(3, SaveFolderExtension.Object));
```

> 注意：`FolderId` 只在当前父文件夹范围内有效；`LocalId` 不应被模组当作跨存档稳定的业务主键。

## 参见

- ↑ 父级：[存档系统 API 索引](../)
- ↔ 相关：[SaveEntryFolder](../SaveEntryFolder) · [SaveFolderExtension](../SaveFolderExtension) · [EntryId](../EntryId) · [IArchiveContext](../IArchiveContext) · [ISaveDriver](../ISaveDriver) · [SaveManager](../SaveManager)
