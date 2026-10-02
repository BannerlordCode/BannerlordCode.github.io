---
title: "NetworkCommunicator"
description: "NetworkCommunicator: a public class in TaleWorlds.MountAndBlade, inheriting ICommunicator; 29 exposed members (7 methods, 19 properties, 0 fields). Source: TaleWorlds.MountAndBlade/NetworkCommunicator.cs."
---
# NetworkCommunicator

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public sealed class NetworkCommunicator : ICommunicator`
**File:** `TaleWorlds.MountAndBlade/NetworkCommunicator.cs`

## Overview

NetworkCommunicator lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/NetworkCommunicator.cs. It is a public class (sealed), implementing/inheriting ICommunicator; the inheritance chain is NetworkCommunicator → ICommunicator. It exposes 29 public/protected members: 7 methods, 19 properties, 3 events.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: NetworkCommunicator is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain NetworkCommunicator → ICommunicator. The surface is property-led (properties 19/29, methods 7/29), so it mostly exposes state for reading. ICommunicator on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/NetworkCommunicator.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Action` | `public static event Action<PeerComponent>OnPeerComponentAdded;` | event |
| `Action` | `public static event Action<NetworkCommunicator>OnPeerSynchronized;` | event |
| `Action` | `public static event Action<NetworkCommunicator>OnPeerAveragePingUpdated;` | event |
| `VirtualPlayer` | `public VirtualPlayer VirtualPlayer` | property |
| `PlayerConnectionInfo` | `public PlayerConnectionInfo PlayerConnectionInfo` | property |
| `QuitFromMission` | `public bool QuitFromMission` | property |
| `SessionKey` | `public int SessionKey` | property |
| `JustReconnecting` | `public bool JustReconnecting` | property |
| `AveragePingInMilliseconds` | `public double AveragePingInMilliseconds` | property |
| `AverageLossPercent` | `public double AverageLossPercent` | property |
| `IsMine` | `public bool IsMine` | property |
| `IsAdmin` | `public bool IsAdmin` | property |
| `Index` | `public int Index` | property |
| `UserName` | `public string UserName` | property |
| `ControlledAgent` | `public Agent ControlledAgent` | property |
| `IsMuted` | `public bool IsMuted` | property |
| `ForcedAvatarIndex` | `public int ForcedAvatarIndex` | property |
| `IsNetworkActive` | `public bool IsNetworkActive` | property |
| `IsConnectionActive` | `public bool IsConnectionActive` | property |
| `IsSynchronized` | `public bool IsSynchronized` | property |
| `IsServerPeer` | `public bool IsServerPeer` | property |
| `ServerPerformanceProblemState` | `public ServerPerformanceState ServerPerformanceProblemState` | property |
| `SetRelevantGameOptions` | `public void SetRelevantGameOptions(bool sendMeBloodEvents, bool sendMeSoundEvents)` | method |
| `GetHost` | `public uint GetHost()` | method |
| `GetReversedHost` | `public uint GetReversedHost()` | method |
| `GetPort` | `public ushort GetPort()` | method |
| `UpdateConnectionInfoForReconnect` | `public void UpdateConnectionInfoForReconnect(PlayerConnectionInfo playerConnectionInfo, bool isAdmin)` | method |
| `UpdateIndexForReconnectingPlayer` | `public void UpdateIndexForReconnectingPlayer(int newIndex)` | method |
| `UpdateForJoiningCustomGame` | `public void UpdateForJoiningCustomGame(bool isAdmin)` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
