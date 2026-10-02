---
title: "DeletePlayer"
description: "DeletePlayer: a public class in TaleWorlds.MountAndBlade.Network.Messages, inheriting GameNetworkMessage; 8 exposed members (4 methods, 2 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/Network/Messages/DeletePlayer.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DeletePlayer

**Namespace:** `TaleWorlds.MountAndBlade.Network.Messages`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public sealed class DeletePlayer : GameNetworkMessage`
**File:** `TaleWorlds.MountAndBlade/Network/Messages/DeletePlayer.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

DeletePlayer lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/Network/Messages/DeletePlayer.cs. It is a public class (sealed), implementing/inheriting GameNetworkMessage; the inheritance chain is DeletePlayer → GameNetworkMessage. It exposes 8 public/protected members: 4 methods, 2 properties, 2 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DeletePlayer lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.Network.Messages`, inheritance chain DeletePlayer → GameNetworkMessage. The surface is method-led (methods 4/8, properties 2/8), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/Network/Messages/DeletePlayer.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `PlayerIndex` | `public int PlayerIndex` | property |
| `AddToDisconnectList` | `public bool AddToDisconnectList` | property |
| `DeletePlayer` | `public DeletePlayer(int playerIndex, bool addToDisconnectList)` | constructor |
| `DeletePlayer` | `public DeletePlayer()` | constructor |
| `OnWrite` | `protected override void OnWrite()` | method |
| `OnRead` | `protected override bool OnRead()` | method |
| `OnGetLogFilter` | `protected override MultiplayerMessageFilter OnGetLogFilter()` | method |
| `OnGetLogFormat` | `protected override string OnGetLogFormat()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface GameNetworkMessage](../GameNetworkMessage/)
- [same namespace CreatePlayer](../CreatePlayer/)
- [same namespace GameNetworkMessage](../GameNetworkMessage/)
