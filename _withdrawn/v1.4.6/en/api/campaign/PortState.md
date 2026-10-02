---
title: "PortState"
description: "PortState: a public class in TaleWorlds.CampaignSystem.GameState, inheriting GameState; 9 exposed members (1 methods, 1 properties, 0 fields). Canonical bucket campaign. Source: TaleWorlds.CampaignSystem/GameState/PortState.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# PortState

**Namespace:** `TaleWorlds.CampaignSystem.GameState`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class PortState : GameState`
**File:** `TaleWorlds.CampaignSystem/GameState/PortState.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## Overview

PortState lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameState/PortState.cs. It is a public class, implementing/inheriting GameState; the inheritance chain is PortState → GameState → MBObjectBase. It exposes 9 public/protected members: 1 methods, 1 properties, 7 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PortState lands in canonical bucket `campaign` (matched rule `rule:TaleWorlds.CampaignSystem`), namespace `TaleWorlds.CampaignSystem.GameState`, inheritance chain PortState → GameState → MBObjectBase. The surface is method-led (methods 1/9, properties 1/9), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameState/PortState.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface GameState](../../core-extra/GameState/)
- [same namespace BannerEditorState](../BannerEditorState/)
- [same namespace BarberState](../BarberState/)
- [same namespace CharacterDeveloperState](../CharacterDeveloperState/)
- [same namespace ClanState](../ClanState/)
