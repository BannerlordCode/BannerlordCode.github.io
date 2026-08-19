---
title: "MemberSaveData"
description: "保存阶段「成员级」序列化节点的抽象基类：绑定到所属 ObjectSaveData，声明 Initialize 与 InitializeAsCustomStruct 两个由属性/字段子类实现的填值钩子。"
---

# MemberSaveData

**命名空间：** `TaleWorlds.SaveSystem.Save`
**模块：** `TaleWorlds.SaveSystem`
**类型：** `internal abstract class MemberSaveData : VariableSaveData`
**基类/Base：** `VariableSaveData`
**源文件路径/Source：** `TaleWorlds.SaveSystem/Save/MemberSaveData.cs`

## 一句话职责

在 [SaveContext](../SaveContext) 把对象摊平成字节流时，为对象的每个成员建立一个「取值节点」，并约定由子类填进该成员当前的值或内嵌 struct 编号。

## 心智模型

`MemberSaveData` 是保存侧所有「成员级」序列化节点的抽象基类：`PropertySaveData`、`FieldSaveData` 都继承自它（加载侧的对称物是 `MemberLoadData`）。当 [ObjectSaveData](../ObjectSaveData) 在 `CollectMembers` 阶段遍历某个对象的成员 schema 时，会为属性建 `PropertySaveData`、为字段建 `FieldSaveData`，而这两个子类共享同一个父类 `MemberSaveData`。它只在保存阶段存在，构造时把**所属的 `ObjectSaveData`** 传进去，从而能拿到 `Target` 与 `Context`。它自身非常薄：只持有 `ObjectSaveData` 反向引用，并声明两个由子类实现的抽象钩子 `Initialize(TypeDefinitionBase)`（读取成员当前值并分类）与 `InitializeAsCustomStruct(int structId)`（成员是自定义 struct 时记录其 struct 编号）。真正把值分桶成 Object/Container/String/Enum/BasicType 的逻辑在基类 `VariableSaveData.InitializeData` 里。简言之，它是「从对象取值」（子类）与「把值分类写流」（基类）之间的约定层，`internal` 且由引擎构造，模组不应触及。

## 何时用 / 何时不要用

**理解层面使用：** 当你排查「为什么属性没存进去」「自定义 struct 成员怎么编号」，或阅读保存源码、想弄清成员取值与类型分桶如何衔接时。

**不要使用：**

- 不要在模组运行时 `new MemberSaveData(...)` 或其子类——它们都是 `internal`，由 `ObjectSaveData.CollectMembers` 在保存阶段按成员 schema 构造，构造参数是 `ObjectSaveData`。
- 不要在加载阶段寻找 `MemberSaveData`——加载走 `MemberLoadData` 体系，旧档对象此时尚未重建。
- 不要在 [SaveableTypeDefiner](../SaveableTypeDefiner) 的 `Define*` 阶段访问它——那时还没有任何一次保存，context 与对象图都不存在。

## 依赖图

- 上游拥有者：[ObjectSaveData](../ObjectSaveData) 是 `ObjectSaveData` 属性的来源；构造时由 `ObjectSaveData.CollectMembers` 把两者绑定。
- 继承基座：[VariableSaveData](../VariableSaveData) 提供 `InitializeData` / `InitializeDataAsCustomStruct` / `SaveTo(IWriter)` / `GetDataSize()` 等分类与写流能力。
- 子类实现：`PropertySaveData`、`FieldSaveData` 覆写 `Initialize` 与 `InitializeAsCustomStruct`。
- 读取上下文：[SaveContext](../SaveContext) 与 [DefinitionContext](../DefinitionContext) 提供类型定义与对象/容器/字符串 id 分配。
- 对称角色：加载侧对应 [MemberLoadData](../MemberLoadData)。

## 风险段

