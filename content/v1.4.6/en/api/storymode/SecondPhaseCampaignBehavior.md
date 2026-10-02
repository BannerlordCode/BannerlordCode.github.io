---
title: "SecondPhaseCampaignBehavior"
description: "SecondPhaseCampaignBehavior: a public class in StoryMode, inheriting CampaignBehaviorBase; 3 exposed members (2 methods, 0 properties, 0 fields). Source: StoryMode/GameComponents/CampaignBehaviors/SecondPhaseCampaignBehavior.cs."
---
# SecondPhaseCampaignBehavior

**Namespace:** `StoryMode.GameComponents.CampaignBehaviors`
**Module:** `StoryMode`
**Type:** `public class SecondPhaseCampaignBehavior : CampaignBehaviorBase`
**File:** `StoryMode/GameComponents/CampaignBehaviors/SecondPhaseCampaignBehavior.cs`

## Overview

SecondPhaseCampaignBehavior lives in the StoryMode module, source file StoryMode/GameComponents/CampaignBehaviors/SecondPhaseCampaignBehavior.cs. It is a public class, implementing/inheriting CampaignBehaviorBase; the inheritance chain is SecondPhaseCampaignBehavior → CampaignBehaviorBase. It exposes 3 public/protected members: 2 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SecondPhaseCampaignBehavior is a top-level type in StoryMode, namespace differing from (StoryMode.GameComponents.CampaignBehaviors) the module directory; inheritance chain SecondPhaseCampaignBehavior → CampaignBehaviorBase. The surface is method-led (methods 2/3, properties 0/3), so it mostly exposes operations. CampaignBehaviorBase on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from StoryMode/GameComponents/CampaignBehaviors/SecondPhaseCampaignBehavior.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SecondPhaseCampaignBehavior` | `public SecondPhaseCampaignBehavior()` | constructor |
| `RegisterEvents` | `public override void RegisterEvents()` | method |
| `SyncData` | `public override void SyncData(IDataStore dataStore)` | method |

## See Also

- [↑ storymode module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AchievementsCampaignBehavior](../AchievementsCampaignBehavior)
- [same namespace FirstPhaseCampaignBehavior](../FirstPhaseCampaignBehavior)
- [same namespace LordConversationsStoryModeBehavior](../LordConversationsStoryModeBehavior)
- [same namespace MainStorylineCampaignBehavior](../MainStorylineCampaignBehavior)
