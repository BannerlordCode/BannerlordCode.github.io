---
title: "InventoryState"
description: "InventoryState: a public class in TaleWorlds.CampaignSystem.GameState, inheriting PlayerGameState; 5 exposed members (0 methods, 5 properties, 0 fields). Canonical bucket campaign. Source: TaleWorlds.CampaignSystem/GameState/InventoryState.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# InventoryState

**Namespace:** `TaleWorlds.CampaignSystem.GameState`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class InventoryState : PlayerGameState`
**File:** `TaleWorlds.CampaignSystem/GameState/InventoryState.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## Overview

InventoryState lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameState/InventoryState.cs. It is a public class, implementing/inheriting PlayerGameState; the inheritance chain is InventoryState → PlayerGameState → GameState → MBObjectBase. It exposes 5 public/protected members: 5 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: InventoryState lands in canonical bucket `campaign` (matched rule `rule:TaleWorlds.CampaignSystem`), namespace `TaleWorlds.CampaignSystem.GameState`, inheritance chain InventoryState → PlayerGameState → GameState → MBObjectBase. The surface is property-led (properties 5/5, methods 0/5), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameState/InventoryState.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `IsMenuState` | `public override bool IsMenuState` | property |
| `InventoryLogic` | `public InventoryLogic InventoryLogic` | property |
| `InventoryMode` | `public InventoryScreenHelper.InventoryMode InventoryMode` | property |
| `DoneLogicExtrasDelegate` | `public Action DoneLogicExtrasDelegate` | property |
| `Handler` | `public IInventoryStateHandler Handler` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface PlayerGameState](../../core-extra/PlayerGameState/)
- [same namespace BannerEditorState](../BannerEditorState/)
- [same namespace BarberState](../BarberState/)
- [same namespace CharacterDeveloperState](../CharacterDeveloperState/)
- [same namespace ClanState](../ClanState/)
