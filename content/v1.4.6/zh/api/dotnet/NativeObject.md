---
title: "NativeObject"
description: "NativeObject：TaleWorlds.DotNet 的 public 类；公开成员 7 个（方法 6、属性 1、字段 0）。源文件 TaleWorlds.DotNet/NativeObject.cs。"
---
# NativeObject

**Namespace:** `TaleWorlds.DotNet`
**Module:** `TaleWorlds.DotNet`
**Type:** `public abstract class NativeObject`
**File:** `TaleWorlds.DotNet/NativeObject.cs`

## 概述

NativeObject 位于 TaleWorlds.DotNet 模块，源文件 TaleWorlds.DotNet/NativeObject.cs。它是一个 public 类（abstract），继承链为 NativeObject。public/protected 成员共 7 个：6 方法、1 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：NativeObject 是 TaleWorlds.DotNet 的顶层类型，命名空间与模块目录一致，继承链 NativeObject。成员构成以方法为主（方法 6/7，属性 1/7），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.DotNet/NativeObject.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Pointer` | `public UIntPtr Pointer` | 属性 |
| `ManualInvalidate` | `public void ManualInvalidate()` | 方法 |
| `AddUnmanagedMemoryPressure` | `protected void AddUnmanagedMemoryPressure(int size)` | 方法 |
| `GetHashCode` | `public override int GetHashCode()` | 方法 |
| `Equals` | `public override bool Equals(object obj)` | 方法 |
| `operator` | `public static bool operator` | 运算符 |
| `!` | `public static bool operator !` | 运算符 |

## 参见

- [↑ dotnet 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 CallbackDebugTool](../CallbackDebugTool)
- [同命名空间 CallbackStringBufferManager](../CallbackStringBufferManager)
- [同命名空间 Controller](../Controller)
- [同命名空间 CustomEngineStructMemberData](../CustomEngineStructMemberData)
