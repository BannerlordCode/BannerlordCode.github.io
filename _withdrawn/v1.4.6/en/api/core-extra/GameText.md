---
title: "GameText"
description: "GameText: a public class in TaleWorlds.Core; 8 exposed members (3 methods, 4 properties, 0 fields). Canonical bucket core-extra. Source: TaleWorlds.Core/GameText.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GameText

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public class GameText`
**File:** `TaleWorlds.Core/GameText.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Core)

## Overview

GameText lives in the TaleWorlds.Core module, source file TaleWorlds.Core/GameText.cs. It is a public class; the inheritance chain is GameText. It exposes 8 public/protected members: 3 methods, 4 properties, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GameText lands in canonical bucket `core-extra` (matched rule `rule:TaleWorlds.Core`), namespace `TaleWorlds.Core`, inheritance chain GameText. The surface is property-led (properties 4/8, methods 3/8), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core/GameText.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Id` | `public string Id` | property |
| `IEnumerable` | `public IEnumerable<GameText.GameTextVariation>Variations` | property |
| `DefaultText` | `public TextObject DefaultText` | property |
| `AddVariationWithId` | `public void AddVariationWithId(string variationId, TextObject text, List<GameTextManager.ChoiceTag>choiceTags)` | method |
| `SetVariationWithId` | `public void SetVariationWithId(string variationId, TextObject text, List<GameTextManager.ChoiceTag>choiceTags)` | method |
| `AddVariation` | `public void AddVariation(string text, params object[]propertiesAndWeights)` | method |
| `GameTextVariation` | `public struct GameTextVariation` | property |
| `GameTextVariation` | `public struct GameTextVariation` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ActionSetCode](../ActionSetCode/)
- [same namespace AgentAttackType](../AgentAttackType/)
- [same namespace AgentControllerType](../AgentControllerType/)
- [same namespace AgentData](../AgentData/)
