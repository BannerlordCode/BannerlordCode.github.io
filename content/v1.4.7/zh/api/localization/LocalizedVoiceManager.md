---
title: "LocalizedVoiceManager"
description: "语音本地化的静态管理器：把各语言 XML 里的 VoiceOver 节点加载成 id → VoiceObject 字典，并按文本 id 查回配音清单。"
---
# LocalizedVoiceManager

**命名空间：** `TaleWorlds.Localization`
**模块：** `TaleWorlds.Localization`
**类型：** `public static class LocalizedVoiceManager`
**基类：** 无（静态类）
**源文件：** `bannerlord-1.4.7/TaleWorlds.Localization/LocalizedVoiceManager.cs`（声明见第 10 行）

## 概述

`LocalizedVoiceManager` 是语音本地化的全局入口：一个纯静态类，内部只维护一张 `Dictionary<string, VoiceObject>`。它在语言切换时被 `LoadLanguage` 清空重建——遍历当前语言配置的所有语音 XML，把每个 `VoiceOver` 节点按 `id` 属性装成 `VoiceObject`；之后 mod 与引擎都通过 `GetLocalizedVoice(id)` 按文本 id 查回该语言下的配音路径清单。它与文本侧的 `LocalizedTextManager` 完全对称：一个管文字，一个管声音，共用同一套 StringId 空间。

## 心智模型

把它想成一本**按语言整体换页的通讯录**：字典就是通讯录本身，`LoadLanguage` 不是「加几页」而是「把旧通讯录撕了重印一本」——所以切换语言后任何旧 `VoiceObject` 引用都指向已被清掉的旧数据。它不负责解析 XML 的细节（委托给 `VoiceObject.Deserialize` / `AddVoicePaths`），不负责播放，也不负责决定「哪些语言有声」——那件事只是把 `LanguageData` 的配置过滤后透传出去（`GetVoiceLanguageIds`）。状态来源唯一：`LanguageData.VoiceXmlPathsAndModulePaths` 配置的 XML 文件；谁改它：只有引擎在切换语言时调 `LoadLanguage`，mod 侧正常只读查询。

## 怎么用

两条公开用法：按 id 查询，以及枚举有声语言。

1. 查询：`GetLocalizedVoice(id)` 返回 `VoiceObject` 或 `null`；未命中时打绿色调试日志而非抛异常，调用方必须判空（LocalizedVoiceManager.cs:13）。
2. 枚举有声语言：`GetVoiceLanguageIds()` 返回所有「有效且配置了语音 XML」的语言 id，可直接用于设置界面（LocalizedVoiceManager.cs:25）。
3. 语言切换是「先清空后重建」：`LoadLanguage` 进来第一件事就是 `_voiceObjectDictionary.Clear()`，重建完成前所有查询都返回 `null`（LocalizedVoiceManager.cs:41）。
4. XML 缺 `VoiceOvers` 节点会崩：加载循环里 `xmlNode` 找不到目标节点时保持 `null`，随后直接 `.ChildNodes` 会抛空引用（LocalizedVoiceManager.cs:77）。
5. 坏 XML 被静默吞掉：`LoadXmlFile` 捕获所有解析异常、`FailedAssert` 后返回 `null`，加载流程靠判 null 跳过坏文件——不中断整体加载，但会静默丢数据（LocalizedVoiceManager.cs:62）。
6. 同一 id 跨模块合并：多个 XML 都含同一 `id` 时，先到的建对象、后到的走 `AddVoicePaths` 追加，最终 `VoicePaths` 是跨模块合并结果（LocalizedVoiceManager.cs:93）。

## 关键成员

| 成员 | 用途 |
| --- | --- |
| `GetLocalizedVoice(string id)` | 公开查询入口：从静态字典按文本 id 取 `VoiceObject`；未命中打绿色调试日志并返回 `null`，不抛异常。LocalizedVoiceManager.cs:13 |
| `GetVoiceLanguageIds()` | 遍历 `LanguageData.All`，收集所有非空、`IsValid` 且 `VoiceXmlPathsAndModulePaths.Count > 0` 的语言 `StringId`，即「有哪些语言配了语音」。LocalizedVoiceManager.cs:25 |
| `LoadLanguage(string languageId)` | internal 切换入口：先清空整个字典，再按 id 取 `LanguageData` 并委托给私有重载；语言切换的引擎侧触发点。LocalizedVoiceManager.cs:39 |
| `LoadLanguage(LanguageData language)` | private 重载：遍历该语言的「XML 路径 → 模块根」配置，逐个解析；`VoiceOver` 节点按 `id` 属性入库，已存在则追加路径、不存在则反序列化新建。LocalizedVoiceManager.cs:70 |
| `LoadXmlFile(string xmlPath)` | private：读文件全文并 `LoadXml`；解析失败时 `FailedAssert` 并返回 `null`，把异常吞成「跳过该文件」。LocalizedVoiceManager.cs:50 |
| `_voiceObjectDictionary` | private static readonly 字典，id → `VoiceObject`，全管理器唯一状态；`readonly` 只保证引用不变。LocalizedVoiceManager.cs:109 |

## 真实示例

```csharp
// 枚举所有带语音的语言，并按 id 查询某条文本的配音
foreach (string langId in LocalizedVoiceManager.GetVoiceLanguageIds())
{
    Debug.Print("voice language: " + langId);
}
VoiceObject voice = LocalizedVoiceManager.GetLocalizedVoice("conversation_hello");
if (voice != null && voice.VoicePaths.Count > 0)
{
    Debug.Print("first voice: " + voice.VoicePaths[0]);
}
```

## 参见

- [VoiceObject](../VoiceObject) — 字典里存的值对象，配音路径清单。
- [LocalizedTextManager](../LocalizedTextManager) — 文本侧的对称管理器，与本类共用 StringId 空间。
- [TextObject](../TextObject) — 文本 id 的文本载体；语音与文本是两套并行数据。

## 导航
- ↑ [localization 桶索引](../)
- ↑ [API 参考](../../)
- ↑ [v1.4.7 中文首页](../../../)
- ↔ [架构总览](../../../architecture/)
