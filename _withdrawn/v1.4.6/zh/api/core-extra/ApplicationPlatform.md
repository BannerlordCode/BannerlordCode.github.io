---
title: "ApplicationPlatform"
description: "ApplicationPlatform：TaleWorlds.Library 的 public 类；公开成员 6 个（方法 3、属性 3、字段 0）。canonical 桶 core-extra。源文件 TaleWorlds.Library/ApplicationPlatform.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ApplicationPlatform

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public static class ApplicationPlatform`
**File:** `TaleWorlds.Library/ApplicationPlatform.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Library)

## 概述

ApplicationPlatform 位于 TaleWorlds.Library 模块，源文件 TaleWorlds.Library/ApplicationPlatform.cs。它是一个 public 类，继承链为 ApplicationPlatform。public/protected 成员共 6 个：3 方法、3 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ApplicationPlatform 落在 canonical 桶 `core-extra`（命中规则 `rule:TaleWorlds.Library`），命名空间 `TaleWorlds.Library`，继承链 ApplicationPlatform。成员构成以方法为主（方法 3/6，属性 3/6），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Library/ApplicationPlatform.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CurrentEngine` | `public static EngineType CurrentEngine` | 属性 |
| `CurrentPlatform` | `public static Platform CurrentPlatform` | 属性 |
| `CurrentRuntimeLibrary` | `public static Runtime CurrentRuntimeLibrary` | 属性 |
| `Initialize` | `public static void Initialize(EngineType engineType, Platform currentPlatform, Runtime currentRuntimeLibrary)` | 方法 |
| `IsPlatformWindows` | `public static bool IsPlatformWindows()` | 方法 |
| `IsPlatformConsole` | `public static bool IsPlatformConsole()` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 AmbientInformation](../AmbientInformation/)
- [同命名空间 ApplicationVersion](../ApplicationVersion/)
- [同命名空间 ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter/)
- [同命名空间 ApplicationVersionType](../ApplicationVersionType/)
