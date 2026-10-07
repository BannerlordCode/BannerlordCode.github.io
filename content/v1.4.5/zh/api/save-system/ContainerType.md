---
title: "ContainerType"
description: "容器形状的七种枚举：List/Dictionary/Array/Queue 与引擎自带的两种只读列表，序号直接进存档字节。"
---

# ContainerType

**Namespace:** `TaleWorlds.SaveSystem`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `public enum ContainerType`
**Base:** `System.Enum`
**File:** `TaleWorlds.SaveSystem/ContainerType.cs`

## 概述

存档系统不关心「这是一个集合」这件事，它关心的是「这个集合按什么方式遍历和寻址」。`ContainerType` 就是这个答案的七项清单：`None`（不是容器）、`List`、`Dictionary`、`Array`、`Queue`，加上引擎自带的两种列表包装 `CustomList` / `CustomReadOnlyList`。判定由 [TypeExtensions](../TypeExtensions) 的 `IsContainer(Type, out ContainerType)` 完成（`TaleWorlds.SaveSystem/TypeExtensions.cs:15`），产物直接进 [ContainerSaveId](../ContainerSaveId) 的第一个属性，再由 `WriteTo` 写成**一个字节**（`ContainerSaveId.cs:52`）。所以这个枚举同时承担两个角色：运行时判定结果，以及存档格式的一部分。

## 心智模型

把它想成**货架的规格代号**：仓库只认这几种货架，`List` 是一排格子按顺序取，`Dictionary` 是标签对货格，`Array` 是固定长度的连续格子，`Queue` 只能从队尾进货。剩下的类型不是货架——`HashSet<T>`、`Stack<T>`、`IEnumerable<T>`、任何自定义集合都不在清单上，判定会返回 `None`，于是它们被当成普通引用类型处理。推论有三条：

1. **清单是封闭的，不做扩展。** `IsContainer` 里是五条硬编码的 `GetGenericTypeDefinition()` 相等比较（`TypeExtensions.cs:21/26/31/36/41`）加一个 `IsArray` 分支（`:47`）。想支持新集合类型，只能改引擎代码——所以 mod 遇到 `HashSet<T>` 字段时的正确做法不是想办法注册，而是**换字段声明类型**或自己写 definer 把它当普通类处理。
2. **`None` 是「不是容器」的返回默认值，不是「空容器」。** `IsContainer` 一进来就把 out 参数置成 `ContainerType.None`（`:17`），只在命中时才改。所以 `None` 从来不会被写进存档——[ContainerSaveId](../ContainerSaveId) 只会拿到真正的五种之一（`DefinitionContext.cs:421-447` 的 switch 没有 `None` 分支，`None` 会让 `keyId` 保持 null 并在下一行 `GetTypeDefinition(...)` 出问题）。
3. **序号是存档字节，不可重排。** `WriteTo` 写 `(byte)ContainerType`（`ContainerSaveId.cs:52`），`ReadFrom` 按同一序号还原（`:62`）。在枚举中间插入成员，所有旧档的容器身份全部错位。

还有一个容易漏的联动：`CustomList` / `CustomReadOnlyList` 不是随便就有的。`DefinitionContext.ConstructContainerDefinition` 在处理 `List` 时**额外登记** `MBList<>` 与 `MBReadOnlyList<>` 两个定义并给它们这两种形状（`DefinitionContext.cs:451-457`）——也就是说这两种形状的存在，依赖于同一次调用里恰好出现过 `List`。

## 如何使用

### 怎么拿到它

- 判定一个运行时类型是不是容器、是什么形状：`TypeExtensions.IsContainer` 是 `internal`，所以 mod 侧用不上。**从外部观察等价形状的办法是看它是否出现在容器的字段类型上**——只要 [DefinitionContext](../DefinitionContext) 查得到对应的 `ContainerDefinition`，它就是这七种之一。
- 从存档读出来：`ContainerSaveId.ReadFrom(IReader)` 的第一句 `containerType = (ContainerType)reader.ReadByte();`（`ContainerSaveId.cs:62`），这是唯一的还原入口。
- 从定义表读：`DefinitionContext.GetContainerDefinition(Type)`（`DefinitionContext.cs:500`）命中后读它的 `SaveId` 的形状。

