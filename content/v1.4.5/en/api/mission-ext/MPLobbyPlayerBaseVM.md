---
title: "MPLobbyPlayerBaseVM"
description: "Auto-generated class reference for MPLobbyPlayerBaseVM."
---
# MPLobbyPlayerBaseVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Friends
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyPlayerBaseVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Friends/MPLobbyPlayerBaseVM.cs`

## Overview

`MPLobbyPlayerBaseVM` is the **view-model for one row in a multiplayer server or friends list** — the card showing a player's name, level, rating, clan, avatar, sigil and badges, plus every "can I do this to them" flag and every button that acts on them. The file is **2120 lines**; the type is `public class MPLobbyPlayerBaseVM : ViewModel` (`MPLobbyPlayerBaseVM.cs:22`).

Its shape is a strong hint about how it must be used. There are roughly **50 `[DataSourceProperty]` boolean/string/int properties that are pure pass-throughs** to private fields — `CanCopyID` (`:244`), `CanBeInvited` (`:363`), `CanInviteToParty` (`:380`), `IsFriendRequest` (`:312`), `IsSelected` (`:278`) and thirty more, each a `{ get => _x; set … }` pair carrying `[DataSourceProperty]` so a Gauntlet template can bind to it by name. Alongside them sit **eight `public static Action<…>` fields** (`:32`-`:48`) that are not per-player at all: `OnPlayerProfileRequested`, `OnBannerlordIDChangeRequested`, `OnAddFriendWithBannerlordIDRequested`, `OnSigilChangeRequested`, `OnBadgeChangeRequested`, `OnRankProgressionRequested`, `OnRankLeaderboardRequested`, `OnClanPageRequested`, `OnClanLeaderboardRequested`. **They are static, so one subscriber serves every row on screen.**

The row also carries a nested `public enum OnlineStatus` (`:24`) with four members — `None`, `InGame`, `Online`, `Offline` (`:26`-`:29`) — exposed as `CurrentOnlineStatus` (`:206`).

## Mental Model

Picture it as **a business card on a clipboard that somebody else keeps filling in**. You own the clipboard (the row), you set its blank fields from data you fetch, and the HUD reads the fields through data bindings. The card never fetches on its own — except for three methods that do, and those are the exception that matters below.

That model explains the two layers of state. The outer layer is the **snapshot**: `PlayerData` (`:231`), `State` (`:233`), `PlayerStats` (`:237`), `RankInfo` (`:239`), all `{ get; private set; }` or `{ get; protected set; }` — pushed in by whoever owns the row, via `UpdateWith(PlayerData)` (`:1546`) or `UpdatePlayerState(AnotherPlayerData)` (`:1529`). The inner layer is the **derived presentation**: `LevelText` (`:618`), `RatingText` (`:652`), `ExperienceRatio` (`:550`), the fifteen `HintViewModel` hint objects (`:873`-`:1145`). `UpdateExperienceData()` (`:1632`) is where the inner layer is recomputed from the outer one, and it does the string formatting inline.

The boundary that decides whether your code is safe is that **three update methods are `async void`.** `UpdateStats(Action onDone)` is `public async void` (`:1616`), `UpdateRating(Action onDone)` is `public async void` (`:1655`), and `UpdateClanInfo()` is `public async void` (`:1721`). `async void` means **you cannot await them and their exceptions do not surface at the call site** — they are posted to the synchronization context. So `UpdateRating(...)` returns having done nothing yet, `IsRankInfoLoading` is set to `true` synchronously (`:1656`) and cleared only after the await (`:1658`), and if `NetworkMain.GameClient` is null the failure lands somewhere else entirely.

The second boundary is that **the `Execute*` methods are the only things that cause side effects, and each one null-checks a different thing.** `ExecuteInviteToParty` uses `_onInviteToParty?.Invoke(ProvidedID)` (`:1977`) — null-safe. `ExecuteKickFromParty` dereferences `NetworkMain.GameClient.IsInParty` with **no null check** (`:1989`), inside an `if` that also requires `IsPartyLeader`. So one button is forgiving and the next is not.

## How to use

**How to obtain it.** You never construct one for the common case — the lobby screen creates a row per player. Construct it directly only when you are building a standalone list: the constructor is `public MPLobbyPlayerBaseVM(PlayerId id, string forcedName = "", Action<PlayerId> onInvi…)` at `:1263`, and it takes the player's id plus optional forced name and callbacks. It lives in the `…ViewModelCollection.Lobby.Friends` namespace (`:20`), so it is in the `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection` assembly.

**A typical use.** A mod that reacts to a profile request wires the static hook once and lets every row benefit:

```csharp
using TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Friends;

