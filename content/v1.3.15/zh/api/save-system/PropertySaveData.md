---
title: "PropertySaveData"
description: "保存阶段为「属性成员」生成的取值节点：通过 PropertyDefinition.GetValue 读出现值，交基类按 Object/Container/String/Enum/BasicType 分桶，最终写入字节流。"
---

# PropertySaveData

**命名空间：** `TaleWorlds.SaveSystem.Save`
**模块：** `TaleWorlds.SaveSystem`
**类型：** `internal class PropertySaveData : MemberSaveData`
**基类/Base：** `MemberSaveData`
**源文件路径/Source：** `TaleWorlds.SaveSystem/Save/PropertySaveData.cs`

## 一句话职责

在保存一个对象时，负责读取它的某个属性的当前值，按类型分类后连同属性 id 一起写入字节流。

## 心智模型

`PropertySaveData` 是 `MemberSaveData` 的具体子类，专门处理**属性（property）**这一类成员。当 [ObjectSaveData](../ObjectSaveData) 在 `CollectMembers` 阶段遍历某个对象的属性 schema 时，会为每一个属性 `new` 一个 `PropertySaveData`，传入所属 `ObjectSaveData`、对应的 `PropertyDefinition` 以及该属性的 `MemberTypeId`（即 `SaveId`）。它的生命周期很短：先由 `Initialize(TypeDefinitionBase)` 通过 `PropertyDefinition.GetValue(ObjectSaveData.Target)` 读出属性当前值，再把它交给基类 `VariableSaveData.InitializeData` 按类型分桶（`Object`/`Container`/`String`/`Enum`/`BasicType`/`CustomStruct`），确定 `MemberType` 与 `Value`；若属性本身是自定义 struct，则走 `InitializeAsCustomStruct(int structId)` 记录其 struct 编号。最后由基类 `SaveTo(IWriter)` 把「类型标记 + 属性 `MemberTypeId` + 值」写进字节流。它与加载侧的 `PropertyLoadData` 完全对称：这边 `GetValue` 取，那边 `SetMethod` 写。模组不应、也不能构造它（它是 `internal`）。

## 何时用 / 何时不要用

**理解层面使用：** 当你排查「为什么某属性没存进去」「为什么属性值是引用 id 而非实际内容」，或阅读属性取值与类型分桶源码时。

**不要使用：**

- 不要在模组运行时 `new PropertySaveData(...)`——它是 `internal`，由 `ObjectSaveData.CollectMembers` 在保存阶段按属性 schema 构造，构造参数是 `ObjectSaveData`、`PropertyDefinition`、`MemberTypeId`。
- 不要在加载阶段寻找 `PropertySaveData`——加载走 `PropertyLoadData`，此时对象尚未重建。
- 不要在 [SaveableTypeDefiner](../SaveableTypeDefiner) 里访问它——属性登记由 Member Attribute 与 TypeDefiner 负责，不应手动干预取值。

## 依赖图

- 上游拥有者：[ObjectSaveData](../ObjectSaveData) 提供 `Target`（被序列化实例）与 `Context`。
- 继承链：[MemberSaveData](../MemberSaveData) → [VariableSaveData](../VariableSaveData) 提供 `InitializeData` / `SaveTo(IWriter)` / `GetDataSize()`。
- 类型 schema：[DefinitionContext](../DefinitionContext) 经 `TypeDefinition` 提供 `PropertyDefinition` 与属性 `SaveId`。
- 取值机制：`PropertyDefinition.GetValue` / `PropertyInfo` 来自 [TypeDefinition](../TypeDefinition) 体系。
- 对称角色：加载侧对应 [PropertyLoadData](../PropertyLoadData)。

## 风险段

