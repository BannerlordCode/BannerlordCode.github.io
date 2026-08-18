---
title: "SaveContext"
description: "存档序列化上下文：在一次 SaveManager.Save 调用中，从存档根对象遍历对象图、为每个对象/容器/字符串分配稳定编号、收集成员数据并最终产出 GameData 的临时快照。它是运行中的 Game 与字节流之间的桥。"
---

# SaveContext

**命名空间：** `TaleWorlds.SaveSystem.Save`
**模块：** `TaleWorlds.SaveSystem`
**类型：** `public class SaveContext : ISaveContext`
**源文件：** `bin/TaleWorlds.SaveSystem/TaleWorlds.SaveSystem.Save/SaveContext.cs`

## 概述

`SaveContext` 是「一次保存操作的临时上下文」。它不是供模组直接 `new` 出来的长期对象，而是 [SaveManager](../SaveManager) 在 `Save()` 内部构造、专用于把存档根对象（通常是 `Campaign` / `Game`）连同整个对象图序列化成一份 [GameData](../GameData) 的工作台。它负责：从 `RootObject` 出发广度优先遍历所有可达对象与容器，给每个对象、容器、字符串分配一个稳定的内部编号（id），把字段/属性值收集成字节，并最终组装出 `SaveData`（一个 `GameData` 实例，含 Header / Strings / ObjectData / ContainerData 四段字节）。理解它的关键点在于：它只在**保存阶段**存在，加载阶段对应的是 `LoadContext`，二者不互通；读取错误阶段或假设对象在反序列化前就已存在，都会导致空引用或坏档。

## 心智模型

把 `SaveContext` 想成「存档系统的施工蓝图」：当 [SaveManager](../SaveManager) 决定保存时，它 `new SaveContext(_definitionContext)` 并调用 `Save(rootObject, metaData, out error)`；此后 `SaveContext` 充当运行中的 `Game` 世界与字节流之间的桥——它先 `CollectObjects()` 从 `RootObject` 把整个对象图铺平到内部列表并去重，再 `CollectSaveDatas()` 为每个对象/容器生成 `ObjectSaveData` / `ContainerSaveData`，最后 `WriteObjects()` / `WriteContainers()` 产出字节数组并封装成 `GameData` 写入 `SaveData`。它的 `DefinitionContext` 来自 [DefinitionContext](../DefinitionContext)（由各个 [SaveableTypeDefiner](../SaveableTypeDefiner) 事先登记好类型 schema），序列化时凭此查类型定义；它的 `AddOrGetStringId` / `GetObjectId` / `GetContainerId` 则是给字符串去重、给对象/容器编号的枢轴，内部 `ObjectSaveData` / `ContainerSaveData` / `VariableSaveData` 正是通过 `context` 拿到这些编号来完成引用的。也就是说：`SaveContext` 是「一次保存」的活体状态机，定义阶段（definer）只决定「怎么编号」，保存阶段（context）才真正「按编号落盘」。

## 何时使用 / 何时不要使用

**使用（理解层面）：** 当你在排查「为什么我的自定义字段没存进去」「为什么加载时报找不到类型定义」，或在编写自定义 `IObjectResolver` / 特殊序列化逻辑、需要理解 `SaveContext` 在保存时如何遍历对象图、分配编号、去重字符串时。

**不要使用：**

- 不要在模组运行时 `new SaveContext(...)`——它由 `SaveManager` 内部构造，构造需要 `DefinitionContext`，而那是引擎在 `InitializeGlobalDefinitionContext` 时建立的。
- 不要在加载阶段期待 `SaveContext` 存在或读取 `SaveData`——加载走的是 `LoadContext`，旧档对象此时尚未重建完成。
- 不要在 `Define*` 阶段（[SaveableTypeDefiner](../SaveableTypeDefiner)）访问 `SaveContext` 的任何成员——定义阶段早于任何一次保存/加载，context 还不存在。

## 依赖图

- 上游驱动：[SaveManager](../SaveManager) 在 `Save()` 中 `new SaveContext(_definitionContext)` 并调用其 `Save(...)`，成功后把 `SaveContext.SaveData` 交给 `ISaveDriver` 落盘。
- 类型 schema：[DefinitionContext](../DefinitionContext) 是 context 的 `DefinitionContext` 属性来源，由 [SaveableTypeDefiner](../SaveableTypeDefiner) 在收集阶段填好。
- 产出物：[GameData](../GameData)（即 `SaveData` 属性）是 `Header` / `Strings` / `ObjectData` / `ContainerData` 四段字节的容器。
- 序列化协作者：内部 `ObjectSaveData` / `ContainerSaveData` / `VariableSaveData` 通过 `context` 调用 `AddOrGetStringId` / `GetObjectId` / `GetContainerId`；字节实际写出由 [ArchiveSerializer](../ArchiveSerializer) 体系完成。
- 契约接口：[ISaveContext](../ISaveContext) 是 `SaveContext` 实现的接口（含 `Save`、`AddOrGetStringId`、`GetObjectId`、`GetContainerId`、`GetStringId`、`DefinitionContext`、`SaveData`）。

## 风险

