---
title: "MBCampaignEvent"
description: "MBCampaignEvent 的自动生成类参考。"
---
# MBCampaignEvent

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class MBCampaignEvent`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/MBCampaignEvent.cs`

## 概述

`MBCampaignEvent` 位于 `TaleWorlds.CampaignSystem`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `TriggerPeriod` | `public CampaignTime TriggerPeriod { get; }` |
| `InitialWait` | `public CampaignTime InitialWait { get; }` |
| `isEventDeleted` | `public bool isEventDeleted { get; set; }` |

## 主要方法

### AddHandler
`public void AddHandler(MBCampaignEvent.CampaignEventDelegate gameEventDelegate)`

**用途 / Purpose:** 将 「handler」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 MBCampaignEvent 实例
MBCampaignEvent mBCampaignEvent = ...;
mBCampaignEvent.AddHandler(gameEventDelegate);
```

### RunHandlers
`public void RunHandlers(params object delegateParams)`

**用途 / Purpose:** 处理与 「run handlers」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 MBCampaignEvent 实例
MBCampaignEvent mBCampaignEvent = ...;
mBCampaignEvent.RunHandlers(delegateParams);
```

### Unregister
`public void Unregister(object instance)`

**用途 / Purpose:** 从当前系统注销当前对象。

```csharp
// 先通过子系统 API 拿到 MBCampaignEvent 实例
MBCampaignEvent mBCampaignEvent = ...;
mBCampaignEvent.Unregister(instance);
```

### CheckUpdate
`public void CheckUpdate()`

**用途 / Purpose:** 检查「update」在当前对象中是否成立。

```csharp
// 先通过子系统 API 拿到 MBCampaignEvent 实例
MBCampaignEvent mBCampaignEvent = ...;
mBCampaignEvent.CheckUpdate();
```

### DeletePeriodicEvent
`public void DeletePeriodicEvent()`

**用途 / Purpose:** 处理与 「delete periodic event」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 MBCampaignEvent 实例
MBCampaignEvent mBCampaignEvent = ...;
mBCampaignEvent.DeletePeriodicEvent();
```

### CampaignEventDelegate
`public delegate void CampaignEventDelegate(MBCampaignEvent campaignEvent, params object delegateParams)`

**用途 / Purpose:** 处理与 「campaign event delegate」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 MBCampaignEvent 实例
MBCampaignEvent mBCampaignEvent = ...;
mBCampaignEvent.CampaignEventDelegate(campaignEvent, delegateParams);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MBCampaignEvent mBCampaignEvent = ...;
mBCampaignEvent.AddHandler(gameEventDelegate);
```

## 参见

- [本区域目录](../)