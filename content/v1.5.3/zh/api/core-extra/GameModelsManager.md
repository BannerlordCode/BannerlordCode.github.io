---
title: "GameModelsManager"
description: "模型列表容器与解析器：持有一个 GameModel 混合列表，用末尾优先的 GetGameModel<T>() 解析出当前生效的模型实例。"
---

# GameModelsManager

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public abstract class GameModelsManager`
**Base:** 无（抽象基类）
**Source:** `bannerlord-1.5.3/TaleWorlds.Core/GameModelsManager.cs`

## 概述

`GameModelsManager` 是一个只有 40 行的小基类，做两件事：构造函数把传入的 `IEnumerable<GameModel>` 转成内部的 `MBList<GameModel>`；提供 `GetGameModel<T>()` 按类型解析实例，以及 `GetGameModels()` 返回全部列表。实际的强类型属性表由派生类 [GameModels](../../campaign/GameModels) 提供。它之所以值得单独一页，是因为**「末尾优先」这条解析规则**决定了 mod 覆盖模型能不能生效。

## 心智模型

```
protected GameModelsManager(IEnumerable<GameModel> inputComponents)
    → _gameModels = inputComponents.ToMBList<GameModel>()     // 保持注册顺序

protected T GetGameModel<T>()
    → for (i = Count-1; i >= 0; i--) if (_gameModels[i] is T) return it;
      return default(T)
```

因为是**倒序**扫描，返回的是**最后注册**的那个匹配项。这条规则在 `CampaignGameStarter.GetModel<T>()` 里是同样的实现（它遍历自己的 `_models` 末尾），两条路径语义一致，所以 `AddModel<T>(MBGameModel<T>)` 抓到的 `BaseModel` 与最终生效的模型能对上。

**常见误用与坑**

1. **以为「先注册先赢」**。倒序扫描意味着后注册者覆盖先注册者。加载顺序（`SubModuleLoadOrder`）是覆盖能否生效的**唯一**决定因素。
2. **在 `GameModels` 构造完成后再往 starter 加模型**。属性已经填完了，之后加的模型不会被解析——除了那些通过 `GameModel` 自身被动态查询的。
3. **同类型注册多个并期待叠加**。解析只返回一个实例，不会合并。想「原生 + mod 叠加」必须自己做（在自己的模型里调 `BaseModel`）。
4. **`GetGameModel<T>()` 返回 `default(T)` 而不是抛异常**。判断覆盖是否生效要显式判空。

## 成员与调用时机

- `protected GameModelsManager(IEnumerable<GameModel> inputComponents)`：把外部列表转成内部 `MBList<GameModel>`。**由派生类构造函数调用**，mod 不直接用。
- `protected T GetGameModel<T>() where T : GameModel`：倒序查找第一个类型匹配的模型，返回 `default(T)` 表示没有。派生类在构造期用它填强类型属性。
- `public MBReadOnlyList<GameModel> GetGameModels()`：返回全部已注册模型。调试覆盖问题时的第一站——能直接看到列表里有几个同类模型、谁在最后。

## 真实示例

```csharp
// 派生类在构造期把混合列表解析成强类型属性
public class MyModels : GameModelsManager
{
    public SettlementProsperityModel Prosperity { get; private set; }
    public PartySpeedModel Speed { get; private set; }

    public MyModels(IEnumerable<GameModel> inputComponents) : base(inputComponents)
    {
        Prosperity = GetGameModel<SettlementProsperityModel>();
        Speed = GetGameModel<PartySpeedModel>();
    }
}

// 诊断覆盖是否生效：列表内容 + 末尾优先的实际取值
foreach (GameModel model in Campaign.Current.Models.GetGameModels())
    Debug.Print("registered: " + model.GetType().FullName);

Debug.Print("active prosperity model = "
    + Campaign.Current.Models.SettlementProsperityModel.GetType().FullName);
```

## 风险与边界

- **无存档风险**：模型列表不进存档，每次战役启动重建。
- **列表顺序即优先级**：这是本类唯一的、也是最容易踩的语义。把覆盖验证写进你的 `OnGameStart`（打印实际生效的类型），比事后在崩溃堆栈里猜要便宜得多。
- **抽象类不承载业务**：`GameModelsManager` 在 Core 层，被 [GameModels](../../campaign/GameModels) 继承。扩展它时不要引入 CampaignSystem 依赖，否则 Core 反向依赖游戏逻辑层。
- **`ToMBList` 的快照语义**：构造时拷贝一份，之后 starter 上的变更不影响已构造的 manager。这是有意为之的「冻结」语义。

## 依赖关系

- [GameModel](../GameModel) — 列表元素类型
- [GameModels](../../campaign/GameModels) — 主要派生类，126 个强类型属性都由 `GetGameModel<T>()` 填出
- [MBGameModel](../MBGameModel) — 覆盖型模型通过它拿到 `BaseModel`
- [CampaignGameStarter](../../campaign/CampaignGameStarter) — 模型注册源，顺序决定覆盖结果