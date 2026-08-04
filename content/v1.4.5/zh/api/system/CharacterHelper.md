---
title: "CharacterHelper"
description: "CharacterHelper 是战役角色工具箱，集中处理角色死亡文本、外观随机、troop upgrade tree、装备可用性、编队搜索、任务角色注销和流浪者模板筛选。"
---
# CharacterHelper

**命名空间:** `Helpers`  
**模块:** `TaleWorlds.CampaignSystem`  
**类型:** `public static class CharacterHelper`  
**基类:** 无  
**源文件:** `bin/TaleWorlds.CampaignSystem/Helpers/CharacterHelper.cs`

## 一句话职责

它把 `CharacterObject`、`Hero`、`PartyBase` 和装备对象接到战役中的角色表现、troop tree、装备校验、编队查询与对象生命周期逻辑；大多数入口只计算或生成文本，`DeleteQuestCharacter` 则会真正注销对象。

## 心智模型

这是一个按调用场景分组的静态工具箱，不是角色仓库，也不替代 `KillCharacterAction`、升级 Action 或 `MBObjectManager`。表现类方法根据 Persona、Trait、派系和受伤状态返回姿态、面部 idle、颜色或 seed；troop 类方法遍历 `CharacterObject.UpgradeTargets`；装备方法读取 Skill、性别和物品旗标；任务角色方法才会从地点移除角色并调用 `ObjectManager.UnregisterObject`。

调用方必须区分“读规则”和“改世界”：`GetTroopTree`、`CanUseItem`、`GetDefaultWeapon` 等结果应在需要时重新计算，而 `DeleteQuestCharacter` 只能用于确认要从世界和 ObjectManager 移除的任务角色。`Campaign.Current`、`Game.Current` 和对应对象集合未建立时，不应提前缓存这些结果。

## 何时使用，何时不要用

- 用 `GetTroopTree`、`FindUpgradeRootOf` 和 `SearchForFormationInTroopTree` 查询升级树，不要手动递归 `UpgradeTargets` 造成不同的循环保护语义。
- 用 `CanUseItem` 获取带本地化失败原因的装备校验；真正装备、换人或消耗物品仍要走上层系统。
- 用 `GetPartyMemberFaceSeed`、`GetDefaultFaceSeed` 和姿态方法复现原生角色生成结果，不要把随机 seed 当作存档 ID。
- 只有在任务流程明确结束并确认对象不再需要时才调用 `DeleteQuestCharacter`；角色死亡、离队、被俘应使用相应 Action。

## 依赖关系

```text
CharacterObject / Hero / PartyBase / EquipmentElement
  -> CharacterHelper calculations and text
  -> AgentOrigins, troop upgrade, equipment UI, quest cleanup
  -> StringHelpers / MBObjectManager when text or unregistering is required
```

- 核心输入：[CharacterObject](../../campaign/CharacterObject)、[Hero](../../campaign/Hero)、[PartyBase](../../campaign/PartyBase) 和 [ItemObject](../../core-extra/ItemObject)。
- 文本与行为：[StringHelpers](../StringHelpers) · [Campaign](../../campaign/Campaign)。
- 破坏性生命周期：[MBObjectManager](../../campaign-ext/MBObjectManager)；不要用 helper 直接替代 [KillCharacterAction](../../campaign-ext/KillCharacterAction)。

## 公开成员

| 成员族 | 成员 | 用途与调用时机 |
|---|---|---|
| 死亡/声望文本 | `GetDeathNotification`、`GetReputationDescription` | 按 `KillCharacterActionDetail`、killer/victim 或 conversation text 生成 `TextObject`；依赖已注册 GameText 和角色上下文。 |
| 动态外观 | `GetDynamicBodyPropertiesBetweenMinMaxRange`、`GetDeterministicColorsForCharacter`、`GetFaceGeneratorFilter` | 从身体范围、派系/文化和 FaceGen behavior 计算外观输入；不写回角色。 |
| 对话外观 | `GetNonconversationPose`、`GetNonconversationFacialIdle`、`GetStandingBodyIdle`、`GetDefaultFaceIdle` | 根据 Persona、Trait、职业、受伤与地点状态返回原生动画/idle 名称。 |
| troop tree | `FindUpgradeRootOf`、`SearchForFormationInTroopTree`、`GetTroopTree` | 在 `UpgradeTargets` 图上查根、编队匹配或按 tier 深度优先遍历；返回查询结果，不执行升级。 |
| 装备校验 | `GetDefaultWeapon`、`CanUseItem` 两个 overload | 从五个基础装备槽寻找默认武器，并检查 Skill、性别、旗标和不可骑乘坐骑；带 `out TextObject reason` 的版本给 UI 失败原因。 |
| seed | `GetPartyMemberFaceSeed`、`GetDefaultFaceSeed` | 为 Agent origin 或角色生成提供稳定 seed；party index、角色 hash 和 rank 会影响结果。 |
| 任务/模板 | `DeleteQuestCharacter`、`GetRandomCompanionTemplateWithPredicate` | 前者移除地点角色并注销 ObjectManager 对象，后者从已注册流浪者模板中筛选随机项；两者都不是普通查询缓存。 |

## 真实示例

```csharp
using System.Linq;
using Helpers;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Party;

CharacterObject root = MobileParty.MainParty.MemberRoster.GetTroopRoster()
    .Select(entry => entry.Character)
    .FirstOrDefault(character => character.IsBasicTroop);

if (root != null)
{
    CharacterObject tierFour = CharacterHelper.GetTroopTree(root, minTier: 4f, maxTier: 4f).FirstOrDefault();
    bool hasFormation = CharacterHelper.SearchForFormationInTroopTree(root, FormationClass.Infantry);
}
```

装备校验应使用当前对象的真实装备元素：

```csharp
using Helpers;
using TaleWorlds.CampaignSystem;
using TaleWorlds.Core;
using TaleWorlds.Localization;

CharacterObject character = Hero.MainHero.CharacterObject;
EquipmentElement element = character.Equipment.GetEquipmentFromSlot(EquipmentIndex.Weapon0);
bool canUse = CharacterHelper.CanUseItem(character, element, out TextObject reason);
```

## 风险与存档边界

- `DeleteQuestCharacter` 会从 `LocationComplex` 移除角色并调用 `Game.Current.ObjectManager.UnregisterObject`。它不是死亡、解雇或离队 API，误用会让引用对象失效并影响存档加载。
- `GetTroopTree` 和 formation 搜索依赖 `UpgradeTargets` 图；不要对未注册或正在构建的 CharacterObject 结果做持久化，也不要假设所有树都无循环。
- `CanUseItem` 读取 `ItemObject.RelevantSkill`、性别旗标和 HorseComponent；传入空 Item 或不匹配的装备元素前应先检查。
- 外观 seed 和姿态由派系、Trait、地点和主队强度影响，不是稳定的角色身份键；存档或网络同步不要只保存这些计算值。
- `GetRandomCompanionTemplateWithPredicate` 可能在模板集合为空或筛选条件过窄时返回 null，调用方必须处理没有候选的情况。

## 版本注记

v1.4.5 的 `CanUseItem` 额外拒绝不可骑乘的 HorseComponent，并对三种 Dragon Banner 物品做特殊不可装备判断；不要只复制 Skill 检查。

## 导航

- [↑ API 系统索引](../)
- [↔ StringHelpers](../StringHelpers)
- [相关：CharacterObject](../../campaign/CharacterObject)
- [相关：Hero](../../campaign/Hero)
- [相关：KillCharacterAction](../../campaign-ext/KillCharacterAction)
