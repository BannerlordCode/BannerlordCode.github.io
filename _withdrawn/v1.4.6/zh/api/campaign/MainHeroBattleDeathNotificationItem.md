---
title: "MainHeroBattleDeathNotificationItem"
description: "MainHeroBattleDeathNotificationItem：TaleWorlds.CampaignSystem.SceneInformationPopupTypes 的 public 类，继承 SceneNotificationData；公开成员 6 个（方法 1、属性 4、字段 0）。canonical 桶 campaign。源文件 TaleWorlds.CampaignSystem/SceneInformationPopupTypes/MainHeroBattleDeathNotificationItem.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MainHeroBattleDeathNotificationItem

**Namespace:** `TaleWorlds.CampaignSystem.SceneInformationPopupTypes`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class MainHeroBattleDeathNotificationItem : SceneNotificationData`
**File:** `TaleWorlds.CampaignSystem/SceneInformationPopupTypes/MainHeroBattleDeathNotificationItem.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## 概述

MainHeroBattleDeathNotificationItem 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/SceneInformationPopupTypes/MainHeroBattleDeathNotificationItem.cs。它是一个 public 类，实现/继承 SceneNotificationData，继承链为 MainHeroBattleDeathNotificationItem → SceneNotificationData。public/protected 成员共 6 个：1 方法、4 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MainHeroBattleDeathNotificationItem 落在 canonical 桶 `campaign`（命中规则 `rule:TaleWorlds.CampaignSystem`），命名空间 `TaleWorlds.CampaignSystem.SceneInformationPopupTypes`，继承链 MainHeroBattleDeathNotificationItem → SceneNotificationData。成员构成以属性为主（属性 4/6，方法 1/6），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/SceneInformationPopupTypes/MainHeroBattleDeathNotificationItem.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `DeadHero` | `public Hero DeadHero` | 属性 |
| `KillerCulture` | `public CultureObject KillerCulture` | 属性 |
| `SceneID` | `public override string SceneID` | 属性 |
| `TitleText` | `public override TextObject TitleText` | 属性 |
| `SceneNotificationData.SceneNotificationCharacter[]GetSceneNotificationCharacters` | `public override SceneNotificationData.SceneNotificationCharacter[]GetSceneNotificationCharacters()` | 方法 |
| `MainHeroBattleDeathNotificationItem` | `public MainHeroBattleDeathNotificationItem(Hero deadHero, CultureObject killerCulture = null)` | 构造函数 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 SceneNotificationData](../../core-extra/SceneNotificationData/)
- [同命名空间 AntiEmpireConspiracyBeginsSceneNotificationItem](../AntiEmpireConspiracyBeginsSceneNotificationItem/)
- [同命名空间 BecomeKingSceneNotificationItem](../BecomeKingSceneNotificationItem/)
- [同命名空间 CampaignSceneNotificationHelper](../CampaignSceneNotificationHelper/)
- [同命名空间 ClanMemberPeaceDeathSceneNotificationItem](../ClanMemberPeaceDeathSceneNotificationItem/)
