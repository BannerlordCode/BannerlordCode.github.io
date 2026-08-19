---
title: "IBasicTypeSerializer"
description: "基本类型序列化器接口：存档系统为 CLR 原始类型与值结构体（int、float、Vec2/Vec3、MatrixFrame 等）提供的「快路径」契约，规定 Serialize/Deserialize/GetSizeInBytes 三方法，由 SaveableBasicTypeDefiner 登记、引擎自动路由。"
---

# IBasicTypeSerializer

**命名空间：** `TaleWorlds.SaveSystem.Definition`
**模块：** `TaleWorlds.SaveSystem`
**类型：** `public interface IBasicTypeSerializer`
**源文件：** `TaleWorlds.SaveSystem/Definition/IBasicTypeSerializer.cs`

## 概述

`IBasicTypeSerializer` 是存档系统「基本类型快路径」的总契约。与点、线、面式的完整对象图遍历（每对象分配 id、每引用按编号写入）不同，许多 CLR 原始类型与轻量值结构体（整数、浮点、`bool`、`Color`、`Vec2`/`Vec3`、`Mat3`、`MatrixFrame`、`Quaternion` 等）体量固定、无内部引用，没必要走对象图。引擎为它们准备了一组 `internal` 的 `XxxBasicTypeSerializer`，统一实现本接口，并登记到 `DefinitionContext` 的「基本类型表」中。当 `SaveManager` 保存对象图、遇到某个字段的静态类型命中这张表时，直接取对应序列化器走 `Serialize`/`Deserialize` 把固定字节写进 `IWriter`/`IReader`，绕开引用编号。理解这一族，是理解「为什么大多数字段存档又快又小」的关键。

## 心智模型

把 `IBasicTypeSerializer` 想成存档系统的「值类型直达层」：对象图遍历负责有引用关系的复杂对象，而这一层负责所有「自包含、定长」的值。每一个内置实现（`IntBasicTypeSerializer`、`FloatBasicTypeSerializer`、`Vec3BasicTypeSerializer` …）都只回答三个问题——怎么把值写出去（`Serialize`）、怎么读回来（`Deserialize`）、占几个字节（`GetSizeInBytes`）。你从不在业务代码里 `new` 任何一个实现；`SaveableBasicTypeDefiner.DefineBasicTypes()` 在引擎启动收集类型定义时已经把 20 种内置类型与各自序列化器、saveId 绑定进 `DefinitionContext`，之后 `SaveManager` 每次保存都按字段类型自动查表命中对应的序列化器。想新增一种走快路径的自定义值类型，才需要自己实现本接口并在 `SaveableTypeDefiner` 里登记。

## 何时使用 / 何时不要使用

**不要使用（直接调用）：** 给字段加 `[SaveableField]` / `[SaveableProperty]` 就够了，引擎会自动选择对应 `IBasicTypeSerializer`。不要手动 `new` 这些 `internal` 实现，也不要在模组运行时直接调 `Serialize`/`Deserialize`。

**何时实现自己的：** 当你有一个**自定义值类型/枚举**、且希望它以「定长值」而非完整对象图的方式存档时，实现 `IBasicTypeSerializer` 并在你的 `SaveableTypeDefiner` 子类的 `DefineBasicTypes()` 中调用 `AddBasicTypeDefinition(typeof(T), saveId, new MySerializer())` 登记。注意：saveId 必须唯一且避开引擎已占用的 1–21（含 `string` 的 21），否则会与内置类型冲突、破坏存档布局。

**不要做：** 不要假设字段在字节流里的顺序或对齐——顺序由 `VariableSaveData` 按成员声明遍历决定；不要手搓内置原始类型（int/float/向量等）的序列化，直接用引擎内置的；不要用本接口去序列化「含引用」的对象（那种应走对象图/`StructDefinition`/`ContainerDefinition`）。

## 依赖图

