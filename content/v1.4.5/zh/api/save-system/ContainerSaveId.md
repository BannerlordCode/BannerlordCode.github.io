---
title: "ContainerSaveId"
description: "容器的存档身份：容器形状序号加上元素类型编号的组合，牌面形如 C(2)-(1,2)，字典额外携带值的身份。"
---

# ContainerSaveId

**Namespace:** `TaleWorlds.SaveSystem.Definition`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `public class ContainerSaveId : SaveId`
**Base:** `SaveId`
**File:** `TaleWorlds.SaveSystem.Definition/ContainerSaveId.cs`

## 概述

`List<Hero>` 和 `List<int>` 在存档里必须是两个不同的身份，否则读档时无法判断这串字节该还原成什么。`ContainerSaveId` 就是解决这件事的：它把**容器形状**（[ContainerType](../ContainerType)，如 List / Dictionary / Array）和**元素类型身份**捆在一起，成为一个可比较、可哈希、可递归的 `SaveId`。字典额外带一个值的身份，所以牌面比单元素容器长一截。落盘时它写一个标签字节 2、一个容器形状字节、再递归写元素身份（`ContainerSaveId.cs:49-58`），所以嵌套容器在存档里天然是嵌套结构，不需要额外表。

## 心智模型

把它当成**装箱标签**：箱子上先印「这是什么箱子」（容器形状），再印「里面装什么编号的东西」。由此推出四条边界：

1. **牌面在构造器里算一次，之后改属性不改牌面。** `_stringId` 是 `readonly`，由 `CalculateStringId()` 在两个构造器里各调一次（`:20`、`:28`），而三个属性都是 `{ get; set; }`（`:10/12/14`）。改属性之后 `WriteTo` 和 `GetSizeInBytes` 跟着变（它们读实时属性），`GetStringId` / `Equals` / `GetHashCode` 还停在旧字符串（[SaveId](../SaveId) 基类用后者）。**两套身份从此不一致。**
2. **单元素构造器喂给字典会直接炸。** `ContainerSaveId(containerType, elementId)` 只赋 `KeyId`、不赋 `ValueId`（`:16-21`），而 `CalculateStringId` 一旦发现 `ContainerType == Dictionary` 就无条件读 `ValueId.GetStringId()`（`:37`）。传 `Dictionary` 进两参构造器 = 构造期 `NullReferenceException`。
3. **值身份只在字典形状下才存在。** `WriteTo` 的值分支（`:54`）和 `GetSizeInBytes` 的值累加（`:90`）都以 `ContainerType == Dictionary` 为条件，`ReadFrom` 读的个数也是同一条件（`:63`）。写与读三处条件一致，所以**非字典容器在字节流里只有一个元素身份**——`Queue<int>` 和 `List<int>` 的差别只体现在容器形状字节上，不体现在元素身份上。
4. **嵌套容器靠递归解析。** `ReadFrom` 内部对每个元素身份再读一个标签字节分派（`:68-79`），其中 `case 2` 是对**自身的递归调用** `ReadFrom(reader)`（`:77`）。所以 `Dictionary<string, List<int>>` 的身份是三层嵌套，读的时候递归三层。

## 如何使用

### 怎么拿到它

- **正规路径：让 [DefinitionContext](../DefinitionContext) 造。** `ConstructContainerDefinition(Type type, Assembly definedAssembly)`（`TaleWorlds.SaveSystem.Definition/DefinitionContext.cs:417`）先 `type.IsContainer(out var containerType)` 判定形状（`:419`），再按形状取元素类型的 `SaveId` 拼出 `ContainerSaveId`（`:448`）。这是 mod 唯一该走的路。
- 读档侧：从字节流 `SaveId.ReadSaveIdFrom(reader)` 的 `case 2`（`SaveId.cs:41-42`）或 `ContainerSaveId.ReadFrom(reader)`（`:60`）。
- 手工 `new` 只在写自定义 definer 排查问题时有意义。

### 最小可运行片段

