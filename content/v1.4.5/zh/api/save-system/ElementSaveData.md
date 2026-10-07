---
title: "ElementSaveData"
description: "容器里单个元素的落盘槽位：按元素下标定位而不是成员编号，null 写 -1，结构体元素写自己的下标当引用。"
---

# ElementSaveData

**Namespace:** `TaleWorlds.SaveSystem.Save`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `internal class ElementSaveData : VariableSaveData`
**Base:** `VariableSaveData`
**File:** `TaleWorlds.SaveSystem.Save/ElementSaveData.cs`

## 概述

保存一个 `List<Hero>` 或一个 `Dictionary<string, int>` 时，容器本身拿到一个对象编号，容器里的每个格子则各拿到一个 `ElementSaveData`——也就是一个「槽位」。它与 [FieldSaveData](../FieldSaveData) / [PropertySaveData](../PropertySaveData) 的根本区别是**定位方式**：字段和属性靠 [MemberTypeId](../MemberTypeId) 的两级编号，容器元素靠下标，所以 `ElementSaveData` 的三个分支**全都传 `MemberTypeId.Invalid`**（`TaleWorlds.SaveSystem.Save/ElementSaveData.cs:18`、`:24`、`:28`）。构造函数把元素按值分成三类处理：null、已定义的结构体、其它。生产者是 [ContainerSaveData](../ContainerSaveData) 的 `CollectChildren`（`:84`、`:85`、`:99`、`:111`、`:124`）。

## 心智模型

把它想成**集装箱里的格子编号牌**：牌子上不写货主姓名，只写「这是第几格」。由此推出四条边界：

1. **格子永远没有成员身份。** 三个分支都传 `MemberTypeId.Invalid`（`:18`、`:24`、`:28`），因为位置本身就是身份。落盘时写出的层级是 0、局部号是 -1（[VariableSaveData](../VariableSaveData) 的 `SaveTo` 写 `MemberSaveId.TypeLevel` / `LocalSaveId` 两字段）。**所以你不能靠改 `LocalSaveId` 来定位某个元素。**
2. **结构体元素的槽位值是它的下标，不是数据。** 判定条件是 `typeDefinition is TypeDefinition { IsClassDefinition: false }`（`:22`），即定义存在但不是类定义——那就是结构体定义。此时调 `InitializeDataAsCustomStruct(MemberTypeId.Invalid, index, typeDefinition)`（`:24`），第二个参数是 `int structId`，而基类把它直接当 `Value` 存下来（`VariableSaveData.cs:35`）。**含义是：这一格不装数据，只装「数据在另一个 ObjectSaveData 里的编号」，而那个编号恰好等于元素下标。** 一个 `List<SomeStruct>` 因此会额外产生 n 个对象条目。
3. **下标来自枚举位置，不是键。** 对字典，[ContainerSaveData](../ContainerSaveData) 传进来的 `index` 是 `_elementCount + num`（`:85`），即**键占 0..n-1、值占 n..2n-1**。所以 `ElementIndex` 在字典的键和值上会差一个容器长度。
4. **null 不走普通分支。** `value == null` 时先 `InitializeDataAsNullObject(MemberTypeId.Invalid)` 再 `return`（`:16-20`），基类把 `MemberType` 设为 `Object`、`Value` 设为 `-1`（`VariableSaveData.cs:26-28`）。所以**空槽位在存档里读回来仍是 null**，不会退化成「类型不匹配的零值」。

## 如何使用

### 怎么拿到它

**mod 拿不到。** 它是 `internal`，构造器是 `public` 但所在类型不可见，且唯一调用者是同命名空间的 [ContainerSaveData](../ContainerSaveData)。观察它的等价方式是：看一个容器的 [SaveContext](../SaveContext) 收集结果里 `ContainerSaveData` 的 `_keys` / `_values` 数组（`ContainerSaveData.cs:73-74`）——每个格子对应一个 `ElementSaveData`。要影响落盘行为，改的是**元素类型本身**（它有没有定义、是不是结构体），而不是这个类。

### 最小可运行片段

```csharp
using TaleWorlds.SaveSystem.Definition;

// 元素槽位不带成员身份，永远是 Invalid
Debug.Print(MemberTypeId.Invalid.ToString(), 0);            // "(0,-1)"

// 同一个类里三种元素的槽位对照（逻辑等价演示，ElementSaveData 本身 internal）
object nullElement = null;
object structElement = new KeyValuePair<string, int>("k", 1);   // 结构体 → 写自己的下标
object refElement    = Campaign.Current.Heroes.FirstOrDefault(); // 引用类 → 写对象 id

Debug.Print("null 槽位值 = -1（Object 标签）", 0);
Debug.Print("结构体槽位值 = 元素下标（CustomStruct 标签）", 0);
Debug.Print("引用槽位值 = 对象表编号（Object 标签）", 0);

// 容器身份决定元素标签的判定路线
var listOfStructs = new ContainerSaveId(ContainerType.List, new TypeSaveId(102));  // KeyValuePair<,> 的开类型号
Debug.Print("List<结构体> 的容器身份 = " + listOfStructs.GetStringId(), 0);
```

