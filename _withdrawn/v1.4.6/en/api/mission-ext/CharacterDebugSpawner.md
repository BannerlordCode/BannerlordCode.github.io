---
title: "CharacterDebugSpawner"
description: "CharacterDebugSpawner: a public class in TaleWorlds.MountAndBlade.View.Scripts, inheriting ScriptComponentBehavior; 14 exposed members (10 methods, 2 properties, 2 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Scripts/CharacterDebugSpawner.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CharacterDebugSpawner

**Namespace:** `TaleWorlds.MountAndBlade.View.Scripts`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public class CharacterDebugSpawner : ScriptComponentBehavior`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Scripts/CharacterDebugSpawner.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

CharacterDebugSpawner lives in the TaleWorlds.MountAndBlade.View module, source file TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Scripts/CharacterDebugSpawner.cs. It is a public class, implementing/inheriting ScriptComponentBehavior; the inheritance chain is CharacterDebugSpawner → ScriptComponentBehavior → DotNetObject. It exposes 14 public/protected members: 10 methods, 2 properties, 2 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CharacterDebugSpawner lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.View.Scripts`, inheritance chain CharacterDebugSpawner → ScriptComponentBehavior → DotNetObject. The surface is method-led (methods 10/14, properties 2/14), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Scripts/CharacterDebugSpawner.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `ClothColor1` | `public uint ClothColor1` | property |
| `ClothColor2` | `public uint ClothColor2` | property |
| `OnInit` | `protected override void OnInit()` | method |
| `OnEditorInit` | `protected override void OnEditorInit()` | method |
| `OnEditorTick` | `protected override void OnEditorTick(float dt)` | method |
| `OnRemoved` | `protected override void OnRemoved(int removeReason)` | method |
| `OnEditorVariableChanged` | `protected override void OnEditorVariableChanged(string variableName)` | method |
| `SetClothColors` | `public void SetClothColors(uint color1, uint color2)` | method |
| `SpawnCharacter` | `public void SpawnCharacter()` | method |
| `Reset` | `public void Reset()` | method |
| `InitWithCharacter` | `public void InitWithCharacter(CharacterCode characterCode)` | method |
| `WieldWeapon` | `public void WieldWeapon(CharacterCode characterCode)` | method |
| `PoseAction` | `public readonly ActionIndexCache PoseAction` | field |
| `LordName` | `public string LordName` | field |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface ScriptComponentBehavior](../../engine/ScriptComponentBehavior/)
- [same namespace CharacterSpawner](../CharacterSpawner/)
- [same namespace HandMorphTest](../HandMorphTest/)
- [same namespace HandPose](../HandPose/)
- [same namespace MapColorGradeManager](../MapColorGradeManager/)
