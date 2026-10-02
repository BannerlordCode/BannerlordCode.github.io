---
title: "StoryModeEvents"
description: "StoryModeEvents: a public class in StoryMode, inheriting CampaignEventReceiver; 14 exposed members (7 methods, 7 properties, 0 fields). Canonical bucket storymode. Source: StoryMode/StoryModeEvents.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# StoryModeEvents

**Namespace:** `StoryMode`
**Module:** `StoryMode`
**Type:** `public class StoryModeEvents : CampaignEventReceiver`
**File:** `StoryMode/StoryModeEvents.cs`
**Bucket:** `storymode` (rule:StoryMode)

## Overview

StoryModeEvents lives in the StoryMode module, source file StoryMode/StoryModeEvents.cs. It is a public class, implementing/inheriting CampaignEventReceiver; the inheritance chain is StoryModeEvents → CampaignEventReceiver. It exposes 14 public/protected members: 7 methods, 7 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: StoryModeEvents lands in canonical bucket `storymode` (matched rule `rule:StoryMode`), namespace `StoryMode`, inheritance chain StoryModeEvents → CampaignEventReceiver. The surface is method-led (methods 7/14, properties 7/14), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from StoryMode/StoryModeEvents.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Instance` | `public static StoryModeEvents Instance` | property |
| `RemoveListeners` | `public override void RemoveListeners(object obj)` | method |
| `IMbEvent` | `public static IMbEvent<MainStoryLineSide>OnMainStoryLineSideChosenEvent` | property |
| `OnMainStoryLineSideChosen` | `public void OnMainStoryLineSideChosen(MainStoryLineSide side)` | method |
| `OnStoryModeTutorialEndedEvent` | `public static IMbEvent OnStoryModeTutorialEndedEvent` | property |
| `OnStoryModeTutorialEnded` | `public void OnStoryModeTutorialEnded()` | method |
| `OnStealthTutorialActivatedEvent` | `public static IMbEvent OnStealthTutorialActivatedEvent` | property |
| `OnStealthTutorialActivated` | `public void OnStealthTutorialActivated()` | method |
| `OnBannerPieceCollectedEvent` | `public static IMbEvent OnBannerPieceCollectedEvent` | property |
| `OnBannerPieceCollected` | `public void OnBannerPieceCollected()` | method |
| `OnConspiracyActivatedEvent` | `public static IMbEvent OnConspiracyActivatedEvent` | property |
| `OnConspiracyActivated` | `public void OnConspiracyActivated()` | method |
| `OnTravelToVillageTutorialQuestStartedEvent` | `public static IMbEvent OnTravelToVillageTutorialQuestStartedEvent` | property |
| `OnTravelToVillageTutorialQuestStarted` | `public void OnTravelToVillageTutorialQuestStarted()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface CampaignEventReceiver](../../campaign/CampaignEventReceiver/)
- [same namespace CampaignStoryMode](../CampaignStoryMode/)
- [same namespace ConspiracyQuestMapNotification](../ConspiracyQuestMapNotification/)
- [same namespace IsArzagosTag](../IsArzagosTag/)
- [same namespace IsIstianaTag](../IsIstianaTag/)
