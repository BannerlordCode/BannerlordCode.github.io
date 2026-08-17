---
title: "BinaryWriter"
description: "TaleWorlds.Library 的低位二进制写入器：把 int / float / string / Vec3 等强类型值按游标追加进可扩容的 byte[] 缓冲，供自定义二进制格式与存档底层结构序列化使用。"
---
# BinaryWriter

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public class BinaryWriter : IWriter`
**Base:** `TaleWorlds.Library.IWriter`
**Source:** `TaleWorlds.Library/TaleWorlds.Library/BinaryWriter.cs`

## 一句话职责

以**逐游标（cursor）追加**的方式，把游戏对象的强类型字段（`int`、`float`、`string`、`Vec3`、`Color`……）写成一份可扩容的 `byte[]` 缓冲——它是存档系统与网络同步在底层使用的“序列化原语”，产出字节后由对端用 [BinaryReader](../BinaryReader/) 按同序读回。

## 心智模型

`BinaryWriter` 不是 `System.IO.BinaryWriter`，它是一个**内存型、无流（stream-less）**的字节构造器：内部持有一块会按需翻倍扩容的 `byte[]`（`_data`）和一个有效长度游标 `_availableIndex`。每次 `WriteXxx(value)` 都先 `EnsureLength(n)` 保证容量，再把字节按**小端（little-endian）**写进缓冲、推进游标。它和 [BinaryReader](../BinaryReader/) 是一对镜像——你这边用什么顺序、什么方法写，对端还原时就必须用**完全相同顺序、完全同名的方法**读，否则游标错位会立刻读成垃圾值或越界。

这正是 `SaveManager` 与 `SaveableTypeDefiner` 那条 `[SaveableField]` 托管管线的“地基”：引擎在保存时把对象图序列化为字节，加载时用成对的读取器还原；绝大多数 mod 永远不需要直接碰 `BinaryWriter`，因为 `[SaveableField]` / `[SaveableProperty]` 属性 + 类型定义器已经替你写好了这对读写契约。只有当你要实现**自定义二进制格式**（例如自己的网络封包、外部文件、加密存档段）或为一个**自定义结构（struct）实现底层序列化**时，才会亲手调用这里的方法。

## 何时使用 / 何时不要使用

**使用：**
- 为一个进入存档/网络的结构体手写 `ISerialization` 风格的写方法，逐字段调用 `WriteInt` / `WriteFloat` / `WriteVec3` 等。
- 构造一份你自己定义的 `byte[]` 协议（mod 私有格式、第三方数据文件），写完用 `GetFinalData()` 取走有效字节。

**不要使用：**
- 只想让某个 `CampaignBehaviorBase` 的字段能被保存——那应该用 `IDataStore`（行为私有状态入口），或给类加 `[SaveableField]` + [SaveableTypeDefiner](../../save-system/SaveableTypeDefiner/)，让受管的 `[SaveableField]` 管线处理。
- 用 `WriteSerializableObject(...)`——它在 1.4.5 源码里直接 `throw new NotImplementedException()`，不是给你调用的；`ISerializableObject` 由保存系统自己的序列化器负责。
- 把它当 `System.IO.BinaryWriter` 用——两者 API 形状相似但毫无关系，混用会踩坑（见风险）。

正确替代方案：普通可保存数据走 [SaveManager](../../save-system/SaveManager/) 与 [SaveableTypeDefiner](../../save-system/SaveableTypeDefiner/) 的托管管线；只有真正的自定义字节协议才落到本类。

## 状态、构造与产出

| 成员 | 说明 |
| --- | --- |
| `byte[] Data` | 内部整块缓冲。**注意它不是“已写好的最终数据”**——它的大小是容量（初始 4096，按需翻倍），可能比有效字节更长。有效字节数看 `Length`，要拿干净数据用 `GetFinalData()`。 |
| `int Length` | `_availableIndex`，当前已写入的有效字节数。这才是你应该信任的长度。 |
| `BinaryWriter()` | 默认构造，初始容量 4096 字节。 |
| `BinaryWriter(int capacity)` | 指定初始容量，避免初期频繁扩容。 |
| `void Clear()` | 把缓冲清零并把游标归零，可复用同一实例。 |
| `void EnsureLength(int added)` | 内部用：若剩余容量不足 `added`，把缓冲翻倍（或扩到刚好够）后再写。一般无需手动调用，`WriteXxx` 已自动调用。 |
| `byte[] GetFinalData()` | 返回一份 `Length` 长度、**已裁剪**的字节拷贝，即真正要落盘/发送的数据。 |

> 关键陷阱：`Data.Length` 是容量（可能远大于实际内容），`Length` 才是已写字节数。永远用 `Length` 判断大小，用 `GetFinalData()` 取最终字节，不要直接把 `Data` 发出去。

## 成员说明（按类型分组）

读/写必须成对。下面每个“写”方法都对应 [BinaryReader](../BinaryReader/) 里同名“读”方法，顺序必须一致。

### 整数（小端 / little-endian）
- `void WriteInt(int value)`：写 4 字节（手动按 `value >> 8/16/24` 逐字节，固定小端）。
- `void WriteUInt(uint value)`：写 4 字节。
- `void WriteShort(short value)`：写 2 字节。
- `void WriteUShort(ushort value)`：写 2 字节。
- `void WriteLong(long value)`：写 8 字节。
- `void WriteULong(ulong value)`：写 8 字节。
- `void WriteSByte(sbyte value)`：写 1 字节。
- `void Write3ByteInt(int value)`：写 **3 字节**（`value` 及其 `>>8`、`>>16`）。用于小于 2^24 的计数；必须与 `Read3ByteInt` 配对。

> 整数写入是**手写的小端**（不受机器端序影响），而浮点/双精度写入走 `BitConverter.GetBytes`（端序随平台）。在 Windows x64 上两者都是 LE，因此一致；但若你的协议要跨非 x86 平台，需意识到这个差异并自行统一端序。

### 浮点与布尔
- `void WriteFloat(float value)`：写 4 字节（`BitConverter.GetBytes` + `Buffer.BlockCopy`）。
- `void WriteDouble(double value)`：写 8 字节。
- `void WriteBool(bool value)`：写 1 字节，`true` → `1`，`false` → `0`。

### 字符串
- `void WriteString(string value)`：**先写 `int` 长度，再写 UTF-8 字节**。空引用或空串时只写长度 `0`（不写字节）。读端 `ReadString` 按“先长度后内容”严格对应。

### 字节块
- `void WriteByte(byte value)`：写 1 字节。
- `void WriteBytes(byte[] bytes)`：把整段字节块追加进去。
- `void WriteFloats(float[] value, int count)`：批量写 `count` 个 `float`，一次 `Buffer.BlockCopy` 搬 `count*4` 字节。
- `void WriteShorts(short[] value, int count)`：批量写 `count` 个 `short`。

### 游戏常用值类型
- `void WriteVec2(Vec2 vec2)`：写 2 个 `float`（`x`, `y`）。
- `void WriteVec3(Vec3 vec3)`：写 4 个 `float`（`x`, `y`, `z`, `w`）。
- `void WriteVec3Int(Vec3i vec3)`：写 3 个 `int`（`X`, `Y`, `Z`）。
- `void WriteColor(Color value)`：写 4 个 `float`（Red, Green, Blue, Alpha）。

### 拼接与产出
- `void AppendData(BinaryWriter writer)`：把另一个 `BinaryWriter` 的有效字节直接拼到本实例尾部（用它的 `_availableIndex` 作为长度）。
- `byte[] GetFinalData()`：返回裁剪到 `Length` 的字节拷贝。

### 未实现 / 不应调用
- `void WriteSerializableObject(ISerializableObject serializableObject)`：**直接抛 `NotImplementedException`。** 不要调用；`ISerializableObject` 由保存系统内部序列化器处理。

## 最小真实示例

下面用真实 API 演示“自定义结构体的字节协议如何被写出”。字段顺序为 `int → float → string → Vec3`，对端（[BinaryReader](../BinaryReader/)）必须严格按同序读回。

```csharp
// 自定义字段：id(int) / weight(float) / name(string) / position(Vec3)
int id = 7;
float weight = 3.5f;
string name = "Banner";
Vec3 position = new Vec3(1.0f, 2.0f, 3.0f, 0.0f);

