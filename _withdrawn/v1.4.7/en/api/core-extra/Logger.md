---
title: "Logger"
description: "Logger — class in TaleWorlds.Library. 7 public members (2 static)."
---

<!-- v147-skeleton -->
# Logger

**Namespace:** `TaleWorlds.Library`  
**Module:** `TaleWorlds.Library`  
**Type:** `public class Logger`  
**Source:** `TaleWorlds.Library/Logger.cs`

## Overview

`Logger` is a named type in the TaleWorlds.Library namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (2): `Logger`, `Logger`.
- **Static entry points** (2): `FinishAndCloseAll`, `LogsFolder`.
- **Instance members** (3): `LogOnlyErrors`, `Print`, `Print`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `FinishAndCloseAll` | method (static) | Static entry point. Takes no arguments. |
| `LogsFolder` | property (static) | Static entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `LogOnlyErrors` | property | Instance entry point `bool` property. Read it for current state; a declared setter writes that state in place. |
| `Print` | method | Instance entry point. Takes 2 arguments: `string log`, `HTMLDebugCategory debugInfo`. |
| `Print` | method | Instance entry point. Takes 3 arguments: `string log`, `HTMLDebugCategory debugInfo`, `bool printOnGlobal`. |
| `Logger` | ctor | Instance entry point. Takes 1 argument: `string name`. Returns ``. |
| `Logger` | ctor | Instance entry point. Takes 7 arguments: `string name`, `bool writeErrorsToDifferentFile`, `bool logOnlyErrors`, `bool doNotUseProcessId`, …. Returns ``. |

- Constructed as `public Logger(string name)`.
- Constructed as `public Logger(string name, bool writeErrorsToDifferentFile, bool logOnlyErrors, bool doNotUseProcessId, int numFiles = 1, int totalFileSize = -1, bool overwrite = false)`.

## Usage Example

```csharp
// Static entry points on Logger:
Logger.FinishAndCloseAll();
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- The declaration in `TaleWorlds.Library/Logger.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [Error](../Error/) — `TaleWorlds.LinQuick`.

Section: [api/core-extra/](../) — the other types in this bucket.
