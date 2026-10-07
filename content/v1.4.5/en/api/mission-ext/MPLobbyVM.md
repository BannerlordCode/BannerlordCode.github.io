---
title: "MPLobbyVM"
description: "Auto-generated class reference for MPLobbyVM."
---
# MPLobbyVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby/MPLobbyVM.cs`

## Overview

`MPLobbyVM` is the **root view-model of the entire multiplayer lobby** — the screen that owns authentication, the server browser, matchmaking, the armory, friends, clans and roughly thirty popups. The file is **2308 lines**; the type is `public class MPLobbyVM : ViewModel` (`MPLobbyVM.cs:31`).

Its organising idea is **a page enum plus one property per page**. The nested `public enum LobbyPage` (`MPLobbyVM.cs:33`) numbers the eight real pages — `NotAssigned = 0`, `Authentication = 1`, `Rejoin = 2`, `Options = 3`, `Home = 4`, `Armory = 5`, `Matchmaking = 6`, `Profile = 7` (`:35`-`:42`) — and then adds two **sentinel** members in the same enum: `HotkeySelectablePageBegin = 3` and `HotkeySelectablePageEnd = 7` (`:43`-`:44`). Those two are not pages; they are the inclusive range a hotkey cycles through, and because they duplicate `Options` and `Profile` numerically, **a `switch` on `LobbyPage` will not compile without a duplicate-case guard**, and iterating the enum by value walks the sentinels too.

The constructor also contains one genuine oddity worth knowing before you read any flag from it: `IsMatchmakingEnabled` is assigned **twice in a row**. Line 960 sets it to `!isAbleToSearchForGame` and line 961 immediately overwrites it with `isAbleToSearchForGame`, with no branch between them. **The effective value is the second assignment; line 960 is dead code.**

Everything else follows the pattern: `CurrentPage` (`:188`) is the active page, `DisallowedPages` (`:190`) is the list a navigation restriction fills, and each page is a single property of its own view-model type — `Menu` (`:380`), `Login` (`:397`), `Rejoin` (`:414`), `Friends` (`:431`), `Home` (`:448`), `Matchmaking` (`:465`), `Armory` (`:482`), `GameSearch` (`:499`), `PlayerProfile` (`:516`), `AfterBattlePopup` (`:533`), `Options` (`:635`), `Profile` (`:652`), `Clan` (`:669`), `RecentGames` (`:890`), `RankLeaderboard` (`:924`), and the popup family from `:550` through `:873`. There are **88 public declarations** in total, of which the vast majority are these single-instance properties.

## Mental Model

Think of it as **the shell of a building, with one room per page and a revolving door between them**. `CurrentPage` is which door is open; `SetPage` is the mechanism that moves it; `DisallowedPages` is the list of doors the building owner has locked. Every popup property is a room that can be stacked on top without changing `CurrentPage`.

That model explains why this class has both `OnActivate`/`OnDeactivate` (`:1179`, `:1185`) and `OnFinalize` (`:1112`). `Activate` and `Deactivate` are the revolving door — the screen being entered or left — and `Finalize` is the demolition. **The distinction matters because popups outlive activation**: leaving the lobby with a popup open is a legitimate state, so teardown logic belongs in `Finalize`, not `OnDeactivate`.

The boundary that decides whether a mod's code is safe is that **`MPLobbyVM` is constructed with a fan of seven callbacks and reads `NetworkMain.GameClient` inside its own constructor.** The constructor is `public MPLobbyVM(LobbyState lobbyState, Action<BasicCharacterObject> onOpenFacegen, Action onForceCloseFacegen, Action onLogout, Action<KeyOptionVM> onKeybindRequest, Func<string> getContinueKeyText, Action<bool> setNavigationRestriction)` (`:940`), and before it finishes it runs `NetworkMain.GameClient.IsAbleToSearchForGame` (`:959`) to seed `IsMatchmakingEnabled`, then reads `IsCustomBattleAvailable`, `IsPartyLeader` and `IsInParty` (`:962`-`:964`). **So constructing an `MPLobbyVM` outside a live client session dereferences a null `GameClient`**, and the callbacks are not optional — omitting one leaves a null delegate that a later page will invoke.

