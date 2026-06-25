---
title: "VisualShipFactory"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `VisualShipFactory`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# VisualShipFactory

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** `public class VisualShipFactory`
**领域:** mission-ext

## 概述

`VisualShipFactory` 位于 `TaleWorlds.MountAndBlade`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### InitializeShipEntityCache
`public static void InitializeShipEntityCache(Scene scene)`

**用途 / Purpose:** 初始化 `ship entity cache` 的状态、资源或绑定。

### DeregisterVisualShipCache
`public static void DeregisterVisualShipCache()`

**用途 / Purpose:** 处理 `deregister visual ship cache` 相关逻辑。

### CreateVisualShip
`public static GameEntity CreateVisualShip(string shipPrefab, Scene scene, List<ShipVisualSlotInfo> upgrades, int shipSeed, float hitPointRatio, uint sailColor1 = 4294967295U, uint sailColor2 = 4294967295U, bool createPhysics = false)`

**用途 / Purpose:** 创建一个 `visual ship` 实例或对象。

### CreateVisualShipForCampaign
`public static GameEntity CreateVisualShipForCampaign(string shipPrefab, Scene scene, List<ShipVisualSlotInfo> upgrades, int shipSeed, string shipCustomSailPatternId, uint sailColor1 = 4294967295U, uint sailColor2 = 4294967295U)`

**用途 / Purpose:** 创建一个 `visual ship for campaign` 实例或对象。

### RefreshUpgrades
`public static void RefreshUpgrades(WeakGameEntity shipEntity, List<ShipVisualSlotInfo> upgrades)`

**用途 / Purpose:** 刷新 `upgrades` 的显示或缓存。

## 使用示例

```csharp
// 先准备该类型需要的上下文，然后直接调用静态入口
VisualShipFactory.InitializeShipEntityCache(scene);
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)
