---
title: "CustomGame"
description: "CustomGame 的自动生成类参考。"
---
# CustomGame

**Namespace:** TaleWorlds.MountAndBlade.CustomBattle
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CustomGame : GameType`
**Base:** `GameType`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle/CustomGame.cs`

## 概述

`CustomGame` 位于 `TaleWorlds.MountAndBlade.CustomBattle`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.CustomBattle` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `CustomBattleBannerEffects` | `public CustomBattleBannerEffects CustomBattleBannerEffects { get; }` |

## 主要方法

### OnDestroy
`public override void OnDestroy()`

**用途 / Purpose:** 在 destroy 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CustomGame 实例
CustomGame customGame = ...;
customGame.OnDestroy();
```

### OnStateChanged
`public override void OnStateChanged(GameState oldState)`

**用途 / Purpose:** 在 state changed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CustomGame 实例
CustomGame customGame = ...;
customGame.OnStateChanged(oldState);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
CustomGame customGame = ...;
customGame.OnDestroy();
```

## 参见

- [本区域目录](../)