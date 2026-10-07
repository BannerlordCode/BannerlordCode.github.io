---
title: "MemberSaveData"
description: "字段与属性槽位的抽象基类：只做一件事——把「某个成员从目标对象上读到什么」这件事的两种问法抽象出来。"
---

# MemberSaveData

**Namespace:** `TaleWorlds.SaveSystem.Save`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `internal abstract class MemberSaveData : VariableSaveData`
**Base:** `VariableSaveData`
**File:** `TaleWorlds.SaveSystem.Save/MemberSaveData.cs`

## 概述

一个对象落盘时，它的每个可保存成员都要变成一个「槽位」，每个槽位要知道三件事：从目标对象上**怎么取值**、这个成员的类型身份是什么、值该按哪条路线写进字节流。[FieldSaveData](../FieldSaveData) 与 [PropertySaveData](../PropertySaveData) 各回答一套反射 API（`FieldInfo.GetValue` / `MethodInfo.Invoke`），但它们必须遵守**完全一致的两段式协议**。`MemberSaveData` 就是承载这个协议的抽象基类：声明两个抽象方法 `Initialize` 与 `InitializeAsCustomStruct`，并持有 `ObjectSaveData` 以便取到 `Context` 和 `Target`。它在 [ObjectSaveData](../ObjectSaveData) 的 `CollectMembers` 里被逐个构造（`ObjectSaveData.cs:93` 属性、`:102` 字段）。

## 心智模型

把它想成**取数员的两种手势**：正常取值是「伸手去拿」（`Initialize`），而结构体成员是「不伸手，只报一个存放位置」（`InitializeAsCustomStruct`）。为什么要有第二种手势？因为值类型结构体在存档里不是内联数据，而是**另一个独立的存档对象**，成员里只放它的编号。推论有三条：

1. **它同时也是 `VariableSaveData`，不是组合而是继承。** `MemberSaveData` 直接继承 `VariableSaveData`（`:5`），所以每个成员槽位天生就有 `MemberType` / `Value` / `MemberSaveId` / `TypeDefinition` 四个字段和 `SaveTo` / `GetDataSize` 两个行为。它自己只加了 `ObjectSaveData` 一个引用与两个抽象声明——**整个类只有 8 行有效代码**。
2. **`ObjectSaveData` 是它取值的唯一通道。** 子类的 `Initialize` 里写的是 `FieldDefinition.GetValue(base.ObjectSaveData.Target)`（`FieldSaveData.cs:19`）——先经 `MemberSaveData` 拿回宿主，再从宿主上读字段。所以**成员槽位不能独立存在**，它必须和「正在被保存的那个对象」绑定。
3. **两个抽象方法的差别是「值从哪来」，不是「值是什么类型」。** `Initialize(TypeDefinitionBase typeDefinition)` 收一个定义去填槽位；`InitializeAsCustomStruct(int structId)` 收一个编号，槽位的标签由调用方固定成 `CustomStruct`。**后者完全不做反射取值**——值早就在别处被序列化过了。
4. **选哪个手势只看一条判断。** [ObjectSaveData](../ObjectSaveData) 在 `ObjectSaveData.cs:108-116` 拿成员的 `GetMemberType()` 去查定义，**只要定义存在且 `IsClassDefinition == false`（即结构体定义），就走 `InitializeAsCustomStruct(_childStructs[memberDefinition].ObjectId)`（`:111`）；否则走 `Initialize(typeDefinition)`（`:115`）**。所以「这个字段算不算结构体」完全由它的**声明类型**决定。

## 如何使用

### 怎么拿到它

**mod 拿不到。** 它是 `internal abstract`，唯二的实现 [FieldSaveData](../FieldSaveData) 与 [PropertySaveData](../PropertySaveData) 同样 `internal`。要观察它的行为，看 [ObjectSaveData](../ObjectSaveData) 的 `CollectMembers`（`:82` 起）即可——那里逐个 `new PropertySaveData(this, propertyDefinition, id)` / `new FieldSaveData(this, fieldDefinition, id2)`。**要影响结果，改的是 Attribute 上的 `LocalSaveId` 或属性的 getter，不是这个类。**

### 最小可运行片段

```csharp
// MemberSaveData 是 internal abstract，mod 侧看不到它；
// 这里演示的是它协议的可观察部分：一个成员槽位同时带着成员身份与类型身份

using TaleWorlds.SaveSystem.Definition;

// 成员身份（两级编号）与类型身份（SaveId）是两套独立的东西
MemberTypeId memberId = new MemberTypeId(1, 3);
Debug.Print("成员身份 = " + memberId + "，打包键 = " + memberId.SaveId, 0);   // "(1,3)" / 259
Debug.Print("类型身份 = " + new TypeSaveId(330001).GetStringId(), 0);           // "330001"

// 结构体成员的两段式：值不在槽位里，槽位只报位置
Debug.Print("CustomStruct 标签序号 = " + (int)SavedMemberType.CustomStruct, 0);   // 4
```

### 用它最容易踩的一条

