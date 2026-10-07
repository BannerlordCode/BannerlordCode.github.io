---
title: "ObjectSaveData"
description: "单个类或结构体实例的落盘容器：把每个字段与属性变成一个槽位，把结构体成员升级成独立的子对象，并负责头部与数据两段字节。"
---

# ObjectSaveData

**Namespace:** `TaleWorlds.SaveSystem.Save`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `internal class ObjectSaveData`
**Base:** 无
**File:** `TaleWorlds.SaveSystem.Save/ObjectSaveData.cs`

## 概述

[SaveContext](../SaveContext) 遍历到一个对象，就给它建一个 `ObjectSaveData`，然后按固定三步填满它：`CollectStructs()` 找出类型里的结构体成员、把它们变成**独立的子 ObjectSaveData**（`isClass: false`）；`CollectMembers()` 把每个 `[SaveableProperty]` / `[SaveableField]` 变成一个 [PropertySaveData](../PropertySaveData) / [FieldSaveData](../FieldSaveData) 槽位并填值；`CollectStrings()` 把槽位里的字符串去重进全局字符串表（`SaveContext.cs:483-485` 是调用点）。同一个类同时承担两段字节的写入：`SaveHeaderTo` / `SaveHeaderDataTo` 写元信息（类型身份、成员数、子结构体数），`SaveTo` 写槽位数据。`IsClass` 决定它被归到 Object 还是 Struct 的文件夹扩展名下（`:177`、`:192`、`:239`、`:273`）。

## 心智模型

把它想成**一份报关单**：抬头写「这是什么货」（类型身份 + 有几个字段、几个属性、几个子箱），正文逐行写每个成员的值，行尾附「这箱里还有几个结构体子箱」。推论有四条：

1. **结构体成员不是内联数据，而是升级成子报关单。** `CollectStructs` 只在 `Context.DefinitionContext.GetStructDefinition(memberType) != null` 时才建子单（`:161`），并给每个子单一个**从 0 开始、按父对象重新计数的**编号（`:156`、`:164`、`:166`）。这就是为什么成员槽位里存的是「结构体在对象表里的编号」而不是它的字节——编号空间是**每个父对象一份**，不是全局一份。
2. **构造函数里有一个先解引用后判空的次序问题。** `:64` 和 `:65` 分别用 `_typeDefinition.PropertyDefinitions.Count` 与 `.FieldDefinitions.Count` 去定字典容量，**而 null 检查在 `:66`**。所以类型没登记定义时，你拿到的是 `:64` 的 `NullReferenceException`，而不是 `:68` 那句友好的 `"Could not find type definition of type: "`。**那句 throw 对「定义缺失」这个场景是不可达的。**
3. **子对象遍历有生成代码快路径。** 静态 `GetChildObjects` 一进来就判 `typeDefinition.CollectObjectsMethod != null`（`:363`），有就调生成的委托并**直接 return**（`:366`），跳过反射遍历。也就是「有没有生成代码」会改变遍历路径的形状，排查「为什么这个类的子对象没被收集到」时要看这一支。
4. **写字节有两条路径并存。** `SaveTo(BinaryWriter, ref int folderId)`（`:249`）是当前路径；`SaveTo(SaveEntryFolder, IArchiveContext)`（`:271`）带归档上下文的重载走的是旧的 folder/entry 结构。`SaveHeaderTo`（`:175`）同理另有 `SaveHeaderDataTo`（`:196`）与之配对。**不要以为只有一个 `SaveTo`。**

## 如何使用

### 怎么拿到它

**mod 拿不到。** 它是 `internal`，构造器 `public ObjectSaveData(ISaveContext context, int objectId, object target, bool isClass)`（`:47`）只在同命名空间可见，唯一调用点是 [SaveContext](../SaveContext) 的 `CollectSaveDataForObject`（`:482`）。要影响落盘结果，改的是声明层：

- 给类型补 [SaveableTypeDefiner](../SaveableTypeDefiner) 里的定义，让 `_typeDefinition` 不为 null；
- 给字段/属性加 [SaveableFieldAttribute](../SaveableFieldAttribute) / [SaveablePropertyAttribute](../SaveablePropertyAttribute) 并固定 `LocalSaveId`；
- 想省掉反射开销，让代码生成产出 `CollectObjectsMethod`。

### 最小可运行片段

```csharp
// ObjectSaveData 是 internal；这里演示它产出的三样可观察结果
using TaleWorlds.SaveSystem.Definition;

// 1 抬头 = 4 字节 + 类型身份长度（GetHeaderDataSize，:204-206）
Debug.Print("对象抬头预算 = " + (4 + new TypeSaveId(330001).GetSizeInBytes()) + " 字节", 0);   // 9
// 2 完整抬头再 +19（GetHeaderSize，:209-211）
Debug.Print("对象总抬头 = " + (4 + new TypeSaveId(330001).GetSizeInBytes() + 19) + " 字节", 0);   // 28
// 3 每个成员条目固定 9 字节（GetMemberEntrySize，:322-324）
Debug.Print("单个成员条目 = " + 9 + " 字节", 0);
```

