---
title: "GameModel"
description: "所有玩法模型的抽象根类：没有成员，只有类型标记。它的意义在于 GameModelsManager 能按类型做解析与覆盖。"
---

# GameModel

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public abstract class GameModel`
**Base:** 无
**Source:** `bannerlord-1.5.3/TaleWorlds.Core/GameModel.cs`

## 概述

`GameModel` 是 Bannerlord 所有玩法模型的抽象根类，1.5.3 里它是**一个空类**——没有字段、没有方法、没有抽象成员。它的全部作用是给「模型」这一概念一个共同类型，使 [GameModelsManager](../GameModelsManager) 能用 `as T` 把一个混合列表里的模型按类型挑出来。真正的行为由派生类定义（例如繁荣度模型有 `CalculateProsperityChange`，派系模型有一整套外交方法）。

## 心智模型

三个层次，各司其职：

- **`GameModel`**：类型标记。所有模型的共同祖先。`GameModelsManager._gameModels` 是 `MBList<GameModel>`。
- **`MBGameModel<T>`**：包装层。给「覆盖原实现」提供 `BaseModel`。
- **具体模型**：抽象接口层（如 `TaleWorlds.CampaignSystem.ComponentInterfaces.SettlementProsperityModel`）+ 官方默认实现（如 `DefaultSettlementProsperityModel`）+ 你的覆盖实现。

注意抽象接口层本身也继承 `GameModel`，且通常还继承 `MBGameModel<自身>`——例如 `SettlementProsperityModel : MBGameModel<SettlementProsperityModel>`，官方实现 `DefaultSettlementProsperityModel : SettlementProsperityModel`。所以注册与覆盖是同一个类型轴上的操作。

**常见误用与坑**

1. **继承 `GameModel` 却不用 `MBGameModel<T>`**：你就失去了 `BaseModel`，无法「委托给原实现」，只能整份重写。
2. **按 `GetType() == typeof(DefaultXxxModel)` 判断**：模型是可能被覆盖的，判断要用 `is` 或直接读 `Campaign.Current.Models.XxxModel.GetType().Name` 做诊断。
3. **在 Core 层引用 CampaignSystem 类型**：`GameModel` 在 `TaleWorlds.Core`，方向是 Core → 无依赖。任何模型实现都引用 CampaignSystem 才正常，Core 不引用 CampaignSystem。
4. **以为基类空就没有抽象方法约束**：没有约束意味着你可以注册任何 `GameModel` 子类进 starter，引擎不会报错——只有真正被查询时才发现类型不匹配。

## 成员与调用时机

无成员。作为基类使用时：

- 你的模型 `class MyXxxModel : MBGameModel<XxxModel>`，其中 `XxxModel` 是官方抽象接口（继承自 `GameModel`）。
- 通过 `CampaignGameStarter.AddModel<T>(...)` 注册，通过 `Campaign.Current.Models.XxxModel` 读取。
- 需要走原实现时读 `BaseModel`；不需要时可以直接继承官方 `Default*Model` 并 override 个别方法（但那会锁死一个具体实现，官方换实现时你就断了升级路径——**优先包抽象接口**）。

## 真实示例

```csharp
// 一个自建模型的完整骨架：抽象接口 + 官方默认实现 + 自己的覆盖
public abstract class MySupplyModel : MBGameModel<MySupplyModel>
{
    public abstract float GetDailyConsumption(MobileParty party);
}

public class DefaultSupplyModel : MySupplyModel
{
    public override float GetDailyConsumption(MobileParty party)
    {
        return party.Party.PartySize * 0.5f;
    }
}

public class MySupplyModelOverride : MySupplyModel
{
    public override float GetDailyConsumption(MobileParty party)
    {
        // BaseModel 在 starter.AddModel<T> 时被填好
        float baseValue = BaseModel != null ? BaseModel.GetDailyConsumption(party) : 0f;
        return party.IsPlayerParty ? baseValue * 0.8f : baseValue;
    }
}

// 注册后查询（走 GameModels 的强类型属性，或自己保存一个引用）
Debug.Print("consumption = " + myModel.GetDailyConsumption(Campaign.Current.MainParty));
```

## 风险与边界

- **零成员 = 零保护**：它不会阻止你写出与官方语义不符的实现。所有契约都靠派生类的抽象方法声明。
- **注册不校验**：把一个只有 `GameModel` 基类的空类注册进 starter 不会报错，只在查询时返回 null 或行为异常。开发期用 `starter.GetModel<T>()` 自查。
- **类型轴即存档兼容性**：模型不进存档，所以改名/改泛型参数不影响老存档；但会影响其他 mod 的 `is` 判断与 `GetModel<T>()` 查询——属于公共 API 变更。
- **Core 是最底层**：任何模型实现都不应让 Core 反向依赖 CampaignSystem。放错程序集会引入循环引用。

## 依赖关系

- [MBGameModel](../MBGameModel) — 提供 `BaseModel` 的包装层，所有「覆盖而非重写」的起点
- [GameModelsManager](../GameModelsManager) — 按类型从模型列表里解析实例
- [GameModels](../../campaign/GameModels) — 强类型属性容器，模型的实际读取入口
- [DefaultSettlementProsperityModel](../../campaign-ext/DefaultSettlementProsperityModel) — 一个由「抽象接口 + Default 实现」构成的完整样例