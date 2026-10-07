---
title: "Add100InfluenceCheat"
description: "Add100InfluenceCheat 作弊项：给玩家氏族增加 100 影响力的 SandBox 地图作弊。"
---
# Add100InfluenceCheat

**Namespace:** SandBox
**Module:** SandBox
**Type:** `public class Add100InfluenceCheat : GameplayCheatItem`
**Base:** `GameplayCheatItem`
**File:** `Modules.SandBox/SandBox/Sandbox/Add100InfluenceCheat.cs`

## 概述

`Add100InfluenceCheat` 是 SandBox 模块中的一个地图作弊项，功能是给玩家氏族增加 100 影响力。它继承自 `GameplayCheatItem`，通过 `GameplayCheatsManager.GetMapCheatList()` 注册到地图作弊菜单中。当玩家在作弊菜单中选择该项时，`ExecuteCheat()` 方法被调用，内部通过 `ChangeClanInfluenceAction.Apply` 直接修改玩家氏族的影响力数值。

## 心智模型

`Add100InfluenceCheat` 与 `Add1000GoldCheat` 是同一模式下的姊妹作弊项——区别仅在于操作的游戏资源不同：一个操作金币，一个操作影响力。影响力是战役系统中氏族层面的核心资源，用于投票、决策、招募部队等。`ChangeClanInfluenceAction.Apply` 是实际执行影响力修改的底层 API，它直接调整氏族的 `Influence` 属性，不经过任何中间流程。

对 mod 开发者而言，这个作弊项展示了如何通过 `GameplayCheatItem` 体系添加一个修改氏族资源的作弊项。理解这个模式后，可以举一反三创建修改其他氏族资源（如声望、兵力）的作弊项。需要注意的是，影响力是氏族级别的资源，不是英雄级别的——这与金币不同，金币可以精确到单个英雄。

## 怎么用

### 怎么拿到

`Add100InfluenceCheat` 不需要手动实例化——它由 `GameplayCheatsManager` 在 `GetMapCheatList()` 方法中自动创建并注册。

- 源码位置：`Add100InfluenceCheat.cs:1`（using 声明），类定义从 `Add100InfluenceCheat.cs:8` 开始
- 入口：`ExecuteCheat()` 定义在 `Add100InfluenceCheat.cs:10`，是作弊执行入口
- 注册位置：`GameplayCheatsManager.cs:12` 中的 `yield return new Add100InfluenceCheat()`
- 使用方式：通过地图作弊菜单选择，或通过 `GameplayCheatsManager.GetMapCheatList()` 遍历获取实例

### 典型用法

**通过作弊系统执行：**

```csharp
// 遍历地图作弊列表，找到并执行 Add100InfluenceCheat
var cheatList = GameplayCheatsManager.GetMapCheatList();
foreach (var cheat in cheatList)
{
    if (cheat is Add100InfluenceCheat influenceCheat)
    {
        influenceCheat.ExecuteCheat();
    }
}
```

**直接调用底层 Action（绕过作弊系统）：**

```csharp
// 直接给玩家氏族增加 100 影响力
ChangeClanInfluenceAction.Apply(Clan.PlayerClan, 100f);
```

**创建自定义影响力的作弊项：**

```csharp
// 复制 Add100InfluenceCheat 的模式，创建自定义金额版本
public class Add500InfluenceCheat : GameplayCheatItem
{
    public override void ExecuteCheat()
    {
        ChangeClanInfluenceAction.Apply(Clan.PlayerClan, 500f);
    }

    public override TextObject GetName()
    {
        return new TextObject("{=custom}Add 500 Influence", null);
    }
}
```

### 坑

- `Add100InfluenceCheat` 是硬编码的固定数值（100），无法通过参数调整。如果需要不同数值，必须创建新的作弊项类。
- `ChangeClanInfluenceAction.Apply` 直接修改氏族影响力，不会触发任何相关事件或通知。如果 mod 需要在影响力变化时执行额外逻辑，需要自行监听。
- 影响力是氏族级别资源，`Clan.PlayerClan` 指向玩家控制的氏族。如果玩家尚未创建氏族（游戏早期），该调用可能无效。
- 作弊项只在 SandBox 模块中注册，如果 mod 禁用了 SandBox 模块，作弊菜单中将不会出现该项。
- `GetName()` 返回的 `TextObject` 使用本地化键 `{=6TgRwB2Q}`，直接修改字符串内容会导致本地化失效。

## 关键成员

- `ExecuteCheat()` — `public override void`，作弊执行入口。调用 `ChangeClanInfluenceAction.Apply` 将 100 影响力添加到玩家氏族，第二个参数为 `float` 类型。
- `GetName()` — `public override TextObject`，返回作弊项在菜单中显示的名称。使用本地化键 `{=6TgRwB2Q}` 对应的文本 "Add 100 Influence"。

## 真实示例

```csharp
// 示例：在 mod 中实现一个自定义影响力作弊项并注册到作弊系统
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;
using TaleWorlds.Localization;
using SandBox;

// 1. 定义自定义作弊项
public class Add1000InfluenceCheat : GameplayCheatItem
{
    public override void ExecuteCheat()
    {
        ChangeClanInfluenceAction.Apply(Clan.PlayerClan, 1000f);
    }

    public override TextObject GetName()
    {
        return new TextObject("{=custom_add_1000_influence}Add 1000 Influence", null);
    }
}

// 2. 在 GameplayCheatsManager 中注册（需要 Harmony 补丁或修改源码）
// 原始注册位置：GameplayCheatsManager.cs:12
// yield return new Add1000InfluenceCheat();

// 3. 也可以直接调用底层 Action 实现更灵活的操作
public void GiveInfluenceToClan(Clan clan, float amount)
{
    ChangeClanInfluenceAction.Apply(clan, amount);
}

// 4. 批量给多个氏族增加影响力
public void GiveInfluenceToAllKingdoms(Kingdom kingdom, float amount)
{
    foreach (Clan clan in kingdom.Clans)
    {
        ChangeClanInfluenceAction.Apply(clan, amount);
    }
}
```

## 参见

- [GameplayCheatItem](../GameplayCheatItem) — 作弊项抽象基类，定义 ExecuteCheat 和 GetName 接口
- [GameplayCheatsManager](../GameplayCheatsManager) — 作弊项注册中心，管理所有地图和任务作弊项
- [ChangeClanInfluenceAction](../ChangeClanInfluenceAction) — 实际执行影响力修改的底层 Action 类

## 导航

- [本区域目录](../)
