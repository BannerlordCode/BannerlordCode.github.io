---
title: "INavigationHandler"
description: "INavigationHandler：TaleWorlds.CampaignSystem 的 public 接口；公开成员 4 个（方法 3、属性 1、字段 0）。源文件 TaleWorlds.CampaignSystem/INavigationHandler.cs。"
---
# INavigationHandler

**Namespace:** `TaleWorlds.CampaignSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public interface INavigationHandler`
**File:** `TaleWorlds.CampaignSystem/INavigationHandler.cs`

## 概述

INavigationHandler 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/INavigationHandler.cs。它是一个 public 接口，继承链为 INavigationHandler。public/protected 成员共 4 个：3 方法、1 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：INavigationHandler 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录一致，继承链 INavigationHandler。成员构成以方法为主（方法 3/4，属性 1/4），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/INavigationHandler.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsNavigationLocked` | `bool IsNavigationLocked` | 属性 |
| `INavigationElement[]GetElements` | `INavigationElement[]GetElements();` | 方法 |
| `GetElement` | `INavigationElement GetElement(string id);` | 方法 |
| `IsAnyElementActive` | `bool IsAnyElementActive();` | 方法 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionNotes](../ActionNotes)
- [同命名空间 AIBehaviorData](../AIBehaviorData)
- [同命名空间 Army](../Army)
- [同命名空间 AtmosphereGrid](../AtmosphereGrid)
