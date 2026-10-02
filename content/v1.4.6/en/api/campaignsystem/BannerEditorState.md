---
title: "BannerEditorState"
description: "BannerEditorState: a public class in TaleWorlds.CampaignSystem, inheriting GameState; 7 exposed members (3 methods, 2 properties, 0 fields). Source: TaleWorlds.CampaignSystem/GameState/BannerEditorState.cs."
---
# BannerEditorState

**Namespace:** `TaleWorlds.CampaignSystem.GameState`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class BannerEditorState : GameState`
**File:** `TaleWorlds.CampaignSystem/GameState/BannerEditorState.cs`

## Overview

BannerEditorState lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameState/BannerEditorState.cs. It is a public class, implementing/inheriting GameState; the inheritance chain is BannerEditorState → GameState. It exposes 7 public/protected members: 3 methods, 2 properties, 2 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BannerEditorState is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.GameState) the module directory; inheritance chain BannerEditorState → GameState. The surface is method-led (methods 3/7, properties 2/7), so it mostly exposes operations. GameState on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameState/BannerEditorState.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsMenuState` | `public override bool IsMenuState` | property |
| `Handler` | `public IBannerEditorStateHandler Handler` | property |
| `BannerEditorState` | `public BannerEditorState()` | constructor |
| `BannerEditorState` | `public BannerEditorState(Action endAction)` | constructor |
| `GetClan` | `public Clan GetClan()` | method |
| `GetCharacter` | `public CharacterObject GetCharacter()` | method |
| `OnFinalize` | `protected override void OnFinalize()` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace BarberState](../BarberState)
- [same namespace CharacterDeveloperState](../CharacterDeveloperState)
- [same namespace ClanState](../ClanState)
- [same namespace CraftingState](../CraftingState)
