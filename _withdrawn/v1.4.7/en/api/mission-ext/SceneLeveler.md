---
title: "SceneLeveler"
description: "SceneLeveler — class in TaleWorlds.MountAndBlade.Source.Objects. 10 public members (0 static)."
---

<!-- v147-skeleton -->
# SceneLeveler

**Namespace:** `TaleWorlds.MountAndBlade.Source.Objects`  
**Module:** `TaleWorlds.MountAndBlade`  
**Type:** `public class SceneLeveler : ScriptComponentBehavior`  
**Base:** `ScriptComponentBehavior`  
**Source:** `TaleWorlds.MountAndBlade/Source/Objects/SceneLeveler.cs`

## Overview

`SceneLeveler` is a named type in the TaleWorlds.MountAndBlade.Source.Objects namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends ScriptComponentBehavior, so the members it does not redeclare are inherited from there. 2 of its own members are properties, which is where most reads and writes land.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Instance members** (3): `OnEditorVariableChanged`, `SourceSelectionSetName`, `TargetSelectionSetName`.
- **Data and constants** (7): `CreateLevel1`, `CreateLevel2`, `CreateLevel3`, `DeleteLevel1`, `DeleteLevel2`, `DeleteLevel3`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `SourceSelectionSetName` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `TargetSelectionSetName` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `OnEditorVariableChanged` | method | Protected — for subclasses only. Takes 1 argument: `string variableName`. Returns `internal override void`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `CreateLevel1` | field | Instance entry point `SimpleButton` field — direct storage with no validation or notification. |
| `CreateLevel2` | field | Instance entry point `SimpleButton` field — direct storage with no validation or notification. |
| `CreateLevel3` | field | Instance entry point `SimpleButton` field — direct storage with no validation or notification. |
| `DeleteLevel1` | field | Instance entry point `SimpleButton` field — direct storage with no validation or notification. |
| `DeleteLevel2` | field | Instance entry point `SimpleButton` field — direct storage with no validation or notification. |
| `DeleteLevel3` | field | Instance entry point `SimpleButton` field — direct storage with no validation or notification. |
| `SelectEntitiesWithoutLevel` | field | Instance entry point `SimpleButton` field — direct storage with no validation or notification. |

## Usage Example

```csharp
// SceneLeveler is read through its properties:
//   SourceSelectionSetName : string
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- The declaration in `TaleWorlds.MountAndBlade/Source/Objects/SceneLeveler.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [Utilities](../../engine/Utilities/) — `TaleWorlds.Engine`.

Section: [api/mission-ext/](../) — the other types in this bucket.
