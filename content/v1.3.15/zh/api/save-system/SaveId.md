---
title: "SaveId"
description: "保存归档里的多态“类型身份键”抽象基类：把每个被存对象/容器/泛型的稳定字符串身份与字节编码统一起来，并据 1 字节标签在加载时重建出 TypeSaveId / GenericSaveId / ContainerSaveId 三种具体形态。"
---

# SaveId

**命名空间：** `TaleWorlds.SaveSystem.Definition`  
**模块：** `TaleWorlds.SaveSystem`  
**类型：** `public abstract class SaveId`  
**基类：** `System.Object`  
**源文件：** `TaleWorlds.SaveSystem/Definition/SaveId.cs`

## 概述

`SaveId` 是存档字节流里用来标识“被保存的东西是什么类型”的统一抽象。它自身是 `abstract`，定义了三件派生类必须实现的事：给出一个稳定且可比较的 `GetStringId()`、把自身字节化到 `IWriter`（`WriteTo`）、以及报告占用字节数（`GetSizeInBytes`）。真正落盘的有三种具体形态——[TypeSaveId](../TypeSaveId)（普通类编号）、[GenericSaveId](../GenericSaveId)（带泛型参数的类，如 `List<Hero>`）、[ContainerSaveId](../ContainerSaveId)（List/Dictionary/数组等容器）。加载方不关心具体是哪一种，统一通过静态 `SaveId.ReadSaveIdFrom(IReader)` 读 1 字节标签（0/1/2）再分派到对应子类重建。换言之，`SaveId` 是连接“类型定义”和“归档字节”之间的身份协议层，mod 自定义类型一旦参与序列化，其身份也最终被表示成某个 `SaveId` 派生实例。

## 心智模型

- **是什么：** 一个不可变的类型身份键。它把“某个要保存的类型”压缩成一个字符串（`GetStringId`）和一组字节（`WriteTo`/`GetSizeInBytes`），让序列化与反序列化两端能用同一套身份说话。
- **何时用：** 你在阅读或调试存读档底层（例如自定义 `IObjectResolver`、排查“为什么某个泛型集合读出来类型不对”）时，需要理解归档里类型身份是如何编码的；或你想确认某个 `SaveId` 代表的是类、泛型类还是容器。
- **何时不要用：** 不要在 mod 业务代码里 `new` 出 `SaveId` 的子类去“手动写入存档”——身份键由 [SaveManager](../SaveManager) 在 `InitializeGlobalDefinitionContext` 与序列化阶段根据 [SaveableTypeDefiner](../SaveableTypeDefiner) 登记的类型自动生成。要声明自己的类型身份，请走 `[SaveableRootClass(id)]` + definer，而不是手写 `SaveId`。
- **谁创建/持有：** 由保存系统的定义与序列化层在内部创建并短暂持有（一次保存/加载一个上下文），不进入存档对象图、也不该被 mod 长期引用。
- **处在哪一层：** 位于“类型定义层”与“归档序列化层”之间——[DefinitionContext](../DefinitionContext) 决定编号规则，`SaveId` 负责把规则翻译成可读写的字节；[ArchiveSerializer](../ArchiveSerializer) / [ArchiveDeserializer](../ArchiveDeserializer) 是实际调用 `WriteTo` / `ReadSaveIdFrom` 的双方。

## 何时使用 / 何时不要使用

**使用（理解层面）：** 排查泛型容器（`List<Hero>`）在旧档里反序列化类型不符、或研究 `ApplicationVersion` 跨版本兼容时，`SaveId` 及其三个子类就是你要顺着追的线索。

**不要使用（实践层面）：**

- 不要把 `SaveId` 当 mod 可持久化的数据字段——它只是类型身份，不承载任何业务状态。
- 不要新增 `SaveId` 的子类并期望官方加载器认识它：`ReadSaveIdFrom` 只按 0/1/2 三档分支，新标签会让旧档与新版都不认识。
- 不要假设 `GetStringId()` 的字符串格式稳定可用于自己的协议——它的拼接规则（`G(...)` / `C(...)`）是内部实现细节。

