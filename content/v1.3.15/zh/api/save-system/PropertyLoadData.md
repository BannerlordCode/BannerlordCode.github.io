---
title: "PropertyLoadData"
description: "加载阶段为「属性成员」生成的回写节点：从字节流解析出值后，经 PropertyDefinition.SetMethod 把值写回正在重建的对象的对应属性上。"
---

# PropertyLoadData

**命名空间：** `TaleWorlds.SaveSystem.Load`
**模块：** `TaleWorlds.SaveSystem`
**类型：** `internal class PropertyLoadData : MemberLoadData`
**基类/Base：** `MemberLoadData`
**源文件路径/Source：** `TaleWorlds.SaveSystem/Load/PropertyLoadData.cs`

## 一句话职责

在反序列化一个对象时，负责把归档里某个属性条目的字节值还原，并通过该属性的 setter 方法写回到正在重建的对象实例。

## 心智模型

`PropertyLoadData` 是 `MemberLoadData` 的具体子类，专门处理**属性（property）**这一类成员。当 [LoadContext](../LoadContext) 反序列化一个 [ObjectLoadData](../ObjectLoadData) 时，归档里每一条属性成员都会对应生成一个 `PropertyLoadData`，构造时传入所属 `ObjectLoadData` 与定位到该条目的 `IReader`。它的生命周期极短：先由基类 `VariableLoadData.Read` 从流里读出 `SavedMemberType`、`MemberSaveId` 与原始 `Data`，再调用自己的 `FillObject()` 完成真正的回写。回写逻辑分三步——先用 `GetMemberTypeId()` 解决可能的「同名属性冲突」得到准确的 `MemberTypeId`，再去 `ObjectLoadData.TypeDefinition` 里查 `PropertyDefinition`；若查不到定义就静默返回（跳过）。拿到定义后，用 `GetDataToUse()` 把 `Data`（可能是对象/容器/字符串 id，也可能是原始值）还原成可写入的 `dataToUse`，必要时经 `LoadContext.TryConvertType` 做兼容类型转换；最后通过 `PropertyDefinition.SetMethod.Invoke(target, ...)` 把值写进 `ObjectLoadData.Target`。它与保存侧的 `PropertySaveData` 完全对称：一边 `GetValue` 取值，一边 `SetMethod` 回写。模组不应、也不能构造它（它是 `internal`）。

## 何时用 / 何时不要用

**理解层面使用：** 当你排查「为什么某属性加载后是默认值 / null / 类型不匹配」「为什么同名属性（基类与子类冲突）加载错乱」，或阅读属性回写源码时。

**不要使用：**

- 不要在模组运行时 `new PropertyLoadData(...)`——它是 `internal`，由 `LoadContext` 在反序列化对象的属性条目时构造，构造参数是 `ObjectLoadData` 与 `IReader`。
- 不要在保存阶段寻找 `PropertyLoadData`——保存走 `PropertySaveData`，此时对象尚未重建。
- 不要试图绕过它直接调属性 setter 处理版本兼容——兼容转换逻辑（`TryConvertType`）就在 `FillObject` 内，应理解而非复制。

## 依赖图

- 上游拥有者：[ObjectLoadData](../ObjectLoadData) 提供 `Target`（被重建实例）与 `TypeDefinition`（属性 schema）。
- 继承链：[MemberLoadData](../MemberLoadData) → [VariableLoadData](../VariableLoadData) 提供 `Read()` / `GetDataToUse()`。
- 类型 schema：[DefinitionContext](../DefinitionContext) 经 `TypeDefinition.GetPropertyDefinitionWithId` 解析 `PropertyDefinition`。
- 引用解析：[LoadContext](../LoadContext) 的 `TryConvertType` 与 id 查表支撑 `GetDataToUse`。
- 对称角色：保存侧对应 [PropertySaveData](../PropertySaveData)。

## 风险段

