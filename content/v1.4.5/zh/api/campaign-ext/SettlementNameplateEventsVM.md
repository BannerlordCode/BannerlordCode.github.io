---
title: "SettlementNameplateEventsVM"
description: "SettlementNameplateEventsVM 的自动生成类参考。"
---
# SettlementNameplateEventsVM

**Namespace:** SandBox.ViewModelCollection.Nameplate
**Module:** SandBox.ViewModelCollection
**Type:** `public class SettlementNameplateEventsVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.SandBox/SandBox.ViewModelCollection/SandBox.ViewModelCollection.Nameplate/SettlementNameplateEventsVM.cs`

## 概述

`SettlementNameplateEventsVM` 位于 `SandBox.ViewModelCollection.Nameplate`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.ViewModelCollection.Nameplate` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsEventsRegistered` | `public bool IsEventsRegistered { get; }` |
| `TrackQuests` | `public MBBindingList<QuestMarkerVM> TrackQuests { get; set; }` |
| `EventsList` | `public MBBindingList<SettlementNameplateEventItemVM> EventsList { get; set; }` |

## 主要方法

### Tick
`public void Tick()`

**用途 / Purpose:** 推进当前对象一帧/一个更新周期的状态。

```csharp
// 先通过子系统 API 拿到 SettlementNameplateEventsVM 实例
SettlementNameplateEventsVM settlementNameplateEventsVM = ...;
settlementNameplateEventsVM.Tick();
```

### RegisterEvents
`public void RegisterEvents()`

**用途 / Purpose:** 将「events」注册到当前系统，以便后续监听或分发。

```csharp
// 先通过子系统 API 拿到 SettlementNameplateEventsVM 实例
SettlementNameplateEventsVM settlementNameplateEventsVM = ...;
settlementNameplateEventsVM.RegisterEvents();
```

### UnloadEvents
`public void UnloadEvents()`

**用途 / Purpose:** 处理与 「unload events」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 SettlementNameplateEventsVM 实例
SettlementNameplateEventsVM settlementNameplateEventsVM = ...;
settlementNameplateEventsVM.UnloadEvents();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
SettlementNameplateEventsVM settlementNameplateEventsVM = ...;
settlementNameplateEventsVM.Tick();
```

## 参见

- [本区域目录](../)