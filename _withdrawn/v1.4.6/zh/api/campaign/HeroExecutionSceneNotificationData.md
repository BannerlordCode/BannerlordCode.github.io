---
title: "HeroExecutionSceneNotificationData"
description: "HeroExecutionSceneNotificationData：TaleWorlds.CampaignSystem.SceneInformationPopupTypes 的 public 类，继承 SceneNotificationData；公开成员 19 个（方法 5、属性 13、字段 1）。canonical 桶 campaign。源文件 TaleWorlds.CampaignSystem/SceneInformationPopupTypes/HeroExecutionSceneNotificationData.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# HeroExecutionSceneNotificationData

**Namespace:** `TaleWorlds.CampaignSystem.SceneInformationPopupTypes`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class HeroExecutionSceneNotificationData : SceneNotificationData`
**File:** `TaleWorlds.CampaignSystem/SceneInformationPopupTypes/HeroExecutionSceneNotificationData.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## 概述

HeroExecutionSceneNotificationData 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/SceneInformationPopupTypes/HeroExecutionSceneNotificationData.cs。它是一个 public 类，实现/继承 SceneNotificationData，继承链为 HeroExecutionSceneNotificationData → SceneNotificationData。public/protected 成员共 19 个：5 方法、13 属性、1 字段。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：HeroExecutionSceneNotificationData 落在 canonical 桶 `campaign`（命中规则 `rule:TaleWorlds.CampaignSystem`），命名空间 `TaleWorlds.CampaignSystem.SceneInformationPopupTypes`，继承链 HeroExecutionSceneNotificationData → SceneNotificationData。成员构成以属性为主（属性 13/19，方法 5/19），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/SceneInformationPopupTypes/HeroExecutionSceneNotificationData.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Executer` | `public Hero Executer` | 属性 |
| `Victim` | `public Hero Victim` | 属性 |
| `IsNegativeOptionShown` | `public override bool IsNegativeOptionShown` | 属性 |
| `SceneID` | `public override string SceneID` | 属性 |
| `NegativeText` | `public override TextObject NegativeText` | 属性 |
| `IsAffirmativeOptionShown` | `public override bool IsAffirmativeOptionShown` | 属性 |
| `TitleText` | `public override TextObject TitleText` | 属性 |
| `AffirmativeText` | `public override TextObject AffirmativeText` | 属性 |
| `AffirmativeTitleText` | `public override TextObject AffirmativeTitleText` | 属性 |
| `AffirmativeHintText` | `public override TextObject AffirmativeHintText` | 属性 |
| `AffirmativeHintTextExtended` | `public override TextObject AffirmativeHintTextExtended` | 属性 |
| `AffirmativeDescriptionText` | `public override TextObject AffirmativeDescriptionText` | 属性 |
| `RelevantContext` | `public override SceneNotificationData.RelevantContextType RelevantContext` | 属性 |
| `SceneNotificationData.SceneNotificationCharacter[]GetSceneNotificationCharacters` | `public override SceneNotificationData.SceneNotificationCharacter[]GetSceneNotificationCharacters()` | 方法 |
| `OnCloseAction` | `public override void OnCloseAction()` | 方法 |
| `OnAffirmativeAction` | `public override void OnAffirmativeAction()` | 方法 |
| `CreateForPlayerExecutingHero` | `public static HeroExecutionSceneNotificationData CreateForPlayerExecutingHero(Hero dyingHero, Action onAffirmativeAction, SceneNotificationData.RelevantContextType relevantContextType = SceneNotificationData.RelevantContextType.Any, bool showNegativeOption = true)` | 方法 |
| `CreateForInformingPlayer` | `public static HeroExecutionSceneNotificationData CreateForInformingPlayer(Hero executingHero, Hero dyingHero, SceneNotificationData.RelevantContextType relevantContextType = SceneNotificationData.RelevantContextType.Any, Action onClose = null)` | 方法 |
| `MaxShownRelationChanges` | `protected static int MaxShownRelationChanges` | 字段 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 SceneNotificationData](../../core-extra/SceneNotificationData/)
- [同命名空间 AntiEmpireConspiracyBeginsSceneNotificationItem](../AntiEmpireConspiracyBeginsSceneNotificationItem/)
- [同命名空间 BecomeKingSceneNotificationItem](../BecomeKingSceneNotificationItem/)
- [同命名空间 CampaignSceneNotificationHelper](../CampaignSceneNotificationHelper/)
- [同命名空间 ClanMemberPeaceDeathSceneNotificationItem](../ClanMemberPeaceDeathSceneNotificationItem/)
