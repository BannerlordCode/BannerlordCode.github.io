---
title: "MultiplayerLobbyAfterBattlePopupWidget"
description: "MultiplayerLobbyAfterBattlePopupWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby, inheriting Widget; 10 exposed members (2 methods, 7 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/MultiplayerLobbyAfterBattlePopupWidget.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MultiplayerLobbyAfterBattlePopupWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class MultiplayerLobbyAfterBattlePopupWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/MultiplayerLobbyAfterBattlePopupWidget.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

MultiplayerLobbyAfterBattlePopupWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/MultiplayerLobbyAfterBattlePopupWidget.cs. It is a public class, implementing/inheriting Widget; the inheritance chain is MultiplayerLobbyAfterBattlePopupWidget → Widget → PropertyOwnerObject. It exposes 10 public/protected members: 2 methods, 7 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MultiplayerLobbyAfterBattlePopupWidget lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby`, inheritance chain MultiplayerLobbyAfterBattlePopupWidget → Widget → PropertyOwnerObject. The surface is property-led (properties 7/10, methods 2/10), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/MultiplayerLobbyAfterBattlePopupWidget.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `MultiplayerLobbyAfterBattlePopupWidget` | `public MultiplayerLobbyAfterBattlePopupWidget(UIContext context) : base(context)` | constructor |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | method |
| `StartAnimation` | `public void StartAnimation()` | method |
| `IsActive` | `public bool IsActive` | property |
| `AnimationDelay` | `public float AnimationDelay` | property |
| `AnimationDuration` | `public float AnimationDuration` | property |
| `RewardRevealDuration` | `public float RewardRevealDuration` | property |
| `ExperiencePanel` | `public MultiplayerLobbyAfterBattleExperiencePanelWidget ExperiencePanel` | property |
| `ClickToContinueTextWidget` | `public TextWidget ClickToContinueTextWidget` | property |
| `RewardsListPanel` | `public ListPanel RewardsListPanel` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace MultiplayerLobbyAfterBattleExperiencePanelWidget](../MultiplayerLobbyAfterBattleExperiencePanelWidget/)
- [same namespace MultiplayerLobbyAnimatedRankChangeWidget](../MultiplayerLobbyAnimatedRankChangeWidget/)
- [same namespace MultiplayerLobbyBadgeButtonWidget](../MultiplayerLobbyBadgeButtonWidget/)
- [same namespace MultiplayerLobbyBadgeProgressInformationWidget](../MultiplayerLobbyBadgeProgressInformationWidget/)
