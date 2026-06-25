---
title: "GameMenuOverlayFactory"
description: "GameMenuOverlayFactory 的自动生成类参考。"
---
# GameMenuOverlayFactory

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class GameMenuOverlayFactory`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/Overlay/GameMenuOverlayFactory.cs`

## 概述

`GameMenuOverlayFactory` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### RegisterProvider
`public static void RegisterProvider(IGameMenuOverlayProvider provider)`

**用途 / Purpose:** 将「provider」注册到当前系统，以便后续监听或分发。

```csharp
// 静态调用，不需要实例
GameMenuOverlayFactory.RegisterProvider(provider);
```

### UnregisterProvider
`public static void UnregisterProvider(IGameMenuOverlayProvider provider)`

**用途 / Purpose:** 从当前系统中注销「provider」。

```csharp
// 静态调用，不需要实例
GameMenuOverlayFactory.UnregisterProvider(provider);
```

### GetOverlay
`public static GameMenuOverlay GetOverlay(GameMenu.MenuOverlayType menuOverlayType)`

**用途 / Purpose:** 读取并返回当前对象中 「overlay」 的结果。

```csharp
// 静态调用，不需要实例
GameMenuOverlayFactory.GetOverlay(menuOverlayType);
```

## 使用示例

```csharp
GameMenuOverlayFactory.RegisterProvider(provider);
```

## 参见

- [本区域目录](../)