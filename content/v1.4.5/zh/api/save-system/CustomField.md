---
title: "CustomField"
description: "给没有存档 Attribute 的私有字段手工分配的编号与名字映射，引擎用它登记 Tuple、Nullable、KeyValuePair 等 BCL 类型的内部成员。"
---

# CustomField

**Namespace:** `TaleWorlds.SaveSystem.Definition`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `public class CustomField`
**Base:** 无
**File:** `TaleWorlds.SaveSystem.Definition/CustomField.cs`

## 概述

存档系统给字段编号的常规办法是打 [SaveableFieldAttribute](../SaveableFieldAttribute) 或 [SaveablePropertyAttribute](../SaveablePropertyAttribute)。但有些类型不是 TaleWorlds 写的——`Tuple<,>`、`Nullable<>`、`KeyValuePair<,>`、`ValueTuple<,>`、`MBReadOnlyDictionary<,>`、引擎的 `PriorityQueue<,>`——它们的私有字段你既不能加 Attribute（源码不是你的）也不该加（加了也编不过）。`CustomField` 就是这条后门：它把「私有字段的真实名字」映射到一个稳定的短整数编号，让存档系统照样能把这些字段读出来。引擎自己的 [SaveableBasicTypeDefiner](../SaveableBasicTypeDefiner) 就是靠它登记这六类类型的，mod 也可以给自己的第三方类型走同一条路。

## 心智模型

把它想成**贴在杂物间抽屉上的手写标签**：抽屉本身没有编号系统，就靠标签告诉档案员「第 1 号抽屉里是 m_Item1，第 2 号是 m_Item2」。由此推出四条边界：

1. **这里的 `SaveId` 和 [SaveId](../SaveId) 家族没有任何关系。** 它是一个 `short`，表示「某个类型内部第几个成员」；[SaveId](../SaveId) 体系表示「类型在存档里的身份」。名字撞车，但一个是 `short` 局部号，一个是可递归的字节流结构。同理也不要和 [MemberTypeId](../MemberTypeId) 里的 `LocalSaveId` 混：那个是带层级前缀的字段/属性号，这个是给无 Attribute 成员单独开的一张小表。
2. **名字是字符串，靠反射真去匹配，但匹配失败会被解引用。** 存的是 `Name`（`:5`），读取方用它找运行时类型上的字段。所以**改了 BCL 内部字段的名字，查找返回 null**，而消费方 [TypeDefinition](../TypeDefinition) 拿到之后**直接解引用**它的 `DeclaringType`（`TypeDefinition.cs:211`，而查找在 `:210`）——**没有判空**，所以这是启动期的空引用异常，不是读档时的静默降级。
3. **两个属性都是私有 setter，构造后不可变。** `Name` 与 `SaveId` 都是 `{ get; private set; }`（`:5`、`:7`），构造器一次性赋完（`:11-12`）。这是本模块里少见的真正不可变类型，`_stringId` 那类缓存不同步的风险在这里不存在。
4. **它是 14 行的纯数据，没有行为。** 本类不做反射、不校验名字存在性、不检查编号重复——**但它不做的校验不代表下游不崩**：名字找不到会在解析处空引用；编号重复则会被 [TypeDefinition](../TypeDefinition) 记进它的 `Errors` 并让整局拒绝存档。所以**传两个一样的 `saveId` 给同一个类型不会当场报错，但后果同样是致命的**。

## 如何使用

### 怎么拿到它

**不要手工 `new`。** 它只由 [SaveableTypeDefiner](../SaveableTypeDefiner) 的两个带字段版 helper 创建：

- `AddClassDefinitionWithCustomFields(Type type, int saveId, IEnumerable<Tuple<string, short>> fields, IObjectResolver resolver = null)`（`TaleWorlds.SaveSystem/SaveableTypeDefiner.cs:93`）——对每个元组调 `typeDefinition.AddCustomField(field.Item1, field.Item2)`（`:99`）。
- `AddStructDefinitionWithCustomFields(...)`（`:103`），同样在 `:109` 调 `AddCustomField`。

传进去的不是 `CustomField` 列表，而是 `IEnumerable<Tuple<string, short>>`；`CustomField` 对象是 `AddCustomField` 内部造出来的。另一条读取路径：闭泛型定义现场构造时，[DefinitionContext](../DefinitionContext) 会把开类型定义上的 `CustomFields` 逐个复制到新的 `GenericTypeDefinition` 上（`DefinitionContext.cs:401-403`）。

### 最小可运行片段

```csharp
using TaleWorlds.SaveSystem.Definition;

// 手写标签本身很小：名字 + 局部号
var field = new CustomField("m_Item1", 1);
Debug.Print(field.Name, 0);       // "m_Item1"
Debug.Print(field.SaveId, 0);     // 1

// 官方用法：把自己的第三方类型登记进去（写在自定义 definer 内）
protected override void DefineStructTypes()
{
    AddStructDefinitionWithCustomFields(typeof(MyPair), 700,
        new[] { new Tuple<string, short>("Key", 1), new Tuple<string, short>("Value", 2) });
}
```

### 用它最容易踩的一条

