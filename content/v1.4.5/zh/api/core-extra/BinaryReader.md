---
title: "BinaryReader"
description: "TaleWorlds.Library 的低位二进制读取器：在 byte[] 缓冲上按游标推进，用 ReadInt / ReadFloat / ReadString / ReadVec3 等类型化方法把存档与网络字节流还原为强类型值。"
---
# BinaryReader

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public class BinaryReader : IReader`
**Base:** `TaleWorlds.Library.IReader`
**Source:** `TaleWorlds.Library/TaleWorlds.Library/BinaryReader.cs`

## 一句话职责

以**逐游标（cursor）推进**的方式，从一份 `byte[]` 缓冲里把原始字节按强类型方法（整数、浮点、字符串、向量、颜色等）读回成游戏对象所需的字段值——它是存档系统与网络同步在底层使用的“反序列化原语”。

## 心智模型

`BinaryReader` 不是 `System.IO.BinaryReader`，它是一个**内存型、无流（stream-less）**的字节阅读器：构造时把整份 `byte[]` 交给它，内部维护一个 `_cursor` 位置，`ReadXxx()` 方法每次从 `_cursor` 取若干字节、用 `BitConverter` 解释成对应类型，再把游标向后推进。它和 [BinaryWriter](../BinaryWriter/) 是一对镜像——写入端用什么顺序、什么方法写，读取端必须用**完全相同顺序、完全同名的方法**读回来，否则游标错位会立刻读到垃圾值或越界。

这正是 `SaveManager` 与 `SaveableTypeDefiner` 那条 `[SaveableField]` 托管管线的“地基”：引擎在保存时把对象图序列化为字节，加载时用成对的读取器还原；绝大多数 mod 永远不需要直接碰 `BinaryReader`，因为 `[SaveableField]` / `[SaveableProperty]` 属性 + 类型定义器已经替你写好了这对读写契约。只有当你要实现**自定义二进制格式**（例如自己的网络封包、外部文件、加密存档段）或为一个**自定义结构（struct）实现底层序列化**时，才会亲手调用这里的方法。

## 何时使用 / 何时不要使用

**使用：**
- 为一个进入存档/网络的结构体手写 `ISerialization` 风格的读写，逐字段调用 `ReadInt` / `ReadFloat` / `ReadVec3` 等。
- 解析一份你自己定义的 `byte[]` 协议（mod 私有格式、第三方数据文件）。

**不要使用：**
- 只想让某个 `CampaignBehaviorBase` 的字段能被保存——那应该用 `IDataStore`（行为私有状态入口），或给类加 `[SaveableField]` + [SaveableTypeDefiner](../../save-system/SaveableTypeDefiner/)，让受管的 `[SaveableField]` 管线处理。
- 用 `ReadSerializableObject()`——它在 1.4.5 源码里直接 `throw new NotImplementedException()`，不是给你调用的；`ISerializableObject` 由保存系统自己的序列化器负责。
- 把它当 `System.IO.BinaryReader` 用——两者 API 形状相似但毫无关系，混用会踩坑（见风险）。

正确替代方案：普通可保存数据走 [SaveManager](../../save-system/SaveManager/) 与 [SaveableTypeDefiner](../../save-system/SaveableTypeDefiner/) 的托管管线；只有真正的自定义字节协议才落到本类。

## 状态与构造

| 成员 | 说明 |
| --- | --- |
| `byte[] Data` | 被读取的整份缓冲（只读，构造时传入）。实际有效内容在 `[0, _cursor)` 之前已被消费，剩余未读部分由 `UnreadByteCount` 描述。 |
| `int UnreadByteCount` | `Data.Length - _cursor`，当前还剩多少字节没读。读之前先检查它，可避免越界。 |
| `BinaryReader(byte[] data)` | 唯一构造器，直接持有传入的 `byte[]`，游标归零。 |

## 成员说明（按类型分组）

写入/读取必须成对。下面每组“读”方法都对应 [BinaryWriter](../BinaryWriter/) 里同名“写”方法，顺序必须一致。

### 整数（小端 / little-endian）
- `int ReadInt()`：读 4 字节 → `int`。
- `uint ReadUInt()`：读 4 字节 → `uint`。
- `short ReadShort()`：读 2 字节 → `short`。
- `ushort ReadUShort()`：读 2 字节 → `ushort`。
- `long ReadLong()`：读 8 字节 → `long`。
- `ulong ReadULong()`：读 8 字节 → `ulong`。
- `sbyte ReadSByte()`：读 1 字节 → 有符号 `sbyte`。
- `int Read3ByteInt()`：读 **3 字节** 还原成 `int`（用于小于 2^24 的计数；读到 `0xFFFFFF` 哨兵时返回 `-1`）。必须与 `Write3ByteInt` 配对。

> 注意：`Read3ByteInt` 里有个特殊哨兵：`0xFFFFFF` 会被解释成 `-1`。这是保存系统给“计数/长度”字段用的紧凑编码，普通大整数不要用它，否则正数会被误判为 `-1`。

### 浮点与布尔
- `float ReadFloat()`：读 4 字节 → `float`。
- `double ReadDouble()`：读 8 字节 → `double`。
- `bool ReadBool()`：读 1 字节，`1` → `true`，否则 `false`。

### 字符串
- `string ReadString()`：先读一个 `int` 长度，再按 `Encoding.UTF8` 读回该长度的字节。若长度为负数返回 `null`（与 `WriteString` 的“空/空串写 0”约定对应）。

### 字节块
- `byte ReadByte()`：读 1 字节。
- `byte[] ReadBytes(int length)`：读 `length` 字节的拷贝。
- `void ReadFloats(float[] output, int count)`：批量读 `count` 个 `float` 进 `output`，用 `Buffer.BlockCopy` 一次搬 `count*4` 字节。
- `void ReadShorts(short[] output, int count)`：批量读 `count` 个 `short`。

### 游戏常用值类型
- `Vec2 ReadVec2()`：读 2 个 `float` → `Vec2(x, y)`。
- `Vec3 ReadVec3()`：读 4 个 `float` → `Vec3(x, y, z, w)`（注意 `w` 也会读，对应第四分量）。
- `Vec3i ReadVec3Int()`：读 3 个 `int` → `Vec3i(X, Y, Z)`。
- `Color ReadColor()`：读 4 个 `float`（red, green, blue, alpha）→ `Color`。

### 未实现 / 不应调用
- `ISerializableObject ReadSerializableObject()`：**直接抛 `NotImplementedException`。** 不要调用；`ISerializableObject` 由保存系统内部序列化器处理。

## 最小真实示例

下面用真实 API 演示“自定义结构体的字节协议如何被读回”。写端按 `int → float → string → Vec3` 顺序产出字节，读端必须严格按同样顺序还原，且长度检查可防止越界。

```csharp
// 配对写端：顺序固定为 id(int) → weight(float) → name(string) → position(Vec3)
BinaryWriter writer = new BinaryWriter();
writer.WriteInt(7);
writer.WriteFloat(3.5f);
writer.WriteString("Banner");
writer.WriteVec3(new Vec3(1.0f, 2.0f, 3.0f, 0.0f));
byte[] savedBytes = writer.GetFinalData();

