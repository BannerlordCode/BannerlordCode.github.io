---
title: "LobbyClient"
description: "The multiplayer lobby client: connection lifecycle, matchmaking, parties, clans and cosmetics, driven entirely by a pushed callback handler rather than events. Explains the State enum, the handler pattern, and the 30-state enum as the control surface."
---

# LobbyClient

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade.Diamond
**Type:** `public class LobbyClient : Client<LobbyClient>`
**Base:** `Client<LobbyClient>`
**File:** `bin/TaleWorlds.MountAndBlade.Diamond/TaleWorlds.MountAndBlade.Diamond/LobbyClient.cs`

## Overview

`LobbyClient` is the **client half of the multiplayer lobby** — everything between "the game launched" and "a battle started". It is 1982 lines and covers connection lifecycle, matchmaking (`FindGame` / `FindCustomGame`), premade and custom game hosting, parties, clans, invitations, chat and cosmetics.

Its class declaration is `public class LobbyClient : Client<LobbyClient>` (`LobbyClient.cs:21`) — note the **generic self-type base**: `Client<T>` is the shared transport base, and `LobbyClient` names itself as the type parameter. It is `public` and not sealed.

The file declares **zero `event` members**. That is the single most important structural fact on this page, and it is why the acquisition story is unusual — see Mental Model.

## Mental Model

### What it is / which layer

- It is the **outbound half of the lobby protocol**. You call request methods (`FindGame` at `LobbyClient.cs:543`, `RequestJoinCustomGame` at `:514`, `KickPlayer` at `:669`) and the *server* answers later.
- Because there are no events, the answer arrives by **pushing into a handler you supplied**. The handler is an `ILobbyClientSessionHandler` stored in `private ILobbyClientSessionHandler _handler;` (`LobbyClient.cs:61`) and passed to `Connect(ILobbyClientSessionHandler lobbyClientSessionHandler, …)` at `LobbyClient.cs:586`. **That handler is the real integration surface** — if you are hooking this class, you are implementing that interface, not subscribing to anything.
- The lifecycle is a **30-plus-member state machine**: `public enum State` starts at `LobbyClient.cs:23` with `Idle`, `Working`, `Connected`, `SessionRequested`, `AtLobby`, `SearchingToRejoinBattle`, `RequestingToSearchBattle`, `RequestingToCancelSearchBattle`, `SearchingBattle`, `AtBattle`, `QuittingFromBattle`, `WaitingToCreatePremadeGame`, `WaitingToJoinPremadeGame`, `WaitingToRegisterCustomGame`, `HostingCustomGame`, `WaitingToJoinCustomGame` and continues. Nearly every public method on this class is really a guard on which of those states you are allowed to be in.
- The **convenience predicates** exist so callers do not switch on the enum by hand: `AtLobby => CurrentState == State.AtLobby` (`LobbyClient.cs:179`), `IsIdle` (`:213`), `IsHostingCustomGame` (`:239`).

### The consequence that matters

**`CurrentState`'s setter pushes the PREVIOUS state to the handler, not the new one.** `LobbyClient.cs:132-147`: the setter compares, stashes `State state = _state;` (`:142`) — the old value — assigns `_state = value` (`:143`), and then calls `_handler?.OnGameClientStateChange(state)` (`:144`) with that stashed **old** value.

So a handler implementing `OnGameClientStateChange` is told what state the client *was leaving*, and must read `CurrentState` to learn where it went. A handler that treats its argument as the new state will be one transition behind for the whole session. This is the single most valuable thing to know before implementing the handler, and it is invisible from the property's signature.

Two supporting details of the same line matter. The call uses `_handler?.` — **null-conditional**, so a `LobbyClient` that was never connected does not throw when its state changes. And the setter is `private` (`:138`), so you **cannot drive the state from mod code**; transitions are internal.

## How to use

**How to obtain it.** Not by construction in any supported sense. The constructor takes a `DiamondClientApplication` and an `IClientSessionProvider` (`LobbyClient.cs:385`), and the flow starts with `Connect(...)` (`LobbyClient.cs:586`), which is `async` and returns `Task<LobbyClientConnectResult>`. The realistic modder path is to reach the live instance and hook its handler.

