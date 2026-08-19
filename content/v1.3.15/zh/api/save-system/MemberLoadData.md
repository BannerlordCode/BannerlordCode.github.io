---
title: "MemberLoadData"
description: "加载阶段「成员级」反序列化节点的抽象基类：绑定到所属 ObjectLoadData，把字段、属性、变量或容器元素从字节流读回正在重建的对象实例。"
---

# MemberLoadData

**命名空间：** `TaleWorlds.SaveSystem.Load`
**模块：** `TaleWorlds.SaveSystem`
**类型：** `internal abstract class MemberLoadData : VariableLoadData`
**基类/Base：** `VariableLoadData`
**源文件路径/Source：** `TaleWorlds.SaveSystem/Load/MemberLoadData.cs`

## 一句话职责

当 [LoadContext](../LoadContext) 重建某个对象时，为它的每个成员建立一个「读回节点」，把字节流里的值解析后写回到该对象的运行时实例上。

## 心智模型

`MemberLoadData` 是加载侧所有「成员级」反序列化节点的抽象基类：`FieldLoadData`、`PropertyLoadData`、`VariableLoadData`、`ElementLoadData` 都继承自它。在 [LoadContext](../LoadContext) 反序列化一个 [ObjectLoadData](../ObjectLoadData) 时，归档里的每一个成员条目都会对应生成一个它的子类实例，构造时把**所属的 `ObjectLoadData`** 和**定位到该成员条目的 `IReader`** 一起传进去。它只在加载阶段存在——保存阶段根本没有对称角色被直接复用（保存侧对应的是 `MemberSaveData`）。理解它的关键有两点：第一，它继承自 `VariableLoadData`，因此天然拥有 `Read()` 读类型标记、`GetDataToUse()` 把内部 id 还原成运行实例的能力；第二，它额外持有 `ObjectLoadData` 反向引用，让子类（如 `PropertyLoadData.FillObject`）能拿到 `ObjectLoadData.Target`，把解析出的值真正写回对象。换句话说，它是「从流里读」（`VariableLoadData`）与「写回对象」（`ObjectLoadData`）之间的桥梁层，模组既不能、也不应去构造它（它是 `internal`）。

## 何时用 / 何时不要用

**理解层面使用：** 当你排查「为什么属性加载后是 null / 类型不匹配」「为什么自定义 struct 成员回写失败」，或阅读反序列化源码、想弄清成员是如何从归档条目还原到对象图时。

**不要使用：**

- 不要在模组运行时 `new MemberLoadData(...)` 或其子类——它们都是 `internal`，由 `LoadContext` 在反序列化对象图时按成员条目构造，构造参数是 `ObjectLoadData` 与 `IReader`。
- 不要在保存阶段寻找 `MemberLoadData`——保存走 `MemberSaveData` 体系，加载阶段对象尚未重建，此时访问 `ObjectLoadData.Target` 无意义。
- 不要在 [SaveableTypeDefiner](../SaveableTypeDefiner) 里访问它——类型的登记与成员的读取是两套职责，自定义序列化应走 Member Attribute 与 TypeDefiner。

## 依赖图

- 上游拥有者：[ObjectLoadData](../ObjectLoadData) 是 `ObjectLoadData` 属性的来源；构造时由 `LoadContext` 把两者绑定。
- 继承基座：[VariableLoadData](../VariableLoadData) 提供 `Read()` / `GetDataToUse()` / `SetCustomStructData()` 等字节流解析能力。
- 子类实现：`PropertyLoadData`、`FieldLoadData`、`ElementLoadData` 覆写回写逻辑（如 `FillObject`）。
- 读取上下文：[LoadContext](../LoadContext) 持有 `DefinitionContext`、对象/容器/字符串 id 表，供 `GetDataToUse` 解析引用。
- 对称角色：保存侧对应 [MemberSaveData](../MemberSaveData)。

## 风险段

