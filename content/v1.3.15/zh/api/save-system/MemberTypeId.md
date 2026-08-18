---
title: "MemberTypeId"
description: "成员类型标识：用 TypeLevel（继承层级）与 LocalSaveId（成员局部编号）合成一个 short 型的 SaveId，作为存档里某个字段/属性成员的稳定身份键，由保存系统内部用来查表定位成员定义。"
---

# MemberTypeId

**命名空间：** `TaleWorlds.SaveSystem.Definition`
**模块：** `TaleWorlds.SaveSystem`
**类型：** `public struct MemberTypeId`
**基类/Base：** 无（值类型，直接继承自 `System.ValueType`）
**源文件路径/Source：** `TaleWorlds.SaveSystem.Definition/MemberTypeId.cs`

## 一句话职责

`MemberTypeId` 是存档「成员身份证」：把一个字段/属性在类继承链中的层级 `TypeLevel` 与它的局部编号 `LocalSaveId` 合成一个 `short` 型的 `SaveId`，让序列化器在字节流里用一对紧凑数字唯一定位某个可保存成员。

## 概述

`MemberTypeId` 位于 `TaleWorlds.SaveSystem.Definition`，是一个值类型（struct），不是成员数据的容器，而是成员身份的「坐标」。它只有两个公开字段 `byte TypeLevel` 与 `short LocalSaveId`，以及一个计算属性 `SaveId => (short)((short)(TypeLevel << 8) + LocalSaveId)`——把层级塞进高 8 位、局部编号放低 8 位合成为一个 `short`。提供静态 `Invalid`（`new MemberTypeId(0, -1)`，即 `SaveId == -1`）表示无效标识，并提供构造函数、`ToString()`、`Equals`、`==`、`!=`、`GetHashCode` 以便作为字典键或集合元素比较。它在定义/序列化层内部被反复使用：当 `SaveableFieldAttribute`/`SaveablePropertyAttribute` 给某成员标了 `LocalSaveId` 时，保存系统按该类在继承体系中的深度算出 `TypeLevel`，二者合成为 `MemberTypeId`，从而在 `ObjectSaveData`/`VariableSaveData` 里按编号找到对应的定义并读写值。

## 心智模型

把 `MemberTypeId` 想成存档系统给「类里的某一个字段」打的二维邮编：`TypeLevel` 是这层类在继承链上的楼层号（基类为 0，子类逐层 +1），`LocalSaveId` 是该楼层内字段的门牌号（来自 `[SaveableField(LocalSaveId = n)]`）。保存时，序列化器先确定字段声明所在的类层级得到 `TypeLevel`，取 Attribute 上的 `LocalSaveId` 作为 `LocalSaveId`，左移拼出 `SaveId` 这个 `short`；加载时再按同样的 `TypeLevel`+`LocalSaveId` 反查定义，从字节流里把值填回正确字段。它属于类型定义层，由 [DefinitionContext](../DefinitionContext) 与 [SaveableTypeDefiner](../SaveableTypeDefiner) 在收集成员时构造并缓存，生命周期与定义上下文一致；`Invalid` 是「查无此成员」的哨兵值。mod 几乎从不直接 new 它——它的存在是为了让字段身份在跨版本、跨继承层级时仍可用一个 `short` 稳定表达。

## 何时用 / 何时不要用

**使用（理解层面）：** 当你在调试「为什么父类的 `[SaveableField]` 没被保存」「为什么继承层级变化后旧档字段错位」，或想理解保存系统如何把 Attribute 上的 `LocalSaveId` 与类层级合成稳定编号、又如何在加载时按编号定位成员时。

**不要用：**

- 不要在模组运行时手动 `new MemberTypeId(...)` 去「强行指定」字段编号——编号应由 Attribute 与继承层级推导，你应改 `[SaveableField(LocalSaveId = n)]`，而非构造此结构。
- 不要把它当数据存储——它没有值，只有身份坐标；真正的字段值在 `VariableSaveData` 里。
- 不要假设 `SaveId` 全局唯一——它只在「同一类型、同一继承层级」语义下有效；跨类型比对要靠完整 `TypeLevel`+`LocalSaveId`。

## 依赖图

- 编号来源：成员编号由 [SaveableFieldAttribute](../SaveableFieldAttribute) / [SaveablePropertyAttribute](../SaveablePropertyAttribute) 上的 `LocalSaveId` 提供，`TypeLevel` 由类在继承链中的位置决定。
- 类型 schema：[DefinitionContext](../DefinitionContext) 与 [SaveableTypeDefiner](../SaveableTypeDefiner) 在登记类时推导出每个成员的 `MemberTypeId` 并据此建查找表。
- 序列化消费：`ObjectSaveData` / `VariableSaveData` 在保存/加载时用 `MemberTypeId`（含 `Invalid` 哨兵）定位成员定义，字节写出由 [ArchiveSerializer](../ArchiveSerializer) / [ArchiveDeserializer](../ArchiveDeserializer) 完成。
- 兄弟标识：与 [ContainerDefinition](../ContainerDefinition) 的 `ContainerSaveId` 同属 Definition 命名空间下的「存档编号」家族。

