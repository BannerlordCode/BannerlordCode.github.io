---
title: "MatrixFrameBasicTypeSerializer"
description: "把一个 MatrixFrame 拆成四个 Vec3 顺序写出，但它报的字节预算 48 与实际写出的 64 不符 —— 后果是一次缓冲区扩容，不是存档损坏。"
---

# MatrixFrameBasicTypeSerializer

**Namespace:** `TaleWorlds.SaveSystem.Definition`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `internal class MatrixFrameBasicTypeSerializer : IBasicTypeSerializer`
**Base:** 无（实现 `IBasicTypeSerializer`）
**File:** `TaleWorlds.SaveSystem.Definition/MatrixFrameBasicTypeSerializer.cs`

## 概述

`MatrixFrame`（一个朝向 + 原点的变换）没有专门的引擎写入方法，所以本类**手工拆成四个 `Vec3` 顺序写出**：原点 `origin`、旋转的三个基向量 `s` / `f` / `u`（`:10-13`），读回来再组装回 `new Mat3(...)` + `new MatrixFrame(...)`（`:20`）。它是 [SavedMemberType](../SavedMemberType) 的 `BasicType` 路线里最复杂的一个实现，也是这个家族里唯一一个**报的字节数与实际写出字节数不一致**的——`GetSizeInBytes` 返回 48（`:25`），而四个 `Vec3` 实际写出 64 字节。

## 心智模型

把它想成**拆成四块寄的家具**：写的时候按「原点、右、左、上」的固定顺序拆包，读的时候按同样顺序拼回去。推论有四条：

1. **字节预算少报了 16 字节，而这是「安全」方向。** `WriteVec3` 写的是 **x、y、z、w 四个 float 共 16 字节**（`BinaryWriter.cs:187`），四个就是 64；而 `GetSizeInBytes()` 返回 48（`MatrixFrameBasicTypeSerializer.cs:25`）。**但这不是存档损坏**：`EnsureLength` 在写入超出时会把缓冲区**翻倍或扩到所需大小**（`BinaryWriter.cs:34`）。而 [SaveContext](../SaveContext) 用的那个构造器只是给一个**初始容量**（`SaveContext.cs:510`）。所以后果是**一次额外的数组分配 + 拷贝**，读回来完全正确。**反过来的方向（多报）同样只是浪费。**
2. **读回来的顺序与写出去的顺序不一致，但结果正确。** 写是 `origin, s, f, u`（`:10-13`）；读却是先读 `o`（`:18`）、再读 `f`（`:19`）、然后在构造参数里按 `(第一个读到的, f, 第三个读到的)` 组装（`:20`）——也就是**实际读序是 s、f、u，与写序一致**，只是代码把中间的 `f` 提前读了。**看起来像顺序错了，其实是刻意让 `f` 落在中间。**
3. **它没有走「组合」路线。** [VariableSaveData](../VariableSaveData) 的 `BasicType` 分支直接把值交给 `Serializer.Serialize`（`:122`），**不检查这个类型是不是由别的结构体组成**。所以「拆成四个 `Vec3`」这件事完全由本类自己负责，而不是引擎生成的组合代码。
4. **`Vec3` 有四个分量，这是最容易被算错的地方。** 引擎的 `Vec3` 带 `w`，所以一个 `Vec3` 是 16 字节而不是 12——见 `BinaryWriter.cs:187` 那次 `WriteVec3` 的四个 `WriteFloat` 调用。这也是为什么 [Vec3BasicTypeSerializer](../Vec3BasicTypeSerializer) 的 `GetSizeInBytes` 返回 16 是对的——**两个数据点互相印证了这一点**，而本类的 48 才是那个孤立的错数。

## 如何使用

### 怎么拿到它

