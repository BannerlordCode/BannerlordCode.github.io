---
title: "DiamondDebugManager"
description: "DiamondDebugManager：TaleWorlds.Library 的 public 类，继承 IDebugManager；公开成员 6 个（方法 2、属性 1、字段 0）。源文件 TaleWorlds.Library/DiamondDebugManager.cs。"
---
# DiamondDebugManager

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public class DiamondDebugManager : IDebugManager`
**File:** `TaleWorlds.Library/DiamondDebugManager.cs`

## 概述

DiamondDebugManager 位于 TaleWorlds.Library 模块，源文件 TaleWorlds.Library/DiamondDebugManager.cs。它是一个 public 类，实现/继承 IDebugManager，继承链为 DiamondDebugManager → IDebugManager。public/protected 成员共 6 个：2 方法、1 属性、2 构造函数、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：DiamondDebugManager 是 TaleWorlds.Library 的顶层类型，命名空间与模块目录一致，继承链 DiamondDebugManager → IDebugManager。成员构成以方法为主（方法 2/6，属性 1/6），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Library/DiamondDebugManager.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `DiamondDebugManager` | `public DiamondDebugManager(ParameterContainer parameters)` | 构造函数 |
| `DiamondDebugManager` | `public DiamondDebugManager()` | 构造函数 |
| `GetLogLevel` | `public int GetLogLevel()` | 方法 |
| `PrintMessage` | `protected void PrintMessage(string message, DiamondDebugManager.DiamondDebugCategory debugCategory)` | 方法 |
| `DiamondDebugCategory` | `public enum DiamondDebugCategory` | 属性 |
| `DiamondDebugCategory` | `public enum DiamondDebugCategory` | 嵌套类型 |

## 参见

- [↑ library 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 IDebugManager](../IDebugManager)
- [同命名空间 AmbientInformation](../AmbientInformation)
- [同命名空间 ApplicationPlatform](../ApplicationPlatform)
- [同命名空间 ApplicationVersion](../ApplicationVersion)
- [同命名空间 ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter)
