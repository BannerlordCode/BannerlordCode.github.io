---
title: "Shader"
description: "Shader：TaleWorlds.Engine 的 public 类，继承 Resource；公开成员 3 个（方法 2、属性 1、字段 0）。源文件 TaleWorlds.Engine/Shader.cs。"
---
# Shader

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public sealed class Shader : Resource`
**File:** `TaleWorlds.Engine/Shader.cs`

## 概述

Shader 位于 TaleWorlds.Engine 模块，源文件 TaleWorlds.Engine/Shader.cs。它是一个 public 类（sealed），实现/继承 Resource，继承链为 Shader → Resource → NativeObject。public/protected 成员共 3 个：2 方法、1 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：Shader 是 TaleWorlds.Engine 的顶层类型，命名空间与模块目录一致，继承链 Shader → Resource → NativeObject。成员构成以方法为主（方法 2/3，属性 1/3），对外主要以操作入口暴露。继承链上的 NativeObject 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Engine/Shader.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetFromResource` | `public static Shader GetFromResource(string shaderName)` | 方法 |
| `Name` | `public string Name` | 属性 |
| `GetMaterialShaderFlagMask` | `public ulong GetMaterialShaderFlagMask(string flagName, bool showErrors = true)` | 方法 |

## 参见

- [↑ engine 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 Resource](../Resource)
- [同命名空间 AnimResult](../AnimResult)
- [同命名空间 ApplicationHealthChecker](../ApplicationHealthChecker)
- [同命名空间 AsyncTask](../AsyncTask)
- [同命名空间 BillboardType](../BillboardType)
