---
title: "SRTHelper"
description: "SRTHelper — class in TaleWorlds.Library. 2 public members (2 static)."
---

<!-- v147-skeleton -->
# SRTHelper

**Namespace:** `TaleWorlds.Library`  
**Module:** `TaleWorlds.Library`  
**Type:** `public static class SRTHelper`  
**Source:** `TaleWorlds.Library/SRTHelper.cs`

## Overview

`SRTHelper` is a helper namespace: stateless functions that answer a question or compute a value that would otherwise be duplicated across call sites. It holds no campaign state of its own.

## Mental Model

A helper is the right home for "given these inputs, what is the answer", and the wrong home for anything that has to be remembered. Call it, take the value, and let the caller own the lifetime.

Because helpers are shared by many systems, changing the meaning of a parameter is a breaking change for every caller — treat the signature as a published contract even though there is no interface.

Concretely, the surface breaks down like this:

- **Static entry points** (2): `SrtParser`, `StreamHelpers`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `SrtParser` | property (static) | Static entry point `class` property. Read it for current state; a declared setter writes that state in place. |
| `StreamHelpers` | property (static) | Static entry point `class` property. Read it for current state; a declared setter writes that state in place. |

## Usage Example

```csharp
// SRTHelper exposes no public members in TaleWorlds.Library.
```

## Risks and Boundaries

- Most helpers assume an active game context; they read `Campaign.Current` or the mission singleton internally.
- They are pure-looking but not pure: several helpers cache results for the current frame.
- Null arguments are usually not validated; a missing hero or party surfaces as a null-reference much later.
- The declaration in `TaleWorlds.Library/SRTHelper.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/core-extra/](../) — the other types in this bucket.
