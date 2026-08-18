---
title: "ObjectLoadData"
description: "加载阶段为每个存档对象建立的恢复工作台：从 SaveEntryFolder 读回头与成员、用 FormatterServices 分配未初始化 Target、递归重建子 struct，最后把字段/属性填回对象。"
---

# ObjectLoadData

**命名空间：** `TaleWorlds.SaveSystem.Load`
**模块：** `TaleWorlds.SaveSystem`
**类型：** `public class ObjectLoadData`
**基类/Base：** `System.Object`
**源文件路径/Source：** `TaleWorlds.SaveSystem/Load/ObjectLoadData.cs`

## 一句话职责

在 [LoadContext](../LoadContext) 恢复对象图时，为存档里的每一个对象建立一个恢复工作台，按 `LocalSaveId` 把读回的字节重新映射到字段/属性，并完成子 struct 的回填。

## 心智模型

`ObjectLoadData` 是加载系统内部为「单个待恢复对象」建立的临时工作台：当 [LoadContext](../LoadContext) 从存档字节流读取对象图时，会为根对象（通常是 `Campaign.Current`）及其所有可达对象逐个建立 `ObjectLoadData`。它先由 `InitializeReaders` 从 `SaveEntryFolder` 读回头（类型 `SaveId`、属性数、子 struct 数）与每个字段/属性条目；再由 `CreateStruct` 用 `FormatterServices.GetUninitializedObject` 分配一个**未初始化**的 `Target`（跳过构造函数，避免触发游戏逻辑）；随后 `Read` 把条目数据读进成员、`FillObject` 把值写回 `Target`。它只在**加载阶段**存在，保存阶段对应的是 `ObjectSaveData`。理解它的关键：它负责「先搭骨架、再填血肉」——`Target` 在 `CreateStruct` 后才有，字段值在 `FillObject` 后才完整；在 `FillObject` 之前访问 `Target` 的成员会得到未初始化状态或错位引用。

## 何时用 / 何时不要用

**理解层面使用：** 当你排查「为什么加载后字段是默认零值」「为什么自定义 struct 没还原」「为什么 `[LoadInitializationCallback]` 里读到空引用」时。

**不要使用：**

- 不要在模组运行时 `new ObjectLoadData(...)`——它由 `LoadContext` 在恢复对象图时构造，且需要 `LoadContext` 与 `SaveEntryFolder` 等内部输入。
- 不要在保存阶段或构造函数里访问 `Target`——此时 `CreateStruct` 尚未执行，`Target` 为 `null`。
- 不要在 `FillObject` 之前假设 `Target` 的成员已就绪——字段是按对象图顺序并行填充的，早访问会得到空或错位引用。

## 依赖图

- 上游构造者：[LoadContext](../LoadContext) 在恢复对象图时建立 `ObjectLoadData`（从 `ObjectHeaderLoadData` 或按 `Id` 创建）。
- 类型 schema：[DefinitionContext](../DefinitionContext) 经 `TryGetTypeDefinition(_saveId)` 还原 `TypeDefinition`，决定 `Target` 的具体 `Type`。
- 字节来源：`SaveEntryFolder` / `SaveEntry` / `BinaryReader` 提供头与成员条目；对称写出见 [ArchiveDeserializer](../ArchiveDeserializer)。
- 成员回填：`FieldLoadData` / `PropertyLoadData` / `MemberLoadData` 在 `Read` 与 `FillObject` 中操作。
- 对称角色：保存侧对应 [ObjectSaveData](../ObjectSaveData)。

## 风险段

- **类型找不到即无法重建。** `CreateStruct` 通过 `Context.DefinitionContext.TryGetTypeDefinition(_saveId)` 取 `TypeDefinition`；若为 `null`，`Target` 保持 `null`，后续 `FillObject` 把所有字段写进空引用——通常是存档版本漂移或类型定义缺失。
- **在错误阶段访问 `Target`。** `Target` 直到 `CreateStruct` 才由 `FormatterServices.GetUninitializedObject` 分配；在 `InitializeReaders` 或构造函数里读它会拿到 `null`。
- **引用未注册 MBObject 坏档。** 若成员引用的 `Hero`/`MobileParty` 等应通过 [MBObjectManager](../../campaign-ext/MBObjectManager) id 解析的对象在旧档中缺失对应定义，`ResolveObject`/高级解析会失败，加载出半截对象。
- **字段填充顺序。** `FillObject` 在对象图间递归、字段与属性分别填充；在 `[LoadInitializationCallback]` 之前依赖其它对象的字段会得到默认零值，应把跨对象逻辑放到 `AfterLoad`/late 初始化。

