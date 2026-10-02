---
title: "ArithmeticExpression"
description: "ArithmeticExpression — class in TaleWorlds.Localization.Expressions. 1 public member (0 static)."
---

<!-- v147-skeleton -->
# ArithmeticExpression

**Namespace:** `TaleWorlds.Localization.Expressions`  
**Module:** `TaleWorlds.Localization`  
**Type:** `internal class ArithmeticExpression : NumeralExpression`  
**Base:** `NumeralExpression`  
**Source:** `TaleWorlds.Localization/Expressions/ArithmeticExpression.cs`

## Overview

`ArithmeticExpression` is an internal class in TaleWorlds.Localization.Expressions. The engine constructs it and exposes it through public APIs; a mod can call the public surface above it but cannot `new` it or reference the type in a signature.

`ArithmeticExpression` is a named type in the TaleWorlds.Localization.Expressions namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends NumeralExpression, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `ArithmeticExpression`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `ArithmeticExpression` | ctor | Instance entry point. Takes 3 arguments: `ArithmeticOperation op`, `TextExpression exp1`, `TextExpression exp2`. Returns ``. |

- Constructed as `public ArithmeticExpression(ArithmeticOperation op, TextExpression exp1, TextExpression exp2)`.

## Usage Example

```csharp
// ArithmeticExpression is internal: the engine creates it, a mod cannot.
// Use it through whatever the engine exposes, and read the members below.
// It exposes no public members.
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- The declaration in `TaleWorlds.Localization/Expressions/ArithmeticExpression.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [ArithmeticOperation](../ArithmeticOperation/) — `TaleWorlds.Localization.Expressions`.

Section: [api/localization/](../) — the other types in this bucket.
