---
title: "AgeModel"
description: "年龄模型抽象基类：七个年龄门槛整数加一个「按地点角色查合法年龄区间」的方法，是全树判断成年/中年/老年的唯一口径。"
---

# AgeModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class AgeModel : MBGameModel<AgeModel>`
**Base:** `TaleWorlds.Core.MBGameModel<AgeModel>`
**File:** `TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/AgeModel.cs`

## 概述

年龄在 Bannerlord 里不是一个数，而是一串**门槛**：`BecomeInfantAge`（婴儿）、`BecomeChildAge`（孩童）、`BecomeTeenagerAge`（少年）、`HeroComesOfAge`（成年，18）、`MiddleAdultHoodAge`（中年，35）、`BecomeOldAge`（老年，55）、`MaxAge`（寿命上限，128）。这七个整数构成了整个游戏对「一个人多大了」的判定口径，而本类就是这份口径的**唯一存放处**。

它继承 `MBGameModel<AgeModel>` 而不是普通的 `GameModel`——这个泛型基类有一个 `protected T BaseModel { get; private set; }` 与 `public void Initialize(T baseModel)`，作用是让「替换掉默认模型」的 mod 实现可以**回落到官方默认值**，而不是每个抽象成员都自己重写一遍。

第七个成员不是属性而是方法：`GetAgeLimitForLocation(CharacterObject character, out int minimumAge, out int maximumAge, string additionalTags = "")`。它回答的是「这个角色在这类地点里当什么工，合法年龄区间是多少」。默认实现 `DefaultAgeModel` 会按 `character.Occupation` 分支——例如 `Occupation.TavernWench` 直接给 20~28——再按 `additionalTags` 这个**字符串**二次细分（`TavernVisitor` / `ChildTag` / `AlleyGangMemberTag` 等十余个 tag 常量都定义在 `DefaultAgeModel` 上）。

## 心智模型

把它当成「**年龄的唯一真源，读的时候只走 `Campaign.Current.Models.AgeModel` 这一条路**」。理解它需要知道三件事。

第一，**门槛不是均匀的，也不是连续的**。`BecomeInfantAge=3`、`BecomeChildAge=6`、`BecomeTeenagerAge=14`、`HeroComesOfAge=18`、`MiddleAdultHoodAge=35`、`BecomeOldAge=55`、`MaxAge=128`（`DefaultAgeModel` 的实际取值）。注意 `HeroComesOfAge` 与 `BecomeTeenagerAge` 之间只差 4 岁，而 `MaxAge` 远大于 `BecomeOldAge`——所以「老年」不等于「寿命将尽」。

第二，**整数与 float 的比较要显式转换**。全树读法一律是 `hero.Age < (float)Campaign.Current.Models.AgeModel.HeroComesOfAge`——`Hero.Age` 是 float，模型给的是 int，不加 `(float)` 在 C# 里虽然能隐式提升，但官方一致显式写出来，因为**负门槛是可能的**（自定义模型可能给 -1 表示「无限制」），显式转换让阅读时一眼看出是在跟整型门槛比。

第三，**三个最常见的消费点**。`Hero.IsChild => Age < (float)Campaign.Current.Models.AgeModel.HeroComesOfAge`（`Hero.cs:487`）——全树最常被问的「是不是孩子」；`FactionManager` 反复用 `aliveLord.Age > (float)HeroComesOfAge` 筛成年领主；`CharacterData.cs:188-190` 在读档时把低于门槛的年龄**夹到门槛上**（`num = Campaign.Current.Models.AgeModel.HeroComesOfAge`）。最后这一处说明：**模型不是只读的判定，它还参与数据修正**。

