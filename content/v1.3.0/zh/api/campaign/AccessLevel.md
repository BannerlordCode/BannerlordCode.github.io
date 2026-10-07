---
title: "AccessLevel"
description: "城镇准入三档判定：NoAccess / LimitedAccess / FullAccess。它单独没有意义，必须和 AccessLimitationReason、LimitedAccessSolution 一起读；官方唯一消费者只做枚举相等比较。"
---

# AccessLevel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public enum AccessLevel`
**Base:** 无（`System.Int32` 底层枚举，不是 `FlagsAttribute`）
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementAccessModel.cs`（`:30`，嵌套在 `SettlementAccessModel` 内）

## 概述

`AccessLevel` 回答一个问题：**玩家能不能进这个聚落 / 这座内城 / 这个地牢，以及是「直接进」还是「有限制地进」还是「完全进不去」。** 它只有三个值，声明在 [SettlementAccessModel](../SettlementAccessModel) 内部（不是独立类型），三个成员按声明顺序隐式取 0 / 1 / 2。

它**不是 `Flags`**，所以不能按位或。你会看到有人写 `AccessLevel.LimitedAccess | AccessLevel.FullAccess` —— 那在 C# 里编译通过但结果是垃圾值，不会报错。

关键是：**它单独读不出任何东西。** 官方消费者从不单独判 `AccessLevel`，而是把它和同一个 `AccessDetails` 结构里的另外三个字段联判。真正的判定契约是这一组组合：

| `AccessLevel` | 搭配的 `LimitedAccessSolution` | 语义 |
| --- | --- | --- |
| `FullAccess` | 通常是 `None` | 直接进，什么都不用做 |
| `LimitedAccess` | `Bribe` | 先交钱（对应 `PlayerTownVisitCampaignBehavior` 里的 `BribePaid`） |
| `LimitedAccess` | `Disguise` | 先乔装（对应 `Campaign.Current.IsMainHeroDisguised`） |
| `NoAccess` | `None` | 进不去 |

## 心智模型

把它当成**「准入判定结果的第一段」**，而不是一个独立答案。判定链固定是四步：

**第一步，拿到 `AccessDetails`。** 你从不直接构造这个枚举——它是 [AccessDetails](../AccessDetails) 的一个 `public` 字段，由 `SettlementAccessModel` 的三个抽象方法通过 `out` 参数交给你：

```csharp
SettlementAccessModel.AccessDetails details;
Campaign.Current.Models.SettlementAccessModel.CanMainHeroEnterDungeon(settlement, out details);
```

**第二步，先看 `AccessLevel` 定大方向。** 只有三个分支：`FullAccess` 走「直接进」路径；`LimitedAccess` 去看 `LimitedAccessSolution` 决定先付钱还是先乔装；`NoAccess` 直接关掉菜单项。

**第三步，只在 `LimitedAccess` 分支里才读 `LimitedAccessSolution`。** 这是最容易写错的地方——官方代码 `EncounterGameMenuBehavior.cs:2605` 的条件是 `if (accessDetails.AccessLevel != SettlementAccessModel.AccessLevel.LimitedAccess || accessDetails.LimitedAccessSolution != SettlementAccessModel.LimitedAccessSolution.Bribe)`，**两个条件是「或」**：不是 LimitedAccess 就否掉，是 LimitedAccess 也要看是不是 Bribe。**先判 `AccessLevel`、再判 `LimitedAccessSolution`，不能反过来。**

**第四步，用 `AccessLimitationReason` 决定给玩家看什么话。** 同样是 `NoAccess` 分支，`EncounterGameMenuBehavior.cs:2584` 判的是 `AccessLevel == NoAccess && AccessLimitationReason == <具体原因>`，然后给不同 reason 出不同的禁用提示文案。**同样的「进不去」，理由不同，提示不同**——所以只判 `AccessLevel` 会让玩家看到错误的解释。

**什么时候该用它、什么时候不该用。** 该用：你要实现「某个具体场所的准入规则」时，在 `SettlementAccessModel` 的派类里 `new AccessDetails { AccessLevel = ..., AccessMethod = ..., ... }` 填出来。不该用：你想在别处判断「某地能否进入」时直接 `== AccessLevel.FullAccess` —— 应该调模型，因为 `AccessDetails` 里的其它字段是由同一次判定一起算出来的，跳过模型就拿不到它们。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `NoAccess` | `NoAccess`（隐式值 0） | 完全无法进入。**必须配合 `AccessLimitationReason`** 才能解释原因。官方用它关掉「进入」与「要求会面」两个菜单项（`EncounterGameMenuBehavior.cs:2584`、`PlayerTownVisitCampaignBehavior.cs:287`）。它是 `default(AccessLevel)`，所以**结构体没被填过时的默认值就是它**。 |
| `LimitedAccess` | `LimitedAccess`（隐式值 1） | 有限制地进入：必须先交钱或先乔装。**单独读它没有意义**，必须再看 `LimitedAccessSolution`。`PlayerTownVisitCampaignBehavior.cs:292` 的形状是 `else if (accessDetails.AccessLevel == LimitedAccess && accessDetails.LimitedAccessSolution == Disguise)`——用 `else if` 挂在前一个 `NoAccess` 分支之后。 |
| `FullAccess` | `FullAccess`（隐式值 2） | 直接进入，无需任何前置动作。官方在 `EncounterGameMenuBehavior.cs:2231` / `:2316` / `:2599` 三处与 `AccessMethod` 联判。**注意它的值是 2，而沙盒的 `GuardsCampaignBehavior.cs:538` 写的是 `accessDetails.AccessLevel != 2` 这样的裸字面量**——这行代码硬编码了 `FullAccess` 的数值，改枚举顺序会静默破坏它。 |

三个成员**没有显式数值**，全部依赖声明顺序。任何在两个整数之间做比较的代码（如上面那个 `!= 2`）都与本枚举的顺序耦合——这是本页最脆的一条边界。

## 真实示例

官方判定分支的形状（照抄 `PlayerTownVisitCampaignBehavior` 的联判结构）：

```csharp
SettlementAccessModel.AccessDetails details;
Campaign.Current.Models.SettlementAccessModel.CanMainHeroEnterDungeon(Settlement.CurrentSettlement, out details);