**A typical use.** Drive matchmaking and react to state changes, honouring the old-state semantics:

```csharp
using TaleWorlds.MountAndBlade.Diamond;
using TaleWorlds.ScreenSystem;

public class MyLobbyHook
{
    public static void StartMatchmaking(LobbyClient client)
    {
        if (client == null)
            return;

        // FindGame() is void (LobbyClient.cs:543) — it requests, it does not
        // report. Watch CurrentState for the outcome.
        client.FindGame();
    }

    public static bool IsSearching(LobbyClient client)
    {
        if (client == null)
            return false;

        // Prefer the shipped predicates over switching on the enum yourself:
        // AtLobby (:179) and IsIdle (:213) both compare CurrentState.
        return client.CurrentState == LobbyClient.State.SearchingBattle;
    }

    // Called from your ILobbyClientSessionHandler implementation.
    public static void OnStateChanged(LobbyClient client, LobbyClient.State previousState)
    {
        // Careful: CurrentState's setter passes the PREVIOUS state to the
        // handler (LobbyClient.cs:142-144). Read CurrentState for the new one.
        Debug.Print("left " + previousState + ", now " + client.CurrentState, 0);
    }
}
```

Check availability before offering a menu option, because two of the flags are nullable-backed:

```csharp
using TaleWorlds.MountAndBlade.Diamond;

public class LobbyCapabilityCheck
{
    // IsMatchmakingAvailable is `_serverStatus?.IsMatchmakingEnabled ?? false`
    // (LobbyClient.cs:241) and IsCustomBattleAvailable is the same shape (:257).
    // Both are false while _serverStatus is null — i.e. before the status has
    // arrived, not because the feature is off.
    public static bool CanOfferMatchmaking(LobbyClient client)
    {
        return client != null
            && client.IsMatchmakingAvailable
            && client.IsCustomBattleAvailable
            && !client.HasUnofficialModulesLoaded;
    }
}
```

**What to watch out for.** Two traps. First, the handler receives the **old** state (`LobbyClient.cs:142-144`) — a handler written to the naive reading will be permanently one step behind, and since `_handler?.` is null-conditional (`:144`) it will not even throw in the unconnected case to warn you. Second, **`HasUnofficialModulesLoaded` and the two availability flags are false before the server status arrives, not because the feature is disabled** (`:241`, `:257`, `:261`) — building a menu that hides options on those flags will hide them at startup and appear broken.

## Key members

Ordered by what a modder actually reaches for. The consequence is in each row.

