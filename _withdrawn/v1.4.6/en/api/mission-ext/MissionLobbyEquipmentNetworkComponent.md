---
title: "MissionLobbyEquipmentNetworkComponent"
description: "MissionLobbyEquipmentNetworkComponent: a public class in TaleWorlds.MountAndBlade, inheriting MissionNetwork; 12 exposed members (8 methods, 0 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/MissionLobbyEquipmentNetworkComponent.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MissionLobbyEquipmentNetworkComponent

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class MissionLobbyEquipmentNetworkComponent : MissionNetwork`
**File:** `TaleWorlds.MountAndBlade/MissionLobbyEquipmentNetworkComponent.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

MissionLobbyEquipmentNetworkComponent lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/MissionLobbyEquipmentNetworkComponent.cs. It is a public class, implementing/inheriting MissionNetwork; the inheritance chain is MissionLobbyEquipmentNetworkComponent → MissionNetwork → MissionLogic → MissionBehavior → IMissionBehavior. It exposes 12 public/protected members: 8 methods, 2 events, 2 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionLobbyEquipmentNetworkComponent lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain MissionLobbyEquipmentNetworkComponent → MissionNetwork → MissionLogic → MissionBehavior → IMissionBehavior. The surface is method-led (methods 8/12, properties 0/12), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/MissionLobbyEquipmentNetworkComponent.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `OnToggleLoadout;` | `public event MissionLobbyEquipmentNetworkComponent.OnToggleLoadoutDelegate OnToggleLoadout;` | event |
| `OnEquipmentRefreshed;` | `public event MissionLobbyEquipmentNetworkComponent.OnRefreshEquipmentEventDelegate OnEquipmentRefreshed;` | event |
| `OnBehaviorInitialize` | `public override void OnBehaviorInitialize()` | method |
| `OnEndMission` | `protected override void OnEndMission()` | method |
| `AddRemoveMessageHandlers` | `protected override void AddRemoveMessageHandlers(GameNetwork.NetworkMessageHandlerRegistererContainer registerer)` | method |
| `PerkUpdated` | `public void PerkUpdated(int perkList, int perkIndex)` | method |
| `EquipmentUpdated` | `public void EquipmentUpdated()` | method |
| `ToggleLoadout` | `public void ToggleLoadout(bool isActive)` | method |
| `OnToggleLoadoutDelegate` | `public delegate void OnToggleLoadoutDelegate(bool isActive);` | method |
| `OnRefreshEquipmentEventDelegate` | `public delegate void OnRefreshEquipmentEventDelegate(MissionPeer lobbyPeer);` | method |
| `OnToggleLoadoutDelegate` | `public delegate void OnToggleLoadoutDelegate(bool isActive)` | nested type |
| `OnRefreshEquipmentEventDelegate` | `public delegate void OnRefreshEquipmentEventDelegate(MissionPeer lobbyPeer)` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MissionNetwork](../MissionNetwork/)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
