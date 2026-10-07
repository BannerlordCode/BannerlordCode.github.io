---
title: "DefeatTheConspiracyQuest"
description: "第三阶段每个敌对王国对应一个战争进度任务：按城镇与总实力算战分数，降到初始值一半即弹出和谈窗口。"
---
# DefeatTheConspiracyQuest

**Namespace:** StoryMode.Quests.ThirdPhase
**Module:** StoryMode
**Type:** `public class DefeatTheConspiracyQuestBehavior.DefeatTheConspiracyQuest : StoryModeQuestBase`
**Base:** StoryModeQuestBase
**Source:** ThirdPhase/DefeatTheConspiracyQuestBehavior.cs

## 概述

第三阶段的最小工作单元：一个敌对王国对应一个实例，任务日志上是一根 0→100 的双向进度条，表示"这个王国的战分数相对它被强化后的水平降了多少"。战分数由城镇价值（城镇 3000、城堡 1000）与 `kingdom.CurrentTotalStrength` 相加得到。当战分数降到**初始战分数的一半**时，弹出和谈窗口；玩家接受就完成这个任务，不接受就等下一次机会。

## 心智模型

它由外层 `DefeatTheConspiracyQuestBehavior.InitializeFinalPhase()` 批量创建，任务 ID 是 `"defeat_the_conspiracy_quest_" + num`（`num` 从 0 递增），发布者是与玩家立场相反阵营的导师（帝国任务线上用 `AntiImperialMentor`），无时限。

它有一个**两段式战分数**：构造/开始时记录 `InitialWarScore`，随后由行为类在造完援军后调 `CalculateReinforcedWarScore()` 更新 `ReinforcedWarScore`。进度公式是 `(Reinforced - Current) / (Reinforced - Initial/2) * 100`，钳制在 ±100。分母可能为 0（Reinforced == Initial/2），此时会出现除零。

坑：这个除法**没有分母为 0 的保护**。在极端情况下（强化后战分数恰好等于初始值的一半）进度条会得到 `Infinity` 或 `NaN`，而 `UpdateCurrentProgress` 接受浮点转 int，可能得到 `int.MinValue`。第二个坑是 `UpdateWarProgressWithKingdom` 只在"不在地图事件中、不在攻城事件中、没被俘"时**弹出和谈**——也就是说玩家在野外遭遇战里永远拿不到和谈窗口，会被认为还在"打仗"。第三个，`OppositionData` 是 `[SaveableField(110)]`，而 `LastPeaceOfferDate` 初值为 `CampaignTime.Zero`（`ElapsedDaysUntilNow` 极大），所以第一个小时就能谈。

## 怎么用

### 怎么拿到它

`public class DefeatTheConspiracyQuest : StoryModeQuestBase` 声明在 `bannerlord-1.5.3/StoryMode/Quests/ThirdPhase/DefeatTheConspiracyQuestBehavior.cs:486`——**嵌套在 `DefeatTheConspiracyQuestBehavior` 内**，完整类型名 `DefeatTheConspiracyQuestBehavior.DefeatTheConspiracyQuest`。全文 947 行。

构造函数 `DefeatTheConspiracyQuest(string questId, Kingdom oppositionKingdom)`（约 `:613`），基类调用在**参数里就做了一次三目判断**：

```csharp
: base(questId,
       StoryModeManager.Current.MainStoryLine.IsOnImperialQuestLine
           ? StoryModeHeroes.ImperialMentor
           : StoryModeHeroes.AntiImperialMentor,
       CampaignTime.Never)
```

**注意 `questGiver` 不是直接传进来的，而是按主线立场现算的导师**（`:614`）——任务 id 也由外部给定。时限 `Never`。

**谁创建它**：宿主行为 `DefeatTheConspiracyQuestBehavior.InitializeFinalPhase()`（`:109`）末尾 `defeatTheConspiracyQuest.StartQuest();`（`:169`）。

存档定义 id 是 2（`DefeatTheConspiracyQuestBehaviorTypeDefiner.cs` 的 `DefineClassTypes` 登记，基数 16000）。

`RegisterEvents()`（`:851`）挂**四条**：`KingdomDestroyedEvent`（`:853` → `OnKingdomDestroyed`，`:807`）、`OnQuestCompletedEvent`（`:854` → `OnCampaignQuestCompleted`，`:870`）、`OnSettlementOwnerChangedEvent`（`:855` → `SettlementOwnerChanged`，`:880`）、`OnClanChangedKingdomEvent`（`:856` → `OnClanChangedKingdom`，`:860`）。**全部围绕「领土与王国归属变化」**——这就是战争分的更新来源。

