---
title: "ContainerDefinition"
description: "容器类型定义：记录某个 List/Dictionary/数组等集合类型在存档 schema 中的身份（ContainerSaveId）、所属程序集、子对象采集委托与是否含子对象，由 DefinitionContext 在类型登记阶段构造，供保存时按类型还原容器。"
---

# ContainerDefinition

**命名空间：** `TaleWorlds.SaveSystem.Definition`
**模块：** `TaleWorlds.SaveSystem`
**类型：** `public class ContainerDefinition : TypeDefinitionBase`
**基类/Base：** `TypeDefinitionBase`
**源文件路径/Source：** `TaleWorlds.SaveSystem.Definition/ContainerDefinition.cs`

## 一句话职责

`ContainerDefinition` 是集合类型（List、Dictionary、数组等）在存档定义上下文里的「身份证 + 采集说明书」：它把 `Type`、`ContainerSaveId`、`DefinedAssembly`、`CollectObjectsMethod` 和 `HasNoChildObject` 绑定在一起，序列化器据此知道这个容器在存档里用什么编号标识、如何遍历并收集其元素对象。

## 概述

`ContainerDefinition` 位于 `TaleWorlds.SaveSystem.Definition`，是类型定义层里专门服务集合的 schema 记录，不是集合实例本身，也不持有任何业务数据。它描述「某一类容器长什么样、归哪个程序集、怎样把内部元素送进对象图」，保存阶段 [SaveContext](../SaveContext) 通过 `DefinitionContext.GetContainerDefinition(type)` 取回它，再据此把 `List<Hero>`、`Dictionary<string, MobileParty>` 这样的容器序列化成 `ContainerSaveData`。它的 `Type` 与 `SaveId` 来自基类 `TypeDefinitionBase`，构造函数里额外补上 `DefinedAssembly`；`CollectObjectsMethod` 与 `HasNoChildObject` 则由 `InitializeForAutoGeneration` 在自动生成定义时写入。

## 心智模型

把 `ContainerDefinition` 想成存档系统为「集合」单独发的工牌：当某个 [SaveableTypeDefiner](../SaveableTypeDefiner) 在 `DefineContainerDefinitions` 里调用 `ConstructContainerDefinition(typeof(Dictionary<string, MyData>))` 时，[DefinitionContext](../DefinitionContext) 的 `ConstructContainerDefinition(type, assembly)` 会 `new` 出一个 `ContainerDefinition`，用 `ContainerSaveId`（内含 `ContainerType` 与键/值元素的 `SaveId`）作为它的稳定身份，并把 `DefinedAssembly` 记为当前 definer 所在程序集。之后在每次保存中，[SaveContext](../SaveContext) 遇到一个 `List`/`Dictionary`/`数组` 时，会拿它的运行时 `Type` 去 `GetContainerDefinition` 查这张工牌：若查不到就报「类型未定义」；查到后，序列化器靠 `CollectObjectsMethod` 这个委托把容器里的子对象逐个塞进对象图（`HasNoChildObject` 为 true 时则意味着容器只装基础/标量元素，无需再递归展开子对象引用）。换句话说，definer 阶段「制卡」，保存阶段「验卡并展开」——`ContainerDefinition` 自身只在定义上下文里存在，生命周期与 [DefinitionContext](../DefinitionContext) 一致，不随单次保存创建销毁。

## 何时用 / 何时不要用

**使用（理解层面）：** 当你排查「为什么我的 `List<自定义类>` 字段没存进去」「为什么加载报容器类型未定义」，或想理解保存系统如何遍历集合元素、为什么 `HasNoChildObject` 会影响对象图膨胀时。

**不要用：**

- 不要在模组运行时 `new ContainerDefinition(...)`——它由 `DefinitionContext.ConstructContainerDefinition` 内部构造，你应通过 [SaveableTypeDefiner](../SaveableTypeDefiner) 的 `ConstructContainerDefinition(typeof(...))` 登记容器，绝不直接实例化这张定义。
- 不要以为它是容器实例——它只是 schema；真正的 `List`/`Dictionary` 数据由 `ContainerSaveData` 持有。
- 不要把 `CollectObjectsMethod`/`HasNoChildObject` 当作运行时可改的开关——它们只在定义生成阶段由 `InitializeForAutoGeneration` 写入，之后不可变。

## 依赖图

- 上游构造：[DefinitionContext](../DefinitionContext) 的 `ConstructContainerDefinition(type, assembly)` 内部 `new ContainerDefinition(...)` 并 `AddContainerDefinition`，由 [SaveableTypeDefiner](../SaveableTypeDefiner) 的 `ConstructContainerDefinition(Type)` 触发登记。
- 类型 schema 来源：基类 `TypeDefinitionBase`（携带 `Type` 与 `SaveId`），`SaveId` 实际是 `ContainerSaveId`（含 `ContainerType` 与键/值 `SaveId`）。
- 保存期消费：[SaveContext](../SaveContext) 与 `ContainerSaveData` 通过 `DefinitionContext.GetContainerDefinition(type)` 取回它来展开容器元素。
- 兄弟定义：与普通类定义 [SaveableTypeDefiner](../SaveableTypeDefiner)、[ArchiveSerializer](../ArchiveSerializer) 的序列化流程协作。

