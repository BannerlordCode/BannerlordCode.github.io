---
title: "ClanRoleItemVM"
description: "ClanRoleItemVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement, inheriting ViewModel; 19 exposed members (5 methods, 13 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanRoleItemVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ClanRoleItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class ClanRoleItemVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanRoleItemVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

ClanRoleItemVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanRoleItemVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is ClanRoleItemVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 19 public/protected members: 5 methods, 13 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ClanRoleItemVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement`, inheritance chain ClanRoleItemVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 13/19, methods 5/19), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanRoleItemVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Role` | `public PartyRole Role` | property |
| `ClanRoleItemVM` | `public ClanRoleItemVM(MobileParty party, PartyRole role, MBBindingList<ClanPartyMemberItemVM>heroMembers, Action<ClanRoleItemVM>onRoleSelectionToggled, Action onRoleAssigned)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `OnFinalize` | `public override void OnFinalize()` | method |
| `Refresh` | `public void Refresh()` | method |
| `ExecuteToggleRoleSelection` | `public void ExecuteToggleRoleSelection()` | method |
| `SetEnabled` | `public void SetEnabled(bool enabled, TextObject disabledHint)` | method |
| `IsEnabled` | `public bool IsEnabled` | property |
| `ClanLeader` | `public ClanRoleMemberItemVM ClanLeader` | property |
| `MBBindingList` | `public MBBindingList<ClanRoleMemberItemVM>Members` | property |
| `EffectiveOwner` | `public ClanRoleMemberItemVM EffectiveOwner` | property |
| `NotAssignedHint` | `public HintViewModel NotAssignedHint` | property |
| `DisabledHint` | `public HintViewModel DisabledHint` | property |
| `IsNotAssigned` | `public bool IsNotAssigned` | property |
| `HasEffects` | `public bool HasEffects` | property |
| `RoleId` | `public string RoleId` | property |
| `Name` | `public string Name` | property |
| `AssignedMemberEffects` | `public string AssignedMemberEffects` | property |
| `NoEffectText` | `public string NoEffectText` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace CardSelectionItemSpriteType](../CardSelectionItemSpriteType/)
- [same namespace ClanCardSelectionInfo](../ClanCardSelectionInfo/)
- [same namespace ClanCardSelectionItemInfo](../ClanCardSelectionItemInfo/)
- [same namespace ClanCardSelectionItemPropertyInfo](../ClanCardSelectionItemPropertyInfo/)
