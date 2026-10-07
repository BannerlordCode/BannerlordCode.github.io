---
title: "ElementLoadData"
description: "容器里一个元素的读档槽位：14 行、只声明 1 个属性与 1 个构造器，但它分不清自己是 key 还是 value——那个区别只存在于「被放进 _keys 还是 _values」这个事实里。"
---

# ElementLoadData

**Namespace:** `TaleWorlds.SaveSystem.Load`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `internal class ElementLoadData : VariableLoadData`
**Base:** `VariableLoadData`
**File:** `Bannerlord.Source/bin/TaleWorlds.SaveSystem/TaleWorlds.SaveSystem.Load/ElementLoadData.cs`

## 概述

`ElementLoadData` 是 **14 行**的类型，自己只声明了 **2 个成员**：一个只读属性 `ContainerLoadData`（`:7`，指回宿主容器）与一个 internal 构造器（`:9-13`）。**它的其余能力全部继承自 [VariableLoadData](../VariableLoadData/)** —— `Context`、`MemberSaveId`、`SavedMemberType`、`Data`、`Read()`、`GetDataToUse()` 一个都不在本文件里。

它是「容器（`Dictionary` / `List`）里一个元素」的读档槽位。唯一的创建者是 [ContainerLoadData](../ContainerLoadData/)：`ContainerLoadData.cs:71` 与 `:76`。

## 心智模型

把它当成**「一个槽位，不是一个元素」**。三条推论：

第一,**它自己不知道自己装的是 key 还是 value。** `ContainerLoadData` 持有**两个等长的平行数组**：`private ElementLoadData[] _values`（`:19`）与 `private ElementLoadData[] _keys`（`:21`），都在 `:42`/`:43` 按 `_elementCount` 分配。构造时取的是**不同的存档条目**：
```
ContainerLoadData.cs:70   GetEntry(new EntryId(j, SaveEntryExtension.Value))  →  :71  new ElementLoadData →  :72  _values[j]
ContainerLoadData.cs:75   GetEntry(new EntryId(j, SaveEntryExtension.Key))    →  :76  new ElementLoadData →  :77  _keys[j]
      ↑ 而且 _keys 只在 :73 的 if (_containerType == ContainerType.Dictionary) 里才填
```
**⇒ 一个字典的元素要占两个 `ElementLoadData` 实例；而「这是 key」这件事只存在于它被写进哪个数组，对象内部没有任何字段记录。**

第二,**`ContainerLoadData` 属性是唯一的「反向指针」，而它的唯一用途是取 `Context`。** 构造器 `:10` 写的是 `base(containerLoadData.Context, reader)` —— **基类拿到的是 `Context`，不是容器**。所以那行 `:12` 的 `ContainerLoadData = containerLoadData;` **对基类初始化没有任何作用**，它是给外部（`ContainerLoadData` 自身遍历数组时）用的回指。

第三,`Read()` 与 `GetDataToUse()` 都继承而来，本类**一个 override 都没有**。**⇒ 元素槽位的读取语义完全由基类决定**，与「key 还是 value」无关。

边界：**`internal` 类，编译期不可引用。**

## 如何使用

**怎么拿到它**：**你拿不到它。** 它是 `internal`，且唯一创建者是 `internal` 的 `ContainerLoadData`。能观察到的只有间接后果：容器里某个元素读档后取不到值。

它的「key/value 身份由数组决定」这个事实，复现形态如下：

```csharp
using TaleWorlds.SaveSystem.Load;
using TaleWorlds.Library;

// ContainerLoadData 的两组平行数组（源码 ContainerLoadData.cs:19/:21/:42/:43）
//   _values[j] ← new ElementLoadData(this, readerFromEntry(Value))    // :70-:72  每个容器类型都填
//   _keys[j]   ← new ElementLoadData(this, readerFromEntry(Key))      // :75-:77  仅 Dictionary 才填
// ⇒ List 容器：_elementCount 个实例；Dictionary 容器：2 * _elementCount 个实例
// 而 ElementLoadData.cs 全文 14 行里没有任何字段区分 key / value
Debug.Print("key 与 value 是两个等长数组，装同一种对象", 0);
```

**用它最容易踩的一条**：**「key 读不出来」与「value 读不出来」在类型上完全同形。** 因为 `_keys` 只在 `_containerType == ContainerType.Dictionary` 时才填（`:73`），**非字典容器的 `_keys` 数组是 `new ElementLoadData[_elementCount]` 分配后从未写入的全 null 数组**。**⇒ 任何读到「`ElementLoadData` 是 null」的路径，第一步要分清是「这个容器的 `_keys` 本来就不填」还是「这个槽位真的没数据」。**

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `ContainerLoadData` | `public ContainerLoadData ContainerLoadData { get; private set; }` | **本类声明的唯一属性（`:7`）。** 指回宿主容器。**注意它不是给基类用的** —— 构造器 `:10` 传给基类的是 `containerLoadData.Context` 而不是容器本身。**所以 `:12` 的赋值对基类初始化无作用**，它的用途是让外部能从一个槽位回到容器。 |
| `ElementLoadData(ContainerLoadData, IReader)` | `internal ElementLoadData(ContainerLoadData containerLoadData, IReader reader) : base(containerLoadData.Context, reader)` | **唯一构造器（`:9-13`）。** `:10` 的 `containerLoadData.Context` **无判空** —— 传 null 会先在 `:10` 抛。**`IReader` 直接转交基类**，本类不保存它。 |

