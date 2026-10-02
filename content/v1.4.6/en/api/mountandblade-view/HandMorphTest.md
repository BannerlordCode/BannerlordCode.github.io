---
title: "HandMorphTest"
description: "HandMorphTest: a public class in TaleWorlds.MountAndBlade.View, inheriting ScriptComponentBehavior; 9 exposed members (7 methods, 2 properties, 0 fields). Source: TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Scripts/HandMorphTest.cs."
---
# HandMorphTest

**Namespace:** `TaleWorlds.MountAndBlade.View.Scripts`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public class HandMorphTest : ScriptComponentBehavior`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Scripts/HandMorphTest.cs`

## Overview

HandMorphTest lives in the TaleWorlds.MountAndBlade.View module, source file TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Scripts/HandMorphTest.cs. It is a public class, implementing/inheriting ScriptComponentBehavior; the inheritance chain is HandMorphTest → ScriptComponentBehavior. It exposes 9 public/protected members: 7 methods, 2 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: HandMorphTest is a top-level type in TaleWorlds.MountAndBlade.View, namespace differing from (TaleWorlds.MountAndBlade.View.Scripts) the module directory; inheritance chain HandMorphTest → ScriptComponentBehavior. The surface is method-led (methods 7/9, properties 2/9), so it mostly exposes operations. ScriptComponentBehavior on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Scripts/HandMorphTest.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
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

- [↑ mountandblade-view module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace CharacterDebugSpawner](../CharacterDebugSpawner)
- [same namespace CharacterSpawner](../CharacterSpawner)
- [same namespace HandPose](../HandPose)
- [same namespace MapColorGradeManager](../MapColorGradeManager)
