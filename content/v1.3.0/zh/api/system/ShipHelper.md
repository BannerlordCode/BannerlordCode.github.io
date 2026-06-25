---
title: "ShipHelper"
description: "ShipHelper 的自动生成类参考。"
---
# ShipHelper

**Namespace:** Helpers
**Module:** Helpers
**Type:** `public static class ShipHelper`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/Helpers/ShipHelper.cs`

## 概述

`ShipHelper` 是一个帮助类，通常提供不依赖实例状态的静态辅助逻辑。

## 心智模型

把 `ShipHelper` 当作一个 Helper 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetShipBanner
`public static Banner GetShipBanner(IShipOrigin shipOrigin, IAgent captain = null)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 ship banner 的结果。

```csharp
// 静态调用，不需要实例
ShipHelper.GetShipBanner(shipOrigin, null);
```

### GetSailColors
`public static ValueTuple<uint, uint> GetSailColors(IShipOrigin shipOrigin, IAgent captain = null)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 sail colors 的结果。

```csharp
// 静态调用，不需要实例
ShipHelper.GetSailColors(shipOrigin, null);
```

### GetShipBanner
`public static Banner GetShipBanner(PartyBase party = null)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 ship banner 的结果。

```csharp
// 静态调用，不需要实例
ShipHelper.GetShipBanner(null);
```

### GetSailColors
`public static ValueTuple<uint, uint> GetSailColors(PartyBase party = null)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 sail colors 的结果。

```csharp
// 静态调用，不需要实例
ShipHelper.GetSailColors(null);
```

## 使用示例

```csharp
ShipHelper.Initialize();
```

## 参见

- [本区域目录](../)