```csharp
using TaleWorlds.SaveSystem.Definition;

// 字典身份带键和值两个编号
var dictId = new ContainerSaveId(ContainerType.Dictionary, new TypeSaveId(1), new TypeSaveId(2));
Debug.Print(dictId.GetStringId(), 0);        // "C(2)-(1,2)"
Debug.Print(dictId.GetSizeInBytes(), 0);     // 2 + 5 + 5 = 12

// 单元素容器只带一个编号
var listId = new ContainerSaveId(ContainerType.List, new TypeSaveId(1));
Debug.Print(listId.GetStringId(), 0);        // "C(1)-(1)"
Debug.Print(listId.GetSizeInBytes(), 0);     // 2 + 5 = 7

// 形状不同则身份不同，即使元素完全一样
Debug.Print(listId.Equals(new ContainerSaveId(ContainerType.Queue, new TypeSaveId(1))), 0);  // False
```

### 用它最容易踩的一条

**不要用两参构造器去造字典身份。** `new ContainerSaveId(ContainerType.Dictionary, keyId)` 会让 `ValueId` 保持 null，而 `CalculateStringId()` 在 `:37` 无条件解引用它——异常发生在**构造器内部**，报错信息是一句空引用，跟「Dictionary」这个词一点关系都没有，看起来像是无关的偶发崩溃。正确写法永远是三参版本，哪怕值类型和键类型一样也照写。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `ContainerType` | `public ContainerType ContainerType { get; set; }` | 容器形状。**它是线上字节**：`WriteTo` 把它写成 `(byte)ContainerType`（`:52`），所以枚举序号就是存档格式，重排 [ContainerType](../ContainerType) 会毁掉所有旧档。字典形状同时决定牌面格式（`:34`）与是否写值身份（`:54`）。 |
| `KeyId` | `public SaveId KeyId { get; set; }` | 元素类型的身份（列表/队列/数组）或键类型的身份（字典）。**公开可写，但改了牌面不跟着变**——见心智模型第 1 条。`GetSizeInBytes` 无条件读它（`:89`）。 |
| `ValueId` | `public SaveId ValueId { get; set; }` | 只有字典形状下有意义。两参构造器下它是 null，而 `CalculateStringId`（`:37`）、`WriteTo`（`:56`）、`GetSizeInBytes`（`:92`）三处都会无判空直接解引用。 |
| `_stringId` | `private readonly string _stringId` | 构造期算好的牌面。字典走 `"C(" + (int)ContainerType + ")-(" + key + "," + value + ")"`（`:38`），其余走 `"C(" + (int)ContainerType + ")-(" + key + ")"`（`:41`）。**`readonly`，与三个可写属性不同步。** |
| 构造器 A | `public ContainerSaveId(ContainerType containerType, SaveId elementId)` | 单元素形状专用。赋 `ContainerType` 与 `KeyId`，`ValueId` 留 null。**字典形状下调用它会在 `CalculateStringId` 里空引用崩溃。** |
| 构造器 B | `public ContainerSaveId(ContainerType containerType, SaveId keyId, SaveId valueId)` | 三参版本，字典与其它形状都能安全使用。值身份对非字典形状无害——`WriteTo` 与 `GetSizeInBytes` 都按字典条件忽略它，所以多传不改变字节。 |
| `CalculateStringId` | `private string CalculateStringId()` | 按 `ContainerType == Dictionary` 分两支拼牌面（`:34-42`）。私有，只在两个构造器末尾各调一次。开头那句 `string text = "";`（`:33`）是残留死代码，实际没用到。 |
| `GetStringId` | `public override string GetStringId()` | 返回缓存牌面（`:46`）。[SaveId](../SaveId) 基类的 `GetHashCode` 与 `Equals` 都依赖它，所以**这个缓存值就是它在字典里的身份**。 |
| `WriteTo` | `public override void WriteTo(IWriter writer)` | 写标签 2（`:51`）+ 容器形状字节（`:52`）+ `KeyId.WriteTo`（`:53`），仅字典追加 `ValueId.WriteTo`（`:56`）。元素身份由各自的 `WriteTo` 递归写入。 |
| `ReadFrom` | `public static ContainerSaveId ReadFrom(IReader reader)` | 读形状字节（`:62`），按是否字典决定读 1 个还是 2 个元素身份（`:63`），每个身份按标签 0/1/2 分派（`:69-78`）。最后统一走三参构造器（`:84`），所以**读回来的对象 `ValueId` 在非字典形状下也是 null**，与手写两参构造器一致。 |
| `GetSizeInBytes` | `public override int GetSizeInBytes()` | `2 + KeyId.GetSizeInBytes()`，字典再加值的大小（`:89-92`）。那个 2 是「标签 1 字节 + 形状 1 字节」。供 `VariableSaveData.GetDataSize()` 预算用。 |

