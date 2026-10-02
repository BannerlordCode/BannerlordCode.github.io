---
title: "TournamentParticipantBrushWidget"
description: "TournamentParticipantBrushWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets.Tournament, inheriting BrushWidget; 12 exposed members (4 methods, 7 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Tournament/TournamentParticipantBrushWidget.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# TournamentParticipantBrushWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Tournament`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class TournamentParticipantBrushWidget : BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Tournament/TournamentParticipantBrushWidget.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

TournamentParticipantBrushWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Tournament/TournamentParticipantBrushWidget.cs. It is a public class, implementing/inheriting BrushWidget; the inheritance chain is TournamentParticipantBrushWidget → BrushWidget → Widget → PropertyOwnerObject. It exposes 12 public/protected members: 4 methods, 7 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TournamentParticipantBrushWidget lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Tournament`, inheritance chain TournamentParticipantBrushWidget → BrushWidget → Widget → PropertyOwnerObject. The surface is property-led (properties 7/12, methods 4/12), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Tournament/TournamentParticipantBrushWidget.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `TournamentParticipantBrushWidget` | `public TournamentParticipantBrushWidget(UIContext context) : base(context)` | constructor |
| `OnMousePressed` | `protected override void OnMousePressed()` | method |
| `OnChildAdded` | `protected override void OnChildAdded(Widget child)` | method |
| `OnConnectedToRoot` | `protected override void OnConnectedToRoot()` | method |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `NameTextWidget` | `public TextWidget NameTextWidget` | property |
| `MatchState` | `public int MatchState` | property |
| `IsDead` | `public bool IsDead` | property |
| `IsMainHero` | `public bool IsMainHero` | property |
| `MainHeroTextBrush` | `public Brush MainHeroTextBrush` | property |
| `NormalTextBrush` | `public Brush NormalTextBrush` | property |
| `OnMission` | `public bool OnMission` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface BrushWidget](../../gui/BrushWidget/)
- [same namespace TournamentMatchWidget](../TournamentMatchWidget/)
- [same namespace TournamentScreenWidget](../TournamentScreenWidget/)