**由 [BasicTypeDefinition](../BasicTypeDefinition) 持有**（构造器在 `:12` 赋值 `Serializer`），注册入口是 [SaveableTypeDefiner](../SaveableTypeDefiner) 的 `AddBasicTypeDefinition(typeof(MatrixFrame), saveId, new MatrixFrameBasicTypeSerializer())`。保存期 [VariableSaveData](../VariableSaveData) 的基础类型分支会先 `TryGetTypeDefinition` 校验定义存在、否则 `Debug.FailedAssert`（`:118-120`），再调 `Serialize`（`:122`）。**mod 要影响的是「哪种类型走这条路线」，不是这个类本身。**

### 最小可运行片段

```csharp
using TaleWorlds.Library;
using TaleWorlds.SaveSystem.Definition;

// 四个 Vec3 × 16 字节 = 64，而它报的是 48 —— 差的 16 字节由 BinaryWriter 自动扩容吸收
var frame = new MatrixFrame(new Mat3(Vec3.Forward, Vec3.Right, Vec3.Up), new Vec3(1f, 2f, 3f));

IBasicTypeSerializer ser = new MatrixFrameBasicTypeSerializer();
Debug.Print("申报字节 = " + ser.GetSizeInBytes(), 0);        // 48

// 实际写出 = 4 × WriteVec3，而 WriteVec3 是 x,y,z,w 四个 float
// BinaryWriter.WriteVec3  → BinaryWriter.cs:187   每次 16 字节
// 4 × 16 = 64  ⇒ 申报少了 16
// 但 EnsureLength 会扩容（BinaryWriter.cs:34），所以不损坏，只是多一次分配+拷贝

// 对照：BinaryWriter 构造器给的是初始容量，不是上限
// BinaryWriter(int capacity) → BinaryWriter.cs:22   new byte[capacity]
Debug.Print("容量只是起点，EnsureLength 会翻倍", 0);
```

### 用它最容易踩的一条

**`GetSizeInBytes()` 不是「校验值」而是「初始容量提示」，所以它和实际写出不一致不会毁掉存档——但会让这类字段的对象数据在写盘时多一次数组扩容与拷贝。** 很多人第一反应是「少报 = 缓冲区溢出 = 存档损坏」，**这是错的**：那个带容量参数的构造器只做 `new byte[capacity]`（`BinaryWriter.cs:22`）。真正吸收超量的是 `EnsureLength`，它在每次写入前检查 `num > _data.Length` 就扩容（`BinaryWriter.cs:34`）。所以如果你在 profile 里看到「某些对象的写入特别慢」，**先怀疑这类字段的数量**，而不是去查写入器。反过来，若某个序列化器**多报**了字节数，也只是浪费内存，两种偏差都不会让存档坏掉。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `Serialize` | `void IBasicTypeSerializer.Serialize(IWriter writer, object value)` | `:7-14`。把 `value` 强转成 `MatrixFrame`（`:9`），然后按 `origin`（`:10`）、`rotation.s`（`:11`）、`rotation.f`（`:12`）、`rotation.u`（`:13`）的顺序各写一个 `Vec3`。**显式接口实现**，所以要经 `IBasicTypeSerializer` 引用调。 |
| `Deserialize` | `object IBasicTypeSerializer.Deserialize(IReader reader)` | `:16-21`。读 `o`（`:18`）与 `f`（`:19`），然后 `new Mat3(reader.ReadVec3(), in f, reader.ReadVec3())`（`:20`）——**第二个与第三个读在同一行里**，所以整体读序是 s、f、u，与写序一致。最后 `new MatrixFrame(..., in o)` 组装。 |
| `GetSizeInBytes` | `int IBasicTypeSerializer.GetSizeInBytes()` | `:23-26`。**恒返回 48**（`:25`），而实际写出 64 字节。**这是显式接口实现**（与 [StringSerializer](../StringSerializer) 的 `public` 写法不同）。它被 [VariableSaveData](../VariableSaveData) 的 `GetDataSize` 用来累加预算（`:145`）。 |
| 类型身份 | `internal class MatrixFrameBasicTypeSerializer : IBasicTypeSerializer` | `internal`。无字段无状态，纯静态行为。**它是本家族里唯一手工展开复合类型的实现**——其余要么是单个标量、要么单个引擎向量/颜色。 |