if (details.AccessLevel == SettlementAccessModel.AccessLevel.NoAccess)
{
    // 完全进不去：用 AccessLimitationReason 决定给玩家看哪句解释
    Debug.Print("blocked by " + details.AccessLimitationReason, 0);
}
else if (details.AccessLevel == SettlementAccessModel.AccessLevel.LimitedAccess
    && details.LimitedAccessSolution == SettlementAccessModel.LimitedAccessSolution.Disguise)
{
    Debug.Print("must be disguised first", 0);
}
else if (details.AccessLevel == SettlementAccessModel.AccessLevel.LimitedAccess
    && details.LimitedAccessSolution == SettlementAccessModel.LimitedAccessSolution.Bribe)
{
    int cost = Campaign.Current.Models.BribeCalculationModel.GetBribeToEnterDungeon(Settlement.CurrentSettlement);
    Debug.Print("must pay " + cost, 0);
}
else
{
    Debug.Print("can enter directly, method = " + details.AccessMethod, 0);
}
```

三条分支的顺序不能调换：**`NoAccess` 必须最先判**，否则一个 `LimitedAccess` 会被后面的分支抢先命中；而两个 `LimitedAccess` 子分支之间用 `&&` 同时钉住 `AccessLevel` 与 `LimitedAccessSolution`，这是官方自己的写法。

自定义准入规则时填出这个枚举：

```csharp
public class MySettlementAccessModel : SettlementAccessModel
{
    public override void CanMainHeroEnterSettlement(Settlement settlement, out AccessDetails accessDetails)
    {
        if (settlement.IsFortification && Hero.MainHero.MapFaction == settlement.MapFaction)
        {
            accessDetails = new AccessDetails
            {
                AccessLevel = AccessLevel.FullAccess,
                AccessMethod = AccessMethod.Direct,
                AccessLimitationReason = AccessLimitationReason.None,
                LimitedAccessSolution = LimitedAccessSolution.None,
                PreliminaryActionObligation = PreliminaryActionObligation.None,
                PreliminaryActionType = PreliminaryActionType.None
            };
            return;
        }

        accessDetails = default(AccessDetails);
    }
}
```

这个初始化写法逐字对应 `DefaultSettlementAccessModel.CanMainHeroEnterSettlement` 开头那段：`AccessLevel` 与 `AccessMethod` 用对象初始化器给，**其余四个字段靠枚举默认值**（全是 0，对应各枚举的第一个成员）。`accessDetails = default(AccessDetails)` 则是 `DefaultSettlementAccessModel.CanMainHeroEnterDungeon` 的原文——**结构体默认值把六个字段全置 0，也就是 `AccessLevel.NoAccess`**。

## 风险与边界

- **不是 `Flags`。** 没有 `[Flags]`，成员值是 0/1/2。按位或 `LimitedAccess | FullAccess` 编译通过但语义无意义，且不会报错。
- **隐式值绑定声明顺序。** 三个成员都没写 `= 0` / `= 1` / `= 2`。`GuardsCampaignBehavior.cs:538` 的 `accessDetails.AccessLevel != 2` 已经在依赖这个顺序——**在本文件里插入或重排成员就会静默改变那个守卫的行为**。你若要改，永远用名字而不是数字。
- **默认值是 `NoAccess`。** `default(AccessDetails)` 让所有字段为 0，而 0 就是 `NoAccess`。`DefaultSettlementAccessModel.CanMainHeroEnterDungeon` / `CanMainHeroEnterLordsHall` 都以 `accessDetails = default(SettlementAccessModel.AccessDetails);` 开头，再由 `CanMainHeroEnterKeepInternal` 覆写。**忘记赋值 = 静默禁止进入**，不会抛异常。
- **单独读它没有意义。** 官方没有任何一处只判 `AccessLevel` 就决定行为；`LimitedAccess` 必须配 `LimitedAccessSolution`，`NoAccess` 必须配 `AccessLimitationReason`。
- **嵌套类型。** 完整名是 `SettlementAccessModel.AccessLevel`。在 `using TaleWorlds.CampaignSystem.ComponentInterfaces;` 之后，写 `AccessLevel` 可以（编译器优先解析嵌套名），但**同时 `using` 了别的同名类型就会歧义**——写全限定名最安全。
- **它只描述「进入」，不描述「在内部能做什么」。** 进了内城之后能去哪个 Location、能用哪个菜单项，是 `CanMainHeroAccessLocation` / `CanMainHeroDoSettlementAction` 的事，返回的是 `out bool disableOption, out TextObject disabledText`，**不返回 `AccessDetails`**。别拿 `AccessLevel` 去回答「我能不能做 X」。
- **1.3.0 里消费者极少。** 全树只有 `EncounterGameMenuBehavior`、`PlayerTownVisitCampaignBehavior`、`GuardsCampaignBehavior` 三处读它，全部在 `TaleWorlds.CampaignSystem/CampaignBehaviors/` 下。这意味着改枚举值的影响面小，但**也意味着几乎没有第三方参照实现**——你看到的行为就是全部。

## 怎么用

### 怎么拿到它

`AccessLevel` 是嵌套枚举，没有构造函数也没有静态入口。**它唯一能被"拿到"的路径是从 `AccessDetails` 里读出来**，而 `AccessDetails` 又只可能由模型通过 `out` 参数交给你。所以真正的入口是那个模型，不是这个枚举：`Campaign.Current.Models.SettlementAccessModel` 声明在 `TaleWorlds.CampaignSystem/GameModels.cs:479`，由同文件 `GameModels.cs:721` 的 `base.GetGameModel<SettlementAccessModel>()` 填充。官方实现在 `SandBoxManager.Initialize` 里注册——`TaleWorlds.CampaignSystem/SandBoxManager.cs:275` 一行 `gameStarter.AddModel<SettlementAccessModel>(new DefaultSettlementAccessModel());`。

要改判定就覆盖这个模型。mod 的接入点是 `InitializeGameStarter`，`SandBox/SandBoxSubModule.cs:28` 就是沙盒自己声明的那个回调。

### 典型用法

只放宽一条规则、其余全部转发给官方实现——这是覆盖模型时最省事也最不容易漏的写法：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.GameComponents;
using TaleWorlds.Core;
using TaleWorlds.Localization;
using TaleWorlds.MountAndBlade;

public class MySettlementAccessModel : SettlementAccessModel
{
    // 类型参数要用抽象的 SettlementAccessModel，不是 DefaultSettlementAccessModel。
    private readonly SettlementAccessModel _stock = new DefaultSettlementAccessModel();

    public override void CanMainHeroEnterSettlement(Settlement settlement, out AccessDetails accessDetails)
    {
        // 先让官方实现填满六个字段，再只改你要改的那一个。
        this._stock.CanMainHeroEnterSettlement(settlement, out accessDetails);

        // 本方势力且部队在镇内时，把"有限制"提升为"直接进"。
        if (accessDetails.AccessLevel == SettlementAccessModel.AccessLevel.LimitedAccess
            && settlement.MapFaction == Hero.MainHero.MapFaction)
        {
            accessDetails.AccessLevel = SettlementAccessModel.AccessLevel.FullAccess;
            accessDetails.AccessMethod = SettlementAccessModel.AccessMethod.Direct;
        }
    }

    // 剩下五个抽象成员原样转发。基类一个默认实现都没有，
    // 少任何一个这个类就仍然是抽象的，new 不出来。

    public override void CanMainHeroEnterLordsHall(Settlement settlement, out AccessDetails accessDetails)
    {
        this._stock.CanMainHeroEnterLordsHall(settlement, out accessDetails);
    }

    public override void CanMainHeroEnterDungeon(Settlement settlement, out AccessDetails accessDetails)
    {
        this._stock.CanMainHeroEnterDungeon(settlement, out accessDetails);
    }

    public override bool CanMainHeroAccessLocation(Settlement settlement, string locationId, out bool disableOption, out TextObject disabledText)
    {
        return this._stock.CanMainHeroAccessLocation(settlement, locationId, out disableOption, out disabledText);
    }

    public override bool CanMainHeroDoSettlementAction(Settlement settlement, SettlementAccessModel.SettlementAction settlementAction, out bool disableOption, out TextObject disabledText)
    {
        return this._stock.CanMainHeroDoSettlementAction(settlement, settlementAction, out disableOption, out disabledText);
    }

    public override bool IsRequestMeetingOptionAvailable(Settlement settlement, out bool disableOption, out TextObject disabledText)
    {
        return this._stock.IsRequestMeetingOptionAvailable(settlement, out disableOption, out disabledText);
    }
}

public class MyModule : MBSubModuleBase
{
    protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
    {
        if (game.GameType is Campaign)
        {
            gameStarterObject.AddModel<SettlementAccessModel>(new MySettlementAccessModel());
        }
    }
}
```

