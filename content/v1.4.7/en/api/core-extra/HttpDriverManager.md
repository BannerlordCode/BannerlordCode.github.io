---
title: "HttpDriverManager"
description: "HttpDriverManager — class in TaleWorlds.Library.Http. 4 public members (4 static)."
---

<!-- v147-skeleton -->
# HttpDriverManager

**Namespace:** `TaleWorlds.Library.Http`  
**Module:** `TaleWorlds.Library`  
**Type:** `public static class HttpDriverManager`  
**Source:** `TaleWorlds.Library/Http/HttpDriverManager.cs`

## Overview

`HttpDriverManager` owns a subsystem: it holds the live set of objects of one kind, keeps them in sync with the world, and hands out references to them. Subsystems are shared — a second instance means a second, divergent copy of the truth.

## Mental Model

Read a manager as the single owner of a collection, not as a utility bag. Everything that mutates the collection goes through its methods, and everything else reads the collections it exposes.

Because the instance is shared and long-lived, do not stash per-campaign scratch data on it. Keep it on the campaign object, the party or the hero you are working on.

Concretely, the surface breaks down like this:

- **Static entry points** (4): `AddHttpDriver`, `SetDefault`, `GetHttpDriver`, `GetDefaultHttpDriver`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `AddHttpDriver` | method (static) | Static entry point. Takes 2 arguments: `string name`, `IHttpDriver driver`. Adds to the collection or relation this type owns. |
| `GetDefaultHttpDriver` | method (static) | Static entry point. Takes no arguments. Returns `IHttpDriver`. Read path: prefer it over reaching for the backing store. |
| `GetHttpDriver` | method (static) | Static entry point. Takes 1 argument: `string name`. Returns `IHttpDriver`. Read path: prefer it over reaching for the backing store. |
| `SetDefault` | method (static) | Static entry point. Takes 1 argument: `string name`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |

## Usage Example

```csharp
// Reach the one live instance through the engine; do not construct a second copy.
var httpDriverManager = HttpDriverManager.GetDefaultHttpDriver();
HttpDriverManager.AddHttpDriver(name, driver);
HttpDriverManager.SetDefault(name);
```

## Risks and Boundaries

- Never construct a manager yourself when the engine already owns one; the duplicate will drift from the live state.
- Do not mutate the collection while enumerating it — materialise a list first if a callback can add or remove entries.
- Most managers are only valid between campaign start and campaign end.
- The declaration in `TaleWorlds.Library/Http/HttpDriverManager.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [IHttpDriver](../IHttpDriver/) — `TaleWorlds.Library.Http`.
- [DotNetHttpDriver](../DotNetHttpDriver/) — `TaleWorlds.Library.Http`.

Section: [api/core-extra/](../) — the other types in this bucket.
