---
title: "GauntletChatLogView"
description: "Auto-generated class reference for GauntletChatLogView."
---
# GauntletChatLogView

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GauntletChatLogView : GlobalLayer`
**Base:** `GlobalLayer`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/GauntletChatLogView.cs`

## Overview

`GauntletChatLogView` is the global chat-log layer, and its constructor does far more than build a widget. It is `public class GauntletChatLogView : GlobalLayer` (`GauntletChatLogView.cs:18`) with a static `Current` (`GauntletChatLogView.cs:23`), built once by the idempotent `Initialize()` (`GauntletChatLogView.cs:46`) which guards on `Current == null` and registers the layer with `ScreenManager.AddGlobalLayer` (`GauntletChatLogView.cs:48`, `GauntletChatLogView.cs:51`).

The constructor wires six things. It creates an `MPChatVM` data source and injects five callbacks into it — toggle-chat key text, cycle-channel key text, send-message key text, cancel-sending key text, and a chat-disabled-state callback (`GauntletChatLogView.cs:28` through `GauntletChatLogView.cs:33`). It creates a `GauntletLayer` at draw order `15300` and loads the `"SPChatLog"` movie into it (`GauntletChatLogView.cs:34`, `GauntletChatLogView.cs:35`), registers three hotkey categories (`GauntletChatLogView.cs:36` through `GauntletChatLogView.cs:38`), and then does the two consequential things: it constructs a `ChatLogMessageManager` and installs it as the process-wide message manager (`GauntletChatLogView.cs:40`, `GauntletChatLogView.cs:41`), and it subscribes itself to `ManagedOptions.OnManagedOptionChanged` (`GauntletChatLogView.cs:42`).

The per-frame work is `OnTick(float dt)` (`GauntletChatLogView.cs:87`): if the data source says chat is allowed by options, it pumps the message manager's queue (`GauntletChatLogView.cs:92`), then always runs `UpdateObjects`, `Tick` and sets `ShouldHaveOffset` from a computed predicate (`GauntletChatLogView.cs:94` through `GauntletChatLogView.cs:96`).

## Mental Model

Three options can close the chat on you, and the test is a disjunction of three guarded conjunctions (`GauntletChatLogView.cs:58` through `GauntletChatLogView.cs:60`). `HideBattleUI` closes it only when there is a current mission *and* the config is on; `EnableSingleplayerChatBox` closes it only in singleplayer when disabled; `EnableMultiplayerChatBox` only in multiplayer when disabled. Each pairs the option that changed with the session mode, so a given option is inert in the mode it does not apply to. When any of them fires, the data source is cleared (`GauntletChatLogView.cs:63`) and the chat closed — the history is discarded, not preserved.

`CloseChat` has a three-way guard, not a simple one (`GauntletChatLogView.cs:69`). It returns early only when the user is *not* typing, *not* inspecting messages, *and* the layer is not focused. So a focused chat layer alone is enough to keep it open, and inside it the two user activities are handled in a specific order: stop inspecting first (`GauntletChatLogView.cs:77`), else stop typing (`GauntletChatLogView.cs:79`). A user mid-inspection loses that mode when the option flips.

The message manager this view creates is the same global one described on the `ChatLogMessageManager` page, and its queue is never fed — `OnTick` calls `Update()` (`GauntletChatLogView.cs:92`) which drains a `ConcurrentQueue` that nothing enqueues into. In 1.3.0 the visible chat lines therefore come from the data source, not from that queue.

The `ManagedOptions.OnManagedOptionChanged` subscription is combined, not assigned (`GauntletChatLogView.cs:42`), which is the correct form — it adds this handler alongside any other. But nothing in this file removes it. There is no `OnFinalize` and no `-=` for that event, so the handler outlives the layer. Since `Initialize` only ever creates one instance, that is one leak rather than a repeating one.

`Update` is called only under the options gate while `UpdateObjects` and `Tick` are unconditional (`GauntletChatLogView.cs:92` versus `GauntletChatLogView.cs:94`). So with chat disabled the data source still ticks — it is kept current, just not drained.

## How to use

**Getting one.** Call `GauntletChatLogView.Initialize()` (`GauntletChatLogView.cs:46`); it is idempotent. Read `GauntletChatLogView.Current` to reach the layer — its data source and message manager are private, so this is observation only.

**Typical use** — reacting to the same three options that can close the chat:

