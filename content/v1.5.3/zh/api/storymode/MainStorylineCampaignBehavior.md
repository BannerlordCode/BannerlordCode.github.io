---
title: "MainStorylineCampaignBehavior"
description: "主线角色状态守卫：保护剧情英雄不被随意处死、补齐玩家贵族身份、并在读旧存档时修补家族与龙旗的迁移状态。"
---
# MainStorylineCampaignBehavior

**Namespace:** StoryMode.GameComponents.CampaignBehaviors
**Module:** StoryMode
**Type:** `public class MainStorylineCampaignBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**Source:** `bannerlord-1.5.3/StoryMode/GameComponents/CampaignBehaviors/MainStorylineCampaignBehavior.cs`

## 概述

这个行为守着主线角色的「生死与归属」：谁不能被处决、玩家氏族何时升级为贵族、弟妹成年时补技能。更重要的是它承担了一段实打实的**存档迁移**——用 `MBSaveLoad.LastLoadedGameVersion` 判断存档来自哪个版本，然后针对 v1.3.13、v1.2.0、v1.2.9 三个版本分别修补玩家氏族贵族状态、家族成员状态、龙旗部件等旧数据。`SyncData` 是空实现，本行为完全无状态。

## 心智模型

**注册无条件**：`StoryModeSubModule.AddBehaviors` 第二行 `campaignGameStarter.AddBehavior(new MainStorylineCampaignBehavior())`。

**四个订阅**：

| 事件 | 处理 |
|---|---|
| `CanHeroDieEvent` | `CanHeroDie(Hero, KillCharacterActionDetail, ref bool)` |
| `OnClanChangedKingdomEvent` | `OnClanChangedKingdom(...)` |
| `HeroComesOfAgeEvent` | `OnHeroComesOfAge(Hero hero)` |
| `OnGameLoadFinishedEvent` | `OnGameLoadFinished()` —— 迁移入口 |

**`CanHeroDie` 的双重判定**，顺序有讲究：

1. 若 `hero == StoryModeHeroes.Radagos` 且教学已完成 且 没有进行中的 `RescueFamilyQuest` / `RebuildPlayerClanQuest` 且死因是 `KillCharacterActionDetail.Executed` → `result = true; return;`。这条**允许**处决（把叙事锁死，避免玩家在营救家人前把拉达戈斯处决掉导致任务失效）。
2. 若 `hero.IsSpecial` 且不是 `RadagosHenchman` 且主线未完成 → `result = false`。这条**禁止**所有剧情特殊角色死亡，RadagosHenchman 是唯一的例外。

**读档迁移的四段**（全部包在 `if (MBSaveLoad.IsUpdatingGameVersion)` 内）：

- 存档 < `v1.3.13.105456`：玩家氏族在有王国、非佣兵、非贵族时补 `IsNoble = true`；按 `FamilyRescued` 与任务状态修补弟妹状态；必要时检查兄长状态与总督身份。
- 存档 < `v1.2.0`：若 `FirstPhase.Instance.AllPiecesCollected` 且玩家背包里没有 `dragon_banner` 物品对象 → 调 `firstPhase.MergeDragonBanner()` 补发。
- 存档 < `v1.2.9.35367`：扫描背包里四项龙旗部件（`dragon_banner` / `dragon_banner_center` / `dragon_banner_dragonhead` / `dragon_banner_handle`）的非任务物品，逐个 `RemoveTroop` 式地减 1、加一个 `new EquipmentElement(item, null, null, true)`（即升级为任务物品）。

**这里是反射重灾区**：`HandlePlayerSiblingsStatesOnLoad` 通过

```
typeof(AgingCampaignBehavior).GetField("_heroesYoungerThanHeroComesOfAge", BindingFlags.Instance | BindingFlags.NonPublic)
```

拿到原版老化行为的私有字典并 `SetValue` 写回；`CheckPlayerSiblingsEducationStages` 同样用 `GetField("_previousEducations", ...)` 与 `GetMethod("OnHeroComesOfAge", BindingFlags.Instance | BindingFlags.NonPublic).Invoke(...)` 操作教育行为。**游戏更新改了这些私有成员名，这段迁移会静默失效**——`GetField` 返回 null，`field.GetValue` 直接 NRE。

**常见误用与坑**

- **反射无判空**：`HandlePlayerSiblingsStatesOnLoad` 里 `field.GetValue(campaignBehavior)` 前提是 `campaignBehavior != null` 且字段存在。任何一行不符就 NRE。
- **`CanHeroDie` 的 `return` 是提前退出**。Radagos 那条分支设了 `result = true` 就 `return`，不会再走后面的特殊角色保护——这是刻意的（否则拉达戈斯会被自己的规则锁死）。
- **`Hero.IsSpecial` 是一个大口袋**。所有被标为特殊的英雄在主线未完成时都不能死，包括 mod 加入的特殊角色。
- **`Sibling` 的 Naval 依赖**：`hero == StoryModeHeroes.LittleSister && !ModuleHelper.IsModuleActive("NavalDLC")`——只有没装海军 DLC 时妹妹才参与这套状态处理。
- **迁移只在 `IsUpdatingGameVersion` 为真时跑**。已经是当前版本的存档跳过全部逻辑。

## 主要成员

- `public override void RegisterEvents()`
  订阅四个事件。
- `public override void SyncData(IDataStore dataStore)`
  **空实现**，零字段。
- 私有 `CanHeroDie(Hero hero, KillCharacterAction.KillCharacterActionDetail causeOfDeath, ref bool result)`
  死亡许可判定。`result` 是引用参数，写 `false` 拒绝、`true` 允许。
- 私有 `OnClanChangedKingdom(Clan clan, Kingdom oldKingdom, Kingdom newKingdom, ChangeKingdomAction.ChangeKingdomActionDetail detail, bool showNotification = true)`
  玩家氏族因「创建王国」或「加入王国」而变更时，把 `Clan.PlayerClan.IsNoble` 置 true。
- 私有 `OnHeroComesOfAge(Hero hero)`
  弟妹（小弟/无海军 DLC 时的妹妹）成年时调 `StoryModeHelpers.SetPlayerSiblingsSkillsIfNeeded(hero)`。
- 私有 `OnGameLoadFinished()`
  三个版本的存档迁移总入口。
- 私有 `HandlePlayerSiblingsStatesOnLoad(Hero hero, bool isPlayerFamilyRescued)`
  弟妹状态修补，含反射操作 `AgingCampaignBehavior`。
- 私有 `CheckPlayerSiblingsEducationStages(Hero hero)`
  反射操作 `EducationCampaignBehavior`，必要时手动触发其私有的 `OnHeroComesOfAge`。
- 私有 `CheckStoryModeHeroStateAndUpdateIfNeeded(Hero hero)` / 静态 `CheckAndUpdateGovernorStatusOfStoryModeHero(Hero hero)`
  让剧情角色重新可交互、加入玩家氏族、必要时设为逃犯；并解除不匹配的总督任命。
- 私有 `GetSettlementToSpawnForPlayerRelative(Hero hero)`
  为剧情角色挑选重生聚落：优先其总督辖区，其次家乡（若与玩家不交战），其次玩家王国随机聚落，最后任一非交战聚落，退化到随机村庄。末尾的 `Village.All.GetRandomElement<Village>().Settlement` 无判空。

## 使用示例

```csharp
// 场景：mod 引入一个自己的「剧情特殊角色」，想在主线期间也受死亡保护
public class MySpecialHeroGuard : CampaignBehaviorBase
{
    private Hero _myCompanion;