`CanMainHeroEnterSettlement` 声明为 `(Settlement settlement, out AccessDetails accessDetails)`（`TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementAccessModel.cs:12`），两个参数，不要写成带返回值的形态。`DefaultSettlementAccessModel` 是 `public class`（`TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementAccessModel.cs:15`），在 `GameComponents` 命名空间，可以直接 `new`。

### 最容易踩的坑

**以为注册新模型之后，官方模型还会继续兜底。不会。** `AddModel<T>`（`TaleWorlds.CampaignSystem/CampaignGameStarter.cs:95`）确实会把上一个模型通过 `gameModel.Initialize(model)` 递进来，但那个被存起来的字段 `BaseModel` 在 `TaleWorlds.Core/MBGameModel.cs:11` 声明成 `private protected T BaseModel`——**既要求派生、又要求同程序集**，你的 mod 在另一个程序集里，所以读不到它。这行代码直接写 `BaseModel` 是编译不过的。

于是只剩两条路：要么像上面那样**自己 `new` 一份官方实现转发**（六个字段都由它填满，你只改一两个）；要么什么都不转发——那么你的模型就是唯一实现，官方那套判定整条消失。后果是静默的、没有任何异常或日志：罪犯靠乔装进内城那条规则（`DefaultSettlementAccessModel.cs:95`）、`CrimeRating` 对应的贿赂路径（`DefaultSettlementAccessModel.cs:104`）、以及 lordshall 和 prison 都空时把 `LimitedAccess` 降级成 `NoAccess` 的那条收尾逻辑（`DefaultSettlementAccessModel.cs:136`）全部不再执行，玩家直接走进本该进不去的地方。

