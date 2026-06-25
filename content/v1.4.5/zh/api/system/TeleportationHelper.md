---
title: "TeleportationHelper"
description: "TeleportationHelper 的自动生成类参考。"
---
# TeleportationHelper

**Namespace:** Helpers
**Module:** Helpers
**Type:** `public static class TeleportationHelper`
**Base:** 无
**File:** `bin/TaleWorlds.CampaignSystem/Helpers/TeleportationHelper.cs`

## 概述

`TeleportationHelper` 是一个帮助类，通常提供不依赖实例状态的静态辅助逻辑。

## 心智模型

把 `TeleportationHelper` 当作一个 Helper 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetHoursLeftForTeleportingHeroToReachItsDestination
`public static float GetHoursLeftForTeleportingHeroToReachItsDestination(Hero teleportingHero)`

**用途 / Purpose:** 读取并返回当前对象中 hours left for teleporting hero to reach its destination 的结果。

```csharp
// 静态调用，不需要实例
TeleportationHelper.GetHoursLeftForTeleportingHeroToReachItsDestination(teleportingHero);
```

## 使用示例

```csharp
TeleportationHelper.Initialize();
```

## 参见

- [本区域目录](../)