The second boundary is that **`OnEscape` is `async void`** (`:1338`), like the async refreshes on the row type. You cannot await it, and its failures do not come back to the caller. The navigation methods that are *not* async — `OnConfirm()` (`:1260`), `OnTick(float)` (`:1190`) — are the ones safe to drive from a loop.

## How to use

**How to obtain it.** Do not construct it in normal work — the lobby screen owns one. Construct it only when building a standalone lobby or a test harness, and in that case pass a real `LobbyState` **and** all seven callbacks (`:940`). It lives in the `…ViewModelCollection.Lobby` namespace (`:29`) in the `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection` assembly.

**A typical use.** A mod that wants to know which page the lobby is on and whether a specific page is reachable, using the enum by name rather than iterating it:

```csharp
using TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby;

MPLobbyVM lobby = currentLobby;
Debug.Print("page = " + lobby.CurrentPage, 0);
Debug.Print("matchmaking enabled = " + lobby.IsMatchmakingEnabled, 0);
Debug.Print("in party = " + lobby.IsInParty + ", party leader = " + lobby.IsPartyLeader, 0);
```

**What to watch out for.** Iterating `LobbyPage` by value. The enum's last two members, `HotkeySelectablePageBegin = 3` and `HotkeySelectablePageEnd = 7` (`:43`-`:44`), are **range sentinels that alias real page numbers** — `HotkeySelectablePageBegin` is numerically identical to `Options`. The consequence is that `foreach (LobbyPage p in Enum.GetValues(typeof(LobbyPage)))` yields ten values for eight pages, two of which are duplicates of `Options` and `Profile`, and a naive loop that maps each value to a page property will drive the same page twice or build a lookup that silently overwrites. If you need the real pages, list them explicitly.

## Key members

