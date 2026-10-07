---
title: "FieldLoadData"
description: "字段槽位的读侧：先经冲突 resolver 把成员编号改写，再取回值，只有类型接得住时才 SetValue 写回，否则静默留默认值。"
---

# FieldLoadData

**Namespace:** `TaleWorlds.SaveSystem.Load`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `internal class FieldLoadData : MemberLoadData`
**Base:** `MemberLoadData`
**File:** `TaleWorlds.SaveSystem.Load/FieldLoadData.cs`

## 概述

存档里每个 `[SaveableField(n)]` 字段在读档侧对应一个 `FieldLoadData` 槽位。它的 `FillObject()`（`FieldLoadData.cs:14-27`）是整条读档链路上**真正把值写进对象字段的那一步**：先用自己的成员编号去 [TypeDefinition](../TypeDefinition) 里查 [FieldDefinition](../FieldDefinition)（`:17`），拿到 `FieldInfo` 后取 `GetDataToUse()` 的值（`:21`），**只有类型对得上时才 `fieldInfo.SetValue` 写回**（`:24`）。整个类 35 行，与 [PropertyLoadData](../PropertyLoadData) 逐行对称，唯一实质差别是取值 API 与最后那行写回方式。

## 心智模型

把它想成**往标签贴编号的收货员**：手上是存档里的编号（`MemberSaveId`），先去查这个编号对应哪个字段（可能要先改写编号），取到值，最后检查「这个箱子放得下吗」——放不下就**把箱子原样留下，不报错**。推论有四条：

1. **编号会先被 resolver 改写，再去查定义。** `GetMemberTypeId()`（`:29-34`）拷一份 `MemberSaveId`，交给 `DefinitionContext.GetConflictedFieldMemberTypeId(TypeDefinition, ref memberTypeId)`（`:32`）**原地改写**，返回改写后的编号。`ref` 参数意味着返回值真假不重要，重要的是那个被改过的变量。**只有读档期生效**（该方法内部判 `SaveManager.ShouldResolveConflicts()`），所以这是「换字段编号」的官方迁移手段。
2. **两层守卫决定「做不做」。** `:17` 判 `TypeDefinition != null` **且** `GetFieldDefinitionWithId(...) != null`——**这是 2 个条件**；任一不成立就整个方法什么都不做。**类型定义缺失、或这个编号查不到字段，都是静默跳过。**
3. **三段兼容判定决定「写不写」。** `data == null || fieldInfo.FieldType.IsInstanceOfType(data) || LoadContext.TryConvertType(data.GetType(), fieldInfo.FieldType, ref data)`（`:22`）——**三条全不成立就不写**。注意顺序：null 直接放行；`IsInstanceOfType` 覆盖精确类型与基类/接口；`TryConvertType` 只覆盖数值互转、数值→字符串，以及一条**恒返回 false 的死分支**（见 [LoadContext](../LoadContext)）。
4. **写回用的是 `FieldInfo.SetValue`，不是委托。** `:24`。与属性版的 `MethodInfo.Invoke`（`PropertyLoadData.cs:24`）不同，字段这条路**没有代码生成的加速点**——每次填值都是一次反射。对照 [FieldDefinition](../FieldDefinition) 的 `GetFieldValueMethod`（保存侧有注入委托），**读侧没有对应物**，所以字段多的类在读档侧是反射热点。

## 如何使用

### 怎么拿到它

**mod 拿不到实例。** `internal`，构造器 `public FieldLoadData(ObjectLoadData objectLoadData, IReader reader)`（`:9`）虽为 public 但类型不可见。生产者是 [ObjectLoadData](../ObjectLoadData) 的 `InitializeReaders`——按 `SaveEntryExtension.Field` 分支造本类（`ObjectLoadData.cs:91`，`SaveEntryExtension.Field` 的判断在第 111 行）。**要影响结果，改字段声明类型、固定 `LocalSaveId`，或提供 [IConflictResolver](../IConflictResolver)。**

### 最小可运行片段

```csharp
// FieldLoadData 是 internal；这里演示它的三层判定与静默跳过条件
using TaleWorlds.SaveSystem;
using TaleWorlds.SaveSystem.Definition;

// ① 编号改写（仅读档期生效）
// MemberTypeId id = new MemberTypeId(1, 3);
// definitionContext.GetConflictedFieldMemberTypeId(typeDefinition, ref id);   // ref：原地改写
// ② 查定义：TypeDefinition != null 且 GetFieldDefinitionWithId(id) != null
// ③ 类型判定（FieldLoadData.cs:22）：
//    data == null                      → 放行
//    FieldType.IsInstanceOfType(data)  → 放行（覆盖基类与接口）
//    TryConvertType(...)               → 只覆盖数值互转 / 数值→string
//    三条都不成立 → 什么都不做，字段保持默认值

Debug.Print("List<int> 改成 MBList<int> 后 TryConvertType 恒 false，字段静默留空", 0);
Debug.Print("读回路径用 FieldInfo.SetValue，没有保存侧那种注入委托", 0);
```

### 用它最容易踩的一条

