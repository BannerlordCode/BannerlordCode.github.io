---
title: "ClanMemberRolesCampaignBehavior"
description: "ClanMemberRolesCampaignBehavior：SandBox.CampaignBehaviors 的 public 类，继承 CampaignBehaviorBase、IMissionPlayerFollowerHandler；公开成员 4 个（方法 4、属性 0、字段 0）。canonical 桶 sandbox。源文件 SandBox/CampaignBehaviors/ClanMemberRolesCampaignBehavior.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ClanMemberRolesCampaignBehavior

**Namespace:** `SandBox.CampaignBehaviors`
**Module:** `SandBox`
**Type:** `public class ClanMemberRolesCampaignBehavior : CampaignBehaviorBase, IMissionPlayerFollowerHandler`
**File:** `SandBox/CampaignBehaviors/ClanMemberRolesCampaignBehavior.cs`
**Bucket:** `sandbox` (rule:SandBox)

## 概述

ClanMemberRolesCampaignBehavior 位于 SandBox 模块，源文件 SandBox/CampaignBehaviors/ClanMemberRolesCampaignBehavior.cs。它是一个 public 类，实现/继承 CampaignBehaviorBase、IMissionPlayerFollowerHandler，继承链为 ClanMemberRolesCampaignBehavior → CampaignBehaviorBase → ICampaignBehavior。public/protected 成员共 4 个：4 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ClanMemberRolesCampaignBehavior 落在 canonical 桶 `sandbox`（命中规则 `rule:SandBox`），命名空间 `SandBox.CampaignBehaviors`，继承链 ClanMemberRolesCampaignBehavior → CampaignBehaviorBase → ICampaignBehavior。成员构成以方法为主（方法 4/4，属性 0/4），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox/CampaignBehaviors/ClanMemberRolesCampaignBehavior.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `RegisterEvents` | `public override void RegisterEvents()` | 方法 |
| `SyncData` | `public override void SyncData(IDataStore dataStore)` | 方法 |
| `IsFollowingPlayer` | `public bool IsFollowingPlayer(Hero hero)` | 方法 |
| `RemoveFollowingHero` | `public void RemoveFollowingHero(Hero hero)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 CampaignBehaviorBase](../../campaign/CampaignBehaviorBase/)
- [基类/接口 IMissionPlayerFollowerHandler](../IMissionPlayerFollowerHandler/)
- [同命名空间 AlleyCampaignBehavior](../AlleyCampaignBehavior/)
- [同命名空间 ArenaMasterCampaignBehavior](../ArenaMasterCampaignBehavior/)
- [同命名空间 BarberCampaignBehavior](../BarberCampaignBehavior/)
- [同命名空间 BoardGameCampaignBehavior](../BoardGameCampaignBehavior/)
