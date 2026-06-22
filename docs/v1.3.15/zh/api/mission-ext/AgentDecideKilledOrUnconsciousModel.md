<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `AgentDecideKilledOrUnconsciousModel`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AgentDecideKilledOrUnconsciousModel

**Namespace:** TaleWorlds.MountAndBlade.ComponentInterfaces
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class AgentDecideKilledOrUnconsciousModel : MBGameModel<AgentDecideKilledOrUnconsciousModel>`
**Base:** `MBGameModel<AgentDecideKilledOrUnconsciousModel>`
**File:** `TaleWorlds.MountAndBlade/ComponentInterfaces/AgentDecideKilledOrUnconsciousModel.cs`

## 概述

`AgentDecideKilledOrUnconsciousModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<AgentDecideKilledOrUnconsciousModel>(new MyAgentDecideKilledOrUnconsciousModel())` 注册，以改变其计算逻辑。

## 主要方法

### GetAgentStateProbability
```csharp
public abstract float GetAgentStateProbability(Agent affectorAgent, Agent effectedAgent, DamageTypes damageType, WeaponFlags weaponFlags, out float useSurgeryProbability)
```

## 使用示例

```csharp
// AgentDecideKilledOrUnconsciousModel (Model) 的典型用法
Game.Current.ReplaceModel<AgentDecideKilledOrUnconsciousModel>(new MyAgentDecideKilledOrUnconsciousModel());
```

## 参见

- [完整类目录](../catalog)