---
title: "VariableSaveData"
description: "每一个存档槽位的基类：六条互斥分支决定一个值按哪种路线落字节，第一字节永远是 SavedMemberType 标签。"
---

# VariableSaveData

**Namespace:** `TaleWorlds.SaveSystem.Save`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `internal abstract class VariableSaveData`
**Base:** 无
**File:** `TaleWorlds.SaveSystem.Save/VariableSaveData.cs`

## 概述

存档里每个「槽位」——[FieldSaveData](../FieldSaveData) / [PropertySaveData](../PropertySaveData) / [ElementSaveData](../ElementSaveData) 的共同基类。它做两件事：**判定值按哪条路线落盘**（`InitializeData` 的六条分支），**把这条路线对应的字节写出去**（`SaveTo`）并提前算好字节预算（`GetDataSize`）。判定结果存在 [SavedMemberType](../SavedMemberType) `MemberType` 里，而它就是这个槽位写出的**第一个字节**（`:94`）。整个类只有 149 行，却决定了一个存档文件里除对象头与字符串表以外的每一字节。

## 心智模型

把它想成**打包工位的六种打包方式**，外加一个「空箱」特例。推论有四条：

1. **第一条字节是路由号，读侧全靠它。** `SaveTo` 第一句 `writer.WriteByte((byte)MemberType);`（`:94`），紧跟两字节成员身份（`:95-96`）。所以**重排 [SavedMemberType](../SavedMemberType) 的成员顺序等于毁掉所有旧档**——它不是内部实现细节，是线上格式。
2. **判定用的是声明类型，不是运行时类型。** 六条分支的条件里，`typeof(string) == memberType`（`:54`）用的是传进来的 `memberType` 形参，而它由子类从 [FieldDefinition](../FieldDefinition) / [PropertyDefinition](../PropertyDefinition) 取的是**字段/属性上写的类型**。所以一个 `object` 字段装什么都按 `object` 的规则走。
3. **三条分支的「找不到定义」行为不同。** 对象分支特意允许「无定义但声明类型是接口」通过（`:59`）；枚举与基础类型分支则**在 `SaveTo` 里把类型身份内联写出去**（`:112`、`:117`），因此它们是自描述的，改了字段类型也能自我纠正。而 `:84-88` 那个 `FailedAssert` 只在 `TypeDefinition == null && !memberType.IsInterface` 时触发——**接口字段走错路不会有任何提示**。
4. **基础类型那条分支会在写盘时二次查表。** `SaveTo` 里 `Context.DefinitionContext.TryGetTypeDefinition(TypeDefinition.SaveId) == null` 就 `Debug.FailedAssert`（`:118-120`），然后无条件 `((BasicTypeDefinition)TypeDefinition).Serializer.Serialize(writer, Value)`（`:122`）。**断言之后没有 return**，所以定义真的缺失时紧接着就是一次 `NullReferenceException`，不是一个干净的失败。

## 如何使用

### 怎么拿到它

**mod 拿不到。** `internal abstract`，构造器 `protected VariableSaveData(ISaveContext context)`（`:19`）。唯一实例化点是同命名空间的三条路径：字段槽位、属性槽位（都经 [MemberSaveData](../MemberSaveData)）、容器元素槽位（[ElementSaveData](../ElementSaveData)）。要改变落盘结果，改的是**字段的声明类型**或**是否给它补一个类型定义**，而不是这个类。

### 最小可运行片段

```csharp
// VariableSaveData 是 internal；这里演示它的判定与字节预算规则
// 固定开销 = 4 字节（1 标签 + 1 层级 + 2 局部号），GetDataSize 起手就是 4（:130-132）

// Object / Container / String / CustomStruct 四条各再加 4 字节（:133-135）
Debug.Print("字符串槽位固定 8 字节，与字符串长短无关", 0);        // 长度进字符串表

// Enum 还要加上内联的类型身份 + 值名字的字节（:137-139）
// BasicType 还要加上内联类型身份 + 序列化器预算（:141-145）
Debug.Print("Enum 与 BasicType 是仅有的两条自描述路线，字节随值变化", 0);
```

### 用它最容易踩的一条

