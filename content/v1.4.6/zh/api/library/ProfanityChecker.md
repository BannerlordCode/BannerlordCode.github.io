---
title: "ProfanityChecker"
description: "ProfanityChecker：TaleWorlds.Library 的 public 类；公开成员 6 个（方法 3、属性 1、字段 0）。源文件 TaleWorlds.Library/ProfanityChecker.cs。"
---
# ProfanityChecker

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public class ProfanityChecker`
**File:** `TaleWorlds.Library/ProfanityChecker.cs`

## 概述

ProfanityChecker 位于 TaleWorlds.Library 模块，源文件 TaleWorlds.Library/ProfanityChecker.cs。它是一个 public 类，继承链为 ProfanityChecker。public/protected 成员共 6 个：3 方法、1 属性、1 构造函数、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ProfanityChecker 是 TaleWorlds.Library 的顶层类型，命名空间与模块目录一致，继承链 ProfanityChecker。成员构成以方法为主（方法 3/6，属性 1/6），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Library/ProfanityChecker.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ProfanityChecker` | `public ProfanityChecker(string[]profanityList, string[]allowList)` | 构造函数 |
| `IsProfane` | `public bool IsProfane(string word)` | 方法 |
| `ContainsProfanity` | `public bool ContainsProfanity(string text, ProfanityChecker.ProfanityChechkerType checkType)` | 方法 |
| `CensorText` | `public string CensorText(string text)` | 方法 |
| `ProfanityChechkerType` | `public enum ProfanityChechkerType` | 属性 |
| `ProfanityChechkerType` | `public enum ProfanityChechkerType` | 嵌套类型 |

## 参见

- [↑ library 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AmbientInformation](../AmbientInformation)
- [同命名空间 ApplicationPlatform](../ApplicationPlatform)
- [同命名空间 ApplicationVersion](../ApplicationVersion)
- [同命名空间 ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter)
