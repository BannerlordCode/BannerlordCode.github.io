---
title: "PersuasionOptionResult"
description: "PersuasionOptionResult — enum in TaleWorlds.CampaignSystem.Conversation.Persuasion. No public members of its own."
---

<!-- v147-skeleton -->
# PersuasionOptionResult

**Namespace:** `TaleWorlds.CampaignSystem.Conversation.Persuasion`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public enum PersuasionOptionResult`  
**Source:** `TaleWorlds.CampaignSystem/Conversation/Persuasion/PersuasionOptionResult.cs`

## Overview

`PersuasionOptionResult` is an enum: a closed set of named integer values. The engine persists and switches on these numbers, so the numeric values are part of the save format and of the wire behaviour, not just an implementation detail.

## Mental Model

An enum is a vocabulary shared across systems. Read it as the set of states the engine can be in for one narrow concept, and never invent new values — extending a persisted enum means assigning a new number, not reusing an old one.

Compare with the symbol, cast to integer only when talking to the engine, and always handle the Default/unknown member that a save from another version may contain.

Concretely, the surface breaks down like this:

- The type contributes no public members of its own; everything you use comes from the members it inherits or from the code that owns it.

## Key Members

No public members are declared on PersuasionOptionResult itself in `TaleWorlds.CampaignSystem.Conversation.Persuasion`; consumers use it through the subsystem that owns it.
## Usage Example

```csharp
// PersuasionOptionResult values used in TaleWorlds.CampaignSystem.Conversation.Persuasion.
// The members of this enum are declared in PersuasionOptionResult.cs.

var raw = (int)state;   // the integer is what the engine persists
```

## Risks and Boundaries

- The numeric values are persisted; reordering them corrupts existing saves.
- An unmatched value from a modded or newer build is legal — switch statements need a default branch.
- Flags-style enums combine with bitwise operators; a plain `==` comparison is wrong for those.
- The declaration in `TaleWorlds.CampaignSystem/Conversation/Persuasion/PersuasionOptionResult.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [Persuasion](../Persuasion/) — `TaleWorlds.CampaignSystem.Conversation.Persuasion`.

Section: [api/campaign-ext/](../) — the other types in this bucket.