第四点值得记：`GetAgeLimitForLocation` 的两个输出是 `out int`，意味着**实现方必须在每条分支上给两个值都赋值**——C# 编译器会强制这一点，所以漏赋会编译失败而不是留下未初始化值。同时那个 `additionalTags` 是裸 `string`，`DefaultAgeModel` 内部是 `switch` 字符串比较，**传一个不认识的 tag 会静默落到默认分支**，不报错。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `BecomeInfantAge` | `public abstract int BecomeInfantAge { get; }` | 婴儿门槛。`DefaultAgeModel` 给 3。它主要用于挑选「婴幼儿」形态的 `CharacterObject` 变体，而不是判定成年与否。 |
| `BecomeChildAge` | `public abstract int BecomeChildAge { get; }` | 孩童门槛（默认 6）。儿童阶段的年龄下界，也是选儿童外观/体型的依据。 |
| `BecomeTeenagerAge` | `public abstract int BecomeTeenagerAge { get; }` | 少年门槛（默认 14）。与 `HeroComesOfAge` 只差 4 岁，两者之间的角色既算少年也未成年——**这两个门槛是可以被自定义模型拉开的**，不要假设它们相邻。 |
| `HeroComesOfAge` | `public abstract int HeroComesOfAge { get; }` | **成年门槛，也是全树引用最多的成员**（`Hero.IsChild`、`FactionManager`、`Clan.cs:1359`、`TownHelpers`、`CharacterData` 等处）。默认 18。所有「能否结婚 / 能否担任领主 / 能否分家产」类判定最终都落到它。 |
| `BecomeOldAge` | `public abstract int BecomeOldAge { get; }` | 老年门槛（默认 55）。用于挑选老年外观与降低部分技能上限。 |
| `MiddleAdultHoodAge` | `public abstract int MiddleAdultHoodAge { get; }` | 中年门槛（默认 35）。`HeroHelper.cs:291` 是全树唯一引用点，用它与另外两个门槛一起划分成年角色的三个年龄段。 |
| `MaxAge` | `public abstract int MaxAge { get; }` | 寿命上限（默认 128）。`CampaignCheats.cs:2259-2261` 用它做输入校验，超出直接拒绝改年龄。 |
| `GetAgeLimitForLocation` | `public abstract void GetAgeLimitForLocation(CharacterObject character, out int minimumAge, out int maximumAge, string additionalTags = "")` | 唯一的计算型成员，回答「这个角色在这个地点/岗位下的合法年龄区间」。`out` 语义强制实现方赋满两个值。`additionalTags` 是**裸字符串 switch**（`DefaultAgeModel` 上有 `TavernVisitorTag` / `NotaryTag` / `AlleyGangMemberTag` 等十余个常量），不认识的 tag 静默落默认分支。 |

## 真实示例

最常见的用法——判成年。它是 `Hero.IsChild` 的原样复刻：

```csharp
Hero hero = Hero.MainHero;
int comesOfAge = Campaign.Current.Models.AgeModel.HeroComesOfAge;

bool isChild = hero.Age < (float)comesOfAge;
bool isBard = hero.Age >= (float)Campaign.Current.Models.AgeModel.BecomeOldAge;

Debug.Print("age=" + hero.Age + " child=" + isChild + " old=" + isBard, 0);
```

按年龄段分档（`HeroHelper.cs:291` 的做法）：

```csharp
public static string AgeBracket(Hero hero)
{
    int comesOfAge = Campaign.Current.Models.AgeModel.HeroComesOfAge;
    int middleAge = Campaign.Current.Models.AgeModel.MiddleAdultHoodAge;
    int oldAge = Campaign.Current.Models.AgeModel.BecomeOldAge;

    if (hero.Age < (float)comesOfAge)
    {
        return "child";
    }

    if (hero.Age < (float)middleAge)
    {
        return "young adult";
    }

    return hero.Age < (float)oldAge ? "middle aged" : "old";
}
```

查某个角色在某类岗位上的合法年龄区间——`out` 参数是强制的，漏赋编译不过：

```csharp
CharacterObject shopWorker = MobileParty.MainParty.MemberRoster.GetCharacterAtIndex(0);

Campaign.Current.Models.AgeModel.GetAgeLimitForLocation(
    shopWorker, out int minimumAge, out int maximumAge);

Debug.Print("merchant age window = " + minimumAge + ".." + maximumAge, 0);
```

带附加标签查询（第三方阵营会给盟友解锁放宽的年龄区间，不认识的标签会静默落回默认）：

```csharp
CharacterObject noble = Hero.MainHero.CharacterObject;

Campaign.Current.Models.AgeModel.GetAgeLimitForLocation(
    noble, out int minimumAge, out int maximumAge, "Notary");

Debug.Print("notary window = " + minimumAge + ".." + maximumAge, 0);
```

实现一个自己的年龄模型并装上——**`AddModel<AgeModel>` 内部会先 `GetModel<AgeModel>()` 取回当前模型再 `Initialize` 注入，所以 `BaseModel` 在这里被填好**：

