---
title: "Program"
description: "Program — class in TaleWorlds.MountAndBlade.SteamWorkshop. 5 public members (4 static)."
---

<!-- v147-skeleton -->
# Program

**Namespace:** `TaleWorlds.MountAndBlade.SteamWorkshop`  
**Module:** `TaleWorlds.MountAndBlade.SteamWorkshop`  
**Type:** `internal class Program`  
**Source:** `TaleWorlds.MountAndBlade.SteamWorkshop/Program.cs`

## Overview

`Program` is an internal class in TaleWorlds.MountAndBlade.SteamWorkshop. The engine constructs it and exposes it through public APIs; a mod can call the public surface above it but cannot `new` it or reference the type in a signature.

`Program` is a named type in the TaleWorlds.MountAndBlade.SteamWorkshop namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Static entry points** (4): `BannerlordSteamAppIdAsString`, `ItemId`, `ExitProgram`, `Log`.
- **Data and constants** (1): `BannerlordSteamAppId`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `BannerlordSteamAppIdAsString` | property (static) | Static entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `ExitProgram` | method (static) | Static entry point. Takes 1 argument: `int exitCode`. |
| `ItemId` | property (static) | Static entry point `PublishedFileId_t` property. Read it for current state; a declared setter writes that state in place. |
| `Log` | method (static) | Static entry point. Takes 1 argument: `string log`. |
| `BannerlordSteamAppId` | const | Instance entry point. Takes no arguments. Returns `int`. |

## Usage Example

```csharp
// Program is internal: the engine creates it, a mod cannot.
// Use it through whatever the engine exposes, and read the members below.
//   BannerlordSteamAppIdAsString
//     string
//   ItemId
//     PublishedFileId_t
//   ExitProgram(`int exitCode`)
//     void
//   Log(`string log`)
//     void
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- The declaration in `TaleWorlds.MountAndBlade.SteamWorkshop/Program.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [Program](../../core-extra/Program/) — `TaleWorlds.Starter.Library`.
- [ToolTask](../ToolTask/) — `TaleWorlds.MountAndBlade.SteamWorkshop`.
- [CreateItemTask](../CreateItemTask/) — `TaleWorlds.MountAndBlade.SteamWorkshop`.
- [GetItemTask](../GetItemTask/) — `TaleWorlds.MountAndBlade.SteamWorkshop`.
- [ToolDebugManager](../ToolDebugManager/) — `TaleWorlds.MountAndBlade.SteamWorkshop`.

Section: [api/mission-ext/](../) — the other types in this bucket.
