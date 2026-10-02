---
title: "Highlights"
description: "Highlights：TaleWorlds.Engine 的 public 类；公开成员 12 个（方法 8、属性 2、字段 0）。canonical 桶 engine。源文件 TaleWorlds.Engine/Highlights.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# Highlights

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public class Highlights`
**File:** `TaleWorlds.Engine/Highlights.cs`
**Bucket:** `engine` (rule:TaleWorlds.Engine)

## 概述

Highlights 位于 TaleWorlds.Engine 模块，源文件 TaleWorlds.Engine/Highlights.cs。它是一个 public 类，继承链为 Highlights。public/protected 成员共 12 个：8 方法、2 属性、2 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：Highlights 落在 canonical 桶 `engine`（命中规则 `rule:TaleWorlds.Engine`），命名空间 `TaleWorlds.Engine`，继承链 Highlights。成员构成以方法为主（方法 8/12，属性 2/12），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Engine/Highlights.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Initialize` | `public static void Initialize()` | 方法 |
| `OpenGroup` | `public static void OpenGroup(string id)` | 方法 |
| `CloseGroup` | `public static void CloseGroup(string id, bool destroy = false)` | 方法 |
| `SaveScreenshot` | `public static void SaveScreenshot(string highlightId, string groupId)` | 方法 |
| `SaveVideo` | `public static void SaveVideo(string highlightId, string groupId, int startDelta, int endDelta)` | 方法 |
| `OpenSummary` | `public static void OpenSummary(List<string>groups)` | 方法 |
| `AddHighlight` | `public static void AddHighlight(string id, string name)` | 方法 |
| `RemoveHighlight` | `public static void RemoveHighlight(string id)` | 方法 |
| `Significance` | `public enum Significance` | 属性 |
| `Type` | `public enum Type` | 属性 |
| `Significance` | `public enum Significance` | 嵌套类型 |
| `Type` | `public enum Type` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 AnimResult](../AnimResult/)
- [同命名空间 ApplicationHealthChecker](../ApplicationHealthChecker/)
- [同命名空间 AsyncTask](../AsyncTask/)
- [同命名空间 BillboardType](../BillboardType/)
