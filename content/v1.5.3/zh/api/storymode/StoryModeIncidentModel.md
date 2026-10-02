---
title: "StoryModeIncidentModel"
description: "世界事件触发概率模型：教学阶段未完成时，野外随机遭遇、围城期间、等待期间的事件概率一律为 0。"
---
# StoryModeIncidentModel

**Namespace:** StoryMode.GameComponents
**Module:** StoryMode
**Type:** `public class StoryModeIncidentModel : IncidentModel`
**Base:** `IncidentModel`（继承自 `MBGameModel<IncidentModel>`）
**Source:** `bannerlord-1.5.3/StoryMode/GameComponents/StoryModeIncidentModel.cs`

## 概述

野外游历时系统随机抛出的遭遇事件（劫匪、商队、领主遭遇等）由 `IncidentModel` 决定概率。StoryMode 的实现给三个触发时机加了同一道闸：`GetIncidentTriggerGlobalProbability`、`GetIncidentTriggerProbabilityDuringSiege`、`GetIncidentTriggerProbabilityDuringWait`——只要 `TutorialPhase.Instance.IsCompleted` 为 false，就返回 0。剩下两个成员（全局最小/最大冷却时间）原样透传，负责两次随机事件之间的间隔。

## 心智模型

注册方式 `campaignGameStarter.AddModel<IncidentModel>(new StoryModeIncidentModel())`。运行期由 `IncidentManager` 在三个不同的时刻分别询问：

| 调用时机 | 方法 | 场景 |
|---|---|---|
| 世界地图每日推进时 | `GetIncidentTriggerGlobalProbability` | 常规野外随机事件 |
| 玩家正在围城时 | `GetIncidentTriggerProbabilityDuringSiege` | 围城期间的额外事件 |
| 玩家在原地等待（`Wait`）时 | `GetIncidentTriggerProbabilityDuringWait` | 等待推进时间时的事件 |

冷却时间由 `GetMinGlobalCooldownTime()` / `GetMaxGlobalCooldownTime()` 提供，返回 `CampaignTime`，透传基类。这两个方法在 StoryMode 层没有被改动，因此**教学阶段的间隔逻辑仍然是原版的**——只是这段时间里所有触发概率都是 0，事件不会发生。

**顺序为什么重要**：本模型的三个覆写都是「先判教学阶段、再透传」的短路写法。你的模型叠在 StoryMode 之后时，若你的 `IsCompleted` 判定更宽松并返回了非 0 概率，事件就会重新出现；而 StoryMode 的层因为被跳过，不再提供任何保护。换句话说**外层可以单方面解除内层的禁令**。

**常见误用与坑**

- **`TutorialPhase.Instance` 在这里没有判空。** 三个覆写都直接解引用。主线流程被 mod 改写（例如跳过了教学阶段对象的创建）会导致 NRE。自行覆写时最好保留一层保护。
- **三个方法是各自独立的**，覆写其中一个不会影响另外两个。想完全关闭事件，三处都要处理，或者直接在外层返回 0 后就不再透传。
- **返回值是「触发概率」不是「权重」**。它参与最终的掷骰，返回 0 就是彻底不触发。
- **和强盗密度是两回事。** 藏身处与强盗队伍数量由 [StoryModeBanditDensityModel](../StoryModeBanditDensityModel) 控制；本模型管的是随机事件本身。

## 主要成员

- `GetIncidentTriggerGlobalProbability()`
  世界地图常规随机事件的全局触发概率。教学未完成返回 0，否则透传。
- `GetIncidentTriggerProbabilityDuringSiege()`
  围城期间的触发概率。教学未完成返回 0，否则透传。
- `GetIncidentTriggerProbabilityDuringWait()`
  等待推进时间时的触发概率。教学未完成返回 0，否则透传。
- `GetMinGlobalCooldownTime()` / `GetMaxGlobalCooldownTime()`
  返回 `CampaignTime`，全局事件的最小/最大冷却。透传。两次事件之间的间隔由这两个值夹出的区间随机决定。

## 使用示例

```csharp
// 场景：教学期仍然允许「商队」这类无害事件，但拦掉其它随机事件
public class MyIncidentModel : IncidentModel
{
    public override float GetIncidentTriggerGlobalProbability()
    {
        TutorialPhase phase = TutorialPhase.Instance;
        if (phase != null && !phase.IsCompleted)
        {
            // 教学期只给很低的概率，而不是彻底关闭
            return 0.05f;
        }
        return base.BaseModel.GetIncidentTriggerGlobalProbability();
    }

    public override CampaignTime GetMinGlobalCooldownTime()
    {
        // 教学期把冷却拉长，避免玩家被连续事件打断
        TutorialPhase phase = TutorialPhase.Instance;
        if (phase != null && !phase.IsCompleted)
        {
            return CampaignTime.DaysFromNow(3);
        }
        return base.BaseModel.GetMinGlobalCooldownTime();
    }
}

protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    base.InitializeGameStarter(game, gameStarterObject);
    var starter = (CampaignGameStarter)gameStarterObject;
    starter.AddModel<IncidentModel>(new MyIncidentModel());
}
```

## 风险与边界

- **无存档序列化风险**：模型无字段，不进存档。
- **`TutorialPhase.Instance` 的可空性是本层最脆的地方**：三个覆写都没有判空，任何绕过正常教学流程的 mod 都会在此处炸掉。覆写时保留判空是稳妥做法。
- **「教学期禁事件」不等于「教学期无遭遇」**：主线任务强制安排的战斗、藏身处任务不受本模型管辖，它们走任务系统。
- **多个 mod 叠加时，只要有一层给出非 0 概率，教学期的「安静」就没了**。这类教学体验类改动最好单点负责。
- **与 `Campaign.Current.Models` 的取用时机**：本模型是即时 getter，运行期随时可读，不要缓存返回值。

## 依赖关系

- [CampaignGameStarter](../../campaign/CampaignGameStarter) — `AddModel<IncidentModel>` 的注册位置
- [MBGameModel](../../core-extra/MBGameModel) — 冷却时间透传所依赖的 `BaseModel`
- [TutorialPhaseCampaignBehavior](../TutorialPhaseCampaignBehavior) — 教学阶段的实际推进者，`TutorialPhase.Instance` 的状态来源
- [StoryModeBanditDensityModel](../StoryModeBanditDensityModel) — 控制强盗与藏身处数量，是与本模型互补的另一道教学期限制
- [module-map](../../../architecture/module-map) — StoryMode 模块的组成与依赖