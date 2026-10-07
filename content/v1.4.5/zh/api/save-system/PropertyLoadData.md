---
title: "PropertyLoadData"
description: "属性槽位的读侧：先经冲突 resolver 改写成员编号，再取回值，类型接得住才用 setter 反射写回，否则静默留默认值。"
---

# PropertyLoadData

**Namespace:** `TaleWorlds.SaveSystem.Load`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `internal class PropertyLoadData : MemberLoadData`
**Base:** `MemberLoadData`
**File:** `TaleWorlds.SaveSystem.Load/PropertyLoadData.cs`

## 概述

存档里每个 `[SaveableProperty(n)]` 属性在读档侧对应一个 `PropertyLoadData` 槽位。它的 `FillObject()`（`PropertyLoadData.cs:14-27`）是**真正通过 setter 把值写回属性**的那一步：按成员编号查 [PropertyDefinition](../PropertyDefinition)（`:17`），取 `SetMethod`（`:19`），值经三段兼容判定后 `setMethod.Invoke(target, new object[1] { data })`（`:24`）。整个类 35 行，与 [FieldLoadData](../FieldLoadData) 逐行对称，三处实质差别都在下面列出。**setter 的存在不是可选的**——它在 [PropertyDefinition](../PropertyDefinition) 的构造器里就是硬约束。

## 心智模型

把它想成**用钥匙开锁再放进去**：编号先可能被 resolver 换成新编号（`:32`），拿它找到对应的属性与它的 setter（`:19`），取到值，**先确认锁孔尺寸对得上**，然后用 setter 放进去。推论有四条：

1. **编号改写走 `ref`，返回值被丢弃。** `GetMemberTypeId()`（`:29-34`）拷 `MemberSaveId`，调 `GetConflictedPropertyMemberTypeId(TypeDefinition, ref memberTypeId)`（`:32`）原地改写后返回。**「有没有发生改写」在这里看不出来**，只有 `ref` 参数携带效果。这是改 `LocalSaveId` 的官方迁移手段，且只在读档期有效。
2. **两层守卫决定「做不做」。** `:17` 判 `TypeDefinition != null` **且** `GetPropertyDefinitionWithId(...) != null`——**这是 2 个条件**。任一不成立就整个方法静默返回。**属性被删了、改编号了、或类型定义缺失，三种情况都不报错。**
3. **三段兼容判定决定「写不写」。** `data == null || PropertyInfo.PropertyType.IsInstanceOfType(data) || LoadContext.TryConvertType(...)`（`:22`）。三条全不成立就跳过 `Invoke`（`:24`）。**结合 [LoadContext](../LoadContext) 里 `TryConvertType` 的 `List<T>` → `MBList<T>` 分支恒返回 false**：把存档属性从 `List<T>` 改成 `MBList<T>`，读档不报错、属性为空。
4. **每次写回都分配一个单元素数组。** `setMethod.Invoke(target, new object[1] { data })`（`:24`）——**每个属性每次读档都 new 一次**。字段版用的是 `FieldInfo.SetValue`（`FieldLoadData.cs:24`），不分配。属性多的类在读档侧会因此产生可观的临时对象。

## 如何使用

### 怎么拿到它

**mod 拿不到实例，但你的属性会被它填。** `internal`，构造器 `public PropertyLoadData(ObjectLoadData objectLoadData, IReader reader)`（`:9`）类型不可见；生产者是 [ObjectLoadData](../ObjectLoadData) 的 `InitializeReaders`，按 `SaveEntryExtension.Property` 分支造（`ObjectLoadData.cs:91`，`SaveEntryExtension.Property` 的判断在第 104 行）。**要影响结果**：属性必须有 setter（否则整个存档定义阶段就抛，见 [PropertyDefinition](../PropertyDefinition)）、声明类型要与存档里的值兼容、`LocalSaveId` 要稳定或提供 resolver。

### 最小可运行片段

```csharp
// PropertyLoadData 是 internal；这里演示它的三段判定与 setter 硬约束
using TaleWorlds.SaveSystem;
using TaleWorlds.SaveSystem.Definition;

// ① 编号改写（仅读档期）
// MemberTypeId id = new MemberTypeId(1, 5);
// definitionContext.GetConflictedPropertyMemberTypeId(typeDefinition, ref id);

// ② 查定义：TypeDefinition != null 且 GetPropertyDefinitionWithId(id) != null（:17）

// ③ 类型判定（:22）：null 放行 / IsInstanceOfType 放行 / TryConvertType 只覆盖数值
//    三条都不成立 → 静默不 Invoke

// ④ 写回（:24）：setMethod.Invoke(target, new object[1] { data })  ← 每次分配数组

Debug.Print("get; init; 或只读属性会在定义阶段就抛，不是读档时报", 0);
Debug.Print("属性槽位每次读档 new 一个 object[1]；字段槽位不分配", 0);
```

### 用它最容易踩的一条

