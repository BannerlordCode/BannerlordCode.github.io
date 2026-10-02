---
title: "IGameNetworkHandler"
description: "IGameNetworkHandler: a public interface in TaleWorlds.MountAndBlade; 10 exposed members (10 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade/IGameNetworkHandler.cs."
---
# IGameNetworkHandler

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public interface IGameNetworkHandler`
**File:** `TaleWorlds.MountAndBlade/IGameNetworkHandler.cs`

## Overview

IGameNetworkHandler lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/IGameNetworkHandler.cs. It is a public interface; the inheritance chain is IGameNetworkHandler. It exposes 10 public/protected members: 10 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: IGameNetworkHandler is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain IGameNetworkHandler. The surface is method-led (methods 10/10, properties 0/10), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/IGameNetworkHandler.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnNewPlayerConnect` | `void OnNewPlayerConnect(PlayerConnectionInfo playerConnectionInfo, NetworkCommunicator networkPeer);` | method |
| `OnInitialize` | `void OnInitialize();` | method |
| `OnPlayerConnectedToServer` | `void OnPlayerConnectedToServer(NetworkCommunicator peer);` | method |
| `OnPlayerDisconnectedFromServer` | `void OnPlayerDisconnectedFromServer(NetworkCommunicator peer);` | method |
| `OnDisconnectedFromServer` | `void OnDisconnectedFromServer();` | method |
| `OnStartMultiplayer` | `void OnStartMultiplayer();` | method |
| `OnStartReplay` | `void OnStartReplay();` | method |
| `OnEndMultiplayer` | `void OnEndMultiplayer();` | method |
| `OnEndReplay` | `void OnEndReplay();` | method |
| `OnHandleConsoleCommand` | `void OnHandleConsoleCommand(string command);` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
