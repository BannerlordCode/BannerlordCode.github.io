---
title: "PersuasionAttempt"
description: "PersuasionAttempt — class in TaleWorlds.CampaignSystem.Conversation.Persuasion. 3 public members (0 static)."
---

<!-- v147-skeleton -->
# PersuasionAttempt

**Namespace:** `TaleWorlds.CampaignSystem.Conversation.Persuasion`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class PersuasionAttempt`  
**Source:** `TaleWorlds.CampaignSystem/Conversation/Persuasion/PersuasionAttempt.cs`

## Overview

`PersuasionAttempt` is a named type in the TaleWorlds.CampaignSystem.Conversation.Persuasion namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `PersuasionAttempt`.
- **Instance members** (2): `IsSuccesful`, `Matches`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `IsSuccesful` | method | Instance entry point. Takes no arguments. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `Matches` | method | Instance entry point. Takes 2 arguments: `Hero targetHero`, `int reservationType`. Returns `bool`. |
| `PersuasionAttempt` | ctor | Instance entry point. Takes 5 arguments: `Hero persuadedHero`, `CampaignTime gameTime`, `PersuasionOptionArgs args`, `PersuasionOptionResult result`, …. Returns ``. |

- Constructed as `public PersuasionAttempt(Hero persuadedHero, CampaignTime gameTime, PersuasionOptionArgs args, PersuasionOptionResult result, int reservationType)`.

## Usage Example

```csharp
var persuasionAttempt = new PersuasionAttempt(persuadedHero, gameTime, args, result, reservationType);
persuasionAttempt.IsSuccesful();
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- The declaration in `TaleWorlds.CampaignSystem/Conversation/Persuasion/PersuasionAttempt.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [Persuasion](../Persuasion/) — `TaleWorlds.CampaignSystem.Conversation.Persuasion`.
- [PersuasionOptionArgs](../PersuasionOptionArgs/) — `TaleWorlds.CampaignSystem.Conversation.Persuasion`.
- [PersuasionOptionResult](../PersuasionOptionResult/) — `TaleWorlds.CampaignSystem.Conversation.Persuasion`.

Section: [api/campaign-ext/](../) — the other types in this bucket.