| Member | Signature | What it is for |
| --- | --- | --- |
| `CurrentState` | `public State CurrentState` at `LobbyClient.cs:132-147`, `get` public / `set` private | Where the client is in its lifecycle, and the control surface every other method guards on. **The setter pushes the previous state, not the new one**: it stashes `State state = _state;` (`:142`), assigns (`:143`), then calls `_handler?.OnGameClientStateChange(state)` (`:144`). The `private set` (`:138`) means mod code cannot drive it. |
| `Connect` | `public async Task<LobbyClientConnectResult> Connect(ILobbyClientSessionHandler lobbyClientSessionHandler, ILoginAccessProvider lobbyClientLoginAccessProvider, string overridenUserName, bool hasUserGeneratedContentPrivilege, PlatformInitParams initParams, Func<Task<bool>> preLoginTask)` at `LobbyClient.cs:586` | Opens the lobby connection and **installs the handler** you pass — this is where `_handler` comes from. `async`, so the `Task` must be awaited or the connection races your UI. The six parameters are the whole integration: handler, credentials provider, an optional username override, a UGC privilege flag, platform init params, and a `Func<Task<bool>> preLoginTask` gate that runs before login. |
| `RemoveLobbyClientHandler` | `public void RemoveLobbyClientHandler()` at `LobbyClient.cs:747` | Detaches the callback handler. **You need this on teardown**: because `OnGameClientStateChange` is called through `_handler?.` (`:144`), a retained handler keeps receiving pushes after you thought you were done, and holds your objects alive. |
| `FindGame` / `CancelFindGame` | `public void FindGame()` at `LobbyClient.cs:543` and `public void CancelFindGame()` at `LobbyClient.cs:537` | Matchmaking request and its cancel. **Both `void`** — they start a transition and the outcome arrives through `CurrentState` (`SearchingBattle`, `RequestingToCancelSearchBattle` and back). There is no result code and no callback specific to this call. |
| `FindCustomGame` | `public async Task<bool> FindCustomGame(string[] selectedCustomGameTypes, bool? hasCrossplayP…)` at `LobbyClient.cs:549` | Starts a custom-battle search. **Returns `Task<bool>`**, so unlike `FindGame` this one tells you whether the request was accepted — the boolean is the request-accepted signal, not "a game was found". The `bool? hasCrossplayP…` parameter is nullable, and passing `null` means "unspecified". |
| `RequestJoinCustomGame` / `RequestJoinPlayerParty` | `public async Task<bool> RequestJoinCustomGame(CustomBattleId serverId, string password, bool …)` at `LobbyClient.cs:514` and `public async Task<bool> RequestJoinPlayerParty(PlayerId targetPlayer, bool inviteRequest)` at `:531` | Two join requests, both returning `Task<bool>`. The custom-game one takes a **password**, so a wrong password is a `false`, not an exception. The party one is dual-purpose: `inviteRequest` selects between joining and inviting, which is easy to get backwards and produces the opposite action. |
| `GetCustomGameServerList` | `public async Task<AvailableCustomGames> GetCustomGameServerList()` at `LobbyClient.cs:483` | Fetches the browse list. `async` and returns a `Task`, so it must be awaited; the result is a snapshot, and a `null` result is possible before the server answers. |
| `KickPlayer` | `public void KickPlayer(PlayerId id, bool banPlayer)` at `LobbyClient.cs:669` | Removes a player, optionally banning. **`void`, and the `banPlayer` flag makes this irreversible** — there is no undo call on this class. The `PlayerId` must be one the server knows; a locally-constructed id is sent and rejected server-side with no local error. |
| `ChangeRegion` / `ChangeGameTypes` | `public void ChangeRegion(string region)` at `LobbyClient.cs:674` and `public void ChangeGameTypes(string[] gameTypes)` at `:686` | Changing the matchmaking filters. Both `void`; the server confirms through the handler. `ChangeGameTypes` replaces the whole list, so passing a subset narrows matchmaking rather than adding to it. |
| `OnConnected` / `OnCantConnect` / `OnDisconnected` | `public override void OnConnected()` at `LobbyClient.cs:715`, `public override void OnCantConnect()` at `:722` and `public override void OnDisconnected()` at `:729` | The transport-level callbacks, `override` from the `Client<LobbyClient>` base. **These are the engine calling you, not you calling them** — they are public because the base requires it, and calling one directly does not move the connection. |
| `PlayerData` / `SupportedFeatures` / `ClanInfo` / `ClanHomeInfo` / `AvailableScenes` | `public PlayerData PlayerData { get; private set; }` at `LobbyClient.cs:114`, `SupportedFeatures` at `:116`, `ClanInfo` at `:118`, `ClanHomeInfo` at `:120`, `AvailableScenes` at `:126` | The server-pushed session data, **all `{ get; private set; }`**. Every one is populated by the server and is **null until it arrives** — so reading `ClanInfo` at startup gets `null`, not an empty object. There is no setter and no refresh method on this class for any of them. |
| `PlayerID` / `Name` | `public PlayerId PlayerID => _playerId;` at `LobbyClient.cs:128` and `public string Name => _userName;` at `:193` | Your own identity in the lobby. Both expression-bodied over private fields, so **both are default before login** — `PlayerID` is a struct, so a pre-login read gives a default-constructed id rather than a null you can test. |
| `AtLobby` / `IsIdle` / `IsHostingCustomGame` | `public bool AtLobby => CurrentState == State.AtLobby;` at `LobbyClient.cs:179`, `public bool IsIdle => CurrentState == State.Idle;` at `:213` and `public bool IsHostingCustomGame => _state == State.HostingCustomGame;` at `:239` | The shipped state predicates, and the right thing to use instead of switching on `CurrentState` yourself. Note the inconsistency: the first two go through the `CurrentState` property, the third reads `_state` **directly** (`:239`) — so a subclass that shadows the property would see `IsHostingCustomGame` disagree with `AtLobby`. |
| `IsMatchmakingAvailable` / `IsCustomBattleAvailable` / `PartySystemAvailable` / `HasUnofficialModulesLoaded` | `public bool IsMatchmakingAvailable => _serverStatus?.IsMatchmakingEnabled ?? false;` at `LobbyClient.cs:241`, `public bool IsCustomBattleAvailable => _serverStatus?.IsCustomBattleEnabled ?? false;` at `:257`, `public bool PartySystemAvailable => true;` at `:255` and `public bool HasUnofficialModulesLoaded => LoadedUnofficialModules.Count > 0;` at `:261` | Feature gating. **The two availability flags collapse to `false` when `_serverStatus` is null** (`:241`, `:257`), so before the server status arrives they read as "feature unavailable" rather than "not yet known". `PartySystemAvailable` is a **hard-coded `true`** (`:255`) — a constant, so gating on it does nothing. `HasUnofficialModulesLoaded` is a live `Count > 0` over `LoadedUnofficialModules` (`:259`). |
| `OwnedCosmetics` / `UsedCosmetics` | `public IReadOnlyList<string> OwnedCosmetics => _ownedCosmetics;` at `LobbyClient.cs:122` and `public IReadOnlyDictionary<string, List<string>> UsedCosmetics => _usedCosmetics;` at `:124` | The cosmetic inventory, both expression-bodied over private fields. Read-only **interfaces**, so you cannot sort or mutate them in place — copy to a `List` first. Like `PlayerData` (`:114`), they are empty rather than null before the server pushes them. |
| `State` | `public enum State` at `LobbyClient.cs:23` | The lobby lifecycle, 30-plus members from `Idle` (`:26`) through `AtLobby`, the search states, `AtBattle`, `QuittingFromBattle`, the premade and custom-game waiting states and onward. **`CurrentState` is typed by this enum** (`:132`), so the whole public API is expressed in terms of it. `HasUnofficialModulesLoaded`-style convenience predicates exist precisely so you usually do not switch on it. |
| `ILobbyClientSessionHandler` | `private ILobbyClientSessionHandler _handler;` at `LobbyClient.cs:61`, supplied to `Connect` at `:586` | The push channel, and the real integration point. Called with the **previous** state from the `CurrentState` setter (`:144`) via `_handler?.` — null-conditional, so an unconnected client is safe. There is **no `event` anywhere in the file**, which is why this handler and not a subscription is what you implement. |
| `QuitFromCustomGame` / `QuitFromMatchmakerGame` / `FleeBattle` | `public void QuitFromCustomGame()` at `LobbyClient.cs:497`, `public void QuitFromMatchmakerGame()` at `:504` and `public void FleeBattle()` at `:1155` | The three exits. All `void`; each drives a `QuittingFrom…` / `RequestingToCancelSearchBattle` transition that completes asynchronously. `FleeBattle` (`:1155`) abandons a running battle, which is not the same as leaving the lobby — the client remains connected. |
| `RejoinBattle` | `public void RejoinBattle()` at `LobbyClient.cs:1202` | Attempts to rejoin after a disconnect, driving the `SearchingToRejoinBattle` state. **`void`**, so whether the server accepted the rejoin is only visible through `CurrentState`; a failed rejoin falls back to the lobby with no error surfaced here. |
| `Logout` | `public void Logout(TextObject logOutReason)` at `LobbyClient.cs:379` | Signs out, taking a **`TextObject`** reason — the localised message shown to the user. Because the reason is a localisation object, passing a raw string will not compile; use `TextObject.CreateFromString` or a localised lookup, and an inappropriate message here is user-visible. |
| `SetLoadedModules` | `public void SetLoadedModules(string[] moduleIDs)` at `LobbyClient.cs:467` | Tells the server which modules this client has. This is what makes `HasUnofficialModulesLoaded` (`:261`) and `LoadedUnofficialModules` (`:259`) meaningful — **call it before matchmaking, or the server filters your client out without telling you locally**. |
| `LastBattleServerAddressForClient` / `LastBattleServerPortForClient` / `LastBattleIsOfficial` | `public string LastBattleServerAddressForClient { get; private set; }` at `LobbyClient.cs:195`, `public ushort LastBattleServerPortForClient { get; private set; }` at `:197` and `public bool LastBattleIsOfficial { get; private set; }` at `:199` | Where the last battle was hosted, and whether it was official. All `{ get; private set; }`, set by the server after a battle. **Useful and dangerous together**: connecting a client to an address from this class means trusting a server-supplied string, and `LastBattleIsOfficial` (`:199`) is the only signal distinguishing a vetted server from a custom one. |

