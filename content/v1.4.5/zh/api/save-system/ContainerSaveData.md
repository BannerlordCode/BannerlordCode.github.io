---
title: "ContainerSaveData"
description: "单个容器的落盘容器：按容器形状把元素铺成数组，为每个元素建槽位，并用 ISavedStruct 机制把重复的默认结构体只存一份。"
---

# ContainerSaveData

**Namespace:** `TaleWorlds.SaveSystem.Save`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `internal class ContainerSaveData`
**Base:** 无
**File:** `TaleWorlds.SaveSystem.Save/ContainerSaveData.cs`

## 概述

一个 `List<Hero>`、`Dictionary<string, int>` 或 `int[]` 在存档里各占一个容器条目，[SaveContext](../SaveContext) 遍历到它时建一个 `ContainerSaveData`。它内部把元素铺成两个等长数组 `_keys` / `_values`（`:73-74`），逐个建 [ElementSaveData](../ElementSaveData) 槽位；元素本身是结构体时，槽位只装一个编号，真正的数据放进嵌套的 [ObjectSaveData](../ObjectSaveData)。字典的键占下标 `0..n-1`、值占 `n..2n-1`（`:85`），非字典容器的 `_keys` 整排为 null 但仍然分配（`:73`）。它还负责容器这一段的头部与数据字节，以及一个容易被忽略的优化：**实现了 [ISavedStruct](../ISavedStruct) 且 `IsDefault()` 为真的结构体元素，每种类型只落一份**（`ShouldSaveStruct`，`:194`）。

## 心智模型

把它想成**一张点阵表**：容器形状决定格子怎么编号——字典要两列（键列、值列），列表只要一列；每个格子是一个元素槽位。推论有四条：

1. **两种容器的异常处理不同。** 形状不认识时 `GetContainerDefinition` 返回 null，`CollectContainerObjects` 只打印加断言、**不抛**（`SaveContext.cs:201-205`）；而本类构造器在 `_typeDefinition == null` 时 `throw new Exception("Could not find type definition of container type: " + Type)`（`:65-67`）——**注意消息里多了 "container"**，与 [ObjectSaveData](../ObjectSaveData) 的同义消息只差这个词，报错时别以为是同一个点。
2. **默认结构体只存一份，靠接口而不是靠值比较。** `ShouldSaveStruct` 的第一个条件是 `structDefinition == null || !(structDefinition is StructDefinition) || !(objectSaveData.Target is ISavedStruct savedStruct) || !savedStruct.IsDefault()`（`:196`）——**四个条件全不成立才继续去去重**。也就是说只有「实现了 `ISavedStruct`、`IsDefault()` 返回 true、且类型身份与容器声明的元素身份相同」的结构体才会被省略。没实现这个接口的默认结构体照样每个都存一份。
3. **去重要分键侧和值侧。** 字典容器里先判断这个子对象是键还是值（`IsKey`，`:207`），再拿 `KeyId` 或 `ValueId` 去比（`:209`、`:211`）；非字典容器只比 `KeyId`（`:203`）。所以 `Dictionary<KeyValuePair<,>, ValueType>` 这种键也是结构体的形状，**每种结构体类型可以各存一份**。
4. **`IsKey` 是线性扫描。** 它遍历全部 `_elementCount`，拿 `objectSaveData.ObjectId == elementSaveData.ElementIndex` 比对（`:216-228`），并且键先于值判定。而 `ShouldSaveStruct` 对每个子结构体都调它一次——**n 个元素 m 个子结构体就是 O(n·m)**。大字典里塞大量结构体键时这里会明显吃时间。

## 如何使用

### 怎么拿到它

**mod 拿不到。** `internal`，构造器 `ContainerSaveData(ISaveContext context, int objectId, object target, ContainerType containerType)`（`:55`）只在同命名空间可见，唯一调用点是 [SaveContext](../SaveContext) 的 `CollectSaveDataForContainer`（`:495`）。要影响落盘结果，改的是声明层：

