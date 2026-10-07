---
title: "Vec3BasicTypeSerializer"
description: "单个引擎向量的序列化器：申报 16 字节，因为引擎的 Vec3 带 w 分量、写的是 x,y,z,w 四个 float —— 不是三个。"
---

# Vec3BasicTypeSerializer

**Namespace:** `TaleWorlds.SaveSystem.Definition`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `internal class Vec3BasicTypeSerializer : IBasicTypeSerializer`
**Base:** 无（实现 `IBasicTypeSerializer`）
**File:** `TaleWorlds.SaveSystem.Definition/Vec3BasicTypeSerializer.cs`

## 概述

`Vec3` 在存档里整体写出，不拆成三个独立的 `float` 字段：本类把它强转后交给引擎的 `WriteVec3`（`Vec3BasicTypeSerializer.cs:10`），读回来是一个 `Vec3` 对象（`:15`），字节预算申报 **16**（`:20`）。**这 16 不是笔误——引擎的 `Vec3` 带一个 `w` 分量，`WriteVec3` 写的是 x、y、z、w 四个 float**（`TaleWorlds.Library/TaleWorlds.Library/BinaryWriter.cs:187-193`）。它是理解「为什么一个三维向量要 16 字节」这个问题的答案所在，也是 [MatrixFrameBasicTypeSerializer](../MatrixFrameBasicTypeSerializer) 那个 48 字节报错的对照组。

## 心智模型

把它想成**一个带尾格的信封**：地址只填三格（x、y、z），但信封格式固定留了四格（多一个 w），所以无论你用不用那一格，它都占四个 float 的位置。推论有四条：

1. **16 字节是精确的，不是向上取整。** `WriteVec3` 在 `BinaryWriter.cs:187`，内部连续调四次 `WriteFloat`。而单分量写入的 `WriteFloat` 在 `BinaryWriter.cs:138`，它走 `BitConverter.GetBytes` 拿 4 字节——**4 × 4 = 16，与 `GetSizeInBytes()` 声明的一致**。
2. **w 分量会进存档。** 这意味着**存进去再读出来，两个 `Vec3` 可能不再完全相等**，即使你只改了 x/y/z——因为 w 也被一并保存并恢复了。**如果你拿 `Vec3` 当哈希键或做精确比较，这一点要记住。**
3. **它不走「拆成三个 float 字段」的组合路线。** [VariableSaveData](../VariableSaveData) 的基础类型分支直接把值交给 `Serializer.Serialize`（`:122`），**不关心这个类型由什么组成**——所以「一个 `Vec3` 占一个槽位 16 字节」和「三个 `float` 字段各占一个槽位」在存档里是完全不同的两种布局。
4. **它与 [ColorBasicTypeSerializer](../ColorBasicTypeSerializer) 字节数相同但载荷完全不同。** 两者都是 16 字节、都是四次 `WriteFloat`，但一个写的是 x/y/z/w、另一个写的是 r/g/b/a。**所以从字节长度无法判断这段数据是什么类型**——这正是为什么 [VariableSaveData](../VariableSaveData) 要在写基础类型时**先写类型身份**（`:117`）。

## 如何使用

### 怎么拿到它

**由 [BasicTypeDefinition](../BasicTypeDefinition) 持有**（`:12` 赋值 `Serializer`），注册入口是 [SaveableTypeDefiner](../SaveableTypeDefiner) 的 `AddBasicTypeDefinition(typeof(Vec3), saveId, new Vec3BasicTypeSerializer())`。保存期 [VariableSaveData](../VariableSaveData) 的基础类型分支先校验定义存在（`:118`）、再调 `Serialize`（`:122`）。读侧由 [VariableLoadData](../VariableLoadData) 的 `BasicType` 分支调 `Deserialize`（`VariableLoadData.cs:66-71`）。

**mod 要影响的是「哪种类型走这条路线」**：想让自定义三维结构走基础类型路线，就要写一个自己的 `IBasicTypeSerializer` 并登记，而不是去拆成三个 `float` 字段。

### 最小可运行片段

```csharp
using TaleWorlds.Library;
using TaleWorlds.SaveSystem.Definition;

// 申报 16 字节 —— 因为引擎的 Vec3 带 w
IBasicTypeSerializer ser = new Vec3BasicTypeSerializer();
Debug.Print("Vec3 基础类型字节数 = " + ser.GetSizeInBytes(), 0);   // 16

// 底层 WriteVec3 的四次 WriteFloat（BinaryWriter.cs:187-193）
// x, y, z, w  ← 注意有 w，所以是 4 × 4 = 16 而不是 3 × 4 = 12
var v = new Vec3(1f, 2f, 3f);
Debug.Print("w 分量也进存档：只改 x/y/z 再往返，Vec3 仍可能不完全相等", 0);

// 对照：Color 也是 16 字节但载荷是 r,g,b,a（ColorBasicTypeSerializer）
// 所以光看字节长度判断不出类型 —— 这就是为什么要写类型身份
Debug.Print("同长度不同载荷 ⇒ 必须靠类型身份区分", 0);
```

### 用它最容易踩的一条

