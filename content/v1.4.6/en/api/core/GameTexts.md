---
title: "GameTexts"
description: "GameTexts: a public class in TaleWorlds.Core; 12 exposed members (10 methods, 1 properties, 0 fields). Source: TaleWorlds.Core/GameTexts.cs."
---
# GameTexts

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public static class GameTexts`
**File:** `TaleWorlds.Core/GameTexts.cs`

## Overview

GameTexts lives in the TaleWorlds.Core module, source file TaleWorlds.Core/GameTexts.cs. It is a public class; the inheritance chain is GameTexts. It exposes 12 public/protected members: 10 methods, 1 properties, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GameTexts is a top-level type in TaleWorlds.Core, namespace matching the module directory; inheritance chain GameTexts. The surface is method-led (methods 10/12, properties 1/12), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core/GameTexts.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Initialize` | `public static void Initialize(GameTextManager gameTextManager)` | method |
| `FindText` | `public static TextObject FindText(string id, string variation = null)` | method |
| `TryGetText` | `public static bool TryGetText(string id, out TextObject textObject, string variation = null)` | method |
| `IEnumerable` | `public static IEnumerable<TextObject>FindAllTextVariations(string id)` | method |
| `SetVariable` | `public static void SetVariable(string variableName, string content)` | method |
| `SetVariable` | `public static void SetVariable(string variableName, float content)` | method |
| `SetVariable` | `public static void SetVariable(string variableName, int content)` | method |
| `SetVariable` | `public static void SetVariable(string variableName, TextObject content)` | method |
| `ClearInstance` | `public static void ClearInstance()` | method |
| `AddGameTextWithVariation` | `public static GameTexts.GameTextHelper AddGameTextWithVariation(string id)` | method |
| `GameTextHelper` | `public class GameTextHelper` | property |
| `GameTextHelper` | `public class GameTextHelper` | nested type |

## See Also

- [↑ core module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionSetCode](../ActionSetCode)
- [same namespace AgentAttackType](../AgentAttackType)
- [same namespace AgentControllerType](../AgentControllerType)
- [same namespace AgentData](../AgentData)