**给只读或 `init;` 属性打 `[SaveableProperty]`，游戏在存档定义构建阶段就起不来——而不是读档时报。** 因为 [PropertyDefinition](../PropertyDefinition) 的构造器在两次 setter 查找都失败后先 `Debug.FailedAssert` 再 `throw`（`PropertyDefinition.cs:33-37`），触发点在 `SaveManager.InitializeGlobalDefinitionContext()`。**这条约束是给读档侧准备的**——本类就是那个必须用 setter 写回的地方，所以保存期（[PropertySaveData](../PropertySaveData) 只读不写）从来不需要它。这条链子只有把两侧连起来才看得清。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| 构造器 | `public PropertyLoadData(ObjectLoadData objectLoadData, IReader reader) : base(objectLoadData, reader)` | `:9-12`，函数体为空——全部工作交给基类。传 null 会在基类 `base(objectLoadData.Context, ...)` 处空引用（`MemberLoadData.cs:10`）。 |
| `FillObject` | `public void FillObject()` | `:14-27`。`TypeDefinition != null && (propertyDefinitionWithId = TypeDefinition.GetPropertyDefinitionWithId(GetMemberTypeId())) != null`（`:17`）→ 取 `SetMethod`（`:19`）、宿主 `Target`（`:20`）、值 `GetDataToUse()`（`:21`）→ 三段判定（`:22`）→ `setMethod.Invoke(target, new object[1] { data })`（`:24`）。**由 [ObjectLoadData](../ObjectLoadData) 的 `FillObject` 调用，其 `FillObject` 方法在第 177 行。** |
| `GetMemberTypeId` | `private MemberTypeId GetMemberTypeId()` | `:29-34`。拷 `MemberSaveId`（`:31`）→ `GetConflictedPropertyMemberTypeId(TypeDefinition, ref memberTypeId)`（`:32`）→ 返回改写后编号。**bool 返回值被丢弃**，改写效果只在 `ref` 里。仅读档期生效。 |

## 真实示例

属性写回的全文（`TaleWorlds.SaveSystem.Load/PropertyLoadData.cs:14-27`）：

```csharp
public void FillObject()
{
    PropertyDefinition propertyDefinitionWithId;
    if (base.ObjectLoadData.TypeDefinition != null
        && (propertyDefinitionWithId = base.ObjectLoadData.TypeDefinition.GetPropertyDefinitionWithId(GetMemberTypeId())) != null)
    {
        MethodInfo setMethod = propertyDefinitionWithId.SetMethod;
        object target = base.ObjectLoadData.Target;
        object data = GetDataToUse();
        if (data == null || propertyDefinitionWithId.PropertyInfo.PropertyType.IsInstanceOfType(data)
            || LoadContext.TryConvertType(data.GetType(), propertyDefinitionWithId.PropertyInfo.PropertyType, ref data))
        {
            setMethod.Invoke(target, new object[1] { data });   // 三条都不成立 → 静默跳过
        }
    }
    // TypeDefinition 为 null 或编号查不到属性 → 整个方法什么都不做
}
```

编号改写（`:29-34`）：

```csharp
private MemberTypeId GetMemberTypeId()
{
    MemberTypeId memberTypeId = base.MemberSaveId;
    base.Context.DefinitionContext.GetConflictedPropertyMemberTypeId(base.ObjectLoadData.TypeDefinition, ref memberTypeId);
    return memberTypeId;      // bool 被丢弃；改写效果在 ref 参数里
}
```

mod 视角的对照实验——两侧的职责切分：

```csharp
// 保存期 PropertySaveData.Initialize 只调 PropertyDefinition.GetValue，不碰 setter
// 读档期 PropertyLoadData.FillObject 必须调 SetMethod
// 所以「属性必须有 setter」这条硬约束，代价全部由读档侧承担；
// 它在定义阶段抛出，栈里看到的是 PropertyDefinition..ctor，不是存档系统。

// 三处与字段版的差别：
//   GetFieldDefinitionWithId        vs GetPropertyDefinitionWithId
//   fieldInfo.FieldInfo             vs propertyDefinitionWithId.SetMethod
//   fieldInfo.SetValue(t, data)     vs setMethod.Invoke(t, new object[1]{data})
Debug.Print("字段用 SetValue 不分配；属性用 Invoke 每次 new object[1]", 0);
```

## 依赖关系

- 基类：[MemberLoadData](../MemberLoadData)（提供 `ObjectLoadData` 与 `GetDataToUse`）
- 再上一层：[VariableLoadData](../VariableLoadData)（`Read()` / `GetDataToUse()`）
- 平行实现：[FieldLoadData](../FieldLoadData)（三处差别见上）
- 生产者与调度：[ObjectLoadData](../ObjectLoadData)（`InitializeReaders` 的 `.Property` 分支造本类，`FillObject` 调本类的 `FillObject`）
- 定义与 setter 约束：[PropertyDefinition](../PropertyDefinition)（setter 硬约束在 `:33-37`，getter 回查不传 BindingFlags 在 `:41`）
- 编号迁移：[DefinitionContext](../DefinitionContext) 的 `GetConflictedPropertyMemberTypeId` + [IConflictResolver](../IConflictResolver)
- 写回判定依赖：[LoadContext](../LoadContext) 的 `TryConvertType`（含恒 false 的死分支）
- 写侧镜像：[PropertySaveData](../PropertySaveData)、[SaveablePropertyAttribute](../SaveablePropertyAttribute)（已是 deep_pass 的成熟页）
- 体系全貌：../../../architecture/save-system