---
title: "MPPerksAgentComponent"
description: "MPPerksAgentComponent: a public class in TaleWorlds.MountAndBlade, inheriting AgentComponent; 6 exposed members (5 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade/MPPerksAgentComponent.cs."
---
# MPPerksAgentComponent

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class MPPerksAgentComponent : AgentComponent`
**File:** `TaleWorlds.MountAndBlade/MPPerksAgentComponent.cs`

## Overview

MPPerksAgentComponent lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/MPPerksAgentComponent.cs. It is a public class, implementing/inheriting AgentComponent; the inheritance chain is MPPerksAgentComponent → AgentComponent. It exposes 6 public/protected members: 5 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MPPerksAgentComponent is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain MPPerksAgentComponent → AgentComponent. The surface is method-led (methods 5/6, properties 0/6), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/MPPerksAgentComponent.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MPPerksAgentComponent` | `public MPPerksAgentComponent(Agent agent) : base(agent)` | constructor |
| `OnMount` | `public override void OnMount(Agent mount)` | method |
| `OnDismount` | `public override void OnDismount(Agent mount)` | method |
| `OnItemPickup` | `public override void OnItemPickup(SpawnedItemEntity item)` | method |
| `OnWeaponDrop` | `public override void OnWeaponDrop(MissionWeapon droppedWeapon)` | method |
| `OnAgentRemoved` | `public override void OnAgentRemoved()` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface AgentComponent](../AgentComponent)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
