<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PlayerTownVisit`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PlayerTownVisit

**命名空间:** TaleWorlds.CampaignSystem.GameMenus.GameMenuInitializationHandlers
**模块:** TaleWorlds.CampaignSystem
**类型:** `public class PlayerTownVisit`
**领域:** campaign-ext

## 概述

`PlayerTownVisit` 位于 `TaleWorlds.CampaignSystem.GameMenus.GameMenuInitializationHandlers`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.GameMenus.GameMenuInitializationHandlers` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### game_menu_town_menu_on_init
`public static void game_menu_town_menu_on_init(MenuCallbackArgs args)`

**用途 / Purpose:** 处理 `game_menu_town_menu_on_init` 相关逻辑。

### game_menu_town_manage_town_on_consequence
`public static void game_menu_town_manage_town_on_consequence(MenuCallbackArgs args)`

**用途 / Purpose:** 处理 `game_menu_town_manage_town_on_consequence` 相关逻辑。

### game_menu_town_castle_manage_town_on_consequence
`public static void game_menu_town_castle_manage_town_on_consequence(MenuCallbackArgs args)`

**用途 / Purpose:** 处理 `game_menu_town_castle_manage_town_on_consequence` 相关逻辑。

### game_menu_castle_manage_castle_on_consequence
`public static void game_menu_castle_manage_castle_on_consequence(MenuCallbackArgs args)`

**用途 / Purpose:** 处理 `game_menu_castle_manage_castle_on_consequence` 相关逻辑。

## 使用示例

```csharp
// 先准备该类型需要的上下文，然后直接调用静态入口
PlayerTownVisit.game_menu_town_menu_on_init(args);
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
