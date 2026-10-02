---
title: "Persuasion"
description: "Persuasion — class in TaleWorlds.CampaignSystem.Conversation.Persuasion. 10 public members (0 static)."
---

<!-- v147-skeleton -->
# Persuasion

**Namespace:** `TaleWorlds.CampaignSystem.Conversation.Persuasion`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class Persuasion`  
**Source:** `TaleWorlds.CampaignSystem/Conversation/Persuasion/Persuasion.cs`

## Overview

`Persuasion` is a named type in the TaleWorlds.CampaignSystem.Conversation.Persuasion namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `Persuasion`.
- **Instance members** (4): `DifficultyMultiplier`, `Progress`, `CommitProgress`, `GetChosenOptions`.
- **Data and constants** (5): `SuccessValue`, `FailValue`, `CriticalSuccessValue`, `CriticalFailValue`, `GoalValue`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `CommitProgress` | method | Instance entry point. Takes 1 argument: `PersuasionOptionArgs persuasionOptionArgs`. |
| `DifficultyMultiplier` | property | Instance entry point `float` property. Read it for current state; a declared setter writes that state in place. |
| `GetChosenOptions` | method | Instance entry point. Takes no arguments. Returns `IEnumerable<Tuple<PersuasionOptionArgs, PersuasionOptionResult>>`. Read path: prefer it over reaching for the backing store. |
| `Progress` | property | Instance entry point `float` property. Read it for current state; a declared setter writes that state in place. |
| `Persuasion` | ctor | Instance entry point. Takes 7 arguments: `float goalValue`, `float successValue`, `float failValue`, `float criticalSuccessValue`, …. Returns ``. |
| `CriticalFailValue` | field | Instance entry point `float` field — direct storage with no validation or notification. |
| `CriticalSuccessValue` | field | Instance entry point `float` field — direct storage with no validation or notification. |
| `FailValue` | field | Instance entry point `float` field — direct storage with no validation or notification. |
| `GoalValue` | field | Instance entry point `float` field — direct storage with no validation or notification. |
| `SuccessValue` | field | Instance entry point `float` field — direct storage with no validation or notification. |

- Constructed as `public Persuasion(float goalValue, float successValue, float failValue, float criticalSuccessValue, float criticalFailValue, float initialProgress, PersuasionDifficulty difficulty)`.

## Usage Example

```csharp
var persuasion = new Persuasion(goalValue, successValue, failValue, criticalSuccessValue, criticalFailValue, initialProgress, difficulty);
persuasion.CommitProgress(persuasionOptionArgs);
// Read current state through persuasion.DifficultyMultiplier.
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- The declaration in `TaleWorlds.CampaignSystem/Conversation/Persuasion/Persuasion.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [PersuasionDifficulty](../PersuasionDifficulty/) — `TaleWorlds.CampaignSystem.Conversation.Persuasion`.
- [PersuasionOptionArgs](../PersuasionOptionArgs/) — `TaleWorlds.CampaignSystem.Conversation.Persuasion`.
- [PersuasionOptionResult](../PersuasionOptionResult/) — `TaleWorlds.CampaignSystem.Conversation.Persuasion`.
- [DefaultPerks](../../campaign/DefaultPerks/) — `TaleWorlds.CampaignSystem.CharacterDevelopment`.
- [InformationManager](../../core-extra/InformationManager/) — `TaleWorlds.Library`.

Section: [api/campaign-ext/](../) — the other types in this bucket.
