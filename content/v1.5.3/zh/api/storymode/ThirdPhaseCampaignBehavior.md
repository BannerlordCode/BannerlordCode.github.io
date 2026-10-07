---
title: "ThirdPhaseCampaignBehavior"
description: "主线第三阶段行为：禁止反对派王国被废止、把名单内王国之间的战争按周拉回和平，并补一个围城结束菜单。"
---
# ThirdPhaseCampaignBehavior

**Namespace:** StoryMode.GameComponents.CampaignBehaviors
**Module:** StoryMode
**Type:** `public class ThirdPhaseCampaignBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**Source:** `bannerlord-1.5.3/StoryMode/GameComponents/CampaignBehaviors/ThirdPhaseCampaignBehavior.cs`

## 概述

主线最后一阶段的三个动作在这里：其一，反对派王国不被允许被废止（`CanKingdomBeDiscontinuedEvent`）；其二，任何发生在反对派之间、或盟友之间的新宣战，都会被记下来，在下一个 `WeeklyTickEvent` 里强制拉成和平；其三，注册一个围城结束菜单，用于「最后一个阴谋王国被玩家以外的原因打下来」这种边角场景。

## 心智模型

**注册是有条件的**：`StoryModeSubModule.AddBehaviors` 里 `ThirdPhaseCampaignBehavior` 位于 `if (!MainStoryLine.IsCompleted)` 块内部，**不受第一/二阶段完成与否的限制**。所以只要主线总进度未完成，它就存在。

**四个订阅**：

| 事件 | 处理 |
|---|---|
| `WarDeclared` | `OnWarDeclared(IFaction, IFaction, DeclareWarAction.DeclareWarDetail)` |
| `WeeklyTickEvent` | `WeeklyTick()` — 强制和平 |
| `CanKingdomBeDiscontinuedEvent` | `CanKingdomBeDiscontinued(Kingdom kingdom, ref bool result)` |
| `OnSessionLaunchedEvent` | `OnSessionLaunched(starter)` — 注册菜单 |

**名单来源**：`ThirdPhase.OppositionKingdoms` 与 `ThirdPhase.AllyKingdoms`，两者都是 `MBReadOnlyList<Kingdom>`。`StoryModeManager.Current.MainStoryLine.ThirdPhase` 为 null 时所有判定短路。

**战争登记逻辑**（`OnWarDeclared`）：两个参数都 `as Kingdom` 成功、且 `ThirdPhase != null` 时，检查

```
(opposition.IndexOf(k1) >= 0 && opposition.IndexOf(k2) >= 0)
|| (ally.IndexOf(k1) >= 0 && ally.IndexOf(k2) >= 0)
```

任一成立就把 `(k1, k2)` 加进 `_warsToEnforcePeaceNextWeek`。注意**宣战是瞬间的，和平要等一周**——这是给玩家一个「看到宣战、又看到它自动结束」的窗口。

**和平执行**（`WeeklyTick`）：复制一份列表后遍历，对每一对调 `MakePeaceAction.Apply(tuple.Item1, tuple.Item2)`。**列表从不清空**——被处理过的条目会留在存档里直到战役结束。累积的条目越多，每周的 `MakePeaceAction` 调用就越多。

**王国不可废止**（`CanKingdomBeDiscontinued`）：反对派名单里的王国 `result = false`。用的是 `Contains` 而非 `IndexOf`，与本文件其它地方的写法不一致。

**存档**：只有一个字段，`List<Tuple<Kingdom, Kingdom>> _warsToEnforcePeaceNextWeek`，通过 `dataStore.SyncData` 存为 `"_warsToEnforcePeaceNextWeek"`。这个列表会跨读档保留。

**那个围城菜单**：`siege_ended_by_last_conspiracy_kingdom_defeat`，只有两个选项——`leave_from_besieged_last_conspiracy_settlement`（继续），其 on-init 只打一行 `Debug.Print("Game loaded when the player siege is left on last conspiracy kingdom is defeated by some other reasons", ...)`。**这是纯粹的存档迁移兜底**：读档时如果玩家正在围城一座刚被别的势力攻下的最后阴谋王国，菜单会给出唯一的退出路径。

**常见误用与坑**

- **`_warsToEnforcePeaceNextWeek` 只增不减**。长期战役里这个列表会膨胀，`WeeklyTick` 每次都遍历全量。任何覆写都应该考虑处理后移除条目。
- **`CanKingdomBeDiscontinued` 用 `Contains` 而 `OnWarDeclared` 用 `IndexOf`**，同一文件两套写法。覆写时注意别看错。
- **`MakePeaceAction` 是无条件的**。即使两个王国已经通过其它途径停过战，这里再调一次通常无害，但会产生额外的外交事件通知。
- **菜单 id 与选项 id 是硬编码字符串**，与 XML 里的菜单定义必须对齐，不对齐则菜单空白。
- **`OnWarDeclared` 不检查发起方是不是玩家**。AI 之间在名单内的宣战同样被拉成和平。

## 怎么用

### 怎么拿到它

`public class ThirdPhaseCampaignBehavior : CampaignBehaviorBase` 声明在 `bannerlord-1.5.3/StoryMode/GameComponents/CampaignBehaviors/ThirdPhaseCampaignBehavior.cs:11`，全文 97 行。

注册点：`campaignGameStarter.AddBehavior(new ThirdPhaseCampaignBehavior())`（`StoryModeSubModule.cs:74`）——**在 `if (!MainStoryLine.IsCompleted)` 块内，但块外无条件**。也就是说：主线完成后这个行为**不再注册**，此时 `GetCampaignBehavior<ThirdPhaseCampaignBehavior>()` 返回 null。拿实例用它。

`RegisterEvents()`（`:14`）挂四个：

| 事件 | 处理器 | 行 |
| --- | --- | --- |
| `CampaignEvents.WarDeclared` | `OnWarDeclared(IFaction, IFaction, DeclareWarAction.DeclareWarDetail)` | `:16`→`:36` |
| `CampaignEvents.WeeklyTickEvent` | `WeeklyTick()` | `:17`→`:52` |
| `CampaignEvents.CanKingdomBeDiscontinuedEvent` | `CanKingdomBeDiscontinued(Kingdom, ref bool)` | `:18`→`:61` |
| `CampaignEvents.OnSessionLaunchedEvent` | `OnSessionLaunched(CampaignGameStarter)` → `AddGameMenus` | `:19`→`:23`→`:29` |

`OnWarDeclared`（`:36`）先把 `faction1 as Kingdom` 和 `faction2 as Kingdom` 都取出，任一为 null 就什么都不做（`:40`），并且要求 `MainStoryLine.ThirdPhase != null`（同一个 `if`，`:40`）。命中条件是**同一侧列表里的两个王国**——都在 `OppositionKingdoms` 里，或都在 `AllyKingdoms` 里（`:44`）——就把这对王国塞进 `_warsToEnforcePeaceNextWeek`（`:46`）。

`WeeklyTick()`（`:52`）遍历时**先拷贝一份** `new List<Tuple<Kingdom, Kingdom>>(this._warsToEnforcePeaceNextWeek)`（`:54`），对每对调 `MakePeaceAction.Apply(tuple.Item1, tuple.Item2)`（`:56`）。拷贝是为了让 `MakePeaceAction` 可能再次触发 `WarDeclared` 时不破坏枚举——**但 `MakePeaceAction` 不加回列表，所以列表不会无限增长**。

`CanKingdomBeDiscontinued`（`:61`）只在 `ThirdPhase != null && ThirdPhase.OppositionKingdoms.Contains(kingdom)` 时置 `result = false`（`:63`→`:65`）。

存档只有一项：`dataStore.SyncData<List<Tuple<Kingdom, Kingdom>>>("_warsToEnforcePeaceNextWeek", ref ...)`（`:72`）——**待执行和谈队列会进存档**，读档后第一个周 tick 继续执行。

`AddGameMenus`（`:29`）注册一个菜单 `siege_ended_by_last_conspiracy_kingdom_defeat`（`:31`）和唯一选项 `leave_from_besieged_last_conspiracy_settlement`（`:32`），后果是 `GameMenu.ExitToLast()`（`:76`→`:78`）。

### 典型用法

```csharp
// 运行期读：主线完成后为 null
ThirdPhaseCampaignBehavior third =
    Campaign.Current.GetCampaignBehavior<ThirdPhaseCampaignBehavior>();
