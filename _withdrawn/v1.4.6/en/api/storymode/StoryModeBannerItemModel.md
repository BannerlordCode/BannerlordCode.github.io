---
title: "StoryModeBannerItemModel"
description: "StoryModeBannerItemModel: a public class in StoryMode.GameComponents, inheriting BannerItemModel; 4 exposed members (4 methods, 0 properties, 0 fields). Canonical bucket storymode. Source: StoryMode/GameComponents/StoryModeBannerItemModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# StoryModeBannerItemModel

**Namespace:** `StoryMode.GameComponents`
**Module:** `StoryMode`
**Type:** `public class StoryModeBannerItemModel : BannerItemModel`
**File:** `StoryMode/GameComponents/StoryModeBannerItemModel.cs`
**Bucket:** `storymode` (rule:StoryMode)

## Overview

StoryModeBannerItemModel lives in the StoryMode module, source file StoryMode/GameComponents/StoryModeBannerItemModel.cs. It is a public class, implementing/inheriting BannerItemModel; the inheritance chain is StoryModeBannerItemModel → BannerItemModel → MBGameModel → GameModel. It exposes 4 public/protected members: 4 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: StoryModeBannerItemModel lands in canonical bucket `storymode` (matched rule `rule:StoryMode`), namespace `StoryMode.GameComponents`, inheritance chain StoryModeBannerItemModel → BannerItemModel → MBGameModel → GameModel. The surface is method-led (methods 4/4, properties 0/4), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from StoryMode/GameComponents/StoryModeBannerItemModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `IEnumerable` | `public override IEnumerable<ItemObject>GetPossibleRewardBannerItems()` | method |
| `CanBannerBeUpdated` | `public override bool CanBannerBeUpdated(ItemObject item)` | method |
| `IEnumerable` | `public override IEnumerable<ItemObject>GetPossibleRewardBannerItemsForHero(Hero hero)` | method |
| `GetBannerItemLevelForHero` | `public override int GetBannerItemLevelForHero(Hero hero)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface BannerItemModel](../../campaign-ext/BannerItemModel/)
- [same namespace StoryModeAgentDecideKilledOrUnconsciousModel](../StoryModeAgentDecideKilledOrUnconsciousModel/)
- [same namespace StoryModeBanditDensityModel](../StoryModeBanditDensityModel/)
- [same namespace StoryModeBattleRewardModel](../StoryModeBattleRewardModel/)
- [same namespace StoryModeCombatXpModel](../StoryModeCombatXpModel/)
