---
title: "MemberTypeId"
description: "字段与属性的两级存档编号：一个字节的类型层级加一个短整数局部号，打包成一个短整数只用于做键。"
---

# MemberTypeId

**Namespace:** `TaleWorlds.SaveSystem.Definition`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `public struct MemberTypeId`
**Base:** `System.ValueType`
**File:** `TaleWorlds.SaveSystem.Definition/MemberTypeId.cs`

## 概述

一个类里有十几个被 [SaveableFieldAttribute](../SaveableFieldAttribute) 或 [SaveablePropertyAttribute](../SaveablePropertyAttribute) 标起来的成员，每个成员在存档里靠一个两级编号定位：第一级 `TypeLevel` 区分「这个成员定义在哪个层级上」（本类 / 基类 / 再基类），第二级 `LocalSaveId` 是 [SaveableTypeDefiner](../SaveableTypeDefiner) 里 `CollectFields` / `CollectProperties` 扫描时分配的局部号。`MemberTypeId` 就是把这两个数字捆在一起的**值类型结构体**。它出现在三个地方：[FieldDefinition](../FieldDefinition) / [PropertyDefinition](../PropertyDefinition) 的身份、[FieldSaveData](../FieldSaveData) / [PropertySaveData](../PropertySaveData) 的成员身份，以及读档期 [IConflictResolver](../IConflictResolver) 改写成员类型时的 `ref` 参数（[DefinitionContext](../DefinitionContext) 的 `GetConflictedFieldMemberTypeId` / `GetConflictedPropertyMemberTypeId`）。注意它和 [SaveId](../SaveId) 家族完全是两套编号体系：`SaveId` 标识**类型**，`MemberTypeId` 标识**类型里的某个成员**。

## 心智模型

把它想成**门牌里的房间号**：`TypeLevel` 是楼层，`LocalSaveId` 是该层的门牌号。存档写的时候不写 `"(2,17)"` 这种字符串，而是**分两个字段写**——一个字节的层级、一个短整数的局部号（[VariableSaveData](../VariableSaveData) 的 `SaveTo` 开头两行，`VariableSaveData.cs:95-96`）。由此推出四条边界：

1. **`SaveId` 属性是算出来的，不是存的。** `public short SaveId => (short)((short)(TypeLevel << 8) + LocalSaveId);`（`:9`）——把两个字段压进一个短整数，用途是「拿它当字典键」。**这里有两层强制转换，一旦 `LocalSaveId` 是负数就会溢出**，比如 `Invalid` 组合 `(0, -1)` 算出来是 `-1` 而不是任何有意义的编号。所以 `SaveId` 只适合做临时键，**不能拿去序列化**。
2. **`Invalid` 是属性不是常量。** `public static MemberTypeId Invalid => new MemberTypeId(0, -1);`（`:11`）每次访问都构造一个新结构体。它表示「这个槽位没有成员身份」——容器元素就用它，因为元素靠下标定位。见 [ElementSaveData](../ElementSaveData) 里三处 `MemberTypeId.Invalid`。
3. **这是结构体，字段公开可写。** `public byte TypeLevel;` 和 `public short LocalSaveId;`（`:5`、`:7`）都是**公开字段而不是属性**，任何持有者都能直接赋值。所以它不是不可变值，是「约定上不可变」的值。
4. **`==` 的 null 分支对结构体是死代码。** `operator ==` 第一句 `if ((object)m1 == null)`（`:39`）——`m1` 是 `MemberTypeId` 结构体，装箱后永远不为 null，所以这个分支永远不成立；真正干活的是下一句 `m1.Equals(m2)`。而 `Equals` 只覆盖了 `Equals(object)`（`:24`），**没有实现 `IEquatable<MemberTypeId>`**，所以每次比较都要装箱一次。

## 如何使用

### 怎么拿到它

- **定义期**：[SaveableTypeDefiner](../SaveableTypeDefiner) 调 `CollectFields` / `CollectProperties` 时，为每个带 Attribute 的成员新建一个 `new MemberTypeId(typeLevel, localSaveId)`（`TypeDefinition.cs` 里生成，[FieldDefinition](../FieldDefinition) 构造器的 `MemberTypeId id` 参数就是它）。
- **保存期**：[FieldSaveData](../FieldSaveData) / [PropertySaveData](../PropertySaveData) 各持有一个副本作为 `SaveId` 属性。
- **读档期**：[DefinitionContext](../DefinitionContext) 的两个冲突方法拿 `ref MemberTypeId`，成功时**原地改写**再返回 true，让旧档的成员编号映射到新编号。
- mod 侧基本不需要手工 `new`，除非在写自定义 definer 或构造冲突映射。

