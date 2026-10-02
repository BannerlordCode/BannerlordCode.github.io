---
title: "KingdomTruceItemVM"
description: "KingdomTruceItemVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting KingdomDiplomacyItemVM; 8 exposed members (2 methods, 5 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Diplomacy/KingdomTruceItemVM.cs."
---
# KingdomTruceItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Diplomacy`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class KingdomTruceItemVM : KingdomDiplomacyItemVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Diplomacy/KingdomTruceItemVM.cs`

## Overview

KingdomTruceItemVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Diplomacy/KingdomTruceItemVM.cs. It is a public class, implementing/inheriting KingdomDiplomacyItemVM; the inheritance chain is KingdomTruceItemVM → KingdomDiplomacyItemVM → KingdomItemVM → ViewModel. It exposes 8 public/protected members: 2 methods, 5 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: KingdomTruceItemVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Diplomacy) the module directory; inheritance chain KingdomTruceItemVM → KingdomDiplomacyItemVM → KingdomItemVM → ViewModel. The surface is property-led (properties 5/8, methods 2/8), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Diplomacy/KingdomTruceItemVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `KingdomTruceItemVM` | `public KingdomTruceItemVM(IFaction faction1, IFaction faction2, Action<KingdomDiplomacyItemVM>onSelection) : base(faction1, faction2)` | constructor |
| `OnSelect` | `protected override void OnSelect()` | method |
| `UpdateDiplomacyProperties` | `protected override void UpdateDiplomacyProperties()` | method |
| `TributePaid` | `public int TributePaid` | property |
| `HasTradeAgreement` | `public bool HasTradeAgreement` | property |
| `HasAlliance` | `public bool HasAlliance` | property |
| `AllianceEndTimeStr` | `public string AllianceEndTimeStr` | property |
| `TradeAgreementEndTimeStr` | `public string TradeAgreementEndTimeStr` | property |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface KingdomDiplomacyItemVM](../KingdomDiplomacyItemVM)
- [same namespace KingdomDiplomacyFactionItemVM](../KingdomDiplomacyFactionItemVM)
- [same namespace KingdomDiplomacyItemVM](../KingdomDiplomacyItemVM)
- [same namespace KingdomDiplomacyProposalActionItemVM](../KingdomDiplomacyProposalActionItemVM)
- [same namespace KingdomDiplomacyVM](../KingdomDiplomacyVM)
