---
title: "RenderTargetComponent"
description: "RenderTargetComponent：TaleWorlds.Engine 的 public 类，继承 DotNetObject；公开成员 4 个（方法 1、属性 2、字段 0）。源文件 TaleWorlds.Engine/RenderTargetComponent.cs。"
---
# RenderTargetComponent

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public sealed class RenderTargetComponent : DotNetObject`
**File:** `TaleWorlds.Engine/RenderTargetComponent.cs`

## 概述

RenderTargetComponent 位于 TaleWorlds.Engine 模块，源文件 TaleWorlds.Engine/RenderTargetComponent.cs。它是一个 public 类（sealed），实现/继承 DotNetObject，继承链为 RenderTargetComponent → DotNetObject。public/protected 成员共 4 个：1 方法、2 属性、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：RenderTargetComponent 是 TaleWorlds.Engine 的顶层类型，命名空间与模块目录一致，继承链 RenderTargetComponent → DotNetObject。成员构成以属性为主（属性 2/4，方法 1/4），对外主要以状态读取接口暴露。继承链上的 DotNetObject 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Engine/RenderTargetComponent.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `RenderTarget` | `public Texture RenderTarget` | 属性 |
| `UserData` | `public object UserData` | 属性 |
| `TextureUpdateEventHandler` | `public delegate void TextureUpdateEventHandler(Texture sender, EventArgs e);` | 方法 |
| `TextureUpdateEventHandler` | `public delegate void TextureUpdateEventHandler(Texture sender, EventArgs e)` | 嵌套类型 |

## 参见

- [↑ engine 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AnimResult](../AnimResult)
- [同命名空间 ApplicationHealthChecker](../ApplicationHealthChecker)
- [同命名空间 AsyncTask](../AsyncTask)
- [同命名空间 BillboardType](../BillboardType)
