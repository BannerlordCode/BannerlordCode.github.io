---
title: "ClanRoleMemberItemVM"
description: "ClanRoleMemberItemVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement, inheriting ViewModel; 11 exposed members (4 methods, 6 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanRoleMemberItemVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ClanRoleMemberItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class ClanRoleMemberItemVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanRoleMemberItemVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

ClanRoleMemberItemVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanRoleMemberItemVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is ClanRoleMemberItemVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 11 public/protected members: 4 methods, 6 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ClanRoleMemberItemVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement`, inheritance chain ClanRoleMemberItemVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 6/11, methods 4/11), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanRoleMemberItemVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Role` | `public PartyRole Role` | property |
| `RelevantSkill` | `public SkillObject RelevantSkill` | property |
| `RelevantSkillValue` | `public int RelevantSkillValue` | property |
| `ClanRoleMemberItemVM` | `public ClanRoleMemberItemVM(MobileParty party, PartyRole role, ClanPartyMemberItemVM member, Action onRoleAssigned)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `OnFinalize` | `public override void OnFinalize()` | method |
| `ExecuteAssignHeroToRole` | `public void ExecuteAssignHeroToRole()` | method |
| `GetEffectsList` | `public string GetEffectsList(PartyRole role)` | method |
| `Member` | `public ClanPartyMemberItemVM Member` | property |
| `Hint` | `public HintViewModel Hint` | property |
| `IsRemoveAssigneeOption` | `public bool IsRemoveAssigneeOption` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace CardSelectionItemSpriteType](../CardSelectionItemSpriteType/)
- [same namespace ClanCardSelectionInfo](../ClanCardSelectionInfo/)
- [same namespace ClanCardSelectionItemInfo](../ClanCardSelectionItemInfo/)
- [same namespace ClanCardSelectionItemPropertyInfo](../ClanCardSelectionItemPropertyInfo/)
