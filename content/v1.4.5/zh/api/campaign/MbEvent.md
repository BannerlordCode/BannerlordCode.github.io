---
title: "MbEvent"
description: "MbEvent 的自动生成类参考。"
---
# MbEvent

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class MbEvent : IMbEvent`
**Base:** `IMbEvent`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/MbEvent.cs`

## 概述

`MbEvent` 位于 `TaleWorlds.CampaignSystem`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### AddNonSerializedListener
`public void AddNonSerializedListener(object owner, Action action)`

**用途 / Purpose:** 将 「non serialized listener」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 MbEvent 实例
MbEvent mbEvent = ...;
mbEvent.AddNonSerializedListener(owner, action);
```

### Invoke
`public void Invoke()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 MbEvent 实例
MbEvent mbEvent = ...;
mbEvent.Invoke();
```

### ClearListeners
`public void ClearListeners(object o)`

**用途 / Purpose:** 清空当前对象中的「listeners」。

```csharp
// 先通过子系统 API 拿到 MbEvent 实例
MbEvent mbEvent = ...;
mbEvent.ClearListeners(o);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MbEvent mbEvent = ...;
mbEvent.AddNonSerializedListener(owner, action);
```

## 参见

- [本区域目录](../)