- **在错误阶段访问。** `MemberLoadData` 仅存活于 `SaveManager.Load` 的反序列化过程中；在 `Campaign.Current` 构造函数或加载回调里读 `ObjectLoadData.Target` 往往拿到的是尚未完全重建的半吊子对象。
- **`ObjectLoadData` 为空即崩溃。** 构造函数要求传入有效的 `ObjectLoadData`，若序列化流程尚未建立该对象的 `ObjectLoadData`，子类 `FillObject` 中访问 `base.ObjectLoadData.Target` 会直接 `NullReferenceException`。
- **类型定义缺失导致跳过。** 子类（如 `PropertyLoadData`）在 `TypeDefinition` 为 `null` 或查不到对应 `PropertyDefinition` 时会**静默 return**，成员不会被写回——表现为「字段没加载」却没有异常。
- **引用 id 解析失败。** `GetDataToUse` 依赖 `Context.GetObjectWithId` / `GetContainerWithId` / `GetStringWithId`；若归档损坏导致 id 不存在会返回 `null`，回写时可能把 `null` 写进本不应为 null 的成员。

## 成员说明

### 构造与归属

- `protected MemberLoadData(ObjectLoadData objectLoadData, IReader reader)`：唯一构造函数（引擎内部调用）。先调 `base(objectLoadData.Context, reader)` 把加载上下文与读指针交给 `VariableLoadData`，再把自己绑定到 `objectLoadData`。**副作用**：建立 `ObjectLoadData` 反向引用，供子类回写目标对象。**何时调用**：`LoadContext` 为某 `ObjectLoadData` 的每一个成员条目 `new` 出对应子类时。
- `public ObjectLoadData ObjectLoadData { get; private set; }`：本成员节点所属的对象加载数据；子类通过它拿到 `Target`（正在重建的运行时实例）与 `TypeDefinition`（成员 schema）。

### 由基类继承的关键能力

- `Read()`（来自 `VariableLoadData`）：从 `IReader` 读出 `SavedMemberType`、`MemberSaveId` 与原始 `Data`。**何时调用**：构造后、回写前，由框架统一调度。
- `GetDataToUse()`（来自 `VariableLoadData`）：根据 `SavedMemberType` 把 `Data`（id 或原始值）还原为运行实例——Object/Container/String 走 context 查表，Enum/BasicType 直接取值，CustomStruct 取 `_customStructObject`。**何时调用**：子类 `FillObject` 回写前调用以获取待写入的值。

## 最小真实示例

`MemberLoadData` 是 `internal abstract`，由 `LoadContext` 在反序列化时为对象的每个成员构造子类。下面复刻引擎内部的读取—回写流程；被重建的根对象通常就是 `Campaign.Current`：

```csharp
// LoadContext 重建 Campaign.Current 时，为它的每个属性条目构造 PropertyLoadData 子类
ObjectLoadData objectLoadData = context.GetObjectWithId(objectId);
PropertyLoadData loadData = new PropertyLoadData(objectLoadData, reader);
loadData.Read();                       // 基类 VariableLoadData.Read 读出类型标记与原始 Data
loadData.FillObject();                 // 子类覆写：经 GetDataToUse 把值写回 objectLoadData.Target
bool rebuilt = Campaign.Current != null; // 目标对象已重建在 Campaign.Current 上
```

注意：模组不应自己 `new MemberLoadData`；要让自定义成员正确参与这套流程，正确做法是写 [SaveableTypeDefiner](../SaveableTypeDefiner) 并用 [SaveablePropertyAttribute](../SaveablePropertyAttribute) / [SaveableFieldAttribute](../SaveableFieldAttribute) 标注成员。

## 导航块

- 父级：[存档系统 API 索引](../)
- 同级：[VariableLoadData](../VariableLoadData) · [PropertyLoadData](../PropertyLoadData) · [MemberSaveData](../MemberSaveData)
- 相关：[ObjectLoadData](../ObjectLoadData) · [LoadContext](../LoadContext) · [LoadResult](../LoadResult) · [SaveableTypeDefiner](../SaveableTypeDefiner) · [../../../architecture/save-system](../../../architecture/save-system)
