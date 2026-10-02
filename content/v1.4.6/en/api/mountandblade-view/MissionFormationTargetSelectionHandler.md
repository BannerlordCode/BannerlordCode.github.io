---
title: "MissionFormationTargetSelectionHandler"
description: "MissionFormationTargetSelectionHandler: a public class in TaleWorlds.MountAndBlade.View, inheriting MissionView; 8 exposed members (3 methods, 0 properties, 3 fields). Source: TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/MissionFormationTargetSelectionHandler.cs."
---
# MissionFormationTargetSelectionHandler

**Namespace:** `TaleWorlds.MountAndBlade.View.MissionViews`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public class MissionFormationTargetSelectionHandler : MissionView`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/MissionFormationTargetSelectionHandler.cs`

## Overview

MissionFormationTargetSelectionHandler lives in the TaleWorlds.MountAndBlade.View module, source file TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/MissionFormationTargetSelectionHandler.cs. It is a public class, implementing/inheriting MissionView; the inheritance chain is MissionFormationTargetSelectionHandler → MissionView → MissionBehavior. It exposes 8 public/protected members: 3 methods, 3 fields, 1 events, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionFormationTargetSelectionHandler is a top-level type in TaleWorlds.MountAndBlade.View, namespace differing from (TaleWorlds.MountAndBlade.View.MissionViews) the module directory; inheritance chain MissionFormationTargetSelectionHandler → MissionView → MissionBehavior. The surface is method-led (methods 3/8, properties 0/8), so it mostly exposes operations. MissionBehavior on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/MissionFormationTargetSelectionHandler.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Action` | `public event Action<MBReadOnlyList<Formation>>OnFormationFocused;` | event |
| `MissionFormationTargetSelectionHandler` | `public MissionFormationTargetSelectionHandler()` | constructor |
| `OnPreDisplayMissionTick` | `public override void OnPreDisplayMissionTick(float dt)` | method |
| `SetIsFormationTargetingDisabled` | `public void SetIsFormationTargetingDisabled(bool isDisabled)` | method |
| `OnRemoveBehavior` | `public override void OnRemoveBehavior()` | method |
| `MaxDistanceForFocusCheck` | `public const float MaxDistanceForFocusCheck` | field |
| `MinDistanceForFocusCheck` | `public const float MinDistanceForFocusCheck` | field |
| `MaxDistanceToCenterForFocus` | `public readonly float MaxDistanceToCenterForFocus` | field |

## See Also

- [↑ mountandblade-view module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface MissionView](../MissionView)
- [same namespace MissionAgentContourControllerView](../MissionAgentContourControllerView)
- [same namespace MissionAgentLabelView](../MissionAgentLabelView)
- [same namespace MissionAgentStatusUIHandler](../MissionAgentStatusUIHandler)
- [same namespace MissionBattleUIBaseView](../MissionBattleUIBaseView)