Members a reader might expect and their verified status:

| Absent member | Status | Why it is absent |
| --- | --- | --- |
| Any `event` declaration | **UNRESOLVED — absent by design** | `grep -nE '^\s*public\s+event' LobbyClient.cs` returns **zero** hits across the whole 1982-line file. Everything is pushed through `_handler?.OnGameClientStateChange(...)` (`LobbyClient.cs:144`). Positive evidence: the file has 104 public methods and 39 public properties, and not one event. |
| A public setter on `CurrentState` | **UNRESOLVED — does not exist** | `private set` at `LobbyClient.cs:138`. Mod code can read the state and nothing else; the transitions are driven by the class's own request methods. |
| A `Disconnect` / `Close` paired with `Connect` | **UNRESOLVED — `Logout` is the closer** | The only teardown entry is `Logout(TextObject)` at `LobbyClient.cs:379`; there is no parameterless disconnect. The transport callback `OnDisconnected` (`:729`) is the engine's, not a request. |
| A way to refresh `PlayerData` or `ClanInfo` | **UNRESOLVED — absent in v1.4.5** | All five session-data properties are `{ get; private set; }` (`LobbyClient.cs:114`-`:126`) and the file exposes no refresh method for them. The server pushes; the client cannot pull. Positive evidence: `grep -n 'Refresh' LobbyClient.cs` finds `IsRefreshingPlayerData` (`:130`) but no refresh *method*. |

