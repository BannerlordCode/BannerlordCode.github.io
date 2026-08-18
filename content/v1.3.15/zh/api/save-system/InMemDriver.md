---
title: "InMemDriver"
description: "把 GameData 全部保留在进程内存一个 byte[] 里、完全不落盘的驱动：Save 把元数据+对象图字节塞进缓冲，Load 再还原；不写文件、不列举、进程退出即丢，且只保留最后一次写入。用于存档前预览、单元测试与临时场景。"
---

# InMemDriver

**Namespace：** `TaleWorlds.SaveSystem`
**Module：** `TaleWorlds.SaveSystem`
**类型：** `public class InMemDriver : ISaveDriver`
**Base：** `ISaveDriver`
**源文件路径：** `TaleWorlds.SaveSystem/InMemDriver.cs`

## 一句话职责

在内存里「假存档」：`Save` 把元数据与对象图字节拼进一个 `byte[]`，`Load` 再从中还原；不写任何文件、不列举、进程一退出什么都没留下，而且只记得最后一次写入。

## 概述

`InMemDriver` 是 `ISaveDriver` 的**纯内存实现**，背后只有一个私有字段 `byte[] _data`。一次 `Save` 的流程是：用 `gameData.GetData()` 取出原始对象图字节，把 `MetaData` 序列化进 `MemoryStream` 后把对象图字节追加其后，再 `this._data = memoryStream.GetBuffer()` 存起来。`LoadMetaData` / `Load` 则从这个缓冲反序列化：`Load` 先读 `MetaData`，再把剩余字节交给 `GameData.CreateFrom` 还原成 `LoadData`。它与 `FileDriver` 的关键差异在于：`GetSaveGameFileInfos`/`GetSaveGameFileNames` 返回**空数组**、`IsSaveGameFileExists` 永远 `false`、`Delete` 只是把 `_data` 清空。也就是说它对外「表现得像一个没有文件的介质」。`IsWorkingAsync()` 返回 `false`，所有操作在调用线程瞬时完成。

## 心智模型

- **单槽内存缓冲：** `_data` 只保存**最近一次** `Save`；再次 `Save` 直接覆盖，`saveName` 参数被忽略（没有多槽概念）。
- **不持久化：** 进程退出即丢失，没有 `.sav` 落盘，也不出现在任何存档列表里。
- **同步但极快：** 纯内存操作，`IsWorkingAsync` 为 `false`，适合频繁调用。
- **何时用：** 存档前的「预览/校验」（先 `Save` 再读字节查大小、查完整性）、自动化测试、临时沙盒场景。何时不要用：作为真实战役的唯一存档手段——玩家一关游戏就没了；也不要用于需要多存档槽的 UI。

## 依赖图

- 上游调用方：[SaveManager](../SaveManager) 同样可接收本驱动（但一般不用于正式存档）。
- 数据载体：[GameData](../GameData)（`GetData`/`CreateFrom`）· [MetaData](../MetaData)（`Serialize`/`Deserialize`）。
- 接口与兄弟：[ISaveDriver](../ISaveDriver) · [FileDriver](../FileDriver) · [AsyncFileSaveDriver](../AsyncFileSaveDriver)。
- 跨模块：[Game](../../core-extra/Game) 是对象图根，`Campaign` 是其派生类。

## 风险段

- **进程退出即丢失：** 只适合预览/测试，绝不能当作正式存档的落盘机制。
- **单槽覆盖：** 多次 `Save` 只留最后一次；若逻辑依赖多个命名槽，会静默丢掉之前的写入。
- **对外表现为「无存档」：** `GetSaveGameFileInfos` 永远空、`IsSaveGameFileExists` 永远 `false`；存档列表 UI 用本驱动会显示没有任何存档。
- **字节长度一致性：** `Save` 用 `MemoryStream.GetBuffer()`（含未用容量）存缓冲，`Load` 用 `memoryStream.Length - memoryStream.Position` 读剩余字节。只要 `Save`/`Load` 的长度计算口径一致即可还原；任何对 `_data` 的额外写入或截断都会导致还原错位。

## 成员说明

### 写档 / 读档

| 成员 | 说明 |
| --- | --- |
| `Task<SaveResultWithMessage> Save(...)` | 把 `MetaData` + `gameData.GetData()` 拼进 `MemoryStream`，`this._data = memoryStream.GetBuffer()`；返回 `Task.FromResult(SaveResultWithMessage.Default)`（同步、恒成功）。 |
| `MetaData LoadMetaData(string saveName)` | 从 `_data` 反序列化元数据；`saveName` 实际被忽略。 |
| `LoadData Load(string saveName)` | 从 `_data` 读 `MetaData`，剩余字节交 `GameData.CreateFrom` 还原；`saveName` 被忽略。 |

### 列举 / 删除 / 查询（内存语义）

| 成员 | 说明 |
| --- | --- |
| `SaveGameFileInfo[] GetSaveGameFileInfos()` | 返回空数组（无文件）。 |
| `string[] GetSaveGameFileNames()` | 返回空数组。 |
| `bool Delete(string saveName)` | 把 `_data` 清空并返回 `true`；不区分 `saveName`。 |
| `bool IsSaveGameFileExists(string saveName)` | 恒返回 `false`。 |
| `bool IsWorkingAsync()` | 恒返回 `false`。 |

## 真实示例

```csharp
// 用内存驱动做「存档前预览」：检查大小/完整性，不落盘、不污染真实存档
ISaveDriver previewDriver = new InMemDriver();

// Game 对象图（Campaign 是 Game 的派生根）已序列化进 previewDriver 的内存缓冲
SaveOutput output = SaveManager.Save(Campaign.Current, campaignMetaData, "preview", previewDriver);

if (output != null && output.Successful)
{
    // 可在此读取元数据/字节做校验，确认没问题后再用 FileDriver 写真实 .sav
    MetaData m = previewDriver.LoadMetaData("preview");
}
```

## 导航块

- ↑ Parent：[save-system 目录](../)
- ↔ Sibling：[FileDriver](../FileDriver) · [AsyncFileSaveDriver](../AsyncFileSaveDriver) · [ISaveDriver](../ISaveDriver) · [SaveManager](../SaveManager)
- 相关类型：[GameData](../GameData) · [MBObjectManager](../../campaign-ext/MBObjectManager/)

## 参见

- 模块索引：[save-system 目录](../)
- 上游枢纽：[SaveManager](../SaveManager)
- 相关：[FileDriver](../FileDriver) · [Game](../../core-extra/Game)
