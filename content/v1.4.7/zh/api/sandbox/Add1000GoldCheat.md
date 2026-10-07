---
title: "Add1000GoldCheat"
description: "SandBox 的地图作弊项，执行时用 GiveGoldAction 一次性给玩家主角增加 1000 第纳尔。"
---
# Add1000GoldCheat

**命名空间：** `SandBox`
**模块：** `SandBox`
**类型：** `public class Add1000GoldCheat : GameplayCheatItem`
**基类：** `GameplayCheatBase` → `GameplayCheatItem`
**源文件：** `bannerlord-1.4.7/SandBox/Add1000GoldCheat.cs`（声明见第 9 行）

## 概述

`Add1000GoldCheat` 是 SandBox 模块里最小的一类"地图作弊项"（gameplay cheat item），属于开发者与调试用的控制台命令族。它自身几乎没有逻辑：唯一行为就是执行 `GiveGoldAction.ApplyBetweenCharacters(null, Hero.MainHero, 1000, true)`，把 1000 第纳尔凭空加给玩家主角。显示名由 `GetName()` 返回的本地化文本 `{=KLbeF6gf}Add 1000 Gold` 提供。

它继承 `GameplayCheatItem`，而后者继承 `GameplayCheatBase`，两个基类都定义在同一个 SandBox 模块内（`SandBox/GameplayCheatBase.cs:7`、`SandBox/GameplayCheatItem.cs:6`）。这个类不会通过事件系统自动触发，而是由 `GameplayCheatsManager.GetMapCheatList()` 显式地 `yield return` 出来（`SandBox/GameplayCheatsManager.cs:15`），再由作弊菜单消费。

## 心智模型

把它想成"作弊菜单里的一行条目"，而不是"一个系统"。它只满足两个契约：

- `GetName()`（声明见 `SandBox/GameplayCheatBase.cs:10`）：告诉 UI 这一项叫什么。
- `ExecuteCheat()`（声明见 `SandBox/GameplayCheatItem.cs:9`）：被选中时执行副作用。

`GameplayCheatBase` 只要求"能被命名"，`GameplayCheatItem` 进一步要求"能被执行"，所以任何地图作弊项都必须同时实现这两个方法。作弊项是**无状态、一次性**的：没有字段、没有构造参数，`new` 出来即可用；执行完也不留任何自身状态，真正的副作用全部落在底层 Action 系统（`GiveGoldAction` 等）里。因此这个类本质上只是"Action 的一层薄 UI 包装"，理解了 `GiveGoldAction` 就理解了它。

## 怎么用

### 怎么拿到

官方列表通过静态入口 `GameplayCheatsManager.GetMapCheatList()` 暴露（声明见 `SandBox/GameplayCheatsManager.cs:13`），该方法在第 15 行 `yield return new Add1000GoldCheat();`。因此规范做法是遍历这个 `IEnumerable<GameplayCheatBase>` 并筛选出目标类型，而不是自己 `new`——虽然构造函数是公开的。

### 典型用法

在 mod 中复用官方作弊项时，遍历 `GetMapCheatList()`，用 `is Add1000GoldCheat` 找到目标项后调用 `ExecuteCheat()`。如果只是想"给钱"这一效果，更推荐直接调用底层 `GiveGoldAction`：作弊项只是给菜单用的入口，绕过它反而少一层耦合。若要新增自己的作弊项，照抄这个类的形状即可：继承 `GameplayCheatItem`，实现两个抽象方法，再挂进列表。

### 坑

- 没有空值保护：如果 `Hero.MainHero` 尚未就绪（例如还没进入战役），底层 Action 会失败。
- `ApplyBetweenCharacters` 的第一个参数传 `null` 表示"无来源"，这是官方约定的"凭空造钱"写法；换成别的英雄会变成真实转账语义。
- 它不是事件，不会被自动调用；忘记在菜单里挂上就等于没注册。
- `GetName()` 返回的是 `TextObject`，必须经本地化系统渲染；直接 `ToString()` 在非英文环境可能只显示 key。

## 关键成员

| 成员 | 用途 |
| --- | --- |
| `ExecuteCheat()` | 执行作弊：调用 `GiveGoldAction.ApplyBetweenCharacters(null, Hero.MainHero, 1000, true)`，给主角加 1000 第纳尔。声明见 `SandBox/Add1000GoldCheat.cs:12`。 |
| `GetName()` | 返回本地化显示名 `{=KLbeF6gf}Add 1000 Gold`。声明见 `SandBox/Add1000GoldCheat.cs:18`。 |

## 真实示例

```csharp
// 遍历官方地图作弊列表，找到"加 1000 金"这一项并执行
IEnumerable<GameplayCheatBase> cheats = GameplayCheatsManager.GetMapCheatList();
foreach (GameplayCheatBase cheat in cheats)
{
    if (cheat is Add1000GoldCheat goldCheat)
    {
        TextObject name = goldCheat.GetName(); // {=KLbeF6gf}Add 1000 Gold
        goldCheat.ExecuteCheat();              // Hero.MainHero 增加 1000 第纳尔
    }
}
```

## 参见

- [Add100InfluenceCheat](../Add100InfluenceCheat)
- [Add100RenownCheat](../Add100RenownCheat)
- [AddCraftingMaterialsCheat](../AddCraftingMaterialsCheat)
- [Campaign](../../campaign/Campaign)
- [Game](../../core-extra/Game)

## 导航

- ↑ [版本首页](../../../)
- ↑ [API 参考](../../)
- ↔ [架构总览](../../../architecture/)
