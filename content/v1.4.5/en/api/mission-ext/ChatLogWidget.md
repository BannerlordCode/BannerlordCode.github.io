---
title: "ChatLogWidget"
description: "Auto-generated class reference for ChatLogWidget."
---
# ChatLogWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Chat
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ChatLogWidget : Widget`
**Base:** `Widget`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Chat/ChatLogWidget.cs`

## Overview

`ChatLogWidget` is the **in-game chat panel widget** — the scrollable message list, the text input box, the scrollbar and the drag-resize frame, wired together as one Gauntlet widget. The file is 385 lines; the type is `public class ChatLogWidget : Widget` (`ChatLogWidget.cs:10`), which places it in the **widget** layer: it holds live child widget references, not view-model data.

Every child it drives is a public property holding a widget the template binds by name: `EditableTextWidget TextInputWidget` (`:131`), `ScrollbarWidget Scrollbar` (`:148`), `ScrollablePanel ScrollablePanel` (`:165`), `Widget ResizerWidget` (`:182`), `Widget ResizeFrameWidget` (`:199`) and `ListPanel MessageHistoryList` (`:252`). Alongside them are the state flags the template branches on — `IsChatDisabled` (`:59`), `FinishedResizing` (`:76`), `FullyShowChat` (`:93`), `FullyShowChatWithTyping` (`:109`), `IsMPChatLog` (`:269`) — and two `float` size properties, `SizeX` (`:216`) and `SizeY` (`:234`).

The two behaviours it exposes as API are a small registry: `RegisterMultiLineElement(ChatCollapsableListPanel element)` (`:369`) and `RemoveMultiLineElement(ChatCollapsableListPanel element)` (`:377`), backed by a `private readonly List<ChatCollapsableListPanel> _registeredMultilineWidgets` initialised at field-declaration (`:12`).

## Mental Model

Picture it as **a noticeboard that can be folded up**. A chat panel has two display states — fully shown, and collapsed to a sliver — and it tweens between them rather than snapping. `FullyShowChat` (`:93`) is the destination, `SizeX`/`SizeY` (`:216`, `:234`) are the numbers it animates toward, and `FinishedResizing` (`:76`) tells the template to stop drawing the drag affordance once the tween has landed.

The consequence that matters for a mod: **`ChatLogWidget` is a renderer, not a controller.** It holds the widgets and the fold state; it does not own the messages, the recipient list, or the send path. `[MBBannerlordConfig]`'s `EnableSingleplayerChatBox` / `EnableMultiplayerChatBox` decide whether it exists at all — those live in [`BannerlordConfig`](../BannerlordConfig). So "the chat is missing" is usually a config or template question, not a widget one.

The boundary that catches people is the **input-focus hand-off, which is deferred by one frame**. In `OnUpdate`, focus is taken only when `!IsChatDisabled && TextInputWidget != null && FullyShowChatWithTyping && _focusOnNextUpdate` all hold, and the code then sets `base.EventManager.FocusedWidget = TextInputWidget` and clears the flag. So setting `_focusOnNextUpdate` does **not** focus the box immediately — it queues it, and the next `OnUpdate` decides. If chat is disabled or still folded at that moment, the flag is consumed without effect and the keyboard focus stays where it was.

The second boundary is that the two registry methods are **idempotent by design**: `RegisterMultiLineElement` only adds when `!_registeredMultilineWidgets.Contains(element)` (`:371`), and `RemoveMultiLineElement` only removes when the list contains it (`:379`). Registering the same panel twice is a no-op, and removing an unregistered panel is a no-op — so neither throws on a duplicate or a miss.

## How to use

**How to obtain it.** Do not construct it. `public ChatLogWidget(UIContext context)` (`:285`) is the Gauntlet widget constructor and is called by the template loader when the prefab instantiates the widget; a hand-built instance is never attached to the event manager and will never receive `OnUpdate`. Get the live instance from the prefab's widget tree, then drive its public state.

**A typical use.** A mod that folds the chat panel down while the player is in a menu, using the size properties and the `FullyShowChat` flag rather than rebuilding the widget:

```csharp
using TaleWorlds.MountAndBlade.GauntletUI.Widgets.Chat;

ChatLogWidget chat = prefab.GetWidget<ChatLogWidget>("ChatLogWidget");
chat.SizeX = 0f;
chat.SizeY = 0f;
chat.FullyShowChat = false;
Debug.Print("chat collapsed, multi-line panels = " + chat.IsMPChatLog, 0);
```

Register a collapsible panel so the widget tracks it, and unregister on teardown:

```csharp
using TaleWorlds.MountAndBlade.GauntletUI.Widgets.Chat;

ChatLogWidget chat = prefab.GetWidget<ChatLogWidget>("ChatLogWidget");
ChatCollapsableListPanel panel = prefab.GetWidget<ChatCollapsableListPanel>("ChatCollapsableListPanel");
chat.RegisterMultiLineElement(panel);
// Duplicate registration is a no-op, not an error.
chat.RegisterMultiLineElement(panel);
// On teardown:
chat.RemoveMultiLineElement(panel);
```

**What to watch out for.** Flipping `FullyShowChat` and immediately assuming the input box has focus. The focus hand-off is deferred: `OnUpdate` only takes focus when `!IsChatDisabled && TextInputWidget != null && FullyShowChatWithTyping && _focusOnNextUpdate` all hold, and it clears `_focusOnNextUpdate` as it does. The consequence is that a mod which shows the panel and immediately calls an input API finds the keyboard focus still on the previous widget, and the first keystroke is lost — with no exception to explain it.

## Key members

| Member | Signature | What it is for |
| --- | --- | --- |
| `ChatLogWidget` (constructor) | `public ChatLogWidget(UIContext context)` (`:285`) | `: base(context)` and nothing else. **Gauntlet calls it** when the prefab instantiates; constructing one by hand yields a widget with no child references and no event-manager registration. |
| `IsChatDisabled` | `public bool IsChatDisabled` (`:59`) | Whether chat input is off. It is one of the four conditions gating focus in `OnUpdate`, so **setting it true silently cancels a queued focus request**. |
| `FullyShowChat` / `FullyShowChatWithTyping` | `public bool FullyShowChat` (`:93`), `FullyShowChatWithTyping` (`:109`) | Fold state and the typing-expanded variant. `FullyShowChat` is what the tween drives; `FullyShowChatWithTyping` is the *additional* condition for taking input focus. They are separate flags, not one. |
| `SizeX` / `SizeY` | `public float SizeX` (`:216`), `SizeY` (`:234`) | The target dimensions the fold tween animates toward. Setting them is how you collapse the panel; there is no `Collapse()` method. |
| `FinishedResizing` | `public bool FinishedResizing` (`:76`) | Whether the resize tween has landed. Read by the template to stop drawing the drag affordance — **it is a report flag, not a trigger**, so a mod cannot use it to finish a resize early. |
| `TextInputWidget` | `public EditableTextWidget TextInputWidget` (`:131`) | The entry field. **Null-checked before use** in `OnUpdate`, so a template that omits it degrades to a read-only log rather than crashing. It is also the widget that receives `EventManager.FocusedWidget`. |
| `ScrollablePanel` / `ScrollbarWidget` | `public ScrollablePanel ScrollablePanel` (`:165`), `public ScrollbarWidget Scrollbar` (`:148`) | The scrolling message area and its bar. `ScrollablePanel.ResetTweenSpeed()` is called from `OnUpdate` when `!FullyShowChat` — the widget drives the panel's own tween speed rather than exposing it. |
| `MessageHistoryList` | `public ListPanel MessageHistoryList` (`:252`) | The list panel holding the message rows. Populated by the template, not by this class. |
| `ResizerWidget` / `ResizeFrameWidget` | `public Widget ResizerWidget` (`:182`), `ResizeFrameWidget` (`:199`) | The drag handle and its frame, used for resizing the panel. Both typed as the base `Widget`, so a mod cannot reach resize-specific API through them without a cast. |
| `IsMPChatLog` | `public bool IsMPChatLog` (`:269`) | Whether this instance is the multiplayer variant. **Distinguishes the MP log from the single-player one**, which are separate prefab instances rather than one widget with a mode. |
| `RegisterMultiLineElement` | `public void RegisterMultiLineElement(ChatCollapsableListPanel element)` (`:369`) | Adds a collapsible panel to the internal registry, **guarded by `!_registeredMultilineWidgets.Contains(element)`** (`:371`). Duplicate registration is a silent no-op. |
| `RemoveMultiLineElement` | `public void RemoveMultiLineElement(ChatCollapsableListPanel element)` (`:377`) | Removes one, **guarded by `_registeredMultilineWidgets.Contains(element)`** (`:379`). Removing something never registered is a silent no-op — it does **not** throw. |
| `OnUpdate` (protected) | `protected override void OnUpdate(float dt)` | Where the deferred focus hand-off happens: `if (!IsChatDisabled && TextInputWidget != null && FullyShowChatWithTyping && _focusOnNextUpdate)` then `base.EventManager.FocusedWidget = TextInputWidget` and the flag is cleared. **Focus is never taken synchronously.** |

## Examples

Fold the panel and confirm the state you actually changed, distinguishing the two flags:

