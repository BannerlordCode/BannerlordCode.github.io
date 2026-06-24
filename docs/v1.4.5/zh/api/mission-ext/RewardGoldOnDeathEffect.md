<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `RewardGoldOnDeathEffect`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# RewardGoldOnDeathEffect

**Namespace:** TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class RewardGoldOnDeathEffect : MPPerkEffect`
**Base:** `MPPerkEffect`
**File:** `Bannerlord.Source/Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects/RewardGoldOnDeathEffect.cs`

## 概述

`RewardGoldOnDeathEffect` 位于 `TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetIsTeamRewardedOnDeath
`public override bool GetIsTeamRewardedOnDeath()`

**用途 / Purpose:** 获取 `is team rewarded on death` 的当前值。

### CalculateRewardedGoldOnDeath
`public override void CalculateRewardedGoldOnDeath(Agent agent, List<(MissionPeer, int)> teamMembers)`

**用途 / Purpose:** 处理 `calculate rewarded gold on death` 相关逻辑。

## 使用示例

```csharp
var value = new RewardGoldOnDeathEffect();
value.GetIsTeamRewardedOnDeath();
```

## 参见

- [完整类目录](../catalog)