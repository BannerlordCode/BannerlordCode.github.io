---
title: "BodyGenerator"
description: "BodyGenerator: a public class in TaleWorlds.MountAndBlade; 6 exposed members (3 methods, 1 properties, 1 fields). Source: TaleWorlds.MountAndBlade/BodyGenerator.cs."
---
# BodyGenerator

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class BodyGenerator`
**File:** `TaleWorlds.MountAndBlade/BodyGenerator.cs`

## Overview

BodyGenerator lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/BodyGenerator.cs. It is a public class; the inheritance chain is BodyGenerator. It exposes 6 public/protected members: 3 methods, 1 properties, 1 fields, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BodyGenerator is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain BodyGenerator. The surface is method-led (methods 3/6, properties 1/6), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/BodyGenerator.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Character` | `public BasicCharacterObject Character` | property |
| `BodyGenerator` | `public BodyGenerator(BasicCharacterObject troop)` | constructor |
| `InitBodyGenerator` | `public FaceGenerationParams InitBodyGenerator(bool isDressed)` | method |
| `RefreshFace` | `public void RefreshFace(FaceGenerationParams faceGenerationParams, bool hasEquipment)` | method |
| `SaveCurrentCharacter` | `public void SaveCurrentCharacter()` | method |
| `FaceGenTeethAnimationName` | `public const string FaceGenTeethAnimationName` | field |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
