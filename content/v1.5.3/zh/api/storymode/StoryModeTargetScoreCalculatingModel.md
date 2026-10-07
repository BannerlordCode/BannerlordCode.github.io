---
title: "StoryModeTargetScoreCalculatingModel"
description: "AI 目标评分模型：教学阶段未完成时，敌方军队不再把教学村庄当作袭击目标。"
---
# StoryModeTargetScoreCalculatingModel

**Namespace:** StoryMode.GameComponents
**Module:** StoryMode
**Type:** `public class StoryModeTargetScoreCalculatingModel : TargetScoreCalculatingModel`
**Base:** `TargetScoreCalculatingModel`（继承自 `MBGameModel<TargetScoreCalculatingModel>`）
**Source:** `bannerlord-1.5.3/StoryMode/GameComponents/StoryModeTargetScoreCalculatingModel.cs`

## 概述

世界地图上 AI 军队会不断给候选目标打分——围城这座城多少分、劫掠那个村多少分、在境内巡逻多少分——然后奔最高分去。这个模型就是那套打分公式的总开关。StoryMode 的实现只有一个成员被改写：教学阶段未完成时，`Raider`（劫掠型）军队对教学村庄 `village_ES3_2` 的目标分返回 0。其余十一个成员（各类系数、巡逻分、当前目标价值）全部透传。

## 心智模型

注册方式 `campaignGameStarter.AddModel<TargetScoreCalculatingModel>(new StoryModeTargetScoreCalculatingModel())`。运行期由 AI 军队的决策循环调用：周期性枚举可达聚落 → 逐个算分 → 取最高 → 转向。返回 0 意味着这个候选目标得分为零，在有其它正分候选时**永远不会被选中**。

唯一改写的方法有四重判定，缺一不可：

```
missionType == Army.ArmyTypes.Raider            // 只针对劫掠型军队
&& targetSettlement != null
&& targetSettlement.StringId == "village_ES3_2" // 只针对教学村
&& TutorialPhase.Instance != null
&& !TutorialPhase.Instance.IsCompleted          // 只在教学期
→ return 0f
```

注意这里用的是 `TutorialPhase.Instance` 并**显式判了 null**，与 [StoryModeNotableSpawnModel](../StoryModeNotableSpawnModel) 用 `MainStoryLine.TutorialPhase` 的写法不同。两者读的是同一个阶段对象，判空差异只是防御风格。

五个透传属性（`TravelingToAssignmentFactor`、`BesiegingFactor`、`AssaultingTownFactor`、`RaidingFactor`、`DefendingFactor`）是各类军事行动的基础权重系数，AI 决策矩阵的骨架就在这里；改任何一个都会重塑全地图 AI 行为。

**顺序为什么重要**：StoryMode 层只改一个方法的返回值，其余全是透传，因此**链的层数不影响教学村保护**——只要你的层最终透传到底，StoryMode 那条 0 一定被尊重。反过来，若某个 mod 想让 AI 在教学期也去抢教学村，正确做法是自己在**外层**返回非 0，而不是指望改 `RaidingFactor` 能绕过——改系数不会绕过那个 `return 0f`。

**常见误用与坑**

- **`return 0f` 不是「低分」。** 在候选集里 0 分与负分等价，且只要没有任何正分候选，AI 可能反复选择 0 分目标而产生抖动。
- **只针对 `Raider` 类型。** `Besieger`（围城型）等其它 `Army.ArmyTypes` 不受保护，AI 军队照样可能围困教学村。
- **`village_ES3_2` 硬编码**，与 [StoryModeNotableSpawnModel](../StoryModeNotableSpawnModel) 是同一个字符串常量，两处独立硬编码。
- **透传属性是全局 AI 平衡旋钮**。别为了「让 AI 更聪明」随手调 `RaidingFactor`，那会同时影响主线后期和所有 mod 的 AI。
- **`CurrentObjectiveValue(MobileParty)` 透传**：它返回一支队伍「当前正在做的事」的价值，AI 用它做切换惩罚。你若在别处强制改队伍目标，这里不会同步。

## 怎么用

### 怎么拿到它

`public class StoryModeTargetScoreCalculatingModel : TargetScoreCalculatingModel` 声明在 `bannerlord-1.5.3/StoryMode/GameComponents/StoryModeTargetScoreCalculatingModel.cs:11`，全文 103 行，十一个 override，**十个是纯透传**。

注册点：`campaignGameStarter.AddModel<TargetScoreCalculatingModel>(new StoryModeTargetScoreCalculatingModel())`（`StoryModeSubModule.cs:94`），只在主线战役生效（`StoryModeSubModule.cs:23`→`:24`）。读用 `Campaign.Current.Models.TargetScoreCalculatingModel`。

透传清单：`TravelingToAssignmentFactor`（`:15`→`:19`）、`BesiegingFactor`（`:25`→`:29`）、`AssaultingTownFactor`（`:35`→`:39`）、`RaidingFactor`（`:45`→`:49`）、`DefendingFactor`（`:55`→`:59`）、`GetDefensivePatrollingFactor(bool isNavalPatrolling)`（`:64`）、`GetOffensivePatrollingFactor(bool)`（`:70`）、`CalculateDefensivePatrollingScoreForSettlement(Settlement, bool, MobileParty)`（`:76`）、`CalculateOffensivePatrollingScoreForSettlement(Settlement, bool, MobileParty)`（`:82`）、`CurrentObjectiveValue(MobileParty)`（`:88`）。

