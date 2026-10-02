---
title: "IEducationLogic"
description: "IEducationLogic：TaleWorlds.CampaignSystem 的 public 接口；公开成员 5 个（方法 5、属性 0、字段 0）。源文件 TaleWorlds.CampaignSystem/CampaignBehaviors/IEducationLogic.cs。"
---
# IEducationLogic

**Namespace:** `TaleWorlds.CampaignSystem.CampaignBehaviors`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public interface IEducationLogic`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/IEducationLogic.cs`

## 概述

IEducationLogic 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/CampaignBehaviors/IEducationLogic.cs。它是一个 public 接口，继承链为 IEducationLogic。public/protected 成员共 5 个：5 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：IEducationLogic 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.CampaignBehaviors），继承链 IEducationLogic。成员构成以方法为主（方法 5/5，属性 0/5），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/CampaignBehaviors/IEducationLogic.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Finalize` | `void Finalize(Hero child, List<string>chosenOptions);` | 方法 |
| `GetOptionProperties` | `void GetOptionProperties(Hero child, string optionKey, List<string>previousChoices, out TextObject optionTitle, out TextObject description, out TextObject effect, out ValueTuple<CharacterAttribute, int>[]attributes, out ValueTuple<SkillObject, int>[]skills, out ValueTuple<SkillObject, int>[]focusPoints, out EducationCampaignBehavior.EducationCharacterProperties[]characterProperties);` | 方法 |
| `GetPageProperties` | `void GetPageProperties(Hero child, List<string>previousChoices, out TextObject title, out TextObject description, out TextObject instruction, out EducationCampaignBehavior.EducationCharacterProperties[]defaultProperties, out string[]availableOptions);` | 方法 |
| `GetStageProperties` | `void GetStageProperties(Hero child, out int pageCount);` | 方法 |
| `IsValidEducationNotification` | `bool IsValidEducationNotification(EducationMapNotification educationMapNotification);` | 方法 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AgingCampaignBehavior](../AgingCampaignBehavior)
- [同命名空间 AllianceCampaignBehavior](../AllianceCampaignBehavior)
- [同命名空间 BackstoryCampaignBehavior](../BackstoryCampaignBehavior)
- [同命名空间 BanditInteractionsCampaignBehavior](../BanditInteractionsCampaignBehavior)
