---
title: "Extensions"
description: "Extensions — class in StoryMode.Extensions. 2 public members (2 static)."
---

<!-- v147-skeleton -->
# Extensions

**Namespace:** `StoryMode.Extensions`  
**Module:** `StoryMode`  
**Type:** `public static class Extensions`  
**Source:** `StoryMode/Extensions/Extensions.cs`

## Overview

`Extensions` is a helper namespace: stateless functions that answer a question or compute a value that would otherwise be duplicated across call sites. It holds no campaign state of its own.

## Mental Model

A helper is the right home for "given these inputs, what is the answer", and the wrong home for anything that has to be remembered. Call it, take the value, and let the caller own the lifetime.

Because helpers are shared by many systems, changing the meaning of a parameter is a breaking change for every caller — treat the signature as a published contract even though there is no interface.

Concretely, the surface breaks down like this:

- **Static entry points** (2): `IsTrainingField`, `TrainingField`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `IsTrainingField` | method (static) | Static entry point. Takes 1 argument: `this Settlement settlement`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `TrainingField` | method (static) | Static entry point. Takes 1 argument: `this Settlement settlement`. Returns `TrainingField`. |

## Usage Example

```csharp
// Static entry points on Extensions:
Extensions.IsTrainingField(theTarget);
Extensions.TrainingField(theTarget);
```

## Risks and Boundaries

- Most helpers assume an active game context; they read `Campaign.Current` or the mission singleton internally.
- They are pure-looking but not pure: several helpers cache results for the current frame.
- Null arguments are usually not validated; a missing hero or party surfaces as a null-reference much later.
- The declaration in `StoryMode/Extensions/Extensions.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [Extensions](../../engine/Extensions/) — `TaleWorlds.Engine.GauntletUI`.

Section: [api/storymode/](../) — the other types in this bucket.
