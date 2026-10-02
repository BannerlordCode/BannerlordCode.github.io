---
title: "StoryModeQuestBase"
description: "StoryModeQuestBase: a public class in StoryMode, inheriting QuestBase; 4 exposed members (1 methods, 2 properties, 0 fields). Canonical bucket storymode. Source: StoryMode/StoryModeQuestBase.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# StoryModeQuestBase

**Namespace:** `StoryMode`
**Module:** `StoryMode`
**Type:** `public abstract class StoryModeQuestBase : QuestBase`
**File:** `StoryMode/StoryModeQuestBase.cs`
**Bucket:** `storymode` (rule:StoryMode)

## Overview

StoryModeQuestBase lives in the StoryMode module, source file StoryMode/StoryModeQuestBase.cs. It is a public class (abstract), implementing/inheriting QuestBase; the inheritance chain is StoryModeQuestBase → QuestBase → MBObjectBase. It exposes 4 public/protected members: 1 methods, 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: StoryModeQuestBase lands in canonical bucket `storymode` (matched rule `rule:StoryMode`), namespace `StoryMode`, inheritance chain StoryModeQuestBase → QuestBase → MBObjectBase. The surface is property-led (properties 2/4, methods 1/4), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from StoryMode/StoryModeQuestBase.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `SpecialQuestType` | `public override string SpecialQuestType` | property |
| `IsRemainingTimeHidden` | `public override bool IsRemainingTimeHidden` | property |
| `StoryModeQuestBase` | `protected StoryModeQuestBase(string questId, Hero questGiver, CampaignTime duration) : base(questId, questGiver, duration, 0)` | constructor |
| `OnTimedOut` | `protected override void OnTimedOut()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface QuestBase](../../campaign/QuestBase/)
- [same namespace CampaignStoryMode](../CampaignStoryMode/)
- [same namespace ConspiracyQuestMapNotification](../ConspiracyQuestMapNotification/)
- [same namespace IsArzagosTag](../IsArzagosTag/)
- [same namespace IsIstianaTag](../IsIstianaTag/)
