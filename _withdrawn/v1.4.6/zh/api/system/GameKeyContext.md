---
title: "GameKeyContext"
description: "GameKeyContext：TaleWorlds.InputSystem 的 public 类；公开成员 15 个（方法 7、属性 6、字段 0）。canonical 桶 system。源文件 TaleWorlds.InputSystem/GameKeyContext.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GameKeyContext

**Namespace:** `TaleWorlds.InputSystem`
**Module:** `TaleWorlds.InputSystem`
**Type:** `public abstract class GameKeyContext`
**File:** `TaleWorlds.InputSystem/GameKeyContext.cs`
**Bucket:** `system` (rule:TaleWorlds.InputSystem)

## 概述

GameKeyContext 位于 TaleWorlds.InputSystem 模块，源文件 TaleWorlds.InputSystem/GameKeyContext.cs。它是一个 public 类（abstract），继承链为 GameKeyContext。public/protected 成员共 15 个：7 方法、6 属性、1 构造函数、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：GameKeyContext 落在 canonical 桶 `system`（命中规则 `rule:TaleWorlds.InputSystem`），命名空间 `TaleWorlds.InputSystem`，继承链 GameKeyContext。成员构成以方法为主（方法 7/15，属性 6/15），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.InputSystem/GameKeyContext.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GameKeyCategoryId` | `public string GameKeyCategoryId` | 属性 |
| `Type` | `public GameKeyContext.GameKeyContextType Type` | 属性 |
| `MBReadOnlyList` | `public MBReadOnlyList<GameKey>RegisteredGameKeys` | 属性 |
| `RegisteredHotKeys` | `public Dictionary<string, HotKey>.ValueCollection RegisteredHotKeys` | 属性 |
| `RegisteredGameAxisKeys` | `public Dictionary<string, GameAxisKey>.ValueCollection RegisteredGameAxisKeys` | 属性 |
| `GameKeyContext` | `protected GameKeyContext(string id, int gameKeysCount, GameKeyContext.GameKeyContextType type = GameKeyContext.GameKeyContextType.Default)` | 构造函数 |
| `RegisterHotKey` | `protected internal void RegisterHotKey(HotKey gameKey, bool addIfMissing = true)` | 方法 |
| `RegisterGameKey` | `protected internal void RegisterGameKey(GameKey gameKey, bool addIfMissing = true)` | 方法 |
| `RegisterGameAxisKey` | `protected internal void RegisterGameAxisKey(GameAxisKey gameKey, bool addIfMissing = true)` | 方法 |
| `GetHotKey` | `public HotKey GetHotKey(string hotKeyId)` | 方法 |
| `GetGameKey` | `public GameKey GetGameKey(int gameKeyId)` | 方法 |
| `GetHotKeyId` | `public string GetHotKeyId(string hotKeyId)` | 方法 |
| `GetHotKeyId` | `public string GetHotKeyId(int gameKeyId)` | 方法 |
| `GameKeyContextType` | `public enum GameKeyContextType` | 属性 |
| `GameKeyContextType` | `public enum GameKeyContextType` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 EmptyInputContext](../EmptyInputContext/)
- [同命名空间 GameAxisKey](../GameAxisKey/)
- [同命名空间 GameKey](../GameKey/)
- [同命名空间 HotKey](../HotKey/)
