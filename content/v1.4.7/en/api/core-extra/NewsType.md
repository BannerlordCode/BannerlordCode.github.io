---
title: "NewsType"
description: "NewsType — struct in TaleWorlds.Library.NewsManager. 1 public member (0 static)."
---

<!-- v147-skeleton -->
# NewsType

**Namespace:** `TaleWorlds.Library.NewsManager`  
**Module:** `TaleWorlds.Library`  
**Type:** `public struct NewsType`  
**Source:** `TaleWorlds.Library/NewsManager/NewsType.cs`

## Overview

`NewsType` is a data type: a record of values with little or no behaviour. It describes a thing the game measures — a stat, a spawn point, an option, a save header — and is read far more often than it is changed.

## Mental Model

Treat a model as a value object you fill in and then hand around. Its job is to give one concept a single, named shape so that producers and consumers agree on the fields.

Because models are copied and passed, mutating one after handing it over is a classic source of "the UI did not update" bugs: either change it in place before the handoff, or rebuild it.

Concretely, the surface breaks down like this:

- **Instance members** (1): `Index`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `Index` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |

## Usage Example

```csharp
var data = new NewsType
{
    Index = 0,
};
```

## Risks and Boundaries

- These types are often serialized directly; renaming or reordering fields breaks existing saves and save migrations.
- A default-constructed instance is not a valid value — check the required fields before use.
- Collection properties are usually null until initialised; a null check is cheaper than a null-reference crash mid-mission.
- The declaration in `TaleWorlds.Library/NewsManager/NewsType.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [NewsManager](../NewsManager/) — `TaleWorlds.Library.NewsManager`.
- [NewsItem](../NewsItem/) — `TaleWorlds.Library.NewsManager`.

Section: [api/core-extra/](../) — the other types in this bucket.
