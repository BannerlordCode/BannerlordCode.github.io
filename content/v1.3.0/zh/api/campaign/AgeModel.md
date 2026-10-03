---
title: "AgeModel"
description: "年龄分段模型：7 个抽象 int 属性 + 1 个抽象方法，唯一的默认实现 DefaultAgeModel 给出的数字是 3/6/14/18/35/55/128；覆盖它会连带改掉整个 AgingCampaignBehavior。"
---

# AgeModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class AgeModel : MBGameModel<AgeModel>`
**Base:** `MBGameModel<AgeModel>` → `GameModel` → 隐式 `System.Object`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/AgeModel.cs`（全文 41 行）

## 概述

`AgeModel` 是**年龄分段的规则来源**，只有 8 个成员：7 个 `public abstract int` 只读属性，和 1 个 `public abstract void GetAgeLimitForLocation(CharacterObject character, out int minimumAge, out int maximumAge, string additionalTags = "")`。

七个属性的名字都是「在多少岁变成什么」：`BecomeInfantAge` / `BecomeChildAge` / `BecomeTeenagerAge` / `HeroComesOfAge` / `BecomeOldAge` / `MiddleAdultHoodAge` / `MaxAge`。**它们只有声明，没有实现**——数字来自派类。唯一实现是 `DefaultAgeModel`，它给出的值是 **3 / 6 / 14 / 18 / 35 / 55 / 128**（按上面那个顺序：`BecomeInfantAge=3`、`BecomeChildAge=6`、`BecomeTeenagerAge=14`、`HeroComesOfAge=18`、`MiddleAdultHoodAge=35`、`BecomeOldAge=55`、`MaxAge=128`）。

它是 `MBGameModel<AgeModel>`，所以**泛型参数是 `AgeModel` 这个抽象类本身，不是你的派类**。这正是覆盖链能多方叠加的原因——见 [GameModel](../../core-extra/GameModel)。注册写法是 `gameStarter.AddModel<AgeModel>(new MyAgeModel());`。

**覆盖它的影响面远超「数字变了」。** [AgingCampaignBehavior](../AgingCampaignBehavior) 全程读它：`DailyTickHero` 里判 `num2 >= Campaign.Current.Models.AgeModel.HeroComesOfAge` 决定是否触发成年、`num2 == ...BecomeTeenagerAge` 触发少年期、`num2 == ...BecomeChildAge` 触发脱离幼年期；`IsItTimeOfDeath` 判 `hero.Age >= (float)Campaign.Current.Models.AgeModel.BecomeOldAge` 决定是否可能老死；`InitializeHeroesYoungerThanHeroComesOfAge` 与 `CheckYoungHeroes` 用它圈定「需要跟踪的未成年英雄」。

## 心智模型

把它当成**「七个门槛 + 一张按职业分档的年龄表」**，三段定位：

**第一段：七个属性是七个独立的门槛，且比较方式各不相同。** 这不是可以随意读的统一接口：

| 属性 | 谁读它 | 比较方式 |
| --- | --- | --- |
| `HeroComesOfAge` | `AgingCampaignBehavior` | `>=`（成年阈值） |
| `BecomeTeenagerAge` | `AgingCampaignBehavior` | **`==` 精确相等** |
| `BecomeChildAge` | `AgingCampaignBehavior` | **`==` 精确相等** |
| `BecomeInfantAge` | `DefaultAgeModel.GetAgeLimitForLocation` 内部 | 范围下界 |
| `BecomeOldAge` | `AgingCampaignBehavior.IsItTimeOfDeath` | `>=` |
| `MiddleAdultHoodAge` | 逻辑消费方 | 中年分界 |
| `MaxAge` | `DefaultAgeModel.GetAgeLimitForLocation` 兜底 | 范围上界 |

**`BecomeTeenagerAge` 与 `BecomeChildAge` 被 `==` 精确匹配，这一点决定了你能不能改它们。** `DailyTickHero` 写的是 `if (num2 == Campaign.Current.Models.AgeModel.BecomeTeenagerAge) { ... }`，其中 `num2 = (int)hero.Age`。**英雄的年龄是按整数天推进的**，所以它每天都会整数岁地穿过这些值——把 `BecomeTeenagerAge` 从 14 改成 13.5 的话，`(int)hero.Age` 永远不等于 13.5，**这个事件就永远不会触发**。改成整数就没事。

**第二段：`GetAgeLimitForLocation` 是另一个职责。** 七个属性回答「全局分几段」，这个方法回答「这个具体 NPC（按职业 + 可选标签）允许出现在什么年龄段」。它的实现是一长串按 `character.Occupation` 与 `additionalTags` 字符串分支的 if-else：

- `Occupation == Occupation.TavernWench` → 20..28，与标签无关
- `Occupation == Occupation.Townsfolk` → **按 `additionalTags` 分十几档**：`TavernVisitor` 20..60、`TavernDrinker` 20..40、`SlowTownsman` 50..70、`TownsfolkCarryingStuff` 20..40、`BroomsWoman` 30..45、`Dancer` 20..28、`Beggar` 60..90、`Child` / `Teenager` / `Infant` 用本类的三个年龄属性夹出来、`Notary` 与 `Barber` 同为 30..80、兜底 `HeroComesOfAge`..70
- `Occupation == Occupation.Villager` → 标签分档少一些，兜底 `HeroComesOfAge`..70
- 其它职业 → `TavernGameHost` 30..40、`Musician` 20..40、`ArenaMaster` 30..60、`ShopWorker` 18..50、`Tavernkeeper` 40..80、`RansomBroker` 30..60、五个铁匠/商人职业 30..80、`AlleyGangMember` 标签 30..40、兜底 `HeroComesOfAge`..`MaxAge`

**那些标签是 `DefaultAgeModel` 上的 `public const string`。** 例如 `TavernVisitorTag = "TavernVisitor"`、`ChildTag = "Child"`、`InfantTag = "Infant"`、`AlleyGangMemberTag = "AlleyGangMember"`。**调用方必须传字面量或这些常量**——传错大小写或拼错就静默落到兜底分支。

**第三段：兜底分支是真正的语义边界。** 最后那个 `else` 给出 `minimumAge = this.HeroComesOfAge; maximumAge = this.MaxAge;` —— **在未知职业/未知标签下，范围是「成年到寿终」**。这意味着你**不能只改 `GetAgeLimitForLocation` 而不改七个属性**——它们是兜底值本身的来源。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `BecomeInfantAge` | `public abstract int BecomeInfantAge { get; }` | 「多少岁成为幼童」的分界。`DefaultAgeModel` 给 `3`。在本类内部，`GetAgeLimitForLocation` 把它当作 `additionalTags == "Infant"` 时的**下界**（上界是 `BecomeChildAge`）。**在 `AgingCampaignBehavior` 里没有直接读点。** |
| `BecomeChildAge` | `public abstract int BecomeChildAge { get; }` | 「多少岁成为儿童」。`DefaultAgeModel` 给 `6`。**`AgingCampaignBehavior.DailyTickHero` 用 `num2 == ...BecomeChildAge` 精确匹配来触发「脱离幼年期」**（派发 `OnHeroGrowsOutOfInfancy`）。**改成非整数会永久禁用该事件。** |
| `BecomeTeenagerAge` | `public abstract int BecomeTeenagerAge { get; }` | 「多少岁进入少年期」。`DefaultAgeModel` 给 `14`。**同样被 `==` 精确匹配**触发 `OnHeroReachesTeenAge`。`GetAgeLimitForLocation` 里 `Child` 标签的上界与 `Teenager` 标签的下界都用它。 |
| `HeroComesOfAge` | `public abstract int HeroComesOfAge { get; }` | 「多少岁成年」。`DefaultAgeModel` 给 `18`。**这是被读得最多的一个**：`DailyTickHero` 用 `>=` 判成年、`OnHeroCreated` 与 `InitializeHeroesYoungerThanHeroComesOfAge` 用它圈定要跟踪的未成年英雄、`GetAgeLimitForLocation` 的多个兜底分支以它为**下界**。 |
| `BecomeOldAge` | `public abstract int BecomeOldAge { get; }` | 「多少岁进入老年」。`DefaultAgeModel` 给 `55`。`AgingCampaignBehavior.IsItTimeOfDeath` 用 `hero.Age >= (float)...BecomeOldAge` 作为老死判定的**前置条件**——低于它就完全不会老死。 |
| `MiddleAdultHoodAge` | `public abstract int MiddleAdultHoodAge { get; }` | 「多少岁进入中年」。`DefaultAgeModel` 给 `35`。**`DefaultAgeModel.GetAgeLimitForLocation` 的任何分支都没用到它**，消费方在别处。 |
| `MaxAge` | `public abstract int MaxAge { get; }` | 「年龄上限」。`DefaultAgeModel` 给 `128`。在 `GetAgeLimitForLocation` 的最后兜底里作**上界**。`BaseModel.MaxAge` 也是覆盖时转发基类最常用的入口。 |
| `GetAgeLimitForLocation` | `public abstract void GetAgeLimitForLocation(CharacterObject character, out int minimumAge, out int maximumAge, string additionalTags = "")` | **唯一的抽象方法**，也是全类最复杂的一个。按 `character.Occupation` 与 `additionalTags` 字符串返回该 NPC 允许的年龄区间。**`out` 参数不是可选的——两个都必须赋值**，否则编译不过（`out` 不接受「不赋值」）。`additionalTags` 默认空串，走该职业的兜底分支。**标签拼错不报错，只会落到兜底。** |

## 真实示例

覆盖七个年龄并沿链转发（`MBGameModel<AgeModel>` 的标准写法）：

```csharp
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.Core;

