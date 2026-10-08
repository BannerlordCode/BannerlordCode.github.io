---
title: "LocalizationException"
description: "本地化子系统唯一的自定义异常类型，继承 System.Exception，给 catch 一个明确的类型锚点而不携带任何本地化上下文。"
---
# LocalizationException

**命名空间：** `TaleWorlds.Localization`
**模块：** `TaleWorlds.Localization`
**类型：** `public class LocalizationException : Exception`
**基类：** `Exception`（`System.Exception`）
**源文件：** `bannerlord-1.4.7/TaleWorlds.Localization/LocalizationException.cs`（声明见第 6 行）

## 概述

`LocalizationException` 直接继承 `System.Exception`，是本地化链路上抛出的唯一自定义异常类型，用于把本地化子系统的失败以带消息的形式抛给上层。它不定义任何本地化特有字段——没有 id、没有语言、没有模块路径——纯粹是「一个贴了命名空间标签的 Exception」，让调用方可以只 catch 本地化相关的错误，而不把其他异常一并吞掉。类体只有三个标准构造函数，是教科书式的最小异常子类。

## 心智模型

把它想成一张**贴了标签的 Exception**：行为、状态、序列化全部来自基类，这个子类存在的意义只是给 `catch` 一个明确的类型锚点。它不负责记录「哪个模块、哪条文本、哪个 XML 文件」出的问题——这些信息要靠抛出方在 `message` 里自己拼。谁抛它：本地化加载/查询链路上检测到无法继续的情况时（本文件只定义类型，不含抛出逻辑，抛出点位于管线其他位置）；谁 catch 它：通常是引擎与 mod 的边界处理，mod 侧一般不直接 catch。注意它没有 `(SerializationInfo, StreamingContext)` 构造，跨进程序列化场景下与基类行为一致。

## 怎么用

三个构造函数覆盖标准抛出形态，按是否需要上下文选择。

1. 无参构造用于不带消息的抛出场景，内部为空，完全依赖基类默认行为（LocalizationException.cs:9）。
2. 带消息构造转发给 `base(message)`，排查信息全靠这个 `message`——抛出时务必写清上下文（LocalizationException.cs:14）。
3. 带内部异常构造转发给 `base(message, inner)`，用于包装 IO/XML 解析等底层异常（LocalizationException.cs:20）。
4. catch 顺序有坑：它继承 `Exception`，`catch (Exception)` 会把它一起吞掉；要单独处理本地化错误，必须把 `catch (LocalizationException)` 放在前面。
5. 别指望语音查询失败会抛它：同桶的 `LocalizedVoiceManager.GetLocalizedVoice` 走的是「返回 `null` + 调试日志」的容错路线，与异常体系是两条路。

## 关键成员

| 成员 | 用途 |
| --- | --- |
| `LocalizationException()` | 无参构造，空实现；用于不需要消息的抛出场景，消息由基类给默认值。LocalizationException.cs:9 |
| `LocalizationException(string message)` | 带消息构造，转发 `base(message)`；排查本地化问题的唯一信息载体，抛出时要把 id/语言/文件写进去。LocalizationException.cs:14 |
| `LocalizationException(string message, Exception inner)` | 带消息与内部异常构造，转发 `base(message, inner)`；包装底层异常时保留原始堆栈。LocalizationException.cs:20 |

## 真实示例

```csharp
// 调本地化 API 时捕获 LocalizationException：解析文本并弹出提示
try
{
    TextObject text = new TextObject("{=myKey}Hello");
    string resolved = text.ToString();
    InformationManager.DisplayMessage(new InformationMessage(resolved));
}
catch (LocalizationException ex)
{
    InformationManager.DisplayMessage(new InformationMessage(ex.Message));
}
```

## 参见

- [LocalizedVoiceManager](../LocalizedVoiceManager) — 语音加载管理器；其失败路线是返回 null 而非抛此异常。
- [LocalizedTextManager](../LocalizedTextManager) — 文本本地化管理器，与语音侧对称。
- [VoiceObject](../VoiceObject) — 语音数据载体，本异常不携带其任何上下文。

## 导航
- ↑ [localization 桶索引](../)
- ↑ [API 参考](../../)
- ↑ [v1.4.7 中文首页](../../../)
- ↔ [架构总览](../../../architecture/)
