---
title: "GameModels"
description: "战役模型聚合器：123 个只读模型属性全部在构造器的一次倒序查找里填满，零 public 方法；GameMode 不是 Campaign/Tutorial 时 123 个属性全是 null。"
---

# GameModels

**Namespace:** `TaleWorlds.CampaignSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public sealed class GameModels : GameModelsManager`
**Base:** [GameModelsManager](../../core-extra/GameModelsManager)（`TaleWorlds.Core`），仅隐式 `System.Object`
**File:** `TaleWorlds.CampaignSystem/GameModels.cs`（全文 765 行，其中 123 行是属性声明，134 行是构造器与私有填充方法）

## 概述

`GameModels` 是**战役侧全部模型的一个巨型只读目录**。它有 123 个 `public XxxModel XxxModel { get; private set; }` 属性、**零个 public 方法**、**零个字段**。它做的事只有一件：在构造器里把这 123 个槽位一次填满，之后所有人只读。

它是 `sealed` 的，不可继承；也是纯运行期对象——不继承 `MBObjectBase`、没有 `StringId`，不会被 `MBObjectManager` 注册，模型本身也不进存档。存档存的是对 `XxxModel` 的引用，读档时从模块注册链重新解析。

填充发生在 `public GameModels(IEnumerable<GameModel> inputComponents) : base(inputComponents) { this.GetSpecificGameBehaviors(); }`（`GameModels.cs:759-762`）。`GetSpecificGameBehaviors()`（`:627`）里有 **124 行 `this.XxxModel = base.GetGameModel<XxxModel>();`** 赋值，全部包在**同一个 `if` 里**：

```csharp
if (Campaign.Current.GameMode == CampaignGameMode.Campaign || Campaign.Current.GameMode == CampaignGameMode.Tutorial)
```

于是有一个必须知道的事实：**如果 `GameMode` 既不是 `Campaign` 也不是 `Tutorial`，这 123 个属性全部保持 null**，而 `GetGameModel<T>` 在扫不到时返回的正是 `default(T)`，没有任何断言拦。编辑器场景、菜单场景、某些特殊模式下 `Campaign.Current.Models` 上的每一个属性都可能为 null。

它还带一个源码里的真实瑕疵：**`PartyNavigationModel` 被赋值了两次**（`:673` 与 `:743`，两次都是 `base.GetGameModel<PartyNavigationModel>()`）。因为 `GetGameModel<T>` 是纯函数式倒序查找，两次结果相同，所以无害——但它证明这 124 行是手写维护的，不是生成的。另一处命名不一致：`PartySpeedCalculatingModel`（`:24`）的类型是 `PartySpeedModel`，属性名带 `Calculating` 而类型不带。

## 心智模型

把它当成**「模型插槽面板」**，然后死记三条：**谁插、谁读、什么时候插。**

**谁插。** `Campaign.cs:1905` 一行：`this._gameModels = base.CurrentGame.AddGameModelsManager<GameModels>(campaignGameStarter.Models);` 传进去的正是 [CampaignGameStarter](../CampaignGameStarter) 的 `Models`（`IEnumerable<GameModel>`），也就是所有 `MBSubModuleBase.InitializeGameStarter` 里 `AddModel` / `AddModel<T>` 累积的那条链。同一处的前一行还有 `base.CurrentGame.SetBasicModels(campaignGameStarter.Models);`，把**同一条链**交给另一个管理器。所以「战役模型」和「任务模型」读的是同一批注册，不同的是查找方。`Campaign.Models` 的 getter（`Campaign.cs:529`）就是 `return this._gameModels;`。

**谁读。** 你在任意战役代码里写 `Campaign.Current.Models.XxxModel`。因为 `GameModels` 是 `sealed` 且没有 setter，**这 123 个属性一旦填好就再也不会变**——不像 [CampaignBehaviorBase](../CampaignBehaviorBase) 可以在运行期增删。这里的替换手段只有一条：在 `InitializeGameStarter` 里后注册一个同类型的模型。

