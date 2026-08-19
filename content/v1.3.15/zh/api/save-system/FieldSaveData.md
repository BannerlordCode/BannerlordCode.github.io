---
title: "FieldSaveData"
description: "保存时把一个字段的运行时值，连同它的存储 id 与类型定义，封装成可写字节的快照，供 ObjectSaveData 一并落到归档。"
---

# FieldSaveData

**命名空间：** `TaleWorlds.SaveSystem.Save`
**模块：** `TaleWorlds.SaveSystem`
**类型：** `internal class FieldSaveData : MemberSaveData`
**基类/Base：** `MemberSaveData`
**源文件路径/Source：** `TaleWorlds.SaveSystem/Save/FieldSaveData.cs`

## 一句话职责

保存时把一个字段的运行时值，连同它的存储 id 与类型定义，封装成可写字节的快照，供 [ObjectSaveData](../ObjectSaveData) 一并落到归档。

## 心智模型

`FieldSaveData` 是 [ObjectSaveData](../ObjectSaveData) 在 `CollectMembers` 时为每个字段 `new` 出来的成员快照，对应加载侧 `FieldLoadData`。构造时只记录 `FieldDefinition` 与 `SaveId`（存储成员 id）；真正的取值发生在 `Initialize(typeDefinition)`：从 `ObjectSaveData.Target` 经 `FieldDefinition.GetValue` 取出字段值，用 `FieldInfo.FieldType` 作为类型，交给基类 `InitializeData` 按对象/容器/字符串/基本类型/枚举分类到 `Value`。若是内嵌 struct，则 `InitializeAsCustomStruct` 走 `InitializeDataAsCustomStruct`。随后继承自 `VariableSaveData` 的 `SaveTo(writer)` 把这条字段写成字节，由 [ObjectSaveData](../ObjectSaveData) 聚合。它只活在保存阶段、是 `internal`，由 [ObjectSaveData](../ObjectSaveData) 持有，模组不可碰。

## 何时用 / 何时不要用

**理解层面使用：** 当你排查「为什么字段没存进去」「为什么字段被写成错误类型」「为什么 struct 字段被拆成子节点」时。

**不要使用：**

- 不要在模组里 `new FieldSaveData(objectSaveData, fieldDefinition, saveId)`——它仅由 [ObjectSaveData](../ObjectSaveData) 在 `CollectMembers` 中构造。
- 不要跳过 `Initialize` 直接 `SaveTo`——未初始化时 `Value`/`MemberType` 是默认状态，写出的是垃圾。
- 不要把它当属性处理器——属性由 `PropertySaveData` 负责，字段与属性在保存侧也是两套并行机制。

## 依赖图

- 构造来源：[ObjectSaveData](../ObjectSaveData) 在 `CollectMembers` 中为每个字段 `new FieldSaveData(this, fieldDefinition, saveId)`。
- 类型判定：经 [DefinitionContext](../DefinitionContext)（通过基类 `InitializeData`）把 `FieldInfo.FieldType` 分类为对象/容器/字符串/基本类型/枚举。
- 对称角色：加载侧对应 [FieldLoadData](../FieldLoadData)。
- 全局视角见 [存档系统架构](../../../architecture/save-system)。

## 风险段

- **字段类型未在 [DefinitionContext](../DefinitionContext) 登记。** `InitializeData` 中 `TypeDefinition` 为 null 且非接口时，基类 `Debug.FailedAssert("Cant find definition for ...")`，字段可能写错。
- **取值抛异常。** `FieldDefinition.GetValue(Target)` 在字段为索引器/有副作用时会出问题；需 [SaveableFieldAttribute](../SaveableFieldAttribute) 正确标注普通字段。
- **访问时机。** 必须在 [ObjectSaveData](../ObjectSaveData) 的 `CollectMembers` 之后、`SaveTo` 之前调用 `Initialize`；提前读 `Value` 是默认状态。

## 成员说明

### 构造与持有

- `FieldSaveData(ObjectSaveData objectSaveData, FieldDefinition fieldDefinition, MemberTypeId saveId)`：由 `ObjectSaveData.CollectMembers` 调用；`saveId` 是该字段在类型中的稳定存储 id。
- `FieldDefinition FieldDefinition { get; }`：字段定义，提供 `FieldInfo` 与取值入口。
- `MemberTypeId SaveId { get; }`：该字段的存储成员 id（对应加载侧 `GetMemberTypeId` 的解析目标）。

### 初始化（保存阶段调用）

- `override void Initialize(TypeDefinitionBase typeDefinition)`：取 `FieldDefinition.GetValue(ObjectSaveData.Target)`，按 `FieldInfo.FieldType` 分类到 `Value`。**何时调用：** [ObjectSaveData](../ObjectSaveData) 的 `CollectMembers` 之后。
- `override void InitializeAsCustomStruct(int structId)`：字段是内嵌 struct 时，登记为 CustomStruct 子节点。**何时调用：** `CollectStructs` 阶段。

### 继承自 VariableSaveData 的写出能力

- `void SaveTo(IWriter writer)`：写出这条字段。**何时调用：** [ObjectSaveData](../ObjectSaveData) 的 `SaveTo`。
- `int GetDataSize()`：估算本条体积。**何时调用：** [ObjectSaveData](../ObjectSaveData) 的 `GetDataSize`。

## 最小真实示例

`FieldSaveData` 由 [ObjectSaveData](../ObjectSaveData) 在保存阶段创建。根对象通常是 `Campaign.Current`：

```csharp
// 保存阶段，ObjectSaveData 为 Campaign.Current 上的每个字段 new 一个 FieldSaveData：
object rootTarget = Campaign.Current;   // 根对象，FieldSaveData 的 Target 来源
FieldSaveData field = new FieldSaveData(objectSaveData, fieldDefinition, saveId);
field.Initialize(typeDefinition);       // 经 FieldInfo.GetValue(objectSaveData.Target) 取值
field.SaveTo(binaryWriter);             // 写出该字段（继承自 VariableSaveData.SaveTo）
```

注意：模组不直接构造 `FieldSaveData`；要让字段进入保存流程，正确做法是用 [SaveableFieldAttribute](../SaveableFieldAttribute) 标注字段，并在 [SaveableTypeDefiner](../SaveableTypeDefiner) 中登记类型。

## 导航块

- 父级：[ObjectSaveData](../ObjectSaveData)
- 同级：[FieldLoadData](../FieldLoadData) · [ObjectSaveData](../ObjectSaveData)
- 相关：[DefinitionContext](../DefinitionContext) · [SaveableFieldAttribute](../SaveableFieldAttribute) · [SaveableTypeDefiner](../SaveableTypeDefiner) · [SaveManager](../SaveManager)
