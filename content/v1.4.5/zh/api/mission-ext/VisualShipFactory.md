---
title: "VisualShipFactory"
description: "VisualShipFactory 的自动生成类参考。"
---
# VisualShipFactory

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class VisualShipFactory`
**Base:** 无
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/VisualShipFactory.cs`

## 概述

`VisualShipFactory` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### InitializeShipEntityCache
`public static void InitializeShipEntityCache(Scene scene)`

**用途 / Purpose:** 为 「ship entity cache」 初始化必要的资源、状态或绑定。

```csharp
// 静态调用，不需要实例
VisualShipFactory.InitializeShipEntityCache(scene);
```

### DeregisterVisualShipCache
`public static void DeregisterVisualShipCache()`

**用途 / Purpose:** 处理与 「deregister visual ship cache」 相关的逻辑。

```csharp
// 静态调用，不需要实例
VisualShipFactory.DeregisterVisualShipCache();
```

### CreateVisualShip
`public static GameEntity CreateVisualShip(string shipPrefab, Scene scene, List<ShipVisualSlotInfo> upgrades, int shipSeed, float hitPointRatio, uint sailColor1 = uint.MaxValue, uint sailColor2 = uint.MaxValue, bool createPhysics = false)`

**用途 / Purpose:** 构建一个新的 「visual ship」 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
VisualShipFactory.CreateVisualShip("example", scene, upgrades, 0, 0, 0, 0, false);
```

### CreateVisualShipForCampaign
`public static GameEntity CreateVisualShipForCampaign(string shipPrefab, Scene scene, List<ShipVisualSlotInfo> upgrades, int shipSeed, string shipCustomSailPatternId, uint sailColor1 = uint.MaxValue, uint sailColor2 = uint.MaxValue)`

**用途 / Purpose:** 构建一个新的 「visual ship for campaign」 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
VisualShipFactory.CreateVisualShipForCampaign("example", scene, upgrades, 0, "example", 0, 0);
```

### RefreshUpgrades
`public static void RefreshUpgrades(WeakGameEntity shipEntity, List<ShipVisualSlotInfo> upgrades)`

**用途 / Purpose:** 使 「upgrades」 的显示或缓存与底层状态保持一致。

```csharp
// 静态调用，不需要实例
VisualShipFactory.RefreshUpgrades(shipEntity, upgrades);
```

## 使用示例

```csharp
VisualShipFactory.InitializeShipEntityCache(scene);
```

## 参见

- [本区域目录](../)