**把存档字段的声明类型改掉，读档不会报错，但那个字段会是空的。** `:22` 的三段判定只要有一条不成立就静默跳过 `SetValue`（`:24`），所以「保存正常、读档正常、就是那个字段没了」是最典型的症状。而 `:17` 的第二个条件更隐蔽：**如果新版本把这个字段删了或改了 `LocalSaveId`，`GetFieldDefinitionWithId` 返回 null，同样静默跳过**——没有任何日志。所以排查的顺序是：先确认字段还在、`LocalSaveId` 没变，再确认类型兼容。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| 构造器 | `public FieldLoadData(ObjectLoadData objectLoadData, IReader reader) : base(objectLoadData, reader)` | `:9-12`，函数体是空的——**全部工作交给基类**，本类不缓存任何额外状态。传 null 会在基类 `base(objectLoadData.Context, ...)` 处立刻空引用（`MemberLoadData.cs:10`）。 |
| `FillObject` | `public void FillObject()` | `:14-27`。`TypeDefinition != null && (fieldDefinitionWithId = TypeDefinition.GetFieldDefinitionWithId(GetMemberTypeId())) != null`（`:17`）→ 取 `FieldInfo`（`:19`）、宿主 `Target`（`:20`）、值 `GetDataToUse()`（`:21`）→ 三段兼容判定（`:22`）→ `fieldInfo.SetValue(target, data)`（`:24`）。**由 [ObjectLoadData](../ObjectLoadData) 的 `FillObject` 调用，其 `FillObject` 方法在第 173 行。** |
| `GetMemberTypeId` | `private MemberTypeId GetMemberTypeId()` | `:29-34`。拷 `MemberSaveId`（`:31`）→ `GetConflictedFieldMemberTypeId(TypeDefinition, ref memberTypeId)`（`:32`）→ 返回改写后的编号。**`ref` 改写是本方法存在的全部意义；返回 bool 被丢弃，所以「有没有发生改写」在这里无从判断。** 仅读档期有效。 |

## 真实示例

字段写回的全文（`TaleWorlds.SaveSystem.Load/FieldLoadData.cs:14-27`）：

```csharp
public void FillObject()
{
    FieldDefinition fieldDefinitionWithId;
    if (base.ObjectLoadData.TypeDefinition != null
        && (fieldDefinitionWithId = base.ObjectLoadData.TypeDefinition.GetFieldDefinitionWithId(GetMemberTypeId())) != null)
    {
        FieldInfo fieldInfo = fieldDefinitionWithId.FieldInfo;
        object target = base.ObjectLoadData.Target;
        object data = GetDataToUse();
        if (data == null || fieldInfo.FieldType.IsInstanceOfType(data)
            || LoadContext.TryConvertType(data.GetType(), fieldInfo.FieldType, ref data))
        {
            fieldInfo.SetValue(target, data);     // 三条都不成立 → 静默跳过
        }
    }
    // TypeDefinition 为 null 或编号查不到字段 → 整个方法什么都不做
}
```

编号改写（`:29-34`）：

```csharp
private MemberTypeId GetMemberTypeId()
{
    MemberTypeId memberTypeId = base.MemberSaveId;
    base.Context.DefinitionContext.GetConflictedFieldMemberTypeId(base.ObjectLoadData.TypeDefinition, ref memberTypeId);
    return memberTypeId;      // bool 返回值被丢弃，改写效果在 ref 参数里
}
```

mod 视角的对照实验——字段与属性的三处差别：

```csharp
// 1) 取定义：GetFieldDefinitionWithId   vs  GetPropertyDefinitionWithId
// 2) 取成员：fieldInfo.FieldInfo         vs  propertyDefinitionWithId.SetMethod
// 3) 写回：  fieldInfo.SetValue(target, data)        （无额外分配）
//           setMethod.Invoke(target, new object[1]) （每次分配一个单元素数组）
// 其余（编号改写、三段判定、静默跳过）逐行相同
Debug.Print("读回路径：字段用 SetValue，属性用 Invoke + 每次 new object[1]", 0);
```

## 依赖关系

- 基类：[MemberLoadData](../MemberLoadData)（提供 `ObjectLoadData` 与 `GetDataToUse`）
- 再上一层：[VariableLoadData](../VariableLoadData)（`Read()` 解析字节、`GetDataToUse()` 翻译数值）
- 平行实现：[PropertyLoadData](../PropertyLoadData)（逐行对称的三处差别）
- 生产者与调度：[ObjectLoadData](../ObjectLoadData)（`InitializeReaders` 的 `.Field` 分支造本类，`FillObject` 调本类的 `FillObject`）
- 定义与身份：[TypeDefinition](../TypeDefinition) 的 `GetFieldDefinitionWithId`、[FieldDefinition](../FieldDefinition)、[MemberTypeId](../MemberTypeId)
- 编号迁移：[DefinitionContext](../DefinitionContext) 的 `GetConflictedFieldMemberTypeId` + [IConflictResolver](../IConflictResolver)（仅读档期）
- 写回判定依赖：[LoadContext](../LoadContext) 的 `TryConvertType`（含恒 false 的死分支）
- 写侧镜像：[FieldSaveData](../FieldSaveData)、[FieldDefinition](../FieldDefinition)（保存侧有注入委托，读侧没有）
- 体系全貌：../../../architecture/save-system