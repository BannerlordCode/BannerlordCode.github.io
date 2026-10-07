---
title: "GameData"
description: "一个存档的四段字节容器：Header / Strings / ObjectData / ContainerData，两两配对的读写方法里藏着一处顺序不一致的坑。"
---

# GameData

**Namespace:** `TaleWorlds.SaveSystem`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `[Serializable] public class GameData`
**Base:** 无
**File:** `TaleWorlds.SaveSystem/GameData.cs`

## 概述

[SaveContext](../SaveContext) 收集完整个对象图之后产出四段字节——元信息 `Header`、字符串表 `Strings`、每个对象一段的 `ObjectData`、每个容器一段的 `ContainerData`——把它们装进本类（`GameData.cs:37-43`），再由驱动决定怎么落盘。读档时 [LoadContext](../LoadContext) 拿到同一个类型的实例，从这四段里逐段消费。**本类同时提供两套互相独立的序列化方法**：`GetData()` / `CreateFrom(byte[])` 一套、`Write(BinaryWriter, GameData)` / `Read(BinaryReader)` 另一套。推论有四条，其中第 4 条是本类最大的坑。

1. **`ObjectData` / `ContainerData` 是「数组的数组」。** `byte[][]`（`:15`、`:17`），外层下标就是对象编号 / 容器编号——这正是存档里那些 4 字节引用的指向。`[LoadContext](../LoadContext) 的 `loadData.GameData.ObjectData[i]`（`LoadContext.cs:43`）里的 `i` 就是 `ObjectHeaderLoadData.Id`。
2. **属性可读但只能在程序集内替换。** 四个属性的 setter 都是 `internal`（`:11`、`:13`、`:15`、`:17`）——外部代码能读能算 `TotalSize`，但**换不了内容**。要造一个只能用公开构造器。
3. **无参构造器会把四个属性全留 null。** `:45-47` 是空的。于是 `TotalSize`（`:23`）与 `Inspect()`（`:51`）在这种实例上直接空引用。这个构造器存在的理由大概是给 .NET 序列化器用（类上带 `[Serializable]`，`:8`）。
4. **⚠ 两套读写方法的段顺序不一致，混用就坏。** `GetData()`（`:82`）与 `CreateFrom(byte[])`（`:56`）用的是 **Header → Strings → ObjectData → ContainerData**；而 `Write(BinaryWriter, GameData)`（`:106`）与 `Read(BinaryReader)`（`:137`）用的是 **Header → ObjectData → ContainerData → Strings**。**Strings 的位置不一样。** 四段都是「长度前缀 + 内容」，所以把 `Write` 产出的字节喂给 `CreateFrom`（或反过来）不会立刻报错，而是把某一段的长度当成另一段的去读——**结果是错位或异常，不是干净的失败**。

## 心智模型

把它想成**一个带四个隔层的集装箱**：Header 是清单、Strings 是对照表、ObjectData 是逐件装箱的货、ContainerData 是逐箱装箱的散货。推论有五条：

1. **编号就是数组下标。** `ObjectData[i]` 里的 `i` 就是存档里所有 `Object` 标签成员存的那个整数；`ContainerData[i]` 同理（`Container` 标签）（`GameData.cs:15`、`:17`）。**字符串是例外**：它的成员里存的是字符串表内下标，而那张表由 [SaveContext](../SaveContext) 在收集阶段建（`VariableSaveData.cs:107` 处调 `Context.GetStringId`）。
2. **两套方法的顺序不一致，所以别交叉使用。** `GetData`/`CreateFrom` 是给「整块 byte[]」用的（驱动落盘、内存传递），`Write`/`Read` 是给「已有 `System.IO.BinaryWriter`/`Reader`」用的（写进已有流）。**各自成对，不要配错。**
3. **类里同时用了三种 writer/reader 类型。** `CreateFrom` 用 `TaleWorlds.Library.BinaryReader`（`:58`）、`GetData` 用 `TaleWorlds.Library.BinaryWriter`（`:84`）、而 `Write`/`Read` 用的是 **`System.IO.BinaryWriter`/`BinaryReader`**（`:106`、`:137` 形参）。前两者是引擎的池化类型，后者是 BCL 类型。**这是改字节布局时最容易找错文件的地方。**
4. **`Inspect()` 的标签会误导人。** `:51` 把 `ObjectData.Length`（**条目数**）打在 `Object Size:` 这个标签下，而 `Write` 里的同类日志用 `.Sum(x => x.Length)` 打的是**真实字节总量**（`:114`、`:123`）。**两处同名标签含义不同**，看日志时别拿 `Inspect` 的数字当体积。
5. **`Write` 会打印字节序并且不检查。** `:109` 打 `[GameData.Write] WRITING LITTLE ENDIAN: {BitConverter.IsLittleEndian}`——**只是打印，没有断言**。所以这个存档格式隐含依赖小端平台，跨大端平台读写不会得到提示。

## 如何使用

### 怎么拿到它

- **保存侧**：[SaveContext](../SaveContext) 的 `Save` 最后一句 `SaveData = new GameData(header, strings, objectData, containerData)`（`SaveContext.cs:346`），从 `SaveData` 属性取。
- **读档侧**：驱动实现 `ISaveDriver.Load` 时用 `GameData.CreateFrom(byte[])` 或 `Read(BinaryReader)` 造，装进 [LoadData](../LoadData)。
- **别自己 `new` 空实例**——`:45` 的无参构造器产出的是四个 null。

### 最小可运行片段

```csharp
using TaleWorlds.SaveSystem;

