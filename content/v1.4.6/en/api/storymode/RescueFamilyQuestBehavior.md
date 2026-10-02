---
title: "RescueFamilyQuestBehavior"
description: "RescueFamilyQuestBehavior: a public class in StoryMode, inheriting CampaignBehaviorBase; 5 exposed members (2 methods, 1 properties, 0 fields). Source: StoryMode/Quests/PlayerClanQuests/RescueFamilyQuestBehavior.cs."
---
# RescueFamilyQuestBehavior

**Namespace:** `StoryMode.Quests.PlayerClanQuests`
**Module:** `StoryMode`
**Type:** `public class RescueFamilyQuestBehavior : CampaignBehaviorBase`
**File:** `StoryMode/Quests/PlayerClanQuests/RescueFamilyQuestBehavior.cs`

## Overview

RescueFamilyQuestBehavior lives in the StoryMode module, source file StoryMode/Quests/PlayerClanQuests/RescueFamilyQuestBehavior.cs. It is a public class, implementing/inheriting CampaignBehaviorBase; the inheritance chain is RescueFamilyQuestBehavior → CampaignBehaviorBase. It exposes 5 public/protected members: 2 methods, 1 properties, 2 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: RescueFamilyQuestBehavior is a top-level type in StoryMode, namespace differing from (StoryMode.Quests.PlayerClanQuests) the module directory; inheritance chain RescueFamilyQuestBehavior → CampaignBehaviorBase. The surface is method-led (methods 2/5, properties 1/5), so it mostly exposes operations. CampaignBehaviorBase on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from StoryMode/Quests/PlayerClanQuests/RescueFamilyQuestBehavior.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `RegisterEvents` | `public override void RegisterEvents()` | method |
| `SyncData` | `public override void SyncData(IDataStore dataStore)` | method |
| `StoryModeQuestBase` | `public class RescueFamilyQuest : StoryModeQuestBase` | property |
| `StoryModeQuestBase` | `public class RescueFamilyQuest : StoryModeQuestBase` | nested type |
| `SaveableTypeDefiner` | `public class RebuildPlayerClanQuestBehaviorTypeDefiner : SaveableTypeDefiner` | nested type |

## See Also

- [↑ storymode module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace RebuildPlayerClanQuest](../RebuildPlayerClanQuest)