- 字段类型必须在 [ContainerType](../ContainerType) 的七项清单里，否则保存期抛异常；
- 想让「空的默认结构体」省掉一份，让那个结构体实现 [ISavedStruct](../ISavedStruct) 并让 `IsDefault()` 正确报告。

### 最小可运行片段

```csharp
using TaleWorlds.SaveSystem.Definition;

// 容器抬头比对象抬头多 1 字节：5 = 对象数的 4 + 容器形状的 1（GetHeaderDataSize，:162）
Debug.Print("容器抬头预算 = " + (5 + new ContainerSaveId(ContainerType.List, new TypeSaveId(7)).GetSizeInBytes()) + " 字节", 0);   // 12
// 总抬头再加固定 19（GetHeaderSize，:167）
Debug.Print("容器总抬头 = " + (5 + new ContainerSaveId(ContainerType.List, new TypeSaveId(7)).GetSizeInBytes() + 19) + " 字节", 0);   // 31
// 字典的条目数是元素数的两倍（GetEntryCount，:239）
Debug.Print("字典 10 个元素 = 20 个条目；列表 10 个元素 = 10 个条目", 0);
```

### 用它最容易踩的一条

**在存档字段里放 `HashSet<T>` 或 `Stack<T>`，保存时会抛异常而不是给出可读提示。** [TypeExtensions](../TypeExtensions) 的 `IsContainer` 只认 `List<>` / `Dictionary<,>` / `MBList<>` / `MBReadOnlyList<>` / `Queue<>` 与数组，其余返回 `ContainerType.None`。于是这个字段被当成普通引用类型走 `GetClassDefinition`，查不到就在 [SaveContext](../SaveContext) 的 `CollectObjects` 里 `throw new Exception("Could not find type definition of type: ...")`（`SaveContext.cs:232`）。`Stack<T>` 尤其容易误用——它不是 `Queue<T>`，不在清单里。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `ObjectId` | `public int ObjectId { get; private set; }` | 本容器在容器表里的编号，由 [SaveContext](../SaveContext) 传入。它成为「指向这个容器的成员槽位」里存的整数（[VariableSaveData](../VariableSaveData) 的 Container 分支）。 |
| `Context` | `public ISaveContext Context { get; private set; }` | 保存上下文（见 [ISaveContext](../ISaveContext)）。元素槽位与嵌套结构体对象共用它，所以字符串表与对象表是全局共享的。 |
| `Target` | `public object Target { get; private set; }` | 容器本体引用。**`GetElementCount` 直接对它做 `((IList)Target).Count` 这类非泛型接口转换**（`:345-359`），所以形状与实际类型必须对得上，否则抛 `InvalidCastException`。 |
| `ContainerType`（构造器参数） | `ContainerSaveData(ISaveContext context, int objectId, object target, ContainerType containerType)` | 决定 `CollectChildren` 走哪条分支（字典 `:75`、列表 `:93`、队列 `:104`、数组 `:118`）、`GetDataSize` 是否把键也算进去（`:177`）、以及 `ShouldSaveStruct` 是否分键值侧（`:201`）。私有字段 `_containerType` 在 `:11`。 |
| `ElementPropertyCount` / `ElementFieldCount` | `internal int ElementPropertyCount`（`:31`）/ `ElementFieldCount`（`:43`） | 元素类型是结构体时，读**第一个**子对象的 `PropertyCount` / `FieldCount`（`:39`、`:51`），无子对象时返回 0。只在统计路径用（统计是关的）。 |
| `GetElementCount` | `internal int GetElementCount()` | `:343-362`。`List`/`CustomList`/`CustomReadOnlyList` 走 `((IList)Target).Count`（`:347`）；`Queue` 走 `((ICollection)Target).Count`（`:351`）；`Dictionary` 走 `((IDictionary)Target).Count`（`:355`）；数组走 `((Array)Target).GetLength(0)`（`:359`）；其余返回 0（`:361`）。**只统计第一维数组。** |
| `CollectChildren` | `public void CollectChildren()` | `:71-128`。先按 `_elementCount` 建 `_keys` 与 `_values` 两个等长数组（`:73-74`），然后按形状填：字典的键下标 `num`、值下标 `_elementCount + num`（`:84-87`）并 return；列表只填 `_values`（`:96-102`）；队列从 `foreach` 顺序填（`:109-115`）；数组按下标填（`:121-125`）。 |
| `ShouldSaveStruct` | `private bool ShouldSaveStruct(TypeDefinition structDefinition, ObjectSaveData objectSaveData)` | `:194-212`。默认结构体的去重闸门：`:196` 四个「不满足」条件任一成立就返回 true（一律存）；否则把 `_typeDefinition.SaveId` 硬转成 `ContainerSaveId`（`:200`），非字典比 `KeyId`（`:203`），字典按 `IsKey` 结果比 `KeyId`（`:209`）或 `ValueId`（`:211`）。 |
| `IsKey` | `private bool IsKey(ObjectSaveData objectSaveData)` | `:214-230`。线性扫全部元素，用 `ObjectId == ElementIndex` 判断这个子对象是键还是值（`:220` 为键、`:224` 为值），扫不到返回 false（`:229`）。**注意它比的是 `ElementIndex`，而字典里值侧的下标被加了 `_elementCount`**（`ElementSaveData.cs` 侧），所以命中的是键先值后。 |
| `GetHeaderDataSize` | `private int GetHeaderDataSize()` | `5 + _typeDefinition.SaveId.GetSizeInBytes()`（`:162`）。那个 5 比 [ObjectSaveData](../ObjectSaveData) 的 4 多一字节——多出来的就是容器形状字节。`GetHeaderSize()` 再加固定 19（`:167`）。 |
| `GetDataSize` | `public int GetDataSize()` | `:170-192`。累加每个 `_values[i]` 的槽位大小（`:175`）；**只有字典才额外累加 `_keys[i]`**（`:177-179`）；再对子结构体里 `ShouldSaveStruct` 为真的累加（`:183-189`）。去重直接体现在字节预算里。 |
| `GetEntryCount` | `public int GetEntryCount()` | `:237-249`。字典返回 `_elementCount * 2`（`:239`）、其余返回 `_elementCount`，再加符合条件的子结构体数。**这是「字典的键和值各占一条」的另一个证据点。** |
| `GetMemberEntrySize` | `private int GetMemberEntrySize()` | 恒返回 9（`:234`），与 [ObjectSaveData](../ObjectSaveData) 同值。 |
| `SaveTo` | `public void SaveTo(BinaryWriter writer, ref int folderId)`（`:282`）/ `public void SaveTo(SaveEntryFolder parentFolder, IArchiveContext archiveContext)`（`:305`） | 两个重载并存。当前路径里**先写值、再写键**（`:286` 值、`:290` 键），键用的是 `SaveEntryExtension.Key`、值用 `.Value`。读档侧靠这个扩展名区分两列。 |
| `WriteElementEntry` | `private void WriteElementEntry(BinaryWriter writer, ElementSaveData data, int parentFolderId, int id, SaveEntryExtension ...)` | `:335`。为单个元素槽位写条目头，固定 9 字节那一套（见 `GetMemberEntrySize`）。 |
| `CollectStructs` | `public void CollectStructs()` | `:384-399`。扫全部元素槽位，**只挑 `MemberType == SavedMemberType.CustomStruct` 的**（`:388`）建嵌套 [ObjectSaveData](../ObjectSaveData) 放进 `_childStructs`。非结构体元素不会产生子对象。 |
| `GetChildElements` | `public static IEnumerable<object> GetChildElements(ContainerType containerType, object target)` | `:431-490`。按形状枚举非 null 的子元素（列表 `:435-448`、队列 `:450`、字典 `:462`、数组 `:476`），供对象图遍历用。**全部元素为 null 时返回空序列**，不会返回容器本身。 |
| `GetChildObjects` | `public static void GetChildObjects(ISaveContext context, ContainerDefinition containerDefinition, ContainerType containerType, object target, List<object> collectedObjects)` | `:499+`。开头判 `containerDefinition.CollectObjectsMethod != null`（`:501`）走生成代码，并额外判 `!containerDefinition.HasNoChildObject`（`:503`）——**这两个标记都会改变遍历成本**，和 [ObjectSaveData](../ObjectSaveData) 的同名快路径是同一套代码生成机制。 |

