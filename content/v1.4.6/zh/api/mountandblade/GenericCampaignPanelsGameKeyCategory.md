---
title: "GenericCampaignPanelsGameKeyCategory"
description: "GenericCampaignPanelsGameKeyCategory：TaleWorlds.MountAndBlade 的 public 类，继承 GameKeyContext；公开成员 15 个（方法 0、属性 1、字段 13）。源文件 TaleWorlds.MountAndBlade/GenericCampaignPanelsGameKeyCategory.cs。"
---
# GenericCampaignPanelsGameKeyCategory

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public sealed class GenericCampaignPanelsGameKeyCategory : GameKeyContext`
**File:** `TaleWorlds.MountAndBlade/GenericCampaignPanelsGameKeyCategory.cs`

## 概述

GenericCampaignPanelsGameKeyCategory 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/GenericCampaignPanelsGameKeyCategory.cs。它是一个 public 类（sealed），实现/继承 GameKeyContext，继承链为 GenericCampaignPanelsGameKeyCategory → GameKeyContext。public/protected 成员共 15 个：1 属性、13 字段、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：GenericCampaignPanelsGameKeyCategory 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录一致，继承链 GenericCampaignPanelsGameKeyCategory → GameKeyContext。成员构成以属性为主（属性 1/15，方法 0/15），对外主要以状态读取接口暴露。继承链上的 GameKeyContext 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/GenericCampaignPanelsGameKeyCategory.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Current` | `public static GenericCampaignPanelsGameKeyCategory Current` | 属性 |
| `GenericCampaignPanelsGameKeyCategory` | `public GenericCampaignPanelsGameKeyCategory(string categoryId = " ") : base(categoryId, 116, GameKeyContext.GameKeyContextType.Default)` | 构造函数 |
| `CategoryId` | `public const string CategoryId` | 字段 |
| `FiveStackModifier` | `public const string FiveStackModifier` | 字段 |
| `EntireStackModifier` | `public const string EntireStackModifier` | 字段 |
| `BannerWindow` | `public const int BannerWindow` | 字段 |
| `CharacterWindow` | `public const int CharacterWindow` | 字段 |
| `InventoryWindow` | `public const int InventoryWindow` | 字段 |
| `EncyclopediaWindow` | `public const int EncyclopediaWindow` | 字段 |
| `PartyWindow` | `public const int PartyWindow` | 字段 |
| `KingdomWindow` | `public const int KingdomWindow` | 字段 |
| `ClanWindow` | `public const int ClanWindow` | 字段 |
| `QuestsWindow` | `public const int QuestsWindow` | 字段 |
| `FacegenWindow` | `public const int FacegenWindow` | 字段 |
| `ManageFleetWindow` | `public const int ManageFleetWindow` | 字段 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionIndexCache](../ActionIndexCache)
- [同命名空间 AgentBuildData](../AgentBuildData)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic)
