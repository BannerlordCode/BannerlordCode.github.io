---
title: "AutoBlockModel"
description: "AutoBlockModel: a public class in TaleWorlds.MountAndBlade, inheriting MBGameModel<AutoBlockModel>; 1 exposed members (1 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade/ComponentInterfaces/AutoBlockModel.cs."
---
# AutoBlockModel

**Namespace:** `TaleWorlds.MountAndBlade.ComponentInterfaces`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public abstract class AutoBlockModel : MBGameModel<AutoBlockModel>`
**File:** `TaleWorlds.MountAndBlade/ComponentInterfaces/AutoBlockModel.cs`

## Overview

AutoBlockModel lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/ComponentInterfaces/AutoBlockModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<AutoBlockModel>; the inheritance chain is AutoBlockModel → MBGameModel. It exposes 1 public/protected members: 1 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: AutoBlockModel is a top-level type in TaleWorlds.MountAndBlade, namespace differing from (TaleWorlds.MountAndBlade.ComponentInterfaces) the module directory; inheritance chain AutoBlockModel → MBGameModel. The surface is method-led (methods 1/1, properties 0/1), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/ComponentInterfaces/AutoBlockModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetBlockDirection` | `public abstract Agent.UsageDirection GetBlockDirection(Mission mission);` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AgentApplyDamageModel](../AgentApplyDamageModel)
- [same namespace AgentDecideKilledOrUnconsciousModel](../AgentDecideKilledOrUnconsciousModel)
- [same namespace ApplyWeatherEffectsModel](../ApplyWeatherEffectsModel)
- [same namespace BattleBannerBearersModel](../BattleBannerBearersModel)