### 最小可运行片段

```csharp
using TaleWorlds.SaveSystem;
using TaleWorlds.SaveSystem.Definition;

// 形状参与组成容器身份，因此容器身份的长度也随形状不同
var listId  = new ContainerSaveId(ContainerType.List,  new TypeSaveId(1));
var queueId = new ContainerSaveId(ContainerType.Queue, new TypeSaveId(1));
var dictId  = new ContainerSaveId(ContainerType.Dictionary, new TypeSaveId(1), new TypeSaveId(2));

Debug.Print(listId.GetStringId(),  0);        // "C(1)-(1)"
Debug.Print(queueId.GetStringId(), 0);        // "C(4)-(1)"
Debug.Print(dictId.GetStringId(),  0);        // "C(2)-(1,2)"
Debug.Print("同元素不同形状是不同身份 = " + !listId.Equals(queueId), 0);   // True

// 字节预算随形状与元素类型变化
Debug.Print("List<1> = "  + listId.GetSizeInBytes() + " 字节", 0);   // 7
Debug.Print("字典    = "  + dictId.GetSizeInBytes()  + " 字节", 0);   // 12
```

### 用它最容易踩的一条

**给存档字段写 `HashSet<T>` 或 `Stack<T>`，`IsContainer` 会返回 `None`，于是这个字段被当成普通引用类型走 `GetClassDefinition` 查找——查不到就在保存时抛异常。** [VariableSaveData](../VariableSaveData) 的 `InitializeData` 只有在 `TypeDefinition is ContainerDefinition` 时才走容器路线（`VariableSaveData.cs:44`），而 `HashSet<T>` 永远不会有 `ContainerDefinition`。表现是保存时 `SaveContext.CollectObjects` 抛 `"Could not find type definition of type: ..."`。**换存档字段的集合类型前，先确认它在这七项清单里。**

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `None` | `None`（序号 0） | `IsContainer` 的 out 参数初值（`TypeExtensions.cs:17`），表示「不是容器」。**从不进存档**：`DefinitionContext.ConstructContainerDefinition` 的 switch 没有 `None` 分支（`:421-447`）。 |
| `List` | `List`（序号 1） | 匹配开类型 `List<>`（`TypeExtensions.cs:26`）。**它是唯一会触发额外登记的形状**——命中后额外造出 `MBList<>` 与 `MBReadOnlyList<>` 两个定义（`DefinitionContext.cs:451-457`）。 |
| `Dictionary` | `Dictionary`（序号 2） | 匹配开类型 `Dictionary<,>`（`TypeExtensions.cs:21`）。**唯一带值身份的形状**：`ContainerSaveId` 的字典分支才写 `ValueId`（`ContainerSaveId.cs:54`），`GetSizeInBytes` 也只有它累加值（`:92`），`ReadFrom` 也只有它读两个身份（`:63`）。 |
| `Array` | `Array`（序号 3） | 匹配 `type.IsArray`（`TypeExtensions.cs:47`），赋值在 `:49`。元素身份取 `type.GetElementType()`（`DefinitionContext.cs:442`），与泛型容器走的是不同代码路径。 |
| `Queue` | `Queue`（序号 4） | 匹配开类型 `Queue<>`（`TypeExtensions.cs:41`）。与 List 走同一分支取 `GenericTypeArguments[0]` 当键身份（`DefinitionContext.cs:425-431`），但**不会触发 MBList 补登**。 |
| `CustomList` | `CustomList`（序号 5） | 匹配开类型 `MBList<>`（`TypeExtensions.cs:31`）。这是引擎自己的列表包装，落盘时与 `List` 用同一段元素身份数据，只靠这个序号区分。 |
| `CustomReadOnlyList` | `CustomReadOnlyList`（序号 6） | 匹配开类型 `MBReadOnlyList<>`（`TypeExtensions.cs:36`）。同样只在 `List` 命中时才会被登记（`DefinitionContext.cs:455`）。 |

