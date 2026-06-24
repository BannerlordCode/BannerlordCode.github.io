<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `AchievementManager`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
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

**用途 / Purpose:** 设置 `stat` 的值或状态。

### GetStat
`public static async Task<int> GetStat(string name)`

**用途 / Purpose:** 获取 `stat` 的当前值。

### GetStats
`public static async Task<int > GetStats(string names)`

**用途 / Purpose:** 获取 `stats` 的当前值。

## 使用示例

```csharp
var manager = AchievementManager.Current;
```

## 参见

- [完整类目录](../catalog)