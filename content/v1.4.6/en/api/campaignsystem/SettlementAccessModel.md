---
title: "SettlementAccessModel"
description: "SettlementAccessModel: a public class in TaleWorlds.CampaignSystem, inheriting MBGameModel<SettlementAccessModel>; 22 exposed members (6 methods, 8 properties, 0 fields). Source: TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementAccessModel.cs."
---
# SettlementAccessModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class SettlementAccessModel : MBGameModel<SettlementAccessModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementAccessModel.cs`

## Overview

SettlementAccessModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementAccessModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<SettlementAccessModel>; the inheritance chain is SettlementAccessModel → MBGameModel. It exposes 22 public/protected members: 6 methods, 8 properties, 8 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SettlementAccessModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.ComponentInterfaces) the module directory; inheritance chain SettlementAccessModel → MBGameModel. The surface is property-led (properties 8/22, methods 6/22), so it mostly exposes state for reading. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementAccessModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
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

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AgeModel](../AgeModel)
- [same namespace AlleyModel](../AlleyModel)
- [same namespace AllianceModel](../AllianceModel)
- [same namespace ArmyManagementCalculationModel](../ArmyManagementCalculationModel)
