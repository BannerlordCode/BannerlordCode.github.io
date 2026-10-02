---
title: "IMarketData"
description: "IMarketData: a public interface in TaleWorlds.CampaignSystem.Settlements; 2 exposed members (2 methods, 0 properties, 0 fields). Canonical bucket campaign. Source: TaleWorlds.CampaignSystem/Settlements/IMarketData.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# IMarketData

**Namespace:** `TaleWorlds.CampaignSystem.Settlements`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public interface IMarketData`
**File:** `TaleWorlds.CampaignSystem/Settlements/IMarketData.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## Overview

IMarketData lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/Settlements/IMarketData.cs. It is a public interface; the inheritance chain is IMarketData. It exposes 2 public/protected members: 2 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: IMarketData lands in canonical bucket `campaign` (matched rule `rule:TaleWorlds.CampaignSystem`), namespace `TaleWorlds.CampaignSystem.Settlements`, inheritance chain IMarketData. The surface is method-led (methods 2/2, properties 0/2), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/Settlements/IMarketData.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `GetPrice` | `int GetPrice(ItemObject item, MobileParty tradingParty, bool isSelling, PartyBase merchantParty);` | method |
| `GetPrice` | `int GetPrice(EquipmentElement itemRosterElement, MobileParty tradingParty, bool isSelling, PartyBase merchantParty);` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace Alley](../Alley/)
- [same namespace DefaultVillageTypes](../DefaultVillageTypes/)
- [same namespace Fief](../Fief/)
- [same namespace Hideout](../Hideout/)
