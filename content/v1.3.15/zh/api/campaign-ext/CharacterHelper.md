---
title: "CharacterHelper"
description: "角色与兵种树工具：确定性的体型/面容生成、升级树遍历、编队查找、物品可用性判定，以及任务角色清理。"
---
# CharacterHelper

**Namespace:** `Helpers`
**Module:** Helpers（TaleWorlds.CampaignSystem 程序集内）
**Type:** `public static class CharacterHelper`
**Base:** 无（静态类）
**Source:** `TaleWorlds.CampaignSystem/Helpers/CharacterHelper.cs`

## 概述

`CharacterHelper` 是 `Helpers` 命名空间里 [CharacterObject](../../campaign/CharacterObject/) / `BasicCharacterObject` 这一侧的门面，与 [HeroHelper](../HeroHelper/) 以及聚落/派系类辅助工具并列。它回答四类问题：**外观**（确定性的体型属性、颜色、面容种子、人脸生成器过滤器、3D 场景用的待机/姿态选择）、**兵种树拓扑**（`GetTroopTree`、`FindUpgradeRootOf`、`SearchForFormationInTroopTree`）、**物品可用性**（`CanUseItemBasedOnSkill`、`GetDefaultWeapon`），以及**生命周期清理**（`DeleteQuestCharacter`、`GetRandomCompanionTemplateWithPredicate`）。

约二十个公开成员，全部为 `static`，分散在一个 800 行的文件里。不做任何缓存：体型属性、颜色和面容种子都是从稳定输入（角色的 `StringId` 哈希、部队的 `Index`、一个 rank 数字或所属派系的颜色）**确定性推导**出来的，而不是取自 `MBRandom`，因此可跨会话复现。有两个成员确实会消耗随机数（`GetDynamicBodyPropertiesBetweenMinMaxRange`、`GetRandomCompanionTemplateWithPredicate`）。和它的兄弟们一样，命名空间是裸的 `Helpers`，因此 `using Helpers;` 是必需的。

## 心智模型

把 `CharacterHelper` 理解成**"针对单个角色对象的外观与拓扑工具箱"**：

- **mod 里的典型调用顺序。** 从经 [CampaignGameStarter](../CampaignGameStarter/) 注册的 [CampaignBehaviorBase](../CampaignBehaviorBase/) 订阅 [CampaignEvents](../CampaignEvents/)；在回调里——或在持有 [Agent](../../mission/Agent/) 的任务侧处理器里——向 `CharacterHelper` 询问姿态、面容种子或升级树。这个辅助类本身没有注册或拆卸流程。
- **三族确定性种子，是刻意设计的。** `GetDefaultFaceSeed(character, rank)` 对"同一角色 + 同一 rank"稳定。`GetPartyMemberFaceSeed(party, character, rank)` 额外混入 `party.Index * 171`，于是**同一个**兵种在不同部队里长得不一样。`GetDeterministicColorsForCharacter` 给领主取派系颜色，给非领主英雄取按文化的英雄布料配色。在任何不能让所有新兵长得一模一样的 UI 里，请使用按部队区分的那个变体。
- **`GetTroopTree` 是对 `UpgradeTargets` 的惰性 BFS。** 它把基础兵种入队，出队时若其 `Tier` 落在 `[minTier, maxTier]` 内就 yield，然后把它所有的升级目标入队。由于它是建立在队列上的 `IEnumerable`，枚举两次等于重新走一遍；需要两趟就 `.ToList()`。
- **坑：`FindUpgradeRootOf` 是 O(全部角色对象)。** 它遍历 `CharacterObject.All` 并返回第一个升级子树包含你目标的基础兵种。在大型 mod 名单上这是一次全对象扫描——绝不要放进逐个单位的循环里。
- **坑：`SearchForFormationInTroopTree` 只匹配*叶子*兵种。** 一个兵种只有当 `UpgradeTargets.Length == 0` **且** `DefaultFormationClass == formation` 时才匹配；否则它以严格更大的 `Level` 递归进升级目标。若某个分支的中间兵种带有所需编队、但其叶子没有，返回 `false`。
- **坑：`CanUseItemBasedOnSkill` 是*类型*检查，不是实例检查。** 它读 `BasicCharacterObject.GetSkillValue(relevantSkill)` 与 `item.Difficulty` 比较，再加上 `NotUsableByFemale` / `NotUsableByMale` 物品标记。它对*特定* agent 当前技能一无所知，也不检查物品是否已装备或在库存里。
- **坑：`DeleteQuestCharacter` 是全局注销。** 它先（若存在）把角色从定居点的 `LocationComplex` 中移除，然后**无条件**调用 `Game.Current.ObjectManager.UnregisterObject(character)`。此后任何活引用都是悬空的，对象也从 `CharacterObject.All` 中消失——所以不要把它用在你的战役数据仍然指向的角色上。
- **坑：姿态/待机辅助方法返回的是字符串动画 id，不是动画对象。** `GetNonconversationPose`、`GetNonconversationFacialIdle`、`GetStandingBodyIdle`、`GetDefaultFaceIdle` 返回的 id 必须存在于你任务的动画集合里；没有匹配定义的角色会回落到一个可能并未加载的通用 id，表现出来的是僵直姿态而不是异常。

