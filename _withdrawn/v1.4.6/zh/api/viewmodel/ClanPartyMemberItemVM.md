---
title: "ClanPartyMemberItemVM"
description: "ClanPartyMemberItemVM：TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement 的 public 类，继承 ViewModel；公开成员 13 个（方法 6、属性 6、字段 0）。canonical 桶 viewmodel。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanPartyMemberItemVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ClanPartyMemberItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class ClanPartyMemberItemVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanPartyMemberItemVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## 概述

ClanPartyMemberItemVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanPartyMemberItemVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 ClanPartyMemberItemVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 13 个：6 方法、6 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ClanPartyMemberItemVM 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.CampaignSystem.ViewModelCollection`），命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement`，继承链 ClanPartyMemberItemVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以方法为主（方法 6/13，属性 6/13），对外主要以操作入口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanPartyMemberItemVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `HeroObject` | `public Hero HeroObject` | 属性 |
| `ClanPartyMemberItemVM` | `public ClanPartyMemberItemVM(Hero hero, MobileParty party)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `UpdateProperties` | `public void UpdateProperties()` | 方法 |
| `ExecuteLink` | `public void ExecuteLink()` | 方法 |
| `ExecuteBeginHint` | `public virtual void ExecuteBeginHint()` | 方法 |
| `ExecuteEndHint` | `public virtual void ExecuteEndHint()` | 方法 |
| `OnFinalize` | `public override void OnFinalize()` | 方法 |
| `HeroModel` | `public HeroViewModel HeroModel` | 属性 |
| `Visual` | `public CharacterImageIdentifierVM Visual` | 属性 |
| `Banner_9` | `public BannerImageIdentifierVM Banner_9` | 属性 |
| `Name` | `public string Name` | 属性 |
| `IsLeader` | `public bool IsLeader` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ViewModel](../../core-extra/ViewModel/)
- [同命名空间 CardSelectionItemSpriteType](../CardSelectionItemSpriteType/)
- [同命名空间 ClanCardSelectionInfo](../ClanCardSelectionInfo/)
- [同命名空间 ClanCardSelectionItemInfo](../ClanCardSelectionItemInfo/)
- [同命名空间 ClanCardSelectionItemPropertyInfo](../ClanCardSelectionItemPropertyInfo/)