| Member | Signature | What it is for |
| --- | --- | --- |
| `LobbyPage` (nested) | `public enum LobbyPage { NotAssigned=0, Authentication=1, Rejoin=2, Options=3, Home=4, Armory=5, Matchmaking=6, Profile=7, HotkeySelectablePageBegin=3, HotkeySelectablePageEnd=7 }` (`:33`-`:45`) | The page identity, **plus two range sentinels that duplicate `Options` and `Profile`**. Ten members, eight pages. `HotkeySelectablePageBegin`/`End` (`:43`-`:44`) define the inclusive hotkey range `3..7`. |
| `MPLobbyVM` (constructor) | `public MPLobbyVM(LobbyState lobbyState, Action<BasicCharacterObject> onOpenFacegen, Action onForceCloseFacegen, Action onLogout, Action<KeyOptionVM> onKeybindRequest, Func<string> getContinueKeyText, Action<bool> setNavigationRestriction)` (`:940`) | Builds every page property, sets `CurrentPage = LobbyPage.NotAssigned` (`:948`), creates `BlockerState` (`:957`) and `Menu` (`:958`), and **reads `NetworkMain.GameClient.IsAbleToSearchForGame` (`:959`)** to seed `IsMatchmakingEnabled`. **None of the seven callbacks is optional.** |
| `CurrentPage` | `public LobbyPage CurrentPage { get; private set; }` (`:188`) | Which page is open. `private set` — the screen moves it through `SetPage` (`:1573`), not by assignment. Initialised to `NotAssigned` in the constructor (`:947`), so it is observably "nothing yet" before the screen starts. |
| `DisallowedPages` | `public List<DisallowedPages> { get; private set; }` → `public List<LobbyPage> DisallowedPages { get; private set; }` (`:190`) | Pages navigation restriction has blocked. Filled through the `Action<bool> setNavigationRestriction` callback the constructor receives (`:940`), so the lock source is the screen, not this object. **`List<LobbyPage>` will contain sentinels if a caller adds them.** |
| `SetPage` | `public void SetPage(LobbyPage lobbyPage, MPMatchmakingVM.MatchmakingSubPa…)` (`:1573`) | The navigation primitive. Takes a `LobbyPage` **and a matchmaking sub-page**, so the signature is not symmetric — a caller moving between non-matchmaking pages still has to supply the second argument. |
| `OnActivate` / `OnDeactivate` | `public void OnActivate()` (`:1179`), `public void OnDeactivate()` (`:1185`) | Screen entry and exit. **Not teardown** — popups can legitimately outlive deactivation, so cleanup belongs in `OnFinalize`. |
| `OnFinalize` | `public override void OnFinalize()` (`:1112`) | The `ViewModel` teardown override, and the only place that should release what this screen owns. |
| `OnTick` | `public void OnTick(float dt)` (`:1190`) | Per-frame drive, including the matchmaking queue timer built on `PlayerCountInQueueTimerInterval = 10f` (`:58`). **Synchronous**, unlike `OnEscape`. |
| `OnConfirm` | `public void OnConfirm()` (`:1260`) | The "accept" input action for the current page. Synchronous. |
| `OnEscape` | `public async void OnEscape()` (`:1338`) | The "back/cancel" input action. **`async void`** — not awaitable, exceptions go to the synchronization context, and a caller cannot tell when it has finished. |
| `OnDisconnected` | `public void OnDisconnected()` (`:1667`) | Network-drop handler. Everything on this screen that reads session state is stale after it runs. |
| `ConnectionStateUpdated` | `public void ConnectionStateUpdated(bool isAuthenticated)` (`:1540`) | Auth-state change, and the input to `IsLoggedIn` (`:193`). |
| `RequestExit` | `public async Task RequestExit()` (`:1489`) | The exit path — and the **one member that returns `Task`**, so it is the only one on this class that can actually be awaited. It is also passed into the `MPLobbyMenuVM` constructor (`:958`), which is why the menu can trigger it. |
| `IsLoggedIn` / `IsInParty` / `IsPartyLeader` / `IsMatchmakingEnabled` / `IsCustomGameFindEnabled` / `IsSearchingGame` / `IsSearchGameRequested` / `IsArmoryActive` | `public bool IsLoggedIn` (`:193`), `IsArmoryActive` (`:244`), `IsSearchGameRequested` (`:261`), `IsInParty` (`:278`), `IsSearchingGame` (`:295`), `IsMatchmakingEnabled` (`:312`), `IsCustomGameFindEnabled` (`:329`), `IsPartyLeader` (`:346`) | The eight session booleans a Gauntlet template binds to. **`IsMatchmakingEnabled` is assigned twice in a row in the constructor** — `:960` sets `!isAbleToSearchForGame`, `:961` overwrites it with `isAbleToSearchForGame`, unbranched. **Read `:961`; `:960` is dead.** It is also re-seeded later at `:1702`. |
| Page properties | `Menu` (`:380`), `Login` (`:397`), `Rejoin` (`:414`), `Friends` (`:431`), `Home` (`:448`), `Matchmaking` (`:465`), `Armory` (`:482`), `GameSearch` (`:499`), `PlayerProfile` (`:516`), `Options` (`:635`), `Profile` (`:652`), `Clan` (`:669`), `RecentGames` (`:890`), `RankProgressInformation` (`:907`), `RankLeaderboard` (`:924`) | One singleton per page, all created by the constructor. **Each is always non-null once construction completes** — so a null check on a page property means construction failed, not that the page is inactive. |
| Popup properties | `AfterBattlePopup` (`:533`), `PartyInvitationPopup` (`:550`), `PartyJoinRequestPopup` (`:567`), `InformationPopup` (`:584`), `QueryPopup` (`:601`), `PartyPlayerSuggestionPopup` (`:618`), `ClanCreationPopup` (`:686`), `ClanCreationInformationPopup` (`:703`), `ClanInvitationPopup` (`:720`), `ClanMatchmakingRequestPopup` (`:737`), `ClanInviteFriendsPopup` (`:754`), `ClanLeaderboardPopup` (`:771`), `CosmeticObtainPopup` (`:788`), `BannerlordIDAddFriendPopup` (`:805`), `BannerlordIDChangePopup` (`:822`), `BadgeProgressionInformation` (`:839`), `BadgeSelectionPopup` (`:856`), `ChangeSigilPopup` (`:873`) | Eighteen popups, also constructor-created. **They are stacked over the page and do not change `CurrentPage`** — which is exactly why `HasAnyContextMenuOpen()` (`:1432`), `ForceCloseContextMenus()` (`:1441`) and `HasNoPopupOpen()` (`:1449`) exist as separate queries from the page state. |
| `BlockerState` | `public MPLobbyBlockerStateVM BlockerState` (`:363`) | The navigation-lock controller, constructed at `:957` with the `setNavigationRestriction` callback. This is the object that actually applies `DisallowedPages`. |
| `Menu` | `public MPLobbyMenuVM Menu` (`:380`) | The side menu, constructed at `:958` with `lobbyState`, the restriction callback, and `RequestExit` — **so the menu holds a direct reference to this instance's exit task**. |
| `BrightnessPopup` / `ExposurePopup` | `public BrightnessOptionVM BrightnessPopup` (`:210`), `ExposureOptionVM ExposurePopup` (`:227`) | The two display-option popups, living outside `TaleWorlds.MountAndBlade` in `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions` (`:24`). **They are the only members here that do not come from the Multiplayer assembly.** |
| `HasAnyContextMenuOpen` / `ForceCloseContextMenus` / `HasNoPopupOpen` | `public bool HasAnyContextMenuOpen()` (`:1432`), `ForceCloseContextMenus()` (`:1441`), `HasNoPopupOpen()` (`:1449`) | Popup-state queries, distinct from `CurrentPage`. `ForceCloseContextMenus` is the one that mutates. |
| `RefreshValues` | `public override void RefreshValues()` (`:1016`) | The `ViewModel` re-read override for every `[DataSourceProperty]` on this screen. Call after mutating any bound property directly. |
| `CreateInputKeyVisuals` | `public void CreateInputKeyVisuals(HotKey cancelInputKey, HotKey doneInputKe…)` (`:1082`) | Builds the key glyphs shown in hints and prompts. Takes `HotKey` values from `TaleWorlds.InputSystem` (`:7`), so it is input-system-bound rather than key-string-bound. |
| `RefreshPlayerData` | `public void RefreshPlayerData(PlayerData playerData)` (`:1911`) | Pushes the local player's record down to whichever page needs it. The screen-level counterpart of the row-level `UpdateWith`. |
| `RefreshSupportedFeatures` | `public void RefreshSupportedFeatures()` (`:1926`) | Re-queries what the backend supports. This is what fills the `…Supported` flags the row type also exposes, so **it must run before any page assumes a feature exists**. |
| `OnFriendListUpdated` | `public void OnFriendListUpdated(bool forceUpdate = false)` (`:2201`) | Friends-page refresh hook, with a `forceUpdate` opt-out for coalescing. |
| `ShowOptionsChangedInquiry` | `public void ShowOptionsChangedInquiry(Action onAccept = null, Action onDe…)` (`:1556`) | Confirmation dialog for an options change. **Both callbacks are optional and default to null** — the one place in this class where optional delegates are handled defensively. |
| `OnUpdateFindingGame` | `public void OnUpdateFindingGame(MatchmakingWaitTimeStats matchmakingWaitT…)` (`:1733`) | Matchmaking progress callback, and the driver of the `10f`-second queue timer (`:58`). |
| `OnServerStatusReceived` / `OnRejoinBattleRequestAnswered` / `OnPremadeGameCreated` | at `:1683`, `:1716`, `:1754` | Server and rejoin event handlers. **`OnRejoinBattleRequestAnswered(bool isSuccessful)` takes a success flag**, which is the one place a backend outcome arrives as a bool rather than as a [`ServerInfoMessage`](../ServerInfoMessage) value. |
| `OnPlayerRemovedFromParty` / `OnPlayerAddedToParty` / `OnPlayerAssignedPartyLeader` / `OnPlayerSuggestedToParty` | at `:1836`, `:1843`, `:1849`, `:1864` | Party mutation handlers. The remove one carries a `PartyRemoveReason` alongside the `PlayerId`, because the UI needs to say *why* someone left. |
| `OnNotificationsReceived` | `public void OnNotificationsReceived(LobbyNotification[] notifications)` (`:2079`) | Batch notification intake. **Takes an array**, so it is a snapshot rather than a live feed. |
| `PartyActionType` (nested, private) | `private enum PartyActionType { Add, Remove, AssignLeader }` (`:47`-`:52`) | The three party mutations, queued through a `ConcurrentQueue<(PartyActionType, PlayerId, PartyRemoveReason)>` built at `:956`. **`private`** — you can observe the effect, not enqueue directly. |
| `PlayerCountInQueueTimerInterval` | `private const float PlayerCountInQueueTimerInterval = 10f;` (`:58`) | The queue refresh cadence. **`private const`** — a mod cannot retune it, so matchmaking-queue UI latency is fixed at ten seconds unless you reimplement the page. |

