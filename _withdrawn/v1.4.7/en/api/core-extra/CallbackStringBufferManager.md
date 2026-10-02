---
title: "CallbackStringBufferManager"
description: "CallbackStringBufferManager — class in TaleWorlds.DotNet. 6 public members (6 static)."
---

<!-- v147-skeleton -->
# CallbackStringBufferManager

**Namespace:** `TaleWorlds.DotNet`  
**Module:** `TaleWorlds.DotNet`  
**Type:** `public static class CallbackStringBufferManager`  
**Source:** `TaleWorlds.DotNet/CallbackStringBufferManager.cs`

## Overview

`CallbackStringBufferManager` owns a subsystem: it holds the live set of objects of one kind, keeps them in sync with the world, and hands out references to them. Subsystems are shared — a second instance means a second, divergent copy of the truth.

## Mental Model

Read a manager as the single owner of a collection, not as a utility bag. Everything that mutates the collection goes through its methods, and everything else reads the collections it exposes.

Because the instance is shared and long-lived, do not stash per-campaign scratch data on it. Keep it on the campaign object, the party or the hero you are working on.

Concretely, the surface breaks down like this:

- **Static entry points** (6): `StringBuffer0`, `StringBuffer1`, `StringBuffer2`, `StringBuffer3`, `StringBuffer4`, `StringBuffer5`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `StringBuffer0` | property (static) | Static entry point `byte[]` property. Read it for current state; a declared setter writes that state in place. |
| `StringBuffer1` | property (static) | Static entry point `byte[]` property. Read it for current state; a declared setter writes that state in place. |
| `StringBuffer2` | property (static) | Static entry point `byte[]` property. Read it for current state; a declared setter writes that state in place. |
| `StringBuffer3` | property (static) | Static entry point `byte[]` property. Read it for current state; a declared setter writes that state in place. |
| `StringBuffer4` | property (static) | Static entry point `byte[]` property. Read it for current state; a declared setter writes that state in place. |
| `StringBuffer5` | property (static) | Static entry point `byte[]` property. Read it for current state; a declared setter writes that state in place. |

## Usage Example

```csharp
// Reach the one live instance through the engine; do not construct a second copy.
// CallbackStringBufferManager exposes no accessor; the engine passes the instance to its callbacks.
```

## Risks and Boundaries

- Never construct a manager yourself when the engine already owns one; the duplicate will drift from the live state.
- Do not mutate the collection while enumerating it — materialise a list first if a callback can add or remove entries.
- Most managers are only valid between campaign start and campaign end.
- The declaration in `TaleWorlds.DotNet/CallbackStringBufferManager.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/core-extra/](../) — the other types in this bucket.