### 最小可运行片段

```csharp
using TaleWorlds.SaveSystem.Definition;

// 两个字段拼出一个成员身份
var member = new MemberTypeId(2, 17);
Debug.Print(member.ToString(), 0);          // "(2,17)"
Debug.Print(member.SaveId, 0);              // (2 << 8) + 17 = 529

// Invalid 是「没有成员身份」的哨兵，容器元素用它
var invalid = MemberTypeId.Invalid;
Debug.Print(invalid.ToString(), 0);         // "(0,-1)"
Debug.Print(invalid.SaveId, 0);             // -1（溢出结果，不是合法编号）

// 相等与哈希：两者一致，可以安全做字典键
Debug.Print(member.Equals(new MemberTypeId(2, 17)), 0);   // True
Debug.Print(member.GetHashCode() == new MemberTypeId(2, 17).GetHashCode(), 0);   // True
```

### 用它最容易踩的一条

**别把 `MemberTypeId.SaveId` 那个打包短整数当成存档里的编号。** 落盘时写的是 `MemberSaveId.TypeLevel` 一个字节 + `MemberSaveId.LocalSaveId` 一个短整数，**两个字段分开写**（[VariableSaveData](../VariableSaveData) 的 `SaveTo` 开头），而 `SaveId` 是把它们 `<< 8` 之后相加压出来的——这个压法在 `LocalSaveId` 为负（也就是 `Invalid`）时直接溢出。读档侧再按同样规则拆回来。拿 `SaveId` 去和存档字节对照，得到的结论一定是错的。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `TypeLevel` | `public byte TypeLevel;` | 第一级编号，一个字节，标识成员定义在哪一层类型上。**公开字段，不是属性**，可直接改写——这是 resolver 改编号时走的路（`GetConflictedFieldMemberTypeId` 收 `ref MemberTypeId`）。 |
| `LocalSaveId` | `public short LocalSaveId;` | 第二级编号，成员在所属层级内的局部号，由 `CollectFields` / `CollectProperties` 扫描时分配。同为公开字段。**可以为负**——`Invalid` 就是 -1。 |
| `SaveId` | `public short SaveId => (short)((short)(TypeLevel << 8) + LocalSaveId)` | 把两个字段压成一个短整数，**仅用于当作字典键 / 做集合成员判断**。有双重窄化转换，负局部号会溢出。**不落盘**，读档侧也不靠它。 |
| `Invalid` | `public static MemberTypeId Invalid => new MemberTypeId(0, -1)` | 哨兵值，表示「这个槽位不携带成员身份」。[ElementSaveData](../ElementSaveData) 的三个分支（null 元素、结构体元素、普通元素）**全都传它**——因为容器元素靠下标定位，不靠成员号。是属性，每次访问新建结构体。 |
| 构造器 | `public MemberTypeId(byte typeLevel, short localSaveId)` | 两个参数直接赋给同名公开字段（`:20-21`）。**不做任何校验**：层级 255 与局部号 32767 能构造出来，压成 `SaveId` 时静默溢出。 |
| `ToString` | `public override string ToString() => "(" + TypeLevel + "," + LocalSaveId + ")"` | 输出形如 `(2,17)`（`:15`）。这是调试与 resolver 日志里唯一能看到的形状——**存档里存的是两个分开的字段，不是这个字符串**。 |
| `Equals` | `public override bool Equals(object obj)` | `obj is MemberTypeId` 模式匹配（`:26`），然后先比 `TypeLevel` 再比 `LocalSaveId`（`:28`、`:30`）。只覆盖 `Equals(object)`，**未实现 `IEquatable<MemberTypeId>`**，所以集合查找会装箱。 |
| `operator ==` | `public static bool operator ==(MemberTypeId m1, MemberTypeId m2)` | `:39` 的 `(object)m1 == null` 分支对结构体永不成立，是死代码；`:43` 落到 `m1.Equals(m2)`，又是一次装箱。**判相等请直接用 `Equals` 或 `==`，两者行为一致。** |
| `operator !=` | `public static bool operator !=(MemberTypeId m1, MemberTypeId m2)` | 就是 `!(m1 == m2)`（`:48`）。无独立逻辑。 |
| `GetHashCode` | `public override int GetHashCode() => (17 * 31 + TypeLevel) * 31 + LocalSaveId` | 手写哈希（`:53`），与 `Equals` 的两字段比较保持一致，因此**可以安全做 `Dictionary<MemberTypeId, T>` 的键**。这是它与 `SaveId` 属性的关键区别——打包值不做哈希。 |

