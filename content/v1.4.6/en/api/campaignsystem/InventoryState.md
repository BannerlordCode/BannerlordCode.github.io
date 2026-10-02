---
title: "InventoryState"
description: "InventoryState: a public class in TaleWorlds.CampaignSystem, inheriting PlayerGameState; 5 exposed members (0 methods, 5 properties, 0 fields). Source: TaleWorlds.CampaignSystem/GameState/InventoryState.cs."
---
# InventoryState

**Namespace:** `TaleWorlds.CampaignSystem.GameState`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class InventoryState : PlayerGameState`
**File:** `TaleWorlds.CampaignSystem/GameState/InventoryState.cs`

## Overview

InventoryState lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameState/InventoryState.cs. It is a public class, implementing/inheriting PlayerGameState; the inheritance chain is InventoryState → PlayerGameState. It exposes 5 public/protected members: 5 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: InventoryState is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.GameState) the module directory; inheritance chain InventoryState → PlayerGameState. The surface is property-led (properties 5/5, methods 0/5), so it mostly exposes state for reading. PlayerGameState on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameState/InventoryState.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsMenuState` | `public override bool IsMenuState` | property |
| `InventoryLogic` | `public InventoryLogic InventoryLogic` | property |
| `InventoryMode` | `public InventoryScreenHelper.InventoryMode InventoryMode` | property |
| `DoneLogicExtrasDelegate` | `public Action DoneLogicExtrasDelegate` | property |
| `Handler` | `public IInventoryStateHandler Handler` | property |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace BannerEditorState](../BannerEditorState)
- [same namespace BarberState](../BarberState)
- [same namespace CharacterDeveloperState](../CharacterDeveloperState)
- [same namespace ClanState](../ClanState)
