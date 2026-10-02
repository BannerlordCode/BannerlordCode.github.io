---
title: "MissionBattleUIBaseView"
description: "MissionBattleUIBaseView: a public class in TaleWorlds.MountAndBlade.View.MissionViews, inheriting MissionView; 8 exposed members (7 methods, 1 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/MissionBattleUIBaseView.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MissionBattleUIBaseView

**Namespace:** `TaleWorlds.MountAndBlade.View.MissionViews`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public abstract class MissionBattleUIBaseView : MissionView`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/MissionBattleUIBaseView.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

MissionBattleUIBaseView lives in the TaleWorlds.MountAndBlade.View module, source file TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/MissionBattleUIBaseView.cs. It is a public class (abstract), implementing/inheriting MissionView; the inheritance chain is MissionBattleUIBaseView → MissionView → MissionBehavior → IMissionBehavior. It exposes 8 public/protected members: 7 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionBattleUIBaseView lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.View.MissionViews`, inheritance chain MissionBattleUIBaseView → MissionView → MissionBehavior → IMissionBehavior. The surface is method-led (methods 7/8, properties 1/8), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/MissionBattleUIBaseView.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `IsViewCreated` | `public bool IsViewCreated` | property |
| `OnCreateView` | `protected abstract void OnCreateView();` | method |
| `OnDestroyView` | `protected abstract void OnDestroyView();` | method |
| `OnSuspendView` | `protected abstract override void OnSuspendView();` | method |
| `OnResumeView` | `protected abstract override void OnResumeView();` | method |
| `OnMissionScreenInitialize` | `public override void OnMissionScreenInitialize()` | method |
| `OnMissionScreenTick` | `public override void OnMissionScreenTick(float dt)` | method |
| `OnMissionScreenFinalize` | `public override void OnMissionScreenFinalize()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MissionView](../MissionView/)
- [same namespace MissionAgentContourControllerView](../MissionAgentContourControllerView/)
- [same namespace MissionAgentLabelView](../MissionAgentLabelView/)
- [same namespace MissionAgentStatusUIHandler](../MissionAgentStatusUIHandler/)
- [same namespace MissionBoundaryCrossingView](../MissionBoundaryCrossingView/)
