---
title: "TutorialPhaseCampaignBehavior"
description: "TutorialPhaseCampaignBehavior: a public class in StoryMode, inheriting CampaignBehaviorBase; 3 exposed members (3 methods, 0 properties, 0 fields). Source: StoryMode/GameComponents/CampaignBehaviors/TutorialPhaseCampaignBehavior.cs."
---
# TutorialPhaseCampaignBehavior

**Namespace:** `StoryMode.GameComponents.CampaignBehaviors`
**Module:** `StoryMode`
**Type:** `public class TutorialPhaseCampaignBehavior : CampaignBehaviorBase`
**File:** `StoryMode/GameComponents/CampaignBehaviors/TutorialPhaseCampaignBehavior.cs`

## Overview

TutorialPhaseCampaignBehavior lives in the StoryMode module, source file StoryMode/GameComponents/CampaignBehaviors/TutorialPhaseCampaignBehavior.cs. It is a public class, implementing/inheriting CampaignBehaviorBase; the inheritance chain is TutorialPhaseCampaignBehavior → CampaignBehaviorBase. It exposes 3 public/protected members: 3 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TutorialPhaseCampaignBehavior is a top-level type in StoryMode, namespace differing from (StoryMode.GameComponents.CampaignBehaviors) the module directory; inheritance chain TutorialPhaseCampaignBehavior → CampaignBehaviorBase. The surface is method-led (methods 3/3, properties 0/3), so it mostly exposes operations. CampaignBehaviorBase on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from StoryMode/GameComponents/CampaignBehaviors/TutorialPhaseCampaignBehavior.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `RegisterEvents` | `public override void RegisterEvents()` | method |
| `SyncData` | `public override void SyncData(IDataStore dataStore)` | method |
| `FinalizeTutorialPhase` | `public void FinalizeTutorialPhase()` | method |

## See Also

- [↑ storymode module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AchievementsCampaignBehavior](../AchievementsCampaignBehavior)
- [same namespace FirstPhaseCampaignBehavior](../FirstPhaseCampaignBehavior)
- [same namespace LordConversationsStoryModeBehavior](../LordConversationsStoryModeBehavior)
- [same namespace MainStorylineCampaignBehavior](../MainStorylineCampaignBehavior)
