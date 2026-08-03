---
title: "GameMenus 家族"
description: "战役菜单注册、选项条件、后果回调以及向 Action 或 Mission 的交接。"
---

# GameMenus 家族

**一句话职责：** Game-menu API 定义战役页面与选项：条件读取状态，后果调用正确的 Action、Quest 或 Mission 转换。

## 心智模型

### 阅读顺序

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

## GameMenu 条目

| Namespace | Type | Purpose | Timing |
| --- | --- | --- | --- |
| TaleWorlds.CampaignSystem.GameMenus | [GameMenu](../GameMenu) | 持有一个战役菜单的标识、文本、选项和 overlay 配置。 | CampaignGameStarter 注册后 |
| TaleWorlds.CampaignSystem.GameMenus | [GameMenuManager](../GameMenuManager) | 注册、查找和驱动当前战役菜单。 | Campaign 启动、进入/退出菜单 |
| TaleWorlds.CampaignSystem.GameMenus | [GameMenuOption](../GameMenuOption) | 保存选项文本、条件、类型和 consequence 回调。 | 菜单打开时反复评估 |
| TaleWorlds.CampaignSystem.GameMenus | [MenuCallbackArgs](../MenuCallbackArgs) | 向条件/结果回调提供参与者、菜单和可见性上下文。 | 每次条件或 consequence 调用 |
| TaleWorlds.CampaignSystem.GameMenus | [GameMenuCallbackManager](../GameMenuCallbackManager) | 维护菜单回调注册并将其分发给当前菜单。 | 菜单注册与运行期 |
| TaleWorlds.CampaignSystem.GameMenus | [GameMenuEventHandler](../GameMenuEventHandler) | 表达进入、离开或选择菜单时的事件回调。 | 菜单状态转换 |
| TaleWorlds.CampaignSystem.GameMenus | [GameMenuInitializationHandler](../GameMenuInitializationHandler) | 在菜单创建时填充动态状态和选项。 | 菜单首次进入 |
| TaleWorlds.CampaignSystem.GameMenus | [EventType](../EventType) | 区分菜单事件回调的触发类别。 | 菜单事件分派 |
| TaleWorlds.CampaignSystem.GameMenus | [MenuFlags](../MenuFlags) | 控制菜单是否可离开、是否显示 overlay 等行为。 | 菜单初始化 |
| TaleWorlds.CampaignSystem.GameMenus | [MenuOverlayType](../MenuOverlayType) | 选择城镇、遭遇等菜单的视觉 overlay。 | 菜单打开 |
| TaleWorlds.CampaignSystem.GameMenus | [MenuAndOptionType](../MenuAndOptionType) | 区分普通菜单、选项和等待菜单的注册形态。 | `CampaignGameStarter` 注册 |
| TaleWorlds.CampaignSystem.GameMenus | [WaitMenuOption](../WaitMenuOption) | 表达等待菜单的进度和可中断选项。 | 等待菜单 tick |
| TaleWorlds.CampaignSystem.GameMenus | [LeaveType](../LeaveType) | 记录选项执行后的离开方式和目标状态。 | consequence 返回阶段 |
| TaleWorlds.CampaignSystem.GameMenus | [IssueQuestFlags](../IssueQuestFlags) | 标记 Issue/Quest 菜单选项的可见性和解决分支。 | Issue 菜单条件评估 |
| TaleWorlds.CampaignSystem.GameMenus.GameMenuInitializationHandlers | [DefaultEncounter](../DefaultEncounter) | 初始化普通遭遇菜单的参与方和可用选项。 | Encounter 转入菜单 |
| TaleWorlds.CampaignSystem.GameMenus.GameMenuInitializationHandlers | [PlayerTownVisit](../PlayerTownVisit) | 初始化玩家进入城镇时的菜单状态和入口。 | 进入 Settlement 后 |
| TaleWorlds.CampaignSystem.CampaignBehaviors | [EncounterGameMenuBehavior](../EncounterGameMenuBehavior) | 将遭遇状态连接到 GameMenu 注册与退出流程。 | Encounter 创建/结束 |
| TaleWorlds.CampaignSystem.ComponentInterfaces | [EncounterGameMenuModel](../EncounterGameMenuModel) | 计算遭遇菜单是否可用以及选项结果。 | 菜单条件/模型查询 |

## 导航

- [上级：Campaign-Ext](..)
- [同级：Dialogs](../dialogs) · [Actions](../actions)
- [相关：MapEvents](../mapevents)