if (third != null && StoryModeManager.Current.MainStoryLine.ThirdPhase != null)
{
    MBReadOnlyList<Kingdom> opposition = StoryModeManager.Current.MainStoryLine.ThirdPhase.OppositionKingdoms;
    MBReadOnlyList<Kingdom> allies = StoryModeManager.Current.MainStoryLine.ThirdPhase.AllyKingdoms;

    // 复现 OnWarDeclared：同侧两王国会被强制和谈
    bool sameSide = opposition.IndexOf(opposition[0]) >= 0
                 && opposition.IndexOf(opposition[Math.Min(1, opposition.Count - 1)]) >= 0;
    Debug.Print("敌对王国有 " + opposition.Count + " 个，盟友 " + allies.Count);

    // 复现 CanKingdomBeDiscontinued
    Debug.Print("敌对王国可被废除=" + !opposition.Contains(opposition[0]));
}

// 待执行和谈队列会存档：读档后第一个 WeeklyTick 会自动 MakePeaceAction.Apply
Debug.Print("周 tick 时会强制执行队列里的全部和谈");
```

### 最容易踩的坑

`OnWarDeclared`（`:36`）先挂 `WarDeclared` 事件，**再由 `WeeklyTick` 强制和谈**——玩家宣战后不会立刻停战，而是撑到下一个周 tick（`:52`）。这一周里战争照常进行、伤亡照常发生。而队列 `_warsToEnforcePeaceNextWeek` **进了存档**（`:72`），读档后继续执行，不会因为重载而丢失。mod 若想改这条节奏，只能换掉 `WeeklyTick` 的行为，`WarDeclared` 订阅本身不做任何拦截。

## 主要成员

- `public override void RegisterEvents()`
  订阅四个事件。由管理器在战役初始化时调用。
- `public override void SyncData(IDataStore dataStore)`
  同步 `_warsToEnforcePeaceNextWeek`（`List<Tuple<Kingdom, Kingdom>>`），键名 `"_warsToEnforcePeaceNextWeek"`。**这是本层唯一进存档的字段**。
- 私有 `OnWarDeclared(IFaction faction1, IFaction faction2, DeclareWarAction.DeclareWarDetail detail)`
  把名单内的非法宣战登记进待和解列表。`detail` 参数未被使用。
- 私有 `WeeklyTick()`
  遍历待和解列表，逐对调 `MakePeaceAction.Apply`。不清理列表。
- 私有 `CanKingdomBeDiscontinued(Kingdom kingdom, ref bool result)`
  反对派王国的废止许可。`result = false` 拒绝。
- 私有 `OnSessionLaunched(CampaignGameStarter starter)` → `AddGameMenus(CampaignGameStarter starter)`
  注册 `siege_ended_by_last_conspiracy_kingdom_defeat` 菜单与它唯一的选项。
- 私有 `game_menu_last_conspiracy_kingdom_defeated_when_player_besiege_menu_on_init(MenuCallbackArgs args)`
  只打一行调试日志，说明这是读档兜底路径。
- 私有 `siege_ended_by_last_conspiracy_kingdom_defeat_condition(MenuCallbackArgs args)` / `siege_ended_by_last_conspiracy_kingdom_defeat_consequence(MenuCallbackArgs args)`
  前者设 `args.optionLeaveType = GameMenuOption.LeaveType.Leave` 并恒返回 true；后者 `GameMenu.ExitToLast()`。

## 使用示例

```csharp
// 场景：mod 想让「强制和解」在处理后清空列表，避免长战役里列表膨胀
// 同时给玩家一个提示，说明这场战争是被剧情压下去的
public class ThirdPhaseOverlayBehavior : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        CampaignEvents.WeeklyTickEvent.AddNonSerializedListener(this, WeeklyTick);
    }

    public override void SyncData(IDataStore dataStore)
    {
    }

    private void WeeklyTick()
    {
        ThirdPhase third = StoryModeManager.Current.MainStoryLine.ThirdPhase;
        if (third == null)
        {
            return;
        }
        // 与 ThirdPhaseCampaignBehavior 并行观察：看看这一周名单内的王国关系
        Debug.Print("opposition=" + third.OppositionKingdoms.Count
            + " allies=" + third.AllyKingdoms.Count);
    }
}
```

## 风险与边界

- **存档序列化是本层最大的实际风险**：`_warsToEnforcePeaceNextWeek` 里的 `Tuple<Kingdom, Kingdom>` 引用 Kingdom 对象。如果某个 Kingdom 在存档中被移除或重建，列表里的引用会悬空，`MakePeaceAction.Apply` 拿到无效 kingdom 会出错。mod 若改动了王国的生命周期，必须考虑清这个列表。
- **列表只增不减**是源码既有行为，不是 bug，但会让长存档的每周处理成本单调上升。
- **与 [StoryModeKingdomDecisionPermissionModel](../StoryModeKingdomDecisionPermissionModel) 构成双保险但作用点不同**：那个模型在**按钮层**拒绝宣战（玩家点不到），本行为在**事件层**强拉和平（已经宣了也拉回来）。若 mod 覆盖了前者导致玩家/AI 能宣战，本行为仍会兜底——反之若 mod 覆盖了本行为（比如改成不解和），前者仍然拦得住。
- **条件注册带来的空窗**：主线总进度完成后行为不存在。
- **围城菜单是死路一条**：它只有一个「继续」选项，不做任何世界状态变更。它的存在纯粹是为了让玩家能从那个菜单出去。

## 依赖关系

- [CampaignBehaviorBase](../../campaign/CampaignBehaviorBase) — 行为基类与 `SyncData` 存档通道
- [CampaignBehaviorManager](../../campaign-ext/CampaignBehaviorManager) — 调用 `RegisterEvents()` 并托管实例
- [CampaignEvents](../../campaign/CampaignEvents) — `WarDeclared` / `WeeklyTickEvent` / `CanKingdomBeDiscontinuedEvent` / `OnSessionLaunchedEvent` 的来源
- [CampaignGameStarter](../../campaign/CampaignGameStarter) — `AddBehavior` 注册入口与 `AddGameMenu` 的宿主
- [StoryModeKingdomDecisionPermissionModel](../StoryModeKingdomDecisionPermissionModel) — 按钮层的同类限制，与本行为形成双保险
- [SecondPhaseCampaignBehavior](../SecondPhaseCampaignBehavior) — 上一阶段，其 `ThirdPhase == null` 判定与本阶段直接衔接
- [module-map](../../../architecture/module-map) — StoryMode 模块的组成与依赖