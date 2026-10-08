---
title: DefaultAgeModel
description: TaleWorlds.CampaignSystem.GameComponents 下的默认年龄模型实现：给出婴儿、儿童、少年、成年、中年、老年七条年龄阈值属性，并按职业与标签返回 NPC 生成时的年龄上下限。
---

# DefaultAgeModel

**命名空间：** TaleWorlds.CampaignSystem.GameComponents
**模块：** TaleWorlds.CampaignSystem
**类型：** class
**基类：** [AgeModel](../AgeModel)
**源文件：** bannerlord-1.4.7/TaleWorlds.CampaignSystem/GameComponents/DefaultAgeModel.cs

## 概述

`DefaultAgeModel` 继承自 `AgeModel`，源码里可见它由两部分组成：七条只读的年龄阈值属性（`BecomeInfantAge`、`BecomeChildAge`、`BecomeTeenagerAge`、`HeroComesOfAge`、`MiddleAdultHoodAge`、`BecomeOldAge`、`MaxAge`），以及一个用于生成 NPC 的年龄区间方法 `GetAgeLimitForLocation`，外加十三个公开的标签常量。阈值属性的 getter 全部直接返回字面量（DefaultAgeModel.cs:11、DefaultAgeModel.cs:21、DefaultAgeModel.cs:31、DefaultAgeModel.cs:41、DefaultAgeModel.cs:51、DefaultAgeModel.cs:61、DefaultAgeModel.cs:71），没有读取任何存档状态或配置，因此它们是纯常量式读数。

`GetAgeLimitForLocation` 则是一个纯函数式分支表（DefaultAgeModel.cs:80）：输入是 `CharacterObject`、可选标签字符串，输出是两个 `out int`。它先看 `Occupation`，再看 `additionalTags`，最后回落到默认区间，全程不做随机数运算——也就是说，同一对输入永远得到同一对输出。

阅读这一页时要分清三类内容：**阈值**（决定一个角色在哪个年龄跨入下一阶段）、**区间**（决定街头/酒馆 NPC 被生成出来时有多大）、**标签常量**（区间分支的字符串键）。三者的取值都写在源码里，可以被派生类整体替换，而不需要改动引擎代码。

## 心智模型

把年龄模型想成一把**刻度尺 + 一张筛选表**。

**刻度尺。** 七条阈值属性构成有序的刻度：`BecomeInfantAge` = 3、`BecomeChildAge` = 6、`BecomeTeenagerAge` = 14、`HeroComesOfAge` = 18、`MiddleAdultHoodAge` = 35、`BecomeOldAge` = 55、`MaxAge` = 128（DefaultAgeModel.cs:11、DefaultAgeModel.cs:21、DefaultAgeModel.cs:31、DefaultAgeModel.cs:41、DefaultAgeModel.cs:51、DefaultAgeModel.cs:61、DefaultAgeModel.cs:71）。名字里的 `BecomeXxx` 读作「到达这个岁数即成为 Xxx」，所以判断某个 `Age` 落在哪个阶段，是在做区间包含判断，而不是在查表。刻度尺必须保持递增，否则阶段划分会出现空区间或反向区间。

**筛选表。** `GetAgeLimitForLocation` 的决策顺序是固定的三层，读代码时可以按这个顺序复述：

1. **第一层：职业。** 先判断 `Occupation.TavernWench`（直接 20–28 并返回）、`Occupation.Townsfolk`、`Occupation.Villager`，其余职业进入 `else` 分支单独列举：`TavernGameHost` 30–40、`Musician` 20–40、`ArenaMaster` 30–60、`ShopWorker` 18–50、`Tavernkeeper` 40–80、`RansomBroker` 30–60，以及 `Blacksmith` / `GoodsTrader` / `HorseTrader` / `Armorer` / `Weaponsmith` 共用 30–80（DefaultAgeModel.cs:80）。
2. **第二层：标签。** 只有 `Townsfolk` 与 `Villager` 两条职业分支内部才会读 `additionalTags`，而且用字符串相等比较逐条匹配（`additionalTags == "TavernVisitor"` 这种写法），所以标签是**区分大小写的精确字符串**，传错一个字母就落回默认分支。
3. **第三层：默认值。** `Townsfolk` 无匹配标签时是 `HeroComesOfAge`–70；`Villager` 无匹配标签时是 `HeroComesOfAge`–70；`else` 分支无匹配职业时是 `HeroComesOfAge`–`MaxAge`（DefaultAgeModel.cs:80）。

**关键副作用：** 两个 `out` 参数在每个分支里都被赋值后再 `return`，所以调用方拿到的永远是确定值；同时它**不修改** `character` 本身，只是回答「这类角色可以有多大」。

