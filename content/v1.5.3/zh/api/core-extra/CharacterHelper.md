# CharacterHelper

**命名空间：** `Helpers`
**Type:** `public static class CharacterHelper`
**Source:** `TaleWorlds.CampaignSystem/Helpers/CharacterHelper.cs`

## 概述

CharacterHelper 是角色（`CharacterObject`）级别的静态工具集，解决「如何把一个角色的物理与表现属性翻译成模型能算的数值或动画系统能播的姿势」这一问题。它覆盖四类工作：表现层（体型范围、布料颜色、脸种子、对话姿势与表情 idle）、装备校验（能否穿戴、默认武器）、兵种树（升级根查找、编队搜索、树遍历）、以及角色生命周期（死亡通知、任务角色清理、随机同伴模板）。与 HeroHelper 的分工是：HeroHelper 管英雄的社会属性，CharacterHelper 管角色的物理与表现属性。

## 心智模型

把 CharacterHelper 想成「角色 → 表现层」的桥梁。它回答四类问题：这个角色长什么样（体型/颜色/脸种子）、怎么站（idle 动画字符串）、能不能穿这件装备、在兵种树里处于什么位置。它的核心模式是：先读角色的属性（职业、性别、特性、装备、所属队伍），再把它翻译成动画系统能识别的姿势字符串（如 `aggressive`、`demure`、`naval`）或模型能用的数值（如体型三元组、确定性颜色）。与 HeroHelper 站在同一个 `CharacterObject` 之上，但回答的问题不同：HeroHelper 问「这个英雄是谁、关系如何」，CharacterHelper 问「这个角色看起来怎样、能做什么动作」。

## 怎么用

### 怎么拿到它

静态类，直接 `CharacterHelper.方法名(...)` 调用。所有方法都要求调用方自己持有 `CharacterObject` 实例（通常来自 `CharacterObject.All`、`party.MemberRoster` 或 `Hero.CharacterObject`）。

### 典型用法

- 对话系统选择角色姿势时，用 `GetNonconversationPose` 与 `GetNonconversationFacialIdle`，它们按人格特性返回姿势与表情字符串。
- 检查角色能否装备某件物品时，用 `CanUseItem` 的三参数重载，失败时通过 `out TextObject reason` 拿到原因文本。
- 遍历某兵种的全部升级树时，用 `GetTroopTree`，它按 tier 过滤并广度优先返回所有节点。
- 查找某兵种的升级根时，用 `FindUpgradeRootOf`，它遍历所有基础兵种找包含目标的那一棵。

### 最容易踩的坑

- `CanUseItem` 的两参数重载丢弃原因文本，只有三参数重载才会填充 `out reason`；失败时 `reason` 为 null，成功时也为 null。
- `GetDeterministicColorsForCharacter` 对非英雄返回派系色（默认 4291609515U），对英雄按文化从 `CampaignData` 的布料色表里确定性取色——同一种子永远同色。
- `GetStandingBodyIdle` 会调用 `HeroHelper.WillLordAttack()` 作为副作用，不要在非对话上下文里调。
- `DeleteQuestCharacter` 会同时从定居点位置角色列表和 `ObjectManager` 注销角色，调用后角色对象不可再用。
- `GetRandomCompanionTemplateWithPredicate` 只从 `Occupation.Wanderer` 且 `IsTemplate` 的角色里选，自定义模板需要自己加 predicate。

## 关键成员

- **GetDeathNotification**（`CharacterHelper.cs:24`）— 生成角色死亡通知文本，按凶手与击杀细节分支。
- **GetDynamicBodyPropertiesBetweenMinMaxRange**（`CharacterHelper.cs:50`）— 在角色的体型属性范围内随机取年龄/体重/体格三元组。
- **GetReputationDescription**（`CharacterHelper.cs:67`）— 返回角色的声誉描述文本，从对话管理器取模板。
- **GetDeterministicColorsForCharacter**（`CharacterHelper.cs:78`）— 返回角色的确定性布料颜色对（主色/副色），英雄按文化色表取色。
- **GetFaceGeneratorFilter**（`CharacterHelper.cs:172`）— 返回战役行为的脸生成过滤器，无行为时返回 null。
- **GetNonconversationPose**（`CharacterHelper.cs:183`）— 返回角色对话外的姿势字符串，按人格/特性/性别分支（如 aggressive、demure、warrior2）。
- **GetNonconversationFacialIdle**（`CharacterHelper.cs:229`）— 返回角色对话外的表情 idle 字符串，按人格与特性分支（如 convo_normal、convo_grave）。
- **GetStandingBodyIdle**（`CharacterHelper.cs:313`）— 返回角色站立时的身体 idle 字符串，综合关系、优越感、人格、职业。
- **GetDefaultFaceIdle**（`CharacterHelper.cs:502`）— 返回角色默认表情 idle 字符串，按仁慈/慷慨特性与关系分支。
- **FindUpgradeRootOf**（`CharacterHelper.cs:703`）— 查找某兵种的升级根（最基础兵种），遍历所有基础兵种。
- **GetDefaultWeapon**（`CharacterHelper.cs:737`）— 返回角色装备槽中的默认武器（第一个有主武器的物品）。
- **CanUseItem**（`CharacterHelper.cs:752`）— 判断角色能否装备某物品的两参数重载，丢弃原因文本。
- **CanUseItem**（`CharacterHelper.cs:759`）— 三参数重载，检查技能难度、性别限制、龙旗与坐骑可骑乘性，失败时输出原因。
- **GetPartyMemberFaceSeed**（`CharacterHelper.cs:783`）— 按队伍索引、角色 StringId 与等级计算确定性的脸种子。
- **GetDefaultFaceSeed**（`CharacterHelper.cs:790`）— 返回角色默认脸种子，按等级索引。
- **SearchForFormationInTroopTree**（`CharacterHelper.cs:796`）— 在兵种树中搜索是否存在指定编队类别的兵种。
- **GetTroopTree**（`CharacterHelper.cs:813`）— 按 tier 范围广度优先遍历兵种升级树，返回所有节点。
- **DeleteQuestCharacter**（`CharacterHelper.cs:834`）— 删除任务角色：从定居点位置列表移除并从 ObjectManager 注销。
- **GetRandomCompanionTemplateWithPredicate**（`CharacterHelper.cs:849`）— 随机取一个流浪者模板角色，可附加 predicate 过滤。

## 真实示例

```csharp
// 检查角色能否装备某件物品，失败时拿到原因文本
TextObject reason;
bool canUse = CharacterHelper.CanUseItem(character, equipmentElement, out reason);
if (!canUse)
{
    Debug.Print($"无法装备: {reason}");
}

// 遍历某兵种的全部升级树（按 tier 过滤）
foreach (CharacterObject troop in CharacterHelper.GetTroopTree(baseTroop, 0f, 3f))
{
    Debug.Print($"兵种: {troop.StringId} (Tier {troop.Tier})");
}
```

## 参见

- ↔ [ItemHelper](../ItemHelper) — 装备物品工具，CanUseItem 的装备校验与 ItemHelper 的物品属性互补
- ↔ [GameModel](../GameModel) — 角色属性容器，CharacterHelper 的数值最终写进 GameModel
- ↔ [FeatHelper](../FeatHelper) — 角色特性效果，姿势/表情分支依赖特性等级

## 导航

- ↑ [API 参考](../../) —— 本版本 API 层入口：按任务找页的路径表
- ↑ [v1.5.3 首页](../../../) —— 19 个桶的完整缺口表与覆盖现状
- ↔ [模块地图](../../../architecture/module-map) —— 确认某个类型属于哪一桶
