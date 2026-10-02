---
title: "ClanRoleItemVM"
description: "ClanRoleItemVM：TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement 的 public 类，继承 ViewModel；公开成员 19 个（方法 5、属性 13、字段 0）。canonical 桶 viewmodel。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanRoleItemVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ClanRoleItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class ClanRoleItemVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanRoleItemVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## 概述

ClanRoleItemVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanRoleItemVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 ClanRoleItemVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 19 个：5 方法、13 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ClanRoleItemVM 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.CampaignSystem.ViewModelCollection`），命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement`，继承链 ClanRoleItemVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以属性为主（属性 13/19，方法 5/19），对外主要以状态读取接口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanRoleItemVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Role` | `public PartyRole Role` | 属性 |
| `ClanRoleItemVM` | `public ClanRoleItemVM(MobileParty party, PartyRole role, MBBindingList<ClanPartyMemberItemVM>heroMembers, Action<ClanRoleItemVM>onRoleSelectionToggled, Action onRoleAssigned)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `OnFinalize` | `public override void OnFinalize()` | 方法 |
| `Refresh` | `public void Refresh()` | 方法 |
| `ExecuteToggleRoleSelection` | `public void ExecuteToggleRoleSelection()` | 方法 |
| `SetEnabled` | `public void SetEnabled(bool enabled, TextObject disabledHint)` | 方法 |
| `IsEnabled` | `public bool IsEnabled` | 属性 |
| `ClanLeader` | `public ClanRoleMemberItemVM ClanLeader` | 属性 |
| `MBBindingList` | `public MBBindingList<ClanRoleMemberItemVM>Members` | 属性 |
| `EffectiveOwner` | `public ClanRoleMemberItemVM EffectiveOwner` | 属性 |
| `NotAssignedHint` | `public HintViewModel NotAssignedHint` | 属性 |
| `DisabledHint` | `public HintViewModel DisabledHint` | 属性 |
| `IsNotAssigned` | `public bool IsNotAssigned` | 属性 |
| `HasEffects` | `public bool HasEffects` | 属性 |
| `RoleId` | `public string RoleId` | 属性 |
| `Name` | `public string Name` | 属性 |
| `AssignedMemberEffects` | `public string AssignedMemberEffects` | 属性 |
| `NoEffectText` | `public string NoEffectText` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ViewModel](../../core-extra/ViewModel/)
- [同命名空间 CardSelectionItemSpriteType](../CardSelectionItemSpriteType/)
- [同命名空间 ClanCardSelectionInfo](../ClanCardSelectionInfo/)
- [同命名空间 ClanCardSelectionItemInfo](../ClanCardSelectionItemInfo/)
- [同命名空间 ClanCardSelectionItemPropertyInfo](../ClanCardSelectionItemPropertyInfo/)
