---
title: "GameData"
description: "存档在内存中的四段字节表示：Header / Strings / ObjectData / ContainerData 构成的扁平容器，由 SaveContext 在保存时产出、由 LoadContext 在加载时消费，磁盘上的 .sav 本质是它经 GetData/Write 拼出的单一字节流。"
---

# GameData

**命名空间：** `TaleWorlds.SaveSystem`
**模块：** `TaleWorlds.SaveSystem`
**类型：** `public class GameData`（`[Serializable]`）
**源文件：** `bin/TaleWorlds.SaveSystem/TaleWorlds.SaveSystem/GameData.cs`

## 概述

`GameData` 是存档在内存里的「四段字节容器」，不含任何游戏逻辑，只持有 `Header`、`Strings`、`ObjectData`、`ContainerData` 四块裸字节，以及由此算出的 `TotalSize`。保存时 [SaveContext](../SaveContext) 把整个对象图序列化进这四段；加载时 [LoadContext](../LoadContext) 把它们读回对象图。磁盘上的 `.sav` 文件，本质上就是这份结构经 `GetData()` / `Write()` 拼成的单一字节流——理解它的分段与读写顺序，是排查「坏档」「版本不兼容」的关键。

## 心智模型

把 `GameData` 想成「存档文件的在内存镜像」：它既不是对象图、也不是 schema，而是一叠按编号排好的字节抽屉。`Header` 是第一段，记录对象/字符串/容器的计数与配置；`Strings` 是去重后的字符串池；`ObjectData` 是「每个对象一段」的字节数组（`ObjectData[i]` 对应第 `i` 号对象）；`ContainerData` 同理对应容器。保存侧 [SaveContext](../SaveContext) 产出它，[LoadContext](../LoadContext) 拿到它后用 `ArchiveDeserializer` 把每段还原成 `SaveEntryFolder` 树。**关键陷阱在读写顺序**：`GetData()` / `CreateFrom(byte[])` 这一对使用「Header→Strings→ObjectData→ContainerData」顺序，而 `Write(BinaryWriter, GameData)` / `Read(BinaryReader)` 这一对使用「Header→ObjectData→ContainerData→Strings」顺序——两套 API 各自成对内一致，但顺序不同；任何一侧改了段顺序都会让存档无法被另一端解析。它是纯数据载体，生命周期随一次保存/加载起落，不持有对 `Game` 的引用。

## 何时使用 / 何时不要使用

**使用（理解 / 调试层面）：** 当你需要比较两份存档是否逐字节一致（`IsEqualTo`）、打印各段体积（`Inspect`）、或理解 `.sav` 在磁盘与内存之间的转换（`GetData` / `CreateFrom` / `Write` / `Read`）时。

**不要使用：**

- 不要把它当对象图来读——它只装字节；要拿回 `Campaign` / `Hero`，必须走 [SaveManager](../SaveManager) 的 `Load`，由 [LoadContext](../LoadContext) 还原。
- 不要跨 API 对混用顺序——用 `GetData` 拼出的流要用 `CreateFrom` 还原，`Write` 写出的要用 `Read` 读回，不能交叉。
- 不要在加载回调里持有 `GameData` 引用做修改——它是只读快照，改动不会影响已重建的世界。

## 依赖图

- 产出方：保存侧 [SaveContext](../SaveContext) 序列化完成后把四段字节封装进 `GameData`（即其 `SaveData` 属性）。
- 消费方：加载侧 [LoadContext](../LoadContext) 接收 `GameData`（包在 [LoadData](../LoadData) 里），逐段反序列化。
- 落盘/读取：由 [SaveManager](../SaveManager) 交给 [ISaveDriver](../ISaveDriver) 写入/读取磁盘；`Write` / `Read` 用 `System.IO.BinaryWriter` / `BinaryReader`。
- 字节解析：各段经 [ArchiveSerializer](../ArchiveSerializer) / [ArchiveDeserializer](../ArchiveDeserializer) 还原为 `SaveEntryFolder` 树。
- 结果承载：保存结果由 [SaveOutput](../SaveOutput) 带回，加载结果由 [LoadResult](../LoadResult) 带回，二者都围绕这份字节结构。
- 元信息：[MetaData](../MetaData) 与 `GameData` 一起被驱动写入，描述版本与模组来源。

## 风险

- **读写顺序不一致即坏档。** `GetData`/`CreateFrom` 是「Header→Strings→ObjectData→ContainerData」，`Write`/`Read` 是「Header→ObjectData→ContainerData→Strings」。两套各自成对，但绝不能交叉使用；自写存档工具时务必对齐顺序。
- **`TotalSize` 含四段全部。** 它是 `Header + Strings + 所有 ObjectData[i] + 所有 ContainerData[j]` 的字节和，用于体积统计与上限判断；单段为 `null` 会 `NullReferenceException`。
- **`IsEqualTo` 用 `Debug.FailedAssert` 报差异。** 任一段长度或字节不符会触发断言并返回 `false`，用于存档一致性校验而非生产逻辑。
- **`CreateFrom` / `Read` 不校验完整性。** 它们按长度逐段 `ReadBytes`，若传入流被截断会读到错误长度或抛异常；坏档检测应在更上层（[LoadResult](../LoadResult) / 版本检查）做。
- **它是快照不是世界。** 加载完成后 `GameData` 即可被丢弃；想拿回游戏对象要用 `Game.Current` / `Campaign.Current`，而非回头改这份字节。

