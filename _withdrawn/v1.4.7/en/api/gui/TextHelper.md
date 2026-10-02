---
title: "TextHelper"
description: "TextHelper — class in TaleWorlds.TwoDimension.BitmapFont. No public members of its own."
---

<!-- v147-skeleton -->
# TextHelper

**Namespace:** `TaleWorlds.TwoDimension.BitmapFont`  
**Module:** `TaleWorlds.TwoDimension`  
**Type:** `internal static class TextHelper`  
**Source:** `TaleWorlds.TwoDimension/BitmapFont/TextHelper.cs`

## Overview

`TextHelper` is an internal class in TaleWorlds.TwoDimension.BitmapFont. The engine constructs it and exposes it through public APIs; a mod can call the public surface above it but cannot `new` it or reference the type in a signature.

`TextHelper` is a helper namespace: stateless functions that answer a question or compute a value that would otherwise be duplicated across call sites. It holds no campaign state of its own.

## Mental Model

A helper is the right home for "given these inputs, what is the answer", and the wrong home for anything that has to be remembered. Call it, take the value, and let the caller own the lifetime.

Because helpers are shared by many systems, changing the meaning of a parameter is a breaking change for every caller — treat the signature as a published contract even though there is no interface.

Concretely, the surface breaks down like this:

- The type contributes no public members of its own; everything you use comes from the members it inherits or from the code that owns it.

## Key Members

No public members are declared on TextHelper itself in `TaleWorlds.TwoDimension.BitmapFont`; consumers use it through the subsystem that owns it.
## Usage Example

```csharp
// TextHelper is internal: the engine creates it, a mod cannot.
// Use it through whatever the engine exposes, and read the members below.
// It exposes no public members.
```

## Risks and Boundaries

- Most helpers assume an active game context; they read `Campaign.Current` or the mission singleton internally.
- They are pure-looking but not pure: several helpers cache results for the current frame.
- Null arguments are usually not validated; a missing hero or party surfaces as a null-reference much later.
- The declaration in `TaleWorlds.TwoDimension/BitmapFont/TextHelper.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/gui/](../) — the other types in this bucket.
