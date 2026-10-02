---
title: "StoryModeVoiceOverModel"
description: "StoryModeVoiceOverModel: a public class in StoryMode, inheriting VoiceOverModel; 2 exposed members (2 methods, 0 properties, 0 fields). Source: StoryMode/GameComponents/StoryModeVoiceOverModel.cs."
---
# StoryModeVoiceOverModel

**Namespace:** `StoryMode.GameComponents`
**Module:** `StoryMode`
**Type:** `public class StoryModeVoiceOverModel : VoiceOverModel`
**File:** `StoryMode/GameComponents/StoryModeVoiceOverModel.cs`

## Overview

StoryModeVoiceOverModel lives in the StoryMode module, source file StoryMode/GameComponents/StoryModeVoiceOverModel.cs. It is a public class, implementing/inheriting VoiceOverModel; the inheritance chain is StoryModeVoiceOverModel → VoiceOverModel. It exposes 2 public/protected members: 2 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: StoryModeVoiceOverModel is a top-level type in StoryMode, namespace differing from (StoryMode.GameComponents) the module directory; inheritance chain StoryModeVoiceOverModel → VoiceOverModel. The surface is method-led (methods 2/2, properties 0/2), so it mostly exposes operations. VoiceOverModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from StoryMode/GameComponents/StoryModeVoiceOverModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetSoundPathForCharacter` | `public override string GetSoundPathForCharacter(CharacterObject character, VoiceObject voiceObject)` | method |
| `GetAccentClass` | `public override string GetAccentClass(CultureObject culture, bool isHighClass)` | method |

## See Also

- [↑ storymode module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace StoryModeAgentDecideKilledOrUnconsciousModel](../StoryModeAgentDecideKilledOrUnconsciousModel)
- [same namespace StoryModeBanditDensityModel](../StoryModeBanditDensityModel)
- [same namespace StoryModeBannerItemModel](../StoryModeBannerItemModel)
- [same namespace StoryModeBattleRewardModel](../StoryModeBattleRewardModel)