**什么时候插。** `GetGameModel<T>()` 的实现是 `for (int i = this._gameModels.Count - 1; i >= 0; i--) { T result; if ((result = (this._gameModels[i] as T)) != null) return result; } return default(T);`——**倒序扫描，最后注册的赢**。这与 `CampaignGameStarter.AddModel<T>(MBGameModel<T>)` 的装配方向配套：它先 `T model = this.GetModel<T>()` 拿到当前最外层的 `T`，再 `gameModel.Initialize(model)` 把旧的接进新的 `BaseModel`，最后 `this._models.Add(gameModel)`。于是覆盖链是「后注册者包住先注册者」，想在覆盖里转发就写 `this.BaseModel.XXX(...)`。

**三条规则的合并结论**：你覆盖 `AgeModel` 之后，`Campaign.Current.Models.AgeModel` 拿到的是**你的实例**（因为 `GameModels` 的构造发生在所有 `InitializeGameStarter` 之后），而 `DefaultAgeModel` 仍然完整地待在链的更内层，只通过 `BaseModel` 被访问。这条链的形状与具体规则见 [GameModel](../../core-extra/GameModel) 与 [MBGameModel](../../core-extra/MBGameModel)。

**一个反直觉的对照**：`GameModels` 用**倒序**（后注册赢），而 `CampaignBehaviorManager.GetBehavior<T>()` 用 `OfType<T>().FirstOrDefault<T>()`，是**正序**（先注册赢）。同一个战役里两套相反的取用顺序，写代码时不要凭直觉套用。

## 关键成员

