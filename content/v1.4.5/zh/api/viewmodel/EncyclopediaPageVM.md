---
title: "EncyclopediaPageVM"
description: "EncyclopediaPageVM 的自动生成类参考。"
---
# EncyclopediaPageVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class EncyclopediaPageVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages/EncyclopediaPageVM.cs`

## 概述

`EncyclopediaPageVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsLoadingOver` | `public bool IsLoadingOver { get; set; }` |
| `IsBookmarked` | `public bool IsBookmarked { get; set; }` |
| `BookmarkHint` | `public HintViewModel BookmarkHint { get; set; }` |
| `Items` | `public virtual MBBindingList<EncyclopediaListItemVM> Items { get; set; }` |
| `FilterGroups` | `public virtual MBBindingList<EncyclopediaFilterGroupVM> FilterGroups { get; set; }` |
| `SortController` | `public virtual EncyclopediaListSortControllerVM SortController { get; set; }` |

## 主要方法

### GetName
`public virtual string GetName()`

**用途 / Purpose:** 读取并返回当前对象中 「name」 的结果。

```csharp
// 先通过子系统 API 拿到 EncyclopediaPageVM 实例
EncyclopediaPageVM encyclopediaPageVM = ...;
var result = encyclopediaPageVM.GetName();
```

### GetNavigationBarURL
`public virtual string GetNavigationBarURL()`

**用途 / Purpose:** 读取并返回当前对象中 「navigation bar u r l」 的结果。

```csharp
// 先通过子系统 API 拿到 EncyclopediaPageVM 实例
EncyclopediaPageVM encyclopediaPageVM = ...;
var result = encyclopediaPageVM.GetNavigationBarURL();
```

### Refresh
`public virtual void Refresh()`

**用途 / Purpose:** 刷新当前对象的显示或缓存，使其与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 EncyclopediaPageVM 实例
EncyclopediaPageVM encyclopediaPageVM = ...;
encyclopediaPageVM.Refresh();
```

### OnTick
`public virtual void OnTick()`

**用途 / Purpose:** 在 「tick」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 EncyclopediaPageVM 实例
EncyclopediaPageVM encyclopediaPageVM = ...;
encyclopediaPageVM.OnTick();
```

### ExecuteSwitchBookmarkedState
`public virtual void ExecuteSwitchBookmarkedState()`

**用途 / Purpose:** 执行 「switch bookmarked state」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 EncyclopediaPageVM 实例
EncyclopediaPageVM encyclopediaPageVM = ...;
encyclopediaPageVM.ExecuteSwitchBookmarkedState();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
EncyclopediaPageVM encyclopediaPageVM = ...;
encyclopediaPageVM.GetName();
```

## 参见

- [本区域目录](../)