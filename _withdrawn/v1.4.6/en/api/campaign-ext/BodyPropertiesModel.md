---
title: "BodyPropertiesModel"
description: "BodyPropertiesModel: a public class in TaleWorlds.CampaignSystem.ComponentInterfaces, inheriting MBGameModel<BodyPropertiesModel>; 3 exposed members (3 methods, 0 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/ComponentInterfaces/BodyPropertiesModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BodyPropertiesModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class BodyPropertiesModel : MBGameModel<BodyPropertiesModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/BodyPropertiesModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.ComponentInterfaces)

## Overview

BodyPropertiesModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ComponentInterfaces/BodyPropertiesModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<BodyPropertiesModel>; the inheritance chain is BodyPropertiesModel → MBGameModel → GameModel. It exposes 3 public/protected members: 3 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BodyPropertiesModel lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.ComponentInterfaces`), namespace `TaleWorlds.CampaignSystem.ComponentInterfaces`, inheritance chain BodyPropertiesModel → MBGameModel → GameModel. The surface is method-led (methods 3/3, properties 0/3), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ComponentInterfaces/BodyPropertiesModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `int[]GetHairIndicesForCulture` | `public abstract int[]GetHairIndicesForCulture(int race, int gender, float age, CultureObject culture);` | method |
| `int[]GetBeardIndicesForCulture` | `public abstract int[]GetBeardIndicesForCulture(int race, int gender, float age, CultureObject culture);` | method |
| `int[]GetTattooIndicesForCulture` | `public abstract int[]GetTattooIndicesForCulture(int race, int gender, float age, CultureObject culture);` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MBGameModel](../../core-extra/MBGameModel__1/)
- [same namespace AgeModel](../AgeModel/)
- [same namespace AlleyModel](../AlleyModel/)
- [same namespace AllianceModel](../AllianceModel/)
- [same namespace ArmyManagementCalculationModel](../ArmyManagementCalculationModel/)