**把字段的声明类型从具体类改成 `object`（或反过来），存档路线会静默换掉。** `FieldSaveData.Initialize` 传的是 `FieldDefinition.FieldInfo.FieldType`（`FieldSaveData.cs:22`），不是 `value.GetType()`。改成 `object` 后：运行时类型若查得到定义，走对象分支、看着正常；**查不到定义时 `object` 也不是接口，于是落到最后的兜底分支**（`:79-81`），把真实值当结构体数据原样写出，读档侧按错误形状解析。唯一的提示是 `:86-88` 的 `Debug.FailedAssert`，而它在接口字段上根本不触发。**字段声明类型一旦发布就是存档协议的一部分。**

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `Context` | `public ISaveContext Context { get; private set; }` | 保存上下文（`:20`）。三条分支都经它换编号：容器走 `GetContainerId`（`:49`）、对象走 `GetObjectId`（`:64`）、字符串在 `SaveTo` 里走 `GetStringId`（`:107`）。**`GetObjectId` 未命中会返回 0（根对象编号）**，这是本类最隐蔽的失败模式。 |
| `MemberType` | `public SavedMemberType MemberType { get; private set; }` | 路线标签，落盘第一字节（`:94`）。见 [SavedMemberType](../SavedMemberType)。`Value` 的含义随它变，读它之前必须先看它。 |
| `Value` | `public object Value { get; private set; }` | **装箱的载荷**，语义随 `MemberType` 变：Object/Container/CustomStruct 是 int 编号、String 是字符串本体、Enum 是值本体、BasicType 是值本体。CustomStruct 分支里它是「结构体在对象表里的编号」（`:35`）。 |
| `MemberSaveId` | `public MemberTypeId MemberSaveId { get; private set; }` | 槽位的成员身份，落盘拆成 1 字节层级 + 2 字节局部号（`:95-96`）。字段与属性带真实身份；**容器元素一律是 `MemberTypeId.Invalid`**（见 [ElementSaveData](../ElementSaveData)）。 |
| `TypeDefinition` | `public TypeDefinitionBase TypeDefinition { get; private set; }` | 槽位值的类型定义。Enum 与 BasicType 分支靠它写内联身份并取序列化器；CustomStruct 分支在 `InitializeDataAsCustomStruct` 里也存它（`:36`）。 |
| `InitializeDataAsNullObject` | `protected void InitializeDataAsNullObject(MemberTypeId memberSaveId)` | `:24-29`。空槽位特例：标签设 `Object`、`Value` 设 -1（`:27-28`）。**null 在存档里就是「Object 标签 + -1」**，不是零值。 |
| `InitializeDataAsCustomStruct` | `protected void InitializeDataAsCustomStruct(MemberTypeId memberSaveId, int structId, TypeDefinitionBase typeDefinition)` | `:31-37`。标签设 `CustomStruct`（`:34`）、`Value` 设为传入的 `structId`（`:35`）、`TypeDefinition` 存下（`:36`）。**第二个参数是「结构体在对象表里的编号」**，字段传的是 `_childStructs[...].ObjectId`。 |
| `InitializeData` | `protected void InitializeData(MemberTypeId memberSaveId, Type memberType, TypeDefinitionBase definition, object data)` | `:39-90`。六分支判定的主入口：容器（`:44`，编号在 `:49`）、字符串（`:54`）、对象/接口（`:59`，编号在 `:64`）、枚举（`:69`）、基础类型（`:74`）、兜底 CustomStruct（`:79-81`）。结尾 `:84-88` 在「无定义且非接口」时打印并断言。 |
| `SaveTo` | `public void SaveTo(IWriter writer)` | `:92-128`。写 1 字节标签（`:94`）+ 2 字节成员身份（`:95-96`），再按标签写值：Object/Container 各 4 字节（`:97-103`）、String 先 `Context.GetStringId` 再写（`:105-108`）、Enum 写内联身份 + 值字符串（`:110-114`）、BasicType 写内联身份 + 断言 + 序列化（`:115-123`）、CustomStruct 写 4 字节编号（`:124-127`）。 |
| `GetDataSize` | `public int GetDataSize()` | `:130-148`。起手 4 字节（`:132`）。Object/Container/String/CustomStruct 各加 4（`:133-135`）；Enum 加 `TypeDefinition.SaveId.GetSizeInBytes()` 加值名字节（`:137-139`，用 [SaveContext](../SaveContext) 的静态 `GetStringSizeInBytes`）；BasicType 加身份字节（`:143`）加序列化器预算（`:145`）。**这是并行开缓冲区的前提，所以必须与 `SaveTo` 实际写出的字节严格一致。** |