public class SlowAgingModel : MBGameModel<AgeModel>
{
    public override int BecomeInfantAge { get { return 4; } }
    public override int BecomeChildAge { get { return 8; } }
    public override int BecomeTeenagerAge { get { return 16; } }
    public override int HeroComesOfAge { get { return 21; } }
    public override int BecomeOldAge { get { return 62; } }
    public override int MiddleAdultHoodAge { get { return 40; } }
    public override int MaxAge { get { return 110; } }

    public override void GetAgeLimitForLocation(CharacterObject character, out int minimumAge, out int maximumAge, string additionalTags = "")
    {
        // 转发而不是写死：让链上更内层的模型仍然有机会生效
        if (additionalTags == DefaultAgeModel.ChildTag)
        {
            minimumAge = this.BecomeChildAge;
            maximumAge = this.BecomeTeenagerAge;
            return;
        }

        minimumAge = this.BecomeChildAge;
        maximumAge = this.HeroComesOfAge;
    }
}
```

**注意 `MBGameModel<AgeModel>` 的泛型参数是 `AgeModel` 而不是 `SlowAgingModel`。** 注册也必须是 `gameStarter.AddModel<AgeModel>(new SlowAgingModel());`——写 `AddModel<SlowAgingModel>` 编译不过。这正是多方 mod 能叠加的机制：不管你的类叫什么、继承几层，`AddModel<AgeModel>` 都能接住。

只改一个数字、其余全部转发（更安全的改法）：

```csharp
public class LateOldAgeModel : MBGameModel<AgeModel>
{
    public override int BecomeOldAge { get { return 65; } }

