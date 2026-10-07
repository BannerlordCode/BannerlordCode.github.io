---
title: "AddCraftingMaterialsCheat"
description: "SandBox 的地图作弊项，遍历 CraftingMaterials 枚举为主队伍每种材料各加 10 个。"
---
# AddCraftingMaterialsCheat

**命名空间：** `SandBox`
**模块：** `SandBox`
**类型：** `public class AddCraftingMaterialsCheat : GameplayCheatItem`
**基类：** `GameplayCheatBase` → `GameplayCheatItem`
**源文件：** `SandBox/AddCraftingMaterialsCheat.cs`（声明见第 10 行）

## 概述

`AddCraftingMaterialsCheat` 是 SandBox 模块里唯一一个"批量"作弊项：它不针对单一资源，而是遍历 `CraftingMaterials` 枚举，把每一种锻造材料各 10 个加入玩家主队伍的物品栏。相比同族其他作弊项的"一行 Action 调用"，它的 `ExecuteCheat()` 是一段小循环，因此也是理解"作弊项可以承载多少逻辑"的一个好样本。

显示名来自 `GetName()` 返回的本地化文本 `{=63jJ3GGY}Add 10 Crafting Materials Each`。它继承 `GameplayCheatItem`，后者继承 `GameplayCheatBase`（`SandBox/GameplayCheatBase.cs:7`、`SandBox/GameplayCheatItem.cs:6`）。实例由 `GameplayCheatsManager.GetMapCheatList()` 在第 18 行 `yield return new AddCraftingMaterialsCheat();` 注册（`SandBox/GameplayCheatsManager.cs:13`）。

## 心智模型

前三个作弊项各自对应"一个实体上的一种资源"；这一个对应"一类资源的全集"。它的模式是**枚举驱动**：`CraftingMaterials` 枚举列出了所有锻造材料，循环对每一项做同样的加量操作，于是新增一种材料时无需改动这个类。

归属单位是**主队伍**（玩家的 party）：材料是队伍物品栏里的物品，不是英雄个人属性。这也是为什么它和 `Add1000GoldCheat`（作用于 `Hero.MainHero`）、`Add100InfluenceCheat`（作用于 `Clan.PlayerClan`）在实现上必须使用不同的 Action——先判断"资源存在哪里"，再选调用方式。

它依然保持 `GameplayCheatItem` 的无状态约定：不缓存任何东西，每次执行都从枚举重新遍历，重复执行就是重复叠加。

## 怎么用

### 怎么拿到

通过 `GameplayCheatsManager.GetMapCheatList()` 获取（声明见 `SandBox/GameplayCheatsManager.cs:13`），在第 18 行 `yield return new AddCraftingMaterialsCheat();`。遍历 `IEnumerable<GameplayCheatBase>` 并筛选出本类型即可。

### 典型用法

调试锻造系统时，用它在一次调用内把全部材料补满，避免逐个添加。写 mod 时若需要"只加某一种材料"或"加不同数量"，应当绕过这个类，直接对目标材料调用物品添加逻辑，或者新建一个带参数的作弊项——因为 `GameplayCheatItem` 不提供参数通道。

### 坑

- 数量是每种 10 个，是固定值，无法通过作弊项本身调整。
- 目标是主队伍物品栏；如果当前没有活跃的主队伍（例如某些特殊状态），加物品会失败。
- 依赖 `CraftingMaterials` 枚举的完整性：枚举里新增材料会自动被覆盖，但若新增的是非材料条目，也会被一起加上。
- 重复执行会线性叠加，没有幂等保护。
- 依然不是事件，必须由菜单或代码显式调用。

## 关键成员

| 成员 | 用途 |
| --- | --- |
| `ExecuteCheat()` | 遍历 `CraftingMaterials` 枚举，为主队伍每种锻造材料各添加 10 个。声明见 `SandBox/AddCraftingMaterialsCheat.cs:13`。 |
| `GetName()` | 返回本地化显示名 `{=63jJ3GGY}Add 10 Crafting Materials Each`。声明见 `SandBox/AddCraftingMaterialsCheat.cs:23`。 |

## 真实示例

```csharp
// 一次执行即补齐所有锻造材料
IEnumerable<GameplayCheatBase> cheats = GameplayCheatsManager.GetMapCheatList();
foreach (GameplayCheatBase cheat in cheats)
{
    if (cheat is AddCraftingMaterialsCheat craftingCheat)
    {
        craftingCheat.ExecuteCheat(); // 每种 CraftingMaterials 各 +10
    }
}
```

## 参见

- [Add1000GoldCheat](../Add1000GoldCheat)
- [Add100InfluenceCheat](../Add100InfluenceCheat)
- [Add100RenownCheat](../Add100RenownCheat)
- [Campaign](../../campaign/Campaign)
- [Game](../../core-extra/Game)

## 导航

- ↑ [版本首页](../../../)
- ↑ [API 参考](../../)
- ↔ [架构总览](../../../architecture/)