### 何时使用

**使用 `CharacterHelper` 的场景：**
- 你希望英雄或兵种在自定义界面里看起来正确：确定性颜色、面容种子，或角色允许范围内的体型属性。
- 你需要在任务或菜单里给 agent 摆姿态（`GetNonconversationPose`、`GetStandingBodyIdle`、`GetDefaultFaceIdle`）。
- 你需要遍历兵种升级树：这个基础兵种能升级成哪些、在哪些 tier 上（`GetTroopTree`），或者这个兵种源自哪个基础兵种（`FindUpgradeRootOf`）。
- 你需要知道某个编队是否能从某棵兵种树到达（`SearchForFormationInTroopTree`）。
- 你需要可用性或默认配装答案（`CanUseItemBasedOnSkill`、`GetDefaultWeapon`）。
- 你要清理自己创建的定制任务角色（`DeleteQuestCharacter`）。

**不要用 `CharacterHelper` 的场景：**
- 你想把兵种或英雄放进名册。那是名册/部队 API 加上一个 `*Action`；`CharacterHelper` 没有生成功能。
- 你想在任务里取单个 agent 的技能或装备状态。直接读 [Agent](../../mission/Agent/)——`CanUseItemBasedOnSkill` 检查的是*类型*而非实例。
- 你想枚举全部基础兵种。用 `CharacterObject.BasicCharacterObjects`（或自己过滤一遍）；`CharacterObject.All` 还包含每一个非基础模板。
- 你需要能*持久化*的外观定制。这些辅助方法是当场推导的；持久化是你自己的 `[SaveableField]` / `SyncData([IDataStore](../IDataStore/))` 的活。
- 你想在不破坏战役数据的前提下永久移除一个定居点里的角色。`DeleteQuestCharacter` 是全局注销；任何真实角色都该走正规的移除 action。

## 依赖关系

