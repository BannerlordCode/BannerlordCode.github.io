---
title: "SaveableBasicTypeDefiner"
description: "引擎内置的 SaveableTypeDefiner：以 SaveId 30000 为基底，集中登记所有基础类型（int/float/Vec3…）、内建类/结构/泛型与常用容器（List/Dictionary/数组/Queue）的存档定义，是序列化器认识“标准类型”的根来源。"
---
# SaveableBasicTypeDefiner

**命名空间：** TaleWorlds.SaveSystem
**模块：** TaleWorlds.SaveSystem
**类型：** `public class SaveableBasicTypeDefiner : SaveableTypeDefiner`
**基类：** [SaveableTypeDefiner](../SaveableTypeDefiner)
**源文件：** `TaleWorlds.SaveSystem/SaveableBasicTypeDefiner.cs`

## 概述

`SaveableBasicTypeDefiner` 是 TaleWorlds 引擎自带的 [SaveableTypeDefiner](../SaveableTypeDefiner) 子类，专门登记“所有 mod 都依赖的标准存档类型”。它的构造把类型编号基底设为 `30000`（`base(30000)`），并在各个 `Define*` 重写方法里把基础类型（`int`→1、`float`→7、`string`→21、`Vec3`→13……）、内建类（`object`=0、`Tuple<,>`=100、`PriorityQueue<,>`=103、`MBReadOnlyDictionary<,>`=105）、内建结构（`Nullable<>`=101、`KeyValuePair<,>`=102、`ValueTuple`=107）、常用泛型具体组合以及一大票容器（`List<T>`/`Dictionary<K,V>`/数组/`Queue<T>` 的各种元素版本）全部登记进全局定义上下文。换句话说：**只要你的字段用了 `int`、`List<Hero>`、`Dictionary<string,int>`、`Vec3` 等，背后都是这个 definer 在 `InitializeGlobalDefinitionContext` 阶段把它们铺进了 [DefinitionContext](../DefinitionContext)**。mod 几乎从不直接实例化它——它随引擎类型发现被自动收集；你只需知道它的存在，以及在排查“为什么某标准类型能存”时来这里确认。

## 心智模型

- **是什么：** 引擎的“标准类型登记表”，在 `30000` 编号区间内集中声明所有内建基础/容器/泛型类型的存档 schema。
- **何时用：** 处在保存系统的**类型定义层（基础子层）**。当你想确认某标准类型（如 `List<Vec3>`）是否已被存档支持、或扩展一种新的基础类型时，从这里入手。mod 一般不需要自己 new 它。
- **何时不要用：** 不要继承它去“重定义”内建类型——那会与引擎登记冲突；新增自定义类型应新建自己的 [SaveableTypeDefiner](../SaveableTypeDefiner) 子类并采用**不同的、官方分配/自规划**的 `SaveId` 区间。
- **谁创建/持有：** 由 [SaveManager](../SaveManager) 在 `InitializeGlobalDefinitionContext` 阶段随程序集类型发现被收集并实例化，其定义汇总进全局 [DefinitionContext](../DefinitionContext)；运行期只读。
- **处在哪一层：** 定义层。它只在 `InitializeGlobalDefinitionContext` 时起作用；保存/加载时 [ArchiveSerializer](../ArchiveSerializer)/[ArchiveDeserializer](../ArchiveDeserializer) 只读它生成的 [DefinitionContext](../DefinitionContext)。

## 何时使用 / 何时不要使用

适合（理解/扩展层面）：

- 确认标准容器/基础类型是否受支持（源码里 `DefineContainerDefinitions` 列出了 `List<int>`…`Dictionary<string,float>` 等大量组合）。
- 当你需要让存档支持一种**全新的基础类型**，可以另写一个 definer 注册 `IBasicTypeSerializer`，而不是改动这个内建 definer。

不适合 / 危险：

- **不要改动 `base(30000)` 或内建 `SaveId`。** 这些是引擎发布的 schema，改动会让所有依赖内建类型的存档坏档。
- **不要重复登记内建类型。** 在你的 definer 里用相同编号登记已有内建类型会触发重复类型错误，[SaveManager](../SaveManager) 保存失败。
- **不要假设“任意泛型组合都自动支持”。** 只有被 `ConstructContainerDefinition` / `ConstructGeneric*Definition` 显式列出的具体组合（如 `List<int>`、不是 `List<MyWeirdType>`）才被登记；自定义元素类型需自行登记。

## 依赖图

