---
title: "PartyNameplateVM"
description: "PartyNameplateVM 的自动生成类参考。"
---
# PartyNameplateVM

**Namespace:** SandBox.ViewModelCollection.Nameplate
**Module:** SandBox.ViewModelCollection
**Type:** `public class PartyNameplateVM : NameplateVM`
**Base:** `NameplateVM`
**File:** `SandBox.ViewModelCollection/Nameplate/PartyNameplateVM.cs`

## 概述

`PartyNameplateVM` 位于 `SandBox.ViewModelCollection.Nameplate`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.ViewModelCollection.Nameplate` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `GetIsMainParty` | `public bool GetIsMainParty { get; }` |
| `Party` | `public MobileParty Party { get; }` |
| `HeadPosition` | `public Vec2 HeadPosition { get; set; }` |
| `Count` | `public string Count { get; set; }` |
| `Prisoner` | `public string Prisoner { get; set; }` |
| `Quests` | `public MBBindingList<QuestMarkerVM> Quests { get; set; }` |
| `Wounded` | `public string Wounded { get; set; }` |
| `ExtraInfoText` | `public string ExtraInfoText { get; set; }` |
| `MovementSpeedText` | `public string MovementSpeedText { get; set; }` |
| `FullName` | `public string FullName { get; set; }` |
| `IsMainParty` | `public bool IsMainParty { get; set; }` |
| `IsInArmy` | `public bool IsInArmy { get; set; }` |
| `IsInSettlement` | `public bool IsInSettlement { get; set; }` |
| `IsDisorganized` | `public bool IsDisorganized { get; set; }` |
| `IsCurrentlyAtSea` | `public bool IsCurrentlyAtSea { get; set; }` |
| `IsArmy` | `public bool IsArmy { get; set; }` |
| `IsBehind` | `public bool IsBehind { get; set; }` |
| `IsHigh` | `public bool IsHigh { get; set; }` |
| `IsPrisoner` | `public bool IsPrisoner { get; set; }` |
| `ShouldShowFullName` | `public bool ShouldShowFullName { get; set; }` |
| `MainHeroVisual` | `public CharacterImageIdentifierVM MainHeroVisual { get; set; }` |
| `PartyBanner` | `public BannerImageIdentifierVM PartyBanner { get; set; }` |

## 主要方法

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 在 finalize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 PartyNameplateVM 实例
PartyNameplateVM partyNameplateVM = ...;
partyNameplateVM.OnFinalize();
```

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 PartyNameplateVM 实例
PartyNameplateVM partyNameplateVM = ...;
partyNameplateVM.RefreshValues();
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

### OnPlayerCharacterChanged
`public void OnPlayerCharacterChanged(Hero newPlayer)`

**用途 / Purpose:** 在 player character changed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 PartyNameplateVM 实例
PartyNameplateVM partyNameplateVM = ...;
partyNameplateVM.OnPlayerCharacterChanged(newPlayer);
```

### RefreshBinding
`public void RefreshBinding()`

**用途 / Purpose:** 使 binding 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 PartyNameplateVM 实例
PartyNameplateVM partyNameplateVM = ...;
partyNameplateVM.RefreshBinding();
```

### ExecuteSetCameraPosition
`public void ExecuteSetCameraPosition()`

**用途 / Purpose:** 执行 set camera position 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 PartyNameplateVM 实例
PartyNameplateVM partyNameplateVM = ...;
partyNameplateVM.ExecuteSetCameraPosition();
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

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
PartyNameplateVM partyNameplateVM = ...;
partyNameplateVM.OnFinalize();
```

## 参见

- [本区域目录](../)