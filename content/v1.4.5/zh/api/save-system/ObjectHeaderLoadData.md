---
title: "ObjectHeaderLoadData"
description: "读档时每个对象的那张「门牌」：读出类型身份与两个计数，用 GetUninitializedObject 造出不含构造函数的空壳，再决定由谁来替换它。"
---

# ObjectHeaderLoadData

**Namespace:** `TaleWorlds.SaveSystem.Load`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `public class ObjectHeaderLoadData`
**Base:** 无
**File:** `TaleWorlds.SaveSystem.Load/ObjectHeaderLoadData.cs`

## 概述

[LoadContext](../LoadContext) 读档分两个阶段，本类属于第一阶段——**只建对象、不填值**。每个对象条目在 `Load Headers` 阶段拿一个 `ObjectHeaderLoadData`（`LoadContext.cs:96`），调 `InitialieReaders` 从 `SaveEntryExtension.Basics` 这条 entry 里读出类型身份和两个计数（`:32-38`）；到 `Create Objects` 阶段才 `CreateObject()` 造出实例并绑定类型定义（`:40-49`）。它最关键的一行是 `:46` 的 `FormatterServices.GetUninitializedObject(type)`——**读档不调用构造函数**。随后 `Resolve Object` 阶段由 resolver 决定用不用这个空壳（`:51-59`）。

## 心智模型

把它想成**只发门牌不发家具的登记处**：这一阶段的任务是「把地址和户型读出来，房子先砌个空壳」。推论有四条：

1. **构造函数不会被调用。** `FormatterServices.GetUninitializedObject(type)`（`:46`）只分配内存并把字段置零/空，**不执行任何 `.ctor`、不跑字段初始化器**。所以 mod 的存档类里，构造函数里做的任何初始化在读档时都不会发生——必须在 `[SaveableProperty]` 的初始化回调里做（见 [LoadCallbackInitializator](../LoadCallbackInitializator)）。**这是读档路径与 `new` 路径最根本的差别。**
2. **`Target` 与 `LoadedObject` 初始是同一个对象。** `CreateObject` 里 `Target = LoadedObject`（`:47`）。只有 resolver 替换了实例，两者才分叉。**这正是 [LoadContext](../LoadContext) 用 `Target == LoadedObject` 判断「这个对象是否已被 resolver 处理过」的依据**（`LoadContext.cs:176`、`:189`）。
3. **类型身份解析不了就整个对象作废。** `TypeDefinition = Context.DefinitionContext.TryGetTypeDefinition(SaveId) as TypeDefinition;`（`:42`）——用的是 **`as`**，所以只有类定义才会绑上；结构体定义或基础类型定义会得到 **null**，于是 `LoadedObject` 与 `Target` 都留 null（`:43-48` 整段被跳过）。**这是静默降级，不抛异常。**
4. **两个 Resolve 方法都不判 `TypeDefinition` 非空。** `AdvancedResolveObject`（`:53`）与 `ResolveObject`（`:58`）直接 `TypeDefinition.XXX`。若上一步得到 null 而这里仍被调用，就是空引用——所以「`Load Object Datas` 只处理 `Target == LoadedObject`」这条过滤（`LoadContext.cs:176`）同时也是**唯一挡住这次空引用的东西**。

## 如何使用

### 怎么拿到它

**mod 通常拿不到它，但会在回调里看到它。** 构造器 `ObjectHeaderLoadData(LoadContext context, int id)`（`:26`）只赋 `Context` 与 `Id`；唯一持有者是 [LoadContext](../LoadContext)。要从它身上读信息，正常途径是走 [LoadCallbackInitializator](../LoadCallbackInitializator)：若你的初始化方法签名是 `(MetaData, ObjectLoadData)`，第二个参数对应的就是本对象（`LoadCallbackInitializator.cs:47-48` 会先 `GetObjectLoadData` 造出 [ObjectLoadData](../ObjectLoadData)）。

### 最小可运行片段

