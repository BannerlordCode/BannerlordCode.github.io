---
title: "GameNetwork"
description: "Auto-generated class reference for GameNetwork."
---
# GameNetwork

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class GameNetwork`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/GameNetwork.cs`

## Overview

`GameNetwork` is the **managed face of the multiplayer session** — the static hub a mod talks to instead of the native [`IMBNetwork`](../../mission/IMBNetwork) bridge. It is `public static class GameNetwork` (`GameNetwork.cs:278`) in a 1529-line file with no constructor and no instance state; it is a namespace-like holder of static properties, static methods and several nested types.

The nested types are part of the public surface and are easy to miss: `public class NetworkMessageHandlerRegisterer` (`:18`), `public class NetworkMessageHandlerRegistererContainer` (`:82`), `public enum EventBroadcastFlags` (`:186`), `public struct DebugNetworkPositionCompressionStatisticsStruct` (`:201`), `public struct DebugNetworkPacketStatisticsStruct` (`:215`) and `public struct AddPlayersResult` (`:276`). Two hard limits live alongside them: `MaxAutomatedBattleIndex = 10` (`:283`) and `MaxPlayerCount = 1023` (`:285`).

The role-detection properties form a layered ladder, and **every one of them is derived from a single value, `MBCommon.CurrentGameType`**. `IsServer` (`:313`) is true for `MultiServer` or `MultiClientServer`; `IsClient` is `MBCommon.CurrentGameType == MultiClient` (`:337`); `IsReplay` is `== SingleReplay` (`:339`); and `IsServerOrRecorder` (`:325`), `IsClientOrReplay` (`:341`), `IsMultiplayer` (`:357`) and `IsMultiplayerOrReplay` (`:369`) are built on top of those. The peer collections are static properties with private setters: `VirtualPlayers` (`:408`), `NetworkPeers` (`:410`), `DisconnectedNetworkPeers` (`:412`), `NetworkComponents` (`:418`), `NetworkHandlers` (`:420`) and `MyPeer` (`:422`).

## Mental Model

Think of it as **the switchboard in a telephone exchange, where the line's state is decided by one plug and the board exposes named lines rather than numbers**. `MBCommon.CurrentGameType` is the plug; the seven `Is*` properties are the labelled views onto it; the peer lists are the lines; and the `Begin*`/`End*` pairs are the conversations you can have over them.

The consequence is that **there is no `GameNetwork.Instance` and nothing to construct**, so there is also no moment at which you may inspect it. Every property is a live read of ambient state, which means the same expression can be true during one frame and false the next. A mod that caches `IsServer` at load time and reads it during a battle is reading a fact about the past.

The second boundary, and the one that bites hardest, is that **two role properties are compile-time constants on this build**. `public static bool IsDedicatedServer => false;` (`:353`) and `public static bool MultiplayerDisabled => false;` (`:355`) are expression-bodied properties with no body beyond `false`, even though the native bridge has live `is_dedicated_server` and `get_multiplayer_disabled` symbols. **A mod that gates dedicated-server behaviour on `GameNetwork.IsDedicatedServer` compiles, runs, and takes the single-player branch every time.**

The third is that **message framing is a balanced begin/end pair, and the pairs are not interchangeable.** There are three: the client pair (`:897`/`:902`, with an unreliable variant at `:907`/`:912`), the single-peer server pair (`:917`/`:932`, unreliable `:922`/`:942`), and the session broadcast (`:947`/`:952`, unreliable `:963`). Only the broadcast pair takes a target; only the single-peer `Begin` takes a communicator. `EndBroadcastModuleEvent` closes whatever is open — it has no target argument (`:955`) — so an unbalanced pair corrupts the stream for everyone, not just the caller.

## How to use

**How to obtain it.** Static reference only. `GameNetwork` has no ctor, no singleton and no instance members; everything is `static`.

