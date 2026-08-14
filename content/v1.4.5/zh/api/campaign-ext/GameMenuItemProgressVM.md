---
title: "GameMenuItemProgressVM"
description: "GameMenuItemProgressVM 的自动生成类参考。"
---
# GameMenuItemProgressVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class GameMenuItemProgressVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/GameMenuItemProgressVM.cs`

## 概述

`GameMenuItemProgressVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Text` | `public string Text { get; set; }` |
| `ProgressText` | `public string ProgressText { get; set; }` |
| `Progress` | `public float Progress { get; set; }` |

## 主要方法

### InitializeWith
`public void InitializeWith(MenuContext context, int virtualIndex)`

**用途 / Purpose:** 为 with 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 GameMenuItemProgressVM 实例
GameMenuItemProgressVM gameMenuItemProgressVM = ...;
gameMenuItemProgressVM.InitializeWith(context, 0);
```

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 GameMenuItemProgressVM 实例
GameMenuItemProgressVM gameMenuItemProgressVM = ...;
gameMenuItemProgressVM.RefreshValues();
```

### OnTick
`public void OnTick()`

**用途 / Purpose:** 在 tick 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 GameMenuItemProgressVM 实例
GameMenuItemProgressVM gameMenuItemProgressVM = ...;
gameMenuItemProgressVM.OnTick();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
GameMenuItemProgressVM gameMenuItemProgressVM = ...;
gameMenuItemProgressVM.InitializeWith(context, 0);
```

## 参见

- [本区域目录](../)