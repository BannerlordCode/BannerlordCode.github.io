---
title: "AmbRefNegative"
description: "夹具页（负向）：带完整路径但行号指向伪造行的引用，用来证明修后的判分器会用 J13 抓到空行、纯标点与纯注释。"
---
# AmbRefNegative

**命名空间：** `TaleWorlds.SaveSystem.Load`
**模块：** `TaleWorlds.SaveSystem`
**类型：** `public class`
**源文件：** `TaleWorlds.SaveSystem/Load/LoadContext.cs`

## 概述

这一页是「重名 .cs 引用」修复线的负向对照。它和正向对照用同一个重名文件 `TaleWorlds.SaveSystem/Load/LoadContext.cs`，引用也同样带完整路径，区别只在于行号是伪造的：`7` 是空行，`9` 只剩一个左花括号，`10` 是一条自动生成的 token 注释。这些行号都落在文件长度之内，所以只做「行号不超过总行数」的边界检查会给它们假 PASS——而假 PASS 比假 FAIL 危险得多。修后的判分器应当先把带路径的引用消歧到唯一文件，再对每条引用读取该行内容，并对空行、纯注释、纯标点给出 J13 告警。本页除了 J3 的引用计数与 J13 之外不携带任何其它信号，因此它是「修后确实能抓到伪造行」的直接证据，而不是靠人肉读代码得出的印象。

## 心智模型

把 J13 想成引用审计的「第二把尺」：第一把尺量的是行号是否越界，第二把尺量的是被引的那一行到底有没有东西。只有两把尺都过，一条引用才算可核。为什么需要第二把尺？因为「在界内」是一个很弱的条件——一个三百多行的文件里，任何 `1..379` 的行号都在界内，但其中相当一部分是空行、注释和单个括号。伪造一条引用最省力的办法，正是挑一个界内的空行或注释行。所以心智模型是：**先消歧到唯一文件，再读该行原文，再按「空行 / 纯注释 / 纯标点」三条窄口径判定**。口径刻意收窄，是为了不误伤合法引用——合法引用经常指向方法体内的一条语句，所以判据不能要求被引行必须是声明行。本页的三条引用恰好各命中一条口径，用来把三条口径逐一钉住。

## 怎么用

### 怎么拿到

把本页和正向对照一起跑同一个判分器即可：正向页负责证明「真实行不报」，本页负责证明「伪造行必报」，两者互为控制组。

### 典型用法

在修复引用解析时，先看正向页是否仍然 PASS，再看本页的 `J13 suspicious-lines` 是否等于 3；如果本页变成 PASS 或 J13 归零，说明第二把尺被绕过了。

### 坑

不要把「行号在界内」当成引用正确的证明。本页三条引用全部在界内，却没有一条指向真实内容；同样，也不要因为某条引用指向注释就一律判错——口径只覆盖空行、纯注释、纯标点这三类。

## 关键成员

- `TaleWorlds.SaveSystem/Load/LoadContext.cs:7` — 该行是空行，属于伪造的成员引用，修后应被 J13 报为 blank。
- `TaleWorlds.SaveSystem/Load/LoadContext.cs:9` — 该行只有一个左花括号，是纯标点，修后应被 J13 报为 punctuation only。
- `TaleWorlds.SaveSystem/Load/LoadContext.cs:10` — 该行是一条 token 注释，修后应被 J13 报为 a comment。

## 真实示例

```csharp
public static ObjectHeaderLoadData TryReadHeader(LoadContext context, int objectId)
{
    if (context == null)
    {
        return null;
    }
    return context.GetObjectWithId(objectId);
}
```

## 参见

- [AmbRefPositive](../AmbRefPositive)
- [AmbRefFailClosed](../AmbRefFailClosed)

## 导航

- [save-system 桶索引](../)
