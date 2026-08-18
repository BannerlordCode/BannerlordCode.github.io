---
title: "FileDriver"
description: "把序列化好的 GameData 同步写入用户目录下单个 .sav 文件的磁盘驱动：先写 MetaData，再用 Deflate 压缩对象图字节整体落盘；读取时按 ApplicationVersion 选择新版 GameData.Read 或旧版 LegacyGameDataDeserializer。IsWorkingAsync 恒为 false。"
---

# FileDriver

**Namespace：** `TaleWorlds.SaveSystem`
**Module：** `TaleWorlds.SaveSystem`
**类型：** `public class FileDriver : ISaveDriver`
**Base：** `ISaveDriver`
**源文件路径：** `TaleWorlds.SaveSystem/FileDriver.cs`

## 一句话职责

把存档真正写到磁盘：在用户目录的 `Game Saves` 文件夹下生成 `<名称>.sav`，先写元数据、再写 Deflate 压缩后的对象图数据；删除、列举、存在性检查也都围绕这一个目录展开。

## 概述

`FileDriver` 是 `ISaveDriver` 的**同步磁盘实现**。一次 `Save` 的流程是：把 `MetaData` 序列化进 `MemoryStream`，再在外面套一层 `DeflateStream`（压缩级别 `Fastest`）用 `GameData.Write` 把对象图字节写进去，最后通过 `FileHelper.SaveFile` 把整段缓冲一次性写到 `<saveName>.sav`。注意它虽然返回 `Task<SaveResultWithMessage>`，但内部用 `Task.FromResult` 包裹——本质是**同步**，`IsWorkingAsync()` 恒返回 `false`。读取时按 `MetaData` 里的 `ApplicationVersion` 分流：低于 `v1.1.0` 走 `LegacyGameDataDeserializer`，否则用 `GameData.Read`；任何解析异常都被 `try/catch` 吞掉并返回 `null`，由 `SaveManager` 判为读档失败。列举目录时还会用 `SaveManager.LoadMetaData` 读取每个 `.sav` 的元数据并标记 `IsCorrupted`。

## 心智模型

