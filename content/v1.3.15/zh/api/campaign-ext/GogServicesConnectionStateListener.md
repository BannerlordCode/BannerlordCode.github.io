---
title: "GogServicesConnectionStateListener"
description: "GogServicesConnectionStateListener 的自动生成类参考。"
---
# GogServicesConnectionStateListener

**Namespace:** TaleWorlds.PlatformService.GOG
**Module:** TaleWorlds.PlatformService
**Type:** `public class GogServicesConnectionStateListener : GlobalGogServicesConnectionStateListener`
**Base:** `GlobalGogServicesConnectionStateListener`
**File:** `TaleWorlds.PlatformService.GOG/GogServicesConnectionStateListener.cs`

## 概述

`GogServicesConnectionStateListener` 位于 `TaleWorlds.PlatformService.GOG`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.PlatformService.GOG` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### OnConnectionStateChange
`public override void OnConnectionStateChange(GogServicesConnectionState connected)`

**用途 / Purpose:** **用途 / Purpose:** 在 connection state change 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 GogServicesConnectionStateListener 实例
GogServicesConnectionStateListener gogServicesConnectionStateListener = ...;
gogServicesConnectionStateListener.OnConnectionStateChange(connected);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
GogServicesConnectionStateListener gogServicesConnectionStateListener = ...;
gogServicesConnectionStateListener.OnConnectionStateChange(connected);
```

## 参见

- [本区域目录](../)