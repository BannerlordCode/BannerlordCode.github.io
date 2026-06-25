---
title: "SteamPlatformServices"
description: "SteamPlatformServices 的自动生成类参考。"
---
# SteamPlatformServices

**Namespace:** TaleWorlds.PlatformService.Steam
**Module:** TaleWorlds.PlatformService
**Type:** `public class SteamPlatformServices : IPlatformServices`
**Base:** `IPlatformServices`
**File:** `TaleWorlds.PlatformService.Steam/SteamPlatformServices.cs`

## 概述

`SteamPlatformServices` 位于 `TaleWorlds.PlatformService.Steam`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.PlatformService.Steam` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### ClearAvatarCache
`public void ClearAvatarCache()`

**用途 / Purpose:** 清空当前对象中的avatar cache。

```csharp
// 先通过子系统 API 拿到 SteamPlatformServices 实例
SteamPlatformServices steamPlatformServices = ...;
steamPlatformServices.ClearAvatarCache();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
SteamPlatformServices steamPlatformServices = ...;
steamPlatformServices.ClearAvatarCache();
```

## 参见

- [本区域目录](../)