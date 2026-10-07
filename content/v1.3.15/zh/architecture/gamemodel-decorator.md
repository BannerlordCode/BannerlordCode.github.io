---
title: "GameModel 装饰模式"
description: "Bannerlord 的 GameModel 装饰模式：CampaignGameStarter.AddModel<T> 如何把新模型包装在旧模型之外，GetModel<T> 如何从链尾读取，以及为什么 mod 用装饰而非直接替换。"
---

# GameModel 装饰模式

> GameModel 装饰模式回答 mod 的核心扩展问题：**怎么改游戏规则而不重写整个系统？** 答案是：把新模型套在旧模型外面，只重写你关心的方法，其余委托给 `BaseModel`。

> 节 schema：本页采用 5 节（按出现顺序）：一句话定位 ｜ 心智模型 ｜ 真实最小示例 ｜ 常见误用 ｜ 导航

## 一句话定位

`MBGameModel<T>` 是一个**装饰器基类**：mod 派生它、重写少数方法、通过 `CampaignGameStarter.AddModel<T>` 注册，游戏引擎用 `GetModel<T>()` 从装饰链尾部取出最外层模型——你改的是「最外面那层皮」，原模型仍在链内被委托调用。

## 心智模型

把 GameModel 系统想成一个**洋葱模型**（装饰器链）：

1. **核心是空的**。`GameModel` 本身是一个空抽象类（`TaleWorlds.Core/GameModel.cs:3`），只起到类型标记作用。真正的规则逻辑在派生类里。
2. **每层模型只重写关心的方法**。`MBGameModel<T>` 定义了 `BaseModel` 属性（`TaleWorlds.Core/MBGameModel.cs:5`）和 `Initialize(T baseModel)` 方法（`TaleWorlds.Core/MBGameModel.cs:7`）。装饰器重写需要修改的方法，其余方法通过 `BaseModel.方法名(...)` 委托给内层。
3. **注册 = 包装**。`CampaignGameStarter.AddModel<T>(MBGameModel<T>)`（`TaleWorlds.CampaignSystem/CampaignGameStarter.cs:95`）做三件事：
   - 调用 `GetModel<T>()` 找到当前链上最外层的模型；
   - 用 `gameModel.Initialize(model)` 把它注入为新层的 `BaseModel`；
   - 把新层追加到 `_models` 列表末尾（`CampaignGameStarter.cs:187`）。
4. **读取 = 从尾取**。`GetModel<T>()`（`CampaignGameStarter.cs:75`）从列表**末尾向前**遍历，返回第一个类型匹配的模型——即**最后注册的最外层**。
5. **多个 mod 可以叠加**。每个 mod 的 `AddModel` 调用都往链尾追加一层，互不覆盖。最外层（最后 `AddModel` 的 mod）在 `GetModel<T>()` 中胜出。

```
_models 列表（索引从小到大 = 注册顺序）
┌─────────────────────────────────────────────────┐
│ [0] DefaultDiplomacyModel  ← 游戏注册的基础模型   │
│ [1] ModA_DiplomacyModel     ← ModA 的装饰器       │
│ [2] ModB_DiplomacyModel     ← ModB 的装饰器       │
└─────────────────────────────────────────────────┘
                                      ▲
                                      │ GetModel<DiplomacyModel>() 从尾向前找
                                      │ 返回 [2] = ModB 的装饰器
```

### 为什么用装饰模式而非直接替换

| 方案 | 问题 |
|------|------|
| 直接替换（覆盖原模型） | 需要复制整个原类实现；多个 mod 替换同一模型时后者完全覆盖前者，冲突无法调和 |
| 装饰模式（本方案） | 每层只重写关心的方法；多个 mod 叠加共存；内层模型始终可通过 `BaseModel` 访问 |

装饰模式的核心好处是**可组合性**：ModA 改关系计算，ModB 改战争分数，两者各自 `AddModel` 一层，链上互不干扰。

