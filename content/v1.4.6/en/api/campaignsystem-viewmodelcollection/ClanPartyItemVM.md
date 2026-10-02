---
title: "ClanPartyItemVM"
description: "ClanPartyItemVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting ViewModel; 63 exposed members (5 methods, 56 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanPartyItemVM.cs."
---
# ClanPartyItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class ClanPartyItemVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanPartyItemVM.cs`

## Overview

ClanPartyItemVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanPartyItemVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is ClanPartyItemVM → ViewModel. It exposes 63 public/protected members: 5 methods, 56 properties, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ClanPartyItemVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement) the module directory; inheritance chain ClanPartyItemVM → ViewModel. The surface is property-led (properties 56/63, methods 5/63), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanPartyItemVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Expense` | `public int Expense` | property |
| `Income` | `public int Income` | property |
| `Party` | `public PartyBase Party` | property |
| `ClanPartyItemVM` | `public ClanPartyItemVM(PartyBase party, Action<ClanPartyItemVM>onAssignment, Action onExpenseChange, Action onShowChangeLeaderPopup, ClanPartyItemVM.ClanPartyType type, IDisbandPartyCampaignBehavior disbandBehavior, ITeleportationCampaignBehavior teleportationBehavior)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `UpdateProperties` | `public void UpdateProperties()` | method |
| `OnPartySelection` | `public void OnPartySelection()` | method |
| `ExecuteChangeLeader` | `public void ExecuteChangeLeader()` | method |
| `OnFinalize` | `public override void OnFinalize()` | method |
| `CharacterModel` | `public CharacterViewModel CharacterModel` | property |
| `PartyBehaviorSelector` | `public ClanPartyBehaviorSelectorVM PartyBehaviorSelector` | property |
| `LeaderVisual` | `public CharacterImageIdentifierVM LeaderVisual` | property |
| `IsSelected` | `public bool IsSelected` | property |
| `HasHeroMembers` | `public bool HasHeroMembers` | property |
| `IsClanRoleSelectionHighlightEnabled` | `public bool IsClanRoleSelectionHighlightEnabled` | property |
| `IsRoleSelectionPopupVisible` | `public bool IsRoleSelectionPopupVisible` | property |
| `IsDisbanding` | `public bool IsDisbanding` | property |
| `IsInArmy` | `public bool IsInArmy` | property |
| `CanUseActions` | `public bool CanUseActions` | property |
| `IsChangeLeaderVisible` | `public bool IsChangeLeaderVisible` | property |
| `IsChangeLeaderEnabled` | `public bool IsChangeLeaderEnabled` | property |
| `ActionsDisabledHint` | `public HintViewModel ActionsDisabledHint` | property |
| `IsCaravan` | `public bool IsCaravan` | property |
| `ShouldPartyHaveExpense` | `public bool ShouldPartyHaveExpense` | property |
| `HasCompanion` | `public bool HasCompanion` | property |
| `IsAutoRecruitmentVisible` | `public bool IsAutoRecruitmentVisible` | property |
| `AutoRecruitmentValue` | `public bool AutoRecruitmentValue` | property |
| `IsPartyBehaviorEnabled` | `public bool IsPartyBehaviorEnabled` | property |
| `IsMembersAndRolesVisible` | `public bool IsMembersAndRolesVisible` | property |
| `IsMainHeroParty` | `public bool IsMainHeroParty` | property |
| `ExpenseItem` | `public ClanFinanceExpenseItemVM ExpenseItem` | property |
| `LastOpenedRoleSelection` | `public ClanRoleItemVM LastOpenedRoleSelection` | property |
| `LeaderMember` | `public ClanPartyMemberItemVM LeaderMember` | property |
| `PartySizeText` | `public string PartySizeText` | property |
| `ShipCountText` | `public string ShipCountText` | property |
| `MembersText` | `public string MembersText` | property |
| `AssigneesText` | `public string AssigneesText` | property |
| `RolesText` | `public string RolesText` | property |
| `PartyLeaderRoleEffectsText` | `public string PartyLeaderRoleEffectsText` | property |
| `PartyLocationText` | `public string PartyLocationText` | property |
| `Name` | `public string Name` | property |
| `PartySizeSubTitleText` | `public string PartySizeSubTitleText` | property |
| `PartyWageSubTitleText` | `public string PartyWageSubTitleText` | property |
| `PartyBehaviorText` | `public string PartyBehaviorText` | property |
| `InfantryCount` | `public int InfantryCount` | property |
| `RangedCount` | `public int RangedCount` | property |
| `CavalryCount` | `public int CavalryCount` | property |
| `HorseArcherCount` | `public int HorseArcherCount` | property |
| `ShipCount` | `public int ShipCount` | property |
| `InArmyText` | `public string InArmyText` | property |
| `DisbandingText` | `public string DisbandingText` | property |
| `AutoRecruitmentText` | `public string AutoRecruitmentText` | property |
| `AutoRecruitmentHint` | `public HintViewModel AutoRecruitmentHint` | property |
| `InArmyHint` | `public HintViewModel InArmyHint` | property |
| `ChangeLeaderHint` | `public HintViewModel ChangeLeaderHint` | property |
| `InfantryHint` | `public BasicTooltipViewModel InfantryHint` | property |
| `RangedHint` | `public BasicTooltipViewModel RangedHint` | property |
| `CavalryHint` | `public BasicTooltipViewModel CavalryHint` | property |
| `HorseArcherHint` | `public BasicTooltipViewModel HorseArcherHint` | property |
| `MBBindingList` | `public MBBindingList<ClanPartyMemberItemVM>HeroMembers` | property |
| `MBBindingList` | `public MBBindingList<ClanRoleItemVM>Roles` | property |
| `ClanPartyType` | `public enum ClanPartyType` | property |
| `ClanPartyType` | `public enum ClanPartyType` | nested type |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace CardSelectionItemSpriteType](../CardSelectionItemSpriteType)
- [same namespace ClanCardSelectionInfo](../ClanCardSelectionInfo)
- [same namespace ClanCardSelectionItemInfo](../ClanCardSelectionItemInfo)
- [same namespace ClanCardSelectionItemPropertyInfo](../ClanCardSelectionItemPropertyInfo)
