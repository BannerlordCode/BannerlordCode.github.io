---
title: "StoryModeTutorialBoxCampaignBehavior"
description: "StoryModeTutorialBoxCampaignBehavior: a public class in StoryMode.GameComponents.CampaignBehaviors, inheriting CampaignBehaviorBase; 5 exposed members (3 methods, 1 properties, 0 fields). Canonical bucket storymode. Source: StoryMode/GameComponents/CampaignBehaviors/StoryModeTutorialBoxCampaignBehavior.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# StoryModeTutorialBoxCampaignBehavior

**Namespace:** `StoryMode.GameComponents.CampaignBehaviors`
**Module:** `StoryMode`
**Type:** `public class StoryModeTutorialBoxCampaignBehavior : CampaignBehaviorBase`
**File:** `StoryMode/GameComponents/CampaignBehaviors/StoryModeTutorialBoxCampaignBehavior.cs`
**Bucket:** `storymode` (rule:StoryMode)

## Overview

StoryModeTutorialBoxCampaignBehavior lives in the StoryMode module, source file StoryMode/GameComponents/CampaignBehaviors/StoryModeTutorialBoxCampaignBehavior.cs. It is a public class, implementing/inheriting CampaignBehaviorBase; the inheritance chain is StoryModeTutorialBoxCampaignBehavior → CampaignBehaviorBase → ICampaignBehavior. It exposes 5 public/protected members: 3 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: StoryModeTutorialBoxCampaignBehavior lands in canonical bucket `storymode` (matched rule `rule:StoryMode`), namespace `StoryMode.GameComponents.CampaignBehaviors`, inheritance chain StoryModeTutorialBoxCampaignBehavior → CampaignBehaviorBase → ICampaignBehavior. The surface is method-led (methods 3/5, properties 1/5), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from StoryMode/GameComponents/CampaignBehaviors/StoryModeTutorialBoxCampaignBehavior.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `MBReadOnlyList` | `public MBReadOnlyList<CampaignTutorial>AvailableTutorials` | property |
| `StoryModeTutorialBoxCampaignBehavior` | `public StoryModeTutorialBoxCampaignBehavior()` | constructor |
| `RegisterEvents` | `public override void RegisterEvents()` | method |
| `SyncData` | `public override void SyncData(IDataStore dataStore)` | method |
| `OnResetAllTutorials` | `public void OnResetAllTutorials(ResetAllTutorialsEvent obj)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace AchievementsCampaignBehavior](../AchievementsCampaignBehavior/)
- [same namespace FirstPhaseCampaignBehavior](../FirstPhaseCampaignBehavior/)
- [same namespace LordConversationsStoryModeBehavior](../LordConversationsStoryModeBehavior/)
- [same namespace MainStorylineCampaignBehavior](../MainStorylineCampaignBehavior/)