**登记的字段名写错，是启动期的空引用异常，不是读档时的静默降级。** `AddCustomField` 只做「名字 + 编号」的登记（`SaveableTypeDefiner.cs:99` 只传字符串进去），确实没有「这个名字在类型上真的存在」的校验；但真正解析名字的 [TypeDefinition](../TypeDefinition) 在第二个循环里查完就解引用（`TypeDefinition.cs:210` 查、`:211` 用），**没有判空**。如果 `Tuple<,>` 的内部字段名被写成 `item1` 而不是 `m_Item1`，`GetField` 返回 null，紧接着的 `GetClassLevel(field.DeclaringType)` 立刻空引用——**炸在 `SaveManager.InitializeGlobalDefinitionContext()` 阶段，整局游戏起不来**。所以这条的修法是「先拿反射确认真实字段名」，而不是「以为它会安静降级」。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `Name` | `public string Name { get; private set; }` | 运行时类型上那个成员的**真实字段名**。引擎的登记全部用 BCL 内部名，例如 `m_Item1` / `m_Item2`（`SaveableBasicTypeDefiner.cs:45`），以及 `_baseHeap`（第 50 行）、`_dictionary`（第 54 行）。靠它做反射匹配，**名字写错会在 `TypeDefinition.cs:211` 被解引用为空引用**——启动期炸，不是静默降级。 |
| `SaveId` | `public short SaveId { get; private set; }` | 该成员在本类型内部的稳定编号。**与 [SaveId](../SaveId) 家族同名但毫无关系**——那是 `short` 局部号，不是类型身份。构造后不可变。 |
| 构造器 | `public CustomField(string name, short saveId)` | 两个属性一次性赋值（`:11-12`），无校验。`name` 传 null 或空串都不会拦，编号重复也不会拦。实际由 `AddCustomField` 内部调用，mod 极少直接构造。 |
| 所在类型 | `public class CustomField` | **无基类、无接口、无方法**，纯数据载体。因为它在 `TypeDefinition.CustomFields` 里被逐个枚举（`DefinitionContext.cs:401`），行为全在消费方。 |

## 真实示例

引擎登记 BCL 类型的六处，全部走这个机制（`TaleWorlds.SaveSystem/SaveableBasicTypeDefiner.cs:43-72`）：

```csharp
// Tuple<,>：两个字段，编号 1 和 2
AddClassDefinitionWithCustomFields(typeof(Tuple<, >), 100, new Tuple<string, short>[2]
{
    new Tuple<string, short>("m_Item1", 1),
    new Tuple<string, short>("m_Item2", 2)
});

// PriorityQueue<,>：一个私有字段
AddClassDefinitionWithCustomFields(typeof(TaleWorlds.Library.PriorityQueue<, >), 103, new Tuple<string, short>[1]
{
    new Tuple<string, short>("_baseHeap", 1)
});

// MBReadOnlyDictionary<,>
AddClassDefinitionWithCustomFields(typeof(MBReadOnlyDictionary<, >), 105, new Tuple<string, short>[1]
{
    new Tuple<string, short>("_dictionary", 1)
});

// Nullable<> / KeyValuePair<,> / ValueTuple<,> 走 AddStructDefinitionWithCustomFields
AddStructDefinitionWithCustomFields(typeof(Nullable<>), 101, new Tuple<string, short>[1] { ... });
AddStructDefinitionWithCustomFields(typeof(KeyValuePair<, >), 102, new Tuple<string, short>[2] { ... });
AddStructDefinitionWithCustomFields(typeof(ValueTuple<, >), 107, new Tuple<string, short>[2] { ... });
```

闭泛型定义现场构造时复制这份映射（`TaleWorlds.SaveSystem.Definition/DefinitionContext.cs:401-403`）：

```csharp
foreach (CustomField customField in classDefinition.CustomFields)
{
    genericTypeDefinition2.AddCustomField(customField.Name, customField.SaveId);
}
```

mod 视角的对照实验——手写标签与真正登记的区别：

```csharp
// 手写一个标签：能看能打印，但对存档没有任何作用
var tag = new CustomField("m_Item1", 1);
Debug.Print("标签 " + tag.Name + " → 编号 " + tag.SaveId, 0);

// 真正生效的只有 definer 里那次 helper 调用：
// SaveManager.InitializeGlobalDefinitionContext();   // 引擎扫描所有 definer 时会执行到
```

## 依赖关系

- 创建入口：[SaveableTypeDefiner](../SaveableTypeDefiner) 的 `AddClassDefinitionWithCustomFields`（`:93`）与 `AddStructDefinitionWithCustomFields`（`:103`），字段循环在 `:99` / `:109`
- 实际使用者有**两类**：登记侧 [SaveableBasicTypeDefiner](../SaveableBasicTypeDefiner) 与 [SaveableTypeDefiner](../SaveableTypeDefiner) 的 helper（`SaveableTypeDefiner.cs:99` 与 `:109`）为六个 BCL 类型登记 `Tuple<,>` / `Nullable<>` / `KeyValuePair<,>` / `ValueTuple<,>` / `MBReadOnlyDictionary<,>` / `PriorityQueue<,>`（`SaveableBasicTypeDefiner.cs:43-72`）；复制侧 [DefinitionContext](../DefinitionContext) 在现场构造闭泛型定义时逐个转存（`DefinitionContext.cs:403` 与 `:522`）
- 存放在 [TypeDefinition](../TypeDefinition) / [StructDefinition](../StructDefinition) 的 `CustomFields` 集合里，闭泛型复制见 [DefinitionContext](../DefinitionContext) `:401-403`
- 常规替代路线：[SaveableFieldAttribute](../SaveableFieldAttribute)（自己写的类型请用这个，别用本类）
- 同名易混：[SaveId](../SaveId)（类型身份）、[MemberTypeId](../MemberTypeId)（带层级的成员号）
- 体系全貌：../../../architecture/save-system
