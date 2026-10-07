---
title: "StoryModeTroopSupplierProbabilityModel"
description: "藏身处伏击战敌方增援生成模型：教学期把拉达戈斯的出场概率压到 0.01，教学后压其跟班。"
---
# StoryModeTroopSupplierProbabilityModel

**Namespace:** StoryMode.GameComponents
**Module:** StoryMode
**Type:** `public class StoryModeTroopSupplierProbabilityModel : TroopSupplierProbabilityModel`
**Base:** `TroopSupplierProbabilityModel`（继承自 `MBGameModel<TroopSupplierProbabilityModel>`）
**Source:** `bannerlord-1.5.3/StoryMode/GameComponents/StoryModeTroopSupplierProbabilityModel.cs`

## 概述

藏身处伏击战不是一次打到底——敌方会按轮次增援，每次增援谁的概率由这个模型算。StoryMode 的实现只做一件事：调整两名剧情角色的增援概率。前置条件极窄——**必须在一个藏身处里**（`Settlement.CurrentSettlement.IsHideout`）且该藏身处有 `priorityTroops` 候选表。教学期把拉达戈斯的概率压到 0.01，教学结束后改为压他的跟班。

## 心智模型

注册方式 `campaignGameStarter.AddModel<TroopSupplierProbabilityModel>(new StoryModeTroopSupplierProbabilityModel())`。唯一覆写的方法 `EnqueueTroopSpawnProbabilitiesAccordingToUnitSpawnPrioritization(...)` 在藏身处任务的每一轮增援前被调用。基类先把概率条目 `ValueTuple<FlattenedTroopRosterElement, MapEventParty, float>` 追加到 `priorityList`，StoryMode 在追加之后遍历这个列表改概率。

整个方法体的结构值得逐句读：

1. `int count = priorityList.Count;` —— 在基类调用**之前**记下长度，用来划出「本次新增的区间」。
2. 调 `base.BaseModel.EnqueueTroopSpawnProbabilities...`，让它把概率追加进去。
3. `Settlement currentSettlement = Settlement.CurrentSettlement;` 与两个前置判定。
4. **教学分支**：从 `count` 往后遍历（只看本次新增的条目），若某条目的 `Troop` 是 `StoryModeHeroes.Radagos.CharacterObject` 且候选表里**没有**拉达戈斯本人（`priorityTroops.All<FlattenedTroopRosterElement>(t => t.Troop != character2)`），把该条目概率改成 `0.01f` 并 `return`。
5. **教学后分支**：从 `0` 遍历整个列表，对 `StoryModeHeroes.RadagosHenchman.CharacterObject` 做同样的处理。

`0.01f` 不是 0——是「几乎不可能，但仍保留理论上的出现」。改完后立刻 `return`，不再检查后续条目。

**顺序为什么重要**：`priorityList` 是**累积**的容器，`count` 这个快照是本次与历史的分界。教学分支只看本次新增，教学后分支看全部——这是源码里刻意的差异，因为教学后的压低需要追溯到可能更早入队的条目。

**常见误用与坑**

- **`0.01f` 与 0 的差别很重要。** 用 0 会让「该条目不存在」，某些增援 UI/AI 会认为候选表不完整；用 0.01f 保留结构。覆写时改成 0 可能引发意外的空候选处理。
- **两个分支都只处理一个条目就 `return`。** 如果列表里有多条同名条目，只有第一条被改。
- **要求 `priorityTroops` 全部不含该角色。** 若藏身处模板本身就把拉达戈斯排进了候选，压低不会生效——那个判定是 `All(t => t.Troop != character)`。
- **不是藏身处则完全不干预。** 野外遭遇战、村庄战斗的增援走基类。
- **`Settlement.CurrentSettlement` 在藏身处任务里才有意义。** 增援生成发生在任务上下文；自行在别处调用会得到 null，静默跳过全部逻辑。

## 怎么用

### 怎么拿到它

`public class StoryModeTroopSupplierProbabilityModel : TroopSupplierProbabilityModel` 声明在 `bannerlord-1.5.3/StoryMode/GameComponents/StoryModeTroopSupplierProbabilityModel.cs:14`，全文 49 行，**全文只有一个 override**。

