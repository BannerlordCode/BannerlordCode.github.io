---
title: "Hero"
description: "Bannerlord 战役世界的核心角色对象：玩家、领主、同伴、家族成员的数据与行为入口。"
---
# Hero

**Namespace:** TaleWorlds.CampaignSystem  
**Module:** TaleWorlds.CampaignSystem  
**Type:** `public sealed class Hero : MBObjectBase, ITrackableCampaignObject, ITrackableBase, IRandomOwner`  
**Base:** `MBObjectBase`  
**File:** `TaleWorlds.CampaignSystem/Hero.cs`

## 概述

`Hero` 代表 Bannerlord 战役地图上的**一个具体角色**：玩家自己、各王国领主、流浪者/同伴、家族成员、商队首领等。它连接了三块最重要的战役数据：

- **外观与基础属性**（`CharacterObject`、`BodyProperties`、`Equipment`）
- **社会身份**（`Clan`、`Kingdom`、`Occupation`、`IsClanLeader`）
- **当前状态**（`PartyBelongedTo`、`CurrentSettlement`、`Gold`、`HeroState`）

几乎所有战役 mod 都会与 `Hero` 打交道：给玩家加钱、修改关系、让某个领主加入王国、让英雄怀孕或负伤等。

## 心智模型

把 `Hero` 当作**“战役世界里的角色卡片”**，而不是可渲染的 3D 模型：

- `Hero` 本身不处理战斗场景里的动作；进入战斗后，它会生成一个 `Agent` 作为战场化身。
- 角色卡片是**全局唯一**的：每个 `Hero` 对应一个 `stringId`，可以通过 `Hero.Find(stringId)` 拿到同一实例。
- 不要自己 `new Hero()`；创建新英雄走 `HeroCreator.CreateHero(...)` 或 `Hero.FindFirst`/`Hero.FindAll` 查询现有英雄。
- 修改英雄状态通常直接写属性（`Gold`、`Clan` 等）；影响生命值、技能、特性有专门方法（`ChangeHeroGold`、`AddSkillXp`、`SetTraitLevel`）。

## 如何获取 Hero

```csharp
// 玩家英雄
Hero main = Hero.MainHero;

// 当前对话对象（酒馆、领主大厅等一对一对话）
Hero talkTo = Hero.OneToOneConversationHero;

// 按 ID 精确查找
Hero arwa = Hero.Find("hero_arwa");

// 按条件查找第一个匹配的英雄
Hero woundedHero = Hero.FindFirst(h => h.IsWounded);

// 遍历所有存活英雄
foreach (Hero hero in Hero.AllAliveHeroes)
{
    if (hero.IsPlayerCompanion)
    {
        // ...
    }
}

// 从其他对象自然拿到 Hero
Hero leader = MobileParty.MainParty.LeaderHero;
Hero governor = Settlement.CurrentSettlement.Governor;
```

## 主要属性

| 属性 | 类型 | 说明 |
|------|------|------|
| `Name` | `TextObject` | 完整名称（含称号）。 |
| `FirstName` | `TextObject` | 名。 |
| `CharacterObject` | `CharacterObject` | 与该英雄绑定的人物模板；持有技能、装备槽、身体属性等。 |
| `Clan` | `Clan` | 所属家族；玩家家族是 `Clan.PlayerClan`。 |
| `Kingdom` | `Kingdom` | 所属王国（如果有）。 |
| `Occupation` | `Occupation` | 职业身份：领主、商贩、流浪者、强盗等。 |
| `Gold` | `int` | 当前携带金钱。 |
| `PartyBelongedTo` | `MobileParty` | 该英雄所在部队；玩家部队是 `MobileParty.MainParty`。 |
| `CurrentSettlement` | `Settlement` | 当前停留的据点（城镇/城堡/村庄），可为 `null`。 |
| `HomeSettlement` | `Settlement` | 家乡据点。 |
| `Spouse` | `Hero` | 配偶。 |
| `ExSpouses` | `List<Hero>` | 前配偶列表。 |
| `IsDead` / `IsWounded` / `IsPrisoner` / `IsFugitive` | `bool` | 生命状态标志。 |
| `IsClanLeader` | `bool` | 是否家族首领。 |
| `IsNoncombatant` | `bool` | 是否不能参战（如儿童、部分 NPC）。 |
| `CanLeadParty` | `bool` | 是否能统领军团。 |

## 主要方法

### 查询与遍历

#### `public static Hero Find(string stringId)`
按 `stringId` 获取唯一英雄实例；若不存在返回 `null`。

```csharp
Hero derthert = Hero.Find("lord_derthert");
if (derthert != null && !derthert.IsDead)
{
    InformationManager.DisplayMessage(new InformationMessage($"Found {derthert.Name}"));
}
```

#### `public static Hero FindFirst(Func<Hero, bool> predicate)`
返回满足条件的第一个英雄。适合写简单查询。

```csharp
Hero richLord = Hero.FindFirst(h => h.IsLord && h.Gold > 100000);
```

#### `public static IEnumerable<Hero> FindAll(Func<Hero, bool> predicate)`
返回所有满足条件的英雄。

```csharp
var playerFactionHeroes = Hero.FindAll(h => h.MapFaction == Hero.MainHero.MapFaction && h.IsAlive);
```

