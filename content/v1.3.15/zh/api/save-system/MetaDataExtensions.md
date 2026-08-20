---
title: "MetaDataExtensions"
description: "MetaData 的扩展方法：从存档元数据中解析出游戏/构建版本号。"
---

# MetaDataExtensions

> **一句话职责：** 给 `MetaData` 加一个扩展方法，把存档里存的版本字符串解析成强类型的 `ApplicationVersion`。

**命名空间：** `TaleWorlds.SaveSystem`
**模块：** SaveSystem
**类型：** `static class MetaDataExtensions`
**源文件路径：** `bannerlord-1.3.15/TaleWorlds.SaveSystem/MetaDataExtensions.cs`

## 概述
每个存档都带有 `MetaData`（作者、描述、时间戳、版本等）。其中“ApplicationVersion”以字符串形式存进 `MetaData` 的字典里。`MetaDataExtensions` 提供一个 `GetApplicationVersion` 扩展方法，读取该键并用 `ApplicationVersion.FromString` 解析，让 modder/引擎在加载时快速判断这份存档是用哪个游戏版本写的，从而决定兼容策略或提示玩家。

## 心智模型
把它想成“存档封面上的出厂铭牌读取器”：`MetaData` 是封面，`ApplicationVersion` 那一行是铭牌；扩展方法负责把铭牌上的文字（字符串）翻译成你能直接比较的版本对象（`ApplicationVersion`）。它不写存档，只读取并转换，是加载流程里做版本校验时最常调用的小工具。modder 在自定义加载/迁移逻辑时，用它判断存档版本非常方便。

## 何时用 / 何时不要用
在需要判断存档对应的游戏/构建版本时使用 `metaData.GetApplicationVersion()`，例如加载前做兼容检查、决定是否走迁移路径。若 `MetaData` 里没有该键，它会返回 `ApplicationVersion.Empty` 而不是抛异常——调用方应把 `Empty` 当作“未知/旧版”处理。不要在保存时用它（它只读取）；写入版本信息由 `SaveManager`/存档创建流程负责。

## 依赖图
- 上游：[SaveManager](../SaveManager)、[GameData](../GameData)
- 下游：[LegacyGameDataDeserializer](../LegacyGameDataDeserializer)
- 相关类型/阶段：[MetaDataExtensions](../MetaDataExtensions)、[LoadError](../LoadError)

## 风险段
- 缺失即 `Empty`：没有 `ApplicationVersion` 键时返回 `ApplicationVersion.Empty`，务必显式处理“未知版本”分支，别当成有效版本用。
- 解析失败静默：若字符串格式非法，`ApplicationVersion.FromString` 的行为取决于其实现，可能得到空版本；加载前做非空校验更稳妥。
- 仅读取：`MetaData` 的索引器在扩展方法里是只读访问，它不会帮你写入版本信息。

## 成员说明
- `static ApplicationVersion GetApplicationVersion(this MetaData metaData)`：从 `metaData["ApplicationVersion"]` 取出版本字符串；为 `null` 时返回 `ApplicationVersion.Empty`，否则用 `ApplicationVersion.FromString(text, 0)` 解析并返回。是你判断存档版本的唯一入口。

## 示例
```csharp
ISaveDriver driver = new InMemDriver();
MetaData metaData = SaveManager.LoadMetaData("mySlot", driver);
ApplicationVersion version = metaData.GetApplicationVersion();
bool compatible = version != ApplicationVersion.Empty;
```

## 导航
- ↑ 父级：[save-system 索引](../)
- ↔ 兄弟：[SaveManager](../SaveManager)、[LegacyGameDataDeserializer](../LegacyGameDataDeserializer)
- 架构：[存档系统架构](../../../architecture/save-system)
