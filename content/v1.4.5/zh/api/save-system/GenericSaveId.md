---
title: "GenericSaveId"
description: "闭合泛型类型的存档身份：一个开类型编号加上各泛型实参的编号，牌面形如 G(100)-(5,330001)，只在读档时按需构造。"
---

# GenericSaveId

**Namespace:** `TaleWorlds.SaveSystem.Definition`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `internal class GenericSaveId : SaveId`
**Base:** `SaveId`
**File:** `TaleWorlds.SaveSystem.Definition/GenericSaveId.cs`

## 概述

`Dictionary<string, Hero>` 和 `Dictionary<string, int>` 是两个完全不同的运行时类型，但存档系统不可能为每一种闭合泛型组合都手工登记一个编号。`GenericSaveId` 就是自动化方案：它只记**开类型编号**（`Dictionary<,>` 被登记成多少号）加上**每个泛型实参各自的身份**，牌面拼成 `G(开类型号)-(实参1,实参2,...)`。实参身份本身又是 `SaveId`，所以可以递归嵌套——`Dictionary<string, List<int>>` 会形成三层结构。这类身份不预先存在：它是 [DefinitionContext](../DefinitionContext) 在读档时按 `GenericSaveId` 现场构造出闭合 `Type`、再现场 `new GenericTypeDefinition` 并缓存起来的（`DefinitionContext.cs:347-372`）。注意它是 `internal`——mod 无法在源码里直接引用这个类型名。

## 心智模型

把它想成**拼接出来的全名**：`G(100)-(5,330001)` 读作「编号 100 的那个开类型，套上编号 5 和编号 330001」。由此推出四条边界：

1. **`BaseId` 声明成 `SaveId`，但构造器只收 `TypeSaveId`。** 签名是 `public GenericSaveId(TypeSaveId baseId, SaveId[] saveIds)`（`:14`），属性却是 `public SaveId BaseId { get; set; }`（`:10`）。这不是笔误的受害者——[DefinitionContext](../DefinitionContext) 构造时对开类型的 `SaveId` 做硬转换 `(TypeSaveId)classDefinition.SaveId`（`DefinitionContext.cs:391`），**如果哪天开类型被登记成非 `TypeSaveId`，这里会抛 `InvalidCastException`**，而不是给出可读错误。
2. **泛型实参个数被压成一个字节。** `WriteTo` 写 `writer.WriteByte((byte)GenericTypeIDs.Length)`（`:45`），`ReadFrom` 用 `byte b = reader.ReadByte()` 决定循环几次（`:56`）。CLR 的泛型参数上限远小于 256，所以实际不会截断；但这说明**协议假定「闭合泛型的元数是常量」**，不是运行时任意值。
3. **`ReadFrom` 第一行把标签字节读出来然后丢掉。** `reader.ReadByte();`（`:54`）没有任何赋值。因为 `ReadSaveIdFrom` 在分派到本方法之前已经消费过标签了（`SaveId.cs:38-39`），所以这行是**第二次读**——直接对流从标签位置调用 `GenericSaveId.ReadFrom` 是正确的，直接对流从标签之后的位置调用则会错位。这行代码的真实作用是「保持与 `WriteTo` 的字节布局对称」，不是读取。
4. **牌面同样在构造器里定死。** `_stringId` 是 `readonly`（`:8`），而 `BaseId` 与 `GenericTypeIDs` 都是 `{ get; set; }`（`:10/12`）。`GenericTypeIDs` 还是**数组引用**——外部持有同一个数组就能改掉元素，牌面却不变，与 [ContainerSaveId](../ContainerSaveId) 同样的失配风险。

## 如何使用

### 怎么拿到它

因为是 `internal`，mod 只有三条路：

- 从定义表读：`DefinitionContext.TryGetTypeDefinition(SaveId saveId)` 命中 `GenericSaveId` 时（`:347`），会现场 `MakeGenericType` 造出闭合类型并 `new GenericTypeDefinition(type, genericSaveId)`（`:362`、`:365`），再按 `IsClassDefinition` 注册进类表或结构表。**你传进去的号如果实参解析不出来，它返回 null**（`:358`）。
- 从字节流：`SaveId.ReadSaveIdFrom(reader)` 的 `case 1`（`SaveId.cs:38-39`）。读回来时 `GenericSaveId.ReadFrom` 会递归处理嵌套的实参身份（`:67` 的 `case 1` 是自递归）。
- 从保存期的 [SaveContext](../SaveContext)：容器元素的类型身份在收集时通过 `GetTypeDefinition(type).SaveId` 取出（`DefinitionContext.cs:430`），泛型组合自然就是本类型。

