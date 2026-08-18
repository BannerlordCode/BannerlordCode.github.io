---
title: "ContainerLoadData"
description: "加载阶段为一个容器节点建立的「恢复工作台」：从 SaveEntryFolder 读回元素条目与内嵌 struct 子节点，用 FormatterServices 思路分配 Target，按容器类型把值回填进 List/Dictionary/数组/Queue，并在 CustomStruct 元素引用缺失时回退到默认实例（可能崩溃）。"
---

# ContainerLoadData

**命名空间：** `TaleWorlds.SaveSystem.Load`
**模块：** `TaleWorlds.SaveSystem`
**类型：** `internal class ContainerLoadData`
**基类/Base：** `System.Object`
**源文件路径/Source：** `TaleWorlds.SaveSystem/Load/ContainerLoadData.cs`

## 一句话职责

加载对象图时，给存档里的每一个容器节点建立一个「恢复工作台」：从字节流读回它的元素条目与内嵌 struct 子节点，先搭好骨架，再按 List/Dictionary/数组/Queue 的语义把值一个个填回 `Target`，遇到引用的 struct 缺失时回退到默认实例。

## 概述

`ContainerLoadData` 是加载系统内部为「单个容器节点」建立的临时工作台，是 [ContainerSaveData](../ContainerSaveData) 的镜像。它由 [LoadContext](../LoadContext) 在「Load Container Datas」阶段为 `_containerHeaderLoadDatas` 中每个容器构造：`new ContainerLoadData(headerLoadData)`，从 [ContainerHeaderLoadData](../ContainerHeaderLoadData) 接管 `Id`、`Target`、`Context`、`TypeDefinition`、`_saveId`、`_containerType`、`_elementCount`，并初始化 `_keys`/`_values`（[ElementLoadData](../ElementLoadData)）与 `_childStructs`（`Dictionary<int, ObjectLoadData>`）。随后 [LoadContext](../LoadContext) 按固定顺序驱动四个方法：`InitializeReaders` 从 `SaveEntryFolder` 读回每个元素条目、为每个内嵌 struct 子文件夹预建 [ObjectLoadData](../ObjectLoadData)；`FillCreatedObject` 递归对子 struct 调 `CreateStruct`；`Read` 把条目数据读进成员；`FillObject` 按容器类型把值填回 `Target`（`List.Add` / `Dictionary.Add` / `Array.SetValue` / 反射 `Enqueue`）。它是 `internal`、只在加载阶段存在、模组不可构造；保存侧对应 [ContainerSaveData](../ContainerSaveData)。

## 心智模型

把 `ContainerLoadData` 想成存档树里一个「容器树枝」的修复台：它先按头数据确认「我是哪种容器、装几个元素、嵌了哪些 struct 子节点」（[ContainerHeaderLoadData](../ContainerHeaderLoadData)），再把每个元素的小包裹（[ElementLoadData](../ElementLoadData)）拆开读值，对那些标记 `CustomStruct` 的元素，按保存时记下的子节点编号去 `_childStructs` 里找对应 struct 的 `Target` 填进去——**找不到就临时 `Activator.CreateInstance` 一个默认 struct**。关键风险就在这里：引用解析依赖「子 struct 已先被创建」，而整个流程被 [LoadContext](../LoadContext) 严格编排为「先 `FillCreatedObject` 再 `FillObject`」，所以单容器内本地引用是安全的；但若存档本身缺了某个 struct 子文件夹（坏档/版本漂移），回退路径会去 `DefinitionContext.TryGetTypeDefinition(valueId/keyId)` 取类型，取不到就 `NullReferenceException`，被 [LoadContext](../LoadContext) 的 `try/catch` 吞掉并让整次加载失败。理解它的关键：它是「先读包裹、再拼装容器」的只写恢复者，不持有游戏状态本身。

**何时用（理解层面）：** 排查「为什么加载后 List 是空的/元素错位」「为什么自定义 struct 字段是默认零值」「为什么坏档加载直接失败且错误只有 'Not implemented'」时，理解它如何按容器类型回填、如何处理 struct 引用与缺省回退。

