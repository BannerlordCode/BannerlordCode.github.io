---
title: "StoryModeTutorialBoxCampaignBehavior"
description: "StoryModeTutorialBoxCampaignBehavior: a public class in StoryMode, inheriting CampaignBehaviorBase; 5 exposed members (3 methods, 1 properties, 0 fields). Source: StoryMode/GameComponents/CampaignBehaviors/StoryModeTutorialBoxCampaignBehavior.cs."
---
# StoryModeTutorialBoxCampaignBehavior

**Namespace:** `StoryMode.GameComponents.CampaignBehaviors`
**Module:** `StoryMode`
**Type:** `public class StoryModeTutorialBoxCampaignBehavior : CampaignBehaviorBase`
**File:** `StoryMode/GameComponents/CampaignBehaviors/StoryModeTutorialBoxCampaignBehavior.cs`

## Overview

StoryModeTutorialBoxCampaignBehavior lives in the StoryMode module, source file StoryMode/GameComponents/CampaignBehaviors/StoryModeTutorialBoxCampaignBehavior.cs. It is a public class, implementing/inheriting CampaignBehaviorBase; the inheritance chain is StoryModeTutorialBoxCampaignBehavior → CampaignBehaviorBase. It exposes 5 public/protected members: 3 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: StoryModeTutorialBoxCampaignBehavior is a top-level type in StoryMode, namespace differing from (StoryMode.GameComponents.CampaignBehaviors) the module directory; inheritance chain StoryModeTutorialBoxCampaignBehavior → CampaignBehaviorBase. The surface is method-led (methods 3/5, properties 1/5), so it mostly exposes operations. CampaignBehaviorBase on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from StoryMode/GameComponents/CampaignBehaviors/StoryModeTutorialBoxCampaignBehavior.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MBReadOnlyList` | `public MBReadOnlyList<CampaignTutorial>AvailableTutorials` | property |
| `StoryModeTutorialBoxCampaignBehavior` | `public StoryModeTutorialBoxCampaignBehavior()` | constructor |
| `RegisterEvents` | `public override void RegisterEvents()` | method |
| `SyncData` | `public override void SyncData(IDataStore dataStore)` | method |
| `OnResetAllTutorials` | `public void OnResetAllTutorials(ResetAllTutorialsEvent obj)` | method |

## See Also

- [↑ storymode module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AchievementsCampaignBehavior](../AchievementsCampaignBehavior)
- [same namespace FirstPhaseCampaignBehavior](../FirstPhaseCampaignBehavior)
- [same namespace LordConversationsStoryModeBehavior](../LordConversationsStoryModeBehavior)
- [same namespace MainStorylineCampaignBehavior](../MainStorylineCampaignBehavior)
