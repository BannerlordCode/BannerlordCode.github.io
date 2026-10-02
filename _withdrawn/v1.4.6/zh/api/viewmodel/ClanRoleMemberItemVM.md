---
title: "ClanRoleMemberItemVM"
description: "ClanRoleMemberItemVM：TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement 的 public 类，继承 ViewModel；公开成员 11 个（方法 4、属性 6、字段 0）。canonical 桶 viewmodel。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanRoleMemberItemVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ClanRoleMemberItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class ClanRoleMemberItemVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanRoleMemberItemVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## 概述

ClanRoleMemberItemVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanRoleMemberItemVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 ClanRoleMemberItemVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 11 个：4 方法、6 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ClanRoleMemberItemVM 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.CampaignSystem.ViewModelCollection`），命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement`，继承链 ClanRoleMemberItemVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以属性为主（属性 6/11，方法 4/11），对外主要以状态读取接口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanRoleMemberItemVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Role` | `public PartyRole Role` | 属性 |
| `RelevantSkill` | `public SkillObject RelevantSkill` | 属性 |
| `RelevantSkillValue` | `public int RelevantSkillValue` | 属性 |
| `ClanRoleMemberItemVM` | `public ClanRoleMemberItemVM(MobileParty party, PartyRole role, ClanPartyMemberItemVM member, Action onRoleAssigned)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `OnFinalize` | `public override void OnFinalize()` | 方法 |
| `ExecuteAssignHeroToRole` | `public void ExecuteAssignHeroToRole()` | 方法 |
| `GetEffectsList` | `public string GetEffectsList(PartyRole role)` | 方法 |
| `Member` | `public ClanPartyMemberItemVM Member` | 属性 |
| `Hint` | `public HintViewModel Hint` | 属性 |
| `IsRemoveAssigneeOption` | `public bool IsRemoveAssigneeOption` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ViewModel](../../core-extra/ViewModel/)
- [同命名空间 CardSelectionItemSpriteType](../CardSelectionItemSpriteType/)
- [同命名空间 ClanCardSelectionInfo](../ClanCardSelectionInfo/)
- [同命名空间 ClanCardSelectionItemInfo](../ClanCardSelectionItemInfo/)
- [同命名空间 ClanCardSelectionItemPropertyInfo](../ClanCardSelectionItemPropertyInfo/)
