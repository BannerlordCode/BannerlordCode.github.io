---
title: "StoryModeNotableSpawnModel"
description: "城镇/村庄名望数量模型：教学阶段未完成时，教学村庄 village_ES3_2 一次名望都不生成。"
---
# StoryModeNotableSpawnModel

**Namespace:** StoryMode.GameComponents
**Module:** StoryMode
**Type:** `public class StoryModeNotableSpawnModel : NotableSpawnModel`
**Base:** `NotableSpawnModel`（继承自 `MBGameModel<NotableSpawnModel>`）
**Source:** `bannerlord-1.5.3/StoryMode/GameComponents/StoryModeNotableSpawnModel.cs`

## 概述

一个聚落该有多少名望（可交互的特殊角色），由 `NotableSpawnModel` 决定：给定聚落与职业，问它目标数量是多少，生成系统照此填充。StoryMode 只针对一个具体聚落开刀——教学用的村庄 `village_ES3_2`——在教学阶段未完成时把目标数量压到 0。这样玩家在教学村只能见到剧情安排的那一个村长，不会被一村的名望淹没。其它任何聚落、任何职业都走基类。

## 心智模型

注册方式 `campaignGameStarter.AddModel<NotableSpawnModel>(new StoryModeNotableSpawnModel())`。调用方是名望生成与再平衡流程，在聚落初始化时、以及每日刷新时会问。

判定只有一行条件组合：

```
!StoryModeManager.Current.MainStoryLine.TutorialPhase.IsCompleted
&& settlement.StringId == "village_ES3_2"
→ return 0
```

注意两点：

- **它用的是 `MainStoryLine.TutorialPhase` 而不是 `TutorialPhase.Instance`。** 两条路径读的是同一个对象（`MainStoryLine.TutorialPhase` 就是那个阶段实例），但 `TutorialPhase.Instance` 在别处被硬解引用而这里没有——这个模型不会因为阶段对象为 null 而 NRE，它只要求 `MainStoryLine` 可用。
- **教学村长是单独造的，不受本模型管。** [TutorialPhaseCampaignBehavior](../TutorialPhaseCampaignBehavior) 的 `CreateHeadman(Settlement)` 用 `HeroCreator.CreateNotable(Occupation.Headman, settlement)` 直接创建，随后把名字设成 "Orthos"。本模型返回 0 拦的是自动批量生成，不影响这一条显式创建。

教学阶段结束后的收尾逻辑在同一个行为的 `FinalizeTutorialPhase()` 里：它会先杀掉多余名望、给存活名望分配志愿兵，然后用 `Campaign.Current.Models.NotableSpawnModel.GetTargetNotableCountForSettlement(village.Settlement, Occupation.RuralNotable)` 查出应该有多少名望，再循环 `HeroCreator.CreateNotable(Occupation.RuralNotable, ...)` 把差额补齐。也就是说，**教学期的 0 只是延迟，终态由基类的目标数量决定**。

**顺序为什么重要**：这里返回的是一个数字（0），基类返回的是一个数字（N）。你的模型叠在上面时，`BaseModel` 是 StoryMode 的还是原版的决定了取谁的值。若你直接透传而不判空，就可能拿到 0 并把教学村永久变成空村。

**常见误用与坑**

- **硬编码聚落 id。** `village_ES3_2` 写死在源码里，没有常量共享，也没有多语言变体处理。mod 若重命名该聚落，这个分支永久失效。
- **只拦 RuralNotable 之外的查询吗？** 不是——本模型对任何 `Occupation` 都返回 0，只要处于教学期且聚落 id 匹配。传 `Occupation.Headman` 也会得 0，这一点在设计上是刻意的（村长是手工造的）。
- **返回 0 不会清除已有名望。** 它只影响「该生成多少」的查询。已经存在的名望要靠 [TutorialPhaseCampaignBehavior](../TutorialPhaseCampaignBehavior) 的 `KillCharacterAction.ApplyByRemove` 清理。
- **教学结束后本模型完全透明**，形同不存在。

## 怎么用

### 怎么拿到它

`public class StoryModeNotableSpawnModel : NotableSpawnModel` 声明在 `bannerlord-1.5.3/StoryMode/GameComponents/StoryModeNotableSpawnModel.cs:9`，全文 21 行，**全文只有一个 override**。

注册点：`campaignGameStarter.AddModel<NotableSpawnModel>(new StoryModeNotableSpawnModel())`（`StoryModeSubModule.cs:99`），只在主线战役生效（`StoryModeSubModule.cs:23`→`:24`）。读用 `Campaign.Current.Models.NotableSpawnModel`。

`GetTargetNotableCountForSettlement(Settlement settlement, Occupation occupation)`（`:12`）的唯一分支是 `!StoryModeManager.Current.MainStoryLine.TutorialPhase.IsCompleted && settlement.StringId == "village_ES3_2"`（`:14`）——**两个条件同时成立**才 `return 0`（`:16`）。不成立走 `base.BaseModel.GetTargetNotableCountForSettlement(settlement, occupation)`（`:18`）。