注册点：`campaignGameStarter.AddModel<TroopSupplierProbabilityModel>(new StoryModeTroopSupplierProbabilityModel())`（`StoryModeSubModule.cs:105`），只在主线战役生效（`StoryModeSubModule.cs:23`→`:24`）。读用 `Campaign.Current.Models.TroopSupplierProbabilityModel`。

`EnqueueTroopSpawnProbabilitiesAccordingToUnitSpawnPrioritization(MapEventParty battleParty, FlattenedTroopRoster priorityTroops, bool includePlayers, int sizeOfSide, bool forcePriorityTroops, List<ValueTuple<FlattenedTroopRosterElement, MapEventParty, float>> priorityList)`（`:17`）是**在基类跑完之后改一个具体条目**，不是取代它：

1. 先记下原长度 `int count = priorityList.Count;`（`:19`）
2. `base.BaseModel.EnqueueTroopSpawnProbabilitiesAccordingToUnitSpawnPrioritization(...)`（`:20`）把整张概率表填好
3. 取 `Settlement currentSettlement = Settlement.CurrentSettlement;`（`:21`），条件是 `currentSettlement != null && currentSettlement.IsHideout && priorityTroops != null`（`:22`）——**只有藏身处战斗才管**

教学期（`!TutorialPhase.IsCompleted`，`:24`）走 `for (int i = count; i < priorityList.Count; i++)`（`:26`），**只看基类新加的条目**；教学后走 `for (int j = 0; j < priorityList.Count; j++)`（`:37`），**遍历整张表**。两者命中后都把该条目的 float 从原值改成 `0.01f`（`:31`、`:42`）然后 `return`——**立刻返回，不再看后续条目**。

触发角色也不同：教学期是 `StoryModeHeroes.Radagos`（`:29`），教学后是 `StoryModeHeroes.RadagosHenchman`（`:40`）。命中条件都额外要求 `priorityTroops.All(t => t.Troop != character)`（`:29`、`:40`）——即**候选名单里本来就没有他本人**，只是基类把剧情 NPC 当增援加进了概率表。

### 典型用法

```csharp
// 运行期读：战斗生成增援时调用的就是这个
TroopSupplierProbabilityModel supplier = Campaign.Current.Models.TroopSupplierProbabilityModel;

// 打印一遍教学期会压低的角色
Hero radagos = StoryModeHeroes.Radagos;
Debug.Print("拉达戈斯 CharacterObject=" + radagos.CharacterObject.StringId);

// 教学后换成跟班
Debug.Print("跟班=" + StoryModeHeroes.RadagosHenchman.CharacterObject.StringId);

// mod 侧覆写：把 0.01f 改成别的，或换成别的剧情 NPC
public class MyTroopSupplierModel : TroopSupplierProbabilityModel
{
    public override void EnqueueTroopSpawnProbabilitiesAccordingToUnitSpawnPrioritization(
        MapEventParty battleParty, FlattenedTroopRoster priorityTroops, bool includePlayers,
        int sizeOfSide, bool forcePriorityTroops,
        List<ValueTuple<FlattenedTroopRosterElement, MapEventParty, float>> priorityList)
    {
        int count = priorityList.Count;
        base.EnqueueTroopSpawnProbabilitiesAccordingToUnitSpawnPrioritization(
            battleParty, priorityTroops, includePlayers, sizeOfSide, forcePriorityTroops, priorityList);
        Settlement here = Settlement.CurrentSettlement;
        if (here == null || !here.IsHideout || priorityTroops == null) return;
        for (int i = count; i < priorityList.Count; i++)
        {
            if (priorityList[i].Item1.Troop == StoryModeHeroes.Radagos.CharacterObject)
            {
                priorityList[i] = new ValueTuple<FlattenedTroopRosterElement, MapEventParty, float>(
                    priorityList[i].Item1, priorityList[i].Item2, 0.0001f);
                return;                       // 源码在 :32 就 return，别继续遍历
            }
        }
    }
}
```

### 最容易踩的坑

