<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `LastRemainingFlagCondition`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# LastRemainingFlagCondition

**Namespace:** TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Conditions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class LastRemainingFlagCondition : MPPerkCondition<MissionMultiplayerFlagDomination>`
**Base:** `MPPerkCondition<MissionMultiplayerFlagDomination>`
**File:** `Bannerlord.Source/Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Conditions/LastRemainingFlagCondition.cs`

## 概述

`LastRemainingFlagCondition` 位于 `TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Conditions`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Conditions` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Check
`public override bool Check(MissionPeer peer)`

**用途 / Purpose:** 处理 `check` 相关逻辑。

### Check
`public override bool Check(Agent agent)`

**用途 / Purpose:** 处理 `check` 相关逻辑。

## 使用示例

```csharp
var value = new LastRemainingFlagCondition();
value.Check(peer);
```

## 参见

- [完整类目录](../catalog)