- [CharacterObject](../../campaign/CharacterObject/) — 几乎每个成员的对象：`UpgradeTargets`、`Tier`、`BodyPropertyRange`、`Culture`、`Occupation`、`IsHero`、`Equipment`。
- [HeroHelper](../HeroHelper/) — 英雄侧兄弟类；`CharacterObject.HeroObject` 是两者之间的桥。
- [Hero](../../campaign/Hero/) — 英雄是面容种子、颜色与死亡通知最常见的对象。
- [DynamicBodyProperties](../../core-extra/DynamicBodyProperties/) — `GetDynamicBodyPropertiesBetweenMinMaxRange` 构建并返回的值类型。
- [EquipmentIndex](../../core-extra/EquipmentIndex/) — `GetDefaultWeapon` 扫描的五个槽位。
- [ItemObject](../../core/ItemObject/) — 可用性检查用到的 `PrimaryWeapon`、`WeaponFlags`、`RelevantSkill`、`Difficulty` 与性别 `ItemFlags`。
- [SkillObject](../../core-extra/SkillObject/) — 物品可用性所对照的技能。
- [FormationClass](../../core-extra/FormationClass/) — `SearchForFormationInTroopTree` 所匹配的编队值。
- [KillCharacterAction](../KillCharacterAction/) — 提供 `GetDeathNotification` 用于 switch 的 `KillCharacterActionDetail` 枚举。
- [StringHelpers](../StringHelpers/) — 为返回文本填入 `{HERO}`、`{KILLER}`、`{VICTIM}`、`{NOTABLE}` 变量。
- [LocationComplex](../LocationComplex/) 与 [LocationCharacter](../LocationCharacter/) — `DeleteQuestCharacter` 所编辑的定居点地点列表。
- [MBObjectManager](../MBObjectManager/) — `GetRandomCompanionTemplateWithPredicate` 的模板列表来源，也是 `DeleteQuestCharacter` 注销时走的实例。
- [IFacegenCampaignBehavior](../IFacegenCampaignBehavior/) — `GetFaceGeneratorFilter` 用来查询人脸生成过滤器的战役 Behavior。
- [Campaign](../../campaign/Campaign/) — `Campaign.Current.GetCampaignBehavior<...>()` 与 `Campaign.Current.ConversationManager` 是若干成员背后的实时读取。
- [CampaignBehaviorBase](../CampaignBehaviorBase/) — 调用这些辅助方法的代码通常住的地方。

## 主要成员

#### `public static IEnumerable<CharacterObject> GetTroopTree(CharacterObject baseTroop, float minTier = -1f, float maxTier = float.MaxValue)`

按 tier 过滤的兵种升级图广度优先遍历。
- **算法：** 基础兵种入队；队列非空时出队一个角色，当 `(float)character.Tier` 落在 `[minTier, maxTier]` 内就 yield，并把它每一个 `UpgradeTargets` 条目入队。
- **返回值语义：** 惰性 `IEnumerable`，按 BFS 顺序。基础兵种最先 yield。tier 边界只控制**产出什么**，并不控制**遍历什么**——所以一条低 tier 分支仍可能被走进去以到达高 tier 的升级兵种。
- **坑：** `maxTier` 的默认值是 `3.4028235E+38f`（`float.MaxValue`）而非 `float.PositiveInfinity`；在自定义 `CharacterObject` 里用 `double` tier 的 mod 会被排除在外。
- **坑：** 如果某个 mod 定义了升级环，它可能返回循环结果，因为这里没有 visited 集合。原版树是无环的。
- **开销：** 整个可达子树。要 `.Count()` 的话只做一次并缓存。

#### `public static CharacterObject FindUpgradeRootOf(CharacterObject character)`

找出 `character` 所属的基础兵种。
- **算法：** 遍历 `CharacterObject.All`；返回第一个满足 `x.IsBasicTroop && UpgradeTreeContains(x, x, character)` 的 `x`（后者会递归目标的 `UpgradeTargets`）；若都没匹配上，则返回 `character` 本身。
- **返回值语义：** 一个 `CharacterObject`——要么是升级根，要么是**原样返回的输入**。这个双重含义正是坑所在：除非你自己检查 `IsBasicTroop`，否则"没找到"和"输入本来就是根"无法区分。
- **开销：** 每次调用 O(角色对象数量)，每次还带一次递归子树遍历。若要逐 agent 使用，请按角色 id 缓存结果。
- **坑：** 它扫描的是 `CharacterObject.All` 而不是 `BasicCharacterObjects`，所以若没有 `IsBasicTroop` 这道保护，一个带升级子树的非基础模板可能赢过真正的根。

#### `public static bool SearchForFormationInTroopTree(CharacterObject baseTroop, FormationClass formation)`