## 依赖图

- 三个具体形态：[TypeSaveId](../TypeSaveId) · [GenericSaveId](../GenericSaveId) · [ContainerSaveId](../ContainerSaveId) 都继承 `SaveId`。
- 序列化入口：[SaveManager](../SaveManager) 在保存时通过定义上下文为每个类型生成对应的 `SaveId`，并交给 [ArchiveSerializer](../ArchiveSerializer) 写出。
- 反序列化入口：[ArchiveDeserializer](../ArchiveDeserializer) 在加载时调用 `SaveId.ReadSaveIdFrom(IReader)` 按标签重建身份。
- 类型规则来源：[DefinitionContext](../DefinitionContext) 持有类型编号，是 `SaveId` 字符串/字节内容的依据。

## 风险

- **改动 `ReadSaveIdFrom` 的标签分支** → 新旧版本无法互读，旧档直接报“无法识别的 SaveId”而坏档。
- **字符串身份冲突** → 两个不同类型算出相同的 `GetStringId()`（例如复用 `GenericSaveId` 拼接规则出 bug）会在去重或解析时张冠李戴。
- **`Equals`/`GetHashCode` 依赖 `GetStringId()`** → 若子类 `GetStringId()` 在对象生命周期内变化（理论上不该），会破坏基于哈希的去重表。

## 成员说明

### `abstract string GetStringId()`

返回该类型的稳定字符串身份，例如 `G(910001)-(5000)` 表示“泛型基类 910001、元素类型 5000”。它同时驱动 `Equals` 与 `GetHashCode`，因此必须是不可变且全局唯一的。

### `abstract void WriteTo(IWriter writer)`

把自身编码进 `IWriter`：先写 1 字节类型标签（0/1/2），再写各自的内容（类编号、泛型参数数组或容器键值身份）。归档里“类型身份段”就是这一笔。

### `abstract int GetSizeInBytes()`

预估本次 `WriteTo` 将写入的字节数，供归档头与缓冲分配使用。

### `static SaveId ReadSaveIdFrom(IReader reader)`

加载侧的工厂：读 1 字节标签后分派到 `TypeSaveId.ReadFrom` / `GenericSaveId.ReadFrom` / `ContainerSaveId.ReadFrom`。这是反序列化重建类型身份的唯一切入口。

### `Equals` / `GetHashCode`（重写）

基于 `GetStringId()` 比较与散列；`Equals` 额外要求运行时类型相同，避免 `TypeSaveId` 与 `ContainerSaveId` 因字符串巧合而判等。

## 示例

模组侧并不需要直接构造 `SaveId`；你只需正确声明类型身份，引擎在 `SaveManager.Save` 内部就会为每个类型生成对应的 `SaveId` 并写入归档。下面的调用即触发整条身份编码链路：

```csharp
MetaData metaData = MetaData.CreateNew("MyMod", ApplicationVersion.FromString("e1.0.0"));
SaveOutput output = SaveManager.Save(Game.Current, metaData, saveName, driver);
```

在加载端，引擎从字节流读回身份时走的是 `SaveId.ReadSaveIdFrom`——这正是为什么旧档里 `List<Hero>` 这类泛型集合能还原成正确类型：

```csharp
// 引擎在 ArchiveDeserializer 内部按标签重建身份（示意）：
SaveId id = SaveId.ReadSaveIdFrom(reader);
if (id is GenericSaveId genericId)
{
    Type resolved = genericId.BaseId.GetType(); // 基地类
}
```

> 注意：上面第二段的 `id` / `reader` 仅为说明加载路径；模组不应自行持有 `SaveId`，身份键随一次加载结束而失效。

## 参见

- ↑ 父级：[存档系统 API 索引](../)
- ↔ 相关：[TypeSaveId](../TypeSaveId) · [GenericSaveId](../GenericSaveId) · [ContainerSaveId](../ContainerSaveId) · [SaveManager](../SaveManager) · [ArchiveDeserializer](../ArchiveDeserializer) · [DefinitionContext](../DefinitionContext)
