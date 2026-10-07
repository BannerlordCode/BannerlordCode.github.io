# HeroHelper

**命名空间：** `Helpers`
**Type:** `public static class HeroHelper`
**Source:** `TaleWorlds.CampaignSystem/Helpers/HeroHelper.cs`

## 概述

HeroHelper 是英雄（`Hero`）级别的静态工具集，解决「如何把一个英雄的社会状态翻译成玩家能读的文本或模型能算的数值」这一问题。它覆盖四类工作：百科与对话文本（最后见闻、头衔、类型名、占用事件原因）、政治与关系（默认关系、政治分歧、人格冲突、特性协同、可靠性常数）、招募与志愿兵（能否招募、志愿兵列表、招募金钱上限）、以及随机生成（随机氏族、生日、死亡日、人格特性变化名）。全部方法都是静态的，不需要实例，也不需要注册——拿到 `Hero` 对象就能直接调用。

## 心智模型

把 HeroHelper 想成「英雄 → 文本/数值」的翻译层。游戏 UI 里每个关于英雄的显示背后几乎都有一次 HeroHelper 调用：百科条目里的「最后见于某地」是 `GetLastSeenText`，对话里称呼的「某国领主」是 `GetTitleInIndefiniteCase`，招募界面能买几个兵是 `HeroCanRecruitFromHero`。它的核心模式是：先读英雄的状态（是否死亡、是否逃兵、是否囚犯、在哪个队伍、属于哪个派系、有哪些特性），再把它翻译成 `TextObject` 或 `int`/`float`。与 `CharacterHelper` 的分工是：HeroHelper 管英雄的社会属性（关系、头衔、政治），CharacterHelper 管角色的物理表现（体型、颜色、动画）。两者都站在 `CharacterObject` 之上，但回答的问题不同。

## 怎么用

### 怎么拿到它

静态类，直接 `HeroHelper.方法名(...)` 调用。所有方法都要求调用方自己持有 `Hero` 实例（通常来自 `Hero.All`、`Clan.Lords` 或 `hero.PartyBelongedTo.LeaderHero`）。

### 典型用法

- 生成英雄的百科「最后见闻」条目时，用 `GetLastSeenText`，它会按死亡/逃兵/囚犯/在军/在海上等状态返回不同文本。
- 判断两个 NPC 是否合得来时，用 `NPCPersonalityClashWithNPC` 与 `TraitHarmony`，前者给 ±5 倍的人格冲突分，后者给单特性的协同分。
- 检查玩家能否从某英雄处招募志愿兵时，用 `HeroCanRecruitFromHero`，它内部问 `VolunteerModel` 要上限。
- 给英雄生成随机生日时，用 `GetRandomBirthDayForAge`，它按当前战役时间倒推。

### 最容易踩的坑

- `GetLastSeenText` 对已死亡英雄返回 `TextObject.GetEmpty()`，对玩家从未见过的英雄返回「从未见闻」文本——调用方拿到空文本时不要当成异常。
- `GetRandomClanForNotable` 有概率返回 `null`（随机数未命中或候选氏族被排除光），调用方必须处理 null。
- `GetPersonalityTraitChangeName` 只接受 `DefaultTraits.Personality` 里的特性，传其他特性会触发 `Debug.FailedAssert` 并返回空文本。
- `SetPlayerSalutation` 会直接改写对话文本变量 `PLAYER_SALUTATION`，属于有副作用的调用，不要在非对话上下文里调。
- `CalculateReliabilityConstant` 把荣誉特性等级钳制在 [-2, 2] 再折算，所以荣誉超过 2 的英雄不会得到更高可靠性。

## 关键成员

