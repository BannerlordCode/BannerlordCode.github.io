---
title: "BoardGameHelper"
description: "供战役行为、AI、任务和 Campaign 事件共享的桌游 AI 难度与最终结果枚举契约。"
---
# BoardGameHelper

**命名空间：** `Helpers`  
**模块：** `TaleWorlds.CampaignSystem`  
**类型：** `public static class BoardGameHelper`  
**基类：** `System.Object`  
**源文件：** `bin/TaleWorlds.CampaignSystem/Helpers/BoardGameHelper.cs`

## 一句话职责

`BoardGameHelper` 暴露两个公开枚举契约，供桌游 Campaign behavior、mission logic、AI、技能成长和 `OnPlayerBoardGameOverEvent` 共享。

## 心智模型

在 v1.4.5 中，`BoardGameHelper` 没有实例、方法或可变状态。它的价值在于两个带有稳定命名空间身份的枚举：

- `BoardGameHelper.AIDifficulty` 表示桌游 AI 等级：`Easy`、`Normal`、`Hard`。`NumTypes` 是计数/哨兵，用于数组大小或遍历，不是可玩的难度。
- `BoardGameHelper.BoardGameState` 表示桌游 mission 上报的最终结果：`None`、`Win`、`Loss`、`Draw`。`None` 是初始/未解决状态，不是应当发放胜利或失败奖励的结果。

SandBox 经常导入嵌套枚举，直接使用 `AIDifficulty` 或 `BoardGameState`。但公开身份仍是 `BoardGameHelper.AIDifficulty` 和 `BoardGameHelper.BoardGameState`，事件订阅者必须精确匹配事件的泛型参数。

## 什么时候使用，什么时候不要使用

- **适合：** 为 mission logic 选择桌游 AI 难度，或在 Campaign 事件收到桌游结果后分支处理。
- **适合：** 实现公开契约 `ISkillLevelingManager.OnBoardGameWonAgainstLord`，该契约接收 `BoardGameHelper.AIDifficulty`。
- **不要：** 把它当作工厂或服务；它没有 `Initialize`、`Current` 或实例状态。
- **不要把 `NumTypes` 当成第四种难度：** 它是哨兵/数量值。
- **不要从任何非 `None` 值推断胜利：** `Loss` 和 `Draw` 是明确且不同的结果，必须分别处理。

## 依赖关系

- 事件契约：[CampaignEvents](../../campaign/CampaignEvents) 发布带有 `Hero` 和 `BoardGameState` 参数的 `OnPlayerBoardGameOverEvent`。
- 参与者：[Hero](../../campaign/Hero) 表示事件中的对手领主，也作为技能成长对象。
- Mission 宿主：SandBox 的 `MissionBoardGameLogic` 保存当前难度和最终状态；`BoardGameHelper` 不拥有 mission 生命周期。
- AI 调用方：SandBox 桌游 AI 接收 `AIDifficulty`；难度影响走子选择，不是 Campaign 战斗难度。
- 成长调用方：`DefaultSkillLevelingManager` 按 `Easy`、`Normal` 和 `Hard` 分支处理桌游技能成长。

## 公开成员

### AIDifficulty

`AIDifficulty` 在 v1.4.5 中包含 `Easy`、`Normal`、`Hard` 和 `NumTypes`。前三个值会传给 `MissionBoardGameLogic.SetCurrentDifficulty` 和桌游 AI 构造过程；只有需要统计游戏等级数量时才使用 `NumTypes`。

```csharp
using Helpers;
using SandBox.BoardGames.MissionLogics;
using TaleWorlds.Library;
using TaleWorlds.MountAndBlade;

if (Mission.Current != null)
{
    MissionBoardGameLogic missionLogic = Mission.Current.GetMissionBehavior<MissionBoardGameLogic>();
    if (missionLogic != null)
    {
        missionLogic.SetCurrentDifficulty(BoardGameHelper.AIDifficulty.Hard);
    }
}
```

难度字段由 mission logic 持有；枚举只负责传递所选等级。

### BoardGameState

`BoardGameState` 在 v1.4.5 中包含 `None`、`Win`、`Loss` 和 `Draw`。`MissionBoardGameLogic` 在 mission 结算时改变状态，随后 `CampaignEvents.OnPlayerBoardGameOverEvent` 把最终状态和对手 [Hero](../../campaign/Hero) 一起发送。

```csharp
using Helpers;
using TaleWorlds.CampaignSystem;
using TaleWorlds.Library;

CampaignEvents.OnPlayerBoardGameOverEvent.AddNonSerializedListener(
    this,
    (Hero opposingHero, BoardGameHelper.BoardGameState state) =>
    {
        Debug.Print($"Board game against {opposingHero.Name}: {state}");
    });
```

应在 Campaign behavior 中订阅，并按该 behavior 生命周期清理。不要因为 mission 正在打开就发放结果，必须等待事件提供最终状态。

## 真实示例

下面的 behavior 形状示例直接使用公开事件和枚举身份，保持 `Draw`、`Loss` 与 `Win` 的区别。由于类型是 static 且没有构造流程，它不会创建 `BoardGameHelper`。

```csharp
using Helpers;
using TaleWorlds.CampaignSystem;
using TaleWorlds.Library;

public sealed class BoardGameResultListener
{
    public void Register()
    {
        CampaignEvents.OnPlayerBoardGameOverEvent.AddNonSerializedListener(
            this,
            OnBoardGameOver);
    }

    private void OnBoardGameOver(Hero opposingHero, BoardGameHelper.BoardGameState state)
    {
        switch (state)
        {
            case BoardGameHelper.BoardGameState.Win:
                Debug.Print($"Board game win against {opposingHero.Name}");
                break;
            case BoardGameHelper.BoardGameState.Loss:
                Debug.Print($"Board game loss against {opposingHero.Name}");
                break;
            case BoardGameHelper.BoardGameState.Draw:
                Debug.Print($"Board game draw against {opposingHero.Name}");
                break;
        }
    }
}
```

handler 自己拥有副作用；枚举契约只提供带类型的状态。真实 behavior 应按自己的注册/清理生命周期管理这个 non-serialized listener。

## 风险与存档边界

- **枚举契约：** 不要在需要兼容的 Mod 中随意重排或重编号；存档或网络值可能依赖 v1.4.5 的顺序。
- **哨兵值：** `AIDifficulty.NumTypes` 不是桌游 mission 或 AI 构造器可接受的 AI 等级。
- **事件时机：** `BoardGameState.None` 可能表示未结算/默认状态；奖励应在最终事件给出明确 `Win`、`Loss` 或 `Draw` 后处理。
- **生命周期所有权：** 难度和结果由 mission logic 持有，Campaign 事件是 non-serialized 的；不要保存 listener，也不要用缓存枚举替代受支持的 Campaign 状态。
- **边界：** 这些枚举描述桌游，不是 `CampaignOptions.CombatAIDifficulty` 或战斗 `DifficultyModel`。

## 版本注记

本页按 v1.4.5 `Helpers/BoardGameHelper.cs` 编写。文件本身只有两个嵌套枚举；所有 mission 转换、AI 行为、事件派发和技能奖励属于各自的 Campaign/SandBox 调用方。

## 导航

- [↑ API 系统索引](../)
- [相关：CampaignEvents](../../campaign/CampaignEvents)
- [相关：Hero](../../campaign/Hero)
- [相关：Campaign](../../campaign/Campaign)
