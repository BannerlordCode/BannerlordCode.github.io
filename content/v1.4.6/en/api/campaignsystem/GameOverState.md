---
title: "GameOverState"
description: "GameOverState: a public class in TaleWorlds.CampaignSystem, inheriting GameState; 10 exposed members (3 methods, 4 properties, 0 fields). Source: TaleWorlds.CampaignSystem/GameState/GameOverState.cs."
---
# GameOverState

**Namespace:** `TaleWorlds.CampaignSystem.GameState`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class GameOverState : GameState`
**File:** `TaleWorlds.CampaignSystem/GameState/GameOverState.cs`

## Overview

GameOverState lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameState/GameOverState.cs. It is a public class, implementing/inheriting GameState; the inheritance chain is GameOverState → GameState. It exposes 10 public/protected members: 3 methods, 4 properties, 2 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GameOverState is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.GameState) the module directory; inheritance chain GameOverState → GameState. The surface is property-led (properties 4/10, methods 3/10), so it mostly exposes state for reading. GameState on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameState/GameOverState.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsMenuState` | `public override bool IsMenuState` | property |
| `Handler` | `public IGameOverStateHandler Handler` | property |
| `Reason` | `public GameOverState.GameOverReason Reason` | property |
| `GameOverState` | `public GameOverState()` | constructor |
| `GameOverState` | `public GameOverState(GameOverState.GameOverReason reason)` | constructor |
| `CreateForVictory` | `public static GameOverState CreateForVictory()` | method |
| `CreateForRetirement` | `public static GameOverState CreateForRetirement()` | method |
| `CreateForClanDestroyed` | `public static GameOverState CreateForClanDestroyed()` | method |
| `GameOverReason` | `public enum GameOverReason` | property |
| `GameOverReason` | `public enum GameOverReason` | nested type |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace BannerEditorState](../BannerEditorState)
- [same namespace BarberState](../BarberState)
- [same namespace CharacterDeveloperState](../CharacterDeveloperState)
- [same namespace ClanState](../ClanState)