    public override int MaxAge
    {
        get { return this.BaseModel.MaxAge; }
    }

    public override void GetAgeLimitForLocation(CharacterObject character, out int minimumAge, out int maximumAge, string additionalTags = "")
    {
        this.BaseModel.GetAgeLimitForLocation(character, out minimumAge, out maximumAge, additionalTags);
    }
}
```

`BaseModel` 是 `MBGameModel<T>` 上的 `private protected T BaseModel { protected get; private set; }`——**外部读不到、派生类读得到**。走 `this.BaseModel.` 转发意味着上一个 mod 的修改你看得见；直接 `return 65` 则会吞掉它。

读模型（`DefaultAgeModel` 给出的实际数字）：

```csharp
AgeModel age = Campaign.Current.Models.AgeModel;
Debug.Print("infant<" + age.BecomeInfantAge
    + " child<" + age.BecomeChildAge
    + " teen<" + age.BecomeTeenagerAge
    + " adult<" + age.HeroComesOfAge
    + " middle<" + age.MiddleAdultHoodAge
    + " old>=" + age.BecomeOldAge
    + " max=" + age.MaxAge, 0);

int minAge;
int maxAge;
age.GetAgeLimitForLocation(characterObject, out minAge, out maxAge, DefaultAgeModel.ChildTag);
Debug.Print("child band = " + minAge + ".." + maxAge, 0);
```

`DefaultAgeModel.ChildTag` 是 `public const string ChildTag = "Child"`，用常量比写字面量更安全——**它不会因为写错拼写而静默落到兜底分支。**

## 风险与边界

- **7 个属性 + 1 个方法全是 `abstract`，一个默认实现都没有。** 派生类少实现任何一个就是抽象的，编译不过。
- **`BecomeChildAge` 与 `BecomeTeenagerAge` 被 `==` 精确匹配。** `DailyTickHero` 写的是 `num2 == Campaign.Current.Models.AgeModel.BecomeChildAge`，其中 `num2 = (int)hero.Age`。**改成非整数值会让对应事件永远不触发**——不报错，只是永不发生。其它四个属性用的是 `>=`，可以任意整数。
- **覆盖它等于改写整个衰老系统。** [AgingCampaignBehavior](../AgingCampaignBehavior) 的四个生命周期事件（`OnHeroGrowsOutOfInfancy` / `OnHeroReachesTeenAge` / `OnHeroComesOfAge` / 老死判定）全部读它，而你看不到这些读点——它们在一个官方行为类内部。
- **`additionalTags` 是字符串，没有编译期保护。** `DefaultAgeModel` 用一长串 `additionalTags == "TavernVisitor"` 之类判断，**拼错、大小写不同、传 null 都只是静默落到兜底分支**，不抛异常。传那些 `public const string` 常量。
- **兜底分支用 `HeroComesOfAge` 与 `MaxAge`。** 所以你改了 `GetAgeLimitForLocation` 却不改那两个属性，兜底区间不会跟着变。
- **`out` 参数必须都赋值。** `GetAgeLimitForLocation` 的两个 `out int` 在任何返回路径上都要赋值；漏掉一条路径会编译失败（C# 要求 `out` 参数在方法返回前必然赋值）。
- **`MiddleAdultHoodAge` 不参与年龄区间计算。** `DefaultAgeModel.GetAgeLimitForLocation` 的任何分支都没用到它——它的消费方在别处。
- **`BaseModel` 是 `private protected`。** 派生类读得到，外部代码读不到。想沿链转发只能在 `MBGameModel<T>` 的派生类里写 `this.BaseModel.X(...)`。
- **`AgeModel` 不是 `sealed`，但也没有虚方法可覆写。** 七个属性与一个方法都是 `abstract`，你只能继承实现，不能组合。
- **注册时机有截止点。** `GameModels` 在 `Campaign.cs:1905` 构造，那一刻 `GetGameModel<AgeModel>()` 才倒序扫一次。**在 `InitializeGameStarter` 之后注册就对已建好的 `GameModels` 无效。**

## 跨版本提示

`AgeModel` 的 abstract 表面在 `bannerlord-1.3.0/`、`bannerlord-1.3.15/`、`bannerlord-1.4.6/`、`bannerlord-1.4.7/`、`bannerlord-1.5.3/` 五棵树里**完全一致**：都是 7 个抽象 `int` 属性 + 1 个抽象方法 `GetAgeLimitForLocation(CharacterObject, out int, out int, string additionalTags = "")`，0 新增 / 0 移除 / 0 签名变化。

**变的是 `DefaultAgeModel` 的具体数字与标签集合。** 七个数字在 1.3.0 是 3 / 6 / 14 / 18 / 35 / 55 / 128。后续版本随角色年龄设计调整而变动，`GetAgeLimitForLocation` 里的职业分档与 `additionalTags` 字符串集合也会变化。

**对你覆盖代码的实际影响有两条。** 第一，**如果你硬写死数字而不是转发 `BaseModel`**，升级后你的数字与官方的会不一致——但不会崩溃，行为仍然自洽（只是你的 mod 定义了一套年龄）。第二，**如果你依赖某个 `additionalTags` 字符串**，它在后续版本可能被改名或删除，届时会静默落到兜底分支，年龄区间变成「成年到寿终」。**这是本页最值得防的一条**：把标签常量抄进你自己的常量类，别每次从 `DefaultAgeModel` 现取（后者反而能让你发现改名）。

最后一条：**七个数值的稳定性不是契约**。它们是游戏平衡的一部分，每个大版本都可能调。你的 mod 若改变它们，应当把它当作「明确的玩法改动」而不是「顺手调参」。

## 依赖关系

- 基类链：[GameModel](../../core-extra/GameModel)（零成员的标记基类）→ [MBGameModel](../../core-extra/MBGameModel)（提供 `private protected T BaseModel` 与 `Initialize(T)`）
- 唯一实现：[DefaultAgeModel](../DefaultAgeModel) 给出 3/6/14/18/35/55/128，以及按职业与标签的完整分档表与那些 `public const string` 标签常量
- 读取方：[AgingCampaignBehavior](../AgingCampaignBehavior) 在 `DailyTickHero` / `OnHeroCreated` / `IsItTimeOfDeath` / `InitializeHeroesYoungerThanHeroComesOfAge` / `CheckYoungHeroes` 五处读它
- 承载槽位：[GameModels](../GameModels) 的 `public AgeModel AgeModel { get; private set; }`（`GameModels.cs:384`，赋值在 `:705`），全局访问点是 `Campaign.Current.Models.AgeModel`
- 依赖类型：[CharacterObject](../CharacterObject)（`GetAgeLimitForLocation` 的第一个参数，取它的 `Occupation`）与 `TaleWorlds.CampaignSystem.Occupation`
- 注册入口：[CampaignGameStarter](../CampaignGameStarter) 的 `AddModel<T>(MBGameModel<T>)`
- 桶首页：[campaign API 分区](../)