## 成员说明

### 构造与身份

- `ObjectLoadData(LoadContext context, int id)`：按编号新建空恢复节点，初始化属性/字段/成员列表与子 struct 列表（`id` 为本次加载中的内部编号）。
- `ObjectLoadData(ObjectHeaderLoadData headerLoadData)`：从已读好的头数据接管 `Id`、`Target`、`Context`、`TypeDefinition`，再初始化各列表。
- `int Id { get; }`：本次加载中该对象的内部编号，对应保存时的 `ObjectId`。
- `object Target { get; }`：恢复出来的运行时实例；`CreateStruct` 之后才有，且是**未初始化**对象（跳过构造函数）。
- `LoadContext Context { get; }`：持有它的加载上下文，用于查类型定义与做对象解析。
- `TypeDefinition TypeDefinition { get; }`：由 `_saveId` 在 `CreateStruct` 中还原出来的类型定义；决定 `Target` 的具体 `Type` 与成员布局。

### 按 SaveId 取值

- `object GetDataBySaveId(int localSaveId)`：在全部成员里按 `LocalSaveId` 找唯一成员并返回其 `GetDataToUse()` 结果，找不到返回 `null`。
- `object GetMemberValueBySaveId(int localSaveId)`：同上看成员值（字段与属性的并集）。
- `object GetFieldValueBySaveId(int localSaveId)`：仅在 `_fieldValues` 中按 `LocalSaveId` 取字段值。
- `object GetPropertyValueBySaveId(int localSaveId)`：仅在 `_propertyValues` 中按 `LocalSaveId` 取属性值。
- `bool HasMember(int localSaveId)`：判断是否存在该 `LocalSaveId` 的成员（用于兼容旧档缺字段的情况）。

### 恢复流程

- `void InitializeReaders(SaveEntryFolder saveEntryFolder)`：读 Basics 条目得到 `_saveId`、属性数与子 struct 数；为每个子 struct 预建 `ObjectLoadData`；逐个子条目按 `SaveEntryExtension.Property`/`Field` 构造 `PropertyLoadData`/`FieldLoadData` 并登记进成员列表；最后递归初始化子 struct 的 `InitializeReaders`。
- `void CreateStruct()`：用 `Context.DefinitionContext.TryGetTypeDefinition(_saveId)` 取 `TypeDefinition`，对非空的用 `FormatterServices.GetUninitializedObject(type)` 分配 `Target`，再递归子 struct 的 `CreateStruct`。
- `void FillCreatedObject()`：仅递归子 struct 的 `CreateStruct`（确保子 struct 骨架先建好）。
- `void Read()`：先递归子 struct 的 `Read`，再逐成员 `Read()`；若成员是 `SavedMemberType.CustomStruct`，按 `Data` 索引取出对应子 struct 的 `Target` 并 `SetCustomStructData`。
- `void FillObject()`：递归子 struct 后，逐字段 `FillObject()`、逐属性 `FillObject()`，把读回的值真正写回 `Target`。

## 最小真实示例

`ObjectLoadData` 由 `LoadContext` 在加载阶段为对象图中的每个对象构造。存档根对象通常是 `Campaign.Current`；下面复刻引擎内部的恢复顺序——先读头、再搭骨架、最后回填：

```csharp
// LoadContext 为 Campaign 这样的根对象恢复时，按如下顺序驱动 ObjectLoadData：
ObjectLoadData rootLoadData = new ObjectLoadData(headerLoadData);
rootLoadData.InitializeReaders(saveEntryFolder);  // 读回类型 SaveId 与成员条目
rootLoadData.CreateStruct();                       // FormatterServices.GetUninitializedObject 分配 Target
rootLoadData.Read();                               // 把字节读进成员，处理内嵌 struct
rootLoadData.FillObject();                         // 把值写回 Target 的字段/属性
```

注意：模组不应自己构造或驱动它；要影响加载结果，应通过 [SaveableTypeDefiner](../SaveableTypeDefiner) 的 resolver、`[LoadInitializationCallback]`（见 [LoadContext](../LoadContext)）和正确的成员 Attribute。

## 导航块

- 父级：[存档系统 API 索引](../)
- 同级：[ObjectSaveData](../ObjectSaveData) · [TypeDefinition](../TypeDefinition)
- 相关：[LoadContext](../LoadContext) · [DefinitionContext](../DefinitionContext) · [ArchiveDeserializer](../ArchiveDeserializer) · [SaveableTypeDefiner](../SaveableTypeDefiner) · [SaveManager](../SaveManager)
