<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BarterHelper`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BarterHelper

**Namespace:** Helpers
**Module:** Helpers
**Type:** `public static class BarterHelper`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/Helpers/BarterHelper.cs`

## 概述

`BarterHelper` 是一个帮助类，通常提供不依赖实例状态的静态辅助逻辑。

## 心智模型

把 `BarterHelper` 当作一个 Helper 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetAutoBalanceBarterablesAdd
`public static IEnumerable<ValueTuple<Barterable, int>> GetAutoBalanceBarterablesAdd(BarterData barterData, IFaction factionToBalanceFor, IFaction offerer, Hero offererHero, float fulfillRatio = 1f)`

**用途 / Purpose:** 获取 `auto balance barterables add` 的当前值。

### GetAutoBalanceBarterablesToRemove
`public static IEnumerable<ValueTuple<Barterable, int>> GetAutoBalanceBarterablesToRemove(BarterData barterData, IFaction factionToBalanceFor, IFaction offerer, Hero offererHero)`

**用途 / Purpose:** 获取 `auto balance barterables to remove` 的当前值。

## 使用示例

```csharp
BarterHelper.Initialize();
```

## 参见

- [完整类目录](../catalog)