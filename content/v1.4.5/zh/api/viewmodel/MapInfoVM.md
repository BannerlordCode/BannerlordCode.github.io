---
title: "MapInfoVM"
description: "MapInfoVM 的自动生成类参考。"
---
# MapInfoVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class MapInfoVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar/MapInfoVM.cs`

## 概述

`MapInfoVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsInfoBarExtended` | `public bool IsInfoBarExtended { get; set; }` |
| `IsInfoBarEnabled` | `public bool IsInfoBarEnabled { get; set; }` |
| `ExtendHint` | `public HintViewModel ExtendHint { get; set; }` |
| `PrimaryInfoItems` | `public MBBindingList<MapInfoItemVM> PrimaryInfoItems { get; set; }` |
| `SecondaryInfoItems` | `public MBBindingList<MapInfoItemVM> SecondaryInfoItems { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 「values」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MapInfoVM 实例
MapInfoVM mapInfoVM = ...;
mapInfoVM.RefreshValues();
```

### Tick
`public void Tick()`

**用途 / Purpose:** 推进当前对象一帧/一个更新周期的状态。

```csharp
// 先通过子系统 API 拿到 MapInfoVM 实例
MapInfoVM mapInfoVM = ...;
mapInfoVM.Tick();
```

### Refresh
`public void Refresh()`

**用途 / Purpose:** 刷新当前对象的显示或缓存，使其与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MapInfoVM 实例
MapInfoVM mapInfoVM = ...;
mapInfoVM.Refresh();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MapInfoVM mapInfoVM = ...;
mapInfoVM.RefreshValues();
```

## 参见

- [本区域目录](../)