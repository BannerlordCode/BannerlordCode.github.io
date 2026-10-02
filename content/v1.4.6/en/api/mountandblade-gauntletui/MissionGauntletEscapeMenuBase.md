---
title: "MissionGauntletEscapeMenuBase"
description: "MissionGauntletEscapeMenuBase: a public class in TaleWorlds.MountAndBlade.GauntletUI, inheriting MissionEscapeMenuView; 7 exposed members (6 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI/Mission/MissionGauntletEscapeMenuBase.cs."
---
# MissionGauntletEscapeMenuBase

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Mission`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI`
**Type:** `public abstract class MissionGauntletEscapeMenuBase : MissionEscapeMenuView`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/Mission/MissionGauntletEscapeMenuBase.cs`

## Overview

MissionGauntletEscapeMenuBase lives in the TaleWorlds.MountAndBlade.GauntletUI module, source file TaleWorlds.MountAndBlade.GauntletUI/Mission/MissionGauntletEscapeMenuBase.cs. It is a public class (abstract), implementing/inheriting MissionEscapeMenuView; the inheritance chain is MissionGauntletEscapeMenuBase → MissionEscapeMenuView. It exposes 7 public/protected members: 6 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionGauntletEscapeMenuBase is a top-level type in TaleWorlds.MountAndBlade.GauntletUI, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Mission) the module directory; inheritance chain MissionGauntletEscapeMenuBase → MissionEscapeMenuView. The surface is method-led (methods 6/7, properties 0/7), so it mostly exposes operations. MissionEscapeMenuView on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI/Mission/MissionGauntletEscapeMenuBase.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MissionGauntletEscapeMenuBase` | `protected MissionGauntletEscapeMenuBase(string viewFile)` | constructor |
| `List` | `protected virtual List<EscapeMenuItemVM>GetEscapeMenuItems()` | method |
| `OnMissionScreenFinalize` | `public override void OnMissionScreenFinalize()` | method |
| `OnEscape` | `public override bool OnEscape()` | method |
| `OnEscapeMenuToggled` | `protected bool OnEscapeMenuToggled(bool isOpened)` | method |
| `OnMissionScreenTick` | `public override void OnMissionScreenTick(float dt)` | method |
| `OnSceneRenderingStarted` | `public override void OnSceneRenderingStarted()` | method |

## See Also

- [↑ mountandblade-gauntletui module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace MissionGauntletAgentStatus](../MissionGauntletAgentStatus)
- [same namespace MissionGauntletBoundaryCrossingView](../MissionGauntletBoundaryCrossingView)
- [same namespace MissionGauntletCategoryLoadManager](../MissionGauntletCategoryLoadManager)
- [same namespace MissionGauntletCrosshair](../MissionGauntletCrosshair)
