---
title: "PerkAssemblyCollection"
description: "PerkAssemblyCollection — class in TaleWorlds.MountAndBlade.Network.Gameplay.Perks. 1 public member (1 static)."
---

<!-- v147-skeleton -->
# PerkAssemblyCollection

**Namespace:** `TaleWorlds.MountAndBlade.Network.Gameplay.Perks`  
**Module:** `TaleWorlds.MountAndBlade`  
**Type:** `internal static class PerkAssemblyCollection`  
**Source:** `TaleWorlds.MountAndBlade/Network/Gameplay/Perks/PerkAssemblyCollection.cs`

## Overview

`PerkAssemblyCollection` is an internal class in TaleWorlds.MountAndBlade.Network.Gameplay.Perks. The engine constructs it and exposes it through public APIs; a mod can call the public surface above it but cannot `new` it or reference the type in a signature.

`PerkAssemblyCollection` is a named type in the TaleWorlds.MountAndBlade.Network.Gameplay.Perks namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Static entry points** (1): `GetPerkAssemblyTypes`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `GetPerkAssemblyTypes` | method (static) | Static entry point. Takes no arguments. Returns `List<Type>`. Read path: prefer it over reaching for the backing store. |

## Usage Example

```csharp
// PerkAssemblyCollection is internal: the engine creates it, a mod cannot.
// Use it through whatever the engine exposes, and read the members below.
//   GetPerkAssemblyTypes()
//     List<Type>
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- The declaration in `TaleWorlds.MountAndBlade/Network/Gameplay/Perks/PerkAssemblyCollection.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [MPPerkObject](../MPPerkObject/) — `TaleWorlds.MountAndBlade`.

Section: [api/mission-ext/](../) — the other types in this bucket.