```csharp
using TaleWorlds.MountAndBlade.GauntletUI.Widgets.Chat;

ChatLogWidget chat = prefab.GetWidget<ChatLogWidget>("ChatLogWidget");
chat.SizeX = 0f;
chat.SizeY = 0f;
chat.FullyShowChat = false;
Debug.Print("FullyShowChat=" + chat.FullyShowChat
    + " FullyShowChatWithTyping=" + chat.FullyShowChatWithTyping, 0);
```

Check the input surface before assuming the box is usable:

```csharp
using TaleWorlds.MountAndBlade.GauntletUI.Widgets.Chat;

ChatLogWidget chat = prefab.GetWidget<ChatLogWidget>("ChatLogWidget");
if (chat.TextInputWidget == null)
{
    Debug.Print("template has no TextInputWidget; log is read-only", 0);
    return;
}
Debug.Print("chat disabled = " + chat.IsChatDisabled, 0);
```

Register and unregister a collapsible panel symmetrically, relying on the idempotence rather than guarding yourself:

```csharp
using TaleWorlds.MountAndBlade.GauntletUI.Widgets.Chat;

ChatLogWidget chat = prefab.GetWidget<ChatLogWidget>("ChatLogWidget");
ChatCollapsableListPanel panel = prefab.GetWidget<ChatCollapsableListPanel>("ChatCollapsableListPanel");
chat.RegisterMultiLineElement(panel);
chat.RegisterMultiLineElement(panel);   // no-op
chat.RemoveMultiLineElement(panel);     // no-op the second time
```

## Risks and crash boundaries

- **Focus is deferred by one frame.** `OnUpdate` takes focus only when all four of `!IsChatDisabled`, `TextInputWidget != null`, `FullyShowChatWithTyping` and `_focusOnNextUpdate` hold, and it clears the flag as it does. **Any of the other three being false consumes the request silently.**
- **`FullyShowChat` and `FullyShowChatWithTyping` are different flags** (`:93`, `:109`). Only the second gates focus; conflating them produces a panel that looks open and does not take the keyboard.
- **`FinishedResizing` is a report, not a command** (`:76`). Nothing in this file sets it in response to an external request, so a mod cannot use it to end a resize.
- **The registry methods never throw.** `RegisterMultiLineElement` (`:371`) and `RemoveMultiLineElement` (`:379`) are both `Contains`-guarded, so duplicates and misses are silent. **A typo'd panel type produces no error and no registration.**
- **Do not construct the widget.** `ChatLogWidget(UIContext)` (`:285`) does nothing but `: base(context)`; an instance built by hand has null children and is never driven by `OnUpdate`.
- **`TextInputWidget` can be null** on a template that omits it. It is null-checked in `OnUpdate`, so the failure is a non-focusable log rather than a crash — but a mod reading it unconditionally will throw.
- **`ResizerWidget` / `ResizeFrameWidget` are typed as the base `Widget`** (`:182`, `:199`), so resize-specific API is not reachable without a cast.
- **`IsMPChatLog` is per-instance** (`:269`), not a mode switch — the MP and SP logs are separate widgets, so a mod holding one does not cover the other.
- **The widget does not own messages.** Sending, history and recipients live outside this class; [`BannerlordConfig`](../BannerlordConfig)'s `EnableSingleplayerChatBox` / `EnableMultiplayerChatBox` decide whether the widget is instantiated at all.
- **Not a save participant.** Pure UI state; discarded with the screen.

## Cross-Version Notes

The v1.4.5 file is 385 lines. The same-named file in `bannerlord-1.3.0` and `bannerlord-1.3.15` under `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Chat/` keeps the same widget set, and `bannerlord-1.5.3` retains the shape. **The prefab-binding names are the cross-version risk**: all nine child references are resolved by the Gauntlet template by name, so renaming a property without updating the `.prefab` silently leaves the reference null rather than failing to compile.

## Dependencies

- Base class: `Widget` in `TaleWorlds.GauntletUI`, supplying `EventManager`, `OnUpdate` and the prefab lifecycle.
- Child widget types: `EditableTextWidget`, `ScrollbarWidget`, `ScrollablePanel`, `ListPanel` in `TaleWorlds.GauntletUI`, and `ChatCollapsableListPanel` in the same chat namespace (`:369`).
- Prefab that instantiates it: the Gauntlet chat-log prefab under `Modules.Native/TaleWorlds.MountAndBlade.GauntletUI`, which names every child property above.
- Whether the widget exists at all: [`BannerlordConfig`](../BannerlordConfig), whose `EnableSingleplayerChatBox` (`BannerlordConfig.cs:474`) and `EnableMultiplayerChatBox` (`BannerlordConfig.cs:477`) are the switches this widget hangs off.
- Chat behaviour and the send path: [`MBWindowManager`](../../mission/IMBWindowManager) is unrelated, but the lobby-side chat lives in [`MPLobbyVM`](../../mission-ext/MPLobbyVM).
- Bucket index: [mission-ext API](../)
