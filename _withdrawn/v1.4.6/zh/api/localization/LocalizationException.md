---
title: "LocalizationException"
description: "LocalizationException：TaleWorlds.Localization 的 public 类，继承 Exception；公开成员 3 个（方法 0、属性 0、字段 0）。canonical 桶 localization。源文件 TaleWorlds.Localization/LocalizationException.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# LocalizationException

**Namespace:** `TaleWorlds.Localization`
**Module:** `TaleWorlds.Localization`
**Type:** `public class LocalizationException : Exception`
**File:** `TaleWorlds.Localization/LocalizationException.cs`
**Bucket:** `localization` (rule:TaleWorlds.Localization)

## 概述

LocalizationException 位于 TaleWorlds.Localization 模块，源文件 TaleWorlds.Localization/LocalizationException.cs。它是一个 public 类，实现/继承 Exception，继承链为 LocalizationException → Exception。public/protected 成员共 3 个：3 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：LocalizationException 落在 canonical 桶 `localization`（命中规则 `rule:TaleWorlds.Localization`），命名空间 `TaleWorlds.Localization`，继承链 LocalizationException → Exception。成员构成以方法为主（方法 0/3，属性 0/3），对外主要以操作入口暴露。继承链上的 Exception 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Localization/LocalizationException.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `LocalizationException` | `public LocalizationException()` | 构造函数 |
| `LocalizationException` | `public LocalizationException(string message) : base(message)` | 构造函数 |
| `LocalizationException` | `public LocalizationException(string message, Exception inner) : base(message, inner)` | 构造函数 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 DateRange](../DateRange/)
- [同命名空间 LocalizedTextManager](../LocalizedTextManager/)
- [同命名空间 LocalizedVoiceManager](../LocalizedVoiceManager/)
- [同命名空间 MBTextManager](../MBTextManager/)
