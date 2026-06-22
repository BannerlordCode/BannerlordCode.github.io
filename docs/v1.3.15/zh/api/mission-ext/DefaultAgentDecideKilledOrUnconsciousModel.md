<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultAgentDecideKilledOrUnconsciousModel`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultAgentDecideKilledOrUnconsciousModel

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DefaultAgentDecideKilledOrUnconsciousModel : AgentDecideKilledOrUnconsciousModel`
**Base:** `AgentDecideKilledOrUnconsciousModel`
**File:** `TaleWorlds.MountAndBlade/DefaultAgentDecideKilledOrUnconsciousModel.cs`

## 概述

`DefaultAgentDecideKilledOrUnconsciousModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<DefaultAgentDecideKilledOrUnconsciousModel>(new MyDefaultAgentDecideKilledOrUnconsciousModel())` 注册，以改变其计算逻辑。

## 主要方法

### GetAgentStateProbability
```csharp
public override float GetAgentStateProbability(Agent affectorAgent, Agent effectedAgent, DamageTypes damageType, WeaponFlags weaponFlags, out float useSurgeryProbability)
```

## 使用示例

```csharp
// DefaultAgentDecideKilledOrUnconsciousModel (Model) 的典型用法
Game.Current.ReplaceModel<DefaultAgentDecideKilledOrUnconsciousModel>(new MyDefaultAgentDecideKilledOrUnconsciousModel());
```

## 参见

- [完整类目录](../catalog)