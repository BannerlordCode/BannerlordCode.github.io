---
title: "FactionManager"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `FactionManager`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# FactionManager

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class FactionManager`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/FactionManager.cs`

## 概述

`FactionManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `FactionManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `Instance` | `public static FactionManager Instance { get; }` |

## 主要方法

### DeclareWar
`public static void DeclareWar(IFaction faction1, IFaction faction2)`

**用途 / Purpose:** 处理 `declare war` 相关逻辑。

### SetNeutral
`public static void SetNeutral(IFaction faction1, IFaction faction2)`

**用途 / Purpose:** 设置 `neutral` 的值或状态。

### IsAtWarAgainstFaction
`public static bool IsAtWarAgainstFaction(IFaction faction1, IFaction faction2)`

**用途 / Purpose:** 处理 `is at war against faction` 相关逻辑。

### IsAtConstantWarAgainstFaction
`public static bool IsAtConstantWarAgainstFaction(IFaction faction1, IFaction faction2)`

**用途 / Purpose:** 处理 `is at constant war against faction` 相关逻辑。

### IsNeutralWithFaction
`public static bool IsNeutralWithFaction(IFaction faction1, IFaction faction2)`

**用途 / Purpose:** 处理 `is neutral with faction` 相关逻辑。

### GetRelationBetweenClans
`public static int GetRelationBetweenClans(Clan clan1, Clan clan2)`

**用途 / Purpose:** 获取 `relation between clans` 的当前值。

## 使用示例

```csharp
var manager = FactionManager.Current;
```

## 参见

- [完整类目录](../catalog)