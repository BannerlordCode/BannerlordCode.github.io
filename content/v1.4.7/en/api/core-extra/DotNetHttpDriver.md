---
title: "DotNetHttpDriver"
description: "DotNetHttpDriver — class in TaleWorlds.Library.Http. 1 public member (0 static)."
---

<!-- v147-skeleton -->
# DotNetHttpDriver

**Namespace:** `TaleWorlds.Library.Http`  
**Module:** `TaleWorlds.Library`  
**Type:** `public class DotNetHttpDriver : IHttpDriver`  
**Base:** `IHttpDriver`  
**Source:** `TaleWorlds.Library/Http/DotNetHttpDriver.cs`

## Overview

`DotNetHttpDriver` is a named type in the TaleWorlds.Library.Http namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends IHttpDriver, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `DotNetHttpDriver`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `DotNetHttpDriver` | ctor | Instance entry point. Takes no arguments. Returns ``. |

- Constructed as `public DotNetHttpDriver()`.

## Usage Example

```csharp
var dotNetHttpDriver = new DotNetHttpDriver();
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- The declaration in `TaleWorlds.Library/Http/DotNetHttpDriver.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [IHttpDriver](../IHttpDriver/) — `TaleWorlds.Library.Http`.
- [HttpPostRequest](../HttpPostRequest/) — `TaleWorlds.Library.Http`.
- [HttpGetRequest](../HttpGetRequest/) — `TaleWorlds.Library.Http`.

Section: [api/core-extra/](../) — the other types in this bucket.
