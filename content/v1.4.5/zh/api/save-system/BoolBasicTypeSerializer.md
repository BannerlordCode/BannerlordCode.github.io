---
title: "BoolBasicTypeSerializer"
description: "整个基础类型家族里唯一只占 1 字节的序列化器：布尔值被压成 0/1 单字节，而同族的整型与浮点都是 4 字节。"
---

# BoolBasicTypeSerializer

**Namespace:** `TaleWorlds.SaveSystem.Definition`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `internal class BoolBasicTypeSerializer : IBasicTypeSerializer`
**Base:** 无（实现 `IBasicTypeSerializer`）
**File:** `TaleWorlds.SaveSystem.Definition/BoolBasicTypeSerializer.cs`

## 概述

`bool` 是 [SavedMemberType](../SavedMemberType) 的 `BasicType` 路线里最小的一个实现：`Serialize` 写一个字节、`Deserialize` 读一个字节、`GetSizeInBytes` 申报 1 字节（三个方法分别在 `BoolBasicTypeSerializer.cs` 的第 9、14、19 行）。它和同族的 [IntBasicTypeSerializer](../IntBasicTypeSerializer)（4 字节）、[FloatBasicTypeSerializer](../FloatBasicTypeSerializer)（4 字节）唯一的区别就是那个「1」——**不是 `WriteByte(bool)`，而是 `WriteBool`，后者先把值折成 0 或 1 再写**。它是理解「申报字节数必须等于实际写出字节数」这条契约的最小样本。

## 心智模型

把它想成**只占一个格子的开关**：不用写完整的 4 字节整数，只要一格就够表示开或关。推论有三条：

1. **`WriteBool` 不是 `WriteByte`，但效果一样。** `WriteBool` 在 `BinaryWriter.cs:131`，实现是 `EnsureLength(1)` 然后写 `(byte)(value ? 1u : 0u)`——**它自己就是按 1 字节写的**，所以 `GetSizeInBytes` 返回 1 是精确的，不是估算。
2. **这条链路上「申报 = 实际」必须成立，而这里恰好成立。** [VariableSaveData](../VariableSaveData) 的基础类型分支把 `Serializer.GetSizeInBytes()` 直接加进字节预算（`:145`），[SaveContext](../SaveContext) 再用这个预算构造写入器（`:510`）。**大多数同族实现都精确对上；[MatrixFrameBasicTypeSerializer](../MatrixFrameBasicTypeSerializer) 是那个对不上的例外。**
3. **读回来的是装箱的 `bool`。** `Deserialize` 返回 `reader.ReadBool()`（`:14`），所以槽位的 `Value` 是 `object` 装着一个 `bool`。这一点在写回字段时的三段兼容判定里很关键：目标字段类型接得住就直接写（`FieldLoadData.cs:22`）。

## 如何使用

### 怎么拿到它

**由 [BasicTypeDefinition](../BasicTypeDefinition) 持有**，构造器里赋给 `Serializer`（`BasicTypeDefinition.cs:12`）。注册入口是 [SaveableTypeDefiner](../SaveableTypeDefiner) 的 `AddBasicTypeDefinition(typeof(bool), saveId, new BoolBasicTypeSerializer())`——引擎在 [SaveableBasicTypeDefiner](../SaveableBasicTypeDefiner) 里已经这么做了。保存期 [VariableSaveData](../VariableSaveData) 的基础类型分支会先校验定义存在（`:118`）、再调 `Serialize`（`:122`）。

**注意字段的判定条件是「类型有没有基础类型定义」**（`VariableSaveData.cs:74`），不是「是不是这个类的目标类型」。所以只有当布尔被登记成基础类型时才走本类；否则会落到最后的兜底分支被当结构体写。

### 最小可运行片段

```csharp
using TaleWorlds.SaveSystem.Definition;

// 申报 1 字节，且这个 1 是精确的（不是向上取整）
IBasicTypeSerializer ser = new BoolBasicTypeSerializer();
Debug.Print("bool 的基础类型字节数 = " + ser.GetSizeInBytes(), 0);   // 1

// 底层实现同样是 1 字节：WriteBool 自己 EnsureLength(1) 后写 (byte)(value ? 1u : 0u)
// BinaryWriter.cs:131-136
// 对照 WriteInt 是 EnsureLength(4)（BinaryWriter.cs:77）—— 整型家族都是 4

// 三个同族实例的申报字节数，直接对比
Debug.Print("int = " + new IntBasicTypeSerializer().GetSizeInBytes(), 0);      // 4
Debug.Print("float = " + new FloatBasicTypeSerializer().GetSizeInBytes(), 0);  // 4
Debug.Print("bool = " + new BoolBasicTypeSerializer().GetSizeInBytes(), 0);     // 1  ← 唯一不同的
```

### 用它最容易踩的一条

