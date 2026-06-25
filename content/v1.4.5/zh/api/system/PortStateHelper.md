---
title: "PortStateHelper"
description: "PortStateHelper 的自动生成类参考。"
---
# PortStateHelper

**Namespace:** Helpers
**Module:** Helpers
**Type:** `public static class PortStateHelper`
**Base:** 无
**File:** `bin/TaleWorlds.CampaignSystem/Helpers/PortStateHelper.cs`

## 概述

`PortStateHelper` 是一个帮助类，通常提供不依赖实例状态的静态辅助逻辑。

## 心智模型

把 `PortStateHelper` 当作一个 Helper 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OpenAsTrade
`public static void OpenAsTrade(Town town)`

**用途 / Purpose:** **用途 / Purpose:** 打开as trade对应的资源或界面。

```csharp
// 静态调用，不需要实例
PortStateHelper.OpenAsTrade(town);
```

### OpenAsLoot
`public static void OpenAsLoot(MBReadOnlyList<Ship> lootShips, Action onEndAction = null)`

**用途 / Purpose:** **用途 / Purpose:** 打开as loot对应的资源或界面。

```csharp
// 静态调用，不需要实例
PortStateHelper.OpenAsLoot(lootShips, null);
```

### OpenAsRestricted
`public static void OpenAsRestricted(Town town, TextObject restrictedReason)`

**用途 / Purpose:** **用途 / Purpose:** 打开as restricted对应的资源或界面。

```csharp
// 静态调用，不需要实例
PortStateHelper.OpenAsRestricted(town, restrictedReason);
```

### OpenAsStoryMode
`public static void OpenAsStoryMode(Settlement settlement)`

**用途 / Purpose:** **用途 / Purpose:** 打开as story mode对应的资源或界面。

```csharp
// 静态调用，不需要实例
PortStateHelper.OpenAsStoryMode(settlement);
```

### OpenAsManageFleet
`public static void OpenAsManageFleet(MBReadOnlyList<Ship> leftShips)`

**用途 / Purpose:** **用途 / Purpose:** 打开as manage fleet对应的资源或界面。

```csharp
// 静态调用，不需要实例
PortStateHelper.OpenAsManageFleet(leftShips);
```

### OpenAsManageOtherFleet
`public static void OpenAsManageOtherFleet(PartyBase other, Action onEndAction)`

**用途 / Purpose:** **用途 / Purpose:** 打开as manage other fleet对应的资源或界面。

```csharp
// 静态调用，不需要实例
PortStateHelper.OpenAsManageOtherFleet(other, onEndAction);
```

## 使用示例

```csharp
PortStateHelper.Initialize();
```

## 参见

- [本区域目录](../)