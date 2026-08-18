---
title: "ISaveDriver"
description: "存档持久化介质的抽象接口：定义 Save/Load/Delete/列举/元数据读取的读写契约。SaveManager 通过它把已序列化好的 GameData 落到具体存储介质（磁盘 .sav 或内存），mod 通常不需要自己实现，但必须理解 SaveManager 如何选择并注入具体驱动。"
---

# ISaveDriver

**Namespace：** `TaleWorlds.SaveSystem`
**Module：** `TaleWorlds.SaveSystem`
**类型：** `public interface ISaveDriver`
**Base：** 无
**源文件路径：** `TaleWorlds.SaveSystem/ISaveDriver.cs`

## 一句话职责

定义存档字节「存在哪、怎么读写」的统一契约——具体落盘位置（磁盘文件夹还是内存缓冲）由实现类决定，而 `SaveManager` 只认这个接口，不关心底层是文件还是内存。

## 概述

`ISaveDriver` 是保存系统里**存储层与流程层的边界**。上游的 `SaveManager.Save` 先把整张对象图交给 `SaveContext` 序列化成 `GameData`，再调用 `ISaveDriver.Save(saveName, version, metaData, gameData)` 把字节写到某个介质；`SaveManager.Load` 则反向调用 `Load`/`LoadMetaData` 把字节取回来。`Save` 返回 `Task<SaveResultWithMessage>`，意味着驱动**可以异步**完成落盘——这是整个保存流程里唯一的异步边界。接口还提供列举（`GetSaveGameFileInfos`/`GetSaveGameFileNames`）、删除（`Delete`）、存在性检查（`IsSaveGameFileExists`）和异步性声明（`IsWorkingAsync`）。目前游戏内置三种实现：`FileDriver`（同步写盘）、`AsyncFileSaveDriver`（后台线程写盘）、`InMemDriver`（只留内存）。

## 心智模型

- **它在哪一层：** 它是「对象图 ↔ 二进制」流水线的最后一环与最前一环。前面是 `SaveContext`/`LoadContext` 与 `GameData`，后面是磁盘或内存；它自己不解析类型、不处理 `LocalSaveId`，只搬运已经编好号的字节。
- **谁创建/持有它：** 通常由游戏在创建存档会话时选定某个实现并作为 `driver` 参数注入 `SaveManager.Save(...)` / `SaveManager.Load(...)`。mod 几乎不应 `new` 一个驱动去替换游戏的存档入口。
- **何时用：** 只有当你要实现全新存储介质（云存档、加密盘、自定义容器）时才实现本接口；普通 mod 想存自己的状态，应当走 `SaveableTypeDefiner` + `IDataStore`，而不是替换驱动。
- **何时不要用：** 不要用它来做「业务逻辑的状态缓存」；它只负责持久化，不参与运行时对象生命周期。
- **异步性契约：** `IsWorkingAsync()` 必须如实反映 `Save` 是否会后台完成。`SaveManager` 对未完成的 `Task` 返回 `SaveOutput` 的 Continuing 状态，调用方必须据此等待真实落盘，不能把「接口已返回」当成「文件已写好」。

## 依赖图

- 上游调用方：[SaveManager](../SaveManager) 在 `Save`/`Load` 中通过本接口读写。
- 写入数据载体：[GameData](../GameData)（对象图字节）与 [MetaData](../MetaData)（元数据）。
- 读取结果：[LoadData](../LoadData)（`Load` 的返回值）。
- 具体实现：[FileDriver](../FileDriver) · [AsyncFileSaveDriver](../AsyncFileSaveDriver) · [InMemDriver](../InMemDriver)。
- 跨模块关联：[Game](../../core-extra/Game) 是运行期整张对象图的根，`Campaign` 是其派生根。

## 风险段（实现者必读）

