---
title: "SandBox content family"
description: "Source-backed SandBox implementation references for module startup and game-state loading."
---

# SandBox content family

## Mental Model

SandBox is the single-player content module, not a second public SDK. Its
classes show how the game composes campaign behaviors, menus, quests, dialogs,
and game states. The v1.4.5 source provenance is
`Bannerlord.Source/Modules.SandBox`; v1.3.15 pages here are managed reference
names only. Depend on the CampaignSystem contracts and use SandBox as a
pattern source.

## Dependencies

- [CampaignGameStarter](../CampaignGameStarter) registers campaign behaviors and models.
- [Campaign](../../campaign/Campaign) owns the loaded campaign state.
- [GameState](../../core-extra/GameState) and [GameStateManager](../../core-extra/GameStateManager) own screen transitions.
- [SandBox / StoryMode / Native policy](../../../architecture/sandbox-native-policy) defines the boundary.

## Source-backed entries

| Namespace | Type | Purpose | Timing |
| --- | --- | --- | --- |
| SandBox | [MultiplayerItemTestMissionController](../MultiplayerItemTestMissionController) | Keeps the SandBox item-test mission setup isolated from the campaign-world state. | Explicit test mission startup and teardown |
| Sandbox.View.GameStates | [PreloadState](../PreloadState) | Coordinates the SandBox preload transition before the game exposes campaign screens. | Game-state startup before campaign interaction |

## Navigation

- [Parent: Campaign extensions](..)
- [Related: Campaign](../../campaign/) · [Game states](../../core-extra/GameState)
- [Policy: SandBox / StoryMode / Native](../../../architecture/sandbox-native-policy)
