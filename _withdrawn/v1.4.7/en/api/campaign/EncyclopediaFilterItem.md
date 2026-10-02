---
title: "EncyclopediaFilterItem"
description: "EncyclopediaFilterItem — class in TaleWorlds.CampaignSystem.Encyclopedia. 4 public members (0 static)."
---

<!-- v147-skeleton -->
# EncyclopediaFilterItem

**Namespace:** `TaleWorlds.CampaignSystem.Encyclopedia`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class EncyclopediaFilterItem`  
**Source:** `TaleWorlds.CampaignSystem/Encyclopedia/EncyclopediaFilterItem.cs`

## Overview

`EncyclopediaFilterItem` is a named type in the TaleWorlds.CampaignSystem.Encyclopedia namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `EncyclopediaFilterItem`.
- **Data and constants** (3): `Name`, `Predicate`, `IsActive`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `EncyclopediaFilterItem` | ctor | Instance entry point. Takes 2 arguments: `TextObject name`, `Predicate<object> predicate`. Returns ``. |
| `IsActive` | field | Instance entry point `bool` field — direct storage with no validation or notification. |
| `Name` | field | Instance entry point `TextObject` field — direct storage with no validation or notification. |
| `Predicate` | field | Instance entry point `Predicate<object>` field — direct storage with no validation or notification. |

- Constructed as `public EncyclopediaFilterItem(TextObject name, Predicate<object> predicate)`.

## Usage Example

```csharp
var encyclopediaFilterItem = new EncyclopediaFilterItem(name, predicate);
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- The declaration in `TaleWorlds.CampaignSystem/Encyclopedia/EncyclopediaFilterItem.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/campaign/](../) — the other types in this bucket.
