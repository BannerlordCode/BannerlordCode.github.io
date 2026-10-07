---
title: "InterfaceDefinition"
description: "接口类型的存档定义：两个构造器分别收 SaveId 与 int 编号，没有成员信息，也没有 resolver——它只让接口字段能被当成对象引用存下来。"
---

# InterfaceDefinition

**Namespace:** `TaleWorlds.SaveSystem.Definition`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `internal class InterfaceDefinition : TypeDefinitionBase`
**Base:** `TypeDefinitionBase`
**File:** `TaleWorlds.SaveSystem.Definition/InterfaceDefinition.cs`

## 概述

存档系统处理接口的方式很克制：接口没有字段也没有属性可存，所以**它根本不定义任何成员**——本类继承的是基类 [TypeDefinitionBase](../TypeDefinitionBase) 而不是 [TypeDefinition](../TypeDefinition)，因此没有属性表、字段表，也没有那套收集成员的逻辑（继承声明在第 5 行）。它存在的唯一目的是给「声明类型是接口」的字段一个可登记的身份，让 [VariableSaveData](../VariableSaveData) 能判定那条槽位走**对象引用**路线而不是去查一个不存在的字段定义。整个类 16 行、两个构造器、无任何行为。

## 心智模型

把它想成**一张空白的门牌**：楼是别人盖的（接口由实现类定义），这里只登记「这个门牌号存在，而且它的东西按引用存」。推论有三条：

1. **继承链选错就是行为差异。** 它继承基类而非 `TypeDefinition`——所以 [VariableSaveData](../VariableSaveData) 的对象分支里「定义是 `InterfaceDefinition`」能被单独识别，与另外两个条件并列（`VariableSaveData.cs:59`）。**若它继承 `TypeDefinition`，接口与类就分不开了。**
2. **接口字段不需要显式登记也能工作，但登记了更好。** [VariableSaveData](../VariableSaveData) 的对象分支有一个兜底条件：声明类型是接口、而这个接口没有定义时，照样按对象引用存（同上 `:59` 的第三个条件）。代价是拿不到任何成员级信息。反过来，为接口登记 `InterfaceDefinition` 只会让这个条件走前两分支，行为一样。
3. **`TypeLevel` 恒为 1。** 基类构造器里的层级计算对非类类型不往上数（`TypeDefinitionBase.cs:23`），接口的 `IsClass` 为 false。**所以接口定义永远是一级**，不会和任何类的层级撞上。

## 如何使用

### 怎么拿到它

**mod 拿不到类型（`internal`）。** 正规入口两条：

- 定义阶段：在 [SaveableTypeDefiner](../SaveableTypeDefiner) 的 `DefineInterfaceTypes()` 里 `AddInterfaceDefinition(typeof(IMyInterface), saveId)`，helper 内部 `new InterfaceDefinition(type, _saveBaseId + saveId, ...)`。
- 取定义：`DefinitionContext.GetInterfaceDefinition(Type)`（`DefinitionContext.cs:488`）。

**注意它与 `GetClassDefinition` 是分开的**——后者查不到接口（`DefinitionContext.cs:314` 起只查 root / generic class / class 三张表）。

### 最小可运行片段

```csharp
using TaleWorlds.SaveSystem.Definition;

// 定义（写在自定义 definer 内）：
// AddInterfaceDefinition(typeof(IMySaveable), 701);
//   → helper 内部 new InterfaceDefinition(type, saveBaseId + 701, ...) → int 被包成 TypeSaveId

// 取定义走独立入口，不走 GetClassDefinition
// InterfaceDefinition def = definitionContext.GetInterfaceDefinition(typeof(IMySaveable));

// 取身份与层级（继承自 TypeDefinitionBase）
// SaveId id = new TypeSaveId(1);
// Debug.Print("身份 = " + id.GetStringId() + "，位宽 = " + id.GetSizeInBytes(), 0);   // "1", 5

// 接口没有成员定义 —— 因为它继承 TypeDefinitionBase 而不是 TypeDefinition
Debug.Print("接口字段按对象引用存，不查字段定义", 0);
Debug.Print("未登记接口也走得通：VariableSaveData 有 memberType.IsInterface 兜底（:59）", 0);
```

### 用它最容易踩的一条

