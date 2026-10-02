---
title: "FormationArrangementModel"
description: "FormationArrangementModel: a public class in TaleWorlds.MountAndBlade.ComponentInterfaces, inheriting MBGameModel<FormationArrangementModel>; 3 exposed members (1 methods, 1 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/ComponentInterfaces/FormationArrangementModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# FormationArrangementModel

**Namespace:** `TaleWorlds.MountAndBlade.ComponentInterfaces`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public abstract class FormationArrangementModel : MBGameModel<FormationArrangementModel>`
**File:** `TaleWorlds.MountAndBlade/ComponentInterfaces/FormationArrangementModel.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

FormationArrangementModel lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/ComponentInterfaces/FormationArrangementModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<FormationArrangementModel>; the inheritance chain is FormationArrangementModel → MBGameModel → GameModel. It exposes 3 public/protected members: 1 methods, 1 properties, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: FormationArrangementModel lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.ComponentInterfaces`, inheritance chain FormationArrangementModel → MBGameModel → GameModel. The surface is method-led (methods 1/3, properties 1/3), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/ComponentInterfaces/FormationArrangementModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `List` | `public abstract List<FormationArrangementModel.ArrangementPosition>GetBannerBearerPositions(Formation formation, int maxCount);` | method |
| `ArrangementPosition` | `public struct ArrangementPosition` | property |
| `ArrangementPosition` | `public struct ArrangementPosition` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MBGameModel](../../core-extra/MBGameModel__1/)
- [same namespace AgentApplyDamageModel](../AgentApplyDamageModel/)
- [same namespace AgentDecideKilledOrUnconsciousModel](../AgentDecideKilledOrUnconsciousModel/)
- [same namespace ApplyWeatherEffectsModel](../ApplyWeatherEffectsModel/)
- [same namespace AutoBlockModel](../AutoBlockModel/)
