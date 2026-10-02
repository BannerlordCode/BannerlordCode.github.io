---
title: "Logger"
description: "Logger：TaleWorlds.Library 的 public 类；公开成员 7 个（方法 3、属性 1、字段 1）。源文件 TaleWorlds.Library/Logger.cs。"
---
# Logger

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public class Logger`
**File:** `TaleWorlds.Library/Logger.cs`

## 概述

Logger 位于 TaleWorlds.Library 模块，源文件 TaleWorlds.Library/Logger.cs。它是一个 public 类，继承链为 Logger。public/protected 成员共 7 个：3 方法、1 属性、1 字段、2 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：Logger 是 TaleWorlds.Library 的顶层类型，命名空间与模块目录一致，继承链 Logger。成员构成以方法为主（方法 3/7，属性 1/7），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Library/Logger.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `LogOnlyErrors` | `public bool LogOnlyErrors` | 属性 |
| `Logger` | `public Logger(string name) : this(name, false, false, false, 1, -1, false)` | 构造函数 |
| `Logger` | `public Logger(string name, bool writeErrorsToDifferentFile, bool logOnlyErrors, bool doNotUseProcessId, int numFiles = 1, int totalFileSize = -1, bool overwrite = false)` | 构造函数 |
| `Print` | `public void Print(string log, HTMLDebugCategory debugInfo = HTMLDebugCategory.General)` | 方法 |
| `Print` | `public void Print(string log, HTMLDebugCategory debugInfo, bool printOnGlobal)` | 方法 |
| `FinishAndCloseAll` | `public static void FinishAndCloseAll()` | 方法 |
| `LogsFolder` | `public static string LogsFolder` | 字段 |

## 参见

- [↑ library 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AmbientInformation](../AmbientInformation)
- [同命名空间 ApplicationPlatform](../ApplicationPlatform)
- [同命名空间 ApplicationVersion](../ApplicationVersion)
- [同命名空间 ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter)
