---
title: "VariableSaveData"
description: "保存侧「成员数据」的抽象基类：把成员当前值按 Object/Container/String/Enum/BasicType/CustomStruct 分类，记录类型标记与值，并提供写入字节流与估算体积的方法。"
---

# VariableSaveData

**命名空间：** `TaleWorlds.SaveSystem.Save`
**模块：** `TaleWorlds.SaveSystem`
**类型：** `internal abstract class VariableSaveData`
**基类/Base：** `System.Object`
**源文件路径/Source：** `TaleWorlds.SaveSystem/Save/VariableSaveData.cs`

## 一句话职责

在保存一个对象时，把某个成员的值识别成「对象引用 / 容器 / 字符串 / 枚举 / 基础类型 / 自定义 struct」之一，记录其类型标记与（或）存档 id，并负责把它写入字节流。

## 心智模型

`VariableSaveData` 是保存侧所有成员数据的抽象基类：`MemberSaveData`（进而 `PropertySaveData`、`FieldSaveData`）都继承自它。它处在保存管线的「最底层」——不关心成员是属性还是字段，只关心「这一笔值属于哪一类、怎么写」。当 [ObjectSaveData](../ObjectSaveData) 为某个对象的成员调用 `Initialize` 时，子类会读出现值并交给 `InitializeData(MemberTypeId, Type, TypeDefinitionBase, object)`：这个方法按 `TypeDefinition` 的类别把值分桶——若是 Container 则经 `Context.GetContainerId` 取编号、若是引用类型则经 `Context.GetObjectId` 取编号、字符串走 `Context.GetStringId`、枚举/基础类型直接保存、`CustomStruct` 记录 struct 编号；`Value` 对引用类型为内部 id（null 记为 `-1`），对值类型即实际值。随后 `SaveTo(IWriter)` 把「类型标记（一字节）+ 成员 `MemberTypeId`（TypeLevel + LocalSaveId）+ 值」写出，`GetDataSize()` 估算该笔数据的字节体积供 [GameData](../GameData) 分配段大小。它与加载侧的 `VariableLoadData` 完全对称：一边把对象登记成 id，一边把 id 还原成对象。它是 `internal`，由引擎在保存阶段构造，模组不应触及。

## 何时用 / 何时不要用

**理解层面使用：** 当你排查「为什么引用成员在存档里只是个数字 id」「为什么字符串占的是字符串表 id」「为什么某类型被存成 CustomStruct」，或阅读成员分桶与写流源码时。

**不要使用：**

- 不要在模组运行时 `new VariableSaveData(...)` 或其子类——它们都是 `internal`，由 `ObjectSaveData.CollectMembers` 在保存阶段按成员 schema 构造，构造参数是 `ISaveContext` / `ObjectSaveData`。
- 不要在加载阶段寻找 `VariableSaveData`——加载走 `VariableLoadData`，此时对象尚未重建。
- 不要在 [SaveableTypeDefiner](../SaveableTypeDefiner) 里访问它——类型的登记与成员分桶是两套职责，自定义序列化应走 Member Attribute 与 TypeDefiner。

## 依赖图

- 上游构造者：[ObjectSaveData](../ObjectSaveData) 在收集对象图时，为每个成员 `new` 出它的子类（如 `PropertySaveData`）。
- 编号分配：[SaveContext](../SaveContext) 的 `GetObjectId` / `GetContainerId` / `GetStringId` 支撑 `InitializeData` 把引用解析为 id。
- 类型 schema：[DefinitionContext](../DefinitionContext) 经 `TryGetTypeDefinition` 提供 `EnumDefinition` / `BasicTypeDefinition` 的序列化器。
- 字节写出：[ArchiveSerializer](../ArchiveSerializer) 体系及 `IWriter` 落盘；体积估算供 [GameData](../GameData)。
- 对称角色：加载侧对应 [VariableLoadData](../VariableLoadData)。

## 风险段

- **类型未登记只打断言不抛异常。** `InitializeData` 在 `TypeDefinition` 为 `null` 且成员类型不是接口时只 `Debug.Print` / `Debug.FailedAssert`，不会中断保存——表现为「成员悄悄丢失」。
- **引用为 null 时编号变 -1。** 若值为 `null` 且成员是 Object/Container，`Value` 记为 `-1`（表示空引用），加载侧还原成 `null`；若逻辑假定成员永不为 null 需留意。
- **基础类型定义缺失触发断言。** `SaveTo` 对 BasicType 会 `TryGetTypeDefinition` 并 `FailedAssert`「Basic type definition cant be found」——通常意味着基础类型序列化器漏登记。
- **在错误阶段访问。** 它仅存活于 `SaveManager.Save` 期间；加载回调或构造函数里读 `Context` / `Value` 毫无意义。