**标签常量的意义。** 十三个 `public const string` 是上表第二层的键，值就是裸字符串本身（DefaultAgeModel.cs:247 到 DefaultAgeModel.cs:283）。它们的作用是让调用方不必手打魔法字符串：`DefaultAgeModel.ChildTag` 与 `"Child"` 是同一个值。注意 `AlleyGangMemberTag` 只在 `else` 分支里被检查（DefaultAgeModel.cs:283），而 `TownsfolkCarryingStuffTag` 在 `Townsfolk` 与 `Villager` 两条分支里都被检查（DefaultAgeModel.cs:256），这正是「同一标签在不同职业下语义不同」的体现。

## 怎么用

**读阈值。** 从当前战役的模型集合取实例，再读属性即可：

```csharp
int comesOfAge = Campaign.Current.Models.AgeModel.HeroComesOfAge;
bool isAdult = hero.Age >= comesOfAge;
```

注意基类 `AgeModel` 暴露的是同一批属性名，所以对派生模型写代码时请面向 `AgeModel` 编程，而不是硬编码 `DefaultAgeModel`。

**问年龄区间。** 传入 `CharacterObject` 与标签，接收两个 `out`：

```csharp
Campaign.Current.Models.AgeModel.GetAgeLimitForLocation(
    character, out int minAge, out int maxAge, DefaultAgeModel.BeggarTag);
```

**用标签常量而不是字面量。** 想复现「乞丐 60–90 岁」这一分支，就用 `DefaultAgeModel.BeggarTag`；想复现「儿童」区间，就用 `DefaultAgeModel.ChildTag`，它内部会转成 `BecomeChildAge` 到 `BecomeTeenagerAge`（DefaultAgeModel.cs:268、DefaultAgeModel.cs:271、DefaultAgeModel.cs:274）。

**替换整套年龄规则。** 写一个继承 `AgeModel` 的类并覆写上面这些成员，然后通过 `CampaignGameStarter` 在战役初始化阶段注册；注册与 `Game`、`Module` 的生命周期关系见「参见」一节。覆写时如果只想改一两条阈值，其余 getter 要自己给出值，因为基类不会帮你兜底。

**写派生类时的自检清单：** 阈值是否仍然严格递增；`GetAgeLimitForLocation` 的每条分支是否都给两个 `out` 赋了值；标签比较是否保持了精确字符串语义；默认分支是否仍然覆盖「职业未知」的兜底场景。

## 关键成员

| 成员 | 行号 | 说明 |
| --- | --- | --- |
| `DefaultAgeModel` | DefaultAgeModel.cs:7 | 类型声明行，`public class DefaultAgeModel : AgeModel`，是后续所有覆写成员的宿主 |
| `BecomeInfantAge` | DefaultAgeModel.cs:11 | 只读属性，getter 返回 3；婴儿阶段的下界刻度 |
| `BecomeChildAge` | DefaultAgeModel.cs:21 | 只读属性，getter 返回 6；儿童阶段下界，同时是婴儿区间上界 |
| `BecomeTeenagerAge` | DefaultAgeModel.cs:31 | 只读属性，getter 返回 14；少年阶段下界，同时是儿童区间上界 |
| `HeroComesOfAge` | DefaultAgeModel.cs:41 | 只读属性，getter 返回 18；成年下界，也是多条职业默认区间的下界 |
| `MiddleAdultHoodAge` | DefaultAgeModel.cs:51 | 只读属性，getter 返回 35；中年阶段下界 |
| `BecomeOldAge` | DefaultAgeModel.cs:61 | 只读属性，getter 返回 55；老年阶段下界 |
| `MaxAge` | DefaultAgeModel.cs:71 | 只读属性，getter 返回 128；年龄刻度的上界，被 else 分支的默认区间使用 |
| `GetAgeLimitForLocation` | DefaultAgeModel.cs:80 | 按 `Occupation` 与 `additionalTags` 分支返回 `out` 型 `minimumAge` / `maximumAge`；不修改入参、不使用随机数 |
| `TavernVisitorTag` | DefaultAgeModel.cs:247 | 标签常量，值为 `"TavernVisitor"`；Townsfolk 分支 → 20–60 |
| `TavernDrinkerTag` | DefaultAgeModel.cs:250 | 标签常量，值为 `"TavernDrinker"`；Townsfolk 分支 → 20–40 |
| `SlowTownsmanTag` | DefaultAgeModel.cs:253 | 标签常量，值为 `"SlowTownsman"`；Townsfolk 分支 → 50–70 |
| `TownsfolkCarryingStuffTag` | DefaultAgeModel.cs:256 | 标签常量，值为 `"TownsfolkCarryingStuff"`；Townsfolk 与 Villager 两条分支都检查它 → 20–40 |
| `BroomsWomanTag` | DefaultAgeModel.cs:259 | 标签常量，值为 `"BroomsWoman"`；Townsfolk 分支 → 30–45 |
| `DancerTag` | DefaultAgeModel.cs:262 | 标签常量，值为 `"Dancer"`；Townsfolk 分支 → 20–28 |
| `BeggarTag` | DefaultAgeModel.cs:265 | 标签常量，值为 `"Beggar"`；Townsfolk 分支 → 60–90，是 Townsfolk 里下界最高的分支 |
| `ChildTag` | DefaultAgeModel.cs:268 | 标签常量，值为 `"Child"`；Townsfolk 与 Villager 分支都用 `BecomeChildAge`–`BecomeTeenagerAge` 生成 |
| `TeenagerTag` | DefaultAgeModel.cs:271 | 标签常量，值为 `"Teenager"`；Townsfolk 与 Villager 分支都用 `BecomeTeenagerAge`–`HeroComesOfAge` 生成 |
| `InfantTag` | DefaultAgeModel.cs:274 | 标签常量，值为 `"Infant"`；Townsfolk 与 Villager 分支都用 `BecomeInfantAge`–`BecomeChildAge` 生成 |
| `NotaryTag` | DefaultAgeModel.cs:277 | 标签常量，值为 `"Notary"`；与 `BarberTag` 共用 30–80 分支 |
| `BarberTag` | DefaultAgeModel.cs:280 | 标签常量，值为 `"Barber"`；与 `NotaryTag` 共用 30–80 分支 |
| `AlleyGangMemberTag` | DefaultAgeModel.cs:283 | 标签常量，值为 `"AlleyGangMember"`；只在 else（非 Townsfolk / 非 Villager）分支被检查 → 30–40 |

