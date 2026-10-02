---
title: "XmlHelper"
description: "XmlHelper：TaleWorlds.Core 的 public 类；公开成员 6 个（方法 6、属性 0、字段 0）。canonical 桶 core-extra。源文件 TaleWorlds.Core/XmlHelper.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# XmlHelper

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public static class XmlHelper`
**File:** `TaleWorlds.Core/XmlHelper.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Core)

## 概述

XmlHelper 位于 TaleWorlds.Core 模块，源文件 TaleWorlds.Core/XmlHelper.cs。它是一个 public 类，继承链为 XmlHelper。public/protected 成员共 6 个：6 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：XmlHelper 落在 canonical 桶 `core-extra`（命中规则 `rule:TaleWorlds.Core`），命名空间 `TaleWorlds.Core`，继承链 XmlHelper。成员构成以方法为主（方法 6/6，属性 0/6），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Core/XmlHelper.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ReadInt` | `public static int ReadInt(XmlNode node, string str)` | 方法 |
| `ReadInt` | `public static void ReadInt(ref int val, XmlNode node, string str)` | 方法 |
| `ReadFloat` | `public static float ReadFloat(XmlNode node, string str, float defaultValue = 0f)` | 方法 |
| `ReadString` | `public static string ReadString(XmlNode node, string str)` | 方法 |
| `ReadHexCode` | `public static void ReadHexCode(ref uint val, XmlNode node, string str)` | 方法 |
| `ReadBool` | `public static bool ReadBool(XmlNode node, string str)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 ActionSetCode](../ActionSetCode/)
- [同命名空间 AgentAttackType](../AgentAttackType/)
- [同命名空间 AgentControllerType](../AgentControllerType/)
- [同命名空间 AgentData](../AgentData/)
