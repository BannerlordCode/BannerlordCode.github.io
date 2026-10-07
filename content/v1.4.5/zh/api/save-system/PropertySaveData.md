---
title: "PropertySaveData"
description: "属性槽位：用属性 getter 或注入委托从宿主取值，并按属性的声明类型决定落盘路线；属性还额外被要求必须有 setter。"
---

# PropertySaveData

**Namespace:** `TaleWorlds.SaveSystem.Save`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `internal class PropertySaveData : MemberSaveData`
**Base:** `MemberSaveData`
**File:** `TaleWorlds.SaveSystem.Save/PropertySaveData.cs`

## 概述

宿主对象上的每一个 `[SaveableProperty(n)]` 属性在保存期变成一个 `PropertySaveData` 槽位，职责与 [FieldSaveData](../FieldSaveData) 完全平行：从宿主对象上把属性的当前值读出来，按属性的**声明类型**决定落盘路线。与字段版的差别全在取值方式——属性走 `PropertyDefinition.GetValue`，优先用注入的编译委托，没有才回落到 `MethodInfo.Invoke`（`PropertyDefinition.cs:58-65`）。生产者是 [ObjectSaveData](../ObjectSaveData) 的 `CollectMembers`（`:93`）。它自己还额外继承了一条来自 [PropertyDefinition](../PropertyDefinition) 的硬约束：属性**必须有 setter**，否则定义上下文构建期直接抛异常（`PropertyDefinition.cs:33-37`）。

## 心智模型

把它想成**透过窗口取货**：字段是打开柜门直接拿，属性是按窗口标签取——窗口上贴的规格（声明类型）决定怎么打包，而窗口背后还得有一扇能塞货回去的门（setter）。由此推出四条边界：

1. **保存期只读，setter 是给读档期准备的。** 本类的两个方法都不碰 setter：`Initialize` 只调 `PropertyDefinition.GetValue`，`InitializeAsCustomStruct` 只登记编号。但 [PropertyDefinition](../PropertyDefinition) 在构造期就强制要求 setter 存在（`:33-37`）——**因为读档侧 [LoadContext](../LoadContext) 要靠它把值填回去。** 换句话说这条约束是为读档付费的。
2. **setter 的查找有两次尝试，getter 只有一次半。** setter 先 `PropertyInfo.GetSetMethod(nonPublic: true)`，失败再用 `DeclaringType.GetProperty(Name, Instance | Public | NonPublic)` 重查（`:24-32`）；getter 失败后用 `DeclaringType.GetProperty(PropertyInfo.Name)` 重查（`:41`）——**这一处没传 BindingFlags**，与 setter 那条不对称。属性若来自基类且为接口式实现，命中与否就取决于这个差异。
3. **按声明类型，不按运行时类型。** `InitializeData(SaveId, PropertyDefinition.PropertyInfo.PropertyType, typeDefinition, value)`（`:21`）。所以一个 `object` 属性装什么都按 `object` 的规则走，和 [FieldSaveData](../FieldSaveData) 完全一样的陷阱。
4. **两个 getter 路径的代价不同。** 委托路径一次方法调用；反射路径是 `GetMethod.Invoke(target, new object[0])`（`:64`）——**每次都 new 一个空参数数组**。没有注入委托时，大批量保存的属性读取就是反射开销加一次数组分配。

## 如何使用

### 怎么拿到它

**mod 拿不到。** `internal` 类，构造器 `public` 但类型不可见，唯一调用者是 [ObjectSaveData](../ObjectSaveData)。要影响行为，改声明层：

- [SaveablePropertyAttribute](../SaveablePropertyAttribute) 的 `LocalSaveId`；
- 属性的声明类型（决定 [SavedMemberType](../SavedMemberType) 标签）；
- **属性必须同时可读可写** —— 这是本类相对字段版多出来的一条约束。

### 最小可运行片段

```csharp
using TaleWorlds.SaveSystem.Definition;

// 属性槽位与字段槽位共用同一套协议，差别只在反射 API
MemberTypeId propMember = new MemberTypeId(1, 5);       // 局部号 5
Debug.Print("属性成员身份 = " + propMember, 0);          // "(1,5)"

// 声明类型 → 标签
Debug.Print("string 属性   → String(2)，值先存本体、写盘时换字符串表 id", 0);
Debug.Print("Hero 属性     → Object(0)，写对象表编号（null 写 -1）", 0);
Debug.Print("结构体属性     → CustomStruct(4)，写结构体编号，不内联", 0);
Debug.Print("Settlement 属性 → Enum/BasicType 取决于是否登记为枚举定义", 0);

// 只读属性会在定义上下文构建期抛，不是保存期
// [SaveableProperty(6)] public Hero ReadOnlyHero { get; }   → PropertyDefinition.cs:36 抛异常
```

### 用它最容易踩的一条

