---
title: "INavigationElement"
description: "INavigationElement：TaleWorlds.CampaignSystem 的 public 接口；公开成员 10 个（方法 3、属性 7、字段 0）。源文件 TaleWorlds.CampaignSystem/INavigationElement.cs。"
---
# INavigationElement

**Namespace:** `TaleWorlds.CampaignSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public interface INavigationElement`
**File:** `TaleWorlds.CampaignSystem/INavigationElement.cs`

## 概述

INavigationElement 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/INavigationElement.cs。它是一个 public 接口，继承链为 INavigationElement。public/protected 成员共 10 个：3 方法、7 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：INavigationElement 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录一致，继承链 INavigationElement。成员构成以属性为主（属性 7/10，方法 3/10），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/INavigationElement.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `StringId` | `string StringId` | 属性 |
| `Permission` | `NavigationPermissionItem Permission` | 属性 |
| `IsLockingNavigation` | `bool IsLockingNavigation` | 属性 |
| `IsActive` | `bool IsActive` | 属性 |
| `OpenView` | `void OpenView();` | 方法 |
| `OpenView` | `void OpenView(params object[]parameters);` | 方法 |
| `GoToLink` | `void GoToLink();` | 方法 |
| `Tooltip` | `TextObject Tooltip` | 属性 |
| `HasAlert` | `bool HasAlert` | 属性 |
| `AlertTooltip` | `TextObject AlertTooltip` | 属性 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionNotes](../ActionNotes)
- [同命名空间 AIBehaviorData](../AIBehaviorData)
- [同命名空间 Army](../Army)
- [同命名空间 AtmosphereGrid](../AtmosphereGrid)
