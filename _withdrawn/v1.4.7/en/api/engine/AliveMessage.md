---
title: "AliveMessage"
description: "AliveMessage — class in TaleWorlds.Diamond.Rest. 1 public member (0 static)."
---

<!-- v147-skeleton -->
# AliveMessage

**Namespace:** `TaleWorlds.Diamond.Rest`  
**Module:** `TaleWorlds.Diamond`  
**Type:** `public class AliveMessage : RestRequestMessage`  
**Base:** `RestRequestMessage`  
**Source:** `TaleWorlds.Diamond/Rest/AliveMessage.cs`

## Overview

`AliveMessage` is a named type in the TaleWorlds.Diamond.Rest namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends RestRequestMessage, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `AliveMessage`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `AliveMessage` | ctor | Instance entry point. Takes no arguments. Returns ``. |

- Constructed as `public AliveMessage()`.

## Usage Example

```csharp
var aliveMessage = new AliveMessage();
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- The declaration in `TaleWorlds.Diamond/Rest/AliveMessage.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/engine/](../) — the other types in this bucket.
