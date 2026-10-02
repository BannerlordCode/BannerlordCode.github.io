---
title: "MissionGauntletMainAgentControlModeView"
description: "MissionGauntletMainAgentControlModeView: a public class in TaleWorlds.MountAndBlade.GauntletUI, inheriting MissionView; 8 exposed members (7 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI/Mission/MissionGauntletMainAgentControlModeView.cs."
---
# MissionGauntletMainAgentControlModeView

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Mission`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI`
**Type:** `public class MissionGauntletMainAgentControlModeView : MissionView`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/Mission/MissionGauntletMainAgentControlModeView.cs`

## Overview

MissionGauntletMainAgentControlModeView lives in the TaleWorlds.MountAndBlade.GauntletUI module, source file TaleWorlds.MountAndBlade.GauntletUI/Mission/MissionGauntletMainAgentControlModeView.cs. It is a public class, implementing/inheriting MissionView; the inheritance chain is MissionGauntletMainAgentControlModeView → MissionView. It exposes 8 public/protected members: 7 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionGauntletMainAgentControlModeView is a top-level type in TaleWorlds.MountAndBlade.GauntletUI, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Mission) the module directory; inheritance chain MissionGauntletMainAgentControlModeView → MissionView. The surface is method-led (methods 7/8, properties 0/8), so it mostly exposes operations. MissionView on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI/Mission/MissionGauntletMainAgentControlModeView.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MissionGauntletMainAgentControlModeView` | `public MissionGauntletMainAgentControlModeView()` | constructor |
| `EarlyStart` | `public override void EarlyStart()` | method |
| `AfterStart` | `public override void AfterStart()` | method |
| `OnMissionScreenFinalize` | `public override void OnMissionScreenFinalize()` | method |
| `OnMissionScreenTick` | `public override void OnMissionScreenTick(float dt)` | method |
| `OnAgentRemoved` | `public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)` | method |
| `OnPhotoModeActivated` | `public override void OnPhotoModeActivated()` | method |
| `OnPhotoModeDeactivated` | `public override void OnPhotoModeDeactivated()` | method |

## See Also

- [↑ mountandblade-gauntletui module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace MissionGauntletAgentStatus](../MissionGauntletAgentStatus)
- [same namespace MissionGauntletBoundaryCrossingView](../MissionGauntletBoundaryCrossingView)
- [same namespace MissionGauntletCategoryLoadManager](../MissionGauntletCategoryLoadManager)
- [same namespace MissionGauntletCrosshair](../MissionGauntletCrosshair)