## 风险段

- **层级漂移导致错位。** `TypeLevel` 取自类在继承链中的深度；若你给中间插入新基类或调整继承结构，`TypeLevel` 会变，旧档里按原层级合成的 `MemberTypeId` 将定位到错误成员甚至命中 `Invalid`。
- **LocalSaveId 改动破坏兼容。** Attribute 上的 `LocalSaveId` 一旦随版本改动或复用，合成出的 `SaveId` 与旧档字节不匹配，字段会静默丢失或被读进错误字段。
- **误用 Invalid。** `Invalid`（`SaveId == -1`）是「未找到成员」哨兵；把它当正常编号参与字典查找会找不到定义，加载时应显式处理而非忽略。
- **把它当全局唯一键。** `SaveId` 仅是 `(TypeLevel << 8) + LocalSaveId` 的 `short`，不同类可能撞出相同 `short`；比较成员身份必须用完整 `TypeLevel`+`LocalSaveId`，或在类型限定范围内使用。

## 成员说明

### 公开字段（均为 public 实例字段）

- `byte TypeLevel`：成员声明所在类在继承链中的层级（基类 0，逐层 +1）。这是合成 `SaveId` 的高 8 位来源。
- `short LocalSaveId`：成员在所在层级内的局部编号，通常来自 `[SaveableField(LocalSaveId = n)]` / `[SaveableProperty(LocalSaveId = n)]`。这是 `SaveId` 的低 8 位来源。

### 计算属性

- `short SaveId { get; }`：合成身份键，`(short)((short)(TypeLevel << 8) + LocalSaveId)`。序列化器与查表逻辑用这一个 `short` 表示完整成员坐标。

### 静态成员

- `static MemberTypeId Invalid { get; }`：哨兵值 `new MemberTypeId(0, -1)`，即 `SaveId == -1`，表示「无效/未找到成员」。

### 构造函数与重写

- `MemberTypeId(byte typeLevel, short localSaveId)`：用给定的层级与局部编号构造一个成员标识；序列化系统在推导成员身份时调用，mod 通常不需要。
- `override string ToString()`：返回 `"(" + TypeLevel + "," + LocalSaveId + ")"` 形式（如 `"(0,12)"`），便于日志与调试核对坐标。
- `override bool Equals(object obj)`：当 `obj` 是同为 `MemberTypeId` 且 `TypeLevel` 与 `LocalSaveId` 都相等时返回 `true`；这是字典/集合按成员身份去重与查找的基础。
- `static bool operator ==(MemberTypeId m1, MemberTypeId m2)` / `static bool operator !=(...)`：基于 `Equals` 的值相等比较，注意 `null` 左侧会安全处理。
- `override int GetHashCode()`：返回 `(17 * 31 + TypeLevel) * 31 + LocalSaveId`，使 `MemberTypeId` 可安全地作 `Dictionary` 键。

## 最小真实示例

保存系统内部用一个 `MemberTypeId` 把「某类第 0 层、局部编号 12 的字段」定位出来；下面演示它的构造、哨兵比较与坐标字符串——这正是调试字段错位时日志里会看到的形式：

```csharp
MemberTypeId fieldId = new MemberTypeId(0, 12);
if (fieldId != MemberTypeId.Invalid && fieldId.SaveId == 12)
{
    string coord = fieldId.ToString(); // "(0,12)"
}
```

当排查继承导致 `TypeLevel` 变化的问题时，可对比父类与子类合成的编号差异（示意，编号由 Attribute 与层级推导，不由 mod 直接 new）：

```csharp
MemberTypeId baseField = new MemberTypeId(0, 5);
MemberTypeId derivedField = new MemberTypeId(1, 5);
bool distinct = baseField.Equals(derivedField) == false; // 不同层级即不同成员身份
```

## 导航块

- 父级：[存档系统 API 索引](../)
- 同级：[ContainerDefinition](../ContainerDefinition) · [MetaData](../MetaData)
- 相关：[SaveableFieldAttribute](../SaveableFieldAttribute) · [SaveablePropertyAttribute](../SaveablePropertyAttribute) · [DefinitionContext](../DefinitionContext) · [ArchiveSerializer](../ArchiveSerializer)