## Examples

Implement the handler with the previous-state semantics correct:

```csharp
using TaleWorlds.MountAndBlade.Diamond;

public class MyLobbySessionHandler : ILobbyClientSessionHandler
{
    private readonly LobbyClient _client;

    public MyLobbySessionHandler(LobbyClient client)
    {
        _client = client;
    }

    public void OnGameClientStateChange(LobbyClient.State state)
    {
        // `state` is the state the client LEFT, not the one it entered
        // (LobbyClient.cs:142-144 stashes _state before assigning). Read
        // CurrentState for the destination.
        LobbyClient.State current = _client.CurrentState;

        Debug.Print("transition " + state + " -> " + current, 0);

        switch (current)
        {
            case LobbyClient.State.AtLobby:
                // The shipped predicate AtLobby (:179) says the same thing.
                Debug.Print("lobby ready", 0);
                break;

            case LobbyClient.State.AtBattle:
                Debug.Print("battle joined", 0);
                break;
        }
    }
}
```

Detach the handler on teardown so it stops receiving pushes:

```csharp
using TaleWorlds.MountAndBlade.Diamond;

public class LobbyLifetime
{
    private LobbyClient _client;
    private MyLobbySessionHandler _handler;

    public void Attach(LobbyClient client)
    {
        _client = client;
        _handler = new MyLobbySessionHandler(client);

        // The handler is installed by Connect (LobbyClient.cs:586). If you are
        // attaching after the fact you must go through the same path; there is
        // no public setter for _handler (LobbyClient.cs:61 is private).
        //
        // On teardown, call RemoveLobbyClientHandler() (LobbyClient.cs:747) —
        // otherwise OnGameClientStateChange keeps firing through _handler?. (:144)
        // and keeps your object alive.
    }

    public void Detach()
    {
        if (_client != null)
        {
            _client.RemoveLobbyClientHandler();   // LobbyClient.cs:747
        }

        _handler = null;
        _client = null;
    }
}
```

Treat the feature flags as "not yet known" rather than "off":

