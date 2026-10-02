---
title: "AchievementsCampaignBehavior"
description: "AchievementsCampaignBehavior: a public class in StoryMode.GameComponents.CampaignBehaviors, inheriting CampaignBehaviorBase; 5 exposed members (5 methods, 0 properties, 0 fields). Canonical bucket storymode. Source: StoryMode/GameComponents/CampaignBehaviors/AchievementsCampaignBehavior.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# AchievementsCampaignBehavior

**Namespace:** `StoryMode.GameComponents.CampaignBehaviors`
**Module:** `StoryMode`
**Type:** `public class AchievementsCampaignBehavior : CampaignBehaviorBase`
**File:** `StoryMode/GameComponents/CampaignBehaviors/AchievementsCampaignBehavior.cs`
**Bucket:** `storymode` (rule:StoryMode)

## Overview

AchievementsCampaignBehavior lives in the StoryMode module, source file StoryMode/GameComponents/CampaignBehaviors/AchievementsCampaignBehavior.cs. It is a public class, implementing/inheriting CampaignBehaviorBase; the inheritance chain is AchievementsCampaignBehavior → CampaignBehaviorBase → ICampaignBehavior. It exposes 5 public/protected members: 5 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: AchievementsCampaignBehavior lands in canonical bucket `storymode` (matched rule `rule:StoryMode`), namespace `StoryMode.GameComponents.CampaignBehaviors`, inheritance chain AchievementsCampaignBehavior → CampaignBehaviorBase → ICampaignBehavior. The surface is method-led (methods 5/5, properties 0/5), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from StoryMode/GameComponents/CampaignBehaviors/AchievementsCampaignBehavior.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `SyncData` | `public override void SyncData(IDataStore dataStore)` | method |
| `RegisterEvents` | `public override void RegisterEvents()` | method |
| `CheckAchievementSystemActivity` | `public bool CheckAchievementSystemActivity(out TextObject reason)` | method |
| `OnRadagosDuelWon` | `public void OnRadagosDuelWon()` | method |
| `DeactivateAchievements` | `public void DeactivateAchievements(TextObject reason = null, bool showMessage = true, bool temporarily = false)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace FirstPhaseCampaignBehavior](../FirstPhaseCampaignBehavior/)
- [same namespace LordConversationsStoryModeBehavior](../LordConversationsStoryModeBehavior/)
- [same namespace MainStorylineCampaignBehavior](../MainStorylineCampaignBehavior/)
- [same namespace SecondPhaseCampaignBehavior](../SecondPhaseCampaignBehavior/)
