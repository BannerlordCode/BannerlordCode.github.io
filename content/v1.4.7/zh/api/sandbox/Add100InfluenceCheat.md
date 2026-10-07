---
title: "Add100InfluenceCheat"
description: "SandBox 的地图作弊项，执行时用 ChangeClanInfluenceAction 给玩家家族增加 100 影响力。"
---
# Add100InfluenceCheat

**命名空间：** `SandBox`
**模块：** `SandBox`
**类型：** `public class Add100InfluenceCheat : GameplayCheatItem`
**基类：** `GameplayCheatBase` → `GameplayCheatItem`
**源文件：** `SandBox/Add100InfluenceCheat.cs`（声明见第 9 行）

## 概述

`Add100InfluenceCheat` 是 SandBox 模块提供的地图作弊项之一，用来在战役中给玩家家族快速补充影响力。它唯一的逻辑是执行 `ChangeClanInfluenceAction.Apply(Clan.PlayerClan, 100f)`，即对玩家家族（`Clan.PlayerClan`）施加 +100 的影响力变化。显示名来自 `GetName()` 返回的本地化文本 `{=6TgRwB2Q}Add 100 Influence`。

与同族作弊项一样，它继承 `GameplayCheatItem`，后者继承 `GameplayCheatBase`（`SandBox/GameplayCheatBase.cs:7`、`SandBox/GameplayCheatItem.cs:6`）。实例由 `GameplayCheatsManager.GetMapCheatList()` 在第 16 行 `yield return new Add100InfluenceCheat();` 注册进官方作弊列表（`SandBox/GameplayCheatsManager.cs:13`）。

## 心智模型

它是"影响力"这一战役资源的一键补充按钮，而不是影响力系统本身。真正的规则与数值处理在 `ChangeClanInfluenceAction` 里；这个类只负责两件事：给出可读的名字，以及在被选中时触发那个 Action。

注意它的作用目标是**家族**而不是英雄：影响力的归属单位是 `Clan`，所以这里用的是 `Clan.PlayerClan`，而不是 `Hero.MainHero`。这是它和 `Add1000GoldCheat`、`Add100RenownCheat` 在语义上的关键差别——后两者的载体是英雄，前者是家族。把握住"资源挂在哪一级实体上"这一点，就能自然推断出该用哪个 Action。

和所有 `GameplayCheatItem` 一样，它无状态、可随时 `new`、执行完不留痕；副作用只发生在 Action 系统中。

## 怎么用

### 怎么拿到

通过静态入口 `GameplayCheatsManager.GetMapCheatList()` 拿到（声明见 `SandBox/GameplayCheatsManager.cs:13`）。该方法在第 16 行 `yield return new Add100InfluenceCheat();`，因此遍历返回的 `IEnumerable<GameplayCheatBase>` 即可获得实例；构造函数虽是公开的，但走官方列表更符合契约。

### 典型用法

在 mod 或调试菜单中遍历 `GetMapCheatList()`，用 `is Add100InfluenceCheat` 命中后调用 `ExecuteCheat()`。若只需要效果本身（例如某个剧情脚本要奖励影响力），直接调用 `ChangeClanInfluenceAction.Apply(Clan.PlayerClan, 100f)` 更直接，也避免了对着 UI 条目编程。

### 坑

- 目标写死为 `Clan.PlayerClan`：若玩家还没有家族（极端早期或自定义开局），会拿不到有效目标。
- 影响力量值是 `float`，传 `100f` 而非 `100`，避免隐式转换歧义。
- 它只影响家族影响力，不会触发任何 UI 刷新逻辑；界面刷新由 Action 自身的机制负责。
- 同样不是事件，不会被自动调用，必须由菜单或代码显式执行。

## 关键成员

| 成员 | 用途 |
| --- | --- |
| `ExecuteCheat()` | 执行作弊：调用 `ChangeClanInfluenceAction.Apply(Clan.PlayerClan, 100f)`，给玩家家族加 100 影响力。声明见 `SandBox/Add100InfluenceCheat.cs:12`。 |
| `GetName()` | 返回本地化显示名 `{=6TgRwB2Q}Add 100 Influence`。声明见 `SandBox/Add100InfluenceCheat.cs:18`。 |

## 真实示例

```csharp
// 用官方作弊项给玩家家族补充影响力
IEnumerable<GameplayCheatBase> cheats = GameplayCheatsManager.GetMapCheatList();
foreach (GameplayCheatBase cheat in cheats)
{
    if (cheat is Add100InfluenceCheat influenceCheat)
    {
        influenceCheat.ExecuteCheat(); // Clan.PlayerClan 影响力 +100
    }
}
```

## 参见

- [Add1000GoldCheat](../Add1000GoldCheat)
- [Add100RenownCheat](../Add100RenownCheat)
- [AddCraftingMaterialsCheat](../AddCraftingMaterialsCheat)
- [Campaign](../../campaign/Campaign)
- [Game](../../core-extra/Game)

## 导航

- ↑ [版本首页](../../../)
- ↑ [API 参考](../../)
- ↔ [架构总览](../../../architecture/)
