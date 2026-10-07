---
title: "FieldSaveData"
description: "字段槽位：用 FieldInfo 或注入的委托从宿主对象取值，并按字段的声明类型决定落盘路线。"
---

# FieldSaveData

**Namespace:** `TaleWorlds.SaveSystem.Save`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `internal class FieldSaveData : MemberSaveData`
**Base:** `MemberSaveData`
**File:** `TaleWorlds.SaveSystem.Save/FieldSaveData.cs`

## 概述

宿主对象上的每一个 `[SaveableField(n)]` 字段在保存期变成一个 `FieldSaveData` 槽位。职责有两条：从宿主对象上把这个字段的当前值读出来；按**字段的声明类型**决定这个值该按哪条路线写进字节流（引用、容器、字符串、结构体、枚举还是基础类型）。取值这一步优先走 [FieldDefinition](../FieldDefinition) 里可能已被注入的编译委托，没有才回落到反射 `FieldInfo.GetValue`。生产者是 [ObjectSaveData](../ObjectSaveData) 的 `CollectMembers`（`TaleWorlds.SaveSystem.Save/ObjectSaveData.cs:102`）。它是 `internal`，与 [PropertySaveData](../PropertySaveData) 成对存在，唯一区别就是取值用的反射 API 不同。

## 心智模型

把它想成**从货架上取货并登记尺寸**：先按「这张标签贴在哪个格子上」找到值，再按「格子上原本写的是什么规格」决定打包方式。由此推出四条边界：

1. **按声明类型，不按运行时类型。** `Type fieldType = FieldDefinition.FieldInfo.FieldType;`（`:22`）取的是字段上写的类型。**这意味着一个 `object` 类型的字段，无论运行时装的是 `Hero` 还是 `int`，都会按 `object` 的规则落盘**——而 `object` 在存档里走「引用」路线（[VariableSaveData](../VariableSaveData) 的 `TypeDefinition` 为 null 且非接口时，最后兜底成 `CustomStruct`）。想在同一个字段里混装不同类型，存档做不到，得拆成多个字段或用自定义序列化。
2. **`object` 字段因此特别危险。** 声明类型是 `object` 时，若它的运行时类型查得到定义（`Hero` 有定义），判定会走 `TypeDefinition.IsClassDefinition` 分支写对象 id，看起来正常；但若运行时类型**没有定义**，`TypeDefinition` 为 null 且 `object` 不是接口，落到最后兜底分支（`VariableSaveData.cs:81-82`），把真实值当结构体数据写——读档侧按错误形状解析，**不报错，静默出错值**。同时 `InitializeData` 末尾会 `Debug.FailedAssert` 打印「Cant find definition for ...」（`:84-88`）。
3. **委托注入是性能优化，也是唯一的加速途径。** `FieldDefinition.GetValue` 里 `GetFieldValueMethod != null` 就走委托、否则才 `FieldInfo.GetValue(target)`（`FieldDefinition.cs:26-33`）。委托由 `InitializeForAutoGeneration(GetFieldValueDelegate)` 注入（`:35`）。**默认情况下每个字段每次保存都是一次反射调用**——大列表里成千上万个对象时这就是主要开销来源。
4. **结构体成员走另一条手势，但保留自己的 `SaveId`。** `InitializeAsCustomStruct(int structId)` 调的是 `InitializeDataAsCustomStruct(SaveId, structId, base.TypeDefinition)`（`:27`）——**用的是成员自己的 `SaveId` 而不是 `Invalid`**。这与容器元素正相反，也是读档侧能把结构体值填回正确字段的唯一依据。

## 如何使用

### 怎么拿到它

**mod 拿不到。** `internal` 类，构造器 `public` 但类型不可见，唯一调用者是 [ObjectSaveData](../ObjectSaveData)。要影响字段落盘行为，改的是**声明层**：

- [SaveableFieldAttribute](../SaveableFieldAttribute) 的 `LocalSaveId` —— 决定 `MemberTypeId` 的第二级；
- 字段的 C# 声明类型 —— 决定 `SavedMemberType` 标签；
- 要给第三方类型或无 Attribute 的私有字段登记，用 [SaveableTypeDefiner](../SaveableTypeDefiner) 的 helper 或 [CustomField](../CustomField)。

### 最小可运行片段

```csharp
using TaleWorlds.SaveSystem.Definition;

// 字段槽位的两段式协议是可观察的：
// 成员身份决定「填回哪个字段」，声明类型决定「按哪条路线写」
MemberTypeId fieldMember = new MemberTypeId(1, 3);        // TypeLevel=1，LocalSaveId=3
Debug.Print("成员身份 = " + fieldMember, 0);              // "(1,3)"

// 声明类型 → 标签的对照（标签序号见 SavedMemberType）
Debug.Print("int 字段     → BasicType(6)，走 IntBasicTypeSerializer", 0);
Debug.Print("string 字段  → String(2)，进字符串表", 0);
Debug.Print("List<int>    → Container(1)，写容器编号", 0);
Debug.Print("结构体字段    → CustomStruct(4)，写结构体编号而非内联数据", 0);
Debug.Print("object 字段   → 危险：按声明类型而非运行时类型判定", 0);
```

### 用它最容易踩的一条

