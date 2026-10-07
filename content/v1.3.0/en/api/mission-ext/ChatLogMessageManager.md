---
title: "ChatLogMessageManager"
description: "Auto-generated class reference for ChatLogMessageManager."
---
# ChatLogMessageManager

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ChatLogMessageManager : MessageManagerBase`
**Base:** `MessageManagerBase`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/ChatLogMessageManager.cs`

## Overview

`ChatLogMessageManager` is the message-manager the chat log screen installs for the whole game, not a per-screen object. It derives from `MessageManagerBase` (`ChatLogMessageManager.cs:10`) and is created by `GauntletChatLogView` with its own `MPChatVM` data source (`GauntletChatLogView.cs:40`), immediately followed by `MessageManager.SetMessageManager(this._chatLogMessageManager)` (`GauntletChatLogView.cs:41`) — so from that moment on, every message the game raises is routed through this instance.

Its constructor does two things and that is the whole type. It allocates a `ConcurrentQueue<ChatLineData>` (`ChatLogMessageManager.cs:16`) and it subscribes `OnDisplayMessageReceived` to the static `InformationManager.DisplayMessageInternal` event (`ChatLogMessageManager.cs:17`). The handler that event invokes does exactly one thing: if the message carries a sound path, it plays it 2D (`ChatLogMessageManager.cs:25`). It does not render the text.

The rendering side is `Update()` (`ChatLogMessageManager.cs:30`), which drains the queue and turns each entry into an `InformationManager.DisplayMessage` with the `"Default"` sound id (`ChatLogMessageManager.cs:35`). It is a pull model: nothing happens until something calls `Update`.

## Mental Model

The queue is never written to. `Update` is the only place `_queue` is touched and all it does is `TryDequeue` (`ChatLogMessageManager.cs:33`) — there is no `Enqueue` anywhere in the file. The nested `ChatLineData` struct (`ChatLogMessageManager.cs:72`) with its `Text` and `Color` fields has no producer, so in 1.3.0 the async path is dead code and messages reach the log through the `InformationManager` event subscription alone. If you were expecting to push a line into the chat log by enqueuing, there is no public way to do it.

The four `MessageManagerBase` overrides are all empty — `PostWarningLine` (`ChatLogMessageManager.cs:40`), `PostSuccessLine` (`ChatLogMessageManager.cs:45`), `PostMessageLineFormatted` (`ChatLogMessageManager.cs:50`) and `PostMessageLine` (`ChatLogMessageManager.cs:55`). They are overridden to *suppress* the base class's own console/queue behaviour, so a message raised through `MessageManager` while this type is installed produces no output of its own. That is also why the private `WarningColor` and `SuccessColor` constants (`ChatLogMessageManager.cs:60`) are unread: they exist for the colouring these overrides would have done.

The `_chatDataSource` field is written once in the constructor (`ChatLogMessageManager.cs:15`) and never read again — not by the handler, not by `Update`. The `MPChatVM` passed in is retained purely so the object graph looks connected; the actual chat content path is elsewhere, in `GauntletChatLogView`.

The subscription has no matching unsubscription. There is no `Dispose`, no finalizer, and no method that removes `OnDisplayMessageReceived` from `InformationManager.DisplayMessageInternal`. Every instance ever constructed stays subscribed to that static event for the life of the process, and each one will keep playing 2D sounds for every message raised. Constructing this type more than once — for example in a test or a re-entered screen — multiplies the sound playback without any visible sign in code.

## How to use

**Getting one.** Do not construct it yourself: opening the chat log view installs it as the process-wide message manager (`GauntletChatLogView.cs:41`). To observe messages instead, subscribe to `InformationManager.DisplayMessageInternal` yourself, or read `MessageManager`'s current manager.

**Typical use** — reacting to combat messages by mirroring this class's subscription:

```csharp
using TaleWorlds.Localization;
using TaleWorlds.MountAndBlade;
using TaleWorlds.Engine;

public static class MyCombatAnnouncer
{
    private static bool _hooked;

    public static void Install()
    {
        if (_hooked)
        {
            return;
        }

        // Same static event ChatLogMessageManager hooks (ChatLogMessageManager.cs:17).
        InformationManager.DisplayMessageInternal += OnMessage;
        _hooked = true;
    }

    public static void Remove()
    {
        if (!_hooked)
        {
            return;
        }

        // ChatLogMessageManager has no equivalent; do not copy that omission.
        InformationManager.DisplayMessageInternal -= OnMessage;
        _hooked = false;
    }

    private static void OnMessage(InformationMessage message)
    {
        if (!string.IsNullOrEmpty(message.MessageText))
        {
            MyHud.Log(message.MessageText);
        }

        if (!string.IsNullOrEmpty(message.SoundEventPath))
        {
            SoundEvent.PlaySound2D(message.SoundEventPath);
        }
    }
}
```

Note the sound line mirrors `OnDisplayMessageReceived` (`ChatLogMessageManager.cs:25`) exactly — that is the only behaviour this class actually performs.

**Most common mistake:** treating `Update()` as the thing that makes messages appear.

```csharp
manager.Update();   // drains a queue that nothing ever enqueues into
```

`Update` loops on `TryDequeue` (`ChatLogMessageManager.cs:33`), so with no producer it returns immediately every time and you get no output and no error — the messages are already gone down the event path instead. If you add your own producer by reflection or by writing to `_queue`, you are depending on private state the type gives no contract for. Post through `InformationManager.DisplayMessage` and let the subscription deliver it, as in the example.

## Key Methods

### Update
`public void Update()`

**Purpose:** Recalculates and stores the latest representation of the this instance.

```csharp
// Obtain an instance of ChatLogMessageManager from the subsystem API first
ChatLogMessageManager chatLogMessageManager = ...;
chatLogMessageManager.Update();
```

## Usage Example

```csharp
var manager = ChatLogMessageManager.Current;
```

## See Also

- [Area Index](../)
- [MessageManager — the process-wide slot this type is installed into](../MessageManager)
- [GauntletChatLogView — the screen that constructs and registers it](../GauntletChatLogView)
- [ChatLineData — the queue element struct, which has no producer](../ChatLineData)
- [中文页面](../../../../zh/api/mission-ext/ChatLogMessageManager)