// 造一个完整实例（四个实参都会被存下）
GameData gd = new GameData(headerBytes, stringsBytes, objectChunks, containerChunks);
Debug.Print("Header " + gd.Header.Length + " / Strings " + gd.Strings.Length, 0);
Debug.Print("对象段 " + gd.ObjectData.Length + " 个，容器段 " + gd.ContainerData.Length + " 个", 0);
Debug.Print("字节总量 " + gd.TotalSize, 0);

// 成对使用：GetData ↔ CreateFrom（顺序 = Header→Strings→Objects→Containers）
byte[] blob = gd.GetData();
GameData back = GameData.CreateFrom(blob);

// 成对使用：Write ↔ Read（顺序 = Header→Objects→Containers→Strings）
// using (var fs = File.Open("x.bin", FileMode.Create))
// { GameData.Write(fs, gd); }
// GameData back2 = GameData.Read(new BinaryReader(fs));

Debug.Print("gd.IsEqualTo(back) = " + gd.IsEqualTo(back), 0);
```

### 用它最容易踩的一条

**不要拿 `Write` 的字节喂 `CreateFrom`，也不要拿 `GetData` 的字节喂 `Read`。** 两套的 `Strings` 段位置不同（`GetData` 是第二段，`Write` 是最后一段），而每段都是「4 字节长度 + 内容」。混用的结果是：`CreateFrom` 把 `ObjectData` 的条目数当成 `Strings` 的字节长度去 `ReadBytes`，**要么越界抛异常，要么读出一段毫无意义的字节**，而 `Header` 与 `Strings` 两个属性此时已经带着垃圾值了。排查这类「存档字节能读出来但内容全是乱的」时，**第一件事是确认用的是哪一对方法**。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `Header` | `public byte[] Header { get; internal set; }` | `:11`。元信息段：[LoadContext](../LoadContext) 从它的 `SaveEntryExtension.Config` 条目里读出对象数/字符串数/容器数三个 int（`LoadContext.cs:63-69`），各对象/容器的 header 数据也在这一段。**setter 是 internal，外部只能读。** |
| `Strings` | `public byte[] Strings { get; internal set; }` | `:13`。字符串表。成员里存的是表内下标；[LoadContext](../LoadContext) 的静态方法 `LoadString`（`LoadContext.cs:256`）按 `FolderId(-1, SaveFolderExtension.Strings)` → `EntryId(id, SaveEntryExtension.Txt)` 取。 |
| `ObjectData` | `public byte[][] ObjectData { get; internal set; }` | `:15`。**外层下标 = 对象编号**，也就是所有 `Object` 标签成员存的那个整数指向这里（`LoadContext.cs:43` 的 `ObjectData[i]`）。每段独立反序列化成 folder/entry 树。 |
| `ContainerData` | `public byte[][] ContainerData { get; internal set; }` | `:17`。**外层下标 = 容器编号**，`Container` 标签成员指向这里。由 [ContainerLoadData](../ContainerLoadData) 消费。 |
| `TotalSize` | `public int TotalSize { get; }` | `:19-35`。把四段长度全加起来（两个循环 `:25-32`）。**空无参实例上直接空引用**（`:23` 先读 `Header.Length`）。 |
| 构造器 A | `public GameData(byte[] header, byte[] strings, byte[][] objectData, byte[][] containerData)` | `:37-43`。四个形参原样赋值，**不校验任何一段非 null**。这是唯一能造出可用实例的公开构造器。 |
| 构造器 B | `public GameData()` | `:45-47`。**空**。四个属性全 null。大概是留给 .NET 序列化器用的（配合类上的 `[Serializable]`，`:8`）。**用它 new 出来的对象任何成员访问都会炸。** |
| `Inspect` | `public void Inspect()` | `:49-54`。打印四段长度与总 MB。**注意 `:51` 把 `ObjectData.Length`（条目数）标成 `Object Size`，而 `Write` 里同名标签打的是字节总量**（`:114`）——两处含义不同。 |
| `CreateFrom` | `public static GameData CreateFrom(byte[] readBytes)` | `:56-80`。**顺序：Header → Strings → ObjectData → ContainerData**。用 `TaleWorlds.Library.BinaryReader`（`:58`），逐段读长度再 `ReadBytes`（`:60`、`:62`、`:67-68`、`:75-76`）。**与 `Write` 的顺序不匹配，见「最容易踩的一条」。** |
| `GetData` | `public byte[] GetData()` | `:82-104`。**与 `CreateFrom` 配对**。用 `TaleWorlds.Library.BinaryWriter`（`:84`），逐段写长度再写内容。 |
| `Write` | `public static void Write(System.IO.BinaryWriter writer, GameData gameData)` | `:106-135`。**顺序：Header → ObjectData → ContainerData → Strings**（`Strings` 在最后两行 `:131-133`）。**用的是 BCL 的 `System.IO.BinaryWriter`**，不是引擎那个。开头的 `Debug.Print` 会打字节序（`:109`）但**不做断言**。 |
| `Read` | `public static GameData Read(System.IO.BinaryReader reader)` | `:137-165`。与 `Write` 配对，顺序一致（`Strings` 最后 `:161-163`）。用 BCL `BinaryReader`。`ReadInt32()` 与 `ReadBytes` 都不校验返回长度。 |
| `IsEqualTo` | `public bool IsEqualTo(GameData gameData)` | `:167-174`。四段逐段比较，全等才 true（`:173` 的 `&&` 串联）。**用于自检与回归对比，不参与正常读档。** |
| `CompareByteArrays` | `private bool CompareByteArrays(byte[] arr1, byte[] arr2, string name)`（`:176`）/ `private bool CompareByteArrays(byte[][] arr1, byte[][] arr2, string name)`（`:194`） | 两个重载：字节数组逐字节比（`:183-190`），字节数组数组先比外层长度（`:196-199`）再逐项递归（`:201-207`）。**任一不符都 `Debug.FailedAssert` 并返回 false**——注意是返回 false 而不是抛异常，所以 `IsEqualTo` 永远不抛。 |

## 真实示例

两套方法的段顺序（`TaleWorlds.SaveSystem/GameData.cs`）：

```csharp
// GetData（:82）—— 第二段是 Strings
binaryWriter.WriteInt(Header.Length);  binaryWriter.WriteBytes(Header);        // :85-86
binaryWriter.WriteInt(Strings.Length); binaryWriter.WriteBytes(Strings);      // :87-88
binaryWriter.WriteInt(ObjectData.Length); /* 逐个长度+内容 */                   // :89-95
binaryWriter.WriteInt(ContainerData.Length); /* 逐个长度+内容 */                // :96-102