### 用它最容易踩的一条

**在存档字段里放 `List<某个结构体>`，你会以为存档变小了，其实它变大了。** 结构体元素不内联数据，而是每个元素各生成一个独立的 `ObjectSaveData` 条目（因为槽位里只放下标）。一份 `List<KeyValuePair<...>>` 因此会同时产生容器条目和 n 个结构体条目，而读档侧是**并行**填充的（[LoadContext](../LoadContext) 的 `Load Container Datas` 阶段）。如果你在 mod 里发现存档体积异常膨胀、或者读档时结构体元素的字段偶发是默认值，先查这里。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `ElementValue` | `public object ElementValue { get; private set; }` | 元素原始对象引用，构造时赋值（`:14`）。**只在保存期有用**——落盘时不会写它本身（结构体分支连它都不看），只写标签与下标/编号。读档侧对应物是 [ElementLoadData](../ElementLoadData) 里的槽位。 |
| `ElementIndex` | `public int ElementIndex { get; private set; }` | 元素在容器中的位置序号（`:15`）。**对结构体元素来说这个数字就是它的存档对象编号**，因为 `InitializeDataAsCustomStruct` 的第二个参数就是它（`:24`）。字典里键用 `num`、值用 `_elementCount + num`（`ContainerSaveData.cs:84-85`）。 |
| 构造器 | `public ElementSaveData(ContainerSaveData containerSaveData, object value, int index) : base(containerSaveData.Context)` | 三分支派发器：null → `InitializeDataAsNullObject` 并 return（`:16-20`）；定义为非类 `TypeDefinition` → `InitializeDataAsCustomStruct`（`:22-25`）；否则 → `InitializeData`（`:26-29`）。注意它从**所属容器**借 `Context`，而不是自己持有容器。 |
| 类型身份 | `internal class ElementSaveData : VariableSaveData` | `internal` + 继承自基类。继承带来 `MemberType` / `Value` / `MemberSaveId` / `TypeDefinition` 四个槽位字段与 `SaveTo` / `GetDataSize` 两个行为，`ElementSaveData` 自己只加两个元素专属属性和分支逻辑。 |

## 真实示例

三个分支的全文（`TaleWorlds.SaveSystem.Save/ElementSaveData.cs:11-30`，构造器整体）：

```csharp
public ElementSaveData(ContainerSaveData containerSaveData, object value, int index)
    : base(containerSaveData.Context)
{
    ElementValue = value;
    ElementIndex = index;
    if (value == null)
    {
        InitializeDataAsNullObject(MemberTypeId.Invalid);          // Object 标签 + Value = -1
        return;
    }
    TypeDefinitionBase typeDefinition = containerSaveData.Context.DefinitionContext.GetTypeDefinition(value.GetType());
    if (typeDefinition is TypeDefinition { IsClassDefinition: false })
    {
        InitializeDataAsCustomStruct(MemberTypeId.Invalid, index, typeDefinition);   // Value = 下标
    }
    else
    {
        InitializeData(MemberTypeId.Invalid, value.GetType(), typeDefinition, value);
    }
}
```

字典的键与值拿到不同的下标区间（`TaleWorlds.SaveSystem.Save/ContainerSaveData.cs:84-85`）：

```csharp
ElementSaveData elementSaveData  = new ElementSaveData(this, key, num);                 // 键：0 .. n-1
ElementSaveData elementSaveData2 = new ElementSaveData(this, value, _elementCount + num); // 值：n .. 2n-1
```

读档侧对应的两个分支（`TaleWorlds.SaveSystem.Load/ContainerLoadData.cs:130` 与 `:145`、`:152`、`:170`、`:184`，均判 `SavedMemberType.CustomStruct`）说明结构体元素在读档时走的是「去对象表取第 i 号」的路，而不是内联取值。

## 依赖关系

- 基类：[VariableSaveData](../VariableSaveData)（提供 `MemberType` / `Value` / `SaveTo` / `GetDataSize`；标签语义见 [SavedMemberType](../SavedMemberType)）
- 兄弟：[MemberSaveData](../MemberSaveData)（字段/属性槽位的抽象基类，与本类并列）、[FieldSaveData](../FieldSaveData)、[PropertySaveData](../PropertySaveData)
- 唯一生产者：[ContainerSaveData](../ContainerSaveData) 的 `CollectChildren`（`:84`、`:85`、`:99`、`:111`、`:124`）
- 读侧对照：[ElementLoadData](../ElementLoadData)、[ContainerLoadData](../ContainerLoadData)
- 无身份的原因：[MemberTypeId](../MemberTypeId) 的 `Invalid`；位置定位靠 `ElementIndex`
- 容器形状：[ContainerType](../ContainerType)（决定下标语义与是否补登 `MBList<>`）
- 体系全貌：../../../architecture/save-system
