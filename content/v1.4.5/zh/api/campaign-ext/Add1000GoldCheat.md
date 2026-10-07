---
title: "Add1000GoldCheat"
description: "Add1000GoldCheat 作弊项：给玩家英雄增加 1000 金币的 SandBox 地图作弊。"
---
# Add1000GoldCheat

**Namespace:** SandBox
**Module:** SandBox
**Type:** `public class Add1000GoldCheat : GameplayCheatItem`
**Base:** `GameplayCheatItem`
**File:** `Modules.SandBox/SandBox/Sandbox/Add1000GoldCheat.cs`

## 概述

`Add1000GoldCheat` 是 SandBox 模块中的一个地图作弊项，功能是给玩家英雄增加 1000 金币。它继承自 `GameplayCheatItem`，通过 `GameplayCheatsManager.GetMapCheatList()` 注册到地图作弊菜单中。当玩家在作弊菜单中选择该项时，`ExecuteCheat()` 方法被调用，内部通过 `GiveGoldAction.ApplyBetweenCharacters` 直接将金币转入玩家账户，绕过正常的金币交易流程。

## 心智模型

`Add1000GoldCheat` 是 SandBox 作弊体系中的一个具体作弊项。整个作弊体系的运作方式是：每个作弊项是一个继承自 `GameplayCheatItem` 的类，实现 `ExecuteCheat()` 方法定义作弊行为，实现 `GetName()` 方法提供显示名称。`GameplayCheatsManager` 负责将所有作弊项聚合为列表，供地图作弊菜单（`GameplayCheatsVM`）展示。

对 mod 开发者而言，`Add1000GoldCheat` 的价值不在于直接调用它——它只是一个预设的固定金额作弊项——而在于理解作弊项的编写模式：继承 `GameplayCheatItem`、实现两个 override 方法、在 `GameplayCheatsManager` 中注册。如果 mod 需要添加自定义作弊项，可以完全复制这个模式。`GiveGoldAction.ApplyBetweenCharacters` 是实际执行金币转移的底层 API，mod 也可以直接调用它来实现更灵活的金币操作。

## 怎么用

### 怎么拿到

`Add1000GoldCheat` 不需要手动实例化——它由 `GameplayCheatsManager` 在 `GetMapCheatList()` 方法中自动创建并注册。

- 源码位置：`Add1000GoldCheat.cs:1`（using 声明），类定义从 `Add1000GoldCheat.cs:8` 开始
- 入口：`ExecuteCheat()` 定义在 `Add1000GoldCheat.cs:10`，是作弊执行入口
- 注册位置：`GameplayCheatsManager.cs:11` 中的 `yield return new Add1000GoldCheat()`
- 使用方式：通过地图作弊菜单选择，或通过 `GameplayCheatsManager.GetMapCheatList()` 遍历获取实例

### 典型用法

**通过作弊系统执行：**

```csharp
// 遍历地图作弊列表，找到并执行 Add1000GoldCheat
var cheatList = GameplayCheatsManager.GetMapCheatList();
foreach (var cheat in cheatList)
{
    if (cheat is Add1000GoldCheat goldCheat)
    {
        goldCheat.ExecuteCheat();
    }
}
```

**直接调用底层 Action（绕过作弊系统）：**

```csharp
// 直接给玩家英雄增加 1000 金币，不经过作弊菜单
GiveGoldAction.ApplyBetweenCharacters(null, Hero.MainHero, 1000, true);
```

**创建自定义金额的作弊项：**

```csharp
// 复制 Add1000GoldCheat 的模式，创建自定义金额版本
public class Add5000GoldCheat : GameplayCheatItem
{
    public override void ExecuteCheat()
    {
        GiveGoldAction.ApplyBetweenCharacters(null, Hero.MainHero, 5000, true);
    }

    public override TextObject GetName()
    {
        return new TextObject("{=custom}Add 5000 Gold", null);
    }
}
```

### 坑

- `Add1000GoldCheat` 是硬编码的固定金额（1000），无法通过参数调整。如果需要不同金额，必须创建新的作弊项类。
- `GiveGoldAction.ApplyBetweenCharacters` 的第一个参数传 `null` 表示金币来自"系统"而非某个角色，不会触发交易相关的外交或声誉影响。
- 作弊项只在 SandBox 模块中注册，如果 mod 禁用了 SandBox 模块，作弊菜单中将不会出现该项。
- `GetName()` 返回的 `TextObject` 使用本地化键 `{=KLbeF6gf}`，直接修改字符串内容会导致本地化失效。

## 关键成员

- `ExecuteCheat()` — `public override void`，作弊执行入口。调用 `GiveGoldAction.ApplyBetweenCharacters` 将 1000 金币转入玩家英雄账户，第四个参数 `true` 表示禁用通知。
- `GetName()` — `public override TextObject`，返回作弊项在菜单中显示的名称。使用本地化键 `{=KLbeF6gf}` 对应的文本 "Add 1000 Gold"。

## 真实示例

```csharp
// 示例：在 mod 中实现一个自定义作弊项并注册到作弊系统
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;
using TaleWorlds.Localization;
using SandBox;

// 1. 定义自定义作弊项
public class Add10000GoldCheat : GameplayCheatItem
{
    public override void ExecuteCheat()
    {
        GiveGoldAction.ApplyBetweenCharacters(null, Hero.MainHero, 10000, true);
    }

    public override TextObject GetName()
    {
        return new TextObject("{=custom_add_10000_gold}Add 10000 Gold", null);
    }
}

// 2. 在 GameplayCheatsManager 中注册（需要 Harmony 补丁或修改源码）
// 原始注册位置：GameplayCheatsManager.cs:11
// yield return new Add10000GoldCheat();

// 3. 也可以直接调用底层 Action 实现更灵活的操作
public void GiveGoldToClan(Clan clan, int amount)
{
    GiveGoldAction.ApplyBetweenCharacters(null, clan.Leader, amount, false);
}
```

## 参见

- [GameplayCheatItem](../GameplayCheatItem) — 作弊项抽象基类，定义 ExecuteCheat 和 GetName 接口
- [GameplayCheatsManager](../GameplayCheatsManager) — 作弊项注册中心，管理所有地图和任务作弊项
- [GiveGoldAction](../GiveGoldAction) — 实际执行金币转移的底层 Action 类

## 导航

- [本区域目录](../)
