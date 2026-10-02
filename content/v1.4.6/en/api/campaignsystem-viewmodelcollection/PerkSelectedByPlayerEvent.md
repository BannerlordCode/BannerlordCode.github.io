---
title: "PerkSelectedByPlayerEvent"
description: "PerkSelectedByPlayerEvent: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting EventBase; 2 exposed members (0 methods, 1 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterDeveloper/PerkSelection/PerkSelectedByPlayerEvent.cs."
---
# PerkSelectedByPlayerEvent

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper.PerkSelection`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class PerkSelectedByPlayerEvent : EventBase`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterDeveloper/PerkSelection/PerkSelectedByPlayerEvent.cs`

## Overview

PerkSelectedByPlayerEvent lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterDeveloper/PerkSelection/PerkSelectedByPlayerEvent.cs. It is a public class, implementing/inheriting EventBase; the inheritance chain is PerkSelectedByPlayerEvent → EventBase. It exposes 2 public/protected members: 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PerkSelectedByPlayerEvent is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper.PerkSelection) the module directory; inheritance chain PerkSelectedByPlayerEvent → EventBase. The surface is property-led (properties 1/2, methods 0/2), so it mostly exposes state for reading. EventBase on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterDeveloper/PerkSelection/PerkSelectedByPlayerEvent.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SelectedPerk` | `public PerkObject SelectedPerk` | property |
| `PerkSelectedByPlayerEvent` | `public PerkSelectedByPlayerEvent(PerkObject selectedPerk)` | constructor |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace PerkSelectionItemVM](../PerkSelectionItemVM)
- [same namespace PerkSelectionToggleEvent](../PerkSelectionToggleEvent)
- [same namespace PerkSelectionVM](../PerkSelectionVM)
