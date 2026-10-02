---
title: "EngineMethod"
description: "EngineMethod：TaleWorlds.Library 的 public 类，继承 Attribute；公开成员 5 个（方法 0、属性 4、字段 0）。源文件 TaleWorlds.Library/EngineMethod.cs。"
---
# EngineMethod

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public class EngineMethod : Attribute`
**File:** `TaleWorlds.Library/EngineMethod.cs`

## 概述

EngineMethod 位于 TaleWorlds.Library 模块，源文件 TaleWorlds.Library/EngineMethod.cs。它是一个 public 类，实现/继承 Attribute，继承链为 EngineMethod → Attribute。public/protected 成员共 5 个：4 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：EngineMethod 是 TaleWorlds.Library 的顶层类型，命名空间与模块目录一致，继承链 EngineMethod → Attribute。成员构成以属性为主（属性 4/5，方法 0/5），对外主要以状态读取接口暴露。继承链上的 Attribute 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Library/EngineMethod.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `EngineMethod` | `public EngineMethod(string engineMethodName, bool activateTelemetryProfiling = false, string[]conditionals = null, bool isMonoInline = false)` | 构造函数 |
| `EngineMethodName` | `public string EngineMethodName` | 属性 |
| `ActivateTelemetryProfiling` | `public bool ActivateTelemetryProfiling` | 属性 |
| `string[]Conditionals` | `public string[]Conditionals` | 属性 |
| `IsMonoInline` | `public bool IsMonoInline` | 属性 |

## 参见

- [↑ library 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AmbientInformation](../AmbientInformation)
- [同命名空间 ApplicationPlatform](../ApplicationPlatform)
- [同命名空间 ApplicationVersion](../ApplicationVersion)
- [同命名空间 ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter)
