---
title: "ContainerType"
description: "枚举出存档系统支持的容器种类：None / List / Dictionary / Array / Queue / CustomList / CustomReadOnlyList，决定集合字段在归档里以哪种结构身份（ContainerSaveId）被编码。"
---

# ContainerType

**命名空间：** `TaleWorlds.SaveSystem`  
**模块：** `TaleWorlds.SaveSystem`  
**类型：** `public enum ContainerType`  
**基类：** `System.Enum`  
**源文件：** `TaleWorlds.SaveSystem/ContainerType.cs`

## 概述

`ContainerType` 是一个枚举，列举了保存系统能够序列化的**集合/容器种类**。取值为 `None`、`List`、`Dictionary`、`Array`、`Queue`、`CustomList`、`CustomReadOnlyList`。它是 [ContainerSaveId](../ContainerSaveId) 的核心字段：当引擎遇到一个集合类型字段时，先判断它属于哪种 `ContainerType`，再把这个结果连同元素的类型身份一起写进归档。换句话说，它把“你代码里的 `List<Hero>` / `Dictionary<K,V>` / `Hero[]`”翻译成“存档字节里记录的容器结构标签”。

## 心智模型

- **是什么：** 容器种类的分类标签，是集合字段序列化时的“结构身份”的一部分。
- **何时用：** 阅读底层、排查“为什么我的集合字段没被正确保存/还原”（例如自定义只读集合应当走 `CustomReadOnlyList` 还是 `CustomList`）时，`ContainerType` 就是你要确认的那个标签；它也解释了 [ContainerSaveId](../ContainerSaveId) 为何只区分“是否字典”来决定要不要写 `ValueId`。
- **何时不要用：** 不要为了“换一种容器”而在 mod 业务里手工指定 `ContainerType`——它由引擎根据字段的实际运行时类型自动判断。若你用了官方未直接支持的集合类型，应提供对应的 [SaveableTypeDefiner](../SaveableTypeDefiner) 注册，而不是指望手动改 `ContainerType` 强制归类。
- **谁创建/持有：** 由保存系统的定义与序列化层在反射扫描成员类型时计算，并随 [ContainerSaveId](../ContainerSaveId) 写盘；加载时由 [ArchiveDeserializer](../ArchiveDeserializer) 读回以决定如何重建集合。
- **处在哪一层：** 处于“类型身份层”的容器分支——在类型定义（[DefinitionContext](../DefinitionContext)）之下、归档字节（[ContainerSaveId](../ContainerSaveId)）之上。

## 何时使用 / 何时不要使用

**使用（理解层面）：** 调试集合字段跨版本兼容——某字段从 `List<Hero>` 改成 `Dictionary<Hero, Item>`，`ContainerType` 从 `List` 变 `Dictionary`，旧档读不出对应结构。

**不要使用：**

- 不要假设 `CustomList` / `CustomReadOnlyList` 会自动覆盖任意自定义集合：它们需要 definer 显式登记，否则保存时会因“找不到容器定义”失败。
- 不要把 `None` 当成“可用容器”：它是未归类占位，集合字段不应落到 `None`。

## 依赖图

- 容器身份：[ContainerSaveId](../ContainerSaveId) 持有 `ContainerType` 作为核心字段，并据其决定 `ValueId` 是否参与。
- 类型身份体系：[SaveId](../SaveId) 是 `ContainerSaveId` 的基类，二者共同构成归档里的类型身份。
- 序列化/反序列化：[ArchiveSerializer](../ArchiveSerializer) 写标签、[ArchiveDeserializer](../ArchiveDeserializer) 读标签，都依赖 `ContainerType`。
- 执行入口：[SaveManager](../SaveManager) 驱动整次保存，间接决定每个集合字段的 `ContainerType`。

## 风险

- **`ContainerType` 与字段运行时类型不符** → 例如把 `Dictionary` 当 `List` 处理，反序列化会按错误结构重建，索引/键值对错乱，坏档。
- **未登记的自定义集合** → 引擎算不出 `ContainerType`（落到 `None` 或找不到 definer），保存阶段抛“找不到容器定义”。
- **跨版本改枚举值** → `ContainerType` 直接写入字节，旧档的新增/重排枚举值会映射错位。

## 成员说明

### `None`

未归类占位，不应作为有效集合字段的容器类型出现。

### `List`

对应 `List<T>`，只有元素类型（键身份），无值身份。

### `Dictionary`

对应 `Dictionary<K,V>`，同时记录键与值的类型身份（`ValueId` 有效）。

### `Array`

对应原生数组 `T[]`。

### `Queue`

对应 `Queue<T>`。

### `CustomList`

官方未直接支持的“可读写自定义列表”，需 definer 显式登记后才可被识别与序列化。

### `CustomReadOnlyList`

只读自定义列表，同样需 definer 显式登记；与 `CustomList` 的序列化策略不同。

## 示例

模组侧不直接设置 `ContainerType`；当你保存一个含 `List<Hero>` 字段的对象图时，引擎在 [SaveManager](../SaveManager) 内部判断字段为 `List`，生成对应 [ContainerSaveId](../ContainerSaveId) 并写盘：

```csharp
MetaData metaData = MetaData.CreateNew("MyMod", ApplicationVersion.FromString("e1.0.0"));
SaveOutput output = SaveManager.Save(Game.Current, metaData, saveName, driver);
```

在序列化内部，集合字段的 `ContainerType` 直接决定归档里的容器标签——这正是 `List` 与 `Dictionary` 能被区分还原的原因：

```csharp
// 引擎在 ArchiveSerializer 内部（示意）：依据字段运行时类型选定 ContainerType
ContainerType kind = ContainerType.List; // 对 List<Hero> 字段
ContainerSaveId id = new ContainerSaveId(kind, new TypeSaveId(heroTypeId));
```

> 注意：`ContainerType` 由引擎按类型自动判定；自定义集合必须先在 [SaveableTypeDefiner](../SaveableTypeDefiner) 登记，否则无法映射出有效 `ContainerType`。

## 参见

- ↑ 父级：[存档系统 API 索引](../)
- ↔ 相关：[ContainerSaveId](../ContainerSaveId) · [SaveId](../SaveId) · [SaveableTypeDefiner](../SaveableTypeDefiner) · [ArchiveSerializer](../ArchiveSerializer) · [ArchiveDeserializer](../ArchiveDeserializer) · [SaveManager](../SaveManager)