它命中一个条目后**立刻 `return`**（`:32`、`:42`），所以只会压低**第一个**匹配条目。教学期用的是 `i = count` 起的循环（`:26`），只扫基类新增的部分——如果你在调用前把 `priorityList` 预填了条目，`count` 之前那些永远不会被处理。教学后的 `j = 0` 全表扫描（`:37`）则会改到**基类原有的条目**上，此时你看到的概率变化可能与「剧情 NPC 增援」毫无关系。

## 主要成员

- `EnqueueTroopSpawnProbabilitiesAccordingToUnitSpawnPrioritization(MapEventParty battleParty, FlattenedTroopRoster priorityTroops, bool includePlayers, int sizeOfSide, bool forcePriorityTroops, List<ValueTuple<FlattenedTroopRosterElement, MapEventParty, float>> priorityList)`
  唯一的覆写。先让基类追加，再在藏身处场景下按教学阶段调整两条剧情角色的概率。**由藏身处伏击战的增援流程调用**；`priorityList` 是输出容器不是返回值，调用方持有它。

## 使用示例

```csharp
// 场景：教学期同时压低拉达戈斯与其跟班（两个都要改，源码只改一个）
public class MyTroopSupplierModel : TroopSupplierProbabilityModel
{
    public override void EnqueueTroopSpawnProbabilitiesAccordingToUnitSpawnPrioritization(
        MapEventParty battleParty,
        FlattenedTroopRoster priorityTroops,
        bool includePlayers,
        int sizeOfSide,
        bool forcePriorityTroops,
        List<ValueTuple<FlattenedTroopRosterElement, MapEventParty, float>> priorityList)
    {
        int count = priorityList.Count;
        base.BaseModel.EnqueueTroopSpawnProbabilitiesAccordingToUnitSpawnPrioritization(
            battleParty, priorityTroops, includePlayers,
            sizeOfSide, forcePriorityTroops, priorityList);

        Settlement currentSettlement = Settlement.CurrentSettlement;
        if (currentSettlement == null || !currentSettlement.IsHideout || priorityTroops == null)
        {
            return;
        }

        if (!StoryModeManager.Current.MainStoryLine.TutorialPhase.IsCompleted)
        {
            for (int i = count; i < priorityList.Count; i++)
            {
                CharacterObject troop = priorityList[i].Item1.Troop;
                bool isRadagos = troop == StoryModeHeroes.Radagos.CharacterObject;
                if (isRadagos && priorityTroops.All<FlattenedTroopRosterElement>(t => t.Troop != troop))
                {
                    priorityList[i] = new ValueTuple<FlattenedTroopRosterElement, MapEventParty, float>(
                        priorityList[i].Item1, priorityList[i].Item2, 0.01f);
                    break;   // 用 break 而不是 return，才有机会继续压跟班
                }
            }
        }
    }
}
```

## 风险与边界

- **无存档序列化风险**：模型无字段；`priorityList` 由调用方持有，不进存档。
- **改写 `priorityList` 是就地修改**，不是返回新集合。覆写时若忘记把基类结果放回去，等于清空候选表。
- **`ValueTuple` 的三个 Item 顺序固定**：`<FlattenedTroopRosterElement, MapEventParty, float>`，第三个才是概率。写错位置会静默改变语义。
- **教学分支与教学后分支的目标角色不同**（拉达戈斯 vs 他的跟班），且遍历区间不同（本次新增 vs 全部）。改这段代码前务必确认自己在改哪个分支。
- **依赖 `StoryModeHeroes` 的静态引用**：与 [StoryModeHeroDeathProbabilityCalculationModel](../StoryModeHeroDeathProbabilityCalculationModel) 一样用引用比较，替换 hero 实例即失效。

## 依赖关系

- [CampaignGameStarter](../../campaign/CampaignGameStarter) — 模型注册入口
- [MBGameModel](../../core-extra/MBGameModel) — 基类实现追加概率条目的落点
- [StoryModeBattleRewardModel](../StoryModeBattleRewardModel) — 藏身处/地图事件的战利品与俘虏规则
- [StoryModeAgentDecideKilledOrUnconsciousModel](../StoryModeAgentDecideKilledOrUnconsciousModel) — 战斗内 Agent 死亡判定，保护的是同一批剧情角色
- [module-map](../../../architecture/module-map) — StoryMode 模块的组成与依赖关系