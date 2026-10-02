---
title: "SettlementAccessModel"
description: "SettlementAccessModel: a public class in TaleWorlds.CampaignSystem.ComponentInterfaces, inheriting MBGameModel<SettlementAccessModel>; 22 exposed members (6 methods, 8 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementAccessModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SettlementAccessModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class SettlementAccessModel : MBGameModel<SettlementAccessModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementAccessModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.ComponentInterfaces)

## Overview

SettlementAccessModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementAccessModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<SettlementAccessModel>; the inheritance chain is SettlementAccessModel → MBGameModel → GameModel. It exposes 22 public/protected members: 6 methods, 8 properties, 8 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SettlementAccessModel lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.ComponentInterfaces`), namespace `TaleWorlds.CampaignSystem.ComponentInterfaces`, inheritance chain SettlementAccessModel → MBGameModel → GameModel. The surface is property-led (properties 8/22, methods 6/22), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementAccessModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `CanMainHeroEnterSettlement` | `public abstract void CanMainHeroEnterSettlement(Settlement settlement, out SettlementAccessModel.AccessDetails accessDetails);` | method |
| `CanMainHeroEnterLordsHall` | `public abstract void CanMainHeroEnterLordsHall(Settlement settlement, out SettlementAccessModel.AccessDetails accessDetails);` | method |
| `CanMainHeroEnterDungeon` | `public abstract void CanMainHeroEnterDungeon(Settlement settlement, out SettlementAccessModel.AccessDetails accessDetails);` | method |
| `CanMainHeroAccessLocation` | `public abstract bool CanMainHeroAccessLocation(Settlement settlement, string locationId, out bool disableOption, out TextObject disabledText);` | method |
| `CanMainHeroDoSettlementAction` | `public abstract bool CanMainHeroDoSettlementAction(Settlement settlement, SettlementAccessModel.SettlementAction settlementAction, out bool disableOption, out TextObject disabledText);` | method |
| `IsRequestMeetingOptionAvailable` | `public abstract bool IsRequestMeetingOptionAvailable(Settlement settlement, out bool disableOption, out TextObject disabledText);` | method |
| `AccessLevel` | `public enum AccessLevel` | property |
| `AccessMethod` | `public enum AccessMethod` | property |
| `AccessLimitationReason` | `public enum AccessLimitationReason` | property |
| `LimitedAccessSolution` | `public enum LimitedAccessSolution` | property |
| `PreliminaryActionObligation` | `public enum PreliminaryActionObligation` | property |
| `PreliminaryActionType` | `public enum PreliminaryActionType` | property |
| `SettlementAction` | `public enum SettlementAction` | property |
| `AccessDetails` | `public struct AccessDetails` | property |
| `AccessLevel` | `public enum AccessLevel` | nested type |
| `AccessMethod` | `public enum AccessMethod` | nested type |
| `AccessLimitationReason` | `public enum AccessLimitationReason` | nested type |
| `LimitedAccessSolution` | `public enum LimitedAccessSolution` | nested type |
| `PreliminaryActionObligation` | `public enum PreliminaryActionObligation` | nested type |
| `PreliminaryActionType` | `public enum PreliminaryActionType` | nested type |
| `SettlementAction` | `public enum SettlementAction` | nested type |
| `AccessDetails` | `public struct AccessDetails` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MBGameModel](../../core-extra/MBGameModel__1/)
- [same namespace AgeModel](../AgeModel/)
- [same namespace AlleyModel](../AlleyModel/)
- [same namespace AllianceModel](../AllianceModel/)
- [same namespace ArmyManagementCalculationModel](../ArmyManagementCalculationModel/)
