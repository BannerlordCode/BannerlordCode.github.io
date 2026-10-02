---
title: "FormationArrangementModel"
description: "FormationArrangementModel: a public class in TaleWorlds.MountAndBlade, inheriting MBGameModel<FormationArrangementModel>; 3 exposed members (1 methods, 1 properties, 0 fields). Source: TaleWorlds.MountAndBlade/ComponentInterfaces/FormationArrangementModel.cs."
---
# FormationArrangementModel

**Namespace:** `TaleWorlds.MountAndBlade.ComponentInterfaces`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public abstract class FormationArrangementModel : MBGameModel<FormationArrangementModel>`
**File:** `TaleWorlds.MountAndBlade/ComponentInterfaces/FormationArrangementModel.cs`

## Overview

FormationArrangementModel lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/ComponentInterfaces/FormationArrangementModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<FormationArrangementModel>; the inheritance chain is FormationArrangementModel → MBGameModel. It exposes 3 public/protected members: 1 methods, 1 properties, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: FormationArrangementModel is a top-level type in TaleWorlds.MountAndBlade, namespace differing from (TaleWorlds.MountAndBlade.ComponentInterfaces) the module directory; inheritance chain FormationArrangementModel → MBGameModel. The surface is method-led (methods 1/3, properties 1/3), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/ComponentInterfaces/FormationArrangementModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `List` | `public abstract List<FormationArrangementModel.ArrangementPosition>GetBannerBearerPositions(Formation formation, int maxCount);` | method |
| `ArrangementPosition` | `public struct ArrangementPosition` | property |
| `ArrangementPosition` | `public struct ArrangementPosition` | nested type |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AgentApplyDamageModel](../AgentApplyDamageModel)
- [same namespace AgentDecideKilledOrUnconsciousModel](../AgentDecideKilledOrUnconsciousModel)
- [same namespace ApplyWeatherEffectsModel](../ApplyWeatherEffectsModel)
- [same namespace AutoBlockModel](../AutoBlockModel)