某个编队是否出现在可达的叶子兵种中。
- **算法：** 若 `baseTroop.UpgradeTargets.Length == 0 && baseTroop.DefaultFormationClass == formation` 则返回 `true`；否则以严格更大的 `Level` 递归进每个升级目标；都不匹配则 `false`。
- **返回值语义：** 纯粹的 `bool`，没有三态。它只在**叶子**兵种上匹配——一个带着该编队的中间兵种，除非它没有升级目标，否则不算。
- **坑：** `characterObject.Level > baseTroop.Level` 这道保护意味着 mod 树里的同级兄弟链接永远不会被遍历。这既是刻意的防环保护，也会丢掉合法的同级分支。
- **用途：** 给招募或自定义界面里的编队按钮加闸门：只提供目标兵种真能摆出来的编队。

#### `public static bool CanUseItemBasedOnSkill(BasicCharacterObject currentCharacter, EquipmentElement itemRosterElement)`

针对兵种*类型*的物品可用性判定。
- **算法：** `relevantSkill == null || currentCharacter.GetSkillValue(relevantSkill) >= item.Difficulty`，**并且**（若为女性）物品不带 `NotUsableByFemale`，**并且**（若为男性）不带 `NotUsableByMale`。
- **返回值语义：** 当该类型可以使用此物品时为 `true`。它是*能力*答案，不是库存或装备答案。
- **坑：** `itemRosterElement.Item` 被立即解引用——`EquipmentElement` 为 null 或其 `Item` 为 null 都会抛异常。
- **坑：** 它完全不看该物品是否是该兵种编队能 wield 的武器，也不看物品是否存在。请另配库存检查。
- **用途：** 为给定类型的兵种过滤库存界面。

#### `public static ItemObject GetDefaultWeapon(CharacterObject affectorCharacter)`

在 0..4 号装备槽里扫描第一个 `PrimaryWeapon` 带 `WeaponFlags.WeaponMask` 标记的物品。
- **返回值语义：** 第一个匹配的 `ItemObject`；没有槽位持有武器时为 `null`。`i <= 4` 的边界覆盖了五个 [EquipmentIndex](../../core-extra/EquipmentIndex/) 槽位。
- **坑：** 它读的是角色**当前**的 `Equipment`，而不是配装模板。一个已下马或被剥光的兵种会返回 `null`，哪怕它的默认配装里有武器。
- **坑：** 循环里 `equipmentFromSlot.Item` 没有判空，所以显式留空的槽位可能抛异常。若你遇到它，请在调用侧自己加 `?.`。

#### `public static DynamicBodyProperties GetDynamicBodyPropertiesBetweenMinMaxRange(CharacterObject character)`

在角色声明的 `BodyPropertyRange` 内对年龄、体重、体格做均匀取样，并逐项对 min/max 做防御性排序。
- **算法：** 读 `character.BodyPropertyRange.BodyPropertyMin` / `BodyPropertyMax`；计算 `Age`、`Weight`、`Build` 各自排好序的 min/max；返回 `new DynamicBodyProperties(MBRandom.RandomFloatRanged(ageMin, ageMax), ..., ...)`。
- **返回值语义：** 一个全新的 [DynamicBodyProperties](../../core-extra/DynamicBodyProperties/) 值。因为 min/max 是防御性交换过的，边界写反的角色定义不会抛异常，只会返回交换后的区间。
- **坑：** 它**消耗 `MBRandom`**。每帧给每个 agent 都调一次会让体型每帧都变，并让任何确定性场景（回放、同一场战斗的重放、联机）失步。
- **用途：** 创建英雄/agent 时取样一次，自己把结果存下来。

#### `public static ValueTuple<uint, uint> GetDeterministicColorsForCharacter(CharacterObject character)`

