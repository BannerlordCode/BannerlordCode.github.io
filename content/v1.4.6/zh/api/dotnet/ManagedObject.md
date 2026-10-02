---
title: "ManagedObject"
description: "ManagedObject：TaleWorlds.DotNet 的 public 类；公开成员 4 个（方法 3、属性 0、字段 0）。源文件 TaleWorlds.DotNet/ManagedObject.cs。"
---
# ManagedObject

**Namespace:** `TaleWorlds.DotNet`
**Module:** `TaleWorlds.DotNet`
**Type:** `public abstract class ManagedObject`
**File:** `TaleWorlds.DotNet/ManagedObject.cs`

## 概述

ManagedObject 位于 TaleWorlds.DotNet 模块，源文件 TaleWorlds.DotNet/ManagedObject.cs。它是一个 public 类（abstract），继承链为 ManagedObject。public/protected 成员共 4 个：3 方法、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ManagedObject 是 TaleWorlds.DotNet 的顶层类型，命名空间与模块目录一致，继承链 ManagedObject。成员构成以方法为主（方法 3/4，属性 0/4），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.DotNet/ManagedObject.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `AddUnmanagedMemoryPressure` | `protected void AddUnmanagedMemoryPressure(int size)` | 方法 |
| `ManagedObject` | `protected ManagedObject(UIntPtr ptr, bool createManagedObjectOwner)` | 构造函数 |
| `GetManagedId` | `public int GetManagedId()` | 方法 |
| `GetHashCode` | `public override int GetHashCode()` | 方法 |

## 参见

- [↑ dotnet 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 CallbackDebugTool](../CallbackDebugTool)
- [同命名空间 CallbackStringBufferManager](../CallbackStringBufferManager)
- [同命名空间 Controller](../Controller)
- [同命名空间 CustomEngineStructMemberData](../CustomEngineStructMemberData)