## 真实示例

判定逻辑全文（`TaleWorlds.SaveSystem/TypeExtensions.cs:15-52`，`internal`，此处用于说明行为边界）：

```csharp
internal static bool IsContainer(this Type type, out ContainerType containerType)
{
    containerType = ContainerType.None;                      // 初值：不是容器
    if (type.IsGenericType && !type.IsGenericTypeDefinition)
    {
        Type genericTypeDefinition = type.GetGenericTypeDefinition();
        if (genericTypeDefinition == typeof(Dictionary<, >)) { containerType = ContainerType.Dictionary; return true; }
        if (genericTypeDefinition == typeof(List<>))         { containerType = ContainerType.List; return true; }
        if (genericTypeDefinition == typeof(MBList<>))       { containerType = ContainerType.CustomList; return true; }
        if (genericTypeDefinition == typeof(MBReadOnlyList<>)){ containerType = ContainerType.CustomReadOnlyList; return true; }
        if (genericTypeDefinition == typeof(Queue<>))        { containerType = ContainerType.Queue; return true; }
    }
    else if (type.IsArray)
    {
        containerType = ContainerType.Array;                 // 数组走独立分支
        return true;
    }
    return false;                                            // HashSet / Stack / IEnumerable 全部落在这里
}
```

`List` 命中后的额外登记（`TaleWorlds.SaveSystem.Definition/DefinitionContext.cs:451-457`）：

```csharp
if (containerType == ContainerType.List)
{
    AddContainerDefinition(new ContainerDefinition(typeof(MBList<>).MakeGenericType(type.GetGenericArguments()),
        new ContainerSaveId(ContainerType.CustomList, keyId, valueId), definedAssembly));
    AddContainerDefinition(new ContainerDefinition(typeof(MBReadOnlyList<>).MakeGenericType(type.GetGenericArguments()),
        new ContainerSaveId(ContainerType.CustomReadOnlyList, keyId, valueId), definedAssembly));
}
```

mod 视角的对照实验——同一个集合类型换个声明，身份与字节都变：

```csharp
// 顺序表 vs 队列：元素相同，身份不同（序号进了牌面）
var asList  = new ContainerSaveId(ContainerType.List,  new TypeSaveId(7));
var asQueue = new ContainerSaveId(ContainerType.Queue, new TypeSaveId(7));
Debug.Print(asList.GetStringId() + " vs " + asQueue.GetStringId(), 0);   // "C(1)-(7)" vs "C(4)-(7)"
Debug.Print("字节相同 = " + (asList.GetSizeInBytes() == asQueue.GetSizeInBytes()), 0);  // True，形状字节都占 1
```

## 依赖关系

- 判定者：[TypeExtensions](../TypeExtensions) 的 `IsContainer`（`internal`），是全模块唯一的形状来源
- 消费者：[ContainerSaveId](../ContainerSaveId)（第一个属性 + 落盘的形状字节）、[DefinitionContext](../DefinitionContext) 的 `ConstructContainerDefinition`（`:417`）
- 槽位标签：[SavedMemberType](../SavedMemberType) 里的 `Container` 序号，与本枚举在同一次判定里一起决定
- 两种引擎列表：../../core-extra/MBList 与 ../../core-extra/MBReadOnlyList（由 `List` 命中自动登记）
- 容器数据收集：[ContainerSaveData](../ContainerSaveData) 与 [ContainerLoadData](../ContainerLoadData)
- 与本枚举易混的：[MemberTypeId](../MemberTypeId)（成员编号）、[SaveId](../SaveId)（类型身份）
- 体系全貌：../../../architecture/save-system