## 真实示例

两个平行数组的完整生命周期（这是本类唯一需要理解的东西）：

```csharp
// 源码 ContainerLoadData.cs
//  :19  private ElementLoadData[] _keys;
//  :21  private ElementLoadData[] _values;
//  :42  _keys   = new ElementLoadData[_elementCount];
//  :43  _values = new ElementLoadData[_elementCount];
//  :68  for (int j = 0; j < _elementCount; j++)
//  :70      reader = saveEntryFolder.GetEntry(new EntryId(j, SaveEntryExtension.Value)).GetBinaryReader();
//  :71      ElementLoadData valueSlot = new ElementLoadData(this, reader);
//  :72      _values[j] = valueSlot;
//  :73      if (_containerType == ContainerType.Dictionary)
//  :75          reader2 = saveEntryFolder.GetEntry(new EntryId(j, SaveEntryExtension.Key)).GetBinaryReader();
//  :76          ElementLoadData keySlot = new ElementLoadData(this, reader2);
//  :77          _keys[j] = keySlot;
//  :101 _values[i].Read();   :104 _keys[i].Read();
// ⇒ 读阶段也分两路：先读所有 value（:101），再读所有 key（:104）
Debug.Print("分配 42/43 → 填 72/77 → 读 101/104，三段都是 keys 与 values 对称处理", 0);
```

本类继承而来的能力（全部不在这个 14 行文件里）：

```csharp
// VariableLoadData.cs（本类的基类，internal abstract class，见 :7）
//   :17  public LoadContext Context { get; private set; }
//   :19  public MemberTypeId MemberSaveId { get; private set; }
//   :21  public SavedMemberType SavedMemberType { get; private set; }
//   :23  public object Data { get; private set; }
//   :25  protected VariableLoadData(LoadContext context, IReader reader)   ← 本类 :10 调的就是它
//   :31  public void Read()
//   :79  public void SetCustomStructData(object)
//   :84  public object GetDataToUse()
// ⇒ ElementLoadData 自己声明 2 个成员，继承 7 个，一个 override 都没有
Debug.Print("声明 2 个 / 继承 7 个 / override 0 个", 0);
```

## 风险与边界

- **`internal` 类，编译期不可引用。** `:5`。**mod 无法构造它，也无法声明它的类型。**
- **14 行、2 个自有成员。** 本页的实质内容**全部来自它的两个创建点与基类**；类本身几乎没有可写的逻辑。**我如实标注这一点，而不是把基类的 7 个成员抄成本页的成员表。**
- **对象内部没有「我是 key 还是 value」的记录。** 只有「被放进 `_keys` 还是 `_values`」。**⇒ 任何脱离宿主容器单独观察 `ElementLoadData` 的代码都无法判断它的角色。**
- **非字典容器的 `_keys` 是全 null 数组。** `ContainerLoadData.cs:43` 分配、只在 `:73` 的 Dictionary 分支里填。**⇒ 读到 null 槽位时，先确认容器类型。**
- **构造器 `:10` 无判空。** `containerLoadData.Context` 在 null 上会抛。
- **`IReader` 不被本类保存。** `:10` 直接转交基类。**⇒ 想在元素槽位上再读一次流是做不到的。**
- **读阶段 keys 与 values 分两趟。** `ContainerLoadData.cs:101` 与 `:104`。**⇒ 数组顺序敏感**——不过我没有读 `:95`-`:105` 的完整上下文，**不断言**这个顺序是否可交换。

## 参见

- 唯一创建者与宿主：[ContainerLoadData](../ContainerLoadData/)（`:19`/`:21` 声明、`:42`/`:43` 分配、`:70`-`:77` 构造、`:101`/`:104` 读取）
- 基类：[VariableLoadData](../VariableLoadData/)（`:7` `internal abstract class`、`:17`/`:19`/`:21`/`:23` 属性、`:25` 构造、`:31` `Read()`、`:84` `GetDataToUse()`）
- 同族的另外两个槽位类型：[FieldLoadData](../FieldLoadData/)、[PropertySaveData](../PropertySaveData/)（属性侧）、[MemberSaveData](../MemberSaveData/)（成员侧基类）
- 存档条目寻址：`SaveEntryExtension.Value` / `.Key` 与 `EntryId`（`ContainerLoadData.cs:70`/`:75`）
- 桶首页：[save-system API 分区](../)