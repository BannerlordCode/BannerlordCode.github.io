---
title: "AiHelper"
description: "AiHelper 的自动生成类参考。"
---
# AiHelper

**Namespace:** Helpers
**Module:** Helpers
**Type:** `public static class AiHelper`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/Helpers/AiHelper.cs`

## 概述

`AiHelper` 是一个帮助类，通常提供不依赖实例状态的静态辅助逻辑。

## 心智模型

把 `AiHelper` 当作一个 Helper 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetBestNavigationTypeAndAdjustedDistanceOfSettlementForMobileParty
`public static void GetBestNavigationTypeAndAdjustedDistanceOfSettlementForMobileParty(MobileParty mobileParty, Settlement settlement, bool isTargetingPort, out MobileParty.NavigationType bestNavigationType, out float bestNavigationDistance, out bool isFromPort)`

**用途 / Purpose:** 读取并返回当前对象中 best navigation type and adjusted distance of settlement for mobile party 的结果。

```csharp
// 静态调用，不需要实例
AiHelper.GetBestNavigationTypeAndAdjustedDistanceOfSettlementForMobileParty(mobileParty, settlement, false, bestNavigationType, bestNavigationDistance, isFromPort);
```

### GetBestNavigationTypeAndDistanceOfMobilePartyForMobileParty
`public static void GetBestNavigationTypeAndDistanceOfMobilePartyForMobileParty(MobileParty mobileParty, MobileParty toMobileParty, out MobileParty.NavigationType bestNavigationType, out float bestNavigationDistance)`

**用途 / Purpose:** 读取并返回当前对象中 best navigation type and distance of mobile party for mobile party 的结果。

```csharp
// 静态调用，不需要实例
AiHelper.GetBestNavigationTypeAndDistanceOfMobilePartyForMobileParty(mobileParty, toMobileParty, bestNavigationType, bestNavigationDistance);
```

## 使用示例

```csharp
AiHelper.Initialize();
```

## 参见

- [本区域目录](../)