### 最小可运行片段

```csharp
using TaleWorlds.SaveSystem.Definition;
using System.Collections.Generic;

// 开类型身份 + 两个实参身份
var heroMapId = new GenericSaveId(
    new TypeSaveId(100),                                  // Dictionary<,> 的开类型号
    new SaveId[] { new TypeSaveId(5), new TypeSaveId(330001) });

Debug.Print(heroMapId.GetStringId(), 0);        // "G(100)-(5,330001)"
Debug.Print(heroMapId.GetSizeInBytes(), 0);     // 2 + 5 + 5 + 5 = 17

// 实参本身也可以是容器身份 → 递归嵌套
var nested = new GenericSaveId(
    new TypeSaveId(100),
    new SaveId[] { new TypeSaveId(5), new ContainerSaveId(ContainerType.List, new TypeSaveId(9)) });
Debug.Print(nested.GetStringId(), 0);          // "G(100)-(5,C(1)-(9))"
```

### 用它最容易踩的一条

**别试图从 mod 代码里 `new GenericSaveId(...)`——它是 `internal`，编译不过。** 看起来合理的做法是自己写一个同名的泛型身份类塞进去，结果是存档里多出一套 `DefinitionContext` 不认识的标签；读档时 `SaveId.ReadSaveIdFrom` 的 `case 1` 会反序列化出一个引擎的 `GenericSaveId`，而反查 `DefinitionContext.TryGetTypeDefinition` 时基类型或某个实参解析不出来就**直接返回 null**（`DefinitionContext.cs:360-363`），错误一路飘到字段赋值才炸。正确姿势是：让 [SaveableTypeDefiner](../SaveableTypeDefiner) 登记开类型，让 `DefinitionContext` 在读档时替你造闭合身份。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `BaseId` | `public SaveId BaseId { get; set; }` | 开类型的身份。声明为 `SaveId` 但构造器只接受 `TypeSaveId`（`:14`），`CalculateStringId` 与 `WriteTo` 都直接当 `SaveId` 用（`:33`、`:44`）。`DefinitionContext.cs:391` 对开类型身份做硬转换，这条链上任何一环类型不符都会抛 `InvalidCastException`。 |
| `GenericTypeIDs` | `public SaveId[] GenericTypeIDs { get; set; }` | 泛型实参身份数组，**顺序即类型参数顺序**。`CalculateStringId` 按顺序用逗号拼接（`:24-32`），`WriteTo` 逐个递归写（`:46-49`）。公开可写且是数组引用——外部改元素不会更新 `_stringId`。 |
| `_stringId` | `private readonly string _stringId` | 构造期缓存的牌面（`:18` 调 `CalculateStringId()`）。格式 `"G(" + BaseId.GetStringId() + ")-(" + 逗号连接实参 + ")"`（`:33`）。`readonly`，是 `Equals` / `GetHashCode` 的唯一依据。 |
| 构造器 | `public GenericSaveId(TypeSaveId baseId, SaveId[] saveIds)` | 两个参数都被直接赋给属性后立刻算牌面（`:16-18`）。**不做空数组检查、不做 null 检查、不检查实参数量是否匹配开类型元数**——传入 0 个实参会得到牌面 `"G(100)-()"`。 |
| `CalculateStringId` | `private string CalculateStringId()` | 循环拼接，索引非 0 时先加逗号（`:26-29`）。开头 `string text = "";`（`:23`）是死代码。私有，只在构造器末尾调一次。 |
| `GetStringId` | `public override string GetStringId()` | 返回缓存牌面（`:38`）。嵌套实参的牌面会被原样嵌进外层，所以一个深层嵌套容器会产生很长的字符串——而 [DefinitionContext](../DefinitionContext) 的字典键哈希就是基于它。 |
| `WriteTo` | `public override void WriteTo(IWriter writer)` | 写标签 1（`:43`）、`BaseId.WriteTo`（`:44`）、实参个数字节（`:45`）、逐个实参递归（`:46-49`）。**顺序必须与 `ReadFrom` 完全对称**，任何一侧改动都会让整个嵌套结构错位。 |
| `ReadFrom` | `public static GenericSaveId ReadFrom(IReader reader)` | 第一行 `reader.ReadByte()` 无赋值地丢弃标签（`:54`），然后读基（`:55`）、读个数（`:56`）、按个数循环按标签分派（`:58-72`），最后 `new GenericSaveId(baseId, list.ToArray())`（`:75`）。`case 1` 是对自身的递归调用（`:67`），对应嵌套泛型。 |
| `GetSizeInBytes` | `public override int GetSizeInBytes()` | `2 + BaseId.GetSizeInBytes()` 再逐个累加实参大小（`:80-83`）。那个 2 是「标签 1 字节 + 实参个数 1 字节」。深嵌套会让它迅速变大，写盘方据此预留缓冲区。 |

