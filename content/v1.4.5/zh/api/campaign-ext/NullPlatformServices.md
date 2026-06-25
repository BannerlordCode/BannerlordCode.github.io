---
title: "NullPlatformServices"
description: "NullPlatformServices 的自动生成类参考。"
---
# NullPlatformServices

**Namespace:** TaleWorlds.PlatformService
**Module:** TaleWorlds.PlatformService
**Type:** `public class NullPlatformServices : IPlatformServices`
**Base:** `IPlatformServices`
**File:** `bin/TaleWorlds.PlatformService/TaleWorlds.PlatformService/NullPlatformServices.cs`

## 概述

`NullPlatformServices` 位于 `TaleWorlds.PlatformService`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.PlatformService` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Tick
`public void Tick(float dt)`

**用途 / Purpose:** **用途 / Purpose:** 推进当前对象一帧/一个更新周期的状态。

```csharp
// 先通过子系统 API 拿到 NullPlatformServices 实例
NullPlatformServices nullPlatformServices = ...;
nullPlatformServices.Tick(0);
```

### ActivateFriendList
`public void ActivateFriendList()`

**用途 / Purpose:** **用途 / Purpose:** 激活friend list对应的资源、状态或功能。

```csharp
// 先通过子系统 API 拿到 NullPlatformServices 实例
NullPlatformServices nullPlatformServices = ...;
nullPlatformServices.ActivateFriendList();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
NullPlatformServices nullPlatformServices = ...;
nullPlatformServices.Tick(0);
```

## 参见

- [本区域目录](../)