- **属性类型未登记只打断言不抛异常。** 基类 `InitializeData` 在 `TypeDefinition` 为 `null` 且属性类型不是接口时只 `Debug.Print` / `Debug.FailedAssert`，不会中断保存——表现为「属性悄悄丢失」。
- **属性为 null 时引用变 -1。** 若 `GetValue` 返回 `null` 且成员是 Object/Container，分桶后 `Value` 记为 `-1`（表示空引用），加载侧会还原成 `null`；若你的逻辑假定属性永不为 null，需留意。
- **自定义 struct 编号必须先行。** `InitializeAsCustomStruct` 依赖 [ObjectSaveData](../ObjectSaveData) 已通过 `CollectStructs` 把该 struct 作为子节点收集并拿到 `structId`；struct 未登记定义时父对象会先抛异常。
- **在错误阶段访问。** 它仅存活于 `SaveManager.Save` 期间；加载回调或构造函数里读 `ObjectSaveData.Target` 毫无意义。

## 成员说明

### 身份与构造

- `public PropertyDefinition PropertyDefinition { get; private set; }`：本节点对应的属性定义，携带 `GetValue`、`SetMethod`、`PropertyInfo` 等反射信息，是取值与分桶的依据。
- `public MemberTypeId SaveId { get; private set; }`：本属性在类型 schema 中的成员 id，写流时作为成员标识（`TypeLevel` + `LocalSaveId`）。
- `public PropertySaveData(ObjectSaveData objectSaveData, PropertyDefinition propertyDefinition, MemberTypeId saveId)`：唯一构造函数（引擎内部调用）。`base(objectSaveData)` 绑定所属对象，再保存 `propertyDefinition` 与 `saveId`。**何时调用**：`ObjectSaveData.CollectMembers` 为对象的每个属性 `new` 出本类时。

### 取值与分桶

- `public override void Initialize(TypeDefinitionBase typeDefinition)`：实现抽象钩子。**副作用**：先 `PropertyDefinition.GetValue(ObjectSaveData.Target)` 读出属性当前值，再调 `base.InitializeData(SaveId, PropertyDefinition.PropertyInfo.PropertyType, typeDefinition, value)` 完成类型分桶，确定 `MemberType` 与 `Value`。**何时调用**：`ObjectSaveData` 收集完成员、写流前，由框架统一调度。
- `public override void InitializeAsCustomStruct(int structId)`：实现抽象钩子。**副作用**：调 `base.InitializeDataAsCustomStruct(SaveId, structId, base.TypeDefinition)`，把 `MemberType` 置为 `CustomStruct`、`Value` 置为 `structId`。**何时调用**：`CollectStructs` 递归收集内嵌 struct、确定其归档编号后。

## 最小真实示例

`PropertySaveData` 是 `internal`，由 `ObjectSaveData` 在保存阶段为对象的每个属性构造。下面复刻引擎内部的「取值—分桶—写流」流程；根对象通常是 `Campaign.Current`：

```csharp
// SaveContext 为 Campaign.Current 收集属性时，对每个属性 new 出 PropertySaveData
ObjectSaveData objectSaveData = new ObjectSaveData(context, objectId, Campaign.Current, isClass: true);
TypeDefinition classDef = context.DefinitionContext.GetClassDefinition(Campaign.Current.GetType());
MemberTypeId saveId = new MemberTypeId { TypeLevel = 0, LocalSaveId = 1 };
PropertyDefinition property = classDef.GetPropertyDefinitionWithId(saveId);
PropertySaveData saveData = new PropertySaveData(objectSaveData, property, saveId);
saveData.Initialize(classDef);   // PropertyDefinition.GetValue(Campaign.Current) 读现值并交基类分桶
saveData.SaveTo(writer);         // VariableSaveData.SaveTo 把类型标记、属性 id 与值写入字节流
```

注意：模组不应自己 `new PropertySaveData`；要让自定义属性进入这套流程，正确做法是写 [SaveableTypeDefiner](../SaveableTypeDefiner) 并用 [SaveablePropertyAttribute](../SaveablePropertyAttribute) 标注属性。

## 导航块

- 父级：[存档系统 API 索引](../)
- 同级：[MemberSaveData](../MemberSaveData) · [FieldSaveData](../FieldSaveData) · [PropertyLoadData](../PropertyLoadData)
- 相关：[ObjectSaveData](../ObjectSaveData) · [SaveContext](../SaveContext) · [VariableSaveData](../VariableSaveData) · [SaveablePropertyAttribute](../SaveablePropertyAttribute) · [../../../architecture/save-system](../../../architecture/save-system)
