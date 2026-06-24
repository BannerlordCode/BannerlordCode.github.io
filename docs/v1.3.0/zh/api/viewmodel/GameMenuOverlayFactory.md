<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GameMenuOverlayFactory`
- [← 本领域 / 返回 viewmodel](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
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

**用途 / Purpose:** 处理 `register provider` 相关逻辑。

### UnregisterProvider
`public static void UnregisterProvider(IGameMenuOverlayProvider provider)`

**用途 / Purpose:** 处理 `unregister provider` 相关逻辑。

### GetOverlay
`public static GameMenuOverlay GetOverlay(GameMenu.MenuOverlayType menuOverlayType)`

**用途 / Purpose:** 获取 `overlay` 的当前值。

## 使用示例

```csharp
GameMenuOverlayFactory.RegisterProvider(provider);
```

## 参见

- [完整类目录](../catalog)