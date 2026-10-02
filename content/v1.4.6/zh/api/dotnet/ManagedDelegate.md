---
title: "ManagedDelegate"
description: "ManagedDelegate：TaleWorlds.DotNet 的 public 类，继承 DotNetObject；公开成员 4 个（方法 2、属性 1、字段 0）。源文件 TaleWorlds.DotNet/ManagedDelegate.cs。"
---
# ManagedDelegate

**Namespace:** `TaleWorlds.DotNet`
**Module:** `TaleWorlds.DotNet`
**Type:** `public class ManagedDelegate : DotNetObject`
**File:** `TaleWorlds.DotNet/ManagedDelegate.cs`

## 概述

ManagedDelegate 位于 TaleWorlds.DotNet 模块，源文件 TaleWorlds.DotNet/ManagedDelegate.cs。它是一个 public 类，实现/继承 DotNetObject，继承链为 ManagedDelegate → DotNetObject。public/protected 成员共 4 个：2 方法、1 属性、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ManagedDelegate 是 TaleWorlds.DotNet 的顶层类型，命名空间与模块目录一致，继承链 ManagedDelegate → DotNetObject。成员构成以方法为主（方法 2/4，属性 1/4），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.DotNet/ManagedDelegate.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Instance` | `public ManagedDelegate.DelegateDefinition Instance` | 属性 |
| `InvokeAux` | `public void InvokeAux()` | 方法 |
| `DelegateDefinition` | `public delegate void DelegateDefinition();` | 方法 |
| `DelegateDefinition` | `public delegate void DelegateDefinition()` | 嵌套类型 |

## 参见

- [↑ dotnet 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 DotNetObject](../DotNetObject)
- [同命名空间 CallbackDebugTool](../CallbackDebugTool)
- [同命名空间 CallbackStringBufferManager](../CallbackStringBufferManager)
- [同命名空间 Controller](../Controller)
- [同命名空间 CustomEngineStructMemberData](../CustomEngineStructMemberData)