```csharp
using TaleWorlds.MountAndBlade;
using TaleWorlds.MountAndBlade.GauntletUI;

public static class MyChatWatcher
{
    private static bool _hooked;

    public static void Install()
    {
        GauntletChatLogView.Initialize();

        if (!_hooked)
        {
            // Combined, not assigned — the same form the view uses.
            ManagedOptions.OnManagedOptionChanged += OnOptionChanged;
            _hooked = true;
        }
    }

    private static void OnOptionChanged(ManagedOptions.ManagedOptionsType changed)
    {
        // Same three disjuncts as GauntletChatLogView.cs:58.
        bool hiddenInMission =
            changed == ManagedOptions.ManagedOptionsType.HideBattleUI &&
            Mission.Current != null && BannerlordConfig.HideBattleUI;

        bool singleplayerOff =
            changed == ManagedOptions.ManagedOptionsType.EnableSingleplayerChatBox &&
            !GameNetwork.IsMultiplayer && !BannerlordConfig.EnableSingleplayerChatBox;

        bool multiplayerOff =
            changed == ManagedOptions.ManagedOptionsType.EnableMultiplayerChatBox &&
            GameNetwork.IsMultiplayer && !BannerlordConfig.EnableMultiplayerChatBox;

        if (hiddenInMission || singleplayerOff || multiplayerOff)
        {
            MyUi.HideChatAffordances();
        }
    }
}
```

`ManagedOptions.OnManagedOptionChanged` is the event this view subscribes to (`GauntletChatLogView.cs:42`), and the three enum members are the ones it tests (`GauntletChatLogView.cs:58`).

**Most common mistake:** assuming you can add a chat line by posting to `MessageManager`, because this view installed a message manager.

```csharp
MessageManager.DisplayMessage("hello");   // not shown in the chat log
```

The manager this view installs is a `ChatLogMessageManager` whose four `Post*` overrides are all empty (`ChatLogMessageManager.cs:40`), and the visible lines come from the private `MPChatVM` data source it owns. `MessageManager.SetMessageManager` (`GauntletChatLogView.cs:41`) installs a *handler* that receives messages; it does not route them into this screen's list. To add a chat line you need your own `MPChatVM` reference — which this class does not expose — so the practical options are your own layer, or replacing the installed manager with one that posts through the data source you control.

## Key Properties

| Name | Signature |
|------|-----------|
| `Current` | `public static GauntletChatLogView Current { get; }` |

## Key Methods

### Initialize
`public static void Initialize()`

**Purpose:** Prepares the resources, state, or bindings the this instance needs before use.

```csharp
// Static call; no instance required
GauntletChatLogView.Initialize();
```

### SetCanFocusWhileInMission
`public void SetCanFocusWhileInMission(bool canFocusInMission)`

**Purpose:** Assigns a new value to can focus while in mission and updates the object's internal state.

```csharp
// Obtain an instance of GauntletChatLogView from the subsystem API first
GauntletChatLogView gauntletChatLogView = ...;
gauntletChatLogView.SetCanFocusWhileInMission(false);
```

### OnSupportedFeaturesReceived
`public void OnSupportedFeaturesReceived(SupportedFeatures supportedFeatures)`

**Purpose:** Invoked when the supported features received event is raised.

```csharp
// Obtain an instance of GauntletChatLogView from the subsystem API first
GauntletChatLogView gauntletChatLogView = ...;
gauntletChatLogView.OnSupportedFeaturesReceived(supportedFeatures);
```

### SetEnabled
`public void SetEnabled(bool isEnabled)`

**Purpose:** Assigns a new value to enabled and updates the object's internal state.

```csharp
// Obtain an instance of GauntletChatLogView from the subsystem API first
GauntletChatLogView gauntletChatLogView = ...;
gauntletChatLogView.SetEnabled(false);
```

### LoadMovie
`public void LoadMovie(bool forMultiplayer)`

**Purpose:** Reads movie from persistent storage or a stream.

```csharp
// Obtain an instance of GauntletChatLogView from the subsystem API first
GauntletChatLogView gauntletChatLogView = ...;
gauntletChatLogView.LoadMovie(false);
```

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
GauntletChatLogView view = ...;
```

## See Also

- [Area Index](../)
- [ChatLogMessageManager — the message manager this view installs globally](../ChatLogMessageManager)
- [MessageManager — the static entry point `SetMessageManager` writes to](../MessageManager)
- [中文页面](../../../../zh/api/mission-ext/GauntletChatLogView)