- **类型定义缺失会静默跳过。** 若 `ObjectLoadData.TypeDefinition` 为 `null`，或按 `MemberTypeId` 查不到 `PropertyDefinition`，`FillObject` 直接 `return`——属性保持未赋值/默认值，且无任何异常，极难察觉。
- **类型不兼容且无法转换则跳过。** 若 `dataToUse` 既非属性的 `PropertyType` 实例，又经 `LoadContext.TryConvertType` 转换失败，`FillObject` 也会 `return`，属性未被写回。
- **属性冲突 id 解析错误。** `GetMemberTypeId` 会调用 `DefinitionContext.GetConflictedPropertyMemberTypeId` 处理同名属性冲突；若类型定义登记有误，可能拿到错误 id，写回错误的属性。
- **目标对象未就绪。** `SetMethod.Invoke(target, ...)` 中的 `target` 来自 `ObjectLoadData.Target`；若该对象尚未完全重建，回写可能基于半成品状态。

## 成员说明

### 构造与回写

- `public PropertyLoadData(ObjectLoadData objectLoadData, IReader reader)`：唯一构造函数（引擎内部调用）。直接 `base(objectLoadData, reader)`，把 `ObjectLoadData` 与读指针交给 `MemberLoadData`/`VariableLoadData`。**何时调用**：`LoadContext` 为某 `ObjectLoadData` 的每一个属性条目 `new` 出 `PropertyLoadData` 时。
- `public void FillObject()`：核心回写方法。**副作用**：通过 `PropertyDefinition.SetMethod.Invoke(target, new object[] { dataToUse })` 把解析后的值写入 `ObjectLoadData.Target` 的对应属性；若定义缺失或类型不兼容则静默 `return`。**何时调用**：基类 `Read` 完成后，由框架调度，通常在对象图重建的回写阶段。

### 内部辅助

- `private MemberTypeId GetMemberTypeId()`：返回用于查表的准确 `MemberTypeId`。先取 `base.MemberSaveId`，再调用 `Context.DefinitionContext.GetConflictedPropertyMemberTypeId(TypeDefinition, ref memberSaveId)` 处理同名属性冲突。**何时调用**：`FillObject` 开头，决定去 `TypeDefinition` 里查哪个 `PropertyDefinition`。

## 最小真实示例

`PropertyLoadData` 是 `internal`，由 `LoadContext` 在反序列化时为对象的每个属性条目构造。下面复刻引擎内部的「读—解析—回写」流程；被重建的根对象就是 `Campaign.Current`：

```csharp
// LoadContext 重建 Campaign.Current 时，为它的每个属性条目构造 PropertyLoadData
ObjectLoadData objectLoadData = context.GetObjectWithId(objectId);
PropertyLoadData loadData = new PropertyLoadData(objectLoadData, reader);
loadData.Read();                       // 基类 VariableLoadData.Read 读出 SavedMemberType 与 Data
loadData.FillObject();                 // GetMemberTypeId 查定义 + GetDataToUse 解析后调 SetMethod 写回
bool rebuilt = Campaign.Current != null; // 目标对象已重建在 Campaign.Current 上
```

注意：模组不应自己 `new PropertyLoadData`；要让自定义属性正确参与这套流程，正确做法是写 [SaveableTypeDefiner](../SaveableTypeDefiner) 并用 [SaveablePropertyAttribute](../SaveablePropertyAttribute) 标注属性。同名属性冲突也可通过 [DefinitionContext](../DefinitionContext) 的冲突解决机制处理。

## 导航块

- 父级：[存档系统 API 索引](../)
- 同级：[MemberLoadData](../MemberLoadData) · [FieldLoadData](../FieldLoadData) · [PropertySaveData](../PropertySaveData)
- 相关：[ObjectLoadData](../ObjectLoadData) · [LoadContext](../LoadContext) · [VariableLoadData](../VariableLoadData) · [SaveablePropertyAttribute](../SaveablePropertyAttribute) · [../../../architecture/save-system](../../../architecture/save-system)