下面是 123 个属性里最值得逐个记住的一批。**其余 105 个的形状完全一致**：`public XxxModel XxxModel { get; private set; }`，赋值一行 `this.XxxModel = base.GetGameModel<XxxModel>();`，用途由那个 `XxxModel` 抽象类自己声明。全量清单直接读 `GameModels.cs:14-624`。

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `.ctor` | `public GameModels(IEnumerable<GameModel> inputComponents) : base(inputComponents)` | 唯一的构造器。它把注册链交给基类存成 `MBList<GameModel>`，然后调 `GetSpecificGameBehaviors()` 填满 123 个槽位。**返回后属性即不可变**。基类构造器做的是 `inputComponents.ToMBList<GameModel>()`——是一次快照，之后你在 `InitializeGameStarter` 里再 `AddModel` 对这个 `GameModels` 无效。 |
| `GetSpecificGameBehaviors` | `private void GetSpecificGameBehaviors()` | 唯一的自有方法，private。它是 124 行赋值的容器，外面包一个 `GameMode == Campaign \|\| GameMode == Tutorial` 的守卫。**这个守卫是整个类最大的风险点**：条件不成立时全部属性为 null，且 `GetGameModel<T>` 返回 `default(T)` 静默通过。 |
| `MapVisibilityModel` | `public MapVisibilityModel MapVisibilityModel { get; private set; }` | 地图迷雾可见性。`:14`，全类第一个属性。读它要知道的是「不是地图可见性开关」而是「按 `MapFogType` / 队伍位置算某个点是否可见」的模型。 |
| `PartySpeedCalculatingModel` | `public PartySpeedModel PartySpeedCalculatingModel { get; private set; }` | 队伍移动速度。**属性名与类型名不一致**：类型是 `PartySpeedModel`（没有 `Calculating`），赋值在 `:639` 写的是 `base.GetGameModel<PartySpeedModel>()`。写泛型参数时要用类型名，不要复制属性名。 |
| `PartyNavigationModel` | `public PartyNavigationModel PartyNavigationModel { get; private set; }` | 队伍寻路。`:264` 声明，`:673` 与 `:743` **各赋值一次**。两次结果相同所以无副作用，但如果你在链上注册了两次 `PartyNavigationModel`，这里只会拿到最外层那个，第二次赋值是冗余的。 |
| `AgeModel` | `public AgeModel AgeModel { get; private set; }` | 年龄分段阈值。`:384` 声明，`:705` 赋值。`AgingCampaignBehavior` 全程读它（`Campaign.Current.Models.AgeModel.HeroComesOfAge` 等），所以覆盖它等于同时改掉官方衰老/成年行为。最小覆盖例子见 [AgeModel](../AgeModel)。 |
| `AllianceModel` | `public AllianceModel AllianceModel { get; private set; }` | 同盟与参战邀约的规则与代价。`:134`。`AcceptCallToWarAgreementDecision` 的构造器就读它算 `CallToWarCost`，`DetermineSupport` 读它算投票分数。 |
| `SettlementAccessModel` | `public SettlementAccessModel SettlementAccessModel { get; private set; }` | 城镇准入规则。`:479`。它的三个抽象方法都用 `out AccessDetails` 返回「能不能进 + 为什么不能」，细节见 [AccessDetails](../AccessDetails) 与 [AccessLevel](../AccessLevel)。 |
| `KingdomDecisionPermissionModel` | `public KingdomDecisionPermissionModel KingdomDecisionPermissionModel { get; private set; }` | 王国决议的提案资格。`:154`。`CanMakeDecision` 之外的「谁能提案」由它决定，与决策自身的 `IsAllowed()` 是两回事。 |
| `MarriageModel` | `public MarriageModel MarriageModel { get; private set; }` | 婚姻规则。`:379`。 |
| `PlayerProgressionModel` | `public PlayerProgressionModel PlayerProgressionModel { get; private set; }` | 玩家等级推进。`:389`。 |
| `DailyTroopXpBonusModel` | `public DailyTroopXpBonusModel DailyTroopXpBonusModel { get; private set; }` | 部队每日经验加成。`:394`。 |
| `CharacterStatsModel` | `public CharacterStatsModel CharacterStatsModel { get; private set; }` | 角色属性换算。`:169`。 |
| `IssueModel` | `public IssueModel IssueModel { get; private set; }` | 村庄问题（issue）的生成与节奏。`:484`。 |
| `LocationModel` | `public LocationModel LocationModel { get; private set; }` | 地点使用许可。`:514`。 |
| `HeroCreationModel` | `public HeroCreationModel HeroCreationModel { get; private set; }` | 新英雄的初始技能/装备来源。`:579`。`AgingCampaignBehavior.OnHeroComesOfAge` 读它的 `GetInheritedSkillsForHero(hero)`。 |
| `EquipmentSelectionModel` | `public EquipmentSelectionModel EquipmentSelectionModel { get; private set; }` | 英雄成年/少年时的装备模板选取。`:554`。返回 `MBList<MBEquipmentRoster>`，是 `AgingCampaignBehavior` 里两处 `GetEquipmentRostersForHeroComeOfAge` / `...ReachesTeenAge` 的来源。 |
| `CampaignTimeModel` | `public CampaignTimeModel CampaignTimeModel { get; private set; }` | 战役开局时间。`:569`。`Campaign.cs` 在 `NewCampaign` 分支读 `this.Models.CampaignTimeModel.CampaignStartTime` 初始化 `MapTimeTracker`。 |
| `IncidentModel` | `public IncidentModel IncidentModel { get; private set; }` | 随机事件生成。`:619`。 |
| `ShipStatModel` | `public ShipStatModel ShipStatModel { get; private set; }` | 船只属性。`:604`。1.3.0 里带 `Ship*` / `FleetManagementModel` 的属性已在，海战系统尚未独立成桶。 |
| `FleetManagementModel` | `public FleetManagementModel FleetManagementModel { get; private set; }` | 舰队管理。`:624`，全类最后一个属性。 |
| `SiegeEventModel` | `public SiegeEventModel SiegeEventModel { get; private set; }` | 攻城事件规则。`:454`。 |
| `TroopSupplierProbabilityModel` | `public TroopSupplierProbabilityModel TroopSupplierProbabilityModel { get; private set; }` | 补员概率。`:544`。 |
| `GetGameModels` | `public MBReadOnlyList<GameModel> GetGameModels()` | **不在本类，在基类** [GameModelsManager](../../core-extra/GameModelsManager)。返回整条注册链的只读视图，用来看「到底叠了几层模型」，调试覆盖顺序时很有用。 |
| `GetGameModel<T>` | `protected T GetGameModel<T>() where T : GameModel` | **也不在本类**，在基类，且是 `protected`——外部代码调不到。消费端请用 `Campaign.Current.Models.XxxModel`，别指望直接调它。 |

## 真实示例

读模型、覆盖模型、以及调试「现在链上有几层」三种典型写法。

读（最常见，123 个槽位都是这个形状）：

```csharp
int oldAge = Campaign.Current.Models.AgeModel.BecomeOldAge;
int comeOfAge = Campaign.Current.Models.AgeModel.HeroComesOfAge;
Debug.Print("old age = " + oldAge + ", come of age = " + comeOfAge, 0);
```