    public override void RegisterEvents()
    {
        CampaignEvents.CanHeroDieEvent.AddNonSerializedListener(this, CanHeroDie);
        CampaignEvents.OnGameLoadFinishedEvent.AddNonSerializedListener(this, () =>
            _myCompanion = Hero.All.FirstOrDefault(h => h.StringId == "my_mod_hero"));
    }

    public override void SyncData(IDataStore dataStore)
    {
    }

    private void CanHeroDie(
        Hero hero,
        KillCharacterAction.KillCharacterActionDetail causeOfDeath,
        ref bool result)
    {
        // 注意 result 进来时是"是否允许"，写 false 才是拒绝
        if (hero != null && hero == _myCompanion
            && !StoryModeManager.Current.MainStoryLine.IsCompleted)
        {
            result = false;
        }
    }
}
```

## 风险与边界

- **无自身存档风险**：`SyncData` 空实现。但**它会修改别人的状态**——`Clan.PlayerClan.IsNoble`、`Hero.Clan`、`Hero.IsDisabled` 等都在存档里且由它改动。旧存档迁移一旦被你的 mod 抢先改了 `IsNoble`，这段迁移读到的是已改过的值，走 `!Clan.PlayerClan.IsNoble` 判定为 false 而跳过。
- **反射依赖私有成员名**：这是本层最大的升级风险。`_heroesYoungerThanHeroComesOfAge`、`_previousEducations`、`OnHeroComesOfAge` 任一改名，`OnGameLoadFinished` 的迁移分支就会 NRE，且只在**读旧存档**时暴露——日常开发中测不出来。
- **`GetCampaignBehavior<T>()` 的返回值在反射路径上未判空**：`AgingCampaignBehavior` / `EducationCampaignBehavior` 若被 mod 从行为列表里删掉，这里 NRE。
- **与其它 mod 的 Model/事件冲突**：`CanHeroDieEvent` 是 `ReferenceAction`，多个监听器写同一个 `ref bool` 时**后写的赢**（源码里 StoryMode 的写在前面，外层 mod 可以覆盖）。
- **`Hero.IsSpecial` 的全局影响**：任何把英雄标成 `IsSpecial` 的 mod 都会自动获得主线死亡保护，这可能不是它想要的。

## 依赖关系

- [CampaignBehaviorBase](../../campaign/CampaignBehaviorBase) — 行为基类，`SyncData` 空实现是合法路径
- [CampaignBehaviorManager](../../campaign-ext/CampaignBehaviorManager) — 调用 `RegisterEvents()` 并托管实例，反射路径上的 `GetCampaignBehavior<T>()` 目标
- [CampaignEvents](../../campaign/CampaignEvents) — `CanHeroDieEvent` / `OnClanChangedKingdomEvent` / `HeroComesOfAgeEvent` / `OnGameLoadFinishedEvent` 的来源
- [FirstPhaseCampaignBehavior](../FirstPhaseCampaignBehavior) — 启动 `RebuildPlayerClanQuest` 与 `BannerInvestigationQuest`，与本行为的拉达戈斯保护直接相关
- [StoryModeHeroDeathProbabilityCalculationModel](../StoryModeHeroDeathProbabilityCalculationModel) — 地图事件里的死亡概率模型，与本行为的事件级保护互补
- [sdk-overview](../../../architecture/sdk-overview) — SubModule 启动序列与条件注册的整体位置