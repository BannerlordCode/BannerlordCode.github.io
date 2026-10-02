---
title: "ChatLogMessageManager"
description: "ChatLogMessageManager — class in TaleWorlds.MountAndBlade.GauntletUI. 7 public members (0 static)."
---

<!-- v147-skeleton -->
# ChatLogMessageManager

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI`  
**Module:** `TaleWorlds.MountAndBlade.GauntletUI`  
**Type:** `public class ChatLogMessageManager : MessageManagerBase`  
**Base:** `MessageManagerBase`  
**Source:** `TaleWorlds.MountAndBlade.GauntletUI/ChatLogMessageManager.cs`

## Overview

`ChatLogMessageManager` owns a subsystem: it holds the live set of objects of one kind, keeps them in sync with the world, and hands out references to them. Subsystems are shared — a second instance means a second, divergent copy of the truth.

It extends MessageManagerBase, so the members it does not redeclare are inherited from there. 1 of its own members are properties, which is where most reads and writes land.

## Mental Model

Read a manager as the single owner of a collection, not as a utility bag. Everything that mutates the collection goes through its methods, and everything else reads the collections it exposes.

Because the instance is shared and long-lived, do not stash per-campaign scratch data on it. Keep it on the campaign object, the party or the hero you are working on.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `ChatLogMessageManager`.
- **Instance members** (6): `Update`, `PostWarningLine`, `PostSuccessLine`, `PostMessageLineFormatted`, `PostMessageLine`, `ChatLineData`.
- **Extension points** (4): `PostWarningLine`, `PostSuccessLine`, `PostMessageLineFormatted`, `PostMessageLine`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `PostMessageLine` | method (override) | Overrides the base member. Takes 2 arguments: `string text`, `uint color`. |
| `PostMessageLineFormatted` | method (override) | Overrides the base member. Takes 2 arguments: `string text`, `uint color`. |
| `PostSuccessLine` | method (override) | Overrides the base member. Takes 1 argument: `string text`. |
| `PostWarningLine` | method (override) | Overrides the base member. Takes 1 argument: `string text`. |
| `ChatLineData` | property | Instance entry point `struct` property. Read it for current state; a declared setter writes that state in place. |
| `Update` | method | Instance entry point. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `ChatLogMessageManager` | ctor | Instance entry point. Takes 1 argument: `MPChatVM chatDataSource`. Returns ``. |

- Constructed as `public ChatLogMessageManager(MPChatVM chatDataSource)`.

## Usage Example

```csharp
// Reach the one live instance through the engine; do not construct a second copy.
var chatLogMessageManager = new ChatLogMessageManager(chatDataSource);
// Read the live state through chatLogMessageManager.ChatLineData.
```

## Risks and Boundaries

- Never construct a manager yourself when the engine already owns one; the duplicate will drift from the live state.
- Do not mutate the collection while enumerating it — materialise a list first if a callback can add or remove entries.
- Most managers are only valid between campaign start and campaign end.
- 4 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade.GauntletUI/ChatLogMessageManager.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [MPChatVM](../../viewmodel/MPChatVM/) — `TaleWorlds.MountAndBlade.ViewModelCollection.Multiplayer`.
- [InformationManager](../../core-extra/InformationManager/) — `TaleWorlds.Library`.

Section: [api/mission-ext/](../) — the other types in this bucket.
