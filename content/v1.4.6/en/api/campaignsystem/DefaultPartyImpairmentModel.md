---
title: "DefaultPartyImpairmentModel"
description: "DefaultPartyImpairmentModel: a public class in TaleWorlds.CampaignSystem, inheriting PartyImpairmentModel; 4 exposed members (4 methods, 0 properties, 0 fields). Source: TaleWorlds.CampaignSystem/GameComponents/DefaultPartyImpairmentModel.cs."
---
# DefaultPartyImpairmentModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultPartyImpairmentModel : PartyImpairmentModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPartyImpairmentModel.cs`

## Overview

DefaultPartyImpairmentModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultPartyImpairmentModel.cs. It is a public class, implementing/inheriting PartyImpairmentModel; the inheritance chain is DefaultPartyImpairmentModel → PartyImpairmentModel → MBGameModel. It exposes 4 public/protected members: 4 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultPartyImpairmentModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.GameComponents) the module directory; inheritance chain DefaultPartyImpairmentModel → PartyImpairmentModel → MBGameModel. The surface is method-led (methods 4/4, properties 0/4), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultPartyImpairmentModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetSiegeExpectedVulnerabilityTime` | `public override float GetSiegeExpectedVulnerabilityTime()` | method |
| `GetDisorganizedStateDuration` | `public override ExplainedNumber GetDisorganizedStateDuration(MobileParty party)` | method |
| `CanGetDisorganized` | `public override bool CanGetDisorganized(PartyBase party)` | method |
| `GetVulnerabilityStateDuration` | `public override float GetVulnerabilityStateDuration(PartyBase party)` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface PartyImpairmentModel](../PartyImpairmentModel)
- [same namespace DefaultAgeModel](../DefaultAgeModel)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel)