```csharp
// ObjectHeaderLoadData 是 public，但正常流程由 LoadContext 持有。
// 可观察的三件事（读档期）：
// 1) 构造靠 FormatterServices.GetUninitializedObject（ObjectHeaderLoadData.cs:46），不跑 .ctor
// 2) CreateObject 用 `as TypeDefinition`（:42），解析不到就 Target 留 null
// 3) ResolveObject（:56-59）在 LoadContext 的 Resolve Objects 阶段被调用

// 因此：存档类的构造函数不能承担初始化，字段默认值在读档后是不可靠的起点。
// 正确的落点是带 [SaveableProperty]/[SaveableField] 的类型 + 初始化回调方法。
Debug.Print("ObjectHeaderLoadData.PropertyCount 与 ChildStructCount 来自 Basics entry（:36-37）", 0);
Debug.Print("类型身份用 ReadSaveIdFrom 读（:35），与 VariableSaveData 内联写的身份同源", 0);
```

### 用它最容易踩的一条

**把你的存档类的初始化写在构造函数里，读档时它不会被执行。** 因为 `:46` 用的是 `FormatterServices.GetUninitializedObject` 而不是 `Activator.CreateInstance`——**构造函数、字段初始化器全都不跑**。典型症状是「`new` 出来正常，读档后某个字段是 null/default」，而且没有任何报错。正确做法是把初始化放进该类型的初始化回调方法（[LoadCallbackInitializator](../LoadCallbackInitializator) 按方法签名分三档派发），或者在读档后由上层显式补一次。**存档类请把构造函数当成「永远不会被调用」来设计。**

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `Id` | `public int Id { get; private set; }` | 该对象在对象表里的编号，由 [LoadContext](../LoadContext) 传入（`:29`）。**`Id == 0` 的那个被认作根对象**（`LoadContext.cs:120-122`），所以这个编号不是随便给的。 |
| `LoadedObject` | `public object LoadedObject { get; private set; }` | `GetUninitializedObject` 造出的空壳（`:46`）。**不跑构造函数。** resolver 可以把 `Target` 指向别的实例而这个不变——这正是 `Target != LoadedObject` 的含义。 |
| `Target` | `public object Target { get; private set; }` | 最终会被填值的对象，初始与 `LoadedObject` 同一个（`:47`），被 resolver 替换时改写（`:53`/`:58`）。**[LoadCallbackInitializator](../LoadCallbackInitializator) 的两个方法都先判它是否为 null 再跳过**（`:33`、`:71`），所以解析失败的对象不会收到任何回调。 |
| `PropertyCount` | `public short PropertyCount { get; private set; }` | 该对象的属性成员数，从 `Basics` entry 读（`:36`）。读侧只作信息，写侧由 [ObjectSaveData](../ObjectSaveData) 的 `PropertyCount` 产生。**它与槽位实际读到的数量不强制相等**，读档真正的槽位是按 entry 扩展名遍历出来的。 |
| `ChildStructCount` | `public short ChildStructCount { get; private set; }` | 子结构体数量，读自同一 entry（`:37`）。[ObjectLoadData](../ObjectLoadData) 靠它先建好 `_childStructs` 的空位再逐个填（`ObjectLoadData.cs:97`、`:119`）。 |
| `TypeDefinition` | `public TypeDefinition TypeDefinition { get; private set; }` | 由 `as` 转换绑定的类型定义（`:42`）。**结构体或基础类型会得到 null**，此时 `LoadedObject`/`Target` 也都是 null。两个 Resolve 方法都直接解引用它。 |
| `SaveId` | `public SaveId SaveId { get; private set; }` | 存档里写下的类型身份，由 `SaveId.ReadSaveIdFrom(binaryReader)` 读出（`:35`）。**读档时按当前版本的定义表解析**，旧编号靠 [IConflictResolver](../IConflictResolver) 重定向（仅读档期生效）。 |
| `Context` | `public LoadContext Context { get; private set; }` | 读档上下文（`:28`）。唯一用途是 `CreateObject` 里查定义（`:42`）。 |
| `InitialieReaders` | `public void InitialieReaders(SaveEntryFolder saveEntryFolder)` | `:32-38`。**方法名源码里就拼作 `InitialieReaders`（少一个 z）**，调用方必须照抄。从 `new EntryId(-1, SaveEntryExtension.Basics)` 这条 entry 取 reader，依次读 SaveId、PropertyCount、ChildStructCount。在 `Load Headers` 阶段被并行调用。 |
| `CreateObject` | `public void CreateObject()` | `:40-49`。`TryGetTypeDefinition(SaveId) as TypeDefinition`（`:42`）；非空则 `FormatterServices.GetUninitializedObject(TypeDefinition.Type)` 造空壳（`:46`）并令 `Target = LoadedObject`（`:47`）。**无返回、无异常、失败即静默留 null。** 在 `Create Objects` 阶段被**串行**调用。 |
| `AdvancedResolveObject` | `public void AdvancedResolveObject(MetaData metaData, ObjectLoadData objectLoadData)` | `:51-54`。交给 `TypeDefinition.AdvancedResolveObject(LoadedObject, metaData, objectLoadData)` 并把结果赋给 `Target`（`:53`）。**不判 `TypeDefinition` 非空**，也不判返回值是否 null。 |
| `ResolveObject` | `public void ResolveObject()` | `:56-59`。普通路径：`Target = TypeDefinition.ResolveObject(LoadedObject)`（`:58`）。同样不判空。两者由 [LoadContext](../LoadContext) 按 `CheckIfRequiresAdvancedResolving` 二选一。 |

