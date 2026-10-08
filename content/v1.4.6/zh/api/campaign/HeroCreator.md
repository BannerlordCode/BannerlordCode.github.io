---
title: "HeroCreator"
description: "战役层把 CharacterObject 模板实例化成 Hero 实体的静态工厂，负责编排 HeroCreationModel 并把年龄、家族、文化、外貌、技能、特质与装备落到新英雄身上。"
---
# HeroCreator

**Namespace:** `TaleWorlds.CampaignSystem`
**Type:** `public static class HeroCreator`
**Source:** `TaleWorlds.CampaignSystem/HeroCreator.cs`

> 节 schema：本页采用 7 节（按出现顺序）：概述 / 心智模型 / 怎么用 / 关键成员 / 真实示例 / 参见 / 导航

## 概述

`HeroCreator` 是位于 `TaleWorlds.CampaignSystem` 命名空间的一个静态工厂类。它没有实例、没有 `Instance` 单例属性、也不可继承——所有能力都挂在静态方法上。它的职责只有一件事：在战役运行期间，把一份静态的 `CharacterObject` 模板落成一个真正参与模拟的 `Hero` 实体。

这个类本身并不"决定"一个人长什么样。真正做决定的是 `Campaign.Current.Models.HeroCreationModel`：模板怎么挑、生日与忌日怎么算、家族与文化是什么、外貌参数如何、有哪些特质与技能、穿什么装备，全部由模型给出。`HeroCreator` 做的是编排：向模型要这些数据，把结果写进 `Hero` 的字段，最后派发一次创建事件。

它对外暴露的入口是六个业务语义明确的静态方法，而不是一个通用的 `CreateHero`：

- `CreateNotable` —— 在定居点里造一个要人（商人、地主、帮派头目等）。
- `CreateSpecialHero` —— 按你指定的模板造一个特殊英雄，可同时指定出生地、家族、效忠对象与年龄。
- `CreateChild` —— 在指定家族与出生地里造一个孩子（等级被压到 1）。
- `CreateRelativeNotableHero` —— 给一个已有要人造亲属，外貌会向该要人靠拢。
- `CreateBasicHero` —— 按 `StringId` 去重地造基础英雄，适合数据驱动的批量初始化。
- `DeliverOffSpring` —— 生育：按母亲与父亲造一个后代。

也就是说，需要"凭空多出一个人"的玩法逻辑，最终都会落到这六个入口之一。反过来也要清楚它的边界：本类只负责造活人，死亡英雄的善后与家族史收尾不属于这个类型，不要在这里找对应的反向入口。

与 XML 模板英雄的区别值得先说清楚：XML 里定义的模板英雄本身也只是 `CharacterObject`，它属于"定义"层；`HeroCreator` 处理的是"实例化"层——把定义变成有 `Age`、有 `BornSettlement`、有技能经验的活人。所以改 XML 会影响所有由该模板实例化出来的英雄，而改一个 `Hero` 只影响那一个人。

## 心智模型

把三层分开看，用起来就不会乱：

- `CharacterObject` = 模板 / 户口页。静态、可复用，属于"定义"。它决定默认长相、默认装备与技能上限。
- `Hero` = 活人 / 实体。运行时的、唯一的，属于"实例"。年龄、家族归属、文化、外貌、特质、技能经验都挂在它身上。
- `HeroCreator` = 产线。它是无状态的一步操作：给定模板与归属信息，产出一个 `Hero` 并把该填的字段补齐。

顺着这个模型可以推出四条推论，每一条都能在源码里找到对应证据：

1. **它是产线，不是仓库。** 返回的 `Hero` 必须被家族、队伍或定居点要人列表接住。没有任何持有者时，它就没有稳定的引用链，读档往返后容易表现为"人没了"。
2. **大部分入口会复制模板。** 私有方法 `CreateHero`（`HeroCreator.cs:132`）带一个 `useCharacterAsTemplate` 开关：为 `true` 时先 `CharacterObject.CreateFrom(character, null)` 复制一份模板再实例化，于是这个英雄拥有自己的 `CharacterObject` 副本；为 `false` 时直接复用传入的模板对象。`CreateNotable`、`CreateSpecialHero`、`CreateChild`、`CreateRelativeNotableHero`、`DeliverOffSpring` 全部走 `true`；只有 `CreateBasicHero` 走 `false`。
3. **初始化的落点集中在一处。** 所有入口最后都调用 `InitializeHeroFromSettings`（`HeroCreator.cs:147`）。它按顺序做：写父母、性别、出生地、文化、家族、外貌、等级、体重与体格；起名；写职业；逐条写特质与技能；对成年人或后代调用 `HeroDeveloper.InitializeHeroDeveloper()`；分配平民装备与战斗装备；最后派发 `OnHeroCreated` 事件。想知道"新英雄身上到底被设了什么"，读这一个方法就够了。
4. **登记表以 `StringId` 为键。** `CreateBasicHero`（`HeroCreator.cs:89`）第一件事就是 `Campaign.Current.CampaignObjectManager.Find<Hero>(stringId)`，命中就直接复用旧实例并返回 `false`。这说明战役登记表是按 `StringId` 索引的，重复的 `StringId` 不会得到第二个人。