- 上层调度：[SaveManager](../SaveManager) 驱动一次保存/加载，在遍历对象图时对命中的基本类型字段调用本族序列化器。
- 类型路由：[DefinitionContext](../DefinitionContext) 持有基本类型表，`GetBasicTypeDefinition(Type)` 按 CLR 类型返回绑定的 `BasicTypeDefinition`（内含序列化器）；[BasicTypeDefinition](../BasicTypeDefinition) 把类型、saveId、序列化器三者绑定。
- 字节落地：`Serialize` 写入 `IWriter`、`Deserialize` 读取 `IReader`（底层字节流接口）；具体写出由 [ArchiveSerializer](../ArchiveSerializer) 体系包装。
- 登记入口：[SaveableTypeDefiner](../SaveableTypeDefiner) 提供 `AddBasicTypeDefinition`，[SaveableBasicTypeDefiner](../SaveableBasicTypeDefiner) 在其 `DefineBasicTypes()` 中登记全部 20 种内置类型。
- 架构总览：[存档系统架构](../../../architecture/save-system)。

## 风险

- **自定义串行化器字节数不一致（最危险）：** 你的 `Serialize` 实际写入的字节数必须与 `GetSizeInBytes()` 返回值严格相等。一旦不等，下游所有字段都会错位、整段存档悄悄损坏，且往往加载时才暴露。
- **saveId 冲突：** 自定义类型复用了引擎已占用（1–21）的 saveId，会让内置类型与你的类型互相串号，破坏既有存档。
- **忘记登记：** 实现了 `IBasicTypeSerializer` 却未在 `DefineBasicTypes()` 中 `AddBasicTypeDefinition`，`GetBasicTypeDefinition` 查不到会抛异常/断言，保存或加载直接失败。
- **值结构体字节布局必须匹配引擎：** `Vec2`/`Vec3`/`Mat3`/`MatrixFrame`/`Quaternion` 等序列化器按固定分量顺序与 `float`/`int` 宽度写出（如 `Vec3` = 3 个 `float` = 16 字节，`MatrixFrame` = 4 个 `Vec3` = 48 字节）。自定义实现若改了分量顺序或宽度，加载还原出来会是错乱的变换/坐标，且不会立刻报错。
- **浮点精度：** `float`/`double` 为二进制浮点，存精确十进制量会丢精度；比较需容忍误差。

## 成员说明

所有内置实现均显式实现以下三方法（以接口限定符 `IBasicTypeSerializer.` 调用）：

- `void Serialize(IWriter writer, object value)`：把装箱的 `value` 拆箱为对应 CLR 类型，并调用 `IWriter` 上对应的 Write 原语（如 `WriteInt` / `WriteFloat` / `WriteVec3` / `WriteColor` …）写出固定字节。
- `object Deserialize(IReader reader)`：调用 `IReader` 上对应的 Read 原语读回同种值，并以 `object` 返回，供 `VariableLoadData` 还原字段。
- `int GetSizeInBytes()`：返回该类型在存档中**固定**占用的字节数（如 `int`=4、`long`=8、`float`=4、`Vec3`=16、`Mat3`=48、`MatrixFrame`=48、`Color`=16）。

## 内置实现一览

存档系统在 `SaveableBasicTypeDefiner` 中登记了 20 种内置基本类型序列化器，全部实现 `IBasicTypeSerializer`：

