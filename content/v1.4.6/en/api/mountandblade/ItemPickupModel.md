---
title: "ItemPickupModel"
description: "ItemPickupModel: a public class in TaleWorlds.MountAndBlade, inheriting MBGameModel<ItemPickupModel>; 3 exposed members (3 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade/ComponentInterfaces/ItemPickupModel.cs."
---
# ItemPickupModel

**Namespace:** `TaleWorlds.MountAndBlade.ComponentInterfaces`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public abstract class ItemPickupModel : MBGameModel<ItemPickupModel>`
**File:** `TaleWorlds.MountAndBlade/ComponentInterfaces/ItemPickupModel.cs`

## Overview

ItemPickupModel lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/ComponentInterfaces/ItemPickupModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<ItemPickupModel>; the inheritance chain is ItemPickupModel → MBGameModel. It exposes 3 public/protected members: 3 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ItemPickupModel is a top-level type in TaleWorlds.MountAndBlade, namespace differing from (TaleWorlds.MountAndBlade.ComponentInterfaces) the module directory; inheritance chain ItemPickupModel → MBGameModel. The surface is method-led (methods 3/3, properties 0/3), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/ComponentInterfaces/ItemPickupModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetItemScoreForAgent` | `public abstract float GetItemScoreForAgent(SpawnedItemEntity item, Agent agent);` | method |
| `IsItemAvailableForAgent` | `public abstract bool IsItemAvailableForAgent(SpawnedItemEntity item, Agent agent, EquipmentIndex slotToPickUp);` | method |
| `IsAgentEquipmentSuitableForPickUpAvailability` | `public abstract bool IsAgentEquipmentSuitableForPickUpAvailability(Agent agent);` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AgentApplyDamageModel](../AgentApplyDamageModel)
- [same namespace AgentDecideKilledOrUnconsciousModel](../AgentDecideKilledOrUnconsciousModel)
- [same namespace ApplyWeatherEffectsModel](../ApplyWeatherEffectsModel)
- [same namespace AutoBlockModel](../AutoBlockModel)