## Examples

Read the screen's state through the session booleans rather than inferring from the page:

```csharp
using TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby;

MPLobbyVM lobby = currentLobby;
Debug.Print("page = " + lobby.CurrentPage, 0);
Debug.Print("logged in = " + lobby.IsLoggedIn, 0);
Debug.Print("in party = " + lobby.IsInParty + ", leader = " + lobby.IsPartyLeader, 0);
Debug.Print("matchmaking enabled = " + lobby.IsMatchmakingEnabled, 0);
```

Check popup state separately from page state, because popups stack over the page:

```csharp
using TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby;

MPLobbyVM lobby = currentLobby;
if (lobby.HasAnyContextMenuOpen())
{
    Debug.Print("a popup is open over page " + lobby.CurrentPage, 0);
}
if (lobby.HasNoPopupOpen())
{
    Debug.Print("nothing stacked on top", 0);
}
```

Drive the two synchronous input actions from a loop, and use the awaitable one for exit:

```csharp
using TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby;

MPLobbyVM lobby = currentLobby;
lobby.OnTick(dt);
lobby.OnConfirm();

// RequestExit is the only member that returns Task.
lobby.RequestExit().ContinueWith(_ => Debug.Print("exit requested", 0));
```

Refresh the feature set before a page assumes a capability exists:

