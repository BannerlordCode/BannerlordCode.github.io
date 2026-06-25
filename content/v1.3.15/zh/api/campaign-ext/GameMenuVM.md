---
title: "GameMenuVM"
description: "GameMenuVM 的自动生成类参考。"
---
# GameMenuVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class GameMenuVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/GameMenuVM.cs`

## 概述

`GameMenuVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `MenuContext` | `public MenuContext MenuContext { get; }` |
| `IsNight` | `public bool IsNight { get; set; }` |
| `IsInSiegeMode` | `public bool IsInSiegeMode { get; set; }` |
| `IsEncounterMenu` | `public bool IsEncounterMenu { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |
| `ContextText` | `public string ContextText { get; set; }` |
| `ItemList` | `public MBBindingList<GameMenuItemVM> ItemList { get; set; }` |
| `ProgressItemList` | `public MBBindingList<GameMenuItemProgressVM> ProgressItemList { get; set; }` |
| `Background` | `public string Background { get; set; }` |
| `BackgroundCopy` | `public string BackgroundCopy { get; set; }` |
| `MenuId` | `public string MenuId { get; set; }` |
| `PlunderItems` | `public MBBindingList<GameMenuPlunderItemVM> PlunderItems { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 「values」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 GameMenuVM 实例
GameMenuVM gameMenuVM = ...;
gameMenuVM.RefreshValues();
```

### SetIdleMode
`public void SetIdleMode(bool isIdle)`

**用途 / Purpose:** 为 「idle mode」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 GameMenuVM 实例
GameMenuVM gameMenuVM = ...;
gameMenuVM.SetIdleMode(false);
```

### Refresh
`public void Refresh(bool forceUpdateItems)`

**用途 / Purpose:** 刷新当前对象的显示或缓存，使其与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 GameMenuVM 实例
GameMenuVM gameMenuVM = ...;
gameMenuVM.Refresh(false);
```

### OnFrameTick
`public void OnFrameTick()`

**用途 / Purpose:** 在 「frame tick」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 GameMenuVM 实例
GameMenuVM gameMenuVM = ...;
gameMenuVM.OnFrameTick();
```

### UpdateMenuContext
`public void UpdateMenuContext(MenuContext newMenuContext)`

**用途 / Purpose:** 重新计算并更新 「menu context」 的最新表示。

```csharp
// 先通过子系统 API 拿到 GameMenuVM 实例
GameMenuVM gameMenuVM = ...;
gameMenuVM.UpdateMenuContext(newMenuContext);
```

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 在 「finalize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 GameMenuVM 实例
GameMenuVM gameMenuVM = ...;
gameMenuVM.OnFinalize();
```

### AddHotKey
`public void AddHotKey(GameMenuOption.LeaveType leaveType, GameKey gameKey)`

**用途 / Purpose:** 将 「hot key」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 GameMenuVM 实例
GameMenuVM gameMenuVM = ...;
gameMenuVM.AddHotKey(leaveType, gameKey);
```

### ExecuteLink
`public void ExecuteLink(string link)`

**用途 / Purpose:** 执行 「link」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 GameMenuVM 实例
GameMenuVM gameMenuVM = ...;
gameMenuVM.ExecuteLink("example");
```

### Get
`public TItem Get()`

**用途 / Purpose:** 读取当前对象的值或状态并返回。

```csharp
// 先通过子系统 API 拿到 GameMenuVM 实例
GameMenuVM gameMenuVM = ...;
var result = gameMenuVM.Get();
```

### Release
`public void Release(TItem item)`

**用途 / Purpose:** 处理与 「release」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 GameMenuVM 实例
GameMenuVM gameMenuVM = ...;
gameMenuVM.Release(item);
```

### Compare
`public int Compare(GameMenuItemVM x, GameMenuItemVM y)`

**用途 / Purpose:** 将当前对象与另一实例比较大小/顺序。

```csharp
// 先通过子系统 API 拿到 GameMenuVM 实例
GameMenuVM gameMenuVM = ...;
var result = gameMenuVM.Compare(x, y);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
GameMenuVM gameMenuVM = ...;
gameMenuVM.RefreshValues();
```

## 参见

- [本区域目录](../)