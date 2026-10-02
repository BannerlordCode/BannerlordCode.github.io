---
title: "GameKeyContext"
description: "GameKeyContext: a public class in TaleWorlds.InputSystem; 15 exposed members (7 methods, 6 properties, 0 fields). Source: TaleWorlds.InputSystem/GameKeyContext.cs."
---
# GameKeyContext

**Namespace:** `TaleWorlds.InputSystem`
**Module:** `TaleWorlds.InputSystem`
**Type:** `public abstract class GameKeyContext`
**File:** `TaleWorlds.InputSystem/GameKeyContext.cs`

## Overview

GameKeyContext lives in the TaleWorlds.InputSystem module, source file TaleWorlds.InputSystem/GameKeyContext.cs. It is a public class (abstract); the inheritance chain is GameKeyContext. It exposes 15 public/protected members: 7 methods, 6 properties, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GameKeyContext is a top-level type in TaleWorlds.InputSystem, namespace matching the module directory; inheritance chain GameKeyContext. The surface is method-led (methods 7/15, properties 6/15), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.InputSystem/GameKeyContext.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
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

- [↑ inputsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace EmptyInputContext](../EmptyInputContext)
- [same namespace GameAxisKey](../GameAxisKey)
- [same namespace GameKey](../GameKey)
- [same namespace HotKey](../HotKey)