| 序列化器 | 处理类型 | 字节数 | 说明 |
|---|---|---|---|
| [BoolBasicTypeSerializer](../BoolBasicTypeSerializer) | `bool` | 1 | 布尔标志位，1 字节。 |
| [ByteBasicTypeSerializer](../ByteBasicTypeSerializer) | `byte` | 1 | 无符号 8 位整数。 |
| [SbyteBasicTypeSerializer](../SbyteBasicTypeSerializer) | `sbyte` | 1 | 有符号 8 位整数。 |
| [ShortBasicTypeSerializer](../ShortBasicTypeSerializer) | `short` | 2 | 有符号 16 位整数。 |
| [UshortBasicTypeSerializer](../UshortBasicTypeSerializer) | `ushort` | 2 | 无符号 16 位整数。 |
| [IntBasicTypeSerializer](../IntBasicTypeSerializer) | `int` | 4 | 32 位整数，最常用的键/枚举载体。 |
| [UintBasicTypeSerializer](../UintBasicTypeSerializer) | `uint` | 4 | 无符号 32 位整数。 |
| [LongBasicTypeSerializer](../LongBasicTypeSerializer) | `long` | 8 | 64 位整数，常用于时间戳/大计数。 |
| [UlongBasicTypeSerializer](../UlongBasicTypeSerializer) | `ulong` | 8 | 无符号 64 位整数。 |
| [FloatBasicTypeSerializer](../FloatBasicTypeSerializer) | `float` | 4 | 32 位浮点，注意精度。 |
| [DoubleBasicTypeSerializer](../DoubleBasicTypeSerializer) | `double` | 8 | 64 位浮点。 |
| [ColorBasicTypeSerializer](../ColorBasicTypeSerializer) | `Color` | 16 | 颜色（4 个 `float` 分量：RGBA）。 |
| [Mat2BasicTypeSerializer](../Mat2BasicTypeSerializer) | `Mat2` | 16 | 2×2 矩阵（两个 `Vec2`，各 2 个 `float`）。 |
| [Mat3BasicTypeSerializer](../Mat3BasicTypeSerializer) | `Mat3` | 48 | 3×3 矩阵（三个 `Vec3`）。 |
| [MatrixFrameBasicTypeSerializer](../MatrixFrameBasicTypeSerializer) | `MatrixFrame` | 48 | 变换帧（origin `Vec3` + 旋转 `Mat3`）。 |
| [QuaternionBasicTypeSerializer](../QuaternionBasicTypeSerializer) | `Quaternion` | 16 | 旋转四元数（4 个 `float`）。 |
| [Vec2BasicTypeSerializer](../Vec2BasicTypeSerializer) | `Vec2` | 8 | 二维向量（2 个 `float`）。 |
| [Vec2iBasicTypeSerializer](../Vec2iBasicTypeSerializer) | `Vec2i` | 8 | 整数二维向量（2 个 `int`，以 `float` 写出分量）。 |
| [Vec3BasicTypeSerializer](../Vec3BasicTypeSerializer) | `Vec3` | 16 | 三维向量（3 个 `float`）。 |
| [Vec3iBasicTypeSerializer](../Vec3iBasicTypeSerializer) | `Vec3i` | 12 | 整数三维向量（`WriteVec3Int`/`ReadVec3Int`）。 |

> 风险最高的是自定义登记与 `Vec`/`Mat`/`MatrixFrame` 的字节布局——前者见上文「风险」，后者请严格对照引擎的分量顺序与宽度实现，否则加载到的坐标/变换会静默错乱。

## 示例

模组侧真正调用的是 `SaveManager` 的 `Save`；引擎内部按字段类型从 `DefinitionContext` 取出对应 `BasicTypeDefinition`，再调用其 `IBasicTypeSerializer.Serialize` 落盘。你无需（也不能）手动 `new` 这些实现：

```csharp
// SaveManager 保存时，对命中基本类型表的字段走快路径：
BasicTypeDefinition def = _definitionContext.GetBasicTypeDefinition(fieldType);
def.Serializer.Serialize(writer, fieldValue);   // 内部调用 writer.WriteInt / WriteVec3 ...
```

若你自己的值类型要加入这条快路径，则在 `SaveableTypeDefiner` 子类中登记（saveId 避开 1–21）：

```csharp
protected internal override void DefineBasicTypes()
{
    base.AddBasicTypeDefinition(typeof(MyCustomId), 100, new MyCustomIdSerializer());
}
```

## 参见

- ↑ 父级：[存档系统 API 索引](../)
- ↔ 相关：[BasicTypeDefinition](../BasicTypeDefinition) · [SaveableTypeDefiner](../SaveableTypeDefiner) · [SaveableBasicTypeDefiner](../SaveableBasicTypeDefiner) · [DefinitionContext](../DefinitionContext) · [SaveManager](../SaveManager) · [ArchiveSerializer](../ArchiveSerializer)
