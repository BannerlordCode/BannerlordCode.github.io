---
title: "SaveGameFileInfo"
description: "存档浏览器用于展示一个存档槽的轻量描述：名称、元数据（版本/Mod 信息）以及是否已损坏。"
---

# SaveGameFileInfo

> **一句话职责：** SaveGameFileInfo 是存档槽位的“名片”——存档列表界面靠它显示槽名、版本信息和损坏标记，而不必真把整个存档读进内存。

**命名空间：** `TaleWorlds.SaveSystem`
**模块：** SaveSystem
**类型：** `public class SaveGameFileInfo`
**源文件路径：** `bannerlord-1.3.15/TaleWorlds.SaveSystem/SaveGameFileInfo.cs`

## 概述
当玩家打开读档界面时，引擎需要列出所有可用存档，但把每个 `.sav` 完整反序列化一遍既慢又浪费内存。于是存档系统提供 `SaveGameFileInfo` 这种轻量 DTO：它只携带三个公开字段——`Name`（槽位/文件名）、`MetaData`（战役名、游戏版本、Mod 列表等展示信息）、`IsCorrupted`（完整性校验失败标记）。读档菜单遍历这些描述符来填充列表，灰掉损坏项，玩家点下某个槽位后才会真正触发 `SaveManager.Load` 去反序列化完整的 `GameData`。

## 心智模型
把它想成“图书馆书脊上的标签”。你扫一眼标签（`Name` + `MetaData`）就知道这本书大概是什么、哪个版本，而不用翻开整本（`GameData`）。`IsCorrupted` 则是标签上盖的“残损”章——它在完整性/版本校验不通过时被置 `true`，让 UI 直接禁用该槽位。它和真正的数据流无关：保存时由驱动/管理器在写完存档后生成这个描述符，读取时也用它快速预览。它本身不持有任何字节、不依赖对象图，是纯粹给 UI 与驱动枚举用的展示型结构。

## 何时用 / 何时不要用
- **不要用：** 不要试图用 `SaveGameFileInfo` 去承载或重建实际存档数据，它只是元数据外壳。
- **正确做法：** 想列出/展示存档请用管理器提供的枚举接口拿到的 `SaveGameFileInfo`；想真正读写游戏状态请用 `SaveManager.Save` / `SaveManager.Load`。

## 依赖图
- 上游：[SaveManager](../SaveManager)、[MetaData](../MetaData)、[GameData](../GameData)
- 下游：读档 UI / 存档浏览器（消费描述符）
- 相关类型/阶段：[ISaveDriver](../ISaveDriver)、[SaveOutput](../SaveOutput)、[LoadResult](../LoadResult)

## 风险段
- **IsCorrupted 只标记不修复：** 它是校验结果，置 `true` 仅表示“别加载这个”，并不会告诉你损坏原因，也不提供修复入口。
- **MetaData 可能为空或不匹配：** 旧版本/外部修改的存档，`MetaData` 里记录的版本或 Mod 列表可能与当前游戏不一致，UI 需自行决定是否允许加载。
- **描述符不是数据：** 仅靠 `SaveGameFileInfo` 无法还原存档；误把它当作存档数据会造成逻辑错误。

## 成员说明
均为公开字段（field），直接读写：
- `string Name`：存档槽位或文件名，读档菜单用它作为主显示文本。
- `MetaData MetaData`：该存档的元数据，包含战役信息、游戏版本与 Mod 列表等，通常显示在槽位副标题。
- `bool IsCorrupted`：完整性/版本校验未通过时为 `true`，UI 据此置灰该槽位、禁止加载。

## 示例
```csharp
SaveOutput output = SaveManager.Save(Game.Current, new MetaData(), "mySlot", new AsyncFileSaveDriver());
// 保存成功后，存档浏览器通过 SaveGameFileInfo 展示该槽位：
// Name 来自槽名，MetaData 记录版本/Mod，IsCorrupted 在完整性校验失败时置 true。
Debug.Print(output.Success ? "saved" : output.ErrorMessage);
```

## 导航
- ↑ 父级：[save-system 索引](../)
- ↔ 兄弟：[MetaData](../MetaData)、[GameData](../GameData)、[SaveOutput](../SaveOutput)
- 架构：[存档系统架构](../../../architecture/save-system)
