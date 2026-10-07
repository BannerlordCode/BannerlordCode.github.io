---
title: "Add100RenownCheat"
description: "SandBox 的地图作弊项，执行时用 GainRenownAction 给玩家主角增加 100 声望。"
---
# Add100RenownCheat

**命名空间：** `SandBox`
**模块：** `SandBox`
**类型：** `public class Add100RenownCheat : GameplayCheatItem`
**基类：** `GameplayCheatBase` → `GameplayCheatItem`
**源文件：** `bannerlord-1.4.7/SandBox/Add100RenownCheat.cs`（声明见第 9 行）

## 概述

`Add100RenownCheat` 是 SandBox 模块的地图作弊项，用于给玩家主角快速增加声望。它唯一的逻辑是执行 `GainRenownAction.Apply(Hero.MainHero, 100f, true)`，把 100 点声望加到玩家主角身上；第三个参数 `true` 表示这是"无需通知/直接生效"的调用方式。显示名来自 `GetName()` 返回的本地化文本 `{=zXQwb3lj}Add 100 Renown`。

它继承 `GameplayCheatItem`，后者继承 `GameplayCheatBase`（`SandBox/GameplayCheatBase.cs:7`、`SandBox/GameplayCheatItem.cs:6`）。实例由 `GameplayCheatsManager.GetMapCheatList()` 在第 17 行 `yield return new Add100RenownCheat();` 注册（`SandBox/GameplayCheatsManager.cs:13`）。

## 心智模型

声望在战役里的归属单位是**英雄**，不是家族，所以这里作用于 `Hero.MainHero`，而 `Add100InfluenceCheat` 作用于 `Clan.PlayerClan`。这两个类放在一起看，正好给出一个可复用的判断法则：先确定"这项资源挂在哪个实体上"，再据此选择 Action 的接收者。

这个类本身仍然只是"Action 的 UI 外壳"：没有字段、没有状态，`GetName()` 负责命名，`ExecuteCheat()` 负责触发 `GainRenownAction`。所有实际规则（声望上限、家族等级联动、通知推送）都不在这里，而在 `GainRenownAction` 与战役层中。

## 怎么用

### 怎么拿到

通过 `GameplayCheatsManager.GetMapCheatList()` 获取（声明见 `SandBox/GameplayCheatsManager.cs:13`），它在第 17 行 `yield return new Add100RenownCheat();`。遍历返回的 `IEnumerable<GameplayCheatBase>` 并筛选即可，通常不需要自己构造。

### 典型用法

调试时遍历官方作弊列表并执行目标项；脚本化场景下则直接调用 `GainRenownAction.Apply(Hero.MainHero, 100f, true)`，省去作弊项这层间接。若要扩展成"加任意数值"，可以照抄本类结构，把 100f 换成参数，但要意识到作弊项本身没有参数通道——需要参数时应新建自己的类型或直接调用 Action。

### 坑

- 目标写死为 `Hero.MainHero`；在玩家英雄未就绪时调用会失败。
- 数值是 `float`，写成 `100f`。
- 第三个参数 `true` 的语义容易被忽略；改动它可能影响声望变化是否走通知流程。
- 依旧不是事件，必须被显式调用；它只是菜单里的一行。

## 关键成员

| 成员 | 用途 |
| --- | --- |
| `ExecuteCheat()` | 执行作弊：调用 `GainRenownAction.Apply(Hero.MainHero, 100f, true)`，给主角加 100 声望。声明见 `SandBox/Add100RenownCheat.cs:12`。 |
| `GetName()` | 返回本地化显示名 `{=zXQwb3lj}Add 100 Renown`。声明见 `SandBox/Add100RenownCheat.cs:18`。 |

## 真实示例

```csharp
// 从官方作弊列表中取出"加 100 声望"并执行
IEnumerable<GameplayCheatBase> cheats = GameplayCheatsManager.GetMapCheatList();
foreach (GameplayCheatBase cheat in cheats)
{
    if (cheat is Add100RenownCheat renownCheat)
    {
        renownCheat.ExecuteCheat(); // Hero.MainHero 声望 +100
    }
}
```

## 参见

- [Add1000GoldCheat](../Add1000GoldCheat)
- [Add100InfluenceCheat](../Add100InfluenceCheat)
- [AddCraftingMaterialsCheat](../AddCraftingMaterialsCheat)
- [Campaign](../../campaign/Campaign)
- [Mission](../../mission/Mission)

## 导航

- ↑ [版本首页](../../../)
- ↑ [API 参考](../../)
- ↔ [架构总览](../../../architecture/)