MPLobbyPlayerBaseVM.OnPlayerProfileRequested = playerId =>
{
    Debug.Print("profile requested for " + playerId, 0);
};
```

**What to watch out for.** Firing `UpdateRating`, `UpdateStats` or `UpdateClanInfo` in a loop and reading the result immediately. The single most common mistake is calling `UpdateRating(onDone)` and then reading `RatingText` on the next line, which reads the value from *before* the await. The consequence is a UI that shows a stale rating that never self-corrects, because nothing re-reads it later — the `Action onDone` callback is the only completion signal, and `async void` means the compiler will not force you to use it. Use the callback.

## Key members

| Member | Signature | What it is for |
| --- | --- | --- |
| `OnlineStatus` (nested) | `public enum OnlineStatus { None, InGame, Online, Offline }` (`:24`-`:29`) | Presence state, surfaced as `CurrentOnlineStatus` (`:206`). **Four states, not a bool** — `InGame` and `Online` are distinct, and most list filtering keys on the difference between them. |
| `OnPlayerProfileRequested` and siblings | nine `public static Action<…>` fields (`:32`, `:34`, `:36`, `:38`, `:40`, `:42`, `:44`, `:46`, `:48`) | **Static**, so they are session-wide, not per-row. Subscribing from a row constructor gives you N subscriptions for N rows and leaks them all when the screen closes. Subscribe once from the screen; **unsubscribe on teardown or the delegate keeps the whole lobby alive.** |
| `CurrentOnlineStatus` | `public OnlineStatus CurrentOnlineStatus { get; private set; }` (`:206`) | Presence, pushed in by `OnStatusChanged(OnlineStatus, bool)` (`:1589`). `private set` — the row is the only writer. |
| `ProvidedID` | `public PlayerId ProvidedID { get; protected set; }` (`:208`-`:228`) | The identity of the row. **`protected set`**, and the setter is not a plain assignment: when the value changes it looks up `NetworkMain.GameClient` and calls `UpdateAvatar(gameClient != null && gameClient.IsKnownPlayer(ProvidedID))` (`:222`-`:224`). **A null-safe local, so setting the id before the game client exists is safe** — but the avatar will not be refreshed. |
| `PlayerData` | `public PlayerData PlayerData { get; private set; }` (`:231`) | The campaign-side player record behind every derived field. **`null` until `UpdateWith` runs**, and several getters dereference it — see Risks. |
| `State` / `TimeSinceLastStateUpdate` | `public AnotherPlayerState State { get; protected set; }` (`:233`), `public float TimeSinceLastStateUpdate { get; protected set; }` (`:235`) | Where the player is in the session, and how stale that is. **`protected set`** — a subclass can move them, outside code cannot. |
| `UpdateWith` | `public virtual void UpdateWith(PlayerData playerData)` (`:1546`) | The main snapshot push. **`virtual`** — this is the extension point for a derived row type. |
| `UpdatePlayerState` | `public void UpdatePlayerState(AnotherPlayerData playerData)` (`:1529`) | The narrower state push, separate from `UpdateWith`. Using the wrong one leaves the row half-updated. |
| `UpdateExperienceData` | `public void UpdateExperienceData()` (`:1632`) | Recomputes `Level`, `ExperienceRatio`, `RatingRatio`, `ExperienceHint.HintText` (`:1648`), `LevelText` (`:1653`) and `ExperienceText` (`:1657`) **from `PlayerData`, synchronously, formatting the strings inline**. Safe to call, unlike the three async ones — **but it dereferences `PlayerData` unconditionally.** |
| `UpdateStats` | `public async void UpdateStats(Action onDone)` (`:1616`) | Fetches `PlayerStats` via `await NetworkMain.GameClient.GetPlayerStats(ProvidedID)` (`:1621`), guarded by `_hasReceivedPlayerStats` / `_isReceivingPlayerStats` (`:1618`). Fires `OnPlayerStatsReceived` and `onDone` only when the result is non-null (`:1626`-`:1627`). **`async void`: not awaitable, and a `GameClient` that is null throws into the context rather than to you.** |
| `UpdateRating` | `public async void UpdateRating(Action onDone)` (`:1655`) | Fetches `RankInfo` (`:1657`), wrapping it in `IsRankInfoLoading = true` (`:1656`) / `false` (`:1658`). **`onDone` fires unconditionally** (`:1659`), even on a failed fetch, so it is a completion signal and not a success signal. |
| `UpdateClanInfo` | `public async void UpdateClanInfo()` (`:1721`) | Fetches clan name, tag and banner. **`async void` with no callback at all** — there is no way to know when it finished except by watching `ClanName`. |
| `RefreshValues` | `public override void RefreshValues()` (`:1300`) | The `ViewModel` override the HUD calls to re-read every bound property. **You call this after mutating fields directly**, because `[DataSourceProperty]` bindings only refresh when the framework asks. |
| `ExecuteSelectPlayer` | `public void ExecuteSelectPlayer()` (`:1970`) | **Toggles `IsSelected = !IsSelected`** (`:1972`) — it is a toggle, not a set. Calling it twice returns to the original state. |
| `ExecuteInviteToParty` / `ExecuteInviteToClan` | `public void ExecuteInviteToParty()` (`:1975`), `ExecuteInviteToClan()` (`:1981`) | Both are a single null-conditional invoke: `_onInviteToParty?.Invoke(ProvidedID)` (`:1977`), `_onInviteToClan?.Invoke(ProvidedID)` (`:1983`). **No-op when the constructor callback was not supplied**, and they do not check `CanInviteToParty` / `CanInviteToClan` themselves. |
| `ExecuteKickFromParty` | `public void ExecuteKickFromParty()` (`:1987`) | **The one command that touches the network directly**: `if (NetworkMain.GameClient.IsInParty && NetworkMain.GameClient.IsPartyLeader) { NetworkMain.GameClient.KickPlayerFromParty(ProvidedID); }` (`:1989`-`:1992`). **`NetworkMain.GameClient` is dereferenced with no null check**, unlike the two invites above. |
| `ExecuteAcceptFriendRequest` / `ExecuteDeclineFriendRequest` / `ExecuteCancelPendingFriendRequest` / `ExecuteRemoveFriend` | at `:1996`, `:2010`, `:2024`, `:2030` | Friend-list commands. Each reaches through `NetworkMain.GameClient`, so they share the same exposure as `ExecuteKickFromParty`. |
| `ExecuteCopyBannerlordID` / `ExecuteShowProfile` | `public void ExecuteCopyBannerlordID()` (`:2036`), `ExecuteShowProfile()` (`:2053`) | Clipboard and profile navigation. `ExecuteShowProfile` is what the static `OnPlayerProfileRequested` hook ultimately feeds. |
| `Can*` / `Is*` gating flags | `CanCopyID` (`:244`), `ShowLevel` (`:261`), `IsSelected` (`:278`), `HasNotification` (`:295`), `IsFriendRequest` (`:312`), `IsPendingRequest` (`:329`), `CanRemove` (`:346`), `CanBeInvited` (`:363`), `CanInviteToParty` (`:380`), `CanInviteToClan` (`:397`), `IsSigilChangeInformationEnabled` (`:414`), `IsRankInfoLoading` (`:431`), `IsRankInfoCasual` (`:448`), `IsClanInfoSupported` (`:465`), `IsBannerlordIDSupported` (`:482`) | The sixteen booleans a Gauntlet template binds to decide which buttons render. **They are set from outside**, not computed here — so a mod that shows its own button must keep one of these in sync itself, because the built-in template will not. |
| Derived text | `LevelText` (`:618`), `LevelTitleText` (`:635`), `RatingText` (`:652`), `GameTypeText` (`:669`), `StateText` (`:601`), `ClanInfoTitleText` (`:754`), `BadgeInfoTitleText` (`:771`), `AvatarInfoTitleText` (`:788`), `ExperienceText` (`:805`), `RankText` (`:822`) | Localized strings produced by `UpdateExperienceData` and the rank refresh. **They are strings, not `TextObject`s** — the `TextObject` is built and then `.ToString()`-ed at `:1653`/`:1657`, so a caller cannot re-bind a variable. |
| Hint view-models | `NameHint` (`:873`), `InviteToPartyHint` (`:890`), `RemoveFriendHint` (`:907`), `AcceptFriendRequestHint` (`:924`), `DeclineFriendRequestHint` (`:941`), `CancelFriendRequestHint` (`:958`), `InviteToClanHint` (`:975`), `ChangeBannerlordIDHint` (`:992`), `CopyBannerlordIDHint` (`:1009`), `AddFriendWithBannerlordIDHint` (`:1026`), `ExperienceHint` (`:1043`), `RatingHint` (`:1060`), `LootHint` (`:1077`), `SkirmishRatingHint` (`:1094`), `CaptainRatingHint` (`:1111`), `ClanLeaderboardHint` (`:1128`) | Sixteen `HintViewModel` objects — one per stat and one per action — each a pre-constructed object the template can show. `UpdateExperienceData` assigns `ExperienceHint.HintText` (`:1648`), so the hint is updated in place rather than replaced. |
| Visual members | `PlayerAvatarImageIdentifierVM Avatar` (`:1145`), `BannerImageIdentifierVM ClanBanner` (`:1162`), `MPLobbySigilItemVM Sigil` (`:1179`), `MPLobbyBadgeItemVM ShownBadge` (`:1196`), `CharacterViewModel CharacterVisual` (`:1213`) | The picture half of the card. `RefreshCharacterVisual()` (`:1943`) populates `CharacterVisual` from `PlayerData`, including `IsFemale`, `Race` and a `BodyProperties` round-trip through a pointer (`:1966`-`:1968`). |
| `DisplayedStats` / `GameTypes` | `public MBBindingList<MPLobbyPlayerStatItemVM> DisplayedStats` (`:1230`), `GameTypes` (`:1247`) | Bindable collections. **`GameTypes` is filtered in place by `FilterStatsForGameMode(string)` (`:1743`)**, which is why it is a list rather than an array. |
| `FilterStatsForGameMode` | `public void FilterStatsForGameMode(string gameModeCode)` (`:1743`) | Narrows `DisplayedStats` to one game mode. **Mutates rather than returns**, so calling it twice with different codes does not accumulate — it replaces. |
| `SetOnInvite` | `public void SetOnInvite(Action<PlayerId> onInvite)` (`:1609`) | Late-binds the invite callback after construction. Exists because the screen builds rows before it knows the callbacks; use it instead of constructing with one if the target is not yet known. |
| `OnStatusChanged` | `public void OnStatusChanged(OnlineStatus status, bool isInGameStatusActive)` (`:1589`) | The presence-update entry point, and the second argument is a **separate flag from the enum** — `InGame` in the enum and `isInGameStatusActive` are not the same thing. |
| `OnPlayerStatsReceived` / `OnRankInfoChanged` | `public Action OnPlayerStatsReceived;` (`:68`), `public Action<string> OnRankInfoChanged;` (`:84`) | **Instance** events, unlike the static hooks at `:32`-`:48`. The rank one carries the game-type id, so it fires per game mode rather than once. |
| `RefreshSelectableGameTypes` | `public void RefreshSelectableGameTypes(bool isRankedOnly, Action<string> onRefreshed, s…)` (`:1387`) | Rebuilds the game-type filter, invoking `onRefreshed` with the resulting id. **Callback-shaped, not a return value**, so it is safe to call before the async refresh it triggers. |
| `UpdateNameAndAvatar` | `public void UpdateNameAndAvatar(bool forceUpdate = false)` (`:1577`) | Re-reads the name and avatar, honouring `forceUpdate`. The `forcedName` constructor argument is what this exists to override. |

## Examples

Wire the static hooks once from the screen, not once per row:

```csharp
using TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Friends;