确定性的主/次布料颜色。
- **算法：** `HeroObject != null` 时从英雄的 `MapFaction.Culture` 解析文化，否则用 `character.Culture`；非英雄得到 `culture.Color` / `culture.Color2`；领主得到其 map faction 的 `Color` / `Color2`（回落到 `4291609515U`）；其他英雄得到派系 `Color` 加上从 `CampaignData.{Empire,Sturgia,Aserai,Vlandia,Battania,Khuzait}HeroClothColors` 中按英雄确定性抽取的颜色，未知文化默认用 Empire 列表。
- **返回值语义：** 一对 `(主色, 次色)` 的 `uint` 颜色值。对给定英雄完全确定——反复调用返回同一对。
- **坑：** 文化分派是对六个原版文化 string id 的硬编码 `if` 链。**mod 自定义文化会静默拿到 Empire 配色。**
- **坑：** 它在领主与英雄分支里反复解引用 `character.HeroObject.MapFaction` 且不判空；没有 map faction 的英雄在某些路径上会返回回落的灰色 `4291609515U`，而在另一些路径上直接抛异常。

#### `public static int GetPartyMemberFaceSeed(PartyBase party, BasicCharacterObject character, int rank)` / `GetDefaultFaceSeed(BasicCharacterObject character, int rank)`

确定性的面容种子。
- **算法（按部队变体）：** `party.Index * 171 + character.StringId.GetDeterministicHashCode() * 6791 + rank * 197`，取非负后 `% 2000`。
- **返回值语义：** 一个落在 `[0, 2000)` 的 `int`。非默认变体只是转发给 `character.GetDefaultFaceSeed(rank)`。
- **坑：** `% 2000` 的截断意味着混合值在不同部队之间会碰撞——它是*多样性*种子，不是唯一键。不要拿它当标识符用。
- **坑：** `party` 会被立即解引用；null 部队抛异常。
- **用途：** 在任何列出很多部队的界面里使用按部队变体，避免同一个新兵到处长得一样。

#### `public static string GetNonconversationPose(CharacterObject character)` / `GetNonconversationFacialIdle(CharacterObject character)` / `GetStandingBodyIdle(CharacterObject character, PartyBase party)` / `GetDefaultFaceIdle(CharacterObject character)`

对话之外的展示动画 id 选择。
- **返回值语义：** 一个字符串动画 id——不是动画对象，也不是 `MissionAnimation`。每个方法都会走一遍角色的年龄/职业再挑一个 id，没有更具体的匹配时回落到通用 id。
- **坑：** 你任务动画集合里没有的 id 就单纯不会播放。失败表现是一个静止或默认姿态的角色，**永远不会**是异常。
- **坑：** `GetStandingBodyIdle` 还要吃一个 party，所以同一个角色在部队里的待机与在菜单里不同。传一个你并不真正拥有的 party 会改变答案。
- **用途：** 驱动自定义角色预览或任务里的待机姿态，并确认这些 id 存在于你的 XML 中。

#### `public static IFaceGeneratorCustomFilter GetFaceGeneratorFilter()`

向战役询问人脸生成过滤器。
- **算法：** `Campaign.Current.GetCampaignBehavior<IFacegenCampaignBehavior>()`；返回 `campaignBehavior.GetFaceGenFilter()`，或在没有注册该 Behavior 时返回 `null`。
- **返回值语义：** `null` 是正常且有文档的结果，不是错误。使用前务必判空。
- **坑：** 说它"在未加载战役中也安全"，仅仅是因为 `GetCampaignBehavior` 会返回 null；在角色创建菜单里 `Campaign.Current` 本身可能为 null，那时你会在判空生效之前就拿到 `NullReferenceException`。
- **用途：** 透传给你自己的人脸生成调用，以便尊重 DLC 人脸包。

#### `public static void DeleteQuestCharacter(CharacterObject character, Settlement questSettlement)`

