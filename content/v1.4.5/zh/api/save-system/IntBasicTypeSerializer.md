---
title: "IntBasicTypeSerializer"
description: "固定宽度整型序列化器的标准样本：写 4 字节、读 4 字节、申报 4 字节，三者精确一致 —— 读懂它就读懂了这个家族的契约。"
---

# IntBasicTypeSerializer

**Namespace:** `TaleWorlds.SaveSystem.Definition`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `internal class IntBasicTypeSerializer : IBasicTypeSerializer`
**Base:** 无（实现 `IBasicTypeSerializer`）
**File:** `TaleWorlds.SaveSystem.Definition/IntBasicTypeSerializer.cs`

## 概述

这是整个基础类型家族里最标准的样本，21 行、三个方法、一一对应：`Serialize` 写一个 `int`（`IntBasicTypeSerializer.cs:9`），`Deserialize` 读一个 `int`（`:14`），`GetSizeInBytes` 申报 4（`:19`）。它同时是这个家族的**参照实现**——同族的 8 个整型（byte / sbyte / short / ushort / uint / ulong / long）全都照它的形状改一改写入方法与字节常数，`float` 也是同一个形状只是换成 `WriteFloat`。**理解它，就理解了 `SavedMemberType.BasicType` 这条路线上「申报字节数 = 实际写出字节数」这条契约。**

## 心智模型

把它想成**一个格子一个数**：不管数本身多大，占的位置固定。推论有四条：

1. **三个方法是一一对应的读写配对，字节数由第三个方法说。** 写 4、读 4、报 4——三者必须同时对。**这不是巧合，是这个家族的硬契约**：[VariableSaveData](../VariableSaveData) 用 `GetSizeInBytes()` 累加字节预算（`:145`），[SaveContext](../SaveContext) 用这个预算构造写入器（`:510`），**所以任何一个不等都会出问题**（本家族里 [MatrixFrameBasicTypeSerializer](../MatrixFrameBasicTypeSerializer) 就是唯一报错的，48 vs 64）。
2. **`(int)value` 是硬转换，不是安全转换。** `:9` 直接把 `object` 强转成 `int`。**所以槽位里装的东西必须是真正的 `int`**，而「槽位里装的是什么」由字段的声明类型决定（`FieldSaveData.cs:22` 传的是 `FieldInfo.FieldType`）。传错类型就是 `InvalidCastException`。
3. **读回来是装箱的 `int`，不是 `int`。** `Deserialize` 返回 `object`（`:14`），所以下游拿到的槽位值是装箱的 `int`。写回字段前要先过一道类型兼容判定（`FieldLoadData.cs:22`），再决定写不写。
4. **字节序与平台绑定。** 底层 `WriteInt` 是逐字节移位写出（`TaleWorlds.Library/TaleWorlds.Library/BinaryWriter.cs:77-84`），也就是**固定小端**。而 [GameData](../GameData) 的 `Write` 只打印自己是不是小端、**不做断言**（`:109`）。所以整个存档格式隐含依赖小端平台，跨大端读写不会有任何提示。

## 如何使用

### 怎么拿到它

**由 [BasicTypeDefinition](../BasicTypeDefinition) 持有**（构造器在 `:12` 赋给 `Serializer`），注册入口是 [SaveableTypeDefiner](../SaveableTypeDefiner) 的 `AddBasicTypeDefinition(typeof(int), saveId, new IntBasicTypeSerializer())`，引擎侧由 [SaveableBasicTypeDefiner](../SaveableBasicTypeDefiner) 登记。保存期 [VariableSaveData](../VariableSaveData) 的基础类型分支先校验定义存在（`:118`）、再调 `Serialize`（`:122`）。

**mod 要影响的是「哪种类型走这条路线」**，不是这个类。想让自定义类型走基础类型路线，需要一个 `IBasicTypeSerializer` 实现 + `AddBasicTypeDefinition` 登记。

### 最小可运行片段

```csharp
using TaleWorlds.SaveSystem.Definition;

// 标准形状：写 4 / 读 4 / 报 4
IBasicTypeSerializer ser = new IntBasicTypeSerializer();
Debug.Print("int 基础类型字节数 = " + ser.GetSizeInBytes(), 0);   // 4

// 底层 WriteInt 是固定小端的逐字节写出（BinaryWriter.cs:77-84）
// public void WriteInt(int value)
// {
//     EnsureLength(4);
//     _data[_availableIndex++] = (byte)value;
//     _data[_availableIndex++] = (byte)(value >> 8);
//     _data[_availableIndex++] = (byte)(value >> 16);
//     _data[_availableIndex++] = (byte)(value >> 24);
// }

// 同族换一换写入方法就是另一个实现：
//   Int/Uint/Long/Ulong → WriteInt(4) · Byte/SByte → 1 · Short/UShort → 2
Debug.Print("申报字节数必须等于实际写出字节数 —— 这是本家族的硬契约", 0);
```

### 用它最容易踩的一条