- **在错误阶段访问。** `SaveContext` 只在 `SaveManager.Save` 调用期间存活；加载阶段没有它，`SaveData` 在 `Save()` 成功前为 `null`。在加载回调或构造函数里读 `SaveData` 会拿到空引用。
- **混淆 Save 与 Load。** 加载由 `LoadContext` 负责，`SaveContext` 不参与；想用「同样的上下文」处理加载是错误模型，会导致对象在反序列化前被假定存在而空引用。
- **编号解析失败即坏档。** `GetObjectId(target)` 在找不到目标时会 `Debug.FailedAssert` 并打印 `SAVE ERROR`；`CollectObjects` 中若某类型在 `DefinitionContext` 里查不到类定义会直接抛 `Exception("Could not find type definition of type: ...")`。这通常意味着对应的 `SaveableTypeDefiner` 漏登记了类型或容器。
- **字符串/对象去重是上下文级的。** `AddOrGetStringId` 与对象/容器 id 表都是 `SaveContext` 实例私有的（构造时分配 131072 容量的列表与字典），跨次保存不共享；不要试图在两次保存之间复用编号。

## 成员说明

### 公开属性

- `object RootObject { get; private set; }`：本次保存的**根对象**（序列化起点，通常是 `Campaign` / `Game`）。在 `Save()` 内被赋值，外部只读。
- `GameData SaveData { get; private set; }`：保存成功后才填充的产出物。它是一个 [GameData](../GameData)，包含 `Header`、`Strings`、`ObjectData`、`ContainerData` 四个字节段，由 `SaveManager` 交给 `ISaveDriver` 写入 `.sav` 文件。**保存未成功完成前为 `null`。**
- `DefinitionContext DefinitionContext { get; private set; }`：构造时传入的类型定义上下文，序列化时据此 `GetClassDefinition` / `GetStructDefinition` / `GetContainerDefinition` 查类型 schema。
- `static bool EnableSaveStatistics { get; }`：是否收集类型/容器统计（源码中恒为 `false`，默认关闭）。

### 主要方法

- `bool Save(object target, MetaData metaData, out string errorMessage)`：核心入口。从 `target` 出发遍历对象图、收集并写出字节，成功时填充 `SaveData` 并返回 `true`，失败时 `errorMessage` 带原因并返回 `false`。`SaveManager.Save` 正是调用它。
- `int AddOrGetStringId(string text)`：字符串去重枢轴——同一字符串只分配一次编号并返回其 id；`null` 文本返回 `-1`。内部用锁保护，统计字符串字节开销。
- `int GetObjectId(object target)`：返回某对象在本次保存中的内部 id；若该对象未被收集会 `Debug.FailedAssert`（序列化期不应发生）。
- `int GetContainerId(object target)`：返回某容器（List/Dictionary/数组）的内部 id。
- `int GetStringId(string target)`：返回已登记字符串的 id；`null` 返回 `-1`。
- `static int GetStringSizeInBytes(string text)`：估算字符串序列化字节数（4 + UTF8 长度），用于统计。
- `static SaveStatistics GetStatistics()`：在 `EnableSaveStatistics` 开启时返回类型/容器计数与体积统计；默认关闭时统计表为空。

> **内部协作：** `Save()` 之后，引擎内部的 `ObjectSaveData` / `ContainerSaveData` / `VariableSaveData` 在收集成员时通过同一个 `context` 调用 `AddOrGetStringId`、`GetObjectId`、`GetContainerId`、`DefinitionContext.GetClassDefinition(...)` 等，完成「引用按编号写入、字符串按编号去重」——这正是 `SaveContext` 作为桥的核心职责。

## 示例

模组侧真正调用的是 [SaveManager](../SaveManager) 的 `Save`，传入存档根（战役）；引擎内部会构造 `SaveContext` 完成遍历与编号，并把产出的 `GameData` 经驱动落盘。`SaveContext` 本身由引擎管理，模组不应自行 `new`：

```csharp
// 引擎在 SaveManager.Save 内部这样使用 SaveContext（示意）：
//   ISaveContext saveContext = new SaveContext(_definitionContext);
//   if (saveContext.Save(rootObject, metaData, out var error))
//       driver.Save(saveName, 1, metaData, saveContext.SaveData);
//
// 模组侧：传入存档根对象（Campaign）即可触发上述整套流程：
MetaData metaData = MetaData.CreateNew("MyMod", ApplicationVersion.FromString("e1.0.0"));
SaveOutput output = SaveManager.Save(Campaign.Current, metaData, saveName, driver);
```

在序列化内部，`context`（即 `SaveContext` 实例）被 `ObjectSaveData` / `ContainerSaveData` 用来查类型定义与分配编号——这也是理解「为什么漏登记类型会保存失败」的关键：

```csharp
// 序列化某对象时，内部凭 context 查类型 schema 并去重字符串：
TypeDefinition def = context.DefinitionContext.GetClassDefinition(target.GetType());
int stringId = context.AddOrGetStringId(someTextField); // 同一字符串只编号一次
```

注意：`SaveData`（`GameData`）只有在 `Save()` 调用返回 `true` 之后才可用；在 `Define*` 阶段或加载回调里它尚不存在，强行访问会得到 `null`。

## 参见

- ↑ 父级：[存档系统 API 索引](../)
- ↔ 相关：[SaveManager](../SaveManager) · [GameData](../GameData) · [DefinitionContext](../DefinitionContext) · [LoadContext](../LoadContext) · [ISaveContext](../ISaveContext)
