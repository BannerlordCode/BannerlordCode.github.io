---
title: "TutorialState"
description: "TutorialState: a public class in TaleWorlds.CampaignSystem.GameState, inheriting GameState; 5 exposed members (3 methods, 1 properties, 1 fields). Canonical bucket campaign. Source: TaleWorlds.CampaignSystem/GameState/TutorialState.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# TutorialState

**Namespace:** `TaleWorlds.CampaignSystem.GameState`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class TutorialState : GameState`
**File:** `TaleWorlds.CampaignSystem/GameState/TutorialState.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## Overview

TutorialState lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameState/TutorialState.cs. It is a public class, implementing/inheriting GameState; the inheritance chain is TutorialState → GameState → MBObjectBase. It exposes 5 public/protected members: 3 methods, 1 properties, 1 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TutorialState lands in canonical bucket `campaign` (matched rule `rule:TaleWorlds.CampaignSystem`), namespace `TaleWorlds.CampaignSystem.GameState`, inheritance chain TutorialState → GameState → MBObjectBase. The surface is method-led (methods 3/5, properties 1/5), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameState/TutorialState.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `IsMenuState` | `public override bool IsMenuState` | property |
| `OnActivate` | `protected override void OnActivate()` | method |
| `OnFinalize` | `protected override void OnFinalize()` | method |
| `OnTick` | `protected override void OnTick(float dt)` | method |
| `MenuContext` | `public MenuContext MenuContext` | field |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface GameState](../../core-extra/GameState/)
- [same namespace BannerEditorState](../BannerEditorState/)
- [same namespace BarberState](../BarberState/)
- [same namespace CharacterDeveloperState](../CharacterDeveloperState/)
- [same namespace ClanState](../ClanState/)