- **同步阻塞主线程：** 所有读写直接走 `FileHelper` 文件 I/O，没有任何后台线程。大存档的 `Save` 会卡住 UI/游戏循环，直到整文件写完。
- **文件布局：** `SavePath` 是 `PlatformFileType.User` 下的 `Game Saves\`；每个存档就是一个 `.sav` 文件，文件名固定为 `saveName + ".sav"`。它并不在磁盘上展开成 `SaveEntryFolder` 那样的目录树——`SaveEntryFolder`/`SaveFolderExtension` 只是 `GameData` 内部的逻辑结构，落盘时被压进单个文件。
- **压缩：** `GameData.Write` 后用 `DeflateStream`（`CompressionLevel.Fastest`）压缩，读取时用 `CompressionMode.Decompress` 解压。
- **版本兼容：** `Load` 对 `ApplicationVersion < v1.1.0` 走 `LegacyGameDataDeserializer` 分支，否则走 `GameData.Read`，这是跨大版本读旧档的兜底。
- **何时用：** 需要确定、立即落盘的主菜单存档。何时不要用：在游戏主循环里做超大存档以免卡顿——改用 `AsyncFileSaveDriver`。

## 依赖图

- 上游调用方：[SaveManager](../SaveManager) 在 `Save`/`Load`/`LoadMetaData` 中调用本类。
- 序列化与数据：[GameData](../GameData)（`Write`/`Read`）、[MetaData](../MetaData)（`Serialize`/`Deserialize`）、[LegacyGameDataDeserializer](../LegacyGameDataDeserializer)（旧版读档分支）。
- 读取结果：[LoadData](../LoadData)；列举产物：[SaveGameFileInfo](../SaveGameFileInfo)。
- 兄弟实现：[AsyncFileSaveDriver](../AsyncFileSaveDriver) · [InMemDriver](../InMemDriver)。
- 跨模块：[Game](../../core-extra/Game) 对象图经 `SaveContext` 变成本类的输入；对象身份引用见 [MBObjectManager](../../campaign-ext/MBObjectManager/)。

## 风险段

- **同步写盘卡帧：** 大存档 `Save` 直接在主线程做完整文件 I/O；若在主循环调用，会造成可见卡顿甚至超时。热存档/自动存档优先用 `AsyncFileSaveDriver`。
- **覆盖即丢失，无原子写：** `Save` 以 `saveName + ".sav"` 直接覆盖，没有临时文件/原子替换。写盘中途崩溃会留下半截 `.sav`，下一次 `Load` 解析失败返回 `null`，即坏档。
- **`Load` 返回 `null` 表示失败：** 调用方（`SaveManager`）据此判读档失败。mod 不能假设 `Load` 永远非空，也不要在拿到 `null` 后继续用半加载状态。
- **元数据缺 `ApplicationVersion` → 标记损坏：** 列举时若 `MetaData` 为空或版本为 `Empty`，对应 `.sav` 的 `IsCorrupted` 为 `true`。
- **版本门槛：** `< v1.1.0` 走 `LegacyGameDataDeserializer` 分支，跨大版本迁移需确认该分支仍覆盖你的旧档格式。

## 成员说明

### 路径辅助（静态，获取驱动实例的入口）

| 成员 | 说明 |
| --- | --- |
| `PlatformDirectoryPath SavePath` | 只读，返回 `PlatformFileType.User` 下 `Game Saves\` 的目录路径。 |
| `PlatformFilePath GetSaveFilePath(string fileName)` | 把 `SavePath` 与文件名拼成完整 `PlatformFilePath`。 |
| `const string SaveDirectoryName` | 固定值 `"Game Saves"`，与 `SavePath` 中的目录名一致。 |

### 写档 / 读档

| 成员 | 说明 |
| --- | --- |
| `Task<SaveResultWithMessage> Save(...)` | 见概述。把元数据与压缩后的 `GameData` 一次性写到 `<saveName>.sav`；返回 `Task.FromResult`（同步）。失败信息来自 `PlatformFileHelper.GetError()`。 |
| `MetaData LoadMetaData(string saveName)` | 只读 `.sav` 的元数据部分用于列表展示；找不到返回 `null`。 |
| `LoadData Load(string saveName)` | 解压并恢复 `MetaData` + `GameData`，旧版走 `LegacyGameDataDeserializer`；解析异常返回 `null`。 |

### 列举 / 删除 / 查询

| 成员 | 说明 |
| --- | --- |
| `SaveGameFileInfo[] GetSaveGameFileInfos()` | 枚举目录下所有 `*.sav`，逐个读元数据并填 `IsCorrupted`。 |
| `string[] GetSaveGameFileNames()` | 返回所有 `.sav` 的文件名（去扩展名）。 |
| `bool Delete(string saveName)` | 文件存在则删除并返回 `true`，否则 `false`。 |
| `bool IsSaveGameFileExists(string saveName)` | 判断 `<saveName>.sav` 是否存在。 |
| `bool IsWorkingAsync()` | 恒返回 `false`（同步驱动）。 |

## 真实示例

```csharp
// 磁盘驱动由游戏在创建存档会话时选定；mod 一般拿到的是注入给 SaveManager 的实例
ISaveDriver driver = new FileDriver();

// Game 是整张对象图的根，其派生类 Campaign 才是 SaveManager.Save 常见的 target
SaveOutput output = SaveManager.Save(Campaign.Current, campaignMetaData, "single_player_01", driver);

if (output != null && output.Successful)
{
    // 列表展示时只读元数据，避免整档反序列化
    MetaData info = driver.LoadMetaData("single_player_01");
    ApplicationVersion ver = info.GetApplicationVersion();
    bool onDisk = driver.IsSaveGameFileExists("single_player_01"); // true
}
```

## 导航块

- ↑ Parent：[save-system 目录](../)
- ↔ Sibling：[AsyncFileSaveDriver](../AsyncFileSaveDriver) · [InMemDriver](../InMemDriver) · [ISaveDriver](../ISaveDriver) · [SaveManager](../SaveManager)
- 相关类型：[GameData](../GameData) · [MetaData](../MetaData) · [MBObjectManager](../../campaign-ext/MBObjectManager/)

## 参见

- 模块索引：[save-system 目录](../)
- 上游枢纽：[SaveManager](../SaveManager)
- 相关：[AsyncFileSaveDriver](../AsyncFileSaveDriver) · [Game](../../core-extra/Game)
