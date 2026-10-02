---
title: "GameApplicationDomainController"
description: "GameApplicationDomainController：TaleWorlds.DotNet 的 public 类，继承 MarshalByRefObject；公开成员 4 个（方法 2、属性 0、字段 0）。源文件 TaleWorlds.DotNet/GameApplicationDomainController.cs。"
---
# GameApplicationDomainController

**Namespace:** `TaleWorlds.DotNet`
**Module:** `TaleWorlds.DotNet`
**Type:** `public class GameApplicationDomainController : MarshalByRefObject`
**File:** `TaleWorlds.DotNet/GameApplicationDomainController.cs`

## 概述

GameApplicationDomainController 位于 TaleWorlds.DotNet 模块，源文件 TaleWorlds.DotNet/GameApplicationDomainController.cs。它是一个 public 类，实现/继承 MarshalByRefObject，继承链为 GameApplicationDomainController → MarshalByRefObject。public/protected 成员共 4 个：2 方法、2 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：GameApplicationDomainController 是 TaleWorlds.DotNet 的顶层类型，命名空间与模块目录一致，继承链 GameApplicationDomainController → MarshalByRefObject。成员构成以方法为主（方法 2/4，属性 0/4），对外主要以操作入口暴露。继承链上的 MarshalByRefObject 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.DotNet/GameApplicationDomainController.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GameApplicationDomainController` | `public GameApplicationDomainController(bool newApplicationDomain)` | 构造函数 |
| `GameApplicationDomainController` | `public GameApplicationDomainController()` | 构造函数 |
| `LoadAsHostedByNative` | `public void LoadAsHostedByNative(IntPtr passManagedInitializeMethodPointer, IntPtr passManagedCallbackMethodPointer, string gameApiDllName, string gameApiTypeName, Platform currentPlatform)` | 方法 |
| `Load` | `public void Load(Delegate passManagedInitializeMethod, Delegate passManagedCallbackMethod, string gameApiDllName, string gameApiTypeName, Platform currentPlatform)` | 方法 |

## 参见

- [↑ dotnet 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 CallbackDebugTool](../CallbackDebugTool)
- [同命名空间 CallbackStringBufferManager](../CallbackStringBufferManager)
- [同命名空间 Controller](../Controller)
- [同命名空间 CustomEngineStructMemberData](../CustomEngineStructMemberData)
