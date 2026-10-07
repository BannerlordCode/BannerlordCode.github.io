---
title: "ActionSetCode"
description: "动作集命名表：47 个角色/场景后缀常量，加上唯一的静态方法 GenerateActionSetNameWithSuffix，负责把「怪物 + 性别 + 角色后缀」拼成引擎真正去查的 as_* 动作集键。"
---

# ActionSetCode

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public static class ActionSetCode`
**Base:** 无
**File:** `TaleWorlds.Core/ActionSetCode.cs`

## 概述

`ActionSetCode` 是战斗/大地图场景里**动作集（action set）键名的那张对照表**。引擎不认识「领主」「铁匠」「背着木柴的农夫」这些概念，它只认一个字符串键，比如 `as_human_lord`、`as_human_female_villager_merchant`；这个字符串是动画系统找到 `.actset` 资源、进而找到每一条动作记录的入口。`ActionSetCode` 把「角色身份 × 场景」拆成两层：一层是 **47 个 `const string` 后缀**（`"_lord"`、`"_warrior_in_aserai_tavern"`、`"_villager_carry_bucket_on_lefthand"`……），另一层是**唯一一个静态方法** `GenerateActionSetNameWithSuffix`，负责按固定规则把三段拼成完整键。

它承担的环节是「**语义 → 资源键**的翻译**」。调用方（[HeroAgentSpawnCampaignBehavior](../../campaign/HeroAgentSpawnCampaignBehavior)、`NotableHelperCharacterCampaignBehavior`、`LordsNeedsTutorIssueBehavior`、[LocationCharacter](../../campaign/LocationCharacter)、`MBGlobals`）只负责判断「这个人是领主还是农夫」，剩下的字符串拼接全交给这里。这条边界很重要：**这张表是加新动作集时唯一需要改的地方**，角色逻辑不该自己去 `string.Concat("as_", ...)`。

## 心智模型

把它当成**一张「后缀字典」加一个「键组装器」**，而不是一个对象——它没有实例、没有状态、没有生命周期，纯粹是编译期常量加一个纯函数。

**后缀表是按前缀分组的**，这是读源码时唯一需要抓的结构。源码里的 47 个常量可以归成六组：`_warrior` / `_child` / `_villager` 系列是**身份组**（前缀 `Villager`、`Warrior`、`Lord`、`Villain`、`Child`）；`_villager_in_tavern` / `_warrior_in_aserai_tavern` / `_barmaid` / `_tavern_keeper` / `_musician` / `_dancer` 是**场景组**，只有在酒馆等室内场景才会用到；`_villager_carry_*` / `_worker_carry_wood_on_shoulder` 是**搬运姿态组**，它们描述的是手持物而不是身份；`_poses` / `_facegen` / `_map` / `_map_with_banner` 是**技术后缀**，给 FaceGen 生成、地标记动作和带旗地图动作用，不对应任何游戏内角色。

**组装规则只有一条**，写在 `GenerateActionSetNameWithSuffix` 的最后一行（`ActionSetCode.cs:103`）：`"as_" + (BaseMonster 非空 ? BaseMonster : StringId) + (isFemale ? "_female" : "") + suffix`。三段拼接，**性别段夹在怪物名和后缀之间**，所以女性领主是 `as_human_female_lord` 而不是 `as_human_lord_female`。怪物为 null 时走 `:101` 的分支，硬编码前缀 `"as_human"`，所以传 null 拿到的永远是人类动作集——这是给「确实没有 monster 数据」的场景兜底，不是错误。

由此推出四个容易踩的点。第一，**`Monster` 上还有一个同名的 `ActionSetCode` 字符串属性**（`Monster.cs:38`，由 `Monster.cs:307` 从 XML 读入），它和本类型**完全无关**：那是怪物定义文件里自带的整段动作集名，由 `MonsterMissionData`（`MonsterMissionData.cs:24`）直接 `MBActionSet.GetActionSet(Monster.ActionSetCode)` 查；本类型产出的是按身份拼出来的后缀串。名字撞车不代表同一件事。第二，**常量名不统一**，别按名字规律去拼：`Villager1ActionSetSuffix`、`Villager2ActionSetSuffix`、`Villager3ActionSetSuffix` 三者的值全都是 `"_villager"`（重复声明）；而 `VillagerCarryBucketLeftHand` 和 `VillagerCarryFishBucketsLeftHand` 是唯一两个**没有 `Suffix` 后缀结尾**的常量。要取用就照名字抄，别自己拼后缀。第三，**没有校验**：`GenerateActionSetNameWithSuffix` 对任意字符串都照拼不误，错后缀要到 `MBGlobals.GetActionSet` 里才炸成 `throw new Exception("Invalid action set code")`。第四，**人类之外还有大量生物**，`Monster.BaseMonster` 非空时会把 `as_spider_lord` 这类键交给引擎，而资源文件里未必存在——所以给龙/狼配 `_lord` 后缀时要自己在美术资源侧确认。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `GenerateActionSetNameWithSuffix` | `public static string GenerateActionSetNameWithSuffix(Monster monster, bool isFemale, string suffix)` | 全类型唯一的函数。`monster` 为 null 时返回 `"as_human"` 打头，为 null 但 `BaseMonster` 为空时退回用 `StringId`，`isFemale` 为真则在后缀前插 `"_female"`。**纯函数，不查表、不校验、不缓存**，拼出来的键是否存在要到 `MBActionSet.GetActionSet` 才知道。 |
| `LordActionSetSuffix` / `Villager1ActionSetSuffix` / `Villager2ActionSetSuffix` / `Villager3ActionSetSuffix` | `public const string` = `"_lord"` / `"_villager"` ×3 | 战斗大地图上「无所属领主」与「普通农夫」的默认姿态。`Villager1/2/3` 是历史遗留的重复常量，值完全相同，取任意一个即可。`HeroAgentSpawnCampaignBehavior.cs:176/179` 与 [LocationCharacter](../../campaign/LocationCharacter) 的默认值走的就是这两个。 |
| `WarriorActionSetSuffix` / `VillagerInTavernActionSetSuffix` / `WarriorInTavernActionSetSuffix` | `public const string` = `"_warrior"` / `"_villager_in_tavern"` / `"_warrior_in_tavern"` | 有战斗能力的自由民与酒馆内的两种姿态。`HeroAgentSpawnCampaignBehavior.cs:193` 的 Wanderer 分支按村庄文化（`aserai` / `khuzait`）在 `_warrior_in_aserai_tavern` 与 `_warrior_in_tavern` 之间二选一。 |
| `VillagerInAseraiTavernActionSetSuffix` / `WarriorInAseraiTavernActionSetSuffix` | `public const string` = `"_villager_in_aserai_tavern"` / `"_warrior_in_aserai_tavern"` | 巴旦亚（Aserai）文化专属的室内姿态。这两个常量在 1.4.5 的托管代码里**没有被任何调用方使用**——`HeroAgentSpawnCampaignBehavior` 是直接写裸字符串 `"_warrior_in_aserai_tavern"` 的，常量本身是给 mod 用的。 |
| `ArtisanSuffix` / `MerchantSuffix` / `PreacherSuffix` / `GangLeaderSuffix` / `RuralNotableSuffix` | `public const string` = `"_villager_artisan"` / `"_villager_merchant"` / `"_villager_preacher"` / `"_villager_gangleader"` / `"_villager_ruralnotable"` | 城镇里的五种有名望职业。注意它们都以 `_villager_` 开头而不是 `_artisan`，因为它们本质是农夫的变体。`HeroAgentSpawnCampaignBehavior.cs:186` 正是靠这五个常量（的字符串值）区分城镇里的不同 NPC。 |
| `TavernKeeperSuffix` / `WeaponsmithSuffix` / `SellerSuffix` / `MusicianSuffix` / `BarmaidActionSetSuffix` / `GuardSuffix` / `UnarmedGuardSuffix` | `public const string` | 酒馆与城镇服务人员的专属动作集。这些在 1.4.5 托管侧同样无调用方，属于「资源侧已备好、逻辑侧未接线」的一批。 |
| `VillagerCarryOnShoulderSuffix` / `VillagerCarryBucketLeftHand` / `VillagerCarryOverHeadSuffix` / `WorkerCarryOnShoulderSuffix` 等 `VillagerCarry*` | `public const string` | 搬运姿态组，描述手持物（柴禾、水桶、鱼桶、斧头、过顶）而非身份。这组里混着一个前缀语义相反的成员——`WorkerCarryOnShoulderSuffix` 的值是 `"_worker_carry_wood_on_shoulder"`，是唯一带 `_worker_` 前缀的搬运动作。 |
| `PosesSuffix` / `FaceGenActionSetSuffix` / `MapActionSetSuffix` / `MapWithBannerActionSetSuffix` | `public const string` = `"_poses"` / `"_facegen"` / `"_map"` / `"_map_with_banner"` | 技术性后缀：通用姿态池、FaceGen 按体型/族裔生成脸时的动作、地标记（地图移动）动作、以及带旗时的地图动作。`Monster.cs:646` 用怪物自己的 `ActionSetCode` 去 `GetBoneIndexWithId` 取骨骼索引，走的正是这套命名空间。 |

## 真实示例

最常见的一步：拿到怪物数据后直接向 `MBGlobals` 要动作集，后缀从本表取（`MBGlobals.cs:29-31` 的 `GetActionSetWithSuffix` 就是 `GenerateActionSetNameWithSuffix` + `GetActionSet` 的组合）：

<!-- xml-id-unverifiable: v1.4.5 -->
> ⚠️ 不可验证：本页全部字符串 id（下方代码示例中的）在 v1.4.5 源码树均无法核对——该版本未随附 XML 语料。
```csharp
Monster monster = MBObjectManager.Instance.GetObject<Monster>("spider");
if (monster == null)
{
    Debug.Print("monster 'spider' is not loaded", 0);
    return;
}