战争分三层算：`HourlyTick()`（`:633`）→ `UpdateWarProgressWithKingdom()`（`:639`）→ `CalculateWarScoreForKingdom(Kingdom kingdom)`（`:824`）→ `GetWarScoreOfSettlement(Settlement settlement)`（`:836`）。外加一个公开方法 `public void CalculateReinforcedWarScore()`（`:903`）——**这是它唯一的公开方法**。

王国覆灭流程：`OnKingdomDefeated(Kingdom kingdom, bool makePeace = true)`（`:702`）→ `DefectClansOfKingdomToKingdom(Kingdom defectorKingdom, Kingdom targetKingdom)`（`:786`），并由 `InitializeKingdomDefeatedPopUp(Kingdom kingdom)`（`:654`）弹场景通知。

进度条量程常量 `private const int ProgressTrackerRange = 100;`（`:935`）。两个关键存档位：`_oppositionKingdom`（`[SaveableField(100)]`，`:938`→`:939`）与 `DefeatTheConspiracyQuestBehavior.OppositionData _oppositionData`（`[SaveableField(110)]`，`:942`→`:943`）。

### 典型用法

```csharp
// 1) 正常由宿主行为在终局初始化时创建
ThirdPhase third = StoryModeManager.Current.MainStoryLine.ThirdPhase;
if (third != null && third.OppositionKingdoms.Count > 0)
{
    DefeatTheConspiracyQuestBehavior.DefeatTheConspiracyQuest q =
        new DefeatTheConspiracyQuestBehavior.DefeatTheConspiracyQuest("defeat_conspiracy", third.OppositionKingdoms[0]);
    q.StartQuest();
}

// 2) 唯一的公开方法：重算加强后的战争分（源码 :903）
Debug.Print("ReinforcedWarScore=" + Campaign.Current
    .GetCampaignBehavior<DefeatTheConspiracyQuestBehavior>().ReinforcedWarScore);

// 3) 发布者按立场现算，不由外部传入
MainStoryLine line = StoryModeManager.Current.MainStoryLine;
Debug.Print("发布者=" + (line.IsOnImperialQuestLine
    ? StoryModeHeroes.ImperialMentor.Name : StoryModeHeroes.AntiImperialMentor.Name));

// 4) 战争分与终局封锁互相咬合
KingdomDecisionPermissionModel perm = Campaign.Current.Models.KingdomDecisionPermissionModel;
Debug.Print("敌对王国间禁止宣战（StoryModeKingdomDecisionPermissionModel）");

// 5) 读任务
QuestBase b = Campaign.Current.QuestManager.GetQuest<DefeatTheConspiracyQuestBehavior.DefeatTheConspiracyQuest>();
Debug.Print("id=" + b.QuestId + "，分类=" + b.SpecialQuestType);
```

### 最容易踩的坑

它的构造函数签名是 `(string questId, Kingdom oppositionKingdom)`——**没有 `Hero questGiver` 参数**，而基类调用里又现算了一个导师（`:614`）。所以 [SecondPhase](../SecondPhase) 那套 `Activator.CreateInstance(type, array)` 的反射路径**不能用于这个任务**（参数个数对不上），它只能由宿主行为直接 new。这两个类名字相近但注册路径完全不同：`DefeatTheConspiracyQuestBehavior` 在 `StoryModeSubModule.cs:84` 无条件注册，而任务本体由 `InitializeFinalPhase()`（`:109`）在终局初始化时创建。你 mod 里想在终局前预置这条任务，照抄 `CreateNextConspiracyQuest` 的反射写法会直接 `MissingMethodException`。

## 主要成员