**把字段的声明类型从具体类改成 `object`（或反过来），会让槽位的落盘路线静默换掉，旧档读回来是错的或空的。** 因为判定用的是 `FieldInfo.FieldType`（`:22`）而不是 `value.GetType()`。典型症状：保存不报错、读档不报错，但那个字段的值永远读不回来——`VariableSaveData` 只在 `TypeDefinition == null && !memberType.IsInterface` 时 `Debug.FailedAssert` 打一行提示（`:84-88`），而在开发版里这行提示很容易被刷屏冲掉。**字段类型一旦发布就是存档协议的一部分。**

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `FieldDefinition` | `public FieldDefinition FieldDefinition { get; private set; }` | 字段的反射定义。`Initialize` 用它的 `GetValue(Target)` 取值（`:19`），用它的 `FieldInfo.FieldType` 取声明类型（`:20`）。它自己内部优先用注入委托、无委托才反射（`FieldDefinition.cs:28-32`）。 |
| `SaveId` | `public MemberTypeId SaveId { get; private set; }` | 该字段的成员身份，构造器传入（`:16`）。**两条路径都会用它**：正常路线 `InitializeData(SaveId, ...)`（`:23`），结构体路线 `InitializeDataAsCustomStruct(SaveId, ...)`（`:28`）。落盘时拆成 1 字节层级 + 2 字节局部号写出。 |
| 构造器 | `public FieldSaveData(ObjectSaveData objectSaveData, FieldDefinition fieldDefinition, MemberTypeId saveId) : base(objectSaveData)` | 三个参数分别喂给基类（宿主）、本类（反射定义）、本类（成员身份）（`:12-17`）。**不做校验**：三者任一为 null 都能构造成功，异常推迟到 `Initialize` 里的 `FieldDefinition.FieldInfo` 解引用处。 |
| `Initialize` | `public override void Initialize(TypeDefinitionBase typeDefinition)` | 正常取值：`FieldDefinition.GetValue(base.ObjectSaveData.Target)`（`:21`）→ `InitializeData(SaveId, fieldType, typeDefinition, value)`（`:23`）。**注意走的是 `base.ObjectSaveData`**，即经基类的属性再回到宿主，跨过一次继承层。 |
| `InitializeAsCustomStruct` | `public override void InitializeAsCustomStruct(int structId)` | 结构体路线：`InitializeDataAsCustomStruct(SaveId, structId, base.TypeDefinition)`（`:28`）。**用 `base.TypeDefinition` 而不是形参**，因为这一路径不重新判定类型；标签与值由基类固定成 `CustomStruct` + `structId`。 |
| 类型身份 | `internal class FieldSaveData : MemberSaveData` | `internal`。字段与属性的分叉点只有取值方式与类型来源；序列化行为、标签语义、字节布局全部继承而来，因此**改字段落盘行为不可能只改这一个类**。 |

## 真实示例

两个方法的全文（`TaleWorlds.SaveSystem.Save/FieldSaveData.cs:19-29`）：

```csharp
public override void Initialize(TypeDefinitionBase typeDefinition)
{
    object value = FieldDefinition.GetValue(base.ObjectSaveData.Target);
    Type fieldType = FieldDefinition.FieldInfo.FieldType;   // 声明类型，不是 value.GetType()
    InitializeData(SaveId, fieldType, typeDefinition, value);
}

public override void InitializeAsCustomStruct(int structId)
{
    InitializeDataAsCustomStruct(SaveId, structId, base.TypeDefinition);
}
```

宿主的取值链条（`TaleWorlds.SaveSystem.Definition/FieldDefinition.cs:26-33`）——委托优先，反射兜底：

```csharp
public override object GetValue(object target)
{
    if (GetFieldValueMethod != null)
    {
        return GetFieldValueMethod(target);      // 生成的代码注入的编译委托
    }
    return FieldInfo.GetValue(target);           // 默认走反射
}
```

mod 视角的对照实验——同一个值，换声明类型就换路线：

```csharp
// class A { [SaveableField(1)] public Hero Hero;        [SaveableField(2)] public object Loose; }
// class B { [SaveableField(1)] public Hero Hero;        [SaveableField(2)] public Hero Typed; }

Debug.Print("字段 1 两条路径都按 Hero 定义判定 → Object 标签，写对象 id", 0);
Debug.Print("字段 2 的 object 声明会让判定退回兜底分支 → 旧档静默读不回来", 0);
Debug.Print("要混装就拆字段，不要用 object。", 0);
```

## 依赖关系

- 基类：[MemberSaveData](../MemberSaveData)（两段式协议 + 宿主引用）
- 反射定义：[FieldDefinition](../FieldDefinition)（`GetValue` 的委托/反射二选一）与 [MemberDefinition](../MemberDefinition)
- Attribute：[SaveableFieldAttribute](../SaveableFieldAttribute)（`LocalSaveId` 的来源）
- 宿主与生产点：[ObjectSaveData](../ObjectSaveData) 的 `CollectMembers`（`:102` 构造本类）
- 标签与写盘：[VariableSaveData](../VariableSaveData) 的七分支判定，语义见 [SavedMemberType](../SavedMemberType)
- 成员身份：[MemberTypeId](../MemberTypeId)（字段保留真实 `SaveId`，与 [ElementSaveData](../ElementSaveData) 的 `Invalid` 形成对照）
- 平行实现：[PropertySaveData](../PropertySaveData)（同协议，反射 API 与「必须有无参可写」约束不同）
- 体系全貌：../../../architecture/save-system
