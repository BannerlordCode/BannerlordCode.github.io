---
title: "PartyState"
description: "PartyState: a public class in TaleWorlds.CampaignSystem.GameState, inheriting PlayerGameState; 6 exposed members (1 methods, 5 properties, 0 fields). Canonical bucket campaign. Source: TaleWorlds.CampaignSystem/GameState/PartyState.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# PartyState

**Namespace:** `TaleWorlds.CampaignSystem.GameState`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class PartyState : PlayerGameState`
**File:** `TaleWorlds.CampaignSystem/GameState/PartyState.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## Overview

PartyState lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameState/PartyState.cs. It is a public class, implementing/inheriting PlayerGameState; the inheritance chain is PartyState → PlayerGameState → GameState → MBObjectBase. It exposes 6 public/protected members: 1 methods, 5 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PartyState lands in canonical bucket `campaign` (matched rule `rule:TaleWorlds.CampaignSystem`), namespace `TaleWorlds.CampaignSystem.GameState`, inheritance chain PartyState → PlayerGameState → GameState → MBObjectBase. The surface is property-led (properties 5/6, methods 1/6), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameState/PartyState.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `IsMenuState` | `public override bool IsMenuState` | property |
| `PartyScreenLogic` | `public PartyScreenLogic PartyScreenLogic` | property |
| `PartyScreenMode` | `public PartyScreenHelper.PartyScreenMode PartyScreenMode` | property |
| `IsDonating` | `public bool IsDonating` | property |
| `Handler` | `public IPartyScreenLogicHandler Handler` | property |
| `RequestUserInput` | `public void RequestUserInput(string text, Action accept, Action cancel)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface PlayerGameState](../../core-extra/PlayerGameState/)
- [same namespace BannerEditorState](../BannerEditorState/)
- [same namespace BarberState](../BarberState/)
- [same namespace CharacterDeveloperState](../CharacterDeveloperState/)
- [same namespace ClanState](../ClanState/)