// Write（:106）—— 最后一段才是 Strings
writer.Write(gameData.Header.Length);    writer.Write(gameData.Header);       // :111-112
writer.Write(gameData.ObjectData.Length); /* 逐个长度+内容 */                   // :115-121
writer.Write(gameData.ContainerData.Length); /* 逐个长度+内容 */                // :124-130
writer.Write(gameData.Strings.Length);   writer.Write(gameData.Strings);      // :132-133  ← 位置不同

// Read（:137）与 Write 同序：Header(:140-142) → Objects(:143-151) → Containers(:152-160) → Strings(:161-163)
// CreateFrom（:56）与 GetData 同序：Header(:59-60) → Strings(:61-62) → Objects(:63-70) → Containers(:71-78)
```

mod 视角的对照实验：

```csharp
// 四段之间的编号关系：
//   ObjectData[i] 的 i     ← Object 标签成员里存的整数
//   ContainerData[i] 的 i  ← Container 标签成员里存的整数
//   Strings 里的整数       ← String 标签成员里存的整数（表内下标）
// 所以「三个标签存的都是整数，但指向三张不同的表」——这是最常见的误读。

// 自检：往返一次
GameData rt = GameData.CreateFrom(gd.GetData());
Debug.Print("GetData/CreateFrom 往返一致 = " + gd.IsEqualTo(rt), 0);
Debug.Print("注意 IsEqualTo 不抛异常，只 FailedAssert + 返回 false", 0);
```

## 依赖关系

- 产出方：[SaveContext](../SaveContext)（`Save` 最后一句 `new GameData(header, strings, objectData, containerData)`）
- 消费方：[LoadContext](../LoadContext)（Header 读三个计数、Strings 读字符串表、ObjectData 逐对象、ContainerData 逐容器）
- 包装容器：[LoadData](../LoadData)（读档输入包）
- 出口与实现：[ISaveDriver](../ISaveDriver) 及其实现 [FileDriver](../FileDriver) / [InMemDriver](../InMemDriver) / [AsyncFileSaveDriver](../AsyncFileSaveDriver)
- `ObjectData` 每段的解析：[ArchiveDeserializer](../ArchiveDeserializer) → [ObjectLoadData](../ObjectLoadData) / [ContainerLoadData](../ContainerLoadData)
- `Strings` 表的写入：[VariableSaveData](../VariableSaveData)（`GetStringId`）、[SaveContext](../SaveContext)（`AddOrGetStringId`）
- 读侧标签：[SavedMemberType](../SavedMemberType)（三个整数标签分别指向三张表）
- 字节原语：`TaleWorlds.Library.BinaryReader/BinaryWriter`（`CreateFrom`/`GetData`）与 `System.IO.BinaryReader/BinaryWriter`（`Read`/`Write`）——**两套不同的类型**
- 体系全貌：../../../architecture/save-system