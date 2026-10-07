---
title: "SaveId"
description: "存档里类型的身份证：三种具体形态（类型 / 泛型闭合 / 容器）的抽象基类，负责字节流读写、相等判定与字节数预算。"
---

# SaveId

**Namespace:** `TaleWorlds.SaveSystem.Definition`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `public abstract class SaveId`
**Base:** 无
**File:** `TaleWorlds.SaveSystem.Definition/SaveId.cs`

## 概述

存档里不写 C# 类型名，只写数字编号和一段可递归的结构。`SaveId` 就是这段结构的抽象形状：它回答「这个值在存档里被登记成什么身份」。整个存档系统只有三个具体实现——[TypeSaveId](../TypeSaveId) 表示一个普通类型的编号，[GenericSaveId](../GenericSaveId) 表示一个闭合泛型类型（如 `Dictionary<string, Hero>` 的身份），[ContainerSaveId](../ContainerSaveId) 表示一个容器的元素类型组合。任何一个字段、每个结构体、每个容器元素要落盘，都得先拿到一个 `SaveId`；[DefinitionContext](../DefinitionContext) 的总表 `_allTypeDefinitionsWithId` 就是用 `SaveId` 做键的那张表（`DefinitionContext.cs:94` 起的每个 `Add*Definition` 都同时写 Type 键和 SaveId 键两张表）。它还兼两件事：往字节流里写自己（`WriteTo`）与从字节流里读回自己（静态 `ReadSaveIdFrom`），以及提前算好自己占多少字节（`GetSizeInBytes`）——后者让写盘方能在开缓冲区之前把大小算准。

## 心智模型

把它想成**机场登机牌**：牌上不印乘客姓名，只印一个数字编号（`TypeSaveId`）、一串转机信息（`GenericSaveId`）、或者「几号登机口 + 几个随身行李」（`ContainerSaveId`）。登机牌本身会读出自己印了什么（`GetStringId`），也会把自己念给地勤听（`WriteTo`）。由此推出三条边界：

1. **编号就是契约，牌面不能改。** 改一个类型的 `TypeSaveId` 数字，旧档里那块字节就再也认不出这个类型。
2. **`Equals` 比的是运行时精确类型加牌面字符串**，不是「数值相等」（`SaveId.cs:20` 先判 `obj.GetType() != GetType()`，`:24` 再比 `GetStringId()`）。所以 `TypeSaveId(5)` 和一个 `Id` 也是 5 的其它子类永远不相等，即使牌面字符串一样。
3. **未知标签不抛异常，返回 null。** `ReadSaveIdFrom` 的 switch 只有 `case 0/1/2`（`SaveId.cs:33-44`），`result` 初始就是 null（`:32`），遇到第四种标签就走完函数返回 null。把这个 null 交给下游才会炸，炸点离出错点很远。

另外注意 `GetHashCode()` 直接返回 `GetStringId().GetHashCode()`（`SaveId.cs:11`）——这是**字符串哈希**，每个进程随机化。所以它可以安全地当字典键用，但**永远不要把它序列化或跨存档比较**。

## 如何使用

### 怎么拿到它

三种形态都不该由 mod 手工 `new`，正常路径是从 [DefinitionContext](../DefinitionContext) 或字节流拿：

- 从字节流：从任意 TaleWorlds 读写流出发，`SaveId.ReadSaveIdFrom(IReader reader)`（`TaleWorlds.SaveSystem.Definition/SaveId.cs:29`）读一个标签字节并分派。这是 [VariableSaveData](../VariableSaveData) 在枚举和基础类型分支里写内联类型身份时用的入口（`TaleWorlds.SaveSystem.Save/VariableSaveData.cs:112`、`:117`）。
- 从类型：`DefinitionContext.TryGetTypeDefinition(SaveId saveId)`（`TaleWorlds.SaveSystem.Definition/DefinitionContext.cs:335`）是按牌面反查定义的公开出口。
- 从字段定义：[FieldDefinition](../FieldDefinition) / [PropertyDefinition](../PropertyDefinition) 继承的成员，其类型身份由所属 `TypeDefinition.SaveId` 携带。

### 最小可运行片段

```csharp
using TaleWorlds.SaveSystem.Definition;

// 1 字节标签 + 4 字节 int，这是最短的一种身份
SaveId plain = new TypeSaveId(330001);
Debug.Print(plain.GetStringId(), 0);            // "330001"
Debug.Print(plain.GetSizeInBytes(), 0);          // 5

// 容器身份：字典形状的牌面把键和值都写进去
var dictId = new ContainerSaveId(ContainerType.Dictionary, new TypeSaveId(1), new TypeSaveId(2));
Debug.Print(dictId.GetStringId(), 0);           // "C(2)-(1,2)"
Debug.Print(dictId.GetSizeInBytes(), 0);        // 2 + 5 + 5

// 同一性判定：牌面相同且运行时类型相同才算相等
Debug.Print(dictId.Equals(new ContainerSaveId(ContainerType.Dictionary, new TypeSaveId(1), new TypeSaveId(2))), 0);
```

### 用它最容易踩的一条

