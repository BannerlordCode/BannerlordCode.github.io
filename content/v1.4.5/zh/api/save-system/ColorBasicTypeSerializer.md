---
title: "ColorBasicTypeSerializer"
description: "颜色的序列化器：写 r、g、b、a 四个 float 共 16 字节 —— 与 Vec3 字节数相同但载荷完全不同，所以字节长度不能用来判断类型。"
---

# ColorBasicTypeSerializer

**Namespace:** `TaleWorlds.SaveSystem.Definition`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `internal class ColorBasicTypeSerializer : IBasicTypeSerializer`
**Base:** 无（实现 `IBasicTypeSerializer`）
**File:** `TaleWorlds.SaveSystem.Definition/ColorBasicTypeSerializer.cs`

## 概述

`Color` 与 `Vec3` 一样是「一个对象、一次写出」的引擎复合标量，本类把它交给引擎的 `WriteColor`（`ColorBasicTypeSerializer.cs:10`），读回来是一个 `Color`（`:15`），字节预算申报 **16**（`:20`）——**和 [Vec3BasicTypeSerializer](../Vec3BasicTypeSerializer) 完全相同的数字**。这不是巧合：两者都是「四次 `WriteFloat`」的形状，只不过一个写 x/y/z/w、另一个写 r/g/b/a。**它是解释「为什么槽位必须写类型身份」的最佳样本**——两段长度一模一样的字节，含义却毫不相干。

## 心智模型

把它想成**两个大小相同的包裹，但里面装的东西不同**：一个装着坐标三格加一格余量，一个装着四格颜色。搬运工（存档系统）只看包裹尺寸，不看内容。推论有四条：

1. **16 字节来自四次 `WriteFloat`。** `WriteColor` 依次写 `Red`、`Green`、`Blue`、`Alpha`（`TaleWorlds.Library/TaleWorlds.Library/BinaryWriter.cs:123-129`），每次 4 字节。**注意它写的是顺序标量，不是 packed 整数**——所以颜色在存档里是不压缩的。
2. **与 [Vec3BasicTypeSerializer](../Vec3BasicTypeSerializer) 同长不同载，这是类型身份存在的全部理由。** [VariableSaveData](../VariableSaveData) 写基础类型时**先写类型身份再写值**（`:117`），所以读侧能知道这 16 字节该还原成 `Color` 还是 `Vec3`。**如果没有那个类型身份，这两段字节无法区分。**
3. **颜色带 alpha，所以是四通道。** 只写 rgb 的话是 12 字节，但这里四个都写——**所以「颜色」在存档里占的体积是 rgba 而不是 rgb**。
4. **它同样不做「拆成四个 float 字段」的组合。** 基础类型分支直接把值交给序列化器（`:122`），所以「一个 `Color` 占 16 字节」和「四个 `float` 字段」是两种不同布局，存档之间不兼容。

## 如何使用

### 怎么拿到它

**由 [BasicTypeDefinition](../BasicTypeDefinition) 持有**（`:12` 赋值 `Serializer`），注册入口是 [SaveableTypeDefiner](../SaveableTypeDefiner) 的 `AddBasicTypeDefinition(typeof(Color), saveId, new ColorBasicTypeSerializer())`。保存期 [VariableSaveData](../VariableSaveData) 的基础类型分支先校验定义存在（`:118`）、再调 `Serialize`（`:122`）。读侧由 [VariableLoadData](../VariableLoadData) 的 `BasicType` 分支调 `Deserialize`（`:68`、`:71`）。

**mod 要影响的是「哪种类型走这条路线」**：如果你的自定义颜色类型想进存档，要么注册成基础类型并自己写序列化器，要么干脆用引擎的 `Color`。

### 最小可运行片段

```csharp
using TaleWorlds.Library;
using TaleWorlds.SaveSystem.Definition;

// 申报 16 字节 —— r, g, b, a 四个 float
IBasicTypeSerializer ser = new ColorBasicTypeSerializer();
Debug.Print("Color 基础类型字节数 = " + ser.GetSizeInBytes(), 0);   // 16

// 底层 WriteColor 逐通道写 float，不是 packed 整数（BinaryWriter.cs:123-129）
// WriteColor(Color value) { WriteFloat(value.Red); WriteFloat(value.Green);
//                            WriteFloat(value.Blue); WriteFloat(value.Alpha); }

// 对照：Vec3 也是 16 字节，但载荷是 x,y,z,w
//   ⇒ 字节长度不能当类型标识
Debug.Print("同长不同载 ⇒ 槽位必须写类型身份（VariableSaveData.cs:117）", 0);
```

### 用它最容易踩的一条

