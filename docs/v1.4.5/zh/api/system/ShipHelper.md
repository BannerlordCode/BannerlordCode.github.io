<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ShipHelper`
- [← 本领域 / 返回 system](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ShipHelper

**Namespace:** Helpers
**Module:** Helpers
**Type:** `public static class ShipHelper`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/Helpers/ShipHelper.cs`

## 概述

`ShipHelper` 是一个帮助类，通常提供不依赖实例状态的静态辅助逻辑。

## 心智模型

把 `ShipHelper` 当作一个 Helper 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetShipBanner
`public static Banner GetShipBanner(IShipOrigin shipOrigin, IAgent captain = null)`

**用途 / Purpose:** 获取 `ship banner` 的当前值。

### GetShipBanner
`public static Banner GetShipBanner(PartyBase party = null)`

**用途 / Purpose:** 获取 `ship banner` 的当前值。

### GetOrderedNavalRaidShipsOfPlayerParty
`public static List<Ship> GetOrderedNavalRaidShipsOfPlayerParty()`

**用途 / Purpose:** 获取 `ordered naval raid ships of player party` 的当前值。

## 使用示例

```csharp
ShipHelper.Initialize();
```

## 参见

- [完整类目录](../catalog)