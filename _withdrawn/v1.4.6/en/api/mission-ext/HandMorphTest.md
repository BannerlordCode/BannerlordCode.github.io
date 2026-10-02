---
title: "HandMorphTest"
description: "HandMorphTest: a public class in TaleWorlds.MountAndBlade.View.Scripts, inheriting ScriptComponentBehavior; 9 exposed members (7 methods, 2 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Scripts/HandMorphTest.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# HandMorphTest

**Namespace:** `TaleWorlds.MountAndBlade.View.Scripts`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public class HandMorphTest : ScriptComponentBehavior`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Scripts/HandMorphTest.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

HandMorphTest lives in the TaleWorlds.MountAndBlade.View module, source file TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Scripts/HandMorphTest.cs. It is a public class, implementing/inheriting ScriptComponentBehavior; the inheritance chain is HandMorphTest → ScriptComponentBehavior → DotNetObject. It exposes 9 public/protected members: 7 methods, 2 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: HandMorphTest lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.View.Scripts`, inheritance chain HandMorphTest → ScriptComponentBehavior → DotNetObject. The surface is method-led (methods 7/9, properties 2/9), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Scripts/HandMorphTest.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `ClothColor1` | `public uint ClothColor1` | property |
| `ClothColor2` | `public uint ClothColor2` | property |
| `OnInit` | `protected override void OnInit()` | method |
| `OnEditorInit` | `protected override void OnEditorInit()` | method |
| `OnEditorTick` | `protected override void OnEditorTick(float dt)` | method |
| `SpawnCharacter` | `public void SpawnCharacter()` | method |
| `Reset` | `public void Reset()` | method |
| `InitWithCharacter` | `public void InitWithCharacter(CharacterCode characterCode)` | method |
| `OnRemoved` | `protected override void OnRemoved(int removeReason)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface ScriptComponentBehavior](../../engine/ScriptComponentBehavior/)
- [same namespace CharacterDebugSpawner](../CharacterDebugSpawner/)
- [same namespace CharacterSpawner](../CharacterSpawner/)
- [same namespace HandPose](../HandPose/)
- [same namespace MapColorGradeManager](../MapColorGradeManager/)
