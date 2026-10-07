---
title: "StoryModeHelpers"
description: "一个静态辅助方法：给剧情生成的家人角色补齐初始技能，避免他们因为技能全 0 而在战斗里躺平。"
---
# StoryModeHelpers

**Namespace:** StoryMode
**Module:** StoryMode
**Type:** `public static class StoryModeHelpers`
**Base:** `System.Object`（纯静态类）
**Source:** `bannerlord-1.5.3/StoryMode/StoryModeHelpers.cs`

## 概述

全类只有一个方法 `SetPlayerSiblingsSkillsIfNeeded(Hero hero)`，解决一个具体的坑：主线剧情会在战斗中生成主角的家人（哥哥、弟弟、妹妹），这些 `Hero` 是运行时用 `HeroCreator.CreateBasicHero` 造出来的，**技能值全是 0**，于是他们在战斗 AI 里表现得像木头。所以这个方法在「这个英雄一项技能都没有」时，用当前 `HeroCreationModel` 的默认值把它们重置一遍。

## 心智模型

调用时机由调用方决定，本类自己不注册任何事件。真实的两个调用点都在剧情 behavior 里：`MainStorylineCampaignBehavior` 和 `RescueFamilyQuestBehavior`——也就是**家人真正加入队伍并可能上战场的那一刻**。

方法内部的判据是「所有技能里是否存在一个值为 0 的」：

```csharp
bool needsReset = false;
foreach (SkillObject skill in Skills.All)
{
    if (hero.GetSkillValue(skill) == 0) { needsReset = true; break; }
}
```

注意是 `== 0` 而不是 `<= 0`，**负技能值不会触发重置**。一旦任一技能为 0，就走完整的重置流程。

重置流程分三步，顺序不能换：

1. `Campaign.Current.Models.HeroCreationModel.GetDefaultSkillsForHero(hero)` 取默认技能表。
2. `hero.ClearSkills()` 清空全部技能。
3. 逐项 `hero.HeroDeveloper.SetInitialSkillLevel(skill, value)` 写入，最后 `hero.HeroDeveloper.InitializeHeroDeveloper(CampaignOptions.AutoAllocateClanMemberPerks)` 分配氏族成员天赋点。

**坑（最要紧的一条）**：**这个判断是"要么全做要么全不做"，但重置是无差别的 `ClearSkills()`**。一个只被手动画师调低了一项技能（比如拳法调到 0）的正常英雄，进来就会被**清空全部技能**，包括他其它精心培养的属性。方法名里的 "IfNeeded" 只防住「全 0」这一种情况。

其它坑：

1. **`Campaign.Current` 与 `Models.HeroCreationModel` 无判空**。非战役状态下调用直接 NRE。
2. **依赖 `CampaignOptions.AutoAllocateClanMemberPerks`**，mod 改了这个选项，全队的技能重置行为都会变。
3. **`HeroDeveloper` 可能未初始化**：`SetInitialSkillLevel` 在 `HeroDeveloper` 为 null 时会崩。`ClearSkills` 是否顺带初始化 `HeroDeveloper`，源码没保证——这也是为什么 `ElderBrother` 在 `StoryModeHeroes` 里专门调了一次 `HeroDeveloper.ResetCharacterStats()`。
4. **`Skills.All` 每帧遍历**：在 `DailyTick` 里对一堆英雄调它就是纯浪费。这个方法只该在「角色刚被创建 / 刚加入队伍」时调一次。

## 怎么用

### 怎么拿到它

`public static class StoryModeHelpers` 声明在 `bannerlord-1.5.3/StoryMode/StoryModeHelpers.cs:10`，全文 36 行。静态类、**只有一个成员** `public static void SetPlayerSiblingsSkillsIfNeeded(Hero hero)`（`:13`）——所以「怎么拿到它」就是 `using StoryMode;` 后直接类名调用，不需要实例、不需要注册。

方法的形状是「探测 → 归零 → 重填」：

1. 探测：遍历 `Skills.All`（`:16`），一旦发现 `hero.GetSkillValue(skillObject) == 0`（`:18`）就置 `flag = true` 并 `break`（`:20`→`:21`）。**只要有一项技能为 0 就进入重建分支**，不是全零才重建。
2. 取默认值：`Campaign.Current.Models.HeroCreationModel.GetDefaultSkillsForHero(hero)`（`:26`）——**无判空**，`Campaign.Current` 与 `Models.HeroCreationModel` 任一为 null 就 NRE。
3. `hero.ClearSkills();`（`:27`）——先全清。
4. 逐项 `hero.HeroDeveloper.SetInitialSkillLevel(valueTuple.Item1, valueTuple.Item2)`（`:30`）。
5. `hero.HeroDeveloper.InitializeHeroDeveloper(CampaignOptions.AutoAllocateClanMemberPerks)`（`:32`）。

第 4 步依赖 `hero.HeroDeveloper` 已经存在——源码没有保证，只在 [StoryModeHeroes](../StoryModeHeroes) 的 `RegisterAll` 里给兄长显式调过一次 `HeroDeveloper.ResetCharacterStats()`（`StoryModeHeroes.cs:150`）作为前置。