## 成员说明

### 四段字节与体积

- `byte[] Header { get; internal set; }`：存档头字节段，含对象/字符串/容器的计数与配置（`SaveFolderExtension.Config` 等），由 [LoadContext](../LoadContext) 读头时解析出各类数量。
- `byte[] Strings { get; internal set; }`：去重后的字符串池字节；加载时经 `LoadString` 按 id 还原成 `_strings`。
- `byte[][] ObjectData { get; internal set; }`：`ObjectData[i]` 是第 `i` 号对象的序列化字节；保存时由 [SaveContext](../SaveContext) 的 `ObjectSaveData` 写出，加载时由 `LoadContext.CreateLoadData` 读回。
- `byte[][] ContainerData { get; internal set; }`：容器的逐段字节，与对象段结构相同但对应容器头。
- `int TotalSize { get; }`：四段字节长度之和（`Header + Strings + ΣObjectData + ΣContainerData`），用于体积统计。

### 构造

- `GameData(byte[] header, byte[] strings, byte[][] objectData, byte[][] containerData)`：用四段显式构造（保存产出 / `CreateFrom` / `Read` 内部使用）。
- `GameData()`：无参构造，四段为 `null`，供反序列化或测试预分配。

### 转换与校验

- `void Inspect()`：用 `Debug.Print` 打印各段大小与总 MB 数，纯调试用途。
- `static GameData CreateFrom(byte[] readBytes)`：把「单一字节流」按 `Header→Strings→ObjectData→ContainerData` 顺序拆回四段，返回新 `GameData`；与 `GetData` 成对。
- `byte[] GetData()`：把四段按 `Header→Strings→ObjectData→ContainerData` 顺序拼成单一字节流并返回；与 `CreateFrom` 成对。
- `static void Write(System.IO.BinaryWriter writer, GameData gameData)`：把四段按 `Header→ObjectData→ContainerData→Strings` 顺序写入 `writer`（带 `SAVE STATISTICS` 日志）；与 `Read` 成对。
- `static GameData Read(System.IO.BinaryReader reader)`：按 `Header→ObjectData→ContainerData→Strings` 顺序从 `reader` 读回四段；与 `Write` 成对。
- `bool IsEqualTo(GameData gameData)`：逐段、逐字节比较（经私有 `CompareByteArrays`），任一处长度或字节不符触发 `Debug.FailedAssert` 并返回 `false`。

## 示例

模组侧触发保存的真实入口；引擎内部由 [SaveContext](../SaveContext) 生成 `GameData` 并交 [ISaveDriver](../ISaveDriver) 落盘：

```csharp
// 模组触发保存：存档根通常是 Game / Campaign，引擎内部产出 GameData 并落盘。
MetaData metaData = MetaData.CreateNew("MyMod", ApplicationVersion.FromString("e1.0.0"));
SaveOutput output = SaveManager.Save(Game.Current, metaData, saveName, driver);

// GameData 是四段字节容器；可从磁盘字节整体还原，或把四段拼成单一字节流：
GameData data = GameData.CreateFrom(rawSaveBytes);
byte[] blob = data.GetData();
int totalBytes = data.TotalSize;     // Header + Strings + ObjectData + ContainerData 之和
byte[] header = data.Header;         // 第一段的存档头（含对象/容器/字符串计数）
```

注意两套读写顺序不同——同一份 `GameData` 若用 `GetData` 拼出就要用 `CreateFrom` 还原，用 `Write` 写出就要用 `Read` 读回：

```csharp
// 成对使用之一：GetData <-> CreateFrom（顺序 Header -> Strings -> ObjectData -> ContainerData）
byte[] flat = data.GetData();
GameData restored = GameData.CreateFrom(flat);

// 成对使用之二：Write <-> Read（顺序 Header -> ObjectData -> ContainerData -> Strings）
using var ms = new System.IO.MemoryStream();
var w = new System.IO.BinaryWriter(ms);
GameData.Write(w, data);
GameData back = GameData.Read(new System.IO.BinaryReader(new System.IO.MemoryStream(ms.ToArray())));
```

## 参见

- ↑ 父级：[存档系统 API 索引](../)
- ↔ 相关：[SaveContext](../SaveContext) · [LoadContext](../LoadContext) · [SaveManager](../SaveManager) · [ISaveDriver](../ISaveDriver) · [MetaData](../MetaData) · [SaveOutput](../SaveOutput) · [LoadResult](../LoadResult) · [ArchiveDeserializer](../ArchiveDeserializer)
