---
title: "TypeDefinitionBase"
description: "所有类型定义的最基类：持有类型、存档身份，以及那个决定成员编号层级的 TypeLevel——它是 GetClassLevel 沿基类链数出来的。"
---

# TypeDefinitionBase

**Namespace:** `TaleWorlds.SaveSystem.Definition`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `public class TypeDefinitionBase`
**Base:** 无
**File:** `TaleWorlds.SaveSystem.Definition/TypeDefinitionBase.cs`

## 概述

[DefinitionContext](../DefinitionContext) 的总表 `_allTypeDefinitions` / `_allTypeDefinitionsWithId` 里装的每一样东西——类定义、结构体定义、接口定义、枚举定义、基础类型定义、容器定义、泛型定义——都继承自本类。它只负责三件事：记住**这个定义对应哪个运行时类型**（`Type`）、记住**它在存档里的身份**（`SaveId`）、以及记住**这个类型在继承链上的深度**（`TypeLevel`）。整个类 34 行，其中一半是那个深度计算。**`TypeLevel` 是 [MemberTypeId](../MemberTypeId) 的第一个字段的来源**，所以这个类虽然小，却是「字段编号为什么分两层」这件事的答案所在。

## 心智模型

把它想成**每层楼都有一块门牌**：类型身份写清「这是几号楼」（`SaveId`），而 `TypeLevel` 写清「这栋楼盖在第几层地基上」。推论有四条：

1. **`TypeLevel` 是数出来的，不是声明出来的。** `static byte GetClassLevel(Type type)`（`:20-33`）从 1 起算（`:22`），**只有 `type.IsClass` 为真才往上数**（`:23`），然后沿 `BaseType` 一路数到 `object` 为止（`:26-30`）。所以：结构体、接口、枚举拿到的都是 **1**；一个直接继承 `object` 的类是 **2**；它派生出来的是 **3**；依此类推。
2. **成员编号的层级取自「声明它的那个类型」，不是「拥有它的那个类型」。** [TypeDefinition](../TypeDefinition) 在收集属性与字段时用的是 `GetClassLevel(propertyInfo.DeclaringType)`（`TypeDefinition.cs:124`）与 `GetClassLevel(fieldInfo.DeclaringType)`（`:184`）。**这就是同一套 `LocalSaveId` 能在基类与子类之间安全复用的原因**——它们落在不同的 `TypeLevel` 上，[MemberTypeId](../MemberTypeId) 的两级身份因此不会互相顶掉。
3. **`TypeLevel` 是一个 byte，溢出是静默的。** 它在构造函数里被赋值一次（`:17`），计算过程没有任何上界检查。现实中继承深度远小于 256，碰不到；但**它确实是定长 1 字节**，与 [MemberTypeId](../MemberTypeId) 里 `public byte TypeLevel;` 的类型一致——那不是巧合。
4. **这个类没有任何成员级的信息。** 它不认识字段、属性、容器。想知道「这个类型有哪些可保存成员」，得看 [TypeDefinition](../TypeDefinition) / [StructDefinition](../StructDefinition)；接口与枚举本来就没有成员定义。**所以 `TypeDefinitionBase` 的职责边界是「身份 + 层级」，仅此而已。**

## 如何使用

### 怎么拿到它

**不要自己 `new`。** 全模块只有四处子类化它：[TypeDefinition](../TypeDefinition)（类与结构体定义）、[InterfaceDefinition](../InterfaceDefinition)、[EnumDefinition](../EnumDefinition)，以及间接经由 `TypeDefinition` 的 [GenericTypeDefinition](../GenericTypeDefinition)。正常用法是**持有 `TypeDefinitionBase` 并只读它的三个属性**：

