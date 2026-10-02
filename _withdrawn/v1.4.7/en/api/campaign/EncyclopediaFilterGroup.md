---
title: "EncyclopediaFilterGroup"
description: "EncyclopediaFilterGroup — class in TaleWorlds.CampaignSystem.Encyclopedia. 4 public members (0 static)."
---

<!-- v147-skeleton -->
# EncyclopediaFilterGroup

**Namespace:** `TaleWorlds.CampaignSystem.Encyclopedia`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class EncyclopediaFilterGroup : ViewModel`  
**Base:** `ViewModel`  
**Source:** `TaleWorlds.CampaignSystem/Encyclopedia/EncyclopediaFilterGroup.cs`

## Overview

`EncyclopediaFilterGroup` is a named type in the TaleWorlds.CampaignSystem.Encyclopedia namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends ViewModel, so the members it does not redeclare are inherited from there. 1 of its own members are properties, which is where most reads and writes land.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `EncyclopediaFilterGroup`.
- **Instance members** (1): `Predicate`.
- **Data and constants** (2): `Filters`, `Name`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `Predicate` | property | Instance entry point `Predicate<object>` property. Read it for current state; a declared setter writes that state in place. |
| `EncyclopediaFilterGroup` | ctor | Instance entry point. Takes 2 arguments: `List<EncyclopediaFilterItem> filters`, `TextObject name`. Returns ``. |
| `Filters` | field | Instance entry point `List<EncyclopediaFilterItem>` field — direct storage with no validation or notification. |
| `Name` | field | Instance entry point `TextObject` field — direct storage with no validation or notification. |

- Constructed as `public EncyclopediaFilterGroup(List<EncyclopediaFilterItem> filters, TextObject name)`.

## Usage Example

```csharp
var encyclopediaFilterGroup = new EncyclopediaFilterGroup(filters, name);
// Read current state through encyclopediaFilterGroup.Predicate.
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- The declaration in `TaleWorlds.CampaignSystem/Encyclopedia/EncyclopediaFilterGroup.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [EncyclopediaFilterItem](../EncyclopediaFilterItem/) — `TaleWorlds.CampaignSystem.Encyclopedia`.

Section: [api/campaign/](../) — the other types in this bucket.