## 成员说明

### 状态与构造

- `public ISaveContext Context { get; private set; }`：保存上下文，凭此查类型定义、分配对象/容器/字符串 id。
- `public SavedMemberType MemberType { get; private set; }`：本成员被分桶后的类型（Object / Container / String / Enum / BasicType / CustomStruct）。
- `public object Value { get; private set; }`：写流值——引用类型为内部 id（null 记 `-1`），值类型即实际值。
- `public MemberTypeId MemberSaveId { get; private set; }`：成员在类型 schema 中的 id（`TypeLevel` + `LocalSaveId`）。
- `public TypeDefinitionBase TypeDefinition { get; private set; }`：分桶依据的类别定义（可能为 `null`，此时对非接口类型会告警）。
- `protected VariableSaveData(ISaveContext context)`：唯一构造函数（引擎内部调用）。保存 `context`。**何时调用**：子类（`PropertySaveData` 等）构造时经 `MemberSaveData` 链式上传。

### 分桶与写流

- `protected void InitializeData(MemberTypeId memberSaveId, Type memberType, TypeDefinitionBase definition, object data)`：核心分桶方法。**副作用**：设置 `MemberSaveId` / `TypeDefinition`，并依据 `ContainerDefinition` / 字符串 / 类或接口 / `EnumDefinition` / `BasicTypeDefinition` / 否则 `CustomStruct` 决定 `MemberType` 与 `Value`（引用取 `Context.GetObjectId/GetContainerId`，字符串暂存 `data`）。**何时调用**：子类 `Initialize` 读取成员现值后调用。
- `protected void InitializeDataAsNullObject(MemberTypeId memberSaveId)`：把成员标记为 null 对象引用。**副作用**：`MemberType = Object`，`Value = -1`。**何时调用**：子类判定成员为 null 对象时。
- `protected void InitializeDataAsCustomStruct(MemberTypeId memberSaveId, int structId, TypeDefinitionBase typeDefinition)`：把成员标记为自定义 struct。**副作用**：`MemberType = CustomStruct`，`Value = structId`，`TypeDefinition = typeDefinition`。**何时调用**：子类 `InitializeAsCustomStruct` 拿到 struct 编号后。
- `public void SaveTo(IWriter writer)`：把一笔成员数据写入字节流。**副作用**：先写一字节 `MemberType`、再写 `MemberSaveId` 的 `TypeLevel` 与 `LocalSaveId`；Object/Container 写 `Value` 整数，String 写 `Context.GetStringId`，Enum 写 `SaveId`+字符串，BasicType 写 `SaveId` 后经序列化器 `Serialize`，CustomStruct 写 `Value` 整数。**何时调用**：对象图收集完成后，由框架统一调度写流。
- `public int GetDataSize()`：估算本笔数据的字节体积。**副作用**：无；Object/Container/String/CustomStruct 计 8 字节，Enum 计 `SaveId` 大小 + 字符串大小，BasicType 计 `SaveId` 大小 + 序列化器大小，否则 4 字节。**何时调用**：[GameData](../GameData) 分配存档段大小时。

## 最小真实示例

`VariableSaveData` 是 `internal abstract`，由 `ObjectSaveData` 在保存阶段为对象的每个成员构造子类。下面复刻引擎内部的「取值—分桶—写流」核心；根对象通常是 `Campaign.Current`：

```csharp
// 保存阶段从根对象 Campaign.Current 出发，每个属性经 VariableSaveData 分类后写入
ObjectSaveData objectSaveData = new ObjectSaveData(context, objectId, Campaign.Current, isClass: true);
TypeDefinition classDef = context.DefinitionContext.GetClassDefinition(Campaign.Current.GetType());
PropertySaveData saveData = new PropertySaveData(objectSaveData, property, saveId);
saveData.Initialize(classDef);   // VariableSaveData.InitializeData 按类型分桶(Object/Container/String/...)
saveData.SaveTo(writer);         // VariableSaveData.SaveTo 写出类型标记、成员 id 与值
```

注意：模组不应自己 `new VariableSaveData`；要让成员正确参与分桶与写流，正确做法是写 [SaveableTypeDefiner](../SaveableTypeDefiner) 并确保类型已在 [DefinitionContext](../DefinitionContext) 登记。

## 导航块

- 父级：[存档系统 API 索引](../)
- 同级：[MemberSaveData](../MemberSaveData) · [PropertySaveData](../PropertySaveData) · [VariableLoadData](../VariableLoadData)
- 相关：[ObjectSaveData](../ObjectSaveData) · [SaveContext](../SaveContext) · [GameData](../GameData) · [DefinitionContext](../DefinitionContext) · [../../../architecture/save-system](../../../architecture/save-system)