覆盖一个槽位（`MBGameModel<T>` 的装饰式覆盖，`T` 必须是模型抽象类本身，不是你的类）：

```csharp
public class SlowAgingModel : MBGameModel<AgeModel>
{
    public override int BecomeInfantAge { get { return 4; } }
    public override int BecomeChildAge { get { return 8; } }
    public override int BecomeTeenagerAge { get { return 16; } }
    public override int HeroComesOfAge { get { return 21; } }
    public override int BecomeOldAge { get { return 60; } }
    public override int MiddleAdultHoodAge { get { return 38; } }
    public override int MaxAge { get { return 100; } }

    public override void GetAgeLimitForLocation(CharacterObject character, out int minimumAge, out int maximumAge, string additionalTags = "")
    {
        // 不转发 = 彻底替换；this.BaseModel.GetAgeLimitForLocation(...) 才是沿链往下传
        minimumAge = 16;
        maximumAge = 70;
    }
}

protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    base.InitializeGameStarter(game, gameStarterObject);
    gameStarterObject.AddModel<AgeModel>(new SlowAgingModel());
}
```

调试覆盖顺序**只能在 `InitializeGameStarter` 里做**，因为运行期没有任何公开途径拿回整条链：`Game` 上只有 `AddGameModelsManager<T>(IEnumerable<GameModel>)`（写）与 `SetBasicModels(IEnumerable<GameModel>)`（写），而 `_gameModelManagers` 是 `private Dictionary<Type, GameModelsManager>`，**没有 public 的 getter**。能枚举链的地方就是 `IGameStarter.Models` —— 它返回 `CampaignGameStarter._models` 的活视图：

```csharp
protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    base.InitializeGameStarter(game, gameStarterObject);

    int layers = 0;
    foreach (GameModel model in gameStarterObject.Models)
    {
        if (model is AgeModel)
        {
            layers++;
        }
    }
    Debug.Print("AgeModel layers = " + layers, 0);

    gameStarterObject.AddModel<AgeModel>(new SlowAgingModel());
}
```

`layers == 1` 说明没人覆盖；`> 1` 说明已经有 mod 插在链上，值就是链深。**这段要放在自己 `AddModel` 之前**，否则数出来的会把自己也算进去。

## 风险与边界

- **`sealed`，不可继承。** `public sealed class GameModels : GameModelsManager`。要加新模型槽位不能派生它，只能在 `InitializeGameStarter` 里 `AddModel` 一个新的 `GameModel` 子类——但那样 `Campaign.Current.Models` 上就没有对应的属性，你得自己存静态引用。
- **零 public 方法。** 所有行为都在属性的类型（`XxxModel` 抽象类）上。这个类只是目录，不是服务。
- **`GameMode` 不是 Campaign/Tutorial 时全部为 null。** `GetSpecificGameBehaviors` 的守卫是唯一的填充路径，条件不成立就一个都不填。`GetGameModel<T>` 扫不到返回 `default(T)`，**不抛异常、不打断言**。在编辑器或菜单场景里读 `Campaign.Current.Models.AgeModel` 拿到 null，下游 NRE 的位置会离真正的原因很远。
- **属性是 `private set`，构造后不可变。** 想换模型只能在 `InitializeGameStarter` 里重新注册，而那必须在 `GameModels` 被构造之前完成——`Campaign.cs:1905` 就是那个截止点。运行期改模型在这套 API 下做不到。
- **构造器对输入链做了快照。** `GameModelsManager` 的构造器是 `inputComponents.ToMBList<GameModel>()`。`CampaignGameStarter.AddModel` 在这之后调用，对已经建好的 `GameModels` 没有任何影响。
- **`PartyNavigationModel` 赋值两次。** `:673` 与 `:743`。无害（同一纯函数），但它是「这 124 行手工维护」的证据——如果你按行号推断属性顺序或插入位置，会被这个重复项误导。
- **`PartySpeedCalculatingModel` 的类型不带 `Calculating`。** 属性名 `PartySpeedCalculatingModel`，类型 `PartySpeedModel`，赋值 `base.GetGameModel<PartySpeedModel>()`。写 `GetModel<PartySpeedCalculatingModel>()` 编译不过。
- **`GetGameModel<T>` 是 `protected`。** 外部代码拿不到。想在容器外查模型，用 `Campaign.Current.Models.XxxModel`，或在 `InitializeGameStarter` 里枚举 `IGameStarter.Models`。
- **运行期无法枚举整条注册链。** `Game` 只暴露 `AddGameModelsManager<T>()`（写）与 `SetBasicModels()`（写），`_gameModelManagers` 是 `private Dictionary<Type, GameModelsManager>`，**没有公开的 getter**。「看看模型叠了几层」这件事只能在 `InitializeGameStarter` 里做，运行期做不到。
- **不存档。** 它不是 `MBObjectBase`，无 `StringId`，不在 `MBObjectManager` 里。读档时 `Campaign` 重新构造，模型从模块注册链重新装配。
- **123 个槽位是同步填充的一次性快照。** 构造器里有 124 次线性倒序扫描，每次 `O(n)`，总复杂度 `O(123 × n)`。注册链上 mod 很多时这个数字会变大，但相对于整个战役初始化可以忽略——它不是你需要优化的东西。

