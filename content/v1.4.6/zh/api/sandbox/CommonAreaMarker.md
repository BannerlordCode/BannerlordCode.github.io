---
title: "CommonAreaMarker"
description: "CommonAreaMarker：SandBox 的 public 类，继承 AreaMarker；公开成员 7 个（方法 4、属性 2、字段 1）。源文件 SandBox/Objects/AreaMarkers/CommonAreaMarker.cs。"
---
# CommonAreaMarker

**Namespace:** `SandBox.Objects.AreaMarkers`
**Module:** `SandBox`
**Type:** `public class CommonAreaMarker : AreaMarker`
**File:** `SandBox/Objects/AreaMarkers/CommonAreaMarker.cs`

## 概述

CommonAreaMarker 位于 SandBox 模块，源文件 SandBox/Objects/AreaMarkers/CommonAreaMarker.cs。它是一个 public 类，实现/继承 AreaMarker，继承链为 CommonAreaMarker → AreaMarker。public/protected 成员共 7 个：4 方法、2 属性、1 字段。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：CommonAreaMarker 是 SandBox 的顶层类型，命名空间与模块目录不同（SandBox.Objects.AreaMarkers），继承链 CommonAreaMarker → AreaMarker。成员构成以方法为主（方法 4/7，属性 2/7），对外主要以操作入口暴露。继承链上的 AreaMarker 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox/Objects/AreaMarkers/CommonAreaMarker.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `List` | `public List<MatrixFrame>HiddenSpawnFrames` | 属性 |
| `Tag` | `public override string Tag` | 属性 |
| `OnInit` | `protected override void OnInit()` | 方法 |
| `List` | `public override List<UsableMachine>GetUsableMachinesInRange(string excludeTag = null)` | 方法 |
| `GetAlley` | `public Alley GetAlley()` | 方法 |
| `GetName` | `public override TextObject GetName()` | 方法 |
| `Type` | `public string Type` | 字段 |

## 参见

- [↑ sandbox 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AnimatedBasicAreaIndicator](../AnimatedBasicAreaIndicator)
- [同命名空间 BasicAreaIndicator](../BasicAreaIndicator)
- [同命名空间 StealthAreaMarker](../StealthAreaMarker)
- [同命名空间 WorkshopAreaMarker](../WorkshopAreaMarker)
