---
title: "MapColorGradeManager"
description: "MapColorGradeManager: a public class in TaleWorlds.MountAndBlade.View.Scripts, inheriting ScriptComponentBehavior; 8 exposed members (8 methods, 0 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Scripts/MapColorGradeManager.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MapColorGradeManager

**Namespace:** `TaleWorlds.MountAndBlade.View.Scripts`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public class MapColorGradeManager : ScriptComponentBehavior`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Scripts/MapColorGradeManager.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

MapColorGradeManager lives in the TaleWorlds.MountAndBlade.View module, source file TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Scripts/MapColorGradeManager.cs. It is a public class, implementing/inheriting ScriptComponentBehavior; the inheritance chain is MapColorGradeManager → ScriptComponentBehavior → DotNetObject. It exposes 8 public/protected members: 8 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MapColorGradeManager lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.View.Scripts`, inheritance chain MapColorGradeManager → ScriptComponentBehavior → DotNetObject. The surface is method-led (methods 8/8, properties 0/8), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Scripts/MapColorGradeManager.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `OnInit` | `protected override void OnInit()` | method |
| `OnEditorInit` | `protected override void OnEditorInit()` | method |
| `GetTickRequirement` | `public override ScriptComponentBehavior.TickRequirement GetTickRequirement()` | method |
| `OnTick` | `protected override void OnTick(float dt)` | method |
| `OnEditorTick` | `protected override void OnEditorTick(float dt)` | method |
| `OnEditorVariableChanged` | `protected override void OnEditorVariableChanged(string variableName)` | method |
| `ApplyAtmosphere` | `public void ApplyAtmosphere(bool forceLoadTextures)` | method |
| `ApplyColorGrade` | `public void ApplyColorGrade(float dt)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface ScriptComponentBehavior](../../engine/ScriptComponentBehavior/)
- [same namespace CharacterDebugSpawner](../CharacterDebugSpawner/)
- [same namespace CharacterSpawner](../CharacterSpawner/)
- [same namespace HandMorphTest](../HandMorphTest/)
- [same namespace HandPose](../HandPose/)
