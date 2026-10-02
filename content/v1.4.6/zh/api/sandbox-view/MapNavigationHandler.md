---
title: "MapNavigationHandler"
description: "MapNavigationHandler：SandBox.View 的 public 类，继承 INavigationHandler；公开成员 7 个（方法 4、属性 2、字段 0）。源文件 SandBox.View/Map/Navigation/MapNavigationHandler.cs。"
---
# MapNavigationHandler

**Namespace:** `SandBox.View.Map.Navigation`
**Module:** `SandBox.View`
**Type:** `public class MapNavigationHandler : INavigationHandler`
**File:** `SandBox.View/Map/Navigation/MapNavigationHandler.cs`

## 概述

MapNavigationHandler 位于 SandBox.View 模块，源文件 SandBox.View/Map/Navigation/MapNavigationHandler.cs。它是一个 public 类，实现/继承 INavigationHandler，继承链为 MapNavigationHandler → INavigationHandler。public/protected 成员共 7 个：4 方法、2 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MapNavigationHandler 是 SandBox.View 的顶层类型，命名空间与模块目录不同（SandBox.View.Map.Navigation），继承链 MapNavigationHandler → INavigationHandler。成员构成以方法为主（方法 4/7，属性 2/7），对外主要以操作入口暴露。继承链上的 INavigationHandler 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.View/Map/Navigation/MapNavigationHandler.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `INavigationElement[]GetElements` | `public INavigationElement[]GetElements()` | 方法 |
| `IsNavigationLocked` | `public bool IsNavigationLocked` | 属性 |
| `IsEscapeMenuActive` | `public bool IsEscapeMenuActive` | 属性 |
| `MapNavigationHandler` | `public MapNavigationHandler()` | 构造函数 |
| `IsAnyElementActive` | `public bool IsAnyElementActive()` | 方法 |
| `INavigationElement[]OnCreateElements` | `protected virtual INavigationElement[]OnCreateElements()` | 方法 |
| `GetElement` | `public INavigationElement GetElement(string id)` | 方法 |

## 参见

- [↑ sandbox-view 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 MapNavigationElementBase](../MapNavigationElementBase)
- [同命名空间 MapNavigationHelper](../MapNavigationHelper)