### 用它最容易踩的一条

**给自己的类加了 `[SaveableField]` 却忘了在 definer 里登记类型定义，得到的是 `NullReferenceException` 而不是那句 "Could not find type definition"。** 原因就是心智模型第 2 条：`:64` 先解引用 `_typeDefinition` 才在 `:66` 判空。栈顶落在 `ObjectSaveData..ctor`，看不出是「类型没登记」。真正的排查入口是 [SaveManager](../SaveManager).CheckSaveableTypes()——它反射扫全部程序集，把「带 Saveable Attribute 但类型本身没定义」的收集成一个 `List<Type>` 返回（不抛错），这才是给你用的自查工具。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `ObjectId` | `public int ObjectId { get; private set; }` | 本对象在对象表里的编号，由 [SaveContext](../SaveContext) 传入（`:49`）。**类实例用全局编号；结构体子单用父对象内从 0 重编的局部编号**（`:156`、`:164`）。结构体成员槽位里存的就是这个数。 |
| `Context` | `public ISaveContext Context { get; private set; }` | 保存上下文（`:50`）。子对象用同一个 `Context` 构造，所以**整棵树的字符串表与编号表是共享的**。查容器/对象/字符串编号都经它。 |
| `Target` | `public object Target { get; private set; }` | 被保存的活对象引用（`:51`）。**保存期间所有成员取值都从这里反射读**（`FieldSaveData.cs:21`），所以「保存时改对象字段」和「保存时的快照」是两回事——`Target` 是活的。 |
| `Type` | `public Type Type { get; private set; }` | `target.GetType()` 的快照（`:54`）。注意这是**运行时类型**，而槽位判定用的是**声明类型**（见 [FieldSaveData](../FieldSaveData)）。两者不一致就是 `object` 字段陷阱的来源。 |
| `IsClass` | `public bool IsClass { get; private set; }` | 区分类实例与结构体子单（`:52`）。它决定三件事：去 `GetClassDefinition` 还是 `GetStructDefinition` 查定义（`:55-62`）、文件夹扩展名是 `Object` 还是 `Struct`（`:177`、`:192`、`:239`、`:273`）、以及 `SaveHeaderFolderTo` 走哪种布局。 |
| `PropertyCount` / `FieldCount` / `ChildCount` | `internal int PropertyCount => _propertyValues.Count;`（`:31`）等 | 三个 internal 计数，只被统计路径与 `ContainerSaveData` 的 `ElementPropertyCount`（`ContainerSaveData.cs:39`）用。统计关着时基本没人读。 |
| 构造器 | `public ObjectSaveData(ISaveContext context, int objectId, object target, bool isClass)` | `:47-70`。按 `IsClass` 选定义表（`:55-62`），按定义里的成员数给两个字典定容量（`:64-65`），**然后才判 `_typeDefinition == null` 并 throw（`:66-68`）——次序反了**，见「最容易踩的一条」。 |
| `CollectStructs` | `public void CollectStructs()` | `:154-173`。遍历 `MemberDefinitions`，成员类型有 `StructDefinition` 就建一个 `isClass: false` 的子单放进 `_childStructs` 并给局部编号（`:161-167`），末尾对每个子单递归（`:169-172`）。**这是「结构体成员占独立存档条目」的产地。** |
| `CollectMembers` | `public void CollectMembers()` | `:82-126`。`PropertyDefinition` 分支造 `PropertySaveData`（`:93`）、`FieldDefinition` 分支造 `FieldSaveData`（`:102`）；随后按「定义存在且 `IsClassDefinition == false`」二选一调用 `InitializeAsCustomStruct(_childStructs[...].ObjectId)`（`:111`）或 `Initialize(typeDefinition)`（`:115`）；标签是 `String` 的槽位额外收进 `_stringMembers`（`:117-119`）；最后对子单递归（`:122`）。 |
| `CollectStrings` | `public void CollectStrings()` | `:141-152`。把 `_stringMembers` 里每个槽位的字符串本体交给 `Context.AddOrGetStringId` 去重（`:146`），再递归子单。**必须在 `CollectMembers` 之后调用**，否则槽位值还是 null。 |
| `GetHeaderDataSize` | `private int GetHeaderDataSize()` | `4 + _typeDefinition.SaveId.GetSizeInBytes()`（`:206`）。那 4 字节是成员数与子结构体数。`GetHeaderSize()` 在它之上再加固定 19（`:211`），19 是 folder/entry 的固定开销。 |
| `GetMemberEntrySize` | `private int GetMemberEntrySize()` | 恒返回 9（`:324`）。一个成员在数据段里的固定头开销：1 字节标签 + 1 字节层级 + 2 字节局部号 + folderId 与 id。 |
| `GetChildObjectFrom` | `internal static void GetChildObjectFrom(ISaveContext context, object target, MemberDefinition memberDefinition, List<object> collectedObjects)` | `:327-352`。成员类型是类或接口时（`:330`）跳过 `string`（`:332`）、把非 null 值加进集合（`:335`），然后 return（`:340`）；否则若是结构体定义则遍历它的成员再收（`:343-346`）。这是对象图广度的边。 |
| `GetChildObjects` | `public static void GetChildObjects(ISaveContext context, TypeDefinition typeDefinition, object target, List<object> collectedObjects)` | `:361-374`。开头判 `typeDefinition.CollectObjectsMethod != null`（`:363`）——**有生成代码就用它并直接返回**（`:366`），否则才逐成员调 `GetChildObjectFrom`（`:368`）。遍历路径的形状由「有没有生成代码」决定。 |
| `SaveTo` | `public void SaveTo(BinaryWriter writer, ref int folderId)`（`:249`）/ `public void SaveTo(SaveEntryFolder parentFolder, IArchiveContext archiveContext)`（`:271`） | **两个重载并存**：前者是当前写入路径（逐 `_fieldValues` `:253`、逐 `_propertyValues` `:259`、逐子单 `:265`），后者走归档的 folder/entry 结构。排查字节布局时先确认走的是哪一个。 |

