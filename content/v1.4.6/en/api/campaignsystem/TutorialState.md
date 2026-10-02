---
title: "TutorialState"
description: "TutorialState: a public class in TaleWorlds.CampaignSystem, inheriting GameState; 5 exposed members (3 methods, 1 properties, 1 fields). Source: TaleWorlds.CampaignSystem/GameState/TutorialState.cs."
---
# TutorialState

**Namespace:** `TaleWorlds.CampaignSystem.GameState`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class TutorialState : GameState`
**File:** `TaleWorlds.CampaignSystem/GameState/TutorialState.cs`

## Overview

TutorialState lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameState/TutorialState.cs. It is a public class, implementing/inheriting GameState; the inheritance chain is TutorialState → GameState. It exposes 5 public/protected members: 3 methods, 1 properties, 1 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TutorialState is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.GameState) the module directory; inheritance chain TutorialState → GameState. The surface is method-led (methods 3/5, properties 1/5), so it mostly exposes operations. GameState on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameState/TutorialState.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsMenuState` | `public override bool IsMenuState` | property |
| `OnActivate` | `protected override void OnActivate()` | method |
| `OnFinalize` | `protected override void OnFinalize()` | method |
| `OnTick` | `protected override void OnTick(float dt)` | method |
| `MenuContext` | `public MenuContext MenuContext` | field |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace BannerEditorState](../BannerEditorState)
- [same namespace BarberState](../BarberState)
- [same namespace CharacterDeveloperState](../CharacterDeveloperState)
- [same namespace ClanState](../ClanState)
