---
title: "MBGameModel"
description: "模型包装基类：让自定义模型能拿到被替换掉的原实现（BaseModel），实现「改一点、其余照旧」的覆盖方式。"
---

# MBGameModel

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public abstract class MBGameModel<T> : GameModel where T : GameModel`
**Base:** `GameModel`（抽象空类）
**Source:** `bannerlord-1.5.3/TaleWorlds.Core/MBGameModel.cs`

## 概述

`MBGameModel<T>` 是官方为「模型覆盖」准备的包装基类，1.5.3 里只有 19 行：泛型参数 `T` 指明**被包装的模型类型**，一个 `private protected` 的 `BaseModel` 属性，以及一个 `Initialize(T baseModel)` 方法。`CampaignGameStarter.AddModel<T>(MBGameModel<T> gameModel)` 会在注册时自动调用 `Initialize`，把当时生效的原模型塞进 `BaseModel`。你的覆盖实现里就能写 `BaseModel.CalculateXxx(...)`，未覆盖的行为原样继承。

## 心智模型

```
starter.AddModel<SettlementProsperityModel>(new MyProsperityModel());
                              │
                              ├─ GetModel<SettlementProsperityModel>() → 当前生效的原模型
                              └─ gameModel.Initialize(baseModel) → BaseModel = 原模型
Campaign.Models.SettlementProsperityModel → MyProsperityModel 实例
```

三点要记：

1. **泛型参数是「被覆盖的类型」，不是「自己的类型」**。`MyProsperityModel : MBGameModel<SettlementProsperityModel>` 覆盖的是 `SettlementProsperityModel`。
2. **`BaseModel` 是 `private protected`**：同一程序集内可用，外部派生类也能通过基类访问，但**不能从外部直接 set**。它只能由 `Initialize` 填充。
3. **`Initialize` 只被 starter 调用一次**。如果原模型当时不存在（没人注册过 `T`），`baseModel` 是 `null`，`BaseModel` 保持 null。

**常见误用与坑**

1. **先 `BaseModel.X()` 再判空**。原模型缺席时直接 NRE。养成 `BaseModel != null ? ... : 默认值` 的习惯，或者在自己的启动流程里断言 `starter.GetModel<T>() != null`。
2. **注册顺序反了**：`AddModel<T>` 抓的是**此刻**生效的模型。如果你先于原生模块注册，抓到的可能已经是 `null`（原生还没注册）。
3. **递归调用**：`BaseModel` 链如果被环状注册（A 的 BaseModel 是 B，B 的 BaseModel 是 A）会栈溢出。正常不会发生，但两个 mod 互相包装时要小心。
4. **把 `Initialize` 当构造用**：它是包装器专用的，不要在自己的构造函数里调。

## 成员与调用时机

- `private protected T BaseModel { protected get; private set; }`：**只读**访问的原模型引用。派生类里读它来决定「走原逻辑还是覆盖逻辑」。
- `public void Initialize(T baseModel)`：由 [CampaignGameStarter](../../campaign/CampaignGameStarter) 的 `AddModel<T>(MBGameModel<T>)` 调用，把当前模型装进 `BaseModel`。**不要自己调用**。

## 真实示例

```csharp
// 包装式覆盖：PartyTradeModel 的两个真实成员是
//   float GetTradePenaltyFactor(MobileParty party)
//   int  CaravanTransactionHighestValueItemCount { get; }
public class MyTradeModel : MBGameModel<PartyTradeModel>
{
    public override float GetTradePenaltyFactor(MobileParty party)
    {
        // BaseModel 是注册时刻生效的官方实现
        if (BaseModel == null) return 1f;
        float factor = BaseModel.GetTradePenaltyFactor(party);
        // LeaderHero 是真实属性（MobileParty.cs:1602）
        return party.LeaderHero == Hero.MainHero ? factor * 0.5f : factor;
    }

    public override int CaravanTransactionHighestValueItemCount
    {
        get { return BaseModel != null ? BaseModel.CaravanTransactionHighestValueItemCount : 0; }
    }
}

// 注册时会被自动 Initialize
protected override void OnGameStart(Game game, IGameStarter gameStarterObject)
{
    base.OnGameStart(game, gameStarterObject);
    var starter = (CampaignGameStarter)gameStarterObject;
    if (starter.GetModel<PartyTradeModel>() == null)
        Debug.Print("warning: no base trade model to wrap");
    starter.AddModel<PartyTradeModel>(new MyTradeModel());
}
```

## 风险与边界

- **无存档风险**：模型不进存档，每次战役启动重建；风险全在加载顺序与 `BaseModel` 为空。
- **`T` 必须是有默认实现的模型类型**：如果 `T` 本身是 `MBGameModel<U>`，会形成包装套包装，`BaseModel` 拿到的是中间层（通常也是 `null` 链的终点）。要么包官方 `Default*Model`，要么包一个已经完整实现的模型。
- **程序集可见性**：`private protected` 意味着 `Initialize` 的 setter 部分对外部程序集不可见。如果你想在自己的行为里「运行时重新包装」，唯一途径是再走一次 starter 注册（在新战役启动时）。
- **版本升级**：基类只随版本增加成员，不改签名；模型抽象方法的签名变化才会让你编译失败——这是好事。

## 依赖关系

- [GameModel](../GameModel) — 无成员的抽象根类，`MBGameModel<T>` 与所有官方模型都继承它
- [GameModelsManager](../GameModelsManager) — 解析并返回覆盖后的模型实例
- [GameModels](../../campaign/GameModels) — 126 个模型属性的容器，覆盖结果在这里读取
- [CampaignGameStarter](../../campaign/CampaignGameStarter) — `AddModel<T>(MBGameModel<T>)` 触发 `Initialize`