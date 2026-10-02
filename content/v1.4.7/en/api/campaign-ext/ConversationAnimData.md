---
title: "ConversationAnimData"
description: "ConversationAnimData — class in TaleWorlds.CampaignSystem.Conversation. 1 public member (0 static)."
---

<!-- v147-skeleton -->
# ConversationAnimData

**Namespace:** `TaleWorlds.CampaignSystem.Conversation`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class ConversationAnimData`  
**Source:** `TaleWorlds.CampaignSystem/Conversation/ConversationAnimData.cs`

## Overview

`ConversationAnimData` is a data type: a record of values with little or no behaviour. It describes a thing the game measures — a stat, a spawn point, an option, a save header — and is read far more often than it is changed.

## Mental Model

Treat a model as a value object you fill in and then hand around. Its job is to give one concept a single, named shape so that producers and consumers agree on the fields.

Because models are copied and passed, mutating one after handing it over is a classic source of "the UI did not update" bugs: either change it in place before the handoff, or rebuild it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `ConversationAnimData`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `ConversationAnimData` | ctor | Instance entry point. Takes no arguments. Returns ``. |

- Constructed as `public ConversationAnimData()`.

## Usage Example

```csharp
// ConversationAnimData declares no public members.
```

## Risks and Boundaries

- These types are often serialized directly; renaming or reordering fields breaks existing saves and save migrations.
- A default-constructed instance is not a valid value — check the required fields before use.
- Collection properties are usually null until initialised; a null check is cheaper than a null-reference crash mid-mission.
- The declaration in `TaleWorlds.CampaignSystem/Conversation/ConversationAnimData.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/campaign-ext/](../) — the other types in this bucket.