```csharp
using TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby;

MPLobbyVM lobby = currentLobby;
lobby.RefreshSupportedFeatures();
lobby.RefreshValues();
Debug.Print("features refreshed", 0);
```

## Risks and crash boundaries

- **The constructor dereferences `NetworkMain.GameClient`.** (`:957`) **Constructing an `MPLobbyVM` outside a live client session is a null dereference**, before you get a chance to configure anything.
- **All seven constructor callbacks are required.** (`:940`) None has a default. A missing one leaves a null delegate a page will later invoke.
- **`LobbyPage` contains two range sentinels that alias real pages.** `HotkeySelectablePageBegin = 3` (`:43`) equals `Options`, `HotkeySelectablePageEnd = 7` (`:44`) equals `Profile`. **A `switch` over the enum needs duplicate-case handling, and `Enum.GetValues` yields ten values for eight pages.**
- **`OnEscape` is `async void`.** (`:1338`) Not awaitable; failures do not return to the caller. `RequestExit` (`:1489`) is the contrasting `async Task`.
- **`DisallowedPages` is a plain `List<LobbyPage>`.** (`:190`) Nothing validates its contents, so a sentinel placed in it blocks a page that happens to share the value.
- **Page and popup properties are never null after construction.** A null one means construction threw, not that the page is inactive — so a null check that "protects" you hides the real failure.
- **`SetPage` has an asymmetric signature.** (`:1573`) A `LobbyPage` plus a `MPMatchmakingVM.MatchmakingSubPage`, even when moving between pages that have no sub-page.
- **`IsMatchmakingEnabled` is written twice, unbranched.** `:960` assigns `!isAbleToSearchForGame`, `:961` immediately assigns `isAbleToSearchForGame`. **The first is dead code**; the effective seed is `:961`. It is re-seeded later at `:1702`, and `:1704` branches on `!NetworkMain.GameClient.IsAbleToSearchForGame` directly rather than on the property.
- **`OnDisconnected` invalidates everything session-derived.** (`:1667`) Any cached peer, party or matchmaking state on the pages is stale afterwards.
- **The nine popup/`On*` handlers are push, not pull.** A mod that mutates state directly will be overwritten when the corresponding `On*` fires.
- **`OnNotificationsReceived` takes an array** (`:2079`) — a snapshot, not a subscription.
- **`PartyActionType` and the party-action queue are private.** (`:47`, `:956`) You can react to party changes but cannot enqueue them through this class.
- **`PlayerCountInQueueTimerInterval` is a private `const`.** (`:58`) Queue UI latency is fixed at ten seconds; overriding it means replacing the matchmaking page.
- **Two members come from another assembly.** `BrightnessPopup` and `ExposurePopup` (`:210`, `:227`) are `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions` types, not Multiplayer ones (`:24`).
- **Not a save participant.** Lobby state only.

