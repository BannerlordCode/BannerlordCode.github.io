---
title: "VoiceObject"
description: "VoiceObject：TaleWorlds.Localization 的 public 类；公开成员 3 个（方法 2、属性 1、字段 0）。源文件 TaleWorlds.Localization/VoiceObject.cs。"
---
# VoiceObject

**Namespace:** `TaleWorlds.Localization`
**Module:** `TaleWorlds.Localization`
**Type:** `public class VoiceObject`
**File:** `TaleWorlds.Localization/VoiceObject.cs`

## 概述

VoiceObject 位于 TaleWorlds.Localization 模块，源文件 TaleWorlds.Localization/VoiceObject.cs。它是一个 public 类，继承链为 VoiceObject。public/protected 成员共 3 个：2 方法、1 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：VoiceObject 是 TaleWorlds.Localization 的顶层类型，命名空间与模块目录一致，继承链 VoiceObject。成员构成以方法为主（方法 2/3，属性 1/3），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Localization/VoiceObject.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MBReadOnlyList` | `public MBReadOnlyList<string>VoicePaths` | 属性 |
| `AddVoicePaths` | `public void AddVoicePaths(XmlNode node, string modulePath)` | 方法 |
| `Deserialize` | `public static VoiceObject Deserialize(XmlNode node, string modulePath)` | 方法 |

## 参见

- [↑ localization 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 DateRange](../DateRange)
- [同命名空间 LocalizationException](../LocalizationException)
- [同命名空间 LocalizedTextManager](../LocalizedTextManager)
- [同命名空间 LocalizedVoiceManager](../LocalizedVoiceManager)
