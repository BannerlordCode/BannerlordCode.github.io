---
title: "IFaction"
description: "IFaction: a public interface in TaleWorlds.CampaignSystem; 43 exposed members (3 methods, 40 properties, 0 fields). Canonical bucket campaign. Source: TaleWorlds.CampaignSystem/IFaction.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# IFaction

**Namespace:** `TaleWorlds.CampaignSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public interface IFaction`
**File:** `TaleWorlds.CampaignSystem/IFaction.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## Overview

IFaction lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/IFaction.cs. It is a public interface; the inheritance chain is IFaction. It exposes 43 public/protected members: 3 methods, 40 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: IFaction lands in canonical bucket `campaign` (matched rule `rule:TaleWorlds.CampaignSystem`), namespace `TaleWorlds.CampaignSystem`, inheritance chain IFaction. The surface is property-led (properties 40/43, methods 3/43), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/IFaction.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Name` | `TextObject Name` | property |
| `StringId` | `string StringId` | property |
| `Id` | `MBGUID Id` | property |
| `InformalName` | `TextObject InformalName` | property |
| `EncyclopediaLink` | `string EncyclopediaLink` | property |
| `EncyclopediaLinkWithName` | `TextObject EncyclopediaLinkWithName` | property |
| `EncyclopediaText` | `TextObject EncyclopediaText` | property |
| `Culture` | `CultureObject Culture` | property |
| `InitialHomeSettlement` | `Settlement InitialHomeSettlement` | property |
| `Color` | `uint Color` | property |
| `Color2` | `uint Color2` | property |
| `BasicTroop` | `CharacterObject BasicTroop` | property |
| `Leader` | `Hero Leader` | property |
| `Banner` | `Banner Banner` | property |
| `MBReadOnlyList` | `MBReadOnlyList<Settlement>Settlements` | property |
| `MBReadOnlyList` | `MBReadOnlyList<Town>Fiefs` | property |
| `MBReadOnlyList` | `MBReadOnlyList<Hero>AliveLords` | property |
| `MBReadOnlyList` | `MBReadOnlyList<Hero>DeadLords` | property |
| `MBReadOnlyList` | `MBReadOnlyList<Hero>Heroes` | property |
| `MBReadOnlyList` | `MBReadOnlyList<WarPartyComponent>WarPartyComponents` | property |
| `IsBanditFaction` | `bool IsBanditFaction` | property |
| `IsMinorFaction` | `bool IsMinorFaction` | property |
| `IsKingdomFaction` | `bool IsKingdomFaction` | property |
| `IsRebelClan` | `bool IsRebelClan` | property |
| `IsClan` | `bool IsClan` | property |
| `IsOutlaw` | `bool IsOutlaw` | property |
| `IsMapFaction` | `bool IsMapFaction` | property |
| `HasNavalNavigationCapability` | `bool HasNavalNavigationCapability` | property |
| `MapFaction` | `IFaction MapFaction` | property |
| `CurrentTotalStrength` | `float CurrentTotalStrength` | property |
| `FactionMidSettlement` | `Settlement FactionMidSettlement` | property |
| `DistanceToClosestNonAllyFortification` | `float DistanceToClosestNonAllyFortification` | property |
| `IsAtWarWith` | `bool IsAtWarWith(IFaction other);` | method |
| `GetStanceWith` | `StanceLink GetStanceWith(IFaction other);` | method |
| `MBReadOnlyList` | `MBReadOnlyList<IFaction>FactionsAtWarWith` | property |
| `UpdateFactionsAtWarWith` | `void UpdateFactionsAtWarWith();` | method |
| `TributeWallet` | `int TributeWallet` | property |
| `MainHeroCrimeRating` | `float MainHeroCrimeRating` | property |
| `DailyCrimeRatingChange` | `float DailyCrimeRatingChange` | property |
| `Aggressiveness` | `float Aggressiveness` | property |
| `IsEliminated` | `bool IsEliminated` | property |
| `DailyCrimeRatingChangeExplained` | `ExplainedNumber DailyCrimeRatingChangeExplained` | property |
| `NotAttackableByPlayerUntilTime` | `CampaignTime NotAttackableByPlayerUntilTime` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ActionNotes](../ActionNotes/)
- [same namespace AIBehaviorData](../AIBehaviorData/)
- [same namespace Army](../Army/)
- [same namespace AtmosphereGrid](../AtmosphereGrid/)
