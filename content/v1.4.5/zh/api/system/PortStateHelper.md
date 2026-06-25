---
title: "PortStateHelper"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PortStateHelper`
- [← 本领域 / 返回 system](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# PortStateHelper

**Namespace:** Helpers
**Module:** Helpers
**Type:** `public static class PortStateHelper`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/Helpers/PortStateHelper.cs`

## 概述

`PortStateHelper` 是一个帮助类，通常提供不依赖实例状态的静态辅助逻辑。

## 心智模型

把 `PortStateHelper` 当作一个 Helper 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OpenAsTrade
`public static void OpenAsTrade(Town town)`

**用途 / Purpose:** 处理 `open as trade` 相关逻辑。

### OpenAsLoot
`public static void OpenAsLoot(MBReadOnlyList<Ship> lootShips, Action onEndAction = null)`

**用途 / Purpose:** 处理 `open as loot` 相关逻辑。

### OpenAsRestricted
`public static void OpenAsRestricted(Town town, TextObject restrictedReason)`

**用途 / Purpose:** 处理 `open as restricted` 相关逻辑。

### OpenAsStoryMode
`public static void OpenAsStoryMode(Settlement settlement)`

**用途 / Purpose:** 处理 `open as story mode` 相关逻辑。

### OpenAsManageFleet
`public static void OpenAsManageFleet(MBReadOnlyList<Ship> leftShips)`

**用途 / Purpose:** 处理 `open as manage fleet` 相关逻辑。

### OpenAsManageOtherFleet
`public static void OpenAsManageOtherFleet(PartyBase other, Action onEndAction)`

**用途 / Purpose:** 处理 `open as manage other fleet` 相关逻辑。

## 使用示例

```csharp
PortStateHelper.Initialize();
```

## 参见

- [完整类目录](../catalog)