- 写盘侧：[ObjectSaveData](../ObjectSaveData) 的构造器在第 57 行查 `GetClassDefinition`，随后只用它暴露的成员集合（第 64-65 行取 `PropertyDefinitions.Count` 与 `FieldDefinitions.Count`）。
- 读盘侧：[ObjectHeaderLoadData](../ObjectHeaderLoadData) 的 `CreateObject` 用 `TryGetTypeDefinition(SaveId) as TypeDefinition`（`ObjectHeaderLoadData.cs:42`）。
- 反查入口：`DefinitionContext.GetTypeDefinition(Type)`（`DefinitionContext.cs:305`）与 `TryGetTypeDefinition(SaveId)`（`:335`）。

### 最小可运行片段

```csharp
using System;
using TaleWorlds.SaveSystem.Definition;

// 唯一有意义的公开行为：算继承深度
Debug.Print("object 本身 = " + TypeDefinitionBase.GetClassLevel(typeof(object)), 0);        // 1
Debug.Print("直接继承 object 的类 = " + TypeDefinitionBase.GetClassLevel(typeof(Stack<int>)), 0); // 2
Debug.Print("结构体 = " + TypeDefinitionBase.GetClassLevel(typeof(KeyValuePair<int, string>)), 0); // 1（非类，不往上数）
Debug.Print("接口 = " + TypeDefinitionBase.GetClassLevel(typeof(IComparable)), 0);         // 1

// 这个数字就是 MemberTypeId 的第一个字段：
//  [TypeDefinition] 收集成员时用 GetClassLevel(member.DeclaringType)，
//  与 SaveableFieldAttribute 的 LocalSaveId 一起组成 MemberTypeId
Debug.Print("所以同一套 LocalSaveId 在基类/子类之间可以复用而不冲突", 0);
```

### 用它最容易踩的一条

**同一个 `LocalSaveId` 在同一个类里出现两次，不会抛异常，而是把一条错误字符串塞进 `Errors`，最终让整局存档功能失效。** [TypeDefinition](../TypeDefinition) 的 `CollectProperties`（`:127-138`）与 `CollectFields`（`:187-198`）发现重复时做的是 `_errors.Add(...)`，不是 throw。这些错误被 [DefinitionContext](../DefinitionContext) 聚合，而 [SaveManager](../SaveManager) 的 `Save` 一看到 `GotError` 就**整个拒绝存档**（返回 `SaveOutput.CreateFailed`）。所以症状不是「那个字段不保存」，而是「保存直接失败」——**排查时先看定义错误列表，不要在保存代码里找原因。**

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `SaveId` | `public SaveId SaveId { get; private set; }` | `:7`，构造器赋值（`:16`）。这是**类型的存档身份**，全部三个子类共用。读写两侧都用它做反查：`ObjectHeaderLoadData.CreateObject` 拿它 `TryGetTypeDefinition`（`:42`），`VariableSaveData.SaveTo` 拿它内联写进字节（`:112`、`:117`）。 |
| `Type` | `public Type Type { get; private set; }` | `:9`，构造器赋值（`:15`）。对应的运行时类型。**注意区分两个 `Type` 概念**：这是「定义对应的类型」，而 [ObjectSaveData](../ObjectSaveData) 另有 `Type = target.GetType()` 是「实例的实际类型」——两者不一致正是 `object` 字段陷阱的来源。 |
| `TypeLevel` | `public byte TypeLevel { get; private set; }` | `:11`，由 `GetClassLevel(type)` 在构造器里算一次（`:17`）。**`[MemberTypeId](../MemberTypeId)` 的第一个字段就来自这里**，取自成员的 `DeclaringType`（`TypeDefinition.cs:124`、`:184`）。1 字节，溢出静默。 |
| 构造器 | `protected TypeDefinitionBase(Type type, SaveId saveId)` | `:13-18`。三个属性逐个赋值 + 算层级。**`protected`，子类才可见**。不校验任何入参：`saveId` 传 null 也能构造。 |
| `GetClassLevel` | `public static byte GetClassLevel(Type type)` | `:20-33`。**本类唯一的行为，也是全模块成员两级编号的源头**。起始 1（`:22`）；`type.IsClass` 为真才进循环（`:23`）；沿 `BaseType` 数到 `object` 为止（`:26-30`）。所以非类类型恒为 1。`static` 意味着它可以在任何地方被调用——[TypeDefinition](../TypeDefinition) 就直接静态调用它。 |