**给只读属性打 `[SaveableProperty]` 会在游戏启动、定义上下文构建时抛异常，整局游戏起不来——而不是保存时才报错。** [PropertyDefinition](../PropertyDefinition) 的构造器在两次 setter 查找都失败后，先 `Debug.FailedAssert`（`:35`）再无条件 `throw new Exception("Property ... does not have setter method.")`（`:36`）。触发点在 `DefinitionContext.FillWithCurrentTypes()` 收集属性的阶段（[DefinitionContext](../DefinitionContext)），也就是 [SaveManager](../SaveManager) 的 `InitializeGlobalDefinitionContext()`。C# 的 `get; init;` 与只读自动属性都会踩到。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `PropertyDefinition` | `public PropertyDefinition PropertyDefinition { get; private set; }` | 属性的反射定义。`Initialize` 用它的 `GetValue(Target)` 取值（`:19`），用它的 `PropertyInfo.PropertyType` 取声明类型（`:20`）。`GetValue` 内部委托优先、反射兜底（`PropertyDefinition.cs:60-64`）。**它的构造器才是「必须有 setter」这条约束的执行者。** |
| `SaveId` | `public MemberTypeId SaveId { get; private set; }` | 该属性的成员身份，构造器传入（`:15`）。两条路径都用它：正常路线（`:21`）与结构体路线（`:26`）。落盘拆成 1 字节层级 + 2 字节局部号。 |
| 构造器 | `public PropertySaveData(ObjectSaveData objectSaveData, PropertyDefinition propertyDefinition, MemberTypeId saveId) : base(objectSaveData)` | 三个参数喂给基类与本类（`:11-16`）。**不校验**：`propertyDefinition` 传 null 也能构造成功，异常推迟到 `Initialize` 解引用处。 |
| `Initialize` | `public override void Initialize(TypeDefinitionBase typeDefinition)` | `PropertyDefinition.GetValue(base.ObjectSaveData.Target)`（`:20`）→ `InitializeData(SaveId, PropertyDefinition.PropertyInfo.PropertyType, typeDefinition, value)`（`:21`）。**全程只读，不触发 setter。** |
| `InitializeAsCustomStruct` | `public override void InitializeAsCustomStruct(int structId)` | `InitializeDataAsCustomStruct(SaveId, structId, base.TypeDefinition)`（`:26`）。用成员自己的 `SaveId` 保留「填回哪个属性」的信息，值是结构体在对象表里的编号。 |
| 类型身份 | `internal class PropertySaveData : MemberSaveData` | `internal`。与 [FieldSaveData](../FieldSaveData) 结构对称、行为对称，**唯一实质差异来自 `PropertyDefinition` 构造期那条 setter 约束**。 |

## 真实示例

两个方法的全文（`TaleWorlds.SaveSystem.Save/PropertySaveData.cs:18-27`）：

```csharp
public override void Initialize(TypeDefinitionBase typeDefinition)
{
    object value = PropertyDefinition.GetValue(base.ObjectSaveData.Target);
    InitializeData(SaveId, PropertyDefinition.PropertyInfo.PropertyType, typeDefinition, value);
}

public override void InitializeAsCustomStruct(int structId)
{
    InitializeDataAsCustomStruct(SaveId, structId, base.TypeDefinition);
}
```

宿主的取值链条（`TaleWorlds.SaveSystem.Definition/PropertyDefinition.cs:58-65`）：

```csharp
public override object GetValue(object target)
{
    if (GetPropertyValueMethod != null)
    {
        return GetPropertyValueMethod(target);          // 生成的代码注入的编译委托
    }
    return GetMethod.Invoke(target, new object[0]);    // 每次都 new 一个空参数数组
}
```

setter 约束的执行点（`TaleWorlds.SaveSystem.Definition/PropertyDefinition.cs:24-37`）：

```csharp
SetMethod = PropertyInfo.GetSetMethod(nonPublic: true);
if (SetMethod == null && PropertyInfo.DeclaringType != null)
{
    PropertyInfo property = PropertyInfo.DeclaringType.GetProperty(PropertyInfo.Name,
        BindingFlags.Instance | BindingFlags.Public | BindingFlags.NonPublic);   // setter 这条带 BindingFlags
    if (property != null) { SetMethod = property.GetSetMethod(nonPublic: true); }
}
if (SetMethod == null)
{
    Debug.FailedAssert("Property " + PropertyInfo.Name + " at Type " + PropertyInfo.DeclaringType.FullName
        + " does not have setter method.", ..., ".ctor", 39);
    throw new Exception("Property " + PropertyInfo.Name + " at Type " + PropertyInfo.DeclaringType.FullName
        + " does not have setter method.");
}
```

mod 视角的对照实验——只读属性的后果：

```csharp
// 合法：可读可写
// [SaveableProperty(1)] public Hero Owner { get; private set; }
// 非法：启动即抛
// [SaveableProperty(1)] public Hero Owner { get; }
// 非法：get; init; 同样没有 setter
// [SaveableProperty(1)] public Hero Owner { get; init; }

Debug.Print("只读属性的报错发生在 InitializeGlobalDefinitionContext 阶段，不是保存阶段。", 0);
```

## 依赖关系

- 基类：[MemberSaveData](../MemberSaveData)（两段式协议 + 宿主引用）
- 反射定义：[PropertyDefinition](../PropertyDefinition)（`GetValue` 的委托/反射二选一；setter 硬约束在 `:33-37`）与 [MemberDefinition](../MemberDefinition)
- Attribute：[SaveablePropertyAttribute](../SaveablePropertyAttribute)（`LocalSaveId` 的来源，且已是 deep_pass 的成熟页）
- 宿主与生产点：[ObjectSaveData](../ObjectSaveData) 的 `CollectMembers`（`:93` 构造本类）
- 标签与写盘：[VariableSaveData](../VariableSaveData) 的七分支，语义见 [SavedMemberType](../SavedMemberType)
- 成员身份：[MemberTypeId](../MemberTypeId)（结构体属性保留真实 `SaveId`）
- 平行实现：[FieldSaveData](../FieldSaveData)（字段版无 setter 约束，取值走 `FieldInfo.GetValue`）
- 读档侧填值：[LoadContext](../LoadContext) 与 [LoadCallbackInitializator](../LoadCallbackInitializator)（setter 在这一侧才被使用）
- 体系全貌：../../../architecture/save-system
