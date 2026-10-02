---
title: "DefeatTheConspiracyQuestBehavior"
description: "DefeatTheConspiracyQuestBehavior: a public class in StoryMode.Quests.ThirdPhase, inheriting CampaignBehaviorBase; 9 exposed members (4 methods, 2 properties, 1 fields). Canonical bucket storymode. Source: StoryMode/Quests/ThirdPhase/DefeatTheConspiracyQuestBehavior.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DefeatTheConspiracyQuestBehavior

**Namespace:** `StoryMode.Quests.ThirdPhase`
**Module:** `StoryMode`
**Type:** `public class DefeatTheConspiracyQuestBehavior : CampaignBehaviorBase`
**File:** `StoryMode/Quests/ThirdPhase/DefeatTheConspiracyQuestBehavior.cs`
**Bucket:** `storymode` (rule:StoryMode)

## Overview

DefeatTheConspiracyQuestBehavior lives in the StoryMode module, source file StoryMode/Quests/ThirdPhase/DefeatTheConspiracyQuestBehavior.cs. It is a public class, implementing/inheriting CampaignBehaviorBase; the inheritance chain is DefeatTheConspiracyQuestBehavior → CampaignBehaviorBase → ICampaignBehavior. It exposes 9 public/protected members: 4 methods, 2 properties, 1 fields, 2 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefeatTheConspiracyQuestBehavior lands in canonical bucket `storymode` (matched rule `rule:StoryMode`), namespace `StoryMode.Quests.ThirdPhase`, inheritance chain DefeatTheConspiracyQuestBehavior → CampaignBehaviorBase → ICampaignBehavior. The surface is method-led (methods 4/9, properties 2/9), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from StoryMode/Quests/ThirdPhase/DefeatTheConspiracyQuestBehavior.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `IsMobilePartyCreatedForQuest` | `public bool IsMobilePartyCreatedForQuest(MobileParty mobileParty)` | method |
| `RegisterEvents` | `public override void RegisterEvents()` | method |
| `InitializeFinalPhase` | `protected void InitializeFinalPhase()` | method |
| `SyncData` | `public override void SyncData(IDataStore dataStore)` | method |
| `TroopLimitPerNewClanParty` | `public const int TroopLimitPerNewClanParty` | field |
| `SaveableTypeDefiner` | `public class DefeatTheConspiracyQuestBehaviorTypeDefiner : SaveableTypeDefiner` | property |
| `StoryModeQuestBase` | `public class DefeatTheConspiracyQuest : StoryModeQuestBase` | property |
| `SaveableTypeDefiner` | `public class DefeatTheConspiracyQuestBehaviorTypeDefiner : SaveableTypeDefiner` | nested type |
| `StoryModeQuestBase` | `public class DefeatTheConspiracyQuest : StoryModeQuestBase` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
