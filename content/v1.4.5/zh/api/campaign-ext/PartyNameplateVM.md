---
title: "PartyNameplateVM"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PartyNameplateVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# PartyNameplateVM

**Namespace:** SandBox.ViewModelCollection.Nameplate
**Module:** SandBox.ViewModelCollection
**Type:** `public class PartyNameplateVM : NameplateVM`
**Base:** `NameplateVM`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.ViewModelCollection/SandBox.ViewModelCollection.Nameplate/PartyNameplateVM.cs`

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

**用途 / Purpose:** 初始化 `with` 的状态、资源或绑定。

### Clear
`public virtual void Clear()`

**用途 / Purpose:** 处理 `clear` 相关逻辑。

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### RegisterEvents
`public void RegisterEvents()`

**用途 / Purpose:** 处理 `register events` 相关逻辑。

### UnregisterEvents
`public void UnregisterEvents()`

**用途 / Purpose:** 处理 `unregister events` 相关逻辑。

### RefreshDynamicProperties
`public override void RefreshDynamicProperties(bool forceUpdate)`

**用途 / Purpose:** 刷新 `dynamic properties` 的显示或缓存。

### RefreshPosition
`public override void RefreshPosition()`

**用途 / Purpose:** 刷新 `position` 的显示或缓存。

### RefreshTutorialStatus
`public override void RefreshTutorialStatus(string newTutorialHighlightElementID)`

**用途 / Purpose:** 刷新 `tutorial status` 的显示或缓存。

### DetermineIsVisibleOnMap
`public void DetermineIsVisibleOnMap()`

**用途 / Purpose:** 处理 `determine is visible on map` 相关逻辑。

### RefreshBinding
`public virtual void RefreshBinding()`

**用途 / Purpose:** 刷新 `binding` 的显示或缓存。

## 使用示例

```csharp
var value = new PartyNameplateVM();
value.InitializeWith(party, mapCamera);
```

## 参见

- [完整类目录](../catalog)