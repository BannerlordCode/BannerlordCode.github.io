---
title: "RescueFamilyQuestBehavior"
description: "RescueFamilyQuestBehavior: a public class in StoryMode.Quests.PlayerClanQuests, inheriting CampaignBehaviorBase; 5 exposed members (2 methods, 1 properties, 0 fields). Canonical bucket storymode. Source: StoryMode/Quests/PlayerClanQuests/RescueFamilyQuestBehavior.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# RescueFamilyQuestBehavior

**Namespace:** `StoryMode.Quests.PlayerClanQuests`
**Module:** `StoryMode`
**Type:** `public class RescueFamilyQuestBehavior : CampaignBehaviorBase`
**File:** `StoryMode/Quests/PlayerClanQuests/RescueFamilyQuestBehavior.cs`
**Bucket:** `storymode` (rule:StoryMode)

## Overview

RescueFamilyQuestBehavior lives in the StoryMode module, source file StoryMode/Quests/PlayerClanQuests/RescueFamilyQuestBehavior.cs. It is a public class, implementing/inheriting CampaignBehaviorBase; the inheritance chain is RescueFamilyQuestBehavior → CampaignBehaviorBase → ICampaignBehavior. It exposes 5 public/protected members: 2 methods, 1 properties, 2 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: RescueFamilyQuestBehavior lands in canonical bucket `storymode` (matched rule `rule:StoryMode`), namespace `StoryMode.Quests.PlayerClanQuests`, inheritance chain RescueFamilyQuestBehavior → CampaignBehaviorBase → ICampaignBehavior. The surface is method-led (methods 2/5, properties 1/5), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from StoryMode/Quests/PlayerClanQuests/RescueFamilyQuestBehavior.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `RegisterEvents` | `public override void RegisterEvents()` | method |
| `SyncData` | `public override void SyncData(IDataStore dataStore)` | method |
| `StoryModeQuestBase` | `public class RescueFamilyQuest : StoryModeQuestBase` | property |
| `StoryModeQuestBase` | `public class RescueFamilyQuest : StoryModeQuestBase` | nested type |
| `SaveableTypeDefiner` | `public class RebuildPlayerClanQuestBehaviorTypeDefiner : SaveableTypeDefiner` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace RebuildPlayerClanQuest](../RebuildPlayerClanQuest/)
