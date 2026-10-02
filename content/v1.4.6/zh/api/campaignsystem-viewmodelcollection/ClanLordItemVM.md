---
title: "ClanLordItemVM"
description: "ClanLordItemVM：TaleWorlds.CampaignSystem.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 39 个（方法 13、属性 25、字段 0）。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanLordItemVM.cs。"
---
# ClanLordItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class ClanLordItemVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanLordItemVM.cs`

## 概述

ClanLordItemVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanLordItemVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 ClanLordItemVM → ViewModel。public/protected 成员共 39 个：13 方法、25 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ClanLordItemVM 是 TaleWorlds.CampaignSystem.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement），继承链 ClanLordItemVM → ViewModel。成员构成以属性为主（属性 25/39，方法 13/39），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanLordItemVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ClanLordItemVM` | `public ClanLordItemVM(Hero hero, ITeleportationCampaignBehavior teleportationBehavior, Action<Hero>showHeroOnMap, Action<ClanLordItemVM>onCharacterSelect, Action onRecall, Action onTalk)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `ExecuteLocationLink` | `public void ExecuteLocationLink(string link)` | 方法 |
| `UpdateProperties` | `public void UpdateProperties()` | 方法 |
| `ExecuteLink` | `public void ExecuteLink()` | 方法 |
| `OnCharacterSelect` | `public void OnCharacterSelect()` | 方法 |
| `ExecuteBeginHint` | `public virtual void ExecuteBeginHint()` | 方法 |
| `ExecuteEndHint` | `public virtual void ExecuteEndHint()` | 方法 |
| `GetHero` | `public Hero GetHero()` | 方法 |
| `ExecuteRename` | `public void ExecuteRename()` | 方法 |
| `ExecuteShowOnMap` | `public void ExecuteShowOnMap()` | 方法 |
| `ExecuteRecall` | `public void ExecuteRecall()` | 方法 |
| `ExecuteTalk` | `public void ExecuteTalk()` | 方法 |
| `OnFinalize` | `public override void OnFinalize()` | 方法 |
| `MBBindingList` | `public MBBindingList<EncyclopediaSkillVM>Skills` | 属性 |
| `MBBindingList` | `public MBBindingList<EncyclopediaTraitItemVM>Traits` | 属性 |
| `HeroModel` | `public HeroViewModel HeroModel` | 属性 |
| `IsSelected` | `public bool IsSelected` | 属性 |
| `IsChild` | `public bool IsChild` | 属性 |
| `IsTeleporting` | `public bool IsTeleporting` | 属性 |
| `IsRecallVisible` | `public bool IsRecallVisible` | 属性 |
| `IsRecallEnabled` | `public bool IsRecallEnabled` | 属性 |
| `IsTalkVisible` | `public bool IsTalkVisible` | 属性 |
| `IsTalkEnabled` | `public bool IsTalkEnabled` | 属性 |
| `CanShowLocationOfHero` | `public bool CanShowLocationOfHero` | 属性 |
| `IsMainHero` | `public bool IsMainHero` | 属性 |
| `IsFamilyMember` | `public bool IsFamilyMember` | 属性 |
| `IsPregnant` | `public bool IsPregnant` | 属性 |
| `Visual` | `public CharacterImageIdentifierVM Visual` | 属性 |
| `Banner_9` | `public BannerImageIdentifierVM Banner_9` | 属性 |
| `LocationText` | `public string LocationText` | 属性 |
| `CurrentActionText` | `public string CurrentActionText` | 属性 |
| `RelationToMainHeroText` | `public string RelationToMainHeroText` | 属性 |
| `GovernorOfText` | `public string GovernorOfText` | 属性 |
| `Name` | `public string Name` | 属性 |
| `PregnantHint` | `public HintViewModel PregnantHint` | 属性 |
| `ShowOnMapHint` | `public HintViewModel ShowOnMapHint` | 属性 |
| `RecallHint` | `public HintViewModel RecallHint` | 属性 |
| `TalkHint` | `public HintViewModel TalkHint` | 属性 |

## 参见

- [↑ campaignsystem-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 CardSelectionItemSpriteType](../CardSelectionItemSpriteType)
- [同命名空间 ClanCardSelectionInfo](../ClanCardSelectionInfo)
- [同命名空间 ClanCardSelectionItemInfo](../ClanCardSelectionItemInfo)
- [同命名空间 ClanCardSelectionItemPropertyInfo](../ClanCardSelectionItemPropertyInfo)
