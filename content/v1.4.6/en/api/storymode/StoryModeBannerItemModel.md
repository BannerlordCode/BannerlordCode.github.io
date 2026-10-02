---
title: "StoryModeBannerItemModel"
description: "StoryModeBannerItemModel: a public class in StoryMode, inheriting BannerItemModel; 4 exposed members (4 methods, 0 properties, 0 fields). Source: StoryMode/GameComponents/StoryModeBannerItemModel.cs."
---
# StoryModeBannerItemModel

**Namespace:** `StoryMode.GameComponents`
**Module:** `StoryMode`
**Type:** `public class StoryModeBannerItemModel : BannerItemModel`
**File:** `StoryMode/GameComponents/StoryModeBannerItemModel.cs`

## Overview

StoryModeBannerItemModel lives in the StoryMode module, source file StoryMode/GameComponents/StoryModeBannerItemModel.cs. It is a public class, implementing/inheriting BannerItemModel; the inheritance chain is StoryModeBannerItemModel → BannerItemModel. It exposes 4 public/protected members: 4 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: StoryModeBannerItemModel is a top-level type in StoryMode, namespace differing from (StoryMode.GameComponents) the module directory; inheritance chain StoryModeBannerItemModel → BannerItemModel. The surface is method-led (methods 4/4, properties 0/4), so it mostly exposes operations. BannerItemModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from StoryMode/GameComponents/StoryModeBannerItemModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IEnumerable` | `public override IEnumerable<ItemObject>GetPossibleRewardBannerItems()` | method |
| `CanBannerBeUpdated` | `public override bool CanBannerBeUpdated(ItemObject item)` | method |
| `IEnumerable` | `public override IEnumerable<ItemObject>GetPossibleRewardBannerItemsForHero(Hero hero)` | method |
| `GetBannerItemLevelForHero` | `public override int GetBannerItemLevelForHero(Hero hero)` | method |

## See Also

- [↑ storymode module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace StoryModeAgentDecideKilledOrUnconsciousModel](../StoryModeAgentDecideKilledOrUnconsciousModel)
- [same namespace StoryModeBanditDensityModel](../StoryModeBanditDensityModel)
- [same namespace StoryModeBattleRewardModel](../StoryModeBattleRewardModel)
- [same namespace StoryModeCombatXpModel](../StoryModeCombatXpModel)