- **`Load` 失败必须返回 `null`：** `SaveManager.Load` 依赖 `driver.Load` 返回 `null` 来判定读档失败并产出失败 `LoadResult`；若实现在损坏时抛异常或返回空壳 `LoadData`，上层难以正确识别坏档。
- **`IsWorkingAsync` 必须与真实行为一致：** 返回 `true` 却同步写完，或返回 `false` 却后台写盘，都会让 `SaveManager` 对 Continuing 结果的处理出错，进而在文件未落盘时就切场景/再存。
- **版本与元数据不可丢：** `Save` 必须完整写入 `MetaData`（含 `ApplicationVersion`），否则列举时会被标记为损坏，旧版读取分支也无法判定。
- **多槽语义：** 若实现支持多命名存档，`Delete`/`IsSaveGameFileExists`/`Load` 必须按 `saveName` 区分；`InMemDriver` 这类单槽实现则要显式说明「只保留最后一次写入」。

## 成员说明

### 写档

| 成员 | 说明 |
| --- | --- |
| `Task<SaveResultWithMessage> Save(string saveName, int version, MetaData metaData, GameData gameData)` | 把元数据与对象图字节写到介质。副作用是产生/覆盖一个存档；可能异步返回，调用方需等待 `SaveResult`。`version` 由 `SaveManager` 固定传 `1`，真实版本号在 `MetaData` 里。 |

### 读档与列举

| 成员 | 说明 |
| --- | --- |
| `MetaData LoadMetaData(string saveName)` | 只读元数据（用于存档列表展示），不反序列化对象图；找不到时返回 `null`。 |
| `LoadData Load(string saveName)` | 恢复 `MetaData` + `GameData` 并包成 `LoadData`；损坏或失败时返回 `null`。注意它返回的是字节容器，真正的对象图还原由 `LoadContext` 完成。 |
| `SaveGameFileInfo[] GetSaveGameFileInfos()` | 列举介质上的全部存档及其元数据与 `IsCorrupted` 标记。 |
| `string[] GetSaveGameFileNames()` | 列出全部存档名（不含扩展名），供 UI 填充。 |

### 生命周期与查询

| 成员 | 说明 |
| --- | --- |
| `bool Delete(string saveName)` | 删除指定存档；成功返回 `true`。 |
| `bool IsSaveGameFileExists(string saveName)` | 判断某命名存档是否存在。 |
| `bool IsWorkingAsync()` | 声明 `Save` 是否会后台完成；`FileDriver` 返回 `false`，`AsyncFileSaveDriver` 返回 `true`。 |

## 真实示例

下面的形状来自 `SaveManager` 的真实公共调用：驱动实例由游戏的存档层选定并传入，`SaveManager` 内部先序列化再调用 `driver.Save`。mod 不应伪造驱动绕过官方存档 UI。

```csharp
// Game 是整张对象图的根，其派生类 Campaign 才是 SaveManager.Save 常见的 target
ISaveDriver driver = new FileDriver(); // 或 AsyncFileSaveDriver / 游戏注入的实例

SaveOutput output = SaveManager.Save(
    Campaign.Current,
    campaignMetaData,
    "my_campaign_slot",
    driver);

if (output != null && output.Successful)
{
    // 列表展示时只读元数据，避免整档反序列化
    MetaData info = driver.LoadMetaData("my_campaign_slot");
    ApplicationVersion ver = info.GetApplicationVersion();
}
```

## 导航块

- ↑ Parent：[save-system 目录](../)
- ↔ Sibling：[FileDriver](../FileDriver) · [AsyncFileSaveDriver](../AsyncFileSaveDriver) · [InMemDriver](../InMemDriver) · [SaveManager](../SaveManager)
- 相关类型：[GameData](../GameData) · [MetaData](../MetaData) · [MBObjectManager](../../campaign-ext/MBObjectManager/)

## 参见

- 模块索引：[save-system 目录](../)
- 上游枢纽：[SaveManager](../SaveManager)
- 相关实现：[FileDriver](../FileDriver) · [Game](../../core-extra/Game)
