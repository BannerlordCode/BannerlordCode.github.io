---
title: "GameKeyContext"
description: "GameKeyContext: a public class in TaleWorlds.InputSystem; 15 exposed members (7 methods, 6 properties, 0 fields). Canonical bucket system. Source: TaleWorlds.InputSystem/GameKeyContext.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GameKeyContext

**Namespace:** `TaleWorlds.InputSystem`
**Module:** `TaleWorlds.InputSystem`
**Type:** `public abstract class GameKeyContext`
**File:** `TaleWorlds.InputSystem/GameKeyContext.cs`
**Bucket:** `system` (rule:TaleWorlds.InputSystem)

## Overview

GameKeyContext lives in the TaleWorlds.InputSystem module, source file TaleWorlds.InputSystem/GameKeyContext.cs. It is a public class (abstract); the inheritance chain is GameKeyContext. It exposes 15 public/protected members: 7 methods, 6 properties, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GameKeyContext lands in canonical bucket `system` (matched rule `rule:TaleWorlds.InputSystem`), namespace `TaleWorlds.InputSystem`, inheritance chain GameKeyContext. The surface is method-led (methods 7/15, properties 6/15), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.InputSystem/GameKeyContext.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `GameKeyCategoryId` | `public string GameKeyCategoryId` | property |
| `Type` | `public GameKeyContext.GameKeyContextType Type` | property |
| `MBReadOnlyList` | `public MBReadOnlyList<GameKey>RegisteredGameKeys` | property |
| `RegisteredHotKeys` | `public Dictionary<string, HotKey>.ValueCollection RegisteredHotKeys` | property |
| `RegisteredGameAxisKeys` | `public Dictionary<string, GameAxisKey>.ValueCollection RegisteredGameAxisKeys` | property |
| `GameKeyContext` | `protected GameKeyContext(string id, int gameKeysCount, GameKeyContext.GameKeyContextType type = GameKeyContext.GameKeyContextType.Default)` | constructor |
| `RegisterHotKey` | `protected internal void RegisterHotKey(HotKey gameKey, bool addIfMissing = true)` | method |
| `RegisterGameKey` | `protected internal void RegisterGameKey(GameKey gameKey, bool addIfMissing = true)` | method |
| `RegisterGameAxisKey` | `protected internal void RegisterGameAxisKey(GameAxisKey gameKey, bool addIfMissing = true)` | method |
| `GetHotKey` | `public HotKey GetHotKey(string hotKeyId)` | method |
| `GetGameKey` | `public GameKey GetGameKey(int gameKeyId)` | method |
| `GetHotKeyId` | `public string GetHotKeyId(string hotKeyId)` | method |
| `GetHotKeyId` | `public string GetHotKeyId(int gameKeyId)` | method |
| `GameKeyContextType` | `public enum GameKeyContextType` | property |
| `GameKeyContextType` | `public enum GameKeyContextType` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace EmptyInputContext](../EmptyInputContext/)
- [same namespace GameAxisKey](../GameAxisKey/)
- [same namespace GameKey](../GameKey/)
- [same namespace HotKey](../HotKey/)
