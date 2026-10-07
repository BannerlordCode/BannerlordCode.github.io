---
title: "MemberLoadData"
description: "字段与属性槽位的读侧抽象基类：把宿主对象与字节流一起转交给基类，本身只多存一个 ObjectLoadData 引用。"
---

# MemberLoadData

**Namespace:** `TaleWorlds.SaveSystem.Load`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `internal abstract class MemberLoadData : VariableLoadData`
**Base:** `VariableLoadData`
**File:** `TaleWorlds.SaveSystem.Load/MemberLoadData.cs`

## 概述

[VariableLoadData](../VariableLoadData) 负责「把一个槽位的字节读成原始数据、再翻译成能赋给字段的值」，而**字段与属性各自怎么把值写回去**，由本类及其两个子类 [FieldLoadData](../FieldLoadData)、[PropertyLoadData](../PropertyLoadData) 负责。本类就是这三个共同的一层抽象，它自己有且只有一个职责：**持有宿主 [ObjectLoadData](../ObjectLoadData)**，这样子类才能同时拿到「字节流」（从基类）和「要往谁身上写」（从本类）。整个类 14 行，与写侧的 [MemberSaveData](../MemberSaveData) 结构对称。

## 心智模型

把它想成**递工具的人**：基类递过来一支笔（`IReader`）和一张图纸（`LoadContext`），本类再补一张「写哪个对象」的便条（`ObjectLoadData`）。推论有三条：

1. **构造器把两样东西一起转交，自身不加工。** `:9-13` 里 `base(objectLoadData.Context, reader)` 与 `ObjectLoadData = objectLoadData;` 一行不多。**它不做任何类型判定、不做任何校验**——传 null 也能构造成功，异常推迟到子类真正解引用 `ObjectLoadData.Context` 或 `.TypeDefinition` 时。
2. **`ObjectLoadData` 是字段槽位与容器元素槽位的分界。** 容器元素槽位 [ElementLoadData](../ElementLoadData) 直接继承基类、**不经过本类**——因为元素不需要「写回某个对象的某个成员」，它只需要报告自己的值。**所以「要写回去」这条性质，就是本类存在的全部理由。**
3. **写回发生在 `FillObject` 阶段，不是 `Read` 阶段。** 基类的 `Read()` 只解析字节，`GetDataToUse()` 只翻译数值；两个子类各自定义 `FillObject()` 才真正调 `SetValue` / `Invoke`。**所以在回调里读字段时若读到旧值，先确认自己是不是在 `FillObject` 之前被调用的。**

## 如何使用

### 怎么拿到它

**mod 拿不到。** `internal abstract`，构造器 `protected MemberLoadData(ObjectLoadData objectLoadData, IReader reader)`（`:9`）只在同命名空间可见。生产者是 [ObjectLoadData](../ObjectLoadData) 的 `InitializeReaders`——它按 entry 扩展名分栏造子类：`SaveEntryExtension.Property` 那个分支在第 104 行造 [PropertyLoadData](../PropertyLoadData)，`SaveEntryExtension.Field` 那个分支在第 111 行造 [FieldLoadData](../FieldLoadData)（`ObjectLoadData.cs:91`）。**想影响读档结果，改的是字段/属性的类型与编号，或者 [IConflictResolver](../IConflictResolver) 的成员映射，不是本类。**

### 最小可运行片段

```csharp
// MemberLoadData 是 internal abstract；它没有自己的行为，只有一次转交。
// 可观察的结果全在两个子类的 FillObject 上：
//   FieldLoadData.FillObject()    → FieldInfo.SetValue(target, data)        FieldLoadData.cs:24
//   PropertyLoadData.FillObject() → SetMethod.Invoke(target, new object[1])  PropertyLoadData.cs:24
// 两者共用同一个兼容判定，三条都不成立就静默跳过：
//   data == null || 目标类型.IsInstanceOfType(data) || TryConvertType(...)    :22

// 该判定依赖的两个真实调用形状（LoadContext.TryConvertType 的真实签名）：
object data = 5;
bool okNumber = LoadContext.TryConvertType(typeof(int), typeof(long), ref data);   // true
bool okString = LoadContext.TryConvertType(typeof(int), typeof(string), ref data);  // true, data = "5"
Debug.Print("成员槽位：ObjectLoadData 决定写回谁，VariableLoadData 决定读出什么", 0);
```

### 用它最容易踩的一条

