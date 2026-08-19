---
title: "ElementSaveData"
description: "保存时容器内每个元素的快照槽：把一个元素值按其在容器中的下标归类成空对象、内嵌 struct 或普通成员数据，供 ContainerSaveData 写入字节流。"
---

# ElementSaveData

**命名空间：** `TaleWorlds.SaveSystem.Save`
**模块：** `TaleWorlds.SaveSystem`
**类型：** `internal class ElementSaveData : VariableSaveData`
**基类/Base：** `VariableSaveData`
**源文件路径/Source：** `TaleWorlds.SaveSystem/Save/ElementSaveData.cs`

## 一句话职责

保存时容器内每个元素的「快照槽」——把一个元素值按其在容器中的下标归类成空对象、内嵌 struct 或普通成员数据，供 [ContainerSaveData](../ContainerSaveData) 写入字节流。

## 心智模型

`ElementSaveData` 是 [ContainerSaveData](../ContainerSaveData) 在 `CollectChildren` 时为每个元素 `new` 出来的轻量槽，对应加载侧 `ElementLoadData`。构造时它拿 `containerSaveData.Context` 与 `(value, index)`，按值的类型决定初始化的形态：null 直接记成空对象（`MemberTypeId.Invalid`），若值类型在 [DefinitionContext](../DefinitionContext) 里是「非类的 struct」则走 `InitializeDataAsCustomStruct`（以 `index` 作为 struct 槽 id），否则走基类 `InitializeData` 按对象/容器/字符串/基本类型/枚举分类。它只活在保存阶段，是 `internal`，由 [ContainerSaveData](../ContainerSaveData) 放进 `_keys`/`_values` 数组，稍后 `ContainerSaveData.SaveTo` 调用继承自 `VariableSaveData` 的 `SaveTo(writer)` 把这条元素写出。它与 [ElementLoadData](../ElementLoadData) 跨保存/加载对称。

## 何时用 / 何时不要用

**理解层面使用：** 当你排查「为什么列表里的 null 元素存成了 -1 引用」「为什么 struct 元素被拆成子节点」「为什么元素类型写错」时。

**不要使用：**

- 不要在模组里 `new ElementSaveData(containerSaveData, value, index)`——它仅由 [ContainerSaveData](../ContainerSaveData) 在 `CollectChildren` 中构造。
- 不要手动调 `InitializeData` 系列——分类逻辑属于引擎内部，且依赖 `containerSaveData.Context` 的类型定义。
- 不要缓存 `ElementIndex` 当作稳定 id——它只是元素下标/struct 槽 id，跨次保存会重排。

## 依赖图

- 构造来源：[ContainerSaveData](../ContainerSaveData) 在 `CollectChildren` 中为 value（及 Dictionary 的 key）`new ElementSaveData(this, value, index)`。
- 类型判定：经 [DefinitionContext](../DefinitionContext) 的 `GetTypeDefinition(value.GetType())` 决定 struct / 普通成员分类。
- 对称角色：加载侧对应 [ElementLoadData](../ElementLoadData)。
- 全局视角见 [存档系统架构](../../../architecture/save-system)。

## 风险段

- **元素类型未在 [DefinitionContext](../DefinitionContext) 登记。** 走 `InitializeData` 时 `TypeDefinition` 为 null，基类会 `Debug.FailedAssert("Cant find definition for ...")`，且成员会以 CustomStruct 兜底写错。
- **null 元素。** 会被记成 `MemberTypeId.Invalid` 的空对象，加载侧得到 -1 引用；需确认容器允许 null。
- **struct 的 ElementIndex 被复用作子 struct 槽 id。** 下标与 struct 计数混用时不要自己编造 index。

## 成员说明

### 构造与分类

- `ElementSaveData(ContainerSaveData containerSaveData, object value, int index)`：保存阶段唯一入口，由 `ContainerSaveData.CollectChildren` 调用。`index` 同时是该元素在容器中的下标、也是 struct 子节点槽 id。
- `object ElementValue { get; }`：被保存的原始元素值（构造时原样保留，便于调试与后续 struct 收集）。
- `int ElementIndex { get; }`：元素下标 / struct 槽 id。

### 构造时自动选择的初始化分支

- null → `InitializeDataAsNullObject(MemberTypeId.Invalid)`：标记为空对象。
- 非类 struct → `InitializeDataAsCustomStruct(MemberTypeId.Invalid, index, typeDefinition)`：登记为内嵌 struct，供 [ContainerSaveData](../ContainerSaveData) 后续 `CollectStructs` 收集为 `ObjectSaveData` 子节点。
- 其余 → `InitializeData(MemberTypeId.Invalid, value.GetType(), typeDefinition, value)`：按对象/容器/字符串/基本类型/枚举分类到 `Value`。

### 继承自 VariableSaveData 的写出能力

- `void SaveTo(IWriter writer)`：把本条元素写成字节（类型标记 + 成员 id + 值）。**何时调用：** [ContainerSaveData](../ContainerSaveData) 的 `SaveTo`。
- `int GetDataSize()`：估算本条体积。**何时调用：** [ContainerSaveData](../ContainerSaveData) 的 `GetDataSize` 统计。

## 最小真实示例

`ElementSaveData` 由 [ContainerSaveData](../ContainerSaveData) 在保存阶段创建。根对象通常是 `Campaign.Current`：

```csharp
// 保存阶段，ContainerSaveData 遍历 Campaign.Current 上的容器，为每个元素建 ElementSaveData：
for (int i = 0; i < Campaign.Current.TroopRoster.Count; i++)
{
    ElementSaveData element = new ElementSaveData(containerSaveData, Campaign.Current.TroopRoster[i], i);
    element.SaveTo(binaryWriter);   // 写出该元素（继承自 VariableSaveData.SaveTo）
}
```

注意：模组不直接构造 `ElementSaveData`；要让容器元素正确序列化，正确做法是保证元素类型在 [SaveableTypeDefiner](../SaveableTypeDefiner) 中登记，并用 [SaveableFieldAttribute](../SaveableFieldAttribute) 标注容器字段。

## 导航块

- 父级：[ContainerSaveData](../ContainerSaveData)
- 同级：[ElementLoadData](../ElementLoadData) · [ContainerSaveData](../ContainerSaveData)
- 相关：[DefinitionContext](../DefinitionContext) · [SaveableTypeDefiner](../SaveableTypeDefiner) · [SaveableFieldAttribute](../SaveableFieldAttribute) · [Campaign.Current 来源说明](../../../architecture/save-system)