**A typical use.** A mod that sends a one-off payload to the whole session, wrapped in the balanced broadcast pair and closed with an explicit broadcast flag:

```csharp
using TaleWorlds.MountAndBlade;

GameNetwork.BeginBroadcastModuleEvent();
GameNetwork.WriteMessage(new MyModBroadcastMessage(payload));
GameNetwork.EndBroadcastModuleEvent(GameNetwork.EventBroadcastFlags.AddToMissionRecord);
Debug.Print("broadcast closed", 0);
```

**What to watch out for.** Writing to the network on a machine that has no session. The single most common mistake is calling `BeginBroadcastModuleEvent` / `EndBroadcastModuleEvent` without checking whether multiplayer is actually running — neither method returns anything (`:947`, `:952`), and neither checks `IsSessionActive` (`:381`). The consequence in single-player is that the begin/end pair runs against an uninitialised native session: nothing is sent, nothing throws, and a mod's "the other player should see this" logic silently never fires. Guard on `GameNetwork.IsMultiplayerOrReplay` (`:369`) or `IsSessionActive` (`:381`) first.

## Key members

| Member | Signature | What it is for |
| --- | --- | --- |
| `IsServer` | `public static bool IsServer { get; }` (`:313`-`:323`) | True when `MBCommon.CurrentGameType` is `MultiServer`, or anything other than `MultiServer`/`MultiClientServer` is excluded and it is `MultiClientServer` (`:316`-`:321`). **The gate for every server-authoritative action**, including which peers `IsSynchronized` will read from (see `NetworkCommunicator`). |
| `IsServerOrRecorder` | `public static bool IsServerOrRecorder { get; }` (`:325`-`:334`) | `IsServer`, **or** `MBCommon.CurrentGameType == SingleRecord` (`:328`). This is the gate that team changes broadcast through — `Team.SetIsEnemyOf` wraps its write in exactly this test. |
| `IsClient` / `IsReplay` | `public static bool IsClient => MBCommon.CurrentGameType == MBCommon.GameType.MultiClient;` (`:337`), `public static bool IsReplay => MBCommon.CurrentGameType == MBCommon.GameType.SingleReplay;` (`:339`) | The two leaf role tests, both single comparisons against `MBCommon.GameType`. Everything else in the role ladder is derived from these two plus `IsServer`. |
| `IsClientOrReplay` / `IsMultiplayer` / `IsMultiplayerOrReplay` | `public static bool IsClientOrReplay { get; }` (`:341`-`:349`), `IsMultiplayer` (`:357`-`:367`), `IsMultiplayerOrReplay` (`:369`-`:377`) | Derived unions. `IsMultiplayer` is `IsServer || IsClient`; `IsMultiplayerOrReplay` is `IsMultiplayer || IsReplay`. **The replay branches matter**: a recorded playback is neither server nor client, so `IsMultiplayer` alone is `false` while a replay is running and any `IsMultiplayer` guard skips work the replay path needs. |
| `IsDedicatedServer` | `public static bool IsDedicatedServer => false;` (`:353`) | **Compile-time `false` on this build.** A live native symbol (`is_dedicated_server`) exists on the bridge but is never consulted. **Gating on this always takes the non-dedicated branch.** |
| `MultiplayerDisabled` | `public static bool MultiplayerDisabled => false;` (`:355`) | **Also compile-time `false`.** Same shape, same hazard: the bridge's `get_multiplayer_disabled` is shadowed by a constant. |
| `VirtualPlayers` | `public static VirtualPlayer[] VirtualPlayers { get; private set; }` (`:408`) | The peer **slot array**, indexed by peer index. `NetworkCommunicator.Index` is `VirtualPlayer.Index`, and `NetworkCommunicator.IsConnectionActive` checks `GameNetwork.VirtualPlayers[Index] == VirtualPlayer` before touching the native peer — so this array is the authority on whether an index is still live. **An array with a private setter: do not cache it across a session change.** |
| `NetworkPeers` / `DisconnectedNetworkPeers` | `public static List<NetworkCommunicator> NetworkPeers { get; private set; }` (`:410`), `DisconnectedNetworkPeers` (`:412`) | Connected and recently-dropped peers, as `List<NetworkCommunicator>`. `NetworkPeerCount => NetworkPeers.Count` (`:414`) and `NetworkPeersValid => NetworkPeers != null` (`:416`) exist because **both lists are null before `Initialize` (`:479`)** — `NetworkPeersValid` is the guard to use at startup. |
| `MyPeer` | `public static NetworkCommunicator MyPeer { get; private set; }` (`:422`) | This machine's own peer. Null in single-player and in replay. `IsMyPeerReady` (`:424`) is the "can I send yet" test. |
| `IsSessionActive` | `public static bool IsSessionActive` (`:381`) | Whether a session is live. **This is the correct guard before any `Begin*`/`End*` pair**, and unlike `IsMultiplayer` it answers about the transport rather than about the role. |
| `BeginBroadcastModuleEvent` / `EndBroadcastModuleEvent` | `public static void BeginBroadcastModuleEvent()` (`:947`), `public static void EndBroadcastModuleEvent(EventBroadcastFlags broadcastFlags, NetworkCommunicator targetPlayer = null)` (`:952`) | The session-wide message pair. **`End` takes a target but `Begin` does not**, and the target is converted with `targetPlayer?.Index ?? (-1)` (`:954`) — **`-1` means broadcast to all**, not "peer minus one". Both return `void` (`:947`, `:952`), so there is no acknowledgement either way. |
| `EndBroadcastModuleEventUnreliable` | `public static void EndBroadcastModuleEventUnreliable(EventBroadcastFlags broadcastFlags, NetworkCommunicator targetPlayer = null)` (`:963`) | Same close, `isReliable: false` (`:966`). **The only difference from the reliable version is that boolean**, so mixing the two across one begin is easy to do by accident. |
| `BeginModuleEventAsClient` / `EndModuleEventAsClient` | `public static void BeginModuleEventAsClient()` (`:897`), `EndModuleEventAsClient()` (`:902`), plus `…Unreliable` at `:907`/`:912` | The **client-side** channel. Note these take **no arguments at all** — neither a target nor a reliability flag — so the reliable/unreliable choice is a different method name, not a parameter. |
| `BeginModuleEventAsServer` / `EndModuleEventAsServer` | `public static void BeginModuleEventAsServer(NetworkCommunicator communicator)` (`:917`) forwarding to `…(VirtualPlayer peer)` (`:927`); `EndModuleEventAsServer()` (`:932`); unreliable `:922`/`:937`/`:942` | The **single-peer** server channel. `BeginModuleEventAsServer(VirtualPlayer)` calls `MBAPI.IMBPeer.BeginModuleEvent(peer.Index, isReliable: true)` (`:929`). **`End` takes no peer**, so it closes whatever the last `Begin` opened. |
| `WriteMessage` | `public static void WriteMessage(GameNetworkMessage message)` (`:1231`) | **The only way to put bytes on the wire.** Takes a `GameNetworkMessage`, not primitives — the packing and compression live in the message class, which is why this class exposes no `WriteInt`/`WriteString` even though the native bridge does. |
| `ElapsedTimeSinceLastUdpPacketArrived` | `public static double ElapsedTimeSinceLastUdpPacketArrived()` (`:958`) | Seconds since the last inbound packet, forwarded from the bridge (`:960`). **The natural basis for a connection-timeout detector**, and the one clock here that is not role-dependent. |
| `SetServerBandwidthLimitInMbps` / `SetServerTickRate` / `SetServerFrameRate` | `public static void SetServerBandwidthLimitInMbps(double value)` (`:1373`), `SetServerTickRate(double value)` (`:1378`), `SetServerFrameRate(double value)` (`:1383`) | Server tuning, all three `double` and all three one-line forwards (`:1375`, `:1380`, `:1385`). **Tick rate and frame rate are independent dials**; setting only one will not give the throughput you expected. |
| `GetAveragePacketLossRatio` | `public static float GetAveragePacketLossRatio()` (`:1398`) | Session-wide loss as a **ratio**, forwarded at `:1400`. Do not multiply by 100 — the per-peer `AverageLossPercent` on the peer object is already a percentage, and the two are in different units. |
| `PrintDebugStats` / `ResetDebugVariables` | `public static void PrintDebugStats()` (`:1393`), `ResetDebugVariables()` (`:1388`) | Bandwidth diagnostics, forwarded at `:1395`, `:1390`. Both write to the log rather than returning data, so they are for a debugging session, not for measuring in-game. |
| `UnSynchronizeEveryone` | `public static void UnSynchronizeEveryone()` (`:969`) | Marks every peer unsynchronized (`foreach … networkPeer.IsSynchronized = false;`, `:972`-`:975`) then calls `OnEveryoneUnSynchronized()` on every registered handler (`:977`-`:980`). **This is destructive and global** — it invalidates every peer's sync state, and it also prints `Debug.Print("UnSynchronizeEveryone is called!", …)` (`:970`). |
| `Initialize` | `public static void Initialize(IGameNetworkHandler handler)` (`:479`) | Brings the networking layer up with a handler. **Until this runs, `NetworkPeers` and `NetworkHandlers` are null**, which is why `NetworkPeersValid` (`:416`) exists. Call it once, from the normal startup path — not from a mission behavior. |
| `StartMultiplayerOnServer` / `PreStartMultiplayerOnServer` | `public static void StartMultiplayerOnServer(int port)` (`:632`), `PreStartMultiplayerOnServer()` (`:626`) | Server startup, in that order. **`PreStart` must precede `Start`** — starting without pre-starting is the kind of ordering bug that produces an empty peer list rather than an exception. |
| `AddNewPlayerOnServer` / `AddNewPlayersOnServer` | `public static ICommunicator AddNewPlayerOnServer(PlayerConnectionInfo playerConnectionInfo, bool serverPeer, bool isAdmin)` (`:753`), `public static AddPlayersResult AddNewPlayersOnServer(PlayerConnectionInfo[] playerConnectionInfos, bool serverPeer)` (`:851`) | Slot allocation. **The single-player form returns `ICommunicator`; the batch form returns `AddPlayersResult`** (`:276`) — a different return type for the same operation at different arities. |
| `FindNetworkPeer` | `public static NetworkCommunicator FindNetworkPeer(int index)` (`:467`) | Peer lookup by index. **The index is a slot, not an identity** — a recycled index names a different peer after a reconnect, and a mod holding a cached index can write to the wrong session participant. |
| `HandleConsoleCommand` | `public static void HandleConsoleCommand(string command)` (`:721`) | The console's network verb entry point. Reached from the engine's console, not called by mods directly in normal use. |
| `MaxPlayerCount` / `MaxAutomatedBattleIndex` | `public const int MaxPlayerCount = 1023;` (`:285`), `public const int MaxAutomatedBattleIndex = 10;` (`:283`) | Compile-time caps. **`const` inlines into your assembly**, so a mod compiled against 1023 keeps 1023 even if a later build raises the cap. |
| `ClientPeerIndex` | `public static int ClientPeerIndex;` (`:289`) | A **public mutable static field**, set on client start from the argument passed in (`:987`). Nothing else guards it. |
| `EventBroadcastFlags` (nested) | `public enum EventBroadcastFlags` (`:186`) | The flags argument to both broadcast-end methods (`:954`, `:966`). **Whether this event also goes into the mission record is decided here**, which is what makes a mod's broadcast replayable. |
| `AddPlayersResult` (nested) | `public struct AddPlayersResult` (`:276`) | The batch-add outcome. A `struct`, so it is copied on return. |
| `DebugNetworkPacketStatisticsStruct` / `DebugNetworkPositionCompressionStatisticsStruct` (nested) | `public struct …` (`:215`), `public struct …` (`:201`) | Debug counters for packets and position compression. Public structs with public fields — read them, do not assume they are populated outside a debug session. |