## Cross-Version Notes

The v1.4.5 file is **2308 lines** with 88 public declarations, of which the enum, the constructor and roughly fifty page/popup properties are the bulk. Its row counterpart [`MPLobbyPlayerBaseVM`](../MPLobbyPlayerBaseVM) is 2120 lines in the sibling `…Lobby.Friends` namespace. Both types are present in `bannerlord-1.5.3` under a **different on-disk directory layout** (`TaleWorlds/MountAndBlade/Multiplayer/ViewModelCollection/Lobby/…` rather than `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby/…`), so a search rooted at one path will not find them at the other — the on-disk module layout is not stable across versions even when the namespaces are. Note this decompilation carries `//IL_xxxx: Unknown result type` comments throughout the constructor (`:941`-`:946`) and elsewhere, artifacts of the shipped build's obfuscated types rather than of the original source; they do not change the documented signatures.

## Dependencies

- Base class: `ViewModel` in `TaleWorlds.Core.ViewModelCollection`, whose `RefreshValues()` (`:1016`) and `OnFinalize()` (`:1112`) this type overrides.
- Row view-models this screen owns: [`MPLobbyPlayerBaseVM`](../MPLobbyPlayerBaseVM) for each player row.
- Backend result vocabulary arriving on this screen: [`ServerInfoMessage`](../ServerInfoMessage), and the Diamond lobby namespaces the file imports for it (`MPLobbyVM.cs:10`-`:12`).
- Session transport and peer state underneath: [`GameNetwork`](../GameNetwork), reached through `NetworkMain.GameClient` (`:957`, and throughout the `On*` handlers).
- Options this screen reads and writes: [`BannerlordConfig`](../BannerlordConfig) — `RefreshSupportedFeatures` (`:1926`) and `ShowOptionsChangedInquiry` (`:1556`) both act on it.
- Display-option popups from a different assembly: `BrightnessOptionVM` and `ExposureOptionVM` in `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions` (`MPLobbyVM.cs:24`, `:210`, `:227`).
- Input bindings for the hint glyphs: `HotKey` in `TaleWorlds.InputSystem` (`MPLobbyVM.cs:7`, `:1082`).
- Bucket index: [mission-ext API](../)
