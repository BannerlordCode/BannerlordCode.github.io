---
title: "MissionGauntletOptionsUIHandler"
description: "MissionGauntletOptionsUIHandler: a public class in TaleWorlds.MountAndBlade.GauntletUI.Mission, inheriting MissionView; 7 exposed members (5 methods, 1 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.GauntletUI/Mission/MissionGauntletOptionsUIHandler.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MissionGauntletOptionsUIHandler

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Mission`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI`
**Type:** `public class MissionGauntletOptionsUIHandler : MissionView`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/Mission/MissionGauntletOptionsUIHandler.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

MissionGauntletOptionsUIHandler lives in the TaleWorlds.MountAndBlade.GauntletUI module, source file TaleWorlds.MountAndBlade.GauntletUI/Mission/MissionGauntletOptionsUIHandler.cs. It is a public class, implementing/inheriting MissionView; the inheritance chain is MissionGauntletOptionsUIHandler → MissionView → MissionBehavior → IMissionBehavior. It exposes 7 public/protected members: 5 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionGauntletOptionsUIHandler lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.GauntletUI.Mission`, inheritance chain MissionGauntletOptionsUIHandler → MissionView → MissionBehavior → IMissionBehavior. The surface is method-led (methods 5/7, properties 1/7), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI/Mission/MissionGauntletOptionsUIHandler.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `IsEnabled` | `public bool IsEnabled` | property |
| `MissionGauntletOptionsUIHandler` | `public MissionGauntletOptionsUIHandler()` | constructor |
| `OnMissionScreenInitialize` | `public override void OnMissionScreenInitialize()` | method |
| `OnMissionScreenFinalize` | `public override void OnMissionScreenFinalize()` | method |
| `OnMissionScreenTick` | `public override void OnMissionScreenTick(float dt)` | method |
| `OnEscape` | `public override bool OnEscape()` | method |
| `IsOpeningEscapeMenuOnFocusChangeAllowed` | `public override bool IsOpeningEscapeMenuOnFocusChangeAllowed()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MissionView](../MissionView/)
- [same namespace MissionGauntletAgentStatus](../MissionGauntletAgentStatus/)
- [same namespace MissionGauntletBoundaryCrossingView](../MissionGauntletBoundaryCrossingView/)
- [same namespace MissionGauntletCategoryLoadManager](../MissionGauntletCategoryLoadManager/)
- [same namespace MissionGauntletCrosshair](../MissionGauntletCrosshair/)