// 读端：顺序必须与写端完全一致
BinaryReader reader = new BinaryReader(savedBytes);

// 读之前可用 UnreadByteCount 做最低限度防御
if (reader.UnreadByteCount < 8)
{
    // 连一个 int(4) 加一个 float(4) 都不够，协议损坏，直接退出
    return;
}

int id = reader.ReadInt();
float weight = reader.ReadFloat();
string name = reader.ReadString();
Vec3 position = reader.ReadVec3();

// 此时 reader.UnreadByteCount 应为 0；若不为 0，说明写/读方法或顺序不匹配
```

读端的 `ReadInt / ReadFloat / ReadString / ReadVec3` 与写端的 `WriteInt / WriteFloat / WriteString / WriteVec3` **一一对应、顺序一致**——这是使用本类唯一不可违背的铁律。

## 风险

- **读写顺序/方法不匹配即损坏。** `ReadInt` 必须配对 `WriteInt`，`ReadVec3` 必须配对 `WriteVec3`，且出现顺序完全相同。错一个就会整条游标错位：读出垃圾值、`UnreadByteCount` 算错，严重时 `Data[_cursor]` 越界抛 `IndexOutOfRangeException`。这是本类最常见、也最隐蔽的 bug。
- **读越界（past end of stream）。** 缓冲是固定 `byte[]`，游标不会回绕也不会报“EOF”。若协议长度对不上，继续 `ReadXxx` 会直接越界异常。读前用 `UnreadByteCount` 核对该类型所需字节数，是唯一的廉价防线。
- **`Read3ByteInt` 的哨兵陷阱。** 读到 `0xFFFFFF` 会被当成 `-1`；不要用这个 3 字节方法保存可能恰好为 `0xFFFFFF` 的大整数，否则还原成负数。
- **大小端 / 版本漂移。** 整数类读取走 `BitConverter` 的小端解释（在 Windows x64 上是 LE），但跨平台/跨版本的自制协议若一端改了字段类型或字节序，旧档就会静默错乱。自定义格式务必自带版本号/魔数，并在协议头固定端序。
- **`ReadString` 与 `WriteString` 的 `null` 约定。** 写端空串/空引用写 `0` 长度，读端长度 `< 0` 返回 `null`；若你自制协议用负数长度表达别的含义，会与此约定冲突。
- **`ReadSerializableObject` 不可用。** 它直接抛 `NotImplementedException`，别在自定义序列化里指望它。
- **别和 `System.IO.BinaryReader` 混为一谈。** 这是 `TaleWorlds.Library` 的内存读取器，没有 `Stream`、没有 `BaseStream`、没有 `Dispose`。若你把产出的 `byte[]` 又塞进 `System.IO` 的读取器/流，那是另一套 API，端序与 `Dispose` 责任都不同。

## 依赖关系

- 镜像写入端：[BinaryWriter](../BinaryWriter/) 是本类的成对写入器，方法名一一对应。
- 受管保存管线：[SaveManager](../../save-system/SaveManager/) 在加载时通过保存系统内部序列化器还原对象图，普通 mod 数据走这条路径。
- 类型注册：[SaveableTypeDefiner](../../save-system/SaveableTypeDefiner/) 决定哪些类/结构/容器可进入 `[SaveableField]` 管线，无需手写 `BinaryReader`。
- 常见被序列化值类型：[Vec3](../Vec3/)（本类 `ReadVec3` 直接产出）、[MBList](../MBList/)（容器在保存系统中另有专门路径，但这里常作为字节协议的一部分被读写）。

## 导航

- ↑ 父级：[core-extra API 索引](../)
- ↔ 同级：[BinaryWriter](../BinaryWriter/)
- 相关：[SaveManager](../../save-system/SaveManager/) · [SaveableTypeDefiner](../../save-system/SaveableTypeDefiner/) · [Vec3](../Vec3/) · [MBList](../MBList/)
