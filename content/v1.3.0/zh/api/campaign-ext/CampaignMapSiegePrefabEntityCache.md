---
title: "CampaignMapSiegePrefabEntityCache"
description: "CampaignMapSiegePrefabEntityCache 的自动生成类参考。"
---
# CampaignMapSiegePrefabEntityCache

**Namespace:** SandBox
**Module:** SandBox
**Type:** `public class CampaignMapSiegePrefabEntityCache : ScriptComponentBehavior`
**Base:** `ScriptComponentBehavior`
**File:** `SandBox/CampaignMapSiegePrefabEntityCache.cs`

## 概述

`CampaignMapSiegePrefabEntityCache` 位于 `SandBox`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetLaunchEntitialFrameForSiegeEngine
`public MatrixFrame GetLaunchEntitialFrameForSiegeEngine(SiegeEngineType type, BattleSideEnum side)`

**用途 / Purpose:** 读取并返回当前对象中 launch entitial frame for siege engine 的结果。

```csharp
// 先通过子系统 API 拿到 CampaignMapSiegePrefabEntityCache 实例
CampaignMapSiegePrefabEntityCache campaignMapSiegePrefabEntityCache = ...;
var result = campaignMapSiegePrefabEntityCache.GetLaunchEntitialFrameForSiegeEngine(type, side);
```

### GetScaleForSiegeEngine
`public Vec3 GetScaleForSiegeEngine(SiegeEngineType type, BattleSideEnum side)`

**用途 / Purpose:** 读取并返回当前对象中 scale for siege engine 的结果。

```csharp
// 先通过子系统 API 拿到 CampaignMapSiegePrefabEntityCache 实例
CampaignMapSiegePrefabEntityCache campaignMapSiegePrefabEntityCache = ...;
var result = campaignMapSiegePrefabEntityCache.GetScaleForSiegeEngine(type, side);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
CampaignMapSiegePrefabEntityCache campaignMapSiegePrefabEntityCache = ...;
campaignMapSiegePrefabEntityCache.GetLaunchEntitialFrameForSiegeEngine(type, side);
```

## 参见

- [本区域目录](../)