---
title: "SandBox 扩展实战 — 替换与注册自定义数值模型（Model）（v1.3.15）"
description: "端到端可运行范例：在 OnGameStart 用 CampaignGameStarter.AddModel 覆盖/新增数值模型（如 PartyWageModel），讲清 GetModel<T> 末尾优先的按类型覆盖语义、MBGameModel<T> 的引擎内部委托，以及覆盖会全局生效、顺序决定胜者等风险。"
---

# SandBox 扩展实战 — 替换与注册自定义数值模型（Model）

> 本页是 [SandBox 阅读政策](../../architecture/sandbox-native-policy/) 实战系列的第三篇。前两篇讲了 [能存盘的 Behavior](../sandbox-extension-example/) 和 [GameMenu/对话链路](../sandbox-gamemenu-dialog/)。本篇回答一个高频问题：**「我想改部队工资 / 外交得分 / 村庄忠诚度的算法，该找 Action 还是 Model？」**——答案：数值计算归 **Model**，世界状态变更归 **Action**（见 [Actions 总则](../../api/campaign-ext/actions/)）。本页只讲 Model。

## 一句话职责

如果你想改变某个**纯数值计算**的结果（工资、速度、士气、忠诚度、建造消耗……），你要写的不是 Behavior，而是一个 **`GameModel` 子类**，并在 `MBSubModuleBase.OnGameStart` 里用 `CampaignGameStarter.AddModel(...)` 把它注册进去——引擎按**类型**解析模型，最后注册的同类模型胜出。

## 心智模型

```
OnGameStart(Game, IGameStarter)            ← 你的 mod 入口
   │ gameStarterObject as CampaignGameStarter
   ▼
starter.AddModel(new MyPartyWageModel())   ← 注册你的模型（追加到 _models 列表）

运行时任何代码要算工资：
   Campaign.Current.Models.PartyWageModel          ← 强类型属性（构造时解析一次）
   或  Campaign.Current.Models.GetModel<PartyWageModel>()  ← 基类方法：从 _models 末尾向前扫，返回首个匹配
```

- **谁创建/持有**：所有 `GameModel` 实例在战役启动时收集进 `GameModels`（即 `Campaign.Current.Models`）；`GetModel<T>()` 与强类型属性都按**类型**解析。
- **所在层**：Campaign 层（数值计算中枢），不是 UI 也不是 Mission。
- **何时用**：改任何「算出来」的值——工资、party 速度/容量、士气、村庄忠诚/安全/繁荣、外交、建造、怀孕、婚姻、招募成本等（[Models 家族手册](../../api/campaign-ext/models/) 有全清单）。
- **何时不要用**：改「已经发生的世界状态」——给钱、杀人、换据点归属、改关系，这些必须走 `*Action.Apply`（见 [Actions 总则](../../api/campaign-ext/actions/) 与 [崩溃边界 · 世界变更须走 Action](../../architecture/crash-boundaries/)）。Model 只决定「怎么算」，不亲手改字段。

## 最小可运行范例 — 覆盖部队工资模型

`PartyWageModel` 的关键方法（v1.3.15，来自 `ComponentInterfaces/PartyWageModel.cs`）：

```csharp
public abstract int GetCharacterWage(CharacterObject character);
public abstract ExplainedNumber GetTotalWage(MobileParty mobileParty, TroopRoster troopRoster, bool includeDescriptions = false);
public abstract ExplainedNumber GetTroopRecruitmentCost(CharacterObject troop, Hero buyerHero, bool withoutItemCost = false);
```

覆盖它的最小可运行写法：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces; // PartyWageModel
using TaleWorlds.Core;                               // IGameStarter, GameModel
using TaleWorlds.MountAndBlade;                      // MBSubModuleBase

// 1) SubModule：战役启动时注册模型（每局战役调用一次）
public class MySubModule : MBSubModuleBase
{
    protected internal override void OnGameStart(Game game, IGameStarter gameStarterObject)
    {
        if (gameStarterObject is CampaignGameStarter starter)
        {
            starter.AddModel(new MyPartyWageModel()); // 追加；末尾优先，覆盖原版
        }
    }
}

// 2) 直接子类化具体模型，重写你要改的算法
public class MyPartyWageModel : PartyWageModel
{
    public override int GetCharacterWage(CharacterObject character)
    {
        // 举例：所有角色工资打 9 折（真实逻辑按你的平衡需求写）
        return (int)(base.GetCharacterWage(character) * 0.9f);
    }

    public override ExplainedNumber GetTotalWage(MobileParty mobileParty, TroopRoster troopRoster, bool includeDescriptions = false)
    {
        ExplainedNumber result = base.GetTotalWage(mobileParty, troopRoster, includeDescriptions);
        result.AddFactor(-0.1f, new TaleWorlds.Localization.TextObject("{=!}我的工资修正"));
        return result;
    }