## 风险段

- **漏登记容器即坏档。** 字段是 `List<T>`/`Dictionary<K,V>`/数组却在 `DefineContainerDefinitions` 里漏掉对应的 `ConstructContainerDefinition`，[SaveManager](../SaveManager) 的类型检查会报告未定义类型，该字段永不落盘。
- **重复定义断言。** `ConstructContainerDefinition` 若发现 `_definitionContext.HasDefinition(type)` 已为真，会 `Debug.FailedAssert("There is duplicate definition for ...")`；两个 definer 给同一容器类型登记会触发此断言。
- **程序集归属错误。** `DefinedAssembly` 取自首倡登记的 `GetType().Assembly`，容器内的元素类型也须在该程序集可见；跨程序集引用未登记类型会导致 `GetContainerDefinition` 查不到。
- **误读加载顺序。** `ContainerDefinition` 属于定义层，在 `LoadContext` 还原对象之前就须就绪；在 `Define*` 之外或加载回调里访问它毫无意义，定义阶段也读不到任何运行时容器实例。

## 成员说明

### 构造函数

- `ContainerDefinition(Type type, ContainerSaveId saveId, Assembly definedAssembly)`：唯一构造函数，由 `DefinitionContext.ConstructContainerDefinition` 调用。把 `type` 与 `saveId` 交给基类 `TypeDefinitionBase`，并把 `definedAssembly` 存进 `DefinedAssembly`。模组不应直接调用。

### 公开属性（均为 get；private set）

- `Assembly DefinedAssembly { get; }`：登记该容器定义的程序集（取自 definer 所在 `Assembly`），用于限定容器元素类型的解析范围。
- `CollectObjectsDelegate CollectObjectsMethod { get; }`：展开容器时调用的委托，签名为 `delegate void CollectObjectsDelegate(object o, List<object> collectedObjects)`；序列化器用它把 `o` 内的子对象追加进 `collectedObjects` 对象图。
- `bool HasNoChildObject { get; }`：为 true 表示该容器只装基础/标量元素（如 `List<int>`），无需递归收集子对象引用；为 false 则容器内可能含有需纳入对象图的引用类型元素。

### 主要方法

- `void InitializeForAutoGeneration(CollectObjectsDelegate collectObjectsDelegate, bool hasNoChildObject)`：在自动生成容器定义时写入 `CollectObjectsMethod` 与 `HasNoChildObject` 两个字段。它由定义生成工具在登记阶段调用，不是供模组在运行时修改的入口；调用后这两个属性即固定。

> **关联：** `ContainerSaveId` 是 `SaveId` 的子类，编码了 `ContainerType`（List / Dictionary / 数组 / 自定义列表等）以及键与值元素的 `SaveId`；序列化器正是用这个编号在字节流里定位并重建对应容器。

## 最小真实示例

登记容器定义发生在 [SaveableTypeDefiner](../SaveableTypeDefiner) 的 `DefineContainerDefinitions` 重写里，由引擎在初始化全局定义上下文时自动调用——你只写登记，不 new 实例：

```csharp
public class MyModTypeDefiner : SaveableTypeDefiner
{
    public MyModTypeDefiner() : base(987654) { }

    protected override void DefineContainerDefinitions()
    {
        // 元素含引用类型时，序列化器会用 CollectObjectsMethod 收集子对象
        ConstructContainerDefinition(typeof(List<Hero>));
        ConstructContainerDefinition(typeof(Dictionary<string, MobileParty>));
        // 仅装标量的容器会被标记为 HasNoChildObject = true
        ConstructContainerDefinition(typeof(List<int>));
    }
}
```

在保存阶段，[SaveContext](../SaveContext) 用运行时类型反查这张定义来展开容器（示意，引擎内部逻辑）：

```csharp
ContainerDefinition def = context.DefinitionContext.GetContainerDefinition(container.GetType());
if (def != null && !def.HasNoChildObject)
{
    def.CollectObjectsMethod(container, collectedObjects);
}
```

## 导航块

- 父级：[存档系统 API 索引](../)
- 同级：[MetaData](../MetaData) · [MemberTypeId](../MemberTypeId)
- 相关：[DefinitionContext](../DefinitionContext) · [SaveableTypeDefiner](../SaveableTypeDefiner) · [SaveContext](../SaveContext) · [ArchiveSerializer](../ArchiveSerializer)