把定制任务角色从定居点地点列表移除，并把它从对象管理器注销。
- **副作用，按顺序：** 若 `questSettlement != null`，在 `questSettlement.LocationComplex.GetListOfCharacters()` 里查找，首个匹配处调用 `RemoveCharacterIfExists`；然后**无条件** `Game.Current.ObjectManager.UnregisterObject(character)`。
- **坑：** 注销是全局且对该对象不可逆的。每一条活引用——战役数据里的、Behavior 字段里的、任务 agent 里的——都会变成悬空，角色也从 `CharacterObject.All` 中消失。
- **坑：** 聚落移除有判空保护，注销没有。传 null 聚落照样会把对象毁掉。
- **用途：** 只用于*你*自己创建、专为某个任务而生、且没有保留任何持久引用的角色。其他一切请用正规的移除 action。

#### `public static CharacterObject GetRandomCompanionTemplateWithPredicate(Func<CharacterObject, bool> predicate = null)`

随机挑一个可当同伴的兵种模板。
- **算法：** 从 `MBObjectManager.Instance.GetObjectTypeList<CharacterObject>()` 中，返回 `GetRandomElementWithPredicate(x => x.IsTemplate && x.Occupation == Occupation.Wanderer)`；若提供了谓词，则再追加 `&& predicate(x)`。
- **返回值语义：** 一个匹配的模板，或在没有匹配时 `GetRandomElementWithPredicate` 给出的东西（使用前请检查 null）。
- **坑：** 它**消耗 `MBRandom`**。加载期间没问题，放在确定性或网络路径上就有问题。
- **坑：** 没有任何模板满足谓词时返回 null 而不是抛异常——这会变成一个很容易被误读成配置问题的"同伴不生成"缺陷。
- **用途：** 在任务开始时生成一个通用的游荡同伴。

#### `public static TextObject GetDeathNotification(Hero victimHero, Hero killer, KillCharacterAction.KillCharacterActionDetail detail)`

构造本地化的"英雄死亡"通知。
- **算法：** `DiedInLabor` / `Murdered` / `DiedInBattle` / `DiedOfOldAge` 使用 `str_on_hero_killed` 并以 `detail.ToString()` 作为变体；`Executed` / `ExecutionAfterMapEvent` 在 `killer != null` 时额外设置 `{KILLER}`；`Lost` 设置 `{VICTIM}`；其余一律回落到 `"Default"` 变体。所有路径最后都设置 `{HERO}`。
- **返回值语义：** 一个 `TextObject`。变体键就是枚举成员的 `ToString()`，因此 mod 里自定义的 `KillCharacterActionDetail` 值没有对应文本，除非 mod 自己补上。
- **坑：** 每条路径都会解引用 `victimHero.CharacterObject`——victim 为 null 时，异常发生在文本查找已经跑完之后。
- **坑：** `killer` 只在处决分支里被用到；为战死传入 killer 会静默丢掉 `{KILLER}` 变量，于是文本渲染时那个位置是空的。

#### `public static TextObject GetReputationDescription(CharacterObject character)`

把 notable 的声望行包进 `{REPUTATION_SUMMARY}` 模板。
- **算法：** 构造 `new TextObject("{=!}{REPUTATION_SUMMARY}")`，通过 `Campaign.Current.ConversationManager.FindMatchingTextOrNull("reputation", character)` 解析内层文本，在其上设置 `{NOTABLE}`，再在外层设置 `{REPUTATION_SUMMARY}`。
- **返回值语义：** 一个外层包装 `TextObject`，而不是原始的声望行。`FindMatchingTextOrNull` 可能返回 null，此时 `SetCharacterProperties` 在 null 内层对象上就会出问题。
- **坑：** 外层模板带有 `=!` 这个"不本地化"标记，所以包装文本本身永远不会被翻译——只有内层行会。
- **用途：** 在自定义界面里展示某个 notable 的声望。

## 使用示例

### 示例 1 — 为新兵列表生成按部队区分的确定性外观

