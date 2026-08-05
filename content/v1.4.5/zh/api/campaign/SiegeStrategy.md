---
title: "SiegeStrategy"
description: "带有稳定对象身份和本地化说明的围城策略对象，由围城 Action Model 解读其优先级。"
---
# SiegeStrategy

**命名空间：** `TaleWorlds.CampaignSystem.Siege`  
**模块：** `TaleWorlds.CampaignSystem`  
**类型：** `public class SiegeStrategy : MBObjectBase`  
**基类：** [`MBObjectBase`](../../core/MBObjectBase)  
**源码：** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Siege/SiegeStrategy.cs`

## 职责

`SiegeStrategy` 是对象系统中的围城优先级记录：它提供名称和说明，被 `ISiegeEventSide` 持有，再由 `SiegeStrategyActionModel` 解读为具体的围城动作。

## 心智模型

这是数据对象，不是决定攻城器械动作的 AI 算法。`DefaultSiegeStrategies` 用稳定字符串 ID 创建已注册对象，初始化本地化 `Name` 与 `Description`，并公开内置集合。活动事件的一侧保存一个策略引用；`SiegeEvent.AdvanceStrategy` 请求逻辑动作时，Action Model 才会读取它。

大多数 Mod 应读取内置记录，或在明确的准备阶段把内置记录设置到活动的一侧。不要把 `Initialize` 当作每场围城的重置函数，也不要创建与现有 ID 冲突、未注册的 `SiegeStrategy`。它继承 `MBObjectBase`，对象注册和存档身份都属于安全边界。

## 注册与依赖流程

```text
DefaultSiegeStrategies 构造
  -> RegisterPresumedObject(new SiegeStrategy(stringId))
  -> Initialize(TextObject name, TextObject description)
  -> DefaultSiegeStrategies.PreserveStrength / PrepareAgainstAssault / CounterBombardment / PrepareAssault / BreachWalls / WearOutDefenders / Custom
围城事件一侧
  -> ISiegeEventSide.SiegeStrategy
  -> Campaign.Current.Models.SiegeStrategyActionModel
  -> SiegeEvent.DoSiegeAction
```

`All` 读取 `Campaign.Current.AllSiegeStrategies`，所以它反映当前战役的对象注册表，而不是可以在运行时任意删除/替换的列表。内置进攻方选项是 `PrepareAssault`、`BreachWalls`、`WearOutDefenders`、`PreserveStrength`、`Custom`；防守方选项是 `PrepareAgainstAssault`、`CounterBombardment`、`PreserveStrength`、`Custom`。

相关页面：[`DefaultSiegeStrategies`](../DefaultSiegeStrategies)、[`ISiegeEventSide`](../ISiegeEventSide)、[`SiegeEvent`](../SiegeEvent)、[`SiegeStrategyActionModel`](../SiegeStrategyActionModel)。对象基类生命周期见 [`MBObjectBase`](../../core/MBObjectBase)。

## 成员

### `All`

`public static MBReadOnlyList<SiegeStrategy> All { get; }`

返回 `Campaign.Current.AllSiegeStrategies`。这是战役对象注册表的只读视图，不是可安全删除或替换的运行时策略列表。

### `Name` 与 `Description`

`public TextObject Name { get; }`  
`public TextObject Description { get; }`

两者由 `Initialize` 赋值，用于本地化 UI 和策略解释。它们不改变动作评分算法；行为仍由活动围城 Model 决定。

### `SiegeStrategy(string stringId)`

公开构造函数提供对象系统身份。游戏内注册路径使用稳定 ID，例如 `siege_strategy_breach_walls`，然后通过 `Game.Current.ObjectManager.RegisterPresumedObject` 注册，再执行初始化。

### `Initialize`

`public void Initialize(TextObject name, TextObject description)`

调用 `MBObjectBase.Initialize()`，写入两个本地化值，并调用 `AfterInitialized()`。它是对象注册生命周期方法。对活动记录重复调用不是普通的改标签操作；对未注册对象调用也不会使它成为有效战役策略。

## 真实使用示例

读取已注册选项不需要创建新对象，并遵循战役注册表：

```csharp
SiegeStrategy selected = DefaultSiegeStrategies.BreachWalls;

if (selected != null && PlayerSiege.PlayerSiegeEvent != null)
{
    ISiegeEventSide attacker = PlayerSiege.PlayerSiegeEvent.GetSiegeEventSide(BattleSideEnum.Attacker);
    attacker.SetSiegeStrategy(selected);
}
```

这会修改进攻方活动一侧的策略引用，不会直接建造器械；下一次策略推进仍由 `Campaign.Current.Models.SiegeStrategyActionModel` 解读。

## 崩溃与存档边界

- 不要在运行中的战役使用 `new SiegeStrategy("siege_strategy_breach_walls")`。这会生成第二个对象身份，而不是取回已注册记录，并可能与对象管理器冲突。
- 不要每次围城开始时调用 `Initialize`。内置记录在 `DefaultSiegeStrategies` 注册阶段初始化，并在多场围城间复用。
- 策略只有挂在活动的 `ISiegeEventSide` 上才有意义；修改名称不会更新已结束事件，结束后修改一侧也可能保留指向已清理围城状态的引用。
- 公开 setter 只改变所选策略，不验证策略是否适合进攻方或防守方；应从角色对应的内置集合中选择。
- `TextObject` 应保持本地化和稳定。用短生命周期 UI 对象替换标签，会让存档引用和策略显示难以复现。

## 导航

- **父级：** [Campaign API 目录](../)
- **同级：** [`DefaultSiegeStrategies`](../DefaultSiegeStrategies)、[`SiegeEventManager`](../SiegeEventManager)、[`SiegeEvent`](../SiegeEvent)、[`SiegeState`](../SiegeState)
- **相关：** [`ISiegeEventSide`](../ISiegeEventSide)、[`BesiegerCamp`](../BesiegerCamp)、[`SiegeStrategyActionModel`](../SiegeStrategyActionModel)、[`MBObjectBase`](../../core/MBObjectBase)