还有一个容易忽略的分支：当 `IsOffspring` 为真时，初始化流程会调用 `InitializeHeroDeveloper()` 之后紧接着 `ClearTraits()`。也就是说新生后代会被清空特质——这是刻意的，后代应当从零成长，而不是继承父母的特质等级。

## 怎么用

### 怎么拿到

静态类，不存在实例，也没有 `Instance`。直接以类型名调用；如果你在找 `HeroCreator.Instance` 或试图 `new HeroCreator()`，方向就错了。另外注意公开入口里**没有**裸的 `CreateHero`：那是私有方法，你只能通过上面六个业务入口间接触发它。

```csharp
// 静态类：直接以类型名调用，不需要 new，也没有 Instance。
// 输入侧是模板，归属侧由参数（定居点 / 家族 / 效忠对象）表达。
CharacterObject template = CharacterObject.Find("imperial_recruit");

// 需要一个定居点作为出生地与要人归属。
Settlement settlement = Settlement.Find("town_ES1");
```

### 典型用法

最常见的是"给定居点补一个要人"和"按指定模板造一个特殊英雄"。前者让模型决定模板、生日与外貌；后者让你把出生地、家族、效忠对象和年龄一次给全。

```csharp
// 形态一：在定居点里造一个商人要人。
// 模板由职业 + 定居点推导，生日忌日与外貌由模型给出。
Hero notable = HeroCreator.CreateNotable(Occupation.Merchant, settlement);

// 关键一步：挂进定居点要人名册，否则它没有稳定引用。
settlement.Notables.Add(notable);

// 读回来确认初始化结果确实被写入了。
float age = notable.Age;
Clan clan = notable.Clan;
```

```csharp
// 形态二：按模板造一个特殊英雄，并显式指定归属与年龄。
// age = -1 表示"交给模型决定"；这里给 30 表示要一个成年人。
Hero supporter = HeroCreator.CreateSpecialHero(template, settlement, Clan.PlayerClan, Clan.PlayerClan, 30);

// 落进家族名册，保证存档往返后仍然在场。
Clan.PlayerClan.Heroes.Add(supporter);
supporter.SetName(new TextObject("Supporter"));
```

```csharp
// 形态三：数据驱动的初始化，靠 StringId 去重。
// 重复调用会返回 false 并把已有实例回填到 existing。
Hero existing;
bool created = HeroCreator.CreateBasicHero("my_unique_hero_id", template, out existing, true);
```

### 坑

```csharp
// 坑 1：造完不持有。CreateNotable 不会替你塞进 settlement.Notables，
// CreateSpecialHero 也不会替你塞进 clan.Heroes —— 这些都要你自己做。
// 没有家族 / 队伍 / 要人名册持有时，读档后可能就找不回这个人了。
Hero loose = HeroCreator.CreateSpecialHero(template, settlement, Clan.PlayerClan, Clan.PlayerClan, 25);
Clan.PlayerClan.Heroes.Add(loose); // 补上这一步
```

```csharp
// 坑 2：把 CreateBasicHero 的返回值当成"成功 / 失败"之外的信号。
// 它返回 false 不是错误，而是"这个 StringId 已经有人了"，
// 此时 out 参数里是登记表里的旧实例，别当成新建的对象去改。
Hero reused;
if (!HeroCreator.CreateBasicHero("my_unique_hero_id", template, out reused, true))
{
    // reused 是已存在的那一位，不是新人。
    float age = reused.Age;
}
```

```csharp
// 坑 3：DeliverOffSpring 假设父母同种族，源码里对此有断言。
// 跨种族调用会触发 SilentAssert，产出的后代模板也可能不符合预期。
// 另外后代分支会 ClearTraits()，不要指望孩子继承父母的特质等级。
Hero child = HeroCreator.DeliverOffSpring(mother, father, false);
mother.Clan.Heroes.Add(child);
```