```csharp
public List<AgentPreview> BuildRecruitPreviews(PartyBase party, IEnumerable<CharacterObject> troops)
{
    var previews = new List<AgentPreview>();
    int rank = 0;
    foreach (CharacterObject troop in troops)
    {
        // 按部队区分的种子：同一兵种在不同部队里面容不同。
        int faceSeed = CharacterHelper.GetPartyMemberFaceSeed(party, troop, rank);
        var colors = CharacterHelper.GetDeterministicColorsForCharacter(troop);
        previews.Add(new AgentPreview(troop, faceSeed, colors.Item1, colors.Item2));
        rank++;
    }
    return previews;
}
```

### 示例 2 — 只提供目标兵种真能摆出的编队

```csharp
public List<FormationClass> GetAvailableFormations(CharacterObject baseTroop)
{
    var offered = new List<FormationClass>();
    foreach (FormationClass formation in Enum.GetValues(typeof(FormationClass)))
    {
        // 原版兵种树里只有叶子兵种带编队。
        if (CharacterHelper.SearchForFormationInTroopTree(baseTroop, formation))
        {
            offered.Add(formation);
        }
    }
    return offered;
}
```

### 示例 3 — 按 tier 区间遍历一次兵种升级树

```csharp
public List<CharacterObject> GetEliteTierTroops(CharacterObject baseTroop)
{
    // 惰性 BFS：物化一次，否则第二趟会重新开始遍历。
    return CharacterHelper.GetTroopTree(baseTroop, minTier: 4f, maxTier: 6f).ToList();
}
```

### 示例 4 — 按兵种能力过滤库存（不是按单个 agent 的技能）

```csharp
public List<ItemObject> GetUsableItems(BasicCharacterObject troop, IEnumerable<ItemObject> items)
{
    var usable = new List<ItemObject>();
    foreach (ItemObject item in items)
    {
        var element = new EquipmentElement(item);
        // 类型级检查：类型的技能值 对比 物品难度 + 性别标记。
        if (CharacterHelper.CanUseItemBasedOnSkill(troop, element))
        {
            usable.Add(item);
        }
    }
    return usable;
}
```

### 示例 5 — 为新英雄取样一次体型并保存

```csharp
public void FinalizeNewHeroAppearance(Hero hero)
{
    // 消耗 MBRandom——取样一次，之后把值自己留着。
    DynamicBodyProperties body = CharacterHelper.GetDynamicBodyPropertiesBetweenMinMaxRange(hero.CharacterObject);
    hero.DynamicBodyProperties = body;
    hero.SetFaceSeed(CharacterHelper.GetDefaultFaceSeed(hero.CharacterObject, 0));
}
```

## 风险与崩溃边界

