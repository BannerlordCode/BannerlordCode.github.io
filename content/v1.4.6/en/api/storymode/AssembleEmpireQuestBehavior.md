---
title: "AssembleEmpireQuestBehavior"
description: "AssembleEmpireQuestBehavior: a public class in StoryMode, inheriting CampaignBehaviorBase; 6 exposed members (2 methods, 2 properties, 0 fields). Source: StoryMode/Quests/SecondPhase/AssembleEmpireQuestBehavior.cs."
---
# AssembleEmpireQuestBehavior

**Namespace:** `StoryMode.Quests.SecondPhase`
**Module:** `StoryMode`
**Type:** `public class AssembleEmpireQuestBehavior : CampaignBehaviorBase`
**File:** `StoryMode/Quests/SecondPhase/AssembleEmpireQuestBehavior.cs`

## Overview

AssembleEmpireQuestBehavior lives in the StoryMode module, source file StoryMode/Quests/SecondPhase/AssembleEmpireQuestBehavior.cs. It is a public class, implementing/inheriting CampaignBehaviorBase; the inheritance chain is AssembleEmpireQuestBehavior → CampaignBehaviorBase. It exposes 6 public/protected members: 2 methods, 2 properties, 2 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: AssembleEmpireQuestBehavior is a top-level type in StoryMode, namespace differing from (StoryMode.Quests.SecondPhase) the module directory; inheritance chain AssembleEmpireQuestBehavior → CampaignBehaviorBase. The surface is method-led (methods 2/6, properties 2/6), so it mostly exposes operations. CampaignBehaviorBase on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from StoryMode/Quests/SecondPhase/AssembleEmpireQuestBehavior.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `RegisterEvents` | `public override void RegisterEvents()` | method |
| `SyncData` | `public override void SyncData(IDataStore dataStore)` | method |
| `SaveableTypeDefiner` | `public class AssembleEmpireQuestBehaviorTypeDefiner : SaveableTypeDefiner` | property |
| `StoryModeQuestBase` | `public class AssembleEmpireQuest : StoryModeQuestBase` | property |
| `SaveableTypeDefiner` | `public class AssembleEmpireQuestBehaviorTypeDefiner : SaveableTypeDefiner` | nested type |
| `StoryModeQuestBase` | `public class AssembleEmpireQuest : StoryModeQuestBase` | nested type |

## See Also

- [↑ storymode module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ConspiracyProgressQuest](../ConspiracyProgressQuest)
- [same namespace ConspiracyQuestBase](../ConspiracyQuestBase)
- [same namespace WeakenEmpireQuestBehavior](../WeakenEmpireQuestBehavior)