```csharp
using TaleWorlds.MountAndBlade.Diamond;

public class LobbyMenuState
{
    public static bool ShowMatchmaking(LobbyClient client)
    {
        if (client == null)
            return false;

        // IsMatchmakingAvailable is `_serverStatus?.IsMatchmakingEnabled ?? false`
        // (LobbyClient.cs:241) — false means EITHER disabled OR status not yet
        // received. Hide nothing until CurrentState says you are AtLobby (:179).
        if (client.CurrentState != LobbyClient.State.AtLobby)
            return false;

        // PartySystemAvailable is a hard-coded true (LobbyClient.cs:255);
        // gating on it does nothing, so do not pretend it is a real check.
        return client.IsMatchmakingAvailable;
    }
}
```

Distinguish a rejected request from an accepted one using the Task results:

```csharp
using System.Threading.Tasks;
using TaleWorlds.MountAndBlade.Diamond;

public class LobbyRequests
{
    public static async Task<bool> TryJoinCustomGame(LobbyClient client, CustomBattleId serverId)
    {
        if (client == null)
            return false;

        // FindGame() is void (LobbyClient.cs:543) and gives no signal at all;
        // FindCustomGame (:549) and RequestJoinCustomGame (:514) return
        // Task<bool>, so prefer them where you need to know it was accepted.
        bool accepted = await client.RequestJoinCustomGame(serverId, string.Empty, true);
        if (!accepted)
        {
            Debug.Print("join request refused (wrong password, or server gone)", 0);
        }

        return accepted;
    }
}
```

## Risks and crash boundaries

- **`OnGameClientStateChange` receives the previous state.** `LobbyClient.cs:142-144`. A handler written to the naive reading is one transition behind for the whole session, and because the call is `_handler?.` (`:144`) it never throws to reveal the mistake.
- **There are no events.** `grep -nE '^\s*public\s+event' LobbyClient.cs` returns 0 hits. Any code of the form `client.SomeEvent += …` will not compile, and searching the class for an event surface is wasted effort.
- **`CurrentState` has a `private` setter.** `LobbyClient.cs:138`. You cannot drive the state machine, and an attempt to construct a scenario by assigning it fails to compile.
- **The session-data properties are null before the server pushes them.** `PlayerData` (`LobbyClient.cs:114`), `SupportedFeatures` (`:116`), `ClanInfo` (`:118`), `ClanHomeInfo` (`:120`), `AvailableScenes` (`:126`) are all `{ get; private set; }` with no local default. Reading `ClanInfo` at startup gives `null`.
- **The two availability flags conflate "disabled" with "unknown".** `IsMatchmakingAvailable` (`:241`) and `IsCustomBattleAvailable` (`:257`) both use `_serverStatus?.… ?? false`, so a null status reads as `false`. A menu that hides options on these hides them at startup.
- **`PartySystemAvailable` is a hard-coded `true`.** `LobbyClient.cs:255`. Gating on it does nothing, and a feature check that always passes can mask a real problem elsewhere.
- **`KickPlayer` with `banPlayer: true` is irreversible.** `LobbyClient.cs:669`, `void`, no undo on this class.
- **`FindGame`, `CancelFindGame`, `QuitFromCustomGame`, `QuitFromMatchmakerGame`, `FleeBattle`, `RejoinBattle` and `Logout` are all `void`.** `LobbyClient.cs:543`, `:537`, `:497`, `:504`, `:1155`, `:1202`, `:379`. Every outcome arrives only through `CurrentState` or the handler. A failed `RejoinBattle` (`:1202`) falls back to the lobby with nothing reported locally.
- **`PlayerID` is a struct, so there is no null to test before login.** `LobbyClient.cs:128` returns `_playerId` directly. A pre-login read is a default-constructed `PlayerId`, not an error.
- **`SetLoadedModules` must be called before matchmaking.** `LobbyClient.cs:467`. Skipping it leaves `LoadedUnofficialModules` (`:259`) empty and `HasUnofficialModulesLoaded` (`:261`) false, and the server may filter the client out without any local diagnostic.
- **`Logout` takes a `TextObject`, and the message is user-visible.** `LobbyClient.cs:379`. A raw string will not compile; an inappropriate reason is something the player sees.
- **`IsHostingCustomGame` reads `_state` directly while its siblings read `CurrentState`.** `LobbyClient.cs:239` versus `:179` and `:213`. In a subclass that shadows the property, these disagree — a small inconsistency, but it is the kind that makes a predicate set unreliable.
- **`AliveCheckTimeInMiliSeconds` is an `override`** (`LobbyClient.cs:149`), so the transport base reads it. Changing it changes the connection timeout, and the misspelling in the name is in the source.
- **Not a save participant.** No `[Serializable]`; it is live session state, and nothing here survives a process restart.
- **A handler retained past logout keeps receiving pushes.** Because the call site is `_handler?.` (`LobbyClient.cs:144`), there is no "no handler" branch to warn you — call `RemoveLobbyClientHandler()` (`:747`) explicitly.

