---
title: "Persuasion"
description: "Persuasion: a public class in TaleWorlds.CampaignSystem.Conversation.Persuasion; 5 exposed members (2 methods, 2 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/Conversation/Persuasion/Persuasion.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# Persuasion

**Namespace:** `TaleWorlds.CampaignSystem.Conversation.Persuasion`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class Persuasion`
**File:** `TaleWorlds.CampaignSystem/Conversation/Persuasion/Persuasion.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.Conversation)

## Overview

Persuasion lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/Conversation/Persuasion/Persuasion.cs. It is a public class; the inheritance chain is Persuasion. It exposes 5 public/protected members: 2 methods, 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: Persuasion lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.Conversation`), namespace `TaleWorlds.CampaignSystem.Conversation.Persuasion`, inheritance chain Persuasion. The surface is method-led (methods 2/5, properties 2/5), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/Conversation/Persuasion/Persuasion.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `DifficultyMultiplier` | `public float DifficultyMultiplier` | property |
| `Progress` | `public float Progress` | property |
| `Persuasion` | `public Persuasion(float goalValue, float successValue, float failValue, float criticalSuccessValue, float criticalFailValue, float initialProgress, PersuasionDifficulty difficulty)` | constructor |
| `CommitProgress` | `public void CommitProgress(PersuasionOptionArgs persuasionOptionArgs)` | method |
| `PersuasionOptionResult>>GetChosenOptions` | `public IEnumerable<Tuple<PersuasionOptionArgs, PersuasionOptionResult>>GetChosenOptions()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace PersuasionArgumentStrength](../PersuasionArgumentStrength/)
- [same namespace PersuasionAttempt](../PersuasionAttempt/)
- [same namespace PersuasionDifficulty](../PersuasionDifficulty/)
- [same namespace PersuasionOptionArgs](../PersuasionOptionArgs/)
