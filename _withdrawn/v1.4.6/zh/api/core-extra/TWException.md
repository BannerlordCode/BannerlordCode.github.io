---
title: "TWException"
description: "TWException：TaleWorlds.Library 的 public 类，继承 ApplicationException；公开成员 4 个（方法 0、属性 0、字段 0）。canonical 桶 core-extra。源文件 TaleWorlds.Library/TWException.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# TWException

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public class TWException : ApplicationException`
**File:** `TaleWorlds.Library/TWException.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Library)

## 概述

TWException 位于 TaleWorlds.Library 模块，源文件 TaleWorlds.Library/TWException.cs。它是一个 public 类，实现/继承 ApplicationException，继承链为 TWException → ApplicationException。public/protected 成员共 4 个：4 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：TWException 落在 canonical 桶 `core-extra`（命中规则 `rule:TaleWorlds.Library`），命名空间 `TaleWorlds.Library`，继承链 TWException → ApplicationException。成员构成以方法为主（方法 0/4，属性 0/4），对外主要以操作入口暴露。继承链上的 ApplicationException 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Library/TWException.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `TWException` | `public TWException(string message, Exception innerException) : base(message, innerException)` | 构造函数 |
| `TWException` | `public TWException(string message) : base(message)` | 构造函数 |
| `TWException` | `public TWException()` | 构造函数 |
| `TWException` | `public TWException(SerializationInfo info, StreamingContext context) : base(info, context)` | 构造函数 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 AmbientInformation](../AmbientInformation/)
- [同命名空间 ApplicationPlatform](../ApplicationPlatform/)
- [同命名空间 ApplicationVersion](../ApplicationVersion/)
- [同命名空间 ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter/)