唯一的调用方是 [MainStorylineCampaignBehavior](../MainStorylineCampaignBehavior) 的 `OnHeroComesOfAge`（`MainStorylineCampaignBehavior.cs:61`→`:65`）——且条件很窄：`hero == LittleBrother || (hero == LittleSister && !ModuleHelper.IsModuleActive("NavalDLC"))`（`:63`）。读档迁移路径 `HandlePlayerSiblingsStatesOnLoad` 也会调（`:173`）。

### 典型用法

```csharp
// 标准调用：英雄成年时、或读档迁移后
Hero brother = StoryModeHeroes.LittleBrother;
bool needsRebuild = false;
foreach (SkillObject skill in Skills.All)
{
    if (brother.GetSkillValue(skill) == 0) { needsRebuild = true; break; }
}
if (needsRebuild)
{
    StoryModeHelpers.SetPlayerSiblingsSkillsIfNeeded(brother);
    Debug.Print("已重填默认技能");
}

// 验证结果：重新扫一遍，看还有没有 0
foreach (SkillObject skill in Skills.All)
{
    Debug.Print(skill.StringId + "=" + brother.GetSkillValue(skill));
}

// 只在战役内安全：Campaign.Current 和 Models.HeroCreationModel 都无判空
Debug.Print("默认技能来源=" + Campaign.Current.Models.HeroCreationModel.GetDefaultSkillsForHero(brother).Count);
```

### 最容易踩的坑

它的触发条件是「**有任意一项技能为 0**」（`:18`），不是「全部为 0」。给兄长加一个新技能点、或某个 mod 新增了 `Skills.All` 里的技能项而新英雄没有该技能——只要有一格是 0，这个方法就会 `hero.ClearSkills()`（`:27`）把**已经练出来的全部技能清零**，然后按 `HeroCreationModel` 的默认值重填。玩家会突然发现自己的角色被洗点了，而且没有确认、没有提示。你在给剧情英雄改技能后必须重扫一遍，确认没有 0，否则下次调它就是一次洗点。

## 主要成员

- `static void SetPlayerSiblingsSkillsIfNeeded(Hero hero)`：唯一的成员。传入 null 会在 `hero.GetSkillValue` 处 NRE，**没有判空**。见上文心智模型的三步流程与陷阱。

本类**没有**其它字段、常量或属性。

## 使用示例

```csharp
// 1) 原生调用形态：在家人加入队伍时补技能
public override void OnQuestStarted(QuestBase quest, bool canceled)
{
    StoryModeHeroes.ElderBrother.HeroDeveloper.ResetCharacterStats();
    StoryModeHelpers.SetPlayerSiblingsSkillsIfNeeded(StoryModeHeroes.ElderBrother);
    AddHeroToPartyAction.Apply(StoryModeHeroes.ElderBrother, MobileParty.MainParty, true);
}

// 2) 只在「全技能为 0」时才重置：自己先判一次，避免误伤培养过的英雄
Hero recruit = CreateRecruit();
for (int i = 0; i < Skills.All.Count; i++)
{
    SkillObject skill = Skills.All[i];
    if (recruit.GetSkillValue(skill) != 0)
    {
        Debug.Print("已有技能，跳过重置：" + recruit.Name);
        return;
    }
}
StoryModeHelpers.SetPlayerSiblingsSkillsIfNeeded(recruit);

// 3) 看默认技能表长什么样（不改任何状态）
List<ValueTuple<SkillObject, int>> defaults =
    Campaign.Current.Models.HeroCreationModel.GetDefaultSkillsForHero(recruit);
foreach (ValueTuple<SkillObject, int> pair in defaults)
{
    Debug.Print(pair.Item1.Name + " = " + pair.Item2);
}
```

## 风险与边界

- **「任一技能为 0」就全清**：这是最危险的一点。培养过的英雄只要有一项技能为 0，整份技能表就没。调用前自己先确认是不是全新角色。
- **`Skills.All` 遍历有成本**：别放进 tick。`DailyTick` 里对 N 个英雄调它就是 N × 技能数 次调用。
- **无 null 守卫**：`hero` 为 null 直接 NRE。`Campaign.Current` 为 null（主菜单、非战役状态）同样 NRE。
- **依赖全局模型与选项**：`HeroCreationModel` 被 mod 覆盖、或 `CampaignOptions.AutoAllocateClanMemberPerks` 被改，重置结果随之变化。这是行为依赖配置而非硬编码的好事，也是不可预测的来源。
- **不是存档操作**：它改的是运行中的 `Hero`，能否持久化取决于这些英雄本身是否走存档序列化。剧情生成的家人是 `MBObjectManager` 对象，改动会随存档保存，但**重复调用是幂等的吗？**——不是：第二次调用时技能已非 0，会被跳过，所以实际幂等。

## 依赖关系

- [StoryModeHeroes](../StoryModeHeroes) — 被重置的那些家人 Hero 从这里取
- [MainStoryLine](../MainStoryLine) — 主线阶段的上下文，决定家人何时加入
- [StoryModeSubModule](../StoryModeSubModule) — 注册了会调用本方法的剧情 behavior