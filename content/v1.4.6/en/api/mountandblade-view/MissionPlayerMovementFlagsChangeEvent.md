---
title: "MissionPlayerMovementFlagsChangeEvent"
description: "MissionPlayerMovementFlagsChangeEvent: a public class in TaleWorlds.MountAndBlade.View, inheriting EventBase; 2 exposed members (0 methods, 1 properties, 0 fields). Source: TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/MissionPlayerMovementFlagsChangeEvent.cs."
---
# MissionPlayerMovementFlagsChangeEvent

**Namespace:** `TaleWorlds.MountAndBlade.View.MissionViews`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public class MissionPlayerMovementFlagsChangeEvent : EventBase`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/MissionPlayerMovementFlagsChangeEvent.cs`

## Overview

MissionPlayerMovementFlagsChangeEvent lives in the TaleWorlds.MountAndBlade.View module, source file TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/MissionPlayerMovementFlagsChangeEvent.cs. It is a public class, implementing/inheriting EventBase; the inheritance chain is MissionPlayerMovementFlagsChangeEvent → EventBase. It exposes 2 public/protected members: 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionPlayerMovementFlagsChangeEvent is a top-level type in TaleWorlds.MountAndBlade.View, namespace differing from (TaleWorlds.MountAndBlade.View.MissionViews) the module directory; inheritance chain MissionPlayerMovementFlagsChangeEvent → EventBase. The surface is property-led (properties 1/2, methods 0/2), so it mostly exposes state for reading. EventBase on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/MissionPlayerMovementFlagsChangeEvent.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MovementFlag` | `public Agent.MovementControlFlag MovementFlag` | property |
| `MissionPlayerMovementFlagsChangeEvent` | `public MissionPlayerMovementFlagsChangeEvent(Agent.MovementControlFlag movementFlag)` | constructor |

## See Also

- [↑ mountandblade-view module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace MissionAgentContourControllerView](../MissionAgentContourControllerView)
- [same namespace MissionAgentLabelView](../MissionAgentLabelView)
- [same namespace MissionAgentStatusUIHandler](../MissionAgentStatusUIHandler)
- [same namespace MissionBattleUIBaseView](../MissionBattleUIBaseView)