**给一个接口字段指望它「自动」存下实现类，是不成立的——存档只存引用编号，实现类自己必须另有定义。** 接口定义本身不含任何成员信息（[VariableSaveData](../VariableSaveData) 因此走 `Object` 分支写一个对象 id），而**那个 id 指向的对象要有能被反查回来的 `TypeDefinition`**。所以：接口字段要能读档，实现类必须已经被 [SaveableTypeDefiner](../SaveableTypeDefiner) 登记过；而接口在运行时可能是 A 也可能是 B，**存档里记的是具体实例的类型身份，所以两个实现类都得登记**。少登记一个，那个分支读档时 `TryGetTypeDefinition` 返回 null，最终字段拿到 null。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| 构造器 A | `public InterfaceDefinition(Type type, SaveId saveId) : base(type, saveId)` | `:7-10`。主构造器，`SaveId` 形态。**不做任何校验**，包括「这个 type 真的是接口吗」——传个类进来也照建，`TypeLevel` 还会照类算。 |
| 构造器 B | `public InterfaceDefinition(Type type, int saveId) : base(type, new TypeSaveId(saveId))` | `:12-15`。便利重载：把 `int` 编号包成 [TypeSaveId](../TypeSaveId) 再委托给 A。**这是 [SaveableTypeDefiner](../SaveableTypeDefiner) 的 helper 实际用的形状**（它手里只有 `saveBaseId + localId` 这个 int）。 |
| 类型身份 | `internal class InterfaceDefinition : TypeDefinitionBase` | `internal`。**继承 `TypeDefinitionBase` 而非 `TypeDefinition`**（`InterfaceDefinition.cs:5`）——这是它「没有成员信息」的结构性原因。写盘侧正因为能单独判出它，接口字段才走对象路线（`VariableSaveData.cs:59`）。除两个构造器外**没有任何成员声明**。 |

## 真实示例

全文（`TaleWorlds.SaveSystem.Definition/InterfaceDefinition.cs:5-16`，去掉空行）：

```csharp
internal class InterfaceDefinition : TypeDefinitionBase
{
    public InterfaceDefinition(Type type, SaveId saveId)
        : base(type, saveId)
    {
    }

    public InterfaceDefinition(Type type, int saveId)
        : base(type, new TypeSaveId(saveId))     // int 编号包成 TypeSaveId
    {
    }
}
```

它在写盘侧被认出来的那一行（`TaleWorlds.SaveSystem.Save/VariableSaveData.cs:59`）：

```csharp
else if ((typeDefinition != null && typeDefinition.IsClassDefinition)
      || TypeDefinition is InterfaceDefinition          // ← 接口定义在这里被识别
      || (TypeDefinition == null && memberType.IsInterface))   // ← 没登记也能走通
{
    int num2 = -1;
    if (data != null) { num2 = Context.GetObjectId(data); }
    MemberType = SavedMemberType.Object;
    Value = num2;
}
```

mod 视角的对照实验：

```csharp
// 接口字段的三条注册要求：
//   1. 接口本身（可选）AddInterfaceDefinition —— 不加也能存，因为有 IsInterface 兜底
//   2. 每个可能的实现类【必须】AddClassDefinition —— 否则读档时 TryGetTypeDefinition 返回 null
//   3. 接口的 TypeLevel 恒为 1，与任何类都不冲突；但字段的层级取自 DeclaringType，
//      声明在同一类里的接口字段与普通字段靠 LocalSaveId 区分
Debug.Print("接口字段能存 ≠ 实现类能读回来 —— 后者才是真正要登记的", 0);
```

## 依赖关系

- 基类：[TypeDefinitionBase](../TypeDefinitionBase)（`Type` / `SaveId` / `TypeLevel`，接口的 `TypeLevel` 恒为 1）
- 与之平行的三个定义：[TypeDefinition](../TypeDefinition)（类与结构体，含成员信息）、[StructDefinition](../StructDefinition)、[EnumDefinition](../EnumDefinition)
- 写盘侧唯一的识别点：[VariableSaveData](../VariableSaveData) 的对象分支三条件（`:59`），以及 `SavedMemberType.Object`
- 取定义的入口：[DefinitionContext](../DefinitionContext) 的 `GetInterfaceDefinition`（`:488`）与 `AddInterfaceDefinition`；登记阶段是 `FillWithCurrentTypes` 的 `DefineInterfaceTypes`（`:212`）
- 登记侧：[SaveableTypeDefiner](../SaveableTypeDefiner)（它同时也是类定义与根类定义的 helper 提供者）
- 读档侧连带：[ObjectHeaderLoadData](../ObjectHeaderLoadData)（注意接口类型在 `CreateObject` 里 `as TypeDefinition` 会得到 null，因为接口定义不是 `TypeDefinition`）
- 体系全貌：../../../architecture/save-system