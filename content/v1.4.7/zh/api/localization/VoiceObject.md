---
title: "VoiceObject"
description: "把一条文本 id 在当前语言下的全部配音文件路径封装成只读清单，是语音本地化里最小的数据单元。"
---
# VoiceObject

**命名空间：** `TaleWorlds.Localization`
**模块：** `TaleWorlds.Localization`
**类型：** `public class VoiceObject`
**基类：** 无
**源文件：** `bannerlord-1.4.7/TaleWorlds.Localization/VoiceObject.cs`（声明见第 8 行）

## 概述

`VoiceObject` 是语音本地化的值对象：一条文本（StringId）在当前语言下可能对应多条配音文件，这个类就把这些路径装进一个只读列表。它不解析 XML、不读音频、不关心多语言切换——解析由静态入口 `Deserialize` 与批量入口 `AddVoicePaths` 在加载期完成，成品实例被 `LocalizedVoiceManager` 收进字典按 id 查回。整个类只有一个字段、一个属性、两个填充方法，是「文本 id → 配音路径集合」映射里最末端的那个值。

## 心智模型

把它想成一张**配音清单卡片**：一个 `VoiceObject` 只回答一个问题——"这条文本在当前语言下有哪些配音文件"。它不负责找到该文本（那是 `LocalizedVoiceManager` 的字典职责），不负责播放（那是音频子系统的事），也不负责语言切换（切换时整个字典被清空重建，旧卡片全部作废）。状态来源唯一：XML 里 `VoiceOver` 节点下的 `Voice` 子节点，路径在加载时就被拼成「模块根目录 + / + 相对路径」的完整形式。谁改它：只有 `LocalizedVoiceManager` 在加载语言时通过 `Deserialize` 创建、通过 `AddVoicePaths` 追加；mod 侧拿到的是只读视图，正常只读消费，不要试图改集合。

## 怎么用

拿到实例的正常途径只有一条：`LocalizedVoiceManager.GetLocalizedVoice(id)`，它返回 `VoiceObject` 或 `null`。

1. 构造函数是 private：不能 `new VoiceObject()`，实例只能由 `Deserialize` 创建（VoiceObject.cs:21）。
2. `GetLocalizedVoice` 未命中时返回 `null` 并打一条绿色调试日志，不抛异常——调用方必须判空（LocalizedVoiceManager.cs:13）。
3. `VoicePaths` 是 `MBReadOnlyList<string>`，运行时不能 Add/Remove；要加路径只能走 `AddVoicePaths`（VoiceObject.cs:12）。
4. 路径在加载时就已拼好模块前缀，`VoicePaths` 里存的是完整相对路径，不是 XML 里的原始 `path` 值（VoiceObject.cs:40）。
5. 切换语言会先清空字典再重建，加载完成前查询一律得到 `null`，旧实例引用全部作废（LocalizedVoiceManager.cs:41）。

## 关键成员

| 成员 | 用途 |
| --- | --- |
| `VoiceObject()` | private 构造，把 `_voicePaths` 初始化为空 `MBList<string>`；只被 `Deserialize` 调用，外部无法 new。VoiceObject.cs:21 |
| `VoicePaths` | 只读属性，返回内部列表的只读视图；元素是「模块根 + 相对路径」拼好的完整配音文件路径，按 XML 中 `Voice` 出现顺序排列。VoiceObject.cs:12 |
| `AddVoicePaths(XmlNode node, string modulePath)` | 遍历传入节点的所有子节点，凡名为 `Voice` 的节点都把 `modulePath + "/" + path 属性` 追加进集合；是加载期向已存在实例追加路径的唯一入口。VoiceObject.cs:33 |
| `Deserialize(XmlNode node, string modulePath)` | 静态工厂：new 一个实例并把节点下所有 `Voice` 子节点的路径一次性填入后返回；`LocalizedVoiceManager` 对每个新 id 调它。VoiceObject.cs:47 |
| `AddVoicePath(string voicePath)` | private 单条追加，`AddVoicePaths` 与 `Deserialize` 都复用它，保证路径拼装逻辑只有一份。VoiceObject.cs:27 |
| `_voicePaths` | private readonly 字段，真正的路径存储；readonly 只保证引用不变，集合内容仍可被 Add 修改。VoiceObject.cs:63 |

## 真实示例

```csharp
// 按文本 id 取当前语言的配音清单；找不到时返回 null，必须判空
VoiceObject voice = LocalizedVoiceManager.GetLocalizedVoice("conversation_intro_1");
if (voice != null)
{
    foreach (string path in voice.VoicePaths)
    {
        Debug.Print("voice file: " + path);
    }
}
```

## 参见

- [LocalizedVoiceManager](../LocalizedVoiceManager) — 持有 id → VoiceObject 字典的静态管理器，负责加载与查询。
- [TextObject](../TextObject) — 文本侧的对应物；语音与文本是两套并行的本地化数据。
- [MBTextManager](../MBTextManager) — 文本本地化的入口，与语音侧的 `LocalizedVoiceManager` 对称。

## 导航
- ↑ [localization 桶索引](../)
- ↑ [API 参考](../../)
- ↑ [v1.4.7 中文首页](../../../)
- ↔ [架构总览](../../../architecture/)