**何时不要用：**
- 不要在模组运行时 `new ContainerLoadData(...)`——它是 `internal`，仅由 [LoadContext](../LoadContext) 在「Load Container Datas」阶段构造，且需要 [ContainerHeaderLoadData](../ContainerHeaderLoadData) 与存档字节。
- 不要在保存阶段或构造函数里访问 `Target`——此时 `Target` 已由 header 分配好，但元素尚未 `FillObject`，读到的容器是空的。
- 不要在 `FillObject` 之前假设容器内元素已就绪——元素是逐个 `Add`/`SetValue` 填回的，早访问会得到空容器或默认 struct。

## 依赖图

- 上游构造者：[LoadContext](../LoadContext) 在「Load Container Datas」阶段为 `_containerHeaderLoadDatas[num]` `new ContainerLoadData(header)` 并驱动四个阶段。
- 头数据来源：[ContainerHeaderLoadData](../ContainerHeaderLoadData) 提供 `Id`/`Target`/`Context`/`TypeDefinition`/`SaveId`/`ElementCount`/`ContainerType`。
- 类型 schema：[DefinitionContext](../DefinitionContext) 经 `TryGetTypeDefinition` 在缺省回退时取 struct 类型。
- 元素与子节点：[ElementLoadData](../ElementLoadData)（`_keys`/`_values`）与 [ObjectLoadData](../ObjectLoadData)（`_childStructs`，内嵌 struct）。
- 字节来源：`SaveEntryFolder` / `BinaryReader` 提供元素条目与 struct 子文件夹。
- 对称角色：保存侧对应 [ContainerSaveData](../ContainerSaveData)；整条管线见 [存档系统总览](../../../architecture/save-system)。

## 风险段（引用解析与坏档）

- **缺 struct 子节点 → 默认实例回退 → 可能 `NullReferenceException`。** `FillObject` 对 `CustomStruct` 元素先 `_childStructs.TryGetValue(num, out ...)`；若本容器文件夹里没有该 struct 子节点（坏档/版本漂移），走 `GetDefaultObject(_saveId, Context, ...)`：它用 `context.DefinitionContext.TryGetTypeDefinition(containerSaveId.ValueId/KeyId)` 取类型定义，**取不到则 `((StructDefinition)typeDefinitionBase).Type` 对 `null` 解引用直接 `NullReferenceException`**，被 [LoadContext](../LoadContext) 吞掉 → 加载失败且 [LoadResult](../LoadResult) 错误固定为 `"Not implemented"`，真因只在日志。
- **元素条目缺失 → `GetEntry` 返回 `null`。** `InitializeReaders` 对每个 `j` 调 `saveEntryFolder.GetEntry(new EntryId(j, SaveEntryExtension.Value)).GetBinaryReader()`；若存档里该 Value/Key 条目丢失，`GetEntry` 返回 `null`，随后 `GetBinaryReader()` 即 `NullReferenceException`。
- **Queue 用反射 `Enqueue`。** `ContainerType.Queue` 在 `FillObject` 里 `collection.GetType().GetMethod("Enqueue").Invoke(collection, new object[]{ data })`：要求具体类型真的暴露 `Enqueue`，且每元素一次反射调用有性能开销；自定义 `ICollection` 不含 `Enqueue` 会抛 `TargetInvocationException` / `NullReferenceException`。
- **数组元素类型/计数必须匹配。** `Array.SetValue(dataToUse, i)` 要求 `dataToUse` 可赋值给数组元素类型；若存档保存时与当前代码对容器类型的理解不一致（例如数组改成了 `MBList`），类型转换或越界会抛异常。
- **单容器内本地引用安全，但依赖编排顺序。** 同一容器内的 struct 子节点都在本容器文件夹里，`FillCreatedObject`（建 `Target`）在 `FillObject` 之前由 [LoadContext](../LoadContext) 保证；但「Load Container Datas」整体与「Load Object Datas」并行跑在 `TWParallel` 里，凡是跨到对象图（非 struct）的引用，其解析正确性取决于对象阶段已先完成。

## 成员说明

### 构造与身份

- `ContainerLoadData(ContainerHeaderLoadData headerLoadData)`：唯一构造函数（引擎内部）。从 `headerLoadData` 接管 `Id`/`Target`/`Context`/`TypeDefinition`，并据其 `SaveId`/`ContainerType`/`ElementCount` 初始化 `_keys`/`_values` 与 `_childStructs` 字典。
- `int Id { get; }`：本次加载中该容器的内部编号（对应保存时的 `ObjectId`）。
- `object Target { get; }`：由 header 已分配好的容器实例（List/Dictionary/Array/Queue 等），`FillObject` 后才被填满。
- `LoadContext Context { get; }`：持有它的加载上下文。
- `ContainerDefinition TypeDefinition { get; }`：容器类型定义，决定回填语义。
- `ContainerHeaderLoadData ContainerHeaderLoadData { get; private set; }`：接管来的头数据。

