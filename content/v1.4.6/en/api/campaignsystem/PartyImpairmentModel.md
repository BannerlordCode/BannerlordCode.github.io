---
title: "PartyImpairmentModel"
description: "PartyImpairmentModel: a public class in TaleWorlds.CampaignSystem, inheriting MBGameModel<PartyImpairmentModel>; 4 exposed members (4 methods, 0 properties, 0 fields). Source: TaleWorlds.CampaignSystem/ComponentInterfaces/PartyImpairmentModel.cs."
---
# PartyImpairmentModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class PartyImpairmentModel : MBGameModel<PartyImpairmentModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PartyImpairmentModel.cs`

## Overview

PartyImpairmentModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ComponentInterfaces/PartyImpairmentModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<PartyImpairmentModel>; the inheritance chain is PartyImpairmentModel → MBGameModel. It exposes 4 public/protected members: 4 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PartyImpairmentModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.ComponentInterfaces) the module directory; inheritance chain PartyImpairmentModel → MBGameModel. The surface is method-led (methods 4/4, properties 0/4), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ComponentInterfaces/PartyImpairmentModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetDisorganizedStateDuration` | `public abstract ExplainedNumber GetDisorganizedStateDuration(MobileParty party);` | method |
| `GetVulnerabilityStateDuration` | `public abstract float GetVulnerabilityStateDuration(PartyBase party);` | method |
| `GetSiegeExpectedVulnerabilityTime` | `public abstract float GetSiegeExpectedVulnerabilityTime();` | method |
| `CanGetDisorganized` | `public abstract bool CanGetDisorganized(PartyBase partyBase);` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AgeModel](../AgeModel)
- [same namespace AlleyModel](../AlleyModel)
- [same namespace AllianceModel](../AllianceModel)
- [same namespace ArmyManagementCalculationModel](../ArmyManagementCalculationModel)
