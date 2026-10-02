---
title: "MultiplayerLobbyMatchmakingScreenWidget"
description: "MultiplayerLobbyMatchmakingScreenWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby.Matchmaking, inheriting Widget; 9 exposed members (1 methods, 7 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/Matchmaking/MultiplayerLobbyMatchmakingScreenWidget.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MultiplayerLobbyMatchmakingScreenWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby.Matchmaking`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class MultiplayerLobbyMatchmakingScreenWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/Matchmaking/MultiplayerLobbyMatchmakingScreenWidget.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

MultiplayerLobbyMatchmakingScreenWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/Matchmaking/MultiplayerLobbyMatchmakingScreenWidget.cs. It is a public class, implementing/inheriting Widget; the inheritance chain is MultiplayerLobbyMatchmakingScreenWidget → Widget → PropertyOwnerObject. It exposes 9 public/protected members: 1 methods, 7 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MultiplayerLobbyMatchmakingScreenWidget lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby.Matchmaking`, inheritance chain MultiplayerLobbyMatchmakingScreenWidget → Widget → PropertyOwnerObject. The surface is property-led (properties 7/9, methods 1/9), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/Matchmaking/MultiplayerLobbyMatchmakingScreenWidget.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `CustomServerParentWidget` | `public MultiplayerLobbyCustomServerScreenWidget CustomServerParentWidget` | property |
| `PremadeMatchesParentWidget` | `public MultiplayerLobbyCustomServerScreenWidget PremadeMatchesParentWidget` | property |
| `MultiplayerLobbyMatchmakingScreenWidget` | `public MultiplayerLobbyMatchmakingScreenWidget(UIContext context) : base(context)` | constructor |
| `LobbyStateChanged` | `public void LobbyStateChanged(bool isSearchRequested, bool isSearching, bool isMatchmakingEnabled, bool isCustomBattleEnabled, bool isPartyLeader, bool isInParty)` | method |
| `IsMatchFindPossible` | `public bool IsMatchFindPossible` | property |
| `IsCustomGameFindEnabled` | `public bool IsCustomGameFindEnabled` | property |
| `SelectedModeIndex` | `public int SelectedModeIndex` | property |
| `FindGameButton` | `public ButtonWidget FindGameButton` | property |
| `SelectionInfo` | `public Widget SelectionInfo` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace MultiplayerLobbyMatchmakingRegionConnectionQualityTextWidget](../MultiplayerLobbyMatchmakingRegionConnectionQualityTextWidget/)