也就是说：**教学未完成期间，教学村庄 `village_ES3_2` 一个名望都不生成，其它村庄和教学完成后的这座村庄完全不受影响**。第二个参数 `occupation` 在分支里根本没用到。

调用方是名望生成与再平衡流程；教学阶段收尾时（`TutorialPhaseCampaignBehavior`）也会被主动调用来一次性补齐差额，所以教学结束后这座村庄的名望会一次性出现。

### 典型用法

```csharp
// 运行期读
NotableSpawnModel notable = Campaign.Current.Models.NotableSpawnModel;

// 复现原生判断
Settlement village = Settlement.Find("village_ES3_2");
bool tutorialDone = StoryModeManager.Current.MainStoryLine.TutorialPhase.IsCompleted;
if (!tutorialDone && village != null)
{
    Debug.Print("教学村庄目标名望数=" + notable.GetTargetNotableCountForSettlement(village, Occupation.Artisan));
}

// 教学结束后同一个查询恢复基类结果
Debug.Print("目标=" + notable.GetTargetNotableCountForSettlement(village, Occupation.Artisan)
          + "，另一村庄目标=" + notable.GetTargetNotableCountForSettlement(Settlement.Find("village_EP1_1"), Occupation.Farmer));

// mod 侧覆写：推广到更多村庄
public class MyNotableSpawnModel : NotableSpawnModel
{
    public override int GetTargetNotableCountForSettlement(Settlement settlement, Occupation occupation)
    {
        if (!StoryModeManager.Current.MainStoryLine.TutorialPhase.IsCompleted
            && settlement.StringId.StartsWith("village_ES"))
        {
            return 0;
        }
        return base.GetTargetNotableCountForSettlement(settlement, occupation);
    }
}
```

### 最容易踩的坑

它压的是**目标数量**而不是已有数量。教学未完成时返回 0，只意味着再平衡流程不会**新增**名望；已经存在的名望不会被清掉。你在教程阶段通过存档改数或 mod 往 `village_ES3_2` 塞了名望，教学期它们照常存在、照常交互，模型完全不管。想在教学期彻底清空这座村庄的名望，得自己遍历 `settlement.Notables` 显式移除，模型这一层做不到。

## 主要成员

- `GetTargetNotableCountForSettlement(Settlement settlement, Occupation occupation)`
  返回该聚落对该职业的目标名望数量。教学期 + `village_ES3_2` → 0；否则透传 `BaseModel`。**由名望生成/再平衡流程调用**；教学阶段收尾时也会被主动调用来补齐差额。

## 使用示例

```csharp
// 场景：教学村庄保留 2 个普通名望（不再完全清空，方便 mod 提供交互 NPC）
public class MyNotableSpawnModel : NotableSpawnModel
{
    public override int GetTargetNotableCountForSettlement(
        Settlement settlement, Occupation occupation)
    {
        if (!StoryModeManager.Current.MainStoryLine.TutorialPhase.IsCompleted
            && settlement.StringId == "village_ES3_2"
            && occupation == Occupation.RuralNotable)
        {
            return 2;
        }
        return base.BaseModel.GetTargetNotableCountForSettlement(settlement, occupation);
    }
}

protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    base.InitializeGameStarter(game, gameStarterObject);
    var starter = (CampaignGameStarter)gameStarterObject;
    starter.AddModel<NotableSpawnModel>(new MyNotableSpawnModel());
}
```

## 风险与边界

- **无存档序列化风险**：模型无字段。
- **教学阶段收尾的补齐逻辑读本模型的返回值**：`TutorialPhaseCampaignBehavior.FinalizeTutorialPhase()` 会按它循环创建名望。若你在教学期结束时改变了该聚落的目标数量，收尾会照着新数字创建——数量过大可能造成性能与经济异常。
- **教学村 id 硬编码的脆弱性**：与 [StoryModeBanditDensityModel](../StoryModeBanditDensityModel) 依赖 `IsPlayerInteractionRestricted` 不同，这里是精确字符串匹配，改名即失效。
- **只覆盖目标数量，不覆盖具体是哪几个名望**。哪个名望出现由生成系统的其它规则决定。
- **与 [StoryModeTutorialBoxCampaignBehavior](../StoryModeTutorialBoxCampaignBehavior) 的对话注册有隐式耦合**：教学村名望为 0 时，某些教程对话的触发对象只能落在手工创建的那一个身上。

## 依赖关系

- [CampaignGameStarter](../../campaign/CampaignGameStarter) — 模型注册入口
- [MBGameModel](../../core-extra/MBGameModel) — 透传落到 `BaseModel` 的机制
- [TutorialPhaseCampaignBehavior](../TutorialPhaseCampaignBehavior) — 手工创建教学村长、并在阶段收尾时按本模型的目标数量补齐名望
- [StoryModeBanditDensityModel](../StoryModeBanditDensityModel) — 同样服务于教学期限制的另一个模型，可对照阅读
- [module-map](../../../architecture/module-map) — StoryMode 模块的组成与依赖关系