## 真实最小示例

### 游戏如何注册默认模型

游戏自身在 `SandBoxManager` 里用 `AddModel<T>` 注册所有默认模型。以 `DiplomacyModel` 为例（`TaleWorlds.CampaignSystem/SandBoxManager.cs:256`）：

```csharp
gameStarter.AddModel<DiplomacyModel>(new DefaultDiplomacyModel());
```

`DefaultDiplomacyModel` 是 `DiplomacyModel` 的具体实现，而 `DiplomacyModel` 本身派生自 `MBGameModel<DiplomacyModel>`（`TaleWorlds.CampaignSystem/ComponentInterfaces/DiplomacyModel.cs:3`）：

```csharp
public abstract class DiplomacyModel : MBGameModel<DiplomacyModel>
```

### Mod 如何替换 DiplomacyModel

一个 mod 想修改外交规则（比如让关系增长更快），只需三步：

**第 1 步**：创建装饰器类，继承 `DiplomacyModel`，只重写关心的方法：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;

namespace MyDiplomacyMod;

public class MyDiplomacyModel : DiplomacyModel
{
    // 重写关系增长因子：让所有关系增长翻倍
    public override float GetRelationIncreaseFactor(Hero hero1, Hero hero2, float relationValue)
    {
        // 先拿到内层（原始）模型的结果
        float baseFactor = BaseModel.GetRelationIncreaseFactor(hero1, hero2, relationValue);
        return baseFactor * 2f;
    }

    // 其余 40+ 个抽象方法不需要重写——
    // 如果 DiplomacyModel 的派生链中已有 DefaultDiplomacyModel 提供默认实现，
    // 你可以选择性地只重写需要改的方法，其余通过 BaseModel 委托。
    // 注意：如果基类方法是 abstract 的，你必须实现全部抽象方法，
    // 或者继承一个已提供默认实现的中间类。
}
```

**第 2 步**：在 `OnGameStart` 里注册装饰器：

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

namespace MyDiplomacyMod;

public sealed class MySubModule : MBSubModuleBase
{
    protected override void OnGameStart(Game game, IGameStarter starter)
    {
        base.OnGameStart(game, starter);
        if (starter is CampaignGameStarter campaignStarter)
        {
            // AddModel 会：
            // 1. 调用 GetModel<DiplomacyModel>() 找到游戏已注册的 DefaultDiplomacyModel
            // 2. 调用 MyDiplomacyModel.Initialize(defaultModel) 注入为 BaseModel
            // 3. 把 MyDiplomacyModel 追加到 _models 列表末尾
            campaignStarter.AddModel(new MyDiplomacyModel());
        }
    }
}
```

**第 3 步**：之后游戏内部通过 `GetModel<DiplomacyModel>()` 或 `GameModels.DiplomacyModel`（`TaleWorlds.CampaignSystem/GameModels.cs:657`）读取时，拿到的是 `MyDiplomacyModel`——最外层装饰器。

### 装饰器链的委托调用

```
游戏代码调用 GetModel<DiplomacyModel>()
    │
    ▼
返回 MyDiplomacyModel（最外层）
    │
    ├── GetRelationIncreaseFactor() → 重写：baseFactor * 2
    │       │
    │       └── BaseModel.GetRelationIncreaseFactor()
    │               │
    │               ▼
    │           返回 DefaultDiplomacyModel（内层）的原始计算结果
    │
    └── 其他方法 → 未重写，直接委托 BaseModel（DefaultDiplomacyModel）
```

### 关键源码位置