## 真实示例

字典把键和值铺成两段下标区间（`TaleWorlds.SaveSystem.Save/ContainerSaveData.cs:75-90`）：

```csharp
if (_containerType == ContainerType.Dictionary)
{
    IDictionary obj = (IDictionary)Target;
    int num = 0;
    foreach (DictionaryEntry item in obj)
    {
        object key = item.Key;
        object value = item.Value;
        ElementSaveData elementSaveData  = new ElementSaveData(this, key, num);                    // 键：0 .. n-1
        ElementSaveData elementSaveData2 = new ElementSaveData(this, value, _elementCount + num);    // 值：n .. 2n-1
        _keys[num] = elementSaveData;
        _values[num] = elementSaveData2;
        num++;
    }
    return;
}
```

默认结构体去重的闸门（`ContainerSaveData.cs:194-212`）：

```csharp
private bool ShouldSaveStruct(TypeDefinition structDefinition, ObjectSaveData objectSaveData)
{
    if (structDefinition == null || !(structDefinition is StructDefinition)
        || !(objectSaveData.Target is ISavedStruct savedStruct) || !savedStruct.IsDefault())
    {
        return true;      // 不满足条件 → 老老实实存一份
    }
    ContainerSaveId containerSaveId = (ContainerSaveId)_typeDefinition.SaveId;
    if (_containerType != ContainerType.Dictionary)
    {
        return containerSaveId.KeyId != structDefinition.SaveId;      // 与容器声明的元素身份相同 → 省掉
    }
    SaveId keyId = containerSaveId.KeyId;
    SaveId valueId = containerSaveId.ValueId;
    if (IsKey(objectSaveData))
    {
        return keyId != structDefinition.SaveId;
    }
    return valueId != structDefinition.SaveId;
}
```

