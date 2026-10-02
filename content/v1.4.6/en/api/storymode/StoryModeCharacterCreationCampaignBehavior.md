---
title: "StoryModeCharacterCreationCampaignBehavior"
description: "StoryModeCharacterCreationCampaignBehavior: a public class in StoryMode, inheriting CampaignBehaviorBase, ICharacterCreationContentHandler; 5 exposed members (5 methods, 0 properties, 0 fields). Source: StoryMode/GameComponents/CampaignBehaviors/StoryModeCharacterCreationCampaignBehavior.cs."
---
# StoryModeCharacterCreationCampaignBehavior

**Namespace:** `StoryMode.GameComponents.CampaignBehaviors`
**Module:** `StoryMode`
**Type:** `public class StoryModeCharacterCreationCampaignBehavior : CampaignBehaviorBase, ICharacterCreationContentHandler`
**File:** `StoryMode/GameComponents/CampaignBehaviors/StoryModeCharacterCreationCampaignBehavior.cs`

## Overview

StoryModeCharacterCreationCampaignBehavior lives in the StoryMode module, source file StoryMode/GameComponents/CampaignBehaviors/StoryModeCharacterCreationCampaignBehavior.cs. It is a public class, implementing/inheriting CampaignBehaviorBase, ICharacterCreationContentHandler; the inheritance chain is StoryModeCharacterCreationCampaignBehavior → CampaignBehaviorBase. It exposes 5 public/protected members: 5 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: StoryModeCharacterCreationCampaignBehavior is a top-level type in StoryMode, namespace differing from (StoryMode.GameComponents.CampaignBehaviors) the module directory; inheritance chain StoryModeCharacterCreationCampaignBehavior → CampaignBehaviorBase. The surface is method-led (methods 5/5, properties 0/5), so it mostly exposes operations. CampaignBehaviorBase on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from StoryMode/GameComponents/CampaignBehaviors/StoryModeCharacterCreationCampaignBehavior.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `RegisterEvents` | `public override void RegisterEvents()` | method |
| `SyncData` | `public override void SyncData(IDataStore dataStore)` | method |
| `InitializeCharacterCreationStages` | `public void InitializeCharacterCreationStages(CharacterCreationManager characterCreationManager)` | method |
| `InitializeData` | `public void InitializeData(CharacterCreationManager characterCreationManager)` | method |
| `CreateSibling` | `protected void CreateSibling(Hero hero, BodyProperties motherBodyProperties, BodyProperties fatherBodyProperties, uint seed)` | method |

## See Also

- [↑ storymode module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AchievementsCampaignBehavior](../AchievementsCampaignBehavior)
- [same namespace FirstPhaseCampaignBehavior](../FirstPhaseCampaignBehavior)
- [same namespace LordConversationsStoryModeBehavior](../LordConversationsStoryModeBehavior)
- [same namespace MainStorylineCampaignBehavior](../MainStorylineCampaignBehavior)
