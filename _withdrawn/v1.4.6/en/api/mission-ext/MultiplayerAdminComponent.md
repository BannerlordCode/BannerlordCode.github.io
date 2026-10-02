---
title: "MultiplayerAdminComponent"
description: "MultiplayerAdminComponent: a public class in TaleWorlds.MountAndBlade, inheriting MissionNetwork; 25 exposed members (21 methods, 0 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds/MountAndBlade/MultiplayerAdminComponent.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MultiplayerAdminComponent

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade.Multiplayer`
**Type:** `public class MultiplayerAdminComponent : MissionNetwork`
**File:** `TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds/MountAndBlade/MultiplayerAdminComponent.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

MultiplayerAdminComponent lives in the TaleWorlds.MountAndBlade.Multiplayer module, source file TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds/MountAndBlade/MultiplayerAdminComponent.cs. It is a public class, implementing/inheriting MissionNetwork; the inheritance chain is MultiplayerAdminComponent → MissionNetwork → MissionLogic → MissionBehavior → IMissionBehavior. It exposes 25 public/protected members: 21 methods, 1 events, 1 constructors, 2 nested types. The decompiler split this type across 2 source files; the signatures are merged.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MultiplayerAdminComponent lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain MultiplayerAdminComponent → MissionNetwork → MissionLogic → MissionBehavior → IMissionBehavior. The surface is method-led (methods 21/25, properties 0/25), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds/MountAndBlade/MultiplayerAdminComponent.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `OnSetAdminMenuActiveState;` | `public event MultiplayerAdminComponent.OnSetAdminMenuActiveStateDelegate OnSetAdminMenuActiveState;` | event |
| `MultiplayerAdminComponent` | `public MultiplayerAdminComponent()` | constructor |
| `OnMissionStateActivated` | `public override void OnMissionStateActivated()` | method |
| `ChangeAdminMenuActiveState` | `public void ChangeAdminMenuActiveState(bool isActive)` | method |
| `KickPlayer` | `public void KickPlayer(NetworkCommunicator peerToKick, bool banPlayer)` | method |
| `GlobalMuteUnmutePlayer` | `public void GlobalMuteUnmutePlayer(NetworkCommunicator peerToMute, bool unmute)` | method |
| `EndWarmup` | `public void EndWarmup()` | method |
| `ChangeWelcomeMessage` | `public void ChangeWelcomeMessage(string newWelcomeMessage)` | method |
| `AdminAnnouncement` | `public void AdminAnnouncement(string message, bool isBroadcast)` | method |
| `ChangeClassRestriction` | `public void ChangeClassRestriction(FormationClass classToChangeRestriction, bool newValue)` | method |
| `AdminEndMission` | `public void AdminEndMission()` | method |
| `OnBehaviorInitialize` | `public override void OnBehaviorInitialize()` | method |
| `AddRemoveMessageHandlers` | `protected override void AddRemoveMessageHandlers(GameNetwork.NetworkMessageHandlerRegistererContainer registerer)` | method |
| `MPAdminAnnouncement` | `public static string MPAdminAnnouncement(List<string>strings)` | method |
| `OnRemoveBehavior` | `public override void OnRemoveBehavior()` | method |
| `MPAdminKickPlayer` | `public static string MPAdminKickPlayer(List<string>strings)` | method |
| `MPAdminBanPlayer` | `public static string MPAdminBanPlayer(List<string>strings)` | method |
| `MPAdminChangeWelcomeMessage` | `public static string MPAdminChangeWelcomeMessage(List<string>strings)` | method |
| `MPAdminChangeClassRestriction` | `public static string MPAdminChangeClassRestriction(List<string>strings)` | method |
| `MPHostRestartGame` | `public static string MPHostRestartGame(List<string>strings)` | method |
| `MPAdminChangeServerSlots` | `public static string MPAdminChangeServerSlots(List<string>strings)` | method |
| `OnSelectPlayerToKickDelegate` | `public delegate void OnSelectPlayerToKickDelegate(bool banPlayer);` | method |
| `OnSetAdminMenuActiveStateDelegate` | `public delegate void OnSetAdminMenuActiveStateDelegate(bool showMenu);` | method |
| `OnSelectPlayerToKickDelegate` | `public delegate void OnSelectPlayerToKickDelegate(bool banPlayer)` | nested type |
| `OnSetAdminMenuActiveStateDelegate` | `public delegate void OnSetAdminMenuActiveStateDelegate(bool showMenu)` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MissionNetwork](../MissionNetwork/)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