**改 `bool` 的存储宽度会直接毁掉所有旧档，而且不会有任何字段级的报错。** 因为槽位的第一字节是 [SavedMemberType](../SavedMemberType) 标签、后面紧跟 4 字节的类型身份，然后才是这个 1 字节的值。**宽度一变，读侧 `ReadBool` 就会把紧邻的下一个字节当成布尔值**——而那个字节属于下一个成员或下一个槽位。整条对象数据从那一点起全部错位，**表现是「读档后对象乱七八糟但没有任何异常」**。所以序列化器的字节宽度属于存档协议的一部分，与 [MemberTypeId](../MemberTypeId) 的编号一样不能动。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `Serialize` | `void IBasicTypeSerializer.Serialize(IWriter writer, object value)` | `:7-10`。`writer.WriteBool((bool)value)`（`:9`）。**注意是强制转换 `(bool)value`** —— 传进来的 `object` 必须真的装 `bool`，否则抛 `InvalidCastException`。显式接口实现，所以外部必须经 `IBasicTypeSerializer` 引用调。 |
| `Deserialize` | `object IBasicTypeSerializer.Deserialize(IReader reader)` | `:12-15`。`return reader.ReadBool();`（`:14`）——**返回装箱的 `bool`**，所以槽位的 `Value` 是 `object` 而非 `bool`。 |
| `GetSizeInBytes` | `int IBasicTypeSerializer.GetSizeInBytes()` | `:17-20`。**恒返回 1**（`:19`）。被 [VariableSaveData](../VariableSaveData) 的 `GetDataSize` 用来累加字节预算（`:145`）。**显式接口实现**（与 [StringSerializer](../StringSerializer) 的 `public` 写法不同）。 |
| 类型身份 | `internal class BoolBasicTypeSerializer : IBasicTypeSerializer` | `internal`。无字段无状态。**它是这个家族里最小的实现，也是唯一申报字节数小于 4 的**——所有整型与浮点都是 4。 |

## 真实示例

全文（`TaleWorlds.SaveSystem.Definition/BoolBasicTypeSerializer.cs:5-21`）：

```csharp
internal class BoolBasicTypeSerializer : IBasicTypeSerializer
{
    void IBasicTypeSerializer.Serialize(IWriter writer, object value)
    {
        writer.WriteBool((bool)value);          // :9
    }

    object IBasicTypeSerializer.Deserialize(IReader reader)
    {
        return reader.ReadBool();               // :14
    }

    int IBasicTypeSerializer.GetSizeInBytes()
    {
        return 1;                               // :19
    }
}
```

底层确实是 1 字节（`TaleWorlds.Library/TaleWorlds.Library/BinaryWriter.cs:131-136`）：

```csharp
public void WriteBool(bool value)
{
    EnsureLength(1);
    _data[_availableIndex] = (byte)(value ? 1u : 0u);   // 折成 0/1，单字节
    _availableIndex++;
}
```

mod 视角的对照实验——同族字节数一览：

```csharp
// bool   = 1   ← WriteBool 自己 EnsureLength(1)
// byte   = 1 ? （ByteBasicTypeSerializer，未核）
// short  = 2   （ShortBasicTypeSerializer，未核）
// int    = 4   ← WriteInt EnsureLength(4)（BinaryWriter.cs:77）
// float  = 4   ← WriteFloat 走 BitConverter.GetBytes（BinaryWriter.cs:138）
// Vec3   = 16  ← WriteVec3 写 x,y,z,w 四个 float（BinaryWriter.cs:187）
// Color  = 16  ← WriteColor 写 r,g,b,a 四个 float（BinaryWriter.cs:123）
// MatrixFrame 申报 48、实际 64  ← 唯一对不上的
Debug.Print("宽度不可改：改了就是整段对象数据错位，且无异常", 0);
```

## 依赖关系

- 契约：[IBasicTypeSerializer](../IBasicTypeSerializer)（三个成员）
- 持有者：[BasicTypeDefinition](../BasicTypeDefinition)（`:12` 赋值 `Serializer`）
- 字节原语：`WriteBool` / `ReadBool` 在 `BinaryWriter.cs:131` 与 `BinaryReader` 的同名方法；对照 `WriteInt` 在 `BinaryWriter.cs:77`
- 调用方：[VariableSaveData](../VariableSaveData) 的基础类型分支（`:74` 判定、`:122` 调用、`:145` 预算）与 [SaveContext](../SaveContext) 的 `new BinaryWriter(dataSize)`（`:510`）
- 标签：[SavedMemberType](../SavedMemberType) 的 `BasicType`（序号 6）
- 读侧写回时的类型判定：[FieldLoadData](../FieldLoadData) / [PropertyLoadData](../PropertyLoadData) 的 `IsInstanceOfType`
- 同族：[IntBasicTypeSerializer](../IntBasicTypeSerializer)、[FloatBasicTypeSerializer](../FloatBasicTypeSerializer)、[Vec3BasicTypeSerializer](../Vec3BasicTypeSerializer)、[ColorBasicTypeSerializer](../ColorBasicTypeSerializer)、[MatrixFrameBasicTypeSerializer](../MatrixFrameBasicTypeSerializer)、[StringSerializer](../StringSerializer)（空实现）
- 体系全貌：../../../architecture/save-system