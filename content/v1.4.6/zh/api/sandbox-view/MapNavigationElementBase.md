---
title: "MapNavigationElementBase"
description: "MapNavigationElementBase：SandBox.View 的 public 类，继承 INavigationElement；公开成员 15 个（方法 6、属性 8、字段 0）。源文件 SandBox.View/Map/Navigation/MapNavigationElementBase.cs。"
---
# MapNavigationElementBase

**Namespace:** `SandBox.View.Map.Navigation`
**Module:** `SandBox.View`
**Type:** `public abstract class MapNavigationElementBase : INavigationElement`
**File:** `SandBox.View/Map/Navigation/MapNavigationElementBase.cs`

## 概述

MapNavigationElementBase 位于 SandBox.View 模块，源文件 SandBox.View/Map/Navigation/MapNavigationElementBase.cs。它是一个 public 类（abstract），实现/继承 INavigationElement，继承链为 MapNavigationElementBase → INavigationElement。public/protected 成员共 15 个：6 方法、8 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MapNavigationElementBase 是 SandBox.View 的顶层类型，命名空间与模块目录不同（SandBox.View.Map.Navigation），继承链 MapNavigationElementBase → INavigationElement。成员构成以属性为主（属性 8/15，方法 6/15），对外主要以状态读取接口暴露。继承链上的 INavigationElement 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.View/Map/Navigation/MapNavigationElementBase.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Permission` | `public NavigationPermissionItem Permission` | 属性 |
| `Tooltip` | `public TextObject Tooltip` | 属性 |
| `AlertTooltip` | `public TextObject AlertTooltip` | 属性 |
| `IsActive` | `public abstract bool IsActive` | 属性 |
| `IsLockingNavigation` | `public abstract bool IsLockingNavigation` | 属性 |
| `HasAlert` | `public abstract bool HasAlert` | 属性 |
| `StringId` | `public abstract string StringId` | 属性 |
| `OpenView` | `public abstract void OpenView();` | 方法 |
| `OpenView` | `public abstract void OpenView(params object[]parameters);` | 方法 |
| `GoToLink` | `public abstract void GoToLink();` | 方法 |
| `_game` | `protected Game _game` | 属性 |
| `MapNavigationElementBase` | `public MapNavigationElementBase(MapNavigationHandler handler)` | 构造函数 |
| `GetPermission` | `protected abstract NavigationPermissionItem GetPermission();` | 方法 |
| `GetTooltip` | `protected abstract TextObject GetTooltip();` | 方法 |
| `GetAlertTooltip` | `protected abstract TextObject GetAlertTooltip();` | 方法 |

## 参见

- [↑ sandbox-view 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 MapNavigationHandler](../MapNavigationHandler)
- [同命名空间 MapNavigationHelper](../MapNavigationHelper)