**属性成员必须同时有 getter 和 setter，否则整个存档定义上下文的构建会抛异常——不是保存时，是启动时。** [PropertyDefinition](../PropertyDefinition) 的构造器在拿不到 setter 时先 `Debug.FailedAssert` 再 `throw new Exception("Property ... does not have setter method.")`（`PropertyDefinition.cs:33-37`）。也就是说给一个**只读**属性打上 [SaveablePropertyAttribute](../SaveablePropertyAttribute)，会让 `SaveManager.InitializeGlobalDefinitionContext()` 在收集定义时直接炸掉，整局游戏起不来。`MemberSaveData` 这侧只读不写，但 setter 是读档侧填值的前提，所以约束落在定义层。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `ObjectSaveData` | `public ObjectSaveData ObjectSaveData { get; private set; }` | 宿主对象（以及它的 `Context` 与 `Target`）的引用，构造器里由 `base(objectSaveData.Context)` 之后赋值（`:9-13`）。**这是成员槽位与对象槽位的连接点**：子类的取值、基类的字符串/对象编号查找都经它走。 |
| `Initialize` | `public abstract void Initialize(TypeDefinitionBase typeDefinition)` | 正常取值路径。子类读 `FieldDefinition` / `PropertyDefinition` 的反射信息从 `ObjectSaveData.Target` 上取值，再调基类的 `InitializeData(SaveId, 声明类型, typeDefinition, value)`。`typeDefinition` 由调用方（[ObjectSaveData](../ObjectSaveData)）传入，槽位自己不查。分派点在 `ObjectSaveData.cs:115`。 |
| `InitializeAsCustomStruct` | `public abstract void InitializeAsCustomStruct(int structId)` | 结构体成员路径，由 `ObjectSaveData.cs:111` 触发。子类只调 `InitializeDataAsCustomStruct(SaveId, structId, base.TypeDefinition)`——注意它用的是**成员自己的 `SaveId`** 而不是 `Invalid`，这是读档侧能把结构体值填回正确成员的唯一依据。**不做任何反射取值。** |
| 构造器 | `protected MemberSaveData(ObjectSaveData objectSaveData) : base(objectSaveData.Context)` | 唯一构造器，`protected` 且强制子类传入宿主（`:9-13`）。基类构造器只存 `Context`，不校验宿主非空——**传 null 会在后续 `ObjectSaveData.Target` 处炸**。 |
| 类型身份 | `internal abstract class MemberSaveData : VariableSaveData` | `internal abstract`，**唯二实现是 [FieldSaveData](../FieldSaveData) 与 [PropertySaveData](../PropertySaveData)**。继承而非组合，所以槽位的序列化行为直接来自 [VariableSaveData](../VariableSaveData)，标签语义见 [SavedMemberType](../SavedMemberType)。 |

## 真实示例

分派点决定用哪个手势（`TaleWorlds.SaveSystem.Save/ObjectSaveData.cs:106-116`）：

```csharp
Type memberType = memberDefinition.GetMemberType();
TypeDefinitionBase typeDefinition = Context.DefinitionContext.GetTypeDefinition(memberType);
if (typeDefinition is TypeDefinition { IsClassDefinition: false })
{
    ObjectSaveData objectSaveData = _childStructs[memberDefinition];
    memberSaveData.InitializeAsCustomStruct(objectSaveData.ObjectId);   // :111 结构体：只报位置
}
else
{
    memberSaveData.Initialize(typeDefinition);                          // :115 其余：伸手去拿
}
```

抽象声明本身（`TaleWorlds.SaveSystem.Save/MemberSaveData.cs:5-18`，全文去掉注释后就这么长）：

```csharp
internal abstract class MemberSaveData : VariableSaveData
{
    public ObjectSaveData ObjectSaveData { get; private set; }

    protected MemberSaveData(ObjectSaveData objectSaveData)
        : base(objectSaveData.Context)
    {
        ObjectSaveData = objectSaveData;
    }

    public abstract void Initialize(TypeDefinitionBase typeDefinition);

    public abstract void InitializeAsCustomStruct(int structId);
}
```

两个子类把两个抽象方法填成同一形状（`TaleWorlds.SaveSystem.Save/FieldSaveData.cs:19-29`）：

```csharp
public override void Initialize(TypeDefinitionBase typeDefinition)
{
    object value = FieldDefinition.GetValue(base.ObjectSaveData.Target);   // 伸手去拿
    Type fieldType = FieldDefinition.FieldInfo.FieldType;                // 按声明类型，不按运行时类型
    InitializeData(SaveId, fieldType, typeDefinition, value);
}

public override void InitializeAsCustomStruct(int structId)
{
    InitializeDataAsCustomStruct(SaveId, structId, base.TypeDefinition);  // 只报位置
}
```

mod 视角的对照实验——两种手势产出两种标签：

```csharp
// [SaveableField(4)] private Settlement Town;   → Initialize(...)         → Object 标签，写对象 id
// [SaveableField(5)] private KeyValuePair<K,V> P; → InitializeAsCustomStruct(n) → CustomStruct 标签，写结构体编号
Debug.Print("同一个类里两种成员写法，落盘标签不同：Object=0 / CustomStruct=4", 0);
Debug.Print("结构体成员的值不在槽位里，槽位只装编号 —— 这是存档变大的常见来源。", 0);
```

## 依赖关系

- 基类：[VariableSaveData](../VariableSaveData)（提供 `InitializeData` / `InitializeDataAsCustomStruct` / `SaveTo` / `GetDataSize`）
- 两个实现：[FieldSaveData](../FieldSaveData) 与 [PropertySaveData](../PropertySaveData)（各带一个反射取值来源）
- 宿主：[ObjectSaveData](../ObjectSaveData)（`CollectMembers` 在 `:82` 起逐个构造槽位）
- 定义侧：[FieldDefinition](../FieldDefinition) / [PropertyDefinition](../PropertyDefinition)（提供 `GetValue` 与成员类型）；字段侧强制有 setter 的约束在 `PropertyDefinition.cs:33-37`
- 成员身份：[MemberTypeId](../MemberTypeId)（结构体成员必须带真实 `SaveId`，与容器元素的 `Invalid` 相反）
- 标签语义：[SavedMemberType](../SavedMemberType)
- 容器侧的平行类：[ElementSaveData](../ElementSaveData)（不需要成员身份）
- 体系全貌：../../../architecture/save-system
