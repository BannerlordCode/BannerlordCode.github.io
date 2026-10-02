---
title: "IMapPoint"
description: "IMapPoint：TaleWorlds.CampaignSystem 的 public 接口；公开成员 8 个（方法 1、属性 7、字段 0）。源文件 TaleWorlds.CampaignSystem/Map/IMapPoint.cs。"
---
# IMapPoint

**Namespace:** `TaleWorlds.CampaignSystem.Map`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public interface IMapPoint`
**File:** `TaleWorlds.CampaignSystem/Map/IMapPoint.cs`

## 概述

IMapPoint 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/Map/IMapPoint.cs。它是一个 public 接口，继承链为 IMapPoint。public/protected 成员共 8 个：1 方法、7 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：IMapPoint 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.Map），继承链 IMapPoint。成员构成以属性为主（属性 7/8，方法 1/8），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/Map/IMapPoint.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Name` | `TextObject Name` | 属性 |
| `Position` | `CampaignVec2 Position` | 属性 |
| `CurrentNavigationFace` | `PathFaceRecord CurrentNavigationFace` | 属性 |
| `GetPositionAsVec3` | `Vec3 GetPositionAsVec3();` | 方法 |
| `MapFaction` | `IFaction MapFaction` | 属性 |
| `IsInspected` | `bool IsInspected` | 属性 |
| `IsVisible` | `bool IsVisible` | 属性 |
| `IsActive` | `bool IsActive` | 属性 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 IInteractablePoint](../IInteractablePoint)
- [同命名空间 IMapScene](../IMapScene)
- [同命名空间 IMapSceneCreator](../IMapSceneCreator)
- [同命名空间 LocatableSearchData](../LocatableSearchData__1)
