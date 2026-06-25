---
title: "DumpIntegrityCampaignBehavior"
description: "DumpIntegrityCampaignBehavior 的自动生成类参考。"
---
# DumpIntegrityCampaignBehavior

**Namespace:** SandBox.CampaignBehaviors
**Module:** SandBox.CampaignBehaviors
**Type:** `public class DumpIntegrityCampaignBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `SandBox/CampaignBehaviors/DumpIntegrityCampaignBehavior.cs`

## 概述

`DumpIntegrityCampaignBehavior` 位于 `SandBox.CampaignBehaviors`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.CampaignBehaviors` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### SyncData
`public override void SyncData(IDataStore dataStore)`

**用途 / Purpose:** 将data同步到相关上下文或系统中。

```csharp
// 先通过子系统 API 拿到 DumpIntegrityCampaignBehavior 实例
DumpIntegrityCampaignBehavior dumpIntegrityCampaignBehavior = ...;
dumpIntegrityCampaignBehavior.SyncData(dataStore);
```

### RegisterEvents
`public override void RegisterEvents()`

**用途 / Purpose:** 将events注册到当前系统，以便后续监听或分发。

```csharp
// 先通过子系统 API 拿到 DumpIntegrityCampaignBehavior 实例
DumpIntegrityCampaignBehavior dumpIntegrityCampaignBehavior = ...;
dumpIntegrityCampaignBehavior.RegisterEvents();
```

### IsGameIntegrityAchieved
`public static bool IsGameIntegrityAchieved(out TextObject reason)`

**用途 / Purpose:** 判断当前对象是否处于 game integrity achieved 状态或条件。

```csharp
// 静态调用，不需要实例
DumpIntegrityCampaignBehavior.IsGameIntegrityAchieved(reason);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
DumpIntegrityCampaignBehavior dumpIntegrityCampaignBehavior = ...;
dumpIntegrityCampaignBehavior.SyncData(dataStore);
```

## 参见

- [本区域目录](../)