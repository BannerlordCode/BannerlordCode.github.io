---
title: "Network — the non-gameplay network channel"
description: "Where TaleWorlds.Network lives: sessions, connections and message transport. No pages."
---
# Network — the non-gameplay network channel

`TaleWorlds.Network`. This is the **transport layer**: sessions, connections, and the sending and serialising of messages.

One thing to be clear about from the start: multiplayer **gameplay state sync is not in this bucket**. Battle sync lives in [mission-ext](../mission-ext/) (`MissionNetworkComponent`, `MissionNetwork`, the `MissionMultiplayer*` family), and campaign-side multiplayer is not here either. This namespace covers "how do I get bytes from A to B", not "what bytes".

What it handles is lobbies, peer discovery, session establishment and the wire format underneath: `INetworkSerializable`, `INetworkMessageReader`, `INetworkMessageWriter`, `ClientsideSession`, `ClientWebSocketHandler`, `ConnectionState`, and the `Coroutine` family.

## Pages in this area (0)

There are no pages in this bucket.

## Not yet written

Types the namespace rule puts here that have no page: `ClientsideSession`, `ClientSocketSession`, `ClientRestSession`, `ClientWebSocketHandler`, `ClientMessageHandler`, `ConnectionState`, `IncomingServerSessionMessage`, `IMessageProxyClient`, `INetworkSerializable`, `INetworkMessageReader`, `INetworkMessageWriter`, `JsonSocketMessage`, `CorrelateId`, `ConnectionRequest`, `Message`, `NetworkMessage`, and the `Coroutine` / `CoroutineManager` / `CoroutineState` family.

About 6 documented types, no pages. The bucket was always small, but if you are writing a multiplayer mod there is currently nothing usable here: the interface surface you would actually depend on is `INetworkSerializable` plus the reader/writer pair, and none of those three has a page.

## Sibling areas

[core](../core/) · [core-extra](../core-extra/) · [campaign](../campaign/) · [campaign-ext](../campaign-ext/) · [mission](../mission/) · [mission-ext](../mission-ext/) · [gui](../gui/) · [viewmodel](../viewmodel/) · [engine](../engine/) · [sandbox](../sandbox/) · [custombattle](../custombattle/) · [system](../system/) · [modulemanager](../modulemanager/) · [activitysystem](../activitysystem/) · [achievementsystem](../achievementsystem/)

There is no `save-system/` directory in this tree; its pages are Chinese-tree-only — [zh/api/save-system/SaveManager](../../../zh/api/save-system/SaveManager).

## See also

- ↑ [Version home](../../)
- ↑ [API reference](../)
- ↔ [Architecture overview](../../architecture/)
- ↘ [SDK Overview](../../architecture/sdk-overview)