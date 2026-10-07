---
title: "MessageManager"
description: "Auto-generated class reference for MessageManager."
---
# MessageManager

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class MessageManager`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/MessageManager.cs`

## Overview

`MessageManager` is the static entry point to the on-screen message log — the toast/chat line area — and it is a thin forwarder to the engine. Every member is a one-line call into `MBAPI.IMBMessageManager` or `MBAPI.IMBWindowManager`; the type declares no fields and no state.

There are five operations and they differ in ways that matter. `DisplayMessage(string)` (`MessageManager.cs:11`) and `DisplayMessage(string, uint color)` (`MessageManager.cs:17`) post a single line, the second colouring it. `DisplayMultilineMessage(string, uint)` (`MessageManager.cs:34`) splits on `\n` and posts one message per line (`MessageManager.cs:36`). `EraseMessageLines()` (`MessageManager.cs:52`) clears the log through the *window* manager rather than the message manager. `SetMessageManager(MessageManagerBase)` (`MessageManager.cs:58`) installs a managed handler that the engine will call back for every message — that is the hook the chat log screen uses.

`DisplayDebugMessage(string)` (`MessageManager.cs:24`) is the odd one out: it is marked `[Conditional("DEBUG")]` (`MessageManager.cs:23`), so the call is compiled out of a release build entirely.

## Mental Model

The installed `MessageManagerBase` is a global, and installing one replaces the previous behaviour rather than adding to it. `SetMessageManager` forwards straight to the engine (`MessageManager.cs:60`) with no null check and no "unset" path. The chat log screen installs `ChatLogMessageManager` this way (`GauntletChatLogView.cs:41`), and that type's four `MessageManagerBase` overrides are all empty — which is precisely how it suppresses the default output. So installing a handler that does nothing is enough to silence the log entirely.

`DisplayMultilineMessage` splits on `\n` only. A message containing `\r\n` is split on the `\n`, leaving a trailing carriage return on each line's text (`MessageManager.cs:36`) — harmless for display, but it means the strings handed to the engine are not identical to what you passed. And the split is unconditional on presence: `Contains("\n")` decides between the loop and a single post, so a single-line message still goes through the same call.

`DisplayDebugMessage` strips a leading `[DEBUG]` marker and re-adds its own: `Substring(0, 4).Equals("[DEBUG]")` then `"[DEBUG]: " + message` (`MessageManager.cs:26`, `MessageManager.cs:30`). So passing text that already starts with the marker does not double it — the prefix is removed first. The colour is a hard-coded `4294936712U`.

`EraseMessageLines` is the only member that routes to `MBAPI.IMBWindowManager` (`MessageManager.cs:54`). Everything else goes through `IMBMessageManager`. If you assumed one native object owns the whole message system, this is the member that contradicts it.

Nothing here queues or retries. Every member is a synchronous forward into native, so a message posted before the message area exists goes wherever native decides — this type offers no readiness check and no buffering of its own.

## How to use

**Getting one.** Static — nothing to obtain. Post lines with the `Display*` methods; intercept them by installing a `MessageManagerBase`.

**Typical use** — posting a coloured, multi-line message, and replacing the log's behaviour:

```csharp
using TaleWorlds.MountAndBlade;
using TaleWorlds.MountAndBlade.Source.Missions.Handlers;

public static class MyMessages
{
    public static void Announce(string title, string detail)
    {
        // Splits on '\n' and posts one line per entry.
        MessageManager.DisplayMultilineMessage(
            title + "\n" + detail,
            0xFFFF8000U);
    }

    public static void Clear()
    {
        // Routes to IMBWindowManager, not IMBMessageManager.
        MessageManager.EraseMessageLines();
    }

    // Intercepting: install a MessageManagerBase. Note this REPLACES the
    // current one, and the engine has no unset path.
    public static void Silence() => MessageManager.SetMessageManager(new MySilentMessageManager());
}

public class MySilentMessageManager : MessageManagerBase
{
    // Overriding these empty suppresses the default output for their categories.
    protected override void PostMessageLine(string text, uint color) { }
    protected override void PostWarningLine(string text) { }
    protected override void PostSuccessLine(string text) { }
    protected override void PostMessageLineFormatted(string text, uint color) { }
}
```

`MessageManager.SetMessageManager(MessageManagerBase)` is the real entry point (`MessageManager.cs:58`), and `GauntletChatLogView.cs:41` is the shipped call to copy.

**Most common mistake:** installing a message manager to *add* behaviour and losing the log.

```csharp
MessageManager.SetMessageManager(new MyLoggingMessageManager());
// MyLoggingMessageManager extends MessageManagerBase and overrides nothing.
```

`SetMessageManager` replaces whatever was installed (`MessageManager.cs:60`), it does not chain. A handler that inherits `MessageManagerBase` without overriding its `Post*` members is a working handler that happens to do nothing, and the game's message log goes blank — the same failure the shipped `ChatLogMessageManager` gets on purpose with its four empty overrides (`ChatLogMessageManager.cs:40`). If you want to log, override and forward to the base; if you want to silence, copy the empty-override pattern deliberately and know that you have silenced everything.

## Key Methods

### DisplayMessage
`public static void DisplayMessage(string message)`

**Purpose:** Executes the DisplayMessage logic.

```csharp
// Static call; no instance required
MessageManager.DisplayMessage("example");
```

### DisplayMessage
`public static void DisplayMessage(string message, uint color)`

**Purpose:** Executes the DisplayMessage logic.

```csharp
// Static call; no instance required
MessageManager.DisplayMessage("example", 0);
```

### DisplayDebugMessage
`public static void DisplayDebugMessage(string message)`

**Purpose:** Executes the DisplayDebugMessage logic.

```csharp
// Static call; no instance required
MessageManager.DisplayDebugMessage("example");
```

### DisplayMultilineMessage
`public static void DisplayMultilineMessage(string message, uint color)`

**Purpose:** Executes the DisplayMultilineMessage logic.

```csharp
// Static call; no instance required
MessageManager.DisplayMultilineMessage("example", 0);
```

### EraseMessageLines
`public static void EraseMessageLines()`

**Purpose:** Executes the EraseMessageLines logic.

```csharp
// Static call; no instance required
MessageManager.EraseMessageLines();
```

### SetMessageManager
`public static void SetMessageManager(MessageManagerBase messageManager)`

**Purpose:** Assigns a new value to message manager and updates the object's internal state.

```csharp
// Static call; no instance required
MessageManager.SetMessageManager(messageManager);
```

## Usage Example

```csharp
var manager = MessageManager.Current;
```

## See Also

- [Area Index](../)
- [ChatLogMessageManager — the handler the chat log screen installs here](../ChatLogMessageManager)
- [GauntletChatLogView — the shipped `SetMessageManager` call site](../GauntletChatLogView)
- [中文页面](../../../../zh/api/mission-ext/MessageManager)