## 真实示例

官方构造容器身份的地方（`TaleWorlds.SaveSystem.Definition/DefinitionContext.cs:421-448`）：

```csharp
SaveId keyId = null;
SaveId valueId = null;
switch (containerType)
{
    case ContainerType.List:
    case ContainerType.Queue:
    case ContainerType.CustomList:
    case ContainerType.CustomReadOnlyList:
        keyId = GetTypeDefinition(type.GenericTypeArguments[0]).SaveId;
        break;
    case ContainerType.Dictionary:
        keyId = GetTypeDefinition(type.GenericTypeArguments[0]).SaveId;
        valueId = GetTypeDefinition(type.GenericTypeArguments[1]).SaveId;
        break;
    case ContainerType.Array:
        keyId = GetTypeDefinition(type.GetElementType()).SaveId;
        break;
}
ContainerSaveId saveId = new ContainerSaveId(containerType, keyId, valueId);
```

注意紧接着的这一段（`DefinitionContext.cs:451-457`）——**只有 `List` 会顺带登记两个额外身份**：

```csharp
if (containerType == ContainerType.List)
{
    AddContainerDefinition(new ContainerDefinition(typeof(MBList<>).MakeGenericType(type.GetGenericArguments()),
        new ContainerSaveId(ContainerType.CustomList, keyId, valueId), definedAssembly));
    AddContainerDefinition(new ContainerDefinition(typeof(MBReadOnlyList<>).MakeGenericType(type.GetGenericArguments()),
        new ContainerSaveId(ContainerType.CustomReadOnlyList, keyId, valueId), definedAssembly));
}
```

mod 视角的对照实验：

```csharp
var a = new ContainerSaveId(ContainerType.List, new TypeSaveId(1));
var b = new ContainerSaveId(ContainerType.Queue, new TypeSaveId(1));
Debug.Print("同元素不同形状，身份相同吗 = " + a.Equals(b), 0);       // False
Debug.Print("List 牌面 " + a.GetStringId() + "，字节 " + a.GetSizeInBytes(), 0);
Debug.Print("Queue 牌面 " + b.GetStringId() + "，字节 " + b.GetSizeInBytes(), 0);

// 反例：单参构造器 + Dictionary
// new ContainerSaveId(ContainerType.Dictionary, new TypeSaveId(1));  // 构造期 NullReferenceException
```

## 依赖关系

- 基类：[SaveId](../SaveId)（标签 2 的分派入口与相等契约）
- 形状枚举：[ContainerType](../ContainerType)（第二个线上字节，序号不可重排）
- 元素身份：[TypeSaveId](../TypeSaveId)（最常见的一种元素）、[GenericSaveId](../GenericSaveId)（元素本身是闭合泛型时）
- 构造者：[DefinitionContext](../DefinitionContext) 的 `ConstructContainerDefinition`，以及 [TypeExtensions](../TypeExtensions) 的 `IsContainer` 判定
- 自动补登：`MBList<>` 与 `MBReadOnlyList<>` 由 `DefinitionContext.cs:451-457` 自动登记，见 ../../core-extra/MBList 与 ../../core-extra/MBReadOnlyList
- 写盘与读盘两侧：[SaveContext](../SaveContext) 的收集与 [LoadContext](../LoadContext) 的解析
- 体系全貌：../../../architecture/save-system