MPLobbyPlayerBaseVM.OnPlayerProfileRequested = playerId =>
{
    Debug.Print("profile requested for " + playerId, 0);
};

// On teardown, clear it or the delegate keeps the lobby alive.
MPLobbyPlayerBaseVM.OnPlayerProfileRequested = null;
```

Read the gating flags before showing an action, rather than assuming the template will:

```csharp
using TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Friends;

MPLobbyPlayerBaseVM row = selectedRow;
if (row == null)
{
    return;
}
Debug.Print("can invite to party = " + row.CanInviteToParty
    + ", can invite to clan = " + row.CanInviteToClan, 0);
Debug.Print("status = " + row.CurrentOnlineStatus, 0);
```

Take the completion callback from the async refreshes instead of reading straight after:

```csharp
using TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Friends;

MPLobbyPlayerBaseVM row = selectedRow;
row.UpdateRating(updatedGameTypeId =>
{
    Debug.Print("rating refreshed for " + updatedGameTypeId
        + " -> " + row.RatingText, 0);
});
```

Push a snapshot, then recompute the derived layer explicitly:

```csharp
using TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Friends;

MPLobbyPlayerBaseVM row = selectedRow;
row.UpdateWith(playerData);
row.UpdateExperienceData();
row.RefreshValues();
Debug.Print("level = " + row.Level + ", experience ratio = " + row.ExperienceRatio, 0);
```

## Risks and crash boundaries

- **`UpdateStats`, `UpdateRating` and `UpdateClanInfo` are `async void`.** (`:1616`, `:1655`, `:1721`) **You cannot await them and their exceptions escape to the synchronization context**, so a null `NetworkMain.GameClient` fails somewhere other than the call site. `UpdateClanInfo` has no callback at all.
- **`UpdateRating`'s `onDone` fires even on failure.** (`:1659`) It is a completion signal, not a success signal — do not use it to gate "the rating is now correct".
- **`UpdateStats` deduplicates by flag.** (`:1618`) A second call while `_hasReceivedPlayerStats` or `_isReceivingPlayerStats` is set **silently does nothing**, and it will not call `onDone` either.
- **`PlayerData` is null until `UpdateWith` runs**, and `UpdateExperienceData` dereferences it unconditionally (`:1643`-`:1646`). Calling it on a fresh row throws.
- **`ExecuteKickFromParty` dereferences `NetworkMain.GameClient` with no null check** (`:1989`), while `ExecuteInviteToParty` uses `_onInviteToParty?.Invoke(...)` (`:1977`). **The command buttons are not uniformly null-safe.**
- **`Execute*` does not re-check its own gating flag.** `ExecuteInviteToParty` (`:1975`) never reads `CanInviteToParty` (`:380`); the template is what hides the button. A mod calling the command directly bypasses the check.
- **`ExecuteSelectPlayer` toggles rather than sets.** (`:1972`) Two calls return to the starting state.
- **The nine `Action` fields are `static`.** (`:32`-`:48`) Subscribing per row creates one subscription per row and leaks them all. Unsubscribe on screen teardown.
- **`OnPlayerStatsReceived` and `OnRankInfoChanged` are instance events.** (`:68`, `:84`) Mixing the static and instance hook families on one row is easy to do and produces callbacks that fire once instead of once-per-row.
- **`ProvidedID`'s setter is `protected` and has a side effect.** (`:208`-`:228`) It refreshes the avatar through `NetworkMain.GameClient` (`:222`-`:224`); outside code cannot set it, and a subclass that sets it before the client exists gets no avatar.
- **Derived text is `string`, not `TextObject`.** (`:601`-`:822`) The `TextObject` is built and `ToString()`-ed at `:1653`/`:1657`, so a caller cannot substitute a variable afterwards.
- **`State` and `TimeSinceLastStateUpdate` are `protected set`.** (`:233`, `:235`) A derived type can move them; external code cannot.
- **The sixteen `Can*`/`Is*` flags are set from outside, not computed here.** (`:244`-`:482`) A mod that adds its own button must maintain one of them, because the stock template will not.
- **`GameTypes` is filtered in place.** (`:1247`, `:1743`) Treat it as owned by the row.
- **`UpdateWith` is `virtual`** (`:1546`) — the intended extension point; `UpdatePlayerState` (`:1529`) is not.
- **Not a save participant.** Lobby state only; it is rebuilt whenever the screen is built.

## Cross-Version Notes

The v1.4.5 file is **2120 lines**. Its sibling `MPLobbyVM` is 2308 lines (`Modules.Multiplayer/…/Lobby/MPLobbyVM.cs`), and the same two types are present in `bannerlord-1.5.3` under a **different on-disk layout** (`TaleWorlds/MountAndBlade/Multiplayer/ViewModelCollection/Lobby/…` rather than `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby/…`), so a search that assumes one layout will miss them. Note that this v1.4.5 decompilation carries `//IL_xxxx: Unknown result type` comments (`:216`-`:219`, `:1976`, and throughout) — artifacts of the shipped build's obfuscated `PlayerId`, not of the original source. They do not affect the documented signatures, but they are why several getters look empty.