## 真实示例

写侧的展开顺序（`TaleWorlds.SaveSystem.Definition/MatrixFrameBasicTypeSerializer.cs:7-14`）：

```csharp
void IBasicTypeSerializer.Serialize(IWriter writer, object value)
{
    MatrixFrame matrixFrame = (MatrixFrame)value;
    writer.WriteVec3(matrixFrame.origin);        // :10  第 1 个 Vec3
    writer.WriteVec3(matrixFrame.rotation.s);    // :11  第 2 个
    writer.WriteVec3(matrixFrame.rotation.f);    // :12  第 3 个
    writer.WriteVec3(matrixFrame.rotation.u);    // :13  第 4 个
}
```

读侧的「提前读中间那个」（`:16-21`）：

```csharp
object IBasicTypeSerializer.Deserialize(IReader reader)
{
    Vec3 o = reader.ReadVec3();                                            // :18  实际读到的是 s
    Vec3 f = reader.ReadVec3();                                            // :19  f
    return new MatrixFrame(new Mat3(reader.ReadVec3(), in f, reader.ReadVec3()), in o);  // :20 再读 u
    // 组装顺序 (读1=s, f, 读2=u) 与写序 origin,s,f,u 对齐
}
```

`Vec3` 真的是 16 字节（`TaleWorlds.Library/TaleWorlds.Library/BinaryWriter.cs:187-193`）：

```csharp
// BinaryWriter.cs:187 处的 WriteVec3 —— 有 w，所以是 4 个 float = 16 字节
public void WriteVec3(Vec3 vec3)
{
    WriteFloat(vec3.x);
    WriteFloat(vec3.y);
    WriteFloat(vec3.z);
    WriteFloat(vec3.w);      // ← 有 w，所以是 4 个 float = 16 字节
}
```

mod 视角的对照实验：

```csharp
// 申报 48 vs 实际 64，但 EnsureLength（BinaryWriter.cs:34-48）会扩容：
//   if (num > _data.Length) { num2 = _data.Length * 2; if (num > num2) num2 = num; 重新分配并拷贝 }
// 所以后果 = 一次额外的分配 + 拷贝，不是数据损坏。
//
// 反向验证：把 Vec3BasicTypeSerializer 的 16 与本类的 4×16=64 放在一起看，
// 两个数据点一致地说明「Vec3 = 16 字节」，于是 48 就是孤立的那个错数。
Debug.Print("字节预算偏差 = 性能问题，不是正确性问题", 0);
```

## 依赖关系

- 契约：[IBasicTypeSerializer](../IBasicTypeSerializer)（三个成员）
- 持有者：[BasicTypeDefinition](../BasicTypeDefinition)（`:12` 赋值 `Serializer`）
- 字节原语：`WriteVec3` 在 `BinaryWriter.cs:187`（含 w，16 字节）。单分量写入是 `WriteFloat`，在 `BinaryWriter.cs:138`。缓冲区自增是 `EnsureLength`，在 `BinaryWriter.cs:34`。初始容量构造器在 `BinaryWriter.cs:22`。
- 调用方：[VariableSaveData](../VariableSaveData) 的 `Serialize`（`:122`）、`GetDataSize`（`:145`）；[SaveContext](../SaveContext) 的 `new BinaryWriter(dataSize)`（`:510`）
- 标签：[SavedMemberType](../SavedMemberType) 的 `BasicType`（序号 6）
- 同族：[Vec3BasicTypeSerializer](../Vec3BasicTypeSerializer)（单个 `Vec3`，16 字节）、[ColorBasicTypeSerializer](../ColorBasicTypeSerializer)（4 个 float，16 字节）、[MatrixFrameBasicTypeSerializer] 之外的标量族（[IntBasicTypeSerializer](../IntBasicTypeSerializer)、[BoolBasicTypeSerializer](../BoolBasicTypeSerializer)）
- 读侧对照：[VariableLoadData](../VariableLoadData) 的 `BasicType` 分支（`:66-71`）
- 体系全貌：../../../architecture/save-system