## 真实示例

读档期现场构造闭合身份（`TaleWorlds.SaveSystem.Definition/DefinitionContext.cs:351-372`）。**构造点不止一处**：除这段泛型分支外，`ConstructGenericStructDefinition` 也造一个（`DefinitionContext.cs:518`），而它自己的 `ReadFrom` 反序列化时更会 `new` 一个（`GenericSaveId.cs:75`）。**准确说法是「存档期为闭合泛型定义构造身份只走 DefinitionContext；反序列化走自己的 ReadFrom」**：

```csharp
if (saveId is GenericSaveId genericSaveId)
{
    SaveId baseId = genericSaveId.BaseId;
    if (TryGetTypeDefinition(baseId) is TypeDefinition baseClassDefinition)
    {
        TypeDefinitionBase[] array = new TypeDefinitionBase[genericSaveId.GenericTypeIDs.Length];
        for (int i = 0; i < genericSaveId.GenericTypeIDs.Length; i++)
        {
            SaveId saveId2 = genericSaveId.GenericTypeIDs[i];
            TypeDefinitionBase typeDefinitionBase = TryGetTypeDefinition(saveId2);
            if (typeDefinitionBase == null)
            {
                return null;      // 任一实参解析不出来 → 整个身份失败
            }
            array[i] = typeDefinitionBase;
        }
        Type type = ConstructTypeFrom(baseClassDefinition, array);
        GenericTypeDefinition genericTypeDefinition = new GenericTypeDefinition(type, genericSaveId);
        genericTypeDefinition.CollectInitializationCallbacks();
        genericTypeDefinition.CollectFields();
        genericTypeDefinition.CollectProperties();
        // 按 IsClassDefinition 注册进类表或结构表，之后再遇到同一个号直接命中缓存
        return genericTypeDefinition;
    }
}
```

mod 视角的对照：为什么实参解析失败会让整条路断掉

```csharp
// 假设 List<T> 的开类型号是 1，而 T 被登记成 999（并不存在）
// DefinitionContext ctx = ...;
// TypeDefinitionBase def = ctx.TryGetTypeDefinition(new GenericSaveId(
//     new TypeSaveId(1), new SaveId[] { new TypeSaveId(999) }));
// def == null   ← 不是抛异常，而是安静地给回 null
```

## 依赖关系

- 基类：[SaveId](../SaveId)（标签 1 的分派入口；嵌套泛型靠它递归）
- 开类型身份：[TypeSaveId](../TypeSaveId)（`BaseId` 在实践中总是它，`DefinitionContext.cs:391` 硬转换）
- 实参可以是任何身份：[TypeSaveId](../TypeSaveId)、[ContainerSaveId](../ContainerSaveId) 或本类型自身
- 生产路径：[DefinitionContext](../DefinitionContext) 的 `TryGetTypeDefinition` 泛型分支（`:347-372`）与 `ConstructGenericClassDefinition`（`:387`）；反序列化另有 `GenericSaveId.cs:75` 一条
- 承载的运行时对象：[GenericTypeDefinition](../GenericTypeDefinition)（现场造出来后才会注册进表）
- 私有成员名映射：开类型的私有字段靠 [CustomField](../CustomField) 拿到稳定编号，见 [SaveableBasicTypeDefiner](../SaveableBasicTypeDefiner) 里 `Tuple<,>` 的登记
- 落盘与解析：[SaveContext](../SaveContext) 与 [LoadContext](../LoadContext)
- 体系全貌：../../../architecture/save-system