## Cross-Version Notes

The v1.4.5 file is 1982 lines, `public class LobbyClient : Client<LobbyClient>` (`LobbyClient.cs:21`), under the `bin/TaleWorlds.MountAndBlade.Diamond/TaleWorlds.MountAndBlade.Diamond/` layout. The same file name and namespace appear in the `bannerlord-1.3.0` and `bannerlord-1.3.15` trees with the same shape: a `Client<T>` self-type base, a large `State` enum, and an `ILobbyClientSessionHandler` push channel rather than events. Two things have been stable across those versions and are what to build against: **the `Client<LobbyClient>` self-type base** (the transport contract is typed through it) and **the absence of events** — the push-handler design is the reason this class has no subscription surface, and it is unlikely to change to events because the handler is how the whole UI layer already integrates. The `State` enum is the volatile part: it is 30-plus members and grows as features are added, so **switch on it exhaustively with a `default` arm** rather than assuming you have covered it. The `OnGameClientStateChange` previous-state semantics (`LobbyClient.cs:142-144`) are the most dangerous thing to re-verify after an update — it is an unusual contract that is easy to "fix" accidentally, and any fix would break every existing handler. **VERIFIED MEASURED for v1.4.5** (1982 lines, 104 public methods, 39 public properties, **0 events** verified by grep, `CurrentState` setter body read at `:132-147`; every cited line number checked with `sed -n`); the sibling version trees were compared at file-shape level only, not member by member.

## Dependencies

- Base type: `Client<LobbyClient>` from `TaleWorlds.Diamond` — the shared transport base, named by its self-type argument (`LobbyClient.cs:21`), supplying `OnConnected` / `OnCantConnect` / `OnDisconnected` (`LobbyClient.cs:715`, `:722`, `:729`) and `AliveCheckTimeInMiliSeconds` (`:149`).
- Push channel: `ILobbyClientSessionHandler` and `IClientSessionProvider` from `TaleWorlds.Diamond`, stored at `LobbyClient.cs:61` and supplied to `Connect` (`LobbyClient.cs:586`).
- Host application: `DiamondClientApplication` from `TaleWorlds.Diamond.ClientApplication`, the first constructor argument (`LobbyClient.cs:385`).
- Credentials: `ILoginAccessProvider` from `TaleWorlds.PlayerServices`, the second argument to `Connect` (`LobbyClient.cs:586`).
- Session data types: [`PlayerData`](../PlayerData) and [`LobbyClientConnectResult`](../LobbyClientConnectResult) are the two that have pages here (both in this bucket, so one `../`); `SupportedFeatures`, `ClanInfo`, `ClanHomeInfo` and `AvailableScenes` are described here rather than linked, because they have no pages in this slice.
- What happens after the lobby: [`MissionNetworkComponent`](../MissionNetworkComponent), which is the next stage of the same session — the client leaves the lobby at `AtBattle` / `QuittingFromBattle` (`LobbyClient.cs:34-35`) and the battle's network component takes over.
- Wire protocol messages: the `Messages.FromClient.ToLobbyServer` and `Messages.FromLobbyServer.ToClient` namespaces imported at `LobbyClient.cs:7`-`:8` — described rather than linked, for the same reason.
- Ranked and badge sub-namespaces: `TaleWorlds.MountAndBlade.Diamond.Ranked` and `…Diamond.MultiplayerBadges`, imported at `LobbyClient.cs:15-16`.
- Bucket index: [mission-ext API index](../)