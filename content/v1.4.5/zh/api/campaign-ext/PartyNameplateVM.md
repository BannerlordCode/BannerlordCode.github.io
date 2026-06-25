---
title: "PartyNameplateVM"
description: "PartyNameplateVM 的自动生成类参考。"
---
# PartyNameplateVM

**Namespace:** SandBox.ViewModelCollection.Nameplate
**Module:** SandBox.ViewModelCollection
**Type:** `public class PartyNameplateVM : NameplateVM`
**Base:** `NameplateVM`
**File:** `Modules.SandBox/SandBox.ViewModelCollection/SandBox.ViewModelCollection.Nameplate/PartyNameplateVM.cs`

## 概述

`PartyNameplateVM` 位于 `SandBox.ViewModelCollection.Nameplate`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.ViewModelCollection.Nameplate` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Party` | `public MobileParty Party { get; }` |
| `HeadPosition` | `public Vec2 HeadPosition { get; set; }` |
| `Count` | `public string Count { get; set; }` |
| `Prisoner` | `public string Prisoner { get; set; }` |
| `Quests` | `public MBBindingList<QuestMarkerVM> Quests { get; set; }` |
| `Wounded` | `public string Wounded { get; set; }` |
| `ExtraInfoText` | `public string ExtraInfoText { get; set; }` |
| `MovementSpeedText` | `public string MovementSpeedText { get; set; }` |
| `FullName` | `public string FullName { get; set; }` |
| `IsInArmy` | `public bool IsInArmy { get; set; }` |
| `IsInSettlement` | `public bool IsInSettlement { get; set; }` |
| `IsDisorganized` | `public bool IsDisorganized { get; set; }` |
| `IsCurrentlyAtSea` | `public bool IsCurrentlyAtSea { get; set; }` |
| `IsArmy` | `public bool IsArmy { get; set; }` |
| `IsBehind` | `public bool IsBehind { get; set; }` |
| `IsHigh` | `public bool IsHigh { get; set; }` |
| `ShouldShowFullName` | `public bool ShouldShowFullName { get; set; }` |
| `PartyBanner` | `public BannerImageIdentifierVM PartyBanner { get; set; }` |

## 主要方法

### InitializeWith
`public void InitializeWith(MobileParty party, Camera mapCamera)`

**用途 / Purpose:** 为 with 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 PartyNameplateVM 实例
PartyNameplateVM partyNameplateVM = ...;
partyNameplateVM.InitializeWith(party, mapCamera);
```

### Clear
`public virtual void Clear()`

**用途 / Purpose:** 清空当前对象中的内容。

```csharp
// 先通过子系统 API 拿到 PartyNameplateVM 实例
PartyNameplateVM partyNameplateVM = ...;
partyNameplateVM.Clear();
```

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 PartyNameplateVM 实例
PartyNameplateVM partyNameplateVM = ...;
partyNameplateVM.RefreshValues();
```

### RegisterEvents
`public void RegisterEvents()`

**用途 / Purpose:** 将events注册到当前系统，以便后续监听或分发。

```csharp
// 先通过子系统 API 拿到 PartyNameplateVM 实例
PartyNameplateVM partyNameplateVM = ...;
partyNameplateVM.RegisterEvents();
```

### UnregisterEvents
`public void UnregisterEvents()`

**用途 / Purpose:** 从当前系统中注销events。

```csharp
// 先通过子系统 API 拿到 PartyNameplateVM 实例
PartyNameplateVM partyNameplateVM = ...;
partyNameplateVM.UnregisterEvents();
```

### RefreshDynamicProperties
`public override void RefreshDynamicProperties(bool forceUpdate)`

**用途 / Purpose:** 使 dynamic properties 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 PartyNameplateVM 实例
PartyNameplateVM partyNameplateVM = ...;
partyNameplateVM.RefreshDynamicProperties(false);
```

### RefreshPosition
`public override void RefreshPosition()`

**用途 / Purpose:** 使 position 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 PartyNameplateVM 实例
PartyNameplateVM partyNameplateVM = ...;
partyNameplateVM.RefreshPosition();
```

### RefreshTutorialStatus
`public override void RefreshTutorialStatus(string newTutorialHighlightElementID)`

**用途 / Purpose:** 使 tutorial status 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 PartyNameplateVM 实例
PartyNameplateVM partyNameplateVM = ...;
partyNameplateVM.RefreshTutorialStatus("example");
```

### DetermineIsVisibleOnMap
`public void DetermineIsVisibleOnMap()`

**用途 / Purpose:** 根据当前状态判定is visible on map的结果。

```csharp
// 先通过子系统 API 拿到 PartyNameplateVM 实例
PartyNameplateVM partyNameplateVM = ...;
partyNameplateVM.DetermineIsVisibleOnMap();
```

### RefreshBinding
`public virtual void RefreshBinding()`

**用途 / Purpose:** 使 binding 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 PartyNameplateVM 实例
PartyNameplateVM partyNameplateVM = ...;
partyNameplateVM.RefreshBinding();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
PartyNameplateVM partyNameplateVM = ...;
partyNameplateVM.InitializeWith(party, mapCamera);
```

## 参见

- [本区域目录](../)