- **GetLastSeenText**（`HeroHelper.cs:23`）— 生成英雄百科条目的「最后见闻」文本，按死亡/逃兵/囚犯/在军/在海上等状态分支。
- **GetClosestSettlement**（`HeroHelper.cs:120`）— 返回离英雄当前位置最近的定居点，是「最后见闻」文本的数据源。
- **LordWillConspireWithLord**（`HeroHelper.cs:193`）— 判断某领主是否愿意与另一领主密谋，综合随机数、荣誉特性与背叛提议。
- **UnderPlayerCommand**（`HeroHelper.cs:227`）— 判断英雄是否受玩家指挥（派系领袖、家乡氏族首领是玩家、或玩家同伴）。
- **GetTitleInIndefiniteCase**（`HeroHelper.cs:233`）— 返回英雄头衔的不定冠词形式文本（如「某国领主」），按性别与文化本地化。
- **GetCharacterTypeName**（`HeroHelper.cs:248`）— 返回英雄的职业类型名（工匠/商人/雇佣兵/领主/女士等），按优先级判定。
- **GetOccupiedEventReasonText**（`HeroHelper.cs:299`）— 返回英雄「忙于某事」的占用原因文本，区分能否有战役议题。
- **OrderHeroesOnPlayerSideByPriority**（`HeroHelper.cs:314`）— 按战斗优先级排序玩家一方的英雄列表，返回 StringId 列表。
- **WillLordAttack**（`HeroHelper.cs:357`）— 判断当前对话中领主是否会攻击玩家，用于对话前的战斗预判。
- **SetPlayerSalutation**（`HeroHelper.cs:379`）— 设置玩家称谓文本变量，供对话系统使用。
- **SpawnHeroForTheFirstTime**（`HeroHelper.cs:400`）— 首次生成英雄：设置出生地、进入定居点、切换为 Active 状态。
- **DefaultRelation**（`HeroHelper.cs:408`）— 返回两个英雄之间的默认关系值，同氏族 40、同文化同派系 25/10、性格冲突 -5。
- **IsCompanionInPlayerParty**（`HeroHelper.cs:431`）— 判断英雄是否是玩家同伴且在主队中。
- **NPCPoliticalDifferencesWithNPC**（`HeroHelper.cs:437`）— 判断两个 NPC 的政治倾向（平等/寡头/威权）是否不同。
- **NPCPersonalityClashWithNPC**（`HeroHelper.cs:449`）— 计算两个 NPC 的人格冲突分，对立特性 -5、一致 +5，乘以 5 倍。
- **TraitHarmony**（`HeroHelper.cs:469`）— 计算考虑者对某特性与被考虑者的协同分，同正 +3、同负 +1、对立 -3。
- **CalculateReliabilityConstant**（`HeroHelper.cs:501`）— 按荣誉特性折算可靠性常数，荣誉钳制在 [-2,2] 后线性映射到 [0.5, 1.5] 倍。
- **SetPropertiesToTextObject**（`HeroHelper.cs:508`）— 把英雄或定居点的属性写进 TextObject 的扩展方法，供百科链接使用。
- **HeroCanRecruitFromHero**（`HeroHelper.cs:520`）— 判断买方英雄能否从卖方英雄处招募第 index 个志愿兵。
- **GetVolunteerTroopsOfHeroForRecruitment**（`HeroHelper.cs:526`）— 返回英雄的可招募志愿兵列表（最多 6 个兵种）。
- **GetRandomClanForNotable**（`HeroHelper.cs:540`）— 为知名人物随机挑选一个支援氏族，可能返回 null。
- **GetRandomBirthDayForAge**（`HeroHelper.cs:605`）— 按给定年龄生成随机生日，基于当前战役时间倒推。
- **GetRandomDeathDayAndBirthDay**（`HeroHelper.cs:613`）— 按死亡年龄同时生成随机生日与死亡日（out 参数）。
- **StartRecruitingMoneyLimit**（`HeroHelper.cs:622`）— 返回英雄招募的起始金钱上限，玩家氏族为 0，否则按队伍规模计算。
- **StartRecruitingMoneyLimitForClanLeader**（`HeroHelper.cs:632`）— 氏族领袖版本的招募金钱上限，按领袖队伍工资与人数计算。
- **GetPersonalityTraitChangeName**（`HeroHelper.cs:642`）— 返回人格特性变化（变好/变差）的显示名，按当前等级选后缀。

## 真实示例

```csharp
// 生成英雄的百科「最后见闻」条目
TextObject lastSeen = HeroHelper.GetLastSeenText(hero);
if (!lastSeen.IsEmpty)
{
    Debug.Print($"最后见闻: {lastSeen}");
}

// 检查玩家能否从该英雄处招募第 2 个志愿兵
bool canRecruit = HeroHelper.HeroCanRecruitFromHero(Hero.MainHero, hero, 2);

// 计算两个 NPC 的人格冲突分
int clash = HeroHelper.NPCPersonalityClashWithNPC(hero, otherHero);
```

## 参见

- ↔ [GameModel](../GameModel) — 英雄属性容器，HeroHelper 的数值最终写进 GameModel 的 ExplainedNumber
- ↔ [SkillHelper](../SkillHelper) — 英雄技能加成，与 HeroHelper 的关系/特性计算互补
- ↔ [FeatHelper](../FeatHelper) — 英雄特性效果，TraitHarmony 是特性协同的底层计算

## 导航

- ↑ [API 参考](../../) —— 本版本 API 层入口：按任务找页的路径表
- ↑ [v1.5.3 首页](../../../) —— 19 个桶的完整缺口表与覆盖现状
- ↔ [模块地图](../../../architecture/module-map) —— 确认某个类型属于哪一桶