MBActionSet actionSet = MBGlobals.GetActionSetWithSuffix(
    monster, isFemale: false, ActionSetCode.WarriorActionSetSuffix);

if (!actionSet.IsValid)
{
    Debug.Print("no action set for " + monster.StringId + " / warrior", 0);
    return;
}

// 动作集最终是通过 AgentVisualsData 交给外观层的（结构照
// MultiplayerMissionAgentVisualSpawnComponent.cs:151 的链式写法）
AgentVisualsData visuals = new AgentVisualsData()
    .Equipment(hero.BattleEquipment)
    .Frame(MatrixFrame.Identity)
    .ActionSet(actionSet)
    .Scene(Mission.Current.Scene)
    .Monster(monster)
    .PrepareImmediately(prepareImmediately: false);
```

按职业挑后缀再交给 [LocationCharacter](../../campaign/LocationCharacter)（结构照 `HeroAgentSpawnCampaignBehavior.cs:179-193` 的分支）：

```csharp
string suffix = hero.IsArtisan
    ? ActionSetCode.ArtisanSuffix
    : (hero.IsMerchant
        ? ActionSetCode.MerchantSuffix
        : (hero.IsPreacher
            ? ActionSetCode.PreacherSuffix
            : ActionSetCode.Villager1ActionSetSuffix));

