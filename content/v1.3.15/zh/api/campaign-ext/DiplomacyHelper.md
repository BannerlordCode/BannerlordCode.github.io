---
title: "DiplomacyHelper"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DiplomacyHelper`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DiplomacyHelper

**Namespace:** Helpers
**Module:** Helpers
**Type:** `public static class DiplomacyHelper`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/Helpers/DiplomacyHelper.cs`

## 概述

`DiplomacyHelper` 是一个帮助类，通常提供不依赖实例状态的静态辅助逻辑。

## 心智模型

把 `DiplomacyHelper` 当作一个 Helper 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### IsWarCausedByPlayer
`public static bool IsWarCausedByPlayer(IFaction faction1, IFaction faction2, DeclareWarAction.DeclareWarDetail declareWarDetail)`

**用途 / Purpose:** 处理 `is war caused by player` 相关逻辑。

### IsSameFactionAndNotEliminated
`public static bool IsSameFactionAndNotEliminated(IFaction faction1, IFaction faction2)`

**用途 / Purpose:** 处理 `is same faction and not eliminated` 相关逻辑。

### GetLogsForWar
`public static List<ValueTuple<LogEntry, IFaction, IFaction>> GetLogsForWar(StanceLink stance)`

**用途 / Purpose:** 获取 `logs for war` 的当前值。

### GetPrisonersOfWarTakenByFaction
`public static List<Hero> GetPrisonersOfWarTakenByFaction(IFaction capturerFaction, IFaction prisonerFaction)`

**用途 / Purpose:** 获取 `prisoners of war taken by faction` 的当前值。

### DidMainHeroSwornNotToAttackFaction
`public static bool DidMainHeroSwornNotToAttackFaction(IFaction faction, out TextObject explanation)`

**用途 / Purpose:** 处理 `did main hero sworn not to attack faction` 相关逻辑。

## 使用示例

```csharp
DiplomacyHelper.Initialize();
```

## 参见

- [完整类目录](../catalog)