**用一个 `Color` 字段去接 `Vec3` 的存档数据（或反过来），不会有任何报错——只会静默得到一个颜色完全错掉的值。** 因为两者都是 16 字节、都在槽位的同一位置，读侧是靠**类型身份**而不是长度来分派的（`VariableSaveData.cs:117`）。而**如果你自己实现了一个 `IBasicTypeSerializer` 却没让它写出类型身份**（那是基类的责任，不是你的），读侧就会用当前版本的定义去解释旧档——**这时长度相同就意味着「能解析但解析成完全不同的东西」，是最难查的一类错误**。所以自定义基础类型序列化器时，**类型身份必须由引擎写、不是你写**，别去动 `VariableSaveData` 那条路径。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `Serialize` | `void IBasicTypeSerializer.Serialize(IWriter writer, object value)` | `:7-11`。先 `Color value2 = (Color)value;`（`:9`）再 `writer.WriteColor(value2);`（`:10`）。**硬转换**，传错类型抛 `InvalidCastException`。显式接口实现。 |
| `Deserialize` | `object IBasicTypeSerializer.Deserialize(IReader reader)` | `:13-16`。`return reader.ReadColor();`（`:15`）——**返回装箱的 `Color`**，四个通道一并恢复。 |
| `GetSizeInBytes` | `int IBasicTypeSerializer.GetSizeInBytes()` | `:18-21`。**恒返回 16**（`:20`），与 `WriteColor` 的四次 `WriteFloat` 精确对应。显式接口实现。 |
| 类型身份 | `internal class ColorBasicTypeSerializer : IBasicTypeSerializer` | `internal`。无字段无状态。**它与 [Vec3BasicTypeSerializer](../Vec3BasicTypeSerializer) 是「同长不同载」的一对**，是这个家族里最能说明「为什么槽位要写类型身份」的实现。 |

## 真实示例

全文（`TaleWorlds.SaveSystem.Definition/ColorBasicTypeSerializer.cs:5-22`）：

```csharp
internal class ColorBasicTypeSerializer : IBasicTypeSerializer
{
    void IBasicTypeSerializer.Serialize(IWriter writer, object value)
    {
        Color value2 = (Color)value;     // :9
        writer.WriteColor(value2);       // :10
    }

    object IBasicTypeSerializer.Deserialize(IReader reader)
    {
        return reader.ReadColor();       // :15
    }

    int IBasicTypeSerializer.GetSizeInBytes()
    {
        return 16;                       // :20
    }
}
```

16 字节的来源（`TaleWorlds.Library/TaleWorlds.Library/BinaryWriter.cs:123-129`）：

```csharp
public void WriteColor(Color value)
{
    WriteFloat(value.Red);
    WriteFloat(value.Green);
    WriteFloat(value.Blue);
    WriteFloat(value.Alpha);      // ← 四个通道，都写，没有 packed
}
```

「同长不同载」的对照（两个文件各一行）：

```csharp
// Vec3BasicTypeSerializer.cs:10   writer.WriteVec3(vec)   → x, y, z, w   = 16 字节
// ColorBasicTypeSerializer.cs:10  writer.WriteColor(c)    → r, g, b, a   = 16 字节
// 长度相同、载荷完全不同 ⇒ 读侧只能靠类型身份区分（VariableSaveData.cs:117 写、:68 读）
Debug.Print("这就是类型身份存在的理由", 0);
```

mod 视角的对照实验：

```csharp
// 这个家族里「申报字节数」的三个档次：
//   1 字节：bool          （BoolBasicTypeSerializer.cs:19）
//   4 字节：int / float   （IntBasicTypeSerializer.cs:19、FloatBasicTypeSerializer.cs:19）
//  16 字节：Color / Vec3  （ColorBasicTypeSerializer.cs:20、Vec3BasicTypeSerializer.cs:20）
//  64 实际：MatrixFrame 申报 48（MatrixFrameBasicTypeSerializer.cs:25）← 唯一对不上
// 所以「申报 ≠ 实际」在本家族里确实存在，但方向是安全的（多扩容，不损坏）。
Debug.Print("宽度表可以直接拿来估存档体积", 0);
```

## 依赖关系

- 契约：[IBasicTypeSerializer](../IBasicTypeSerializer)（三个成员）
- 持有者：[BasicTypeDefinition](../BasicTypeDefinition)（`:12` 赋值 `Serializer`）
- 字节原语：`WriteColor` 在 `BinaryWriter.cs:123`（内部四次 `WriteFloat`）。单分量写入 `WriteFloat` 在 `BinaryWriter.cs:138`。读侧是 `BinaryReader` 的 `ReadColor`。
- 调用方：[VariableSaveData](../VariableSaveData) 的基础类型分支（`:117` 写类型身份、`:122` 调 `Serialize`、`:145` 预算）与 [SaveContext](../SaveContext) 的 `new BinaryWriter(dataSize)`（`:510`）
- 读侧：[VariableLoadData](../VariableLoadData) 的 `BasicType` 分支（`:68`、`:71`）
- 标签：[SavedMemberType](../SavedMemberType) 的 `BasicType`（序号 6）
- 同长不同载的对照：[Vec3BasicTypeSerializer](../Vec3BasicTypeSerializer)；申报不符的例子：[MatrixFrameBasicTypeSerializer](../MatrixFrameBasicTypeSerializer)
- 同构的标量族：[IntBasicTypeSerializer](../IntBasicTypeSerializer)、[BoolBasicTypeSerializer](../BoolBasicTypeSerializer)、[FloatBasicTypeSerializer](../FloatBasicTypeSerializer)
- 空实现：[StringSerializer](../StringSerializer)（`string` 字段走字符串表，不走基础类型）
- 体系全貌：../../../architecture/save-system