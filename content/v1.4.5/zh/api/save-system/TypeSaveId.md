---
title: "TypeSaveId"
description: "最朴素也最常用的一种存档类型身份：一个 int 编号加一字节标签，5 字节写完，是 DefinitionContext 总表的主键形态。"
---

# TypeSaveId

**Namespace:** `TaleWorlds.SaveSystem.Definition`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `public class TypeSaveId : SaveId`
**Base:** `SaveId`
**File:** `TaleWorlds.SaveSystem.Definition/TypeSaveId.cs`

## 概述

存档不写 `TaleWorlds.CampaignSystem.Hero` 这种字符串，而是写一个整数编号，读档时靠这个编号在 [DefinitionContext](../DefinitionContext) 的 `_allTypeDefinitionsWithId` 里反查回真正的 `TypeDefinition`。`TypeSaveId` 就是这个编号的载体，也是 [SaveId](../SaveId) 三个具体形态里最短的一个：**1 字节标签 + 4 字节整数 = 5 字节**，没有任何嵌套结构。绝大多数被保存的类型——角色、氏族、王国、物品、队伍——落盘时用的都是它。它还是泛型身份的基石：[GenericSaveId](../GenericSaveId) 必须以一个 `TypeSaveId` 作为开类型身份（[DefinitionContext](../DefinitionContext) 构造泛型定义时对 `classDefinition.SaveId` 做硬转换），所以 `List<Hero>` 这类容器的存档身份最终也是建立在一个 `TypeSaveId` 之上的。

## 心智模型

把它当成**门牌号**：一栋楼只有一个号，号本身不描述楼里住谁，也不校验号是否真的存在。写进去的时候没人检查（`TypeSaveId(int id)` 只是 `Id = id; _stringId = Id.ToString();`，`TypeSaveId.cs:13-14`），**号对不对是登记阶段的事，不是构造阶段的事**。由此推出三条边界：

1. **号必须全局唯一，而且唯一性由别人保证。** 真正的分配发生在 [SaveableTypeDefiner](../SaveableTypeDefiner) 的 helper 里——`saveBaseId + 局部编号`。构造函数本身对重复号一无所知；重复的后果要到 `DefinitionContext.AddClassDefinition` 用 `.Add()` 撞键时才抛（`DefinitionContext.cs:94`）。
2. **`Id` 的类型是 `int`，标签只占一个字节。** `WriteTo` 写 `writer.WriteByte(0)` 后 `writer.WriteInt(Id)`（`TypeSaveId.cs:24-25`），`GetSizeInBytes()` 恒返回 5（`:35`）——**这个 5 是写死的常量，不随 `Id` 变化**，因为 `WriteInt` 永远 4 字节。
3. **牌面字符串在构造时就定死。** `_stringId` 是 `readonly`（`:7`），所以即使 `Id` 的私有 setter 理论上能被反射改掉，牌面也不会跟着变。实践中没人改，但这解释了为什么 `GetStringId()` 永远等于构造时那个数字的十进制写法。

边界之外还有一处值得记住的反直觉：读档侧 `DefinitionContext.TryGetTypeDefinition` 拿到一个不存在的号时**返回 null 而不是抛异常**，调用方若不判空就会在很远的地方炸。

## 如何使用

### 怎么拿到它

**不要手工 new**，除非你在写自己的 definer 或调试。两条正规路径：

- 从定义表反查：`DefinitionContext.TryGetTypeDefinition(SaveId saveId)` 命中后读它的 `SaveId`（`TaleWorlds.SaveSystem.Definition/DefinitionContext.cs:335`）。但这是「先有号后有定义」的方向，实际更常用的是反过来。
- 从字节流：`TypeSaveId.ReadFrom(IReader reader)`（`TypeSaveId.cs:28`），或走通用入口 `SaveId.ReadSaveIdFrom(reader)` 的 `case 0` 分支（`SaveId.cs:35-36`）。
- 分配新号：在自己的 [SaveableTypeDefiner](../SaveableTypeDefiner) 里调 `AddClassDefinition(typeof(T), localId)`，`saveBaseId + localId` 才是最终落盘的 `Id`。

### 最小可运行片段

```csharp
using TaleWorlds.SaveSystem.Definition;

// 最短的一种类型身份：5 字节
SaveId id = new TypeSaveId(330001);
Debug.Print(id.GetStringId(), 0);        // "330001"
Debug.Print(id.GetSizeInBytes(), 0);      // 5

// 反序列化侧：直接从流里读一个
TypeSaveId restored = TypeSaveId.ReadFrom(reader);
Debug.Print(restored.GetStringId(), 0);

// 同一个号造两次，身份判定为相等（牌面相同 + 运行时类型相同）
Debug.Print(new TypeSaveId(7).Equals(new TypeSaveId(7)), 0);   // True
```

### 用它最容易踩的一条

