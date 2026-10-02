---
title: "ISaveContext"
description: "ISaveContext — interface in TaleWorlds.SaveSystem.Save. No public members of its own."
---

<!-- v147-skeleton -->
# ISaveContext

**Namespace:** `TaleWorlds.SaveSystem.Save`  
**Module:** `TaleWorlds.SaveSystem`  
**Type:** `internal interface ISaveContext`  
**Source:** `TaleWorlds.SaveSystem/Save/ISaveContext.cs`

## Overview

`ISaveContext` is an internal interface in TaleWorlds.SaveSystem.Save. The engine constructs it and exposes it through public APIs; a mod can call the public surface above it but cannot `new` it or reference the type in a signature.

`ISaveContext` is an interface: the published surface of one subsystem, with no implementation of its own. The engine ships the concrete types; you consume this interface so your code does not depend on which implementation is loaded.

## Mental Model

Use an interface as the shape of a dependency, not as something to implement. Find the subsystem that hands out instances of it and take the dependency from there; the concrete type is an implementation detail that changes between versions and between game modes.

When you do implement one — a custom mission logic, a save resolver, an option provider — you are filling a slot the engine looks up by type.

Concretely, the surface breaks down like this:

- The type contributes no public members of its own; everything you use comes from the members it inherits or from the code that owns it.

## Key Members

No public members are declared on ISaveContext itself in `TaleWorlds.SaveSystem.Save`; consumers use it through the subsystem that owns it.
## Usage Example

```csharp
// ISaveContext is internal: the engine creates it, a mod cannot.
// Use it through whatever the engine exposes, and read the members below.
// It exposes no public members.
```

## Risks and Boundaries

- Implementing the interface is not enough; the engine must be able to find your type (registration, discovery, or an explicit factory).
- Members added in a later patch version become part of your contract — keep the surface minimal.
- Do not cast an interface back to a concrete type unless you also handle the case where the game ships a different one.
- The declaration in `TaleWorlds.SaveSystem/Save/ISaveContext.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/save-system/](../) — the other types in this bucket.
