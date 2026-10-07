---
title: "StructDefinition"
description: "结构体类型的存档定义：与类定义同源，靠 IsClassDefinition 为假被区分出来，因此它是所有结构体成员被升级成独立存档条目的判定依据。"
---

# StructDefinition

**Namespace:** `TaleWorlds.SaveSystem.Definition`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `internal class StructDefinition : TypeDefinition`
**Base:** `TypeDefinition`
**File:** `TaleWorlds.SaveSystem.Definition/StructDefinition.cs`

## 概述

结构体在存档里不是内联数据，而是**独立的存档条目**：成员的类型定义如果是结构体，[ObjectSaveData](../ObjectSaveData) 的 `CollectStructs` 会给它建一个 `isClass: false` 的子单（`ObjectSaveData.cs:161-167`），成员槽位里只放那个子单的编号。本类就是这个「结构体定义」的类型——它继承 [TypeDefinition](../TypeDefinition)，**自己一行逻辑都没有**，只提供两个构造器：`(Type, int)` 与 `(Type, int, IObjectResolver)`。整个类 17 行。但**「它是结构体」这件事完全靠继承关系表达**：`TypeDefinition.IsClassDefinition` 在构造时取 `base.Type.IsClass`（`TypeDefinition.cs:48`），结构体为假、类为真，而保存与读档两侧的全部结构体判定都写成了 `is TypeDefinition { IsClassDefinition: false }`。

## 心智模型

把它想成**同一个登记簿上的「盒子」标签**：盒子里装的东西和普通物件（类）一样要登记成员，但**它不是原件**——原件躺在别的条目里，标签只负责说明「这一格指向哪个盒子」。推论有三条：

1. **区分靠继承，不靠类型。** `StructDefinition` 是 `TypeDefinition` 的子类，而 `IsClassDefinition` 是基类构造时用 `Type.IsClass` 算出来的（`TypeDefinition.cs:48`）。所以 `StructDefinition` 实例的 `IsClassDefinition` **必然是 false**——**这不是它自己声明的，而是它所代表的运行时类型决定的**。任何人手写一个 `StructDefinition` 去代表一个类，那个类的定义就会带着 `IsClassDefinition == true` 出现在结构体判定里。
2. **`AddStructDefinition` 收的是 `int`。** 两个构造器都接 `int saveId`，第二个多一个 `IObjectResolver`（`:13-16`）——**所以结构体定义也支持改名/替换对象的 resolver**，机制与类定义相同（都存在基类的 `_objectResolver`，由 `ResolveObject` / `AdvancedResolveObject` 使用）。
3. **结构体成员不带自己的成员身份。** [ElementSaveData](../ElementSaveData) 对结构体元素传的是 `MemberTypeId.Invalid`（`:24`），而字段/属性成员是带真实 `SaveId` 的（[FieldSaveData](../FieldSaveData) 的 `:28`）。**所以「按成员编号取值」这个能力对结构体元素不成立**——容器里的结构体只能靠下标定位。

## 如何使用

### 怎么拿到它

**mod 拿不到类型（`internal`）。** 两个入口：

- 定义阶段：[SaveableTypeDefiner](../SaveableTypeDefiner) 的 `DefineStructTypes()` 里 `AddStructDefinition(typeof(MyStruct), saveId)` 或带 resolver 的重载。
- 取定义：`DefinitionContext.GetStructDefinition(Type)`（`DefinitionContext.cs:475`）——**它与查类的那个方法是分开的**，且它**只接受结构体定义**：内部先查 `_genericStructDefinitions` 再查 `_structDefinitions`。

`SaveableBasicTypeDefiner` 登记的 `Nullable<>`、`KeyValuePair<,>`、`ValueTuple<,>` 都是这个形状（分别在第 61、65、70 行）。

### 最小可运行片段

```csharp
using TaleWorlds.SaveSystem.Definition;

// 定义（写在自定义 definer 内）：
// AddStructDefinition(typeof(MyStruct), 702);            // 无 resolver
// AddStructDefinition(typeof(MyStruct), 702, resolver);   // 带 IObjectResolver

// 取定义走独立入口（不查 GetClassDefinition）
// StructDefinition def = definitionContext.GetStructDefinition(typeof(MyStruct));

// 结构体的存档形状：由继承关系决定，不是自己声明的
//   TypeDefinition.IsClassDefinition => base.Type.IsClass   TypeDefinition.cs:48
//   MyStruct  → IsClass false → 走「结构体」分支
//   MyClass   → IsClass true  → 走「类」分支
Debug.Print("IsClassDefinition 是从运行时类型算的，不是 StructDefinition 自己声明的", 0);
Debug.Print("容器里的结构体元素用 MemberTypeId.Invalid —— 按编号取值对它不成立", 0);
```

### 用它最容易踩的一条

