---
title: "CaseInsensitiveComparer"
description: "CaseInsensitiveComparer — class in TaleWorlds.Localization.TextProcessor. 2 public members (0 static)."
---

<!-- v147-skeleton -->
# CaseInsensitiveComparer

**Namespace:** `TaleWorlds.Localization.TextProcessor`  
**Module:** `TaleWorlds.Localization`  
**Type:** `internal class CaseInsensitiveComparer : IEqualityComparer<string>`  
**Base:** `IEqualityComparer`  
**Source:** `TaleWorlds.Localization/TextProcessor/CaseInsensitiveComparer.cs`

## Overview

`CaseInsensitiveComparer` is an internal class in TaleWorlds.Localization.TextProcessor. The engine constructs it and exposes it through public APIs; a mod can call the public surface above it but cannot `new` it or reference the type in a signature.

`CaseInsensitiveComparer` is a rule or comparison type: it answers a yes/no or ordering question so that callers can sort, filter or gate behaviour without writing the condition inline.

It extends IEqualityComparer, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

A rule is a named decision. Keep the condition pure and cheap — it may be evaluated once per entity per frame — and keep the effect outside it.

Prefer composing rules over branching inside one: a rule that reads as a single sentence is a rule you can trust when the data changes.

Concretely, the surface breaks down like this:

- **Instance members** (2): `Equals`, `GetHashCode`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `Equals` | method | Instance entry point. Takes 2 arguments: `string x`, `string y`. Returns `bool`. |
| `GetHashCode` | method | Instance entry point. Takes 1 argument: `string x`. Returns `int`. Read path: prefer it over reaching for the backing store. |

## Usage Example

```csharp
// CaseInsensitiveComparer is internal: the engine creates it, a mod cannot.
// Use it through whatever the engine exposes, and read the members below.
//   Equals(`string x`, `string y`)
//     bool
//   GetHashCode(`string x`)
//     int
```

## Risks and Boundaries

- Rules are evaluated in hot loops; avoid allocation inside the comparison.
- The null case is usually unhandled and shows up as an exception rather than a filtered-out entry.
- A rule that captures mutable state gives order-dependent results; keep it stateless.
- The declaration in `TaleWorlds.Localization/TextProcessor/CaseInsensitiveComparer.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/localization/](../) — the other types in this bucket.
