---
title: "IGauntletMovie"
description: "IGauntletMovie — interface in TaleWorlds.GauntletUI.Data. No public members of its own."
---

<!-- v147-skeleton -->
# IGauntletMovie

**Namespace:** `TaleWorlds.GauntletUI.Data`  
**Module:** `TaleWorlds.GauntletUI.Data`  
**Type:** `public interface IGauntletMovie`  
**Source:** `TaleWorlds.GauntletUI.Data/IGauntletMovie.cs`

## Overview

`IGauntletMovie` is an interface: the published surface of one subsystem, with no implementation of its own. The engine ships the concrete types; you consume this interface so your code does not depend on which implementation is loaded.

## Mental Model

Use an interface as the shape of a dependency, not as something to implement. Find the subsystem that hands out instances of it and take the dependency from there; the concrete type is an implementation detail that changes between versions and between game modes.

When you do implement one — a custom mission logic, a save resolver, an option provider — you are filling a slot the engine looks up by type.

Concretely, the surface breaks down like this:

- The type contributes no public members of its own; everything you use comes from the members it inherits or from the code that owns it.

## Key Members

No public members are declared on IGauntletMovie itself in `TaleWorlds.GauntletUI.Data`; consumers use it through the subsystem that owns it.
## Usage Example

```csharp
// IGauntletMovie is an interface: the engine supplies the implementation.
public class MyConsumer
{
    private readonly IGauntletMovie _service;

    public MyConsumer(IGauntletMovie service)
    {
        _service = service;
    }

    // No public methods declared on this interface.
}
```

## Risks and Boundaries

- Implementing the interface is not enough; the engine must be able to find your type (registration, discovery, or an explicit factory).
- Members added in a later patch version become part of your contract — keep the surface minimal.
- Do not cast an interface back to a concrete type unless you also handle the case where the game ships a different one.
- The declaration in `TaleWorlds.GauntletUI.Data/IGauntletMovie.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/gui/](../) — the other types in this bucket.