## 怎么用

### 怎么拿到它

**从 `Campaign.Current.Models` 读，不要自己 new。**

- `public GameModels Models` —— `TaleWorlds.CampaignSystem/Campaign.cs:529`
- `public sealed class GameModels : GameModelsManager` —— `TaleWorlds.CampaignSystem/GameModels.cs:9`
- 构造器 `public GameModels(IEnumerable<GameModel> inputComponents) : base(inputComponents)` —— `GameModels.cs:759`，函数体只有一句 `this.GetSpecificGameBehaviors();`（`:761`）

**全战役只有一个实例，在战役启动时造一次**：`TaleWorlds.CampaignSystem/Campaign.cs:1906` 的 `this._gameModels = base.CurrentGame.AddGameModelsManager<GameModels>(campaignGameStarter.Models);`。基类构造器立刻做了快照（`TaleWorlds.Core/GameModelsManager.cs:13`：`this._gameModels = inputComponents.ToMBList<GameModel>();`），随后 123 个槽位各自被填成固定的字段值。

### 典型用法

读官方模型，同时把自己那个不在目录里的模型自己握住：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

// GameModels 是 sealed 且槽位固定，自己加不进 Campaign.Current.Models，
// 所以静态引用自己留一份。
public class MyAgeModel : AgeModel
{
    public static MyAgeModel Current { get; private set; }

    // 七个属性 + 一个方法，全部 abstract，一个都不能少。
    public override int BecomeInfantAge { get { return 4; } }
    public override int BecomeChildAge { get { return 7; } }
    public override int BecomeTeenagerAge { get { return 15; } }
    public override int HeroComesOfAge { get { return 20; } }
    public override int MiddleAdultHoodAge { get { return 36; } }
    public override int BecomeOldAge { get { return 56; } }
    public override int MaxAge { get { return 130; } }

    public override void GetAgeLimitForLocation(CharacterObject character, out int minimumAge, out int maximumAge, string additionalTags = "")
    {
        minimumAge = 18;
        maximumAge = 70;
    }
}

public class MyModule : MBSubModuleBase
{
    protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
    {
        if (!(game.GameType is Campaign))
        {
            return;
        }

        var starter = (CampaignGameStarter)gameStarterObject;

        // 必须在 Campaign.cs:1906 之前，也就是这个回调里。
        starter.AddModel<AgeModel>(new MyAgeModel());

        MyAgeModel.Current = starter.GetModel<AgeModel>() as MyAgeModel;
    }
}

