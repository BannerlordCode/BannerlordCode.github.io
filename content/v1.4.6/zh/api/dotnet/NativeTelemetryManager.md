---
title: "NativeTelemetryManager"
description: "NativeTelemetryManager：TaleWorlds.DotNet 的 public 类，继承 ITelemetryManager；公开成员 9 个（方法 7、属性 1、字段 0）。源文件 TaleWorlds.DotNet/NativeTelemetryManager.cs。"
---
# NativeTelemetryManager

**Namespace:** `TaleWorlds.DotNet`
**Module:** `TaleWorlds.DotNet`
**Type:** `public class NativeTelemetryManager : ITelemetryManager`
**File:** `TaleWorlds.DotNet/NativeTelemetryManager.cs`

## 概述

NativeTelemetryManager 位于 TaleWorlds.DotNet 模块，源文件 TaleWorlds.DotNet/NativeTelemetryManager.cs。它是一个 public 类，实现/继承 ITelemetryManager，继承链为 NativeTelemetryManager → ITelemetryManager。public/protected 成员共 9 个：7 方法、1 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：NativeTelemetryManager 是 TaleWorlds.DotNet 的顶层类型，命名空间与模块目录一致，继承链 NativeTelemetryManager → ITelemetryManager。成员构成以方法为主（方法 7/9，属性 1/9），对外主要以操作入口暴露。继承链上的 ITelemetryManager 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.DotNet/NativeTelemetryManager.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `TelemetryLevelMask` | `public static TelemetryLevelMask TelemetryLevelMask` | 属性 |
| `GetTelemetryLevelMask` | `public TelemetryLevelMask GetTelemetryLevelMask()` | 方法 |
| `NativeTelemetryManager` | `public NativeTelemetryManager()` | 构造函数 |
| `StartTelemetryConnection` | `public void StartTelemetryConnection(bool showErrors)` | 方法 |
| `StopTelemetryConnection` | `public void StopTelemetryConnection()` | 方法 |
| `BeginTelemetryScopeInternal` | `public void BeginTelemetryScopeInternal(TelemetryLevelMask levelMask, string scopeName)` | 方法 |
| `EndTelemetryScopeInternal` | `public void EndTelemetryScopeInternal()` | 方法 |
| `BeginTelemetryScopeBaseLevelInternal` | `public void BeginTelemetryScopeBaseLevelInternal(TelemetryLevelMask levelMask, string scopeName)` | 方法 |
| `EndTelemetryScopeBaseLevelInternal` | `public void EndTelemetryScopeBaseLevelInternal()` | 方法 |

## 参见

- [↑ dotnet 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 CallbackDebugTool](../CallbackDebugTool)
- [同命名空间 CallbackStringBufferManager](../CallbackStringBufferManager)
- [同命名空间 Controller](../Controller)
- [同命名空间 CustomEngineStructMemberData](../CustomEngineStructMemberData)