## 真实示例

读头与建壳的完整两步（`TaleWorlds.SaveSystem.Load/ObjectHeaderLoadData.cs:32-49`）：

```csharp
public void InitialieReaders(SaveEntryFolder saveEntryFolder)
{
    BinaryReader binaryReader = saveEntryFolder.GetEntry(new EntryId(-1, SaveEntryExtension.Basics)).GetBinaryReader();
    SaveId = SaveId.ReadSaveIdFrom(binaryReader);
    PropertyCount = binaryReader.ReadShort();
    ChildStructCount = binaryReader.ReadShort();
}

public void CreateObject()
{
    TypeDefinition = Context.DefinitionContext.TryGetTypeDefinition(SaveId) as TypeDefinition;
    if (TypeDefinition != null)
    {
        Type type = TypeDefinition.Type;
        LoadedObject = FormatterServices.GetUninitializedObject(type);   // 不跑构造函数
        Target = LoadedObject;
    }
    // TypeDefinition 为 null 时静默跳过：LoadedObject 与 Target 都是 null
}
```

两种解析入口（`:51-59`）：

```csharp
public void AdvancedResolveObject(MetaData metaData, ObjectLoadData objectLoadData)
{
    Target = TypeDefinition.AdvancedResolveObject(LoadedObject, metaData, objectLoadData);
}

public void ResolveObject()
{
    Target = TypeDefinition.ResolveObject(LoadedObject);
}
// 两处都直接解引用 TypeDefinition —— 它的 null 由 LoadContext 的 Target == LoadedObject 过滤间接兜住
```

mod 视角的对照实验：

```csharp
// 与读档对照：Activator.CreateInstance 会跑构造函数，FormatterServices 不会。
// 所以「同一个类，new 出来字段有值、读档后是 null」是完全可能的，
// 而且读档路径不会给任何提示。
Debug.Print("读档建对象走 GetUninitializedObject，不执行 .ctor", 0);
Debug.Print("存档类的初始化必须放进初始化回调，不能靠构造函数", 0);
Debug.Print("InitialieReaders 的方法名拼写就是 Initialie（少 z），照抄才能编过", 0);
```

## 依赖关系

- 持有与调度者：[LoadContext](../LoadContext)（`Load Headers` 阶段建头并调 `InitialieReaders`，`Create Objects` 阶段串行调 `CreateObject`，`Resolve Objects` 阶段二选一调 `ResolveObject` / `AdvancedResolveObject`）
- 回调消费者：[LoadCallbackInitializator](../LoadCallbackInitializator)（判 `Target` 非 null 才派发）
- 类型与身份：[DefinitionContext](../DefinitionContext)（`TryGetTypeDefinition`）、[SaveId](../SaveId)、[TypeDefinition](../TypeDefinition)、[IConflictResolver](../IConflictResolver)
- 字节来源：[ArchiveDeserializer](../ArchiveDeserializer)（`SaveEntryFolder` 的来源）、[SaveEntryFolder](../SaveEntryFolder)、[EntryId](../EntryId)、[SaveEntryExtension](../SaveEntryExtension)（`Basics`）
- 数据载荷：[ObjectLoadData](../ObjectLoadData)（AdvancedResolveObject 的第二个参数）
- 写侧对偶：[ObjectSaveData](../ObjectSaveData)（`SaveHeaderDataTo` 写出的正是这里读的三个字段）
- 元数据：[MetaData](../MetaData)
- 体系全貌：../../../architecture/save-system