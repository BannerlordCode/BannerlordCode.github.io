---
title: "PartyState"
description: "PartyState: a public class in TaleWorlds.CampaignSystem, inheriting PlayerGameState; 6 exposed members (1 methods, 5 properties, 0 fields). Source: TaleWorlds.CampaignSystem/GameState/PartyState.cs."
---
# PartyState

**Namespace:** `TaleWorlds.CampaignSystem.GameState`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class PartyState : PlayerGameState`
**File:** `TaleWorlds.CampaignSystem/GameState/PartyState.cs`

## Overview

PartyState lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameState/PartyState.cs. It is a public class, implementing/inheriting PlayerGameState; the inheritance chain is PartyState → PlayerGameState. It exposes 6 public/protected members: 1 methods, 5 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PartyState is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.GameState) the module directory; inheritance chain PartyState → PlayerGameState. The surface is property-led (properties 5/6, methods 1/6), so it mostly exposes state for reading. PlayerGameState on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameState/PartyState.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsMenuState` | `public override bool IsMenuState` | property |
| `PartyScreenLogic` | `public PartyScreenLogic PartyScreenLogic` | property |
| `PartyScreenMode` | `public PartyScreenHelper.PartyScreenMode PartyScreenMode` | property |
| `IsDonating` | `public bool IsDonating` | property |
| `Handler` | `public IPartyScreenLogicHandler Handler` | property |
| `RequestUserInput` | `public void RequestUserInput(string text, Action accept, Action cancel)` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace BannerEditorState](../BannerEditorState)
- [same namespace BarberState](../BarberState)
- [same namespace CharacterDeveloperState](../CharacterDeveloperState)
- [same namespace ClanState](../ClanState)