mod 视角的对照实验：

```csharp
// 1) List<KeyValuePair<..>>：10 个元素 → 10 个条目
// 2) Dictionary<K,V>：      10 个元素 → 20 个条目（GetEntryCount，:239）
// 3) List<ISavedStruct 的默认结构体>：只有 1 份结构体数据，9 个元素槽位都指向它
Debug.Print("容器形状只影响字节与条目数，不影响元素的元素身份", 0);
Debug.Print("但形状影响 ShouldSaveStruct 是否分键值侧（:201），字典能各存一份键结构体与值结构体", 0);
```

## 依赖关系

- 建造与调用者：[SaveContext](../SaveContext) 的 `CollectSaveDataForContainer`（`:495`）
- 元素槽位：[ElementSaveData](../ElementSaveData)（`MemberType == CustomStruct` 时槽位值是下标）
- 结构体元素容器：[ObjectSaveData](../ObjectSaveData)（`_childStructs` 的元素类型）、[VariableSaveData](../VariableSaveData)（标签与写字节）
- 去重接口：[ISavedStruct](../ISavedStruct)（唯一成员 `bool IsDefault()`）
- 形状：[ContainerType](../ContainerType)（七项封闭清单，`TypeExtensions.IsContainer` 判定）、[ContainerSaveId](../ContainerSaveId)（含键值两个身份）
- 定义：[DefinitionContext](../DefinitionContext)、[ContainerDefinition](../ContainerDefinition)、[TypeDefinition](../TypeDefinition)、[StructDefinition](../StructDefinition)
- 标签：[SavedMemberType](../SavedMemberType)、[MemberTypeId](../MemberTypeId)（元素槽位用 `Invalid`）
- 读档侧镜像：[ContainerLoadData](../ContainerLoadData)、[ContainerHeaderLoadData](../ContainerHeaderLoadData)
- 体系全貌：../../../architecture/save-system