## 真实示例

**示例一：读刻度尺，把英雄分到阶段里。** 这里只依赖阈值属性，不触碰 `GetAgeLimitForLocation`：

```csharp
AgeModel model = Campaign.Current.Models.AgeModel;

string stage =
    hero.Age < model.BecomeInfantAge ? "Infant" :
    hero.Age < model.BecomeChildAge ? "Child" :
    hero.Age < model.BecomeTeenagerAge ? "Teenager" :
    hero.Age < model.HeroComesOfAge ? "Youth" :
    hero.Age < model.MiddleAdultHoodAge ? "Adult" :
    hero.Age < model.BecomeOldAge ? "MiddleAged" :
    hero.Age < model.MaxAge ? "Old" : "Ancient";
```

用 `AgeModel` 而不是 `DefaultAgeModel` 作静态类型，换成自定义模型后这段代码不需要改。

**示例二：查一个乞丐 NPC 会被生成成多大。** 标签用常量，避免拼错字符串：

```csharp
Campaign.Current.Models.AgeModel.GetAgeLimitForLocation(
    character,
    out int minimumAge,
    out int maximumAge,
    DefaultAgeModel.BeggarTag);

// Occupation == Occupation.Townsfolk 时得到 60 与 90
```

把最后一个参数换成 `DefaultAgeModel.InfantTag`，同一段代码会返回 `BecomeInfantAge` 与 `BecomeChildAge`，即 3 与 6——这演示了标签分支如何复用阈值属性。

**示例三：自定义模型只改一处刻度。** 派生类必须自己给出全部阈值，否则编译不过；这里只演示最必要的部分：

```csharp
public class LongLivedAgeModel : DefaultAgeModel
{
    public override int BecomeOldAge => 70;

    public override int MaxAge => 160;
}

// 注册：在战役初始化回调里把模型交给 CampaignGameStarter
```

把 `BecomeOldAge` 从 55 改到 70 后，`GetAgeLimitForLocation` 的 `else` 兜底分支上界仍读 `MaxAge`（DefaultAgeModel.cs:80、DefaultAgeModel.cs:71），而 Townsfolk / Villager 的兜底上界仍是写死的 70，不会跟着变——这正是替换刻度时最容易踩的坑：**写死值与属性值混用在同一个方法里**。

## 参见

- [AgeModel](../AgeModel) — 本类实现的抽象基类，声明了被覆写的属性与方法签名
- [CharacterObject](../../campaign/CharacterObject) — `GetAgeLimitForLocation` 的入参类型，职业判断基于它的 `Occupation`
- [Campaign](../../campaign/Campaign) — 通过 `Campaign.Current.Models` 取到当前生效的年龄模型
- [CampaignGameStarter](../../campaign/CampaignGameStarter) — 注册自定义年龄模型的入口
- [Game](../../core-extra/Game) — 模型注册所处的游戏生命周期
- [Module](../../core/Module) — 承载战役行为与模型的模块层

## 导航

- [campaign-ext 索引](../)
- [API 索引](../../)
- [v1.4.7 中文文档](../../../)
- [架构总览](../../../architecture/)