public static class AgeReader
{
    public static int ComingOfAge()
    {
        // AgeModel 是一个真槽位，读它没问题：GameModels.cs:384 声明，
        // GameModels.cs:705 填充。
        return Campaign.Current.Models.AgeModel.HeroComesOfAge;
    }
}
```

### 最容易踩的坑

**槽位是 null 时，不会有人告诉你；而且这一次会话里它永远是 null。**

填槽位的函数是 `protected T GetGameModel<T>() where T : GameModel`，声明在 `TaleWorlds.Core/GameModelsManager.cs:17`，它的最后一行是：

```csharp
GameModelsManager.cs:19    for (int i = this._gameModels.Count - 1; i >= 0; i--)
GameModelsManager.cs:22            if ((result = (this._gameModels[i] as T)) != null)
GameModelsManager.cs:27    return default(T);
```

扫不到就返回 `default(T)`。对 123 个 `GameModel` 子类（全是引用类型）来说，`default(T)` 就是 **null**。而 `GameModels` 上每个槽位都是 `{ get; private set; }`，构造完就不再变——**没有 `TryGet`，没有重新解析，没有运行期刷新**。

所以后果分两级：

1. **忘了注册**，或者**注册晚了**（晚于 `Campaign.cs:1906`），那么 `Campaign.Current.Models.你的模型` 就是 null；
2. 崩的地方不是注册点，而是**第一个消费它的地方**——栈顶在某个 `DefaultXxxModel` 内部，离真正的原因隔了十几层。你会看到"某个模型在第 800 行 NRE"，而不是"你少注册了一个模型"。

还有一个容易被误判的分支：`GetSpecificGameBehaviors()`（`GameModels.cs:627`）整体包在 `:629` 的守卫里——

```csharp
GameModels.cs:629   if (Campaign.Current.GameMode == CampaignGameMode.Campaign
                  || Campaign.Current.GameMode == CampaignGameMode.Tutorial)
```

也就是说**在非战役/非教程模式下，这一整批槽位根本不会被赋值**。同一个 mod 在主菜单或编辑器模式下跑出一堆 null，不是你的注册写错了，而是守卫没放行。排查时先把 `Campaign.Current.GameMode` 打出来，再怀疑注册时机。

最后一条实用建议：**别依赖 `Campaign.Current.Models` 取你自己的模型**。它没有你的槽位（`sealed` + 固定 123 个属性，改不了），绕道去取只会拿到 null；像上面那样在 `InitializeGameStarter` 里 `AddModel` 之后用 `starter.GetModel<T>()` 自己留一份，才是能稳定工作的路径。

## 跨版本提示

`GameModels` 是版本演进最明显的模型聚合器：**槽位数量持续增长**。1.3.0 有 123 个属性，往后版本随沙盒、海战、编队、蒸汽机（1.5 引入的产业系统）等新系统继续追加。

**但类的形状不变**：`sealed`、继承 `GameModelsManager`、`{ get; private set; }`、一个构造器 + 一个 private `GetSpecificGameBehaviors()`、零 public 方法。这套形状在 1.3 → 1.5 的三个大版本里稳定。

对 mod 作者的实际含义有两条。第一，**不要写反射遍历 `GameModels` 属性**去发现可用模型——新版本会多出你不知道的类型，而下游代码可能依赖它们存在。第二，**上游新增槽位不构成编译破坏**，你引用的那 123 个属性名不会消失；风险在于你引用的**某个具体 `XxxModel` 抽象类的成员**被改签名——那是覆盖面变大，不是这个类变大。

另一条值得盯的是 `GameMode` 守卫。1.3.0 的条件是 `Campaign || Tutorial`；后续版本若引入新的战役模式（例如某些独立模块的 GameMode），不加进这个条件就会得到 123 个全 null 的 `GameModels`。**读模型前判空**在跨版本时是廉价的保险。

## 依赖关系

- 基类：[GameModelsManager](../../core-extra/GameModelsManager) 提供 `protected GetGameModel<T>()`（倒序查找）与 `public MBReadOnlyList<GameModel> GetGameModels()`，以及 `private readonly MBList<GameModel> _gameModels`
- 标记基类：[GameModel](../../core-extra/GameModel) 是全部 123 个属性类型的共同祖先，零成员、纯标签；装饰式覆盖走 [MBGameModel](../../core-extra/MBGameModel)
- 宿主：[Campaign](../Campaign) 的 `public GameModels Models { get; }` 就是这个实例的全局访问点，`Campaign.cs:1905` 是它被构造的地方
- 注册源：[CampaignGameStarter](../CampaignGameStarter) 的 `Models` 属性（`IEnumerable<GameModel>`）与两个 `AddModel` 重载
- 模块入口：[MBGameManager](../../mission-ext/MBGameManager) 的 `InitializeGameStarter` 遍历所有 `MBSubModuleBase`，`SandBox/SandBoxSubModule.cs` 在那里连写三十多行官方 `AddModel`
- 具体模型样例：[AgeModel](../AgeModel)（最小，7 属性 + 1 方法）、[SettlementAccessModel](../SettlementAccessModel)（三个 `out AccessDetails` 的入口）
- 桶首页：[campaign API 分区](../)