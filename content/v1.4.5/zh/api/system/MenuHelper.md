---
title: "MenuHelper：战役菜单状态与遭遇回调"
description: "MenuHelper 在 v1.4.5 中把战役菜单回调连接到选项标志、地点切换、遭遇判断以及战斗或 Mission 后果。"
---
# MenuHelper

**命名空间：** `Helpers`
<br>**模块：** `TaleWorlds.CampaignSystem`
<br>**类型：** `public static class MenuHelper`
<br>**基类：** `System.Object`
<br>**源文件：** `bin/TaleWorlds.CampaignSystem/Helpers/MenuHelper.cs`

## 一句话职责

`MenuHelper` 是战役菜单回调层：它写入选项元数据，读取实时遭遇状态，处理聚落地点切换，并把战斗或 Mission 切换交给回调拥有的生命周期；它不拥有菜单对象，也不应被当成可保存的服务实例。

## 心智模型

把这个类看成一组回调，而不是有独立生命周期的菜单服务。引擎持有 `MenuCallbackArgs`、`Campaign.Current.GameMenuManager`、`PlayerEncounter` 和 `MapEvent`，`MenuHelper` 读取这些对象，有些方法还会改变它们。安全边界是：`SetOptionProperties`、任务与 Issue 标志方法以及大多数 `*Condition` 方法准备或回答菜单问题；`EncounterAttackConsequence`、`EncounterOrderAttackConsequence`、`EncounterCaptureTheEnemyOnConsequence` 和 `EncounterLeaveConsequence` 则推进遭遇。

## 何时使用，何时不要使用

- 当菜单回调已经有 `canPlayerDo` 判断，需要统一设置禁用状态和 Tooltip 时使用 `SetOptionProperties`。
- 构造菜单选项元数据时使用 `SetIssueAndQuestDataForHero` 或 `SetIssueAndQuestDataForLocations`；它们会把标志合并到传入的 `MenuCallbackArgs`。
- 在战役已经创建 `PlayerEncounter` 和 `MapEvent` 后，把遭遇条件方法作为对应菜单选项的回调。
- 不要从 Tooltip、渲染循环或推测计算调用遭遇后果方法。这些方法可能应用敌对关系、启动战斗或攻城 Mission、模拟回合、结束遭遇或切换菜单。
- 没有实时 `MapState` 和待处理的 `GameMenuManager.NextLocation` 时不要调用 `CheckAndOpenNextLocation`；它会创建地点 Mission 控制器并清空待处理地点。

## 依赖关系与调用链

```text
GameMenu 回调 -> MenuCallbackArgs
        |                 |
        v                 v
Campaign.Current    PlayerEncounter / MapEvent
        \                 /
         v               v
             MenuHelper
                 |
       GameMenu、Mission、攻城或遭遇切换
```

- [`Campaign`](../../campaign/Campaign) 与 [`CampaignEvents`](../../campaign/CampaignEvents) 提供战役生命周期和事件拥有的状态，回调不能越过它们的生命周期。
- [`MapEvent`](../../campaign/MapEvent)、[`Settlement`](../../campaign/Settlement)、[`MobileParty`](../../campaign/MobileParty) 和 [`Hero`](../../campaign/Hero) 提供实时遭遇、地点和队伍输入。
- [`CampaignMission`](../../campaign/CampaignMission) 与 [`EncounterGameMenuModel`](../../campaign/EncounterGameMenuModel) 是下游边界：Helper 可以选择或启动路径，但 Mission 和 Model 系统仍各自拥有生命周期与计算。

## 公开成员按契约分组

| 分组 | 成员 | 源码确认的行为 |
|---|---|---|
| 选项元数据 | `SetOptionProperties`、`SetIssueAndQuestDataForHero`、`SetIssueAndQuestDataForLocations` | 修改 `MenuCallbackArgs` 的启用状态、Tooltip 或 Issue/任务标志。`SetOptionProperties` 在允许时返回 `true`；不可用但不应禁用时返回 `false`；`shouldBeDisabled` 为真时禁用选项。 |
| 地点流程 | `CheckAndOpenNextLocation`、`DecideMenuState` | 打开待处理地点控制器并选择下一个聚落菜单，或切换到 Model 提供的通用遭遇菜单，否则退出到上一个菜单。这些是状态转换，不是字符串查询。 |
| 遭遇条件 | `EncounterAttackCondition`、`EncounterCaptureEnemyCondition`、`EncounterOrderAttackCondition`、`CheckEnemyAttackableHonorably` | 读取地图事件、受伤/木筏/军团状态、攻城准备、士气和可攻击时间；同时向回调参数写入离开类型、禁用状态、Tooltip 和文本变量。 |
| 遭遇后果 | `EncounterAttackConsequence`、`EncounterOrderAttackConsequence`、`EncounterCaptureTheEnemyOnConsequence`、`EncounterLeaveConsequence` | 应用敌对关系、开始或模拟战斗、覆盖胜方、更新或结束遭遇、清除围城营地，或重新进入聚落遭遇。只能由拥有该菜单动作的流程调用。 |
| 展示 | `GetEncounterCultureBackgroundMesh` | 返回文化的遭遇背景网格；海上地图事件会追加 `_naval`。文化网格无效时触发 failed assertion 并返回空字符串。 |