## 真实示例

结构体成员升级为子对象、编号从 0 按父重编（`TaleWorlds.SaveSystem.Save/ObjectSaveData.cs:154-173`）：

```csharp
public void CollectStructs()
{
    int num = 0;
    for (int i = 0; i < _typeDefinition.MemberDefinitions.Count; i++)
    {
        MemberDefinition memberDefinition = _typeDefinition.MemberDefinitions[i];
        Type memberType = memberDefinition.GetMemberType();
        if (Context.DefinitionContext.GetStructDefinition(memberType) != null)
        {
            object value = memberDefinition.GetValue(Target);
            ObjectSaveData value2 = new ObjectSaveData(Context, num, value, isClass: false);
            _childStructs.Add(memberDefinition, value2);
            num++;
        }
    }
    foreach (ObjectSaveData value3 in _childStructs.Values)
    {
        value3.CollectStructs();
    }
}
```

两种手势的分派（`ObjectSaveData.cs:106-116`）：

```csharp
Type memberType = memberDefinition.GetMemberType();
TypeDefinitionBase typeDefinition = Context.DefinitionContext.GetTypeDefinition(memberType);
if (typeDefinition is TypeDefinition { IsClassDefinition: false })
{
    ObjectSaveData objectSaveData = _childStructs[memberDefinition];
    memberSaveData.InitializeAsCustomStruct(objectSaveData.ObjectId);   // 槽位只装这个编号
}
else
{
    memberSaveData.Initialize(typeDefinition);                          // 反射取值并按声明类型落盘
}
```

mod 视角的对照实验——`Target` 是活引用，不是快照：

```csharp
// Save 期间的顺序是 CollectStructs → CollectMembers → CollectStrings
// 也就是说：你在 CollectStructs 之后、CollectMembers 之前改 Target 的字段，
// 被写进存档的就是改动后的值——各成员的取值时机并不一致。
Debug.Print("对象抬头 = 4 + 类型身份长度，再 +19 固定开销", 0);
Debug.Print("成员条目固定 9 字节；结构体成员不占这 9 字节，它们是独立子单", 0);
```

## 依赖关系

- 建造与调用者：[SaveContext](../SaveContext)（`CollectSaveDataForObject`，`:482`）与 [ISaveContext](../ISaveContext)
- 槽位：[MemberSaveData](../MemberSaveData) 抽象基类、[FieldSaveData](../FieldSaveData)、[PropertySaveData](../PropertySaveData)、[VariableSaveData](../VariableSaveData)（标签与写字节）
- 容器侧的对偶：[ContainerSaveData](../ContainerSaveData)（内部用 `ObjectSaveData` 装结构体元素，并借 `ElementPropertyCount` 读本类的 `PropertyCount`）
- 定义与身份：[DefinitionContext](../DefinitionContext)、[TypeDefinition](../TypeDefinition)、[MemberDefinition](../MemberDefinition)、[FieldDefinition](../FieldDefinition)、[PropertyDefinition](../PropertyDefinition)、[SaveId](../SaveId)
- 编号：[MemberTypeId](../MemberTypeId)（槽位身份）、[SavedMemberType](../SavedMemberType)（标签即线上字节）
- 声明侧入口：[SaveableFieldAttribute](../SaveableFieldAttribute)、[SaveablePropertyAttribute](../SaveablePropertyAttribute)、[SaveableTypeDefiner](../SaveableTypeDefiner)
- 自查工具：[SaveManager](../SaveManager) 的 `CheckSaveableTypes()`
- 读档侧镜像：[ObjectLoadData](../ObjectLoadData)、[ObjectHeaderLoadData](../ObjectHeaderLoadData)
- 体系全貌：../../../architecture/save-system