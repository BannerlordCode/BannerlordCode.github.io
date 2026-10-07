---
title: "DefaultAgeModel"
description: "AgeModel 的默认实现，定义角色年龄阈值常量（婴儿/儿童/青少年/成年/中年/老年/最大年龄）与 13 个职业标签常量，并提供 GetAgeLimitForLocation 按职业+标签计算地点年龄上下限。"
---

# DefaultAgeModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultAgeModel : AgeModel`
**Base:** `AgeModel`（抽象类，`TaleWorlds.CampaignSystem/ComponentInterfaces/AgeModel.cs:7`，`public abstract class AgeModel : MBGameModel<AgeModel>`）
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultAgeModel.cs`（`:7`，共 285 行）

## 概述

`DefaultAgeModel` 是 [AgeModel](../AgeModel) 的**默认实现**，回答一个问题：**角色在什么年龄进入什么人生阶段，以及不同职业/标签的角色在特定地点的年龄上下限是多少。** 它定义了 7 个年龄阈值常量（婴儿 3 岁、儿童 6 岁、青少年 14 岁、成年 18 岁、中年 35 岁、老年 55 岁、最大 128 岁）和 13 个 `const string` 职业标签常量，并提供 `GetAgeLimitForLocation` 方法根据角色的 `Occupation` 和附加标签计算该角色在特定地点的年龄上下限。

它是**只读的规则表**，不是运行时状态容器。所有阈值都是 `override` 的只读属性（`{ get; }`），编译期固定，不能在运行时修改。要改阈值必须继承 `AgeModel` 并替换模型。

## 心智模型

把 `DefaultAgeModel` 当作**「年龄规则表」**，而不是一个可写的服务。它的全部 7 个属性都是 `override int { get; }`——没有 setter，没有 backing field，每个 getter 直接返回一个字面量。这意味着：

**它不是运行时 setter。** 你无法写 `Campaign.Current.Models.AgeModel.BecomeOldAge = 60;`——编译不过。要改阈值，必须继承 `AgeModel`，在派生类里 `override` 对应属性返回新值，然后通过 `AddModel<AgeModel>(new MyAgeModel())` 替换。

**它是 GameModel 装饰器。** `AgeModel` 继承自 `MBGameModel<AgeModel>`，通过 `Campaign.Current.Models.AgeModel` 访问。`Campaign.Current.Models` 是 `GameModels` 类的实例，`AgeModel` 属性声明在 `TaleWorlds.CampaignSystem/GameModels.cs`，由 `base.GetGameModel<AgeModel>()` 填充。官方实现在 `SandBoxManager.Initialize` 里注册——`gameStarter.AddModel<AgeModel>(new DefaultAgeModel());`。

**常见误用：试图在运行时修改阈值。** 看到 `BecomeOldAge` 返回 55，想改成 60——不能直接赋值，必须走继承+替换的路径。另一个误用是**把 `GetAgeLimitForLocation` 当成「角色当前年龄」来读**——它返回的是「该职业+标签的角色在地点的年龄上下限」，不是角色实际年龄。

**什么时候该用它、什么时候不该用。** 该用：你要判断角色处于哪个人生阶段（婴儿/儿童/青少年/成年/中年/老年），或要获取某职业角色在地点的年龄上下限时。不该用：你要修改年龄规则时——那需要继承 `AgeModel` 并替换模型，而不是改这个类。

## 怎么用

### 怎么拿到实例

源树路径：`bannerlord-1.3.0/TaleWorlds.CampaignSystem/GameComponents/DefaultAgeModel.cs`（`:7`）

入口：`Campaign.Current.Models.AgeModel`，声明在 `TaleWorlds.CampaignSystem/GameModels.cs`，由同文件的 `base.GetGameModel<AgeModel>()` 填充。官方注册在 `SandBoxManager.Initialize`——`gameStarter.AddModel<AgeModel>(new DefaultAgeModel());`。

```csharp
// 读取年龄阈值
int oldAge = Campaign.Current.Models.AgeModel.BecomeOldAge;  // 55

