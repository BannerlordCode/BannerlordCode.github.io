---
title: "CreatePlayer"
description: "CreatePlayer: a public class in TaleWorlds.MountAndBlade.Network.Messages, inheriting GameNetworkMessage; 11 exposed members (4 methods, 5 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/Network/Messages/CreatePlayer.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CreatePlayer

**Namespace:** `TaleWorlds.MountAndBlade.Network.Messages`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public sealed class CreatePlayer : GameNetworkMessage`
**File:** `TaleWorlds.MountAndBlade/Network/Messages/CreatePlayer.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

CreatePlayer lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/Network/Messages/CreatePlayer.cs. It is a public class (sealed), implementing/inheriting GameNetworkMessage; the inheritance chain is CreatePlayer → GameNetworkMessage. It exposes 11 public/protected members: 4 methods, 5 properties, 2 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CreatePlayer lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.Network.Messages`, inheritance chain CreatePlayer → GameNetworkMessage. The surface is property-led (properties 5/11, methods 4/11), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/Network/Messages/CreatePlayer.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `PlayerIndex` | `public int PlayerIndex` | property |
| `PlayerName` | `public string PlayerName` | property |
| `DisconnectedPeerIndex` | `public int DisconnectedPeerIndex` | property |
| `IsNonExistingDisconnectedPeer` | `public bool IsNonExistingDisconnectedPeer` | property |
| `IsReceiverPeer` | `public bool IsReceiverPeer` | property |
| `CreatePlayer` | `public CreatePlayer(int playerIndex, string playerName, int disconnectedPeerIndex, bool isNonExistingDisconnectedPeer = false, bool isReceiverPeer = false)` | constructor |
| `CreatePlayer` | `public CreatePlayer()` | constructor |
| `OnWrite` | `protected override void OnWrite()` | method |
| `OnRead` | `protected override bool OnRead()` | method |
| `OnGetLogFilter` | `protected override MultiplayerMessageFilter OnGetLogFilter()` | method |
| `OnGetLogFormat` | `protected override string OnGetLogFormat()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface GameNetworkMessage](../GameNetworkMessage/)
- [same namespace DeletePlayer](../DeletePlayer/)
- [same namespace GameNetworkMessage](../GameNetworkMessage/)
