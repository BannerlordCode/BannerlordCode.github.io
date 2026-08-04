---
title: "TooltipHelper"
description: "TooltipHelper 根据当前地图事件或攻城方位选择 Send Troops 菜单的本地化提示文本；它只读取运行时上下文，不持有 UI 状态。"
---
# TooltipHelper

**命名空间：** `Helpers`  
**模块：** `TaleWorlds.CampaignSystem`  
**类型：** `public class TooltipHelper`  
**基类：** 无显式基类  
**源文件：** `bin/TaleWorlds.CampaignSystem/Helpers/TooltipHelper.cs`

## 一句话职责

它把当前 `MapEvent.PlayerMapEvent` 的模拟战力上下文或 `PlayerSiege.PlayerSide` 转换成 `GameTexts` 能解析的 `TextObject`，供地图遭遇和攻城的 Send Troops 菜单显示正确的攻击方/防守方提示；它不创建 tooltip 控件，也不修改战斗或攻城状态。

## 心智模型

这是一个**静态方法集中在普通类上的文本适配器**。源码声明的是 `public class`，但两个公开入口都是 `static`，调用者不需要、也不应该 `new TooltipHelper()`。它只在菜单已经建立了有效的地图事件或攻城上下文后读取状态，然后选择 `str_simulation_tooltip` 的 variation，返回尚未渲染的 `TextObject`。

地图事件入口从 `MapEvent.PlayerMapEvent.SimulationContext` 取得基础上下文；只有村庄、海上 raid、河流渡河战和攻城这几个 context 才会再附加 `Attacker` 或 `Defender`。攻城入口则直接根据 `PlayerSiege.PlayerSide` 选择 `SiegeAttacker` 或 `SiegeDefender`。因此，TooltipHelper 负责“把当前状态映射到本地化 key”，不负责判断能否派兵、是否有足够士兵或是否可以离开战斗。

## 何时使用，何时不要用

- **使用：** 地图遭遇菜单已有有效的 `MapEvent.PlayerMapEvent`，需要为 Send Troops 选项生成与模拟上下文匹配的提示时，调用 `GetSendTroopsPowerContextTooltipForMapEvent`。
- **使用：** 攻城菜单已经进入 `PlayerSiege` 流程，需要显示攻方或守方的 Send Troops 提示时，调用 `GetSendTroopsPowerContextTooltipForSiege`。
- **不要用：** 在主菜单、Campaign 尚未初始化、没有地图事件或没有活跃攻城阶段时调用。两个方法都直接读取静态运行时状态，类本身不会返回“无上下文”的备用文本。
- **不要用：** 用返回文本推断战斗方、战斗能力或菜单是否启用。是否能派兵由 [MapEvent](../../campaign/MapEvent)、攻城行为和菜单条件共同决定，tooltip 只是显示结果。
- **不要用：** 缓存返回的 `TextObject` 作为持久化数据，或把它当作已经渲染的字符串。文本变量和本地化解析应留在当前 UI 生命周期内。

## 依赖关系

```text
MapEvent.PlayerMapEvent.SimulationContext
  -> GetSendTroopsPowerContextTooltipForMapEvent
  -> GameTexts.FindText("str_simulation_tooltip", variation)

PlayerSiege.PlayerSide
  -> GetSendTroopsPowerContextTooltipForSiege
  -> GameTexts.FindText("str_simulation_tooltip", SiegeAttacker/Defender)
```

| 依赖 | 作用与时机 |
| --- | --- |
| [MapEvent](../../campaign/MapEvent) | 地图入口从 `PlayerMapEvent` 读取模拟上下文和玩家方位；必须在地图遭遇菜单仍有效时调用。 |
| [PlayerSiege](../../campaign/PlayerSiege) | 攻城入口读取 `PlayerSide`，决定使用 `SiegeAttacker` 还是 `SiegeDefender` 文本 variation。 |
| [BattleSideEnum](../../core-extra/BattleSideEnum) | 描述玩家在攻城中的攻守方；该枚举是判定输入，不是 tooltip 的持久状态。 |
| [TextObject](../../localization/TextObject) 与 `GameTexts` | 返回未渲染的本地化对象；真正显示由菜单参数和 UI 文本系统完成。 |
| [MenuHelper](../MenuHelper) 与攻城行为 | 原版菜单在判断遭遇/攻城条件后把返回的 `TextObject` 写入 `args.Tooltip`；这些消费者负责启用状态和其他失败提示。 |

## 公开入口