// 计算某职业+标签角色的年龄上下限
int minAge, maxAge;
Campaign.Current.Models.AgeModel.GetAgeLimitForLocation(character, out minAge, out maxAge, "TavernVisitor");
```

### 典型用法

**判断角色处于哪个人生阶段：**

```csharp
if (hero.Age < Campaign.Current.Models.AgeModel.BecomeInfantAge)
{
    // 婴儿（< 3 岁）
}
else if (hero.Age < Campaign.Current.Models.AgeModel.BecomeChildAge)
{
    // 儿童（3-6 岁）
}
else if (hero.Age < Campaign.Current.Models.AgeModel.BecomeTeenagerAge)
{
    // 青少年（6-14 岁）
}
else if (hero.Age < Campaign.Current.Models.AgeModel.HeroComesOfAge)
{
    // 青年（14-18 岁）
}
```

**获取某职业角色在地点的年龄上下限：**

```csharp
int minAge, maxAge;
Campaign.Current.Models.AgeModel.GetAgeLimitForLocation(character, out minAge, out maxAge, "TavernVisitor");
// 对 TavernVisitor 标签的 Townsfolk：minAge=20, maxAge=60
```

### 最容易踩的坑

**以为能在运行时修改阈值。** 不能。所有属性都是 `override int { get; }`，没有 setter。要改必须继承 `AgeModel` 并替换模型。

**把 `GetAgeLimitForLocation` 当成「角色当前年龄」来读。** 它返回的是「该职业+标签的角色在地点的年龄上下限」，不是角色实际年龄。角色实际年龄从 `hero.Age` 读。

**忘记 `GetAgeLimitForLocation` 的 `additionalTags` 参数有默认值 `""`。** 不传标签时走默认分支（通常是 `HeroComesOfAge` 到 `MaxAge` 或 `HeroComesOfAge` 到 70），不是「没有限制」。

**替换模型后官方实现不再兜底。** `AddModel<T>` 会把上一个模型通过 `gameModel.Initialize(model)` 递进来，但那个字段是 `private protected`——你的 mod 在另一个程序集里读不到。要么自己 `new` 一份官方实现转发，要么你的模型就是唯一实现。

## 关键成员

### 年龄阈值属性（7 个 override int 属性）

| 成员 | 签名 | 源文件:行号 | 这个成员是做什么用的 |
| --- | --- | --- | --- |
| `BecomeInfantAge` | `public override int BecomeInfantAge { get; }` | `DefaultAgeModel.cs:11` | 返回「成为婴儿」的年龄阈值，固定返回 `3`。角色年龄低于此值时视为婴儿，用于教育、对话等场景的年龄判断。 |
| `BecomeChildAge` | `public override int BecomeChildAge { get; }` | `DefaultAgeModel.cs:21` | 返回「成为儿童」的年龄阈值，固定返回 `6`。角色年龄低于此值（但 ≥ `BecomeInfantAge`）时视为儿童。 |
| `BecomeTeenagerAge` | `public override int BecomeTeenagerAge { get; }` | `DefaultAgeModel.cs:31` | 返回「成为青少年」的年龄阈值，固定返回 `14`。角色年龄低于此值（但 ≥ `BecomeChildAge`）时视为青少年。 |
| `HeroComesOfAge` | `public override int HeroComesOfAge { get; }` | `DefaultAgeModel.cs:41` | 返回「英雄成年」的年龄阈值，固定返回 `18`。角色年龄 ≥ 此值时视为成年，用于判断英雄是否可以结婚、继承、担任要职等。 |
| `MiddleAdultHoodAge` | `public override int MiddleAdultHoodAge { get; }` | `DefaultAgeModel.cs:51` | 返回「中年」的年龄阈值，固定返回 `35`。角色年龄 ≥ 此值时视为中年，用于某些对话和事件的分支判断。 |
| `BecomeOldAge` | `public override int BecomeOldAge { get; }` | `DefaultAgeModel.cs:61` | 返回「成为老人」的年龄阈值，固定返回 `55`。角色年龄 ≥ 此值时视为老年，用于死亡概率计算（`AgingCampaignBehavior`）和某些对话分支。 |
| `MaxAge` | `public override int MaxAge { get; }` | `DefaultAgeModel.cs:71` | 返回角色最大年龄上限，固定返回 `128`。用于 `GetAgeLimitForLocation` 的默认上限，以及某些年龄计算的上界。 |

### 方法（1 个 override 方法）

| 成员 | 签名 | 源文件:行号 | 这个成员是做什么用的 |
| --- | --- | --- | --- |
| `GetAgeLimitForLocation` | `public override void GetAgeLimitForLocation(CharacterObject character, out int minimumAge, out int maximumAge, string additionalTags = "")` | `DefaultAgeModel.cs:80` | 根据角色的 `Occupation` 和 `additionalTags` 计算该角色在特定地点的年龄上下限，通过 `out` 参数返回。逻辑分三大分支：① `TavernWench` 固定 20-28 岁；② `Townsfolk` 按标签细分（TavernVisitor 20-60、TavernDrinker 20-40、SlowTownsman 50-70、TownsfolkCarryingStuff 20-40、BroomsWoman 30-45、Dancer 20-28、Beggar 60-90、Child 6-14、Teenager 14-18、Infant 3-6、Notary/Barber 30-80，默认 18-70）；③ `Villager` 类似但标签集更小；④ 其他职业（TavernGameHost 30-40、Musician 20-40、ArenaMaster 30-60、ShopWorker 18-50、Tavernkeeper 40-80、RansomBroker 30-60、Blacksmith/GoodsTrader/HorseTrader/Armorer/Weaponsmith 30-80、AlleyGangMember 30-40，默认 18-128）。 |

### 标签常量（13 个 public const string）

| 成员 | 签名 | 源文件:行号 | 这个成员是做什么用的 |
| --- | --- | --- | --- |
| `TavernVisitorTag` | `public const string TavernVisitorTag = "TavernVisitor"` | `DefaultAgeModel.cs:247` | 酒馆访客标签常量。传给 `GetAgeLimitForLocation` 的 `additionalTags` 参数，标识角色是来酒馆消费的访客，对应 20-60 岁。 |
| `TavernDrinkerTag` | `public const string TavernDrinkerTag = "TavernDrinker"` | `DefaultAgeModel.cs:250` | 酒馆酒客标签常量。标识角色是来酒馆喝酒的客人，对应 20-40 岁。 |
| `SlowTownsmanTag` | `public const string SlowTownsmanTag = "SlowTownsman"` | `DefaultAgeModel.cs:253` | 慢行镇民标签常量。标识角色是行动缓慢的老年镇民，对应 50-70 岁。 |
| `TownsfolkCarryingStuffTag` | `public const string TownsfolkCarryingStuffTag = "TownsfolkCarryingStuff"` | `DefaultAgeModel.cs:256` | 搬运物品的镇民标签常量。标识角色是搬运工，对应 20-40 岁。 |
| `BroomsWomanTag` | `public const string BroomsWomanTag = "BroomsWoman"` | `DefaultAgeModel.cs:259` | 扫帚女标签常量。标识角色是拿扫帚的女性镇民，对应 30-45 岁。 |
| `DancerTag` | `public const string DancerTag = "Dancer"` | `DefaultAgeModel.cs:262` | 舞者标签常量。标识角色是酒馆舞者，对应 20-28 岁。 |
| `BeggarTag` | `public const string BeggarTag = "Beggar"` | `DefaultAgeModel.cs:265` | 乞丐标签常量。标识角色是乞丐，对应 60-90 岁。 |
| `ChildTag` | `public const string ChildTag = "Child"` | `DefaultAgeModel.cs:268` | 儿童标签常量。标识角色是儿童，对应 `BecomeChildAge`-`BecomeTeenagerAge`（6-14 岁）。 |
| `TeenagerTag` | `public const string TeenagerTag = "Teenager"` | `DefaultAgeModel.cs:271` | 青少年标签常量。标识角色是青少年，对应 `BecomeTeenagerAge`-`HeroComesOfAge`（14-18 岁）。 |
| `InfantTag` | `public const string InfantTag = "Infant"` | `DefaultAgeModel.cs:274` | 婴儿标签常量。标识角色是婴儿，对应 `BecomeInfantAge`-`BecomeChildAge`（3-6 岁）。 |
| `NotaryTag` | `public const string NotaryTag = "Notary"` | `DefaultAgeModel.cs:277` | 公证人标签常量。标识角色是公证人，对应 30-80 岁。 |
| `BarberTag` | `public const string BarberTag = "Barber"` | `DefaultAgeModel.cs:280` | 理发师标签常量。标识角色是理发师，对应 30-80 岁。 |
| `AlleyGangMemberTag` | `public const string AlleyGangMemberTag = "AlleyGangMember"` | `DefaultAgeModel.cs:283` | 巷帮成员标签常量。标识角色是巷帮成员，对应 30-40 岁。用于 `AlleyCampaignBehavior` 计算巷帮成员的年龄上下限。 |

## 真实示例

以下示例均来自 `bannerlord-1.3.0` 源码树中的真实调用点，未编造。

**示例 1：通过 `Campaign.Current.Models.AgeModel` 调用 `GetAgeLimitForLocation`（带标签）**

```csharp
Campaign.Current.Models.AgeModel.GetAgeLimitForLocation(character, ref num, ref num2, "AlleyGangMember");
```

- 来源：`bannerlord-1.3.0/SandBox/CampaignBehaviors/AlleyCampaignBehavior.cs:384`
- 说明：为巷帮成员角色计算年龄上下限，传入 `"AlleyGangMember"` 标签，对应 30-40 岁。

**示例 2：通过 `Campaign.Current.Models.AgeModel` 调用 `GetAgeLimitForLocation`（无标签）**

```csharp
Campaign.Current.Models.AgeModel.GetAgeLimitForLocation(townsman, ref num, ref num2, "");
```

- 来源：`bannerlord-1.3.0/SandBox/CampaignBehaviors/CommonTownsfolkCampaignBehavior.cs:371`
- 说明：为普通镇民计算年龄上下限，不传附加标签，走默认分支（18-70 岁）。

**示例 3：读取 `HeroComesOfAge` 属性判断英雄是否成年**

```csharp
if (heroObject != Hero.MainHero && !heroObject.IsPrisoner && !heroObject.IsWounded && heroObject.Age >= (float)Campaign.Current.Models.AgeModel.HeroComesOfAge && !flag)
```

- 来源：`bannerlord-1.3.0/SandBox/CampaignBehaviors/ClanMemberRolesCampaignBehavior.cs:451`
- 说明：判断英雄年龄是否达到成年阈值（18 岁），用于 clan member roles 的分配逻辑。

**示例 4：读取 `BecomeOldAge` 属性判断是否进入老年**

```csharp
if (hero.IsAlive && hero.Age >= (float)Campaign.Current.Models.AgeModel.BecomeOldAge && !CampaignOptions.IsLifeDeathCycleDisabled && hero.DeathMark == KillCharacterAction.KillCharacterActionDetail.None && MBRandom.RandomFloat < hero.ProbabilityOfDeath)
```

- 来源：`bannerlord-1.3.0/TaleWorlds.CampaignSystem/CampaignBehaviors/AgingCampaignBehavior.cs:305`
- 说明：判断英雄年龄是否达到老年阈值（55 岁），用于死亡概率计算。

**示例 5：读取 `BecomeInfantAge` 属性判断是否为婴儿**

```csharp
if (character.Age < (float)Campaign.Current.Models.AgeModel.BecomeInfantAge)
```

- 来源：`bannerlord-1.3.0/SandBox.GauntletUI/GauntletEducationScreen.cs:335`
- 说明：判断角色年龄是否低于婴儿阈值（3 岁），用于教育界面的显示逻辑。

**示例 6：读取 `BecomeTeenagerAge` 属性判断是否为青少年**

```csharp
return Campaign.Current.ConversationManager.OneToOneConversationAgent.Age < (float)Campaign.Current.Models.AgeModel.BecomeTeenagerAge;
```

- 来源：`bannerlord-1.3.0/SandBox/CampaignBehaviors/CommonVillagersCampaignBehavior.cs:528`
- 说明：判断村民年龄是否低于青少年阈值（14 岁），用于对话行为的分支判断。

## 参见

- [AgeModel](../AgeModel) — 抽象基类，定义 `DefaultAgeModel` 实现的接口契约
- [AgingCampaignBehavior](../AgingCampaignBehavior) — 消费 `BecomeOldAge` 计算死亡概率
- [AlleyCampaignBehavior](../../campaign-ext/AlleyCampaignBehavior) — 消费 `GetAgeLimitForLocation` 计算巷帮成员年龄上下限
- [CommonTownsfolkCampaignBehavior](../../campaign-ext/CommonTownsfolkCampaignBehavior) — 消费 `GetAgeLimitForLocation` 计算普通镇民年龄上下限
- [ClanMemberRolesCampaignBehavior](../../campaign-ext/ClanMemberRolesCampaignBehavior) — 消费 `HeroComesOfAge` 判断英雄成年
- [campaign API 分区](../)
