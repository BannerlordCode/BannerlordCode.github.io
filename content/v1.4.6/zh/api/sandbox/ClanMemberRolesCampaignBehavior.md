---
title: "ClanMemberRolesCampaignBehavior"
description: "ClanMemberRolesCampaignBehavior：SandBox 的 public 类，继承 CampaignBehaviorBase、IMissionPlayerFollowerHandler；公开成员 4 个（方法 4、属性 0、字段 0）。源文件 SandBox/CampaignBehaviors/ClanMemberRolesCampaignBehavior.cs。"
---
# ClanMemberRolesCampaignBehavior

**Namespace:** `SandBox.CampaignBehaviors`
**Module:** `SandBox`
**Type:** `public class ClanMemberRolesCampaignBehavior : CampaignBehaviorBase, IMissionPlayerFollowerHandler`
**File:** `SandBox/CampaignBehaviors/ClanMemberRolesCampaignBehavior.cs`

## 概述

ClanMemberRolesCampaignBehavior 位于 SandBox 模块，源文件 SandBox/CampaignBehaviors/ClanMemberRolesCampaignBehavior.cs。它是一个 public 类，实现/继承 CampaignBehaviorBase、IMissionPlayerFollowerHandler，继承链为 ClanMemberRolesCampaignBehavior → CampaignBehaviorBase。public/protected 成员共 4 个：4 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ClanMemberRolesCampaignBehavior 是 SandBox 的顶层类型，命名空间与模块目录不同（SandBox.CampaignBehaviors），继承链 ClanMemberRolesCampaignBehavior → CampaignBehaviorBase。成员构成以方法为主（方法 4/4，属性 0/4），对外主要以操作入口暴露。继承链上的 CampaignBehaviorBase 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox/CampaignBehaviors/ClanMemberRolesCampaignBehavior.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `RegisterEvents` | `public override void RegisterEvents()` | 方法 |
| `SyncData` | `public override void SyncData(IDataStore dataStore)` | 方法 |
| `IsFollowingPlayer` | `public bool IsFollowingPlayer(Hero hero)` | 方法 |
| `RemoveFollowingHero` | `public void RemoveFollowingHero(Hero hero)` | 方法 |

## 参见

- [↑ sandbox 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 IMissionPlayerFollowerHandler](../IMissionPlayerFollowerHandler)
- [同命名空间 AlleyCampaignBehavior](../AlleyCampaignBehavior)
- [同命名空间 ArenaMasterCampaignBehavior](../ArenaMasterCampaignBehavior)
- [同命名空间 BarberCampaignBehavior](../BarberCampaignBehavior)
- [同命名空间 BoardGameCampaignBehavior](../BoardGameCampaignBehavior)
