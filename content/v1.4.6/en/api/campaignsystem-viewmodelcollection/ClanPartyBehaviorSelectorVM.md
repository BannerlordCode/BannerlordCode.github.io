---
title: "ClanPartyBehaviorSelectorVM"
description: "ClanPartyBehaviorSelectorVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting SelectorVM<SelectorItemVM>; 3 exposed members (0 methods, 2 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanPartyBehaviorSelectorVM.cs."
---
# ClanPartyBehaviorSelectorVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class ClanPartyBehaviorSelectorVM : SelectorVM<SelectorItemVM>`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanPartyBehaviorSelectorVM.cs`

## Overview

ClanPartyBehaviorSelectorVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanPartyBehaviorSelectorVM.cs. It is a public class, implementing/inheriting SelectorVM<SelectorItemVM>; the inheritance chain is ClanPartyBehaviorSelectorVM → SelectorVM. It exposes 3 public/protected members: 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ClanPartyBehaviorSelectorVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement) the module directory; inheritance chain ClanPartyBehaviorSelectorVM → SelectorVM. The surface is property-led (properties 2/3, methods 0/3), so it mostly exposes state for reading. SelectorVM on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanPartyBehaviorSelectorVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ClanPartyBehaviorSelectorVM` | `public ClanPartyBehaviorSelectorVM(int selectedIndex, Action<SelectorVM<SelectorItemVM>>onChange) : base(selectedIndex, onChange)` | constructor |
| `CanUseActions` | `public bool CanUseActions` | property |
| `ActionsDisabledHint` | `public HintViewModel ActionsDisabledHint` | property |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace CardSelectionItemSpriteType](../CardSelectionItemSpriteType)
- [same namespace ClanCardSelectionInfo](../ClanCardSelectionInfo)
- [same namespace ClanCardSelectionItemInfo](../ClanCardSelectionItemInfo)
- [same namespace ClanCardSelectionItemPropertyInfo](../ClanCardSelectionItemPropertyInfo)