    public override ExplainedNumber GetTroopRecruitmentCost(CharacterObject troop, Hero buyerHero, bool withoutItemCost = false)
        => base.GetTroopRecruitmentCost(troop, buyerHero, withoutItemCost);
}
```

### 只想「保留原版再微调」？先抓原版引用

`MBGameModel<T>` 是引擎自己的包装器（它的 `BaseModel` 是 `private protected`，**mod 跨程序集访问不到**），所以 mod 直接子类化具体模型、用 `base.方法()` 拿原版行为是最省事的做法（如上例）。若你要的基类方法不是 `virtual`/没有 `base` 可调用，可在注册前先捕获原版实例再委托：

```csharp
private PartyWageModel _vanilla;
protected internal override void OnGameStart(Game game, IGameStarter gameStarterObject)
{
    if (gameStarterObject is CampaignGameStarter starter)
    {
        _vanilla = starter.GetModel<PartyWageModel>(); // 注册前抓原版
        starter.AddModel(new MyPartyWageModel(_vanilla));
    }
}
```

### 为什么这样写（对照契约）

| 步骤 | 真实 API | 错写法（不生效 / 全局错乱） |
|------|----------|------------------------------|
| 注册 | `starter.AddModel(new MyPartyWageModel())` | `new MyPartyWageModel()` 后直接赋值 `Campaign.Current.Models.PartyWageModel = ...`（属性只读，且不被注册/存档） |
| 解析 | `Campaign.Current.Models.GetModel<PartyWageModel>()` | 假设你的是第一个匹配——其实 `GetModel<T>` 从**末尾向前**扫，最后注册者胜 |
| 委托 | `base.GetTotalWage(...)` | 直接 `return new ExplainedNumber(...)` 完全重算（易丢原版加成/描述） |
| 新增模型 | 自定义一个 `GameModel` 子类 `AddModel`，用 `GetModel<MyModel>()` 取用 | 把它存成静态单例自己管理（脱离引擎生命周期，读档/多战役会乱） |

## 依赖关系（可点击）

- **上游 / 入口**
  - [MBSubModuleBase](../../api/core/MBSubModuleBase/) — `OnGameStart` 注册模型的总入口
  - [CampaignGameStarter](../../api/campaign-ext/CampaignGameStarter/) — `AddModel` / `GetModel<T>` 的唯一落点
- **本页主角**
  - [GameModels](../../api/campaign-ext/GameModels/) — `Campaign.Current.Models`，全部强类型模型属性与 `GetModel<T>()` 解析
  - [MBGameModel](../../api/core-extra/MBGameModel/) — 引擎内部 `MBGameModel<T>` 包装器（`BaseModel` 为程序集内部）
  - [PartyWageModel](../../api/campaign-ext/PartyWageModel/) — 本例覆盖的模型（其它见 [Models 家族手册](../../api/campaign-ext/models/)）
  - [ExplainedNumber](../../api/campaign-ext/ExplainedNumber/) — 模型返回值类型（带加成描述的数值）
- **相关实体 / 系统**
  - [MobileParty](../../api/campaign/MobileParty/) / [CharacterObject](../../api/campaign/CharacterObject/) / [Hero](../../api/campaign/Hero/) — 模型计算的输入
  - [Actions 总则](../../api/campaign-ext/actions/) — 「改世界状态」走 Action，不要在这里改字段
- **若你要加行为而非模型**：回 [第一篇实战（能存盘的 Behavior）](../sandbox-extension-example/)。

## 风险段（触达即必读）

1. **覆盖是全局的**：你注册的模型对整个战役的所有计算生效，会和其它也覆盖同模型的 mod 互相影响——用模块加载顺序协调，或避免覆盖热门模型。
2. **注册顺序决定胜者**：`GetModel<T>()` 从 `_models` **末尾向前**返回首个匹配。若另一个 mod 在你的 `OnGameStart` 之后也覆盖了同类模型，它的会胜出；反之则你的胜。不要假设「我是唯一覆盖者」。
3. **强类型属性与 `GetModel<T>()` 可能指向不同实例**：`Campaign.Current.Models.PartyWageModel` 这类属性在模型集合**构造时**解析一次；而 `GetModel<T>()` 每次都按末尾优先实时扫。绝大多数情况下两者一致（集合由完整 `_models` 构造），但如果你在集合构造**之后**才 `AddModel`，属性不会自动更新——务必在 `OnGameStart` 内、集合构建前完成注册。
4. **不要手动赋值 `Campaign.Current.Models.X`**：该属性是只读（`private set`），直接赋值既不会被注册进集合，也不会参与存档/生命周期。
5. **不要持有模型做静态单例**：模型由引擎在每局战役收集管理；自己缓存静态引用会跨局指向死对象、读档后错乱。
6. **带状态的模型要可存档**：纯计算模型无状态，安全；若你的模型持有字段，必须按 [SaveManager](../../api/save-system/SaveManager/) 的 `[Saveable]` + `SyncData` 路径持久化，否则读档丢值。
7. **`GetModel<T>()` 可能返回 null**：若某模型在当前游戏模式未注册，`default(T)` 为 null——引用前对可能缺失的模型做 null 判断，避免空引用崩溃。
8. **Model 只算不算改**：模型方法里不要直接写 `Hero.Gold`、`Settlement.OwnerClan` 等字段；要触发状态变更请调对应的 `*Action.Apply`。

## 导航

- ↑ 父级：[指南总览](../)
- ↔ 同级：[第一篇实战（能存盘的 Behavior）](../sandbox-extension-example/) · [GameMenu/对话链路](../sandbox-gamemenu-dialog/) · [Campaign 系统](../campaign-system/) · [SandBox/StoryMode/Native 阅读政策](../../architecture/sandbox-native-policy/)
- ↓ 相关 API：[CampaignGameStarter](../../api/campaign-ext/CampaignGameStarter/) · [GameModels](../../api/campaign-ext/GameModels/) · [MBGameModel](../../api/core-extra/MBGameModel/) · [PartyWageModel](../../api/campaign-ext/PartyWageModel/) · [Models 家族手册](../../api/campaign-ext/models/)
- 🔀 任务索引：[开发者任务路线图](../../architecture/developer-roadmap/)
