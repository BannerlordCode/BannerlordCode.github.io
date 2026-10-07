---
title: "DLCInstallationQueryView"
description: "Auto-generated class reference for DLCInstallationQueryView."
---
# DLCInstallationQueryView

**Namespace:** TaleWorlds.MountAndBlade.View
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DLCInstallationQueryView`
**Base:** none
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/DLCInstallationQueryView.cs`

## Overview

`DLCInstallationQueryView` is the small helper that tells the player a mod or DLC finished installing while the game was running. It is a plain class — not a screen, not a `MissionView` — with exactly two public methods that form a matched pair: `Initialize()` (`DLCInstallationQueryView.cs:13`) and `OnFinalize()` (`DLCInstallationQueryView.cs:57`).

`Initialize` subscribes to two static `EngineController` events — `OnDLCInstalledCallback` and `OnDLCLoadedCallback` (`DLCInstallationQueryView.cs:15`). When a module finishes installing, `OnModuleInstallComplete` shows a quick information message with the `str_content_installed_notification` text and, if the active game state is *not* an `InitialState`, opens a modal inquiry (`DLCInstallationQueryView.cs:34`). When a module is activated, `OnModuleActivated` shows `str_content_activated_notification` and asks the current `InitialState` to `RefreshContentState()` (`DLCInstallationQueryView.cs:26`). `OnFinalize` unsubscribes both (`DLCInstallationQueryView.cs:59`).

The inquiry itself is built from two localised strings, `str_dlc_installed_title` and `str_dlc_installed_description`, with an OK-only button (`DLCInstallationQueryView.cs:46`, `DLCInstallationQueryView.cs:52`).

## Mental Model

The type's contract is its lifecycle discipline, and it is exemplary — contrast it with types in this same assembly that subscribe without unsubscribing. `Initialize` and `OnFinalize` are symmetric: both event handlers added at `DLCInstallationQueryView.cs:15` are removed at `DLCInstallationQueryView.cs:59`. The view module owns the instance and calls `OnFinalize` before dropping it, so a reload of the view module does not leave a dead delegate on `EngineController`.

The `InitialState` test inverts the behaviour, and it is easy to misread. `OnModuleActivated` refreshes the content state *only if* the active state is an `InitialState` (`DLCInstallationQueryView.cs:24`), while `OnModuleInstallComplete` shows the modal inquiry *only if* it is **not** (`DLCInstallationQueryView.cs:34`). That is deliberate: on the initial-state screen you refresh in place, and anywhere else — in a battle, on the map — you interrupt with a dialog.

The quick-information notification is unconditional in both handlers; only the modal is conditional. The 1000 argument to `MBInformationManager.AddQuickInformation` is the display duration (`DLCInstallationQueryView.cs:22`, `DLCInstallationQueryView.cs:33`), so the toast is a fixed 1000 ms regardless of message length.

The OK button is a hard-coded inline `TextObject` (`DLCInstallationQueryView.cs:46`) rather than a `GameTexts` lookup, unlike every other string in this class. That means it is not localisable through the normal text tables — a detail worth knowing if you touch this file.

`Module.CurrentModule.GlobalTextManager.FindText` is used rather than `GameTexts.FindText` (`DLCInstallationQueryView.cs:22`), so these strings resolve against the current module's text manager and will fail in a mod that does not ship the corresponding entries.

## How to use

**Getting one.** The view module creates it, calls `Initialize` and later `OnFinalize` on unload. For your own module, construct it, call `Initialize` in your submodule's setup, and mirror `ViewSubModule.OnSubModuleUnloaded`'s call to `OnFinalize` so the subscriptions go away.

**Typical use** — the same pattern for your own module, with the teardown included:

```csharp
using TaleWorlds.Core;
using TaleWorlds.Engine;
using TaleWorlds.MountAndBlade.View;

public static class MyDlcNotice
{
    private static DLCInstallationQueryView _view;

    public static void Install()
    {
        _view = new DLCInstallationQueryView();
        _view.Initialize();
    }

    public static void Uninstall()
    {
        // Mandatory: unsubscribes from the two static EngineController events.
        _view?.OnFinalize();
        _view = null;
    }
}
```

`EngineController.OnDLCInstalledCallback` and `EngineController.OnDLCLoadedCallback` are the two static events (`DLCInstallationQueryView.cs:15`); `InitialState.RefreshContentState()` is the refresh it triggers (`DLCInstallationQueryView.cs:26`).

**Most common mistake:** calling `Initialize` without ever calling `OnFinalize`.

```csharp
_view = new DLCInstallationQueryView();
_view.Initialize();
// module unloads; OnFinalize never called
```

The instance stays subscribed to two static `EngineController` events (`DLCInstallationQueryView.cs:15`) for the life of the process. On the next module install or activation the dead instance runs again, showing a duplicate notification — and because the instance holds no state that would throw, the symptom is a doubled toast rather than a crash, which is why it survives so long unnoticed. Always pair the two, as in the example; the class already gives you the correct pattern to copy.

## Key Methods

### Initialize
`public void Initialize()`

**Purpose:** Prepares the resources, state, or bindings the this instance needs before use.

```csharp
// Obtain an instance of DLCInstallationQueryView from the subsystem API first
DLCInstallationQueryView dLCInstallationQueryView = ...;
dLCInstallationQueryView.Initialize();
```

### OnFinalize
`public void OnFinalize()`

**Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of DLCInstallationQueryView from the subsystem API first
DLCInstallationQueryView dLCInstallationQueryView = ...;
dLCInstallationQueryView.OnFinalize();
```

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
DLCInstallationQueryView view = ...;
```

## See Also

- [Area Index](../)
- [InitialState — the game state this view can refresh](../InitialState)
- [中文页面](../../../../zh/api/mission-ext/DLCInstallationQueryView)