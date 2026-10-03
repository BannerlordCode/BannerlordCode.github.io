---
title: "ActionSetCode"
description: "46 个动作集后缀常量 + 1 个拼接方法：GenerateActionSetNameWithSuffix 把 Monster/BaseMonster/性别/后缀拼成 as_* 动作集名，名字与值大面积不对应是最大的坑。"
---

# ActionSetCode

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public static class ActionSetCode`
**Base:** 无（`static class` 隐式继承 `System.Object`，不可实例化）
**File:** `TaleWorlds.Core/ActionSetCode.cs`（全文 156 行 / 5282 字节）

> 核对记录：读了 `TaleWorlds.Core/ActionSetCode.cs`（5282 B，全文 46 个常量逐个抄）+ `SandBox/CampaignBehaviors/CommonTownsfolkCampaignBehavior.cs`（20+ 处调用点）、`CommonVillagersCampaignBehavior.cs`、`GuardsCampaignBehavior.cs`、`AlleyCampaignBehavior.cs`、`BoardGameCampaignBehavior.cs`、`ArenaMasterCampaignBehavior.cs`、`BarberCampaignBehavior.cs`、`ClanMemberRolesCampaignBehavior.cs`、`PrisonBreakCampaignBehavior.cs` + `TaleWorlds.CampaignSystem/Settlements/Locations/LocationCharacter.cs:83` 的 `string actionSetCode` 形参。约 25 min。最难判断点：46 个常量里相当一部分名字和值对不上（`MerchantSuffix = "_villager_merchant"`、`TavernKeeperSuffix = "_tavern_keeper"`、`VillagerCarryBucketLeftHand = "_villager_carry_bucket_on_lefthand"`），而且官方调用点大量绕过常量直接写裸字符串 `"_villager"`，必须逐个分辨「该用哪个常量」和「这个名字到底叫什么」。

## 概述

`ActionSetCode` 是一张**动作集命名表**。动作集（action set）是动画系统的一组动作集合，名字形如 `as_human_villager_female_warrior`——`as_` 前缀 + 怪物名 + 可选性别后缀 + 职业后缀。本类提供两样东西：

- **一个拼接方法** `GenerateActionSetNameWithSuffix(Monster monster, bool isFemale, string suffix)`，把上面四段拼起来。
- **46 个 `public const string` 后缀常量**，是各职业/身份的后缀段。

它**不创建动作集、不加载动画、不校验名字是否存在**。它只是字符串拼接。**拼接出来的名字必须与游戏资源里的动画动作集实际同名**，否则表现层静默找不到动画（agent 会站着不动或回退到默认动作），没有任何异常。

它的唯一消费点是 [LocationCharacter](../../campaign/LocationCharacter) 的构造函数第 6 个形参 `string actionSetCode`——城镇里的每个 NPC 生成点都通过它拿到自己的动作集名。

## 心智模型

把它当成**「一段可拼接的字符串约定」的常量表**，而不是一个 API。三条规则决定一切：

**规则一，拼接公式是硬编码的四段式。** 全文只有这一个方法：

```csharp
public static string GenerateActionSetNameWithSuffix(Monster monster, bool isFemale, string suffix)
{
    if (monster == null)
    {
        return "as_human" + (isFemale ? "_female" : "") + suffix;
    }
    return "as_" + (string.IsNullOrEmpty(monster.BaseMonster) ? monster.StringId : monster.BaseMonster) + (isFemale ? "_female" : "") + suffix;
}
```

拆开看：

| 情形 | 结果形状 |
| --- | --- |
| `monster == null` | `"as_human"` + (女性则 `"_female"`) + `suffix` |
| `monster.BaseMonster` 非空 | `"as_" + BaseMonster` + (女性则 `"_female"`) + `suffix` |
| `monster.BaseMonster` 为空/空串 | `"as_" + monster.StringId` + (女性则 `"_female"`) + `suffix` |

**关键细节：`BaseMonster` 优先于 `StringId`。** 这意味着「带后缀的怪物变体」（`FaceGen.GetMonsterWithSuffix(race, "_settlement_slow")` 那类）会自动折叠回它的基础怪物名。`CommonTownsfolkCampaignBehavior.cs:340` 那句 `ActionSetCode.GenerateActionSetNameWithSuffix(monsterWithSuffix, false, "_villager")` 传进去的 `monsterWithSuffix` 是个变体，但出来的动作集名用的是基础怪物的动作集——**这正是设计意图：一个带 `_settlement_slow` 后缀的怪物也要用标准市民动画。**

**规则二，性别后缀夹在怪物名和职业后缀之间。** 所以顺序永远是 `as_<monster>[_female]<suffix>`。你不能把 `_female` 放到最后去，`as_human_villager_female` 是**无效名**。

**规则三，46 个常量的名字和值大面积不对应。** 这是本类最大的坑，也是查它时最该先看的表：

| 常量名 | 值 | 备注 |
| --- | --- | --- |
| `MerchantSuffix` | `"_villager_merchant"` | 值不是 `_merchant`，**多了 `_villager_`** |
| `ArtisanSuffix` | `"_villager_artisan"` | 同上 |
| `PreacherSuffix` | `"_villager_preacher"` | 同上 |
| `RuralNotableSuffix` | `"_villager_ruralnotable"` | 同上，且 `notable` 是**一个词**没有下划线 |
| `GangLeaderSuffix` | `"_villager_gangleader"` | 同上，且常量名是 `GangLeader`（一个 L）而值里是 `gangleader` |
| `TavernKeeperSuffix` | `"_tavern_keeper"` | 名字里**没有 `ActionSet`**，而绝大多数同类常量都有 |
| `WeaponsmithSuffix` | `"_weaponsmith"` | 同上 |
| `SellerSuffix` | `"_seller"` | 同上 |
| `MusicianSuffix` | `"_musician"` | 同上 |
| `GuardSuffix` | `"_guard"` | 同上 |
| `UnarmedGuardSuffix` | `"_unarmed_guard"` | 同上 |
| `DancerSuffix` | `"_dancer"` | 同上 |
| `BeggarSuffix` | `"_beggar"` | 同上 |
| `VillagerCarryBucketLeftHand` | `"_villager_carry_bucket_on_lefthand"` | **常量名本身没有 `Suffix` 后缀**，值里 `lefthand` 也是一个词 |
| `VillagerCarryFishBucketsLeftHand` | `"_villager_carry_fish_buckets"` | 同上，**且值里根本没有 `lefthand`** |

**规律**：凡是「市民」类职业，值都以 `_villager_` 开头（常量名却只有职业名）；凡是「携带物」类动作，值都以 `_villager_carry_` 开头。**看常量名推不出值，必须看值。**

还有一组带版本号的常量：`VillagerCarryFront2Suffix = "_villager_carry_front_v2"`、`VillagerCarryOverHead2Suffix = "_villager_carry_over_head_v2"`——**值里有 `_v2`，常量名用 `2`**。写自定义动作集时如果沿用这个命名法，`_v2` 就是给你留的迭代位。

## 心智模型（续）：官方自己怎么用

全树 `grep -rn -w "ActionSetCode"` 的调用点几乎全在 `SandBox/CampaignBehaviors/`，形状高度统一：

```csharp
AgentData agentData = new AgentData(new SimpleAgentOrigin(guardRosterElement, -1, banner, default(UniqueTroopDescriptor)))
    .Equipment(randomEquipmentElements)
    .Monster(monsterWithSuffix)
    .NoHorses(true);