## 真实示例：分开菜单准备与状态转换

下面的代码符合真实 GameMenu 回调形状。回调接收引擎持有的参数，准备选项状态并返回判断，不构造假的菜单或 Mission：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.GameMenus;
using TaleWorlds.Localization;

public static bool CanPlayerAttack(MenuCallbackArgs args)
{
    TextObject disabledText = new TextObject("{=custom_attack_disabled}Attack is unavailable.");
    bool canPlayerDo = MenuHelper.EncounterAttackCondition(args);
    return MenuHelper.SetOptionProperties(args, canPlayerDo, shouldBeDisabled: false, disabledText);
}
```

`EncounterAttackCondition` 已经写入敌对离开类型、Tooltip 和多个实时状态判断。后续菜单后果才是 `EncounterAttackConsequence` 可以调用 `BeHostileAction`、打开 `CampaignMission` 路径或启动攻城 Mission 的位置；不要把它塞进这个条件回调。

## 生命周期与变更边界

`CheckAndOpenNextLocation` 要求 `GameStateManager.Current.ActiveState` 是 `MapState`，然后调用 `PlayerEncounter.LocationEncounter.CreateAndOpenMissionController`。它把 `center`、`tavern`、`arena`、`lordshall`、`prison` 和 `port` 等地点 ID 映射到下一个战役菜单，并清空两个待处理地点字段。

`EncounterAttackConsequence` 可以进入村庄、藏身处、攻城、海战、商队战和普通战斗 Mission。`EncounterOrderAttackConsequence` 应用敌对关系，并通过活动地图状态开始战斗模拟。`EncounterLeaveConsequence` 可能结束遭遇、清除 `MobileParty.MainParty.BesiegerCamp`、模拟战斗回合并开始聚落遭遇。这些方法不是可重复调用的 UI 辅助函数。

## 风险与存档边界

- 只有在对应的 `Campaign.Current`、`PlayerEncounter`、`MapEvent` 和活动 `GameState` 存在时才调用条件方法；菜单拆除以及读档过程可能暂时没有这些引用。
- `EncounterAttackCondition` 和 `EncounterOrderAttackCondition` 会检查木筏、攻城准备、士气、健康人数、海船和可攻击时间。tick 或 Action 后，缓存的布尔值可能立即过期。
- `EncounterCaptureEnemyCondition` 刻意排除聚落队伍，并接受对方健康人数为零或移动队伍在木筏状态的情况；它不是通用的“所有敌人已败”查询。
- `GetEncounterCultureBackgroundMesh` 在网格缺失时断言后返回 `string.Empty`。应把它视为无效展示数据，而不是有效的默认资源。
- Helper 不定义存档 schema。应由拥有者保存战役状态，不要把 `MenuCallbackArgs`、`MapEvent`、活动 Mission 或回调委托当作 Mod 状态序列化。

## 版本注记

本页依据 v1.4.5 `MenuHelper.cs`，包括海上遭遇分支、地点打开所需的 `MapState`，以及 `_naval` 展示后缀。面向其他 Bannerlord 版本时应重新核对所有后果路径。

## 导航

- [↑ API 系统索引](../)
- [↔ SettlementHelper](../SettlementHelper)
- [↔ PersuasionHelper](../PersuasionHelper)
- [相关：Campaign](../../campaign/Campaign)
- [相关：MapEvent](../../campaign/MapEvent)
- [相关：CampaignMission](../../campaign/CampaignMission)
- [相关：EncounterGameMenuModel](../../campaign/EncounterGameMenuModel)
- [English page](../../../../en/api/system/MenuHelper)