## 真实示例

落盘时两个字段是分开写的（`TaleWorlds.SaveSystem.Save/VariableSaveData.cs:95-96`）：

```csharp
writer.WriteByte((byte)MemberType);
writer.WriteByte(MemberSaveId.TypeLevel);      // 1 字节层级
writer.WriteShort(MemberSaveId.LocalSaveId);   // 2 字节局部号
```

容器元素没有成员身份，全部走 `Invalid`（`TaleWorlds.SaveSystem.Save/ElementSaveData.cs:18`、`:24`、`:28`）：

```csharp
if (value == null)
{
    InitializeDataAsNullObject(MemberTypeId.Invalid);   // 槽位是 null 引用，写 -1
    return;
}
TypeDefinitionBase typeDefinition = containerSaveData.Context.DefinitionContext.GetTypeDefinition(value.GetType());
if (typeDefinition is TypeDefinition { IsClassDefinition: false })
{
    InitializeDataAsCustomStruct(MemberTypeId.Invalid, index, typeDefinition);  // 值是下标
}
else
{
    InitializeData(MemberTypeId.Invalid, value.GetType(), typeDefinition, value);
}
```

读档期 resolver 原地改写成员编号（`TaleWorlds.SaveSystem.Definition/DefinitionContext.cs:152-160`，属性版在 `:162`）：

```csharp
internal bool GetConflictedFieldMemberTypeId(TypeDefinitionBase typeDefinition, ref MemberTypeId memberTypeId)
{
    if (SaveManager.ShouldResolveConflicts()
        && _conflictResolversWithType.TryGetValue(typeDefinition, out var value)
        && value.IsApplicable(SaveManager.OperatingVersion))
    {
        memberTypeId = value.GetFieldMemberWithId(memberTypeId);   // 原地改写
        return true;
    }
    return false;
}
```

mod 视角的对照实验：

```csharp
// 两个语义不同的槽位：字段有成员身份，列表元素没有
var fieldSlot = new MemberTypeId(1, 3);
var elementSlot = MemberTypeId.Invalid;
Debug.Print("字段槽位 " + fieldSlot + " 打包后 " + fieldSlot.SaveId, 0);
Debug.Print("元素槽位 " + elementSlot + " 打包后 " + elementSlot.SaveId + "（溢出，非合法编号）", 0);
Debug.Print("两者相等吗 = " + fieldSlot.Equals(elementSlot), 0);
```

## 依赖关系

- 产生者：[SaveableFieldAttribute](../SaveableFieldAttribute) 与 [SaveablePropertyAttribute](../SaveablePropertyAttribute) 的编号经 [SaveableTypeDefiner](../SaveableTypeDefiner) 的 `CollectFields` / `CollectProperties` 变成实例
- 持有者：[FieldDefinition](../FieldDefinition) / [PropertyDefinition](../PropertyDefinition)（经 [MemberDefinition](../MemberDefinition) 基类），以及 [FieldSaveData](../FieldSaveData) / [PropertySaveData](../PropertySaveData)
- 消费者：[VariableSaveData](../VariableSaveData)（写盘时分两字段写出）、[VariableLoadData](../VariableLoadData)（读档时拆回）
- 哨兵值的用武之地：[ElementSaveData](../ElementSaveData)（容器元素全部使用 `Invalid`）
- 读档期改写：[DefinitionContext](../DefinitionContext) 的两个 `GetConflicted*MemberTypeId` + [IConflictResolver](../IConflictResolver)
- 与之平行的另一套编号：[SaveId](../SaveId)（类型身份）、[CustomField](../CustomField)（`short` 字段名映射）
- 体系全貌：../../../architecture/save-system
