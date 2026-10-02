---
title: "TestCommonBase"
description: "TestCommonBase：TaleWorlds.Library 的 public 类；公开成员 14 个（方法 11、属性 1、字段 1）。源文件 TaleWorlds.Library/TestCommonBase.cs。"
---
# TestCommonBase

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public abstract class TestCommonBase`
**File:** `TaleWorlds.Library/TestCommonBase.cs`

## 概述

TestCommonBase 位于 TaleWorlds.Library 模块，源文件 TaleWorlds.Library/TestCommonBase.cs。它是一个 public 类（abstract），继承链为 TestCommonBase。public/protected 成员共 14 个：11 方法、1 属性、1 字段、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：TestCommonBase 是 TaleWorlds.Library 的顶层类型，命名空间与模块目录一致，继承链 TestCommonBase。成员构成以方法为主（方法 11/14，属性 1/14），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Library/TestCommonBase.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Tick` | `public abstract void Tick();` | 方法 |
| `BaseInstance` | `public static TestCommonBase BaseInstance` | 属性 |
| `StartTimeoutTimer` | `public void StartTimeoutTimer()` | 方法 |
| `ToggleTimeoutTimer` | `public void ToggleTimeoutTimer()` | 方法 |
| `CheckTimeoutTimer` | `public bool CheckTimeoutTimer()` | 方法 |
| `TestCommonBase` | `protected TestCommonBase()` | 构造函数 |
| `GetGameStatus` | `public virtual string GetGameStatus()` | 方法 |
| `WaitFor` | `public void WaitFor(double seconds)` | 方法 |
| `WaitUntil` | `public virtual async Task WaitUntil(Func<bool>func)` | 方法 |
| `WaitForAsync` | `public Task WaitForAsync(double seconds, Random random)` | 方法 |
| `WaitForAsync` | `public Task WaitForAsync(double seconds)` | 方法 |
| `GetAttachmentsFolderPath` | `public static string GetAttachmentsFolderPath()` | 方法 |
| `OnFinalize` | `public virtual void OnFinalize()` | 方法 |
| `TestLock` | `public object TestLock` | 字段 |

## 参见

- [↑ library 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AmbientInformation](../AmbientInformation)
- [同命名空间 ApplicationPlatform](../ApplicationPlatform)
- [同命名空间 ApplicationVersion](../ApplicationVersion)
- [同命名空间 ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter)