- [SaveableTypeDefiner](../SaveableTypeDefiner) —— 父类，提供 `AddBasicTypeDefinition` / `AddClassDefinition` / `ConstructContainerDefinition` 等登记 API 与 `SaveId` 基底。
- [DefinitionContext](../DefinitionContext) —— 所有登记结果汇总的全局定义上下文。
- [IBasicTypeSerializer](../IBasicTypeSerializer) —— 基础类型序列化器（如 `IntBasicTypeSerializer`、`Vec3BasicTypeSerializer`），由 `AddBasicTypeDefinition` 绑定。
- [BasicTypeDefinition](../BasicTypeDefinition) · [StructDefinition](../StructDefinition) · [GenericTypeDefinition](../GenericTypeDefinition) · [ContainerDefinition](../ContainerDefinition) —— 它登记出的各类定义节点。
- [CustomField](../CustomField) —— `Tuple`/`KeyValuePair`/`Nullable` 的私有字段经它登记。
- [SaveManager](../SaveManager) —— 在 `InitializeGlobalDefinitionContext` 中收集并实例化它。

## 风险

- **编号区间与内建冲突** → 若你自定义 definer 也用 `30000` 附近编号，会与内建类型撞车，定义阶段报重复类型，保存失败。
- **内建类型 schema 被破坏（跨版本改内建 `SaveId`）** → 旧档全面坏档；内建编号是硬契约。
- **引用未登记的具体泛型组合** → 例如字段是 `List<MyType>` 但 `MyType` 未被任何 definer 登记，保存/加载抛异常。
- **在 `Define*` 阶段访问运行时状态** → definer 在 `InitializeGlobalDefinitionContext` 时执行，早于任何一次保存/加载，此时访问 `Game`/`MBObjectManager` 等会得到空引用。

## 成员说明

### 构造 `SaveableBasicTypeDefiner()`

`base(30000)`：把本 definer 的类型编号基底设为 `30000`，所有内建类型编号都落在这一区。

### `DefineBasicTypes()`（重写）

登记基础类型与对应 `IBasicTypeSerializer`：`int`=1、`uint`=2、`short`=3、…、`bool`=20、`string`=21。这是 [BasicTypeDefinition](../BasicTypeDefinition) 的批量来源。

### `DefineClassTypes()`（重写）

登记内建类：`object`=0、`Tuple<,>`=100、`PriorityQueue<,>`=103、`MBReadOnlyDictionary<,>`=105、`GenericComparer<>`=106（后几个带 `CustomField`）。

### `DefineStructTypes()`（重写）

登记内建结构：`Nullable<>`=101、`KeyValuePair<,>`=102、`ValueTuple`=107，配合 `CustomField` 登记私有字段。

### `DefineGenericStructDefinitions()` / `DefineGenericClassDefinitions()`（重写）

用 `ConstructGenericStructDefinition` / `ConstructGenericClassDefinition` 实例化具体泛型组合（如 `KeyValuePair<string,string>`、`Tuple<string,int>`、`GenericComparer<int>`）。

### `DefineContainerDefinitions()`（重写）

用 `ConstructContainerDefinition` 登记大量 `List<T>`、`Queue<T>`、`T[]`、`Dictionary<K,V>` 的具体元素组合，覆盖常用基础元素与 `KeyValuePair`/`Tuple` 变体。

## 示例

模组侧只触发保存；所有内建类型定义由这个 definer 在初始化阶段铺进上下文，序列化器据此读写标准字段：

```csharp
// 引擎内部（SaveableBasicTypeDefiner.DefineContainerDefinitions）登记常用容器（示意）：
//   ConstructContainerDefinition(typeof(List<int>));
//   ConstructContainerDefinition(typeof(Dictionary<string, int>));

// 模组侧：以 Game 为根保存，字段里的 int / string / List<Hero> / Vec3 都靠上述定义支撑：
MetaData metaData = MetaData.CreateNew("MyMod", ApplicationVersion.FromString("e1.0.0"));
SaveOutput output = SaveManager.Save(Game.Current, metaData, saveName, driver);
```

注意：只有被显式登记的具体泛型/容器组合才受支持；自定义元素类型须由你自己的 definer 另行登记，且 `SaveId` 区间不要与内建的 `30000` 区冲突。

## 参见

- ↑ 父级：[存档系统 API 索引](../)
- ↔ 相关：[SaveableTypeDefiner](../SaveableTypeDefiner) · [DefinitionContext](../DefinitionContext) · [IBasicTypeSerializer](../IBasicTypeSerializer) · [BasicTypeDefinition](../BasicTypeDefinition) · [ContainerDefinition](../ContainerDefinition) · [CustomField](../CustomField) · [SaveManager](../SaveManager)