- **在错误阶段访问。** `MemberSaveData` 仅存活于 `SaveManager.Save` 的收集过程中；在加载回调或构造函数里读 `ObjectSaveData.Target` 毫无意义，对象尚未进入保存流程。
- **`ObjectSaveData` 为空即崩溃。** 构造函数要求传入有效的 `ObjectSaveData`，若序列化流程尚未建立该对象的 `ObjectSaveData`，后续 `Initialize` 中访问 `base.ObjectSaveData.Target` 会直接 `NullReferenceException`。
- **类型未登记只打断言不抛异常。** 基类 `InitializeData` 在 `TypeDefinition` 为 `null` 且成员类型不是接口时只 `Debug.Print` / `Debug.FailedAssert`，不会中断保存——表现为「字段悄悄丢失」。
- **自定义 struct 编号必须先行收集。** `InitializeAsCustomStruct` 依赖 [ObjectSaveData](../ObjectSaveData) 已先通过 `CollectStructs` 把该 struct 作为子节点 `new` 出来并拿到 `structId`；若 struct 未登记定义，父对象的 `GetStructDefinition` 会先抛异常。

## 成员说明

### 构造与归属

- `protected MemberSaveData(ObjectSaveData objectSaveData)`：唯一构造函数（引擎内部调用）。先调 `base(objectSaveData.Context)` 把保存上下文交给 `VariableSaveData`，再把自身绑定到 `objectSaveData`。**副作用**：建立 `ObjectSaveData` 反向引用，供子类 `Initialize` 时取 `Target` 当前值。**何时调用**：`ObjectSaveData.CollectMembers` 为对象的每个属性/字段 `new` 出对应子类时。
- `public ObjectSaveData ObjectSaveData { get; private set; }`：本成员节点所属的对象保存数据；子类通过它拿到 `Target`（被序列化的运行时实例）与 `Context`。

### 由子类实现的抽象钩子

- `public abstract void Initialize(TypeDefinitionBase typeDefinition)`：子类在此读取成员当前值并调用基类 `InitializeData` 做类型分桶。**副作用**：决定 `MemberType`（`Object`/`Container`/`String`/`Enum`/`BasicType`/`CustomStruct`）与 `Value`。**何时调用**：`ObjectSaveData` 完成成员收集后、写流前，由框架统一调度（如 `PropertySaveData` 内部用 `PropertyDefinition.GetValue(Target)` 取值）。
- `public abstract void InitializeAsCustomStruct(int structId)`：当成员本身是「自定义 struct」时，子类调用基类 `InitializeDataAsCustomStruct` 记录其 struct 编号。**副作用**：把 `MemberType` 置为 `CustomStruct`，`Value` 置为 `structId`。**何时调用**：`CollectStructs` 递归收集内嵌 struct、确定其归档编号后。

## 最小真实示例

`MemberSaveData` 是 `internal abstract`，由 `ObjectSaveData` 在保存阶段为对象的每个成员构造子类。下面复刻引擎内部的取值—分桶流程；根对象通常是 `Campaign.Current`：

```csharp
// ObjectSaveData 为 Campaign.Current 收集成员时，对每个属性 new 出 PropertySaveData 子类
ObjectSaveData objectSaveData = new ObjectSaveData(context, objectId, Campaign.Current, isClass: true);
TypeDefinition classDef = context.DefinitionContext.GetClassDefinition(Campaign.Current.GetType());
PropertySaveData saveData = new PropertySaveData(objectSaveData, property, saveId);
saveData.Initialize(classDef);   // 抽象 Initialize 由子类实现：读属性现值并交基类分桶
saveData.SaveTo(writer);         // VariableSaveData.SaveTo 把类型标记与值写入字节流
```

注意：模组不应自己 `new MemberSaveData`；要让自定义字段/属性进入这套流程，正确做法是写 [SaveableTypeDefiner](../SaveableTypeDefiner) 并用 [SaveablePropertyAttribute](../SaveablePropertyAttribute) / [SaveableFieldAttribute](../SaveableFieldAttribute) 标注成员。

## 导航块

- 父级：[存档系统 API 索引](../)
- 同级：[VariableSaveData](../VariableSaveData) · [PropertySaveData](../PropertySaveData) · [MemberLoadData](../MemberLoadData)
- 相关：[ObjectSaveData](../ObjectSaveData) · [SaveContext](../SaveContext) · [DefinitionContext](../DefinitionContext) · [SaveableTypeDefiner](../SaveableTypeDefiner) · [../../../architecture/save-system](../../../architecture/save-system)
