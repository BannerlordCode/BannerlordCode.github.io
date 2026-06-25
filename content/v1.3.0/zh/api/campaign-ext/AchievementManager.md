---
title: "AchievementManager"
description: "AchievementManager 的自动生成类参考。"
---
# AchievementManager

**Namespace:** TaleWorlds.AchievementSystem
**Module:** TaleWorlds.AchievementSystem
**Type:** `public class AchievementManager`
**Base:** 无
**File:** `TaleWorlds.AchievementSystem/AchievementManager.cs`

## 概述

`AchievementManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `AchievementManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `AchievementService` | `public static IAchievementService AchievementService { get; set; }` |

## 主要方法

### SetStat
`public static bool SetStat(string name, int value)`

**用途 / Purpose:** 为 stat 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
AchievementManager.SetStat("example", 0);
```

### GetStat
`public static async Task<int> GetStat(string name)`

**用途 / Purpose:** 读取并返回当前对象中 stat 的结果。

```csharp
// 静态调用，不需要实例
AchievementManager.GetStat("example");
```

### GetStats
`public static async Task<int > GetStats(string names)`

**用途 / Purpose:** 读取并返回当前对象中 stats 的结果。

```csharp
// 静态调用，不需要实例
AchievementManager.GetStats("example");
```

## 使用示例

```csharp
var manager = AchievementManager.Current;
```

## 参见

- [本区域目录](../)