**`Vec3` 的 `w` 分量会被一起存进档案，这会破坏「三个 float」的直觉。** 具体后果有两个：一是**一个只改了 x/y/z 的 `Vec3`，在存档往返后可能与原值不完全相等**（因为 w 也参与了往返，若中途某处写过 w 就会被改变）；二是**`Vec3BasicTypeSerializer` 报 16 而你按 12 算体积**，会让你对存档大小的估算偏大 33%——[MatrixFrameBasicTypeSerializer](../MatrixFrameBasicTypeSerializer) 就是真按 12 算过（报 48 = 4×12），结果与实际差 16 字节。**所以看到「申报 ≠ 实际」时，先确认 `Vec3` 是几字节，而不是先怀疑序列化器写错了。**

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `Serialize` | `void IBasicTypeSerializer.Serialize(IWriter writer, object value)` | `:7-11`。先 `Vec3 vec = (Vec3)value;`（`:9`）再 `writer.WriteVec3(vec);`（`:10`）。**硬转换**，传错类型抛 `InvalidCastException`。显式接口实现。 |
| `Deserialize` | `object IBasicTypeSerializer.Deserialize(IReader reader)` | `:13-16`。`return reader.ReadVec3();`（`:15`）——**返回装箱的 `Vec3`**，x/y/z/w 四分量一并恢复。 |
| `GetSizeInBytes` | `int IBasicTypeSerializer.GetSizeInBytes()` | `:18-21`。**恒返回 16**（`:20`），与 `WriteVec3` 的四次 `WriteFloat` 精确对应。显式接口实现。 |
| 类型身份 | `internal class Vec3BasicTypeSerializer : IBasicTypeSerializer` | `internal`。无字段无状态。**它是「引擎复合标量」这类实现的代表**——[ColorBasicTypeSerializer](../ColorBasicTypeSerializer) 与它同构，[MatrixFrameBasicTypeSerializer](../MatrixFrameBasicTypeSerializer) 则是把四个 `Vec3` 再组合起来的例子。 |

## 真实示例

全文（`TaleWorlds.SaveSystem.Definition/Vec3BasicTypeSerializer.cs:5-22`）：

```csharp
internal class Vec3BasicTypeSerializer : IBasicTypeSerializer
{
    void IBasicTypeSerializer.Serialize(IWriter writer, object value)
    {
        Vec3 vec = (Vec3)value;        // :9
        writer.WriteVec3(vec);         // :10
    }

    object IBasicTypeSerializer.Deserialize(IReader reader)
    {
        return reader.ReadVec3();      // :15
    }

    int IBasicTypeSerializer.GetSizeInBytes()
    {
        return 16;                     // :20  ← 因为 Vec3 带 w
    }
}
```

16 字节的来源（`TaleWorlds.Library/TaleWorlds.Library/BinaryWriter.cs:187`）：

```csharp
public void WriteVec3(Vec3 vec3)
{
    WriteFloat(vec3.x);
    WriteFloat(vec3.y);
    WriteFloat(vec3.z);
    WriteFloat(vec3.w);      // ← 第四个分量，所以是 4 × 4 = 16 字节
}
```

mod 视角的对照实验：

```csharp
// 三个 16 字节的载荷完全不同，光看长度判断不出类型：
//   Vec3  → x, y, z, w          （Vec3BasicTypeSerializer.cs:10）
//   Color → r, g, b, a          （ColorBasicTypeSerializer.cs:10）
//   MatrixFrame → 4 个 Vec3 = 64，但它申报 48  （MatrixFrameBasicTypeSerializer.cs:25）
// 所以「同一长度不同载荷」正是必须在槽位里写类型身份的理由（VariableSaveData.cs:117）
Debug.Print("字节长度不是类型标识；类型身份是单独写在槽位里的", 0);
```

## 依赖关系

- 契约：[IBasicTypeSerializer](../IBasicTypeSerializer)（三个成员）
- 持有者：[BasicTypeDefinition](../BasicTypeDefinition)（`:12` 赋值 `Serializer`）
- 字节原语：`WriteVec3` 在 `BinaryWriter.cs:187`（内部四次 `WriteFloat`）。单分量写入 `WriteFloat` 在 `BinaryWriter.cs:138`。读侧是 `BinaryReader` 的 `ReadVec3`。
- 调用方：[VariableSaveData](../VariableSaveData) 的基础类型分支（`:117` 先写类型身份、`:122` 调 `Serialize`、`:145` 预算）与 [SaveContext](../SaveContext) 的 `new BinaryWriter(dataSize)`（`:510`）
- 读侧：[VariableLoadData](../VariableLoadData) 的 `BasicType` 分支（`:66`）
- 标签：[SavedMemberType](../SavedMemberType) 的 `BasicType`（序号 6）
- 同长度不同载荷的对照：[ColorBasicTypeSerializer](../ColorBasicTypeSerializer)；组合多个 `Vec3` 的例子：[MatrixFrameBasicTypeSerializer](../MatrixFrameBasicTypeSerializer)（申报 48、实际 64）
- 同构的标量族：[IntBasicTypeSerializer](../IntBasicTypeSerializer)、[BoolBasicTypeSerializer](../BoolBasicTypeSerializer)、[FloatBasicTypeSerializer](../FloatBasicTypeSerializer)
- 体系全貌：../../../architecture/save-system