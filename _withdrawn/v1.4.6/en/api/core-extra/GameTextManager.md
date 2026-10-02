---
title: "GameTextManager"
description: "GameTextManager: a public class in TaleWorlds.Core; 10 exposed members (7 methods, 1 properties, 0 fields). Canonical bucket core-extra. Source: TaleWorlds.Core/GameTextManager.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GameTextManager

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public class GameTextManager`
**File:** `TaleWorlds.Core/GameTextManager.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Core)

## Overview

GameTextManager lives in the TaleWorlds.Core module, source file TaleWorlds.Core/GameTextManager.cs. It is a public class; the inheritance chain is GameTextManager. It exposes 10 public/protected members: 7 methods, 1 properties, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GameTextManager lands in canonical bucket `core-extra` (matched rule `rule:TaleWorlds.Core`), namespace `TaleWorlds.Core`, inheritance chain GameTextManager. The surface is method-led (methods 7/10, properties 1/10), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core/GameTextManager.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `GameTextManager` | `public GameTextManager()` | constructor |
| `GetGameText` | `public GameText GetGameText(string id)` | method |
| `AddGameText` | `public GameText AddGameText(string id)` | method |
| `TryGetText` | `public bool TryGetText(string id, string variation, out TextObject text)` | method |
| `FindText` | `public TextObject FindText(string id, string variation = null)` | method |
| `IEnumerable` | `public IEnumerable<TextObject>FindAllTextVariations(string id)` | method |
| `LoadGameTexts` | `public void LoadGameTexts()` | method |
| `LoadDefaultTexts` | `public void LoadDefaultTexts()` | method |
| `ChoiceTag` | `public struct ChoiceTag` | property |
| `ChoiceTag` | `public struct ChoiceTag` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ActionSetCode](../ActionSetCode/)
- [same namespace AgentAttackType](../AgentAttackType/)
- [same namespace AgentControllerType](../AgentControllerType/)
- [same namespace AgentData](../AgentData/)
