---
title: "RidingModel"
description: "RidingModel: a public class in TaleWorlds.Core, inheriting MBGameModel<RidingModel>; 1 exposed members (1 methods, 0 properties, 0 fields). Source: TaleWorlds.Core/RidingModel.cs."
---
# RidingModel

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public abstract class RidingModel : MBGameModel<RidingModel>`
**File:** `TaleWorlds.Core/RidingModel.cs`

## Overview

RidingModel lives in the TaleWorlds.Core module, source file TaleWorlds.Core/RidingModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<RidingModel>; the inheritance chain is RidingModel → MBGameModel → GameModel. It exposes 1 public/protected members: 1 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: RidingModel is a top-level type in TaleWorlds.Core, namespace matching the module directory; inheritance chain RidingModel → MBGameModel → GameModel. The surface is method-led (methods 1/1, properties 0/1), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core/RidingModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CalculateAcceleration` | `public abstract float CalculateAcceleration(in EquipmentElement mountElement, in EquipmentElement harnessElement, int ridingSkill);` | method |

## See Also

- [↑ core module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface MBGameModel](../MBGameModel__1)
- [same namespace ActionSetCode](../ActionSetCode)
- [same namespace AgentAttackType](../AgentAttackType)
- [same namespace AgentControllerType](../AgentControllerType)
- [same namespace AgentData](../AgentData)
