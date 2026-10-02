---
title: "PortState"
description: "PortState: a public class in TaleWorlds.CampaignSystem, inheriting GameState; 9 exposed members (1 methods, 1 properties, 0 fields). Source: TaleWorlds.CampaignSystem/GameState/PortState.cs."
---
# PortState

**Namespace:** `TaleWorlds.CampaignSystem.GameState`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class PortState : GameState`
**File:** `TaleWorlds.CampaignSystem/GameState/PortState.cs`

## Overview

PortState lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameState/PortState.cs. It is a public class, implementing/inheriting GameState; the inheritance chain is PortState → GameState. It exposes 9 public/protected members: 1 methods, 1 properties, 7 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PortState is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.GameState) the module directory; inheritance chain PortState → GameState. The surface is method-led (methods 1/9, properties 1/9), so it mostly exposes operations. GameState on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameState/PortState.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsMenuState` | `public override bool IsMenuState` | property |
| `PortState` | `public PortState()` | constructor |
| `PortState` | `public PortState(PartyBase leftOwner, PartyBase rightOwner, PortScreenModes portScreenMode)` | constructor |
| `PortState` | `public PortState(PartyBase leftOwner, PartyBase rightOwner, Action onEndAction, PortScreenModes portScreenMode)` | constructor |
| `PortState` | `public PortState(MBReadOnlyList<Ship>leftShips, MBReadOnlyList<Ship>rightShips, PortScreenModes portScreenMode)` | constructor |
| `PortState` | `public PortState(PartyBase leftOwner, PartyBase rightOwner, MBReadOnlyList<Ship>leftShips, MBReadOnlyList<Ship>rightShips, PortScreenModes portScreenMode)` | constructor |
| `PortState` | `public PortState(PartyBase leftOwner, PartyBase rightOwner, MBReadOnlyList<Ship>leftShips, MBReadOnlyList<Ship>rightShips, Action onEndAction, PortScreenModes portScreenMode)` | constructor |
| `PortState` | `public PortState(Settlement settlement, PartyBase rightOwner, PortScreenModes portScreenMode)` | constructor |
| `OnFinalize` | `protected override void OnFinalize()` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace BannerEditorState](../BannerEditorState)
- [same namespace BarberState](../BarberState)
- [same namespace CharacterDeveloperState](../CharacterDeveloperState)
- [same namespace ClanState](../ClanState)