...
return new LocationCharacter(
    agentData,
    new LocationCharacter.AddBehaviorsDelegate(SandBoxManager.Instance.AgentBehaviorManager.AddStandGuardBehaviors),
    "sp_guard",
    true,
    0,
    ActionSetCode.GenerateActionSetNameWithSuffix(agentData.AgentMonster, agentData.AgentIsFemale, "_guard"),
    false, false, null, false, false, true, null, false);
```

`GuardsCampaignBehavior.cs:386` 是这一段的完整原形。三个要点：

1. **常量经常被绕过。** `CommonTownsfolkCampaignBehavior.cs:340/345/348/358/361` 直接写 `ActionSetCode.GenerateActionSetNameWithSuffix(monsterWithSuffix, false, "_villager")`、`"_villager_2"`、`"_villager_3"` 字面量，而不是用 `Villager1ActionSetSuffix` / `Villager2ActionSetSuffix` / `Villager3ActionSetSuffix`。**常量表是「值相同的可读别名」，不是唯一入口**——`Villager1ActionSetSuffix == Villager2ActionSetSuffix == "_villager"`，所以三个常量指向同一个值。
2. **`isFemale` 与 `agentData.AgentIsFemale` 联动。** 构造函数里 `.Monster(monsterWithSuffix)` / `.Age(...)` 只是设了外观，而 `AgentData.IsFemale(bool)` 会顺带把 `GenderOverriden` 置 `true`（顺带说一句，这是本类唯一一个**顺带设了别的标志位**的 fluent 方法，见 [AgentData](../AgentData) 页）。于是性别后缀和实际体型是一致的。
3. **`suffix` 参数是自由字符串。** 全树**没有一处**把常量名传进去过——所有调用点的第三个实参都是字面量。**常量表在这个版本里实际是纯文档。**

## 关键成员

`GenerateActionSetNameWithSuffix` 之外的 46 个常量按用途分组（括号内是这一组的成员数）：

| 组 | 常量 | 值 |
| --- | --- | --- |
| **战斗/地图/面部生成**（4 个） | `WarriorActionSetSuffix` / `MapActionSetSuffix` / `MapWithBannerActionSetSuffix` / `FaceGenActionSetSuffix` | `"_warrior"` / `"_map"` / `"_map_with_banner"` / `"_facegen"` |
| **年龄段（4 个）** | `ChildActionSetSuffix` / `Villager1ActionSetSuffix`·`Villager2ActionSetSuffix`·`Villager3ActionSetSuffix` | `"_child"` / `"_villager"` / `"_villager_2"` / `"_villager_3"` |
| **平民变体**（5 个） | `HideoutBanditActionSetSuffix` / `VillainActionSetSuffix` / `BeggarSuffix` / `DancerSuffix` / `PosesSuffix` | `"_hideout_bandit"` / `"_villain"` / `"_beggar"` / `"_dancer"` / `"_poses"` |
| **酒馆/店铺职务**（8 个） | `WarriorInTavernActionSetSuffix` / `VillagerInTavernActionSetSuffix` / `VillagerInAseraiTavernActionSetSuffix` / `WarriorInAseraiTavernActionSetSuffix` / `BarmaidActionSetSuffix` / `TavernKeeperSuffix` / `SellerSuffix` / `MusicianSuffix` | `"_warrior_in_tavern"` / `"_villager_in_tavern"` / `"_villager_in_aserai_tavern"` / `"_warrior_in_aserai_tavern"` / `"_barmaid"` / `"_tavern_keeper"` / `"_seller"` / `"_musician"` |
| **身份/社会地位**（5 个） | `LordActionSetSuffix` / `RuralNotableSuffix` / `GangLeaderBodyGuardSuffix` / `MerchantNotarySuffix` / `VillagerWithBackPackSuffix` | `"_lord"` / `"_villager_ruralnotable"` / `"_gangleader_bodyguard"` / `"_merchant_notary"` / `"_villager_with_backpack"` |
| **铁匠/守卫/传道**（4 个） | `WeaponsmithSuffix` / `GuardSuffix` / `UnarmedGuardSuffix` / `PreacherSuffix` | `"_weaponsmith"` / `"_guard"` / `"_unarmed_guard"` / `"_villager_preacher"` |
| **携带物动作（最多的一组，12 个）** | `VillagerWithBackPackSuffix` / `VillagerWithStaffSuffix` / `VillagerCarryOnShoulderSuffix` / `VillagerCarryAxeSuffix` / `WorkerCarryOnShoulderSuffix` / `VillagerCarryRightSideSuffix` / `VillagerCarryFrontSuffix` / `VillagerCarryFront2Suffix` / `VillagerCarryRightHandSuffix` / `VillagerCarryRightArmSuffix` / `VillagerCarryOverHeadSuffix` / `VillagerCarryOverHead2Suffix` | `"_villager_with_backpack"` / `"_villager_with_staff"` / `"_villager_carry_on_shoulder"` / `"_villager_carry_axe"` / `"_worker_carry_wood_on_shoulder"` / `"_villager_carry_right_side"` / `"_villager_carry_front"` / `"_villager_carry_front_v2"` / `"_villager_carry_right_hand"` / `"_villager_carry_right_arm"` / `"_villager_carry_over_head"` / `"_villager_carry_over_head_v2"` |
| **容器携带**（2 个） | `VillagerCarryBucketLeftHand` / `VillagerCarryFishBucketsLeftHand` | `"_villager_carry_bucket_on_lefthand"` / `"_villager_carry_fish_buckets"` |

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `GenerateActionSetNameWithSuffix` | `public static string GenerateActionSetNameWithSuffix(Monster monster, bool isFemale, string suffix)` | **本类唯一的逻辑**。产出 `"as_human" + 可选 `"_female"` + suffix`（`monster == null` 时）或 `"as_" + (BaseMonster 或 StringId) + 可选 `"_female"` + suffix`。`BaseMonster` 优先于 `StringId`，这是「怪物变体折叠回基础动画」的机制。`suffix` 允许传 `null`（字符串拼接会当作空串），但**不要传 null 给 `monster`**。 |
| 46 个 `const string` | `public const string XxxActionSetSuffix = "_xxx";` | 纯常量，`const` 意味着编译期内联——`ActionSetCode.GuardSuffix` 在编译后就是字面量 `"_guard"`，没有任何运行时依赖。**它们不校验名字是否存在**。因为 `const`，你可以在自己的 `switch` 或 `Dictionary` 键里直接用它们而无需担心 `static` 初始化顺序。 |

**几个常量名字面上带 `Suffix` 但值里没有对应词的坑位**，写代码前务必对一眼：`Villager1ActionSetSuffix`/`Villager2ActionSetSuffix`/`Villager3ActionSetSuffix` 三个里前两个值相同（都是 `"_villager"` / `"_villager_2"`），`Villager3ActionSetSuffix` 才是 `"_villager_3"`；`Villager2ActionSetSuffix` 在「年龄/平民」和「身份/社会地位」两组里各出现一次但值只有一个 `"_villager_2"`。

## 真实示例

给一个 NPC 生成点指定动作集（照抄 `GuardsCampaignBehavior.cs:386` 的形状）：

```csharp
public class MyGuardSpawner
{
    public LocationCharacter CreateGuard(AgentData agentData)
    {
        return new LocationCharacter(
            agentData,
            new LocationCharacter.AddBehaviorsDelegate(SandBoxManager.Instance.AgentBehaviorManager.AddStandGuardBehaviors),
            "sp_guard",
            true,
            0,
            ActionSetCode.GenerateActionSetNameWithSuffix(agentData.AgentMonster, agentData.AgentIsFemale, ActionSetCode.GuardSuffix),
            false, false, null, false, false, true, null, false);
    }
}
```

按性别分流的市民（`CommonTownsfolkCampaignBehavior.cs:358` 与 `:361` 的形状）：

```csharp
string actionSet;
if (townsman.IsFemale)
{
    // as_<monster>_female_villager
    actionSet = ActionSetCode.GenerateActionSetNameWithSuffix(monsterWithSuffix, townsman.IsFemale, ActionSetCode.Villager1ActionSetSuffix);
}
else
{
    // as_<monster>_villager_2
    actionSet = ActionSetCode.GenerateActionSetNameWithSuffix(monsterWithSuffix, townsman.IsFemale, ActionSetCode.Villager2ActionSetSuffix);
}
```

自造一个后缀（本类不限制 `suffix` 的内容，但**必须与你的动画动作集同名**）：

```csharp
// 你的动作集资产必须真的叫 as_human_merchant_female_blacksmith
string code = ActionSetCode.GenerateActionSetNameWithSuffix(null, true, "_blacksmith");
// 结果：as_human_female_blacksmith
if (code == "as_human_female_blacksmith")
{
    MBDebug.Print("[MyMod] 动作集名对上了");
}
```

`monster == null` 与怪物变体折叠这两种情形对照（前者是官方兜底路径，后者是 `BaseMonster` 优先的实际效果）：

```csharp
// 情况 A：传 null，走 "as_human" 分支
string a = ActionSetCode.GenerateActionSetNameWithSuffix(null, false, "_warrior");
// → "as_human_warrior"

