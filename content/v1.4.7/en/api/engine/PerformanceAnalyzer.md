---
title: "PerformanceAnalyzer"
description: "PerformanceAnalyzer — class in TaleWorlds.Engine. 4 public members (0 static)."
---

<!-- v147-skeleton -->
# PerformanceAnalyzer

**Namespace:** `TaleWorlds.Engine`  
**Module:** `TaleWorlds.Engine`  
**Type:** `public class PerformanceAnalyzer`  
**Source:** `TaleWorlds.Engine/PerformanceAnalyzer.cs`

## Overview

`PerformanceAnalyzer` is a named type in the TaleWorlds.Engine namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Instance members** (4): `Start`, `End`, `FinalizeAndWrite`, `Tick`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `End` | method | Instance entry point. Takes no arguments. |
| `FinalizeAndWrite` | method | Instance entry point. Takes 1 argument: `string filePath`. |
| `Start` | method | Instance entry point. Takes 1 argument: `string name`. |
| `Tick` | method | Instance entry point. Takes 1 argument: `float dt`. Called from the owner’s update loop — do not assume a frame boundary. |

## Usage Example

```csharp
// PerformanceAnalyzer exposes no public members in TaleWorlds.Engine.
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- The declaration in `TaleWorlds.Engine/PerformanceAnalyzer.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [Utilities](../Utilities/) — `TaleWorlds.Engine`.
- [Attributes](../../campaign/Attributes/) — `TaleWorlds.CampaignSystem.Extensions`.

Section: [api/engine/](../) — the other types in this bucket.
