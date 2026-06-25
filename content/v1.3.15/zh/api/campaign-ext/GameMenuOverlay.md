---
title: "GameMenuOverlay"
description: "GameMenuOverlay 的自动生成类参考。"
---
# GameMenuOverlay

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class GameMenuOverlay : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/Overlay/GameMenuOverlay.cs`

## 概述

`GameMenuOverlay` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsContextMenuEnabled` | `public bool IsContextMenuEnabled { get; set; }` |
| `IsInitializationOver` | `public bool IsInitializationOver { get; set; }` |
| `IsInfoBarExtended` | `public bool IsInfoBarExtended { get; set; }` |
| `ContextList` | `public MBBindingList<StringItemWithEnabledAndHintVM> ContextList { get; set; }` |
| `CurrentOverlayType` | `public int CurrentOverlayType { get; set; }` |
| `ExitInputKey` | `public InputKeyItemVM ExitInputKey { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 「values」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 GameMenuOverlay 实例
GameMenuOverlay gameMenuOverlay = ...;
gameMenuOverlay.RefreshValues();
```

### ExecuteOnOverlayClosed
`public virtual void ExecuteOnOverlayClosed()`

**用途 / Purpose:** 执行 「on overlay closed」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 GameMenuOverlay 实例
GameMenuOverlay gameMenuOverlay = ...;
gameMenuOverlay.ExecuteOnOverlayClosed();
```

### ExecuteOnOverlayOpened
`public virtual void ExecuteOnOverlayOpened()`

**用途 / Purpose:** 执行 「on overlay opened」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 GameMenuOverlay 实例
GameMenuOverlay gameMenuOverlay = ...;
gameMenuOverlay.ExecuteOnOverlayOpened();
```

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 在 「finalize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 GameMenuOverlay 实例
GameMenuOverlay gameMenuOverlay = ...;
gameMenuOverlay.OnFinalize();
```

### Refresh
`public virtual void Refresh()`

**用途 / Purpose:** 刷新当前对象的显示或缓存，使其与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 GameMenuOverlay 实例
GameMenuOverlay gameMenuOverlay = ...;
gameMenuOverlay.Refresh();
```

### UpdateOverlayType
`public virtual void UpdateOverlayType(GameMenu.MenuOverlayType newType)`

**用途 / Purpose:** 重新计算并更新 「overlay type」 的最新表示。

```csharp
// 先通过子系统 API 拿到 GameMenuOverlay 实例
GameMenuOverlay gameMenuOverlay = ...;
gameMenuOverlay.UpdateOverlayType(newType);
```

### OnFrameTick
`public virtual void OnFrameTick(float dt)`

**用途 / Purpose:** 在 「frame tick」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 GameMenuOverlay 实例
GameMenuOverlay gameMenuOverlay = ...;
gameMenuOverlay.OnFrameTick(0);
```

### HourlyTick
`public void HourlyTick()`

**用途 / Purpose:** 推进 「hourly」 状态的周期性更新。

```csharp
// 先通过子系统 API 拿到 GameMenuOverlay 实例
GameMenuOverlay gameMenuOverlay = ...;
gameMenuOverlay.HourlyTick();
```

### SetExitInputKey
`public void SetExitInputKey(HotKey hotKey)`

**用途 / Purpose:** 为 「exit input key」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 GameMenuOverlay 实例
GameMenuOverlay gameMenuOverlay = ...;
gameMenuOverlay.SetExitInputKey(hotKey);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
GameMenuOverlay gameMenuOverlay = ...;
gameMenuOverlay.RefreshValues();
```

## 参见

- [本区域目录](../)