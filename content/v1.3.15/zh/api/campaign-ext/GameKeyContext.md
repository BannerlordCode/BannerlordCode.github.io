---
title: "GameKeyContext"
description: "GameKeyContext 的自动生成类参考。"
---
# GameKeyContext

**Namespace:** TaleWorlds.InputSystem
**Module:** TaleWorlds.InputSystem
**Type:** `public abstract class GameKeyContext`
**Base:** 无
**File:** `TaleWorlds.InputSystem/GameKeyContext.cs`

## 概述

`GameKeyContext` 位于 `TaleWorlds.InputSystem`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.InputSystem` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `GameKeyCategoryId` | `public string GameKeyCategoryId { get; }` |
| `Type` | `public GameKeyContext.GameKeyContextType Type { get; }` |
| `RegisteredGameKeys` | `public MBReadOnlyList<GameKey> RegisteredGameKeys { get; }` |
| `RegisteredHotKeys` | `public Dictionary<string, HotKey>.ValueCollection RegisteredHotKeys { get; }` |
| `RegisteredGameAxisKeys` | `public Dictionary<string, GameAxisKey>.ValueCollection RegisteredGameAxisKeys { get; }` |

## 主要方法

### GetHotKey
`public HotKey GetHotKey(string hotKeyId)`

**用途 / Purpose:** 读取并返回当前对象中 「hot key」 的结果。

```csharp
// 先通过子系统 API 拿到 GameKeyContext 实例
GameKeyContext gameKeyContext = ...;
var result = gameKeyContext.GetHotKey("example");
```

### GetGameKey
`public GameKey GetGameKey(int gameKeyId)`

**用途 / Purpose:** 读取并返回当前对象中 「game key」 的结果。

```csharp
// 先通过子系统 API 拿到 GameKeyContext 实例
GameKeyContext gameKeyContext = ...;
var result = gameKeyContext.GetGameKey(0);
```

### GetHotKeyId
`public string GetHotKeyId(string hotKeyId)`

**用途 / Purpose:** 读取并返回当前对象中 「hot key id」 的结果。

```csharp
// 先通过子系统 API 拿到 GameKeyContext 实例
GameKeyContext gameKeyContext = ...;
var result = gameKeyContext.GetHotKeyId("example");
```

### GetHotKeyId
`public string GetHotKeyId(int gameKeyId)`

**用途 / Purpose:** 读取并返回当前对象中 「hot key id」 的结果。

```csharp
// 先通过子系统 API 拿到 GameKeyContext 实例
GameKeyContext gameKeyContext = ...;
var result = gameKeyContext.GetHotKeyId(0);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
GameKeyContext instance = ...;
```

## 参见

- [本区域目录](../)