---
title: "DefaultItemPickupModel"
description: "DefaultItemPickupModel: a public class in TaleWorlds.MountAndBlade, inheriting ItemPickupModel; 3 exposed members (3 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade/DefaultItemPickupModel.cs."
---
# DefaultItemPickupModel

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class DefaultItemPickupModel : ItemPickupModel`
**File:** `TaleWorlds.MountAndBlade/DefaultItemPickupModel.cs`

## Overview

DefaultItemPickupModel lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/DefaultItemPickupModel.cs. It is a public class, implementing/inheriting ItemPickupModel; the inheritance chain is DefaultItemPickupModel → ItemPickupModel → MBGameModel. It exposes 3 public/protected members: 3 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultItemPickupModel is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain DefaultItemPickupModel → ItemPickupModel → MBGameModel. The surface is method-led (methods 3/3, properties 0/3), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/DefaultItemPickupModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetItemScoreForAgent` | `public override float GetItemScoreForAgent(SpawnedItemEntity item, Agent agent)` | method |
| `IsItemAvailableForAgent` | `public override bool IsItemAvailableForAgent(SpawnedItemEntity item, Agent agent, EquipmentIndex slotToPickUp)` | method |
| `IsAgentEquipmentSuitableForPickUpAvailability` | `public override bool IsAgentEquipmentSuitableForPickUpAvailability(Agent agent)` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface ItemPickupModel](../ItemPickupModel)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
