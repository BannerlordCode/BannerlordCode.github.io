---
title: "CoroutineDelegate"
description: "CoroutineDelegate — delegate type in TaleWorlds.Network. No public members of its own."
---

<!-- v147-skeleton -->
# CoroutineDelegate

**Namespace:** `TaleWorlds.Network`  
**Module:** `TaleWorlds.Network`  
**Type:** `public delegate IEnumerator<CoroutineState> CoroutineDelegate();`  
**Source:** `TaleWorlds.Network/CoroutineDelegate.cs`

## Overview

`CoroutineDelegate` is a delegate type: a named method signature. It lets the engine or a subsystem call back into your code without knowing your class, which is how extension points are handed out.

## Mental Model

A delegate here is an inversion-of-control point. You supply the method; the owner of the delegate decides when it runs, on which thread, and how often.

Write the callback so that it is safe to run twice and safe to skip, because a delegate contract rarely says which.

Concretely, the surface breaks down like this:

- The type contributes no public members of its own; everything you use comes from the members it inherits or from the code that owns it.

## Key Members

No public members are declared on CoroutineDelegate itself in `TaleWorlds.Network`; consumers use it through the subsystem that owns it.
## Usage Example

```csharp
// Signature, taken from the source:
IEnumerator<CoroutineState> CoroutineDelegate()

CoroutineDelegate handler = sender => { /* runs on the owner's thread */ };
```

## Risks and Boundaries

- There is no call-site context, so the callback must fetch anything it needs.
- Throwing inside the callback surfaces in the engine call stack, not yours.
- A delegate held past the lifetime of the method’s target is a use-after-free in spirit.
- The declaration in `TaleWorlds.Network/CoroutineDelegate.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/network/](../) — the other types in this bucket.