**结构体成员会让存档体积变大，而且大得比预期多。** 一个 `List<MyStruct>` 会同时产生**容器条目 + n 个结构体条目**——因为槽位里只放下标，数据另存。而且读档侧是**并行**填充的（[LoadContext](../LoadContext) 的 `Load Container Datas` 阶段），所以结构体成员的字段值在读档过程中有一段时间是未填的。**如果你在 mod 里发现存档异常膨胀、或结构体字段读出来偶发是默认值，先查这里。** 另外容器里那些**重复的默认结构体元素**会被写侧 `ShouldSaveStruct` 合并成一份、读侧再补默认值（[ContainerSaveData](../ContainerSaveData)、[ContainerLoadData](../ContainerLoadData)），这也是「第一个元素有数据、后面全是默认值」这个零报错症状的来源。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| 构造器 A | `public StructDefinition(Type type, int saveId) : this(type, saveId, null)` | `:8-11`。无 resolver 版本，委托给 B 并把 resolver 置 null。**只接受 `int`**——这是 [SaveableTypeDefiner](../SaveableTypeDefiner) helper 的形状。 |
| 构造器 B | `public StructDefinition(Type type, int saveId, IObjectResolver objectResolver) : base(type, saveId, objectResolver)` | `:13-16`。主构造器，resolver 交给基类。基类里它存进 `_objectResolver`（`TypeDefinition.cs:56`），由 `ResolveObject`（`:73-79`）与 `AdvancedResolveObject`（`:82-88`）在**读档期**使用。 |
| 类型身份 | `internal class StructDefinition : TypeDefinition` | `internal`。**本类不声明任何成员**，结构体身份完全来自继承：`TypeDefinition` 提供 `MemberDefinitions` / `PropertyDefinitions` / `FieldDefinitions` / `CustomFields` / 回调集合，以及那个决定分支走向的 `IsClassDefinition`。 |

## 真实示例

全文（`TaleWorlds.SaveSystem.Definition/StructDefinition.cs:6-17`，去掉空行）：

```csharp
internal class StructDefinition : TypeDefinition
{
    public StructDefinition(Type type, int saveId)
        : this(type, saveId, null)
    {
    }

    public StructDefinition(Type type, int saveId, IObjectResolver objectResolver)
        : base(type, saveId, objectResolver)
    {
    }
}
```

「是结构体」这个判定在写侧怎么用（`TaleWorlds.SaveSystem.Save/ObjectSaveData.cs:108-116`）：

```csharp
TypeDefinitionBase typeDefinition = Context.DefinitionContext.GetTypeDefinition(memberType);
if (typeDefinition is TypeDefinition { IsClassDefinition: false })     // ← 结构体
{
    ObjectSaveData objectSaveData = _childStructs[memberDefinition];
    memberSaveData.InitializeAsCustomStruct(objectSaveData.ObjectId);   // 槽位只装这个编号
}
else
{
    memberSaveData.Initialize(typeDefinition);                          // 类：反射取值，原地落盘
}
```

容器侧同一判定（`TaleWorlds.SaveSystem.Save/ElementSaveData.cs:21-25`）：

```csharp
TypeDefinitionBase typeDefinition = containerSaveData.Context.DefinitionContext.GetTypeDefinition(value.GetType());
if (typeDefinition is TypeDefinition { IsClassDefinition: false })
{
    InitializeDataAsCustomStruct(MemberTypeId.Invalid, index, typeDefinition);   // Value = 元素下标
}
```

mod 视角的对照实验：

```csharp
// 同一个 LocalSaveId，结构体 vs 类：
//   字段是结构体 → CollectStructs 建独立子单 → 槽位标签 CustomStruct，写的是编号
//   字段是类     → Initialize 直接反射取值 → 槽位标签 Object，写的是对象表编号
// 所以「把结构体字段改成类字段」不只是类型变了：存档里那条记录的语义与体积都变了。

// 另外：GetStructDefinition 与 GetClassDefinition 是两个方法（DefinitionContext.cs:475 / :314），
// 写错了会拿到 null，而 null 在下游多数地方是静默降级而不是报错。
Debug.Print("结构体 vs 类：判定靠 IsClassDefinition，写侧与读侧各有一处相同形状的分支", 0);
```

## 依赖关系

- 基类：[TypeDefinition](../TypeDefinition)（提供全部成员信息与 `IsClassDefinition`；后者由 `TypeDefinition.cs:48` 的 `Type.IsClass` 决定）
- 身份来源：[TypeDefinitionBase](../TypeDefinitionBase)（`Type` / `SaveId` / `TypeLevel`）
- 与之平行的定义：[InterfaceDefinition](../InterfaceDefinition)、[EnumDefinition](../EnumDefinition)、[GenericTypeDefinition](../GenericTypeDefinition)
- 取定义与登记：[DefinitionContext](../DefinitionContext) 的 `GetStructDefinition`（`:475`）、`AddStructDefinition`；阶段是 `FillWithCurrentTypes` 的 `DefineStructTypes`（`:208`）
- 写侧判定点：[ObjectSaveData](../ObjectSaveData) 的 `CollectStructs`（`:161`）与 `CollectMembers`（`:108`）、[ElementSaveData](../ElementSaveData) 的 `:22`
- 读侧判定点：[FieldLoadData](../FieldLoadData) 与 [PropertyLoadData](../PropertyLoadData) 之外的 [ObjectLoadData](../ObjectLoadData) `CreateStruct`（`:127`）、[VariableSaveData](../VariableSaveData) 的 `InitializeDataAsCustomStruct`（`:31-37`）
- 重复默认值的合并：[ContainerSaveData](../ContainerSaveData) 的 `ShouldSaveStruct` + [ContainerLoadData](../ContainerLoadData) 的 `GetDefaultObject`
- BCL 类型的登记范例：[SaveableBasicTypeDefiner](../SaveableBasicTypeDefiner)（`Nullable<>` / `KeyValuePair<,>` / `ValueTuple<,>`）
- 体系全貌：../../../architecture/save-system