```csharp
public class MySlowGrowthAgeModel : AgeModel
{
    public override int BecomeInfantAge => 4;

    public override int BecomeChildAge => 8;

    public override int BecomeTeenagerAge => 16;

    public override int HeroComesOfAge => this.BaseModel.HeroComesOfAge + 2;

    public override int BecomeOldAge => 60;

    public override int MiddleAdultHoodAge => 38;

    public override int MaxAge => 140;

    public override void GetAgeLimitForLocation(
        CharacterObject character, out int minimumAge, out int maximumAge,
        string additionalTags = "")
    {
        // 只改成年门槛，其余全部沿用官方实现
        this.BaseModel.GetAgeLimitForLocation(character, out minimumAge, out maximumAge, additionalTags);
        minimumAge += 2;
    }
}

// 装上的地方：MBSubModuleBase.InitializeGameStarter(Game, IGameStarter)，
// Campaign.cs:1385 会在建战役时回调它（StoryModeSubModule 就是这么干的）
public class MyAgeModelModule : MBSubModuleBase
{
    protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
    {
        base.InitializeGameStarter(game, gameStarterObject);

        CampaignGameStarter starter = (CampaignGameStarter)gameStarterObject;
        starter.AddModel<AgeModel>(new MySlowGrowthAgeModel());
    }
}
```

## 风险与边界

- **七个属性全是 `abstract`，派生类必须全实现。** 少一个编译不过。
- **`BaseModel` 由 `CampaignGameStarter.AddModel<T>` 自动注入。** 它的实现是 `T model = GetModel<T>(); gameModel.Initialize(model); _models.Add(gameModel);`——只要走这条官方入口，`BaseModel` 就非 null。**自己 `new MyAgeModel()` 直接用就绕过了它**，`BaseModel` 为 null 并在 `.HeroComesOfAge` 上 NRE。
- **门槛可以返回 0 或负数。** 抽象成员不校验，实现方给负数在编译期完全合法，全树靠 `(float)` 显式转换让语义保持「int 门槛 vs float 年龄」。
- **`additionalTags` 是字符串比较，不是枚举。** `DefaultAgeModel` 内部 `switch (additionalTags)`，传 `"notary"`（小写）会静默落默认分支。拼错标签的唯一表现是「结果和没传一样」。
- **`GetAgeLimitForLocation` 不做区间校验。** 实现方可以给出 `minimumAge > maximumAge` 这种反直觉结果，编译器不会拦。
- **改模型会立刻影响大量既有逻辑。** `Hero.IsChild`、`Clan` 分产、`FactionManager` 选成年领主、`CharacterData` 读档夹取全部读同一个实例。
- **改门槛会影响旧存档的表现。** `CharacterData.cs:188-190` 在读档时把低于门槛的年龄**夹上去**，所以调整门槛后老存档里那些「本来成年」的英雄会在下次读档时被动改年龄。
- **`CampaignCheats` 用 `MaxAge` 做输入校验。** 抬高 `MaxAge` 会同时放宽控制台改年龄的允许范围。
- **`MiddleAdultHoodAge` 只有一个引用点。** 它比其它门槛冷门得多，自定义模型里最容易漏改。

## 依赖关系

- 泛型基类：[MBGameModel](../../core-extra/MBGameModel) 提供 `protected T BaseModel` 与 `public void Initialize(T baseModel)`，是「替换模型时回落默认值」的机制来源
- 默认实现：`DefaultAgeModel`（`TaleWorlds.CampaignSystem.GameComponents`）给出七个门槛的具体数值与 `GetAgeLimitForLocation` 的完整 `Occupation` / tag 分支表，同时定义了 `TavernVisitorTag` / `NotaryTag` / `AlleyGangMemberTag` 等标签常量
- 判定口径：`Hero.IsChild`（`Hero.cs:487`）、`FactionManager` 的成年领主筛选、`Clan.cs:1359`、`TownHelpers.cs:116`、`HeroHelper.cs:291`、`CampaignCheats.cs:2259`、`CharacterData.cs:188` 是七个门槛在全树的主要落点
- 角色输入：`GetAgeLimitForLocation` 的第一个参数是 [CharacterObject](../../campaign/CharacterObject)，其 `Occupation` 属性决定 `DefaultAgeModel` 走哪条分支
- 数据修正：`CharacterData` 的读档夹取逻辑意味着模型同时是「判定器」与「数据修正器」，而不只是查询表
- 替换入口：[CampaignGameStarter](../CampaignGameStarter) 的 `AddModel<AgeModel>(MBGameModel<AgeModel>)` 会先 `GetModel<AgeModel>()` 取回当前模型再 `Initialize` 注入，这是把自定义实现装上的官方途径
- 同族模型：`BanditDensityModel` 与本类同在 `ComponentInterfaces` 命名区，是同一套「`MBGameModel<T>` + 抽象属性」范式的另一个实例
- 桶首页：[campaign-ext API 分区](../)