## Examples

Send a payload to the whole session, guarded so single-player is a no-op:

```csharp
using TaleWorlds.MountAndBlade;

if (!GameNetwork.IsSessionActive)
{
    Debug.Print("no session; nothing to broadcast", 0);
    return;
}

GameNetwork.BeginBroadcastModuleEvent();
GameNetwork.WriteMessage(new MyModBroadcastMessage(payload));
GameNetwork.EndBroadcastModuleEvent(GameNetwork.EventBroadcastFlags.AddToMissionRecord);
Debug.Print("broadcast closed", 0);
```

Address one peer instead of the session, using the single-peer server pair:

```csharp
using TaleWorlds.MountAndBlade;

if (GameNetwork.IsServer && target != null)
{
    GameNetwork.BeginModuleEventAsServer(target);
    GameNetwork.WriteMessage(new MyModDirectMessage(payload));
    GameNetwork.EndModuleEventAsServer();
    Debug.Print("direct message closed to " + target.Index, 0);
}
```

Inspect the session without dereferencing null collections at startup:

```csharp
using TaleWorlds.MountAndBlade;

Debug.Print("role: server=" + GameNetwork.IsServer
    + " client=" + GameNetwork.IsClient
    + " replay=" + GameNetwork.IsReplay
    + " session=" + GameNetwork.IsSessionActive, 0);

if (GameNetwork.NetworkPeersValid)
{
    Debug.Print("peers = " + GameNetwork.NetworkPeerCount, 0);
    foreach (NetworkCommunicator peer in GameNetwork.NetworkPeers)
    {
        if (peer.IsConnectionActive)
        {
            Debug.Print("  " + peer.UserName + " ping " + peer.AveragePingInMilliseconds + "ms", 0);
        }
    }
}
```