## 真实示例

六条分支的完整判定链（`TaleWorlds.SaveSystem.Save/VariableSaveData.cs:44-82`）：

```csharp
if (TypeDefinition is ContainerDefinition)                                  // 容器 → 写容器编号
{
    int num = -1;
    if (data != null) { num = Context.GetContainerId(data); }
    MemberType = SavedMemberType.Container;
    Value = num;
}
else if (typeof(string) == memberType)                                     // 按声明类型判字符串
{
    MemberType = SavedMemberType.String;
    Value = data;
}
else if ((typeDefinition != null && typeDefinition.IsClassDefinition)
      || TypeDefinition is InterfaceDefinition
      || (TypeDefinition == null && memberType.IsInterface))                // 无定义但声明类型是接口也放行
{
    int num2 = -1;
    if (data != null) { num2 = Context.GetObjectId(data); }                 // 未命中会返回 0（根对象）
    MemberType = SavedMemberType.Object;
    Value = num2;
}
else if (TypeDefinition is EnumDefinition) { MemberType = SavedMemberType.Enum;     Value = data; }
else if (TypeDefinition is BasicTypeDefinition) { MemberType = SavedMemberType.BasicType; Value = data; }
else { MemberType = SavedMemberType.CustomStruct; Value = data; }           // 兜底
```

基础类型分支的「断言但不 return」（`VariableSaveData.cs:115-123`）：

```csharp
else if (MemberType == SavedMemberType.BasicType)
{
    TypeDefinition.SaveId.WriteTo(writer);
    if (Context.DefinitionContext.TryGetTypeDefinition(TypeDefinition.SaveId) == null)
    {
        Debug.FailedAssert("Basic type definition cant be found: " + TypeDefinition.SaveId.GetStringId(), ..., "SaveTo", 132);
    }
    ((BasicTypeDefinition)TypeDefinition).Serializer.Serialize(writer, Value);   // 断言之后照常执行
}
```

mod 视角的对照实验——字节预算与实际长度脱钩：

```csharp
// string 字段：槽位本身恒定 8 字节（4 固定 + 4 字符串表编号）
// 真实文本长度只影响字符串表那一段，不影响槽位
Debug.Print("换更长的字符串不会让槽位变大，只会让 strings 段变大", 0);

// Enum / BasicType：槽位长度随值的文本长度或序列化器变化
// GetDataSize 必须与 SaveTo 严格一致，否则并行写盘时缓冲区会算小
Debug.Print("GetDataSize 与 SaveTo 不一致 = 缓冲区越界，不是报错而是静默损坏", 0);
```

## 依赖关系

- 三个子类：[MemberSaveData](../MemberSaveData)（字段/属性的抽象层）→ [FieldSaveData](../FieldSaveData)、[PropertySaveData](../PropertySaveData)；以及容器侧的 [ElementSaveData](../ElementSaveData)
- 标签：[SavedMemberType](../SavedMemberType)（序号即线上字节，`Tuple` 是写读两侧都不使用的保留槽位）
- 成员身份：[MemberTypeId](../MemberTypeId)（字段/属性用真实值，元素用 `Invalid`）
- 类型身份：[SaveId](../SaveId)、[TypeDefinition](../TypeDefinition)、[TypeDefinitionBase](../TypeDefinitionBase)、[EnumDefinition](../EnumDefinition)、[BasicTypeDefinition](../BasicTypeDefinition)、[ContainerDefinition](../ContainerDefinition)、[InterfaceDefinition](../InterfaceDefinition)
- 编号来源：[ISaveContext](../ISaveContext) 的 `GetObjectId` / `GetContainerId` / `GetStringId`，实现在 [SaveContext](../SaveContext)（**`GetObjectId` 未命中返回 0**）
- 字节预算辅助：[SaveContext](../SaveContext) 的静态 `GetStringSizeInBytes`
- 读侧镜像：[VariableLoadData](../VariableLoadData)（同一组标签的六条反序列化分支）
- 体系全貌：../../../architecture/save-system