| 机制 | 文件 | 行号 | 代码 |
|------|------|------|------|
| 装饰器基类 | `TaleWorlds.Core/MBGameModel.cs` | 3 | `public abstract class MBGameModel<T> : GameModel where T : GameModel` |
| BaseModel 属性 | `TaleWorlds.Core/MBGameModel.cs` | 5 | `private protected T BaseModel { protected get; private set; }` |
| Initialize 注入 | `TaleWorlds.Core/MBGameModel.cs` | 7 | `public void Initialize(T baseModel)` |
| 读取模型 | `TaleWorlds.CampaignSystem/CampaignGameStarter.cs` | 75 | `public T GetModel<T>() where T : GameModel` |
| 注册装饰器 | `TaleWorlds.CampaignSystem/CampaignGameStarter.cs` | 95 | `public void AddModel<T>(MBGameModel<T> gameModel) where T : GameModel` |
| 模型列表 | `TaleWorlds.CampaignSystem/CampaignGameStarter.cs` | 187 | `private readonly List<GameModel> _models = new List<GameModel>();` |
| 游戏注册默认模型 | `TaleWorlds.CampaignSystem/SandBoxManager.cs` | 256 | `gameStarter.AddModel<DiplomacyModel>(new DefaultDiplomacyModel())` |
| 游戏读取模型 | `TaleWorlds.CampaignSystem/GameModels.cs` | 657 | `this.DiplomacyModel = base.GetGameModel<DiplomacyModel>()` |

## 常见误用

1. **在 `OnSubModuleLoad` 或 `Initialize` 里调用 `AddModel`**。此时 `CampaignGameStarter` 还不存在（一局游戏尚未开始），无法获取 `IGameStarter` 引用。`AddModel` 必须在 `OnGameStart(Game, IGameStarter)` 里调用，因为只有那时 `starter` 参数才携带 `CampaignGameStarter` 实例。

2. **忘记 `BaseModel` 可能为 `null`**。如果 mod 的 `AddModel` 调用早于游戏注册默认模型（比如游戏还没执行到 `SandBoxManager` 的注册代码），`GetModel<T>()` 返回 `default(T)`（引用类型即 `null`），`Initialize(null)` 会把 `BaseModel` 设为 `null`。之后任何 `BaseModel.方法()` 调用都会抛 `NullReferenceException`。确保你的 mod 在 `OnGameStart` 里注册时，游戏已经完成了默认模型注册。

3. **重写方法时忘记委托 `BaseModel`**。如果你重写了某个方法但完全替换了逻辑、没有调用 `BaseModel.同名方法()`，那么内层所有 mod 的装饰器都会被绕过——其他 mod 对同一方法的修改全部失效。正确做法是：在重写方法里先调用 `BaseModel.方法()` 拿到原始结果，再在此基础上修改。

4. **误以为 `AddModel(GameModel)` 非泛型重载也能用于装饰**。`CampaignGameStarter.cs:89` 的 `AddModel(GameModel gameModel)` 只是把模型直接追加到列表，**不会**调用 `Initialize`，因此 `BaseModel` 不会被注入。如果你用这个重载注册一个 `MBGameModel<T>` 派生类，它的 `BaseModel` 会是 `null`。装饰器必须用泛型重载 `AddModel<T>(MBGameModel<T>)`。

5. **在装饰器里直接 `new` 内层模型**。不要在 `MyDiplomacyModel` 构造函数里 `new DefaultDiplomacyModel()` 并赋值给 `BaseModel`——`BaseModel` 的 setter 是 `private set`，只有 `Initialize` 方法能设置它。内层模型必须由 `AddModel<T>` 通过 `GetModel<T>()` 自动查找并注入。

## 导航

- [↑ 架构总览](../)
- [↔ 模块系统](../module-system) · [↔ SDK 分层概览](../sdk-overview) · [↔ 崩溃与存档边界](../crash-boundaries) · [↔ 存档系统](../save-system)
- 相关类页：[MBGameModel](../../api/core-extra/MBGameModel/) · [GameModel](../../api/core-extra/GameModel/) · [CampaignGameStarter](../../api/campaign-ext/CampaignGameStarter/) · [DiplomacyModel](../../api/campaign-ext/DiplomacyModel/) · [BasicGameStarter](../../api/mission-ext/BasicGameStarter/)