// 情况 B：怪物有 BaseMonster，BaseMonster 优先
Monster variant = FaceGen.GetMonsterWithSuffix(CharacterObject.PlayerCharacter.Race, "_settlement_slow");
string b = ActionSetCode.GenerateActionSetNameWithSuffix(variant, true, "_villager");
// → "as_" + variant.BaseMonster + "_female_villager"，变体后缀被丢弃
```

## 风险与边界

- **名字对不上资源不会报错。** `GenerateActionSetNameWithSuffix` 只拼字符串，不查动画数据库。拼出一个不存在的动作集名 → agent 站在原地或回退默认动作，**没有任何异常、任何日志**。自定义后缀时先在资源里确认名字。
- **常量名与值不对应是常态，不是 bug。** `MerchantSuffix = "_villager_merchant"`、`TavernKeeperSuffix = "_tavern_keeper"`、`VillagerCarryBucketLeftHand = "_villager_carry_bucket_on_lefthand"`、`VillagerCarryFishBucketsLeftHand = "_villager_carry_fish_buckets"`（值里没有 `lefthand`）。**按名字猜值一定错，去看右侧。**
- **`Villager1ActionSetSuffix` 与 `Villager2ActionSetSuffix` 不代表「第一个/第二个村民动作」。** 它们是三代并存的动画变体：`_villager` / `_villager_2` / `_villager_3`，由 `CommonTownsfolkCampaignBehavior` 按人口密度随机挑一个。
- **常量在 1.3.0 实际未被使用。** 全树的调用点第三个实参**全是字面量**，没有一处传常量名。这意味着常量表与实际使用之间**没有编译期或运行期的一致性检查**——某个常量写错了值也不会有任何症状，因为没人用它。**自己用常量反而比照抄字面量更安全，因为你能一眼看到值。**
- **性别后缀的位置是固定的。** `as_<monster>_female_<suffix>`。写成 `as_<monster>_<suffix>_female` 无效。
- **`BaseMonster` 优先可能不是你想要的。** 如果你的 mod 给某个怪物注册了专属的带后缀动作集，`GenerateActionSetNameWithSuffix` 会把它折叠回基础怪物的名字，**你的专属动作集拿不到**。这种情况要绕过这个方法，自己拼完整字符串。
- **`const` 意味着没有运行时保护。** `const string` 在编译期内联，改了 `ActionSetCode.cs` 需要重编译所有 mod 才有效果。热重载/注入场景下这个「改动会立刻生效」的直觉是错的。
- **没有任何反向解析能力。** 想从 `"as_human_female_villager"` 反查出「这是市民」没有对应方法（`grep -rn "ActionSetCode" bannerlord-1.3.0/` 里除定义外只有拼接调用）。要反查只能自己写 `StartsWith` / `Contains` 链。
- **`VillagerCarryFront2Suffix` 的 `_v2` 是资源版本号不是规则版本。** 它对应动画资源的第二版，别名里的 `2` 是为了让常量名合法且可读。抄这个命名法做自定义时要注意别让名字和实际资源版本脱节。

## 跨版本提示

`ActionSetCode.cs` 在 `bannerlord-1.3.0/`（156 行 / 5282 字节）与 1.3.15、1.4.6、1.4.7、1.5.3 **四棵树 `grep -v Token` 逐行 diff 后完全一致**（md5 也一致：`98fff8ce…`）。**46 个常量的名字与值、`GenerateActionSetNameWithSuffix` 的三段拼接逻辑、`BaseMonster` 优先规则，全部跨 1.3 → 1.5 三个大版本零变化。**

`bannerlord-1.4.5/` 那棵树保存的是去掉了 `// Token:` 注释的精简版，只有 105 行 / 3638 字节——**存储格式差异，不是常量被删了**。

