---
title: "ObjectHeaderLoadData"
description: "加载时每个对象先于数据而存在的登记卡：记录归档编号、类型与属性/子结构数量，并负责用 TypeDefinition 把未初始化的空壳对象造出来。"
---

# ObjectHeaderLoadData

**命名空间：** `TaleWorlds.SaveSystem.Load`
**模块：** `TaleWorlds.SaveSystem`
**类型：** `public class ObjectHeaderLoadData`
**基类/Base：** `System.Object`
**源文件路径/Source：** `TaleWorlds.SaveSystem/Load/ObjectHeaderLoadData.cs`

## 一句话职责

加载时每个对象先于数据而存在的「登记卡」——记录它在归档里的编号、类型与属性/子结构数量，并负责用 [TypeDefinition](../TypeDefinition) 把空壳对象造出来。

## 心智模型

`ObjectHeaderLoadData` 是 [LoadContext](../LoadContext) 在扫描归档头部时为每个对象建立的「登记卡」。所有对象头先被 `new` 出来（此时还没有任何运行时实例），`InitialieReaders` 从 Basics 条目读出 `SaveId`、属性数与子 struct 数；随后 `CreateObject` 用 `SaveId` 在 [DefinitionContext](../DefinitionContext) 里查到 [TypeDefinition](../TypeDefinition)，再经 `FormatterServices.GetUninitializedObject` 造一个**未调用构造函数**的空壳（`LoadedObject`），把它同时设为 `Target`。这一步对应保存侧 `ObjectSaveData` 的「分配 ObjectId + 确定类型」；区别在于这里只是头，真正的成员回填留给 [ObjectLoadData](../ObjectLoadData) 与 `FieldLoadData`/`PropertyLoadData`。它存活在加载的早期阶段，被 `LoadContext` 放进 `_objectHeaderLoadDatas` 数组，`id == 0` 的那个会成为 `RootObject`。它是 `public` 但由引擎构造，模组不该碰。

## 何时用 / 何时不要用

**理解层面使用：** 当你排查「为什么对象创建了但字段是默认值」「为什么构造函数逻辑没跑」「`RootObject` 从哪来」「类型带 `IObjectResolver` 时对象被替换成什么」时。

**不要使用：**

- 不要在模组里 `new ObjectHeaderLoadData(context, id)`——它由 `LoadContext` 在扫描头部阶段构造，且 `context` 是引擎内部上下文。
- 不要期待它在 `LoadContext.Load` 早期就有 `Target`——`CreateObject` 之前 `Target` 为 null。
- 不要依赖它的构造函数初始化——空壳对象绕过了构造函数，初始化逻辑要靠 `[LoadCallback]` 或 resolver 兜底。

## 依赖图

- 构造来源：[LoadContext](../LoadContext) 在头部扫描阶段 `new ObjectHeaderLoadData(this, i)`。
- 类型解析：经 [DefinitionContext](../DefinitionContext) 的 `TryGetTypeDefinition(SaveId)` 得到 [TypeDefinition](../TypeDefinition)。
- 后续承接：[ObjectLoadData](../ObjectLoadData) 以 `headerLoadData` 为源构造，承接其 `Target`/`TypeDefinition`。
- 加载总览见 [存档系统架构](../../../architecture/save-system)。

## 风险段

- **SaveId 查不到 TypeDefinition。** `CreateObject` 后 `TypeDefinition` 为 null，`Target` 保持 null，后续 `AdvancedResolveObject`/`FillObject` 全部失效——通常意味着该类型漏登记在 [SaveableTypeDefiner](../SaveableTypeDefiner)。
- **空壳对象不跑构造函数。** 任何依赖构造函数赋值的状态都不会执行，需要 `[LoadCallback]` 或 `IObjectResolver` 显式兜底。
- **Basics 条目必须存在。** `InitialieReaders` 读取 `EntryId(-1, Basics)`；归档损坏会导致读流异常。

## 成员说明

### 构造与身份

- `ObjectHeaderLoadData(LoadContext context, int id)`：唯一构造函数，只设 `Context` 与 `Id`。
- `int Id { get; }`：归档中该对象的稳定编号，`id == 0` 即根对象。
- `object LoadedObject { get; }`：由 `CreateObject` 造出的空壳实例。
- `object Target { get; }`：`CreateObject` 后等于 `LoadedObject`；若类型有 resolver，`AdvancedResolveObject` 可把它替换为 resolver 产物。
- `short PropertyCount { get; }` / `short ChildStructCount { get; }`：从 Basics 读出的头部计数，决定 [ObjectLoadData](../ObjectLoadData) 预分配多少成员与子 struct。
- `TypeDefinition TypeDefinition { get; }`：由 `SaveId` 解析出的类定义。
- `LoadContext Context { get; }`：所属加载上下文。
- `SaveId SaveId { get; }`：类型标识，由 `InitialieReaders` 读出。

### 读取与构造

- `void InitialieReaders(SaveEntryFolder saveEntryFolder)`：从 `EntryId(-1, Basics)` 读出 `SaveId`、`PropertyCount`、`ChildStructCount`。**何时调用：** `LoadContext` 头部扫描阶段，每个对象头创建后立刻调用。
- `void CreateObject()`：`TryGetTypeDefinition(SaveId)` → `FormatterServices.GetUninitializedObject(type)` 造空壳。**何时调用：** 所有头读完、进入造实例阶段（`LoadContext` 第二阶段）。
- `void AdvancedResolveObject(MetaData metaData, ObjectLoadData objectLoadData)`：若类型带 `IObjectResolver`，用 resolver 把 `LoadedObject` 换成最终对象并令 `Target` 指向它；`metaData` 与 `objectLoadData` 透传给 resolver。**何时调用：** `LoadContext` 高级解析阶段。
- `void ResolveObject()`：无 resolver 时直接 `Target = TypeDefinition.ResolveObject(LoadedObject)`（通常就是原对象）。**何时调用：** 无 resolver 类型的解析阶段。

## 最小真实示例

`ObjectHeaderLoadData` 由 `LoadContext` 在重建对象图时创建——先读出类型与计数，再造空壳，最后在带 resolver 时替换为最终对象：

```csharp
// LoadContext 为每个对象先建登记卡，再从 Basics 读出类型与计数，最后造空壳对象：
ObjectHeaderLoadData header = new ObjectHeaderLoadData(loadContext, objectId);
header.InitialieReaders(childFolder);   // 读出 SaveId / PropertyCount / ChildStructCount
header.CreateObject();                  // FormatterServices.GetUninitializedObject 造空壳
// 若类型带 IObjectResolver，则在 LoadContext 里用存档元数据做高级解析（替换 Target）：
header.AdvancedResolveObject(SaveManager.LoadMetaData(saveName, driver), objectLoadData);
```

注意：`SaveManager.LoadMetaData(saveName, driver)` 返回 `MetaData`，对应 `LoadCallbackInitializator` 注入回调时使用的同一份元数据。

## 导航块

- 父级：[LoadContext](../LoadContext)
- 同级：[ObjectLoadData](../ObjectLoadData) · [ContainerHeaderLoadData](../ContainerHeaderLoadData)
- 相关：[DefinitionContext](../DefinitionContext) · [TypeDefinition](../TypeDefinition) · [SaveableTypeDefiner](../SaveableTypeDefiner) · [SaveManager](../SaveManager)
