---
title: "EntityVisualManagerBase"
description: "EntityVisualManagerBase：SandBox.View 的 public 类，继承 CampaignEntityVisualComponent；公开成员 1 个（方法 0、属性 1、字段 0）。源文件 SandBox.View/Map/Managers/EntityVisualManagerBase.cs。"
---
# EntityVisualManagerBase

**Namespace:** `SandBox.View.Map.Managers`
**Module:** `SandBox.View`
**Type:** `public abstract class EntityVisualManagerBase : CampaignEntityVisualComponent`
**File:** `SandBox.View/Map/Managers/EntityVisualManagerBase.cs`

## 概述

EntityVisualManagerBase 位于 SandBox.View 模块，源文件 SandBox.View/Map/Managers/EntityVisualManagerBase.cs。它是一个 public 类（abstract），实现/继承 CampaignEntityVisualComponent，继承链为 EntityVisualManagerBase → CampaignEntityVisualComponent → IEntityComponent。public/protected 成员共 1 个：1 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：EntityVisualManagerBase 是 SandBox.View 的顶层类型，命名空间与模块目录不同（SandBox.View.Map.Managers），继承链 EntityVisualManagerBase → CampaignEntityVisualComponent → IEntityComponent。成员构成以属性为主（属性 1/1，方法 0/1），对外主要以状态读取接口暴露。继承链上的 IEntityComponent 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.View/Map/Managers/EntityVisualManagerBase.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MapScene` | `public Scene MapScene` | 属性 |

## 参见

- [↑ sandbox-view 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 CampaignEntityVisualComponent](../CampaignEntityVisualComponent)
- [同命名空间 EntityVisualManagerBase](../EntityVisualManagerBase__1)
- [同命名空间 MapTracksVisualManager](../MapTracksVisualManager)
- [同命名空间 MapWeatherVisualManager](../MapWeatherVisualManager)
- [同命名空间 MobilePartyVisualManager](../MobilePartyVisualManager)