跨版本会变的是**调用点**：`SandBox/CampaignBehaviors/` 下各 `*CampaignBehavior` 的具体拼接组合（哪个生成点用哪个后缀）随城镇/派系内容量持续扩展，`CommonTownsfolkCampaignBehavior` 里已有 20+ 处调用，1.4.x 之后新增的派系与城镇会带来新的调用点与新的字面量后缀——**那些新后缀不会自动加进 `ActionSetCode`**（因为本类在 1.3.0 之后就没再动过）。看到官方代码里的 `"_xxx"` 字面量而常量表里没有对应项，就是这种情况。

## 依赖关系

- 唯一消费方：[LocationCharacter](../../campaign/LocationCharacter) 构造函数第 6 个形参 `string actionSetCode`（`LocationCharacter.cs:83`），决定了该 NPC 生成后播放哪套动画
- 拼接输入：[Monster](../Monster) 的 `BaseMonster` 与 `StringId` 决定 `as_` 后面的段，`FaceGen.GetMonsterWithSuffix` / `GetBaseMonsterFromRace` 产出的变体会被 `BaseMonster` 折叠
- 调用方群：`SandBox/CampaignBehaviors/` 下的 `CommonTownsfolkCampaignBehavior` / `CommonVillagersCampaignBehavior` / `GuardsCampaignBehavior` / `AlleyCampaignBehavior` / `BoardGameCampaignBehavior` / `ArenaMasterCampaignBehavior` / `BarberCampaignBehavior` / `ClanMemberRolesCampaignBehavior` / `PrisonBreakCampaignBehavior` 共 30+ 处调用点
- 同页搭配：[AgentData](../AgentData) 是 `LocationCharacter` 第 1 个形参，`.Monster(monsterWithSuffix)` 与 `.IsFemale(...)` 决定本类拼出来的怪物段与性别段
- 字符串查找：[Extensions](../Extensions) 所在程序集的 `string.IsNullOrEmpty` 判定 `BaseMonster` 是否可用，这是「回落到 `StringId`」的唯一分支
- 桶首页：[core-extra API 分区](../)