- **崩溃边界 —— `DeleteQuestCharacter` 是全局注销。** 调用之后，该 `CharacterObject` 会从 `CharacterObject.All` 中被移除，而每一条对它的引用——Behavior 字段里的、任务 agent 里的、`SaveableTypeDefiner` 注册结构里的——都会变成悬空引用。保存一份持有这类引用的存档，读档时就会解析失败。只把它用在你创建且不持有任何引用的角色上。
- **崩溃边界 —— 那些"看起来很安全"的辅助方法里的空引用。** `GetDefaultWeapon` 索引五个装备槽并解引用 `.Item`；`GetPartyMemberFaceSeed` 解引用 `party`；`GetDeterministicColorsForCharacter` 在领主与英雄分支解引用 `character.HeroObject.MapFaction`；`GetRandomCompanionTemplateWithPredicate` 需要活的 `MBObjectManager`。这些都能被初始化不完整或 mod 定义的角色轻易触达。
- **确定性边界 —— 会消耗随机数的成员。** `GetDynamicBodyPropertiesBetweenMinMaxRange` 与 `GetRandomCompanionTemplateWithPredicate` 会推进 `MBRandom`。请在创建时调用一次，绝不要放进逐帧或逐 agent 循环，也绝不要放在必须可复现的路径上（回放、确定性测试、联机同步）。
- **跨域依赖。** 该类位于 `TaleWorlds.CampaignSystem` 的 `Helpers` 命名空间，但返回 `TaleWorlds.Core` 的值类型（[DynamicBodyProperties](../../core-extra/DynamicBodyProperties/)、[ItemObject](../../core/ItemObject/)）与 `TaleWorlds.Localization` 的 `TextObject`，并伸手到 `Game.Current.ObjectManager`。缺少其中任一引用的 mod 会得到首次调用时的加载期程序集故障，而不是编译错误。
- **加载顺序依赖。** `GetFaceGeneratorFilter` 与 `GetReputationDescription` 都在调用时解析战役 Behavior / 对话管理器。在引导期的 Behavior `RegisterEvents` 里调用是合法的，但只会拿到部分数据；请改在首次 UI 使用时调用。
- **动画 id 边界。** 姿态与待机辅助方法返回 id，而不是经过校验的动画。mod 角色若没有匹配的动画定义，表现是一个静止姿态的角色，而不是报错——这很容易被误认为面容/姿态逻辑的 bug。
- **存档序列化与 ID 稳定性。** 这些辅助方法都不参与存读档。`GetPartyMemberFaceSeed` 与 `GetDefaultFaceSeed` 把 `character.StringId` 折进一个确定性哈希，因此对给定角色 id 跨会话稳定，但一旦兵种被换 id 或改名就彻底失效。请持久化*取样后的值*（例如 `hero.SetFaceSeed`）而不是每次重算，这样改名也不会悄无声息地改变已保存英雄的面容。
- **mod 自定义文化边界。** `GetDeterministicColorsForCharacter` 硬编码了六个原版文化 id，其他一切都会回落到 Empire 配色。完全自定义的文化会静默拿到帝国布料颜色，除非你自己覆写这次调用。
- **`UpgradeTargets` 图的假设。** `GetTroopTree` 没有 visited 集合，而 `SearchForFormationInTroopTree` 要求 `Level` 严格递增。带环或同级链接的 mod 升级图会让前者无限循环、让后者漏掉合法分支。

## 跨版本提示

- **v1.3.x（本页）：** 上述成员集合与 1.3.15 一致，包括面向较新待机系统的 `GetDefaultFaceIdle` 与 `GetStandingBodyIdle`。`GetTroopTree` 的 `maxTier` 默认值是 `float.MaxValue`。
- **v1.4.x：** 兵种树与外观辅助方法未变。新版本扩展了 `CampaignData.*HeroClothColors` 的处理但形态相同；如果你发布自定义文化，请重新确认自己落在哪套配色上。
- **v1.5.x：** 预计会为新的对话与攻城场景增加更多动画 id 选择方法。稳定的契约是确定性种子三件套（`GetDefaultFaceSeed`、`GetPartyMemberFaceSeed`、`GetDeterministicColorsForCharacter`）加上树工具（`GetTroopTree`、`FindUpgradeRootOf`）——请围绕它们构建，并把姿态/待机字符串当作版本敏感项。

## 参见

- ↑ 父级目录：[Campaign-Ext API 索引](./)
- ↔ 同级：[HeroHelper](../HeroHelper/) — 同一 `Helpers` 命名空间里的英雄侧门面
- ↔ 同级：[StringHelpers](../StringHelpers/) — 为通知辅助方法设置文本变量
- ↔ 同级：[KillCharacterAction](../KillCharacterAction/) — 驱动 `GetDeathNotification` 的 detail 枚举
- ↔ 同级：[LocationComplex](../LocationComplex/) — `DeleteQuestCharacter` 所编辑的定居点地点列表
- ↔ 同级：[MBObjectManager](../MBObjectManager/) — 模板列表与注销调用
- ↔ 同级：[IFacegenCampaignBehavior](../IFacegenCampaignBehavior/) — 人脸生成过滤器的来源
- ↑ CharacterObject：[CharacterObject](../../campaign/CharacterObject/)
- ↑ ItemObject：[ItemObject](../../core/ItemObject/)
- ↑ DynamicBodyProperties：[DynamicBodyProperties](../../core-extra/DynamicBodyProperties/)
- ↑ 任务侧对应物 Agent：[Agent](../../mission/Agent/)