### 状态与关系

#### `public float GetRelation(Hero otherHero)`
返回与另一英雄的**个人关系**（-100 ~ 100）。

```csharp
int relation = Hero.MainHero.GetRelation(Hero.OneToOneConversationHero);
if (relation < -20)
{
    // 关系很差，可能需要贿赂或恐吓
}
```

#### `public void SetPersonalRelation(Hero otherHero, int value)`
直接设定两人关系值。会影响后续对话、任务、军团加入等判定。

```csharp
Hero.MainHero.SetPersonalRelation(someLord, 50); // 设为友好
```

#### `public bool CanLeadParty()`
判断该英雄是否能作为部队领袖（年龄、状态、职业等综合考虑）。

```csharp
Hero companion = Hero.FindFirst(h => h.IsPlayerCompanion && h.CanLeadParty());
if (companion != null)
{
    // 让他带一支新部队或商队
}
```

### 经济与影响力

#### `public void ChangeHeroGold(int changeAmount)`
为该英雄增减金钱；可传入负数以扣钱。

```csharp
Hero.MainHero.ChangeHeroGold(5000);   // 玩家加 5000
someLord.ChangeHeroGold(-1000);       // 扣该领主 1000
```

#### `public void AddInfluenceWithKingdom(float additionalInfluence)`
如果英雄有王国，为其增加影响力（ influence ）。

```csharp
Hero.MainHero.AddInfluenceWithKingdom(25f);
```

### 技能与特性

#### `public int GetSkillValue(SkillObject skill)`
查询某技能等级。

```csharp
int oneHanded = Hero.MainHero.GetSkillValue(DefaultSkills.OneHanded);
```

#### `public void AddSkillXp(SkillObject skill, float xpAmount)`
为某技能增加经验。

```csharp
Hero.MainHero.AddSkillXp(DefaultSkills.Riding, 1000f);
```

#### `public void SetSkillValue(SkillObject skill, int value)`
直接设置技能等级。

```csharp
Hero.MainHero.SetSkillValue(DefaultSkills.Leadership, 200);
```

#### `public int GetTraitLevel(TraitObject trait)`
获取某特性等级（如“仁慈”、“狡诈”）。

```csharp
int honor = Hero.MainHero.GetTraitLevel(DefaultTraits.Honor);
```

#### `public void SetTraitLevel(TraitObject trait, int value)`
设置特性等级。

```csharp
Hero.MainHero.SetTraitLevel(DefaultTraits.Mercy, 1);
```

### 生命周期

#### `public void MakeWounded(Hero killerHero = null, ...)`
使英雄负伤（不会死亡）。常用于事件、任务。

```csharp
Hero enemyLord = Hero.FindFirst(h => h.MapFaction.IsAtWarWith(Hero.MainHero.MapFaction));
enemyLord?.MakeWounded();
```

> 注意：彻底杀死英雄应使用 `KillCharacterAction.ApplyByOldAge(...)` 等专门 Action，而不是 `MakeWounded`。

#### `public void SetImmuneToWound(bool value)`
设置该英雄是否免疫负伤。

```csharp
Hero.MainHero.SetImmuneToWound(true); // 主角不会被打伤
```

## 典型用法示例

### 示例 1：给所有玩家家族成员加钱

```csharp
foreach (Hero hero in Clan.PlayerClan.Heroes)
{
    if (hero.IsAlive)
    {
        hero.ChangeHeroGold(1000);
    }
}
```

### 示例 2：让当前对话的领主与玩家关系变为 50

```csharp
Hero target = Hero.OneToOneConversationHero;
if (target != null && target.IsLord)
{
    Hero.MainHero.SetPersonalRelation(target, 50);
}
```

### 示例 3：提升主角某项技能一级对应的经验

```csharp
SkillObject skill = DefaultSkills.Trade;
int current = Hero.MainHero.GetSkillValue(skill);
int nextLevelXp = Campaign.Current.Models.CharacterDevelopmentModel.GetXpRequiredForLevel(current + 1);
int currentXp = Hero.MainHero.HeroDeveloper.GetSkillXpProgress(skill);
Hero.MainHero.AddSkillXp(skill, Math.Max(0, nextLevelXp - currentXp));
```

## 跨版本提示

- v1.3.0：基础 API 相同，但 `Hero.MainHero` 之前可能写作 `CharacterObject.PlayerCharacter.HeroObject`。
- v1.4.5：新增/拆分了部分 `HeroDeveloper` 与 `Hero.Skills` 相关访问；写跨版本 mod 时建议优先使用 `Hero.MainHero.HeroDeveloper`。

## 参见

- [CharacterObject](../CharacterObject/) — 英雄背后的模板数据
- [Clan](../Clan/) — 家族与英雄归属
- [Kingdom](../Kingdom/) — 王国与阵营
- [Settlement](../Settlement/) — 据点与城市
- [MobileParty](../MobileParty/) — 英雄所在部队
- [CampaignBehaviorBase](../../campaign-ext/CampaignBehaviorBase/) — 每日 tick 里批量操作 Hero
- [Campaign](../Campaign/) — 访问 `Campaign.Current` 拿到整个世界