```csharp
// 坑 4：CreateSpecialHero 的第三个参数是"家族"，第四个是"效忠对象"。
// 只填第四个时 Clan 仍由模型推导，于是英雄归了别的家族、只是"支持"你 ——
// 两个字段含义不同（SetClan 与 SetSupporterOf），别只给一个。
Hero foreign = HeroCreator.CreateSpecialHero(template, settlement, null, Clan.PlayerClan, 30);

// 想让英雄真的归你，第三个参数必须给上。
Hero mine = HeroCreator.CreateSpecialHero(template, settlement, Clan.PlayerClan, Clan.PlayerClan, 30);
```

## 关键成员

| 成员 | 签名 | 作用 | 行号 |
| --- | --- | --- | --- |
| `CreateNotable` | `public static Hero CreateNotable(Occupation occupation, Settlement settlement = null)` | 在定居点里造要人；模板与外貌由 `HeroCreationModel` 推导 | `HeroCreator.cs:15` |
| `CreateSpecialHero` | `public static Hero CreateSpecialHero(CharacterObject template, Settlement bornSettlement = null, Clan faction = null, Clan supporterOfClan = null, int age = -1)` | 指定模板造特殊英雄；出生地 / 家族 / 效忠对象 / 年龄均可选 | `HeroCreator.cs:33` |
| `CreateChild` | `public static Hero CreateChild(CharacterObject template, Settlement bornSettlement, Clan clan, int age)` | 造家族里的孩子；等级被压到 1 | `HeroCreator.cs:57` |
| `CreateRelativeNotableHero` | `public static Hero CreateRelativeNotableHero(Hero relative)` | 给现有要人造亲属；沿用其职业、定居点、文化，外貌向其靠拢 | `HeroCreator.cs:70` |
| `CreateBasicHero` | `public static bool CreateBasicHero(string stringId, CharacterObject character, out Hero hero, bool isAlive = true)` | 按 `StringId` 去重造基础英雄；已存在则回填并返回 `false` | `HeroCreator.cs:89` |
| `DeliverOffSpring` | `public static Hero DeliverOffSpring(Hero mother, Hero father, bool isOffspringFemale)` | 生育：按父母造后代，后代特质被清空 | `HeroCreator.cs:106` |
| `CreateHero` | `private static Hero CreateHero(CharacterObject character, bool useCharacterAsTemplate, CampaignTime birthDay, CampaignTime deathDay)` | 真正 `new Hero(...)` 的一步；`useCharacterAsTemplate` 决定是否复制模板 | `HeroCreator.cs:132` |
| `InitializeHeroFromSettings` | `private static void InitializeHeroFromSettings(Hero hero, HeroCreator.HeroInitializationArgs initializationArgs)` | 全部字段落盘处：姓名、家族、文化、外貌、特质、技能、装备与事件派发 | `HeroCreator.cs:147` |
| `HeroInitializationArgs` | `private class HeroInitializationArgs` | 内部参数收集器，提供链式 Setter | `HeroCreator.cs:205` |
| `SetGenerateFirstAndFullName` | `public HeroCreator.HeroInitializationArgs SetGenerateFirstAndFullName(bool value)` | 决定是让模型随机起名，还是用参数里给的名字 | `HeroCreator.cs:330` |
| `SetBornSettlement` | `public HeroCreator.HeroInitializationArgs SetBornSettlement(Settlement bornSettlement)` | 指定出生地；同时置位 `HasBornSettlementBeenSet`，避免被模型覆盖 | `HeroCreator.cs:372` |
| `SetAppearance` | `public HeroCreator.HeroInitializationArgs SetAppearance(StaticBodyProperties? staticBodyProperties, float weight = -1f, float build = -1f, int hair = -1, int beard = -1, int tattoo = -1)` | 指定静态外貌与体重 / 体格 / 发型 / 胡须 / 纹身 | `HeroCreator.cs:387` |
| `SetClan` | `public HeroCreator.HeroInitializationArgs SetClan(Clan clan)` | 指定家族；同时置位 `HasClanBeenSet`，避免被模型覆盖 | `HeroCreator.cs:411` |
| `SetCulture` | `public HeroCreator.HeroInitializationArgs SetCulture(CultureObject culture)` | 指定文化；不设时由模型按出生地与家族推导 | `HeroCreator.cs:419` |
| `SetOccupation` | `public HeroCreator.HeroInitializationArgs SetOccupation(Occupation occupation)` | 指定职业；与当前值不同时才走 `SetNewOccupation` | `HeroCreator.cs:433` |