**写盘期间的字段取值时机不一致，会让「快照」这个词失效。** [SaveContext](../SaveContext) 的收集顺序是固定的：`CollectStructs()` → `CollectMembers()` → `CollectStrings()`（`SaveContext.cs:482-485`）。**成员槽位的值是在 `CollectMembers` 里通过反射从活对象上取的**（[FieldSaveData](../FieldSaveData) 的 `:21`），而 `Target` 是**活的引用**不是快照。所以如果在保存流程的中途改了对象的字段，不同成员的取值时刻就各不相同，最终存档里是一份「不同时刻的拼接」。**这个家族的序列化器是无状态的（它只认 `object` 里装的值），但它读到的是那个时刻的值。**

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `Serialize` | `void IBasicTypeSerializer.Serialize(IWriter writer, object value)` | `:7-10`。`writer.WriteInt((int)value)`（`:9`）。**硬转换**，所以槽位里必须真的是 `int`。显式接口实现，外部须经 `IBasicTypeSerializer` 引用调。 |
| `Deserialize` | `object IBasicTypeSerializer.Deserialize(IReader reader)` | `:12-15`。`return reader.ReadInt();`（`:14`）——**返回装箱的 `int`**。下游要先判类型兼容再写回字段。 |
| `GetSizeInBytes` | `int IBasicTypeSerializer.GetSizeInBytes()` | `:17-20`。**恒返回 4**（`:19`），与 `WriteInt` 的 `EnsureLength(4)` 精确对应。**显式接口实现**（[StringSerializer](../StringSerializer) 是 `public`，写法不一致）。 |
| 类型身份 | `internal class IntBasicTypeSerializer : IBasicTypeSerializer` | `internal`。无字段无状态。**它是这个家族的参照实现**——其余 8 个整型与 `float` 都是它的同构变体。 |

## 真实示例

全文（`TaleWorlds.SaveSystem.Definition/IntBasicTypeSerializer.cs:5-21`）：

```csharp
internal class IntBasicTypeSerializer : IBasicTypeSerializer
{
    void IBasicTypeSerializer.Serialize(IWriter writer, object value)
    {
        writer.WriteInt((int)value);      // :9   硬转换
    }

    object IBasicTypeSerializer.Deserialize(IReader reader)
    {
        return reader.ReadInt();          // :14  返回装箱 int
    }

    int IBasicTypeSerializer.GetSizeInBytes()
    {
        return 4;                          // :19
    }
}
```

家族里的三种宽度（数值均已核过对应写入方法的 `EnsureLength`）：

```csharp
// WriteBool → EnsureLength(1)                  BinaryWriter.cs:131  ⇒ bool  = 1
// WriteInt  → EnsureLength(4)                  BinaryWriter.cs:77   ⇒ int   = 4
// WriteVec3 → 4 × WriteFloat                  BinaryWriter.cs:187  ⇒ Vec3  = 16（x,y,z,w）
// WriteColor→ 4 × WriteFloat                  BinaryWriter.cs:123  ⇒ Color = 16（r,g,b,a）
// MatrixFrame 写 4 × Vec3 = 64，却申报 48       MatrixFrameBasicTypeSerializer.cs:25  ← 唯一对不上
Debug.Print("宽度是存档协议的一部分", 0);
```

mod 视角的对照实验：

```csharp
// ① 三个方法必须同时对上：写 4 / 读 4 / 报 4
// ② 读出来是 object，装箱 int —— 下游用 FieldType.IsInstanceOfType 判能不能接
// ③ 整条路线依赖「字段声明类型」而不是运行时类型：
//    FieldSaveData 传的是 FieldInfo.FieldType（FieldSaveData.cs:22）
//    所以一个 object 字段装 int，不会走本类
Debug.Print("判定看声明类型，不是运行时类型 —— object 字段是最大的坑", 0);
```

## 依赖关系

- 契约：[IBasicTypeSerializer](../IBasicTypeSerializer)（三个成员）
- 持有者：[BasicTypeDefinition](../BasicTypeDefinition)（`:12` 赋值 `Serializer`）
- 字节原语：`WriteInt` 在 `BinaryWriter.cs:77`（固定小端逐字节写出）、`ReadInt` 在 `BinaryReader`
- 调用方：[VariableSaveData](../VariableSaveData) 的基础类型分支（`:74` 判定、`:118` 校验、`:122` 调用、`:145` 预算）与 [SaveContext](../SaveContext) 的 `new BinaryWriter(dataSize)`（`:510`）
- 标签：[SavedMemberType](../SavedMemberType) 的 `BasicType`（序号 6）
- 声明类型来源：[FieldSaveData](../FieldSaveData)（`:22` 传 `FieldInfo.FieldType`）与 [PropertySaveData](../PropertySaveData)（`:21`）
- 读侧写回的兼容判定：[FieldLoadData](../FieldLoadData) / [PropertyLoadData](../PropertyLoadData) 的三段判定
- 同族：[BoolBasicTypeSerializer](../BoolBasicTypeSerializer)、[FloatBasicTypeSerializer](../FloatBasicTypeSerializer)、[Vec3BasicTypeSerializer](../Vec3BasicTypeSerializer)、[ColorBasicTypeSerializer](../ColorBasicTypeSerializer)、[MatrixFrameBasicTypeSerializer](../MatrixFrameBasicTypeSerializer)、[StringSerializer](../StringSerializer)（空实现）
- 字节序相关：[GameData](../GameData) 的 `Write` 只打印字节序不断言（`:109`）
- 体系全貌：../../../architecture/save-system