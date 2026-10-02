---
title: "OptionGroup"
description: "OptionGroup — class in TaleWorlds.MountAndBlade.Options. 3 public members (0 static)."
---

<!-- v147-skeleton -->
# OptionGroup

**Namespace:** `TaleWorlds.MountAndBlade.Options`  
**Module:** `TaleWorlds.MountAndBlade`  
**Type:** `public class OptionGroup`  
**Source:** `TaleWorlds.MountAndBlade/Options/OptionGroup.cs`

## Overview

`OptionGroup` is a named type in the TaleWorlds.MountAndBlade.Options namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `OptionGroup`.
- **Data and constants** (2): `GroupName`, `Options`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `OptionGroup` | ctor | Instance entry point. Takes 2 arguments: `TextObject groupName`, `IEnumerable<IOptionData> options`. Returns ``. |
| `GroupName` | field | Instance entry point `TextObject` field — direct storage with no validation or notification. |
| `Options` | field | Instance entry point `IEnumerable<IOptionData>` field — direct storage with no validation or notification. |

- Constructed as `public OptionGroup(TextObject groupName, IEnumerable<IOptionData> options)`.

## Usage Example

```csharp
var optionGroup = new OptionGroup(groupName, options);
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- The declaration in `TaleWorlds.MountAndBlade/Options/OptionGroup.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [IOptionData](../../engine/IOptionData/) — `TaleWorlds.Engine.Options`.

Section: [api/mission-ext/](../) — the other types in this bucket.
