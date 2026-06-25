---
title: "SettlementNameplateEventsVM"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SettlementNameplateEventsVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SettlementNameplateEventsVM

**Namespace:** SandBox.ViewModelCollection.Nameplate
**Module:** SandBox.ViewModelCollection
**Type:** `public class SettlementNameplateEventsVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.ViewModelCollection/SandBox.ViewModelCollection.Nameplate/SettlementNameplateEventsVM.cs`

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

**用途 / Purpose:** 处理 `tick` 相关逻辑。

### RegisterEvents
`public void RegisterEvents()`

**用途 / Purpose:** 处理 `register events` 相关逻辑。

### UnloadEvents
`public void UnloadEvents()`

**用途 / Purpose:** 处理 `unload events` 相关逻辑。

## 使用示例

```csharp
var value = new SettlementNameplateEventsVM();
value.Tick();
```

## 参见

- [完整类目录](../catalog)