### 恢复流程

- `void InitializeReaders(SaveEntryFolder saveEntryFolder)`：扫描子文件夹收集 struct 子节点（`SaveFolderExtension.Struct`）并为每个预建 [ObjectLoadData](../ObjectLoadData)；逐个 `j` 读 Value（Dictionary 还读 Key）条目的 `BinaryReader` 建立 [ElementLoadData](../ElementLoadData)；最后递归子 struct 的 `InitializeReaders`。
- `void FillCreatedObject()`：仅递归子 struct 的 `CreateStruct`，保证 struct 骨架先于 `FillObject` 建好。
- `void Read()`：先递归子 struct 的 `Read`，再逐元素 `Read()`；`CustomStruct` 元素按 `Data` 索引取对应 struct 的 `Target` 并 `SetCustomStructData`。
- `void FillObject()`：按 `ContainerType` 把元素填回 `Target`——`List`/`CustomList`/`CustomReadOnlyList` 用 `list.Add`；`Dictionary` 用 `dictionary.Add(key, value)`；`Array` 用 `Array.SetValue`；`Queue` 用反射 `Enqueue`。`CustomStruct` 元素先尝试从 `_childStructs` 取 `Target`，取不到走 `GetDefaultObject` 回退。

### 缺省回退（危险路径）

- `static object GetDefaultObject(SaveId saveId, LoadContext context, bool getValueId = false)`：当 `CustomStruct` 元素引用的 struct 子节点缺失时调用；对 `ContainerSaveId` 取 `ValueId`/`KeyId` 经 `context.DefinitionContext.TryGetTypeDefinition` 取 `StructDefinition`，再 `Activator.CreateInstance(type)`。**类型定义取不到即 `NullReferenceException`**。

## 真实示例

`ContainerLoadData` 是 `internal`，由 [LoadContext](../LoadContext) 在「Load Container Datas」阶段构造。真实的获取路径是 [SaveManager](../SaveManager) 的 `Load`——下面复刻引擎内部按容器类型回填的流程，根对象通常是 `Game.Current`：

```csharp
ISaveDriver driver = new SaveGameFileInfo();

// 真实获取路径：SaveManager.Load 触发的容器恢复内部产生 ContainerLoadData
LoadResult result = SaveManager.Load("MySave_001", driver);
Game game = result.Successful ? (Game)result.Root : null;

// 引擎内部（示意，非模组代码）：LoadContext 为每个容器驱动四阶段
ContainerLoadData node = new ContainerLoadData(containerHeader);
node.InitializeReaders(containerFolder);  // 读回元素与 struct 子节点
node.FillCreatedObject();                 // 先建 struct 骨架
node.Read();                              // 读元素值
node.FillObject();                        // 按 List/Dictionary/数组/Queue 回填 Target
```

注意：模组不应自己构造或驱动它；要影响容器加载结果，应通过 [SaveableTypeDefiner](../SaveableTypeDefiner) 的 resolver、正确的成员 Attribute，以及在延迟初始化模式下于 `[LoadInitializationCallback]`（见 [LoadContext](../LoadContext)）里做跨对象修正。

## 导航块

- 父级：[存档系统 API 索引](../)
- 同级：[ContainerSaveData](../ContainerSaveData) · [ContainerHeaderLoadData](../ContainerHeaderLoadData) · [ObjectLoadData](../ObjectLoadData)
- 相关：[LoadContext](../LoadContext) · [DefinitionContext](../DefinitionContext) · [ElementLoadData](../ElementLoadData) · [SaveEntryFolder](../SaveEntryFolder) · [SaveManager](../SaveManager)

## 参见

- 模块索引：[存档系统 API 索引](../)
- 上游枢纽：[SaveManager](../SaveManager)
- 关联类型：[ContainerSaveData](../ContainerSaveData) · [ContainerHeaderLoadData](../ContainerHeaderLoadData) · [ObjectLoadData](../ObjectLoadData) · [LoadResult](../LoadResult)
