---
title: "FocusAddedByPlayerEvent"
description: "FocusAddedByPlayerEvent：TaleWorlds.CampaignSystem.ViewModelCollection 的 public 类，继承 EventBase；公开成员 3 个（方法 0、属性 2、字段 0）。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterDeveloper/FocusAddedByPlayerEvent.cs。"
---
# FocusAddedByPlayerEvent

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class FocusAddedByPlayerEvent : EventBase`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterDeveloper/FocusAddedByPlayerEvent.cs`

## 概述

FocusAddedByPlayerEvent 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterDeveloper/FocusAddedByPlayerEvent.cs。它是一个 public 类，实现/继承 EventBase，继承链为 FocusAddedByPlayerEvent → EventBase。public/protected 成员共 3 个：2 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：FocusAddedByPlayerEvent 是 TaleWorlds.CampaignSystem.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper），继承链 FocusAddedByPlayerEvent → EventBase。成员构成以属性为主（属性 2/3，方法 0/3），对外主要以状态读取接口暴露。继承链上的 EventBase 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterDeveloper/FocusAddedByPlayerEvent.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `AddedPlayer` | `public Hero AddedPlayer` | 属性 |
| `AddedSkill` | `public SkillObject AddedSkill` | 属性 |
| `FocusAddedByPlayerEvent` | `public FocusAddedByPlayerEvent(Hero addedPlayer, SkillObject addedSkill)` | 构造函数 |

## 参见

- [↑ campaignsystem-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AttributeBoundSkillItemVM](../AttributeBoundSkillItemVM)
- [同命名空间 CharacterAttributeItemVM](../CharacterAttributeItemVM)
- [同命名空间 CharacterDeveloperHeroItemVM](../CharacterDeveloperHeroItemVM)
- [同命名空间 CharacterDeveloperVM](../CharacterDeveloperVM)
