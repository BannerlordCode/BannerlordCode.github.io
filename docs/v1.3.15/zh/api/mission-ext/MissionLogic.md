# MissionLogic

## 类概述

| 项目 | 说明 |
|------|------|
| **命名空间** | TaleWorlds.MountAndBlade |
| **文件路径** | TaleWorlds.MountAndBlade/MissionLogic.cs |
| **基类** | MissionBehavior |
| **类型** | 抽象类 |

## 说明

`MissionLogic` 是任务逻辑的基类，继承自 `MissionBehavior`。用于实现游戏规则、胜负判定、特殊模式等任务级别的逻辑。

## 关键属性

| 属性 | 类型 | 说明 |
|------|------|------|
| BehaviorType | MissionBehaviorType | 返回 Logic |

## 关键方法

| 方法 | 返回值 | 说明 |
|------|--------|------|
| OnEndMissionRequest(out bool canLeave) | InquiryData | 请求结束任务时调用 |
| MissionEnded(ref MissionResult missionResult) | bool | 任务结束时调用，返回是否结束 |
| OnBattleEnded() | void | 战斗结束时调用 |
| ShowBattleResults() | void | 显示战斗结果 |
| OnRetreatMission() | void | 撤退时调用 |
| OnSurrenderMission() | void | 投降时调用 |
| OnAutoDeployTeam(Team team) | void | 自动部署队伍时调用 |
| GetExtraEquipmentElementsForCharacter(BasicCharacterObject character, bool getAllEquipments) | List | 获取额外装备 |
| OnMissionResultReady(MissionResult missionResult) | void | 任务结果准备就绪时调用 |

## 使用示例

```csharp
// 创建自定义任务逻辑
public class MyMissionLogic : MissionLogic
{
    public override bool MissionEnded(ref MissionResult missionResult)
    {
        // 检查自定义结束条件
        if (ShouldEndMission())
        {
            missionResult = MissionResult.CreateSuccessful();
            return true;
        }
        return false;
    }

    public override void OnBattleEnded()
    {
        // 战斗结束后的清理工作
    }
}

// 注册到任务
mission.AddMissionLogic(new MyMissionLogic());
```
