---
title: "GameMenus 家族"
description: "战役菜单注册、选项条件、后果回调以及向 Action 或 Mission 的交接。"
---

# GameMenus 家族

**一句话职责：** Game-menu API 定义战役页面与选项：条件读取状态，后果调用正确的 Action、Quest 或 Mission 转换。

## 心智模型与阅读顺序

先读 [GameMenu](../GameMenu)、[GameMenuOption](../GameMenuOption) 与 [GameMenuManager](../GameMenuManager)，再读 [GameMenuCallbackManager](../GameMenuCallbackManager) 和 [EncounterGameMenuModel](../EncounterGameMenuModel)。

## 何时使用

战役导航和玩家选择使用 GameMenu；条件保持纯函数，世界变更放进 Action 或 consequence。不要用菜单替代长寿命 Quest 或每帧 Mission UI。

## 依赖关系

- 上游：Campaign Behaviors、Settlement/Party 状态与 `CampaignGameStarter`。
- 下游：[Actions](../actions)、[Quests](../quests)、Dialogs 与 Mission 交接。
- 同级：[Dialogs](../dialogs)、[MapEvents](../mapevents)、[Models](../models)。

## 最小真实入口

```csharp
starter.AddGameMenu("my_menu", "My menu", init, GameOverlays.MenuOverlay, 0f, null);
```

使用当前版本真实重载，并在战役启动阶段只注册一次。

## 风险边界

条件可能重复评估，后果可能在读档后再次访问。对一次性 Action 做幂等保护，重新验证参与者，并在 Mission 结束后返回有效菜单。

## 导航

- [上级：Campaign-Ext](..)
- [同级：Dialogs](../dialogs) · [Actions](../actions)
- [相关：MapEvents](../mapevents)
