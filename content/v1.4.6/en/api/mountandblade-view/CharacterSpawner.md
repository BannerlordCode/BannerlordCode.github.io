---
title: "CharacterSpawner"
description: "CharacterSpawner: a public class in TaleWorlds.MountAndBlade.View, inheriting ScriptComponentBehavior; 18 exposed members (10 methods, 2 properties, 6 fields). Source: TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Scripts/CharacterSpawner.cs."
---
# CharacterSpawner

**Namespace:** `TaleWorlds.MountAndBlade.View.Scripts`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public class CharacterSpawner : ScriptComponentBehavior`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Scripts/CharacterSpawner.cs`

## Overview

CharacterSpawner lives in the TaleWorlds.MountAndBlade.View module, source file TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Scripts/CharacterSpawner.cs. It is a public class, implementing/inheriting ScriptComponentBehavior; the inheritance chain is CharacterSpawner → ScriptComponentBehavior. It exposes 18 public/protected members: 10 methods, 2 properties, 6 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CharacterSpawner is a top-level type in TaleWorlds.MountAndBlade.View, namespace differing from (TaleWorlds.MountAndBlade.View.Scripts) the module directory; inheritance chain CharacterSpawner → ScriptComponentBehavior. The surface is method-led (methods 10/18, properties 2/18), so it mostly exposes operations. ScriptComponentBehavior on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Scripts/CharacterSpawner.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ClothColor1` | `public uint ClothColor1` | property |
| `ClothColor2` | `public uint ClothColor2` | property |
| `OnInit` | `protected override void OnInit()` | method |
| `Init` | `protected void Init()` | method |
| `OnEditorInit` | `protected override void OnEditorInit()` | method |
| `OnEditorTick` | `protected override void OnEditorTick(float dt)` | method |
| `OnRemoved` | `protected override void OnRemoved(int removeReason)` | method |
| `SetCreateFaceImmediately` | `public void SetCreateFaceImmediately(bool value)` | method |
| `OnEditorVariableChanged` | `protected override void OnEditorVariableChanged(string variableName)` | method |
| `SetClothColors` | `public void SetClothColors(uint color1, uint color2)` | method |
| `SpawnCharacter` | `public void SpawnCharacter()` | method |
| `InitWithCharacter` | `public void InitWithCharacter(CharacterCode characterCode, bool useBodyProperties = false)` | method |
| `PoseAction` | `public string PoseAction` | field |
| `LordName` | `public string LordName` | field |
| `ActionSetSuffix` | `public string ActionSetSuffix` | field |
| `PoseActionForHorse` | `public string PoseActionForHorse` | field |
| `BodyPropertiesString` | `public string BodyPropertiesString` | field |
| `WieldOffHand` | `public bool WieldOffHand` | field |

## See Also

- [↑ mountandblade-view module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace CharacterDebugSpawner](../CharacterDebugSpawner)
- [same namespace HandMorphTest](../HandMorphTest)
- [same namespace HandPose](../HandPose)
- [same namespace MapColorGradeManager](../MapColorGradeManager)
