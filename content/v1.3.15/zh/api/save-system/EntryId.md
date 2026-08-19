---
title: "EntryId"
description: "存档归档里“单条保存项”的不可变身份：由整数编号与类别扩展（SaveEntryExtension，如 Class/Field/Property/String）组合而成，用于在某个 SaveEntryFolder 内唯一定位一条字节数据。"
---

# EntryId

**命名空间：** `TaleWorlds.SaveSystem`  
**模块：** `TaleWorlds.SaveSystem`  
**类型：** `public struct EntryId : IEquatable<EntryId>`  
**基类：** `System.ValueType`  
**源文件：** `TaleWorlds.SaveSystem/EntryId.cs`

## 概述

`EntryId` 是存档归档（`.sav` 内部的 entry/folder 树）中用于标识**一条保存项（SaveEntry）**的不可变值结构。它由两部分组成：`Id`（文件夹内的整数序号）与 `Extension`（[SaveEntryExtension](../SaveEntryExtension) 枚举，标明这条项是类、结构体、字段、属性、键、值、字符串、配置、基础类型、对象还是文本）。[SaveEntry](../SaveEntry) 正是用 `EntryId` 作为字典键把自己登记进所属的 [SaveEntryFolder](../SaveEntryFolder)。换句话说，`EntryId` 回答的是“在某个存档文件夹里，第几号、什么类别的那一条数据”——它是保存系统把对象图切成可寻址字节块时的寻址坐标之一。

## 心智模型

- **是什么：** 存档项在“文件夹 + 序号 + 类别”三维下的地址标签；同一文件夹内靠 `Id` + `Extension` 区分不同条目。
- **何时用：** 阅读底层、或编写/调试自定义 [ISaveDriver](../ISaveDriver) / 自定义归档逻辑、需要理解“对象图的每个片段是如何被切成 SaveEntry 并编址”时，`EntryId` 就是寻址单位。
- **何时不要用：** 不要用 `EntryId` 来给自己的业务数据“编号”——它是引擎在序列化对象图、构建 entry 树时内部生成的；要持久化 mod 数据，请走 `[SaveableRootClass]` + `[SaveableField]` + [SaveableTypeDefiner](../SaveableTypeDefiner)，再由 [SaveManager](../SaveManager) 统一切成条目。也不要假设 `Id` 连续或全局唯一——它只在所属文件夹内有效。
- **谁创建/持有：** 由保存系统的归档层（[IArchiveContext](../IArchiveContext) / 序列化器）在保存时为每个对象片段创建，并随 [SaveEntryFolder](../SaveEntryFolder) 的字典持有；加载时由驱动按同样坐标取回。
- **处在哪一层：** 处于“归档存储层”——在类型身份层（[SaveId](../SaveId)）之下、字节数据（[SaveEntry](../SaveEntry)）之上，是存档文件内部的可寻址结构。

## 何时使用 / 何时不要使用

**使用（理解层面）：** 排查“为什么某个字段的数据在旧档里读错位”时，可顺着 `EntryId`（类别 + 序号）核对条目是否对应到正确成员。

**不要使用：**

- 不要跨文件夹复用 `EntryId` 作业务主键：`Id` 仅在当前 [SaveEntryFolder](../SaveEntryFolder) 范围内有意义。
- 不要把 `Extension` 当成可随意扩展的自定义位：`SaveEntryExtension` 的取值是固定协议，新增类别会让驱动与旧档不兼容。

## 依赖图

- 类别枚举：[SaveEntryExtension](../SaveEntryExtension) 是 `Extension` 的类型，决定这条项是 Class/Field/Property/String 等哪一种。
- 载体：[SaveEntry](../SaveEntry) 以 `EntryId` 为 `Id` 属性，并把自己登记进所属文件夹。
- 容器：[SaveEntryFolder](../SaveEntryFolder) 用 `Dictionary<EntryId, SaveEntry>` 持有子项，`GetEntry(EntryId)` 据此寻址。
- 执行入口：[SaveManager](../SaveManager) 触发保存，归档层据此生成条目；[IArchiveContext](../IArchiveContext) 负责在序列化时创建文件夹与条目。

## 风险

- **`Id` 在同一文件夹内冲突** → 两条不同数据共用同一 `EntryId`，后写覆盖先写，导致静默数据丢失或错读。
- **`Extension` 与数据内容不符** → 例如把字段数据标成 `Class`，反序列化时按错误结构解析，坏档或空引用。
- **跨版本改 `SaveEntryExtension` 取值** → 旧档的类别字节映射不上，加载失败。

## 成员说明

### 属性 `Id`（`int`，私有 set）

在所属文件夹内的整数序号。构造后不可变；寻址时与 `Extension` 共同决定唯一性。

### 属性 `Extension`（`SaveEntryExtension`，私有 set）

条目类别：`Class` / `Struct` / `Field` / `Property` / `Key` / `Value` / `String` / `Config` / `Basics` / `Object` / `Txt`。

### 构造 `EntryId(int id, SaveEntryExtension extension)`

唯一构造入口，同时设定 `Id` 与 `Extension`，二者共同构成不可变身份。

### `Equals` / `==` / `!=` / `GetHashCode`

基于 `Id` 与 `Extension` 同时相等判等；散列为 `(Id哈希 * 397) ^ (int)Extension`。因此“同号不同类”也视为不同条目。

## 示例

模组侧不直接构造 `EntryId`；当你调用 [SaveManager](../SaveManager) 保存 `Game` 时，引擎在内部把对象图切成无数 `SaveEntry`，并为每条分配 `EntryId`：

```csharp
MetaData metaData = MetaData.CreateNew("MyMod", ApplicationVersion.FromString("e1.0.0"));
SaveOutput output = SaveManager.Save(Game.Current, metaData, saveName, driver);
```

在自定义 [ISaveDriver](../ISaveDriver) 或调试归档结构时，你会看到每条 [SaveEntry](../SaveEntry) 都带一个 `EntryId` 作为寻址键：

```csharp
// 引擎/驱动侧（示意）：在 SaveEntryFolder 中按 EntryId 取回一条保存项
SaveEntry entry = parentFolder.GetEntry(new EntryId(12, SaveEntryExtension.Class));
byte[] bytes = entry.Data; // 该类的序列化字节
```

> 注意：`EntryId` 只在当前文件夹范围内有效；`Id` 不应被模组当作跨存档稳定的业务主键。

## 参见

- ↑ 父级：[存档系统 API 索引](../)
- ↔ 相关：[SaveEntry](../SaveEntry) · [SaveEntryExtension](../SaveEntryExtension) · [SaveEntryFolder](../SaveEntryFolder) · [IArchiveContext](../IArchiveContext) · [ISaveDriver](../ISaveDriver) · [SaveManager](../SaveManager)