BinaryWriter writer = new BinaryWriter();
writer.WriteInt(id);
writer.WriteFloat(weight);
writer.WriteString(name);
writer.WriteVec3(position);

// 取走真正写入的字节（不要直接用 writer.Data，那包含未用的容量余量）
byte[] savedBytes = writer.GetFinalData();
int validCount = writer.Length; // 等于 savedBytes.Length
```

写端的 `WriteInt / WriteFloat / WriteString / WriteVec3` 与读端的 `ReadInt / ReadFloat / ReadString / ReadVec3` **一一对应、顺序一致**——这是使用本类唯一不可违背的铁律。把 `savedBytes` 交给对端的 `new BinaryReader(savedBytes)` 即可完整还原（见 [BinaryReader](../BinaryReader/) 的配对示例）。

## 风险

- **读写顺序/方法不匹配即损坏。** `WriteInt` 必须配对 `ReadInt`，`WriteVec3` 必须配对 `ReadVec3`，且出现顺序完全相同。错一个就会整条游标错位：对端读出垃圾值、`UnreadByteCount` 算错，严重时越界抛 `IndexOutOfRangeException`。这是本类最常见、也最隐蔽的 bug。
- **误用 `Data` 而非 `GetFinalData()`。** `Data` 返回的是整块内部缓冲，长度 = 容量（常远大于实际内容）。若把 `Data` 直接落盘/发送，会带上一堆 `0` 填充，对端按你的“长度字段”解析时虽能用，但体积膨胀且易与 `Length` 概念混淆。取干净数据只用 `GetFinalData()`，判断大小只用 `Length`。
- **`WriteString` 必须先长度后内容。** 协议里若你自己另搞一套“以 `\0` 结尾”或“负长度表特殊含义”，会与 `ReadString` 的约定（先 `int` 长度、负数返回 `null`）冲突，导致读端错位。
- **`Write3ByteInt` 的 3 字节边界。** 它只写 3 字节、最大约 2^24；传入更大值会被静默截断高位。仅用于保存系统式的紧凑计数，不要塞大整数。
- **大小端 / 版本漂移。** 整数写入是手写小端（与平台无关），浮点写入走 `BitConverter`（随平台）。跨平台/跨版本的自制协议务必固定端序并自带版本号/魔数，否则旧档静默错乱。
- **`WriteSerializableObject` 不可用。** 它直接抛 `NotImplementedException`，别在自定义序列化里指望它。
- **`Clear()` 是重置而非释放。** 它只是把缓冲清零、游标归零以便复用，不会释放内存，也没有 `Stream` 需要 `Dispose`。若你把 `GetFinalData()` 产出的 `byte[]` 又塞进 `System.IO` 的流（File/Network），`Dispose` 责任在**那条外层流**身上，与本类无关——且 `TaleWorlds.Library.BinaryWriter` 和 `System.IO.BinaryWriter` 是两套无关 API，不可互换。

## 依赖关系

- 镜像读取端：[BinaryReader](../BinaryReader/) 是本类的成对读取器，方法名一一对应、顺序必须一致。
- 受管保存管线：[SaveManager](../../save-system/SaveManager/) 在保存时通过保存系统内部序列化器产出字节，普通 mod 数据走这条路径。
- 类型注册：[SaveableTypeDefiner](../../save-system/SaveableTypeDefiner/) 决定哪些类/结构/容器可进入 `[SaveableField]` 管线，无需手写 `BinaryWriter`。
- 常见被序列化值类型：[Vec3](../Vec3/)（本类 `WriteVec3` 直接消费）、[MBList](../MBList/)（容器在保存系统中另有专门路径，但这里常作为字节协议的一部分被读写）。

## 导航

- ↑ 父级：[core-extra API 索引](../)
- ↔ 同级：[BinaryReader](../BinaryReader/)
- 相关：[SaveManager](../../save-system/SaveManager/) · [SaveableTypeDefiner](../../save-system/SaveableTypeDefiner/) · [Vec3](../Vec3/) · [MBList](../MBList/)
