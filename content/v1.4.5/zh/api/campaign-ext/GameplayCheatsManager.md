---
title: "GameplayCheatsManager"
description: "GameplayCheatsManager 的自动生成类参考。"
---
# GameplayCheatsManager

**Namespace:** SandBox
**Module:** SandBox
**Type:** `public static class GameplayCheatsManager`
**Base:** 无
**File:** `Modules.SandBox/SandBox/Sandbox/GameplayCheatsManager.cs`

## 概述

`GameplayCheatsManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `GameplayCheatsManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetMapCheatList
`public static IEnumerable<GameplayCheatBase> GetMapCheatList()`

**用途 / Purpose:** 读取并返回当前对象中 「map cheat list」 的结果。

```csharp
// 静态调用，不需要实例
GameplayCheatsManager.GetMapCheatList();
```

### GetMissionCheatList
`public static IEnumerable<GameplayCheatBase> GetMissionCheatList()`

**用途 / Purpose:** 读取并返回当前对象中 「mission cheat list」 的结果。

```csharp
// 静态调用，不需要实例
GameplayCheatsManager.GetMissionCheatList();
```

## 使用示例

```csharp
var manager = GameplayCheatsManager.Current;
```

## 参见

- [本区域目录](../)