唯一带判断的是 `GetTargetScoreForFaction(Settlement targetSettlement, Army.ArmyTypes missionType, MobileParty mobileParty, float ourStrength)`（`:94`），条件是**四个都要成立**（`:96`）：`missionType == Army.ArmyTypes.Raider`、且 `targetSettlement != null`、且 `targetSettlement.StringId == "village_ES3_2"`、且 `TutorialPhase.Instance != null`、且 `!TutorialPhase.Instance.IsCompleted`。成立 `return 0f`（`:98`）。

注意这一条比其它模型多写了 `TutorialPhase.Instance != null`（`:96`）——**它是全模块少数几个显式判了转发属性为 null 的地方**。

### 典型用法

```csharp
// 运行期读
TargetScoreCalculatingModel score = Campaign.Current.Models.TargetScoreCalculatingModel;

// 复现原生判断：教学期不把掠夺目标指向教学村庄
Settlement village = Settlement.Find("village_ES3_2");
MobileParty raiders = Hero.MainHero.Party.Party;
bool tutorialDone = StoryModeManager.Current.MainStoryLine.TutorialPhase.IsCompleted;
float raiderScore = (!tutorialDone && village != null)
    ? 0f
    : score.GetTargetScoreForFaction(village, Army.ArmyTypes.Raider, raiders, 100f);
Debug.Print("教学村庄掠夺评分=" + raiderScore);

// 其它军队类型完全透传
Debug.Print("攻城评分=" + score.GetTargetScoreForFaction(village, Army.ArmyTypes.Siege, raiders, 100f));

// 各类系数原样透传
Debug.Print("行军系数=" + score.TravelingToAssignmentFactor
          + " 攻城=" + score.AssaultingTownFactor
          + " 掠夺=" + score.RaidingFactor);
```

### 最容易踩的坑

它把 `missionType == Army.ArmyTypes.Raider` 也写进了条件，所以教学村庄在**其它军队类型下分数照常**——`Besieging` 的 `Army` 打过来仍会把它当目标，只有 `Raider` 类型被屏蔽。反过来，你新建一支自定义军队类型（派生 `ArmyTypes`）去攻击教学村庄，这个模型同样不拦。屏蔽逻辑是按枚举值精确匹配的，不是「排除教学村庄」的通用规则。

## 主要成员

- `GetTargetScoreForFaction(Settlement targetSettlement, Army.ArmyTypes missionType, MobileParty mobileParty, float ourStrength)`
  给定目标聚落与军队类型，返回该目标的价值分。四个条件同时成立（Raider + `village_ES3_2` + 教学未完成）时返回 0f；否则透传。**AI 决策循环调用**。
- `TravelingToAssignmentFactor` / `BesiegingFactor` / `AssaultingTownFactor` / `RaidingFactor` / `DefendingFactor`（`float` 属性）
  五类行动的基础权重系数，透传。**AI 决策矩阵的骨架**。
- `GetDefensivePatrollingFactor(bool isNavalPatrolling)` / `GetOffensivePatrollingFactor(bool isNavalPatrolling)`
  防守/进攻巡逻的基础分，透传。
- `CalculateDefensivePatrollingScoreForSettlement(Settlement settlement, bool isTargetingPort, MobileParty mobileParty)` / `CalculateOffensivePatrollingScoreForSettlement(...)`
  针对具体聚落的巡逻得分，透传。
- `CurrentObjectiveValue(MobileParty mobileParty)`
  队伍当前目标的价值，用于「切换成本」，透传。

## 使用示例

```csharp
// 场景：教学期连围城型军队也一并保护教学村（扩到所有 ArmyTypes）
public class MyTargetScoreModel : TargetScoreCalculatingModel
{
    public override float GetTargetScoreForFaction(
        Settlement targetSettlement,
        Army.ArmyTypes missionType,
        MobileParty mobileParty,
        float ourStrength)
    {
        TutorialPhase phase = TutorialPhase.Instance;
        if (phase != null
            && !phase.IsCompleted
            && targetSettlement != null
            && targetSettlement.StringId == "village_ES3_2")
        {
            return 0f;   // 不限定 missionType
        }
        return base.BaseModel.GetTargetScoreForFaction(
            targetSettlement, missionType, mobileParty, ourStrength);
    }
}

protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    base.InitializeGameStarter(game, gameStarterObject);
    var starter = (CampaignGameStarter)gameStarterObject;
    starter.AddModel<TargetScoreCalculatingModel>(new MyTargetScoreModel());
}
```

## 风险与边界

- **无存档序列化风险**：模型无字段。
- **返回 0 不阻止 AI 手动指派**。若某个 mod 或任务直接给 AI 军队下 `SetMoveGoToSettlement` 指令，本模型管不着。
- **与 [StoryModeNotableSpawnModel](../StoryModeNotableSpawnModel) 的教学村保护是并行的两套**：一个管聚居生成的名望，一个管 AI 的攻击意图。两者都用 `village_ES3_2` 字面量，没有共享常量。
- **`Army.ArmyTypes` 是枚举匹配**。mod 若把 `Raider` 换掉或新增同类类型，保护不会自动覆盖。
- **五个透传属性的影响面是整个 AI 系统**：它们同时被玩家队伍与所有 AI 队伍使用。

## 依赖关系

- [CampaignGameStarter](../../campaign/CampaignGameStarter) — 模型注册入口
- [MBGameModel](../../core-extra/MBGameModel) — 十一个透传成员的落点
- [TutorialPhaseCampaignBehavior](../TutorialPhaseCampaignBehavior) — 教学阶段推进者，本模型读取其 `TutorialPhase.Instance`
- [StoryModeNotableSpawnModel](../StoryModeNotableSpawnModel) — 同样保护教学村 `village_ES3_2` 的另一层
- [StoryModeBanditDensityModel](../StoryModeBanditDensityModel) — 教学期限制的第三层，可对照阅读
- [module-map](../../../architecture/module-map) — StoryMode 模块的组成与依赖关系