Tune the server without confusing the two rate dials:

```csharp
using TaleWorlds.MountAndBlade;

GameNetwork.SetServerBandwidthLimitInMbps(20.0);
GameNetwork.SetServerTickRate(60.0);
GameNetwork.SetServerFrameRate(60.0);
Debug.Print("loss ratio = " + GameNetwork.GetAveragePacketLossRatio() + " (a ratio, not a percent)", 0);
```

## Risks and crash boundaries

- **A mod assembly cannot call this interface's bridge.** `GameNetwork` is public, but the [`IMBNetwork`](../../mission/IMBNetwork) it forwards to is `internal` with `InternalsVisibleTo` limited to three TaleWorlds assemblies.
- **Two role properties are constants.** `IsDedicatedServer => false` (`:353`) and `MultiplayerDisabled => false` (`:355`). **Any branch gated on them is dead code that compiles cleanly.**
- **The `Begin*`/`End*` pairs are `void` and unchecked.** (`:897`, `:902`, `:947`, `:952`, `:963`) Nothing returns a status, and nothing verifies a session exists. Unbalanced pairs corrupt the stream for the whole session, because `End*` has no target argument.
- **Three different pair shapes.** Client (no args), single-peer server (`Begin` takes a communicator, `End` does not), broadcast (`Begin` takes nothing, `End` takes flags + optional target). Swapping them compiles in some cases and sends to the wrong audience.
- **`-1` is the broadcast-to-all sentinel.** (`:954`, `:966`) It is produced by `targetPlayer?.Index ?? (-1)` and is not a peer index.
- **`NetworkPeers` and the other collections are null before `Initialize`.** (`:410`, `:412`, `:418`, `:420`) Use `NetworkPeersValid` (`:416`) or `IsSessionActive` (`:381)` — a `foreach` at startup is a `NullReferenceException`.
- **`VirtualPlayers` is an array and `NetworkPeers` is a list, both with private setters.** (`:408`, `:410`) Either can be replaced wholesale during a session change; a cached reference is a stale reference.
- **A peer index is a slot, not an identity.** `FindNetworkPeer(int)` (`:467`) and `VirtualPlayer.Index` (`:408`) both address slots. After a reconnect the same index may name a different peer, and `SetTeam`/`SetControlledAgent` write through silently.
- **`UnSynchronizeEveryone()` is global and destructive.** (`:969`-`:980`) It invalidates every peer's sync state and prints a log line. Calling it to fix one peer breaks all of them.
- **`GetAveragePacketLossRatio` is a ratio** (`:1398`), not the per-peer percentage — do not multiply by 100.
- **Tick rate and frame rate are separate.** (`:1378`, `:1383`) Both take `double`; setting one does not set the other.
- **`ClientPeerIndex` is a public mutable field** (`:289`) with no guard. Any code can overwrite it.
- **`MaxPlayerCount` / `MaxAutomatedBattleIndex` are `const`.** (`:285`, `:283`) They inline at compile time and will not track a later version's cap.
- **`AddNewPlayerOnServer` and `AddNewPlayersOnServer` return different types** (`:753` → `ICommunicator`, `:851` → `AddPlayersResult`). The batch form's partial-success detail lives in that struct.
- **No instance, no lifetime.** Everything is ambient global state that changes between reads.
- **Not a save participant.** Session state, rebuilt on join.

## Cross-Version Notes

The v1.4.5 file is 1529 lines. The identically named file in `bannerlord-1.3.0` and `bannerlord-1.3.15` under the same `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/` layout keeps the same `MBCommon.CurrentGameType`-derived role ladder and the same three pair shapes, and `bannerlord-1.5.3` retains the shape. **`IsDedicatedServer => false` and `MultiplayerDisabled => false` (`:353`, `:355`) are managed-side constants**, so the hazard survives any version of the interface: a mod built against a build where dedicated servers exist still gets `false` here, and the symbol exists in [`IMBNetwork`](../../mission/IMBNetwork) in all of these versions.

## Dependencies

- The native bridge this class forwards to: [`IMBNetwork`](../../mission/IMBNetwork), reached at `GameNetwork.cs:949`, `:955`, `:960`, `:966`, `:1375`, `:1380`, `:1385`, `:1390`, `:1395`, `:1400`.
- Per-peer bridge and the single-peer pairs: [`IMBPeer`](../../mission/IMBPeer), invoked from `BeginModuleEventAsServer` at `:929`/`:938`.
- The peer type whose properties mirror these collections: [`NetworkCommunicator`](../NetworkCommunicator), whose `Index` is `VirtualPlayer.Index` and whose `IsConnectionActive` consults `GameNetwork.VirtualPlayers`.
- Session-adjacent mission state: [`MissionPeer`](../MissionPeer) and [`MissionNetworkComponent`](../MissionNetworkComponent), which apply team assignments written through [`IMBPeer`](../../mission/IMBPeer).
- Message registration and the attribute a mod puts on its own message: [`DefineGameNetworkMessageType`](../../mission/DefineGameNetworkMessageType), plus `NetworkMessageHandlerRegisterer` (`:18`) in this same file.
- Replication components that consume these messages: [`NetworkStatusReplicationComponent`](../../mission/NetworkStatusReplicationComponent) and [`DebugAgentScaleOnNetworkTestComponent`](../../mission/DebugAgentScaleOnNetworkTestComponent).
- The role source of truth: `MBCommon.CurrentGameType` (`GameNetwork.cs:317`, `:328`, `:337`, `:339`).
- Presentation options that travel alongside this configuration: [`BannerlordConfig`](../BannerlordConfig).
- Bucket index: [mission-ext API](../)