`HeroInitializationArgs` 里还有 `SetName`、`SetFirstName`、`SetMother`、`SetFather`、`SetIsFemale`、`SetLevel`、`SetPreferredUpgradeFormation`、`SetSupporterOf` 等 Setter，模式完全一致：设置字段并返回 `this`，方便链式调用。它们是私有嵌套类型的成员，正常玩法代码用不到，只有在本类内部或阅读源码时才需要认识。

## 真实示例

下面这段演示"给玩家定居点补一个要人，并让它真正出现在要人名册里"。它覆盖三件事：造人、落名册、确认初始化结果。

```csharp
// 1) 准备输入：定居点与职业。模板不必自己挑，模型会按职业选。
Settlement settlement = Settlement.Find("town_ES1");
Occupation occupation = Occupation.Merchant;

// 2) 造人：出生地由模型按要人逻辑推导，姓名由模型随机给出。
Hero notable = HeroCreator.CreateNotable(occupation, settlement);

// 3) 落名册，避免它成为无人持有的孤儿。
settlement.Notables.Add(notable);

// 4) 确认属性确实被初始化了：年龄、家族、文化都应当非空。
float age = notable.Age;
Clan clan = notable.Clan;
CultureObject culture = notable.Culture;
```

第二段演示"造一个归玩家家族的特殊英雄，并让它上队伍"。注意 `CreateBasicHero` 的去重语义与 `CreateSpecialHero` 的显式归属是两种不同风格。

```csharp
// 模板来自 XML 定义，这里按字符串查表拿到。
CharacterObject template = CharacterObject.Find("imperial_recruit");

// 特殊英雄：一次给全出生地、家族、效忠对象与年龄。
Hero hero = HeroCreator.CreateSpecialHero(template, Settlement.Find("town_ES1"), Clan.PlayerClan, Clan.PlayerClan, 28);

// 先挂家族，再上队伍名册，两层持有都补上。
Clan.PlayerClan.Heroes.Add(hero);
MobileParty.MainParty.MemberRoster.AddToCounts(template, 1);

// 需要时改名；不设就保留模型给出的随机名。
hero.SetName(new TextObject("Envoy"));
```

第三段演示"用 `CreateBasicHero` 做幂等初始化"：适合在存档加载或剧本脚本里反复执行的场景，重复执行不会造出第二个人。

```csharp
// 幂等入口：同一个 StringId 只会存在一个 Hero。
Hero loaded;
bool created = HeroCreator.CreateBasicHero("story_hero_01", template, out loaded, true);

// created 为 false 表示命中已有实例，loaded 是登记表里的旧对象。
if (created)
{
    loaded.Clan = Clan.PlayerClan;
    Clan.PlayerClan.Heroes.Add(loaded);
}
```

## 参见

- [`../Hero`](../Hero) —— 本类唯一的产物类型，年龄、家族、文化、特质、技能经验都挂在它身上。
- [`../CharacterObject`](../CharacterObject) —— 输入侧的模板类型；多数入口会复制它，只有 `CreateBasicHero` 复用原对象。
- [`../CampaignObjectManager`](../CampaignObjectManager) —— 新英雄进入的战役登记表，`CreateBasicHero` 的 `StringId` 去重就查在这里。
- [`../Settlement`](../Settlement) —— 要人与孩子的出生地、`CreateNotable` 的归属容器。
- [`../Clan`](../Clan) —— `CreateSpecialHero` / `CreateChild` 的家族归属，也是防止英雄被回收的持有者。
- [`../Campaign`](../Campaign) —— `Campaign.Current.Models.HeroCreationModel` 的来源，真正的初始化决策都在那个模型里。
- [`../../campaign-ext/MBObjectManager`](../../campaign-ext/MBObjectManager) —— 更底层的对象管理，理解回收与存档持久性时值得对照。
- [`../_index`](../_index) —— `campaign` 桶全类型索引。

## 导航

- 同桶：[`../Hero`](../Hero) · [`../Clan`](../Clan) · [`../CharacterObject`](../CharacterObject) · [`../Settlement`](../Settlement)
- 跨桶：[`../../core-extra/Game`](../../core-extra/Game) · [`../../campaign-ext/MBObjectManager`](../../campaign-ext/MBObjectManager)
- 父索引：[`../_index`](../_index)
