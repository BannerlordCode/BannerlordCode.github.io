---
title: "ReplayMissionView"
description: "ReplayMissionView: a public class in TaleWorlds.MountAndBlade.View.MissionViews, inheriting MissionView; 8 exposed members (8 methods, 0 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/ReplayMissionView.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ReplayMissionView

**Namespace:** `TaleWorlds.MountAndBlade.View.MissionViews`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public class ReplayMissionView : MissionView`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/ReplayMissionView.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

ReplayMissionView lives in the TaleWorlds.MountAndBlade.View module, source file TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/ReplayMissionView.cs. It is a public class, implementing/inheriting MissionView; the inheritance chain is ReplayMissionView → MissionView → MissionBehavior → IMissionBehavior. It exposes 8 public/protected members: 8 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ReplayMissionView lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.View.MissionViews`, inheritance chain ReplayMissionView → MissionView → MissionBehavior → IMissionBehavior. The surface is method-led (methods 8/8, properties 0/8), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/ReplayMissionView.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `OnBehaviorInitialize` | `public override void OnBehaviorInitialize()` | method |
| `OnPreMissionTick` | `public override void OnPreMissionTick(float dt)` | method |
| `OverrideInput` | `public void OverrideInput(bool isOverridden)` | method |
| `ResetReplay` | `public void ResetReplay()` | method |
| `Rewind` | `public void Rewind(float time)` | method |
| `FastForward` | `public void FastForward(float time)` | method |
| `Pause` | `public void Pause()` | method |
| `Resume` | `public void Resume()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MissionView](../MissionView/)
- [same namespace MissionAgentContourControllerView](../MissionAgentContourControllerView/)
- [same namespace MissionAgentLabelView](../MissionAgentLabelView/)
- [same namespace MissionAgentStatusUIHandler](../MissionAgentStatusUIHandler/)
- [same namespace MissionBattleUIBaseView](../MissionBattleUIBaseView/)