- `public DefeatTheConspiracyQuest(string questId, Kingdom oppositionKingdom)`：任务 ID 由外部给定，`questGiver` 按立场选导师，`CampaignTime.Never`。`SetDialogs()`（空）+ `InitializeQuestOnCreation()`。
- `override TextObject Title`：带 `FACTION` 变量的目标王国名。
- `public void CalculateReinforcedWarScore()`：**必须在所有援军造完后由行为类调用**，把当前战分数写进 `_oppositionData.ReinforcedWarScore`。漏调它会让进度条分母失真。
- `protected override void OnStartQuest()`：建 `OppositionData`，`InitialWarScore = CalculateWarScoreForKingdom(...)`，`ReinforcedWarScore = 0f`，创建 0→100 的 `AddTwoWayContinuousLog`。
- `protected override void HourlyTick()`：**主循环**。调 `UpdateWarProgressWithKingdom()`。
- `private void UpdateWarProgressWithKingdom()`：算进度、更新日志、判断是否弹和谈（条件含 `CampaignTime.DaysInWeek` 冷却）。
- `private float CalculateWarScoreForKingdom(Kingdom kingdom)` / `private float GetWarScoreOfSettlement(Settlement settlement)`：城镇 3000、城堡 1000、村庄 0，再加王国总实力。
- `private void InitializeKingdomDefeatedPopUp(Kingdom kingdom)`：弹出和谈窗口。非帝国线且玩家自己是国王时**有两个按钮**（接受 / 拒绝），其他情况只有接受。
- `private void OnKingdomDefeated(Kingdom kingdom, bool makePeace = true)`：**任务收尾的核心分支**。帝国王国被打掉 → 剩余氏族倒向最近的非帝国王国（玩家自己的王国也可能成为目标）；非帝国王国被打掉 → 与玩家王国结和，如果已经没有别的敌对王国，则把所有帝国氏族倒向玩家王国。最后 `CompleteQuestWithSuccess()`。
- `private void DefectClansOfKingdomToKingdom(Kingdom defectorKingdom, Kingdom targetKingdom)`：逐个氏族改隶（玩家氏族用 `ApplyByLeaveKingdom`、佣兵用 `ApplyByJoinFactionAsMercenary`、其余 `ApplyByJoinToKingdom`），最后 `DestroyKingdomAction.Apply(defectorKingdom)`。
- `protected override void RegisterEvents()`：`KingdomDestroyedEvent`、`OnQuestCompletedEvent`（别人的任务完成时刷新进度并调 `ThirdPhase.CompleteThirdPhase`）、`OnSettlementOwnerChangedEvent`、`OnClanChangedKingdomEvent`。
- `private void OnKingdomDestroyed(Kingdom kingdom)`：**玩家支持王国被摧毁 → 立即失败**。
- `private const int ProgressTrackerRange = 100`。
- `[SaveableField(100)] _oppositionKingdom`、`[SaveableField(110)] _oppositionData`。

## 使用示例

```csharp
// 战分数：城镇/城堡定值 + 王国总实力
private float CalculateWarScoreForKingdom(Kingdom kingdom)
{
    float score = 0f;
    foreach (Settlement s in kingdom.Settlements) score += this.GetWarScoreOfSettlement(s);
    return score + kingdom.CurrentTotalStrength;
}

private float GetWarScoreOfSettlement(Settlement settlement)
{
    if (settlement.IsTown)   return 3000f;
    if (settlement.IsCastle) return 1000f;
    return 0f;
}

// 进度公式：注意分母 Reinforced - Initial/2 没有零保护
float current = this.CalculateWarScoreForKingdom(this._oppositionKingdom);
float reinforced = this._oppositionData.ReinforcedWarScore;
int pct = (int)MathF.Clamp((reinforced - current) / (reinforced - this._oppositionData.InitialWarScore / 2f) * 100f, -100f, 100f);
this._oppositionData.QuestLog.UpdateCurrentProgress(pct);
```

## 风险与边界

**进度公式的分母无零保护**，这是最容易出数值异常的地方。`HourlyTick` 里"不在战斗/攻城/被俘状态"这一前置条件意味着和谈窗口的弹出依赖玩家恰好处于和平状态，野外遭遇战连发时玩家会以为任务卡死。`OnKingdomDefeated` 会**销毁整个王国**并把它的所有氏族改隶到另一个王国——这是不可逆的大规模政治重写，如果 mod 改动了 `ThirdPhase.OppositionKingdoms` 的内容（比如加了非敌对王国），这里会把它也拆掉。`OnClanChangedKingdom` 的取消条件与第二阶段一致（只管离开，不管加入）。跨读档方面 `OppositionData` 四个字段全存档，但 `_oppositionKingdom` 与之分离存储（100/110），改 SaveId 会直接毁档。

## 依赖关系

- [DefeatTheConspiracyQuestBehavior（唯一创建者）](../DefeatTheConspiracyQuestBehavior)
- [DefeatTheConspiracyQuestBehaviorTypeDefiner（存档注册）](../DefeatTheConspiracyQuestBehaviorTypeDefiner)
- [ConspiracyProgressQuest（上一阶段留下的强度仪表盘）](../ConspiracyProgressQuest)
- [CampaignEvents（KingdomDestroyedEvent 等）](../../campaign/CampaignEvents)