## Dependencies

- Base class: `ViewModel` in `TaleWorlds.Core.ViewModelCollection`, whose `RefreshValues()` this type overrides (`:1300`).
- The owning lobby screen in the same namespace tree: [`MPLobbyVM`](../MPLobbyVM).
- Session state: `NetworkMain.GameClient` (`:222`, `:1989`, and throughout the `Execute*` block), plus [`GameNetwork`](../GameNetwork) for the transport underneath.
- Snapshot payloads: `PlayerData`, `AnotherPlayerData`, `AnotherPlayerState`, `PlayerId`, `PlayerStatsBase` and `GameTypeRankInfo`, all in `TaleWorlds.Core`.
- Identifiers and nested row types: `PlayerAvatarImageIdentifierVM`, `BannerImageIdentifierVM` and `CharacterViewModel` (TaleWorlds.Core.ViewModelCollection.ImageIdentifiers), `MPLobbySigilItemVM`, `MPLobbyBadgeItemVM`, `MPLobbyPlayerStatItemVM` and `MPLobbyGameTypeVM`.
- Collection type: `MBBindingList<T>` (`:1230`, `:1247`), the bindable list behind the Gauntlet templates.
- Localisation: `TextObject` and `GameTexts`, used in `UpdateExperienceData` (`:1647`-`:1657`).
- Engine bridge for the sigil/badge lookups the static hooks lead to: [`IMBBannerlordTableauManager`](../../mission/IMBBannerlordTableauManager).
- Bucket index: [mission-ext API](../)
