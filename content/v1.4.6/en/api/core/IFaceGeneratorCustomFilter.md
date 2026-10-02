---
title: "IFaceGeneratorCustomFilter"
description: "IFaceGeneratorCustomFilter: a public interface in TaleWorlds.Core; 3 exposed members (3 methods, 0 properties, 0 fields). Source: TaleWorlds.Core/IFaceGeneratorCustomFilter.cs."
---
# IFaceGeneratorCustomFilter

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public interface IFaceGeneratorCustomFilter`
**File:** `TaleWorlds.Core/IFaceGeneratorCustomFilter.cs`

## Overview

IFaceGeneratorCustomFilter lives in the TaleWorlds.Core module, source file TaleWorlds.Core/IFaceGeneratorCustomFilter.cs. It is a public interface; the inheritance chain is IFaceGeneratorCustomFilter. It exposes 3 public/protected members: 3 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: IFaceGeneratorCustomFilter is a top-level type in TaleWorlds.Core, namespace matching the module directory; inheritance chain IFaceGeneratorCustomFilter. The surface is method-led (methods 3/3, properties 0/3), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core/IFaceGeneratorCustomFilter.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `int[]GetHaircutIndices` | `int[]GetHaircutIndices(BasicCharacterObject character);` | method |
| `int[]GetFacialHairIndices` | `int[]GetFacialHairIndices(BasicCharacterObject character);` | method |
| `FaceGeneratorStage[]GetAvailableStages` | `FaceGeneratorStage[]GetAvailableStages();` | method |

## See Also

- [↑ core module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionSetCode](../ActionSetCode)
- [same namespace AgentAttackType](../AgentAttackType)
- [same namespace AgentControllerType](../AgentControllerType)
- [same namespace AgentData](../AgentData)
