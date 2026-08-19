---
title: "ContainerHeaderLoadData"
description: "加载时每个容器（数组/列表/字典/队列）的登记卡：记录元素数量与容器种类，并按 ContainerDefinition 用 Activator 造出正确形状的空集合。"
---

# ContainerHeaderLoadData

**命名空间：** `TaleWorlds.SaveSystem.Load`
**模块：** `TaleWorlds.SaveSystem`
**类型：** `public class ContainerHeaderLoadData`
**基类/Base：** `System.Object`
**源文件路径/Source：** `TaleWorlds.SaveSystem/Load/ContainerHeaderLoadData.cs`

## 一句话职责

加载时每个容器（数组/列表/字典/队列）的「登记卡」——记录其元素数量与容器种类，并按 [TypeDefinition](../TypeDefinition) 用 `Activator` 造出正确形状的空集合。

## 心智模型

`ContainerHeaderLoadData` 是 [LoadContext](../LoadContext) 为归档中每个容器对象建立的登记卡，与 [ObjectHeaderLoadData](../ObjectHeaderLoadData) 地位对称（一个管类对象，一个管容器）。它先经 `InitialieReaders` 从 `Object` 条目读出 `SaveId`、`ContainerType` 与 `ElementCount`；`GetObjectTypeDefinition` 用 `SaveId` 在 [DefinitionContext](../DefinitionContext) 查到 `ContainerDefinition`；最后 `CreateObject` 依据容器种类造空集合——数组按 `ElementCount` 定长、`List` 造 `MBList<>`、其余直接 `Activator.CreateInstance`。这个空集合随后被 [ContainerLoadData](../ContainerLoadData) 在 `FillObject` 阶段按元素逐个填值。它存活于加载早期，被放进 `_containerHeaderLoadDatas`，由引擎持有，模组不可构造。

## 何时用 / 何时不要用

**理解层面使用：** 当你排查「为什么列表长度对但元素全是 null」「为什么字典键类型不对」「为什么自定义容器没被识别」时。

**不要使用：**

- 不要在模组里 `new ContainerHeaderLoadData(context, id)`——它由 `LoadContext` 在扫描容器头部时构造。
- 不要假设 `Target` 在 `CreateObject` 之前非空——造集合之前是 null。
- 不要把它当成「已填值的容器」——它只造空壳，填值在 [ContainerLoadData](../ContainerLoadData) 的 `FillObject` 里。

## 依赖图

- 构造来源：[LoadContext](../LoadContext) 在容器头部扫描阶段 `new ContainerHeaderLoadData(this, j)`。
- 类型解析：经 [DefinitionContext](../DefinitionContext) 的 `TryGetTypeDefinition(SaveId)` 得到容器定义。
- 后续承接：[ContainerLoadData](../ContainerLoadData) 以 `headerLoadData` 为源构造，承接其 `Target`/`TypeDefinition`/`ContainerType`/`ElementCount`。
- 对称角色：保存侧对应 [ContainerSaveData](../ContainerSaveData)。
- 全局视角见 [存档系统架构](../../../architecture/save-system)。

## 风险段

- **SaveId 查不到 ContainerDefinition。** `GetObjectTypeDefinition` 返回 false，`CreateObject` 会拿 null 的 `Type` 调 `Activator.CreateInstance` 抛异常；通常意味着容器类型漏登记。
- **容器种类与运行时不匹配。** 例如存档是 `CustomList` 但运行时代入的不是 `MBList<>`，`Activator` 失败或造出错误形状的集合。
- **ElementCount 来自归档。** 归档损坏读出负数或超大值时，`new ElementLoadData[count]` 会触发内存/长度异常。

## 成员说明

### 构造与身份

- `ContainerHeaderLoadData(LoadContext context, int id)`：只设 `Context` 与 `Id`。
- `int Id { get; }`：容器中该记录在归档里的编号。
- `object Target { get; }`：`CreateObject` 后持有的空集合实例。
- `LoadContext Context { get; }`：所属加载上下文。
- `ContainerDefinition TypeDefinition { get; }`：`GetObjectTypeDefinition` 解出后持有（是 [TypeDefinition](../TypeDefinition) 的容器特化）。
- `SaveId SaveId { get; }`：`InitialieReaders` 读出的类型标识。
- `int ElementCount { get; }`：`InitialieReaders` 读出的元素数量。
- `ContainerType ContainerType { get; }`：`InitialieReaders` 读出的容器种类（Array/List/Dictionary/Queue/CustomList…）。

### 读取与构造

- `bool GetObjectTypeDefinition()`：用 `SaveId` 查 `ContainerDefinition`，成功返回 true（[LoadContext](../LoadContext) 据此决定是否 `CreateObject`）。**何时调用：** 头部扫描后、造集合前。
- `void CreateObject()`：按 `ContainerType` 造空集合——`Array` 用 `Activator.CreateInstance(type, ElementCount)`，`List` 造 `MBList<>`，其余 `Activator.CreateInstance(type)`。**何时调用：** `LoadContext` 容器第二阶段。
- `void InitialieReaders(SaveEntryFolder saveEntryFolder)`：从 `EntryId(-1, Object)` 读出 `SaveId`、`ContainerType`、`ElementCount`。**何时调用：** 头部扫描阶段，每个容器头创建后立刻调用。

## 最小真实示例

`ContainerHeaderLoadData` 由 `LoadContext` 在加载容器时创建——先读出容器类型与元素数，再据类型造空集合，真正填值交给 [ContainerLoadData](../ContainerLoadData)：

```csharp
// LoadContext 为容器先建登记卡，读出容器类型与元素数，再据类型造空集合：
ContainerHeaderLoadData header = new ContainerHeaderLoadData(loadContext, containerId);
header.InitialieReaders(childFolder);   // 读出 SaveId / ContainerType / ElementCount
if (header.GetObjectTypeDefinition())   // 解析 ContainerDefinition
{
    header.CreateObject();              // 按 Array / List / ... 造空集合
}
// 整个加载由 SaveManager 驱动，根对象通常是 Campaign.Current：
LoadResult result = SaveManager.Load(saveName, driver);
```

注意：模组不直接构造这类头；要让自定义容器被识别，应在 [SaveableTypeDefiner](../SaveableTypeDefiner) 里注册容器定义。

## 导航块

- 父级：[LoadContext](../LoadContext)
- 同级：[ContainerLoadData](../ContainerLoadData) · [ObjectHeaderLoadData](../ObjectHeaderLoadData)
- 相关：[DefinitionContext](../DefinitionContext) · [TypeDefinition](../TypeDefinition) · [SaveableTypeDefiner](../SaveableTypeDefiner) · [SaveManager](../SaveManager) · [ContainerSaveData](../ContainerSaveData)
