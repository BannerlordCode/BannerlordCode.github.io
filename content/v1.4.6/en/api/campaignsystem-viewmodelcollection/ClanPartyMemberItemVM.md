---
title: "ClanPartyMemberItemVM"
description: "ClanPartyMemberItemVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting ViewModel; 13 exposed members (6 methods, 6 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanPartyMemberItemVM.cs."
---
# ClanPartyMemberItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class ClanPartyMemberItemVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanPartyMemberItemVM.cs`

## Overview

ClanPartyMemberItemVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanPartyMemberItemVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is ClanPartyMemberItemVM → ViewModel. It exposes 13 public/protected members: 6 methods, 6 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ClanPartyMemberItemVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement) the module directory; inheritance chain ClanPartyMemberItemVM → ViewModel. The surface is method-led (methods 6/13, properties 6/13), so it mostly exposes operations. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanPartyMemberItemVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `HeroObject` | `public Hero HeroObject` | property |
| `ClanPartyMemberItemVM` | `public ClanPartyMemberItemVM(Hero hero, MobileParty party)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `UpdateProperties` | `public void UpdateProperties()` | method |
| `ExecuteLink` | `public void ExecuteLink()` | method |
| `ExecuteBeginHint` | `public virtual void ExecuteBeginHint()` | method |
| `ExecuteEndHint` | `public virtual void ExecuteEndHint()` | method |
| `OnFinalize` | `public override void OnFinalize()` | method |
| `HeroModel` | `public HeroViewModel HeroModel` | property |
| `Visual` | `public CharacterImageIdentifierVM Visual` | property |
| `Banner_9` | `public BannerImageIdentifierVM Banner_9` | property |
| `Name` | `public string Name` | property |
| `IsLeader` | `public bool IsLeader` | property |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace CardSelectionItemSpriteType](../CardSelectionItemSpriteType)
- [same namespace ClanCardSelectionInfo](../ClanCardSelectionInfo)
- [same namespace ClanCardSelectionItemInfo](../ClanCardSelectionItemInfo)
- [same namespace ClanCardSelectionItemPropertyInfo](../ClanCardSelectionItemPropertyInfo)
