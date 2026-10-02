---
title: "BasicAreaIndicator"
description: "BasicAreaIndicator：SandBox 的 public 类，继承 AreaMarker；公开成员 6 个（方法 4、属性 1、字段 1）。源文件 SandBox/Objects/AreaMarkers/BasicAreaIndicator.cs。"
---
# BasicAreaIndicator

**Namespace:** `SandBox.Objects.AreaMarkers`
**Module:** `SandBox`
**Type:** `public class BasicAreaIndicator : AreaMarker`
**File:** `SandBox/Objects/AreaMarkers/BasicAreaIndicator.cs`

## 概述

BasicAreaIndicator 位于 SandBox 模块，源文件 SandBox/Objects/AreaMarkers/BasicAreaIndicator.cs。它是一个 public 类，实现/继承 AreaMarker，继承链为 BasicAreaIndicator → AreaMarker。public/protected 成员共 6 个：4 方法、1 属性、1 字段。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：BasicAreaIndicator 是 SandBox 的顶层类型，命名空间与模块目录不同（SandBox.Objects.AreaMarkers），继承链 BasicAreaIndicator → AreaMarker。成员构成以方法为主（方法 4/6，属性 1/6），对外主要以操作入口暴露。继承链上的 AreaMarker 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox/Objects/AreaMarkers/BasicAreaIndicator.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsActive` | `public bool IsActive` | 属性 |
| `OnInit` | `protected override void OnInit()` | 方法 |
| `SetIsActive` | `public void SetIsActive(bool isActive)` | 方法 |
| `SetOverriddenName` | `public void SetOverriddenName(TextObject name)` | 方法 |
| `GetName` | `public override TextObject GetName()` | 方法 |
| `NameStringId` | `public string NameStringId` | 字段 |

## 参见

- [↑ sandbox 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AnimatedBasicAreaIndicator](../AnimatedBasicAreaIndicator)
- [同命名空间 CommonAreaMarker](../CommonAreaMarker)
- [同命名空间 StealthAreaMarker](../StealthAreaMarker)
- [同命名空间 WorkshopAreaMarker](../WorkshopAreaMarker)