**类型不兼容时，字段会被静默留在默认值上，不会有任何异常。** 两个子类的 `FillObject` 都是同一个三段判定（`FieldLoadData.cs:22`、`PropertyLoadData.cs:22`）：值是 null、或者目标类型能接住这个值、或者 `LoadContext.TryConvertType` 能转 —— **三条全不成立就什么都不做**。结合我在 [LoadContext](../LoadContext) 那页核到的「`TryConvertType` 的 `List<T>` → `MBList<T>` 分支是死代码、恒返回 false」，可以得到一条完整的失败链：**把存档字段从 `List<T>` 改成 `MBList<T>`，读档不报错，那个字段就是空的。** 排查这类问题不要找异常，要去找「哪个字段的 `LocalSaveId` 没被写上」。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `ObjectLoadData` | `public ObjectLoadData ObjectLoadData { get; private set; }` | `:7`，构造器里赋值（`:12`）。子类用它拿 `Context`（喂给基类）、`TypeDefinition`（查成员定义）、`Target`（被写入的对象）。**三个用途都在子类里发生，本类自己不读。** |
| 构造器 | `protected MemberLoadData(ObjectLoadData objectLoadData, IReader reader) : base(objectLoadData.Context, reader)` | `:9-13`。**第一句就解引用 `objectLoadData.Context`**，所以传 null 是构造期空引用而不是延迟失败。`IReader` 原样交给基类——读字节的位置由调用方（[ObjectLoadData](../ObjectLoadData)）决定。 |
| 类型身份 | `internal abstract class MemberLoadData : VariableLoadData` | `internal abstract`，**唯二实现是 [FieldLoadData](../FieldLoadData) 与 [PropertyLoadData](../PropertyLoadData)**；第三种类别「容器元素」不继承它（[ElementLoadData](../ElementLoadData) 直接继承 `VariableLoadData`）。 |

## 真实示例

全文（`TaleWorlds.SaveSystem.Load/MemberLoadData.cs:5-14`，去掉空行后就这么长）：

```csharp
internal abstract class MemberLoadData : VariableLoadData
{
    public ObjectLoadData ObjectLoadData { get; private set; }

    protected MemberLoadData(ObjectLoadData objectLoadData, IReader reader)
        : base(objectLoadData.Context, reader)
    {
        ObjectLoadData = objectLoadData;
    }
}
```

读回时真正调用它的两处形如（[ObjectLoadData](../ObjectLoadData) 的 `FillObject`，`:173` 与 `:177`）：

```csharp
foreach (FieldLoadData fieldValue in _fieldValues)
{
    fieldValue.FillObject();        // 内部最终 fieldInfo.SetValue(Target, data)
}
foreach (PropertyLoadData propertyValue in _propertyValues)
{
    propertyValue.FillObject();     // 内部最终 setMethod.Invoke(Target, new object[1] { data })
}
```

mod 视角的对照实验——三个槽位类别的归属：

```csharp
// 字段/属性槽位：MemberLoadData → 有 ObjectLoadData → 能写回
// 容器元素槽位：ElementLoadData → 无 ObjectLoadData → 只报告值，不写回
// 三者共同的基类是 VariableLoadData（Read / GetDataToUse / SavedMemberType 都在那里）
Debug.Print("要不要「写回去」决定是否继承 MemberLoadData", 0);
Debug.Print("不兼容时静默跳过，所以「字段读不回来」的第一嫌疑是 LocalSaveId 对不上", 0);
```

## 依赖关系

- 基类：[VariableLoadData](../VariableLoadData)（`Read()` 与 `GetDataToUse()` 都来自这里）
- 两个实现：[FieldLoadData](../FieldLoadData)、[PropertyLoadData](../PropertyLoadData)（各自定义 `FillObject`）
- 不继承本类的那一类：[ElementLoadData](../ElementLoadData)（容器元素）
- 宿主与生产点：[ObjectLoadData](../ObjectLoadData) 的 `InitializeReaders`（按 `SaveEntryExtension.Property` / `.Field` 分栏造子类）
- 写侧镜像：[MemberSaveData](../MemberSaveData)、[FieldSaveData](../FieldSaveData)、[PropertySaveData](../PropertySaveData)
- 成员定义与身份：[FieldDefinition](../FieldDefinition)、[PropertyDefinition](../PropertyDefinition)、[MemberTypeId](../MemberTypeId)、[IConflictResolver](../IConflictResolver)
- 写回时的类型兼容判定：[LoadContext](../LoadContext) 的 `TryConvertType`
- 体系全貌：../../../architecture/save-system