string actionSetCode = ActionSetCode.GenerateActionSetNameWithSuffix(
    agentData.AgentMonster, hero.IsFemale, suffix);

LocationCharacter villager = new LocationCharacter(
    agentData,
    SandBoxManager.Instance.AgentBehaviorManager.AddWandererBehaviors,
    "sp_notable",
    fixedLocation: true,
    LocationCharacter.CharacterRelations.Neutral,
    actionSetCode,
    useCivilianEquipment: true);
```

看清「性别段夹在中间」这条规则，以及它与 `Monster.ActionSetCode` 的区别：

```csharp
Monster monster = MBObjectManager.Instance.GetObject<Monster>("human");

string maleLord = ActionSetCode.GenerateActionSetNameWithSuffix(
    monster, isFemale: false, ActionSetCode.LordActionSetSuffix);
string femaleLord = ActionSetCode.GenerateActionSetNameWithSuffix(
    monster, isFemale: true, ActionSetCode.LordActionSetSuffix);

// as_human_lord  /  as_human_female_lord
Debug.Print(maleLord + "  |  " + femaleLord, 0);

// 传 null 兜底到 as_human，性别段照样插在中间
string fallback = ActionSetCode.GenerateActionSetNameWithSuffix(
    null, isFemale: true, ActionSetCode.Villager1ActionSetSuffix);