**三个具体子类的属性都是 `{ get; set; }` 公开可写，但牌面字符串只在构造器里算一次。** [ContainerSaveId](../ContainerSaveId) 的 `ContainerType` / `KeyId` / `ValueId`（`ContainerSaveId.cs:10/12/14`）可以在构造后被改掉，而 `_stringId` 是 `readonly`、由 `CalculateStringId()` 在构造器里定死的（`:28`）。改完之后 `WriteTo` 和 `GetSizeInBytes` 用的是**改后的实时属性**，只有 `GetStringId()`、`Equals`、`GetHashCode` 还在用**旧的缓存字符串**。结果是「写出去的字节」和「字典里当键的那个身份」互相矛盾，查表会静默 miss。**牌面一旦构造就别再改属性。**

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `GetStringId` | `public abstract string GetStringId()` | 抽象成员。返回牌面字符串，是相等判定、`GetHashCode` 和人可读调试输出的共同来源。三个子类分别在构造器里缓存好这个字符串，所以**它只反映构造那一刻的状态**。 |
| `WriteTo` | `public abstract void WriteTo(IWriter writer)` | 把身份写进字节流。约定是**先写一个标签字节**再写本体：`TypeSaveId.WriteTo` 写 0（`TypeSaveId.cs:24`）、`GenericSaveId.WriteTo` 写 1（`GenericSaveId.cs:43`）、`ContainerSaveId.WriteTo` 写 2（`ContainerSaveId.cs:51`）。这个标签就是 `ReadSaveIdFrom` 的分派依据。 |
| `ReadSaveIdFrom` | `public static SaveId ReadSaveIdFrom(IReader reader)` | 静态反序列化入口。读一个标签字节（`:31`），按 0/1/2 分派到三个子类的 `ReadFrom`（`:35-43`）。**没有 default 分支**，未知标签静默返回 null（`:32` 初始值）。 |
| `GetSizeInBytes` | `public abstract int GetSizeInBytes()` | 预算自身占用的字节数。`TypeSaveId` 恒为 5（1 标签 + 4 int，`TypeSaveId.cs:35`）；`ContainerSaveId` 为 2 + 键 + （字典才有）值（`ContainerSaveId.cs:87-93`）；`GenericSaveId` 为 2 + 基 + 各实参之和（`GenericSaveId.cs:78`）。`VariableSaveData.GetDataSize()` 用它算枚举与基础类型分支的写入预算。 |
| `GetHashCode` | `public override int GetHashCode() => GetStringId().GetHashCode()` | 覆盖成**牌面字符串的哈希**（`:11`），这样 [DefinitionContext](../DefinitionContext) 的 `Dictionary<SaveId, TypeDefinitionBase>` 才有可用哈希。字符串哈希每进程随机化，**不可持久化**。 |
| `Equals` | `public override bool Equals(object obj)` | 三段判定：null 返回 false（`:16-19`）；运行时类型不同返回 false（`:20-23`）；否则比 `GetStringId()` 字符串相等（`:24`）。**注意它不做 `is SaveId` 之外的类型检查，所以跨子类永不相等**。 |

## 真实示例

官方在枚举与基础类型落盘时写内联类型身份，走的就是标签字节 + 递归 WriteTo（`TaleWorlds.SaveSystem.Save/VariableSaveData.cs:110-119`）：

```csharp
else if (MemberType == SavedMemberType.Enum)
{
    // 先写类型的 SaveId（标签 0 + 编号），再写枚举值的名字字符串
    TypeDefinition.SaveId.WriteTo(writer);
    writer.WriteString(Value.ToString());
}
else if (MemberType == SavedMemberType.BasicType)
{
    TypeDefinition.SaveId.WriteTo(writer);
    ((BasicTypeDefinition)TypeDefinition).Serializer.Serialize(writer, Value);
}
```

读回来的一侧，靠 `ReadSaveIdFrom` 的标签分派（`TaleWorlds.SaveSystem.Definition/SaveId.cs:29-46`）：

```csharp
byte tag = reader.ReadByte();
SaveId id;
if (tag == 0)      { id = TypeSaveId.ReadFrom(reader); }
else if (tag == 1) { id = GenericSaveId.ReadFrom(reader); }
else if (tag == 2) { id = ContainerSaveId.ReadFrom(reader); }
else               { id = null; }   // 源码就是这个行为：静默 null
```

mod 视角的 sanity check——登记一个类型后确认它的身份与字节预算：

```csharp
SaveManager.InitializeGlobalDefinitionContext();
var heroDef = Campaign.Current.GetCampaignBehavior<ICampaignBehavior>();
Debug.Print("MBGUID 的类型身份形如 " + new TypeSaveId(1).GetStringId(), 0);
Debug.Print("一张普通类型身份占 " + new TypeSaveId(1).GetSizeInBytes() + " 字节", 0);
```

## 依赖关系

- 三个具体形态：[TypeSaveId](../TypeSaveId)（标签 0，最短 5 字节）、[GenericSaveId](../GenericSaveId)（标签 1，闭合泛型）、[ContainerSaveId](../ContainerSaveId)（标签 2，带元素类型组合）
- 抽象容器类型：[ContainerType](../ContainerType)（`ContainerSaveId` 的第一个属性，序号即线上字节）
- 成员级身份：[MemberTypeId](../MemberTypeId)（字段/属性用的两级编号，与本类的 `SaveId` 是两套东西）
- 持有者：[DefinitionContext](../DefinitionContext)（`_allTypeDefinitionsWithId` 以 `SaveId` 为键，`TryGetTypeDefinition` 是反查入口）
- 写入/读出方：[VariableSaveData](../VariableSaveData)（枚举与基础类型分支在 `VariableSaveData.cs:112` 与 `:117` 内联写身份）
- 流原语：`TaleWorlds.Library` 的 `IWriter` / `IReader`，落盘实现见 [BinaryWriterFactory](../BinaryWriterFactory)
- 体系全貌：../../../architecture/save-system