| 入口 | 源码行为 | 正确边界 |
| --- | --- | --- |
| `GetSendTroopsPowerContextTooltipForMapEvent()` | 读取 `MapEvent.PlayerMapEvent.SimulationContext`，转为字符串；对 Village、NavalRaid、RiverCrossingBattle、Siege 追加按玩家 MissionSide 选择的 `Attacker`/`Defender`，再调用 `GameTexts.FindText("str_simulation_tooltip", text)`。 | 仅用于已有玩家地图事件的 Send Troops tooltip；方法内部不检查 `PlayerMapEvent` 是否为 `null`。 |
| `GetSendTroopsPowerContextTooltipForSiege()` | 读取 `PlayerSiege.PlayerSide`，按攻方/守方选择 `SiegeAttacker` 或 `SiegeDefender` variation，并返回同一组 `str_simulation_tooltip` 文本。 | 仅用于活跃攻城菜单；它不检查攻城状态，也不判断队伍能否继续战斗。 |

两个入口都是 `static`。具体类的实例没有额外状态，也不是通过 `Campaign.Current` 获取的服务。

## 真实示例：地图遭遇菜单中的提示

地图菜单应先取得真实的 `MapEvent.PlayerMapEvent`，再调用 helper；这层空值保护必须在调用方完成，因为源码方法直接读取 `SimulationContext`：

```csharp
using Helpers;
using TaleWorlds.CampaignSystem.MapEvents;
using TaleWorlds.Localization;

public static TextObject TryGetMapEventTroopTooltip()
{
    MapEvent playerMapEvent = MapEvent.PlayerMapEvent;
    if (playerMapEvent == null)
    {
        return null;
    }

    return TooltipHelper.GetSendTroopsPowerContextTooltipForMapEvent();
}
```

原版 `MenuHelper` 在确认遭遇方可交战后把该返回值赋给菜单参数的 `Tooltip`；如果菜单已经切换到另一场事件，不要继续使用旧的 `TextObject`。

## 真实示例：攻城菜单中的提示

攻城行为已经建立 `PlayerSiege` 上下文时，可以直接取得本地化对象。下面的方位检查让调用点明确处在攻方或守方阶段：

```csharp
using Helpers;
using TaleWorlds.CampaignSystem.Siege;
using TaleWorlds.Core;
using TaleWorlds.Localization;

public static TextObject TryGetSiegeTroopTooltip()
{
    BattleSideEnum side = PlayerSiege.PlayerSide;
    if (side != BattleSideEnum.Attacker && side != BattleSideEnum.Defender)
    {
        return null;
    }

    return TooltipHelper.GetSendTroopsPowerContextTooltipForSiege();
}
```

`SiegeEventCampaignBehavior` 使用同一入口生成 `args.Tooltip`，并在没有可带领部队或士气不足时覆盖成更具体的禁用原因；不要把 TooltipHelper 的返回值当成这些资格检查的替代品。

## 风险与存档边界

- **静态上下文：** `MapEvent.PlayerMapEvent` 和 `PlayerSiege.PlayerSide` 是运行时静态状态，可能在菜单切换、战斗结束或读档过渡时为空/失效。不要在 Campaign Behavior 的持久字段中保存它们。
- **源码缺少空值保护：** `GetSendTroopsPowerContextTooltipForMapEvent` 直接解引用 `PlayerMapEvent`，`GetSendTroopsPowerContextTooltipForSiege` 直接读取 `PlayerSiege.PlayerSide`；错误阶段调用可能空引用或得到不适用的文本。
- **本地化边界：** `GameTexts.FindText` 返回 `TextObject`，不是最终字符串。不要绕过 `TextObject` 把 key 当作显示文本，也不要跨语言缓存解析后的结果。
- **显示与逻辑分离：** tooltip 的 variation 只解释模拟 context 和攻守方，不负责验证人数、士气、战斗阶段或是否允许撤退；这些条件仍由 `MenuHelper`、攻城行为和 MapEvent 流程检查。
- **存档边界：** 该类没有存档字段，也没有 Campaign 生命周期。自定义持久化数据应放在 Campaign Behavior 的稳定 `SyncData` 中，而不是保存 tooltip 或 MapEvent 引用。

## 版本注记

本页按 v1.4.5 `Helpers/TooltipHelper.cs` 以及 `MenuHelper`、`SiegeEventCampaignBehavior` 的实际调用点撰写。跨版本使用时应重新核对 `PowerCalculationContext` 枚举成员、`PlayerSiege.PlayerSide` 的可用阶段和 `str_simulation_tooltip` 的本地化 variation。

## 导航

- ↑ 父级：[System API](../)
- ↔ 同级：[MapEventHelper](../MapEventHelper) · [MenuHelper](../MenuHelper) · [HeroHelper](../HeroHelper)
- 相关：[MapEvent](../../campaign/MapEvent) · [PlayerSiege](../../campaign/PlayerSiege) · [BattleSideEnum](../../core-extra/BattleSideEnum) · [TextObject](../../localization/TextObject)