判断你到底装上了没有，看 `BasicGameStarter.cs:27` 的 `GetModel<T>()`：它的循环从 `_models.Count - 1` 往回走（`BasicGameStarter.cs:29`），**最后一次注册的那个赢**。

## 跨版本提示

`AccessLevel` 的三个成员 `NoAccess` / `LimitedAccess` / `FullAccess` 在 `bannerlord-1.3.0/`、`bannerlord-1.3.15/`、`bannerlord-1.4.6/`、`bannerlord-1.4.7/`、`bannerlord-1.5.3/` 五棵树里**完全一致**：同样的三个名字、同样的声明顺序、同样的隐式 0/1/2，没有新增成员、没有重排。

**变的是消费者数量与理由枚举的覆盖面。** 后续版本给 `AccessLimitationReason` 加过成员（更多细分理由），`EncounterGameMenuBehavior` 里的分支也随之变多；而 `AccessLevel` 自己保持三档不动。

对 mod 作者的实际含义：**覆盖 `SettlementAccessModel` 的代码跨版本基本不用改**；真正需要盯的是你依赖的那个 `AccessLimitationReason` 值是否还在。另外那句 `!= 2` 说明**官方自己也不打算动这个顺序**——但那只是它没动，不是契约。

## 依赖关系

- 宿主类型：[SettlementAccessModel](../SettlementAccessModel) 是嵌套它的抽象模型类，三个 `CanMainHeroEnterXxx` 方法用 `out AccessDetails` 返回判定结果
- 承载结构：[AccessDetails](../AccessDetails) 的第一个字段，六个字段中的第一个
- 必须联读的三个兄弟枚举：[AccessMethod](../AccessMethod)（怎么进）、[AccessLimitationReason](../AccessLimitationReason)（为什么不许进）、`LimitedAccessSolution`（有限制时先做什么）
- 默认实现：[DefaultSettlementAccessModel](../DefaultSettlementAccessModel) 是 `CanMainHeroEnterSettlement` / `...LordsHall` / `...Dungeon` 三个方法的官方写法来源
- 消费方：[EncounterGameMenuBehavior](../EncounterGameMenuBehavior) 与 `PlayerTownVisitCampaignBehavior` 是全树仅有的读方；`GuardsCampaignBehavior` 用裸整数 `!= 2` 比较 `FullAccess`
- 桶首页：[campaign API 分区](../)