Debug.Print(fallback, 0);

// 这条是怪物定义自带的整段动作集名，跟上面拼出来的后缀串不是一回事
Debug.Print("monster-owned code = " + monster.ActionSetCode, 0);
```

## 风险与边界

- **拼错后缀不会当场报错。** `GenerateActionSetNameWithSuffix` 不校验资源是否存在；错误会推迟到 `MBGlobals.GetActionSet` 内部，命中 `Debug.FailedAssert` 之后 `throw new Exception("Invalid action set code")`。自定义 NPC 若在 mission 初始化期间配错后缀，整个任务会在生成 agent 时崩。
- **名字撞车：别把 `Monster.ActionSetCode` 当成本类型的产物。** 前者是 XML 里读进来的完整动作集名（`Monster.cs:307`），由 `MonsterMissionData.cs:24` 单独查表；后者是按身份拼出来的后缀串。两者混用会拿到完全无关的动作集。
- **非人类怪物的后缀不一定存在。** `GenerateActionSetNameWithSuffix` 对 `BaseMonster` 非空的怪物会产出 `as_<BaseMonster><suffix>`。给龙、狼、鹿配 `_lord` 之前得确认美术资源里真有这个 actset，否则就是上面的崩溃路径。
- **常量表有重复与命名不一致。** `Villager1/2/3ActionSetSuffix` 三者同值；`VillagerCarryBucketLeftHand`、`VillagerCarryFishBucketsLeftHand` 缺 `Suffix` 结尾。**只能照抄常量名引用，不要按命名规律自己造字符串。**
- **静态类，无实例、无线程安全考量（也无需考虑）。** 全是 `const`，编译期就内联，运行时零成本、零状态。
- **近半常量在 1.4.5 托管代码里没有调用方。** `VillagerInAseraiTavernActionSetSuffix`、`TavernKeeperSuffix`、`WeaponsmithSuffix`、`SellerSuffix`、`MusicianSuffix`、`GuardSuffix`、`UnarmedGuardSuffix`、`PosesSuffix` 等只存在于常量表里——它们不是死代码，是「资源侧已备好」的公开表项，mod 可以直接取用。
- **改动这张表等于改所有 NPC 的外观。** 任何对后缀常量值的修改都会同时影响领主、农夫、酒馆 NPC 与城镇服务人员四类调用方，没有版本兼容层。

## 跨版本提示

`ActionSetCode` 属于 1.4.5 原始源码形态（`bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.Core/TaleWorlds.Core/ActionSetCode.cs`，105 行，file-scoped namespace、无 `// Token:` 注释）。1.3.x 与 1.4.6 是同一张表的不同构建，**常量集合本身是内容资产而非 API**，增删后缀属于正常的资源更新。跨版本迁移时真正要核对的是两件事：`GenerateActionSetNameWithSuffix` 的**签名与三段拼接顺序**是否不变，以及你自己的 XML/mod 里**是否硬编码了裸后缀字符串**——`HeroAgentSpawnCampaignBehavior.cs:193` 就是硬编码 `"_warrior_in_aserai_tavern"` 而不用常量的例子，这类硬编码在资源改名后会静默失效。

## 依赖关系

- 产出方：[MBGlobals](../../mission-ext/MBGlobals) 的 `GetActionSetWithSuffix` / `GetActionSet` 是把本类型的字符串真正变成动画资源的唯一通道
- 输入数据：[Monster](../Monster) 决定 `BaseMonster` / `StringId` 两段拼接内容；`Monster.ActionSetCode` 是另一条独立的动作集来源
- 主要调用方（Campaign 层）：[HeroAgentSpawnCampaignBehavior](../../campaign/HeroAgentSpawnCampaignBehavior) 的 `CreateLocationCharacterForHero`、`NotableHelperCharacterCampaignBehavior`、`LordsNeedsTutorIssueBehavior`
- 落位：[LocationCharacter](../../campaign/LocationCharacter) 构造器第 6 参 `actionSetCode` 为 null 时会退回 `"_villager"`（`LocationCharacter.cs:71`）
- 性别来源：[Hero](../../campaign/Hero) 的 `IsFemale`，以及 `AgentData.AgentIsFemale`
- 桶首页：[core-extra API 分区](../)