**在自己的 definer 里分配号时，忘记避开官方的 `saveBaseId` 段，就会和已有类型撞号。** 撞号不是「后来者覆盖」，而是 `DefinitionContext` 里所有 `Add*Definition` 都用 `Dictionary.Add` 的直接后果——抛 `ArgumentException`，而且是在 `FillWithCurrentTypes()` 收集定义时才抛，栈里看不出是哪个号撞了。更隐蔽的是：如果你把号分配得**比官方小**，mod 存档会和旧版官方存档里的某个类型重名，读档时按号反查会拿到完全不相干的类型定义。所以 `saveBaseId` 是一次性选定的永久协议，不要按「看起来更整齐」重排。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `Id` | `public int Id { get; private set; }` | 编号本体，4 字节进存档。私有 setter 意味着外部只能通过构造器或反射改。它是 [DefinitionContext](../DefinitionContext) 里 `Dictionary<SaveId, TypeDefinition>` 的实际键内容。 |
| `_stringId` | `private readonly string _stringId` | 构造时算好的十进制字符串（`:14`），`GetStringId` / `Equals` / `GetHashCode` 三个都靠它。`readonly` 意味着**它与 `Id` 不可能保持同步**——这是有意的：牌面是身份，身份不随字段漂移。 |
| 构造器 | `public TypeSaveId(int id)` | 唯一构造器。`Id = id` 后立刻 `_stringId = Id.ToString()`（`:13-14`）。**不做任何范围检查**：负数、0、超大值都能构造出来，错误要到反查时才暴露。 |
| `GetStringId` | `public override string GetStringId()` | 返回缓存的十进制字符串（`:19`）。因为 [SaveId](../SaveId) 基类用 `GetStringId().GetHashCode()` 做哈希（`SaveId.cs:11`），这里返回字符串而不是数字，意味着**两张号不同的牌只要字符串不同就一定不同**——当前实现下等价于比数字。 |
| `WriteTo` | `public override void WriteTo(IWriter writer)` | 写标签字节 0（`:24`）再写 `WriteInt(Id)`（`:25`）。标签 0 是整个存档体系里最常见的身份标签，[SaveId](../SaveId) 的 `ReadSaveIdFrom` 第一个 case 就是它。 |
| `ReadFrom` | `public static TypeSaveId ReadFrom(IReader reader)` | 一行 `new TypeSaveId(reader.ReadInt())`（`:30`）。**注意它不读标签**——标签由调用方（`ReadSaveIdFrom` 或容器/泛型的递归分派）先消费。直接对流调用它而忘了先吃掉标签，会读出一个错位的号。 |
| `GetSizeInBytes` | `public override int GetSizeInBytes()` | 硬编码 `return 5;`（`:35`）。与 `WriteTo` 写的 1+4 字节对应，供 `VariableSaveData.GetDataSize()` 预算枚举/基础类型分支的开销。 |

## 真实示例

官方 definer 分配号的形状（以 `SaveableObjectSystemTypeDefiner` 的 `base(10000)` + `AddClassDefinition(typeof(MBObjectBase), 34)` 为例），最终落盘的就是 `new TypeSaveId(10000 + 34)`：

```csharp
// 定义阶段（自定义 definer 内）
protected override void DefineClassTypes()
{
    AddClassDefinition(typeof(MBObjectBase), 34);   // 实际保存号 = saveBaseId + 34
}

// 写盘阶段：身份被内联写进枚举 / 基础类型字段（VariableSaveData.cs:111、:117）
TypeDefinition.SaveId.WriteTo(writer);   // VariableSaveData.cs:112 与 :117
```

读档侧按号反查，命中不了就是 null——**必须判空**：

```csharp
SaveManager.InitializeGlobalDefinitionContext();   // 建全局定义上下文
TypeSaveId query = new TypeSaveId(10034);
Debug.Print("查询号 " + query.GetStringId(), 0);
Debug.Print("落盘占 " + query.GetSizeInBytes() + " 字节", 0);

// 反查的公开出口在 DefinitionContext 上；命中不了返回 null 而不是抛：
// TypeDefinitionBase def = someDefinitionContext.TryGetTypeDefinition(query);
// if (def == null)
// {
//     // 号不存在：旧档、被删掉的类型、或号段配错
// }
```

## 依赖关系

- 基类与同族：[SaveId](../SaveId)（标签分派与相等契约）、[GenericSaveId](../GenericSaveId)（以本类作为开类型身份）、[ContainerSaveId](../ContainerSaveId)（把本类包成元素类型）
- 分配端：[SaveableTypeDefiner](../SaveableTypeDefiner)（`saveBaseId + 局部编号`）、[SaveableBasicTypeDefiner](../SaveableBasicTypeDefiner)（引擎自带号段）
- 消费端：[DefinitionContext](../DefinitionContext)（`_allTypeDefinitionsWithId` / `_classDefinitionsWithId` 以它为键）
- 落盘方：[VariableSaveData](../VariableSaveData)（枚举与基础类型分支内联写身份）
- 读档方：[DefinitionContext](../DefinitionContext) 的 `TryGetTypeDefinition`（读档期才启用 [IConflictResolver](../IConflictResolver) 重定向）
- 与之易混的两套编号：[MemberTypeId](../MemberTypeId)（成员级两级编号）、[CustomField](../CustomField)（`short` 字段名映射，不是本类体系）
