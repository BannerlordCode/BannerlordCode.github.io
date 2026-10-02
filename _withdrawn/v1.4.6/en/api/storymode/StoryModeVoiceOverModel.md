---
title: "StoryModeVoiceOverModel"
description: "StoryModeVoiceOverModel: a public class in StoryMode.GameComponents, inheriting VoiceOverModel; 2 exposed members (2 methods, 0 properties, 0 fields). Canonical bucket storymode. Source: StoryMode/GameComponents/StoryModeVoiceOverModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# StoryModeVoiceOverModel

**Namespace:** `StoryMode.GameComponents`
**Module:** `StoryMode`
**Type:** `public class StoryModeVoiceOverModel : VoiceOverModel`
**File:** `StoryMode/GameComponents/StoryModeVoiceOverModel.cs`
**Bucket:** `storymode` (rule:StoryMode)

## Overview

StoryModeVoiceOverModel lives in the StoryMode module, source file StoryMode/GameComponents/StoryModeVoiceOverModel.cs. It is a public class, implementing/inheriting VoiceOverModel; the inheritance chain is StoryModeVoiceOverModel → VoiceOverModel → MBGameModel → GameModel. It exposes 2 public/protected members: 2 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: StoryModeVoiceOverModel lands in canonical bucket `storymode` (matched rule `rule:StoryMode`), namespace `StoryMode.GameComponents`, inheritance chain StoryModeVoiceOverModel → VoiceOverModel → MBGameModel → GameModel. The surface is method-led (methods 2/2, properties 0/2), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from StoryMode/GameComponents/StoryModeVoiceOverModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `GetSoundPathForCharacter` | `public override string GetSoundPathForCharacter(CharacterObject character, VoiceObject voiceObject)` | method |
| `GetAccentClass` | `public override string GetAccentClass(CultureObject culture, bool isHighClass)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface VoiceOverModel](../../campaign-ext/VoiceOverModel/)
- [same namespace StoryModeAgentDecideKilledOrUnconsciousModel](../StoryModeAgentDecideKilledOrUnconsciousModel/)
- [same namespace StoryModeBanditDensityModel](../StoryModeBanditDensityModel/)
- [same namespace StoryModeBannerItemModel](../StoryModeBannerItemModel/)
- [same namespace StoryModeBattleRewardModel](../StoryModeBattleRewardModel/)
