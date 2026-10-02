---
title: "DefaultItemValueModel"
description: "DefaultItemValueModel: a public class in TaleWorlds.Core, inheriting ItemValueModel; 4 exposed members (4 methods, 0 properties, 0 fields). Source: TaleWorlds.Core/DefaultItemValueModel.cs."
---
# DefaultItemValueModel

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public class DefaultItemValueModel : ItemValueModel`
**File:** `TaleWorlds.Core/DefaultItemValueModel.cs`

## Overview

DefaultItemValueModel lives in the TaleWorlds.Core module, source file TaleWorlds.Core/DefaultItemValueModel.cs. It is a public class, implementing/inheriting ItemValueModel; the inheritance chain is DefaultItemValueModel → ItemValueModel → MBGameModel → GameModel. It exposes 4 public/protected members: 4 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultItemValueModel is a top-level type in TaleWorlds.Core, namespace matching the module directory; inheritance chain DefaultItemValueModel → ItemValueModel → MBGameModel → GameModel. The surface is method-led (methods 4/4, properties 0/4), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core/DefaultItemValueModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CalculateValue` | `public override int CalculateValue(ItemObject item)` | method |
| `GetIsTransferable` | `public override bool GetIsTransferable(ItemObject item)` | method |
| `GetEquipmentValueFromTier` | `public override float GetEquipmentValueFromTier(float itemTierf)` | method |
| `CalculateTier` | `public override float CalculateTier(ItemObject item)` | method |

## See Also

- [↑ core module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface ItemValueModel](../ItemValueModel)
- [same namespace ActionSetCode](../ActionSetCode)
- [same namespace AgentAttackType](../AgentAttackType)
- [same namespace AgentControllerType](../AgentControllerType)
- [same namespace AgentData](../AgentData)
