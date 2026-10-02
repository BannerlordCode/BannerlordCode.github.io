---
title: "NativeString"
description: "NativeString：TaleWorlds.DotNet 的 public 类，继承 NativeObject；公开成员 3 个（方法 3、属性 0、字段 0）。源文件 TaleWorlds.DotNet/NativeString.cs。"
---
# NativeString

**Namespace:** `TaleWorlds.DotNet`
**Module:** `TaleWorlds.DotNet`
**Type:** `public sealed class NativeString : NativeObject`
**File:** `TaleWorlds.DotNet/NativeString.cs`

## 概述

NativeString 位于 TaleWorlds.DotNet 模块，源文件 TaleWorlds.DotNet/NativeString.cs。它是一个 public 类（sealed），实现/继承 NativeObject，继承链为 NativeString → NativeObject。public/protected 成员共 3 个：3 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：NativeString 是 TaleWorlds.DotNet 的顶层类型，命名空间与模块目录一致，继承链 NativeString → NativeObject。成员构成以方法为主（方法 3/3，属性 0/3），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.DotNet/NativeString.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Create` | `public static NativeString Create()` | 方法 |
| `GetString` | `public string GetString()` | 方法 |
| `SetString` | `public void SetString(string newString)` | 方法 |

## 参见

- [↑ dotnet 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 NativeObject](../NativeObject)
- [同命名空间 CallbackDebugTool](../CallbackDebugTool)
- [同命名空间 CallbackStringBufferManager](../CallbackStringBufferManager)
- [同命名空间 Controller](../Controller)
- [同命名空间 CustomEngineStructMemberData](../CustomEngineStructMemberData)
