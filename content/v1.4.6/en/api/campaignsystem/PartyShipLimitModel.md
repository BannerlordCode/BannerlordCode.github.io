---
title: "PartyShipLimitModel"
description: "PartyShipLimitModel: a public class in TaleWorlds.CampaignSystem, inheriting MBGameModel<PartyShipLimitModel>; 3 exposed members (3 methods, 0 properties, 0 fields). Source: TaleWorlds.CampaignSystem/ComponentInterfaces/PartyShipLimitModel.cs."
---
# PartyShipLimitModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class PartyShipLimitModel : MBGameModel<PartyShipLimitModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PartyShipLimitModel.cs`

## Overview

PartyShipLimitModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ComponentInterfaces/PartyShipLimitModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<PartyShipLimitModel>; the inheritance chain is PartyShipLimitModel → MBGameModel. It exposes 3 public/protected members: 3 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PartyShipLimitModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.ComponentInterfaces) the module directory; inheritance chain PartyShipLimitModel → MBGameModel. The surface is method-led (methods 3/3, properties 0/3), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ComponentInterfaces/PartyShipLimitModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetIdealShipNumber` | `public abstract int GetIdealShipNumber(MobileParty mobileParty);` | method |
| `GetIdealShipNumber` | `public abstract int GetIdealShipNumber(Clan clan);` | method |
| `GetShipPriority` | `public abstract float GetShipPriority(MobileParty mobileParty, Ship ship, bool isSelling);` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AgeModel](../AgeModel)
- [same namespace AlleyModel](../AlleyModel)
- [same namespace AllianceModel](../AllianceModel)
- [same namespace ArmyManagementCalculationModel](../ArmyManagementCalculationModel)