## 真实示例

全文（`TaleWorlds.SaveSystem.Definition/TypeDefinitionBase.cs:5-34`，去掉空行）：

```csharp
public class TypeDefinitionBase
{
    public SaveId SaveId { get; private set; }

    public Type Type { get; private set; }

    public byte TypeLevel { get; private set; }

    protected TypeDefinitionBase(Type type, SaveId saveId)
    {
        Type = type;
        SaveId = saveId;
        TypeLevel = GetClassLevel(type);
    }

    public static byte GetClassLevel(Type type)
    {
        byte b = 1;
        if (type.IsClass)                       // 结构体 / 接口 / 枚举 → 恒为 1
        {
            Type type2 = type;
            while (type2 != typeof(object))     // 沿基类链数到 object 为止
            {
                b++;
                type2 = type2.BaseType;
            }
        }
        return b;
    }
}
```

成员层级怎么取到「声明它的那个类型」（`TaleWorlds.SaveSystem.Definition/TypeDefinition.cs:184`）：

```csharp
byte classLevel = TypeDefinitionBase.GetClassLevel(fieldInfo.DeclaringType);   // ← DeclaringType，不是 base.Type
MemberTypeId memberTypeId = new MemberTypeId(classLevel, saveableFieldAttribute.LocalSaveId);
FieldDefinition fieldDefinition = new FieldDefinition(fieldInfo, memberTypeId);
// DeclaringType 才是「这个字段声明在哪一层」的答案
```

mod 视角的对照实验：

```csharp
// 同一个 LocalSaveId = 1：
//   基类 A 有字段 [SaveableField(1)] X  → MemberTypeId(2, 1)   ← A 直接继承 object
//   子类 B 有字段 [SaveableField(1)] Y  → MemberTypeId(3, 1)   ← B 继承 A
// 两者 LocalSaveId 相同但 MemberTypeId 不同 → 不撞车。
//
// 但如果两个字段声明在【同一个】类里且都用 LocalSaveId = 1：
//   → TypeDefinition.CollectFields 走 _errors.Add 分支（TypeDefinition.cs:187-198）
//   → 不抛异常，但 DefinitionContext.GotError 变 true
//   → SaveManager.Save 整个拒绝存档
Debug.Print("撞层级 = 不冲突；撞同一层级 = 整局存档失效", 0);
```

## 依赖关系

- 四条继承线：[TypeDefinition](../TypeDefinition)（类与结构体定义的共同基类）→ [StructDefinition](../StructDefinition)；以及 [InterfaceDefinition](../InterfaceDefinition)、[EnumDefinition](../EnumDefinition)、[GenericTypeDefinition](../GenericTypeDefinition)
- 层级值的消费者：[MemberTypeId](../MemberTypeId)（`TypeLevel` 字段）——由 [TypeDefinition](../TypeDefinition) 的 `CollectProperties`（`:124`）与 `CollectFields`（`:184`）从成员的 `DeclaringType` 算出
- 身份值的消费者：[SaveId](../SaveId) 家族、[DefinitionContext](../DefinitionContext) 的 `_allTypeDefinitionsWithId`、以及 [VariableSaveData](../VariableSaveData) 的内联身份写出
- 定义阶段：[DefinitionContext](../DefinitionContext) 的 `FillWithCurrentTypes`（`:186`）与 `CollectTypes`（`:293`）
- 重复编号的后果：[SaveManager](../SaveManager) 的 `GotError` 检查 → `SaveOutput.CreateFailed`
- 读档侧消费者：[ObjectHeaderLoadData](../ObjectHeaderLoadData)、[ObjectSaveData](../ObjectSaveData)
- 体系全貌：../../../architecture/save-system