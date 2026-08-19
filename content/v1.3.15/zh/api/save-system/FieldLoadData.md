---
title: "FieldLoadData"
description: "加载时把一个已解码的字段字节流，按类型定义找到对应的 FieldInfo，把解析后的值写回到对象实例上。"
---

# FieldLoadData

**命名空间：** `TaleWorlds.SaveSystem.Load`
**模块：** `TaleWorlds.SaveSystem`
**类型：** `internal class FieldLoadData : MemberLoadData`
**基类/Base：** `MemberLoadData`
**源文件路径/Source：** `TaleWorlds.SaveSystem/Load/FieldLoadData.cs`

## 一句话职责

加载时把一个已解码的字段字节流，按类型定义找到对应的 `FieldInfo`，把解析后的值写回到对象实例上。

## 心智模型

`FieldLoadData` 是 [ObjectLoadData](../ObjectLoadData) 在 `InitializeReaders` 时，对每个 `SaveEntryExtension.Field` 条目 `new` 出来的成员回填器，与 `PropertyLoadData` 并列、对应保存侧 `FieldSaveData`。它先经基类 `Read()` 把字节流解成 `SavedMemberType`/`MemberSaveId`/`Data`；到 [ObjectLoadData](../ObjectLoadData) 的 `FillObject` 阶段，`FillObject()` 才真正干活：用 `GetMemberTypeId()`（会经 [DefinitionContext](../DefinitionContext) 处理字段冲突 id）从 `ObjectLoadData.TypeDefinition` 取 `FieldDefinition`，拿到 `FieldInfo`，用 `GetDataToUse()` 把内部编号解析成运行时值，必要时经 `LoadContext.TryConvertType` 做类型兼容转换，最后 `fieldInfo.SetValue(target, dataToUse)` 落到实例。它只活在加载阶段、是 `internal`，由 [ObjectLoadData](../ObjectLoadData) 持有，模组不可碰。

## 何时用 / 何时不要用

**理解层面使用：** 当你排查「为什么字段是默认值没被还原」「为什么同名字段读到了错误的值」「为什么枚举/基础类型转换失败」时。

**不要使用：**

- 不要在模组里 `new FieldLoadData(objectLoadData, reader)`——它仅由 [ObjectLoadData](../ObjectLoadData) 在 `InitializeReaders` 中构造。
- 不要在 `ObjectLoadData.FillObject` 之前调用 `FillObject()`——此时 `Target` 与解码状态未必就绪。
- 不要指望它处理属性——属性由 `PropertyLoadData` 负责，字段与属性在加载侧是两套并行机制。

## 依赖图

- 构造来源：[ObjectLoadData](../ObjectLoadData) 在 `InitializeReaders` 中为每个 `Field` 条目 `new FieldLoadData(this, binaryReader)`。
- 类型解析：经 [DefinitionContext](../DefinitionContext) 的 `GetConflictedFieldMemberTypeId` 与 `TypeDefinition.GetFieldDefinitionWithId` 定位 `FieldDefinition`。
- 引用解析：基类 `GetDataToUse` 经 [LoadContext](../LoadContext) 把编号换成运行时值，`TryConvertType` 做兼容转换。
- 对称角色：保存侧对应 [FieldSaveData](../FieldSaveData)。
- 全局视角见 [存档系统架构](../../../architecture/save-system)。

## 风险段

- **字段 id 对不上。** 若 `TypeDefinition` 为 null 或 `GetFieldDefinitionWithId` 找不到对应字段，`FillObject` 直接 return，该字段保持未赋值（默认值）——通常是成员 id 冲突未处理或类型定义不匹配。
- **类型不兼容且无法转换。** `dataToUse` 不是字段类型实例且 `LoadContext.TryConvertType` 失败，则 return，字段漏填。
- **字段为 readonly/在构造函数初始化。** `SetValue` 仍会写，但可能与构造逻辑冲突；需靠 [SaveableFieldAttribute](../SaveableFieldAttribute) 正确标注。

## 成员说明

### 构造与持有

- `FieldLoadData(ObjectLoadData objectLoadData, IReader reader)`：基类的 `ObjectLoadData`/`Context` 取自传入对象，读流交给基类解码。
- 继承自 `MemberLoadData`：`ObjectLoadData ObjectLoadData { get; }`：所属对象，提供 `TypeDefinition` 与 `Target`。

### 回填逻辑

- `void FillObject()`：把已 `Read` 的解码值写到运行时实例。**何时调用：** [ObjectLoadData](../ObjectLoadData) 的 `FillObject` 阶段（递归子 struct 之后）。处理顺序：解析真实成员 id（含冲突处理）→ 取 `FieldInfo` → `GetDataToUse` → 类型兼容转换 → `SetValue`。
- `private MemberTypeId GetMemberTypeId()`：用 `Context.DefinitionContext.GetConflictedFieldMemberTypeId` 把存储的成员 id 修正为运行时字段 id，处理同名字段/继承冲突。**何时调用：** `FillObject` 内部。

### 继承自 VariableLoadData 的能力

- `void Read()`：解字节流 → `SavedMemberType` / `MemberSaveId` / `Data`。**何时调用：** [ObjectLoadData](../ObjectLoadData) 的 `Read` 阶段。
- `object GetDataToUse()`：解析 `Data` 为运行时值。**何时调用：** `FillObject` 内部。

## 最小真实示例

`FieldLoadData` 由 [ObjectLoadData](../ObjectLoadData) 在 `InitializeReaders` 时创建。下面复刻引擎内部流程——整个加载由 `SaveManager` 驱动：

```csharp
// ObjectLoadData.InitializeReaders 为每个 Field 条目 new 一个 FieldLoadData 并交给基类读流：
FieldLoadData field = new FieldLoadData(objectLoadData, binaryReader);
field.Read();                 // 解码出 SavedMemberType / Data（一个对象编号）
field.FillObject();           // 经 FieldInfo.SetValue 写回 objectLoadData.Target
// 整个加载由 SaveManager 驱动，根对象通常是 Campaign.Current：
LoadResult result = SaveManager.Load(saveName, driver);
```

注意：模组不直接持有 `FieldLoadData`；要让字段被正确还原，正确做法是用 [SaveableFieldAttribute](../SaveableFieldAttribute) 标注字段，并在 [SaveableTypeDefiner](../SaveableTypeDefiner) 中登记类型。

## 导航块

- 父级：[ObjectLoadData](../ObjectLoadData)
- 同级：[FieldSaveData](../FieldSaveData) · [ObjectLoadData](../ObjectLoadData)
- 相关：[DefinitionContext](../DefinitionContext) · [LoadContext](../LoadContext) · [SaveableFieldAttribute](../SaveableFieldAttribute) · [SaveableTypeDefiner](../SaveableTypeDefiner) · [SaveManager](../SaveManager)
