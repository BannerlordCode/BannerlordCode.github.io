---
title: "StoryModeCharacterCreationCampaignBehavior"
description: "StoryModeCharacterCreationCampaignBehavior: a public class in StoryMode.GameComponents.CampaignBehaviors, inheriting CampaignBehaviorBase, ICharacterCreationContentHandler; 5 exposed members (5 methods, 0 properties, 0 fields). Canonical bucket storymode. Source: StoryMode/GameComponents/CampaignBehaviors/StoryModeCharacterCreationCampaignBehavior.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# StoryModeCharacterCreationCampaignBehavior

**Namespace:** `StoryMode.GameComponents.CampaignBehaviors`
**Module:** `StoryMode`
**Type:** `public class StoryModeCharacterCreationCampaignBehavior : CampaignBehaviorBase, ICharacterCreationContentHandler`
**File:** `StoryMode/GameComponents/CampaignBehaviors/StoryModeCharacterCreationCampaignBehavior.cs`
**Bucket:** `storymode` (rule:StoryMode)

## Overview

StoryModeCharacterCreationCampaignBehavior lives in the StoryMode module, source file StoryMode/GameComponents/CampaignBehaviors/StoryModeCharacterCreationCampaignBehavior.cs. It is a public class, implementing/inheriting CampaignBehaviorBase, ICharacterCreationContentHandler; the inheritance chain is StoryModeCharacterCreationCampaignBehavior → CampaignBehaviorBase → ICampaignBehavior. It exposes 5 public/protected members: 5 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: StoryModeCharacterCreationCampaignBehavior lands in canonical bucket `storymode` (matched rule `rule:StoryMode`), namespace `StoryMode.GameComponents.CampaignBehaviors`, inheritance chain StoryModeCharacterCreationCampaignBehavior → CampaignBehaviorBase → ICampaignBehavior. The surface is method-led (methods 5/5, properties 0/5), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from StoryMode/GameComponents/CampaignBehaviors/StoryModeCharacterCreationCampaignBehavior.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `RegisterEvents` | `public override void RegisterEvents()` | method |
| `SyncData` | `public override void SyncData(IDataStore dataStore)` | method |
| `InitializeCharacterCreationStages` | `public void InitializeCharacterCreationStages(CharacterCreationManager characterCreationManager)` | method |
| `InitializeData` | `public void InitializeData(CharacterCreationManager characterCreationManager)` | method |
| `CreateSibling` | `protected void CreateSibling(Hero hero, BodyProperties motherBodyProperties, BodyProperties fatherBodyProperties, uint seed)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface ICharacterCreationContentHandler](../../campaign/ICharacterCreationContentHandler/)
- [same namespace AchievementsCampaignBehavior](../AchievementsCampaignBehavior/)
- [same namespace FirstPhaseCampaignBehavior](../FirstPhaseCampaignBehavior/)
- [same namespace LordConversationsStoryModeBehavior](../LordConversationsStoryModeBehavior/)
- [same namespace MainStorylineCampaignBehavior](../MainStorylineCampaignBehavior/)
