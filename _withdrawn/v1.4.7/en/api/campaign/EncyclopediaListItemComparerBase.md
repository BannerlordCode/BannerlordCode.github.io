---
title: "EncyclopediaListItemComparerBase"
description: "EncyclopediaListItemComparerBase — class in TaleWorlds.CampaignSystem.Encyclopedia. 9 public members (0 static)."
---

<!-- v147-skeleton -->
# EncyclopediaListItemComparerBase

**Namespace:** `TaleWorlds.CampaignSystem.Encyclopedia`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public abstract class EncyclopediaListItemComparerBase : IComparer<EncyclopediaListItem>`  
**Base:** `IComparer`  
**Source:** `TaleWorlds.CampaignSystem/Encyclopedia/EncyclopediaListItemComparerBase.cs`

## Overview

`EncyclopediaListItemComparerBase` is a named type in the TaleWorlds.CampaignSystem.Encyclopedia namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends IComparer, so the members it does not redeclare are inherited from there. 3 of its own members are properties, which is where most reads and writes land.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Instance members** (9): `IsAscending`, `SetSortOrder`, `SwitchSortOrder`, `SetDefaultSortOrder`, `Compare`, `GetComparedValueText`, ….
- **Extension points** (2): `Compare`, `GetComparedValueText`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `Compare` | method (abstract) | Abstract — a subclass must supply it. Takes 2 arguments: `EncyclopediaListItem x`, `EncyclopediaListItem y`. Returns `int`. |
| `GetComparedValueText` | method (abstract) | Abstract — a subclass must supply it. Takes 1 argument: `EncyclopediaListItem item`. Returns `string`. Read path: prefer it over reaching for the backing store. |
| `IsAscending` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `SetDefaultSortOrder` | method | Instance entry point. Takes no arguments. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SetSortOrder` | method | Instance entry point. Takes 1 argument: `bool isAscending`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SwitchSortOrder` | method | Instance entry point. Takes no arguments. |
| `_emptyValue` | property | Protected — for subclasses only `TextObject` property. Read it for current state; a declared setter writes that state in place. |
| `_missingValue` | property | Protected — for subclasses only `TextObject` property. Read it for current state; a declared setter writes that state in place. |
| `ResolveEquality` | method | Protected — for subclasses only. Takes 2 arguments: `EncyclopediaListItem x`, `EncyclopediaListItem y`. Returns `int`. Read path: prefer it over reaching for the backing store. |

## Usage Example

```csharp
// EncyclopediaListItemComparerBase is read through its properties:
//   IsAscending : bool
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- 2 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.CampaignSystem/Encyclopedia/EncyclopediaListItemComparerBase.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [EncyclopediaListItem](../EncyclopediaListItem/) — `TaleWorlds.CampaignSystem.Encyclopedia`.

Section: [api/campaign/](../) — the other types in this bucket.
